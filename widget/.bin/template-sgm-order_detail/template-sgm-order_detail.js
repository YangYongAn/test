(function() {
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

	var HocOrderAddressSgm = /*@__PURE__*/ (function(Component) {
		function HocOrderAddressSgm(props) {
			Component.call(this, props);
			this.data = {
				consignee:
					this.props.consignee !== undefined ? this.props.consignee : "樱桃小丸子",
				phone: this.props.phone !== undefined ? this.props.phone : 1234556789,
				area: this.props.area !== undefined ? this.props.area : "北京",
				detailAddress:
					this.props.detailAddress !== undefined
						? this.props.detailAddress
						: "海淀区用友"
			};
		}

		if (Component) HocOrderAddressSgm.__proto__ = Component;
		HocOrderAddressSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocOrderAddressSgm.prototype.constructor = HocOrderAddressSgm;
		HocOrderAddressSgm.prototype.apiready = function() {};
		HocOrderAddressSgm.prototype.phoneHash = function(phone) {
			if (!phone) {
				return "";
			}
			phone = phone.substring(0, 3) + "****" + phone.substring(7);
			return phone;
		};
		HocOrderAddressSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "order-detail-address"},
				apivm.h("image", {
					class: "order-detail-address-img",
					src:
						"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/0d5e497818619d204390eb9163f55086.png"
				}),
				apivm.h(
					"view",
					{class: "order-detail-address-wrap"},
					apivm.h(
						"view",
						null,
						apivm.h(
							"view",
							{class: "order-detail-address-tit"},
							apivm.h(
								"text",
								{class: "order-detail-address-name"},
								"收货人：" + this.data.consignee
							),
							apivm.h(
								"text",
								{class: "order-detail-address-phone"},
								this.phoneHash(this.data.phone.toString())
							)
						),
						apivm.h(
							"text",
							{class: "order-detail-address-details"},
							this.data.area + this.data.detailAddress
						)
					)
				)
			);
		};

		return HocOrderAddressSgm;
	})(Component);
	HocOrderAddressSgm.css = {
		".order-detail-address": {
			flexDirection: "row",
			alignItems: "center",
			padding: "16px 0",
			backgroundColor: "#fff",
			marginTop: "8px",
			marginBottom: "10px"
		},
		".order-detail-address-img": {
			width: "32px",
			height: "32px",
			marginLeft: "10px"
		},
		".order-detail-address-wrap": {
			justifyContent: "center",
			flex: "1",
			margin: "0 15px"
		},
		".noaddress": {fontSize: "15px", color: "#333333"},
		".order-detail-address-tit": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between"
		},
		".order-detail-address-name": {fontSize: "15px", color: "#333333"},
		".order-detail-address-phone": {
			marginTop: "2px",
			fontSize: "13px",
			color: "#777777"
		},
		".order-detail-address-details": {
			marginTop: "8px",
			fontSize: "12px",
			color: "#333333"
		}
	};
	apivm.define("hoc-order-address-sgm", HocOrderAddressSgm);

	var HocOrderDetailStatusSgm = /*@__PURE__*/ (function(Component) {
		function HocOrderDetailStatusSgm(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) HocOrderDetailStatusSgm.__proto__ = Component;
		HocOrderDetailStatusSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocOrderDetailStatusSgm.prototype.constructor = HocOrderDetailStatusSgm;
		HocOrderDetailStatusSgm.prototype.apiready = function() {};
		HocOrderDetailStatusSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "order-detail-statetip"},
				apivm.h(
					"view",
					{class: "order-detail-statetip-top"},
					apivm.h(
						"text",
						{class: "order-detail-statetip-text"},
						this.props.statusStr !== undefined ? this.props.statusStr : "待发货"
					)
				),
				apivm.h(
					"text",
					{class: "order-detail-statetip-tips"},
					this.props.desc !== undefined
						? this.props.desc
						: "请耐心等待，将尽快为您安排发货"
				)
			);
		};

		return HocOrderDetailStatusSgm;
	})(Component);
	HocOrderDetailStatusSgm.css = {
		".order-detail-statetip": {
			padding: "15px",
			backgroundImage: "linear-gradient(to bottom, #2f9bff, #44a5ff)"
		},
		".order-detail-statetip-top": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center"
		},
		".order-detail-statetip-time": {flexDirection: "row", alignItems: "center"},
		".order-detail-statetip-time-icon": {
			width: "14px",
			height: "14px",
			marginRight: "4px"
		},
		".order-detail-statetip-text": {fontSize: "17px", color: "white"},
		".order-detail-statetip-tips": {
			marginTop: "10px",
			fontSize: "14px",
			color: "white"
		}
	};
	apivm.define("hoc-order-detail-status-sgm", HocOrderDetailStatusSgm);

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

	var TemplateSgmOrderDetail = /*@__PURE__*/ (function(Component) {
		function TemplateSgmOrderDetail(props) {
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

				formList: [
					{
						label: "配送方式",
						text: "配送",
						id: "11"
					},
					{
						label: "订单编号",
						text: "202203290948386376",
						id: "22"
					},
					{
						label: "交易编号",
						text: "202203290948386376",
						id: "33"
					},
					{
						label: "创建时间",
						text: "2022.05.12 14:21:39",
						id: "44"
					},
					{
						label: "运费",
						text: "￥0",
						id: "55"
					},
					{
						label: "备注",
						text: "请送货上门",
						id: "66"
					}
				]
			};
		}

		if (Component) TemplateSgmOrderDetail.__proto__ = Component;
		TemplateSgmOrderDetail.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateSgmOrderDetail.prototype.constructor = TemplateSgmOrderDetail;
		TemplateSgmOrderDetail.prototype.apiready = function() {};
		TemplateSgmOrderDetail.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("hoc-nav-bar-sgm", {isShowBack: true, title: "订单详情"}),
				apivm.h("hoc-order-detail-status-sgm", {
					statusStr: "待发货",
					desc: "请耐心等待，将尽快为您安排发货"
				}),
				apivm.h("hoc-order-address-sgm", {
					consignee: "温泉",
					phone: "1234556789",
					area: "北京",
					detailAddress: "北京市海淀区用友产业园"
				}),
				apivm.h("hoc-order-goods-list-sgm", {
					list: this.data.hocOrderGoodsListSgmList
				}),
				apivm.h("hoc-form-list-sgm", {formList: this.data.formList})
			);
		};

		return TemplateSgmOrderDetail;
	})(Component);
	TemplateSgmOrderDetail.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"}
	};
	apivm.define("template-sgm-order_detail", TemplateSgmOrderDetail);
	apivm.render(apivm.h("template-sgm-order_detail", null), "body");
})();
