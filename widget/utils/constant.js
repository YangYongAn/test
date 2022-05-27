export const avmContentList = [{
  type: 'base',
  text: '容器组件',
  tab: 'baseContainer',
  icon: 'avm_base_icon',
  children: [{
    text: 'view',
    component: 'avm-base-view'
  }, {
    text: 'swiper',
    component: 'avm-base-swiper'
  }, {
    text: 'scroll-view',
    component: 'avm-base-scroll-view'
  }, {
    text: 'list-view',
    component: 'avm-base-list-view'
  }, {
    text: 'grid-view',
    component: 'avm-base-grid-view'
  }, {
    text: 'refresh',
    component: 'avm-base-refresh'
  }, {
    text: 'frame',
    component: 'avm-base-frame'
  }, {
    text: 'frame-group',
    component: 'avm-base-frame-group'
  }]
}, {
  type: 'base',
  text: '表单组件',
  tab: 'baseForm',
  icon: 'avm_form_icon',
  children: [{
    text: 'input',
    component: 'avm-base-input'
  }, {
    text: 'textarea',
    component: 'avm-base-textarea'
  }, {
    text: 'switch',
    component: 'avm-base-switch'
  }, {
    text: 'slider',
    component: 'avm-base-slider'
  }, {
    text: 'picker',
    component: 'avm-base-picker'
  }, {
    text: 'checkbox',
    component: 'avm-base-checkbox'
  }, {
    text: 'checkbox-group',
    component: 'avm-base-checkbox-group'
  }, {
    text: 'radio',
    component: 'avm-base-radio'
  }, {
    text: 'radio-group',
    component: 'avm-base-radio-group'
  }, {
    text: 'form',
    component: 'avm-base-form'
  }]
}, {
  type: 'base',
  text: '展示组件',
  tab: 'baseShow',
  icon: 'avm_show_icon',
  children: [{
    text: 'text',
    component: 'avm-base-text'
  }, {
    text: 'image',
    component: 'avm-base-image'
  }, {
    text: 'button',
    component: 'avm-base-button'
  }, {
    text: 'rich-text',
    component: 'avm-base-rich-text'
  }, {
    text: 'video',
    component: 'avm-base-video'
  }, {
    text: 'progress',
    component: 'avm-base-progress'
  }, {
    text: 'camera',
    component: 'avm-base-camera'
  }]
}, {
  type: 'avm',
  text: '基础组件',
  tab: 'avmBase',
  icon: 'avm_base_icon',
  children: [{
    text: 'Button 按钮',
    component: 'demo-button'
  },
  // {
  //   text: 'icon 图标',
  //   component: 'demo-icon'
  // },
  {
    text: 'List 列表',
    component: 'demo-list'
  }, {
    text: 'Space 间距',
    component: 'demo-space'
  }]
}, {
  type: 'avm',
  text: '数据展示',
  tab: 'avmDataShow',
  icon: 'avm_form_icon',
  children: [{
    text: 'Badge 徽标',
    component: 'demo-badge'
  }, {
    text: 'Card 卡片',
    component: 'demo-card'
  }, {
    text: 'Image 图片',
    component: 'demo-image'
  }, {
    text: 'ImageViewer 图片查看器',
    component: 'demo-image-viewer'
  }, {
    text: 'InfiniteScroll 无限滚动',
    component: 'demo-infinite-scroll'
  }, {
    text: 'Steps步骤条',
    component: 'demo-steps'
  }, {
    text: 'Swiper 走马灯',
    component: 'demo-swiper'
  }, {
    text: 'Tag 标签',
    component: 'demo-tag'
  }]
}, {
  type: 'avm',
  text: '数据录入',
  tab: 'avmDataEntry',
  icon: 'avm_show_icon',
  children: [{
    text: 'CheckList 可勾选列表',
    component: 'demo-checklist'
  }, {
    text: 'Checkbox 复选框',
    component: 'demo-checkbox'
  }, {
    text: 'Input 输入框',
    component: 'demo-input'
  }, {
    text: 'Radio 单选框',
    component: 'demo-radio'
  }, {
    text: 'Rate 评分',
    component: 'demo-rate'
  }, {
    text: 'Search 搜索框',
    component: 'demo-search'
  }, {
    text: 'Selector 选择组',
    component: 'demo-selector'
  }, {
    text: 'Stepper 步进器',
    component: 'demo-stepper'
  }, {
    text: 'Switch 开关',
    component: 'demo-switch'
  }, {
    text: 'TextArea 文本域',
    component: 'demo-textarea'
  }]
}, {
  type: 'avm',
  text: '反馈',
  tab: 'avmTickling',
  icon: 'avm_tick_icon',
  children: [{
    text: 'ActionSheet 动作面板',
    component: 'demo-action-sheet'
  }, {
    text: 'Empty 空状态',
    component: 'demo-empty'
  }, {
    text: 'ErrorBlock 异常',
    component: 'demo-error-block'
  }, {
    text: 'Loading 加载中',
    component: 'demo-loading'
  }, {
    text: 'Mask 遮罩层',
    component: 'demo-mask'
  }, {
    text: 'ProgressBar 进度条',
    component: 'demo-progress-bar'
  }, {
    text: 'Result 结果',
    component: 'demo-result'
  }]
}, {
  type: 'avm',
  text: '布局和导航',
  tab: 'avmLayout',
  icon: 'avm_layout_icon',
  children: [{
    text: 'Collapse 折叠面板',
    component: 'demo-collapse'
  }, {
    text: 'Divider 分割线',
    component: 'demo-divider'
  }, {
    text: 'FloatingPanel 浮动面板',
    component: 'demo-floating-panel'
  }, {
    text: 'Grid 栅格',
    component: 'demo-grid'
  }, {
    text: 'NavBar 导航栏',
    component: 'demo-nav-bar'
  }, {
    text: 'Popup 弹出层',
    component: 'demo-popup'
  }, {
    text: 'SideBar 侧边导航',
    component: 'demo-side-bar'
  }, {
    text: 'TabBar 标签栏',
    component: 'demo-tab-bar'
  }, {
    text: 'Tabs 标签页',
    component: 'demo-tabs'
  }]
}, {
  type: 'avm',
  text: '其他',
  tab: 'avmOther',
  icon: 'avm_other_icon',
  children: [{
    text: 'DesenseText 脱敏',
    component: 'demo-desense-text'
  }, {
    text: 'Dropdown 下拉菜单',
    component: 'demo-dropdown'
  },
  // {
  //   text: 'Ellipsis 文本省略',
  //   component: 'demo-ellipsis'
  // }, 
  {
    text: 'ImageUploader 图片上传',
    component: 'demo-image-uploader'
  }, {
    text: 'NumberKeyboard 数字键盘',
    component: 'demo-number-keyboard'
  }, {
    text: 'TreeSelect 级联选择器',
    component: 'demo-tree-select'
  }]
}]

