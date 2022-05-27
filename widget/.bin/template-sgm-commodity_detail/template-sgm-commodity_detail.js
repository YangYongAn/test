(function() {
	var HocGoodsDetailBtnsSgm = /*@__PURE__*/ (function(Component) {
		function HocGoodsDetailBtnsSgm(props) {
			Component.call(this, props);
			this.data = {
				price: this.props.price !== undefined ? this.props.price : 50,
				pinPrice: this.props.pinPrice !== undefined ? this.props.pinPrice : 25,
				shareBtnText:
					this.props.shareBtnText !== undefined ? this.props.shareBtnText : "分享",
				aloneBtnText:
					this.props.aloneBtnText !== undefined
						? this.props.aloneBtnText
						: "单独购买",
				pinBtnText:
					this.props.pinBtnText !== undefined ? this.props.pinBtnText : "发起拼团"
			};
		}

		if (Component) HocGoodsDetailBtnsSgm.__proto__ = Component;
		HocGoodsDetailBtnsSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocGoodsDetailBtnsSgm.prototype.constructor = HocGoodsDetailBtnsSgm;
		HocGoodsDetailBtnsSgm.prototype.onshare = function() {
			this.fire("shareClick");
		};
		HocGoodsDetailBtnsSgm.prototype.aloneBuyClick = function() {
			this.fire("aloneBuyClick");
		};
		HocGoodsDetailBtnsSgm.prototype.groupBuyClick = function() {
			this.fire("groupBuyClick");
		};
		HocGoodsDetailBtnsSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "goods-detail-btns_page"},
				apivm.h(
					"view",
					{class: "goods-detail-btns"},
					apivm.h(
						"view",
						{class: "goods-detail-btns-share", onClick: this.onshare},
						apivm.h("image", {
							class: "goods-detail-btns-share-icon",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/bb9b74c67da3eb1de2b75b90feb75680.png"
						}),
						apivm.h(
							"text",
							{class: "goods-detail-btns-share-text"},
							this.data.shareBtnText
						)
					),
					apivm.h(
						"text",
						{class: "goods-detail-btns-buy btn_orange", onClick: this.aloneBuyClick},
						this.data.aloneBtnText,
						" (",
						this.data.price,
						"元)"
					),
					apivm.h(
						"text",
						{class: "goods-detail-btns-buy btn_red", onClick: this.groupBuyClick},
						this.data.pinBtnText,
						" (",
						this.data.pinPrice,
						"元)"
					)
				),
				apivm.h("safe-area", null)
			);
		};

		return HocGoodsDetailBtnsSgm;
	})(Component);
	HocGoodsDetailBtnsSgm.css = {
		".goods-detail-btns_page": {width: "100%", backgroundColor: "#fff"},
		".goods-detail-btns": {
			flexDirection: "row",
			alignItems: "center",
			padding: "16px 15px",
			background: "#fff"
		},
		".goods-detail-btns-share": {alignItems: "center", marginRight: "12px"},
		".goods-detail-btns-share-icon": {width: "20px", height: "20px"},
		".goods-detail-btns-share-text": {
			fontSize: "10px",
			marginTop: "3px",
			color: "#666"
		},
		".goods-detail-btns-buy": {
			flex: "1",
			height: "40px",
			lineHeight: "40px",
			textAlign: "center",
			color: "white",
			fontSize: "14px"
		},
		".goods-detail-btns-buy:active": {opacity: "0.7"},
		".btn_orange": {
			marginLeft: "15px",
			borderTopLeftRadius: "4px",
			borderBottomLeftRadius: "4px",
			backgroundColor: "#ffad00"
		},
		".btn_red": {
			borderTopRightRadius: "4px",
			borderBottomRightRadius: "4px",
			backgroundColor: "#339DFF"
		}
	};
	apivm.define("hoc-goods-detail-btns-sgm", HocGoodsDetailBtnsSgm);

	var HocGoodsDetailSgm = /*@__PURE__*/ (function(Component) {
		function HocGoodsDetailSgm(props) {
			Component.call(this, props);
			this.data = {
				title: this.props.title !== undefined ? this.props.title : "商品详情",
				info:
					this.props.info !== undefined
						? this.props.info
						: '<img style="width: 100%; height: auto;" src="http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/89d57c29cf24aff7c0471233e7d0ab46.png" />'
			};
		}

		if (Component) HocGoodsDetailSgm.__proto__ = Component;
		HocGoodsDetailSgm.prototype = Object.create(Component && Component.prototype);
		HocGoodsDetailSgm.prototype.constructor = HocGoodsDetailSgm;
		HocGoodsDetailSgm.prototype.apiready = function() {};
		HocGoodsDetailSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "goods-detail"},
				apivm.h(
					"view",
					{class: "goods-detail-title"},
					apivm.h("view", {class: "goods-detail-title-line"}),
					apivm.h("text", {class: "goods-detail-title-text"}, this.data.title)
				),

				apivm.h(
					"view",
					{class: "goods-detail-info"},
					apivm.h("rich-text", {nodes: this.data.info})
				)
			);
		};

		return HocGoodsDetailSgm;
	})(Component);
	HocGoodsDetailSgm.css = {
		".goods-detail": {
			marginTop: "8px",
			backgroundColor: "#fff",
			padding: "0 15px",
			marginBottom: "10px"
		},
		".goods-detail-title": {
			flexDirection: "row",
			alignItems: "center",
			padding: "12px 0",
			borderBottom: "1px solid #f8f8f8"
		},
		".goods-detail-title-line": {
			width: "3px",
			height: "14px",
			borderRadius: "2px",
			backgroundColor: "#339dff"
		},
		".goods-detail-title-text": {
			fontSize: "16px",
			fontWeight: "bold",
			color: "#333",
			marginLeft: "8px"
		},
		".goods-detail-info": {padding: "12px 0"}
	};
	apivm.define("hoc-goods-detail-sgm", HocGoodsDetailSgm);

	var HocCheckListEt = /*@__PURE__*/ (function(Component) {
		function HocCheckListEt(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						id: "preorderList",
						leftIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f5286334165d33c9e96aad27d08d67cb.png",
						text: "我的预约",
						extraText: "立即查看",
						link: null
					},
					{
						id: "orderList",
						leftIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/07d97e58534b11938a0d1c682c2511df.png",
						text: "我的线上课订单",
						link: null
					}
				]
			};
		}

		if (Component) HocCheckListEt.__proto__ = Component;
		HocCheckListEt.prototype = Object.create(Component && Component.prototype);
		HocCheckListEt.prototype.constructor = HocCheckListEt;
		HocCheckListEt.prototype.handleClick = function(item) {
			this.fire("itemClick", item);
			if (item.link) {
				api.openWin({
					name: "open" + item.id,
					url: item.link
				});
			}
		};
		HocCheckListEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "a-checklist"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{
							key: item$1.id,
							class: "a-checklist-item",
							onClick: function() {
								return this$1.handleClick(item$1);
							}
						},
						item$1.leftIcon
							? apivm.h("img", {
									src: item$1.leftIcon,
									alt: "left",
									class: "a-checklist-item-left-icon"
							  })
							: null,
						apivm.h("text", {class: "a-checklist-item-text"}, item$1.text),
						apivm.h(
							"view",
							{class: "a-checklist-item-right"},
							apivm.h(
								"text",
								{class: "a-checklist-item-right-text"},
								item$1.extraText
							),
							apivm.h("img", {
								class: "a-checklist-item-right-icon",
								src:
									item$1.rightIcon ||
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/32c33a52906720ff44bd953ad901b853.png",
								alt: "right"
							})
						)
					);
				})
			);
		};

		return HocCheckListEt;
	})(Component);
	HocCheckListEt.css = {
		".a-checklist": {background: "#fff", padding: "0 16px", marginBottom: "10px"},
		".a-checklist-item": {
			padding: "15px 0",
			alignItems: "center",
			flexDirection: "row",
			borderBottom: "1px solid #f1f1f1"
		},
		".a-checklist-item-left-icon": {width: "20px", height: "20px"},
		".a-checklist-item-text": {
			flex: "1",
			fontSize: "14px",
			color: "#333",
			marginRight: "15px"
		},
		".a-checklist-item-right": {flexDirection: "row", alignItems: "center"},
		".a-checklist-item-right-icon": {
			width: "20px",
			height: "20px",
			marginLeft: "8px"
		},
		".a-checklist-item-right-text": {fontSize: "14px", color: "#999"}
	};
	apivm.define("hoc-check-list-et", HocCheckListEt);

	var HocGoodsBaseinfoSgm = /*@__PURE__*/ (function(Component) {
		function HocGoodsBaseinfoSgm(props) {
			Component.call(this, props);
			this.data = {
				isHot: this.props.isHot || true,
				price: this.props.price !== undefined ? this.props.price : 66,
				delprice: this.props.delprice !== undefined ? this.props.delprice : 166,
				buy_num: this.props.buy_num !== undefined ? this.props.buy_num : 122,
				title:
					this.props.title !== undefined ? this.props.title : "农家自晒野生小鱼干",
				yunfei_type:
					this.props.yunfei_type !== undefined ? this.props.yunfei_type : "自费",
				yunfei_money:
					this.props.yunfei_money !== undefined ? this.props.yunfei_money : 15
			};
		}

		if (Component) HocGoodsBaseinfoSgm.__proto__ = Component;
		HocGoodsBaseinfoSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocGoodsBaseinfoSgm.prototype.constructor = HocGoodsBaseinfoSgm;
		HocGoodsBaseinfoSgm.prototype.fixBuynum = function(num) {
			if (!num) {
				return 0;
			}
			num = parseInt(num);
			if (num > 9999) {
				num = (num / 10000).toFixed(2);
				num = num + "w";
			}
			return num;
		};
		HocGoodsBaseinfoSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "goods-baseinfo"},
				apivm.h(
					"view",
					{class: "goods-baseinfo-top"},
					apivm.h(
						"view",
						{class: "goods-baseinfo-price"},
						apivm.h("text", {class: "goods-baseinfo-price-symbol"}, "¥"),
						apivm.h(
							"text",
							{class: "goods-baseinfo-price-price"},
							this.data.price || 16
						),
						apivm.h(
							"text",
							{class: "goods-baseinfo-price-delprice"},
							this.data.delprice ? "￥" + this.data.delprice : "￥66"
						)
					),

					this.data.isHot
						? apivm.h(
								"view",
								{class: "goods-baseinfo-hot"},
								apivm.h("image", {
									class: "goods-baseinfo-hot-img",
									src:
										"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/784e573cab94112b0e91f5c063fee14f.png"
								}),
								apivm.h(
									"text",
									{class: "goods-baseinfo-hot-num"},
									this.fixBuynum(this.data.buy_num || 22)
								)
						  )
						: null
				),
				apivm.h("text", {class: "goods-baseinfo-title"}, this.data.title),
				this.data.yunfei_type
					? apivm.h(
							"text",
							{class: "goods-baseinfo-freight"},
							"快递：",
							this.data.yunfei_type == "none" ? "包邮" : this.data.yunfei_money + "元"
					  )
					: null
			);
		};

		return HocGoodsBaseinfoSgm;
	})(Component);
	HocGoodsBaseinfoSgm.css = {
		".goods-baseinfo": {
			padding: "15px",
			backgroundColor: "white",
			marginBottom: "10px",
			marginTop: "310px"
		},
		".goods-baseinfo-top": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between"
		},
		".goods-baseinfo-price": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		},
		".goods-baseinfo-price-symbol": {
			marginTop: "5px",
			marginRight: "3px",
			fontSize: "16px",
			color: "#FE904A"
		},
		".goods-baseinfo-price-price": {fontSize: "23px", color: "#FE904A"},
		".goods-baseinfo-price-delprice": {
			fontSize: "12px",
			textDecoration: "line-through",
			marginLeft: "10px",
			marginTop: "8px",
			color: "#B5B5B5"
		},
		".goods-baseinfo-hot": {
			flexDirection: "row",
			alignItems: "center",
			padding: "1px 6px",
			backgroundColor: "#FEF8F4",
			borderRadius: "8px",
			border: "1px solid #FE904A"
		},
		".goods-baseinfo-hot-img": {width: "9px", height: "11px", marginRight: "3px"},
		".goods-baseinfo-hot-num": {color: "#FE904A", fontSize: "10px"},
		".goods-baseinfo-title": {
			fontSize: "18px",
			marginTop: "15px",
			lineHeight: "22px",
			color: "#333333",
			fontWeight: "bold",
			textOverflow: "ellipsis",
			whiteSpace: "normal"
		},
		".goods-baseinfo-freight": {fontSize: "14px", marginTop: "8px", color: "#666"}
	};
	apivm.define("hoc-goods-baseinfo-sgm", HocGoodsBaseinfoSgm);

	var HocCommoditySwiperSgm = /*@__PURE__*/ (function(Component) {
		function HocCommoditySwiperSgm(props) {
			Component.call(this, props);
			this.data = {
				current: 0,
				swiperList: this.props.swiperList || [
					"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/83ae0824c4ec6a77faf585f94e88e498.png"
				]
			};
			this.compute = {
				swiperHeight: function() {
					return api.winWidth * 0.75;
				}
			};
		}

		if (Component) HocCommoditySwiperSgm.__proto__ = Component;
		HocCommoditySwiperSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocCommoditySwiperSgm.prototype.constructor = HocCommoditySwiperSgm;
		HocCommoditySwiperSgm.prototype.fnSwiperChange = function(e) {
			this.data.current = e.detail.current;
		};
		HocCommoditySwiperSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "commodity-swiper-box"},
				apivm.h(
					"swiper",
					{
						class: "commodity-swiper-swiper",
						circular: true,
						autoplay: true,
						onchange: function(event) {
							if (this$1.fnSwiperChange) {
								this$1.fnSwiperChange(event);
							} else {
								fnSwiperChange(event);
							}
						}
					},
					(Array.isArray(this.data.swiperList)
						? this.data.swiperList
						: Object.values(this.data.swiperList)
					).map(function(imgSrc) {
						return apivm.h(
							"swiper-item",
							null,
							apivm.h("image", {class: "commodity-swiper-img", src: imgSrc})
						);
					})
				),
				apivm.h(
					"text",
					{class: "commodity-swiper-indicator-text"},
					this.data.current + 1 + "/" + this.data.swiperList.length
				)
			);
		};

		return HocCommoditySwiperSgm;
	})(Component);
	HocCommoditySwiperSgm.css = {
		".commodity-swiper-box": {
			width: "100%",
			backgroundColor: "white",
			position: "absolute"
		},
		".commodity-swiper-swiper": {
			width: "100%",
			height: "300px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		".commodity-detail-swiper-item": {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			height: "100%"
		},
		".commodity-swiper-img": {width: "100%", height: "294px"},
		".commodity-swiper-indicator-text": {
			position: "absolute",
			bottom: "16px",
			right: "8px",
			height: "22px",
			padding: "0 10px",
			backgroundColor: "rgba(0,0,0,0.4)",
			borderRadius: "11px",
			textAlign: "center",
			fontSize: "10px",
			lineHeight: "22px",
			color: "white"
		}
	};
	apivm.define("hoc-commodity-swiper-sgm", HocCommoditySwiperSgm);

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

	var TemplateSgmCommodityDetail = /*@__PURE__*/ (function(Component) {
		function TemplateSgmCommodityDetail(props) {
			Component.call(this, props);
			this.data = {
				swiperList: [
					"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/83ae0824c4ec6a77faf585f94e88e498.png"
				],

				checklist: [
					{
						id: "spell",
						text: "规格",
						extraText: "银色"
					}
				]
			};
		}

		if (Component) TemplateSgmCommodityDetail.__proto__ = Component;
		TemplateSgmCommodityDetail.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateSgmCommodityDetail.prototype.constructor = TemplateSgmCommodityDetail;
		TemplateSgmCommodityDetail.prototype.shareClick = function() {
			api.toast({
				msg: "分享商品信息!"
			});
		};
		TemplateSgmCommodityDetail.prototype.aloneBuyClick = function() {
			api.openWin({
				name: "aloneBuy",
				url: "../template-sgm-pay/template-sgm-pay.stml"
			});
		};
		TemplateSgmCommodityDetail.prototype.groupBuyClick = function() {
			api.openWin({
				name: "groupBuy",
				url: "../template-sgm-pay/template-sgm-pay.stml"
			});
		};
		TemplateSgmCommodityDetail.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "hoc-commodity-detail-sgm"},

				apivm.h("hoc-nav-bar-sgm", {title: "商品详情", isShowBack: true}),
				apivm.h(
					"scroll-view",
					{style: "flex: 1;", "show-scrollbar": false, "scroll-y": true},

					apivm.h("hoc-commodity-swiper-sgm", {swiperList: this.data.swiperList}),

					apivm.h("hoc-goods-baseinfo-sgm", {
						isHot: true,
						price: 88,
						delprice: 160,
						buy_num: 30,
						title: "Apple MacBook Pro 2020款13.3英寸苹果笔记本电脑超薄  灰色 19款",
						yunfei_type: "none",
						yunfei_money: "0"
					}),

					apivm.h("hoc-check-list-et", {list: this.data.checklist}),

					apivm.h("hoc-goods-detail-sgm", {
						title: "商品详情",
						info:
							'<img style="width: 100%;" src="http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/89d57c29cf24aff7c0471233e7d0ab46.png"/>'
					})
				),

				apivm.h("hoc-goods-detail-btns-sgm", {
					onShareClick: this.shareClick,
					onAloneBuyClick: this.aloneBuyClick,
					onGroupBuyClick: this.groupBuyClick,
					price: 50,
					pinPrice: 22,
					shareBtnText: "分享",
					aloneBtnText: "单独购买",
					pinBtnText: "发起拼团"
				})
			);
		};

		return TemplateSgmCommodityDetail;
	})(Component);
	TemplateSgmCommodityDetail.css = {
		".hoc-commodity-detail-sgm": {height: "100%", background: "#fff"}
	};
	apivm.define("template-sgm-commodity_detail", TemplateSgmCommodityDetail);
	apivm.render(apivm.h("template-sgm-commodity_detail", null), "body");
})();
