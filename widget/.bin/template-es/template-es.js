(function() {
	var HocTabBarEs = /*@__PURE__*/ (function(Component) {
		function HocTabBarEs(props) {
			Component.call(this, props);
			this.data = {
				curIndex: 0,
				tabList: this.props.list || [
					{
						icon: "../../image/es-home.png",
						selectIcon: "../../image/es-home-selected.png",
						msg: "首页"
					},

					{
						icon: "../../image/es-case.png",
						selectIcon: "../../image/es-case-selected.png",
						msg: "案例"
					},

					{
						icon: "../../image/es-join.png",
						selectIcon: "../../image/es-join-selected.png",
						msg: "加盟代理"
					}
				]
			};
		}

		if (Component) HocTabBarEs.__proto__ = Component;
		HocTabBarEs.prototype = Object.create(Component && Component.prototype);
		HocTabBarEs.prototype.constructor = HocTabBarEs;
		HocTabBarEs.prototype.apiready = function() {};
		HocTabBarEs.prototype.tabClick = function(index) {
			this.data.curIndex = index;
			this.fire("tabClick", index);
		};
		HocTabBarEs.prototype.render = function() {
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
							src: this$1.data.curIndex === index$1 ? item$1.selectIcon : item$1.icon
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

		return HocTabBarEs;
	})(Component);
	HocTabBarEs.css = {
		".tab-bar": {
			flexDirection: "row",
			padding: "3px 0",
			width: "100%",
			height: "60px",
			backgroundColor: "#fff"
		},
		".tab-item": {
			flex: "1",
			justifyContent: "space-around",
			alignItems: "center"
		},
		".tab-text": {fontSize: "11px", color: "#666", fontWeight: "400"},
		".tab-icon": {width: "25px !important", height: "25px"},
		".tab-text-active": {color: "#333", fontWeight: "500"}
	};
	apivm.define("hoc-tab-bar-es", HocTabBarEs);

	var TemplateEs = /*@__PURE__*/ (function(Component) {
		function TemplateEs(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateEs.__proto__ = Component;
		TemplateEs.prototype = Object.create(Component && Component.prototype);
		TemplateEs.prototype.constructor = TemplateEs;
		TemplateEs.prototype.apiready = function() {
			//like created
			this.openFrameGroup();
		};
		TemplateEs.prototype.tabClick = function(data) {
			this.setFrameGroupIndex(data.detail);
		};
		TemplateEs.prototype.setFrameGroupIndex = function(index) {
			api.setFrameGroupIndex({
				name: "main-template-es",
				index: index
			});
		};
		TemplateEs.prototype.openFrameGroup = function() {
			var this$1 = this;

			api.openFrameGroup(
				{
					name: "main-template-es",
					scrollEnabled: false,
					background: "#fff",
					rect: {
						matginTop: 0,
						marginBottom: 90
					},

					frames: [
						{
							name: "template-es-main",
							url: "../template-es-main/template-es-main.stml"
						},
						{
							name: "template-es-case",
							url: "../template-es-case/template-es-case.stml"
						},
						{
							name: "template-es-join",
							url: "../template-es-join/template-es-join.stml"
						}
					]
				},

				function(ret, err) {
					var index = ret.index;
					this$1.setFrameGroupIndex(index);
				}
			);
		};
		TemplateEs.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "template-es"},
				apivm.h(
					"view",
					{class: "es-tab-bar"},
					apivm.h("hoc-tab-bar-es", {onTabClick: this.tabClick})
				)
			);
		};

		return TemplateEs;
	})(Component);
	TemplateEs.css = {
		".template-es": {width: "100%", height: "100%", background: "#fff"},
		".es-tab-bar": {width: "100%", position: "absolute", bottom: "16px"}
	};
	apivm.define("template-es", TemplateEs);
	apivm.render(apivm.h("template-es", null), "body");
})();