export const apiList = [{
  name: '属性',
  icon: 'api_property_icon',
  children: [{
    name: 'appId',
    desc: ['应用的 ID，可以在网站控制台概览里面查看，字符串类型'],
    sampleCode: ['var appId = api.appId; //比如： A6980386445546'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'appName',
    desc: ['应用在桌面显示名称，字符串类型'],
    sampleCode: ['var appName = api.appName; //比如： AppLoader'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'appVersion',
    desc: ['应用版本号，字符串类型'],
    sampleCode: ['var appVersion = api.appVersion; // 比如： 1.0.0'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'systemType',
    desc: ['系统类型，字符串类型'],
    enum: `ios          //iOS系统
android        //Android系统
win            //Windows系统
wp             //Windows Phone系统`,
    sampleCode: ['var systemType = api.systemType; // 比如： ios'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'systemVersion',
    desc: ['手机平台的系统版本，字符串类型'],
    sampleCode: ['var systemVersion = api.systemVersion;  // 比如： 8.0'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'version',
    desc: ['引擎版本信息，字符串类型'],
    sampleCode: ['var version = api.version;  //比如： 1.0.0'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'language',
    desc: ['当前系统语言，字符串类型'],
    sampleCode: ['var language = api.language;  //比如： zh-cn'],
    usability: ['iOS系统，Android系统', '可提供的3.0.13及更高版本']
  }, {
    name: 'deviceId',
    desc: ['设备唯一标识，字符串类型', '因系统限制，iOS系统上面无法获取设备唯一标识udid、IMEI号、Mac地址等信息，这里返回的是与证书相关联的uuid，即使应用卸载了重新安装值也不会变化。', '安卓部分系统也存在限制，一些设备上无法获取IMEI号、Mac地址等信息：安卓9.0及之前的系统中，在动态申请“获取手机信息”权限后，可获得IMEI号，而安卓10及以上版本，系统则完全禁止获取IMEI。因此，综合安卓系统的实际情况，deviceId的返回值优先级如下：若当前设备能正常获取IMEI，则返回IMEI号；若IMEI号异常，则返回系统安全码ANDROID_ID；若ANDROID_ID异常，则返回设备MAC地址；若MAC地址异常，则返回设备序列号；若序列号异常，则随机生成一个UUID。该UUID的生命周期自生成起，直至APP被卸载，若APP在同一个设备中被重新安装，将生成新的UUID。'],
    sampleCode: ['var deviceId = api.deviceId;  //比如： FC408F8B-9598-48B6-A740-B9037ADCXXXE'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'deviceToken',
    desc: ['iOS中用于推送的DeviceToken，如果未添加相关推送模块，或者云编译的mobileprovision证书未开启推送功能，则可能会返回空字符串，字符串类型'],
    sampleCode: ['var deviceToken = api.deviceToken;  //比如： a22241adab6c68b3687a9f0f086c540341f4b3f010546d4af4834ada32281615'],
    usability: ['iOS系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'deviceModel',
    desc: ['设备型号，字符串类型', '注：对于2017年秋之前发布的iOS设备，引擎对原始的型号值做了映射，比如iPhone 7上面会直接返回iPhone 7；而对于2017年秋及之后发布的iOS设备，返回的值则是原始的设备型号值，比如在iPhone 8上面返回的可能是iPhone10,1而不是iPhone 8。可以在<a>https://www.theiphonewiki.com/wiki/Models</a>查询iOS设备型号。'],
    sampleCode: ['var deviceModel = api.deviceModel;  // 比如iPhone X的型号： iPhone10,3'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'deviceName',
    desc: ['设备名称，字符串类型'],
    sampleCode: ['var deviceName = api.deviceName;  // 比如：“柚子”的 iPhone'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'uiMode',
    desc: ['设备类型，字符串类型'],
    enum: `pad
phone
tv
car
desk
watch`,
    sampleCode: ['var uiMode = api.uiMode;  // 比如：phone'],
    usability: ['iOS系统，Android系统', '可提供的1.2.10及更高版本']
  }, {
    name: 'platform',
    desc: ['当前运行平台，字符串类型'],
    enum: `app       // 表示当前运行环境为 App 端
web       // 表示当前运行环境为 Web 端
mp        // 表示当前运行环境为小程序端`,
    sampleCode: ['var platform = api.platform;  // 比如：app'],
    usability: ['iOS系统，Android系统', '可提供的1.3.68及更高版本']
  }, {
    name: 'operator',
    desc: ['运营商名称，若未获取到则返回none，字符串类型'],
    sampleCode: 'var operator = api.operator;  // 比如：中国移动',
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'connectionType',
    desc: ['当前网络连接类型，如 2g、3g、4g、wifi 等，字符串类型'],
    enum: `unknown            //未知
ethernet        //以太网
wifi            //wifi
2g                //2G网络
3g                //3G网络
4g                //4G网络
none            //无网络`,
    sampleCode: 'var connectionType = api.connectionType;  //比如： wifi',
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'fullScreen',
    desc: ['应用是否全屏，布尔类型，只支持iOS'],
    sampleCode: ['var fullScreen = api.fullScreen;  // 比如： true'],
    usability: ['iOS系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'screenWidth',
    desc: ['屏幕分辨率宽，数字类型'],
    sampleCode: ['var screenWidth = api.screenWidth;  // 比如： 640'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'screenHeight',
    desc: ['屏幕分辨率高，数字类型'],
    sampleCode: ['var screenHeight = api.screenHeight;  // 比如：960'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'winName',
    desc: ['当前 window 名称，字符串类型', '该属性值为 openWin() 时传递的 name 参数值，注意首页的名称为 root'],
    sampleCode: ['var winName = api.winName;  //比如： root'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'winWidth',
    desc: ['当前 window 宽度，数字类型', '此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winWidth 为 320，因此前端需根据 winWidth 和 winHeight 来进行布局'],
    sampleCode: ['var winWidth = api.winWidth;  // 比如： 320'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'winHeight',
    desc: ['当前 window 高度，数字类型', '此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winHeight 为 568（若不使用iOS7风格则为 548），因此前端需根据 winWidth 和 winHeight 来进行布局'],
    sampleCode: ['var winHeight = api.winHeight;  // 比如： 568'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'frameName',
    desc: ['frame 名称，字符串类型', '若当前环境为 window 中，则该属性值为空字符串'],
    sampleCode: ['var frameName = api.frameName;  //比如： trans-con'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'frameWidth',
    desc: ['frame 宽度，数字类型', '若当前环境为 window 中，则值和 winWidth 相同'],
    sampleCode: ['var frameWidth = api.frameWidth;  // 比如： 320'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'frameHeight',
    desc: ['frame 高度，数字类型', '若当前环境为 window 中，则值和 winHeight 相同'],
    sampleCode: ['var frameHeight = api.frameHeight;  // 比如： 504'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'safeArea',
    desc: ['页面不被其它内容（如状态栏）遮住的区域，JSON对象', '通过safeArea能够知道当前页面哪些地方被遮住，从而做出相应的调整，保证页面重要元素不被遮挡住。'],
    enum: `{
  top:            // 安全区域上边缘，对于沉浸式下window中该值通常为状态栏高度，全屏或非沉浸式下为0（iPhone X竖屏时全屏状态下也为44）
  left:            // 安全区域左边缘，通常为0（iPhone X横屏时为44）
  bottom:            // 安全区域下边缘，通常为0（iPhone X竖屏时为34，横屏时为21）
  right:            // 安全区域右边缘，通常为0（iPhone X横屏时为44）
}`,
    sampleCode: 'var safeArea = api.safeArea;        // JSON对象，如{top:20, left:0, bottom:0, right:0}',
    usability: ['iOS系统，Android系统', '可提供的1.2.33及更高版本']
  }, {
    name: 'pageParam',
    desc: ['页面参数，JSON 对象类型', '用于获取页面间传递的参数值，为 openWin()、openFrame() 等方法中的 pageParam 参数对应值'],
    sampleCode: ['var pageParam = api.pageParam; //比如： {"name" : "tans-con"}'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'wgtParam',
    desc: ['widget 参数，JSON 对象类型', '用于获取 widget 间传递的参数值，为 openWidget() 方法中的 wgtParam 参数对应值'],
    sampleCode: ['var wgtParam = api.wgtParam;  //比如： {"name": "API Demo"}'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'appParam',
    desc: ['当应用被第三方应用打开时，传递过来的参数，字符串类型', '建议通过appintent事件监听应用被第三方应用调起，并在事件回调里面获取参数进行处理。'],
    sampleCode: ['var appParam = api.appParam;  //比如： {"name": "API Demo"}'],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'statusBarAppearance',
    desc: ['当前应用状态栏是否支持沉浸式效果，布尔类型'],
    sampleCode: ['var statusBarAppearance = api.statusBarAppearance; // 比如： true'],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'wgtRootDir',
    desc: ['widget: //协议对应的真实目录，即 widget 网页包的根目录，字符串类型', '注意该目录为只读，不要往该目录下面写文件'],
    sampleCode: ['var wgtRootDir = api.wgtRootDir;', '/*', '比如：', '/private/var/mobile/Containers/Bundle/Application/56218B5B-1B59-48CD-8080-DAC54DB46446/UZApp.app/widget', '*/'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'fsDir',
    desc: ['fs: //协议对应地真实目录，字符串类型'],
    sampleCode: ['var fsDir = api.fsDir; ', '/*', '比如：', '/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/A123456789', '*/'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'cacheDir',
    desc: ['cache://协议对应的真实目录，字符串类型', 'iOS 平台下载的文件一般存放于该目录下，否则提交 AppStore 审核时可能会不通过，且此目录下的内容在手机备份时不会被备份'],
    sampleCode: ['var cacheDir = api.cacheDir;', '/*', '比如：', '/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Library/Caches/APICloud/Cache/XXXXXX', '*/'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'boxDir',
    desc: ['box://协议对应的真实目录，字符串类型', 'iOS上面在应用Documents下，安卓上面在系统为app分配的沙箱下，root或者越狱的手机可看到。'],
    sampleCode: ['var boxDir = api.boxDir; ', '/*', '比如：', '/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/box', '*/'],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'debug',
    desc: ['获取config.xml配置的debug字段的值。'],
    sampleCode: ['var debug = api.debug;  // 比如： true'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'channel',
    desc: ['渠道号，字符串类型'],
    sampleCode: ['var channel = api.channel; //如：Apple App Store'],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'jailbreak',
    desc: ['设备是否越狱，布尔类型'],
    sampleCode: ['var jailbreak = api.jailbreak; //如：false']
  }, {
    name: 'isRecoveryMode',
    desc: ['使用WKWebView加载页面时，若配置了WKWebView渲染进程崩溃后刷新当前页面，则刷新后该属性值为true。只支持iOS，布尔类型'],
    sampleCode: ['if (api.isRecoveryMode) {', ' // to do', '}'],
    usability: ['iOS系统，Android系统', '可提供的1.2.9及更高版本']
  }]
}, {
  name: '窗口系统',
  icon: 'api_win_icon',
  children: [
    {
    name: 'openWin',
    desc: ['打开window, 窗口操作', '若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。', 'openWin({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'window名字'
      }]
    }, {
      tip: 'url',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。'
      }]
    }, {
      tip: 'data',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据'
      }]
    }, {
      tip: 'headers',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）请求头'
      }]
    }, {
      tip: 'singleInstance',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）设置该window是否为单例对象。若设置为单例对象，当调用closeWin方法关闭时，window将只是从屏幕移除而不会被销毁，下次再打开时将直接使用已存在的window，而不会再重新创建。'
      }]
    }, {
      tip: 'avm',
      desc: [{
        type: '布尔',
        default: '若在config.xml里面配置了avm字段，则默认值为配置的值，否则为false',
        desc: '（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。'
      }]
    }, {
      tip: 'useWKWebView',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否使用WKWebView来加载页面。参考WKWebView介绍。https://developer.yonyou.com/thread-151904-1-1.html'
      }]
    }, {
      tip: 'allowAccessFromFile',
      desc: [{
        type: '布尔',
        default: '全局加密下为false',
        desc: '（可选项）设置是否可以在本地页面中访问本地或远程资源，为保证代码安全，在开启全局加密情况下默认禁止访问。只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'historyGestureEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'syncCookie',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'pageParam',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）页面参数，新页面中可以通过 api.pageParam 获取'
      }]
    }, {
      tip: 'bounces',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为 false 描述：（可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。'
      }]
    }, {
      tip: 'bgColor',
      desc: [{
        type: '字符串',
        default: '若在 config.xml 里面配置了 windowBackground，则默认值为配置的值，否则透明',
        desc: '（可选项）背景色，支持图片和颜色，格式为 #fff、#ffffff、rgba(r,g,b,a)等，图片路径支持 fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径'
      }]
    }, {
      tip: 'scrollToTop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）页面内容超出后是否可以滚动，只支持iOS'
      }]
    }, {
      tip: 'vScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示垂直滚动条'
      }]
    }, {
      tip: 'hScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示水平滚动条'
      }]
    }, {
      tip: 'scaleEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面是否可以缩放'
      }]
    }, {
      tip: 'hideTopBar',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否隐藏原生navigationBar控件，该字段只 iOS 有效'
      }]
    }, {
      tip: 'hideBottomBar',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否隐藏原生tabBar控件，该字段只 iOS 有效'
      }]
    }, {
      tip: 'slidBackEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只 iOS 有效'
      }]
    }, {
      tip: 'slidBackType',
      desc: [{
        type: '字符串',
        default: 'full',
        desc: '（可选项）当支持滑动返回时，设置手指在页面右滑的有效作用区域。取值范围（full:整个页面范围都可以右滑返回，edge:在页面左边缘右滑才可以返回），该字段只iOS有效'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时使用默认动画',
        fields: `{
  type:"none",         //动画类型（详见动画类型常量）
  subType:"from_right",//动画子类型（详见动画子类型常量）
  duration:300         //动画过渡时间，默认300毫秒
}

type 取值范围：
none     //无动画效果
push     //新视图将旧视图推开
movein   //新视图移到旧视图上面
fade     //交叉淡化过渡（不支持过渡方向）
flip     //翻转效果
reveal   //将旧视图移开,显示下面的新视图
ripple   //滴水效果（不支持过渡方向）
curl     //向上翻一页
un_curl  //向下翻一页
suck     //收缩效果（不支持过渡方向）
cube     //立方体翻滚效果

subType 取值范围：
from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画
（Android系统flip，ripple，curl，un_curl，suck，cube 类型不支持）`
      }]
    }, {
      tip: 'progress',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）页面加载进度配置信息，若不传则无加载进度效果',
        fields: `{
  type:    //加载进度效果类型，默认值为 default，取值范围为 default|page，为 page 时，进度效果为仿浏览器类型，固定在页面的顶部
  title:   //type 为 default 时显示的加载框标题，字符串类型
  text:    //type 为 default 时显示的加载框内容，字符串类型
  color:   //type 为 page 时进度条的颜色，默认值为 #45C01A，支持#FFF，#FFFFFF，rgb(255,255,255)，rgba(255,255,255,1.0)等格式
  height:  //type 为 page 时进度条高度，默认值为3，数字类型
}`
      }]
    }, {
      tip: 'delay',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）window 显示延迟时间，适用于将被打开的 window 中可能需要打开有耗时操作的模块时，可延迟 window 展示到屏幕的时间，保持 UI 的整体性'
      }]
    }, {
      tip: 'reload',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行'
      }]
    }, {
      tip: 'allowEdit',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许长按页面时弹出选择菜单'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: 'auto',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用',
        fields: `resize    //若键盘盖住输入框，页面会自动上移
pan        //若键盘盖住输入框，页面不会自动上移
auto       //默认值，由系统决定如何处理，iOS平台该字段等同于resize`
      }]
    }, {
      tip: 'softInputDismissMode',
      desc: [{
        type: '字符串数组',
        default: "['tap']",
        desc: '（可选项）收起键盘的方式，只iOS有效。',
        fields: `tap       //点击页面收起键盘，可以和drag或interactive同时使用
drag         //拖拽页面时收起键盘，可以和tap同时使用
interactive  //在键盘和页面交界处上下滑动收起键盘，可以和tap同时使用`
      }]
    }, {
      tip: 'softInputBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示键盘上方的工具条。只支持iOS'
      }]
    }, {
      tip: 'overScrollMode',
      desc: [{
        type: '字符串',
        default: 'never',
        desc: '（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。',
        fields: `never            //永远不显示
always           //总是显示
scrolls          //只有当页面内容超出设备屏幕大小，发生滚动行为时显示，建议设置为该模式。`
      }]
    }, {
      tip: 'dragAndDrop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS'
      }]
    }, {
      tip: 'hideHomeIndicator',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS'
      }]
    }, {
      tip: 'defaultRefreshHeader',
      desc: [{
        type: '字符串',
        default: 'pull',
        desc: '（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe'
      }]
    }, {
      tip: 'customRefreshHeader',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: 'auto',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用'
      }]
    }],
    sampleCode: [`api.openWin({
    name: 'page1',
    url: './page1.html',
    pageParam: {
        name: 'test'
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeWin',
    desc: ['关闭 window', 'closeWin({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）window 名字，不传时关闭当前 window，为 root 时无效'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时使用默认动画',
        fields: `{
  type:"none",                //动画类型（详见动画类型常量）
  subType:"from_right",       //动画子类型（详见动画子类型常量）
  duration:300                //动画过渡时间，默认300毫秒
}

type 取值范围：

none            //无动画效果
push            //新视图将旧视图推开
movein          //新视图移到旧视图上面
fade            //交叉淡化过渡（不支持过渡方向）
flip            //翻转效果
reveal          //将旧视图移开,显示下面的新视图
ripple          //滴水效果（不支持过渡方向）
curl            //向上翻一页
un_curl         //向下翻一页
suck            //收缩效果（不支持过渡方向）
cube            //立方体翻滚效果

subType 取值范围：

from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画`
      }]
    }],
    sampleCode: [`//关闭当前window，使用默认动画
api.closeWin();

//关闭指定window，若待关闭的window不在最上面，则无动画
api.closeWin({
    name: 'page1'
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeToWin',
    desc: ['关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭。', 'closeToWin({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'window 名字'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时使用默认动画',
        fields: `{
  type:"none",                //动画类型（详见动画类型常量）
  subType:"from_right",       //动画子类型（详见动画子类型常量）
  duration:300                //动画过渡时间，默认300毫秒
}

type 取值范围：

none            //无动画效果
push            //新视图将旧视图推开
movein          //新视图移到旧视图上面
fade            //交叉淡化过渡（不支持过渡方向）
flip            //翻转效果
reveal          //将旧视图移开,显示下面的新视图
ripple          //滴水效果（不支持过渡方向）
curl            //向上翻一页
un_curl         //向下翻一页
suck            //收缩效果（不支持过渡方向）
cube            //立方体翻滚效果

subType 取值范围：


from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画`
      }]
    }],
    sampleCode: ["api.closeToWin({ name: 'root' });"],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'windows',
    desc: ['获取当前所有打开的window。该方法为同步方法。', 'windows()'],
    sampleCode: ['var windows = api.windows();'],
    usability: ['iOS系统，Android系统', '可提供的1.2.95及更高版本']
  }, {
    name: 'setWinAttr',
    desc: ['设置 window 属性', 'setWinAttr({params})'],
    params: [{
      tip: 'bounces',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）页面是否弹动'
      }]
    }, {
      tip: 'bgColor',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径'
      }]
    }, {
      tip: 'scrollToTop',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。只iOS有效'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）页面内容超出后是否可以滚动，只支持iOS'
      }]
    }, {
      tip: 'vScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否显示垂直滚动条'
      }]
    }, {
      tip: 'hScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否显示水平滚动条'
      }]
    }, {
      tip: 'scaleEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径'
      }]
    }, {
      tip: 'slidBackEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只iOS有效'
      }]
    }, {
      tip: 'hideHomeIndicator',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS'
      }]
    }, {
      tip: 'allowEdit',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否允许长按页面时弹出选择菜单'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式；只iOS有效，Android请在 config.xml 里面配置并云编译使用',
        fields: `resize            //若键盘盖住输入框，页面会自动上移
pan               //若键盘盖住输入框，页面不会自动上移
auto              //默认值，由系统决定如何处理，iOS平台该字段等同于resize`
      }]
    }],
    sampleCode: ['api.setWinAttr({ bounces: true });'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openFrame',
    desc: ['打开 frame', '若 frame 已存在，则会把该窗口显示到最前面并显示，如果 url 和之前的 url 有变化，或者 reload 为 true 时，页面会刷新', '此方法对 frameGroup 里面的 frame 不起作用', 'openFrame({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'window名字'
      }]
    }, {
      tip: 'url',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。'
      }]
    }, {
      tip: 'data',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据'
      }]
    }, {
      tip: 'headers',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）请求头'
      }]
    }, {
      tip: 'avm',
      desc: [{
        type: '布尔',
        default: '若在config.xml里面配置了avm字段，则默认值为配置的值，否则为false',
        desc: '（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。'
      }]
    }, {
      tip: 'useWKWebView',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否使用WKWebView来加载页面。参考WKWebView介绍。https://developer.yonyou.com/thread-151904-1-1.html'
      }]
    }, {
      tip: 'allowAccessFromFile',
      desc: [{
        type: '布尔',
        default: '全局加密下为false',
        desc: '（可选项）设置是否可以在本地页面中访问本地或远程资源，为保证代码安全，在开启全局加密情况下默认禁止访问。只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'historyGestureEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'syncCookie',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。'
      }]
    }, {
      tip: 'pageParam',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）页面参数，新页面中可以通过 api.pageParam 获取'
      }]
    }, {
      tip: 'bounces',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为 false 描述：（可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。'
      }]
    }, {
      tip: 'bgColor',
      desc: [{
        type: '字符串',
        default: '若在 config.xml 里面配置了 windowBackground，则默认值为配置的值，否则透明',
        desc: '（可选项）背景色，支持图片和颜色，格式为 #fff、#ffffff、rgba(r,g,b,a)等，图片路径支持 fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径'
      }]
    }, {
      tip: 'scrollToTop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）页面内容超出后是否可以滚动，只支持iOS'
      }]
    }, {
      tip: 'vScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示垂直滚动条'
      }]
    }, {
      tip: 'hScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示水平滚动条'
      }]
    }, {
      tip: 'scaleEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面是否可以缩放'
      }]
    }, {
      tip: 'fixedOn',
      desc: [{
        type: '字符串',
        default: '若当前在tabLayout组件中为ui_layout，否则为ui_window',
        desc: '（可选项）frame所要添加到的目标页面。 ui_window：页面添加到当前window中。若当前在tabLayout组件中，页面只能添加到navigationBar和tabBar之间的区域，无法覆盖在navigationBar、tabBar之上。、ui_layout：页面添加到当前tabLayout中。此时页面能够添加到tabLayout中任意位置，能够覆盖在navigationBar、tabBar之上，只在tabLayout组件中有效。'
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '充满整个父页面',
        desc: '（可选项）设置页面的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。',
        fields: `{
x:,             //左上角x坐标，数字类型
y:,             //左上角y坐标，数字类型
w:,             //宽度，若传'auto'，页面从x位置开始自动充满父页面宽度，数字或固定值'auto'
h:,             //高度，若传'auto'，页面从y位置开始自动充满父页面高度，数字或固定值'auto'

marginLeft:,    //相对父页面左外边距的距离，数字类型
marginTop:,     //相对父页面上外边距的距离，数字类型
marginBottom:,  //相对父页面下外边距的距离，数字类型
marginRight:    //相对父页面右外边距的距离，数字类型
        }`
      }]
    }, {
      tip: 'progress',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）页面加载进度配置信息，若不传则无加载进度效果',
        fields: `{
  type:            //加载进度效果类型，默认值为 default，取值范围为 default|page，为 page 时，进度效果为仿浏览器类型，固定在页面的顶部
  title:           //type 为 default 时显示的加载框标题，字符串类型
  text:            //type 为 default 时显示的加载框内容，字符串类型
  color:           //type 为 page 时进度条的颜色，默认值为 #45C01A，支持#FFF，#FFFFFF，rgb(255,255,255)，rgba(255,255,255,1.0)等格式
  height:          //type 为 page 时进度条高度，默认值为3，数字类型
}`
      }]
    }, {
      tip: 'reload',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面已经打开时，是否重新加载页面'
      }]
    }, {
      tip: 'allowEdit',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许长按页面时弹出选择菜单'
      }]
    }, {
      tip: 'slidBackType',
      desc: [{
        type: '字符串',
        default: 'full',
        desc: '（可选项）当支持滑动返回时，设置手指在页面右滑的有效作用区域。取值范围（full:整个页面范围都可以右滑返回，edge:在页面左边缘右滑才可以返回），该字段只iOS有效'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: 'auto',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用'
      }]
    }, {
      tip: 'softInputDismissMode',
      desc: [{
        type: '字符串数组',
        default: "['tap']",
        desc: '（可选项）收起键盘的方式，只iOS有效。',
        fields: `tap              //点击页面收起键盘，可以和drag或interactive同时使用
drag             //拖拽页面时收起键盘，可以和tap同时使用
interactive      //在键盘和页面交界处上下滑动收起键盘，可以和tap同时使用`
      }]
    }, {
      tip: 'softInputBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示键盘上方的工具条。只支持iOS'
      }]
    }, {
      tip: 'overScrollMode',
      desc: [{
        type: '字符串',
        default: 'never',
        desc: '（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。',
        fields: `never            //永远不显示
always           //总是显示
scrolls          //只有当页面内容超出设备屏幕大小，发生滚动行为时显示，建议设置为该模式。`
      }]
    }, {
      tip: 'dragAndDrop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时无动画',
        fields: `{
  type:"none",                //动画类型（详见动画类型常量）
  subType:"from_right",       //动画子类型（详见动画子类型常量）
  duration:300                //动画过渡时间，默认300毫秒
}

type 取值范围：

none            //无动画效果
push            //新视图将旧视图推开
movein          //新视图移到旧视图上面
fade            //交叉淡化过渡（不支持过渡方向）
flip            //翻转效果
reveal          //将旧视图移开,显示下面的新视图
ripple          //滴水效果（不支持过渡方向）
curl            //向上翻一页
un_curl         //向下翻一页
suck            //收缩效果（不支持过渡方向）
cube            //立方体翻滚效果

subType 取值范围：

from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画`
      }]
    }, {
      tip: 'defaultRefreshHeader',
      desc: [{
        type: '字符串',
        default: 'pull',
        desc: '（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe'
      }]
    }, {
      tip: 'customRefreshHeader',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件'
      }]
    }],
    sampleCode: [`api.openFrame({
    name: 'page2',
    url: './page2.html',
    rect: {
        x: 0,
        y: 0,
        w: 'auto',
        h: 'auto'
    },
    pageParam: {
        name: 'test'
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeFrame',
    desc: ['关闭frame', 'closeFrame({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名字，不传时关闭当前 frame'
      }]
    }],
    sampleCode: ['api.closeFrame({ name: "page2" });'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'frames',
    desc: ['获取当前window中所有打开的frame（包括frameGroup中的frame）。该方法为同步方法。', 'frames()'],
    sampleCode: ['var frames = api.frames();'],
    usability: ['iOS系统，Android系统', '可提供的1.2.95及更高版本']
  }, {
    name: 'setFrameAttr',
    desc: ['设置frame属性', 'setFrameAttr({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 名称'
      }]
    }, {
      tip: 'bounces',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）页面是否弹动'
      }]
    }, {
      tip: 'hidden',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）设置本 frame 是否隐藏，设置显示隐藏并不会改变frame在整个窗口系统之间的层级关系。'
      }]
    }, {
      tip: 'bgColor',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）设置本 frame 是否隐藏，设置显示隐藏并不会改变frame在整个窗口系统之间的层级关系。'
      }]
    }, {
      tip: 'scrollToTop',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）页面内容超出后是否可以滚动，只支持iOS'
      }]
    }, {
      tip: 'vScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示垂直滚动条'
      }]
    }, {
      tip: 'hScrollBarEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示水平滚动条'
      }]
    }, {
      tip: 'scaleEnabled',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）页面是否可以缩放'
      }]
    }, {
      tip: 'allowEdit',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否允许长按页面时弹出选择菜单'
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）窗口区域 x：左上角x坐标； y：左上角y坐标； w：宽度，若传auto，页面从x位置开始自动充满父页面宽度； h：高度，若传auto，页面从y位置开始自动充满父页面高度'
      }]
    }, {
      tip: 'softInputMode',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式,只iOS有效，Android请在 config.xml 里面配置并云编译使用',
        fields: `resize            //若键盘盖住输入框，页面会自动上移
pan               //若键盘盖住输入框，页面不会自动上移
auto              //默认值，由系统决定如何处理，iOS平台该字段等同于resize`
      }]
    }],
    sampleCode: [`api.setFrameAttr({
    name: 'page2',
    bounces: true
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'bringFrameToFront',
    desc: ['调整 frame 到前面', 'bringFrameToFront({params})'],
    params: [{
      tip: 'from',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '待调整显示顺序的 frame 名字'
      }]
    }, {
      tip: 'to',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名字，不传时调整 from 对应 frame 到最前面，否则调整 from 对应 frame 到此 frame 前面'
      }]
    }],
    sampleCode: ["api.bringFrameToFront({ from: 'page1', to: 'page2'});"],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'sendFrameToBack',
    desc: ['调整 frame 到后面', 'sendFrameToBack({params})'],
    params: [{
      tip: 'from',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 名字'
      }]
    }, {
      tip: 'to',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名字，不传时调整 from 对应 frame 到最后面，否则调整 from 对应 frame 到此 frame 后面'
      }]
    }],
    sampleCode: ["api.sendFrameToBack({ from: 'page1', to: 'page2' });"],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setFrameClient',
    desc: ['设置指定 frame 的页面加载监听，仅在 window 中调用生效，可以对多个 frame 进行监听。', 'setFrameClient({params}, callback(ret, err))'],
    params: [{
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 名字'
      }]
    }],
    sampleCode: [`api.setFrameClient({
    frameName: 'webpage'
},  function(ret, err) {
      switch (ret.state) {
          case 0:
              break;
          case 1:
              break;
          case 2:
              break;
          case 3:
              break;
          case 4:
              break;
          default:
              break;
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'animation',
    desc: ['frame 动画，支持平移，缩放，旋转和透明度变化', '仅支持 frame，不支持 window 以及 frameGroup 里面的 frame', 'animation({params}, callback(ret, err))'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '当前 frame',
        desc: 'frame 名字'
      }]
    }, {
      tip: 'delay',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）动画延迟时间，单位毫秒，默认立即开始'
      }]
    }, {
      tip: 'duration',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）动画过渡时间，单位毫秒'
      }]
    }, {
      tip: 'curve',
      desc: [{
        type: '字符串',
        default: 'ease_in_out',
        desc: '（可选项）动画曲线类型，指定动画开始和结束时的快慢',
        fields: `ease_in_out     //开始和结束时慢
ease_in         //开始时慢
ease_out        //结束时慢
linear          //整个动画过程速率一样`
      }]
    }, {
      tip: 'repeatCount',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）动画次数，默认不重复，为-1时无限重复'
      }]
    }, {
      tip: 'autoreverse',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）一次动画结束后是否自动反转动画'
      }]
    }, {
      tip: 'alpha',
      desc: [{
        type: '数字',
        default: '无',
        desc: '（可选项）整个页面的透明度，介于0 1之间，Android 不支持'
      }]
    }, {
      tip: 'translation',
      desc: [{
        type: 'JSON',
        default: '无',
        desc: '（可选项）位置平移参数',
        fields: `{
  x: 0,         //x轴方向上的平移距离，默认为0
  y: 0,         //y轴方向上的平移距离，默认为0
  z: 0          //z轴方向上的平移距离，默认为0，Android不支持
}`
      }]
    }, {
      tip: 'scale',
      desc: [{
        type: 'JSON',
        default: '无',
        desc: '（可选项）页面缩放参数，Android 不支持',
        fields: `{
  x: 1,         //x轴方向上的放大倍率，默认为1
  y: 1,         //y轴方向上的放大倍率，默认为1
  z: 1          //z轴方向上的放大倍率，默认为1
}`
      }]
    }, {
      tip: 'rotation',
      desc: [{
        type: 'JSON',
        default: '无',
        desc: '（可选项）页面旋转参数，Android 不支持',
        fields: `{
  degree:0,     //旋转角度，默认0
  x: 0,         //绕x轴旋转，默认为0
  y: 0,         //绕y轴旋转，默认为0
  z: 1          //绕z轴旋转，默认为1
}`
      }]
    }],
    sampleCode: [`api.animation({
    name: 'page1',
    delay: 1000,
    duration: 3000,
    curve: 'ease_in',
    repeatCount: 2,
    autoreverse: true,
    alpha: 0.6,
    translation: {
        x: 0,
        y: 100,
        z: 0
    },
    scale: {
        x: 1.2,
        y: 1,
        z: 1
    },
    rotation: {
        degree: 45,
        x: 0,
        y: 0,
        z: 1
    }
}, function(ret, err) {
    api.alert({
        msg:'动画结束'
    });
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openFrameGroup',
    desc: ['打开frame组', '若frame组已存在，则会把该frame组显示到最前面。frame组打开后，当前页面加载完成后，页面会预加载后面指定个数页面', 'openFrameGroup({params}, callback(ret, err))'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 组名字'
      }]
    }, {
      tip: 'background',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 组背景，颜色（#fff,#ffffff,rgba(r,g,b,a)）或图片（支持文件路径协议和相对路径）'
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）frame 组是否能够左右滚动'
      }]
    }, {
      tip: 'frames',
      desc: [{
        type: '数组',
        default: '无',
        desc: 'frame 数组',
        fields: `[{
    name:'',                                //frame名字，字符串类型，不能为空字符串
    url:'',                                 //页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。字符串类型
    data:'',                                //（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据
    headers:{},                             //（可选项）请求头
    avm:false,                              //（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。
    useWKWebView:false,                     //（可选项）是否使用WKWebView来加载页面。参考[WKWebView介绍](https://community.apicloud.com/bbs/thread-151904-1-1.html)。
    allowAccessFromFile:false,              //（可选项）设置是否可以在本地页面中访问本地或远程资源，为保证代码安全，在开启全局加密情况下默认禁止访问。只在useWKWebView参数为true时有效。
    historyGestureEnabled:false,            //（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。
    pageParam:{},                           //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
    bounces:true,                           //（可选项）是否弹动，布尔型，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为true。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。
    bgColor:'#fff',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
    scrollToTop:true                        //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
    scrollEnabled:true                      //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
    vScrollBarEnabled:true,                 //（可选项）是否显示垂直滚动条，布尔型，默认值：true
    hScrollBarEnabled:false,                //（可选项）是否显示水平滚动条，布尔型，默认值：false
    scaleEnabled:true,                      //（可选项）页面是否可以缩放，布尔型，默认值：false
    allowEdit:false,                        //（可选项）是否允许长按页面时弹出选择菜单
    softInputMode:'auto'                    //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效。
                                            //取值范围：
                                            //resize    //若键盘盖住输入框，页面会自动上移
                                            //pan       //若键盘盖住输入框，页面不会自动上移
                                            //auto      //默认值，由系统决定如何处理，iOS平台该字段等同于resize
    softInputBarEnabled:false,              //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
    overScrollMode,                         //（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。取值范围：never，always，scrolls
    defaultRefreshHeader:''                 //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
    customRefreshHeader:''                  //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}]`
      }]
    }, {
      tip: 'fixedOn',
      desc: [{
        type: '字符串',
        default: '若当前在tabLayout组件中为ui_layout，否则为ui_window',
        desc: '（可选项）frameGroup所要添加到的目标页面。',
        fields: `ui_window    //页面添加到当前window中。若当前在tabLayout组件中，页面只能添加到navigationBar和tabBar之间的区域，无法覆盖在navigationBar、tabBar之上。
ui_layout    //页面添加到当前tabLayout中。此时页面能够添加到tabLayout中任意位置，能够覆盖在navigationBar、tabBar之上，只在tabLayout组件中有效。`
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '充满整个父页面',
        desc: '（可选项）设置frameGroup的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。',
        fields: `{
  x:,             //左上角x坐标，数字类型
  y:,             //左上角y坐标，数字类型
  w:,             //宽度，若传'auto'，页面从x位置开始自动充满父页面宽度，数字或固定值'auto'
  h:,             //高度，若传'auto'，页面从y位置开始自动充满父页面高度，数字或固定值'auto'

  marginLeft:,    //相对父页面左外边距的距离，数字类型
  marginTop:,     //相对父页面上外边距的距离，数字类型
  marginBottom:,  //相对父页面下外边距的距离，数字类型
  marginRight:    //相对父页面右外边距的距离，数字类型
}`
      }]
    }, {
      tip: 'index',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）默认显示的页面索引'
      }]
    }, {
      tip: 'preload',
      desc: [{
        type: '数字',
        default: '1',
        desc: '（可选项）预加载的 frame 个数，默认加载当前页后面一个'
      }]
    }],
    sampleCode: [`api.openFrameGroup({
    name: 'group1',
    rect: {
        x: 0,
        y: 0,
        w: 'auto',
        h: 'auto'
    },
    frames: [{
        name: 'frame1',
        url: 'frame1.html',
        bgColor: '#fff'
    }, {
        name: 'frame2',
        url: 'frame2.html',
        bgColor: '#fff'
    }]
  }, function(ret, err) {
      var index = ret.index;
  });`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeFrameGroup',
    desc: ['关闭frame组', 'closeFrameGroup({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 组名字'
      }]
    }],
    sampleCode: [`api.closeFrameGroup({
    name: 'group1'
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setFrameGroupAttr',
    desc: ['设置 frame 组属性', 'setFrameGroupAttr({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 组名字'
      }]
    }, {
      tip: 'hidden',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）frame 组是否隐藏，设置显示隐藏并不会改变frame组在整个窗口系统之间的层级关系。'
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）frame 组区域',
        fields: `{
  x:0,             //左上角x坐标
  y:0,             //左上角y坐标
  w:320,           //宽度，若传'auto'，frame组从x位置开始自动充满父页面宽度
  h:240            //高度，若传'auto'，frame组从y位置开始自动充满父页面高度
}`
      }]
    }, {
      tip: 'scrollEnabled',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）frame 组是否能够左右滚动'
      }]
    }],
    sampleCode: [`api.setFrameGroupAttr({
    name: 'group1',
    hidden: true
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setFrameGroupIndex',
    desc: ['设置 frame 组当前可见 frame', 'setFrameGroupIndex({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'frame 组名字'
      }]
    }, {
      tip: 'index',
      desc: [{
        type: '数字',
        default: '无',
        desc: 'frame 索引'
      }]
    }, {
      tip: 'scroll',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否平滑滚动至目标窗口，即是否带有动画'
      }]
    }, {
      tip: 'reload',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否刷新 frame'
      }]
    }],
    sampleCode: [`api.setFrameGroupIndex({
    name: 'group1',
    index: 2
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openPopoverWin',
    desc: ['打开弹出层窗口，只支持iPad', '在弹出层窗口里面不能再打开弹出窗口，页面可以使用所有的 window 和 frame 相关操作，如 openWin、openFrame 等，此方法能够使用openWin方法的所有参数', '使用 execScript() 方法时，引擎只会在整个弹出层里面的窗口中去寻找要执行脚本的窗口，如果要和弹出层下面的窗口间进行通信，可以使用 sendEvent() 方法实现', 'openPopoverWin({params})'],
    params: [{
      tip: 'style',
      desc: [{
        type: '字符串',
        default: 'default',
        desc: '（可选项）弹出窗口展示类型 default：弹出层从底部往上弹出，显示在屏幕中间一片指定区域，周围为黑色半透明； popover：弹出层带指示箭头，可设置箭头方向和位置',
        fields: `default         // 弹出层从底部往上弹出，显示在屏幕中间一片指定区域，周围为黑色半透明
popover         // 弹出层带指示箭头，可设置箭头方向和位置`
      }]
    }, {
      tip: 'width',
      desc: [{
        type: '数字',
        default: '540',
        desc: '（可选项）弹出窗口显示的宽度'
      }]
    }, {
      tip: 'height',
      desc: [{
        type: '数字',
        default: '620',
        desc: '（可选项）弹出窗口显示的高度'
      }]
    }, {
      tip: 'arrowRect',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）当style为popover时，箭头指向的位置',
        fields: `{
    x:0,                  //左上角x坐标，数字类型
    y:0,                  //左上角y坐标，数字类型
    w:0,                  //宽度，数字类型
    h:0,                  //高度，数字类型
}`
      }]
    }, {
      tip: 'arrowDirection',
      desc: [{
        type: '字符串',
        default: 'any',
        desc: '（可选项）当style为popover时，箭头指向的方向',
        fields: `left          // 指向左边
right         // 指向右边
up            // 指向上边
down          // 指向下边
any           // 系统根据页面情况选择合适的方向`
      }]
    }],
    sampleCode: [`api.openPopoverWin({
    width: 480,
    height: 400,
    name: 'page1',
    url: './page1.html'
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closePopoverWin',
    desc: ['关闭整个弹出层窗口，只 iPad 上面有效', '在当前弹出层里面的任意页面里面调用都会关闭整个弹出层', 'closePopoverWin()'],
    sampleCode: ["api.closePopoverWin();"],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openSlidLayout',
    desc: ['打开侧滑式布局', "打开后，其所在 window 的 name 默认为 slidLayout，所以关闭整个侧滑布局可以通过 api.closeWin({name:'slidLayout'}) 实现，同时可以通过 api.openWin({name:'slidLayout'})来把整个侧滑显示到最前面", 'openSlidLayout({params}, callback(ret, err))'],
    params: [{
      tip: 'type',
      desc: [{
        type: '字符串',
        default: 'all',
        desc: '（可选项）侧滑类型（left：左侧滑、right：右侧滑、all：左右侧滑）。安卓暂只支持left。'
      }]
    }, {
      tip: 'leftEdge',
      desc: [{
        type: '数字',
        default: '60',
        desc: '（可选项）左侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 leftEdge 参数代替'
      }]
    }, {
      tip: 'rightEdge',
      desc: [{
        type: '数字',
        default: '60',
        desc: '（可选项）右侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 rightEdge 参数代替'
      }]
    }, {
      tip: 'slidPaneStyle',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '侧滑层 window 样式',
        fields: `{
  leftEdge:           //（可选项）左侧滑时，侧滑window停留时露出的宽度，默认60，数字类型
  rightEdge:          //（可选项）右侧滑时，侧滑window停留时露出的宽度，默认60，数字类型
  leftScale:          //（可选项）左侧滑时，侧滑window移动时能缩放的最小倍数，0-1.0，默认1.0，数字类型，只支持iOS
  rightScale:         //（可选项）右侧滑时，侧滑window移动时能缩放的最小倍数，0-1.0，默认1.0，数字类型，只支持iOS
}`
      }]
    }, {
      tip: 'fixedPaneStyle',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '底部固定层 window 样式',
        fields: `{
  leftEdge:           //（可选项）左侧滑时，固定window能向左移动的最大宽度，默认0，数字类型，只支持iOS
  rightEdge:          //（可选项）右侧滑时，固定window能向右移动的最大宽度，默认0，数字类型，只支持iOS
  leftScale:          //（可选项）左侧滑时，固定window向左移动时能缩放的最小倍数，0-1.0，默认1.0，数字类型，只支持iOS
  rightScale:         //（可选项）右侧滑时，固定window向右移动时能缩放的最小倍数，0-1.0，默认1.0，数字类型，只支持iOS
  leftMaskBg:         //（可选项）左侧滑时，固定window上面的遮罩层背景，支持颜色和图片，默认rgba(0,0,0,0)，字符串类型，只支持iOS
  rightMaskBg:        //（可选项）右侧滑时，固定window上面的遮罩层背景，支持颜色和图片，默认rgba(0,0,0,0)，字符串类型，只支持iOS
  leftBg:             //（可选项）左侧滑时，固定window后面的背景，缩放过程中后面的背景将会显示出来，支持颜色和图片，默认rgba(0,0,0,0)，字符串类型，只支持iOS
  rightBg:            //（可选项）右侧滑时，固定window后面的背景，缩放过程中后面的背景将会显示出来，支持颜色和图片，默认rgba(0,0,0,0)，字符串类型，只支持iOS
}`
      }]
    }, {
      tip: 'fixedPane',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '底部固定层 window',
        fields: `{
  name:'',                            // window名字（字符串类型）
  url:'',                             // 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及widget://、fs://等协议路径，也可以为远程地址
  pageParam:{},                       //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
  bgColor:'',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
  bounces:false,                      //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
  scrollToTop:false                   //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
  scrollEnabled:true                  //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
  vScrollBarEnabled:true,             //（可选项）是否显示垂直滚动条，默认true 
  hScrollBarEnabled:true,             //（可选项）是否显示水平滚动条，默认true
  scaleEnabled:true,                  //（可选项）页面是否可以缩放，布尔型，默认值：false
  allowEdit:false,                    //（可选项）是否允许长按页面时弹出选择菜单
  softInputMode:'auto'                //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效
                                      //取值范围：
                                      //resize      //若键盘盖住输入框，页面会自动上移
                                      //pan         //若键盘盖住输入框，页面不会自动上移
                                      //auto        //默认值，由系统决定如何处理，iOS平台该字段等同于resize
  softInputBarEnabled:false,          //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
  defaultRefreshHeader:''             //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
  customRefreshHeader:''              //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}`
      }]
    }, {
      tip: 'slidPane',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '侧滑层window',
        fields: `{
  name:'',                            // window名字（字符串类型）
  url:'',                             // 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及widget://、fs://等协议路径，也可以为远程地址
  pageParam:{},                       //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
  bgColor:'',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
  bounces:false,                      //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
  scrollToTop:false                   //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
  scrollEnabled:true                  //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
  vScrollBarEnabled:true,             //（可选项）是否显示垂直滚动条，默认true 
  hScrollBarEnabled:true,             //（可选项）是否显示水平滚动条，默认true
  scaleEnabled:true,                  //（可选项）页面是否可以缩放，布尔型，默认值：false
  allowEdit:false,                    //（可选项）是否允许长按页面时弹出选择菜单
  softInputMode:'auto'                //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效
                                      //取值范围：
                                      //resize       //若键盘盖住输入框，页面会自动上移
                                      //pan          //若键盘盖住输入框，页面不会自动上移
                                      //auto         //默认值，由系统决定如何处理，iOS平台该字段等同于resize
  softInputBarEnabled:false,          //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
  defaultRefreshHeader:''             //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
  customRefreshHeader:''              //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}`
      }]
    }],
    sampleCode: [`api.openSlidLayout({
    type: 'left',
    fixedPane: {
        name: 'win1',
        url: 'win1.html'
    },
    slidPane: {
        name: 'win2',
        url: 'win2.html'
    }
  }, function(ret, err) {

});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openSlidPane',
    desc: ['向左或右进行侧滑', 'openSlidPane({params})'],
    params: [{
      tip: 'type',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '侧滑类型，left 或 right'
      }]
    }],
    sampleCode: [`api.openSlidPane({
    type: 'left'
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'closeSlidPane',
    desc: ['当 SlidPane 处于左或右侧滑状态时，将其收起', 'closeSlidPane()'],
    sampleCode: ['api.closeSlidPane();'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'lockSlidPane',
    desc: ['锁住 SlidPane，使其不能跟随手指滑动而移动', 'lockSlidPane()'],
    sampleCode: ['api.lockSlidPane();'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'unlockSlidPane',
    desc: ['解锁 SlidPane，使其能跟随手指滑动而移动', 'unlockSlidPane()'],
    sampleCode: ['api.unlockSlidPane();'],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openDrawerLayout',
    desc: ['打开一个抽屉式侧滑 window，可以从当前 window 的左右边缘滑动拉出侧滑 window。', '此方法能够使用 openWin 方法的所有参数，在此基础上增加了 leftPane、rightPane 等参数，可以通过 api.closeWin()方法来关闭整个抽屉式侧滑。', 'openDrawerLayout({params})'],
    params: [{
      tip: 'leftPane',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '左边侧滑 window',
        fields: `{
  edge:60,                            // 左边侧滑打开后，漏出的半透明区域宽度，默认值为60。此时左边侧滑window的宽度为屏幕宽度减去edge
  name:'',                            // window名字（字符串类型）
  url:'',                             // 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及widget://、fs://等协议路径，也可以为远程地址
  pageParam:{},                       //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
  bgColor:'',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
  bounces:false,                      //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
  scrollToTop:false,                  //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
  scrollEnabled:true                  //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
  vScrollBarEnabled:true,             //（可选项）是否显示垂直滚动条，默认true 
  hScrollBarEnabled:true,             //（可选项）是否显示水平滚动条，默认true
  scaleEnabled:true,                  //（可选项）页面是否可以缩放，布尔型，默认值：false
  allowEdit:false,                    //（可选项）是否允许长按页面时弹出选择菜单
  softInputMode:'auto',               //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效
                                      //取值范围：
                                      //resize      //若键盘盖住输入框，页面会自动上移
                                      //pan         //若键盘盖住输入框，页面不会自动上移
                                      //auto        //默认值，由系统决定如何处理，iOS平台该字段等同于resize
  softInputBarEnabled:false,          //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
  defaultRefreshHeader:''             //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
  customRefreshHeader:''              //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}`
      }]
    }, {
      tip: 'rightPane',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '右边侧滑 window',
        fields: `{
  edge:60,                            // 右边侧滑打开后，漏出的半透明区域宽度，默认值为60。此时右边侧滑window的宽度为屏幕宽度减去edge
  name:'',                            // window名字（字符串类型）
  url:'',                             // 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及widget://、fs://等协议路径，也可以为远程地址
  pageParam:{},                       //（可选项）页面参数，页面中可以通过api.pageParam获取，JSON对象
  bgColor:'',                         //（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径
  bounces:false,                      //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
  scrollToTop:false                   //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
  scrollEnabled:true                  //（可选项）页面内容超出后是否可以滚动，默认为true，只支持iOS
  vScrollBarEnabled:true,             //（可选项）是否显示垂直滚动条，默认true 
  hScrollBarEnabled:true,             //（可选项）是否显示水平滚动条，默认true
  scaleEnabled:true,                  //（可选项）页面是否可以缩放，布尔型，默认值：false
  allowEdit:false,                    //（可选项）是否允许长按页面时弹出选择菜单
  softInputMode:'auto'                //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效
                                      //取值范围：
                                      //resize       //若键盘盖住输入框，页面会自动上移
                                      //pan          //若键盘盖住输入框，页面不会自动上移
                                      //auto         //默认值，由系统决定如何处理，iOS平台该字段等同于resize
  softInputBarEnabled:false,          //（可选项）是否显示键盘上方的工具条，布尔型，默认值：true，只iOS有效
  defaultRefreshHeader:''             //（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe
  customRefreshHeader:''              //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
}`
      }]
    }, {
      tip: 'slidToOpenPane',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否支持在页面边缘处滑动打开drawerPane'
      }]
    }, {
      tip: 'slidToClosePane',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）在打开的drawerPane页面，是否支持滑动关闭drawerPane'
      }]
    }, {
      tip: 'tapToClosePane',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）在打开的drawerPane页面，是否支持点击遮罩部分关闭drawerPane'
      }]
    }],
    sampleCode: [`api.openDrawerLayout({
    name: 'main',
    url: './main.html',
    animation: {
        type: 'none'
    },
    leftPane: {
        name: 'leftPane',
        url: 'leftPane.html'
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'openDrawerPane',
    desc: ['打开抽屉式侧滑Pane', 'openDrawerPane({params})'],
    params: [{
      tip: 'type',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '侧滑类型，left 或 right'
      }]
    }],
    sampleCode: [`api.openDrawerPane({
    type: 'left'
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'closeDrawerPane',
    desc: ['关闭抽屉式侧滑Pane', 'closeDrawerPane()'],
    sampleCode: [`api.closeDrawerPane();`],
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'loadData',
    desc: ['在指定 window 或者 frame 中加载HTML数据，对于 frameGroup 里面的 frame 也有效。', 'loadData({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）window 名称，若要跨 window ，该字段必须指定，首页的名称为 root'
      }]
    }, {
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame名称'
      }]
    }, {
      tip: 'url',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）做为baseUrl，data中的html引用的资源文件根路径以该url为基础，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径。'
      }]
    }, {
      tip: 'data',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '页面加载的数据内容，可以为html片段或者整张html文件的数据'
      }]
    }],
    sampleCode: [`//在当前window中加载HTML数据
var data = 'hello world';
api.loadData({
    data: data
});

//在当前window中找到名为frmName的frame，并在该frame中加载HTML数据
var data = 'hello world';
api.loadData({
    frameName: 'frmName',
    data: data
});

//在名为winName的window中加载HTML数据
var data = 'hello world';
api.loadData({
    name: 'winName',
    data: data
});

//在名为winName的window中找到名为frmName的frame，并在该frame中加载HTML数据
var data = 'hello world';
api.loadData({
    name: 'winName',
    frameName: 'frmName',
    data: data
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.9及更高版本']
  }, {
    name: 'execScript',
    desc: ['在指定 window 或者 frame 中执行脚本，对于 frameGroup 里面的 frame 也有效，若 name 和 frameName 都未指定，则在当前 window 中执行脚本，具体执行逻辑见补充说明。', 'execScript({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）window 名称，若要跨 window 执行脚本，该字段必须指定，首页的名称为 root'
      }]
    }, {
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame名称'
      }]
    }, {
      tip: 'script',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'js代码'
      }]
    }],
    sampleCode: [`//在当前window中执行jsfun脚本
var jsfun = 'funcGoto();';
api.execScript({
    script: jsfun
});

//在当前window中找到名为frmName的frame，并在该frame中执行jsfun脚本
var jsfun = 'funcGoto();';
api.execScript({
    frameName: 'frmName',
    script: jsfun
});

//在名为winName的window中执行jsfun脚本
var jsfun = 'funcGoto();';
api.execScript({
    name: 'winName',
    script: jsfun
});

//在名为winName的window中找到名为frmName的frame，并在该frame中执行jsfun脚本
var jsfun = 'funcGoto();';
api.execScript({
    name: 'winName',
    frameName: 'frmName',
    script: jsfun
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setBlurEffect',
    desc: ['对当前页面或应用设置模糊效果', '该方法只支持iOS 8及以上系统', 'setBlurEffect({params})'],
    params: [{
      tip: 'style',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '模糊效果风格样式，传none时表示移除模糊效果',
        fields: `none            //移除模糊效果
extra_light     //模糊区域比底层视图的颜色更淡
light           //模糊区域与底层视图的色调近似
dark            //模糊区域比底层视图的颜色更深
regular         //适应界面风格的常规模糊样式，只支持iOS 10及以上系统
prominent       //适应界面风格，使内容更加突出，只支持iOS 10及以上系统`
      }]
    }, {
      tip: 'global',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）false时表示对当前页面添加模糊效果，true时表示对整个应用窗口添加模糊效果'
      }]
    }, {
      tip: 'alpha',
      desc: [{
        type: '数字',
        default: '1',
        desc: '（可选项）模糊区域透明度，介于0和1之间'
      }]
    }, {
      tip: 'borderRadius',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）模糊区域圆角半径'
      }]
    }, {
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，设置模糊渐变效果，只支持iOS 9及以上系统',
        fields: `{
  delay:               //动画延迟执行时间，单位毫秒，默认值0，数字类型
  duration:            //动画执行时间，单位毫秒，默认值0，数字类型
  curve:               //动画曲线类型，默认值ease_in_out，字符串类型
}

curve 取值范围：

ease_in_out     //开始和结束时慢
ease_in         //开始时慢
ease_out        //结束时慢
linear          //整个动画过程速率一样`
      }]
    }, {
      tip: 'rect',
      desc: [{
        type: 'JSON 对象',
        default: '页面区域',
        desc: '（可选项）模糊区域',
        fields: `{
  x:,                  //左上角x坐标，数字类型
  y:,                  //左上角y坐标，数字类型
  w:,                  //宽度，数字类型
  h:,                  //高度，数字类型
}`
      }]
    }],
    sampleCode: [`// 设置应用模糊效果：
api.addEventListener({
    name: 'pause'
}, function(){
    api.setBlurEffect({
        style: 'light',
        global: true
    });
});

api.addEventListener({
    name: 'resume'
}, function(){
    api.setBlurEffect({
        style: 'none',
        global: true
    });
});`],
    usability: ['iOS系统，Android系统', '可提供的1.2.61及更高版本']
  }, {
    name: 'removeLaunchView',
    desc: ['移除启动图。若 config.xml 里面配置 autoLaunch 为 false，则启动图不会自动消失，直到调用此方法移除。', 'removeLaunchView({params})'],
    params: [{
      tip: 'animation',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）动画参数，不传时不使用动画',
        fields: `{
  type:"fade",                //动画类型（详见动画类型常量）
  subType:"from_right",       //动画子类型（详见动画子类型常量）
  duration:300                //动画过渡时间，默认300毫秒
}

type 取值范围：

none            //无动画效果
push            //新视图将旧视图推开
movein          //新视图移到旧视图上面
fade            //交叉淡化过渡（不支持过渡方向）
flip            //翻转效果
reveal          //将旧视图移开,显示下面的新视图
ripple          //滴水效果（不支持过渡方向）
curl            //向上翻一页
un_curl         //向下翻一页
suck            //收缩效果（不支持过渡方向）
cube            //立方体翻滚效果

subType 取值范围：


from_right      //从右边开始动画
from_left       //从左边开始动画
from_top        //从顶部开始动画
from_bottom     //从底部开始动画`
      }]
    }],
    sampleCode: [`api.removeLaunchView({
    animation: {
        type: 'fade',
        duration: 500
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'showLaunchView',
    desc: ['重新显示闪屏广告，若没有闪屏广告则不显示。', 'showLaunchView()'],
    sampleCode: [`api.showLaunchView();`],
    usability: ['iOS系统，Android系统', '可提供的1.2.37及更高版本']
  }, {
    name: 'parseTapmode',
    desc: ['解析元素 tapmode 属性，优化点击事件处理', '默认页面加载完成后，引擎会对 dom 里面的元素进行 tapmode 属性解析，若是之后用代码创建的 dom 元素，则需要调用该方法后 tapmode 属性才会生效', 'parseTapmode()'],
    sampleCode: [`api.parseTapmode();`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }]
}, {
  name: '高级窗口',
  icon: 'api_advance_win_icon',
  children: [{
    name: 'openTabLayout',
    desc: ['打开tabLayout布局', '本方法继承了openWin方法的所有参数，同时在此基础上增加了navigationBar、tabBar等参数，来设置和使用原生的顶部导航栏和底部标签栏，可以通过closeWin方法来关闭页面。为帮助您更好的了解和使用tabLayout，可以参考论坛的示例说明。', 'openTabLayout({params})'],
    params: [{
      tip: 'title',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）显示在顶部navigationBar上面的标题'
      }]
    }, {
      tip: 'hideNavigationBar',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否隐藏顶部navigationBar导航栏，只在传了navigationBar参数时有效'
      }]
    }, {
      tip: 'hideTabBar',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否隐藏底部tabBar标签栏，只在传了tabBar参数时有效'
      }]
    }, {
      tip: 'navigationBar',
      desc: [{
        type: 'JSON对象',
        default: '无',
        desc: '（可选项）顶部navigationBar导航栏配置信息',
        fields: `{
  height:                   //（可选项）导航栏高度。默认值45。数字类型
  background:               //（可选项）导航栏背景。支持颜色值和图片，默认值#fff，字符串类型
  shadow:                   //（可选项）导航栏底部阴影线颜色。默认值#ddd，字符串类型
  color:                    //（可选项）导航栏标题文字颜色。默认值#000，字符串类型
  fontSize:                 //（可选项）导航栏标题字体大小。默认值17，数字类型
  fontWeight:               //（可选项）导航栏标题字体粗细。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
  fontFamily:               //（可选项）导航栏标题字体。只支持iOS，字符串类型
  hideBackButton:           //（可选项）是否隐藏默认返回按钮。如果传了leftButtons，hideBackButton参数失效。返回按钮由箭头图标和前一个页面的标题组成，若前一个页面未设置标题，则按钮文字为“返回”。可以通过监听navbackbtn或keyback事件来处理返回按钮的点击事件。布尔类型
  leftButtons:              //（可选项）导航栏左边按钮组。左边按钮会替换掉默认的返回按钮，按钮按照数组顺序从左至右显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件，JSON对象数组类型
  [{
    text:                 //（可选项）按钮标题文字，可以和icon同时存在，字符串类型
    color:                //（可选项）按钮标题文字颜色，默认值#000，字符串类型
    fontSize:             //（可选项）按钮标题字体大小。默认值17，数字类型
    fontWeight:           //（可选项）按钮标题字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
    fontFamily:           //（可选项）按钮标题字体。只支持iOS，字符串类型
    iconPath:             //（可选项）按钮 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
    scale:                //（可选项）图片的缩放倍数，默认为 4，数字类型。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 30*25，则图片实际尺寸需要为 90*75。
  }],
  rightButtons:             //（可选项）导航栏右边按钮组。按钮按照数组顺序从右至左显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件，JSON对象数组类型
  [{
    text:                 //（可选项）按钮标题文字，可以和icon同时存在，字符串类型
    color:                //（可选项）按钮标题文字颜色，默认值#000，字符串类型
    fontSize:             //（可选项）按钮标题字体大小。默认值17，数字类型
    fontWeight:           //（可选项）按钮标题字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
    fontFamily:           //（可选项）按钮标题字体。只支持iOS，字符串类型
    iconPath:             //（可选项）按钮 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
    scale:                //（可选项）图片的缩放倍数，默认为 4，数字类型。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 30*25，则图片实际尺寸需要为 90*75。
  }]
}`
      }]
    }, {
      tip: 'tabBar',
      desc: [{
        type: 'JSON对象',
        default: '无',
        desc: '（可选项）底部tabBar标签栏配置信息，可以通过监听tabitembtn事件来处理标签栏每项的点击事件',
        fields: `{
  height:                    //（可选项）标签栏高度。默认值54。数字类型
  background:                //（可选项）标签栏背景。支持颜色值和图片，默认值#fff，字符串类型
  shadow:                    //（可选项）标签栏顶部阴影线颜色。默认值#ddd，字符串类型
  color:                     //（可选项）标签栏各项的文字颜色。默认值#000，字符串类型
  selectedColor:             //（可选项）标签栏各项选中状态的文字颜色。默认值#000，字符串类型
  fontSize:                  //（可选项）标签栏各项文字字体大小。默认值10，数字类型
  fontWeight:                //（可选项）标签栏各项文字字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
  fontFamily:                //（可选项）标签栏各项文字字体。只支持iOS，字符串类型
  textOffset:                //（可选项）标签栏各项文字距离底部的距离。默认值2，数字类型
  animated:                  //（可选项）选中标签栏每项时，切换对应的页面是否带有动画效果，默认值false。布尔类型
  scrollEnabled:             //（可选项）标签栏每项对应的页面间是否能够左右滚动切换，默认值true。布尔类型
  index:                     //（可选项）默认选中项的索引。默认值0。数字类型
  preload:                   //（可选项）预加载的页面个数。默认值0。数字类型
  list:                      // 标签栏各项配置信息，JSON对象数组类型
  [{
      text:                  //（可选项）标题文字，可以和icon同时存在，字符串类型
      iconPath:              //（可选项）默认状态下 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
      selectedIconPath:      //（可选项）选中状态下 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
      scale:                 //（可选项）图片的缩放倍数，默认为 4，数字类型。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 30*25，则图片实际尺寸需要为 90*75。
  }],
  frames:                    // 标签栏各项对应的页面的信息，JSON对象数组类型
  [{
      title:                 //（可选项）标签栏切换时对应顶部导航栏的标题文字，字符串类型
      ...                    // 同openFrameGroup方法中frames参数里面的参数
  }]
}`
      }]
    }],
    sampleCode: `// 打开只有navigationBar的页面：
api.openTabLayout({
    name: 'help',
    url: 'widget://html/help.html',
    title: '帮助',
    hideNavigationBar: false,
    navigationBar: {
        background: '#5082c2',
        color: '#fff',
        leftButtons: [{
            iconPath: 'widget://image/back.png'
        }]
    }
});

// 打开只有tabBar的页面：
api.openTabLayout({
    name: 'tabLayout',
    url: 'widget://html/tabLayout.html',
    hideTabBar: false,
    tabBar: {
        selectedColor: '#45C01A',
        list: [{
            text: '页面一',
            iconPath: 'widget://image/tab_1.png',
            selectedIconPath: 'widget://image/tab_1_hov.png'
        }, {
            text: '页面二',
            iconPath: 'widget://image/tab_2.png',
            selectedIconPath: 'widget://image/tab_2_hov.png'
        }, {
            text: '页面三',
            iconPath: 'widget://image/tab_3.png',
            selectedIconPath: 'widget://image/tab_3_hov.png'
        }],
        frames: [{
            name: 'page1',
            url: 'widget://html/page1.html'
        }, {
            name: 'page2',
            url: 'widget://html/page2.html'
        }, {
            name: 'page3',
            url: 'widget://html/page3.html'
        }]
    }
});`,
    usability: ['iOS系统，Android系统', '可提供的1.2.99及更高版本']
  }, {
    name: 'setTabLayoutAttr',
    desc: ['设置tabLayout属性', 'setTabLayoutAttr({params})'],
    params: [{
      tip: 'title',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）显示在顶部navigationBar上面的标题'
      }]
    }, {
      tip: 'hideNavigationBar',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否隐藏顶部navigationBar导航栏'
      }]
    }, {
      tip: 'hideTabBar',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否隐藏底部tabBar标签栏'
      }]
    }, {
      tip: 'animated',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）显示隐藏navigationBar、tabBar时是否有动画效果。'
      }]
    }],
    sampleCode: `api.setTabLayoutAttr({
    title: '首页'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.2.99及更高版本']
  }, {
    name: 'setNavBarAttr',
    desc: ['设置导航栏属性', 'setNavBarAttr({params})'],
    params: [{
      tip: 'background',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）导航栏背景。支持颜色值和图片'
      }]
    }, {
      tip: 'shadow',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）导航栏底部阴影线颜色'
      }]
    }, {
      tip: 'color',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）导航栏标题文字颜色'
      }]
    }, {
      tip: 'fontSize',
      desc: [{
        type: '数字',
        default: '无',
        desc: '（可选项）导航栏标题字体大小'
      }]
    }, {
      tip: 'fontWeight',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）导航栏标题文字粗细'
      }]
    }, {
      tip: 'fontFamily',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）导航栏标题文字字体。只支持iOS。'
      }]
    }, {
      tip: 'hideBackButton',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '（可选项）是否隐藏默认返回按钮。可以通过监听 navbackbtn 或 keyback 事件来处理返回按钮的点击事件。'
      }]
    }, {
      tip: 'leftButtons',
      desc: [{
        type: 'JSON对象数组',
        default: '无',
        desc: '（可选项）导航栏左边按钮组，左边按钮会替换掉默认的返回按钮，按钮按照数组顺序从左至右显示，按钮建议最多2个，可以通过监听 navitembtn 事件来处理按钮点击事件。',
        fields: `[{
  text:                 //（可选项）按钮标题文字，可以和icon同时存在，字符串类型
  color:                //（可选项）按钮标题文字颜色，默认值#000，字符串类型
  fontSize:             //（可选项）按钮标题字体大小。默认值17，数字类型
  fontWeight:           //（可选项）按钮标题字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
  fontFamily:           //（可选项）按钮标题字体。只支持iOS，字符串类型
  iconPath:             //（可选项）按钮 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
  scale:                //（可选项）图片的缩放倍数，默认为 4，数字类型。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 30*25，则图片实际尺寸需要为 90*75。
}]`
      }]
    }, {
      tip: 'rightButtons',
      desc: [{
        type: 'JSON对象数组',
        default: '无',
        desc: '（可选项）导航栏右边按钮组。按钮按照数组顺序从右至左显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件。',
        fields: `[{
  text:                 //（可选项）按钮标题文字，可以和icon同时存在，字符串类型
  color:                //（可选项）按钮标题文字颜色，默认值#000，字符串类型
  fontSize:             //（可选项）按钮标题字体大小。默认值17，数字类型
  fontWeight:           //（可选项）按钮标题字体粗细，默认值normal。字符串类型。Android及iOS8.2以下系统只支持normal、bold，iOS8.2及以上系统支持normal、bold、bolder、lighter、100~900。
  fontFamily:           //（可选项）按钮标题字体。只支持iOS，字符串类型
  iconPath:             //（可选项）按钮 icon 图标路径，可以和 text 同时存在，图片显示大小由图片尺寸和 scale 参数决定，字符串类型
  scale:                //（可选项）图片的缩放倍数，默认为 4，数字类型。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 30*25，则图片实际尺寸需要为 90*75。
}]`
      }]
    }],
    sampleCode: `api.setNavBarAttr({
    rightButtons: [{
        text: '完成'
    }]
});`,
    usability: ['iOS 系统，Android 系统', '可提供的 1.3.2 及更高版本']
  }, {
    name: 'getNavBarAttr',
    desc: ['获取导航栏属性。该方法为同步方法。', 'getNavBarAttr()'],
    sampleCode: `var res = api.getNavBarAttr();
api.alert({
    msg:JSON.stringify(res)
});`,
    usability: ['iOS 系统，Android 系统', '可提供的 3.0.31 及更高版本']
  }, {
    name: 'setTabBarAttr',
    desc: ['设置tabBar属性', 'setTabBarAttr({params})'],
    params: [{
      tip: 'index',
      desc: [{
        type: '数字',
        default: '无',
        desc: '（可选项）设置选中标签栏指定项'
      }]
    }, {
      tip: 'background',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标签栏背景。支持颜色值和图片'
      }]
    }, {
      tip: 'shadow',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标签栏顶部阴影线颜色'
      }]
    }, {
      tip: 'color',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标签栏各项的文字颜色'
      }]
    }, {
      tip: 'selectedColor',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标签栏各项选中状态下的文字颜色'
      }]
    }, {
      tip: 'fontSize',
      desc: [{
        type: '数字',
        default: '无',
        desc: '（可选项）标签栏各项文字字体大小'
      }]
    }, {
      tip: 'fontWeight',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标签栏各项文字粗细'
      }]
    }, {
      tip: 'fontFamily',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标签栏各项文字字体。只支持iOS。'
      }]
    }, {
      tip: 'textOffset',
      desc: [{
        type: '数字',
        default: '无',
        desc: '（可选项）标签栏各项文字距离底部的距离'
      }]
    }],
    sampleCode: `api.setTabBarAttr({
    index: 1
});`,
    usability: ['iOS系统，Android系统', '可提供的1.2.99及更高版本']
  }, {
    name: 'setTabBarItemAttr',
    desc: ['设置tabBar指定项的属性', 'setTabBarItemAttr({params})'],
    params: [{
      tip: 'index',
      desc: [{
        type: '数字',
        default: '无',
        desc: '要设置的指定项的索引'
      }]
    }, {
      tip: 'text',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）该项的标题文字'
      }]
    }, {
      tip: 'iconPath',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）该项默认状态下 icon 图标路径'
      }]
    }, {
      tip: 'selectedIconPath',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）该项选中状态下 icon 图标路径'
      }]
    }, {
      tip: 'scale',
      desc: [{
        type: '数字',
        default: '4',
        desc: '（可选项）图片的缩放倍数。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 3025，则图片实际尺寸需要为 9075。'
      }]
    }, {
      tip: 'badge',
      desc: [{
        type: 'JSON对象',
        default: '无',
        desc: '（可选项）该项的角标信息',
        fields: `{
  text：              //角标内容。传0时表示隐藏角标，其余任意值表示显示角标，可以为空字符串，字符串类型
  background：        //角标的背景，支持颜色和图片，默认值#f00，字符串类型
  color：             //角标文字颜色，默认值#fff，字符串类型
  fontSize：          //角标文字字体大小，默认值12，数字类型
  radius：            //角标的半径，默认值10，高度固定，宽度根据内容自动增长，数字类型
  x：                 //角标左边相对于所在项顶部中间的位置，默认值5，数字类型
  y：                 //角标顶部相对于所在项顶部的位置，默认值5，数字类型
}`
      }]
    }],
    sampleCode: `api.setTabBarItemAttr({
  index: 4,
  badge: {
      text: 1
  }
});`,
    usability: ['iOS系统，Android系统', '可提供的1.2.99及更高版本']
  }]
}, {
  name: '数据存储',
  icon: 'api_storage_icon',
  children: [{
    name: 'readFile',
    desc: ['读取文本文件内容，只支持utf-8编码文本类型文件', 'readFile({params}, callback(ret, err))'],
    params: [{
      tip: 'sync',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '执行结果的返回方式。为false时通过callback返回，为true时直接返回。'
      }]
    }, {
      tip: 'path',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '文件路径，支持绝对路径和文件路径协议如fs://、widget://等'
      }]
    }],
    sampleCode: `//异步返回结果：
api.readFile({
    path: 'fs://a.txt'
}, function(ret, err) {
    if (ret.status) {
        var data = ret.data;
    } else {
        api.alert({
            msg:JSON.stringify(err)
        });
    }
});

//同步返回结果：
var data = api.readFile({
    sync: true,
    path: 'fs://a.txt'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'writeFile',
    desc: ['写入内容到文本文件', 'writeFile({params}, callback(ret, err))'],
    params: [{
      tip: 'path',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '文件路径，支持绝对路径和文件路径协议如fs://、cache://等，不支持widget://目录，该目录只读'
      }]
    }, {
      tip: 'data',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '文件内容'
      }]
    }, {
      tip: 'append',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '是否以追加方式写入数据，默认会清除之前文件内容'
      }]
    }],
    sampleCode: `api.writeFile({
    path: 'fs://a.txt',
    data: 'writeFile测试内容'
  }, function(ret, err) {
    if (ret.status) {
        //成功
    } else {

    }
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setPrefs',
    desc: ['设置偏好数据，数据会存储到本地文件系统。', 'setPrefs({params})'],
    params: [{
      tip: 'key',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '键'
      }]
    }, {
      tip: 'value',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '值'
      }]
    }],
    sampleCode: `api.setPrefs({
    key: 'userName',
    value: 'api'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'getPrefs',
    desc: ['获取偏好设置值', 'getPrefs({params}, callback(ret, err))'],
    params: [{
      tip: 'sync',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '执行结果的返回方式。为false时通过callback返回，为true时直接返回。'
      }]
    }, {
      tip: 'key',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '键'
      }]
    }],
    sampleCode: `//异步返回结果：
