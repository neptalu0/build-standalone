const translations = {
  zh: {
    title: 'Build 独立服务',
    eyebrow: 'BUILD / STANDALONE',
    heading: 'Build 独立服务',
    subtitle: '账号、调用状态与接入管理',
    mode_unconnected: '未连接',
    mode_demo: 'DEMO · 未调用 Google',
    mode_live: 'LIVE',
    lang_btn: 'English',
    auth_heading: '连接管理端',
    auth_key_label: '管理密钥',
    auth_key_placeholder: '填写安装窗口显示的管理密钥',
    auth_connect_btn: '连接',
    auth_remember_label: '在此浏览器记住管理密钥',
    auth_hint: '登录成功后默认保存，下次自动填写。点击“退出管理端”会清除保存的密钥。API 使用单独的 apiKey。',
    metric_status: '执行状态',
    metric_queued: '排队请求',
    metric_mode: '返回方式',
    metric_mode_val: '完成后返回',
    metric_verify: 'Google 真实验收',
    metric_verify_val: '需独立验收',
    api_heading: 'API 接入',
    api_base_label: 'API 地址（Base URL）',
    api_copy_base: '复制地址',
    api_key_label: 'API 密钥（apiKey）',
    api_show: '显示',
    api_hide: '隐藏',
    api_copy_key: '复制密钥',
    api_hint1: '把这两项填入酒馆或其他客户端。API 密钥与管理密钥不同；退出管理端后会清除页面中的 API 密钥。',
    api_p2: '支持 <code>/v1/models</code> 与 <code>/v1/chat/completions</code>，纯文本输入。示例模型：<code>gemini-4-argon-low</code>、<code>gemini-3.8-flash-medium</code>；无后缀固定 high。',
    api_hint3: 'SSE 等待完整答案后一次返回正文，响应头标记 <code>x-build-streaming: buffered</code>。长历史文件传入不会增加模型上下文上限，token 使用量未知。',
    acct_heading: 'Google 账号',
    acct_refresh: '刷新',
    acct_auto_connect: '登录并自动接入',
    acct_desc: '点击后在当前常用浏览器打开 Build。你完成 Google 登录后，自动新建专用项目、接入扩展并登记账号；再次接入会复用已记住的项目。首次创建可能消耗一次模型额度。',
    acct_ext_checking: '正在检测本机连接器…',
    acct_cancel_onboard: '取消接入',
    acct_details_summary: '首次安装扩展／手动连接',
    acct_details_step1: '在常用 Chrome／Edge 的扩展管理页开启开发者模式，选择“加载解压缩的扩展”，加载本安装目录中的 <code>extensions/build-browser-bridge</code>。首次安装需要你授权；已经安装旧版时点击扩展的重新加载。',
    acct_details_step2: '在同一个浏览器打开本管理页并刷新，然后点击“登录并自动接入”。以后无需复制配对码，也无需手动创建项目。',
    acct_details_step3: '同一扩展还内置酒馆分流，在同一浏览器打开本机酒馆即可；其他地址在扩展弹窗启用。旧酒馆扩展禁用后刷新。已有项目也可使用下面的手动配对码接入。',
    acct_pair_manual: '生成手动配对码',
    acct_bridge_url_label: '本机服务地址：',
    acct_pairing_label: '一次性配对码（5 分钟有效；连接成功后自动导入账号）：',
    acct_hint_footer: '调用期间保持浏览器和专用标签页打开，不要同时手动编辑项目。扩展只在登录完成后连接 Build，Google 密码和验证码由你输入。关闭浏览器或重启服务后再次点击自动接入，复用已登记的项目。取消接入不会删除已创建项目或撤销已提交的初始化请求。',
    acct_empty: '暂无账号。安装本机连接器后，点击“登录并自动接入”。',
    logs_heading: '最近调用',
    logs_hint: '仅记录时间、模型、阶段、状态码等元数据，不记录提示词、回答、密钥或 Cookie。',
    default_quota_note: 'Google 未提供 Build 订阅剩余次数；显示实际调用状态、冷却及本地成功次数。冷却结束不是已确认的额度重置。',
    ext_failed: '扩展连接失败',
    req_failed: '请求失败',
    th_time: '时间',
    th_model: '模型',
    th_stage: '阶段 / 事件',
    th_status: '状态',
    th_duration: '耗时',
    th_reason: '原因 / 请求编号',
    btn_disconnect: '退出管理端',
    footer_text: 'Build Standalone · 独立服务 · 浏览器与 Google 网页行为需在新环境验证',
    status_busy: '执行中',
    status_idle: '空闲',
    enabled: '已启用',
    disabled: '已停用',
    online_note: 'Build 执行连接在线',
    offline_note: 'Build 执行连接离线，当前无法调用；请查看上方连接器状态',
    btn_disable: '停用',
    btn_enable: '启用',
    btn_disconnect_ext: '断开扩展',
    success_count: '成功 ',
    retry_at: ' · 可重试 ',
    ext_detected: v => `已检测到本机连接器 ${v||''}，登录后将自动创建或复用专用项目。`,
    ext_not_installed: '请在安装了 Build 本机连接器的常用 Chrome／Edge 中打开此管理页并刷新',
    ext_err_prefix: '连接器错误：',
    msg_connect_first: '请先连接管理端',
    msg_copied: label => `${label}已复制`,
    msg_copy_manual: label => `自动复制不可用，已选中${label}，请手动复制。`,
    msg_auth_success: '管理端鉴权成功；能否调用请看账号的 Build 执行连接状态。',
    msg_status_updated: '账号状态已更新',
    msg_ext_disconnected: '已断开扩展；Google 登录状态保留在浏览器。',
    msg_browser_opened: '已打开常用浏览器中的 Build。请完成 Google 登录，项目创建和接入会自动继续。',
    msg_onboarding_cancelled: '已取消后续接入步骤；已创建的项目保留。',
    msg_pair_code_hint: '请把配对码填入常用浏览器的 Build 本机连接器。无需管理员密钥或 Cookie。',
    msg_logged_out: '已退出，已清除本浏览器保存的管理密钥',
    valid_until: '有效期至 ',
    statuses: {
      available: '最近成功',
      unverified: '尚未验证',
      cooling: '冷却中',
      login_required: '需重新登录',
      subscription_required: '需订阅',
      permission_required: '模型权限不足',
      connection_required: '需连接',
      disabled: '已停用'
    }
  },
  en: {
    title: 'Build Standalone',
    eyebrow: 'BUILD / STANDALONE',
    heading: 'Build Standalone',
    subtitle: 'Account, Execution & Gateway Management',
    mode_unconnected: 'Not Connected',
    mode_demo: 'DEMO · Google Offline',
    mode_live: 'LIVE',
    lang_btn: '中文',
    auth_heading: 'Admin Login',
    auth_key_label: 'Admin Key',
    auth_key_placeholder: 'Enter the admin key shown during setup',
    auth_connect_btn: 'Connect',
    auth_remember_label: 'Remember admin key in this browser',
    auth_hint: 'Saved by default on login and filled automatically. Clicking "Log Out" clears the stored key. Client API uses a separate apiKey.',
    metric_status: 'Execution Status',
    metric_queued: 'Queued Requests',
    metric_mode: 'Response Mode',
    metric_mode_val: 'Buffered SSE',
    metric_verify: 'Google Verification',
    metric_verify_val: 'Requires Manual Check',
    api_heading: 'API Access',
    api_base_label: 'API Base URL',
    api_copy_base: 'Copy URL',
    api_key_label: 'API Key (apiKey)',
    api_show: 'Show',
    api_hide: 'Hide',
    api_copy_key: 'Copy Key',
    api_hint1: 'Enter these into SillyTavern or other clients. The API key differs from the admin key; logging out clears the API key from this page.',
    api_p2: 'Supports <code>/v1/models</code> and <code>/v1/chat/completions</code> with plain text input. Example models: <code>gemini-4-argon-low</code>, <code>gemini-3.8-flash-medium</code>; unsuffixed defaults to high thinking.',
    api_hint3: 'SSE buffers the complete response before returning, marked with header <code>x-build-streaming: buffered</code>. Long attachment files do not expand context limits, token usage is untracked.',
    acct_heading: 'Google Accounts',
    acct_refresh: 'Refresh',
    acct_auto_connect: 'Login & Auto-Connect',
    acct_desc: 'Opens Google AI Studio Build in your browser. After logging into Google, it creates a dedicated project, connects the extension, and registers the account; future sessions reuse saved projects. Initial creation may consume one model request.',
    acct_ext_checking: 'Checking local extension bridge…',
    acct_cancel_onboard: 'Cancel Onboarding',
    acct_details_summary: 'First-time Extension Install / Manual Pairing',
    acct_details_step1: 'Enable Developer Mode in Chrome/Edge extension settings, select "Load unpacked", and choose <code>extensions/build-browser-bridge</code> from this directory. Grant permissions on first install; click reload if updating an older version.',
    acct_details_step2: 'Open this dashboard in the same browser, refresh, and click "Login & Auto-Connect". No manual pairing codes or project setup needed afterwards.',
    acct_details_step3: 'The same extension includes SillyTavern routing for local instances; enable other origins via the extension popup. Existing projects can also connect using the manual pairing code below.',
    acct_pair_manual: 'Generate Manual Pairing Code',
    acct_bridge_url_label: 'Service URL: ',
    acct_pairing_label: 'One-time pairing code (valid for 5 mins; imports account once connected):',
    acct_hint_footer: 'Keep browser and dedicated Build tab open during requests; do not manually edit the project simultaneously. The extension only connects after login; Google credentials remain in your browser. Reopening the browser automatically reuses saved projects.',
    acct_empty: 'No accounts yet. Install the local browser extension, then click "Login & Auto-Connect".',
    logs_heading: 'Recent Calls',
    logs_hint: 'Only metadata (timestamp, model, stage, status code) is recorded; prompts, completions, keys, and cookies are never logged.',
    default_quota_note: 'Google does not provide remaining Build subscription quotas; displays actual call statuses, cooldowns, and local success counts. The end of a cooldown does not confirm a quota reset.',
    ext_failed: 'Extension connection failed',
    req_failed: 'Request failed',
    th_time: 'Time',
    th_model: 'Model',
    th_stage: 'Stage / Event',
    th_status: 'Status',
    th_duration: 'Duration',
    th_reason: 'Reason / Request ID',
    btn_disconnect: 'Log Out',
    footer_text: 'Build Standalone · Single-process gateway · Browser and Google web behavior must be verified in your environment',
    status_busy: 'Busy',
    status_idle: 'Idle',
    enabled: 'Enabled',
    disabled: 'Disabled',
    online_note: 'Build execution connection online',
    offline_note: 'Build connection offline, calls unavailable; check connector status above',
    btn_disable: 'Disable',
    btn_enable: 'Enable',
    btn_disconnect_ext: 'Disconnect Bridge',
    success_count: 'Successes: ',
    retry_at: ' · Retry at ',
    ext_detected: v => `Detected local extension bridge ${v||''}; will auto-create or reuse dedicated projects upon login.`,
    ext_not_installed: 'Please open this dashboard in Chrome/Edge with the Build extension installed and refresh.',
    ext_err_prefix: 'Bridge Error: ',
    msg_connect_first: 'Please connect to the admin dashboard first',
    msg_copied: label => `${label} copied to clipboard`,
    msg_copy_manual: label => `Auto-copy unavailable; ${label} selected, please copy manually.`,
    msg_auth_success: 'Admin authentication successful; check account connection status for readiness.',
    msg_status_updated: 'Account status updated.',
    msg_ext_disconnected: 'Extension disconnected; Google login session remains intact in browser.',
    msg_browser_opened: 'Opened Build in your browser. Please log in with Google; project creation and pairing will proceed automatically.',
    msg_onboarding_cancelled: 'Cancelled subsequent onboarding steps; existing projects preserved.',
    msg_pair_code_hint: 'Enter the pairing code into the Build browser extension. No admin key or cookies needed.',
    msg_logged_out: 'Logged out; saved admin key cleared from this browser.',
    valid_until: 'Valid until ',
    statuses: {
      available: 'Ready',
      unverified: 'Unverified',
      cooling: 'Cooling down',
      login_required: 'Login required',
      subscription_required: 'Subscription required',
      permission_required: 'Permission denied',
      connection_required: 'Connection required',
      disabled: 'Disabled'
    }
  }
};

