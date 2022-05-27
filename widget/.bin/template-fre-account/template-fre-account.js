(function() {
	var TemplateFreAccount = /*@__PURE__*/ (function(Component) {
		function TemplateFreAccount(props) {
			Component.call(this, props);
			this.data = {
				selectedIndex: 0
			};
		}

		if (Component) TemplateFreAccount.__proto__ = Component;
		TemplateFreAccount.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateFreAccount.prototype.constructor = TemplateFreAccount;
		TemplateFreAccount.prototype.onLeftButton = function() {
			api.closeWin();
		};
		TemplateFreAccount.prototype.onRightButton = function() {
			api.openWin({
				name: "balancehelp",
				url: "../template-fre-balancehelp/template-fre-balancehelp.stml"
			});
		};
		TemplateFreAccount.prototype.fnSetFrameGroupIndex = function(index) {
			if (this.data.selectedIndex == index) {
				return;
			}
			this.data.selectedIndex = index;
			api.toast({
				msg: "点击menu菜单" + index,
				location: "middle"
			});
		};
		TemplateFreAccount.prototype.render = function() {
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
					apivm.h(
						"view",
						{
							class: "nav-header-button nav-right-button",
							onClick: this.onRightButton
						},
						apivm.h("image", {
							src: "../../image/accounthelp.png",
							class: "nav-bar-right-img",
							mode: "widthFix"
						})
					)
				),
				apivm.h(
					"view",
					{class: "account-info"},
					apivm.h("text", {class: "account-info-desc"}, "生鲜余额"),
					apivm.h("text", {class: "account-info-detail"}, "￥0")
				),
				apivm.h(
					"view",
					{class: "nav-menu"},
					apivm.h(
						"view",
						{
							class: "item item-selected",
							onClick: function() {
								return this$1.fnSetFrameGroupIndex(0);
							}
						},
						apivm.h("image", {
							class: "radio",
							src: "../../image/account_0_select.png"
						}),
						apivm.h("text", {class: "item-title item-title-selected"}, "充值有礼")
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnSetFrameGroupIndex(1);
							}
						},
						apivm.h("image", {class: "radio", src: "../../image/account_1.png"}),
						apivm.h("text", {class: "item-title"}, "卡券兑换")
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnSetFrameGroupIndex(2);
							}
						},
						apivm.h("image", {class: "radio", src: "../../image/account_2.png"}),
						apivm.h("text", {class: "item-title"}, "账单记录")
					)
				),
				apivm.h(
					"scroll-view",
					{class: "recharge-main", "scroll-y": "true", "show-scrollbar": false},
					apivm.h(
						"view",
						{class: "recharge-container"},
						apivm.h(
							"view",
							{class: "recharge-item"},
							apivm.h(
								"view",
								{class: "recharge-top"},
								apivm.h("image", {
									class: "bg-img",
									src: "../../image/recharge_top.png"
								}),
								apivm.h(
									"view",
									{class: "recharge-tag"},
									apivm.h("image", {
										class: "bg-img",
										src: "../../image/recharge_tag.png"
									}),
									apivm.h("text", {class: "recharge-tag-text"}, "充就送")
								),
								apivm.h("text", {class: "recharge-price"}, "499￥"),
								apivm.h("text", {class: "recharge-desc"}, "另送50元")
							),
							apivm.h(
								"view",
								{class: "recharge-bottom"},
								apivm.h("image", {
									class: "bg-img",
									src: "../../image/recharge_bottom.png"
								}),
								apivm.h(
									"view",
									{class: "recharge-buttonBg"},
									apivm.h("image", {
										class: "bg-img",
										src: "../../image/recharge_button.png"
									}),
									apivm.h("text", {class: "recharge-button"}, "购买")
								)
							)
						)
					)
				)
			);
		};

		return TemplateFreAccount;
	})(Component);
	TemplateFreAccount.css = {
		".main": {width: "100%", height: "100%", paddingBottom: "16px"},
		".nav-header": {
			backgroundColor: "#e3007f",
			display: "flex",
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
		".nav-right-button": {justifyContent: "flex-end", paddingRight: "10px"},
		".nav-bar-right-img": {width: "20px", height: "20px"},
		".nav-header-text": {color: "#fff", fontSize: "17px"},
		".account-info": {
			justifyContent: "center",
			alignItems: "center",
			height: "110px",
			backgroundColor: "#e3007f"
		},
		".account-info-desc": {fontSize: "13px", color: "#fff"},
		".account-info-detail": {
			fontSize: "20px",
			color: "#fff",
			fontWeight: "bold",
			marginTop: "8px"
		},
		".nav-menu": {
			display: "flex",
			flexDirection: "row",
			width: "100%",
			height: "40px",
			backgroundColor: "#f0f0f0",
			alignItems: "center"
		},
		".item": {
			flex: "1",
			display: "flex",
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
		".recharge-main": {flex: "1", backgroundColor: "#fff", padding: "16px 12px"},
		".recharge-container": {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "space-between"
		},
		".recharge-item": {width: "150px", height: "180px", margin: "5px"},
		".recharge-top": {flex: "4"},
		".bg-img": {position: "absolute", width: "100%", height: "100%"},
		".recharge-tag": {
			justifyContent: "center",
			alignItems: "center",
			position: "absolute",
			top: "0",
			right: "0",
			width: "50px",
			height: "50px"
		},
		".recharge-tag-text": {
			position: "absolute",
			top: "11px",
			right: "0",
			color: "#ff4401",
			fontSize: "12px",
			textAlign: "center",
			transformOrigin: "center center",
			transform: "rotate(45deg)",
			zIndex: "1000"
		},
		".recharge-price": {
			margin: "20px 10px 0 20px",
			color: "#fff",
			fontSize: "30px",
			fontWeight: "bolder",
			zIndex: "999"
		},
		".recharge-desc": {
			margin: "20px 10px 0 20px",
			fontSize: "20px",
			color: "#fff",
			zIndex: "999"
		},
		".recharge-bottom": {
			flex: "1",
			justifyContent: "center",
			alignItems: "center"
		},
		".recharge-buttonBg": {
			justifyContent: "center",
			alignItems: "center",
			width: "70%",
			height: "55%"
		},
		".recharge-button": {
			width: "100%",
			textAlign: "center",
			color: "#fff",
			fontSize: "14px",
			zIndex: "999"
		},
		".recharge-button:active": {opacity: "0.7"}
	};
	apivm.define("template-fre-account", TemplateFreAccount);
	apivm.render(apivm.h("template-fre-account", null), "body");
})();