api.getPrefs({
    key: 'userName'
}, function(ret, err) {
    var userName = ret.value;
});

//同步返回结果：
var userName = api.getPrefs({
    sync: true,
    key: 'userName'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'removePrefs',
    desc: ['删除偏好设置值', 'removePrefs({params})'],
    params: [{
      tip: 'key',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '键'
      }]
    }],
    sampleCode: `api.removePrefs({
    key: 'userName'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setGlobalData',
    desc: ['设置全局数据，数据只存储在内存中，不会存储到本地文件系统。', 'setGlobalData({params})'],
    params: [{
      tip: 'key',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '键'
      }]
    }, {
      tip: 'value',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '值'
      }]
    }],
    sampleCode: `api.setGlobalData({
    key: 'userName',
    value: 'api'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.2.87及更高版本']
  }, {
    name: 'getGlobalData',
    desc: ['获取全局数据', 'getGlobalData({params})'],
    params: [{
      tip: 'key',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '键'
      }]
    }],
    sampleCode: `var userName = api.getGlobalData({
    key: 'userName'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.2.87及更高版本']
  }, {
    name: 'clearCache',
    desc: ['清除缓存，包括cache://目录下的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。', 'clearCache({params}, callback(ret, err))'],
    params: [{
      tip: 'timeThreshold',
      desc: [{
        type: '数字',
        default: '0',
        desc: '（可选项）清除多少天前的缓存'
      }]
    }],
    sampleCode: `api.clearCache(function() {
    api.toast({
        msg: '清除完成'
    });
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'getCacheSize',
    desc: ['获取缓存占用空间大小，缓存包括cache://目录下的文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间', 'getCacheSize({params}, callback(ret, err))'],
    params: [{
      tip: 'sync',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '执行结果的返回方式。为false时通过callback返回，为true时直接返回。'
      }]
    }],
    sampleCode: `//异步返回结果：
api.getCacheSize(function(ret) {
    var size = ret.size;
});

//同步返回结果：
var size = api.getCacheSize({
    sync: true
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'getTotalSpace',
    desc: ['获取总存储空间大小', 'getTotalSpace({params},callback(ret, err))'],
    params: [{
      tip: 'sync',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '执行结果的返回方式。为false时通过callback返回，为true时直接返回。'
      }]
    }],
    sampleCode: `//异步返回结果：
