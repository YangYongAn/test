(function() {
	/**
	 * 判断当前是否是小程序环境
	 * 2020-11-24  暂用 api.uiMode模拟
	 * 后期需修正为  api.platform
	 * @returns {boolean}
	 */
	function isMP() {
		return !api.uiMode;
	}

	/**
	 * 统一设置底部tabBar的数字小红点
	 * @param index
	 * @param text
	 */
	function setTabBarBadge(index, text) {
		text += "";
		if (isMP()) {
			if (text === "0") {
				wx.removeTabBarBadge({index: index});
			} else {
				wx.setTabBarBadge({index: index, text: text});
			}
		} else {
			api.setTabBarItemAttr({index: index, badge: {text: text, color: "#FFF"}});
		}
	}

	var tabFrames = [
		{
			name: "home",
			url: "/pages/main_home/main_home",
			title: "首页"
		},
		{
			name: "doc",
			url: "/pages/main_menu/main_menu",
			title: "菜单"
		},
		{
			name: "about",
			url: "/pages/main_cart/main_cart",
			title: "购物车"
		},
		{
			name: "about",
			url: "/pages/main_user/main_user",
			title: "我的"
		}
	];

	/**
	 * 统一设置tabBar的index 解决小程序端无法在TabBar中处理切换事件的问题
	 * @param index 目标索引值
	 * @param scroll 是否开启滚动过度
	 */
	function setTabBarIndex(index, scroll) {
		if (scroll === void 0) {
			scroll = true;
		}
		if (isMP()) {
			var pageStack = getCurrentPages();

			if (pageStack.length === 1) {
				console.log(tabFrames[index]);

				wx.switchTab(tabFrames[index]);
			} else {
				console.log("二级页面切换待处理");
			}
		} else {
			api.sendEvent({
				name: "SET-TAB-INDEX",
				extra: {
					index: index,
					scroll: scroll
				}
			});
		}
	}

	var TemplateOfMainCart = /*@__PURE__*/ (function(Component) {
		function TemplateOfMainCart(props) {
			Component.call(this, props);
			this.data = {
				cartList: [],
				cartData: {},
				isEdit: false
			};
			this.compute = {
				allChecked: function() {
					return !this.data.cartList.some(function(item) {
						return !item.checked;
					});
				},
				totalPrice: function() {
					var list = this.data.cartList.filter(function(item) {
						return item.checked;
					});
					return (list.length
						? list.reduce(function(total, item) {
								return total + item.goods.curt_price * item.count;
						  }, 0)
						: 0
					).toFixed(2);
				}
			};
		}

		if (Component) TemplateOfMainCart.__proto__ = Component;
		TemplateOfMainCart.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOfMainCart.prototype.constructor = TemplateOfMainCart;
		TemplateOfMainCart.prototype.apiready = function() {
			this.getCartData();
			api.addEventListener(
				{name: "CART-DATA-CHANGED"},
				this.getCartData.bind(this)
			);
		};
		TemplateOfMainCart.prototype.onshow = function() {
			console.log(["cart", "onshow"]);
			this.getCartData();
		};
		TemplateOfMainCart.prototype.goToBuy = function() {
			setTabBarIndex(1);
		};
		TemplateOfMainCart.prototype.getCartData = function() {
			var cartData = api.getPrefs({
				sync: true,
				key: "CART-DATA"
			});

			if (cartData) {
				cartData = JSON.parse(cartData);
				this.data.cartData = cartData;
				this.computedCartList();
				setTabBarBadge(2, Object.keys(cartData).length);
			}
		};
		TemplateOfMainCart.prototype.countChange = function(ref) {
			var detail = ref.detail;

			detail.props.item.count += detail.change;
			this.data.cartData[detail.props.item.goods.id] = detail.props.item;
			api.setPrefs({
				key: "CART-DATA",
				value: this.data.cartData
			});
		};
		TemplateOfMainCart.prototype.computedCartList = function() {
			var cartData = this.data.cartData;
			var arr = [];
			for (var i in cartData) {
				arr.push(Object.assign({}, {checked: true}, cartData[i]));
			}
			this.data.cartList = arr;
		};
		TemplateOfMainCart.prototype.radioToggle = function(ref) {
			var detail = ref.detail;

			detail.props.item.checked = detail.checked;
		};
		TemplateOfMainCart.prototype.checkAll = function() {
			var checked = !this.allChecked;
			for (var i = 0; i < this.data.cartList.length; i++) {
				this.data.cartList[i].checked = checked;
			}
		};
		TemplateOfMainCart.prototype.toggleEdit = function() {
			this.data.isEdit = !this.data.isEdit;
		};
		TemplateOfMainCart.prototype.removeGoods = function() {
			for (var i = 0; i < this.data.cartList.length; i++) {
				if (this.data.cartList[i].checked) {
					delete this.data.cartData[this.data.cartList[i].goods.id];
				}
			}
			api.setPrefs({
				key: "CART-DATA",
				value: this.data.cartData
			});

			this.computedCartList();
			setTabBarBadge(2, Object.keys(this.data.cartData).length);
		};
		TemplateOfMainCart.prototype.gotoCrash = function() {
			var pageParam = {
				list: this.data.cartList.filter(function(item) {
					return item.checked;
				})
			};

			api.openWin({
				name: "pending_order",
				url: "../template-of-pending_order/template-of-pending_order.stml",
				pageParam: pageParam
			});
		};
		TemplateOfMainCart.prototype.nextStep = function() {
			if (this.data.isEdit) {
				this.removeGoods();
			} else {
				this.gotoCrash();
			}
		};
		TemplateOfMainCart.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "main-cart-main-cart"},
				apivm.h(
					"safe-area",
					null,
					apivm.h(
						"view",
						{class: "main-cart-header"},
						apivm.h("text", {class: "main-cart-title"}, "购物车")
					)
				),

				apivm.h(
					"view",
					{class: "main-cart-cart-list"},
					apivm.h(
						"scroll-view",
						{
							class: "main-cart-main-cart-scroll-view",
							"show-scrollbar": false,
							"enable-back-to-top": true
						},
						apivm.h(
							"view",
							{class: "main-cart-list-header"},
							apivm.h("text", {class: "main-cart-list-title"}, "选购的商品"),
							apivm.h(
								"view",
								{onClick: this.toggleEdit},
								apivm.h(
									"view",
									{class: "main-cart-action"},
									apivm.h("img", {
										class: "main-cart-action-icon",
										src: "../../image/icon/icon-cart-edit.png",
										alt: ""
									}),
									apivm.h("text", {class: "main-cart-action-text"}, "编辑")
								)
							)
						),
						apivm.h(
							"view",
							{class: "main-cart-goods-item"},

							apivm.h(
								"view",
								{class: "radio-box-radio-box-wrap"},
								apivm.h("img", {
									class: "radio-box-radio-box",
									src: "../../image/icon/icon-radio-normal.png",
									alt: ""
								})
							),

							apivm.h("img", {
								class: "main-cart-goods-pic",
								mode: "aspectFill",
								src:
									"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/6e51da2766d83e1000c165a1277d7683.jpg",
								alt: ""
							}),
							apivm.h(
								"view",
								{class: "main-cart-goods-info"},
								apivm.h("text", {class: "main-cart-goods-name"}, " 麻辣捞派滑牛肉 "),
								apivm.h(
									"view",
									{class: "main-cart-flex-h"},
									apivm.h("text", {class: "main-cart-goods-price-signal"}, "¥"),
									apivm.h("text", {class: "main-cart-goods-price-num"}, "58.00")
								)
							),

							apivm.h(
								"view",
								{class: "view_2"},
								apivm.h(
									"view",
									{class: "num-btn_flex-h"},
									apivm.h("img", {
										class: "num-btn num-decrease",
										src: "../../image/icon/icon-cart-num-decrease.png",
										onClick: function() {
											return this$1.countChange(-1);
										}
									}),
									apivm.h("text", {class: "num-text"}, "3"),
									apivm.h("img", {
										class: "num-btn num-increase",
										src: "../../image/icon/icon-cart-num-increase.png",
										onClick: function() {
											return this$1.countChange(1);
										}
									})
								)
							)
						)
					),
					apivm.h(
						"safe-area",
						{class: "main-cart-list-footer"},
						apivm.h("view", {style: "width: 15px"}),

						apivm.h(
							"view",
							{class: "radio-box-radio-box-wrap"},
							apivm.h("img", {
								class: "radio-box-radio-box",
								src: "../../image/icon/icon-radio-normal.png",
								alt: ""
							})
						),

						apivm.h(
							"text",
							{class: "main-cart-footer-text", style: "flex: 1;padding-left: 5px"},
							"全选"
						),
						apivm.h(
							"view",
							{class: "text-group"},
							apivm.h("text", {class: "main-cart-footer-text"}, "合计"),
							apivm.h("text", {class: "main-cart-footer-price"}, "¥ 20.00"),
							apivm.h(
								"view",
								{class: "main-cart-footer-btn", onClick: this.nextStep},
								apivm.h("text", {class: "main-cart-footer-btn-text"}, "去结算")
							)
						)
					)
				)
			);
		};

		return TemplateOfMainCart;
	})(Component);
	TemplateOfMainCart.css = {
		".main-cart-main-cart": {height: "100%", background: "#fff"},
		".main-cart-title": {
			fontWeight: "500",
			color: "#020202",
			fontSize: "18px",
			textAlign: "center",
			height: "44px",
			lineHeight: "44px"
		},
		".main-cart-btn": {
			background: "#fe5760",
			width: "50%",
			marginTop: "30px",
			borderRadius: "4px",
			alignSelf: "center"
		},
		".main-cart-btn-text": {
			color: "#ffffff",
			textAlign: "center",
			height: "44px",
			lineHeight: "44px",
			fontSize: "15px"
		},
		".main-cart-cart-list": {display: "flex", flex: "1"},
		".main-cart-main-cart-scroll-view": {
			flex: "1",
			padding: "15px",
			display: "flex",
			boxSizing: "border-box"
		},
		".main-cart-flex-h": {flexDirection: "row"},
		".main-cart-list-header": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		},
		".main-cart-list-title": {
			color: "#333",
			fontWeight: "bold",
			fontSize: "18px",
			flex: "1"
		},
		".main-cart-action": {flexDirection: "row"},
		".main-cart-action-icon": {width: "18px", height: "18px"},
		".main-cart-action-text": {
			backgroundRepeat: "no-repeat",
			backgroundPosition: "left center",
			fontSize: "14px",
			color: "#999"
		},
		".main-cart-finnish-text": {
			fontSize: "14px",
			color: "#999",
			backgroundImage: "none"
		},
		".main-cart-goods-item": {margin: "10px 0", flexDirection: "row"},
		".main-cart-goods-info": {margin: "0 5px 0 10px", flex: "1"},
		".main-cart-goods-pic": {
			width: "70px",
			height: "70px",
			borderRadius: "5px",
			marginLeft: "10px"
		},
		".main-cart-goods-name": {
			fontSize: "14px",
			lineHeight: "20px",
			fontWeight: "500",
			color: "#333333",
			flex: "1"
		},
		".main-cart-goods-price-signal": {
			fontSize: "12px",
			fontWeight: "500",
			color: "#fe5760",
			lineHeight: "22px"
		},
		".main-cart-goods-price-num": {
			fontSize: "15px",
			fontWeight: "500",
			color: "#fe5760",
			flex: "1"
		},
		".main-cart-empty": {display: "flex", justifyContent: "center", flex: "1"},
		".main-cart-list-footer": {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			borderTop: "1px solid #f9f9f9"
		},
		".main-cart-check-all": {border: "1px solid red"},
		".main-cart-footer-text": {fontSize: "12px", color: "#333"},
		".main-cart-footer-btn": {
			background: "#fe5760",
			width: "120px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "48px"
		},
		".main-cart-footer-price": {
			color: "#fe5760",
			fontSize: "20px",
			margin: "0 10px"
		},
		".main-cart-footer-btn-text": {color: "#fff", fontSize: "15px"},
		".text-group": {display: "flex", flexDirection: "row", alignItems: "center"},
		".radio-box-radio-box": {
			width: "18px",
			height: "18px",
			alignSelf: "center",
			justifyContent: "center",
			alignItems: "flex-end"
		},
		".num-btn_flex-h": {flexDirection: "row", alignSelf: "center"},
		".flex-h": {flexDirection: "row"},
		".num-btn": {width: "22px", height: "22px", backgroundSize: "22px 22px"},
		".num-text": {
			padding: "0 8px",
			fontSize: "14px",
			color: "#333",
			marginTop: "2px",
			minWidth: "28px",
			textAlign: "center"
		},
		".radio-box-radio-box-wrap": {display: "flex", justifyContent: "center"},
		".view_1": {
			display: "flex",
			justifyContent: "center",
			alignItems: "flex-end"
		},
		".view_2": {
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-end",
			justifyContent: "center"
		}
	};
	apivm.define("template-of-main-cart", TemplateOfMainCart);
	apivm.render(apivm.h("template-of-main-cart", null), "body");
})();
