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

	var TemplateOfGoodsAdd = /*@__PURE__*/ (function(Component) {
		function TemplateOfGoodsAdd(props) {
			Component.call(this, props);
			this.data = {
				background: "rgba(0,0,0,0)",
				goods: false,
				goodsCardBottom: 375,
				count: 1
			};
		}

		if (Component) TemplateOfGoodsAdd.__proto__ = Component;
		TemplateOfGoodsAdd.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOfGoodsAdd.prototype.constructor = TemplateOfGoodsAdd;
		TemplateOfGoodsAdd.prototype.installed = function() {
			var this$1 = this;
			this.data.goods = this.props.goods ? this.props.goods : api.pageParam.goods;
			console.log(this.data.goods);
			setTimeout(function() {
				this$1.data.background = "rgba(0,0,0,.5)";
				this$1.data.goodsCardBottom = 0;
			}, 11);
			var cartList = api.getPrefs({sync: true, key: "CART-DATA"});
			if (cartList) {
				cartList = JSON.parse(cartList);
				this.data.cartData = cartList[this.data.goods.id];
				if (this.data.cartData) {
					this.data.count = this.data.cartData.count;
				}
			}
		};
		TemplateOfGoodsAdd.prototype.closeThis = function() {
			this.data.background = "rgba(0,0,0,0)";
			this.data.goodsCardBottom = 375;
			setTimeout(function() {
				if (isMP()) {
					api.sendEvent({
						name: "CLOSE-GOODS-ADD"
					});
				} else {
					api.closeFrame();
				}
			}, 300);
		};
		TemplateOfGoodsAdd.prototype.countChange = function(e) {
			this.data.count += e.detail.change;
		};
		TemplateOfGoodsAdd.prototype.addCart = function() {
			var cartList =
				api.getPrefs({
					sync: true,
					key: "CART-DATA"
				}) || "{}";
			cartList = JSON.parse(cartList);
			cartList[this.data.goods.id] = {
				goods: this.data.goods,
				count: this.data.count
			};

			api.setPrefs({
				key: "CART-DATA",
				value: cartList
			});

			setTabBarBadge(2, Object.keys(cartList).length);
			api.toast({
				msg: "成功加入" + this.data.count + "个到购物车",
				location: "middle"
			});

			this.closeThis();
		};
		TemplateOfGoodsAdd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page", style: "background:" + this.data.background},
				apivm.h("view", {class: "mask", onClick: this.closeThis}),
				apivm.h(
					"view",
					{
						class: "move",
						style: "transform:translateY(" + this.data.goodsCardBottom + "px)"
					},
					apivm.h(
						"view",
						{class: "goods-card"},
						apivm.h("img", {
							class: "goods-cover",
							mode: "aspectFill",
							src:
								"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/6e51da2766d83e1000c165a1277d7683.jpg",
							alt: ""
						}),
						apivm.h(
							"view",
							{class: "goods-info"},
							apivm.h("text", {class: "goods-title"}, "麻辣捞派滑牛肉"),
							apivm.h(
								"view",
								{class: "goods-footer"},
								apivm.h("text", {class: "goods-price-signal"}, "¥"),
								apivm.h("text", {class: "goods-price"}, "48.00"),

								apivm.h(
									"view",
									{class: "num-count"},

									apivm.h(
										"view",
										{class: "flex-h"},
										apivm.h("img", {
											class: "num-btn num-decrease",
											src: "../../image/icon/icon-cart-num-decrease.png"
										}),
										apivm.h("text", {class: "num-text"}, "1"),
										apivm.h("img", {
											class: "num-btn num-increase",
											src: "../../image/icon/icon-cart-num-increase.png"
										})
									)
								)
							)
						)
					),

					apivm.h(
						"safe-area",
						{class: "action-bar"},

						apivm.h(
							"view",
							{class: "action-btn btn-add-cart", onClick: this.addCart},
							apivm.h("text", {class: "btn-text"}, "加入购物车")
						),
						apivm.h(
							"view",
							{class: "action-btn btn-crash", onClick: this.crash},
							apivm.h("text", {class: "btn-text"}, "结算")
						)
					)
				)
			);
		};

		return TemplateOfGoodsAdd;
	})(Component);
	TemplateOfGoodsAdd.css = {
		".page": {
			height: "100%",
			display: "flex",
			transition: "all 0.5s",
			background: "#fff"
		},
		".mask": {flex: "1"},
		".move": {position: "relative", transition: "all 0.3s"},
		".goods-card": {
			background: "#fff",
			borderRadius: "10px 10px 0 0",
			padding: "30px 15px",
			flexDirection: "row"
		},
		".goods-cover": {width: "70px", height: "70px"},
		".goods-info": {marginLeft: "10px", flex: "1"},
		".goods-title": {
			fontSize: "14px",
			color: "#333",
			fontWeight: "bold",
			flex: "1"
		},
		".goods-footer": {flexDirection: "row"},
		".goods-price-signal": {fontSize: "12px", color: "#fe5760", marginTop: "3px"},
		".goods-price": {fontSize: "15px", color: "#fe5760", flex: "1"},
		".action-bar": {flexDirection: "row", background: "#fff"},
		".btn-add-cart": {background: "#ffc54a", height: "48px"},
		".btn-crash": {background: "#fe5760", height: "48px"},
		".btn-text": {color: "#fff", fontSize: "15px"},
		".action-btn": {flex: "1", alignItems: "center", justifyContent: "center"},
		".num-btn": {width: "22px", height: "22px", backgroundSize: "22px 22px"},
		".num-text": {
			padding: "0 8px",
			fontSize: "14px",
			color: "#333",
			marginTop: "2px",
			minWidth: "28px",
			textAlign: "center"
		},
		".flex-h": {flexDirection: "row"},
		".flex-1": {flex: "1"},
		".flex-center": {
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center"
		}
	};
	apivm.define("template-of-goods-add", TemplateOfGoodsAdd);
	apivm.render(apivm.h("template-of-goods-add", null), "body");
})();