api.getTotalSpace(function(ret, err) {
    var size = ret.size;
});

//同步返回结果：
var size = api.getTotalSpace({
    sync: true
});`,
    usability: ['iOS系统，Android系统', '可提供的1.2.7及更高版本']
  }, {
    name: 'getFreeDiskSpace',
    desc: ['获取剩余存储空间大小', 'getFreeDiskSpace({params},callback(ret, err))'],
    params: [{
      tip: 'sync',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '执行结果的返回方式。为false时通过callback返回，为true时直接返回。'
      }]
    }],
    sampleCode: `//异步返回结果：
api.getFreeDiskSpace(function(ret, err) {
    var size = ret.size;
});

//同步返回结果：
var size = api.getFreeDiskSpace({
    sync: true
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'loadSecureValue',
    desc: [
      '从加密的key.xml文件中读取指定数据，key.xml文件放置于网页包里面的res目录，配置方式：',
`<security>
  <item name="appKey" value="1111111"/>
</security>`,
      'loadSecureValue({params}, callback(ret, err))'
    ],
    params: [{
      tip: 'sync',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '执行结果的返回方式。为false时通过callback返回，为true时直接返回。'
      }]
    }, {
      tip: 'key',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '键'
      }]
    }],
    sampleCode: `//异步返回结果：
api.loadSecureValue({
    key: 'appKey'
}, function(ret, err) {
    var appKey = ret.value;
});

//同步返回结果：
var appKey = api.loadSecureValue({
    sync: true,
    key: 'appKey'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }]
}, {
  name: '消息事件',
  icon: 'api_event_icon',
  children: [{
    name: 'addEventListener',
    desc: ['监听事件，支持系统事件和自定义事件', 'addEventListener({params}, callback(ret, err))'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '自定义事件或系统事件名称, 详见 https://docs.apicloud.com/Client-API/api#2'
      }]
    }, {
      tip: 'extra',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）附加字段。一些特定事件可能需要提供额外的参数。',
        fields: `{
  threshold:           //当事件为scrolltobottom时，设置距离底部多少距离时触发事件，默认值为0，数字类型
  timeout:             //当事件为appidle时，设置经过多长时间不操作屏幕时触发，单位秒，数字类型
}`
      }]
    }],
    sampleCode: `//如监听网络连接事件
