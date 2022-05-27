(function() {
	var HocOrderListOd = /*@__PURE__*/ (function(Component) {
		function HocOrderListOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						orderid: "517932164548",
						status: 1,
						pay_price: 5999,
						buy_data_title: "夏新款套装女洋气时尚短裤阔腿裤",
						buy_data_image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3ee90482ef5b13bdbd9e9dc3f79f495e.png",
						buy_data_price: 699,
						buy_data_key: "白色/S码",
						buy_data_buynum: 2,
						status_str: "已关闭",
						buy_num: 2
					},

					{
						orderid: "517932164548",
						status: 9,
						pay_price: 6999,
						buy_data_title:
							"莫代尔无袖吊带连衣裙春秋侧开叉长裙女夏季内搭修身显瘦打底裙子莫…",
						buy_data_image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/1cc4b3d74953e9426e83e6e0bb3e5afd.png",
						buy_data_price: 6999,
						buy_data_key: "黑色/M码",
						buy_data_buynum: 2,
						status_str: "已关闭",
						buy_num: 2
					}
				]
			};
		}

		if (Component) HocOrderListOd.__proto__ = Component;
		HocOrderListOd.prototype = Object.create(Component && Component.prototype);
		HocOrderListOd.prototype.constructor = HocOrderListOd;
		HocOrderListOd.prototype.apiready = function() {};
		HocOrderListOd.prototype.onDetailClick = function() {
			api.openWin({
				name: "detail",
				url: "widget://pages/template-od-detail/template-od-detail"
			});
		};
		HocOrderListOd.prototype.onPayClick = function() {
			api.openWin({
				name: "place_order",
				url: "widget://pages/template-od-place_order/template-od-place_order"
			});
		};
		HocOrderListOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "good-list"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{class: "list_one", "data-orderid": item$1.orderid},
						apivm.h(
							"view",
							{class: "top_box"},
							apivm.h("text", {class: "top_text"}, "订单编号：" + item$1.orderid),
							apivm.h("text", {class: "top_text"}, item$1.status_str)
						),
						apivm.h(
							"view",
							{class: "order-goods-page"},
							apivm.h(
								"view",
								{class: "order-goods-item", "data-index": index$1},
								apivm.h("image", {
									onClick: this$1.onDetailClick,
									class: "order-goods-img",
									src: item$1.buy_data_image,
									mode: "aspectFill"
								}),
								apivm.h(
									"view",
									{class: "order-goods-right"},
									apivm.h("text", {class: "order-goods-title"}, item$1.buy_data_title),
									apivm.h(
										"view",
										{class: "order-goods-guige-box"},
										apivm.h(
											"text",
											{class: "order-goods-guige"},
											item$1.buy_data_key ? " " + item$1.buy_data_key : "默认规格"
										),
										apivm.h(
											"text",
											{class: "order-goods-num"},
											"x" + item$1.buy_data_buynum
										)
									),
									apivm.h(
										"view",
										{class: "order-goods-bottom"},
										apivm.h(
											"text",
											{class: "order-goods-price"},
											"¥" + item$1.buy_data_price
										)
									)
								)
							)
						),
						apivm.h(
							"view",
							{class: "bot-box"},
							apivm.h(
								"text",
								{class: "list_szi"},
								"共" + (item$1.buy_num || 0) + "件商品，合计:"
							),
							apivm.h("text", {class: "list_rzi"}, "￥" + item$1.pay_price),
							apivm.h("view", {class: "flex1"}),

							item$1.status == 1
								? apivm.h(
										"text",
										{class: "btn btn-gray", "data-id": item$1.id},
										"取消订单"
								  )
								: null,
							item$1.status == 1
								? apivm.h(
										"text",
										{
											class: "btn btn-orange",
											onClick: this$1.onPayClick,
											"data-orderid": item$1.orderid
										},
										"立即付款"
								  )
								: null,

							item$1.status > 1 && item$1.status < 4
								? apivm.h(
										"text",
										{class: "btn btn-gray", "data-id": item$1.id},
										"取消订单"
								  )
								: null,

							item$1.status == 4
								? apivm.h(
										"text",
										{class: "btn btn-orange", "data-id": item$1.id},
										"确认收货"
								  )
								: null
						)
					);
				})
			);
		};

		return HocOrderListOd;
	})(Component);
	HocOrderListOd.css = {
		".list_one": {width: "100%", background: "#ffffff", marginTop: "8px"},
		".top_box": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			height: "44px",
			padding: "0 15px",
			borderBottom: "1px solid #f8f8f8"
		},
		".top_text": {fontSize: "14px", color: "#333333"},
		".bot-box": {
			flexDirection: "row",
			alignItems: "center",
			height: "44px",
			padding: "0 15px"
		},
		".list_szi": {fontSize: "12px", color: "#333333"},
		".list_rzi": {fontSize: "16px", color: "#fe5c00"},
		".flex1": {flex: "1"},
		".btn": {
			width: "70px",
			height: "30px",
			lineHeight: "30px",
			textAlign: "center",
			marginLeft: "8px",
			borderRadius: "2px",
			fontSize: "14px",
			padding: "0 3px"
		},
		".btn-gray": {
			backgroundColor: "white",
			border: "1px solid #b5b5b5",
			color: "#999999"
		},
		".btn-orange": {backgroundColor: "#ff7037", color: "white"},
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
	apivm.define("hoc-order-list-od", HocOrderListOd);

	var HocOrderTabOd = /*@__PURE__*/ (function(Component) {
		function HocOrderTabOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						text: "全部",
						type: 0
					},

					{
						text: "待付款",
						type: 1
					},

					{
						text: "待发货",
						type: 2
					},

					{
						text: "待收货",
						type: 4
					},

					{
						text: "已完成",
						type: 5
					}
				]
			};
		}

		if (Component) HocOrderTabOd.__proto__ = Component;
		HocOrderTabOd.prototype = Object.create(Component && Component.prototype);
		HocOrderTabOd.prototype.constructor = HocOrderTabOd;
		HocOrderTabOd.prototype.apiready = function() {};
		HocOrderTabOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "tabs"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{class: "nav_one", "data-index": index$1},
						apivm.h(
							"text",
							{class: 0 == index$1 ? "nav_zi nav_zi_on" : "nav_zi"},
							item$1.text
						)
					);
				})
			);
		};

		return HocOrderTabOd;
	})(Component);
	HocOrderTabOd.css = {
		".tabs": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-around",
			height: "44px",
			backgroundColor: "white"
		},
		".nav_one": {flex: "1", justifyContent: "center", alignItems: "center"},
		".nav_zi": {
			padding: "7px 0",
			fontSize: "14px",
			color: "#999999",
			borderBottom: "none"
		},
		".nav_zi_on": {color: "#ff7037", borderBottom: "2px solid #ff7037"}
	};
	apivm.define("hoc-order-tab-od", HocOrderTabOd);

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

	var TemplateOdOrderList = /*@__PURE__*/ (function(Component) {
		function TemplateOdOrderList(props) {
			Component.call(this, props);
			this.data = {
				orderList: [
					{
						orderid: "517932164548",
						status: 1,
						pay_price: 5999,
						buy_data_title: "夏新款套装女洋气时尚短裤阔腿裤",
						buy_data_image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3ee90482ef5b13bdbd9e9dc3f79f495e.png",
						buy_data_price: 699,
						buy_data_key: "白色/S码",
						buy_data_buynum: 2,
						status_str: "已关闭",
						buy_num: 2
					},

					{
						orderid: "517932164548",
						status: 9,
						pay_price: 6999,
						buy_data_title:
							"莫代尔无袖吊带连衣裙春秋侧开叉长裙女夏季内搭修身显瘦打底裙子莫…",
						buy_data_image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/1cc4b3d74953e9426e83e6e0bb3e5afd.png",
						buy_data_price: 6999,
						buy_data_key: "黑色/M码",
						buy_data_buynum: 2,
						status_str: "已关闭",
						buy_num: 2
					}
				]
			};
		}

		if (Component) TemplateOdOrderList.__proto__ = Component;
		TemplateOdOrderList.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOdOrderList.prototype.constructor = TemplateOdOrderList;
		TemplateOdOrderList.prototype.apiready = function() {};
		TemplateOdOrderList.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("hoc-nav-bar-od", {msg: "我的订单", isBack: true}),
				apivm.h("hoc-order-tab-od", null),
				apivm.h("hoc-order-list-od", {list: this.data.orderList})
			);
		};

		return TemplateOdOrderList;
	})(Component);
	TemplateOdOrderList.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"}
	};
	apivm.define("template-od-order_list", TemplateOdOrderList);
	apivm.render(apivm.h("template-od-order_list", null), "body");
})();
