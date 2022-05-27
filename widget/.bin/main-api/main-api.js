(function() {
	var apiList = [
		{
			name: "属性",
			icon: "api_property_icon",
			children: [
				{
					name: "appId",
					desc: ["应用的 ID，可以在网站控制台概览里面查看，字符串类型"],
					sampleCode: ["var appId = api.appId; //比如： A6980386445546"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "appName",
					desc: ["应用在桌面显示名称，字符串类型"],
					sampleCode: ["var appName = api.appName; //比如： AppLoader"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "appVersion",
					desc: ["应用版本号，字符串类型"],
					sampleCode: ["var appVersion = api.appVersion; // 比如： 1.0.0"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "systemType",
					desc: ["系统类型，字符串类型"],
					enum:
						"ios          //iOS\u7CFB\u7EDF\nandroid        //Android\u7CFB\u7EDF\nwin            //Windows\u7CFB\u7EDF\nwp             //Windows Phone\u7CFB\u7EDF",

					sampleCode: ["var systemType = api.systemType; // 比如： ios"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "systemVersion",
					desc: ["手机平台的系统版本，字符串类型"],
					sampleCode: ["var systemVersion = api.systemVersion;  // 比如： 8.0"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "version",
					desc: ["引擎版本信息，字符串类型"],
					sampleCode: ["var version = api.version;  //比如： 1.0.0"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "language",
					desc: ["当前系统语言，字符串类型"],
					sampleCode: ["var language = api.language;  //比如： zh-cn"],
					usability: ["iOS系统，Android系统", "可提供的3.0.13及更高版本"]
				},
				{
					name: "deviceId",
					desc: [
						"设备唯一标识，字符串类型",
						"因系统限制，iOS系统上面无法获取设备唯一标识udid、IMEI号、Mac地址等信息，这里返回的是与证书相关联的uuid，即使应用卸载了重新安装值也不会变化。",
						"安卓部分系统也存在限制，一些设备上无法获取IMEI号、Mac地址等信息：安卓9.0及之前的系统中，在动态申请“获取手机信息”权限后，可获得IMEI号，而安卓10及以上版本，系统则完全禁止获取IMEI。因此，综合安卓系统的实际情况，deviceId的返回值优先级如下：若当前设备能正常获取IMEI，则返回IMEI号；若IMEI号异常，则返回系统安全码ANDROID_ID；若ANDROID_ID异常，则返回设备MAC地址；若MAC地址异常，则返回设备序列号；若序列号异常，则随机生成一个UUID。该UUID的生命周期自生成起，直至APP被卸载，若APP在同一个设备中被重新安装，将生成新的UUID。"
					],
					sampleCode: [
						"var deviceId = api.deviceId;  //比如： FC408F8B-9598-48B6-A740-B9037ADCXXXE"
					],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "deviceToken",
					desc: [
						"iOS中用于推送的DeviceToken，如果未添加相关推送模块，或者云编译的mobileprovision证书未开启推送功能，则可能会返回空字符串，字符串类型"
					],
					sampleCode: [
						"var deviceToken = api.deviceToken;  //比如： a22241adab6c68b3687a9f0f086c540341f4b3f010546d4af4834ada32281615"
					],
					usability: ["iOS系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "deviceModel",
					desc: [
						"设备型号，字符串类型",
						"注：对于2017年秋之前发布的iOS设备，引擎对原始的型号值做了映射，比如iPhone 7上面会直接返回iPhone 7；而对于2017年秋及之后发布的iOS设备，返回的值则是原始的设备型号值，比如在iPhone 8上面返回的可能是iPhone10,1而不是iPhone 8。可以在<a>https://www.theiphonewiki.com/wiki/Models</a>查询iOS设备型号。"
					],
					sampleCode: [
						"var deviceModel = api.deviceModel;  // 比如iPhone X的型号： iPhone10,3"
					],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "deviceName",
					desc: ["设备名称，字符串类型"],
					sampleCode: ["var deviceName = api.deviceName;  // 比如：“柚子”的 iPhone"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "uiMode",
					desc: ["设备类型，字符串类型"],
					enum: "pad\nphone\ntv\ncar\ndesk\nwatch",

					sampleCode: ["var uiMode = api.uiMode;  // 比如：phone"],
					usability: ["iOS系统，Android系统", "可提供的1.2.10及更高版本"]
				},
				{
					name: "platform",
					desc: ["当前运行平台，字符串类型"],
					enum:
						"app       // \u8868\u793A\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u4E3A App \u7AEF\nweb       // \u8868\u793A\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u4E3A Web \u7AEF\nmp        // \u8868\u793A\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u4E3A\u5C0F\u7A0B\u5E8F\u7AEF",

					sampleCode: ["var platform = api.platform;  // 比如：app"],
					usability: ["iOS系统，Android系统", "可提供的1.3.68及更高版本"]
				},
				{
					name: "operator",
					desc: ["运营商名称，若未获取到则返回none，字符串类型"],
					sampleCode: "var operator = api.operator;  // 比如：中国移动",
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "connectionType",
					desc: ["当前网络连接类型，如 2g、3g、4g、wifi 等，字符串类型"],
					enum:
						"unknown            //\u672A\u77E5\nethernet        //\u4EE5\u592A\u7F51\nwifi            //wifi\n2g                //2G\u7F51\u7EDC\n3g                //3G\u7F51\u7EDC\n4g                //4G\u7F51\u7EDC\nnone            //\u65E0\u7F51\u7EDC",

					sampleCode: "var connectionType = api.connectionType;  //比如： wifi",
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "fullScreen",
					desc: ["应用是否全屏，布尔类型，只支持iOS"],
					sampleCode: ["var fullScreen = api.fullScreen;  // 比如： true"],
					usability: ["iOS系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "screenWidth",
					desc: ["屏幕分辨率宽，数字类型"],
					sampleCode: ["var screenWidth = api.screenWidth;  // 比如： 640"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "screenHeight",
					desc: ["屏幕分辨率高，数字类型"],
					sampleCode: ["var screenHeight = api.screenHeight;  // 比如：960"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "winName",
					desc: [
						"当前 window 名称，字符串类型",
						"该属性值为 openWin() 时传递的 name 参数值，注意首页的名称为 root"
					],
					sampleCode: ["var winName = api.winName;  //比如： root"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "winWidth",
					desc: [
						"当前 window 宽度，数字类型",
						"此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winWidth 为 320，因此前端需根据 winWidth 和 winHeight 来进行布局"
					],
					sampleCode: ["var winWidth = api.winWidth;  // 比如： 320"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "winHeight",
					desc: [
						"当前 window 高度，数字类型",
						"此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winHeight 为 568（若不使用iOS7风格则为 548），因此前端需根据 winWidth 和 winHeight 来进行布局"
					],
					sampleCode: ["var winHeight = api.winHeight;  // 比如： 568"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "frameName",
					desc: [
						"frame 名称，字符串类型",
						"若当前环境为 window 中，则该属性值为空字符串"
					],
					sampleCode: ["var frameName = api.frameName;  //比如： trans-con"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "frameWidth",
					desc: [
						"frame 宽度，数字类型",
						"若当前环境为 window 中，则值和 winWidth 相同"
					],
					sampleCode: ["var frameWidth = api.frameWidth;  // 比如： 320"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "frameHeight",
					desc: [
						"frame 高度，数字类型",
						"若当前环境为 window 中，则值和 winHeight 相同"
					],
					sampleCode: ["var frameHeight = api.frameHeight;  // 比如： 504"],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "safeArea",
					desc: [
						"页面不被其它内容（如状态栏）遮住的区域，JSON对象",
						"通过safeArea能够知道当前页面哪些地方被遮住，从而做出相应的调整，保证页面重要元素不被遮挡住。"
					],
					enum:
						"{\n  top:            // \u5B89\u5168\u533A\u57DF\u4E0A\u8FB9\u7F18\uFF0C\u5BF9\u4E8E\u6C89\u6D78\u5F0F\u4E0Bwindow\u4E2D\u8BE5\u503C\u901A\u5E38\u4E3A\u72B6\u6001\u680F\u9AD8\u5EA6\uFF0C\u5168\u5C4F\u6216\u975E\u6C89\u6D78\u5F0F\u4E0B\u4E3A0\uFF08iPhone X\u7AD6\u5C4F\u65F6\u5168\u5C4F\u72B6\u6001\u4E0B\u4E5F\u4E3A44\uFF09\n  left:            // \u5B89\u5168\u533A\u57DF\u5DE6\u8FB9\u7F18\uFF0C\u901A\u5E38\u4E3A0\uFF08iPhone X\u6A2A\u5C4F\u65F6\u4E3A44\uFF09\n  bottom:            // \u5B89\u5168\u533A\u57DF\u4E0B\u8FB9\u7F18\uFF0C\u901A\u5E38\u4E3A0\uFF08iPhone X\u7AD6\u5C4F\u65F6\u4E3A34\uFF0C\u6A2A\u5C4F\u65F6\u4E3A21\uFF09\n  right:            // \u5B89\u5168\u533A\u57DF\u53F3\u8FB9\u7F18\uFF0C\u901A\u5E38\u4E3A0\uFF08iPhone X\u6A2A\u5C4F\u65F6\u4E3A44\uFF09\n}",

					sampleCode:
						"var safeArea = api.safeArea;        // JSON对象，如{top:20, left:0, bottom:0, right:0}",
					usability: ["iOS系统，Android系统", "可提供的1.2.33及更高版本"]
				},
				{
					name: "pageParam",
					desc: [
						"页面参数，JSON 对象类型",
						"用于获取页面间传递的参数值，为 openWin()、openFrame() 等方法中的 pageParam 参数对应值"
					],
					sampleCode: [
						'var pageParam = api.pageParam; //比如： {"name" : "tans-con"}'
					],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "wgtParam",
					desc: [
						"widget 参数，JSON 对象类型",
						"用于获取 widget 间传递的参数值，为 openWidget() 方法中的 wgtParam 参数对应值"
					],
					sampleCode: [
						'var wgtParam = api.wgtParam;  //比如： {"name": "API Demo"}'
					],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "appParam",
					desc: [
						"当应用被第三方应用打开时，传递过来的参数，字符串类型",
						"建议通过appintent事件监听应用被第三方应用调起，并在事件回调里面获取参数进行处理。"
					],
					sampleCode: [
						'var appParam = api.appParam;  //比如： {"name": "API Demo"}'
					],
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "statusBarAppearance",
					desc: ["当前应用状态栏是否支持沉浸式效果，布尔类型"],
					sampleCode: [
						"var statusBarAppearance = api.statusBarAppearance; // 比如： true"
					],
					usability: ["iOS系统，Android系统", "可提供的1.2.0及更高版本"]
				},
				{
					name: "wgtRootDir",
					desc: [
						"widget: //协议对应的真实目录，即 widget 网页包的根目录，字符串类型",
						"注意该目录为只读，不要往该目录下面写文件"
					],
					sampleCode: [
						"var wgtRootDir = api.wgtRootDir;",
						"/*",
						"比如：",
						"/private/var/mobile/Containers/Bundle/Application/56218B5B-1B59-48CD-8080-DAC54DB46446/UZApp.app/widget",
						"*/"
					],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "fsDir",
					desc: ["fs: //协议对应地真实目录，字符串类型"],
					sampleCode: [
						"var fsDir = api.fsDir; ",
						"/*",
						"比如：",
						"/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/A123456789",
						"*/"
					],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "cacheDir",
					desc: [
						"cache://协议对应的真实目录，字符串类型",
						"iOS 平台下载的文件一般存放于该目录下，否则提交 AppStore 审核时可能会不通过，且此目录下的内容在手机备份时不会被备份"
					],
					sampleCode: [
						"var cacheDir = api.cacheDir;",
						"/*",
						"比如：",
						"/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Library/Caches/APICloud/Cache/XXXXXX",
						"*/"
					],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "boxDir",
					desc: [
						"box://协议对应的真实目录，字符串类型",
						"iOS上面在应用Documents下，安卓上面在系统为app分配的沙箱下，root或者越狱的手机可看到。"
					],
					sampleCode: [
						"var boxDir = api.boxDir; ",
						"/*",
						"比如：",
						"/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Documents/uzfs/box",
						"*/"
					],
					usability: ["iOS系统，Android系统", "可提供的1.2.0及更高版本"]
				},
				{
					name: "debug",
					desc: ["获取config.xml配置的debug字段的值。"],
					sampleCode: ["var debug = api.debug;  // 比如： true"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "channel",
					desc: ["渠道号，字符串类型"],
					sampleCode: ["var channel = api.channel; //如：Apple App Store"],
					usability: ["iOS系统，Android系统", "可提供的1.2.0及更高版本"]
				},
				{
					name: "jailbreak",
					desc: ["设备是否越狱，布尔类型"],
					sampleCode: ["var jailbreak = api.jailbreak; //如：false"]
				},
				{
					name: "isRecoveryMode",
					desc: [
						"使用WKWebView加载页面时，若配置了WKWebView渲染进程崩溃后刷新当前页面，则刷新后该属性值为true。只支持iOS，布尔类型"
					],
					sampleCode: ["if (api.isRecoveryMode) {", " // to do", "}"],
					usability: ["iOS系统，Android系统", "可提供的1.2.9及更高版本"]
				}
			]
		},

		{
			name: "窗口系统",
			icon: "api_win_icon",
			children: [
				{
					name: "openWin",
					desc: [
						"打开window, 窗口操作",
						"若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。",
						"openWin({params})"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "window名字"
								}
							]
						},

						{
							tip: "url",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。"
								}
							]
						},

						{
							tip: "data",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据"
								}
							]
						},

						{
							tip: "headers",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）请求头"
								}
							]
						},

						{
							tip: "singleInstance",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）设置该window是否为单例对象。若设置为单例对象，当调用closeWin方法关闭时，window将只是从屏幕移除而不会被销毁，下次再打开时将直接使用已存在的window，而不会再重新创建。"
								}
							]
						},

						{
							tip: "avm",
							desc: [
								{
									type: "布尔",
									default:
										"若在config.xml里面配置了avm字段，则默认值为配置的值，否则为false",
									desc:
										"（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。"
								}
							]
						},

						{
							tip: "useWKWebView",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否使用WKWebView来加载页面。参考WKWebView介绍。https://developer.yonyou.com/thread-151904-1-1.html"
								}
							]
						},

						{
							tip: "allowAccessFromFile",
							desc: [
								{
									type: "布尔",
									default: "全局加密下为false",
									desc:
										"（可选项）设置是否可以在本地页面中访问本地或远程资源，为保证代码安全，在开启全局加密情况下默认禁止访问。只在useWKWebView参数为true时有效。"
								}
							]
						},

						{
							tip: "historyGestureEnabled",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。"
								}
							]
						},

						{
							tip: "syncCookie",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc:
										"（可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。"
								}
							]
						},

						{
							tip: "pageParam",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）页面参数，新页面中可以通过 api.pageParam 获取"
								}
							]
						},

						{
							tip: "bounces",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc:
										"若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为 false 描述：（可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。"
								}
							]
						},

						{
							tip: "bgColor",
							desc: [
								{
									type: "字符串",
									default:
										"若在 config.xml 里面配置了 windowBackground，则默认值为配置的值，否则透明",
									desc:
										"（可选项）背景色，支持图片和颜色，格式为 #fff、#ffffff、rgba(r,g,b,a)等，图片路径支持 fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径"
								}
							]
						},

						{
							tip: "scrollToTop",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效"
								}
							]
						},

						{
							tip: "scrollEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）页面内容超出后是否可以滚动，只支持iOS"
								}
							]
						},

						{
							tip: "vScrollBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否显示垂直滚动条"
								}
							]
						},

						{
							tip: "hScrollBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否显示水平滚动条"
								}
							]
						},

						{
							tip: "scaleEnabled",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）页面是否可以缩放"
								}
							]
						},

						{
							tip: "hideTopBar",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）是否隐藏原生navigationBar控件，该字段只 iOS 有效"
								}
							]
						},

						{
							tip: "hideBottomBar",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）是否隐藏原生tabBar控件，该字段只 iOS 有效"
								}
							]
						},

						{
							tip: "slidBackEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc:
										"（可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只 iOS 有效"
								}
							]
						},

						{
							tip: "slidBackType",
							desc: [
								{
									type: "字符串",
									default: "full",
									desc:
										"（可选项）当支持滑动返回时，设置手指在页面右滑的有效作用区域。取值范围（full:整个页面范围都可以右滑返回，edge:在页面左边缘右滑才可以返回），该字段只iOS有效"
								}
							]
						},

						{
							tip: "animation",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）动画参数，不传时使用默认动画",
									fields:
										'{\n  type:"none",         //\u52A8\u753B\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u7C7B\u578B\u5E38\u91CF\uFF09\n  subType:"from_right",//\u52A8\u753B\u5B50\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u5B50\u7C7B\u578B\u5E38\u91CF\uFF09\n  duration:300         //\u52A8\u753B\u8FC7\u6E21\u65F6\u95F4\uFF0C\u9ED8\u8BA4300\u6BEB\u79D2\n}\n\ntype \u53D6\u503C\u8303\u56F4\uFF1A\nnone     //\u65E0\u52A8\u753B\u6548\u679C\npush     //\u65B0\u89C6\u56FE\u5C06\u65E7\u89C6\u56FE\u63A8\u5F00\nmovein   //\u65B0\u89C6\u56FE\u79FB\u5230\u65E7\u89C6\u56FE\u4E0A\u9762\nfade     //\u4EA4\u53C9\u6DE1\u5316\u8FC7\u6E21\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\nflip     //\u7FFB\u8F6C\u6548\u679C\nreveal   //\u5C06\u65E7\u89C6\u56FE\u79FB\u5F00,\u663E\u793A\u4E0B\u9762\u7684\u65B0\u89C6\u56FE\nripple   //\u6EF4\u6C34\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncurl     //\u5411\u4E0A\u7FFB\u4E00\u9875\nun_curl  //\u5411\u4E0B\u7FFB\u4E00\u9875\nsuck     //\u6536\u7F29\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncube     //\u7ACB\u65B9\u4F53\u7FFB\u6EDA\u6548\u679C\n\nsubType \u53D6\u503C\u8303\u56F4\uFF1A\nfrom_right      //\u4ECE\u53F3\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_left       //\u4ECE\u5DE6\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_top        //\u4ECE\u9876\u90E8\u5F00\u59CB\u52A8\u753B\nfrom_bottom     //\u4ECE\u5E95\u90E8\u5F00\u59CB\u52A8\u753B\n\uFF08Android\u7CFB\u7EDFflip\uFF0Cripple\uFF0Ccurl\uFF0Cun_curl\uFF0Csuck\uFF0Ccube \u7C7B\u578B\u4E0D\u652F\u6301\uFF09'
								}
							]
						},

						{
							tip: "progress",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）页面加载进度配置信息，若不传则无加载进度效果",
									fields:
										"{\n  type:    //\u52A0\u8F7D\u8FDB\u5EA6\u6548\u679C\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C\u4E3A default\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A default|page\uFF0C\u4E3A page \u65F6\uFF0C\u8FDB\u5EA6\u6548\u679C\u4E3A\u4EFF\u6D4F\u89C8\u5668\u7C7B\u578B\uFF0C\u56FA\u5B9A\u5728\u9875\u9762\u7684\u9876\u90E8\n  title:   //type \u4E3A default \u65F6\u663E\u793A\u7684\u52A0\u8F7D\u6846\u6807\u9898\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  text:    //type \u4E3A default \u65F6\u663E\u793A\u7684\u52A0\u8F7D\u6846\u5185\u5BB9\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  color:   //type \u4E3A page \u65F6\u8FDB\u5EA6\u6761\u7684\u989C\u8272\uFF0C\u9ED8\u8BA4\u503C\u4E3A #45C01A\uFF0C\u652F\u6301#FFF\uFF0C#FFFFFF\uFF0Crgb(255,255,255)\uFF0Crgba(255,255,255,1.0)\u7B49\u683C\u5F0F\n  height:  //type \u4E3A page \u65F6\u8FDB\u5EA6\u6761\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u503C\u4E3A3\uFF0C\u6570\u5B57\u7C7B\u578B\n}"
								}
							]
						},

						{
							tip: "delay",
							desc: [
								{
									type: "数字",
									default: "0",
									desc:
										"（可选项）window 显示延迟时间，适用于将被打开的 window 中可能需要打开有耗时操作的模块时，可延迟 window 展示到屏幕的时间，保持 UI 的整体性"
								}
							]
						},

						{
							tip: "reload",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行"
								}
							]
						},

						{
							tip: "allowEdit",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否允许长按页面时弹出选择菜单"
								}
							]
						},

						{
							tip: "softInputMode",
							desc: [
								{
									type: "字符串",
									default: "auto",
									desc:
										"（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用",
									fields:
										"resize    //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4F1A\u81EA\u52A8\u4E0A\u79FB\npan        //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4E0D\u4F1A\u81EA\u52A8\u4E0A\u79FB\nauto       //\u9ED8\u8BA4\u503C\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u5982\u4F55\u5904\u7406\uFF0CiOS\u5E73\u53F0\u8BE5\u5B57\u6BB5\u7B49\u540C\u4E8Eresize"
								}
							]
						},

						{
							tip: "softInputDismissMode",
							desc: [
								{
									type: "字符串数组",
									default: "['tap']",
									desc: "（可选项）收起键盘的方式，只iOS有效。",
									fields:
										"tap       //\u70B9\u51FB\u9875\u9762\u6536\u8D77\u952E\u76D8\uFF0C\u53EF\u4EE5\u548Cdrag\u6216interactive\u540C\u65F6\u4F7F\u7528\ndrag         //\u62D6\u62FD\u9875\u9762\u65F6\u6536\u8D77\u952E\u76D8\uFF0C\u53EF\u4EE5\u548Ctap\u540C\u65F6\u4F7F\u7528\ninteractive  //\u5728\u952E\u76D8\u548C\u9875\u9762\u4EA4\u754C\u5904\u4E0A\u4E0B\u6ED1\u52A8\u6536\u8D77\u952E\u76D8\uFF0C\u53EF\u4EE5\u548Ctap\u540C\u65F6\u4F7F\u7528"
								}
							]
						},

						{
							tip: "softInputBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否显示键盘上方的工具条。只支持iOS"
								}
							]
						},

						{
							tip: "overScrollMode",
							desc: [
								{
									type: "字符串",
									default: "never",
									desc:
										"（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。",
									fields:
										"never            //\u6C38\u8FDC\u4E0D\u663E\u793A\nalways           //\u603B\u662F\u663E\u793A\nscrolls          //\u53EA\u6709\u5F53\u9875\u9762\u5185\u5BB9\u8D85\u51FA\u8BBE\u5907\u5C4F\u5E55\u5927\u5C0F\uFF0C\u53D1\u751F\u6EDA\u52A8\u884C\u4E3A\u65F6\u663E\u793A\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8BE5\u6A21\u5F0F\u3002"
								}
							]
						},

						{
							tip: "dragAndDrop",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS"
								}
							]
						},

						{
							tip: "hideHomeIndicator",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS"
								}
							]
						},

						{
							tip: "defaultRefreshHeader",
							desc: [
								{
									type: "字符串",
									default: "pull",
									desc: "（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe"
								}
							]
						},

						{
							tip: "customRefreshHeader",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件"
								}
							]
						},

						{
							tip: "softInputMode",
							desc: [
								{
									type: "字符串",
									default: "auto",
									desc:
										"（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用"
								}
							]
						}
					],

					sampleCode: [
						"api.openWin({\n    name: 'page1',\n    url: './page1.html',\n    pageParam: {\n        name: 'test'\n    }\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "closeWin",
					desc: ["关闭 window", "closeWin({params})"],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）window 名字，不传时关闭当前 window，为 root 时无效"
								}
							]
						},

						{
							tip: "animation",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）动画参数，不传时使用默认动画",
									fields:
										'{\n  type:"none",                //\u52A8\u753B\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u7C7B\u578B\u5E38\u91CF\uFF09\n  subType:"from_right",       //\u52A8\u753B\u5B50\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u5B50\u7C7B\u578B\u5E38\u91CF\uFF09\n  duration:300                //\u52A8\u753B\u8FC7\u6E21\u65F6\u95F4\uFF0C\u9ED8\u8BA4300\u6BEB\u79D2\n}\n\ntype \u53D6\u503C\u8303\u56F4\uFF1A\n\nnone            //\u65E0\u52A8\u753B\u6548\u679C\npush            //\u65B0\u89C6\u56FE\u5C06\u65E7\u89C6\u56FE\u63A8\u5F00\nmovein          //\u65B0\u89C6\u56FE\u79FB\u5230\u65E7\u89C6\u56FE\u4E0A\u9762\nfade            //\u4EA4\u53C9\u6DE1\u5316\u8FC7\u6E21\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\nflip            //\u7FFB\u8F6C\u6548\u679C\nreveal          //\u5C06\u65E7\u89C6\u56FE\u79FB\u5F00,\u663E\u793A\u4E0B\u9762\u7684\u65B0\u89C6\u56FE\nripple          //\u6EF4\u6C34\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncurl            //\u5411\u4E0A\u7FFB\u4E00\u9875\nun_curl         //\u5411\u4E0B\u7FFB\u4E00\u9875\nsuck            //\u6536\u7F29\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncube            //\u7ACB\u65B9\u4F53\u7FFB\u6EDA\u6548\u679C\n\nsubType \u53D6\u503C\u8303\u56F4\uFF1A\n\nfrom_right      //\u4ECE\u53F3\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_left       //\u4ECE\u5DE6\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_top        //\u4ECE\u9876\u90E8\u5F00\u59CB\u52A8\u753B\nfrom_bottom     //\u4ECE\u5E95\u90E8\u5F00\u59CB\u52A8\u753B'
								}
							]
						}
					],

					sampleCode: [
						"//\u5173\u95ED\u5F53\u524Dwindow\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u52A8\u753B\napi.closeWin();\n\n//\u5173\u95ED\u6307\u5B9Awindow\uFF0C\u82E5\u5F85\u5173\u95ED\u7684window\u4E0D\u5728\u6700\u4E0A\u9762\uFF0C\u5219\u65E0\u52A8\u753B\napi.closeWin({\n    name: 'page1'\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "closeToWin",
					desc: [
						"关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭。",
						"closeToWin({params})"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "window 名字"
								}
							]
						},

						{
							tip: "animation",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）动画参数，不传时使用默认动画",
									fields:
										'{\n  type:"none",                //\u52A8\u753B\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u7C7B\u578B\u5E38\u91CF\uFF09\n  subType:"from_right",       //\u52A8\u753B\u5B50\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u5B50\u7C7B\u578B\u5E38\u91CF\uFF09\n  duration:300                //\u52A8\u753B\u8FC7\u6E21\u65F6\u95F4\uFF0C\u9ED8\u8BA4300\u6BEB\u79D2\n}\n\ntype \u53D6\u503C\u8303\u56F4\uFF1A\n\nnone            //\u65E0\u52A8\u753B\u6548\u679C\npush            //\u65B0\u89C6\u56FE\u5C06\u65E7\u89C6\u56FE\u63A8\u5F00\nmovein          //\u65B0\u89C6\u56FE\u79FB\u5230\u65E7\u89C6\u56FE\u4E0A\u9762\nfade            //\u4EA4\u53C9\u6DE1\u5316\u8FC7\u6E21\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\nflip            //\u7FFB\u8F6C\u6548\u679C\nreveal          //\u5C06\u65E7\u89C6\u56FE\u79FB\u5F00,\u663E\u793A\u4E0B\u9762\u7684\u65B0\u89C6\u56FE\nripple          //\u6EF4\u6C34\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncurl            //\u5411\u4E0A\u7FFB\u4E00\u9875\nun_curl         //\u5411\u4E0B\u7FFB\u4E00\u9875\nsuck            //\u6536\u7F29\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncube            //\u7ACB\u65B9\u4F53\u7FFB\u6EDA\u6548\u679C\n\nsubType \u53D6\u503C\u8303\u56F4\uFF1A\n\n\nfrom_right      //\u4ECE\u53F3\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_left       //\u4ECE\u5DE6\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_top        //\u4ECE\u9876\u90E8\u5F00\u59CB\u52A8\u753B\nfrom_bottom     //\u4ECE\u5E95\u90E8\u5F00\u59CB\u52A8\u753B'
								}
							]
						}
					],

					sampleCode: ["api.closeToWin({ name: 'root' });"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "windows",
					desc: ["获取当前所有打开的window。该方法为同步方法。", "windows()"],
					sampleCode: ["var windows = api.windows();"],
					usability: ["iOS系统，Android系统", "可提供的1.2.95及更高版本"]
				},
				{
					name: "setWinAttr",
					desc: ["设置 window 属性", "setWinAttr({params})"],
					params: [
						{
							tip: "bounces",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）页面是否弹动"
								}
							]
						},

						{
							tip: "bgColor",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径"
								}
							]
						},

						{
							tip: "scrollToTop",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc:
										"（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。只iOS有效"
								}
							]
						},

						{
							tip: "scrollEnabled",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）页面内容超出后是否可以滚动，只支持iOS"
								}
							]
						},

						{
							tip: "vScrollBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）是否显示垂直滚动条"
								}
							]
						},

						{
							tip: "hScrollBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）是否显示水平滚动条"
								}
							]
						},

						{
							tip: "scaleEnabled",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc:
										"（可选项）背景色，支持图片和颜色，格式为#fff、#ffffff、rgba(r,g,b,a)等，图片路径支持fs://、widget://等APICloud自定义文件路径协议，同时支持相对路径"
								}
							]
						},

						{
							tip: "slidBackEnabled",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc:
										"（可选项）是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只iOS有效"
								}
							]
						},

						{
							tip: "hideHomeIndicator",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc:
										"（可选项）是否隐藏虚拟home键。设置为true时，虚拟home键会在屏幕没有触摸操作时自动隐藏，触摸后又会显示出来。只支持iOS"
								}
							]
						},

						{
							tip: "allowEdit",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）是否允许长按页面时弹出选择菜单"
								}
							]
						},

						{
							tip: "softInputMode",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式；只iOS有效，Android请在 config.xml 里面配置并云编译使用",
									fields:
										"resize            //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4F1A\u81EA\u52A8\u4E0A\u79FB\npan               //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4E0D\u4F1A\u81EA\u52A8\u4E0A\u79FB\nauto              //\u9ED8\u8BA4\u503C\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u5982\u4F55\u5904\u7406\uFF0CiOS\u5E73\u53F0\u8BE5\u5B57\u6BB5\u7B49\u540C\u4E8Eresize"
								}
							]
						}
					],

					sampleCode: ["api.setWinAttr({ bounces: true });"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "openFrame",
					desc: [
						"打开 frame",
						"若 frame 已存在，则会把该窗口显示到最前面并显示，如果 url 和之前的 url 有变化，或者 reload 为 true 时，页面会刷新",
						"此方法对 frameGroup 里面的 frame 不起作用",
						"openFrame({params})"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "window名字"
								}
							]
						},

						{
							tip: "url",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础。"
								}
							]
						},

						{
							tip: "data",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）页面加载的数据内容，可以为html片段或者整张html文件的数据"
								}
							]
						},

						{
							tip: "headers",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）请求头"
								}
							]
						},

						{
							tip: "avm",
							desc: [
								{
									type: "布尔",
									default:
										"若在config.xml里面配置了avm字段，则默认值为配置的值，否则为false",
									desc:
										"（可选项）是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成。"
								}
							]
						},

						{
							tip: "useWKWebView",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否使用WKWebView来加载页面。参考WKWebView介绍。https://developer.yonyou.com/thread-151904-1-1.html"
								}
							]
						},

						{
							tip: "allowAccessFromFile",
							desc: [
								{
									type: "布尔",
									default: "全局加密下为false",
									desc:
										"（可选项）设置是否可以在本地页面中访问本地或远程资源，为保证代码安全，在开启全局加密情况下默认禁止访问。只在useWKWebView参数为true时有效。"
								}
							]
						},

						{
							tip: "historyGestureEnabled",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否可以通过手势来进行历史记录前进后退，只在useWKWebView参数为true时有效。"
								}
							]
						},

						{
							tip: "syncCookie",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc:
										"（可选项）是否自动同步WKWebView外部如ajax产生的Cookie到WKWebView中，只在useWKWebView参数为true时有效。"
								}
							]
						},

						{
							tip: "pageParam",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）页面参数，新页面中可以通过 api.pageParam 获取"
								}
							]
						},

						{
							tip: "bounces",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc:
										"若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为 false 描述：（可选项）页面是否弹动。注意如果页面使用了上拉、下拉刷新等功能，该属性可能会被刷新组件重新设置。"
								}
							]
						},

						{
							tip: "bgColor",
							desc: [
								{
									type: "字符串",
									default:
										"若在 config.xml 里面配置了 windowBackground，则默认值为配置的值，否则透明",
									desc:
										"（可选项）背景色，支持图片和颜色，格式为 #fff、#ffffff、rgba(r,g,b,a)等，图片路径支持 fs://、widget://等 APICloud 自定义文件路径协议，同时支持相对路径"
								}
							]
						},

						{
							tip: "scrollToTop",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效"
								}
							]
						},

						{
							tip: "scrollEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）页面内容超出后是否可以滚动，只支持iOS"
								}
							]
						},

						{
							tip: "vScrollBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否显示垂直滚动条"
								}
							]
						},

						{
							tip: "hScrollBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否显示水平滚动条"
								}
							]
						},

						{
							tip: "scaleEnabled",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）页面是否可以缩放"
								}
							]
						},

						{
							tip: "fixedOn",
							desc: [
								{
									type: "字符串",
									default: "若当前在tabLayout组件中为ui_layout，否则为ui_window",
									desc:
										"（可选项）frame所要添加到的目标页面。 ui_window：页面添加到当前window中。若当前在tabLayout组件中，页面只能添加到navigationBar和tabBar之间的区域，无法覆盖在navigationBar、tabBar之上。、ui_layout：页面添加到当前tabLayout中。此时页面能够添加到tabLayout中任意位置，能够覆盖在navigationBar、tabBar之上，只在tabLayout组件中有效。"
								}
							]
						},

						{
							tip: "rect",
							desc: [
								{
									type: "JSON 对象",
									default: "充满整个父页面",
									desc:
										"（可选项）设置页面的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。",
									fields:
										"{\nx:,             //\u5DE6\u4E0A\u89D2x\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\ny:,             //\u5DE6\u4E0A\u89D2y\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\nw:,             //\u5BBD\u5EA6\uFF0C\u82E5\u4F20'auto'\uFF0C\u9875\u9762\u4ECEx\u4F4D\u7F6E\u5F00\u59CB\u81EA\u52A8\u5145\u6EE1\u7236\u9875\u9762\u5BBD\u5EA6\uFF0C\u6570\u5B57\u6216\u56FA\u5B9A\u503C'auto'\nh:,             //\u9AD8\u5EA6\uFF0C\u82E5\u4F20'auto'\uFF0C\u9875\u9762\u4ECEy\u4F4D\u7F6E\u5F00\u59CB\u81EA\u52A8\u5145\u6EE1\u7236\u9875\u9762\u9AD8\u5EA6\uFF0C\u6570\u5B57\u6216\u56FA\u5B9A\u503C'auto'\n\nmarginLeft:,    //\u76F8\u5BF9\u7236\u9875\u9762\u5DE6\u5916\u8FB9\u8DDD\u7684\u8DDD\u79BB\uFF0C\u6570\u5B57\u7C7B\u578B\nmarginTop:,     //\u76F8\u5BF9\u7236\u9875\u9762\u4E0A\u5916\u8FB9\u8DDD\u7684\u8DDD\u79BB\uFF0C\u6570\u5B57\u7C7B\u578B\nmarginBottom:,  //\u76F8\u5BF9\u7236\u9875\u9762\u4E0B\u5916\u8FB9\u8DDD\u7684\u8DDD\u79BB\uFF0C\u6570\u5B57\u7C7B\u578B\nmarginRight:    //\u76F8\u5BF9\u7236\u9875\u9762\u53F3\u5916\u8FB9\u8DDD\u7684\u8DDD\u79BB\uFF0C\u6570\u5B57\u7C7B\u578B\n        }"
								}
							]
						},

						{
							tip: "progress",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）页面加载进度配置信息，若不传则无加载进度效果",
									fields:
										"{\n  type:            //\u52A0\u8F7D\u8FDB\u5EA6\u6548\u679C\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C\u4E3A default\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A default|page\uFF0C\u4E3A page \u65F6\uFF0C\u8FDB\u5EA6\u6548\u679C\u4E3A\u4EFF\u6D4F\u89C8\u5668\u7C7B\u578B\uFF0C\u56FA\u5B9A\u5728\u9875\u9762\u7684\u9876\u90E8\n  title:           //type \u4E3A default \u65F6\u663E\u793A\u7684\u52A0\u8F7D\u6846\u6807\u9898\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  text:            //type \u4E3A default \u65F6\u663E\u793A\u7684\u52A0\u8F7D\u6846\u5185\u5BB9\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  color:           //type \u4E3A page \u65F6\u8FDB\u5EA6\u6761\u7684\u989C\u8272\uFF0C\u9ED8\u8BA4\u503C\u4E3A #45C01A\uFF0C\u652F\u6301#FFF\uFF0C#FFFFFF\uFF0Crgb(255,255,255)\uFF0Crgba(255,255,255,1.0)\u7B49\u683C\u5F0F\n  height:          //type \u4E3A page \u65F6\u8FDB\u5EA6\u6761\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u503C\u4E3A3\uFF0C\u6570\u5B57\u7C7B\u578B\n}"
								}
							]
						},

						{
							tip: "reload",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）页面已经打开时，是否重新加载页面"
								}
							]
						},

						{
							tip: "allowEdit",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否允许长按页面时弹出选择菜单"
								}
							]
						},

						{
							tip: "slidBackType",
							desc: [
								{
									type: "字符串",
									default: "full",
									desc:
										"（可选项）当支持滑动返回时，设置手指在页面右滑的有效作用区域。取值范围（full:整个页面范围都可以右滑返回，edge:在页面左边缘右滑才可以返回），该字段只iOS有效"
								}
							]
						},

						{
							tip: "softInputMode",
							desc: [
								{
									type: "字符串",
									default: "auto",
									desc:
										"（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，只iOS有效，Android请在 config.xml 里面配置并云编译使用"
								}
							]
						},

						{
							tip: "softInputDismissMode",
							desc: [
								{
									type: "字符串数组",
									default: "['tap']",
									desc: "（可选项）收起键盘的方式，只iOS有效。",
									fields:
										"tap              //\u70B9\u51FB\u9875\u9762\u6536\u8D77\u952E\u76D8\uFF0C\u53EF\u4EE5\u548Cdrag\u6216interactive\u540C\u65F6\u4F7F\u7528\ndrag             //\u62D6\u62FD\u9875\u9762\u65F6\u6536\u8D77\u952E\u76D8\uFF0C\u53EF\u4EE5\u548Ctap\u540C\u65F6\u4F7F\u7528\ninteractive      //\u5728\u952E\u76D8\u548C\u9875\u9762\u4EA4\u754C\u5904\u4E0A\u4E0B\u6ED1\u52A8\u6536\u8D77\u952E\u76D8\uFF0C\u53EF\u4EE5\u548Ctap\u540C\u65F6\u4F7F\u7528"
								}
							]
						},

						{
							tip: "softInputBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否显示键盘上方的工具条。只支持iOS"
								}
							]
						},

						{
							tip: "overScrollMode",
							desc: [
								{
									type: "字符串",
									default: "never",
									desc:
										"（可选项）设置页面滚动到头部或尾部时，显示回弹阴影效果的模式，仅Android有效。",
									fields:
										"never            //\u6C38\u8FDC\u4E0D\u663E\u793A\nalways           //\u603B\u662F\u663E\u793A\nscrolls          //\u53EA\u6709\u5F53\u9875\u9762\u5185\u5BB9\u8D85\u51FA\u8BBE\u5907\u5C4F\u5E55\u5927\u5C0F\uFF0C\u53D1\u751F\u6EDA\u52A8\u884C\u4E3A\u65F6\u663E\u793A\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8BE5\u6A21\u5F0F\u3002"
								}
							]
						},

						{
							tip: "dragAndDrop",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否允许iOS 11及以上系统中页面元素默认的拖拽行为。只支持iOS"
								}
							]
						},

						{
							tip: "animation",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）动画参数，不传时无动画",
									fields:
										'{\n  type:"none",                //\u52A8\u753B\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u7C7B\u578B\u5E38\u91CF\uFF09\n  subType:"from_right",       //\u52A8\u753B\u5B50\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u5B50\u7C7B\u578B\u5E38\u91CF\uFF09\n  duration:300                //\u52A8\u753B\u8FC7\u6E21\u65F6\u95F4\uFF0C\u9ED8\u8BA4300\u6BEB\u79D2\n}\n\ntype \u53D6\u503C\u8303\u56F4\uFF1A\n\nnone            //\u65E0\u52A8\u753B\u6548\u679C\npush            //\u65B0\u89C6\u56FE\u5C06\u65E7\u89C6\u56FE\u63A8\u5F00\nmovein          //\u65B0\u89C6\u56FE\u79FB\u5230\u65E7\u89C6\u56FE\u4E0A\u9762\nfade            //\u4EA4\u53C9\u6DE1\u5316\u8FC7\u6E21\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\nflip            //\u7FFB\u8F6C\u6548\u679C\nreveal          //\u5C06\u65E7\u89C6\u56FE\u79FB\u5F00,\u663E\u793A\u4E0B\u9762\u7684\u65B0\u89C6\u56FE\nripple          //\u6EF4\u6C34\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncurl            //\u5411\u4E0A\u7FFB\u4E00\u9875\nun_curl         //\u5411\u4E0B\u7FFB\u4E00\u9875\nsuck            //\u6536\u7F29\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncube            //\u7ACB\u65B9\u4F53\u7FFB\u6EDA\u6548\u679C\n\nsubType \u53D6\u503C\u8303\u56F4\uFF1A\n\nfrom_right      //\u4ECE\u53F3\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_left       //\u4ECE\u5DE6\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_top        //\u4ECE\u9876\u90E8\u5F00\u59CB\u52A8\u753B\nfrom_bottom     //\u4ECE\u5E95\u90E8\u5F00\u59CB\u52A8\u753B'
								}
							]
						},

						{
							tip: "defaultRefreshHeader",
							desc: [
								{
									type: "字符串",
									default: "pull",
									desc: "（可选项）设置使用默认下拉刷新类型，取值范围：pull、swipe"
								}
							]
						},

						{
							tip: "customRefreshHeader",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用 api.setCustomRefreshHeaderInfo 方法来使用自定义下拉刷新组件"
								}
							]
						}
					],

					sampleCode: [
						"api.openFrame({\n    name: 'page2',\n    url: './page2.html',\n    rect: {\n        x: 0,\n        y: 0,\n        w: 'auto',\n        h: 'auto'\n    },\n    pageParam: {\n        name: 'test'\n    }\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "closeFrame",
					desc: ["关闭frame", "closeFrame({params})"],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）frame 名字，不传时关闭当前 frame"
								}
							]
						}
					],

					sampleCode: ['api.closeFrame({ name: "page2" });'],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "frames",
					desc: [
						"获取当前window中所有打开的frame（包括frameGroup中的frame）。该方法为同步方法。",
						"frames()"
					],
					sampleCode: ["var frames = api.frames();"],
					usability: ["iOS系统，Android系统", "可提供的1.2.95及更高版本"]
				},
				{
					name: "setFrameAttr",
					desc: ["设置frame属性", "setFrameAttr({params})"],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "frame 名称"
								}
							]
						},

						{
							tip: "bounces",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）页面是否弹动"
								}
							]
						},

						{
							tip: "hidden",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc:
										"（可选项）设置本 frame 是否隐藏，设置显示隐藏并不会改变frame在整个窗口系统之间的层级关系。"
								}
							]
						},

						{
							tip: "bgColor",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）设置本 frame 是否隐藏，设置显示隐藏并不会改变frame在整个窗口系统之间的层级关系。"
								}
							]
						},

						{
							tip: "scrollToTop",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的 scrollToTop 属性为 true，则所有的都不会起作用。只 iOS 有效"
								}
							]
						},

						{
							tip: "scrollEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）页面内容超出后是否可以滚动，只支持iOS"
								}
							]
						},

						{
							tip: "vScrollBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否显示垂直滚动条"
								}
							]
						},

						{
							tip: "hScrollBarEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否显示水平滚动条"
								}
							]
						},

						{
							tip: "scaleEnabled",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）页面是否可以缩放"
								}
							]
						},

						{
							tip: "allowEdit",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否允许长按页面时弹出选择菜单"
								}
							]
						},

						{
							tip: "rect",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc:
										"（可选项）窗口区域 x：左上角x坐标； y：左上角y坐标； w：宽度，若传auto，页面从x位置开始自动充满父页面宽度； h：高度，若传auto，页面从y位置开始自动充满父页面高度"
								}
							]
						},

						{
							tip: "softInputMode",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式,只iOS有效，Android请在 config.xml 里面配置并云编译使用",
									fields:
										"resize            //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4F1A\u81EA\u52A8\u4E0A\u79FB\npan               //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4E0D\u4F1A\u81EA\u52A8\u4E0A\u79FB\nauto              //\u9ED8\u8BA4\u503C\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u5982\u4F55\u5904\u7406\uFF0CiOS\u5E73\u53F0\u8BE5\u5B57\u6BB5\u7B49\u540C\u4E8Eresize"
								}
							]
						}
					],

					sampleCode: [
						"api.setFrameAttr({\n    name: 'page2',\n    bounces: true\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "bringFrameToFront",
					desc: ["调整 frame 到前面", "bringFrameToFront({params})"],
					params: [
						{
							tip: "from",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "待调整显示顺序的 frame 名字"
								}
							]
						},

						{
							tip: "to",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）frame 名字，不传时调整 from 对应 frame 到最前面，否则调整 from 对应 frame 到此 frame 前面"
								}
							]
						}
					],

					sampleCode: ["api.bringFrameToFront({ from: 'page1', to: 'page2'});"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "sendFrameToBack",
					desc: ["调整 frame 到后面", "sendFrameToBack({params})"],
					params: [
						{
							tip: "from",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "frame 名字"
								}
							]
						},

						{
							tip: "to",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）frame 名字，不传时调整 from 对应 frame 到最后面，否则调整 from 对应 frame 到此 frame 后面"
								}
							]
						}
					],

					sampleCode: ["api.sendFrameToBack({ from: 'page1', to: 'page2' });"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "setFrameClient",
					desc: [
						"设置指定 frame 的页面加载监听，仅在 window 中调用生效，可以对多个 frame 进行监听。",
						"setFrameClient({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "frameName",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "frame 名字"
								}
							]
						}
					],

					sampleCode: [
						"api.setFrameClient({\n    frameName: 'webpage'\n},  function(ret, err) {\n      switch (ret.state) {\n          case 0:\n              break;\n          case 1:\n              break;\n          case 2:\n              break;\n          case 3:\n              break;\n          case 4:\n              break;\n          default:\n              break;\n    }\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.2.0及更高版本"]
				},
				{
					name: "animation",
					desc: [
						"frame 动画，支持平移，缩放，旋转和透明度变化",
						"仅支持 frame，不支持 window 以及 frameGroup 里面的 frame",
						"animation({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "当前 frame",
									desc: "frame 名字"
								}
							]
						},

						{
							tip: "delay",
							desc: [
								{
									type: "数字",
									default: "0",
									desc: "（可选项）动画延迟时间，单位毫秒，默认立即开始"
								}
							]
						},

						{
							tip: "duration",
							desc: [
								{
									type: "数字",
									default: "0",
									desc: "（可选项）动画过渡时间，单位毫秒"
								}
							]
						},

						{
							tip: "curve",
							desc: [
								{
									type: "字符串",
									default: "ease_in_out",
									desc: "（可选项）动画曲线类型，指定动画开始和结束时的快慢",
									fields:
										"ease_in_out     //\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u6162\nease_in         //\u5F00\u59CB\u65F6\u6162\nease_out        //\u7ED3\u675F\u65F6\u6162\nlinear          //\u6574\u4E2A\u52A8\u753B\u8FC7\u7A0B\u901F\u7387\u4E00\u6837"
								}
							]
						},

						{
							tip: "repeatCount",
							desc: [
								{
									type: "数字",
									default: "0",
									desc: "（可选项）动画次数，默认不重复，为-1时无限重复"
								}
							]
						},

						{
							tip: "autoreverse",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）一次动画结束后是否自动反转动画"
								}
							]
						},

						{
							tip: "alpha",
							desc: [
								{
									type: "数字",
									default: "无",
									desc: "（可选项）整个页面的透明度，介于0 1之间，Android 不支持"
								}
							]
						},

						{
							tip: "translation",
							desc: [
								{
									type: "JSON",
									default: "无",
									desc: "（可选项）位置平移参数",
									fields:
										"{\n  x: 0,         //x\u8F74\u65B9\u5411\u4E0A\u7684\u5E73\u79FB\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u4E3A0\n  y: 0,         //y\u8F74\u65B9\u5411\u4E0A\u7684\u5E73\u79FB\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u4E3A0\n  z: 0          //z\u8F74\u65B9\u5411\u4E0A\u7684\u5E73\u79FB\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0CAndroid\u4E0D\u652F\u6301\n}"
								}
							]
						},

						{
							tip: "scale",
							desc: [
								{
									type: "JSON",
									default: "无",
									desc: "（可选项）页面缩放参数，Android 不支持",
									fields:
										"{\n  x: 1,         //x\u8F74\u65B9\u5411\u4E0A\u7684\u653E\u5927\u500D\u7387\uFF0C\u9ED8\u8BA4\u4E3A1\n  y: 1,         //y\u8F74\u65B9\u5411\u4E0A\u7684\u653E\u5927\u500D\u7387\uFF0C\u9ED8\u8BA4\u4E3A1\n  z: 1          //z\u8F74\u65B9\u5411\u4E0A\u7684\u653E\u5927\u500D\u7387\uFF0C\u9ED8\u8BA4\u4E3A1\n}"
								}
							]
						},

						{
							tip: "rotation",
							desc: [
								{
									type: "JSON",
									default: "无",
									desc: "（可选项）页面旋转参数，Android 不支持",
									fields:
										"{\n  degree:0,     //\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u9ED8\u8BA40\n  x: 0,         //\u7ED5x\u8F74\u65CB\u8F6C\uFF0C\u9ED8\u8BA4\u4E3A0\n  y: 0,         //\u7ED5y\u8F74\u65CB\u8F6C\uFF0C\u9ED8\u8BA4\u4E3A0\n  z: 1          //\u7ED5z\u8F74\u65CB\u8F6C\uFF0C\u9ED8\u8BA4\u4E3A1\n}"
								}
							]
						}
					],

					sampleCode: [
						"api.animation({\n    name: 'page1',\n    delay: 1000,\n    duration: 3000,\n    curve: 'ease_in',\n    repeatCount: 2,\n    autoreverse: true,\n    alpha: 0.6,\n    translation: {\n        x: 0,\n        y: 100,\n        z: 0\n    },\n    scale: {\n        x: 1.2,\n        y: 1,\n        z: 1\n    },\n    rotation: {\n        degree: 45,\n        x: 0,\n        y: 0,\n        z: 1\n    }\n}, function(ret, err) {\n    api.alert({\n        msg:'\u52A8\u753B\u7ED3\u675F'\n    });\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "openFrameGroup",
					desc: [
						"打开frame组",
						"若frame组已存在，则会把该frame组显示到最前面。frame组打开后，当前页面加载完成后，页面会预加载后面指定个数页面",
						"openFrameGroup({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "frame 组名字"
								}
							]
						},

						{
							tip: "background",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）frame 组背景，颜色（#fff,#ffffff,rgba(r,g,b,a)）或图片（支持文件路径协议和相对路径）"
								}
							]
						},

						{
							tip: "scrollEnabled",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）frame 组是否能够左右滚动"
								}
							]
						},

						{
							tip: "frames",
							desc: [
								{
									type: "数组",
									default: "无",
									desc: "frame 数组",
									fields:
										"[{\n    name:'',                                //frame\u540D\u5B57\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26\u4E32\n    url:'',                                 //\u9875\u9762\u5730\u5740\uFF0C\u53EF\u4EE5\u4E3A\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4EE5\u53CA widget://\u3001fs://\u7B49\u534F\u8BAE\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u8FDC\u7A0B\u5730\u5740\u3002 \u5F53data\u53C2\u6570\u4E0D\u4E3A\u7A7A\u65F6\uFF0Curl\u5C06\u505A\u4E3AbaseUrl\uFF0Cdata\u4E2D\u7684html\u5F15\u7528\u7684\u8D44\u6E90\u6587\u4EF6\u6839\u8DEF\u5F84\u4EE5\u8BE5url\u4E3A\u57FA\u7840\u3002\u5B57\u7B26\u4E32\u7C7B\u578B\n    data:'',                                //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u52A0\u8F7D\u7684\u6570\u636E\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4E3Ahtml\u7247\u6BB5\u6216\u8005\u6574\u5F20html\u6587\u4EF6\u7684\u6570\u636E\n    headers:{},                             //\uFF08\u53EF\u9009\u9879\uFF09\u8BF7\u6C42\u5934\n    avm:false,                              //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u4F7F\u7528\u539F\u751F\u5F15\u64CE\u6765\u52A0\u8F7D\u9875\u9762\uFF0C\u9875\u9762\u5FC5\u987B\u662F\u4F7F\u7528avm\u6846\u67B6\u8BED\u6CD5\u751F\u6210\u3002\n    useWKWebView:false,                     //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u4F7F\u7528WKWebView\u6765\u52A0\u8F7D\u9875\u9762\u3002\u53C2\u8003[WKWebView\u4ECB\u7ECD](https://community.apicloud.com/bbs/thread-151904-1-1.html)\u3002\n    allowAccessFromFile:false,              //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u662F\u5426\u53EF\u4EE5\u5728\u672C\u5730\u9875\u9762\u4E2D\u8BBF\u95EE\u672C\u5730\u6216\u8FDC\u7A0B\u8D44\u6E90\uFF0C\u4E3A\u4FDD\u8BC1\u4EE3\u7801\u5B89\u5168\uFF0C\u5728\u5F00\u542F\u5168\u5C40\u52A0\u5BC6\u60C5\u51B5\u4E0B\u9ED8\u8BA4\u7981\u6B62\u8BBF\u95EE\u3002\u53EA\u5728useWKWebView\u53C2\u6570\u4E3Atrue\u65F6\u6709\u6548\u3002\n    historyGestureEnabled:false,            //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u624B\u52BF\u6765\u8FDB\u884C\u5386\u53F2\u8BB0\u5F55\u524D\u8FDB\u540E\u9000\uFF0C\u53EA\u5728useWKWebView\u53C2\u6570\u4E3Atrue\u65F6\u6709\u6548\u3002\n    pageParam:{},                           //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u53C2\u6570\uFF0C\u9875\u9762\u4E2D\u53EF\u4EE5\u901A\u8FC7api.pageParam\u83B7\u53D6\uFF0CJSON\u5BF9\u8C61\n    bounces:true,                           //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5F39\u52A8\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1A\u82E5\u5728 config.xml \u91CC\u9762\u914D\u7F6E\u4E86pageBounce\uFF0C\u5219\u9ED8\u8BA4\u503C\u4E3A\u914D\u7F6E\u7684\u503C\uFF0C\u5426\u5219\u4E3Atrue\u3002\u6CE8\u610F\u5982\u679C\u9875\u9762\u4F7F\u7528\u4E86\u4E0A\u62C9\u3001\u4E0B\u62C9\u5237\u65B0\u7B49\u529F\u80FD\uFF0C\u8BE5\u5C5E\u6027\u53EF\u80FD\u4F1A\u88AB\u5237\u65B0\u7EC4\u4EF6\u91CD\u65B0\u8BBE\u7F6E\u3002\n    bgColor:'#fff',                         //\uFF08\u53EF\u9009\u9879\uFF09\u80CC\u666F\u8272\uFF0C\u652F\u6301\u56FE\u7247\u548C\u989C\u8272\uFF0C\u683C\u5F0F\u4E3A#fff\u3001#ffffff\u3001rgba(r,g,b,a)\u7B49\uFF0C\u56FE\u7247\u8DEF\u5F84\u652F\u6301fs://\u3001widget://\u7B49APICloud\u81EA\u5B9A\u4E49\u6587\u4EF6\u8DEF\u5F84\u534F\u8BAE\uFF0C\u540C\u65F6\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\n    scrollToTop:true                        //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u70B9\u51FB\u72B6\u6001\u680F\uFF0C\u9875\u9762\u662F\u5426\u6EDA\u52A8\u5230\u9876\u90E8\u3002\u82E5\u5F53\u524D\u5C4F\u5E55\u4E0A\u4E0D\u6B62\u4E00\u4E2A\u9875\u9762\u7684scrollToTop\u5C5E\u6027\u4E3Atrue\uFF0C\u5219\u6240\u6709\u7684\u90FD\u4E0D\u4F1A\u8D77\u4F5C\u7528\u3002\u9ED8\u8BA4\u503C\uFF1Atrue\u3002\u53EAiOS\u6709\u6548\n    scrollEnabled:true                      //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u5185\u5BB9\u8D85\u51FA\u540E\u662F\u5426\u53EF\u4EE5\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u53EA\u652F\u6301iOS\n    vScrollBarEnabled:true,                 //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u5782\u76F4\u6EDA\u52A8\u6761\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Atrue\n    hScrollBarEnabled:false,                //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u6C34\u5E73\u6EDA\u52A8\u6761\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Afalse\n    scaleEnabled:true,                      //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u662F\u5426\u53EF\u4EE5\u7F29\u653E\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Afalse\n    allowEdit:false,                        //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5141\u8BB8\u957F\u6309\u9875\u9762\u65F6\u5F39\u51FA\u9009\u62E9\u83DC\u5355\n    softInputMode:'auto'                    //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u952E\u76D8\u5F39\u51FA\u65F6\uFF0C\u8F93\u5165\u6846\u88AB\u76D6\u4F4F\u65F6\uFF0C\u5F53\u524D\u9875\u9762\u7684\u8C03\u6574\u65B9\u5F0F\uFF0C\u53EAiOS\u6709\u6548\u3002\n                                            //\u53D6\u503C\u8303\u56F4\uFF1A\n                                            //resize    //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                            //pan       //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4E0D\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                            //auto      //\u9ED8\u8BA4\u503C\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u5982\u4F55\u5904\u7406\uFF0CiOS\u5E73\u53F0\u8BE5\u5B57\u6BB5\u7B49\u540C\u4E8Eresize\n    softInputBarEnabled:false,              //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u952E\u76D8\u4E0A\u65B9\u7684\u5DE5\u5177\u6761\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Atrue\uFF0C\u53EAiOS\u6709\u6548\n    overScrollMode,                         //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u9875\u9762\u6EDA\u52A8\u5230\u5934\u90E8\u6216\u5C3E\u90E8\u65F6\uFF0C\u663E\u793A\u56DE\u5F39\u9634\u5F71\u6548\u679C\u7684\u6A21\u5F0F\uFF0C\u4EC5Android\u6709\u6548\u3002\u53D6\u503C\u8303\u56F4\uFF1Anever\uFF0Calways\uFF0Cscrolls\n    defaultRefreshHeader:''                 //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u9ED8\u8BA4\u4E0B\u62C9\u5237\u65B0\u7C7B\u578B\uFF0C\u53D6\u503C\u8303\u56F4\uFF1Apull\u3001swipe\n    customRefreshHeader:''                  //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u6A21\u5757\u7684\u540D\u79F0\uFF0C\u8BBE\u7F6E\u540E\u53EF\u4EE5\u4F7F\u7528api.setCustomRefreshHeaderInfo\u65B9\u6CD5\u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u7EC4\u4EF6\n}]"
								}
							]
						},

						{
							tip: "fixedOn",
							desc: [
								{
									type: "字符串",
									default: "若当前在tabLayout组件中为ui_layout，否则为ui_window",
									desc: "（可选项）frameGroup所要添加到的目标页面。",
									fields:
										"ui_window    //\u9875\u9762\u6DFB\u52A0\u5230\u5F53\u524Dwindow\u4E2D\u3002\u82E5\u5F53\u524D\u5728tabLayout\u7EC4\u4EF6\u4E2D\uFF0C\u9875\u9762\u53EA\u80FD\u6DFB\u52A0\u5230navigationBar\u548CtabBar\u4E4B\u95F4\u7684\u533A\u57DF\uFF0C\u65E0\u6CD5\u8986\u76D6\u5728navigationBar\u3001tabBar\u4E4B\u4E0A\u3002\nui_layout    //\u9875\u9762\u6DFB\u52A0\u5230\u5F53\u524DtabLayout\u4E2D\u3002\u6B64\u65F6\u9875\u9762\u80FD\u591F\u6DFB\u52A0\u5230tabLayout\u4E2D\u4EFB\u610F\u4F4D\u7F6E\uFF0C\u80FD\u591F\u8986\u76D6\u5728navigationBar\u3001tabBar\u4E4B\u4E0A\uFF0C\u53EA\u5728tabLayout\u7EC4\u4EF6\u4E2D\u6709\u6548\u3002"
								}
							]
						},

						{
							tip: "rect",
							desc: [
								{
									type: "JSON 对象",
									default: "充满整个父页面",
									desc:
										"（可选项）设置frameGroup的位置和大小。如果要固定宽高则使用x、y、w、h等参数；如果要自适应状态栏高度变化、横竖屏切换等，则需要使用margin相关参数，不能使用w、h固定宽高。推荐使用margin相关参数来布局。",
									fields:
										"{\n  x:,             //\u5DE6\u4E0A\u89D2x\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\n  y:,             //\u5DE6\u4E0A\u89D2y\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\n  w:,             //\u5BBD\u5EA6\uFF0C\u82E5\u4F20'auto'\uFF0C\u9875\u9762\u4ECEx\u4F4D\u7F6E\u5F00\u59CB\u81EA\u52A8\u5145\u6EE1\u7236\u9875\u9762\u5BBD\u5EA6\uFF0C\u6570\u5B57\u6216\u56FA\u5B9A\u503C'auto'\n  h:,             //\u9AD8\u5EA6\uFF0C\u82E5\u4F20'auto'\uFF0C\u9875\u9762\u4ECEy\u4F4D\u7F6E\u5F00\u59CB\u81EA\u52A8\u5145\u6EE1\u7236\u9875\u9762\u9AD8\u5EA6\uFF0C\u6570\u5B57\u6216\u56FA\u5B9A\u503C'auto'\n\n  marginLeft:,    //\u76F8\u5BF9\u7236\u9875\u9762\u5DE6\u5916\u8FB9\u8DDD\u7684\u8DDD\u79BB\uFF0C\u6570\u5B57\u7C7B\u578B\n  marginTop:,     //\u76F8\u5BF9\u7236\u9875\u9762\u4E0A\u5916\u8FB9\u8DDD\u7684\u8DDD\u79BB\uFF0C\u6570\u5B57\u7C7B\u578B\n  marginBottom:,  //\u76F8\u5BF9\u7236\u9875\u9762\u4E0B\u5916\u8FB9\u8DDD\u7684\u8DDD\u79BB\uFF0C\u6570\u5B57\u7C7B\u578B\n  marginRight:    //\u76F8\u5BF9\u7236\u9875\u9762\u53F3\u5916\u8FB9\u8DDD\u7684\u8DDD\u79BB\uFF0C\u6570\u5B57\u7C7B\u578B\n}"
								}
							]
						},

						{
							tip: "index",
							desc: [
								{
									type: "数字",
									default: "0",
									desc: "（可选项）默认显示的页面索引"
								}
							]
						},

						{
							tip: "preload",
							desc: [
								{
									type: "数字",
									default: "1",
									desc: "（可选项）预加载的 frame 个数，默认加载当前页后面一个"
								}
							]
						}
					],

					sampleCode: [
						"api.openFrameGroup({\n    name: 'group1',\n    rect: {\n        x: 0,\n        y: 0,\n        w: 'auto',\n        h: 'auto'\n    },\n    frames: [{\n        name: 'frame1',\n        url: 'frame1.html',\n        bgColor: '#fff'\n    }, {\n        name: 'frame2',\n        url: 'frame2.html',\n        bgColor: '#fff'\n    }]\n  }, function(ret, err) {\n      var index = ret.index;\n  });"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "closeFrameGroup",
					desc: ["关闭frame组", "closeFrameGroup({params})"],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "frame 组名字"
								}
							]
						}
					],

					sampleCode: ["api.closeFrameGroup({\n    name: 'group1'\n});"],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "setFrameGroupAttr",
					desc: ["设置 frame 组属性", "setFrameGroupAttr({params})"],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "frame 组名字"
								}
							]
						},

						{
							tip: "hidden",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc:
										"（可选项）frame 组是否隐藏，设置显示隐藏并不会改变frame组在整个窗口系统之间的层级关系。"
								}
							]
						},

						{
							tip: "rect",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）frame 组区域",
									fields:
										"{\n  x:0,             //\u5DE6\u4E0A\u89D2x\u5750\u6807\n  y:0,             //\u5DE6\u4E0A\u89D2y\u5750\u6807\n  w:320,           //\u5BBD\u5EA6\uFF0C\u82E5\u4F20'auto'\uFF0Cframe\u7EC4\u4ECEx\u4F4D\u7F6E\u5F00\u59CB\u81EA\u52A8\u5145\u6EE1\u7236\u9875\u9762\u5BBD\u5EA6\n  h:240            //\u9AD8\u5EA6\uFF0C\u82E5\u4F20'auto'\uFF0Cframe\u7EC4\u4ECEy\u4F4D\u7F6E\u5F00\u59CB\u81EA\u52A8\u5145\u6EE1\u7236\u9875\u9762\u9AD8\u5EA6\n}"
								}
							]
						},

						{
							tip: "scrollEnabled",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）frame 组是否能够左右滚动"
								}
							]
						}
					],

					sampleCode: [
						"api.setFrameGroupAttr({\n    name: 'group1',\n    hidden: true\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "setFrameGroupIndex",
					desc: ["设置 frame 组当前可见 frame", "setFrameGroupIndex({params})"],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "frame 组名字"
								}
							]
						},

						{
							tip: "index",
							desc: [
								{
									type: "数字",
									default: "无",
									desc: "frame 索引"
								}
							]
						},

						{
							tip: "scroll",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否平滑滚动至目标窗口，即是否带有动画"
								}
							]
						},

						{
							tip: "reload",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否刷新 frame"
								}
							]
						}
					],

					sampleCode: [
						"api.setFrameGroupIndex({\n    name: 'group1',\n    index: 2\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "openPopoverWin",
					desc: [
						"打开弹出层窗口，只支持iPad",
						"在弹出层窗口里面不能再打开弹出窗口，页面可以使用所有的 window 和 frame 相关操作，如 openWin、openFrame 等，此方法能够使用openWin方法的所有参数",
						"使用 execScript() 方法时，引擎只会在整个弹出层里面的窗口中去寻找要执行脚本的窗口，如果要和弹出层下面的窗口间进行通信，可以使用 sendEvent() 方法实现",
						"openPopoverWin({params})"
					],
					params: [
						{
							tip: "style",
							desc: [
								{
									type: "字符串",
									default: "default",
									desc:
										"（可选项）弹出窗口展示类型 default：弹出层从底部往上弹出，显示在屏幕中间一片指定区域，周围为黑色半透明； popover：弹出层带指示箭头，可设置箭头方向和位置",
									fields:
										"default         // \u5F39\u51FA\u5C42\u4ECE\u5E95\u90E8\u5F80\u4E0A\u5F39\u51FA\uFF0C\u663E\u793A\u5728\u5C4F\u5E55\u4E2D\u95F4\u4E00\u7247\u6307\u5B9A\u533A\u57DF\uFF0C\u5468\u56F4\u4E3A\u9ED1\u8272\u534A\u900F\u660E\npopover         // \u5F39\u51FA\u5C42\u5E26\u6307\u793A\u7BAD\u5934\uFF0C\u53EF\u8BBE\u7F6E\u7BAD\u5934\u65B9\u5411\u548C\u4F4D\u7F6E"
								}
							]
						},

						{
							tip: "width",
							desc: [
								{
									type: "数字",
									default: "540",
									desc: "（可选项）弹出窗口显示的宽度"
								}
							]
						},

						{
							tip: "height",
							desc: [
								{
									type: "数字",
									default: "620",
									desc: "（可选项）弹出窗口显示的高度"
								}
							]
						},

						{
							tip: "arrowRect",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）当style为popover时，箭头指向的位置",
									fields:
										"{\n    x:0,                  //\u5DE6\u4E0A\u89D2x\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\n    y:0,                  //\u5DE6\u4E0A\u89D2y\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\n    w:0,                  //\u5BBD\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B\n    h:0,                  //\u9AD8\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B\n}"
								}
							]
						},

						{
							tip: "arrowDirection",
							desc: [
								{
									type: "字符串",
									default: "any",
									desc: "（可选项）当style为popover时，箭头指向的方向",
									fields:
										"left          // \u6307\u5411\u5DE6\u8FB9\nright         // \u6307\u5411\u53F3\u8FB9\nup            // \u6307\u5411\u4E0A\u8FB9\ndown          // \u6307\u5411\u4E0B\u8FB9\nany           // \u7CFB\u7EDF\u6839\u636E\u9875\u9762\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u65B9\u5411"
								}
							]
						}
					],

					sampleCode: [
						"api.openPopoverWin({\n    width: 480,\n    height: 400,\n    name: 'page1',\n    url: './page1.html'\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "closePopoverWin",
					desc: [
						"关闭整个弹出层窗口，只 iPad 上面有效",
						"在当前弹出层里面的任意页面里面调用都会关闭整个弹出层",
						"closePopoverWin()"
					],
					sampleCode: ["api.closePopoverWin();"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "openSlidLayout",
					desc: [
						"打开侧滑式布局",
						"打开后，其所在 window 的 name 默认为 slidLayout，所以关闭整个侧滑布局可以通过 api.closeWin({name:'slidLayout'}) 实现，同时可以通过 api.openWin({name:'slidLayout'})来把整个侧滑显示到最前面",
						"openSlidLayout({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "type",
							desc: [
								{
									type: "字符串",
									default: "all",
									desc:
										"（可选项）侧滑类型（left：左侧滑、right：右侧滑、all：左右侧滑）。安卓暂只支持left。"
								}
							]
						},

						{
							tip: "leftEdge",
							desc: [
								{
									type: "数字",
									default: "60",
									desc:
										"（可选项）左侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 leftEdge 参数代替"
								}
							]
						},

						{
							tip: "rightEdge",
							desc: [
								{
									type: "数字",
									default: "60",
									desc:
										"（可选项）右侧滑时，侧滑 window 停留时露出的宽度。即将废弃，用 slidPaneStyle 中 rightEdge 参数代替"
								}
							]
						},

						{
							tip: "slidPaneStyle",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "侧滑层 window 样式",
									fields:
										"{\n  leftEdge:           //\uFF08\u53EF\u9009\u9879\uFF09\u5DE6\u4FA7\u6ED1\u65F6\uFF0C\u4FA7\u6ED1window\u505C\u7559\u65F6\u9732\u51FA\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA460\uFF0C\u6570\u5B57\u7C7B\u578B\n  rightEdge:          //\uFF08\u53EF\u9009\u9879\uFF09\u53F3\u4FA7\u6ED1\u65F6\uFF0C\u4FA7\u6ED1window\u505C\u7559\u65F6\u9732\u51FA\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA460\uFF0C\u6570\u5B57\u7C7B\u578B\n  leftScale:          //\uFF08\u53EF\u9009\u9879\uFF09\u5DE6\u4FA7\u6ED1\u65F6\uFF0C\u4FA7\u6ED1window\u79FB\u52A8\u65F6\u80FD\u7F29\u653E\u7684\u6700\u5C0F\u500D\u6570\uFF0C0-1.0\uFF0C\u9ED8\u8BA41.0\uFF0C\u6570\u5B57\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n  rightScale:         //\uFF08\u53EF\u9009\u9879\uFF09\u53F3\u4FA7\u6ED1\u65F6\uFF0C\u4FA7\u6ED1window\u79FB\u52A8\u65F6\u80FD\u7F29\u653E\u7684\u6700\u5C0F\u500D\u6570\uFF0C0-1.0\uFF0C\u9ED8\u8BA41.0\uFF0C\u6570\u5B57\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n}"
								}
							]
						},

						{
							tip: "fixedPaneStyle",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "底部固定层 window 样式",
									fields:
										"{\n  leftEdge:           //\uFF08\u53EF\u9009\u9879\uFF09\u5DE6\u4FA7\u6ED1\u65F6\uFF0C\u56FA\u5B9Awindow\u80FD\u5411\u5DE6\u79FB\u52A8\u7684\u6700\u5927\u5BBD\u5EA6\uFF0C\u9ED8\u8BA40\uFF0C\u6570\u5B57\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n  rightEdge:          //\uFF08\u53EF\u9009\u9879\uFF09\u53F3\u4FA7\u6ED1\u65F6\uFF0C\u56FA\u5B9Awindow\u80FD\u5411\u53F3\u79FB\u52A8\u7684\u6700\u5927\u5BBD\u5EA6\uFF0C\u9ED8\u8BA40\uFF0C\u6570\u5B57\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n  leftScale:          //\uFF08\u53EF\u9009\u9879\uFF09\u5DE6\u4FA7\u6ED1\u65F6\uFF0C\u56FA\u5B9Awindow\u5411\u5DE6\u79FB\u52A8\u65F6\u80FD\u7F29\u653E\u7684\u6700\u5C0F\u500D\u6570\uFF0C0-1.0\uFF0C\u9ED8\u8BA41.0\uFF0C\u6570\u5B57\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n  rightScale:         //\uFF08\u53EF\u9009\u9879\uFF09\u53F3\u4FA7\u6ED1\u65F6\uFF0C\u56FA\u5B9Awindow\u5411\u53F3\u79FB\u52A8\u65F6\u80FD\u7F29\u653E\u7684\u6700\u5C0F\u500D\u6570\uFF0C0-1.0\uFF0C\u9ED8\u8BA41.0\uFF0C\u6570\u5B57\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n  leftMaskBg:         //\uFF08\u53EF\u9009\u9879\uFF09\u5DE6\u4FA7\u6ED1\u65F6\uFF0C\u56FA\u5B9Awindow\u4E0A\u9762\u7684\u906E\u7F69\u5C42\u80CC\u666F\uFF0C\u652F\u6301\u989C\u8272\u548C\u56FE\u7247\uFF0C\u9ED8\u8BA4rgba(0,0,0,0)\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n  rightMaskBg:        //\uFF08\u53EF\u9009\u9879\uFF09\u53F3\u4FA7\u6ED1\u65F6\uFF0C\u56FA\u5B9Awindow\u4E0A\u9762\u7684\u906E\u7F69\u5C42\u80CC\u666F\uFF0C\u652F\u6301\u989C\u8272\u548C\u56FE\u7247\uFF0C\u9ED8\u8BA4rgba(0,0,0,0)\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n  leftBg:             //\uFF08\u53EF\u9009\u9879\uFF09\u5DE6\u4FA7\u6ED1\u65F6\uFF0C\u56FA\u5B9Awindow\u540E\u9762\u7684\u80CC\u666F\uFF0C\u7F29\u653E\u8FC7\u7A0B\u4E2D\u540E\u9762\u7684\u80CC\u666F\u5C06\u4F1A\u663E\u793A\u51FA\u6765\uFF0C\u652F\u6301\u989C\u8272\u548C\u56FE\u7247\uFF0C\u9ED8\u8BA4rgba(0,0,0,0)\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n  rightBg:            //\uFF08\u53EF\u9009\u9879\uFF09\u53F3\u4FA7\u6ED1\u65F6\uFF0C\u56FA\u5B9Awindow\u540E\u9762\u7684\u80CC\u666F\uFF0C\u7F29\u653E\u8FC7\u7A0B\u4E2D\u540E\u9762\u7684\u80CC\u666F\u5C06\u4F1A\u663E\u793A\u51FA\u6765\uFF0C\u652F\u6301\u989C\u8272\u548C\u56FE\u7247\uFF0C\u9ED8\u8BA4rgba(0,0,0,0)\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u53EA\u652F\u6301iOS\n}"
								}
							]
						},

						{
							tip: "fixedPane",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "底部固定层 window",
									fields:
										"{\n  name:'',                            // window\u540D\u5B57\uFF08\u5B57\u7B26\u4E32\u7C7B\u578B\uFF09\n  url:'',                             // \u9875\u9762\u5730\u5740\uFF0C\u53EF\u4EE5\u4E3A\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4EE5\u53CAwidget://\u3001fs://\u7B49\u534F\u8BAE\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u8FDC\u7A0B\u5730\u5740\n  pageParam:{},                       //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u53C2\u6570\uFF0C\u9875\u9762\u4E2D\u53EF\u4EE5\u901A\u8FC7api.pageParam\u83B7\u53D6\uFF0CJSON\u5BF9\u8C61\n  bgColor:'',                         //\uFF08\u53EF\u9009\u9879\uFF09\u80CC\u666F\u8272\uFF0C\u652F\u6301\u56FE\u7247\u548C\u989C\u8272\uFF0C\u683C\u5F0F\u4E3A#fff\u3001#ffffff\u3001rgba(r,g,b,a)\u7B49\uFF0C\u56FE\u7247\u8DEF\u5F84\u652F\u6301fs://\u3001widget://\u7B49APICloud\u81EA\u5B9A\u4E49\u6587\u4EF6\u8DEF\u5F84\u534F\u8BAE\uFF0C\u540C\u65F6\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\n  bounces:false,                      //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5F39\u52A8\uFF0C\u9ED8\u8BA4\u503C\uFF1A\u82E5\u5728 config.xml \u91CC\u9762\u914D\u7F6E\u4E86pageBounce\uFF0C\u5219\u9ED8\u8BA4\u503C\u4E3A\u914D\u7F6E\u7684\u503C\uFF0C\u5426\u5219\u4E3Afalse\n  scrollToTop:false                   //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u70B9\u51FB\u72B6\u6001\u680F\uFF0C\u9875\u9762\u662F\u5426\u6EDA\u52A8\u5230\u9876\u90E8\u3002\u82E5\u5F53\u524D\u5C4F\u5E55\u4E0A\u4E0D\u6B62\u4E00\u4E2A\u9875\u9762\u7684scrollToTop\u5C5E\u6027\u4E3Atrue\uFF0C\u5219\u6240\u6709\u7684\u90FD\u4E0D\u4F1A\u8D77\u4F5C\u7528\u3002\u9ED8\u8BA4\u503C\uFF1Atrue\u3002\u53EAiOS\u6709\u6548\n  scrollEnabled:true                  //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u5185\u5BB9\u8D85\u51FA\u540E\u662F\u5426\u53EF\u4EE5\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u53EA\u652F\u6301iOS\n  vScrollBarEnabled:true,             //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u5782\u76F4\u6EDA\u52A8\u6761\uFF0C\u9ED8\u8BA4true \n  hScrollBarEnabled:true,             //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u6C34\u5E73\u6EDA\u52A8\u6761\uFF0C\u9ED8\u8BA4true\n  scaleEnabled:true,                  //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u662F\u5426\u53EF\u4EE5\u7F29\u653E\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Afalse\n  allowEdit:false,                    //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5141\u8BB8\u957F\u6309\u9875\u9762\u65F6\u5F39\u51FA\u9009\u62E9\u83DC\u5355\n  softInputMode:'auto'                //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u952E\u76D8\u5F39\u51FA\u65F6\uFF0C\u8F93\u5165\u6846\u88AB\u76D6\u4F4F\u65F6\uFF0C\u5F53\u524D\u9875\u9762\u7684\u8C03\u6574\u65B9\u5F0F\uFF0C\u53EAiOS\u6709\u6548\n                                      //\u53D6\u503C\u8303\u56F4\uFF1A\n                                      //resize      //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                      //pan         //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4E0D\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                      //auto        //\u9ED8\u8BA4\u503C\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u5982\u4F55\u5904\u7406\uFF0CiOS\u5E73\u53F0\u8BE5\u5B57\u6BB5\u7B49\u540C\u4E8Eresize\n  softInputBarEnabled:false,          //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u952E\u76D8\u4E0A\u65B9\u7684\u5DE5\u5177\u6761\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Atrue\uFF0C\u53EAiOS\u6709\u6548\n  defaultRefreshHeader:''             //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u9ED8\u8BA4\u4E0B\u62C9\u5237\u65B0\u7C7B\u578B\uFF0C\u53D6\u503C\u8303\u56F4\uFF1Apull\u3001swipe\n  customRefreshHeader:''              //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u6A21\u5757\u7684\u540D\u79F0\uFF0C\u8BBE\u7F6E\u540E\u53EF\u4EE5\u4F7F\u7528api.setCustomRefreshHeaderInfo\u65B9\u6CD5\u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u7EC4\u4EF6\n}"
								}
							]
						},

						{
							tip: "slidPane",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "侧滑层window",
									fields:
										"{\n  name:'',                            // window\u540D\u5B57\uFF08\u5B57\u7B26\u4E32\u7C7B\u578B\uFF09\n  url:'',                             // \u9875\u9762\u5730\u5740\uFF0C\u53EF\u4EE5\u4E3A\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4EE5\u53CAwidget://\u3001fs://\u7B49\u534F\u8BAE\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u8FDC\u7A0B\u5730\u5740\n  pageParam:{},                       //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u53C2\u6570\uFF0C\u9875\u9762\u4E2D\u53EF\u4EE5\u901A\u8FC7api.pageParam\u83B7\u53D6\uFF0CJSON\u5BF9\u8C61\n  bgColor:'',                         //\uFF08\u53EF\u9009\u9879\uFF09\u80CC\u666F\u8272\uFF0C\u652F\u6301\u56FE\u7247\u548C\u989C\u8272\uFF0C\u683C\u5F0F\u4E3A#fff\u3001#ffffff\u3001rgba(r,g,b,a)\u7B49\uFF0C\u56FE\u7247\u8DEF\u5F84\u652F\u6301fs://\u3001widget://\u7B49APICloud\u81EA\u5B9A\u4E49\u6587\u4EF6\u8DEF\u5F84\u534F\u8BAE\uFF0C\u540C\u65F6\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\n  bounces:false,                      //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5F39\u52A8\uFF0C\u9ED8\u8BA4\u503C\uFF1A\u82E5\u5728 config.xml \u91CC\u9762\u914D\u7F6E\u4E86pageBounce\uFF0C\u5219\u9ED8\u8BA4\u503C\u4E3A\u914D\u7F6E\u7684\u503C\uFF0C\u5426\u5219\u4E3Afalse\n  scrollToTop:false                   //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u70B9\u51FB\u72B6\u6001\u680F\uFF0C\u9875\u9762\u662F\u5426\u6EDA\u52A8\u5230\u9876\u90E8\u3002\u82E5\u5F53\u524D\u5C4F\u5E55\u4E0A\u4E0D\u6B62\u4E00\u4E2A\u9875\u9762\u7684scrollToTop\u5C5E\u6027\u4E3Atrue\uFF0C\u5219\u6240\u6709\u7684\u90FD\u4E0D\u4F1A\u8D77\u4F5C\u7528\u3002\u9ED8\u8BA4\u503C\uFF1Atrue\u3002\u53EAiOS\u6709\u6548\n  scrollEnabled:true                  //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u5185\u5BB9\u8D85\u51FA\u540E\u662F\u5426\u53EF\u4EE5\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u53EA\u652F\u6301iOS\n  vScrollBarEnabled:true,             //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u5782\u76F4\u6EDA\u52A8\u6761\uFF0C\u9ED8\u8BA4true \n  hScrollBarEnabled:true,             //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u6C34\u5E73\u6EDA\u52A8\u6761\uFF0C\u9ED8\u8BA4true\n  scaleEnabled:true,                  //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u662F\u5426\u53EF\u4EE5\u7F29\u653E\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Afalse\n  allowEdit:false,                    //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5141\u8BB8\u957F\u6309\u9875\u9762\u65F6\u5F39\u51FA\u9009\u62E9\u83DC\u5355\n  softInputMode:'auto'                //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u952E\u76D8\u5F39\u51FA\u65F6\uFF0C\u8F93\u5165\u6846\u88AB\u76D6\u4F4F\u65F6\uFF0C\u5F53\u524D\u9875\u9762\u7684\u8C03\u6574\u65B9\u5F0F\uFF0C\u53EAiOS\u6709\u6548\n                                      //\u53D6\u503C\u8303\u56F4\uFF1A\n                                      //resize       //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                      //pan          //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4E0D\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                      //auto         //\u9ED8\u8BA4\u503C\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u5982\u4F55\u5904\u7406\uFF0CiOS\u5E73\u53F0\u8BE5\u5B57\u6BB5\u7B49\u540C\u4E8Eresize\n  softInputBarEnabled:false,          //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u952E\u76D8\u4E0A\u65B9\u7684\u5DE5\u5177\u6761\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Atrue\uFF0C\u53EAiOS\u6709\u6548\n  defaultRefreshHeader:''             //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u9ED8\u8BA4\u4E0B\u62C9\u5237\u65B0\u7C7B\u578B\uFF0C\u53D6\u503C\u8303\u56F4\uFF1Apull\u3001swipe\n  customRefreshHeader:''              //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u6A21\u5757\u7684\u540D\u79F0\uFF0C\u8BBE\u7F6E\u540E\u53EF\u4EE5\u4F7F\u7528api.setCustomRefreshHeaderInfo\u65B9\u6CD5\u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u7EC4\u4EF6\n}"
								}
							]
						}
					],

					sampleCode: [
						"api.openSlidLayout({\n    type: 'left',\n    fixedPane: {\n        name: 'win1',\n        url: 'win1.html'\n    },\n    slidPane: {\n        name: 'win2',\n        url: 'win2.html'\n    }\n  }, function(ret, err) {\n\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "openSlidPane",
					desc: ["向左或右进行侧滑", "openSlidPane({params})"],
					params: [
						{
							tip: "type",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "侧滑类型，left 或 right"
								}
							]
						}
					],

					sampleCode: ["api.openSlidPane({\n    type: 'left'\n});"],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "closeSlidPane",
					desc: ["当 SlidPane 处于左或右侧滑状态时，将其收起", "closeSlidPane()"],
					sampleCode: ["api.closeSlidPane();"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "lockSlidPane",
					desc: ["锁住 SlidPane，使其不能跟随手指滑动而移动", "lockSlidPane()"],
					sampleCode: ["api.lockSlidPane();"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "unlockSlidPane",
					desc: ["解锁 SlidPane，使其能跟随手指滑动而移动", "unlockSlidPane()"],
					sampleCode: ["api.unlockSlidPane();"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "openDrawerLayout",
					desc: [
						"打开一个抽屉式侧滑 window，可以从当前 window 的左右边缘滑动拉出侧滑 window。",
						"此方法能够使用 openWin 方法的所有参数，在此基础上增加了 leftPane、rightPane 等参数，可以通过 api.closeWin()方法来关闭整个抽屉式侧滑。",
						"openDrawerLayout({params})"
					],
					params: [
						{
							tip: "leftPane",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "左边侧滑 window",
									fields:
										"{\n  edge:60,                            // \u5DE6\u8FB9\u4FA7\u6ED1\u6253\u5F00\u540E\uFF0C\u6F0F\u51FA\u7684\u534A\u900F\u660E\u533A\u57DF\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u503C\u4E3A60\u3002\u6B64\u65F6\u5DE6\u8FB9\u4FA7\u6ED1window\u7684\u5BBD\u5EA6\u4E3A\u5C4F\u5E55\u5BBD\u5EA6\u51CF\u53BBedge\n  name:'',                            // window\u540D\u5B57\uFF08\u5B57\u7B26\u4E32\u7C7B\u578B\uFF09\n  url:'',                             // \u9875\u9762\u5730\u5740\uFF0C\u53EF\u4EE5\u4E3A\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4EE5\u53CAwidget://\u3001fs://\u7B49\u534F\u8BAE\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u8FDC\u7A0B\u5730\u5740\n  pageParam:{},                       //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u53C2\u6570\uFF0C\u9875\u9762\u4E2D\u53EF\u4EE5\u901A\u8FC7api.pageParam\u83B7\u53D6\uFF0CJSON\u5BF9\u8C61\n  bgColor:'',                         //\uFF08\u53EF\u9009\u9879\uFF09\u80CC\u666F\u8272\uFF0C\u652F\u6301\u56FE\u7247\u548C\u989C\u8272\uFF0C\u683C\u5F0F\u4E3A#fff\u3001#ffffff\u3001rgba(r,g,b,a)\u7B49\uFF0C\u56FE\u7247\u8DEF\u5F84\u652F\u6301fs://\u3001widget://\u7B49APICloud\u81EA\u5B9A\u4E49\u6587\u4EF6\u8DEF\u5F84\u534F\u8BAE\uFF0C\u540C\u65F6\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\n  bounces:false,                      //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5F39\u52A8\uFF0C\u9ED8\u8BA4\u503C\uFF1A\u82E5\u5728 config.xml \u91CC\u9762\u914D\u7F6E\u4E86pageBounce\uFF0C\u5219\u9ED8\u8BA4\u503C\u4E3A\u914D\u7F6E\u7684\u503C\uFF0C\u5426\u5219\u4E3Afalse\n  scrollToTop:false,                  //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u70B9\u51FB\u72B6\u6001\u680F\uFF0C\u9875\u9762\u662F\u5426\u6EDA\u52A8\u5230\u9876\u90E8\u3002\u82E5\u5F53\u524D\u5C4F\u5E55\u4E0A\u4E0D\u6B62\u4E00\u4E2A\u9875\u9762\u7684scrollToTop\u5C5E\u6027\u4E3Atrue\uFF0C\u5219\u6240\u6709\u7684\u90FD\u4E0D\u4F1A\u8D77\u4F5C\u7528\u3002\u9ED8\u8BA4\u503C\uFF1Atrue\u3002\u53EAiOS\u6709\u6548\n  scrollEnabled:true                  //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u5185\u5BB9\u8D85\u51FA\u540E\u662F\u5426\u53EF\u4EE5\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u53EA\u652F\u6301iOS\n  vScrollBarEnabled:true,             //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u5782\u76F4\u6EDA\u52A8\u6761\uFF0C\u9ED8\u8BA4true \n  hScrollBarEnabled:true,             //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u6C34\u5E73\u6EDA\u52A8\u6761\uFF0C\u9ED8\u8BA4true\n  scaleEnabled:true,                  //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u662F\u5426\u53EF\u4EE5\u7F29\u653E\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Afalse\n  allowEdit:false,                    //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5141\u8BB8\u957F\u6309\u9875\u9762\u65F6\u5F39\u51FA\u9009\u62E9\u83DC\u5355\n  softInputMode:'auto',               //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u952E\u76D8\u5F39\u51FA\u65F6\uFF0C\u8F93\u5165\u6846\u88AB\u76D6\u4F4F\u65F6\uFF0C\u5F53\u524D\u9875\u9762\u7684\u8C03\u6574\u65B9\u5F0F\uFF0C\u53EAiOS\u6709\u6548\n                                      //\u53D6\u503C\u8303\u56F4\uFF1A\n                                      //resize      //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                      //pan         //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4E0D\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                      //auto        //\u9ED8\u8BA4\u503C\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u5982\u4F55\u5904\u7406\uFF0CiOS\u5E73\u53F0\u8BE5\u5B57\u6BB5\u7B49\u540C\u4E8Eresize\n  softInputBarEnabled:false,          //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u952E\u76D8\u4E0A\u65B9\u7684\u5DE5\u5177\u6761\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Atrue\uFF0C\u53EAiOS\u6709\u6548\n  defaultRefreshHeader:''             //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u9ED8\u8BA4\u4E0B\u62C9\u5237\u65B0\u7C7B\u578B\uFF0C\u53D6\u503C\u8303\u56F4\uFF1Apull\u3001swipe\n  customRefreshHeader:''              //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u6A21\u5757\u7684\u540D\u79F0\uFF0C\u8BBE\u7F6E\u540E\u53EF\u4EE5\u4F7F\u7528api.setCustomRefreshHeaderInfo\u65B9\u6CD5\u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u7EC4\u4EF6\n}"
								}
							]
						},

						{
							tip: "rightPane",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "右边侧滑 window",
									fields:
										"{\n  edge:60,                            // \u53F3\u8FB9\u4FA7\u6ED1\u6253\u5F00\u540E\uFF0C\u6F0F\u51FA\u7684\u534A\u900F\u660E\u533A\u57DF\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u503C\u4E3A60\u3002\u6B64\u65F6\u53F3\u8FB9\u4FA7\u6ED1window\u7684\u5BBD\u5EA6\u4E3A\u5C4F\u5E55\u5BBD\u5EA6\u51CF\u53BBedge\n  name:'',                            // window\u540D\u5B57\uFF08\u5B57\u7B26\u4E32\u7C7B\u578B\uFF09\n  url:'',                             // \u9875\u9762\u5730\u5740\uFF0C\u53EF\u4EE5\u4E3A\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\u548C\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4EE5\u53CAwidget://\u3001fs://\u7B49\u534F\u8BAE\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u8FDC\u7A0B\u5730\u5740\n  pageParam:{},                       //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u53C2\u6570\uFF0C\u9875\u9762\u4E2D\u53EF\u4EE5\u901A\u8FC7api.pageParam\u83B7\u53D6\uFF0CJSON\u5BF9\u8C61\n  bgColor:'',                         //\uFF08\u53EF\u9009\u9879\uFF09\u80CC\u666F\u8272\uFF0C\u652F\u6301\u56FE\u7247\u548C\u989C\u8272\uFF0C\u683C\u5F0F\u4E3A#fff\u3001#ffffff\u3001rgba(r,g,b,a)\u7B49\uFF0C\u56FE\u7247\u8DEF\u5F84\u652F\u6301fs://\u3001widget://\u7B49APICloud\u81EA\u5B9A\u4E49\u6587\u4EF6\u8DEF\u5F84\u534F\u8BAE\uFF0C\u540C\u65F6\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\n  bounces:false,                      //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5F39\u52A8\uFF0C\u9ED8\u8BA4\u503C\uFF1A\u82E5\u5728 config.xml \u91CC\u9762\u914D\u7F6E\u4E86pageBounce\uFF0C\u5219\u9ED8\u8BA4\u503C\u4E3A\u914D\u7F6E\u7684\u503C\uFF0C\u5426\u5219\u4E3Afalse\n  scrollToTop:false                   //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u70B9\u51FB\u72B6\u6001\u680F\uFF0C\u9875\u9762\u662F\u5426\u6EDA\u52A8\u5230\u9876\u90E8\u3002\u82E5\u5F53\u524D\u5C4F\u5E55\u4E0A\u4E0D\u6B62\u4E00\u4E2A\u9875\u9762\u7684scrollToTop\u5C5E\u6027\u4E3Atrue\uFF0C\u5219\u6240\u6709\u7684\u90FD\u4E0D\u4F1A\u8D77\u4F5C\u7528\u3002\u9ED8\u8BA4\u503C\uFF1Atrue\u3002\u53EAiOS\u6709\u6548\n  scrollEnabled:true                  //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u5185\u5BB9\u8D85\u51FA\u540E\u662F\u5426\u53EF\u4EE5\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u53EA\u652F\u6301iOS\n  vScrollBarEnabled:true,             //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u5782\u76F4\u6EDA\u52A8\u6761\uFF0C\u9ED8\u8BA4true \n  hScrollBarEnabled:true,             //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u6C34\u5E73\u6EDA\u52A8\u6761\uFF0C\u9ED8\u8BA4true\n  scaleEnabled:true,                  //\uFF08\u53EF\u9009\u9879\uFF09\u9875\u9762\u662F\u5426\u53EF\u4EE5\u7F29\u653E\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Afalse\n  allowEdit:false,                    //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u5141\u8BB8\u957F\u6309\u9875\u9762\u65F6\u5F39\u51FA\u9009\u62E9\u83DC\u5355\n  softInputMode:'auto'                //\uFF08\u53EF\u9009\u9879\uFF09\u5F53\u952E\u76D8\u5F39\u51FA\u65F6\uFF0C\u8F93\u5165\u6846\u88AB\u76D6\u4F4F\u65F6\uFF0C\u5F53\u524D\u9875\u9762\u7684\u8C03\u6574\u65B9\u5F0F\uFF0C\u53EAiOS\u6709\u6548\n                                      //\u53D6\u503C\u8303\u56F4\uFF1A\n                                      //resize       //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                      //pan          //\u82E5\u952E\u76D8\u76D6\u4F4F\u8F93\u5165\u6846\uFF0C\u9875\u9762\u4E0D\u4F1A\u81EA\u52A8\u4E0A\u79FB\n                                      //auto         //\u9ED8\u8BA4\u503C\uFF0C\u7531\u7CFB\u7EDF\u51B3\u5B9A\u5982\u4F55\u5904\u7406\uFF0CiOS\u5E73\u53F0\u8BE5\u5B57\u6BB5\u7B49\u540C\u4E8Eresize\n  softInputBarEnabled:false,          //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u663E\u793A\u952E\u76D8\u4E0A\u65B9\u7684\u5DE5\u5177\u6761\uFF0C\u5E03\u5C14\u578B\uFF0C\u9ED8\u8BA4\u503C\uFF1Atrue\uFF0C\u53EAiOS\u6709\u6548\n  defaultRefreshHeader:''             //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u9ED8\u8BA4\u4E0B\u62C9\u5237\u65B0\u7C7B\u578B\uFF0C\u53D6\u503C\u8303\u56F4\uFF1Apull\u3001swipe\n  customRefreshHeader:''              //\uFF08\u53EF\u9009\u9879\uFF09\u8BBE\u7F6E\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u6A21\u5757\u7684\u540D\u79F0\uFF0C\u8BBE\u7F6E\u540E\u53EF\u4EE5\u4F7F\u7528api.setCustomRefreshHeaderInfo\u65B9\u6CD5\u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u7EC4\u4EF6\n}"
								}
							]
						},

						{
							tip: "slidToOpenPane",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否支持在页面边缘处滑动打开drawerPane"
								}
							]
						},

						{
							tip: "slidToClosePane",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）在打开的drawerPane页面，是否支持滑动关闭drawerPane"
								}
							]
						},

						{
							tip: "tapToClosePane",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc:
										"（可选项）在打开的drawerPane页面，是否支持点击遮罩部分关闭drawerPane"
								}
							]
						}
					],

					sampleCode: [
						"api.openDrawerLayout({\n    name: 'main',\n    url: './main.html',\n    animation: {\n        type: 'none'\n    },\n    leftPane: {\n        name: 'leftPane',\n        url: 'leftPane.html'\n    }\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.2.0及更高版本"]
				},
				{
					name: "openDrawerPane",
					desc: ["打开抽屉式侧滑Pane", "openDrawerPane({params})"],
					params: [
						{
							tip: "type",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "侧滑类型，left 或 right"
								}
							]
						}
					],

					sampleCode: ["api.openDrawerPane({\n    type: 'left'\n});"],

					usability: ["iOS系统，Android系统", "可提供的1.2.0及更高版本"]
				},
				{
					name: "closeDrawerPane",
					desc: ["关闭抽屉式侧滑Pane", "closeDrawerPane()"],
					sampleCode: ["api.closeDrawerPane();"],
					usability: ["iOS系统，Android系统", "可提供的1.2.0及更高版本"]
				},
				{
					name: "loadData",
					desc: [
						"在指定 window 或者 frame 中加载HTML数据，对于 frameGroup 里面的 frame 也有效。",
						"loadData({params})"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）window 名称，若要跨 window ，该字段必须指定，首页的名称为 root"
								}
							]
						},

						{
							tip: "frameName",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）frame名称"
								}
							]
						},

						{
							tip: "url",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）做为baseUrl，data中的html引用的资源文件根路径以该url为基础，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径。"
								}
							]
						},

						{
							tip: "data",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "页面加载的数据内容，可以为html片段或者整张html文件的数据"
								}
							]
						}
					],

					sampleCode: [
						"//\u5728\u5F53\u524Dwindow\u4E2D\u52A0\u8F7DHTML\u6570\u636E\nvar data = 'hello world';\napi.loadData({\n    data: data\n});\n\n//\u5728\u5F53\u524Dwindow\u4E2D\u627E\u5230\u540D\u4E3AfrmName\u7684frame\uFF0C\u5E76\u5728\u8BE5frame\u4E2D\u52A0\u8F7DHTML\u6570\u636E\nvar data = 'hello world';\napi.loadData({\n    frameName: 'frmName',\n    data: data\n});\n\n//\u5728\u540D\u4E3AwinName\u7684window\u4E2D\u52A0\u8F7DHTML\u6570\u636E\nvar data = 'hello world';\napi.loadData({\n    name: 'winName',\n    data: data\n});\n\n//\u5728\u540D\u4E3AwinName\u7684window\u4E2D\u627E\u5230\u540D\u4E3AfrmName\u7684frame\uFF0C\u5E76\u5728\u8BE5frame\u4E2D\u52A0\u8F7DHTML\u6570\u636E\nvar data = 'hello world';\napi.loadData({\n    name: 'winName',\n    frameName: 'frmName',\n    data: data\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.2.9及更高版本"]
				},
				{
					name: "execScript",
					desc: [
						"在指定 window 或者 frame 中执行脚本，对于 frameGroup 里面的 frame 也有效，若 name 和 frameName 都未指定，则在当前 window 中执行脚本，具体执行逻辑见补充说明。",
						"execScript({params})"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）window 名称，若要跨 window 执行脚本，该字段必须指定，首页的名称为 root"
								}
							]
						},

						{
							tip: "frameName",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）frame名称"
								}
							]
						},

						{
							tip: "script",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "js代码"
								}
							]
						}
					],

					sampleCode: [
						"//\u5728\u5F53\u524Dwindow\u4E2D\u6267\u884Cjsfun\u811A\u672C\nvar jsfun = 'funcGoto();';\napi.execScript({\n    script: jsfun\n});\n\n//\u5728\u5F53\u524Dwindow\u4E2D\u627E\u5230\u540D\u4E3AfrmName\u7684frame\uFF0C\u5E76\u5728\u8BE5frame\u4E2D\u6267\u884Cjsfun\u811A\u672C\nvar jsfun = 'funcGoto();';\napi.execScript({\n    frameName: 'frmName',\n    script: jsfun\n});\n\n//\u5728\u540D\u4E3AwinName\u7684window\u4E2D\u6267\u884Cjsfun\u811A\u672C\nvar jsfun = 'funcGoto();';\napi.execScript({\n    name: 'winName',\n    script: jsfun\n});\n\n//\u5728\u540D\u4E3AwinName\u7684window\u4E2D\u627E\u5230\u540D\u4E3AfrmName\u7684frame\uFF0C\u5E76\u5728\u8BE5frame\u4E2D\u6267\u884Cjsfun\u811A\u672C\nvar jsfun = 'funcGoto();';\napi.execScript({\n    name: 'winName',\n    frameName: 'frmName',\n    script: jsfun\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "setBlurEffect",
					desc: [
						"对当前页面或应用设置模糊效果",
						"该方法只支持iOS 8及以上系统",
						"setBlurEffect({params})"
					],
					params: [
						{
							tip: "style",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "模糊效果风格样式，传none时表示移除模糊效果",
									fields:
										"none            //\u79FB\u9664\u6A21\u7CCA\u6548\u679C\nextra_light     //\u6A21\u7CCA\u533A\u57DF\u6BD4\u5E95\u5C42\u89C6\u56FE\u7684\u989C\u8272\u66F4\u6DE1\nlight           //\u6A21\u7CCA\u533A\u57DF\u4E0E\u5E95\u5C42\u89C6\u56FE\u7684\u8272\u8C03\u8FD1\u4F3C\ndark            //\u6A21\u7CCA\u533A\u57DF\u6BD4\u5E95\u5C42\u89C6\u56FE\u7684\u989C\u8272\u66F4\u6DF1\nregular         //\u9002\u5E94\u754C\u9762\u98CE\u683C\u7684\u5E38\u89C4\u6A21\u7CCA\u6837\u5F0F\uFF0C\u53EA\u652F\u6301iOS 10\u53CA\u4EE5\u4E0A\u7CFB\u7EDF\nprominent       //\u9002\u5E94\u754C\u9762\u98CE\u683C\uFF0C\u4F7F\u5185\u5BB9\u66F4\u52A0\u7A81\u51FA\uFF0C\u53EA\u652F\u6301iOS 10\u53CA\u4EE5\u4E0A\u7CFB\u7EDF"
								}
							]
						},

						{
							tip: "global",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）false时表示对当前页面添加模糊效果，true时表示对整个应用窗口添加模糊效果"
								}
							]
						},

						{
							tip: "alpha",
							desc: [
								{
									type: "数字",
									default: "1",
									desc: "（可选项）模糊区域透明度，介于0和1之间"
								}
							]
						},

						{
							tip: "borderRadius",
							desc: [
								{
									type: "数字",
									default: "0",
									desc: "（可选项）模糊区域圆角半径"
								}
							]
						},

						{
							tip: "animation",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）动画参数，设置模糊渐变效果，只支持iOS 9及以上系统",
									fields:
										"{\n  delay:               //\u52A8\u753B\u5EF6\u8FDF\u6267\u884C\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u9ED8\u8BA4\u503C0\uFF0C\u6570\u5B57\u7C7B\u578B\n  duration:            //\u52A8\u753B\u6267\u884C\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u9ED8\u8BA4\u503C0\uFF0C\u6570\u5B57\u7C7B\u578B\n  curve:               //\u52A8\u753B\u66F2\u7EBF\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503Cease_in_out\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n}\n\ncurve \u53D6\u503C\u8303\u56F4\uFF1A\n\nease_in_out     //\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u6162\nease_in         //\u5F00\u59CB\u65F6\u6162\nease_out        //\u7ED3\u675F\u65F6\u6162\nlinear          //\u6574\u4E2A\u52A8\u753B\u8FC7\u7A0B\u901F\u7387\u4E00\u6837"
								}
							]
						},

						{
							tip: "rect",
							desc: [
								{
									type: "JSON 对象",
									default: "页面区域",
									desc: "（可选项）模糊区域",
									fields:
										"{\n  x:,                  //\u5DE6\u4E0A\u89D2x\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\n  y:,                  //\u5DE6\u4E0A\u89D2y\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\n  w:,                  //\u5BBD\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B\n  h:,                  //\u9AD8\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B\n}"
								}
							]
						}
					],

					sampleCode: [
						"// \u8BBE\u7F6E\u5E94\u7528\u6A21\u7CCA\u6548\u679C\uFF1A\napi.addEventListener({\n    name: 'pause'\n}, function(){\n    api.setBlurEffect({\n        style: 'light',\n        global: true\n    });\n});\n\napi.addEventListener({\n    name: 'resume'\n}, function(){\n    api.setBlurEffect({\n        style: 'none',\n        global: true\n    });\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.2.61及更高版本"]
				},
				{
					name: "removeLaunchView",
					desc: [
						"移除启动图。若 config.xml 里面配置 autoLaunch 为 false，则启动图不会自动消失，直到调用此方法移除。",
						"removeLaunchView({params})"
					],
					params: [
						{
							tip: "animation",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）动画参数，不传时不使用动画",
									fields:
										'{\n  type:"fade",                //\u52A8\u753B\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u7C7B\u578B\u5E38\u91CF\uFF09\n  subType:"from_right",       //\u52A8\u753B\u5B50\u7C7B\u578B\uFF08\u8BE6\u89C1\u52A8\u753B\u5B50\u7C7B\u578B\u5E38\u91CF\uFF09\n  duration:300                //\u52A8\u753B\u8FC7\u6E21\u65F6\u95F4\uFF0C\u9ED8\u8BA4300\u6BEB\u79D2\n}\n\ntype \u53D6\u503C\u8303\u56F4\uFF1A\n\nnone            //\u65E0\u52A8\u753B\u6548\u679C\npush            //\u65B0\u89C6\u56FE\u5C06\u65E7\u89C6\u56FE\u63A8\u5F00\nmovein          //\u65B0\u89C6\u56FE\u79FB\u5230\u65E7\u89C6\u56FE\u4E0A\u9762\nfade            //\u4EA4\u53C9\u6DE1\u5316\u8FC7\u6E21\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\nflip            //\u7FFB\u8F6C\u6548\u679C\nreveal          //\u5C06\u65E7\u89C6\u56FE\u79FB\u5F00,\u663E\u793A\u4E0B\u9762\u7684\u65B0\u89C6\u56FE\nripple          //\u6EF4\u6C34\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncurl            //\u5411\u4E0A\u7FFB\u4E00\u9875\nun_curl         //\u5411\u4E0B\u7FFB\u4E00\u9875\nsuck            //\u6536\u7F29\u6548\u679C\uFF08\u4E0D\u652F\u6301\u8FC7\u6E21\u65B9\u5411\uFF09\ncube            //\u7ACB\u65B9\u4F53\u7FFB\u6EDA\u6548\u679C\n\nsubType \u53D6\u503C\u8303\u56F4\uFF1A\n\n\nfrom_right      //\u4ECE\u53F3\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_left       //\u4ECE\u5DE6\u8FB9\u5F00\u59CB\u52A8\u753B\nfrom_top        //\u4ECE\u9876\u90E8\u5F00\u59CB\u52A8\u753B\nfrom_bottom     //\u4ECE\u5E95\u90E8\u5F00\u59CB\u52A8\u753B'
								}
							]
						}
					],

					sampleCode: [
						"api.removeLaunchView({\n    animation: {\n        type: 'fade',\n        duration: 500\n    }\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "showLaunchView",
					desc: ["重新显示闪屏广告，若没有闪屏广告则不显示。", "showLaunchView()"],
					sampleCode: ["api.showLaunchView();"],
					usability: ["iOS系统，Android系统", "可提供的1.2.37及更高版本"]
				},
				{
					name: "parseTapmode",
					desc: [
						"解析元素 tapmode 属性，优化点击事件处理",
						"默认页面加载完成后，引擎会对 dom 里面的元素进行 tapmode 属性解析，若是之后用代码创建的 dom 元素，则需要调用该方法后 tapmode 属性才会生效",
						"parseTapmode()"
					],
					sampleCode: ["api.parseTapmode();"],
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				}
			]
		},

		{
			name: "高级窗口",
			icon: "api_advance_win_icon",
			children: [
				{
					name: "openTabLayout",
					desc: [
						"打开tabLayout布局",
						"本方法继承了openWin方法的所有参数，同时在此基础上增加了navigationBar、tabBar等参数，来设置和使用原生的顶部导航栏和底部标签栏，可以通过closeWin方法来关闭页面。为帮助您更好的了解和使用tabLayout，可以参考论坛的示例说明。",
						"openTabLayout({params})"
					],
					params: [
						{
							tip: "title",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）显示在顶部navigationBar上面的标题"
								}
							]
						},

						{
							tip: "hideNavigationBar",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否隐藏顶部navigationBar导航栏，只在传了navigationBar参数时有效"
								}
							]
						},

						{
							tip: "hideTabBar",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否隐藏底部tabBar标签栏，只在传了tabBar参数时有效"
								}
							]
						},

						{
							tip: "navigationBar",
							desc: [
								{
									type: "JSON对象",
									default: "无",
									desc: "（可选项）顶部navigationBar导航栏配置信息",
									fields:
										"{\n  height:                   //\uFF08\u53EF\u9009\u9879\uFF09\u5BFC\u822A\u680F\u9AD8\u5EA6\u3002\u9ED8\u8BA4\u503C45\u3002\u6570\u5B57\u7C7B\u578B\n  background:               //\uFF08\u53EF\u9009\u9879\uFF09\u5BFC\u822A\u680F\u80CC\u666F\u3002\u652F\u6301\u989C\u8272\u503C\u548C\u56FE\u7247\uFF0C\u9ED8\u8BA4\u503C#fff\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  shadow:                   //\uFF08\u53EF\u9009\u9879\uFF09\u5BFC\u822A\u680F\u5E95\u90E8\u9634\u5F71\u7EBF\u989C\u8272\u3002\u9ED8\u8BA4\u503C#ddd\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  color:                    //\uFF08\u53EF\u9009\u9879\uFF09\u5BFC\u822A\u680F\u6807\u9898\u6587\u5B57\u989C\u8272\u3002\u9ED8\u8BA4\u503C#000\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  fontSize:                 //\uFF08\u53EF\u9009\u9879\uFF09\u5BFC\u822A\u680F\u6807\u9898\u5B57\u4F53\u5927\u5C0F\u3002\u9ED8\u8BA4\u503C17\uFF0C\u6570\u5B57\u7C7B\u578B\n  fontWeight:               //\uFF08\u53EF\u9009\u9879\uFF09\u5BFC\u822A\u680F\u6807\u9898\u5B57\u4F53\u7C97\u7EC6\u3002\u5B57\u7B26\u4E32\u7C7B\u578B\u3002Android\u53CAiOS8.2\u4EE5\u4E0B\u7CFB\u7EDF\u53EA\u652F\u6301normal\u3001bold\uFF0CiOS8.2\u53CA\u4EE5\u4E0A\u7CFB\u7EDF\u652F\u6301normal\u3001bold\u3001bolder\u3001lighter\u3001100~900\u3002\n  fontFamily:               //\uFF08\u53EF\u9009\u9879\uFF09\u5BFC\u822A\u680F\u6807\u9898\u5B57\u4F53\u3002\u53EA\u652F\u6301iOS\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  hideBackButton:           //\uFF08\u53EF\u9009\u9879\uFF09\u662F\u5426\u9690\u85CF\u9ED8\u8BA4\u8FD4\u56DE\u6309\u94AE\u3002\u5982\u679C\u4F20\u4E86leftButtons\uFF0ChideBackButton\u53C2\u6570\u5931\u6548\u3002\u8FD4\u56DE\u6309\u94AE\u7531\u7BAD\u5934\u56FE\u6807\u548C\u524D\u4E00\u4E2A\u9875\u9762\u7684\u6807\u9898\u7EC4\u6210\uFF0C\u82E5\u524D\u4E00\u4E2A\u9875\u9762\u672A\u8BBE\u7F6E\u6807\u9898\uFF0C\u5219\u6309\u94AE\u6587\u5B57\u4E3A\u201C\u8FD4\u56DE\u201D\u3002\u53EF\u4EE5\u901A\u8FC7\u76D1\u542Cnavbackbtn\u6216keyback\u4E8B\u4EF6\u6765\u5904\u7406\u8FD4\u56DE\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u3002\u5E03\u5C14\u7C7B\u578B\n  leftButtons:              //\uFF08\u53EF\u9009\u9879\uFF09\u5BFC\u822A\u680F\u5DE6\u8FB9\u6309\u94AE\u7EC4\u3002\u5DE6\u8FB9\u6309\u94AE\u4F1A\u66FF\u6362\u6389\u9ED8\u8BA4\u7684\u8FD4\u56DE\u6309\u94AE\uFF0C\u6309\u94AE\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u4ECE\u5DE6\u81F3\u53F3\u663E\u793A\uFF0C\u6309\u94AE\u5EFA\u8BAE\u6700\u591A2\u4E2A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u542Cnavitembtn\u4E8B\u4EF6\u6765\u5904\u7406\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\uFF0CJSON\u5BF9\u8C61\u6570\u7EC4\u7C7B\u578B\n  [{\n    text:                 //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u6587\u5B57\uFF0C\u53EF\u4EE5\u548Cicon\u540C\u65F6\u5B58\u5728\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n    color:                //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u6587\u5B57\u989C\u8272\uFF0C\u9ED8\u8BA4\u503C#000\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n    fontSize:             //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u5927\u5C0F\u3002\u9ED8\u8BA4\u503C17\uFF0C\u6570\u5B57\u7C7B\u578B\n    fontWeight:           //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u7C97\u7EC6\uFF0C\u9ED8\u8BA4\u503Cnormal\u3002\u5B57\u7B26\u4E32\u7C7B\u578B\u3002Android\u53CAiOS8.2\u4EE5\u4E0B\u7CFB\u7EDF\u53EA\u652F\u6301normal\u3001bold\uFF0CiOS8.2\u53CA\u4EE5\u4E0A\u7CFB\u7EDF\u652F\u6301normal\u3001bold\u3001bolder\u3001lighter\u3001100~900\u3002\n    fontFamily:           //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u3002\u53EA\u652F\u6301iOS\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n    iconPath:             //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE icon \u56FE\u6807\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u548C text \u540C\u65F6\u5B58\u5728\uFF0C\u56FE\u7247\u663E\u793A\u5927\u5C0F\u7531\u56FE\u7247\u5C3A\u5BF8\u548C scale \u53C2\u6570\u51B3\u5B9A\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n    scale:                //\uFF08\u53EF\u9009\u9879\uFF09\u56FE\u7247\u7684\u7F29\u653E\u500D\u6570\uFF0C\u9ED8\u8BA4\u4E3A 4\uFF0C\u6570\u5B57\u7C7B\u578B\u3002\u663E\u793A\u89C4\u5219\uFF1A\u5F53 scale \u503C\u4E3A 3 \u65F6\uFF0C\u82E5\u8BBE\u5907\u4E0A\u9762\u671F\u671B\u663E\u793A\u7684\u56FE\u6807\u5C3A\u5BF8\u4E3A 30*25\uFF0C\u5219\u56FE\u7247\u5B9E\u9645\u5C3A\u5BF8\u9700\u8981\u4E3A 90*75\u3002\n  }],\n  rightButtons:             //\uFF08\u53EF\u9009\u9879\uFF09\u5BFC\u822A\u680F\u53F3\u8FB9\u6309\u94AE\u7EC4\u3002\u6309\u94AE\u6309\u7167\u6570\u7EC4\u987A\u5E8F\u4ECE\u53F3\u81F3\u5DE6\u663E\u793A\uFF0C\u6309\u94AE\u5EFA\u8BAE\u6700\u591A2\u4E2A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u542Cnavitembtn\u4E8B\u4EF6\u6765\u5904\u7406\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6\uFF0CJSON\u5BF9\u8C61\u6570\u7EC4\u7C7B\u578B\n  [{\n    text:                 //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u6587\u5B57\uFF0C\u53EF\u4EE5\u548Cicon\u540C\u65F6\u5B58\u5728\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n    color:                //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u6587\u5B57\u989C\u8272\uFF0C\u9ED8\u8BA4\u503C#000\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n    fontSize:             //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u5927\u5C0F\u3002\u9ED8\u8BA4\u503C17\uFF0C\u6570\u5B57\u7C7B\u578B\n    fontWeight:           //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u7C97\u7EC6\uFF0C\u9ED8\u8BA4\u503Cnormal\u3002\u5B57\u7B26\u4E32\u7C7B\u578B\u3002Android\u53CAiOS8.2\u4EE5\u4E0B\u7CFB\u7EDF\u53EA\u652F\u6301normal\u3001bold\uFF0CiOS8.2\u53CA\u4EE5\u4E0A\u7CFB\u7EDF\u652F\u6301normal\u3001bold\u3001bolder\u3001lighter\u3001100~900\u3002\n    fontFamily:           //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u3002\u53EA\u652F\u6301iOS\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n    iconPath:             //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE icon \u56FE\u6807\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u548C text \u540C\u65F6\u5B58\u5728\uFF0C\u56FE\u7247\u663E\u793A\u5927\u5C0F\u7531\u56FE\u7247\u5C3A\u5BF8\u548C scale \u53C2\u6570\u51B3\u5B9A\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n    scale:                //\uFF08\u53EF\u9009\u9879\uFF09\u56FE\u7247\u7684\u7F29\u653E\u500D\u6570\uFF0C\u9ED8\u8BA4\u4E3A 4\uFF0C\u6570\u5B57\u7C7B\u578B\u3002\u663E\u793A\u89C4\u5219\uFF1A\u5F53 scale \u503C\u4E3A 3 \u65F6\uFF0C\u82E5\u8BBE\u5907\u4E0A\u9762\u671F\u671B\u663E\u793A\u7684\u56FE\u6807\u5C3A\u5BF8\u4E3A 30*25\uFF0C\u5219\u56FE\u7247\u5B9E\u9645\u5C3A\u5BF8\u9700\u8981\u4E3A 90*75\u3002\n  }]\n}"
								}
							]
						},

						{
							tip: "tabBar",
							desc: [
								{
									type: "JSON对象",
									default: "无",
									desc:
										"（可选项）底部tabBar标签栏配置信息，可以通过监听tabitembtn事件来处理标签栏每项的点击事件",
									fields:
										"{\n  height:                    //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u9AD8\u5EA6\u3002\u9ED8\u8BA4\u503C54\u3002\u6570\u5B57\u7C7B\u578B\n  background:                //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u80CC\u666F\u3002\u652F\u6301\u989C\u8272\u503C\u548C\u56FE\u7247\uFF0C\u9ED8\u8BA4\u503C#fff\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  shadow:                    //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u9876\u90E8\u9634\u5F71\u7EBF\u989C\u8272\u3002\u9ED8\u8BA4\u503C#ddd\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  color:                     //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u5404\u9879\u7684\u6587\u5B57\u989C\u8272\u3002\u9ED8\u8BA4\u503C#000\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  selectedColor:             //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u5404\u9879\u9009\u4E2D\u72B6\u6001\u7684\u6587\u5B57\u989C\u8272\u3002\u9ED8\u8BA4\u503C#000\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  fontSize:                  //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u5404\u9879\u6587\u5B57\u5B57\u4F53\u5927\u5C0F\u3002\u9ED8\u8BA4\u503C10\uFF0C\u6570\u5B57\u7C7B\u578B\n  fontWeight:                //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u5404\u9879\u6587\u5B57\u5B57\u4F53\u7C97\u7EC6\uFF0C\u9ED8\u8BA4\u503Cnormal\u3002\u5B57\u7B26\u4E32\u7C7B\u578B\u3002Android\u53CAiOS8.2\u4EE5\u4E0B\u7CFB\u7EDF\u53EA\u652F\u6301normal\u3001bold\uFF0CiOS8.2\u53CA\u4EE5\u4E0A\u7CFB\u7EDF\u652F\u6301normal\u3001bold\u3001bolder\u3001lighter\u3001100~900\u3002\n  fontFamily:                //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u5404\u9879\u6587\u5B57\u5B57\u4F53\u3002\u53EA\u652F\u6301iOS\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  textOffset:                //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u5404\u9879\u6587\u5B57\u8DDD\u79BB\u5E95\u90E8\u7684\u8DDD\u79BB\u3002\u9ED8\u8BA4\u503C2\uFF0C\u6570\u5B57\u7C7B\u578B\n  animated:                  //\uFF08\u53EF\u9009\u9879\uFF09\u9009\u4E2D\u6807\u7B7E\u680F\u6BCF\u9879\u65F6\uFF0C\u5207\u6362\u5BF9\u5E94\u7684\u9875\u9762\u662F\u5426\u5E26\u6709\u52A8\u753B\u6548\u679C\uFF0C\u9ED8\u8BA4\u503Cfalse\u3002\u5E03\u5C14\u7C7B\u578B\n  scrollEnabled:             //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u6BCF\u9879\u5BF9\u5E94\u7684\u9875\u9762\u95F4\u662F\u5426\u80FD\u591F\u5DE6\u53F3\u6EDA\u52A8\u5207\u6362\uFF0C\u9ED8\u8BA4\u503Ctrue\u3002\u5E03\u5C14\u7C7B\u578B\n  index:                     //\uFF08\u53EF\u9009\u9879\uFF09\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u7D22\u5F15\u3002\u9ED8\u8BA4\u503C0\u3002\u6570\u5B57\u7C7B\u578B\n  preload:                   //\uFF08\u53EF\u9009\u9879\uFF09\u9884\u52A0\u8F7D\u7684\u9875\u9762\u4E2A\u6570\u3002\u9ED8\u8BA4\u503C0\u3002\u6570\u5B57\u7C7B\u578B\n  list:                      // \u6807\u7B7E\u680F\u5404\u9879\u914D\u7F6E\u4FE1\u606F\uFF0CJSON\u5BF9\u8C61\u6570\u7EC4\u7C7B\u578B\n  [{\n      text:                  //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u9898\u6587\u5B57\uFF0C\u53EF\u4EE5\u548Cicon\u540C\u65F6\u5B58\u5728\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n      iconPath:              //\uFF08\u53EF\u9009\u9879\uFF09\u9ED8\u8BA4\u72B6\u6001\u4E0B icon \u56FE\u6807\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u548C text \u540C\u65F6\u5B58\u5728\uFF0C\u56FE\u7247\u663E\u793A\u5927\u5C0F\u7531\u56FE\u7247\u5C3A\u5BF8\u548C scale \u53C2\u6570\u51B3\u5B9A\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n      selectedIconPath:      //\uFF08\u53EF\u9009\u9879\uFF09\u9009\u4E2D\u72B6\u6001\u4E0B icon \u56FE\u6807\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u548C text \u540C\u65F6\u5B58\u5728\uFF0C\u56FE\u7247\u663E\u793A\u5927\u5C0F\u7531\u56FE\u7247\u5C3A\u5BF8\u548C scale \u53C2\u6570\u51B3\u5B9A\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n      scale:                 //\uFF08\u53EF\u9009\u9879\uFF09\u56FE\u7247\u7684\u7F29\u653E\u500D\u6570\uFF0C\u9ED8\u8BA4\u4E3A 4\uFF0C\u6570\u5B57\u7C7B\u578B\u3002\u663E\u793A\u89C4\u5219\uFF1A\u5F53 scale \u503C\u4E3A 3 \u65F6\uFF0C\u82E5\u8BBE\u5907\u4E0A\u9762\u671F\u671B\u663E\u793A\u7684\u56FE\u6807\u5C3A\u5BF8\u4E3A 30*25\uFF0C\u5219\u56FE\u7247\u5B9E\u9645\u5C3A\u5BF8\u9700\u8981\u4E3A 90*75\u3002\n  }],\n  frames:                    // \u6807\u7B7E\u680F\u5404\u9879\u5BF9\u5E94\u7684\u9875\u9762\u7684\u4FE1\u606F\uFF0CJSON\u5BF9\u8C61\u6570\u7EC4\u7C7B\u578B\n  [{\n      title:                 //\uFF08\u53EF\u9009\u9879\uFF09\u6807\u7B7E\u680F\u5207\u6362\u65F6\u5BF9\u5E94\u9876\u90E8\u5BFC\u822A\u680F\u7684\u6807\u9898\u6587\u5B57\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n      ...                    // \u540CopenFrameGroup\u65B9\u6CD5\u4E2Dframes\u53C2\u6570\u91CC\u9762\u7684\u53C2\u6570\n  }]\n}"
								}
							]
						}
					],

					sampleCode:
						"// \u6253\u5F00\u53EA\u6709navigationBar\u7684\u9875\u9762\uFF1A\napi.openTabLayout({\n    name: 'help',\n    url: 'widget://html/help.html',\n    title: '\u5E2E\u52A9',\n    hideNavigationBar: false,\n    navigationBar: {\n        background: '#5082c2',\n        color: '#fff',\n        leftButtons: [{\n            iconPath: 'widget://image/back.png'\n        }]\n    }\n});\n\n// \u6253\u5F00\u53EA\u6709tabBar\u7684\u9875\u9762\uFF1A\napi.openTabLayout({\n    name: 'tabLayout',\n    url: 'widget://html/tabLayout.html',\n    hideTabBar: false,\n    tabBar: {\n        selectedColor: '#45C01A',\n        list: [{\n            text: '\u9875\u9762\u4E00',\n            iconPath: 'widget://image/tab_1.png',\n            selectedIconPath: 'widget://image/tab_1_hov.png'\n        }, {\n            text: '\u9875\u9762\u4E8C',\n            iconPath: 'widget://image/tab_2.png',\n            selectedIconPath: 'widget://image/tab_2_hov.png'\n        }, {\n            text: '\u9875\u9762\u4E09',\n            iconPath: 'widget://image/tab_3.png',\n            selectedIconPath: 'widget://image/tab_3_hov.png'\n        }],\n        frames: [{\n            name: 'page1',\n            url: 'widget://html/page1.html'\n        }, {\n            name: 'page2',\n            url: 'widget://html/page2.html'\n        }, {\n            name: 'page3',\n            url: 'widget://html/page3.html'\n        }]\n    }\n});",

					usability: ["iOS系统，Android系统", "可提供的1.2.99及更高版本"]
				},
				{
					name: "setTabLayoutAttr",
					desc: ["设置tabLayout属性", "setTabLayoutAttr({params})"],
					params: [
						{
							tip: "title",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）显示在顶部navigationBar上面的标题"
								}
							]
						},

						{
							tip: "hideNavigationBar",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）是否隐藏顶部navigationBar导航栏"
								}
							]
						},

						{
							tip: "hideTabBar",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "（可选项）是否隐藏底部tabBar标签栏"
								}
							]
						},

						{
							tip: "animated",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）显示隐藏navigationBar、tabBar时是否有动画效果。"
								}
							]
						}
					],

					sampleCode: "api.setTabLayoutAttr({\n    title: '\u9996\u9875'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.2.99及更高版本"]
				},
				{
					name: "setNavBarAttr",
					desc: ["设置导航栏属性", "setNavBarAttr({params})"],
					params: [
						{
							tip: "background",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）导航栏背景。支持颜色值和图片"
								}
							]
						},

						{
							tip: "shadow",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）导航栏底部阴影线颜色"
								}
							]
						},

						{
							tip: "color",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）导航栏标题文字颜色"
								}
							]
						},

						{
							tip: "fontSize",
							desc: [
								{
									type: "数字",
									default: "无",
									desc: "（可选项）导航栏标题字体大小"
								}
							]
						},

						{
							tip: "fontWeight",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）导航栏标题文字粗细"
								}
							]
						},

						{
							tip: "fontFamily",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）导航栏标题文字字体。只支持iOS。"
								}
							]
						},

						{
							tip: "hideBackButton",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc:
										"（可选项）是否隐藏默认返回按钮。可以通过监听 navbackbtn 或 keyback 事件来处理返回按钮的点击事件。"
								}
							]
						},

						{
							tip: "leftButtons",
							desc: [
								{
									type: "JSON对象数组",
									default: "无",
									desc:
										"（可选项）导航栏左边按钮组，左边按钮会替换掉默认的返回按钮，按钮按照数组顺序从左至右显示，按钮建议最多2个，可以通过监听 navitembtn 事件来处理按钮点击事件。",
									fields:
										"[{\n  text:                 //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u6587\u5B57\uFF0C\u53EF\u4EE5\u548Cicon\u540C\u65F6\u5B58\u5728\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  color:                //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u6587\u5B57\u989C\u8272\uFF0C\u9ED8\u8BA4\u503C#000\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  fontSize:             //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u5927\u5C0F\u3002\u9ED8\u8BA4\u503C17\uFF0C\u6570\u5B57\u7C7B\u578B\n  fontWeight:           //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u7C97\u7EC6\uFF0C\u9ED8\u8BA4\u503Cnormal\u3002\u5B57\u7B26\u4E32\u7C7B\u578B\u3002Android\u53CAiOS8.2\u4EE5\u4E0B\u7CFB\u7EDF\u53EA\u652F\u6301normal\u3001bold\uFF0CiOS8.2\u53CA\u4EE5\u4E0A\u7CFB\u7EDF\u652F\u6301normal\u3001bold\u3001bolder\u3001lighter\u3001100~900\u3002\n  fontFamily:           //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u3002\u53EA\u652F\u6301iOS\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  iconPath:             //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE icon \u56FE\u6807\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u548C text \u540C\u65F6\u5B58\u5728\uFF0C\u56FE\u7247\u663E\u793A\u5927\u5C0F\u7531\u56FE\u7247\u5C3A\u5BF8\u548C scale \u53C2\u6570\u51B3\u5B9A\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  scale:                //\uFF08\u53EF\u9009\u9879\uFF09\u56FE\u7247\u7684\u7F29\u653E\u500D\u6570\uFF0C\u9ED8\u8BA4\u4E3A 4\uFF0C\u6570\u5B57\u7C7B\u578B\u3002\u663E\u793A\u89C4\u5219\uFF1A\u5F53 scale \u503C\u4E3A 3 \u65F6\uFF0C\u82E5\u8BBE\u5907\u4E0A\u9762\u671F\u671B\u663E\u793A\u7684\u56FE\u6807\u5C3A\u5BF8\u4E3A 30*25\uFF0C\u5219\u56FE\u7247\u5B9E\u9645\u5C3A\u5BF8\u9700\u8981\u4E3A 90*75\u3002\n}]"
								}
							]
						},

						{
							tip: "rightButtons",
							desc: [
								{
									type: "JSON对象数组",
									default: "无",
									desc:
										"（可选项）导航栏右边按钮组。按钮按照数组顺序从右至左显示，按钮建议最多2个，可以通过监听navitembtn事件来处理按钮点击事件。",
									fields:
										"[{\n  text:                 //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u6587\u5B57\uFF0C\u53EF\u4EE5\u548Cicon\u540C\u65F6\u5B58\u5728\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  color:                //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u6587\u5B57\u989C\u8272\uFF0C\u9ED8\u8BA4\u503C#000\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  fontSize:             //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u5927\u5C0F\u3002\u9ED8\u8BA4\u503C17\uFF0C\u6570\u5B57\u7C7B\u578B\n  fontWeight:           //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u7C97\u7EC6\uFF0C\u9ED8\u8BA4\u503Cnormal\u3002\u5B57\u7B26\u4E32\u7C7B\u578B\u3002Android\u53CAiOS8.2\u4EE5\u4E0B\u7CFB\u7EDF\u53EA\u652F\u6301normal\u3001bold\uFF0CiOS8.2\u53CA\u4EE5\u4E0A\u7CFB\u7EDF\u652F\u6301normal\u3001bold\u3001bolder\u3001lighter\u3001100~900\u3002\n  fontFamily:           //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE\u6807\u9898\u5B57\u4F53\u3002\u53EA\u652F\u6301iOS\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  iconPath:             //\uFF08\u53EF\u9009\u9879\uFF09\u6309\u94AE icon \u56FE\u6807\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u548C text \u540C\u65F6\u5B58\u5728\uFF0C\u56FE\u7247\u663E\u793A\u5927\u5C0F\u7531\u56FE\u7247\u5C3A\u5BF8\u548C scale \u53C2\u6570\u51B3\u5B9A\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  scale:                //\uFF08\u53EF\u9009\u9879\uFF09\u56FE\u7247\u7684\u7F29\u653E\u500D\u6570\uFF0C\u9ED8\u8BA4\u4E3A 4\uFF0C\u6570\u5B57\u7C7B\u578B\u3002\u663E\u793A\u89C4\u5219\uFF1A\u5F53 scale \u503C\u4E3A 3 \u65F6\uFF0C\u82E5\u8BBE\u5907\u4E0A\u9762\u671F\u671B\u663E\u793A\u7684\u56FE\u6807\u5C3A\u5BF8\u4E3A 30*25\uFF0C\u5219\u56FE\u7247\u5B9E\u9645\u5C3A\u5BF8\u9700\u8981\u4E3A 90*75\u3002\n}]"
								}
							]
						}
					],

					sampleCode:
						"api.setNavBarAttr({\n    rightButtons: [{\n        text: '\u5B8C\u6210'\n    }]\n});",

					usability: ["iOS 系统，Android 系统", "可提供的 1.3.2 及更高版本"]
				},
				{
					name: "getNavBarAttr",
					desc: ["获取导航栏属性。该方法为同步方法。", "getNavBarAttr()"],
					sampleCode:
						"var res = api.getNavBarAttr();\napi.alert({\n    msg:JSON.stringify(res)\n});",

					usability: ["iOS 系统，Android 系统", "可提供的 3.0.31 及更高版本"]
				},
				{
					name: "setTabBarAttr",
					desc: ["设置tabBar属性", "setTabBarAttr({params})"],
					params: [
						{
							tip: "index",
							desc: [
								{
									type: "数字",
									default: "无",
									desc: "（可选项）设置选中标签栏指定项"
								}
							]
						},

						{
							tip: "background",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标签栏背景。支持颜色值和图片"
								}
							]
						},

						{
							tip: "shadow",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标签栏顶部阴影线颜色"
								}
							]
						},

						{
							tip: "color",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标签栏各项的文字颜色"
								}
							]
						},

						{
							tip: "selectedColor",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标签栏各项选中状态下的文字颜色"
								}
							]
						},

						{
							tip: "fontSize",
							desc: [
								{
									type: "数字",
									default: "无",
									desc: "（可选项）标签栏各项文字字体大小"
								}
							]
						},

						{
							tip: "fontWeight",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标签栏各项文字粗细"
								}
							]
						},

						{
							tip: "fontFamily",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标签栏各项文字字体。只支持iOS。"
								}
							]
						},

						{
							tip: "textOffset",
							desc: [
								{
									type: "数字",
									default: "无",
									desc: "（可选项）标签栏各项文字距离底部的距离"
								}
							]
						}
					],

					sampleCode: "api.setTabBarAttr({\n    index: 1\n});",

					usability: ["iOS系统，Android系统", "可提供的1.2.99及更高版本"]
				},
				{
					name: "setTabBarItemAttr",
					desc: ["设置tabBar指定项的属性", "setTabBarItemAttr({params})"],
					params: [
						{
							tip: "index",
							desc: [
								{
									type: "数字",
									default: "无",
									desc: "要设置的指定项的索引"
								}
							]
						},

						{
							tip: "text",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）该项的标题文字"
								}
							]
						},

						{
							tip: "iconPath",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）该项默认状态下 icon 图标路径"
								}
							]
						},

						{
							tip: "selectedIconPath",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）该项选中状态下 icon 图标路径"
								}
							]
						},

						{
							tip: "scale",
							desc: [
								{
									type: "数字",
									default: "4",
									desc:
										"（可选项）图片的缩放倍数。显示规则：当 scale 值为 3 时，若设备上面期望显示的图标尺寸为 3025，则图片实际尺寸需要为 9075。"
								}
							]
						},

						{
							tip: "badge",
							desc: [
								{
									type: "JSON对象",
									default: "无",
									desc: "（可选项）该项的角标信息",
									fields:
										"{\n  text\uFF1A              //\u89D2\u6807\u5185\u5BB9\u3002\u4F200\u65F6\u8868\u793A\u9690\u85CF\u89D2\u6807\uFF0C\u5176\u4F59\u4EFB\u610F\u503C\u8868\u793A\u663E\u793A\u89D2\u6807\uFF0C\u53EF\u4EE5\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  background\uFF1A        //\u89D2\u6807\u7684\u80CC\u666F\uFF0C\u652F\u6301\u989C\u8272\u548C\u56FE\u7247\uFF0C\u9ED8\u8BA4\u503C#f00\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  color\uFF1A             //\u89D2\u6807\u6587\u5B57\u989C\u8272\uFF0C\u9ED8\u8BA4\u503C#fff\uFF0C\u5B57\u7B26\u4E32\u7C7B\u578B\n  fontSize\uFF1A          //\u89D2\u6807\u6587\u5B57\u5B57\u4F53\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u503C12\uFF0C\u6570\u5B57\u7C7B\u578B\n  radius\uFF1A            //\u89D2\u6807\u7684\u534A\u5F84\uFF0C\u9ED8\u8BA4\u503C10\uFF0C\u9AD8\u5EA6\u56FA\u5B9A\uFF0C\u5BBD\u5EA6\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u589E\u957F\uFF0C\u6570\u5B57\u7C7B\u578B\n  x\uFF1A                 //\u89D2\u6807\u5DE6\u8FB9\u76F8\u5BF9\u4E8E\u6240\u5728\u9879\u9876\u90E8\u4E2D\u95F4\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u503C5\uFF0C\u6570\u5B57\u7C7B\u578B\n  y\uFF1A                 //\u89D2\u6807\u9876\u90E8\u76F8\u5BF9\u4E8E\u6240\u5728\u9879\u9876\u90E8\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u503C5\uFF0C\u6570\u5B57\u7C7B\u578B\n}"
								}
							]
						}
					],

					sampleCode:
						"api.setTabBarItemAttr({\n  index: 4,\n  badge: {\n      text: 1\n  }\n});",

					usability: ["iOS系统，Android系统", "可提供的1.2.99及更高版本"]
				}
			]
		},

		{
			name: "数据存储",
			icon: "api_storage_icon",
			children: [
				{
					name: "readFile",
					desc: [
						"读取文本文件内容，只支持utf-8编码文本类型文件",
						"readFile({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "sync",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"执行结果的返回方式。为false时通过callback返回，为true时直接返回。"
								}
							]
						},

						{
							tip: "path",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "文件路径，支持绝对路径和文件路径协议如fs://、widget://等"
								}
							]
						}
					],

					sampleCode:
						"//\u5F02\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\napi.readFile({\n    path: 'fs://a.txt'\n}, function(ret, err) {\n    if (ret.status) {\n        var data = ret.data;\n    } else {\n        api.alert({\n            msg:JSON.stringify(err)\n        });\n    }\n});\n\n//\u540C\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\nvar data = api.readFile({\n    sync: true,\n    path: 'fs://a.txt'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "writeFile",
					desc: ["写入内容到文本文件", "writeFile({params}, callback(ret, err))"],
					params: [
						{
							tip: "path",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"文件路径，支持绝对路径和文件路径协议如fs://、cache://等，不支持widget://目录，该目录只读"
								}
							]
						},

						{
							tip: "data",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "文件内容"
								}
							]
						},

						{
							tip: "append",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "是否以追加方式写入数据，默认会清除之前文件内容"
								}
							]
						}
					],

					sampleCode:
						"api.writeFile({\n    path: 'fs://a.txt',\n    data: 'writeFile\u6D4B\u8BD5\u5185\u5BB9'\n  }, function(ret, err) {\n    if (ret.status) {\n        //\u6210\u529F\n    } else {\n\n    }\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "setPrefs",
					desc: ["设置偏好数据，数据会存储到本地文件系统。", "setPrefs({params})"],
					params: [
						{
							tip: "key",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "键"
								}
							]
						},

						{
							tip: "value",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "值"
								}
							]
						}
					],

					sampleCode: "api.setPrefs({\n    key: 'userName',\n    value: 'api'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "getPrefs",
					desc: ["获取偏好设置值", "getPrefs({params}, callback(ret, err))"],
					params: [
						{
							tip: "sync",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"执行结果的返回方式。为false时通过callback返回，为true时直接返回。"
								}
							]
						},

						{
							tip: "key",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "键"
								}
							]
						}
					],

					sampleCode:
						"//\u5F02\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\napi.getPrefs({\n    key: 'userName'\n}, function(ret, err) {\n    var userName = ret.value;\n});\n\n//\u540C\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\nvar userName = api.getPrefs({\n    sync: true,\n    key: 'userName'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "removePrefs",
					desc: ["删除偏好设置值", "removePrefs({params})"],
					params: [
						{
							tip: "key",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "键"
								}
							]
						}
					],

					sampleCode: "api.removePrefs({\n    key: 'userName'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "setGlobalData",
					desc: [
						"设置全局数据，数据只存储在内存中，不会存储到本地文件系统。",
						"setGlobalData({params})"
					],
					params: [
						{
							tip: "key",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "键"
								}
							]
						},

						{
							tip: "value",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "值"
								}
							]
						}
					],

					sampleCode:
						"api.setGlobalData({\n    key: 'userName',\n    value: 'api'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.2.87及更高版本"]
				},
				{
					name: "getGlobalData",
					desc: ["获取全局数据", "getGlobalData({params})"],
					params: [
						{
							tip: "key",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "键"
								}
							]
						}
					],

					sampleCode: "var userName = api.getGlobalData({\n    key: 'userName'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.2.87及更高版本"]
				},
				{
					name: "clearCache",
					desc: [
						"清除缓存，包括cache://目录下的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。",
						"clearCache({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "timeThreshold",
							desc: [
								{
									type: "数字",
									default: "0",
									desc: "（可选项）清除多少天前的缓存"
								}
							]
						}
					],

					sampleCode:
						"api.clearCache(function() {\n    api.toast({\n        msg: '\u6E05\u9664\u5B8C\u6210'\n    });\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "getCacheSize",
					desc: [
						"获取缓存占用空间大小，缓存包括cache://目录下的文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间",
						"getCacheSize({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "sync",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"执行结果的返回方式。为false时通过callback返回，为true时直接返回。"
								}
							]
						}
					],

					sampleCode:
						"//\u5F02\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\napi.getCacheSize(function(ret) {\n    var size = ret.size;\n});\n\n//\u540C\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\nvar size = api.getCacheSize({\n    sync: true\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "getTotalSpace",
					desc: ["获取总存储空间大小", "getTotalSpace({params},callback(ret, err))"],
					params: [
						{
							tip: "sync",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"执行结果的返回方式。为false时通过callback返回，为true时直接返回。"
								}
							]
						}
					],

					sampleCode:
						"//\u5F02\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\napi.getTotalSpace(function(ret, err) {\n    var size = ret.size;\n});\n\n//\u540C\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\nvar size = api.getTotalSpace({\n    sync: true\n});",

					usability: ["iOS系统，Android系统", "可提供的1.2.7及更高版本"]
				},
				{
					name: "getFreeDiskSpace",
					desc: [
						"获取剩余存储空间大小",
						"getFreeDiskSpace({params},callback(ret, err))"
					],
					params: [
						{
							tip: "sync",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"执行结果的返回方式。为false时通过callback返回，为true时直接返回。"
								}
							]
						}
					],

					sampleCode:
						"//\u5F02\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\napi.getFreeDiskSpace(function(ret, err) {\n    var size = ret.size;\n});\n\n//\u540C\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\nvar size = api.getFreeDiskSpace({\n    sync: true\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "loadSecureValue",
					desc: [
						"从加密的key.xml文件中读取指定数据，key.xml文件放置于网页包里面的res目录，配置方式：",
						'<security>\n  <item name="appKey" value="1111111"/>\n</security>',

						"loadSecureValue({params}, callback(ret, err))"
					],

					params: [
						{
							tip: "sync",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"执行结果的返回方式。为false时通过callback返回，为true时直接返回。"
								}
							]
						},

						{
							tip: "key",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "键"
								}
							]
						}
					],

					sampleCode:
						"//\u5F02\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\napi.loadSecureValue({\n    key: 'appKey'\n}, function(ret, err) {\n    var appKey = ret.value;\n});\n\n//\u540C\u6B65\u8FD4\u56DE\u7ED3\u679C\uFF1A\nvar appKey = api.loadSecureValue({\n    sync: true,\n    key: 'appKey'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				}
			]
		},

		{
			name: "消息事件",
			icon: "api_event_icon",
			children: [
				{
					name: "addEventListener",
					desc: [
						"监听事件，支持系统事件和自定义事件",
						"addEventListener({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"自定义事件或系统事件名称, 详见 https://docs.apicloud.com/Client-API/api#2"
								}
							]
						},

						{
							tip: "extra",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）附加字段。一些特定事件可能需要提供额外的参数。",
									fields:
										"{\n  threshold:           //\u5F53\u4E8B\u4EF6\u4E3Ascrolltobottom\u65F6\uFF0C\u8BBE\u7F6E\u8DDD\u79BB\u5E95\u90E8\u591A\u5C11\u8DDD\u79BB\u65F6\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u9ED8\u8BA4\u503C\u4E3A0\uFF0C\u6570\u5B57\u7C7B\u578B\n  timeout:             //\u5F53\u4E8B\u4EF6\u4E3Aappidle\u65F6\uFF0C\u8BBE\u7F6E\u7ECF\u8FC7\u591A\u957F\u65F6\u95F4\u4E0D\u64CD\u4F5C\u5C4F\u5E55\u65F6\u89E6\u53D1\uFF0C\u5355\u4F4D\u79D2\uFF0C\u6570\u5B57\u7C7B\u578B\n}"
								}
							]
						}
					],

					sampleCode:
						"//\u5982\u76D1\u542C\u7F51\u7EDC\u8FDE\u63A5\u4E8B\u4EF6\napi.addEventListener({\n    name: 'online'\n}, function(ret, err) {\n        api.alert({\n            msg:'\u5DF2\u8FDE\u63A5\u7F51\u7EDC'\n        });\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "removeEventListener",
					desc: ["移除事件监听", "removeEventListener({params})"],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"自定义事件或系统事件名称, 详见 https://docs.apicloud.com/Client-API/api#2"
								}
							]
						}
					],

					sampleCode: "api.removeEventListener({\n    name: 'online'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "sendEvent",
					desc: [
						"将任意一个自定义事件广播出去，该事件可在任意页面通过 addEventListener 监听收到。",
						"sendEvent({params})"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "任意自定义事件的名称，比如：apprunning、appover等"
								}
							]
						},

						{
							tip: "extra",
							desc: [
								{
									type: "字符串或 JSON 对象",
									default: "无",
									desc: "（可选项）附带的参数。在监听页面的回调里面通过 ret.value 获取。"
								}
							]
						}
					],

					sampleCode:
						"api.sendEvent({\n    name: 'myEvent',\n    extra: {\n      key1: 'value1',\n      key2: 'value2'\n    }\n});\n\n//html\u9875\u9762a\uFF1A\napi.addEventListener({\n    name: 'myEvent'\n}, function(ret, err) {\n    api.alert({\n        msg:JSON.stringify(ret.value)\n    });\n});\n\n//html\u9875\u9762b\uFF1A\napi.addEventListener({\n    name: 'myEvent'\n}, function(ret, err) {\n    api.alert({\n        msg:JSON.stringify(ret.value)\n    });\n});\n\n//a\u3001b\u9875\u9762\u90FD\u5C06\u6536\u5230 myEvent \u4E8B\u4EF6",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "accessNative",
					desc: [
						"使用 SuperWebView 时，js 向原生发送消息。此方法只在使用 SuperWebView 时有效。",
						"accessNative({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "name",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "消息名称。"
								}
							]
						},

						{
							tip: "extra",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）附带的参数。"
								}
							]
						}
					],

					sampleCode:
						"api.accessNative({\n    name: 'showMenu',\n    extra: {\n        key: 'value'\n    }\n  }, function(ret, err) {\n    if (ret) {\n        api.alert({\n            msg:JSON.stringify(ret)\n        });\n    } else {\n        api.alert({\n            msg:JSON.stringify(err)\n        });\n    }\n});",

					usability: ["iOS系统，Android系统", "可提供的1.2.0及更高版本"]
				},
				{
					name: "notification",
					desc: [
						"向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclicked 事件获取该通知相关内容。",
						"注：当应用在前台弹出通知提示时，iOS平台的通知将在显示几秒后消失，不会在通知栏保留。",
						"notification({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "vibrate",
							desc: [
								{
									type: "数组",
									default: "[100, 500, 100, 500]",
									desc:
										"（可选项）伴随节奏的震动，时间数组，单位：毫秒。iOS平台震动时间为固定值；Android平台节奏为【等待-震动-等待-震动..】，例如[100, 500, 100, 500]表现效果为：等待100毫秒-震动500毫秒-等待100毫秒-震动500毫秒"
								}
							]
						},

						{
							tip: "sound",
							desc: [
								{
									type: "字符串",
									default: "default",
									desc:
										"（可选项）提示音，默认为系统设置的提示音。Android支持传入widget协议音频文件，例如：widget://res/horse.mp3；当实现闹钟功能时，iOS只支持widget://路径协议"
								}
							]
						},

						{
							tip: "light",
							desc: [
								{
									type: "布尔型",
									default: "false",
									desc: "（可选项）设备提示灯是否闪烁"
								}
							]
						},

						{
							tip: "notify",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc:
										"（可选项）弹出通知到状态栏。弹出时是否震动或响铃，可通过设置vibrate，sound等字段配合实现。",
									fields:
										"{\n  title:''                //\u6807\u9898\uFF0CAndroid\u4E2D\u9ED8\u8BA4\u503C\u4E3A\u5E94\u7528\u540D\u79F0\uFF0C\u652F\u6301Android\u548CiOS 8.2\u4EE5\u4E0A\u7CFB\u7EDF\n  content:''              //\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u503C\u4E3A'\u6709\u65B0\u6D88\u606F'\n  extra:''                //\u9644\u52A0\u4FE1\u606F\uFF0C\u9875\u9762\u53EF\u4EE5\u76D1\u542Cnoticeclicked\u4E8B\u4EF6\u5F97\u5230\u70B9\u51FB\u7684\u901A\u77E5\u7684\u9644\u52A0\u4FE1\u606F\n  updateCurrent: false    //\u662F\u5426\u8986\u76D6\u66F4\u65B0\u5DF2\u6709\u7684\u901A\u77E5\uFF0C\u53D6\u503C\u8303\u56F4true|false\u3002\u53EAAndroid\u6709\u6548\n}"
								}
							]
						},

						{
							tip: "alarm",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc:
										"（可选项）设置闹铃。与notify配合使用，即如果设置了闹铃，那么对应的notify将在设定的闹铃时间触发",
									fields:
										"{\n  hour:           //\u5C0F\u65F6\uFF0C\u6570\u5B57\u7C7B\u578B\uFF0C\u53D6\u503C\u8303\u56F4\uFF080-23\uFF09\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u5F53\u524D\u7CFB\u7EDF\u65F6\n  minutes:        //\u5206\u949F\uFF0C\u6570\u5B57\u7C7B\u578B\uFF0C\u53D6\u503C\u8303\u56F4\uFF080-59\uFF09\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u5F53\u524D\u7CFB\u7EDF\u5206\n  daysOfWeek:     //\u901A\u77E5\u5FAA\u73AF\u65F6\u95F4\uFF0C\u4EE5\u5468\u4E3A\u5355\u4F4D\uFF0C\u6570\u7EC4\u7C7B\u578B\uFF0C\u53D6\u503C\u8303\u56F4[1,2,3,4,5,6,7]\uFF0C\u8868\u793A\u5468\u65E5\u3001\u5468\u4E00\u3001\u5468\u4E8C\u3001\u5468\u4E09\u3001\u5468\u56DB\u3001\u5468\u4E94\u3001\u5468\u516D\u3002\u82E5\u4E0D\u4F20\u5219\u4E0D\u5FAA\u73AF\uFF0C\u53EA\u5728\u5F53\u5929\u6216\u9694\u5929\u7684\u6307\u5B9A\u65F6\u95F4\u901A\u77E5\u4E00\u6B21\n  time:           //\u95F9\u94C3\u76EE\u6807\u65F6\u95F4\uFF0C\u6570\u5B57\u7C7B\u578B\uFF0C1970\u5E74\u81F3\u4ECA\u7684\u6BEB\u79D2\u6570\uFF0C\u53EA\u5728\u8BBE\u5B9A\u7684\u65F6\u95F4\u6267\u884C\u4E00\u6B21\uFF0C\u82E5\u8BBE\u7F6E\u4E86time\uFF0C\u90A3\u4E48hour\u3001minutes\u3001daysOfWeek\u5C06\u88AB\u5FFD\u7565\n  openApp:        //\u5F53\u95F9\u94C3\u89E6\u53D1\u65F6\u662F\u5426\u6253\u5F00\u5F53\u524D\u5E94\u7528\uFF0C\u5982\u679C\u6253\u5F00\uFF0C\u5219\u4E0D\u5F39\u51FA\u72B6\u6001\u680F\u901A\u77E5\uFF0Cbool\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C\u4E3Afalse\u3002\u4EC5\u652F\u6301Android\u5E73\u53F0\u3002\n}"
								}
							]
						}
					],

					sampleCode:
						"//\u4EC5\u9707\u52A8\napi.notification({\n    vibrate:[100, 500, 200, 500, 300, 500, 400, 500]\n});\n\n//\u4EC5\u63D0\u793A\u97F3\napi.notification({\n    sound:'default'\n});\n\n//\u63D0\u793A\u97F3+\u9707\u52A8\napi.notification();\n\n//\u5F39\u51FA\u72B6\u6001\u680F\u901A\u77E5\napi.notification({\n    notify: {\n    title: '\u901A\u77E5\u6807\u9898',\n        content: '\u901A\u77E5\u5185\u5BB9'\n    }\n});\n\n//\u95F9\u94C3\napi.notification({\n    notify: {\n        content: '\u95F9\u949F'\n    },\n    //\u6BCF\u5468\u4E00\u3001\u4E8C\u3001\u4E09\u3001\u56DB\u3001\u4E94\u76847\u70B930\u5206\u95F9\u94C3\n    alarm: {\n        hour: 7,\n        minutes: 30,\n        daysOfWeek: [2, 3, 4, 5, 6]\n    }\n}, function(ret, err) {\n    var id = ret.id;\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "cancelNotification",
					desc: [
						"取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃",
						"cancelNotification({params})"
					],
					params: [
						{
							tip: "id",
							desc: [
								{
									type: "字符串",
									default:
										"0。如果传入-1，则取消本应用弹到状态栏的所有通知，iOS只支持清除所有弹到状态栏的通知；传入-1并不清除闹铃。",
									desc: "（可选项）调用 notification 方法时返回的 id"
								}
							]
						}
					],

					sampleCode: "api.cancelNotification({\n    id: 1\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				}
			]
		},

		{
			name: "UI组件",
			icon: "api_ui_icon",
			children: [
				{
					name: "alert",
					desc: [
						"弹出带一个按钮的对话框，更多按钮的对话框请使用confirm方法",
						"alert({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "title",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标题"
								}
							]
						},

						{
							tip: "msg",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）内容"
								}
							]
						},

						{
							tip: "buttons",
							desc: [
								{
									type: "字符串数组",
									default: '["确定"]',
									desc: "（可选项）按钮"
								}
							]
						}
					],

					sampleCode:
						"api.alert({\n    title: 'testtitle',\n    msg: 'testmsg',\n}, function(ret, err) {\n\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "confirm",
					desc: [
						"弹出带两个或三个按钮的confirm对话框",
						"confirm({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "title",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标题"
								}
							]
						},

						{
							tip: "msg",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）内容"
								}
							]
						},

						{
							tip: "buttons",
							desc: [
								{
									type: "字符串数组",
									default: '["取消","确定"]',
									desc:
										"（可选项）按钮标题，若小于两个按钮，会补齐两个按钮；若大于三个按钮，则使用前三个按钮"
								}
							]
						}
					],

					sampleCode:
						"api.confirm({\n    title: 'testtitle',\n    msg: 'testmsg',\n    buttons: ['\u786E\u5B9A', '\u53D6\u6D88']\n}, function(ret, err) {\n    var index = ret.buttonIndex;\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "prompt",
					desc: [
						"弹出带两个或三个按钮和输入框的对话框",
						"prompt({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "title",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标题"
								}
							]
						},

						{
							tip: "msg",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）内容"
								}
							]
						},

						{
							tip: "text",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）输入框里面的默认内容"
								}
							]
						},

						{
							tip: "type",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）输入类型，不同输入类型弹出键盘类型不同，取值范围（text、password、number、email、url）"
								}
							]
						},

						{
							tip: "buttons",
							desc: [
								{
									type: "字符串数组",
									default: '["取消","确定"]',
									desc:
										"（可选项）按钮标题，若小于两个按钮，会补齐两个按钮；若大于三个按钮，则使用前三个按钮"
								}
							]
						}
					],

					sampleCode:
						"api.prompt({\n    buttons: ['\u786E\u5B9A', '\u53D6\u6D88']\n}, function(ret, err) {\n    var index = ret.buttonIndex;\n    var text = ret.text;\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "actionSheet",
					desc: ["底部弹出框", "actionSheet({params}, callback(ret, err))"],
					params: [
						{
							tip: "title",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）标题"
								}
							]
						},

						{
							tip: "cancelTitle",
							desc: [
								{
									type: "字符串",
									default: "取消",
									desc: "（可选项）取消按钮标题"
								}
							]
						},

						{
							tip: "destructiveTitle",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）红色警示按钮标题，一般用于做一些删除之类操作"
								}
							]
						},

						{
							tip: "buttons",
							desc: [
								{
									type: "字符串数组",
									default: "无",
									desc: "（可选项）其它按钮"
								}
							]
						},

						{
							tip: "style",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）样式设置，不传时使用默认样式",
									fields:
										"{\n  layerColor:'',         //\u906E\u853D\u5C42\u989C\u8272\uFF0C\u4EC5\u652F\u6301rgba\u989C\u8272\uFF0C\u9ED8\u8BA4\u503C\uFF1Argba(0, 0, 0, 0.4)\uFF0CAndroid\u5E73\u53F0\u4EC5\u652F\u6301\u8BBE\u7F6Ealpha\u5373\u900F\u660E\u5EA6\u751F\u6548\n  itemNormalColor:'',    //\u9009\u9879\u6309\u94AE\u6B63\u5E38\u72B6\u6001\u80CC\u666F\u989C\u8272\uFF0C\u652F\u6301#000\u3001#000000\u3001rgb\u3001rgba\uFF0C\u9ED8\u8BA4\u503C\uFF1A#F1F1F1\n  itemPressColor:'',     //\u9009\u9879\u6309\u94AE\u6309\u4E0B\u65F6\u80CC\u666F\u989C\u8272\uFF0C\u652F\u6301#000\u3001#000000\u3001rgb\u3001rgba\uFF0C\u9ED8\u8BA4\u503C\uFF1A#E6E6E6\n  fontNormalColor:'',    //\u9009\u9879\u6309\u94AE\u6B63\u5E38\u72B6\u6001\u6587\u5B57\u989C\u8272\uFF0C\u652F\u6301#000\u3001#000000\u3001rgb\u3001rgba\uFF0C\u9ED8\u8BA4\u503C\uFF1A#007AFF\n  fontPressColor:'',     //\u9009\u9879\u6309\u94AE\u6309\u4E0B\u65F6\u6587\u5B57\u989C\u8272\uFF0C\u652F\u6301#000\u3001#000000\u3001rgb\u3001rgba\uFF0C\u9ED8\u8BA4\u503C\uFF1A#0060F0\n  titleFontColor:''      //\u6807\u9898\u6587\u5B57\u989C\u8272\uFF0C\u652F\u6301#000\u3001#000000\u3001rgb\u3001rgba\uFF0C\u9ED8\u8BA4\u503C\uFF1A#8F8F8F\n}"
								}
							]
						}
					],

					sampleCode:
						"api.actionSheet({\n    title: '\u5E95\u90E8\u5F39\u51FA\u6846\u6D4B\u8BD5',\n    cancelTitle: '\u8FD9\u91CC\u662F\u53D6\u6D88\u6309\u94AE',\n    destructiveTitle: '\u7EA2\u8272\u8B66\u544A\u6309\u94AE',\n    buttons: ['1', '2', '3']\n}, function(ret, err) {\n    var index = ret.buttonIndex;\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "showProgress",
					desc: ["显示进度提示框", "showProgress({params})"],
					params: [
						{
							tip: "style",
							desc: [
								{
									type: "字符串",
									default: "default",
									desc: "（可选项）进度提示框风格",
									fields: "default    //\u9ED8\u8BA4"
								}
							]
						},

						{
							tip: "animationType",
							desc: [
								{
									type: "字符串",
									default: "fade",
									desc: "（可选项）进度提示框动画类型",
									fields:
										"fade        //\u6E10\u9690\u6E10\u73B0\nzoom        //\u7F29\u653E"
								}
							]
						},

						{
							tip: "title",
							desc: [
								{
									type: "字符串",
									default: "加载中",
									desc: "（可选项）标题"
								}
							]
						},

						{
							tip: "text",
							desc: [
								{
									type: "字符串",
									default: "请稍候...",
									desc: "（可选项）内容"
								}
							]
						},

						{
							tip: "modal",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否模态，模态时整个页面将不可交互"
								}
							]
						}
					],

					sampleCode:
						"api.showProgress({\n    title: '\u52AA\u529B\u52A0\u8F7D\u4E2D...',\n    text: '\u5148\u559D\u676F\u8336...',\n    modal: false\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "hideProgress",
					desc: ["隐藏进度提示框", "hideProgress()"],
					sampleCode: "api.hideProgress();",
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "toast",
					desc: ["弹出一个定时自动关闭的提示框", "toast({params})"],
					params: [
						{
							tip: "msg",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "提示消息"
								}
							]
						},

						{
							tip: "duration",
							desc: [
								{
									type: "数字",
									default: "2000",
									desc: "（可选项）持续时长，单位：毫秒"
								}
							]
						},

						{
							tip: "location",
							desc: [
								{
									type: "字符串",
									default: "bottom",
									desc: "（可选项）弹出位置，顶部、中间或底部",
									fields:
										"top         //\u9876\u90E8\nmiddle      //\u4E2D\u95F4\nbottom      //\u5E95\u90E8"
								}
							]
						},

						{
							tip: "global",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否是全局的toast。若为false，toast将只在当前window范围可见；若为true，安卓手机上面弹出的位置将会固定在底部区域。"
								}
							]
						}
					],

					sampleCode:
						"api.toast({\n    msg: '\u7F51\u7EDC\u9519\u8BEF',\n    duration: 2000,\n    location: 'bottom'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "openPicker",
					desc: ["打开时间选择器", "openPicker({params}, callback(ret, err))"],
					params: [
						{
							tip: "type",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "拾取器类型",
									fields:
										"date           //\u65E5\u671F\ntime           //\u65F6\u95F4\ndate_time      //\u65E5\u671F\u548C\u65F6\u95F4\uFF0CAndroid\u4E0D\u652F\u6301"
								}
							]
						},

						{
							tip: "date",
							desc: [
								{
									type: "字符串",
									default: "当前时间",
									desc: "（可选项）时间格式化字符串，格式yyyy-MM-dd HH:mm"
								}
							]
						},

						{
							tip: "minDate",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）能够选择的最小时间，格式yyyy-MM-dd HH:mm，只iOS有效"
								}
							]
						},

						{
							tip: "maxDate",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）能够选择的最大时间，格式yyyy-MM-dd HH:mm，只iOS有效"
								}
							]
						},

						{
							tip: "title",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）显示在拾取器上面的标题"
								}
							]
						},

						{
							tip: "arrowRect",
							desc: [
								{
									type: "JSON 对象",
									default: "无",
									desc: "（可选项）iPad中显示时，箭头指向的位置，只iPad有效",
									fields:
										"{\n  x:0,                  //\u5DE6\u4E0A\u89D2x\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\n  y:0,                  //\u5DE6\u4E0A\u89D2y\u5750\u6807\uFF0C\u6570\u5B57\u7C7B\u578B\n  w:0,                  //\u5BBD\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B\n  h:0,                  //\u9AD8\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B\n}"
								}
							]
						},

						{
							tip: "arrowDirection",
							desc: [
								{
									type: "字符串",
									default: "any",
									desc: "（可选项）iPad中显示时，箭头指向的方向，只iPad有效",
									fields:
										"left         // \u6307\u5411\u5DE6\u8FB9\nright        // \u6307\u5411\u53F3\u8FB9\nup           // \u6307\u5411\u4E0A\u8FB9\ndown         // \u6307\u5411\u4E0B\u8FB9\nany          // \u7CFB\u7EDF\u6839\u636E\u9875\u9762\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u65B9\u5411"
								}
							]
						}
					],

					sampleCode:
						"api.openPicker({\n    type: 'date_time',\n    date: '2014-05-01 12:30',\n    title: '\u9009\u62E9\u65F6\u95F4'\n}, function(ret, err) {\n    if (ret) {\n      api.alert({\n          msg:JSON.stringify(ret)\n      });\n    } else {\n      api.alert({\n          msg:JSON.stringify(err)\n      });\n    }\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "setRefreshHeaderInfo",
					desc: [
						"显示默认下拉刷新组件，使用默认下拉刷新组件时会自动重新设置页面的弹动属性。",
						"setRefreshHeaderInfo({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "visible",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否可见"
								}
							]
						},

						{
							tip: "bgColor",
							desc: [
								{
									type: "字符串",
									default:
										"当defaultRefreshHeader为pull时为rgba(187, 236, 153, 1.0)，为swipe时为#fff",
									desc: "（可选项）背景颜色"
								}
							]
						},

						{
							tip: "pathColor",
							desc: [
								{
									type: "字符串",
									default: "#0F9D58",
									desc: "（可选项）进度条的颜色，defaultRefreshHeader为swipe时生效。"
								}
							]
						},

						{
							tip: "loadingImg",
							desc: [
								{
									type: "字符串",
									default: "旋转箭头图片",
									desc:
										"（可选项）上拉下拉时的图片地址，defaultRefreshHeader为pull时生效。"
								}
							]
						},

						{
							tip: "textColor",
							desc: [
								{
									type: "字符串",
									default: "rgba(109, 128, 153, 1.0)",
									desc: "（可选项）文本颜色，defaultRefreshHeader为pull时生效。"
								}
							]
						},

						{
							tip: "textDown",
							desc: [
								{
									type: "字符串",
									default: "下拉可以刷新...",
									desc: "（可选项）下拉文字描述，defaultRefreshHeader为pull时生效。"
								}
							]
						},

						{
							tip: "textUp",
							desc: [
								{
									type: "字符串",
									default: "松开可以刷新...",
									desc: "（可选项）松开时文字描述，defaultRefreshHeader为pull时生效。"
								}
							]
						},

						{
							tip: "textLoading",
							desc: [
								{
									type: "字符串",
									default: "加载中...",
									desc: "（可选项）加载状态文字描述，defaultRefreshHeader为pull时生效。"
								}
							]
						},

						{
							tip: "textTime",
							desc: [
								{
									type: "字符串",
									default: "最后更新加日期时间",
									desc: "（可选项）更新时间文字描述，defaultRefreshHeader为pull时生效。"
								}
							]
						},

						{
							tip: "showTime",
							desc: [
								{
									type: "布尔",
									default: "true",
									desc: "（可选项）是否显示更新时间，defaultRefreshHeader为pull时生效。"
								}
							]
						}
					],

					sampleCode:
						"api.setRefreshHeaderInfo({\n    loadingImg: 'widget://image/refresh.png',\n    bgColor: '#ccc',\n    textColor: '#fff',\n    textDown: '\u4E0B\u62C9\u5237\u65B0...',\n    textUp: '\u677E\u5F00\u5237\u65B0...'\n}, function(ret, err) {\n    //\u5728\u8FD9\u91CC\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u6570\u636E\uFF0C\u52A0\u8F7D\u5B8C\u6210\u540E\u8C03\u7528api.refreshHeaderLoadDone()\u65B9\u6CD5\u6062\u590D\u7EC4\u4EF6\u5230\u9ED8\u8BA4\u72B6\u6001\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "setCustomRefreshHeaderInfo",
					desc: [
						"显示自定义下拉刷新组件。",
						"使用自定义下拉刷新组件之前，需要在config.xml里面配置要使用的自定义下拉刷新模块名称,如：",
						'<preference name="customRefreshHeader" value="UIPullRefresh"/>',
						"或者在使用openWin、openFrame等方法打开页面时传入customRefreshHeader参数来指定。",
						"setCustomRefreshHeaderInfo({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "由对应的自定义下拉刷新模块提供"
						}
					],

					sampleCode:
						"api.setCustomRefreshHeaderInfo({\n    bgColor: '#C0C0C0',\n    images: {\n      pull: 'widget://image/refresh/pulling.png',\n      transform: [\n          'widget://image/refresh/transform0.png',\n          'widget://image/refresh/transform1.png',\n          'widget://image/refresh/transform2.png',\n          'widget://image/refresh/transform3.png',\n          'widget://image/refresh/transform4.png',\n          'widget://image/refresh/transform5.png',\n          'widget://image/refresh/transform6.png'\n      ],\n      load: [\n          'widget://image/refresh/loading0.png',\n          'widget://image/refresh/loading1.png',\n          'widget://image/refresh/loading2.png',\n          'widget://image/refresh/loading3.png',\n          'widget://image/refresh/loading4.png',\n      ]\n    }\n}, function(ret, err) {\n    //\u5728\u8FD9\u91CC\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u6570\u636E\uFF0C\u52A0\u8F7D\u5B8C\u6210\u540E\u8C03\u7528api.refreshHeaderLoadDone()\u65B9\u6CD5\u6062\u590D\u7EC4\u4EF6\u5230\u9ED8\u8BA4\u72B6\u6001\n});",

					usability: ["iOS系统，Android系统", "可提供的1.2.0及更高版本"]
				},
				{
					name: "refreshHeaderLoading",
					desc: ["设置下拉刷新组件为刷新中状态", "refreshHeaderLoading()"],
					sampleCode: "api.refreshHeaderLoading();",
					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "refreshHeaderLoadDone",
					desc: [
						"通知下拉刷新数据加载完毕，组件会恢复到默认状态",
						"refreshHeaderLoadDone()"
					],
					sampleCode: "api.refreshHeaderLoadDone();",
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "showFloatBox",
					desc: [
						"展示一个悬浮框，浮动在屏幕上。",
						"showFloatBox({params}, callback)"
					],
					params: [
						{
							tip: "preventDefault",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否阻止默认行为，若传true，可以在回调方法里面处理悬浮框点击操作。默认的行为：1、在主widget调用该方法无效 2、点击后会弹出退出应用提示"
								}
							]
						},

						{
							tip: "iconPath",
							desc: [
								{
									type: "字符串",
									default: "应用图标",
									desc: "（可选项）展示在悬浮框中的图片地址"
								}
							]
						},

						{
							tip: "duration",
							desc: [
								{
									type: "字符串",
									default: "5000毫秒",
									desc:
										"（可选项）自动消隐时长。在该时长内不发生触摸悬浮框行为，悬浮框自动消隐至半透状态"
								}
							]
						}
					],

					sampleCode:
						"api.showFloatBox({\n    iconPath: 'widget://image/icon.png',\n    duration: 3000\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "setMenuItems",
					desc: ["设置选择文字弹出菜单。", "setMenuItems({params}, callback)"],
					params: [
						{
							tip: "customItems",
							desc: [
								{
									type: "字符串数组",
									default: "无",
									desc: "自定义菜单项。自定义菜单项会添加到系统默认菜单项的后面。"
								}
							]
						},

						{
							tip: "systemItems",
							desc: [
								{
									type: "字符串数组",
									default: "无",
									desc:
										"（可选项）系统菜单项。如果不传该参数，则会显示系统菜单项，自定义菜单项会添加到系统菜单项后面；如果传空数组，则不显示系统菜单项；如果传了非空数组，则显示传入的系统菜单。注意：不同系统版本的系统默认菜单项可能会有所不同，会存在无法屏蔽某些系统菜单的情况。",
									fields:
										"copy                // \u590D\u5236\nselectAll           // \u5168\u9009\n_lookup             // \u67E5\u8BE2\n_addShortcut        // \u6DFB\u52A0...\n_share              // \u5171\u4EAB..."
								}
							]
						}
					],

					sampleCode:
						"api.setMenuItems({\n    customItems: ['\u83DC\u53551', '\u83DC\u53552']\n    systemItems: []\n}, function(ret, err){\n    var index = ret.index;\n});",

					usability: ["iOS系统", "可提供的1.2.98及更高版本"]
				}
			]
		},

		{
			name: "多媒体",
			icon: "api_media_icon",
			children: [
				{
					name: "getPicture",
					desc: [
						"通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。",
						"getPicture({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "sourceType",
							desc: [
								{
									type: "字符串",
									default: "library",
									desc: "（可选项）图片源类型，从相册、图片库或相机获取图片",
									fields:
										"library         //\u56FE\u7247\u5E93\ncamera          //\u76F8\u673A\nalbum           //\u76F8\u518C"
								}
							]
						},

						{
							tip: "encodingType",
							desc: [
								{
									type: "字符串",
									default: "png",
									desc: "（可选项）返回图片类型，jpg或png",
									fields:
										"jpg      //\u6307\u5B9A\u56FE\u7247\u683C\u5F0F\u4E3Ajpg\npng      //\u6307\u5B9A\u56FE\u7247\u683C\u5F0F\u4E3Apng"
								}
							]
						},

						{
							tip: "mediaValue",
							desc: [
								{
									type: "字符串",
									default: "pic",
									desc: "（可选项）媒体类型，图片或视频",
									fields:
										"pic        //\u56FE\u7247\nvideo      //\u89C6\u9891\nall        //\u56FE\u7247\u548C\u89C6\u9891\uFF0CAndroid\u4E0D\u652F\u6301"
								}
							]
						},

						{
							tip: "destinationType",
							desc: [
								{
									type: "字符串",
									default: "url",
									desc:
										"（可选项）返回数据类型，指定返回图片地址或图片经过base64编码后的字符串",
									fields:
										"base64      //\u6307\u5B9A\u8FD4\u56DE\u6570\u636E\u4E3Abase64\u7F16\u7801\u540E\u5185\u5BB9\nurl         //\u6307\u5B9A\u8FD4\u56DE\u6570\u636E\u4E3A\u9009\u53D6\u7684\u56FE\u7247\u5730\u5740"
								}
							]
						},

						{
							tip: "direction",
							desc: [
								{
									type: "字符串",
									default: "rear",
									desc:
										"（可选项）选择前置或后置摄像头，取值范围（front、rear），只支持iOS"
								}
							]
						},

						{
							tip: "allowEdit",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否可以选择图片后进行编辑，支持iOS及部分安卓手机"
								}
							]
						},

						{
							tip: "preview",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否选择图片后进行预览，只支持iOS。"
								}
							]
						},

						{
							tip: "quality",
							desc: [
								{
									type: "数字",
									default: "50",
									desc: "（可选项）图片质量，只针对jpg格式图片（0-100整数）"
								}
							]
						},

						{
							tip: "videoQuality",
							desc: [
								{
									type: "字符串",
									default: "medium",
									desc:
										"（可选项）视频质量，调用相机录制视频时该参数生效。取值范围(low、medium、high)，质量越高，录制的视频文件占用存储空间越大。"
								}
							]
						},

						{
							tip: "targetWidth",
							desc: [
								{
									type: "数字",
									default: "原图宽度",
									desc: "（可选项）压缩后的图片宽度，图片会按比例适配此宽度"
								}
							]
						},

						{
							tip: "targetHeight",
							desc: [
								{
									type: "数字",
									default: "原图高度",
									desc: "（可选项）压缩后的图片高度，图片会按比例适配此高度"
								}
							]
						},

						{
							tip: "saveToPhotoAlbum",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）拍照或录制视频后是否保存到系统相册目录。注意此处仅是文件系统层面的操作，使用诸如“图库”App仍然有可能查看到。"
								}
							]
						},

						{
							tip: "groupName",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）保存图片到自定义分组相册目录，相册不存在则会进行创建。可用性：可提供的1.2.74及更高版本"
								}
							]
						}
					],

					sampleCode:
						"api.getPicture({\n    sourceType: 'camera',\n    encodingType: 'jpg',\n    mediaValue: 'pic',\n    destinationType: 'url',\n    allowEdit: true,\n    quality: 50,\n    targetWidth: 100,\n    targetHeight: 100,\n    saveToPhotoAlbum: false\n}, function(ret, err) {\n    if (ret) {\n        api.alert({\n            msg:JSON.stringify(ret)\n        });\n    } else {\n        api.alert({\n            msg:JSON.stringify(err)\n        });\n    }\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "saveMediaToAlbum",
					desc: [
						"保存图片和视频到系统相册",
						"saveMediaToAlbum({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "path",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"文件路径，支持网络链接地址、fs://、widget://等扩展文件路径协议，本地文件路径必须带有扩展名"
								}
							]
						},

						{
							tip: "groupName",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc:
										"（可选项）保存图片到自定义分组相册目录，相册不存在则会进行创建。可用性：可提供的1.2.74及更高版本"
								}
							]
						}
					],

					sampleCode:
						"api.saveMediaToAlbum({\n    path: 'fs://1.png'\n}, function(ret, err) {\n    if (ret && ret.status) {\n        api.alert({\n            msg:'\u4FDD\u5B58\u6210\u529F'\n        });\n\n    } else {\n        api.alert({\n            msg:'\u4FDD\u5B58\u5931\u8D25'\n        });\n    }\n});",

					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "screenCapture",
					desc: [
						"屏幕截取，可截取整个屏幕、当前页面、avm 页面指定元素等。",
						"screenCapture({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "region",
							desc: [
								{
									type: "字符串",
									default: "当前页面区域",
									desc: "要截取的屏幕区域范围，默认为当前页面区域。",
									fields:
										"screen            // \u6574\u4E2A\u5C4F\u5E55\uFF0C\u5305\u542B\u72B6\u6001\u680F\u3001\u865A\u62DF\u6309\u952E\u680F\u533A\u57DF\nwindow            // \u6574\u4E2A window\uFF0C\u5305\u542B\u5BFC\u822A\u680F\u3001\u5E95\u90E8\u6807\u7B7E\u680F\u533A\u57DF\n#elementId        // avm \u9875\u9762\u7684\u6307\u5B9A\u5143\u7D20\u533A\u57DF\uFF0CelementId \u4E3A\u5143\u7D20\u7684 id"
								}
							]
						},

						{
							tip: "destinationType",
							desc: [
								{
									type: "字符串",
									default: "url",
									desc: "数据返回类型。",
									fields:
										"url            // \u4EE5\u6587\u4EF6\u8DEF\u5F84\u8FD4\u56DE\nbase64         // \u4EE5 base64 \u6570\u636E\u8FD4\u56DE"
								}
							]
						}
					],

					sampleCode:
						"// \u622A\u53D6\u5F53\u524D\u9875\u9762\napi.screenCapture(function(ret, err) {\n    console.log(ret.savePath);\n});\n\n// \u622A\u53D6 avm \u9875\u9762\u4E2D\u6307\u5B9A\u5143\u7D20\u533A\u57DF\napi.screenCapture({\n    region: '#user'\n}, function(ret, err) {\n    console.log(ret.savePath);\n});",

					usability: ["iOS系统，Android系统", "可提供的3.0.12及更高版本"]
				},
				{
					name: "startRecord",
					desc: ["录制音频", "startRecord({params})"],
					params: [
						{
							tip: "path",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）文件路径，不传时自动创建路径"
								}
							]
						},

						{
							tip: "format",
							desc: [
								{
									type: "字符串",
									default: "amr",
									desc: "（可选项）音频格式",
									fields:
										"amr         // amr \u683C\u5F0F\nwav         // wav \u683C\u5F0F"
								}
							]
						}
					],

					sampleCode: "api.startRecord({\n    path: 'fs://a.amr'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "stopRecord",
					desc: ["停止录音", "stopRecord(callback(ret, err))"],
					sampleCode:
						"api.stopRecord(function(ret, err) {\n    if (ret) {\n      var path = ret.path;\n      var duration = ret.duration;\n    }\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "startPlay",
					desc: [
						"播放本地音频，支持 amr 格式。",
						"当调用 pausePlay 方法暂停播放后，再次调用本方法时，若文件路径不变则继续播放，否则播放新的音频。",
						"startPlay({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "path",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "文件路径，支持fs://、widget://等文件路径协议"
								}
							]
						}
					],

					sampleCode:
						"api.startPlay({\n    path: 'widget://res/1.mp3'\n}, function(ret, err) {\n    if (ret) {\n        api.alert({\n            msg:'\u64AD\u653E\u5B8C\u6210'\n        });\n\n    } else {\n        api.alert({\n            msg:JSON.stringify(err)\n        });\n    }\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "pausePlay",
					desc: ["暂停播放音频", "pausePlay()"],
					sampleCode: "api.pausePlay();",
					usability: ["iOS 系统，Android 系统", "可提供的 3.0.30 及更高版本"]
				},
				{
					name: "stopPlay",
					desc: ["停止播放音频", "stopPlay()"],
					sampleCode: "api.stopPlay();",
					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "openVideo",
					desc: ["打开系统视频播放器", "openVideo({params})"],
					params: [
						{
							tip: "url",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "本地文件路径（支持fs://路径协议）或者网络资源地址"
								}
							]
						}
					],

					sampleCode: "api.openVideo({\n    url: 'fs://res/1.mp4'\n});",

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				}
			]
		},

		{
			name: "模块加载",
			icon: "api_module_icon",
			children: [
				{
					name: "require",
					desc: ["引用模块", "require()"],
					sampleCode: 'var bMap = api.require("bMap");',
					usability: ["iOS系统，Android系统"]
				}
			]
		},

		{
			name: "WebApp历史",
			icon: "api_history_icon",
			children: [
				{
					name: "historyBack",
					desc: [
						"当前 window 或者 frame 的 a 标签历史记录后退一页",
						"historyBack({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "frameName",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）frame 名称，若不传则表示对当前页面进行操作"
								}
							]
						},

						{
							tip: "query",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否只查询。为 true 时表示只查询是否可以后退，而不进行后退操作"
								}
							]
						}
					],

					sampleCode: [
						"api.historyBack({\n    frameName: 'detail'\n}, function(ret, err) {\n    if (!ret.status) {\n        api.closeWin();\n    }\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				},
				{
					name: "historyForward",
					desc: [
						"当前 window 或者 frame 的 a 标签历史记录前进一页",
						"historyForward({params}, callback(ret, err))"
					],
					params: [
						{
							tip: "frameName",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "（可选项）frame 名称，若不传则表示对当前页面进行操作"
								}
							]
						},

						{
							tip: "query",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc:
										"（可选项）是否只查询。为 true 时表示只查询是否可以前进，而不进行前进操作"
								}
							]
						}
					],

					sampleCode: [
						"api.historyForward({\n  frameName: 'detail'\n}, function(ret, err) {\n    if (!ret.status) {\n\n    }\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.0.0及更高版本"]
				}
			]
		},

		{
			name: "其他",
			icon: "api_ui_icon",
			children: [
				{
					name: "pageUp",
					desc: ["页面向上滚动一页", "pageUp({params}, callback(ret, err))"],
					params: [
						{
							tip: "top",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否直接滚动到最顶部"
								}
							]
						}
					],

					sampleCode: [
						"api.pageUp(function(ret, err) {\n    if (!ret.scrolled) {\n        //\u5DF2\u7ECF\u6EDA\u52A8\u5230\u9876\u90E8\n    }\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "pageDown",
					desc: ["页面向下滚动一页", "pageDown({params}, callback(ret, err))"],
					params: [
						{
							tip: "bottom",
							desc: [
								{
									type: "布尔",
									default: "false",
									desc: "（可选项）是否直接滚动到最底部"
								}
							]
						}
					],

					sampleCode: [
						"api.pageDown(function(ret, err) {\n    if (!ret.scrolled) {\n        //\u5DF2\u7ECF\u6EDA\u52A8\u5230\u5E95\u90E8\n    }\n});"
					],

					usability: ["iOS系统，Android系统", "可提供的1.1.0及更高版本"]
				},
				{
					name: "setFocus",
					desc: ["设置input是否获取焦点", "setFocus({params})"],
					params: [
						{
							tip: "inputId",
							desc: [
								{
									type: "字符串",
									default: "无",
									desc: "input标签id"
								}
							]
						},

						{
							tip: "focus",
							desc: [
								{
									type: "布尔",
									default: "无",
									desc: "是否获取焦点"
								}
							]
						}
					],

					sampleCode: ["api.setFocus({\n    inputId: 'test',\n    focus: true\n});"],

					usability: ["iOS系统，Android系统", "可提供的1.3.35及更高版本"]
				}
			]
		}
	];

	var MainApi = /*@__PURE__*/ (function(Component) {
		function MainApi(props) {
			Component.call(this, props);
			this.data = {
				curTab: null
			};
		}

		if (Component) MainApi.__proto__ = Component;
		MainApi.prototype = Object.create(Component && Component.prototype);
		MainApi.prototype.constructor = MainApi;
		MainApi.prototype.apiready = function() {};
		MainApi.prototype.itemClick = function(item) {
			item.name === this.data.curTab
				? (this.data.curTab = null)
				: (this.data.curTab = item.name);
		};
		MainApi.prototype.openProDetail = function(item) {
			api.openWin({
				name: "apiDetail",
				url: "../main-api-detail/main-api-detail.stml",
				pageParam: {
					detailInfo: item
				}
			});
		};
		MainApi.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "main-api"},
				apivm.h("text", {class: "main-api-title"}, "多端API"),
				apivm.h(
					"scroll-view",
					{class: "main-api-con"},
					apivm.h(
						"view",
						{class: "main-api-desc"},
						apivm.h("image", {
							src: "../../image/avm_left_comma.png",
							alt: "avm_left_comma",
							class: "main-api-desc-icon main-api-desc-icon-left"
						}),
						apivm.h(
							"text",
							{class: "main-api-desc-text"},
							"多端API是您入门APICloud必须了解和熟练掌握的一个基础对象。多端API提供了构建应用程序所需要的一些基本的方法(Method)，以及一些常见的属性(Attribute)，还有一些常用事件(Event)。"
						),
						apivm.h("image", {
							src: "../../image/avm_right_comma.png",
							alt: "avm_right_comma",
							class: "main-api-desc-icon main-api-desc-icon-right"
						})
					),
					apivm.h(
						"view",
						{class: "api-list"},
						(Array.isArray(apiList) ? apiList : Object.values(apiList)).map(function(
							item$1
						) {
							return apivm.h(
								"view",
								{class: "api-list-item", key: item$1.name},

								apivm.h(
									"view",
									{
										class: "api-list-item-title",
										onClick: function() {
											return this$1.itemClick(item$1);
										}
									},
									apivm.h("text", {class: "api-list-item-name"}, item$1.name),
									apivm.h("img", {
										class: "api-list-item-icon",
										src: "../../image/" + item$1.icon + ".png",
										alt: item$1.icon
									})
								),

								item$1.name === this$1.data.curTab && item$1.children
									? apivm.h(
											"view",
											{class: "api-list-child"},
											(Array.isArray(item$1.children)
												? item$1.children
												: Object.values(item$1.children)
											).map(function(cItem) {
												return apivm.h(
													"view",
													{
														key: cItem.name,
														class: "api-list-child-item",
														onClick: function() {
															return this$1.openProDetail(cItem);
														}
													},
													apivm.h("text", {class: "api-list-child-item-name"}, cItem.name),
													apivm.h("img", {
														class: "api-list-child-item-icon",
														src: "../../image/right_arrow.png",
														alt: "right_arrow"
													})
												);
											})
									  )
									: null
							);
						})
					)
				)
			);
		};

		return MainApi;
	})(Component);
	MainApi.css = {
		".main-api": {width: "100%", height: "100%", background: "#fff"},
		".main-api-title": {
			fontSize: "17px",
			color: "#000",
			fontWeight: "500",
			margin: "22px auto 26px"
		},
		".main-api-con": {flex: "1"},
		".main-api-desc": {
			margin: "0 16px 10px",
			flexDirection: "row",
			alignItems: "center"
		},
		".main-api-desc-icon": {width: "12px", height: "10px"},
		".main-api-desc-icon-left": {position: "absolute", top: "7px", left: "0"},
		".main-api-desc-icon-right": {
			position: "absolute",
			bottom: "7px",
			right: "0"
		},
		".main-api-desc-text": {
			fontSize: "13px",
			color: "#aaa",
			fontWeight: "400",
			lineHeight: "24px",
			textIndent: "22px"
		},
		".api-list": {paddingTop: "10px"},
		".api-list-item": {background: "#fff"},
		".api-list-item-title": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			padding: "18px 0",
			borderBottom: "0.5px solid #eee",
			margin: "0 16px"
		},
		".api-list-item-name": {
			fontSize: "16px",
			color: "#333",
			fontWeight: "400",
			lineHeight: "22px"
		},
		".api-list-item-icon": {width: "22px", height: "22px"},
		".api-list-child": {background: "#f6f6f6", padding: "0 16px"},
		".api-list-child-item": {
			borderBottom: "0.5px solid #eee",
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			padding: "14px 0"
		},
		".api-list-child-item-name": {
			fontSize: "15px",
			color: "#333",
			fontWeight: "400",
			lineHeight: "21px"
		},
		".api-list-child-item-icon": {width: "10px", height: "10px"}
	};
	apivm.define("main-api", MainApi);
	apivm.render(apivm.h("main-api", null), "body");
})();
