(function() {
	var TemplateFreBalancehelp = /*@__PURE__*/ (function(Component) {
		function TemplateFreBalancehelp(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateFreBalancehelp.__proto__ = Component;
		TemplateFreBalancehelp.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateFreBalancehelp.prototype.constructor = TemplateFreBalancehelp;
		TemplateFreBalancehelp.prototype.apiready = function() {};
		TemplateFreBalancehelp.prototype.onLeftButton = function() {
			api.closeWin();
		};
		TemplateFreBalancehelp.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "余额帮助"),
					apivm.h("view", null)
				),
				apivm.h(
					"view",
					{class: "help-content"},
					apivm.h(
						"text",
						{class: "help-text", style: "padding-bottom: 4px;"},
						"关于余额"
					),
					apivm.h(
						"text",
						{class: "help-text"},
						"1）余额是可以在应用内进行支付的货币；"
					),
					apivm.h(
						"text",
						{class: "help-text"},
						"2）可以通过每日签到、自助充值、卡卷兑换、红包分享等方式获得；"
					),
					apivm.h("text", {class: "help-text"}, "3）永久有效，不支持提现。")
				)
			);
		};

		return TemplateFreBalancehelp;
	})(Component);
	TemplateFreBalancehelp.css = {
		".main": {
			width: "100%",
			height: "100%",
			paddingBottom: "16px",
			background: "#fff"
		},
		".text": {color: "#444", margin: "10px"},
		".nav-header": {
			backgroundColor: "#e3007f",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			height: "80px",
			paddingTop: "35px"
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
		".help-content": {padding: "16px"},
		".help-text": {fontSize: "14px", color: "#666", lineHeight: "24px"}
	};
	apivm.define("template-fre-balancehelp", TemplateFreBalancehelp);
	apivm.render(apivm.h("template-fre-balancehelp", null), "body");
})();
