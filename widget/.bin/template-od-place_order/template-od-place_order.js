(function() {
	var HocOrderFooterOd = /*@__PURE__*/ (function(Component) {
		function HocOrderFooterOd(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.orderBuy || {
					orderBuynum: 1,
					payPrice: 666
				}
			};
		}

		if (Component) HocOrderFooterOd.__proto__ = Component;
		HocOrderFooterOd.prototype = Object.create(Component && Component.prototype);
		HocOrderFooterOd.prototype.constructor = HocOrderFooterOd;
		HocOrderFooterOd.prototype.apiready = function() {};
		HocOrderFooterOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "footer-btn"},
				apivm.h(
					"view",
					{class: "floor_btns"},
					apivm.h(
						"text",
						{class: "floor_zi"},
						"共" + this.data.data.orderBuynum + "件"
					),
					apivm.h("text", {class: "floor_rzi"}, "合计："),
					apivm.h("text", {class: "floor_szi"}, "¥"),
					apivm.h("text", {class: "floor_mzi"}, this.data.data.payPrice),
					apivm.h("text", {class: "floor_btn"}, "去支付")
				),
				apivm.h("safe-area", null)
			);
		};

		return HocOrderFooterOd;
	})(Component);
	HocOrderFooterOd.css = {
		".footer-btn": {backgroundColor: "white"},
		".floor_btns": {
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center",
			height: "54px"
		},
		".floor_zi": {fontSize: "13px", marginRight: "10px", color: "#999999"},
		".floor_rzi": {fontSize: "14px", color: "#333333"},
		".floor_szi": {fontSize: "14px", color: "#fe5c00"},
		".floor_mzi": {fontSize: "18px", color: "#fe5c00", marginRight: "15px"},
		".floor_btn": {
			width: "100px",
			height: "40px",
			borderRadius: "2px",
			marginRight: "15px",
			lineHeight: "40px",
			textAlign: "center",
			fontSize: "16px",
			backgroundColor: "#ff7037",
			color: "white"
		},
		".floor_btn:active": {opacity: "0.7"}
	};
	apivm.define("hoc-order-footer-od", HocOrderFooterOd);

	var HocRemarkBuyOd = /*@__PURE__*/ (function(Component) {
		function HocRemarkBuyOd(props) {
			Component.call(this, props);
			this.data = {
				inputVal: this.props.inputVal || "",
				placeholder: this.props.placeholder || "留下您想对商家说的话"
			};
		}

		if (Component) HocRemarkBuyOd.__proto__ = Component;
		HocRemarkBuyOd.prototype = Object.create(Component && Component.prototype);
		HocRemarkBuyOd.prototype.constructor = HocRemarkBuyOd;
		HocRemarkBuyOd.prototype.apiready = function() {};
		HocRemarkBuyOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "remark"},

				apivm.h("text", {class: "bei_zi"}, "备注"),
				apivm.h(
					"view",
					{class: "bei_box"},
					apivm.h("textarea", {
						class: "bei_area",
						id: "beizhu",
						value: this.props.inputVal,
						placeholder: this.props.placeholder
					})
				)
			);
		};

		return HocRemarkBuyOd;
	})(Component);
	HocRemarkBuyOd.css = {
		".bei_zi": {
			fontSize: "14px",
			marginLeft: "15px",
			marginTop: "15px",
			marginBottom: "4px",
			color: "#6c7279"
		},
		".bei_box": {
			height: "122px",
			padding: "14px 15px",
			marginBottom: "10px",
			backgroundColor: "white"
		},
		".bei_area": {width: "auto", height: "100%", border: "none"}
	};
	apivm.define("hoc-remark-buy-od", HocRemarkBuyOd);

	var HocDeliveryOd = /*@__PURE__*/ (function(Component) {
		function HocDeliveryOd(props) {
			Component.call(this, props);
			this.data = {
				price: this.props.price || "6"
			};
		}

		if (Component) HocDeliveryOd.__proto__ = Component;
		HocDeliveryOd.prototype = Object.create(Component && Component.prototype);
		HocDeliveryOd.prototype.constructor = HocDeliveryOd;
		HocDeliveryOd.prototype.apiready = function() {};
		HocDeliveryOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "delivery"},
				apivm.h(
					"view",
					{class: "ge_box"},
					apivm.h(
						"view",
						{class: "ge_list border-bottom"},
						apivm.h("text", {class: "ge_zi"}, "配送方式"),
						apivm.h("text", {class: "ge_rzi"}, "配送")
					),
					apivm.h(
						"view",
						{class: "ge_list"},
						apivm.h("text", {class: "ge_zi"}, "运费"),
						apivm.h("text", {class: "ge_rzi"}, "+￥" + this.data.price)
					)
				)
			);
		};

		return HocDeliveryOd;
	})(Component);
	HocDeliveryOd.css = {
		".ge_box": {padding: "0 15px", marginTop: "8px", backgroundColor: "white"},
		".ge_list": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			height: "55px"
		},
		".border-bottom": {borderBottom: "1px solid #f8f8f8"},
		".ge_zi": {fontSize: "16px", color: "#393f44"},
		".ge_rzi": {fontSize: "14px", color: "#979ea6"}
	};
	apivm.define("hoc-delivery-od", HocDeliveryOd);

	var HocGoodInfoOd = /*@__PURE__*/ (function(Component) {
		function HocGoodInfoOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						title: "夏新款套装女洋气时尚短裤阔腿裤两件套小个子夏装搭配显高",
						image:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/46e4b8d7a4a8d1febeec082516a8e8f5.png",
						price: 629,
						ku_num: 995,
						delprice: 1236,
						key: "M",
						buynum: 1
					}
				]
			};
		}

		if (Component) HocGoodInfoOd.__proto__ = Component;
		HocGoodInfoOd.prototype = Object.create(Component && Component.prototype);
		HocGoodInfoOd.prototype.constructor = HocGoodInfoOd;
		HocGoodInfoOd.prototype.apiready = function() {};
		HocGoodInfoOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "good-info"},
				apivm.h(
					"view",
					{class: "list_box"},

					(Array.isArray(this.data.list)
						? this.data.list
						: Object.values(this.data.list)
					).map(function(item$1, index$1) {
						return apivm.h(
							"view",
							{class: "order-goods-page"},
							apivm.h(
								"view",
								{class: "order-goods-item", "data-index": index$1},
								apivm.h("image", {
									class: "order-goods-img",
									src: item$1.image,
									mode: "aspectFill"
								}),
								apivm.h(
									"view",
									{class: "order-goods-right"},
									apivm.h("text", {class: "order-goods-title"}, item$1.title),
									apivm.h(
										"view",
										{class: "order-goods-guige-box"},
										apivm.h(
											"text",
											{class: "order-goods-guige"},
											item$1.key ? " " + item$1.key : "默认规格"
										),
										apivm.h("text", {class: "order-goods-num"}, "x" + item$1.buynum)
									)
								)
							),

							apivm.h(
								"view",
								{class: "list_count"},
								apivm.h("text", {class: "list_zi"}, "小计"),
								apivm.h("text", {class: "list_all"}, "¥" + item$1.price)
							)
						);
					})
				)
			);
		};

		return HocGoodInfoOd;
	})(Component);
	HocGoodInfoOd.css = {
		".list_box": {marginTop: "8px", background: "white"},
		".list_count": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			height: "44px",
			padding: "0 15px"
		},
		".list_zi": {fontSize: "14px", color: "#333333"},
		".list_all": {fontSize: "14px", color: "#fe904a"},
		".order-goods-page": {backgroundColor: "white"},
		".order-goods-item": {
			flexDirection: "row",
			paddingBottom: "15px",
			margin: "15px 15px 0",
			borderBottom: "1px solid #f8f8f8"
		},
		".order-goods-img": {
			width: "90px",
			height: "68px",
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
		".order-goods-price": {fontSize: "14px", color: "#fe904a"},
		".order-goods-btn": {
			width: "70px",
			height: "30px",
			lineHeight: "30px",
			textAlign: "center",
			marginLeft: "8px",
			borderRadius: "2px",
			fontSize: "14px",
			padding: "0 3px"
		},
		".order-goods-btn-gray": {
			backgroundColor: "white",
			border: "1px solid #b5b5b5",
			color: "#999999"
		},
		".order-goods-btn-orange": {backgroundColor: "#ff7037", color: "white"}
	};
	apivm.define("hoc-good-info-od", HocGoodInfoOd);

	var HocUserAddressOd = /*@__PURE__*/ (function(Component) {
		function HocUserAddressOd(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.data || {
					name: "测试姓名",
					phone: "17733553555",
					qustr: "北京市,北京市,东城区",
					address: "幸福小区"
				}
			};
		}

		if (Component) HocUserAddressOd.__proto__ = Component;
		HocUserAddressOd.prototype = Object.create(Component && Component.prototype);
		HocUserAddressOd.prototype.constructor = HocUserAddressOd;
		HocUserAddressOd.prototype.apiready = function() {};
		HocUserAddressOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "address_container"},
				apivm.h(
					"view",
					{class: "address_box"},
					apivm.h("image", {
						class: "address_img",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/1b4989f12f30b3faddb0b21375e2b7c0.png"
					}),
					apivm.h(
						"view",
						{class: "address_wrap"},

						apivm.h(
							"view",
							{class: "address_cont"},
							apivm.h(
								"view",
								{class: "address_tit"},
								apivm.h(
									"text",
									{class: "address_name"},
									"收货人：" + this.data.data.name
								),
								apivm.h("view", {class: "flex1"}),
								apivm.h("text", {class: "address_phone"}, this.data.data.phone)
							),
							apivm.h(
								"text",
								{class: "address_details"},
								this.data.data.qustr + this.data.data.address
							)
						)
					),
					apivm.h("image", {
						class: "address_gor",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7158c8c5425bd78b31d74da4ca8563f2.png"
					})
				)
			);
		};

		return HocUserAddressOd;
	})(Component);
	HocUserAddressOd.css = {
		".address_container": {backgroundColor: "white"},
		".address_box": {
			flexDirection: "row",
			alignItems: "center",
			minHeight: "85px",
			margin: "15px",
			border: "1px solid #f5f5f5",
			borderRadius: "4px"
		},
		".address_img": {width: "32px", height: "32px", marginLeft: "10px"},
		".address_wrap": {justifyContent: "center", flex: "1", margin: "0 15px"},
		".noaddress": {fontSize: "15px", color: "#333333"},
		".address_tit": {flexDirection: "row"},
		".address_name": {fontSize: "15px", color: "#333333"},
		".flex1": {flex: "1"},
		".address_phone": {marginTop: "2px", fontSize: "13px", color: "#777777"},
		".address_details": {marginTop: "5px", fontSize: "12px", color: "#333333"},
		".address_gor": {width: "14px", height: "14px", marginRight: "10px"}
	};
	apivm.define("hoc-user-address-od", HocUserAddressOd);

	var HocNavBarOd = /*@__PURE__*/ (function(Component) {
		function HocNavBarOd(props) {
			Component.call(this, props);
			this.data = {
				msg: this.props.msg || "首页",
				isBack: this.props.isBack || false
			};
		}

		if (Component) HocNavBarOd.__proto__ = Component;
		HocNavBarOd.prototype = Object.create(Component && Component.prototype);
		HocNavBarOd.prototype.constructor = HocNavBarOd;
		HocNavBarOd.prototype.closeWin = function() {
			api.closeWin();
		};
		HocNavBarOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				null,
				apivm.h(
					"view",
					{class: "nav-bar"},
					this.data.isBack
						? apivm.h(
								"view",
								{
									onclick: function(event) {
										if (this$1.closeWin) {
											this$1.closeWin(event);
										} else {
											closeWin(event);
										}
									},
									class: "nav-bar-back"
								},
								apivm.h("image", {
									class: "nav-bar-icon",
									src:
										"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6958c7448f8d7106d3ee273fa7430063.png"
								}),
								apivm.h("text", {class: "nav-bar-text"}, "返回")
						  )
						: null,
					apivm.h("text", {class: "nav-bar-text"}, this.data.msg)
				)
			);
		};

		return HocNavBarOd;
	})(Component);
	HocNavBarOd.css = {
		".nav-bar": {
			width: "100%",
			height: "45px",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			borderBottom: "1px solid #ccc",
			backgroundColor: "#fff"
		},
		".nav-bar-back": {
			position: "absolute",
			left: "15px",
			width: "100px",
			flexDirection: "row",
			justifyContent: "left",
			alignItems: "center"
		},
		".nav-bar-icon": {marginRight: "5px", width: "15px", height: "15px"},
		".nav-bar-text": {fontSize: "18px", color: "#333"}
	};
	apivm.define("hoc-nav-bar-od", HocNavBarOd);

	var TemplateOdPlaceOrder = /*@__PURE__*/ (function(Component) {
		function TemplateOdPlaceOrder(props) {
			Component.call(this, props);
			this.data = {
				// 用户地址
				useraddress: {
					id: "ad278260-ab4a-11ec-ac11-e7c0d9bbce51",
					name: "测试昵称",
					phone: "17733553558",
					qustr: "北京市,北京市,东城区",
					address: "幸福小区",
					def: 0,
					uid: "84333200-ab4a-11ec-ac11-e7c0d9bbce51",
					quid: "110000,110100,110101",
					addtime: "2022-03-24T08:16:16.262Z"
				},

				// 商品信息
				goodData: [
					{
						title: "夏新款套装女洋气时尚短裤阔腿裤",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3ee90482ef5b13bdbd9e9dc3f79f495e.png",
						price: 699,
						ku_num: 995,
						delprice: 1236,
						key: "白色/S码",
						buynum: 1
					}
				],

				// 下单信息
				orderBuy: {
					orderBuynum: 1,
					payPrice: 666
				}
			};
		}

		if (Component) TemplateOdPlaceOrder.__proto__ = Component;
		TemplateOdPlaceOrder.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOdPlaceOrder.prototype.constructor = TemplateOdPlaceOrder;
		TemplateOdPlaceOrder.prototype.apiready = function() {};
		TemplateOdPlaceOrder.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h("hoc-nav-bar-od", {msg: "立即购买", isBack: true}),
				apivm.h(
					"view",
					{class: "place"},

					apivm.h("hoc-user-address-od", {data: this.data.useraddress}),

					apivm.h("hoc-good-info-od", {list: this.data.goodData}),

					apivm.h("hoc-delivery-od", {price: "6"}),

					apivm.h("hoc-remark-buy-od", null)
				),

				apivm.h("hoc-order-footer-od", {data: this.data.orderBuy})
			);
		};

		return TemplateOdPlaceOrder;
	})(Component);
	TemplateOdPlaceOrder.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"},
		".place": {flex: "1"}
	};
	apivm.define("template-od-place_order", TemplateOdPlaceOrder);
	apivm.render(apivm.h("template-od-place_order", null), "body");
})();