api.addEventListener({
    name: 'online'
}, function(ret, err) {
        api.alert({
            msg:'已连接网络'
        });
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'removeEventListener',
    desc: ['移除事件监听', 'removeEventListener({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '自定义事件或系统事件名称, 详见 https://docs.apicloud.com/Client-API/api#2'
      }]
    }],
    sampleCode: `api.removeEventListener({
    name: 'online'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'sendEvent',
    desc: ['将任意一个自定义事件广播出去，该事件可在任意页面通过 addEventListener 监听收到。', 'sendEvent({params})'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '任意自定义事件的名称，比如：apprunning、appover等'
      }]
    }, {
      tip: 'extra',
      desc: [{
        type: '字符串或 JSON 对象',
        default: '无',
        desc: '（可选项）附带的参数。在监听页面的回调里面通过 ret.value 获取。'
      }]
    }],
    sampleCode: `api.sendEvent({
    name: 'myEvent',
    extra: {
      key1: 'value1',
      key2: 'value2'
    }
});

//html页面a：
api.addEventListener({
    name: 'myEvent'
}, function(ret, err) {
    api.alert({
        msg:JSON.stringify(ret.value)
    });
});

//html页面b：
api.addEventListener({
    name: 'myEvent'
}, function(ret, err) {
    api.alert({
        msg:JSON.stringify(ret.value)
    });
});

