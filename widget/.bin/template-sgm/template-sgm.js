(function() {
	var HocTabBarSgm = /*@__PURE__*/ (function(Component) {
		function HocTabBarSgm(props) {
			Component.call(this, props);
			this.data = {
				curTab: this.props.curTab !== undefined ? this.props.curTab : "index",
				tabBarList: this.props.tabBarList || [
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/795d0acd5ae4309205c4b5ab275f9eed.png",
						selectedIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/aee091cbfd832e4ba13ef3830aac9d82.png",
						text: "首页",
						value: "index"
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/0f8f4afc96a56175b932e93f6e9ec74f.png",
						selectedIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f2481f239dc27b487fe542ad539e8714.png",
						text: "分类",
						value: "classify"
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/16f5e7e5fac80d18a6400462bc4d4736.png",
						selectedIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c1d45623b04620c901cef7045d3c3fb6.png",
						text: "我的",
						value: "my"
					}
				]
			};
		}

		if (Component) HocTabBarSgm.__proto__ = Component;
		HocTabBarSgm.prototype = Object.create(Component && Component.prototype);
		HocTabBarSgm.prototype.constructor = HocTabBarSgm;
		HocTabBarSgm.prototype.apiready = function() {};
		HocTabBarSgm.prototype.tabClick = function(item, index) {
			this.data.curTab = item.value;
			this.fire("tabClick", {item: item, index: index});
		};
		HocTabBarSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "tab-bar"},
				(Array.isArray(this.data.tabBarList)
					? this.data.tabBarList
					: Object.values(this.data.tabBarList)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							class: "tab-bar-item",
							onClick: function() {
								return this$1.tabClick(item$1, index$1);
							}
						},
						apivm.h("img", {
							class: "tab-bar-item-icon",
							src:
								this$1.data.curTab === item$1.value ? item$1.selectedIcon : item$1.icon,
							alt: "tab-bar-icon"
						}),
						apivm.h(
							"text",
							{
								class:
									"tab-bar-item-text " +
									(this$1.data.curTab === item$1.value ? "tab-bar-item-text-active" : "")
							},
							item$1.text
						)
					);
				})
			);
		};

		return HocTabBarSgm;
	})(Component);
	HocTabBarSgm.css = {
		".tab-bar": {
			width: "100%",
			height: "54px",
			flexDirection: "row",
			alignItems: "center",
			background: "#fff"
		},
		".tab-bar-item": {flex: "1", alignItems: "center", justifyContent: "center"},
		".tab-bar-item-icon": {width: "24px", height: "24px", marginBottom: "6px"},
		".tab-bar-item-text": {color: "#aaa", fontSize: "10px"},
		".tab-bar-item-text-active": {color: "#339DFF"}
	};
	apivm.define("hoc-tab-bar-sgm", HocTabBarSgm);

	var TemplateSgm = /*@__PURE__*/ (function(Component) {
		function TemplateSgm(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateSgm.__proto__ = Component;
		TemplateSgm.prototype = Object.create(Component && Component.prototype);
		TemplateSgm.prototype.constructor = TemplateSgm;
		TemplateSgm.prototype.apiready = function() {
			//like created
			this.openFrameGroup();
		};
		TemplateSgm.prototype.tabClick = function(data) {
			this.setFrameGroupIndex(data.detail.index);
		};
		TemplateSgm.prototype.setFrameGroupIndex = function(index) {
			api.setFrameGroupIndex({
				name: "main-template-sgm",
				index: index
			});
		};
		TemplateSgm.prototype.openFrameGroup = function() {
			var this$1 = this;

			api.openFrameGroup(
				{
					name: "main-template-sgm",
					scrollEnabled: false,
					background: "#fff",
					rect: {
						matginTop: 0,
						marginBottom: 70
					},

					frames: [
						{
							name: "template-sgm-main",
							url: "../template-sgm-main/template-sgm-main.stml"
						},
						{
							name: "template-sgm-sort",
							url: "../template-sgm-sort/template-sgm-sort.stml"
						},
						{
							name: "template-sgm-personal_data",
							url: "../template-sgm-personal_data/template-sgm-personal_data.stml"
						}
					]
				},

				function(ret, err) {
					var index = ret.index;
					this$1.setFrameGroupIndex(index);
				}
			);
		};
		TemplateSgm.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "template-sgm"},
				apivm.h(
					"view",
					{class: "sgm-tab-bar"},
					apivm.h("hoc-tab-bar-sgm", {onTabClick: this.tabClick})
				)
			);
		};

		return TemplateSgm;
	})(Component);
	TemplateSgm.css = {
		".template-sgm": {width: "100%", height: "100%", background: "#fff"},
		".sgm-tab-bar": {width: "100%", position: "absolute", bottom: "16px"}
	};
	apivm.define("template-sgm", TemplateSgm);
	apivm.render(apivm.h("template-sgm", null), "body");
})();