const messageDictionary = {
  'Origin 不匹配': 'Origin mismatch (cross-site access denied)',
  '鉴权失败': 'Authentication failed: invalid admin key',
  '请等待当前操作完成': 'Please wait for the current operation to finish',
  '服务正在关闭': 'Service is shutting down',
  '配对码无效或已过期': 'Pairing code is invalid or expired',
  '已改为常用浏览器扩展接入，请生成配对码后连接专用 Build 标签页': 'Extension required; please generate a pairing code and connect via the Build browser extension',
  '浏览器扩展仅允许本机连接': 'Browser extension only allowed to connect locally',
  '此实例不支持扩展连接': 'This instance does not support extension connections',
  '此实例不支持扩展配对': 'This instance does not support extension pairing',
  '此实例不支持扩展接入': 'This instance does not support extension onboarding',
  '路由不存在': 'Route not found',
  '请先完成或取消账号管理操作': 'Please complete or cancel account management operation first',
  '演示模式不打开 Google 登录': 'Demo mode cannot open Google login',
  '演示模式不导入账号': 'Demo mode cannot import accounts',
  '实例不匹配；拒绝停止其他服务': 'Instance ID mismatch; refused to stop other service',
  '账号不存在': 'Account not found',
  '扩展路由不存在': 'Extension route not found',
  '扩展接口需要 POST': 'Extension endpoint requires POST',
  '扩展连接已失效，请重新配对': 'Extension connection expired, please re-pair',
  '自动连接授权已失效，请在管理页重新接入一次': 'Auto-connection authorization expired, please re-pair in the admin dashboard',
  '此账号已停用': 'This account is disabled',
  '该 Google 账号已导入，请使用重新登录': 'This Google account is already imported; please re-login',
  '有请求在执行，请稍后接入账号': 'A request is currently running; please connect account later',
  '请求已取消': 'Request cancelled',
  '客户端已断开': 'Client disconnected',
  '等待你在常用浏览器完成 Google 登录': 'Waiting for you to complete Google login in your browser',
  '正在新建专用 Build 项目（仅提交一次）': 'Creating dedicated Build project (submitted once)',
  '等待 Google 完成专用项目初始化': 'Waiting for Google to finish dedicated project initialization',
  '正在打开已记住的专用项目': 'Opening saved dedicated project',
  '账号、专用项目和扩展已自动接入': 'Account, dedicated project, and extension connected successfully',
  '已取消接入': 'Onboarding cancelled',
  '已自动恢复专用项目连接': 'Automatically restored dedicated project connection',
  '等待 Build 页面就绪': 'Waiting for Build page to be ready',
  '已断开；此浏览器不再自动恢复该账号': 'Disconnected; this browser will no longer auto-reconnect this account',
  '正在核对当前项目并连接…': 'Verifying project and connecting…',
  '扩展连接失败，请检查本机服务和当前项目。': 'Extension connection failed; please check the local service and current project.',
  '正在开始接入，请勿重复点击': 'Starting connection, please do not click repeatedly',
  '已有接入流程，请先完成或取消': 'An onboarding process is already in progress, please complete or cancel it first',
  '接入凭据已过期，请重新开始；已创建的专用项目会保留': 'Connection credentials expired, please start over; created projects will be preserved',
  '请使用管理页的“登录并自动接入”': 'Please use "Login & Auto-Connect" on the admin page',
  '请在安装了 Build 本机连接器的常用 Chrome／Edge 中打开此管理页并刷新': 'Please open this dashboard in Chrome/Edge with the Build extension installed and refresh',
  '管理端鉴权成功；能否调用请看账号的 Build 执行连接状态。': 'Admin authentication successful; check account connection status for readiness.',
  '已打开常用浏览器中的 Build。请完成 Google 登录，项目创建和接入会自动继续。': 'Opened Build in your browser. Please log in with Google; project creation and pairing will proceed automatically.',
  '已取消后续接入步骤；已创建的项目保留。': 'Cancelled subsequent onboarding steps; existing projects preserved.',
  '请把配对码填入常用浏览器的 Build 本机连接器。无需管理员密钥或 Cookie。': 'Enter the pairing code into the Build browser extension. No admin key or cookies needed.',
  '已退出，已清除本浏览器保存的管理密钥': 'Logged out; saved admin key cleared from this browser.',
  '账号状态已更新': 'Account status updated.',
  '已断开扩展；Google 登录状态保留在浏览器。': 'Extension disconnected; Google login session remains intact in browser.',
  '请求失败': 'Request failed',
  '扩展连接失败': 'Extension connection failed'
};