//a、b页面都将收到 myEvent 事件`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'accessNative',
    desc: ['使用 SuperWebView 时，js 向原生发送消息。此方法只在使用 SuperWebView 时有效。', 'accessNative({params}, callback(ret, err))'],
    params: [{
      tip: 'name',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '消息名称。'
      }]
    }, {
      tip: 'extra',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）附带的参数。'
      }]
    }],
    sampleCode: `api.accessNative({
    name: 'showMenu',
    extra: {
        key: 'value'
    }
  }, function(ret, err) {
    if (ret) {
        api.alert({
            msg:JSON.stringify(ret)
        });
    } else {
        api.alert({
            msg:JSON.stringify(err)
        });
    }
});`,
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'notification',
    desc: ['向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclicked 事件获取该通知相关内容。', '注：当应用在前台弹出通知提示时，iOS平台的通知将在显示几秒后消失，不会在通知栏保留。', 'notification({params}, callback(ret, err))'],
    params: [{
      tip: 'vibrate',
      desc: [{
        type: '数组',
        default: '[100, 500, 100, 500]',
        desc: '（可选项）伴随节奏的震动，时间数组，单位：毫秒。iOS平台震动时间为固定值；Android平台节奏为【等待-震动-等待-震动..】，例如[100, 500, 100, 500]表现效果为：等待100毫秒-震动500毫秒-等待100毫秒-震动500毫秒'
      }]
    }, {
      tip: 'sound',
      desc: [{
        type: '字符串',
        default: 'default',
        desc: '（可选项）提示音，默认为系统设置的提示音。Android支持传入widget协议音频文件，例如：widget://res/horse.mp3；当实现闹钟功能时，iOS只支持widget://路径协议'
      }]
    }, {
      tip: 'light',
      desc: [{
        type: '布尔型',
        default: 'false',
        desc: '（可选项）设备提示灯是否闪烁'
      }]
    }, {
      tip: 'notify',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）弹出通知到状态栏。弹出时是否震动或响铃，可通过设置vibrate，sound等字段配合实现。',
        fields: `{
  title:''                //标题，Android中默认值为应用名称，支持Android和iOS 8.2以上系统
  content:''              //内容，默认值为'有新消息'
  extra:''                //附加信息，页面可以监听noticeclicked事件得到点击的通知的附加信息
  updateCurrent: false    //是否覆盖更新已有的通知，取值范围true|false。只Android有效
}`
      }]
    }, {
      tip: 'alarm',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）设置闹铃。与notify配合使用，即如果设置了闹铃，那么对应的notify将在设定的闹铃时间触发',
        fields: `{
  hour:           //小时，数字类型，取值范围（0-23），默认值为当前系统时
  minutes:        //分钟，数字类型，取值范围（0-59），默认值为当前系统分
  daysOfWeek:     //通知循环时间，以周为单位，数组类型，取值范围[1,2,3,4,5,6,7]，表示周日、周一、周二、周三、周四、周五、周六。若不传则不循环，只在当天或隔天的指定时间通知一次
  time:           //闹铃目标时间，数字类型，1970年至今的毫秒数，只在设定的时间执行一次，若设置了time，那么hour、minutes、daysOfWeek将被忽略
  openApp:        //当闹铃触发时是否打开当前应用，如果打开，则不弹出状态栏通知，bool类型，默认值为false。仅支持Android平台。
}`
      }]
    }],
    sampleCode: `//仅震动
api.notification({
    vibrate:[100, 500, 200, 500, 300, 500, 400, 500]
});

//仅提示音
api.notification({
    sound:'default'
});

//提示音+震动
api.notification();

//弹出状态栏通知
api.notification({
    notify: {
    title: '通知标题',
        content: '通知内容'
    }
});

//闹铃
api.notification({
    notify: {
        content: '闹钟'
    },
    //每周一、二、三、四、五的7点30分闹铃
    alarm: {
        hour: 7,
        minutes: 30,
        daysOfWeek: [2, 3, 4, 5, 6]
    }
}, function(ret, err) {
    var id = ret.id;
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'cancelNotification',
    desc: ['取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃', 'cancelNotification({params})'],
    params: [{
      tip: 'id',
      desc: [{
        type: '字符串',
        default: '0。如果传入-1，则取消本应用弹到状态栏的所有通知，iOS只支持清除所有弹到状态栏的通知；传入-1并不清除闹铃。',
        desc: '（可选项）调用 notification 方法时返回的 id'
      }]
    }],
    sampleCode: `api.cancelNotification({
    id: 1
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }]
}, {
  name: 'UI组件',
  icon: 'api_ui_icon',
  children: [{
    name: 'alert',
    desc: ['弹出带一个按钮的对话框，更多按钮的对话框请使用confirm方法', 'alert({params}, callback(ret, err))'],
    params: [{
      tip: 'title',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标题'
      }]
    }, {
      tip: 'msg',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）内容'
      }]
    }, {
      tip: 'buttons',
      desc: [{
        type: '字符串数组',
        default: '["确定"]',
        desc: '（可选项）按钮'
      }]
    }],
    sampleCode: `api.alert({
    title: 'testtitle',
    msg: 'testmsg',
}, function(ret, err) {

});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'confirm',
    desc: ['弹出带两个或三个按钮的confirm对话框', 'confirm({params}, callback(ret, err))'],
    params: [{
      tip: 'title',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标题'
      }]
    }, {
      tip: 'msg',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）内容'
      }]
    }, {
      tip: 'buttons',
      desc: [{
        type: '字符串数组',
        default: '["取消","确定"]',
        desc: '（可选项）按钮标题，若小于两个按钮，会补齐两个按钮；若大于三个按钮，则使用前三个按钮'
      }]
    }],
    sampleCode: `api.confirm({
    title: 'testtitle',
    msg: 'testmsg',
    buttons: ['确定', '取消']
}, function(ret, err) {
    var index = ret.buttonIndex;
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'prompt',
    desc: ['弹出带两个或三个按钮和输入框的对话框', 'prompt({params}, callback(ret, err))'],
    params: [{
      tip: 'title',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标题'
      }]
    }, {
      tip: 'msg',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）内容'
      }]
    }, {
      tip: 'text',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）输入框里面的默认内容'
      }]
    }, {
      tip: 'type',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）输入类型，不同输入类型弹出键盘类型不同，取值范围（text、password、number、email、url）'
      }]
    }, {
      tip: 'buttons',
      desc: [{
        type: '字符串数组',
        default: '["取消","确定"]',
        desc: '（可选项）按钮标题，若小于两个按钮，会补齐两个按钮；若大于三个按钮，则使用前三个按钮'
      }]
    }],
    sampleCode: `api.prompt({
    buttons: ['确定', '取消']
}, function(ret, err) {
    var index = ret.buttonIndex;
    var text = ret.text;
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'actionSheet',
    desc: ['底部弹出框', 'actionSheet({params}, callback(ret, err))'],
    params: [{
      tip: 'title',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）标题'
      }]
    }, {
      tip: 'cancelTitle',
      desc: [{
        type: '字符串',
        default: '取消',
        desc: '（可选项）取消按钮标题'
      }]
    }, {
      tip: 'destructiveTitle',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）红色警示按钮标题，一般用于做一些删除之类操作'
      }]
    }, {
      tip: 'buttons',
      desc: [{
        type: '字符串数组',
        default: '无',
        desc: '（可选项）其它按钮'
      }]
    }, {
      tip: 'style',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）样式设置，不传时使用默认样式',
        fields: `{
  layerColor:'',         //遮蔽层颜色，仅支持rgba颜色，默认值：rgba(0, 0, 0, 0.4)，Android平台仅支持设置alpha即透明度生效
  itemNormalColor:'',    //选项按钮正常状态背景颜色，支持#000、#000000、rgb、rgba，默认值：#F1F1F1
  itemPressColor:'',     //选项按钮按下时背景颜色，支持#000、#000000、rgb、rgba，默认值：#E6E6E6
  fontNormalColor:'',    //选项按钮正常状态文字颜色，支持#000、#000000、rgb、rgba，默认值：#007AFF
  fontPressColor:'',     //选项按钮按下时文字颜色，支持#000、#000000、rgb、rgba，默认值：#0060F0
  titleFontColor:''      //标题文字颜色，支持#000、#000000、rgb、rgba，默认值：#8F8F8F
}`
      }]
    }],
    sampleCode: `api.actionSheet({
    title: '底部弹出框测试',
    cancelTitle: '这里是取消按钮',
    destructiveTitle: '红色警告按钮',
    buttons: ['1', '2', '3']
}, function(ret, err) {
    var index = ret.buttonIndex;
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'showProgress',
    desc: ['显示进度提示框', 'showProgress({params})'],
    params: [{
      tip: 'style',
      desc: [{
        type: '字符串',
        default: 'default',
        desc: '（可选项）进度提示框风格',
        fields: `default    //默认`
      }]
    }, {
      tip: 'animationType',
      desc: [{
        type: '字符串',
        default: 'fade',
        desc: '（可选项）进度提示框动画类型',
        fields: `fade        //渐隐渐现
zoom        //缩放`
      }]
    }, {
      tip: 'title',
      desc: [{
        type: '字符串',
        default: '加载中',
        desc: '（可选项）标题'
      }]
    }, {
      tip: 'text',
      desc: [{
        type: '字符串',
        default: '请稍候...',
        desc: '（可选项）内容'
      }]
    }, {
      tip: 'modal',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否模态，模态时整个页面将不可交互'
      }]
    }],
    sampleCode: `api.showProgress({
    title: '努力加载中...',
    text: '先喝杯茶...',
    modal: false
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'hideProgress',
    desc: ['隐藏进度提示框', 'hideProgress()'],
    sampleCode: `api.hideProgress();`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'toast',
    desc: ['弹出一个定时自动关闭的提示框', 'toast({params})'],
    params: [{
      tip: 'msg',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '提示消息'
      }]
    }, {
      tip: 'duration',
      desc: [{
        type: '数字',
        default: '2000',
        desc: '（可选项）持续时长，单位：毫秒'
      }]
    }, {
      tip: 'location',
      desc: [{
        type: '字符串',
        default: 'bottom',
        desc: '（可选项）弹出位置，顶部、中间或底部',
        fields: `top         //顶部
