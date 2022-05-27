(function() {
	var HocOrderListEt = /*@__PURE__*/ (function(Component) {
		function HocOrderListEt(props) {
			Component.call(this, props);
			this.data = {
				orderList: this.props.orderList || [
					{
						id: "111",
						status: 1,
						order_number: 202202,
						amount: 1000,
						title: "数学竞赛"
					},
					{
						id: "222",
						status: 1,
						order_number: 202202,
						amount: 1000,
						title: "数学竞赛"
					}
				]
			};
		}

		if (Component) HocOrderListEt.__proto__ = Component;
		HocOrderListEt.prototype = Object.create(Component && Component.prototype);
		HocOrderListEt.prototype.constructor = HocOrderListEt;
		HocOrderListEt.prototype.apiready = function() {};
		HocOrderListEt.prototype.handleClick = function(item) {
			this.fire("itemClick", item);
		};
		HocOrderListEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{"scroll-y": true, "show-scrollbar": false, class: "b-order-list"},
				(Array.isArray(this.data.orderList)
					? this.data.orderList
					: Object.values(this.data.orderList)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{
							class: "b-order-card",
							onClick: function() {
								return this$1.handleClick(item$1);
							},
							key: item$1.id
						},
						apivm.h(
							"view",
							{class: "b-order-card__header"},
							apivm.h("text", {class: "b-order-card__header--title"}, item$1.title),
							item$1.status === 1
								? apivm.h(
										"text",
										{class: "b-order-card__header--status", style: "color:#FA6400;"},
										" • 待支付"
								  )
								: item$1.status === 2
								? apivm.h(
										"text",
										{class: "b-order-card__header--status", style: "color:#00CB97;"},
										" • 已完成"
								  )
								: null
						),
						apivm.h(
							"view",
							{class: "b-order-card__content"},
							apivm.h(
								"text",
								{class: "b-order-card__content--li b-order-card__content--order"},
								"订单号：",
								item$1.order_number
							),
							apivm.h(
								"text",
								{class: "b-order-card__content--li"},
								"支付金额：",
								item$1.amount,
								"元"
							)
						)
					);
				})
			);
		};

		return HocOrderListEt;
	})(Component);
	HocOrderListEt.css = {
		".b-order-list": {height: "100%", padding: "16px", background: "#f8f8f8"},
		".b-order-card": {
			background: "#fff",
			boxShadow: "0 2px 6px #e2e0e0",
			borderRadius: "4px",
			marginBottom: "10px"
		},
		".b-order-card__header": {
			flexFlow: "row nowrap",
			padding: "20px 10px",
			borderBottom: "1px solid #F1F1F1"
		},
		".b-order-card__header--title": {
			fontSize: "16px",
			fontWeight: "bold",
			color: "#333333",
			flex: "1"
		},
		".b-order-card__header--status": {fontSize: "14px"},
		".b-order-card__content": {padding: "10px"},
		".b-order-card__content--order": {marginBottom: "10px"},
		".b-order-card__content--li": {color: "#999", fontSize: "14px"}
	};
	apivm.define("hoc-order-list-et", HocOrderListEt);

	var HocHeaderBarEt = /*@__PURE__*/ (function(Component) {
		function HocHeaderBarEt(props) {
			Component.call(this, props);
			this.data = {
				title: this.props.title !== undefined ? this.props.title : "柚子英语教育",
				isBack: this.props.isBack || false,
				leftIcon: this.props.leftIcon || null,
				rightIcon: this.props.rightIcon || null
			};
		}

		if (Component) HocHeaderBarEt.__proto__ = Component;
		HocHeaderBarEt.prototype = Object.create(Component && Component.prototype);
		HocHeaderBarEt.prototype.constructor = HocHeaderBarEt;
		HocHeaderBarEt.prototype.onBack = function() {
			this.fire("onBack");
			api.closeWin();
		};
		HocHeaderBarEt.prototype.onClickRight = function() {
			this.fire("onClickRight");
		};
		HocHeaderBarEt.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "a-header"},
				this.data.isBack
					? apivm.h(
							"view",
							{class: "a-header__icon a-header__icon--left", onClick: this.onBack},
							apivm.h("img", {
								src:
									this.data.leftIcon ||
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/0b234caf9662d757a20a96b70f0d4eda.png",
								class: "a-header__icon--img"
							})
					  )
					: null,
				apivm.h("text", {class: "a-header--text"}, this.data.title),
				this.data.rightIcon
					? apivm.h(
							"view",
							{
								class: "a-header__icon a-header__icon--right",
								onClick: this.onClickRight
							},
							apivm.h("img", {src: this.data.rightIcon, class: "a-header__icon--img"})
					  )
					: null
			);
		};

		return HocHeaderBarEt;
	})(Component);
	HocHeaderBarEt.css = {
		".a-header": {
			background: "#fff",
			flexFlow: "row nowrap",
			borderBottom: "1px solid #f0f0f0",
			flexShrink: "0"
		},
		".a-header__icon": {padding: "15px", alignSelf: "center"},
		".a-header__icon--img": {width: "18px", height: "18px"},
		".a-header--text": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#000",
			height: "26px",
			margin: "9px 0",
			textAlign: "center",
			flex: "1"
		}
	};
	apivm.define("hoc-header-bar-et", HocHeaderBarEt);

	var TemplateEtOrderList = /*@__PURE__*/ (function(Component) {
		function TemplateEtOrderList(props) {
			Component.call(this, props);
			this.data = {
				orderList: [
					{
						id: "111",
						status: 2,
						order_number: 202202021023,
						amount: 3500,
						title: "托福提高班"
					},
					{
						id: "222",
						status: 1,
						order_number: 202202021024,
						amount: 5000,
						title: "托福提分班"
					}
				]
			};
		}

		if (Component) TemplateEtOrderList.__proto__ = Component;
		TemplateEtOrderList.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateEtOrderList.prototype.constructor = TemplateEtOrderList;
		TemplateEtOrderList.prototype.intoDetail = function() {
			api.openWin({
				name: "template-et-order-detail",
				url: "../template-et-order-detail/template-et-order-detail.stml"
			});
		};
		TemplateEtOrderList.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {title: "我的订单", isBack: true}),
				apivm.h(
					"scroll-view",
					{style: "flex: 1;", "scroll-y": true, "show-scrollbar": false},
					apivm.h("hoc-order-list-et", {
						onItemClick: this.intoDetail,
						orderList: this.data.orderList
					})
				)
			);
		};

		return TemplateEtOrderList;
	})(Component);
	TemplateEtOrderList.css = {".page": {height: "100%", background: "#F8F8F8"}};
	apivm.define("template-et-order-list", TemplateEtOrderList);
	apivm.render(apivm.h("template-et-order-list", null), "body");
})();
