(function() {
	var HocPayFooterBtnSgm = /*@__PURE__*/ (function(Component) {
		function HocPayFooterBtnSgm(props) {
			Component.call(this, props);
			this.data = {
				buyNum: this.props.buyNum !== undefined ? this.props.buyNum : 10,
				payPrice: this.props.payPrice !== undefined ? this.props.payPrice : 132
			};
		}

		if (Component) HocPayFooterBtnSgm.__proto__ = Component;
		HocPayFooterBtnSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocPayFooterBtnSgm.prototype.constructor = HocPayFooterBtnSgm;
		HocPayFooterBtnSgm.prototype.apiready = function() {};
		HocPayFooterBtnSgm.prototype.fnGoPay = function() {
			this.fire("fnGoPay");
		};
		HocPayFooterBtnSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "pay-footer"},
				apivm.h("text", {class: "pay-footer-zi"}, "共", this.data.buyNum, "件"),
				apivm.h("text", {class: "pay-footer-rzi"}, "应付："),
				apivm.h("text", {class: "pay-footer-szi"}, "¥"),
				apivm.h("text", {class: "pay-footer-mzi"}, this.data.payPrice),
				apivm.h(
					"text",
					{
						class: "pay-footer-btn",
						onclick: function(event) {
							if (this$1.fnGoPay) {
								this$1.fnGoPay(event);
							} else {
								fnGoPay(event);
							}
						}
					},
					"去支付"
				)
			);
		};

		return HocPayFooterBtnSgm;
	})(Component);
	HocPayFooterBtnSgm.css = {
		".pay-footer": {
			background: "#fff",
			padding: "12px 0",
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center"
		},
		".pay-footer-zi": {fontSize: "13px", marginRight: "10px", color: "#999999"},
		".pay-footer-rzi": {fontSize: "14px", color: "#333333"},
		".pay-footer-szi": {fontSize: "14px", color: "#fe5c00"},
		".pay-footer-mzi": {fontSize: "18px", color: "#fe5c00", marginRight: "15px"},
		".pay-footer-btn": {
			width: "100px",
			height: "40px",
			borderRadius: "2px",
			marginRight: "15px",
			lineHeight: "40px",
			textAlign: "center",
			fontSize: "16px",
			backgroundColor: "#339dff",
			color: "white"
		},
		".pay-footer-btn:active": {opacity: "0.7"}
	};
	apivm.define("hoc-pay-footer-btn-sgm", HocPayFooterBtnSgm);

	var HocPinRulesSgm = /*@__PURE__*/ (function(Component) {
		function HocPinRulesSgm(props) {
			Component.call(this, props);
			this.data = {
				content:
					this.props.content !== undefined
						? this.props.content
						: '<p style="color: #999; font-size: 12px;">1、24小时内没有拼团成功，自动取消订单</p><p style="color: #999; font-size: 12px;">2、拼团成功平台会在48小时发货</p><p style="color: #999; font-size: 12px;">3、拼团成功的不能取消订单！</p>'
			};
		}

		if (Component) HocPinRulesSgm.__proto__ = Component;
		HocPinRulesSgm.prototype = Object.create(Component && Component.prototype);
		HocPinRulesSgm.prototype.constructor = HocPinRulesSgm;
		HocPinRulesSgm.prototype.apiready = function() {};
		HocPinRulesSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "pintuan-rules"},
				apivm.h("text", {class: "pintuan-rules-title"}, "拼团规则"),
				apivm.h(
					"view",
					{class: "pintuan-rules-text"},
					apivm.h("rich-text", {nodes: this.data.content})
				)
			);
		};

		return HocPinRulesSgm;
	})(Component);
	HocPinRulesSgm.css = {
		".pintuan-rules": {background: "#f8f8f8", padding: "15px"},
		".pintuan-rules-title": {
			fontSize: "14px",
			marginBottom: "15px",
			color: "#6c7279"
		},
		".pintuan-rules-text": {margin: "0 15px"}
	};
	apivm.define("hoc-pin-rules-sgm", HocPinRulesSgm);

	var HocFormListSgm = /*@__PURE__*/ (function(Component) {
		function HocFormListSgm(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.formList || [
					{
						label: "拼团人数",
						text: "3人",
						id: "11"
					},
					{
						label: "商品金额",
						text: "￥120",
						id: "22"
					},
					{
						label: "邮费",
						text: "￥0",
						id: "33"
					}
				]
			};
		}

		if (Component) HocFormListSgm.__proto__ = Component;
		HocFormListSgm.prototype = Object.create(Component && Component.prototype);
		HocFormListSgm.prototype.constructor = HocFormListSgm;
		HocFormListSgm.prototype.apiready = function() {};
		HocFormListSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "form-list"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							key: item$1.id,
							class:
								"form-list-item " +
								(index$1 === this$1.data.list.length - 1
									? "form-list-item-nobottom-border"
									: "")
						},
						apivm.h("text", {class: "form-list-item-left"}, item$1.label),
						apivm.h("text", {class: "form-list-item-right"}, item$1.text)
					);
				})
			);
		};

		return HocFormListSgm;
	})(Component);
	HocFormListSgm.css = {
		".form-list": {
			width: "100%",
			background: "#fff",
			padding: "0 16px",
			marginBottom: "10px"
		},
		".form-list-item": {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			padding: "16px 0",
			borderBottom: "0.5px solid #e8e8e8"
		},
		".form-list-item-nobottom-border": {borderBottom: "none"},
		".form-list-item-left": {
			fontSize: "16px",
			color: "#393f44",
			width: "100px",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		},
		".form-list-item-right": {
			fontSize: "14px",
			color: "#979ea6",
			flex: "1",
			marginLeft: "8px",
			textAlign: "right",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		}
	};
	apivm.define("hoc-form-list-sgm", HocFormListSgm);

	var HocOrderGoodsListSgm = /*@__PURE__*/ (function(Component) {
		function HocOrderGoodsListSgm(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						title: "测血压手环智能心率心脏血氧运动量体温定位",
						image:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/2fffadde6135dda7de6c7567a461c5af.png",
						price: 30.9,
						delprice: 50,
						key: "红色",
						buynum: 1,
						act: "tuan"
					}
				]
			};
		}

		if (Component) HocOrderGoodsListSgm.__proto__ = Component;
		HocOrderGoodsListSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocOrderGoodsListSgm.prototype.constructor = HocOrderGoodsListSgm;
		HocOrderGoodsListSgm.prototype.onclick = function(item) {
			this.fire("goodClick", item);
		};
		HocOrderGoodsListSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "order-goods-page"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{
							class: "order-goods-item",
							onClick: function() {
								return this$1.onclick(item$1);
							}
						},
						apivm.h("image", {class: "order-goods-img", src: item$1.image}),
						apivm.h(
							"view",
							{class: "order-goods-right"},
							apivm.h("text", {class: "order-goods-title"}, item$1.title),
							apivm.h(
								"view",
								{class: "order-goods-guige-box"},
								apivm.h("text", {class: "order-goods-guige"}, item$1.key || "默认规格"),
								apivm.h("text", {class: "order-goods-num"}, "x", item$1.buynum)
							),
							apivm.h(
								"view",
								{class: "order-goods-bottom"},
								apivm.h("text", {class: "order-goods-price"}, "¥ ", item$1.price)
							)
						)
					);
				})
			);
		};

		return HocOrderGoodsListSgm;
	})(Component);
	HocOrderGoodsListSgm.css = {
		".order-goods-page": {backgroundColor: "white", marginBottom: "10px"},
		".order-goods-item": {
			flexDirection: "row",
			paddingBottom: "15px",
			margin: "15px 15px 0",
			borderBottom: "1px solid #f8f8f8"
		},
		".order-goods-img": {
			width: "60px",
			height: "60px",
			marginRight: "12px",
			borderRadius: "4px"
		},
		".order-goods-right": {alignContent: "center", flex: "1"},
		".order-goods-title": {fontSize: "14px", color: "#333333"},
		".order-goods-guige-box": {
			flexDirection: "row",
			justifyContent: "space-between",
			marginTop: "5px"
		},
		".order-goods-guige,\n.order-goods-num": {fontSize: "12px", color: "#999999"},
		".order-goods-bottom": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: "10px"
		},
		".order-goods-price": {fontSize: "14px", color: "#fe904a"}
	};
	apivm.define("hoc-order-goods-list-sgm", HocOrderGoodsListSgm);

	var HocPayAddressSgm = /*@__PURE__*/ (function(Component) {
		function HocPayAddressSgm(props) {
			Component.call(this, props);
			this.data = {
				consignee:
					this.props.consignee !== undefined ? this.props.consignee : "李丽",
				phone: this.props.phone !== undefined ? this.props.phone : 1234556789,
				area: this.props.area !== undefined ? this.props.area : "北京",
				detailAddress:
					this.props.detailAddress !== undefined
						? this.props.detailAddress
						: "北京市海淀区用友产业园"
			};
		}

		if (Component) HocPayAddressSgm.__proto__ = Component;
		HocPayAddressSgm.prototype = Object.create(Component && Component.prototype);
		HocPayAddressSgm.prototype.constructor = HocPayAddressSgm;
		HocPayAddressSgm.prototype.apiready = function() {};
		HocPayAddressSgm.prototype.handleClick = function() {
			this.fire("handleClick");
		};
		HocPayAddressSgm.prototype.phoneHash = function(phone) {
			if (!phone) {
				return "";
			}
			phone = phone.substring(0, 3) + "****" + phone.substring(7);
			return phone;
		};
		HocPayAddressSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "pay-address"},
				apivm.h(
					"view",
					{class: "pay-address-box", onClick: this.handleClick},
					apivm.h("image", {
						class: "pay-address-img",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/0d5e497818619d204390eb9163f55086.png"
					}),
					apivm.h(
						"view",
						{class: "pay-address-wrap"},

						!this.data.consignee
							? apivm.h("text", {class: "pay-address-noaddress"}, "请添加收货地址")
							: apivm.h(
									"view",
									null,
									apivm.h(
										"view",
										{class: "pay-address-info-item"},
										apivm.h(
											"text",
											{class: "pay-address-name"},
											"收货人：",
											this.data.consignee
										),
										apivm.h("view", {class: "flex1"}),
										apivm.h(
											"text",
											{class: "pay-address-phone"},
											this.phoneHash(this.data.phone.toString())
										)
									),
									apivm.h(
										"text",
										{class: "pay-address-details"},
										this.data.area,
										this.data.detailAddress
									)
							  )
					),
					apivm.h("image", {
						class: "pay-address-gor",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
					})
				)
			);
		};

		return HocPayAddressSgm;
	})(Component);
	HocPayAddressSgm.css = {
		".pay-address": {backgroundColor: "white", marginBottom: "10px"},
		".pay-address-box": {
			flexDirection: "row",
			alignItems: "center",
			minHeight: "85px",
			margin: "15px",
			border: "1px solid #f5f5f5",
			borderRadius: "4px"
		},
		".pay-address-img": {width: "32px", height: "32px", marginLeft: "10px"},
		".pay-address-wrap": {justifyContent: "center", flex: "1", margin: "0 15px"},
		".pay-address-noaddress": {fontSize: "15px", color: "#333333"},
		".pay-address-info-item": {flexDirection: "row"},
		".pay-address-name": {fontSize: "15px", color: "#333333"},
		".flex1": {flex: "1"},
		".pay-address-phone": {marginTop: "2px", fontSize: "13px", color: "#777777"},
		".pay-address-details": {
			marginTop: "5px",
			fontSize: "12px",
			color: "#333333"
		},
		".pay-address-gor": {width: "14px", height: "14px", marginRight: "10px"}
	};
	apivm.define("hoc-pay-address-sgm", HocPayAddressSgm);

	var HocNavBarSgm = /*@__PURE__*/ (function(Component) {
		function HocNavBarSgm(props) {
			Component.call(this, props);
			this.data = {
				title: this.props.title !== undefined ? this.props.title : "拼团商城"
			};
		}

		if (Component) HocNavBarSgm.__proto__ = Component;
		HocNavBarSgm.prototype = Object.create(Component && Component.prototype);
		HocNavBarSgm.prototype.constructor = HocNavBarSgm;
		HocNavBarSgm.prototype.back = function() {
			api.closeWin();
			this.fire("backClick");
		};
		HocNavBarSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "nav-bar", style: {background: this.props.bgClolor || "#fff"}},
				this.props.isShowBack
					? apivm.h(
							"view",
							{onClick: this.back, class: "nav-bar-back"},
							apivm.h("img", {
								src:
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6958c7448f8d7106d3ee273fa7430063.png",
								alt: "back",
								class: "nav-bar-back-icon"
							}),
							apivm.h(
								"text",
								{
									class: "nav-bar-back-text",
									style: {color: this.props.textColor || "#000"}
								},
								"返回"
							)
					  )
					: null,
				apivm.h(
					"text",
					{class: "nav-bar-title", style: {color: this.props.textColor || "#000"}},
					this.data.title
				)
			);
		};

		return HocNavBarSgm;
	})(Component);
	HocNavBarSgm.css = {
		".nav-bar": {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: "0",
			height: "48px",
			borderBottom: "0.5px solid #e8e8e8"
		},
		".nav-bar-back": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			position: "absolute",
			left: "16px"
		},
		".nav-bar-back-icon": {width: "20px", height: "20px"},
		".nav-bar-back-text": {fontSize: "17px"},
		".nav-bar-title": {fontSize: "17px", fontWeight: "500"}
	};
	apivm.define("hoc-nav-bar-sgm", HocNavBarSgm);

	var TemplateSgmPay = /*@__PURE__*/ (function(Component) {
		function TemplateSgmPay(props) {
			Component.call(this, props);
			this.data = {
				hocOrderGoodsListSgmList: [
					{
						title: "苹果笔记本电脑超薄",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/02b297b95bd2ae7aa0021ed8df11bede.png",
						price: 30.9,
						delprice: 50,
						key: "小盒/200g",
						buynum: 1,
						act: "tuan"
					}
				],

				hocFormListSgmFormList: [
					{
						label: "拼团人数",
						text: "3人"
					},
					{
						label: "商品金额",
						text: "￥120"
					},
					{
						label: "邮费",
						text: "￥0"
					}
				]
			};
		}

		if (Component) TemplateSgmPay.__proto__ = Component;
		TemplateSgmPay.prototype = Object.create(Component && Component.prototype);
		TemplateSgmPay.prototype.constructor = TemplateSgmPay;
		TemplateSgmPay.prototype.fnGoPay = function() {
			api.toast({
				msg: "点击支付按钮了!"
			});
		};
		TemplateSgmPay.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "hoc-pay-pindan-page-sgm"},
				apivm.h("hoc-nav-bar-sgm", {title: "发起拼团", isShowBack: true}),
				apivm.h(
					"scroll-view",
					{"scroll-y": true, "show-scrollbar": false, style: "flex: 1;"},
					apivm.h("hoc-pay-address-sgm", {consignee: "李丽"}),
					apivm.h("hoc-order-goods-list-sgm", {
						list: this.data.hocOrderGoodsListSgmList
					}),
					apivm.h("hoc-form-list-sgm", {formList: this.data.hocFormListSgmFormList}),
					apivm.h("hoc-pin-rules-sgm", {
						content:
							"<p style='color: #999; font-size: 12px;'>1、24小时内没有拼团成功，自动取消订单</p><p style='color: #999; font-size: 12px;'>2、拼团成功平台会在48小时发货</p><p style='color: #999; font-size: 12px;'>3、拼团成功的不能取消订单！</p>"
					})
				),
				apivm.h("hoc-pay-footer-btn-sgm", {
					onFnGoPay: this.fnGoPay,
					buyNum: 122,
					payPrice: 1322
				})
			);
		};

		return TemplateSgmPay;
	})(Component);
	TemplateSgmPay.css = {
		".hoc-pay-pindan-page-sgm": {height: "100%", background: "#f8f8f8"}
	};
	apivm.define("template-sgm-pay", TemplateSgmPay);
	apivm.render(apivm.h("template-sgm-pay", null), "body");
})();
