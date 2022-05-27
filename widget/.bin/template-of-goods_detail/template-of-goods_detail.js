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

	var TemplateOfGoodsDetail = /*@__PURE__*/ (function(Component) {
		function TemplateOfGoodsDetail(props) {
			Component.call(this, props);
			this.data = {
				goods: false,
				count: 1,
				cartData: false,
				safeAreaTop: 0
			};
			this.compute = {
				price: function() {
					return Number(this.data.goods.curt_price)
						.toFixed(2)
						.split(".");
				}
			};
		}

		if (Component) TemplateOfGoodsDetail.__proto__ = Component;
		TemplateOfGoodsDetail.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOfGoodsDetail.prototype.constructor = TemplateOfGoodsDetail;
		TemplateOfGoodsDetail.prototype.countChange = function(e) {
			this.data.count += e.detail.change;
		};
		TemplateOfGoodsDetail.prototype.closeWin = function() {
			api.closeWin();
		};
		TemplateOfGoodsDetail.prototype.addCart = function() {
			var cartList = api.getPrefs({sync: true, key: "CART-DATA"}) || "{}";
			cartList = JSON.parse(cartList);
			cartList[this.data.goods.id] = {
				goods: this.data.goods,
				count: this.data.count
			};
			api.setPrefs({key: "CART-DATA", value: cartList});
			api.toast({
				msg: "成功加入" + this.data.count + "个到购物车",
				location: "middle"
			});
			setTabBarBadge(2, Object.keys(cartList).length);
		};
		TemplateOfGoodsDetail.prototype.crash = function() {
			var pageParam = {list: [this.props]};
			api.openWin({
				name: "pending_order",
				url: "../../pages/template-of-pending_order/template-of-pending_order.stml",
				pageParam: pageParam
			});
		};
		TemplateOfGoodsDetail.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page flex"},
				apivm.h("img", {
					class: "goods-pic",
					mode: "aspectFill",
					src:
						"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/7c2a4833b73b7003b4ae246bac8b40ee.jpg",
					alt: ""
				}),
				apivm.h(
					"view",
					{
						class: "back-btn",
						style: "top:" + this.data.safeAreaTop + "px",
						onClick: this.closeWin
					},
					apivm.h("img", {
						class: "back-btn-img",
						src: "../../image/icon/icon-goods-detail-back-btn.png",
						alt: ""
					})
				),
				apivm.h(
					"view",
					{class: "goods-info"},
					apivm.h("text", {class: "goods-name"}, "麻辣捞派滑牛肉"),
					apivm.h("text", {class: "goods-desc"}, "超级美味的麻辣捞派滑牛肉哦")
				),
				apivm.h(
					"view",
					{class: "price-count flex-h flex-1"},
					apivm.h(
						"view",
						{class: "goods-price-wrap flex-h"},
						apivm.h("text", {class: "goods-price-signal"}, "¥"),
						apivm.h("text", {class: "goods-price"}, " 48"),
						apivm.h("text", {class: "goods-price-signal"}, ".00")
					),
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
			);
		};

		return TemplateOfGoodsDetail;
	})(Component);
	TemplateOfGoodsDetail.css = {
		".page": {height: "100%", background: "#fff"},
		".goods-pic": {width: "100%", height: "375px"},
		".goods-price-wrap": {flex: "1"},
		".goods-info": {padding: "16px 15px", borderBottom: "1px solid #eeeeee"},
		".goods-name": {fontSize: "18px", fontWeight: "500", color: "#333333"},
		".goods-desc": {fontSize: "15px", color: "#666666", marginTop: "5px"},
		".price-count": {padding: "10px 15px", flex: "1", alignItems: "flex-start"},
		".goods-price-signal": {fontSize: "20px", color: "#fe5760", marginTop: "8px"},
		".goods-price": {fontSize: "28px", color: "#fe5760", fontWeight: "bold"},
		".num-count": {marginTop: "6px"},
		".back-btn": {
			position: "absolute",
			left: "15px",
			width: "32px",
			height: "32px",
			zIndex: "999"
		},
		".back-btn-img": {width: "32px", height: "32px"},
		".flex-h": {flexDirection: "row"},
		".flex-1": {flex: "1"},
		".flex-center": {
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center"
		},
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
		}
	};
	apivm.define("template-of-goods_detail", TemplateOfGoodsDetail);
	apivm.render(apivm.h("template-of-goods_detail", null), "body");
})();
