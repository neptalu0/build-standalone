import zh from './zh.js';
import en from './en.js';

export const translations = { zh, en };

export const messageDictionary = {
  // Server admin API
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
  'enabled 必须为布尔值': 'enabled must be a boolean',
  '仍有请求或管理操作进行中，未停止服务': 'Requests or operations still in progress; service not stopped',
  '此实例未配置进程管理': 'Process management is not configured for this instance',
  '请求正文过大': 'Request body too large',
  'JSON 格式无效': 'Invalid JSON format',
  '需要 application/json': 'application/json required',

  // Extension onboarding & resume
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
  '已打开 Build，但尚未收到页面回报。重新加载扩展后，请刷新这个 Build 标签页；并确认扩展已获准在 AI Studio 运行。': 'Build opened, but no response received yet. Please reload the extension, refresh this Build tab, and verify extension permissions.',
  '等待原接入标签页返回 Build。若你已在其他标签页登录，请回到自动打开的标签页刷新。': 'Waiting for onboarding tab to return to Build. If you logged in on another tab, please switch back to the auto-opened tab and refresh.',
  'Google Build 账号核对主页加载超时；尚未发送生成请求，请检查浏览器网络': 'Google Build homepage verification timed out; check browser network',
  'Google Build 账号核对页面未能运行读取器；请刷新页面或重新加载连接器': 'Google Build verification page failed to run reader script; please refresh or reload extension',
  'Google Build 主页已响应，但未找到账号控件；请检查官方验证或页面提示': 'Google Build homepage loaded but account control not found; check Google security prompt',
  'Google Build 账号控件未提供邮箱；请确认登录和官方验证已完成': 'Google Build account control provided no email; verify login is complete',
  'Google Build 账号核对跳转到登录页；请重新登录当前账号': 'Google Build verification redirected to login page; please re-login',
  'Google 账号核对页面发生变化；已停止发送': 'Google account verification page changed unexpectedly; stopped',
  'Google 账号标识不唯一；已停止发送': 'Google account identity ambiguous; stopped',
  '专用 Build 项目尚未就绪；尚未发送生成请求': 'Dedicated Build project not ready; no generation request sent',

  // Inference & executor failures (visible in calls log)
  'Google 已明确拒绝本次内容；未重试或更换账号': 'Google explicitly refused this prompt (content policy violation); no retry attempted',
  'Build 上下文文件清理或取消未完成；请在独立项目中处理后重试': 'Build context file cleanup failed; please clean up in project and retry',
  '浏览器登录身份与所选账号不一致；已停止发送': 'Browser logged-in account does not match selected account; stopped',
  'Build 执行失败': 'Build execution failed',
  '客户端已断开': 'Client disconnected',
  '请求已取消': 'Request cancelled',
  '等待空闲 Build 执行位置超时，尚未提交 Google': 'Timed out waiting for free Build execution slot; not submitted to Google',
  'Build 聊天附件超过 8 MiB，请缩短历史': 'Build chat attachments exceed 8 MiB; please truncate chat history',
  'Build 输入框内容超过 1 MiB 安全大小限制；未截断预设': 'Prompt text exceeds 1 MiB limit; preset text not truncated',
  'Build 聊天附件草稿未清理完成': 'Build attachment draft cleanup not complete',
  'Build 聊天附件上传控件未就绪': 'Build attachment upload input not ready',
  'Build 输入框仍有其他附件，已阻止混合发送': 'Build composer still has other attachments; prevented mixed send',
  '请在 Build 页面确认一次首次附件上传提示，然后重新发送': 'Please acknowledge the first-time attachment prompt in Build, then retry',
  'Google 页面报告聊天附件上传失败': 'Google reported attachment upload failed',
  'Build 草稿附件与本次请求不一致': 'Build draft attachments do not match request',
  'Build 聊天附件上传达到配置的执行时限': 'Build attachment upload timed out',
  'contents 不能为空': 'contents cannot be empty',
  'Build 订阅聊天暂不支持 API 工具调用': 'Build subscription chat does not currently support tool calling',
  'Build 订阅聊天当前仅支持文本': 'Build subscription chat currently only supports plain text',
  'Build 订阅聊天暂不支持强制 JSON': 'Build subscription chat does not support JSON schema enforcement',
  'Google Build 页面返回错误': 'Google Build page returned an error',
  'Build 页面操作超时': 'Build page operation timed out',
  'Build 发送按钮未就绪': 'Build send button not ready',
  'Build 聊天输入框未就绪': 'Build chat input not ready',
  'Build 账号池的可用账号均已限额，冷却后自动重试；也可以继续导入账号': 'All available Build accounts exhausted quota; will retry after cooldown',
  'Build 可用账号的应用尚未就绪或模型权限不足，请检查账号接入状态后重试': 'Available Build account app not ready or permission denied; check status and retry',
  '酒馆上下文封装损坏': 'SillyTavern context payload corrupted',
  '不支持的酒馆适配版本': 'Unsupported SillyTavern adapter version',
  '酒馆适配器已阻止请求，请查看酒馆中的 Build 分流提示；未调用 Google': 'SillyTavern adapter blocked request; check SillyTavern notice',
  '不支持的酒馆生成类型': 'Unsupported SillyTavern generation type',
  '酒馆分段数量无效': 'Invalid SillyTavern segment count',
  '酒馆分段顺序不连续': 'SillyTavern segment sequence discontinuous',
  '同一条酒馆消息的角色不一致': 'Inconsistent roles within the same SillyTavern message',
  '酒馆消息顺序不连续': 'SillyTavern message sequence discontinuous',
  '酒馆角色名称无效': 'Invalid SillyTavern character name',
  '输入框原文超过 1 MiB 安全大小限制；未移入文件或截断': 'Prompt text exceeds 1 MiB limit; not truncated or moved to file',

  // UI action toasts
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

export let currentLang = 'zh';
try { currentLang = localStorage.getItem('build-lang') || 'zh'; } catch {}

export const t = (key, ...args) => {
  const dict = translations[currentLang] || translations.zh;
  const val = dict[key] ?? translations.zh[key] ?? key;
  return typeof val === 'function' ? val(...args) : val;
};

export function translateMsg(str) {
  if (!str) return '';
  if (currentLang === 'zh') return str;
  return messageDictionary[str] || str;
}

export function setLanguage(lang) {
  currentLang = lang === 'en' ? 'en' : 'zh';
  try { localStorage.setItem('build-lang', currentLang); } catch {}
  applyTranslations();
  return currentLang;
}

export function toggleLanguage() {
  return setLanguage(currentLang === 'zh' ? 'en' : 'zh');
}

export function applyTranslations() {
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
