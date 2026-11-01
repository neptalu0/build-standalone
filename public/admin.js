import { t, translateMsg, applyTranslations, toggleLanguage } from './i18n/index.js';

let token='',poll=null,pairExpiry=0,extensionReady=false,autoDisabled=true;
const $=id=>document.getElementById(id);
const savedKeyName='build-standalone.adminKey';
function forgetKey(){try{localStorage.removeItem(savedKeyName);}catch{}}
try{$('key').value=localStorage.getItem(savedKeyName)||'';}catch{}
const extensionWaiters=new Map();
window.addEventListener('message',event=>{
  if(event.source!==window||event.origin!==location.origin||event.data?.channel!=='build-admin-response')return;
  const pending=extensionWaiters.get(event.data.id);if(!pending)return;extensionWaiters.delete(event.data.id);clearTimeout(pending.timer);
  if(event.data.ok)pending.resolve(event.data);else pending.reject(new Error(event.data.error||t('ext_failed')));
});
function extension(action,data={}){
  return new Promise((resolve,reject)=>{const id=crypto.randomUUID();const timer=setTimeout(()=>{extensionWaiters.delete(id);reject(new Error(t('ext_not_installed')));},action==='start'?10000:1500);
    extensionWaiters.set(id,{resolve,reject,timer});window.postMessage({channel:'build-admin-request',id,action,...data},location.origin);
  });
}
async function extensionState(){
  try{
    const probe=await extension('probe');extensionReady=true;$('extension-status').textContent=t('ext_detected',probe.version);
    const value=await extension('status');$('onboarding-status').replaceChildren();let active=false;
    for(const job of value.jobs||[]){$('onboarding-status').append(element('p',(job.email?job.email+' · ':'')+translateMsg(job.message)));if(!['connected','error','cancelled'].includes(job.stage))active=true;}
    if(value.connectionError)$('onboarding-status').append(element('p',t('ext_err_prefix')+translateMsg(value.connectionError),'error'));
    for(const item of value.reconnect||[])$('onboarding-status').append(element('p',(item.email?item.email+' · ':'')+translateMsg(item.message)));
    $('cancel-onboarding').hidden=!active;return active;
  }catch(e){extensionReady=false;$('extension-status').textContent=translateMsg(e.message);$('cancel-onboarding').hidden=true;return false;}
}
function message(text,bad=false){$('message').textContent=translateMsg(text);$('message').className=bad?'error':'';}
function clearApiAccess(){ $('api-key').value='';$('api-key').type='password';$('toggle-api-key').textContent=t('api_show');$('toggle-api-key').setAttribute('aria-pressed','false'); }
async function copyAccess(id,labelKey){
  if(!$(id).value)return message(t('msg_connect_first'),true);
  try{await navigator.clipboard.writeText($(id).value);message(t('msg_copied',t(labelKey)));}
  catch{$(id).focus();$(id).select();message(t('msg_copy_manual',t(labelKey)),true);}
}
async function api(path,body){
  const response=await fetch(path,{method:body===undefined?'GET':'POST',headers:{Authorization:'Bearer '+token,...(body!==undefined?{'Content-Type':'application/json'}:{})},...(body!==undefined?{body:JSON.stringify(body)}:{})});
  const value=await response.json();if(!response.ok){if(response.status===401)clearApiAccess();throw new Error(translateMsg(value.error?.message)||t('req_failed'));}return value;
}
function element(tag,text,className){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;}
function action(label,fn){const b=element('button',label,'secondary');b.addEventListener('click',()=>perform(b,fn));return b;}
async function perform(button,fn){button.disabled=true;try{await fn();await refresh();}catch(e){message(e.message,true);}finally{button.disabled=button.id==='auto-connect'?autoDisabled:false;}}
async function refresh(){
  const [state,logs]=await Promise.all([api('/admin/state'),api('/admin/logs')]);
  $('mode').textContent=state.mode==='demo'?t('mode_demo'):t('mode_live');$('dashboard').hidden=false;$('auth').hidden=true;
  $('busy').textContent=state.busy?t('status_busy'):t('status_idle');$('queued').textContent=state.queued;
  $('pair-browser').disabled=state.busy||state.mode==='demo';$('base-url').value=location.origin+'/v1';$('bridge-url').textContent=location.origin;
  const onboardingActive=await extensionState();autoDisabled=!extensionReady||state.busy||state.mode==='demo'||onboardingActive;$('auto-connect').disabled=autoDisabled;
  $('pair-browser').disabled=state.busy||state.mode==='demo'||onboardingActive;
  if(pairExpiry&&Date.now()>pairExpiry){$('pairing').hidden=true;$('pair-code').textContent='';pairExpiry=0;}
  const defaultZhNote = 'Google 未提供 Build 订阅剩余次数；显示实际调用状态、冷却及本地成功次数。冷却结束不是已确认的额度重置。';
  $('quota-note').textContent=(!state.pool.quotaNote||state.pool.quotaNote===defaultZhNote)?t('default_quota_note'):state.pool.quotaNote;
  $('accounts').replaceChildren();
  if(!state.accounts.length)$('accounts').append(element('p',t('acct_empty'),'hint'));
  const currentStatuses = t('statuses');
  for(const account of state.accounts){
    const connected=state.connections?.some(c=>c.accountId===account.id&&c.connected);
    const row=element('div',undefined,'account'),head=element('div',undefined,'account-head'),title=element('div');
    title.append(element('strong',account.email),element('small',(account.enabled?t('enabled'):t('disabled'))+' · '+(connected?t('online_note'):t('offline_note'))));head.append(title);
    const controls=element('div',undefined,'row');
    controls.append(action(account.enabled?t('btn_disable'):t('btn_enable'),async()=>{await api('/admin/accounts/enabled',{id:account.id,enabled:!account.enabled});message(t('msg_status_updated'));}));
    if(connected)controls.append(action(t('btn_disconnect_ext'),async()=>{await api('/admin/bridge/disconnect',{id:account.id});message(t('msg_ext_disconnected'));}));
    if(state.busy)for(const b of controls.children)b.disabled=true;
    head.append(controls);row.append(head);
    const modelStatus=element('div',undefined,'model-status'),pool=state.pool.accounts.find(a=>a.id===account.id);
    for(const [model,value] of Object.entries(pool?.models||{}))modelStatus.append(element('span',`${model} · ${account.enabled?(currentStatuses[value.status]||value.status):t('disabled')} · ${t('success_count')}${value.successes}${value.retryAt?t('retry_at')+new Date(value.retryAt).toLocaleTimeString():''}`));
    row.append(modelStatus);$('accounts').append(row);
  }
  $('logs').replaceChildren();for(const item of logs.records){const tr=element('tr');for(const cell of [new Date(item.at).toLocaleString(),item.model||'—',item.stage||item.event,item.status||'—',item.durationMs!==undefined?(item.durationMs/1000).toFixed(2)+' s':'—',[item.code,translateMsg(item.message),item.requestId].filter(Boolean).join(' · ')])tr.append(element('td',String(cell)));$('logs').append(tr);}
}

