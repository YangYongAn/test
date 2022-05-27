(function() {
	var HocShoppingFooterOd = /*@__PURE__*/ (function(Component) {
		function HocShoppingFooterOd(props) {
			Component.call(this, props);
			this.data = {
				price: this.props.price || "100",
				num: this.props.num || "5",
				active: this.props.active || false
			};
		}

		if (Component) HocShoppingFooterOd.__proto__ = Component;
		HocShoppingFooterOd.prototype = Object.create(
			Component && Component.prototype
		);
		HocShoppingFooterOd.prototype.constructor = HocShoppingFooterOd;
		HocShoppingFooterOd.prototype.apiready = function() {};
		HocShoppingFooterOd.prototype.onPlaceClick = function() {
			api.openWin({
				name: "place_order",
				url: "widget://pages/template-od-place_order/template-od-place_order"
			});
		};
		HocShoppingFooterOd.prototype.render = function() {
			return apivm.h(
				"safe-area",
				null,
				apivm.h(
					"view",
					{class: "footer_box"},
					apivm.h(
						"view",
						{class: "footer_chk"},
						apivm.h("image", {
							class: "chkall_img",
							src: this.data.active
								? "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/015eca78c47045f0c20354ad187a7191.png"
								: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f9b7e811f27b1a39bb33250a69ffd26e.png"
						}),
						apivm.h("text", {class: "chk_zi"}, "全选")
					),
					apivm.h(
						"view",
						{class: "footer_zi"},
						apivm.h("text", {class: "footer_czi"}, "合计："),
						apivm.h("text", {class: "footer_rzi"}, "￥" + this.data.price),
						apivm.h(
							"text",
							{class: "footer_btn", onClick: this.onPlaceClick},
							"结算" + this.data.num
						)
					)
				)
			);
		};

		return HocShoppingFooterOd;
	})(Component);
	HocShoppingFooterOd.css = {
		".footer_box": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			height: "51px",
			backgroundColor: "white"
		},
		".footer_chk": {flexDirection: "row", alignItems: "center", height: "40px"},
		".chkall_img": {width: "20px", height: "20px", marginLeft: "15px"},
		".chk_zi": {fontSize: "12px", color: "#666666", marginLeft: "6px"},
		".footer_zi": {flexDirection: "row", alignItems: "center"},
		".footer_czi": {fontSize: "13px", color: "#333333"},
		".footer_rzi": {fontSize: "15px", color: "#fe5c00"},
		".footer_btn": {
			width: "96px",
			height: "40px",
			lineHeight: "40px",
			textAlign: "center",
			fontSize: "14px",
			color: "#ffffff",
			borderRadius: "2px",
			margin: "0 8px",
			backgroundColor: "#ff7037"
		},
		".footer_btn:active": {opacity: "0.7"},
		".coverbg": {
			position: "absolute",
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(0, 0, 0, 0.4)"
		}
	};
	apivm.define("hoc-shopping-footer-od", HocShoppingFooterOd);

	var HocShoppingListOd = /*@__PURE__*/ (function(Component) {
		function HocShoppingListOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						key: "S",
						buynum: 1,
						id: "6117fcc80-d2f4-11ea-a0bc-bd616acc739c",
						title: "港风套装女复古chic减龄短袖 ins复古穿搭",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3ee90482ef5b13bdbd9e9dc3f79f495e.png",
						price: 1299,
						isjia: 0
					},

					{
						key: "M",
						buynum: 3,
						id: "27b5c380-d2f7-11ea-a0bc-bd616ac2c739c",
						title: "休闲时尚套装女夏裤子洋气可盐可甜",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/1cc4b3d74953e9426e83e6e0bb3e5afd.png",
						price: 629,
						isjia: 1
					},

					{
						key: "S",
						buynum: 6,
						id: "9d739ce0-d2fd-11ea-a0bc-bd616acc739c",
						title: "碎花连衣裙两件套装女",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/2c8bbe302662ca7261a3f43a0a725d43.png",
						price: 699,
						isjia: 1
					}
				],

				active: this.props.active || 1
			};
		}

		if (Component) HocShoppingListOd.__proto__ = Component;
		HocShoppingListOd.prototype = Object.create(Component && Component.prototype);
		HocShoppingListOd.prototype.constructor = HocShoppingListOd;
		HocShoppingListOd.prototype.apiready = function() {};
		HocShoppingListOd.prototype.onDetailClick = function() {
			api.openWin({
				name: "detail",
				url: "widget://pages/template-od-detail/template-od-detail"
			});
		};
		HocShoppingListOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{"scroll-y": true, class: "shopping-list"},
				apivm.h(
					"view",
					{class: "sl-list_box"},
					(Array.isArray(this.data.list)
						? this.data.list
						: Object.values(this.data.list)
					).map(function(item$1, index$1) {
						return apivm.h(
							"view",
							{class: "sl-card_one"},
							apivm.h(
								"view",
								{class: "sl-chk_img_box", "data-id": item$1.cartid},
								apivm.h("image", {
									class: "sl-chk_img",
									src:
										index$1 == this$1.data.active
											? "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/015eca78c47045f0c20354ad187a7191.png"
											: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f9b7e811f27b1a39bb33250a69ffd26e.png"
								})
							),
							apivm.h("image", {
								onClick: this$1.onDetailClick,
								class: "sl-card_img",
								src: item$1.image,
								mode: "aspectFill",
								"data-index": index$1
							}),
							apivm.h(
								"view",
								{class: "sl-card_details"},
								apivm.h(
									"text",
									{
										class: "sl-card_title",
										style: "white-space:nowrap",
										"data-index": index$1
									},
									item$1.title
								),
								apivm.h(
									"view",
									{class: "sl-card_tips", "data-index": index$1},
									apivm.h(
										"text",
										{class: "sl-card_tip"},
										item$1.key ? item$1.key : "默认规格"
									),
									apivm.h("image", {
										class: "sl-card_lower",
										src:
											"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/0de2da04366a9cb90a80baa70b455b32.png"
									}),
									apivm.h(
										"text",
										{
											class: "sl-flex1 sl-card_dz",
											style: {display: item$1.isjia == 0 ? "flex" : "none"}
										},
										"已下架"
									)
								),
								apivm.h(
									"view",
									{class: "sl-card_pbox"},
									apivm.h("text", {class: "sl-card_price"}, "¥" + item$1.price),
									apivm.h(
										"view",
										{class: "sl-card_num"},
										apivm.h(
											"text",
											{
												class:
													"sl-card_btn" + (item$1.buynum == 1 ? " card_btn_disable" : ""),
												"data-index": index$1
											},
											"-"
										),
										apivm.h("text", {class: "sl-card_num_text"}, item$1.buynum),
										apivm.h("text", {class: "sl-card_btn", "data-index": index$1}, "+")
									)
								)
							)
						);
					})
				)
			);
		};

		return HocShoppingListOd;
	})(Component);
	HocShoppingListOd.css = {
		".shopping-list": {flex: "1", width: "100%"},
		".sl-list_box": {
			backgroundColor: "white",
			borderRadius: "4px",
			padding: "10px 15px"
		},
		".sl-card_one": {
			display: "flex",
			flexDirection: "row",
			height: "120px",
			padding: "15px 0",
			borderBottom: "1px solid #f8f8f8",
			justifyContent: "space-between"
		},
		".sl-card_img": {width: "90px", height: "68px"},
		".sl-chk_img_box": {
			justifyContent: "center",
			width: "35px",
			height: "68px",
			marginRight: "13px"
		},
		".sl-chk_img": {width: "20px", height: "20px"},
		".sl-card_details": {flex: "1", marginLeft: "13px", width: "183px"},
		".sl-card_title": {
			fontSize: "15px",
			color: "#333333",
			lineHeight: "18px",
			overflow: "hidden",
			textOverflow: "ellipsis"
		},
		".sl-card_tips": {
			flexDirection: "row",
			alignItems: "center",
			marginTop: "8px"
		},
		".sl-card_tip": {
			fontSize: "12px",
			color: "#999999",
			padding: "0 4px",
			backgroundColor: "#f9faf9",
			marginRight: "5px"
		},
		".sl-card_lower": {width: "10px", height: "10px"},
		".sl-card_dz": {fontSize: "12px", textAlign: "right", color: "#999999"},
		".sl-card_pbox": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			marginTop: "18px"
		},
		".sl-card_price": {fontSize: "14px", color: "#ff7037"},
		".sl-card_num": {
			flexDirection: "row",
			alignItems: "center",
			width: "106px",
			height: "30px",
			border: "1px solid #f8f8f8",
			borderRadius: "4px"
		},
		".sl-card_btn": {
			width: "35px",
			textAlign: "center",
			fontSize: "20px",
			color: "#555555"
		},
		".sl-card_btn_disable": {color: "#cccccc"},
		".sl-card_num_text": {
			flex: "1",
			textAlign: "center",
			fontSize: "14px",
			color: "#333333"
		}
	};
	apivm.define("hoc-shopping-list-od", HocShoppingListOd);

	var HocShoppingHeaderOd = /*@__PURE__*/ (function(Component) {
		function HocShoppingHeaderOd(props) {
			Component.call(this, props);
			this.data = {
				title: this.props.title || "服饰商城",
				image:
					this.props.image ||
					"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/e399d491160c706d4c7517ad05cd2170.png"
			};
		}

		if (Component) HocShoppingHeaderOd.__proto__ = Component;
		HocShoppingHeaderOd.prototype = Object.create(
			Component && Component.prototype
		);
		HocShoppingHeaderOd.prototype.constructor = HocShoppingHeaderOd;
		HocShoppingHeaderOd.prototype.apiready = function() {};
		HocShoppingHeaderOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "nav_box"},
				apivm.h("image", {class: "nav_img", src: this.data.image}),
				apivm.h("text", {class: "nav_appname"}, this.data.title),
				apivm.h("view", {class: "flex1"}),
				apivm.h("text", {class: "nav_btn"}, "编辑")
			);
		};

		return HocShoppingHeaderOd;
	})(Component);
	HocShoppingHeaderOd.css = {
		".nav_box": {
			flexDirection: "row",
			alignItems: "center",
			height: "54px",
			backgroundColor: "white"
		},
		".nav_img": {
			width: "34px",
			height: "34px",
			borderRadius: "4px",
			marginLeft: "15px",
			marginRight: "8px",
			backgroundColor: "#f8f8f8"
		},
		".nav_appname": {fontSize: "12px", color: "#333333"},
		".flex1": {flex: "1"},
		".nav_btn": {
			width: "70px",
			height: "30px",
			lineHeight: "30px",
			borderRadius: "2px",
			textAlign: "center",
			color: "#ff7037",
			fontSize: "14px",
			marginRight: "15px",
			border: "1px solid #ff7037"
		},
		".nav_btn:active": {opacity: "0.7"}
	};
	apivm.define("hoc-shopping-header-od", HocShoppingHeaderOd);

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

	var TemplateOdShoppingCart = /*@__PURE__*/ (function(Component) {
		function TemplateOdShoppingCart(props) {
			Component.call(this, props);
			this.data = {
				cartList: [
					{
						key: "S",
						buynum: 1,
						id: "6117fcc80-d2f4-11ea-a0bc-bd616acc739c",
						title: "港风套装女复古chic减龄短袖 ins复古穿搭",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3ee90482ef5b13bdbd9e9dc3f79f495e.png",
						price: 1299,
						isjia: 0
					},

					{
						key: "M",
						buynum: 3,
						id: "27b5c380-d2f7-11ea-a0bc-bd616ac2c739c",
						title: "休闲时尚套装女夏裤子洋气可盐可甜",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/1cc4b3d74953e9426e83e6e0bb3e5afd.png",
						price: 629,
						isjia: 1
					},

					{
						key: "S",
						buynum: 6,
						id: "9d739ce0-d2fd-11ea-a0bc-bd616acc739c",
						title: "碎花连衣裙两件套装女温柔可人",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/2c8bbe302662ca7261a3f43a0a725d43.png",
						price: 699,
						isjia: 1
					}
				]
			};
		}

		if (Component) TemplateOdShoppingCart.__proto__ = Component;
		TemplateOdShoppingCart.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOdShoppingCart.prototype.constructor = TemplateOdShoppingCart;
		TemplateOdShoppingCart.prototype.apiready = function() {};
		TemplateOdShoppingCart.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h("hoc-nav-bar-od", {msg: "购物车", isBack: true}),

				apivm.h("hoc-shopping-header-od", null),

				apivm.h("hoc-shopping-list-od", {list: this.data.cartList}),

				apivm.h("hoc-shopping-footer-od", null)
			);
		};

		return TemplateOdShoppingCart;
	})(Component);
	TemplateOdShoppingCart.css = {
		".page": {height: "100%", backgroundColor: "#fff"},
		"scroll-view": {height: "100%"}
	};
	apivm.define("template-od-shopping_cart", TemplateOdShoppingCart);
	apivm.render(apivm.h("template-od-shopping_cart", null), "body");
})();