function translateMsg(str) {
  if (!str) return '';
  if (currentLang === 'zh') return str;
  return messageDictionary[str] || str;
}

let currentLang = 'zh';
try { currentLang = localStorage.getItem('build-lang') || 'zh'; } catch {}
const t = (key, ...args) => {
  const dict = translations[currentLang] || translations.zh;
  const val = dict[key] ?? translations.zh[key] ?? key;
  return typeof val === 'function' ? val(...args) : val;
};

function applyTranslations() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  document.title = t('title');
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = t('lang_btn');
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const k = el.getAttribute('data-i18n');
    if (k) el.textContent = t(k);
  }
  for (const el of document.querySelectorAll('[data-i18n-html]')) {
    const k = el.getAttribute('data-i18n-html');
    if (k) el.innerHTML = t(k);
  }
  for (const el of document.querySelectorAll('[data-i18n-placeholder]')) {
    const k = el.getAttribute('data-i18n-placeholder');
    if (k) el.placeholder = t(k);
  }
  const qn = document.getElementById('quota-note');
  if (qn && (!qn.textContent || qn.textContent === translations.zh.default_quota_note || qn.textContent === translations.en.default_quota_note)) {
    qn.textContent = t('default_quota_note');
  }
}

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
  $('logs').replaceChildren();for(const item of logs.records){const tr=element('tr');for(const cell of [new Date(item.at).toLocaleString(),item.model||'—',item.stage||item.event,item.status||'—',item.durationMs!==undefined?(item.durationMs/1000).toFixed(2)+' s':'—',[item.code,item.message,item.requestId].filter(Boolean).join(' · ')])tr.append(element('td',String(cell)));$('logs').append(tr);}
}

$('lang-toggle').onclick = () => {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  try { localStorage.setItem('build-lang', currentLang); } catch {}
  applyTranslations();
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
