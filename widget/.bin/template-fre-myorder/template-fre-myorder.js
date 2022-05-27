(function() {
	var TemplateFreMyorder = /*@__PURE__*/ (function(Component) {
		function TemplateFreMyorder(props) {
			Component.call(this, props);
			this.data = {
				menuList: [
					{
						title: "待付款",
						icon: "../../image/myorder_0.png",
						selectedIcon: "../../image/myorder_0_select.png"
					},
					{
						title: "待收货",
						icon: "../../image/myorder_1.png",
						selectedIcon: "../../image/myorder_1_select.png"
					},
					{
						title: "已完成",
						icon: "../../image/myorder_2.png",
						selectedIcon: "../../image/myorder_2_select.png"
					}
				],

				selectedIndex: 0
			};
		}

		if (Component) TemplateFreMyorder.__proto__ = Component;
		TemplateFreMyorder.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateFreMyorder.prototype.constructor = TemplateFreMyorder;
		TemplateFreMyorder.prototype.onLeftButton = function() {
			api.closeWin();
		};
		TemplateFreMyorder.prototype.fnSetFrameGroupIndex = function(index) {
			if (this.data.selectedIndex == index) {
				return;
			}
			this.data.selectedIndex = index;
		};
		TemplateFreMyorder.prototype.onchange = function(e) {
			this.data.selectedIndex = e.detail.current;
		};
		TemplateFreMyorder.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "main"},
				apivm.h(
					"view",
					{class: "nav-header"},
					apivm.h(
						"view",
						{class: "nav-header-button nav-left-button", onClick: this.onLeftButton},
						apivm.h("img", {
							src: "../../image/back.png",
							mode: "widthFix",
							class: "nav-bar-left-img"
						})
					),
					apivm.h("text", {class: "nav-header-title"}, "我的订单"),
					apivm.h("view", null)
				),
				apivm.h(
					"view",
					{class: "nav"},
					apivm.h(
						"view",
						{class: "menu"},
						apivm.h(
							"view",
							{
								class: "item item-selected",
								"data-index": 0,
								onClick: function() {
									return this$1.fnSetFrameGroupIndex(0);
								}
							},
							apivm.h("img", {
								class: "radio",
								src: "../../image/myorder_0_select.png"
							}),
							apivm.h("text", {class: "item-title item-title-selected"}, "待付款")
						)
					),
					apivm.h(
						"view",
						{class: "menu"},
						apivm.h(
							"view",
							{
								class: "item",
								"data-index": 1,
								onClick: function() {
									return this$1.fnSetFrameGroupIndex(1);
								}
							},
							apivm.h("img", {class: "radio", src: "../../image/myorder_1.png"}),
							apivm.h("text", {class: "item-title"}, "待收货")
						)
					),
					apivm.h(
						"view",
						{class: "menu"},
						apivm.h(
							"view",
							{
								class: "item",
								"data-index": 2,
								onClick: function() {
									return this$1.fnSetFrameGroupIndex(2);
								}
							},
							apivm.h("img", {class: "radio", src: "../../image/myorder_2.png"}),
							apivm.h("text", {class: "item-title"}, "已完成")
						)
					)
				),
				apivm.h(
					"swiper",
					{
						class: "swiper",
						current: this.data.selectedIndex,
						onchange: this.onchange
					},
					apivm.h(
						"swiper-item",
						null,
						apivm.h(
							"view",
							{class: "myorderframe-main"},
							apivm.h(
								"view",
								{class: "myorderframe-empty"},
								apivm.h("img", {
									class: "empty-img",
									src: "../../image/myorder_empty.png"
								})
							)
						)
					)
				)
			);
		};

		return TemplateFreMyorder;
	})(Component);
	TemplateFreMyorder.css = {
		".main": {width: "100%", height: "100%", paddingBottom: "16px"},
		".nav-header": {
			backgroundColor: "#e3007f",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			height: "80px",
			paddingTop: "35px",
			flexShrink: "0"
		},
		".nav-header-title": {color: "#fff", fontSize: "18px", fontWeight: "bold"},
		".nav-header-button": {
			flexDirection: "row",
			alignItems: "center",
			minWidth: "44px",
			height: "100%"
		},
		".nav-header-button:active": {opacity: "0.5"},
		".nav-left-button": {justifyContent: "flex-start", paddingLeft: "10px"},
		".nav-bar-left-img": {width: "11px"},
		".nav-header-text": {color: "#fff", fontSize: "17px"},
		".nav": {
			flexDirection: "row",
			width: "100%",
			height: "40px",
			backgroundColor: "#f0f0f0"
		},
		".menu": {flex: "1", alignItems: "center"},
		".item": {
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			borderBottom: "2px solid #f0f0f0"
		},
		".item-selected": {borderBottom: "2px solid #e3007f"},
		".radio": {width: "18px", height: "14px", marginRight: "8px"},
		".item-title": {color: "#444", fontSize: "14px"},
		".item-title-selected": {color: "#e3007f"},
		".swiper": {flex: "1"},
		".myorderframe-main": {
			width: "100%",
			height: "100%",
			backgroundColor: "#fff"
		},
		".myorderframe-list": {width: "100%", height: "100%"},
		".myorderframe-empty": {alignItems: "center", width: "100%", height: "100%"},
		".empty-img": {width: "118px", height: "87px", marginTop: "50px"}
	};
	apivm.define("template-fre-myorder", TemplateFreMyorder);
	apivm.render(apivm.h("template-fre-myorder", null), "body");
})();
