(function() {
	var TemplateFreAbout = /*@__PURE__*/ (function(Component) {
		function TemplateFreAbout(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateFreAbout.__proto__ = Component;
		TemplateFreAbout.prototype = Object.create(Component && Component.prototype);
		TemplateFreAbout.prototype.constructor = TemplateFreAbout;
		TemplateFreAbout.prototype.apiready = function() {};
		TemplateFreAbout.prototype.onLeftButton = function() {
			api.closeWin();
		};
		TemplateFreAbout.prototype.render = function() {
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
					apivm.h("text", {class: "nav-header-title"}, "关于我们"),
					apivm.h("view", null)
				),
				apivm.h(
					"view",
					{class: "top"},
					apivm.h("image", {class: "icon", src: "../../image/about.png"}),
					apivm.h("text", {class: "version"}, "当前版本：v1.0.0")
				),
				apivm.h(
					"view",
					{class: "bottom"},
					apivm.h("text", {class: "bottom-text"}, "Copyright @ 2014-2020")
				)
			);
		};

		return TemplateFreAbout;
	})(Component);
	TemplateFreAbout.css = {
		".main": {height: "100%", background: "#fff"},
		".nav-header": {
			backgroundColor: "#e3007f",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			height: "80px",
			boxSizing: "border-box",
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
		".nav-bar-left-img": {width: "11px", height: "16px"},
		".top": {alignItems: "center", height: "200px"},
		".icon": {
			width: "150px",
			height: "150px",
			marginTop: "10px",
			marginBottom: "5px"
		},
		".version": {color: "#444", fontSize: "14px"},
		".bottom": {
			alignItems: "center",
			position: "absolute",
			width: "100%",
			bottom: "20px"
		},
		".bottom-text": {color: "#444", fontSize: "12px", height: "30px"}
	};
	apivm.define("template-fre-about", TemplateFreAbout);
	apivm.render(apivm.h("template-fre-about", null), "body");
})();