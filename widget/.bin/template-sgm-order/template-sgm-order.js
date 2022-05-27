(function() {
	var HocOrderListSgm = /*@__PURE__*/ (function(Component) {
		function HocOrderListSgm(props) {
			Component.call(this, props);
			this.data = {
				ordeBaseInfo: this.props.ordeBaseInfo || {
					orderid: "202203290948386376",
					status: 5,
					pay_price: 4198.88,
					buy_num: 2,
					endmiao: null,
					status_str: "已关闭",
					cnum: 3
				},

				buyProductList: this.props.buyProductList || [
					{
						title: "苹果笔记本电脑超薄",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/02b297b95bd2ae7aa0021ed8df11bede.png",
						price: 30.9,
						delprice: 50,
						key: "小盒/200g",
						buynum: 1,
						act: "tuan"
					},
					{
						title: "Apple 2019新款 Mac Pro 32G 256G八核 Intel Xeon W（3.5GHz…",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/899e2ba871eb98a66e22004747fb12df.png",
						price: 30.9,
						delprice: 40,
						key: "小盒/200g",
						buynum: 1,
						act: "buy"
					}
				]
			};
		}

		if (Component) HocOrderListSgm.__proto__ = Component;
		HocOrderListSgm.prototype = Object.create(Component && Component.prototype);
		HocOrderListSgm.prototype.constructor = HocOrderListSgm;
		HocOrderListSgm.prototype.apiready = function() {};
		HocOrderListSgm.prototype.orderItemClick = function() {
			this.fire("orderItemClick");
		};
		HocOrderListSgm.prototype.goodsItemClick = function() {
			this.fire("goodsItemClick");
		};
		HocOrderListSgm.prototype.fnCancelOrder = function() {
			this.fire("fnCancelOrder");
		};
		HocOrderListSgm.prototype.fnPayOrder = function() {
			this.fire("fnPayOrder");
		};
		HocOrderListSgm.prototype.fnCancelOrderPay = function() {
			this.fire("fnCancelOrderPay");
		};
		HocOrderListSgm.prototype.fnInvite = function() {
			this.fire("fnInvite");
		};
		HocOrderListSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{class: "order-list", "scroll-y": true},
				apivm.h(
					"view",
					{class: "order-list-item", onClick: this.orderItemClick},
					apivm.h(
						"view",
						{class: "order-list-item-top"},
						apivm.h(
							"text",
							{class: "order-list-item-top-text"},
							"订单编号: ",
							this.data.ordeBaseInfo.orderid
						),
						apivm.h(
							"text",
							{class: "order-list-item-top-text"},
							this.data.ordeBaseInfo.status_str
						)
					),
					apivm.h(
						"view",
						{class: "order-list-item-goods"},
						(Array.isArray(this.data.buyProductList)
							? this.data.buyProductList
							: Object.values(this.data.buyProductList)
						).map(function(good) {
							return apivm.h(
								"view",
								{
									class: "order-list-item-goods-item",
									onClick: function() {
										return this$1.goodsItemClick(good);
									}
								},
								apivm.h("img", {class: "order-list-item-goods-img", src: good.image}),
								apivm.h(
									"view",
									{class: "order-list-item-goods-right"},
									apivm.h("text", {class: "order-list-item-goods-title"}, good.title),
									apivm.h(
										"view",
										{class: "order-list-item-goods-guige-box"},
										apivm.h(
											"text",
											{class: "order-list-item-goods-guige"},
											good.key ? " " + good.key : "默认规格"
										),
										apivm.h(
											"text",
											{class: "order-list-item-goods-num"},
											"x" + (good.buynum || good.tuinum)
										)
									),
									apivm.h(
										"view",
										{class: "order-list-item-goods-bottom"},
										apivm.h(
											"text",
											{class: "order-list-item-goods-price"},
											"¥" + (good.act == "buy" ? good.delprice : good.price)
										)
									)
								)
							);
						})
					),
					this.data.ordeBaseInfo.status == 2
						? apivm.h(
								"view",
								{class: "order-list-item-footer"},
								apivm.h(
									"text",
									{class: "order-list-item-footer-szi"},
									"共",
									this.data.ordeBaseInfo.buy_num || 0,
									"件商品"
								),
								apivm.h("view", {class: "flex1"}),
								apivm.h("text", {class: "order-list-item-footer-szi"}, "合计："),
								apivm.h(
									"text",
									{class: "order-list-item-footer-rzi"},
									"￥",
									this.data.ordeBaseInfo.pay_price
								)
						  )
						: null,
					this.data.ordeBaseInfo.status == 2
						? apivm.h(
								"view",
								{class: "order-list-item-footer"},
								apivm.h("text", {class: "order-list-item-footer-tuantext"}, "还差"),
								apivm.h(
									"text",
									{class: "order-list-item-footer-tuannum"},
									this.data.ordeBaseInfo.cnum
								),
								apivm.h("text", {class: "order-list-item-footer-tuantext"}, "人拼成，"),
								apivm.h("hoc-count-down-sgm", {
									time: this.data.ordeBaseInfo.endmiao,
									desc: "剩余"
								}),
								apivm.h("view", {class: "flex1"}),
								apivm.h(
									"text",
									{
										class: "order-list-btn order-list-btn-orange",
										"data-index": index,
										onClick: this.fnInvite
									},
									"邀请好友"
								)
						  )
						: apivm.h(
								"view",
								{class: "order-list-item-footer"},
								apivm.h(
									"text",
									{class: "order-list-item-footer-szi"},
									"共",
									this.data.ordeBaseInfo.buy_num || 0,
									"件商品，合计:"
								),
								apivm.h(
									"text",
									{class: "order-list-item-footer-rzi"},
									"￥ ",
									this.data.ordeBaseInfo.pay_price
								),
								apivm.h("view", {class: "flex1"}),

								this.data.ordeBaseInfo.status == 1
									? apivm.h(
											"text",
											{
												class: "order-list-btn order-list-btn-gray",
												onClick: this.fnCancelOrder
											},
											"取消订单"
									  )
									: null,
								this.data.ordeBaseInfo.status == 1
									? apivm.h(
											"text",
											{
												class: "order-list-btn order-list-btn-orange",
												onClick: this.fnPayOrder
											},
											"立即付款"
									  )
									: null,

								this.data.ordeBaseInfo.status > 1 && this.data.ordeBaseInfo.status < 4
									? apivm.h(
											"text",
											{
												class: "order-list-btn order-list-btn-gray",
												onClick: this.fnCancelOrderPay
											},
											"取消订单"
									  )
									: null,

								this.data.ordeBaseInfo.status == 4
									? apivm.h(
											"text",
											{
												class: "order-list-btn order-list-btn-orange",
												onClick: this.fnConfirmOrder
											},
											"确认收货"
									  )
									: null
						  )
				)
			);
		};

		return HocOrderListSgm;
	})(Component);
	HocOrderListSgm.css = {
		".order-list": {flex: "1"},
		".order-list-item": {width: "100%", background: "#ffffff", marginTop: "8px"},
		".order-list-item-top": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			height: "44px",
			padding: "0 15px",
			borderBottom: "1px solid #f8f8f8"
		},
		".order-list-item-top-text": {fontSize: "14px", color: "#333333"},
		".order-list-item-footer": {
			flexDirection: "row",
			alignItems: "center",
			height: "44px",
			padding: "0 15px",
			borderBottom: "1px solid #f8f8f8"
		},
		".order-list-item-footer-tuantext": {fontSize: "12px", color: "#333333"},
		".order-list-item-footer-tuannum": {
			fontSize: "12px",
			color: "#ff7037",
			margin: "0 3px"
		},
		".order-list-item-footer-szi": {fontSize: "12px", color: "#333333"},
		".order-list-item-footer-rzi": {fontSize: "16px", color: "#fe5c00"},
		".flex1": {flex: "1"},
		".order-list-btn": {
			width: "70px",
			height: "30px",
			lineHeight: "30px",
			textAlign: "center",
			marginLeft: "8px",
			borderRadius: "2px",
			fontSize: "14px",
			padding: "0 3px"
		},
		".order-list-btn-gray": {
			backgroundColor: "white",
			border: "1px solid #b5b5b5",
			color: "#999999"
		},
		".order-list-btn-orange": {backgroundColor: "#339dff", color: "white"},
		".order-list-item-goods": {backgroundColor: "white"},
		".order-list-item-goods-item": {
			flexDirection: "row",
			paddingBottom: "15px",
			margin: "15px 15px 0",
			borderBottom: "1px solid #f8f8f8"
		},
		".order-list-item-goods-img": {
			width: "60px",
			height: "60px",
			marginRight: "12px",
			borderRadius: "4px"
		},
		".order-list-item-goods-right": {alignContent: "center", flex: "1"},
		".order-list-item-goods-title": {fontSize: "14px", color: "#333333"},
		".order-list-item-goods-guige-box": {
			flexDirection: "row",
			justifyContent: "space-between",
			marginTop: "5px"
		},
		".order-list-item-goods-guige,\n.order-list-item-goods-num": {
			fontSize: "12px",
			color: "#999999"
		},
		".order-list-item-goods-bottom": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: "10px"
		},
		".order-list-item-goods-price": {fontSize: "14px", color: "#fe904a"}
	};
	apivm.define("hoc-order-list-sgm", HocOrderListSgm);

	var HocTabSwitchSgm = /*@__PURE__*/ (function(Component) {
		function HocTabSwitchSgm(props) {
			Component.call(this, props);
			this.data = {
				defaultTabBarList: this.props.tabList || [
					{
						text: "全部",
						type: 0
					},
					{
						text: "待付款",
						type: 1
					},
					{
						text: "待成团",
						type: 2
					},
					{
						text: "待发货",
						type: 3
					},
					{
						text: "待收货",
						type: 4
					},
					{
						text: "已完成",
						type: 5
					}
				],

				curTab: this.props.curTab !== undefined ? this.props.curTab : 0
			};
		}

		if (Component) HocTabSwitchSgm.__proto__ = Component;
		HocTabSwitchSgm.prototype = Object.create(Component && Component.prototype);
		HocTabSwitchSgm.prototype.constructor = HocTabSwitchSgm;
		HocTabSwitchSgm.prototype.apiready = function() {};
		HocTabSwitchSgm.prototype.tabClick = function(item) {
			this.data.curTab = item.type;
			this.fire("tabClick", item);
		};
		HocTabSwitchSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "tabs"},
				(Array.isArray(this.props.tabList || this.data.defaultTabBarList)
					? this.props.tabList || this.data.defaultTabBarList
					: Object.values(this.props.tabList || this.data.defaultTabBarList)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							key: item$1.type,
							class: "nav_one",
							onClick: function() {
								return this$1.tabClick(item$1);
							}
						},
						apivm.h(
							"text",
							{class: 0 == index$1 ? "nav_zi nav_zi_on" : "nav_zi"},
							item$1.text
						)
					);
				})
			);
		};

		return HocTabSwitchSgm;
	})(Component);
	HocTabSwitchSgm.css = {
		".tabs": {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			height: "44px",
			backgroundColor: "white",
			overflow: "auto"
		},
		".nav_one": {
			flexShrink: "0",
			width: "66px",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			justifyContent: "center",
			alignItems: "center"
		},
		".nav_zi": {
			padding: "7px 0",
			fontSize: "14px",
			color: "#999999",
			borderBottom: "none"
		},
		".nav_zi_on": {color: "#ff7037", borderBottom: "2px solid #ff7037"}
	};
	apivm.define("hoc-tab-switch-sgm", HocTabSwitchSgm);

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

	var TemplateSgmOrder = /*@__PURE__*/ (function(Component) {
		function TemplateSgmOrder(props) {
			Component.call(this, props);
			this.data = {
				hocTabSwitchSgmTabList: [
					{
						text: "全部",
						value: "all"
					},
					{
						text: "待付款",
						value: "pay"
					},
					{
						text: "待成团",
						value: "pin"
					},
					{
						text: "待发货",
						value: "sendGoods"
					},
					{
						text: "待收货",
						value: "getGoods"
					},
					{
						text: "已完成",
						value: "done"
					}
				],

				hocOrderListSgmOrdeBaseInfo: {
					orderid: "202203290948386376",
					status: 5,
					pay_price: 4198.88,
					buy_num: 2,
					endmiao: 2000000,
					status_str: "已关闭",
					cnum: 3
				},

				hocOrderListSgmBuyProductList: [
					{
						title: "苹果笔记本电脑超薄",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/02b297b95bd2ae7aa0021ed8df11bede.png",
						price: 30.9,
						delprice: 50,
						key: "小盒/200g",
						buynum: 1,
						act: "tuan"
					},
					{
						title: "Apple 2019新款 Mac Pro 32G 256G八核 Intel Xeon W（3.5GHz…",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/899e2ba871eb98a66e22004747fb12df.png",
						price: 30.9,
						delprice: 40,
						key: "小盒/200g",
						buynum: 1,
						act: "buy"
					}
				]
			};
		}

		if (Component) TemplateSgmOrder.__proto__ = Component;
		TemplateSgmOrder.prototype = Object.create(Component && Component.prototype);
		TemplateSgmOrder.prototype.constructor = TemplateSgmOrder;
		TemplateSgmOrder.prototype.apiready = function() {};
		TemplateSgmOrder.prototype.goodsItemClick = function() {
			api.openWin({
				name: "orderDetail",
				url: "../template-sgm-order_detail/template-sgm-order_detail.stml"
			});
		};
		TemplateSgmOrder.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("hoc-nav-bar-sgm", {isShowBack: true, title: "我的订单"}),
				apivm.h("hoc-tab-switch-sgm", {tabList: this.data.hocTabSwitchSgmTabList}),
				apivm.h("hoc-order-list-sgm", {
					ordeBaseInfo: this.data.hocOrderListSgmOrdeBaseInfo,
					buyProductList: this.data.hocOrderListSgmBuyProductList,
					onGoodsItemClick: this.goodsItemClick
				})
			);
		};

		return TemplateSgmOrder;
	})(Component);
	TemplateSgmOrder.css = {".page": {height: "100%", backgroundColor: "#f8f8f8"}};
	apivm.define("template-sgm-order", TemplateSgmOrder);
	apivm.render(apivm.h("template-sgm-order", null), "body");
})();
