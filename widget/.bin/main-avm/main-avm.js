(function() {
	var avmContentList = [
		{
			type: "base",
			text: "容器组件",
			tab: "baseContainer",
			icon: "avm_base_icon",
			children: [
				{
					text: "view",
					component: "avm-base-view"
				},
				{
					text: "swiper",
					component: "avm-base-swiper"
				},
				{
					text: "scroll-view",
					component: "avm-base-scroll-view"
				},
				{
					text: "list-view",
					component: "avm-base-list-view"
				},
				{
					text: "grid-view",
					component: "avm-base-grid-view"
				},
				{
					text: "refresh",
					component: "avm-base-refresh"
				},
				{
					text: "frame",
					component: "avm-base-frame"
				},
				{
					text: "frame-group",
					component: "avm-base-frame-group"
				}
			]
		},

		{
			type: "base",
			text: "表单组件",
			tab: "baseForm",
			icon: "avm_form_icon",
			children: [
				{
					text: "input",
					component: "avm-base-input"
				},
				{
					text: "textarea",
					component: "avm-base-textarea"
				},
				{
					text: "switch",
					component: "avm-base-switch"
				},
				{
					text: "slider",
					component: "avm-base-slider"
				},
				{
					text: "picker",
					component: "avm-base-picker"
				},
				{
					text: "checkbox",
					component: "avm-base-checkbox"
				},
				{
					text: "checkbox-group",
					component: "avm-base-checkbox-group"
				},
				{
					text: "radio",
					component: "avm-base-radio"
				},
				{
					text: "radio-group",
					component: "avm-base-radio-group"
				},
				{
					text: "form",
					component: "avm-base-form"
				}
			]
		},

		{
			type: "base",
			text: "展示组件",
			tab: "baseShow",
			icon: "avm_show_icon",
			children: [
				{
					text: "text",
					component: "avm-base-text"
				},
				{
					text: "image",
					component: "avm-base-image"
				},
				{
					text: "button",
					component: "avm-base-button"
				},
				{
					text: "rich-text",
					component: "avm-base-rich-text"
				},
				{
					text: "video",
					component: "avm-base-video"
				},
				{
					text: "progress",
					component: "avm-base-progress"
				},
				{
					text: "camera",
					component: "avm-base-camera"
				}
			]
		},

		{
			type: "avm",
			text: "基础组件",
			tab: "avmBase",
			icon: "avm_base_icon",
			children: [
				{
					text: "Button 按钮",
					component: "demo-button"
				},

				// {
				//   text: 'icon 图标',
				//   component: 'demo-icon'
				// },
				{
					text: "List 列表",
					component: "demo-list"
				},
				{
					text: "Space 间距",
					component: "demo-space"
				}
			]
		},

		{
			type: "avm",
			text: "数据展示",
			tab: "avmDataShow",
			icon: "avm_form_icon",
			children: [
				{
					text: "Badge 徽标",
					component: "demo-badge"
				},
				{
					text: "Card 卡片",
					component: "demo-card"
				},
				{
					text: "Image 图片",
					component: "demo-image"
				},
				{
					text: "ImageViewer 图片查看器",
					component: "demo-image-viewer"
				},
				{
					text: "InfiniteScroll 无限滚动",
					component: "demo-infinite-scroll"
				},
				{
					text: "Steps步骤条",
					component: "demo-steps"
				},
				{
					text: "Swiper 走马灯",
					component: "demo-swiper"
				},
				{
					text: "Tag 标签",
					component: "demo-tag"
				}
			]
		},

		{
			type: "avm",
			text: "数据录入",
			tab: "avmDataEntry",
			icon: "avm_show_icon",
			children: [
				{
					text: "CheckList 可勾选列表",
					component: "demo-checklist"
				},
				{
					text: "Checkbox 复选框",
					component: "demo-checkbox"
				},
				{
					text: "Input 输入框",
					component: "demo-input"
				},
				{
					text: "Radio 单选框",
					component: "demo-radio"
				},
				{
					text: "Rate 评分",
					component: "demo-rate"
				},
				{
					text: "Search 搜索框",
					component: "demo-search"
				},
				{
					text: "Selector 选择组",
					component: "demo-selector"
				},
				{
					text: "Stepper 步进器",
					component: "demo-stepper"
				},
				{
					text: "Switch 开关",
					component: "demo-switch"
				},
				{
					text: "TextArea 文本域",
					component: "demo-textarea"
				}
			]
		},

		{
			type: "avm",
			text: "反馈",
			tab: "avmTickling",
			icon: "avm_tick_icon",
			children: [
				{
					text: "ActionSheet 动作面板",
					component: "demo-action-sheet"
				},
				{
					text: "Empty 空状态",
					component: "demo-empty"
				},
				{
					text: "ErrorBlock 异常",
					component: "demo-error-block"
				},
				{
					text: "Loading 加载中",
					component: "demo-loading"
				},
				{
					text: "Mask 遮罩层",
					component: "demo-mask"
				},
				{
					text: "ProgressBar 进度条",
					component: "demo-progress-bar"
				},
				{
					text: "Result 结果",
					component: "demo-result"
				}
			]
		},

		{
			type: "avm",
			text: "布局和导航",
			tab: "avmLayout",
			icon: "avm_layout_icon",
			children: [
				{
					text: "Collapse 折叠面板",
					component: "demo-collapse"
				},
				{
					text: "Divider 分割线",
					component: "demo-divider"
				},
				{
					text: "FloatingPanel 浮动面板",
					component: "demo-floating-panel"
				},
				{
					text: "Grid 栅格",
					component: "demo-grid"
				},
				{
					text: "NavBar 导航栏",
					component: "demo-nav-bar"
				},
				{
					text: "Popup 弹出层",
					component: "demo-popup"
				},
				{
					text: "SideBar 侧边导航",
					component: "demo-side-bar"
				},
				{
					text: "TabBar 标签栏",
					component: "demo-tab-bar"
				},
				{
					text: "Tabs 标签页",
					component: "demo-tabs"
				}
			]
		},

		{
			type: "avm",
			text: "其他",
			tab: "avmOther",
			icon: "avm_other_icon",
			children: [
				{
					text: "DesenseText 脱敏",
					component: "demo-desense-text"
				},
				{
					text: "Dropdown 下拉菜单",
					component: "demo-dropdown"
				},

				// {
				//   text: 'Ellipsis 文本省略',
				//   component: 'demo-ellipsis'
				// },
				{
					text: "ImageUploader 图片上传",
					component: "demo-image-uploader"
				},
				{
					text: "NumberKeyboard 数字键盘",
					component: "demo-number-keyboard"
				},
				{
					text: "TreeSelect 级联选择器",
					component: "demo-tree-select"
				}
			]
		}
	];

	var MainAvmIndex = /*@__PURE__*/ (function(Component) {
		function MainAvmIndex(props) {
			Component.call(this, props);
			this.data = {
				isShowShadow: false,
				startY: 0,
				tabList: [
					{
						label: "基础组件",
						value: "base"
					},
					{
						label: "AVM UI",
						value: "avm"
					}
				],

				desc: {
					base:
						"基础组件是AVM框架为开发者提供的系统组件，类似于HTML的标签。它是AVM应用开发的原子性基石。可以使用基础组件，以不同的组合和样式构建出各种页面和效果。",
					avm:
						"AVM UI是基于基础组件二次封装和开发的一套风格化组件库，提供业务开发中常见的场景和组合，旨在通过少量的配置和定制，满足用户快速开发和使用。"
				},

				curTab: this.props.curTab || "base",
				curChildTab: this.props.curChildTab || null
			};
			this.compute = {
				contentList: function() {
					var this$1 = this;
					return avmContentList.filter(function(item) {
						return item.type === this$1.data.curTab;
					});
				},
				platform: function() {
					return api.platform;
				}
			};
		}

		if (Component) MainAvmIndex.__proto__ = Component;
		MainAvmIndex.prototype = Object.create(Component && Component.prototype);
		MainAvmIndex.prototype.constructor = MainAvmIndex;
		MainAvmIndex.prototype.tabClick = function(tab) {
			this.data.curTab = tab;
		};
		MainAvmIndex.prototype.handleTouchstart = function(e) {
			this.data.startY = e.detail.y;
		};
		MainAvmIndex.prototype.handleTouchMove = function(e) {
			if (e.detail.y - this.data.startY > 10) {
				this.fire("handleHideIndexList");
			}
		};
		MainAvmIndex.prototype.selectChildTab = function(item) {
			if (item.tab === this.data.curChildTab) {
				this.data.curChildTab = null;
			} else {
				this.data.curChildTab = item.tab;
			}
		};
		MainAvmIndex.prototype.enterChildDetail = function(childItem) {
			var url = "../" + childItem.component + "/" + childItem.component + ".stml";
			if (this.platform === "app") {
				// app端
				api.openWin({
					name: childItem.component,
					url: url
				});
			} else if (this.platform === "mp") {
				// 小程序端
				wx.redirectTo({url: url});
			}
		};
		MainAvmIndex.prototype.handleScroll = function(e) {
			if (e.detail.scrollTop > 0) {
				this.data.isShowShadow = true;
			} else {
				this.data.isShowShadow = false;
			}
		};
		MainAvmIndex.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{
					class: "main-avm-list",
					onTouchStart: this.handleTouchstart,
					onTouchMove: this.handleTouchMove
				},
				apivm.h(
					"view",
					{
						class:
							"main-avm-list-tabs " +
							(this.data.isShowShadow ? "main-avm-list-tabs-shadow" : "")
					},
					(Array.isArray(this.data.tabList)
						? this.data.tabList
						: Object.values(this.data.tabList)
					).map(function(item$1) {
						return apivm.h(
							"view",
							{
								class: "main-avm-list-tab-item",
								onClick: function() {
									return this$1.tabClick(item$1.value);
								}
							},
							apivm.h(
								"text",
								{
									class:
										this$1.data.curTab === item$1.value
											? "main-avm-list-tab-active"
											: "main-avm-list-tab"
								},
								item$1.label
							),
							item$1.value === this$1.data.curTab
								? apivm.h("text", {class: "main-avm-list-tab-line"})
								: null
						);
					})
				),
				apivm.h(
					"scroll-view",
					{
						"scroll-y": true,
						"show-scrollbar": false,
						class: "main-avm-list-content",
						onScroll: this.handleScroll
					},
					apivm.h(
						"view",
						{class: "main-avm-list-desc"},
						apivm.h("image", {
							src: "../../image/avm_left_comma.png",
							alt: "avm_left_comma",
							class: "main-avm-list-desc-icon main-avm-list-desc-icon-left"
						}),
						apivm.h(
							"text",
							{class: "main-avm-list-desc-text"},
							this.data.desc[this.data.curTab]
						),
						apivm.h("image", {
							src: "../../image/avm_right_comma.png",
							alt: "avm_right_comma",
							class: "main-avm-list-desc-icon main-avm-list-desc-icon-right"
						})
					),
					apivm.h(
						"view",
						null,
						(Array.isArray(this.contentList)
							? this.contentList
							: Object.values(this.contentList)
						).map(function(item$1) {
							return apivm.h(
								"view",
								{class: "main-avm-list-item"},

								apivm.h(
									"view",
									{
										class: "main-avm-list-item-title",
										onClick: function() {
											return this$1.selectChildTab(item$1);
										}
									},
									apivm.h("text", {
										class: "main-avm-list-item-title-line",
										style: {
											display: this$1.data.curChildTab === item$1.tab ? "flex" : "none"
										}
									}),
									apivm.h("text", {class: "main-avm-list-item-text"}, item$1.text),
									apivm.h("img", {
										src: "../../image/" + item$1.icon + ".png",
										alt: item$1.icon,
										class: "main-avm-list-item-icon"
									})
								),

								apivm.h(
									"view",
									{
										class: "main-avm-list-item-child-container",
										style: {
											display: this$1.data.curChildTab === item$1.tab ? "flex" : "none"
										}
									},
									(Array.isArray(item$1.children)
										? item$1.children
										: Object.values(item$1.children)
									).map(function(childItem) {
										return apivm.h(
											"view",
											{
												class: "main-avm-list-item-child",
												key: childItem.component,
												onClick: function() {
													return this$1.enterChildDetail(childItem);
												}
											},
											apivm.h(
												"text",
												{class: "main-avm-list-item-child-text"},
												childItem.text
											),
											apivm.h("img", {
												src: "../../image/right_arrow.png",
												alt: "right_arrow",
												class: "main-avm-list-item-child-icon"
											})
										);
									})
								)
							);
						})
					)
				)
			);
		};

		return MainAvmIndex;
	})(Component);
	MainAvmIndex.css = {
		".main-avm-list": {
			width: "100%",
			height: "100%",
			background: "#fff",
			zIndex: "666"
		},
		".main-avm-list-tabs": {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			paddingTop: "23px",
			paddingBottom: "27px",
			boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)"
		},
		".main-avm-list-tabs-shadow": {
			boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.06)"
		},
		".main-avm-list-tab-item": {width: "auto", marginRight: "32px"},
		".main-avm-list-tab": {fontSize: "16px", color: "#666", fontWeight: "400"},
		".main-avm-list-tab-active": {
			fontSize: "16px",
			color: "#030303",
			fontWeight: "500"
		},
		".main-avm-list-tab-line": {
			width: "100%",
			height: "6px",
			background: "rgba(154, 194, 0, 0.5)",
			position: "absolute",
			top: "16px"
		},
		".main-avm-list-desc": {
			margin: "0 16px 10px",
			flexDirection: "row",
			alignItems: "center"
		},
		".main-avm-list-desc-icon": {width: "12px", height: "10px"},
		".main-avm-list-desc-icon-left": {
			position: "absolute",
			top: "7px",
			left: "0"
		},
		".main-avm-list-desc-icon-right": {
			position: "absolute",
			bottom: "7px",
			right: "0"
		},
		".main-avm-list-desc-text": {
			fontSize: "13px",
			color: "#aaa",
			fontWeight: "400",
			lineHeight: "24px",
			textIndent: "22px"
		},
		".main-avm-list-content": {flex: "1"},
		".main-avm-list-item": {borderBottom: "0.5px solid #eee"},
		".main-avm-list-item-title": {
			flexDirection: "row",
			alignItems: "center",
			padding: "18px 0"
		},
		".main-avm-list-item-title-line": {
			background: "#9ac200",
			width: "3px",
			height: "16px",
			flexShrink: "0"
		},
		".main-avm-list-item-text": {
			fontSize: "16px",
			color: "#333",
			fontWeight: "400",
			lineHeight: "22px",
			marginLeft: "16px",
			flex: "1"
		},
		".main-avm-list-item-icon": {
			width: "22px",
			height: "22px",
			marginRight: "16px",
			flexShrink: "0"
		},
		".main-avm-list-item-child-container": {background: "#f6f6f6"},
		".main-avm-list-item-child": {
			padding: "14px 0",
			margin: "0 24px",
			borderBottom: "0.5px solid #eee",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between"
		},
		".main-avm-list-item-child-text": {
			fontSize: "15px",
			color: "#333",
			lineHeight: "21px",
			fontWeight: "400"
		},
		".main-avm-list-item-child-icon": {width: "9.9px", height: "9.9px"}
	};
	apivm.define("main-avm-index", MainAvmIndex);

	var MainAvm = /*@__PURE__*/ (function(Component) {
		function MainAvm(props) {
			Component.call(this, props);
			this.data = {
				startY: 0,
				top: api.systemType === "ios" ? 260 : 240,
				isShowIndex: false,
				curTab: null,
				curChildTab: null
			};
			this.compute = {
				platform: function() {
					return api.platform;
				}
			};
		}

		if (Component) MainAvm.__proto__ = Component;
		MainAvm.prototype = Object.create(Component && Component.prototype);
		MainAvm.prototype.constructor = MainAvm;
		MainAvm.prototype.apiready = function() {
			api.setStatusBarStyle && api.setStatusBarStyle({style: "dark"});
		};
		MainAvm.prototype.handleTouchstart = function(e) {
			this.data.startY = e.detail.y;
		};
		MainAvm.prototype.handleTouchMove = function(e) {
			if (e.detail.y - this.data.startY < 0) {
				// 向上滑动
				this.data.top > 60
					? (this.data.top = this.data.top - 10)
					: this.enterAvmList();
			} else {
				// 向下滑动
				this.data.top < (api.systemType === "ios" ? 260 : 240) &&
					(this.data.top = this.data.top + 10);
			}
		};
		MainAvm.prototype.itemClick = function(item) {
			this.data.curTab = item.type;
			this.data.curChildTab = item.tab;
			this.enterAvmList(item);
		};
		MainAvm.prototype.enterAvmList = function(item) {
			this.data.isShowIndex = true;
			// const url = '../main-avm-index/main-avm-index.stml';
			// const {type, tab} = item || {};

			// if (this.platform === 'app') { // app端
			//   api.openWin({
			//     name: 'main-avm-index',
			//     url,
			//     pageParam: item ? {type, tab} : null
			// });
			// } else if (this.platform === 'mp') { // 小程序端
			//   wx.redirectTo({
			//     url: `${url}?type=${type}&tab=${tab}`
			//   })
			// }
		};
		MainAvm.prototype.handleHideIndexList = function() {
			this.data.isShowIndex = false;
			this.data.top = api.systemType === "ios" ? 260 : 240;
			this.data.curTab = null;
			this.data.curChildTab = null;
		};
		MainAvm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "main-avm-container"},
				!this.data.isShowIndex
					? apivm.h(
							"view",
							{class: "main-avm-top"},
							apivm.h("text", {class: "main-avm-top-title"}, "AVM PLAY"),
							apivm.h(
								"text",
								{class: "main-avm-top-sub-title"},
								"Application-View-Model"
							),
							apivm.h(
								"text",
								{class: "main-avm-top-desc"},
								"AVM是用友APICloud发布的一款专注移动端的高性能多端JavaScript框架，提供简洁的代码书写模式，编码一次可同时生成Android&iOS原生App、小程序和WebApp。"
							)
					  )
					: null,
				!this.data.isShowIndex
					? apivm.h(
							"view",
							{
								class: "main-avm-box",
								onTouchStart: this.handleTouchstart,
								onTouchMove: this.handleTouchMove,
								style: "top: " + this.data.top + "px"
							},
							apivm.h(
								"view",
								{class: "main-avm-drag"},
								apivm.h("text", {class: "main-avm-drag-inner"})
							),
							apivm.h(
								"scroll-view",
								{class: "main-avm-content", "scroll-y": true, "show-scrollbar": false},
								(Array.isArray(avmContentList)
									? avmContentList
									: Object.values(avmContentList)
								).map(function(item$1) {
									return apivm.h(
										"view",
										{
											key: item$1.tab,
											class: "main-avm-item",
											onClick: function() {
												return this$1.itemClick(item$1);
											}
										},
										apivm.h("text", {class: "main-avm-item-text"}, item$1.text),
										apivm.h("image", {
											class: "main-avm-item-icon",
											src: "../../image/" + item$1.icon + ".png",
											alt: item$1.icon
										})
									);
								})
							)
					  )
					: null,
				this.data.isShowIndex
					? apivm.h("main-avm-index", {
							onHandleHideIndexList: this.handleHideIndexList,
							curTab: this.data.curTab,
							curChildTab: this.data.curChildTab
					  })
					: null
			);
		};

		return MainAvm;
	})(Component);
	MainAvm.css = {
		".main-avm-container": {background: "#f6f6f6", width: "100%", height: "100%"},
		".main-avm-top": {
			width: "100%",
			height: "auto",
			padding: "36px 20px 24px",
			background: "url(../../image/avm_top_bg.png) no-repeat",
			backgroundSize: "100% 100%",
			backgroundPosition: "center center"
		},
		".main-avm-top-title": {
			fontSize: "18px",
			color: "#333",
			fontWeight: "500",
			lineHeight: "25px",
			paddingTop: "35px"
		},
		".main-avm-top-sub-title": {
			fontSize: "14px",
			color: "#333333",
			lineHeight: "19px",
			padding: "15px 0 24px",
			fontWeight: "400"
		},
		".main-avm-top-desc": {
			fontSize: "13px",
			fontWeight: "400",
			color: "#999999",
			lineHeight: "24px"
		},
		".main-avm-box": {
			flex: "1",
			zIndex: "999",
			position: "absolute",
			left: "0",
			right: "0",
			bottom: "0",
			padding: "0 16px",
			background: "#FFFFFF",
			boxShadow: "0px -2px 16px 0px rgba(0, 0, 0, 0.06)",
			borderRadius: "20px 20px 0px 0px"
		},
		".main-avm-content": {flex: "1"},
		".main-avm-drag": {
			width: "100%",
			paddingTop: "16px",
			paddingBottom: "16px",
			alignItems: "center"
		},
		".main-avm-drag-inner": {
			width: "30px",
			height: "3px",
			borderRadius: "2px",
			background: "#ccc",
			alignSelf: "center"
		},
		".main-avm-item": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			borderBottom: "0.5px solid #eee",
			padding: "18px 0",
			flexShrink: "0"
		},
		".main-avm-item-text": {
			fontSize: "16px",
			color: "#333",
			fontWeight: "400",
			lineHeight: "22px"
		},
		".main-avm-item-icon": {width: "22px", height: "22px"}
	};
	apivm.define("main-avm", MainAvm);
	apivm.render(apivm.h("main-avm", null), "body");
})();
