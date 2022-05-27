(function() {
	var TemplateFreCustomerservice = /*@__PURE__*/ (function(Component) {
		function TemplateFreCustomerservice(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateFreCustomerservice.__proto__ = Component;
		TemplateFreCustomerservice.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateFreCustomerservice.prototype.constructor = TemplateFreCustomerservice;
		TemplateFreCustomerservice.prototype.onLeftButton = function() {
			api.closeWin();
		};
		TemplateFreCustomerservice.prototype.sendMsg = function() {
			api.toast({
				msg: "发送!",
				location: "middle"
			});
		};
		TemplateFreCustomerservice.prototype.render = function() {
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
						apivm.h("image", {
							src: "../../image/back.png",
							mode: "widthFix",
							class: "nav-bar-left-img"
						})
					),
					apivm.h("text", {class: "nav-header-title"}, "客服"),
					apivm.h("view", null)
				),
				apivm.h(
					"view",
					{class: "container"},
					apivm.h(
						"scroll-view",
						{
							class: "listView",
							id: "listView",
							"scroll-y": "true",
							"show-scrollbar": false
						},
						apivm.h(
							"view",
							{class: "cellSelf"},
							apivm.h(
								"view",
								{class: "msg-input contentBgSelf"},
								apivm.h("text", {class: "text"}, "收到货后，发现产品存在问题如何处理？")
							),

							apivm.h("img", {class: "icon", src: "../../image/user.png"})
						),
						apivm.h(
							"view",
							{class: "cellUser"},
							apivm.h("img", {class: "icon", src: "../../image/missfresh.png"}),

							apivm.h(
								"view",
								{class: "msg-input contentBgUser"},
								apivm.h(
									"text",
									{class: "text"},
									"亲，收到快递时请当面验收，如产品存在品质问题请尽快联系在线客服（收货24小时内），并拍照上传，我们会竭尽全力为您解决问题。"
								)
							)
						)
					),
					apivm.h(
						"view",
						{class: "input-bar"},
						apivm.h("textarea", {
							id: "input",
							disabled: true,
							class: "input",
							"auto-height": true,
							"show-confirm-bar": false,
							onconfirm: this.sendMsg
						}),
						apivm.h(
							"text",
							{
								class: "sendBtn",
								onclick: function(event) {
									if (this$1.sendMsg) {
										this$1.sendMsg();
									} else {
										sendMsg();
									}
								}
							},
							"发送"
						)
					)
				)
			);
		};

		return TemplateFreCustomerservice;
	})(Component);
	TemplateFreCustomerservice.css = {
		".main": {height: "100%", backgroundColor: "#fdf3cf"},
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
		".container": {flex: "1", margin: "12px"},
		".listView": {flex: "1"},
		".cellUser": {
			position: "relative",
			flexDirection: "row",
			paddingBottom: "15px"
		},
		".cellSelf": {
			position: "relative",
			display: "flex",
			flexDirection: "row",
			paddingBottom: "15px",
			justifyContent: "flex-end"
		},
		".icon": {
			flexShrink: "0",
			width: "40px",
			height: "40px",
			margin: "0 10px",
			borderRadius: "20px"
		},
		".leftArrow": {
			zIndex: "999",
			position: "absolute",
			left: "40px",
			width: "0",
			height: "0",
			border: "10px solid transparent",
			borderRightColor: "#fff",
			top: "15px"
		},
		".rightArrow": {
			zIndex: "1000",
			position: "absolute",
			right: "40px",
			width: "0",
			height: "0",
			border: "10px solid transparent",
			borderLeftColor: "#ffa5d8",
			top: "15px"
		},
		".contentBgUser": {backgroundColor: "#fff"},
		".msg-input": {width: "260px", padding: "10px", borderRadius: "8px"},
		".contentBgSelf": {backgroundColor: "#ffa5d8"},
		".text": {
			minWidth: "20px",
			fontSize: "14px",
			lineHeight: "20px",
			color: "#000"
		},
		".input-bar": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			width: "100%",
			borderTop: "0.5px solid #ddd"
		},
		".input": {
			background: "#fff",
			flex: "1",
			height: "40px",
			minHeight: "40px",
			maxHeight: "120px",
			padding: "8px",
			margin: "7px 10px",
			border: "none",
			borderRadius: "4px",
			boxSizing: "border-box"
		},
		".sendBtn": {
			marginRight: "10px",
			height: "40px",
			lineHeight: "40px",
			border: "1px solid #dfdfdf",
			borderRadius: "4px",
			padding: "0 20px",
			color: "black",
			textAlign: "center",
			background: "#f8f8f8"
		},
		".sendBtn:active": {opacity: "0.7"}
	};
	apivm.define("template-fre-customerservice", TemplateFreCustomerservice);
	apivm.render(apivm.h("template-fre-customerservice", null), "body");
})();
