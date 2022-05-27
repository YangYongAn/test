(function() {
	var TemplateFreMessage = /*@__PURE__*/ (function(Component) {
		function TemplateFreMessage(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateFreMessage.__proto__ = Component;
		TemplateFreMessage.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateFreMessage.prototype.constructor = TemplateFreMessage;
		TemplateFreMessage.prototype.onLeftButton = function() {
			api.closeWin();
		};
		TemplateFreMessage.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "main"},
				apivm.h(
					"view",
					{class: "nav-header"},
					apivm.h(
						"view",
						{class: "nav-header-button nav-left-button", onClick: this.onLeftButton},
						apivm.h("image", {
							src: "../../image/back.png",
							mode: "widthFix",
							class: "nav-bar-left-img"
						})
					),
					apivm.h("text", {class: "nav-header-title"}, "消息"),
					apivm.h("view", null)
				),
				apivm.h(
					"scroll-view",
					{class: "listView", "scroll-y": "true"},
					apivm.h(
						"view",
						{class: "cell"},
						apivm.h(
							"view",
							{class: "container"},
							apivm.h(
								"view",
								{class: "top"},
								apivm.h("image", {
									class: "icon",
									src: "../../image/icon_user_coupon.png"
								}),
								apivm.h("text", {class: "type"}, "优惠提醒")
							),
							apivm.h(
								"text",
								{class: "content"},
								"【生鲜电商】尊敬的客户，您领到一张新的优惠券。快去看看吧~！"
							),
							apivm.h("text", {class: "time"}, "2020-05-26 11:30:33")
						)
					),
					apivm.h(
						"view",
						{class: "cell"},
						apivm.h(
							"view",
							{class: "container"},
							apivm.h(
								"view",
								{class: "top"},
								apivm.h("image", {
									class: "icon",
									src: "../../image/icon_user_coupon.png"
								}),
								apivm.h("text", {class: "type"}, "优惠提醒")
							),
							apivm.h(
								"text",
								{class: "content"},
								"【生鲜电商】尊敬的客户，您领到一张新的优惠券。快去看看吧~！"
							),
							apivm.h("text", {class: "time"}, "2020-05-26 11:30:33")
						)
					)
				)
			);
		};

		return TemplateFreMessage;
	})(Component);
	TemplateFreMessage.css = {
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
		".listView": {flex: "1", backgroundColor: "#eee"},
		".container": {marginBottom: "8px", padding: "8px", backgroundColor: "#fff"},
		".container:active": {opacity: "0.7"},
		".top": {flexDirection: "row", alignItems: "center"},
		".icon": {width: "17px", height: "13px"},
		".type": {
			color: "#888",
			fontSize: "13px",
			height: "17px",
			lineHeight: "17px",
			marginLeft: "2px"
		},
		".content": {color: "#444", fontSize: "14px", marginTop: "8px"},
		".time": {color: "#444", fontSize: "10px", marginTop: "8px"}
	};
	apivm.define("template-fre-message", TemplateFreMessage);
	apivm.render(apivm.h("template-fre-message", null), "body");
})();