middle      //中间
bottom      //底部`
      }]
    }, {
      tip: 'global',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否是全局的toast。若为false，toast将只在当前window范围可见；若为true，安卓手机上面弹出的位置将会固定在底部区域。'
      }]
    }],
    sampleCode: `api.toast({
    msg: '网络错误',
    duration: 2000,
    location: 'bottom'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openPicker',
    desc: ['打开时间选择器', 'openPicker({params}, callback(ret, err))'],
    params: [{
      tip: 'type',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '拾取器类型',
        fields: `date           //日期
time           //时间
date_time      //日期和时间，Android不支持`
      }]
    }, {
      tip: 'date',
      desc: [{
        type: '字符串',
        default: '当前时间',
        desc: '（可选项）时间格式化字符串，格式yyyy-MM-dd HH:mm'
      }]
    }, {
      tip: 'minDate',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）能够选择的最小时间，格式yyyy-MM-dd HH:mm，只iOS有效'
      }]
    }, {
      tip: 'maxDate',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）能够选择的最大时间，格式yyyy-MM-dd HH:mm，只iOS有效'
      }]
    }, {
      tip: 'title',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）显示在拾取器上面的标题'
      }]
    }, {
      tip: 'arrowRect',
      desc: [{
        type: 'JSON 对象',
        default: '无',
        desc: '（可选项）iPad中显示时，箭头指向的位置，只iPad有效',
        fields: `{
  x:0,                  //左上角x坐标，数字类型
  y:0,                  //左上角y坐标，数字类型
  w:0,                  //宽度，数字类型
  h:0,                  //高度，数字类型
}`
      }]
    }, {
      tip: 'arrowDirection',
      desc: [{
        type: '字符串',
        default: 'any',
        desc: '（可选项）iPad中显示时，箭头指向的方向，只iPad有效',
        fields: `left         // 指向左边
right        // 指向右边
up           // 指向上边
down         // 指向下边
any          // 系统根据页面情况选择合适的方向`
      }]
    }],
    sampleCode: `api.openPicker({
    type: 'date_time',
    date: '2014-05-01 12:30',
    title: '选择时间'
}, function(ret, err) {
    if (ret) {
      api.alert({
          msg:JSON.stringify(ret)
      });
    } else {
      api.alert({
          msg:JSON.stringify(err)
      });
    }
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setRefreshHeaderInfo',
    desc: ['显示默认下拉刷新组件，使用默认下拉刷新组件时会自动重新设置页面的弹动属性。', 'setRefreshHeaderInfo({params}, callback(ret, err))'],
    params: [{
      tip: 'visible',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否可见'
      }]
    }, {
      tip: 'bgColor',
      desc: [{
        type: '字符串',
        default: '当defaultRefreshHeader为pull时为rgba(187, 236, 153, 1.0)，为swipe时为#fff',
        desc: '（可选项）背景颜色'
      }]
    }, {
      tip: 'pathColor',
      desc: [{
        type: '字符串',
        default: '#0F9D58',
        desc: '（可选项）进度条的颜色，defaultRefreshHeader为swipe时生效。'
      }]
    }, {
      tip: 'loadingImg',
      desc: [{
        type: '字符串',
        default: '旋转箭头图片',
        desc: '（可选项）上拉下拉时的图片地址，defaultRefreshHeader为pull时生效。'
      }]
    }, {
      tip: 'textColor',
      desc: [{
        type: '字符串',
        default: 'rgba(109, 128, 153, 1.0)',
        desc: '（可选项）文本颜色，defaultRefreshHeader为pull时生效。'
      }]
    }, {
      tip: 'textDown',
      desc: [{
        type: '字符串',
        default: '下拉可以刷新...',
        desc: '（可选项）下拉文字描述，defaultRefreshHeader为pull时生效。'
      }]
    }, {
      tip: 'textUp',
      desc: [{
        type: '字符串',
        default: '松开可以刷新...',
        desc: '（可选项）松开时文字描述，defaultRefreshHeader为pull时生效。'
      }]
    }, {
      tip: 'textLoading',
      desc: [{
        type: '字符串',
        default: '加载中...',
        desc: '（可选项）加载状态文字描述，defaultRefreshHeader为pull时生效。'
      }]
    }, {
      tip: 'textTime',
      desc: [{
        type: '字符串',
        default: '最后更新加日期时间',
        desc: '（可选项）更新时间文字描述，defaultRefreshHeader为pull时生效。'
      }]
    }, {
      tip: 'showTime',
      desc: [{
        type: '布尔',
        default: 'true',
        desc: '（可选项）是否显示更新时间，defaultRefreshHeader为pull时生效。'
      }]
    }],
    sampleCode: `api.setRefreshHeaderInfo({
    loadingImg: 'widget://image/refresh.png',
    bgColor: '#ccc',
    textColor: '#fff',
    textDown: '下拉刷新...',
    textUp: '松开刷新...'
}, function(ret, err) {
    //在这里从服务器加载数据，加载完成后调用api.refreshHeaderLoadDone()方法恢复组件到默认状态
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setCustomRefreshHeaderInfo',
    desc: ['显示自定义下拉刷新组件。', '使用自定义下拉刷新组件之前，需要在config.xml里面配置要使用的自定义下拉刷新模块名称,如：', '<preference name="customRefreshHeader" value="UIPullRefresh"/>', '或者在使用openWin、openFrame等方法打开页面时传入customRefreshHeader参数来指定。', 'setCustomRefreshHeaderInfo({params}, callback(ret, err))'],
    params: [{
      tip: '由对应的自定义下拉刷新模块提供'
    }],
    sampleCode: `api.setCustomRefreshHeaderInfo({
    bgColor: '#C0C0C0',
    images: {
      pull: 'widget://image/refresh/pulling.png',
      transform: [
          'widget://image/refresh/transform0.png',
          'widget://image/refresh/transform1.png',
          'widget://image/refresh/transform2.png',
          'widget://image/refresh/transform3.png',
          'widget://image/refresh/transform4.png',
          'widget://image/refresh/transform5.png',
          'widget://image/refresh/transform6.png'
      ],
      load: [
          'widget://image/refresh/loading0.png',
          'widget://image/refresh/loading1.png',
          'widget://image/refresh/loading2.png',
          'widget://image/refresh/loading3.png',
          'widget://image/refresh/loading4.png',
      ]
    }
}, function(ret, err) {
    //在这里从服务器加载数据，加载完成后调用api.refreshHeaderLoadDone()方法恢复组件到默认状态
});`,
    usability: ['iOS系统，Android系统', '可提供的1.2.0及更高版本']
  }, {
    name: 'refreshHeaderLoading',
    desc: ['设置下拉刷新组件为刷新中状态', 'refreshHeaderLoading()'],
    sampleCode: `api.refreshHeaderLoading();`,
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'refreshHeaderLoadDone',
    desc: ['通知下拉刷新数据加载完毕，组件会恢复到默认状态', 'refreshHeaderLoadDone()'],
    sampleCode: `api.refreshHeaderLoadDone();`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'showFloatBox',
    desc: ['展示一个悬浮框，浮动在屏幕上。', 'showFloatBox({params}, callback)'],
    params: [{
      tip: 'preventDefault',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否阻止默认行为，若传true，可以在回调方法里面处理悬浮框点击操作。默认的行为：1、在主widget调用该方法无效 2、点击后会弹出退出应用提示'
      }]
    }, {
      tip: 'iconPath',
      desc: [{
        type: '字符串',
        default: '应用图标',
        desc: '（可选项）展示在悬浮框中的图片地址'
      }]
    }, {
      tip: 'duration',
      desc: [{
        type: '字符串',
        default: '5000毫秒',
        desc: '（可选项）自动消隐时长。在该时长内不发生触摸悬浮框行为，悬浮框自动消隐至半透状态'
      }]
    }],
    sampleCode: `api.showFloatBox({
    iconPath: 'widget://image/icon.png',
    duration: 3000
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'setMenuItems',
    desc: ['设置选择文字弹出菜单。', 'setMenuItems({params}, callback)'],
    params: [{
      tip: 'customItems',
      desc: [{
        type: '字符串数组',
        default: '无',
        desc: '自定义菜单项。自定义菜单项会添加到系统默认菜单项的后面。'
      }]
    }, {
      tip: 'systemItems',
      desc: [{
        type: '字符串数组',
        default: '无',
        desc: '（可选项）系统菜单项。如果不传该参数，则会显示系统菜单项，自定义菜单项会添加到系统菜单项后面；如果传空数组，则不显示系统菜单项；如果传了非空数组，则显示传入的系统菜单。注意：不同系统版本的系统默认菜单项可能会有所不同，会存在无法屏蔽某些系统菜单的情况。',
        fields: `copy                // 复制