$('lang-toggle').onclick = () => {
  toggleLanguage();
  if (!token && $('auth').hidden === false) $('mode').textContent = t('mode_unconnected');
  if (token) refresh().catch(() => {});
};

$('login-form').addEventListener('submit',async event=>{event.preventDefault();token=$('key').value.trim();clearApiAccess();try{const access=await api('/admin/client-config');await refresh();$('api-key').value=access.apiKey;if($('remember-key').checked){try{localStorage.setItem(savedKeyName,token);}catch{}}else forgetKey();$('key').value='';message(t('msg_auth_success'));clearInterval(poll);poll=setInterval(()=>refresh().catch(e=>message(e.message,true)),5000);}catch(e){token='';clearApiAccess();message(e.message,true);}});
$('copy-base-url').onclick=()=>copyAccess('base-url','api_base_label');
$('copy-api-key').onclick=()=>copyAccess('api-key','api_key_label');
$('toggle-api-key').onclick=()=>{const show=$('api-key').type==='password';$('api-key').type=show?'text':'password';$('toggle-api-key').textContent=show?t('api_hide'):t('api_show');$('toggle-api-key').setAttribute('aria-pressed',String(show));};
$('remember-key').addEventListener('change',()=>{if(!$('remember-key').checked)forgetKey();});
$('refresh').onclick=()=>perform($('refresh'),async()=>{});
$('auto-connect').onclick=()=>perform($('auto-connect'),async()=>{await extension('probe');const capability=await api('/admin/bridge/automatic',{});await extension('start',{code:capability.code});message(t('msg_browser_opened'));});
$('cancel-onboarding').onclick=()=>perform($('cancel-onboarding'),async()=>{await extension('cancel');message(t('msg_onboarding_cancelled'));});
$('pair-browser').onclick=()=>perform($('pair-browser'),async()=>{const pair=await api('/admin/bridge/pairing',{});pairExpiry=pair.expiresAt;$('pair-code').textContent=pair.code;$('pair-expiry').textContent=t('valid_until')+new Date(pair.expiresAt).toLocaleTimeString();$('pairing').hidden=false;message(t('msg_pair_code_hint'));});
$('disconnect').onclick=()=>{token='';forgetKey();clearApiAccess();$('key').value='';clearInterval(poll);pairExpiry=0;$('pair-code').textContent='';$('pairing').hidden=true;$('dashboard').hidden=true;$('auth').hidden=false;$('mode').textContent=t('mode_unconnected');message(t('msg_logged_out'));};

applyTranslations();
