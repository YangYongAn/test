(function() {
	var HocTabBarOd = /*@__PURE__*/ (function(Component) {
		function HocTabBarOd(props) {
			Component.call(this, props);
			this.data = {
				curIndex: 0,
				tabList: this.props.tabList || [
					{
						icon: "../../image/template_od1.png",
						selectedIcon: "../../image/template_od1_select.png",
						msg: "首页"
					},

					{
						icon: "../../image/template_od2.png",
						selectedIcon: "../../image/template_od2_select.png",
						msg: "分类"
					},

					{
						icon: "../../image/template_od3.png",
						selectedIcon: "../../image/template_od3_select.png",
						msg: "购物车"
					},

					{
						icon: "../../image/template_od4.png",
						selectedIcon: "../../image/template_od4_select.png",
						msg: "我的"
					}
				]
			};
		}

		if (Component) HocTabBarOd.__proto__ = Component;
		HocTabBarOd.prototype = Object.create(Component && Component.prototype);
		HocTabBarOd.prototype.constructor = HocTabBarOd;
		HocTabBarOd.prototype.tabClick = function(index) {
			this.data.curIndex = index;
			this.fire("tabClick", index);
		};
		HocTabBarOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "tab-bar"},
				(Array.isArray(this.data.tabList)
					? this.data.tabList
					: Object.values(this.data.tabList)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							class: "tab-item",
							key: index$1,
							onClick: function() {
								return this$1.tabClick(index$1);
							}
						},
						apivm.h("image", {
							class: "tab-icon",
							src: this$1.data.curIndex === index$1 ? item$1.selectedIcon : item$1.icon
						}),
						apivm.h(
							"text",
							{
								class:
									"tab-text " +
									(this$1.data.curIndex === index$1 ? "tab-text-active" : "")
							},
							item$1.msg
						)
					);
				})
			);
		};

		return HocTabBarOd;
	})(Component);
	HocTabBarOd.css = {
		".tab-bar": {
			flexDirection: "row",
			justifyContent: "space-between",
			padding: "3px 0",
			width: "100%",
			height: "60px",
			backgroundColor: "#fff"
		},
		".tab-item": {
			width: "33%",
			flexDirection: "column",
			justifyContent: "space-between",
			alignItems: "center"
		},
		".tab-text": {fontSize: "11px", color: "#666", fontWeight: "400"},
		".tab-text-active": {color: "#333", fontWeight: "500"},
		".tab-icon": {width: "25px !important", height: "25px"}
	};
	apivm.define("hoc-tab-bar-od", HocTabBarOd);

	var TemplateOd = /*@__PURE__*/ (function(Component) {
		function TemplateOd(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateOd.__proto__ = Component;
		TemplateOd.prototype = Object.create(Component && Component.prototype);
		TemplateOd.prototype.constructor = TemplateOd;
		TemplateOd.prototype.apiready = function() {
			//like created
			this.openFrameGroup();
		};
		TemplateOd.prototype.tabClick = function(item) {
			this.setFrameGroupIndex(item.detail);
		};
		TemplateOd.prototype.setFrameGroupIndex = function(index) {
			api.setFrameGroupIndex({
				name: "main-template-od",
				index: index
			});
		};
		TemplateOd.prototype.openFrameGroup = function() {
			var this$1 = this;

			api.openFrameGroup(
				{
					name: "main-template-od",
					scrollEnabled: false,
					background: "#fff",
					rect: {
						matginTop: 0,
						marginBottom: 90
					},

					frames: [
						{
							name: "template-od-main",
							url: "../template-od-main/template-od-main.stml"
						},
						{
							name: "template-od-sort",
							url: "../template-od-sort/template-od-sort.stml"
						},
						{
							name: "template-od-cart",
							url: "../template-od-cart/template-od-cart.stml"
						},
						{
							name: "template-od-user",
							url: "../template-od-user/template-od-user.stml"
						}
					]
				},

				function(ret, err) {
					var index = ret.index;
					this$1.setFrameGroupIndex(index);
				}
			);
		};
		TemplateOd.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "template-od"},
				apivm.h(
					"view",
					{class: "od-tab-bar"},
					apivm.h("hoc-tab-bar-od", {onTabClick: this.tabClick})
				)
			);
		};

		return TemplateOd;
	})(Component);
	TemplateOd.css = {
		".template-od": {width: "100%", height: "100%", background: "#fff"},
		".od-tab-bar": {width: "100%", position: "absolute", bottom: "16px"}
	};
	apivm.define("template-od", TemplateOd);
	apivm.render(apivm.h("template-od", null), "body");
})();