selectAll           // 全选
_lookup             // 查询
_addShortcut        // 添加...
_share              // 共享...`
      }]
    }],
    sampleCode: `api.setMenuItems({
    customItems: ['菜单1', '菜单2']
    systemItems: []
}, function(ret, err){
    var index = ret.index;
});`,
    usability: ['iOS系统', '可提供的1.2.98及更高版本']
  }]
}, {
  name: '多媒体',
  icon: 'api_media_icon',
  children: [{
    name: 'getPicture',
    desc: ['通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。', 'getPicture({params}, callback(ret, err))'],
    params: [{
      tip: 'sourceType',
      desc: [{
        type: '字符串',
        default: 'library',
        desc: '（可选项）图片源类型，从相册、图片库或相机获取图片',
        fields: `library         //图片库
camera          //相机
album           //相册`
      }]
    }, {
      tip: 'encodingType',
      desc: [{
        type: '字符串',
        default: 'png',
        desc: '（可选项）返回图片类型，jpg或png',
        fields: `jpg      //指定图片格式为jpg
png      //指定图片格式为png`
      }]
    }, {
      tip: 'mediaValue',
      desc: [{
        type: '字符串',
        default: 'pic',
        desc: '（可选项）媒体类型，图片或视频',
        fields: `pic        //图片
video      //视频
all        //图片和视频，Android不支持`
      }]
    }, {
      tip: 'destinationType',
      desc: [{
        type: '字符串',
        default: 'url',
        desc: '（可选项）返回数据类型，指定返回图片地址或图片经过base64编码后的字符串',
        fields: `base64      //指定返回数据为base64编码后内容
url         //指定返回数据为选取的图片地址`
      }]
    }, {
      tip: 'direction',
      desc: [{
        type: '字符串',
        default: 'rear',
        desc: '（可选项）选择前置或后置摄像头，取值范围（front、rear），只支持iOS'
      }]
    }, {
      tip: 'allowEdit',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否可以选择图片后进行编辑，支持iOS及部分安卓手机'
      }]
    }, {
      tip: 'preview',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否选择图片后进行预览，只支持iOS。'
      }]
    }, {
      tip: 'quality',
      desc: [{
        type: '数字',
        default: '50',
        desc: '（可选项）图片质量，只针对jpg格式图片（0-100整数）'
      }]
    }, {
      tip: 'videoQuality',
      desc: [{
        type: '字符串',
        default: 'medium',
        desc: '（可选项）视频质量，调用相机录制视频时该参数生效。取值范围(low、medium、high)，质量越高，录制的视频文件占用存储空间越大。'
      }]
    }, {
      tip: 'targetWidth',
      desc: [{
        type: '数字',
        default: '原图宽度',
        desc: '（可选项）压缩后的图片宽度，图片会按比例适配此宽度'
      }]
    }, {
      tip: 'targetHeight',
      desc: [{
        type: '数字',
        default: '原图高度',
        desc: '（可选项）压缩后的图片高度，图片会按比例适配此高度'
      }]
    }, {
      tip: 'saveToPhotoAlbum',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）拍照或录制视频后是否保存到系统相册目录。注意此处仅是文件系统层面的操作，使用诸如“图库”App仍然有可能查看到。'
      }]
    }, {
      tip: 'groupName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）保存图片到自定义分组相册目录，相册不存在则会进行创建。可用性：可提供的1.2.74及更高版本'
      }]
    }],
    sampleCode: `api.getPicture({
    sourceType: 'camera',
    encodingType: 'jpg',
    mediaValue: 'pic',
    destinationType: 'url',
    allowEdit: true,
    quality: 50,
    targetWidth: 100,
    targetHeight: 100,
    saveToPhotoAlbum: false
}, function(ret, err) {
    if (ret) {
        api.alert({
            msg:JSON.stringify(ret)
        });
    } else {
        api.alert({
            msg:JSON.stringify(err)
        });
    }
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'saveMediaToAlbum',
    desc: ['保存图片和视频到系统相册', 'saveMediaToAlbum({params}, callback(ret, err))'],
    params: [{
      tip: 'path',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '文件路径，支持网络链接地址、fs://、widget://等扩展文件路径协议，本地文件路径必须带有扩展名'
      }]
    }, {
      tip: 'groupName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）保存图片到自定义分组相册目录，相册不存在则会进行创建。可用性：可提供的1.2.74及更高版本'
      }]
    }],
    sampleCode: `api.saveMediaToAlbum({
    path: 'fs://1.png'
}, function(ret, err) {
    if (ret && ret.status) {
        api.alert({
            msg:'保存成功'
        });

    } else {
        api.alert({
            msg:'保存失败'
        });
    }
});`,
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'screenCapture',
    desc: ['屏幕截取，可截取整个屏幕、当前页面、avm 页面指定元素等。', 'screenCapture({params}, callback(ret, err))'],
    params: [{
      tip: 'region',
      desc: [{
        type: '字符串',
        default: '当前页面区域',
        desc: '要截取的屏幕区域范围，默认为当前页面区域。',
        fields: `screen            // 整个屏幕，包含状态栏、虚拟按键栏区域
window            // 整个 window，包含导航栏、底部标签栏区域
#elementId        // avm 页面的指定元素区域，elementId 为元素的 id`
      }]
    }, {
      tip: 'destinationType',
      desc: [{
        type: '字符串',
        default: 'url',
        desc: '数据返回类型。',
        fields: `url            // 以文件路径返回
base64         // 以 base64 数据返回`
      }]
    }],
    sampleCode: `// 截取当前页面
api.screenCapture(function(ret, err) {
    console.log(ret.savePath);
});

// 截取 avm 页面中指定元素区域
api.screenCapture({
    region: '#user'
}, function(ret, err) {
    console.log(ret.savePath);
});`,
    usability: ['iOS系统，Android系统', '可提供的3.0.12及更高版本']
  }, {
    name: 'startRecord',
    desc: ['录制音频', 'startRecord({params})'],
    params: [{
      tip: 'path',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）文件路径，不传时自动创建路径'
      }]
    }, {
      tip: 'format',
      desc: [{
        type: '字符串',
        default: 'amr',
        desc: '（可选项）音频格式',
        fields: `amr         // amr 格式
wav         // wav 格式`
      }]
    }],
    sampleCode: `api.startRecord({
    path: 'fs://a.amr'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'stopRecord',
    desc: ['停止录音', 'stopRecord(callback(ret, err))'],
    sampleCode: `api.stopRecord(function(ret, err) {
    if (ret) {
      var path = ret.path;
      var duration = ret.duration;
    }
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'startPlay',
    desc: ['播放本地音频，支持 amr 格式。', '当调用 pausePlay 方法暂停播放后，再次调用本方法时，若文件路径不变则继续播放，否则播放新的音频。', 'startPlay({params}, callback(ret, err))'],
    params: [{
      tip: 'path',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '文件路径，支持fs://、widget://等文件路径协议'
      }]
    }],
    sampleCode: `api.startPlay({
    path: 'widget://res/1.mp3'
}, function(ret, err) {
    if (ret) {
        api.alert({
            msg:'播放完成'
        });

    } else {
        api.alert({
            msg:JSON.stringify(err)
        });
    }
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'pausePlay',
    desc: ['暂停播放音频', 'pausePlay()'],
    sampleCode: `api.pausePlay();`,
    usability: ['iOS 系统，Android 系统', '可提供的 3.0.30 及更高版本']
  }, {
    name: 'stopPlay',
    desc: ['停止播放音频', 'stopPlay()'],
    sampleCode: `api.stopPlay();`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'openVideo',
    desc: ['打开系统视频播放器', 'openVideo({params})'],
    params: [{
      tip: 'url',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '本地文件路径（支持fs://路径协议）或者网络资源地址'
      }]
    }],
    sampleCode: `api.openVideo({
    url: 'fs://res/1.mp4'
});`,
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }]
}, {
  name: '模块加载',
  icon: 'api_module_icon',
  children: [{
    name: 'require',
    desc: ['引用模块', 'require()'],
    sampleCode: `var bMap = api.require("bMap");`,
    usability: ['iOS系统，Android系统']
  }]
}, {
  name: 'WebApp历史',
  icon: 'api_history_icon',
  children: [{
    name: 'historyBack',
    desc: ['当前 window 或者 frame 的 a 标签历史记录后退一页', 'historyBack({params}, callback(ret, err))'],
    params: [{
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名称，若不传则表示对当前页面进行操作'
      }]
    }, {
      tip: 'query',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否只查询。为 true 时表示只查询是否可以后退，而不进行后退操作'
      }]
    }],
    sampleCode: [`api.historyBack({
    frameName: 'detail'
}, function(ret, err) {
    if (!ret.status) {
        api.closeWin();
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }, {
    name: 'historyForward',
    desc: ['当前 window 或者 frame 的 a 标签历史记录前进一页', 'historyForward({params}, callback(ret, err))'],
    params: [{
      tip: 'frameName',
      desc: [{
        type: '字符串',
        default: '无',
        desc: '（可选项）frame 名称，若不传则表示对当前页面进行操作'
      }]
    }, {
      tip: 'query',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否只查询。为 true 时表示只查询是否可以前进，而不进行前进操作'
      }]
    }],
    sampleCode: [`api.historyForward({
  frameName: 'detail'
}, function(ret, err) {
    if (!ret.status) {

    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.0.0及更高版本']
  }]
}, {
  name: '其他',
  icon: 'api_ui_icon',
  children: [{
    name: 'pageUp',
    desc: ['页面向上滚动一页', 'pageUp({params}, callback(ret, err))'],
    params: [{
      tip: 'top',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否直接滚动到最顶部'
      }]
    }],
    sampleCode: [`api.pageUp(function(ret, err) {
    if (!ret.scrolled) {
        //已经滚动到顶部
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'pageDown',
    desc: ['页面向下滚动一页', 'pageDown({params}, callback(ret, err))'],
    params: [{
      tip: 'bottom',
      desc: [{
        type: '布尔',
        default: 'false',
        desc: '（可选项）是否直接滚动到最底部'
      }]
    }],
    sampleCode: [`api.pageDown(function(ret, err) {
    if (!ret.scrolled) {
        //已经滚动到底部
    }
});`],
    usability: ['iOS系统，Android系统', '可提供的1.1.0及更高版本']
  }, {
    name: 'setFocus',
    desc: ['设置input是否获取焦点', 'setFocus({params})'],
    params: [{
      tip: 'inputId',
      desc: [{
        type: '字符串',
        default: '无',
        desc: 'input标签id'
      }]
    }, {
      tip: 'focus',
      desc: [{
        type: '布尔',
        default: '无',
        desc: '是否获取焦点'
      }]
    }],
    sampleCode: [`api.setFocus({
    inputId: 'test',
    focus: true
});`],
    usability: ['iOS系统，Android系统', '可提供的1.3.35及更高版本']
  }]
}]