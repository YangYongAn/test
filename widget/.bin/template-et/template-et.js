(function() {
	var HocTabBarEt = /*@__PURE__*/ (function(Component) {
		function HocTabBarEt(props) {
			Component.call(this, props);
			this.data = {
				curTab: this.props.curTab !== undefined ? this.props.curTab : "index",
				tabList: this.props.tabList || [
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/e2eeef19cabf85214c89ab0dc8c9720f.png",
						activeIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/489dedc6acb0733479d99fb103d2a8c0.png",
						text: "首页",
						id: "index"
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/0cff8ae2601e81845b2265663e1b0055.png",
						activeIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/5d6297350ebac9433215d588f311e0ae.png",
						text: "预约课程",
						id: "course"
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/21ecd0b8aa98499fa0bb3534295480ee.png",
						activeIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6fbc0b9f6404895c6400d27261011ab1.png",
						text: "我的",
						id: "my"
					}
				]
			};
		}

		if (Component) HocTabBarEt.__proto__ = Component;
		HocTabBarEt.prototype = Object.create(Component && Component.prototype);
		HocTabBarEt.prototype.constructor = HocTabBarEt;
		HocTabBarEt.prototype.apiready = function() {};
		HocTabBarEt.prototype.tabClick = function(item) {
			this.data.curTab = item.id;
			this.fire("tabClick", item.id);
		};
		HocTabBarEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "a-tab-bar"},
				(Array.isArray(this.data.tabList)
					? this.data.tabList
					: Object.values(this.data.tabList)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{
							class: "a-tab-bar-item",
							key: item$1.id,
							onClick: function() {
								return this$1.tabClick(item$1);
							}
						},
						apivm.h("img", {
							src: item$1.id === this$1.data.curTab ? item$1.activeIcon : item$1.icon,
							alt: "icon",
							class: "a-tab-bar-icon"
						}),
						apivm.h(
							"text",
							{
								class:
									"a-tab-bar-text " +
									(item$1.id === this$1.data.curTab ? "a-tab-bar-text-active" : "")
							},
							item$1.text
						)
					);
				})
			);
		};

		return HocTabBarEt;
	})(Component);
	HocTabBarEt.css = {
		".a-tab-bar": {
			padding: "12px 0",
			flexShrink: "0",
			background: "#fff",
			flexDirection: "row",
			alignItems: "center"
		},
		".a-tab-bar-item": {
			flex: "1",
			alignItems: "center",
			textAlign: "center",
			justifyContent: "center"
		},
		".a-tab-bar-icon": {width: "20px", height: "20px", marginBottom: "12px"},
		".a-tab-bar-text": {fontSize: "12px", color: "#999"},
		".a-tab-bar-text-active": {fontSize: "12px", color: "#333", fontWeight: "500"}
	};
	apivm.define("hoc-tab-bar-et", HocTabBarEt);

	var TemplateEt = /*@__PURE__*/ (function(Component) {
		function TemplateEt(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateEt.__proto__ = Component;
		TemplateEt.prototype = Object.create(Component && Component.prototype);
		TemplateEt.prototype.constructor = TemplateEt;
		TemplateEt.prototype.apiready = function() {
			//like created
			this.openFrameGroup();
		};
		TemplateEt.prototype.tabClick = function(item) {
			var iInfo = {
				index: 0,
				course: 1,
				my: 2
			};

			api.setFrameGroupIndex({
				name: "main-template-et",
				index: iInfo[item.detail]
			});
		};
		TemplateEt.prototype.openFrameGroup = function() {
			api.openFrameGroup(
				{
					name: "main-template-et",
					scrollEnabled: false,
					background: "#fff",
					rect: {
						matginTop: 0,
						marginBottom: 90
					},

					frames: [
						{
							name: "template-et-home",
							url: "../template-et-home/template-et-home.stml"
						},
						{
							name: "template-et-course",
							url: "../template-et-course/template-et-course.stml"
						},
						{
							name: "template-et-user",
							url: "../template-et-user/template-et-user.stml"
						}
					]
				},

				function(ret, err) {
					var index = ret.index;
					api.setFrameGroupIndex({
						name: "main-template-et",
						index: index
					});
				}
			);
		};
		TemplateEt.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "template-et"},
				apivm.h(
					"view",
					{class: "et-tab-bar"},
					apivm.h("hoc-tab-bar-et", {onTabClick: this.tabClick})
				)
			);
		};

		return TemplateEt;
	})(Component);
	TemplateEt.css = {
		".template-et": {width: "100%", height: "100%", background: "#fff"},
		".et-tab-bar": {width: "100%", position: "absolute", bottom: "16px"}
	};
	apivm.define("template-et", TemplateEt);
	apivm.render(apivm.h("template-et", null), "body");
})();
