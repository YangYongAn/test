(function() {
	var HocDetailFooterOd = /*@__PURE__*/ (function(Component) {
		function HocDetailFooterOd(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.data || {
					floor_text_left: "分享",
					floor_text_right: "购物车",
					floor_icon_left:
						"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/bb9b74c67da3eb1de2b75b90feb75680.png",
					floor_icon_right:
						"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/a19dc37a54accb3f849db181ba512b32.png",
					floor_btn_left: "加入购物车",
					floor_btn_right: "立即购买"
				}
			};
		}

		if (Component) HocDetailFooterOd.__proto__ = Component;
		HocDetailFooterOd.prototype = Object.create(Component && Component.prototype);
		HocDetailFooterOd.prototype.constructor = HocDetailFooterOd;
		HocDetailFooterOd.prototype.onPlaceOrderClick = function() {
			api.openWin({
				name: "place_order",
				url: "widget://pages/template-od-place_order/template-od-place_order"
			});
		};
		HocDetailFooterOd.prototype.onShoppingClick = function() {
			api.openWin({
				name: "shopping_cart",
				url: "widget://pages/template-od-shopping_cart/template-od-shopping_cart"
			});
		};
		HocDetailFooterOd.prototype.onshare = function() {
			this.fire("share");
		};
		HocDetailFooterOd.prototype.oncart = function() {
			this.fire("cart");
		};
		HocDetailFooterOd.prototype.onaddcart = function() {
			this.fire("addCart");
		};
		HocDetailFooterOd.prototype.onbuy = function() {
			this.fire("buy");
		};
		HocDetailFooterOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "floor_box_page"},
				apivm.h(
					"view",
					{class: "floor_box"},
					apivm.h(
						"view",
						{
							class: "floor_btn",
							onclick: function(event) {
								if (this$1.onshare) {
									this$1.onshare(event);
								} else {
									onshare(event);
								}
							}
						},
						apivm.h("image", {
							class: "floor_icon",
							src: this.data.data.floor_icon_left
						}),
						apivm.h("text", {class: "floor_zi"}, this.data.data.floor_text_left)
					),
					apivm.h(
						"view",
						{
							class: "floor_btn",
							onclick: function(event) {
								if (this$1.oncart) {
									this$1.oncart(event);
								} else {
									oncart(event);
								}
							},
							"obj-login": "1"
						},
						apivm.h("image", {
							class: "floor_icon",
							src: this.data.data.floor_icon_right
						}),
						apivm.h("text", {class: "floor_zi"}, this.data.data.floor_text_right)
					),
					apivm.h(
						"text",
						{
							onClick: this.onShoppingClick,
							class: "floor_btn_4 btn_orange",
							onclick: function(event) {
								if (this$1.onaddcart) {
									this$1.onaddcart(event);
								} else {
									onaddcart(event);
								}
							}
						},
						this.data.data.floor_btn_left
					),
					apivm.h(
						"text",
						{
							onClick: this.onPlaceOrderClick,
							class: "floor_btn_4 btn_red",
							onclick: function(event) {
								if (this$1.onbuy) {
									this$1.onbuy(event);
								} else {
									onbuy(event);
								}
							}
						},
						this.data.data.floor_btn_right
					)
				),
				apivm.h("safe-area", null)
			);
		};

		return HocDetailFooterOd;
	})(Component);
	HocDetailFooterOd.css = {
		".floor_box_page": {width: "100%", backgroundColor: "white"},
		".floor_box": {
			flexDirection: "row",
			alignItems: "center",
			height: "48px",
			padding: "0 15px"
		},
		".floor_btn": {alignItems: "center", width: "45px"},
		".floor_icon": {width: "20px", height: "20px"},
		".floor_zi": {fontSize: "10px", marginTop: "3px", color: "#666"},
		".floor_btn_4": {
			flex: "1",
			height: "40px",
			lineHeight: "40px",
			textAlign: "center",
			color: "white",
			fontSize: "14px"
		},
		".floor_btn_4:active": {opacity: "0.7"},
		".btn_orange": {
			marginLeft: "15px",
			borderTopLeftRadius: "4px",
			borderBottomLeftRadius: "4px",
			backgroundColor: "#ffad00"
		},
		".btn_red": {
			borderTopRightRadius: "4px",
			borderBottomRightRadius: "4px",
			backgroundColor: "#ff6600"
		}
	};
	apivm.define("hoc-detail-footer-od", HocDetailFooterOd);

	var HocDetailGoodOd = /*@__PURE__*/ (function(Component) {
		function HocDetailGoodOd(props) {
			Component.call(this, props);
			this.data = {
				html_detail:
					this.props.html_detail ||
					'<p><img style="width:100%;" src="https://img.alicdn.com/imgextra/i1/2647621085/O1CN01NyvAmy1JsyJmYJVrU_!!2647621085.jpg" /></p>\n<p><img style="width:100%;" src="https://img.alicdn.com/imgextra/i2/2647621085/O1CN016Bwwo91JsyE6YvQMj_!!2647621085.jpg" /></p>\n<p><img style="width:100%;" src="https://img.alicdn.com/imgextra/i3/2647621085/O1CN013XtO4D1JsyE5ISJhd_!!2647621085.jpg" /></p>'
			};
		}

		if (Component) HocDetailGoodOd.__proto__ = Component;
		HocDetailGoodOd.prototype = Object.create(Component && Component.prototype);
		HocDetailGoodOd.prototype.constructor = HocDetailGoodOd;
		HocDetailGoodOd.prototype.apiready = function() {};
		HocDetailGoodOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "detail-good"},
				apivm.h(
					"view",
					{class: "goods_details_box"},
					apivm.h(
						"view",
						{class: "goods_detail_desc"},
						apivm.h("view", {class: "left_line"}),
						apivm.h("text", {class: "left_zi color_1"}, "商品详情")
					),
					apivm.h("rich-text", {nodes: this.data.html_detail})
				)
			);
		};

		return HocDetailGoodOd;
	})(Component);
	HocDetailGoodOd.css = {
		".goods_details_box": {
			marginTop: "8px",
			backgroundColor: "white",
			padding: "0 15px 10px"
		},
		".goods_detail_desc": {
			flexDirection: "row",
			alignItems: "center",
			height: "52px",
			borderBottom: "1px solid #f8f8f8"
		},
		".left_line": {
			width: "3px",
			height: "14px",
			borderRadius: "2px",
			backgroundColor: "#fe904a"
		},
		".left_zi": {
			fontSize: "16px",
			fontWeight: "bold",
			color: "#333",
			marginLeft: "8px"
		},
		".goods_rich": {marginTop: "10px"}
	};
	apivm.define("hoc-detail-good-od", HocDetailGoodOd);

	var HocDetailSizeOd = /*@__PURE__*/ (function(Component) {
		function HocDetailSizeOd(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.size || ""
			};
		}

		if (Component) HocDetailSizeOd.__proto__ = Component;
		HocDetailSizeOd.prototype = Object.create(Component && Component.prototype);
		HocDetailSizeOd.prototype.constructor = HocDetailSizeOd;
		HocDetailSizeOd.prototype.apiready = function() {};
		HocDetailSizeOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "detail-size"},
				apivm.h(
					"view",
					{class: "goods_spec_box"},
					apivm.h("text", {class: "goods_spec_desc"}, "规格"),
					apivm.h(
						"text",
						{class: "goods_spec_text"},
						this.props.size ? this.props.size : "默认规格"
					),
					apivm.h("view", {class: "flex1"}),
					apivm.h("image", {
						class: "goods_arrow",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7f1ac595c49db90971904ca9dad47b1e.png"
					})
				)
			);
		};

		return HocDetailSizeOd;
	})(Component);
	HocDetailSizeOd.css = {
		".goods_spec_box": {
			flexDirection: "row",
			alignItems: "center",
			height: "50px",
			marginTop: "8px",
			padding: "0 15px",
			backgroundColor: "white"
		},
		".goods_arrow": {width: "14px", height: "14px"},
		".goods_spec_desc": {fontSize: "14px", color: "#666"},
		".goods_spec_text": {fontSize: "14px", color: "#333", marginLeft: "14px"}
	};
	apivm.define("hoc-detail-size-od", HocDetailSizeOd);

	var HocDetailInfoOd = /*@__PURE__*/ (function(Component) {
		function HocDetailInfoOd(props) {
			Component.call(this, props);
			this.data = {
				data: this.props.data || {
					title: "莫代尔无袖吊带连衣裙春秋侧开叉长裙女夏季内搭修身显瘦打底裙子",
					price: 699,
					yunfei_type: "none",
					buy_num: 233,
					delprice: 1299,
					yunfei_money: 0
				}
			};
		}

		if (Component) HocDetailInfoOd.__proto__ = Component;
		HocDetailInfoOd.prototype = Object.create(Component && Component.prototype);
		HocDetailInfoOd.prototype.constructor = HocDetailInfoOd;
		HocDetailInfoOd.prototype.fixBuynum = function(num) {
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
		HocDetailInfoOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "goods_box"},
				apivm.h(
					"view",
					{class: "goods_top"},
					apivm.h("text", {class: "goods_spr"}, "¥"),
					apivm.h("text", {class: "goods_pr"}, this.data.data.price),
					apivm.h(
						"text",
						{class: "goods_mpr"},
						this.data.data.delprice ? "￥" + this.data.data.delprice : ""
					),
					apivm.h("view", {class: "flex1"}),
					apivm.h(
						"view",
						{class: "hot-box"},
						apivm.h("image", {
							class: "hot-num-img",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/784e573cab94112b0e91f5c063fee14f.png"
						}),
						apivm.h(
							"text",
							{class: "hot-num"},
							this.fixBuynum(this.data.data.buy_num)
						)
					)
				),
				apivm.h("text", {class: "goods_tit"}, this.data.data.title),
				this.data.data.yunfei_type
					? apivm.h(
							"text",
							{class: "goods_exp"},
							"快递：" +
								(this.data.data.yunfei_type == "none"
									? "免费"
									: this.data.data.yunfei_money + "元")
					  )
					: null
			);
		};

		return HocDetailInfoOd;
	})(Component);
	HocDetailInfoOd.css = {
		".goods_box": {padding: "15px", backgroundColor: "white"},
		".goods_top": {flexDirection: "row", alignItems: "center"},
		".goods_spr": {
			marginTop: "5px",
			marginRight: "3px",
			fontSize: "16px",
			color: "#fe904a"
		},
		".goods_pr": {fontSize: "23px", color: "#fe904a"},
		".flex1": {flex: "1"},
		".goods_mpr": {
			fontSize: "12px",
			textDecoration: "line-through",
			marginLeft: "10px",
			marginTop: "8px",
			color: "#b5b5b5"
		},
		".hot-box": {
			flexDirection: "row",
			alignItems: "center",
			padding: "1px 6px",
			backgroundColor: "#fef8f4",
			borderRadius: "8px",
			border: "1px solid #fe904a"
		},
		".hot-num-img": {width: "9px", height: "11px", marginRight: "3px"},
		".hot-num": {color: "#fe904a", fontSize: "10px"},
		".goods_tit": {
			marginTop: "15px",
			lineHeight: "22px",
			color: "#333333",
			fontWeight: "bold",
			textOverflow: "ellipsis",
			whiteSpace: "normal"
		},
		".goods_exp": {fontSize: "14px", marginTop: "8px", color: "#666"}
	};
	apivm.define("hoc-detail-info-od", HocDetailInfoOd);

	var HocDetailBannerOd = /*@__PURE__*/ (function(Component) {
		function HocDetailBannerOd(props) {
			Component.call(this, props);
			this.data = {
				current: 0,
				list: this.props.list || [
					"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/91de607738427759b82c231cc7417725.png",
					"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/cdd745ebab4d463b6dc5e2656e6cf84d.png",
					"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/02e1b158a350a622fd1132b2f09fc4e4.png"
				]
			};
			this.compute = {
				swiperHeight: function() {
					return api.winWidth * 0.75;
				}
			};
		}

		if (Component) HocDetailBannerOd.__proto__ = Component;
		HocDetailBannerOd.prototype = Object.create(Component && Component.prototype);
		HocDetailBannerOd.prototype.constructor = HocDetailBannerOd;
		HocDetailBannerOd.prototype.fnSwiperChange = function(e) {
			this.data.current = e.detail.current;
		};
		HocDetailBannerOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "-my-swiper-box", style: "height:350px;"},
				apivm.h(
					"swiper",
					{
						class: "-my-swiper-swiper",
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
					(Array.isArray(this.data.list)
						? this.data.list
						: Object.values(this.data.list)
					).map(function(item_, index_) {
						return apivm.h(
							"swiper-item",
							null,
							apivm.h("image", {class: "-my-swiper-img", src: item_})
						);
					})
				),
				apivm.h(
					"text",
					{class: "-my-swiper-indicator-text"},
					this.data.current + 1,
					"/",
					this.data.list.length
				)
			);
		};

		return HocDetailBannerOd;
	})(Component);
	HocDetailBannerOd.css = {
		".-my-swiper-box": {
			width: "100%",
			backgroundColor: "#fff",
			overflowX: "unset !important"
		},
		".-my-swiper-swiper": {width: "100%", height: "330px"},
		".-my-swiper-img": {width: "100%", height: "330px"},
		".-my-swiper-indicator-text": {
			position: "absolute",
			bottom: "10px",
			right: "10px",
			height: "22px",
			padding: "0 10px",
			backgroundColor: "rgba(0, 0, 0, 0.4)",
			borderRadius: "11px",
			textAlign: "center",
			fontSize: "10px",
			lineHeight: "22px",
			color: "white"
		}
	};
	apivm.define("hoc-detail-banner-od", HocDetailBannerOd);

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

	var TemplateOdDetail = /*@__PURE__*/ (function(Component) {
		function TemplateOdDetail(props) {
			Component.call(this, props);
			this.data = {
				// 轮播图
				bannerList: [
					"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/52cf5195745061cd23f659c9d9a4e8d1.png",
					"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/cdd745ebab4d463b6dc5e2656e6cf84d.png",
					"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/02e1b158a350a622fd1132b2f09fc4e4.png"
				],

				// 商品详情
				datailInfo: {
					title: "夏新款套装女洋气时尚短裤阔腿裤两件套小个子夏装搭配显高",
					price: 5999,
					yunfei_type: "none",
					buy_num: 390000,
					delprice: 1299,
					yunfei_money: 0
				},

				footerData: {
					floor_text_left: "分享",
					floor_text_right: "购物车",
					floor_icon_left:
						"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/bb9b74c67da3eb1de2b75b90feb75680.png",
					floor_icon_right:
						"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/a19dc37a54accb3f849db181ba512b32.png",
					floor_btn_left: "加入购物车",
					floor_btn_right: "立即购买"
				}
			};
		}

		if (Component) TemplateOdDetail.__proto__ = Component;
		TemplateOdDetail.prototype = Object.create(Component && Component.prototype);
		TemplateOdDetail.prototype.constructor = TemplateOdDetail;
		TemplateOdDetail.prototype.apiready = function() {};
		TemplateOdDetail.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h("hoc-nav-bar-od", {msg: "商品详情", isBack: true}),
				apivm.h(
					"scroll-view",
					{"scroll-y": "true", "show-scrollbar": false},

					apivm.h("hoc-detail-banner-od", {list: this.data.bannerList}),

					apivm.h("hoc-detail-info-od", {data: this.data.datailInfo}),

					apivm.h("hoc-detail-size-od", {size: "白色/S码"}),

					apivm.h("hoc-detail-good-od", {
						html_detail:
							'<p style="font-size: 14px; color: #444;">2020夏新款韩版连衣裙女收腰显瘦显高A</p><img style="width:100%; height: 345px;" src="http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/a53acc0734fa8faa9e756168a75e03ab.png"/>'
					})
				),

				apivm.h("hoc-detail-footer-od", {data: this.data.footerData})
			);
		};

		return TemplateOdDetail;
	})(Component);
	TemplateOdDetail.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"},
		"scroll-view": {flex: "1"}
	};
	apivm.define("template-od-detail", TemplateOdDetail);
	apivm.render(apivm.h("template-od-detail", null), "body");
})();
