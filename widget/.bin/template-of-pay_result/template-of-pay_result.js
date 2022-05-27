(function() {
	var TemplateOfPayResult = /*@__PURE__*/ (function(Component) {
		function TemplateOfPayResult(props) {
			Component.call(this, props);
		}

		if (Component) TemplateOfPayResult.__proto__ = Component;
		TemplateOfPayResult.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOfPayResult.prototype.constructor = TemplateOfPayResult;
		TemplateOfPayResult.prototype.next = function(index) {
			var tips = index === 1 ? "继续选购" : "查看订单";
			api.toast({
				msg: tips
			});
		};
		TemplateOfPayResult.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "page flex flex-center"},

				apivm.h("text", {class: "tips-text"}, "订单支付成功"),

				apivm.h(
					"view",
					{class: "btn-box"},
					apivm.h(
						"view",
						{
							class: "btn btn-main",
							onClick: function() {
								return this$1.next(1);
							}
						},
						apivm.h("text", {class: "btn-text btn-text-main"}, "继续选购")
					),
					apivm.h(
						"view",
						{
							class: "btn btn-sub",
							onClick: function() {
								return this$1.next(3);
							}
						},
						apivm.h("text", {class: "btn-text btn-text-sub"}, "查看订单")
					)
				),
				apivm.h("img", {
					class: "icon",
					src: "../../image/icon/icon-pay-result-success.png",
					alt: ""
				})
			);
		};

		return TemplateOfPayResult;
	})(Component);
	TemplateOfPayResult.css = {
		".page": {height: "100%", background: "#fff"},
		".flex-center": {
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center"
		},
		".icon": {width: "100px", height: "100px", position: "relative"},
		".tips-text": {fontSize: "18px", color: "#333", margin: "21px"},
		".btn-box": {
			width: "100%",
			margin: "105px 0",
			flexDirection: "row",
			justifyContent: "center"
		},
		".btn": {width: "42%", borderRadius: "4px"},
		".btn-main": {background: "#FE5760"},
		".btn-sub": {
			background: "#FFF",
			marginLeft: "10px",
			border: "1px solid #FE5760"
		},
		".btn-text": {
			color: "#FFFFFF",
			textAlign: "center",
			height: "44px",
			lineHeight: "44px",
			fontSize: "15px"
		},
		".btn-text-main": {color: "#FFF"},
		".btn-text-sub": {color: "#FE5760"}
	};
	apivm.define("template-of-pay_result", TemplateOfPayResult);
	apivm.render(apivm.h("template-of-pay_result", null), "body");
})();
