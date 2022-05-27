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

	var TemplateOfPendingOrder = /*@__PURE__*/ (function(Component) {
		function TemplateOfPendingOrder(props) {
			Component.call(this, props);
			this.data = {
				list: [],
				remark: ""
			};
			this.compute = {
				totalPrice: function() {
					var list = this.data.list;
					return (list.length
						? list.reduce(function(total, item) {
								return total + item.goods.curt_price * item.count;
						  }, 0)
						: 0
					).toFixed(2);
				},
				formData: function() {
					var remark = this.data.remark;
					var list = this.data.list.map(function(item) {
						return {goods_id: item.goods.id, num: item.count};
					});
					return {remark: remark, list: list};
				},
				goods_id: function() {},
				num: function() {},
				remark: function() {},
				list: function() {}
			};
		}

		if (Component) TemplateOfPendingOrder.__proto__ = Component;
		TemplateOfPendingOrder.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOfPendingOrder.prototype.constructor = TemplateOfPendingOrder;
		TemplateOfPendingOrder.prototype.apiready = function() {
			this.data.list = api.pageParam.list;
		};
		TemplateOfPendingOrder.prototype.close = function() {
			api.closeWin();
		};
		TemplateOfPendingOrder.prototype.onBlur = function(e) {
			this.data.remark = e.target.value;
		};
		TemplateOfPendingOrder.prototype.addOrder = function() {
			// 打开结果页
			api.openWin({
				name: "pay_result",
				url: "../template-of-pay_result/template-of-pay_result.stml"
			});

			// 清空购物车
			api.setPrefs({
				key: "CART-DATA",
				value: {}
			});

			setTabBarBadge(2, 0);
		};
		TemplateOfPendingOrder.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "page"},

				apivm.h(
					"view",
					{class: "header"},
					apivm.h("img", {
						src: "../../image/icon/icon-header-back.png",
						alt: "",
						class: "header-icon",
						onClick: this.close
					}),
					apivm.h("text", {class: "header-text"}, "待付款订单"),
					apivm.h("view", {class: "header-icon"})
				),

				apivm.h(
					"scroll-view",
					{class: "list", "show-scrollbar": false},
					apivm.h("text", {class: "list-title"}, "商品列表"),
					apivm.h(
						"view",
						{class: "list-item"},
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
							apivm.h(
								"view",
								{class: "goods-main"},
								apivm.h("text", {class: "goods-title"}, "麻辣捞派滑牛肉"),
								apivm.h("text", {class: "goods-price-signal"}, "¥"),
								apivm.h("text", {class: "goods-price"}, " 58.00")
							),
							apivm.h("text", {class: "goods-count"}, "× 2")
						)
					),

					apivm.h(
						"view",
						{class: "list-item"},
						apivm.h("img", {
							class: "goods-cover",
							mode: "aspectFill",
							src:
								"http://a565c1d1f30b65a4d46d.qiniucdn.apicloud-system.com/apicloud/3b4905680e5d0d520c4f511361c502b9.png",
							alt: ""
						}),
						apivm.h(
							"view",
							{class: "goods-info"},
							apivm.h(
								"view",
								{class: "goods-main"},
								apivm.h("text", {class: "goods-title"}, "捞派毛肚"),
								apivm.h("text", {class: "goods-price-signal"}, "¥"),
								apivm.h("text", {class: "goods-price"}, " 48.00")
							),
							apivm.h("text", {class: "goods-count"}, "× 1")
						)
					),

					apivm.h(
						"view",
						{class: "order-note"},
						apivm.h("text", {class: "order-note-key"}, "备注"),
						apivm.h("input", {
							class: "order-note-input",
							placeholder: "如需备注请输入",
							onBlur: function(event) {
								if (this$1.onBlur) {
									this$1.onBlur(event);
								} else {
									onBlur(event);
								}
							},
							maxlength: "30",
							id: "remark"
						})
					)
				),

				apivm.h(
					"view",
					{class: "order-footer"},
					apivm.h("text", {class: "total-text"}, "合计："),
					apivm.h("text", {class: "total-price"}, "¥ 28880.00"),
					apivm.h(
						"view",
						{class: "order-pay-btn", onClick: this.addOrder},
						apivm.h("text", {class: "order-pay-btn-text"}, "立即支付")
					)
				)
			);
		};

		return TemplateOfPendingOrder;
	})(Component);
	TemplateOfPendingOrder.css = {
		".page": {height: "100%", display: "flex", background: "#fff"},
		".header": {
			height: "44px",
			alignItems: "center",
			justifyContent: "space-between",
			flexDirection: "row"
		},
		".header-icon": {width: "22px", height: "22px", margin: "10px"},
		".header-text": {color: "#020202", fontSize: "18px", fontWeight: "bold"},
		".list": {flex: "1", padding: "15px", boxSizing: "border-box"},
		".list-title": {fontSize: "18px", fontWeight: "bold", color: "#666"},
		".list-item": {marginTop: "20px", flexDirection: "row"},
		".goods-cover": {width: "70px", height: "70px", borderRadius: "4px"},
		".goods-info": {display: "flex", marginLeft: "10px", flex: "1"},
		".goods-main": {flexDirection: "row"},
		".goods-title": {
			fontSize: "15px",
			color: "#333",
			fontWeight: "bold",
			flex: "1"
		},
		".goods-price-signal": {
			color: "#fe5760",
			fontWeight: "bold",
			fontSize: "14px",
			marginTop: "3px"
		},
		".goods-price": {color: "#fe5760", fontWeight: "bold", fontSize: "18px"},
		".goods-sub": {flex: "1", justifyContent: "center", alignItems: "flex-end"},
		".goods-count": {
			fontSize: "15px",
			color: "#999",
			display: "block",
			textAlign: "right"
		},
		".order-note": {
			flexDirection: "row",
			padding: "15px 0",
			alignItems: "center"
		},
		".order-note-key": {fontSize: "15px", color: "#333", fontWeight: "bold"},
		".order-note-input": {
			flex: "1",
			textAlign: "right",
			fontSize: "15px",
			border: "none"
		},
		".order-footer": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			borderTop: "1px solid #eee"
		},
		".total-text": {color: "#333", fontSize: "12px", marginLeft: "15px"},
		".total-price": {
			color: "#fe5760",
			fontSize: "20px",
			fontWeight: "bold",
			flex: "1"
		},
		".order-pay-btn": {
			width: "120px",
			height: "48px",
			background: "#fe5760",
			alignItems: "center",
			justifyContent: "center"
		},
		".order-pay-btn-text": {color: "#fff", fontSize: "15px"}
	};
	apivm.define("template-of-pending_order", TemplateOfPendingOrder);
	apivm.render(apivm.h("template-of-pending_order", null), "body");
})();
