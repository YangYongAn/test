(function() {
	var HocGoodListGrOd = /*@__PURE__*/ (function(Component) {
		function HocGoodListGrOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						id: "1",
						title: "莫代尔无袖吊带连衣裙春秋侧开叉长裙女夏季内搭修身显瘦打底裙子",
						image:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/af44dcca9cde25d42f56f3047bfe0249.png",
						price: 699,
						buy_num: 233,
						delprice: 1299
					},

					{
						id: "2",
						title: "夏新款套装女洋气时尚短裤阔腿裤两件套小个子夏装搭配显高",
						image:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/46e4b8d7a4a8d1febeec082516a8e8f5.png",
						price: 629,
						buy_num: 666,
						delprice: 1236
					},

					{
						id: "3",
						title: "2020夏新款韩版连衣裙女收腰显瘦显高A字裙气质法式",
						image:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/05a8c2eda3a3e7f24b809d37064a702b.jpg",
						price: 1299,
						buy_num: 200,
						delprice: 2199
					},

					{
						id: "4",
						title: "港风套装女复古chic减龄短袖 ins复古穿搭",
						image:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/55503f6038070b5e7bcd663df8e9c61a.jpg",
						price: 1998,
						buy_num: 1234,
						delprice: 2666
					}
				],

				title: this.props.title || "活动专区"
			};
			this.compute = {
				gridWidth: function() {
					return Math.floor((api.winWidth - 30 - 18) / 2);
				}
			};
		}

		if (Component) HocGoodListGrOd.__proto__ = Component;
		HocGoodListGrOd.prototype = Object.create(Component && Component.prototype);
		HocGoodListGrOd.prototype.constructor = HocGoodListGrOd;
		HocGoodListGrOd.prototype.fixBuynum = function(num) {
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
		HocGoodListGrOd.prototype.onDetailClick = function() {
			api.openWin({
				name: "detail",
				url: "widget://pages/template-od-detail/template-od-detail"
			});
		};
		HocGoodListGrOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "goods-list"},
				apivm.h(
					"view",
					{class: "common_tit"},
					apivm.h("text", {class: "common_zi"}, this.data.title),
					apivm.h("view", {class: "flex1"}),
					apivm.h(
						"view",
						{class: "common_morebtn"},
						apivm.h("text", {class: "common_more"}, "更多"),
						apivm.h("image", {
							class: "common_img",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
						})
					)
				),
				apivm.h(
					"view",
					{class: "zone_box"},
					apivm.h(
						"view",
						{class: "grid_box"},
						(Array.isArray(this.data.list)
							? this.data.list
							: Object.values(this.data.list)
						).map(function(item$1) {
							return apivm.h(
								"view",
								{
									class: "-grid-item",
									onClick: this$1.onDetailClick,
									style:
										"width:" +
										this$1.gridWidth +
										"px;height:" +
										(this$1.gridWidth * 0.75 + 80) +
										"px;",
									key: item$1.id
								},
								apivm.h("image", {
									class: "-grid-item-img",
									src: item$1.image,
									mode: "aspectFill"
								}),
								apivm.h("text", {class: "-grid-item-title"}, item$1.title),
								apivm.h("text", {class: "-grid-item-price"}, "￥" + item$1.price)
							);
						})
					)
				)
			);
		};

		return HocGoodListGrOd;
	})(Component);
	HocGoodListGrOd.css = {
		".common_tit": {
			flexDirection: "row",
			alignItems: "center",
			marginTop: "5px",
			padding: "15px",
			backgroundColor: "#fff"
		},
		".common_zi": {
			fontSize: "20px",
			height: "28px",
			lineHeight: "28px",
			fontWeight: "bold",
			color: "#6e552b"
		},
		".flex1": {flex: "1"},
		".common_morebtn": {flexDirection: "row", alignItems: "center"},
		".common_more": {fontSize: "12px", color: "#8f8f8f"},
		".common_img": {width: "10px", height: "10px"},
		".grid_box": {
			flexDirection: "row",
			flexWrap: "wrap",
			padding: "0 3px 0 15px",
			backgroundColor: "#fff"
		},
		".-grid-item": {
			marginBottom: "5px",
			marginRight: "12px",
			borderRadius: "8px",
			border: "1px solid #f6f6f6",
			borderBottom: "3px solid #f6f6f6",
			boxSizing: "border-box"
		},
		".-grid-item-img": {width: "100%"},
		".-grid-item-title": {
			fontSize: "14px",
			lineHeight: "20px",
			height: "40px",
			margin: "5px 12px 0",
			color: "#333333",
			fontWeight: "bold",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			overflow: "hidden",
			WebkitLineClamp: "2"
		},
		".-grid-item-price": {
			marginLeft: "12px",
			lineHeight: "12px",
			fontWeight: "500",
			color: "#fe5c00",
			fontSize: "14px"
		}
	};
	apivm.define("hoc-good-list-gr-od", HocGoodListGrOd);

	var HocGoodListLtOd = /*@__PURE__*/ (function(Component) {
		function HocGoodListLtOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						id: "1",
						title: "莫代尔无袖吊带连衣裙春秋侧开叉长裙女夏季内搭修身显瘦打底裙子",
						image:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/af44dcca9cde25d42f56f3047bfe0249.png",
						price: 699,
						buy_num: 233,
						delprice: 1299
					},

					{
						id: "2",
						title: "夏新款套装女洋气时尚短裤阔腿裤两件套小个子夏装搭配显高",
						image:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/46e4b8d7a4a8d1febeec082516a8e8f5.png",
						price: 629,
						buy_num: 666,
						delprice: 1236
					},

					{
						id: "3",
						title: "2020夏新款韩版连衣裙女收腰显瘦显高A字裙气质法式",
						image:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/05a8c2eda3a3e7f24b809d37064a702b.jpg",
						price: 1299,
						buy_num: 200,
						delprice: 2199
					},

					{
						id: "4",
						title: "港风套装女复古chic减龄短袖 ins复古穿搭",
						image:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/55503f6038070b5e7bcd663df8e9c61a.jpg",
						price: 1998,
						buy_num: 1234,
						delprice: 2666
					}
				],

				title: this.props.title || "活动专区"
			};
		}

		if (Component) HocGoodListLtOd.__proto__ = Component;
		HocGoodListLtOd.prototype = Object.create(Component && Component.prototype);
		HocGoodListLtOd.prototype.constructor = HocGoodListLtOd;
		HocGoodListLtOd.prototype.fixBuynum = function(num) {
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
		HocGoodListLtOd.prototype.onDetailClick = function() {
			api.openWin({
				name: "detail",
				url: "widget://pages/template-od-detail/template-od-detail"
			});
		};
		HocGoodListLtOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "goods-list"},
				apivm.h(
					"view",
					{class: "common_tit"},
					apivm.h("text", {class: "common_zi"}, this.data.title),
					apivm.h("view", {class: "flex1"}),
					apivm.h(
						"view",
						{class: "common_morebtn"},
						apivm.h("text", {class: "common_more"}, "更多"),
						apivm.h("image", {
							class: "common_img",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
						})
					)
				),
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{class: "zone_box", key: item$1.id, onClick: this$1.onDetailClick},

						apivm.h(
							"view",
							{class: "list-ac"},
							apivm.h(
								"view",
								{class: "-list-item"},
								apivm.h("image", {
									class: "-list-item-img",
									src: item$1.image,
									mode: "aspectFill"
								}),
								apivm.h(
									"view",
									{class: "-list-item-content"},
									apivm.h("text", {class: "-list-item-title"}, item$1.title),
									apivm.h("view", {class: "flex1"}),
									apivm.h(
										"view",
										{class: "-list-item-bottom"},
										apivm.h("text", {class: "-list-item-price"}, "￥" + item$1.price),
										apivm.h(
											"text",
											{class: "-list-item-delprice color_5"},
											"￥" + item$1.delprice
										),
										apivm.h("view", {class: "flex1"}),
										apivm.h(
											"view",
											{class: "-list-item-num-box"},
											apivm.h("image", {
												class: "-list-item-num-img",
												src:
													"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/784e573cab94112b0e91f5c063fee14f.png"
											}),
											apivm.h(
												"text",
												{class: "-list-item-num"},
												this$1.fixBuynum(item$1.buy_num)
											)
										)
									)
								)
							)
						)
					);
				})
			);
		};

		return HocGoodListLtOd;
	})(Component);
	HocGoodListLtOd.css = {
		".common_tit": {
			flexDirection: "row",
			alignItems: "center",
			marginTop: "5px",
			padding: "15px",
			backgroundColor: "#fff"
		},
		".common_zi": {
			fontSize: "20px",
			height: "28px",
			lineHeight: "28px",
			fontWeight: "bold",
			color: "#6e552b"
		},
		".flex1": {flex: "1"},
		".common_morebtn": {flexDirection: "row", alignItems: "center"},
		".common_more": {fontSize: "12px", color: "#8f8f8f"},
		".common_img": {width: "10px", height: "10px"},
		".-list-item": {
			flexDirection: "row",
			alignItems: "center",
			height: "120px",
			padding: "12px 0",
			borderBottom: "1px solid #f8f8f8",
			backgroundColor: "white",
			boxSizing: "border-box"
		},
		".-list-item:active": {opacity: "0.8"},
		".-list-item-img": {
			width: "120px",
			height: "90px",
			borderRadius: "4px",
			marginLeft: "15px"
		},
		".-list-item-content": {
			flex: "1",
			height: "100%",
			marginLeft: "12px",
			marginRight: "15px"
		},
		".-list-item-title": {
			lineHeight: "22px",
			height: "44px",
			fontSize: "14px",
			color: "#333333",
			fontWeight: "bold",
			textOverflow: "ellipsis",
			whiteSpace: "normal",
			overflow: "hidden",
			WebkitLineClamp: "2"
		},
		".-list-item-bottom": {flexDirection: "row", alignItems: "center"},
		".-list-item-price": {
			fontSize: "14px",
			lineHeight: "19px",
			fontWeight: "500",
			color: "#fe5c00"
		},
		".-list-item-delprice": {
			fontSize: "14px",
			textDecoration: "line-through",
			marginLeft: "8px",
			color: "#8f8f8f"
		},
		".-list-item-num-box": {
			flexDirection: "row",
			alignItems: "center",
			padding: "1px 6px",
			backgroundColor: "#fef8f4",
			borderRadius: "8px",
			border: "1px solid #fe904a"
		},
		".-list-item-num-img": {width: "9px", height: "11px", marginRight: "3px"},
		".-list-item-num": {color: "#fe904a", fontSize: "10px"}
	};
	apivm.define("hoc-good-list-lt-od", HocGoodListLtOd);

	var HocSortListOd = /*@__PURE__*/ (function(Component) {
		function HocSortListOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						id: "f4aaeef0-caf6-11ea-8523-0da8a6a49497",
						name: "连衣裙",
						icon:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/fb2fd84add6d8abdfe419b6171f3058f.png"
					},

					{
						id: "fc084f30-caf6-11ea-8523-0da8a6a49497",
						name: "衬衫",
						icon:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/e8623d0eb02bd7ad54af16b5780ea62a.png"
					},

					{
						id: "1ff38f90-caf7-11ea-8523-0da8a6a49497",
						name: "半身裙",
						icon:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/15988601ef5f857e970992f5040eeb66.png"
					},

					{
						id: "418835c0-caf7-11ea-8523-0da8a6a49497",
						name: "吊带裙",
						icon:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/c8f30ce70fb18c0632bf820f79f8c596.png"
					}
				]
			};
		}

		if (Component) HocSortListOd.__proto__ = Component;
		HocSortListOd.prototype = Object.create(Component && Component.prototype);
		HocSortListOd.prototype.constructor = HocSortListOd;
		HocSortListOd.prototype.apiready = function() {};
		HocSortListOd.prototype.onSortClick = function() {
			api.setTabBarAttr({
				index: 1
			});
		};
		HocSortListOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "classinfo_box"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							onClick: this$1.onSortClick,
							class: "classinfo_one",
							"data-id": item$1.id
						},
						apivm.h("image", {class: "classinfo_img", src: item$1.icon}),
						apivm.h("text", {class: "classinfo_zi"}, item$1.name)
					);
				})
			);
		};

		return HocSortListOd;
	})(Component);
	HocSortListOd.css = {
		".classinfo_box": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-around",
			height: "106px",
			backgroundColor: "#fff"
		},
		".classinfo_one": {width: "50px", height: "100%"},
		".classinfo_img": {width: "50px", height: "50px", margin: "16px auto 8px"},
		".classinfo_zi": {
			textAlign: "center",
			lineHeight: "17px",
			height: "17px",
			fontSize: "12px",
			color: "#666666"
		}
	};
	apivm.define("hoc-sort-list-od", HocSortListOd);

	var HocBannerListOd = /*@__PURE__*/ (function(Component) {
		function HocBannerListOd(props) {
			Component.call(this, props);
			this.data = {
				current: 0,
				list: this.props.list || [
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3794f574251ab98366a921c0913b3cdc.png"
					},

					{
						icon:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/74f3bc9acdac7fc7554869f7011848df.png"
					},

					{
						icon:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/1d4e6036e2742d1500dfa7c6b0d65e84.png"
					}
				]
			};
		}

		if (Component) HocBannerListOd.__proto__ = Component;
		HocBannerListOd.prototype = Object.create(Component && Component.prototype);
		HocBannerListOd.prototype.constructor = HocBannerListOd;
		HocBannerListOd.prototype.apiready = function() {};
		HocBannerListOd.prototype.onDetailClick = function() {
			api.openWin({
				name: "detail",
				url: "widget://pages/template-od-detail/template-od-detail"
			});
		};
		HocBannerListOd.prototype.fnSwiperChange = function(e) {
			this.data.current = e.detail.current;
		};
		HocBannerListOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "banner_box"},
				apivm.h(
					"swiper",
					{
						class: "banner_swiper",
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
							{onClick: this$1.onDetailClick},
							apivm.h("image", {
								class: "banner_img",
								src: item_.icon,
								"data-index": index_
							})
						);
					})
				),
				apivm.h(
					"view",
					{class: "banner_dots"},
					(Array.isArray(this.data.list)
						? this.data.list
						: Object.values(this.data.list)
					).map(function(item$1, index$1) {
						return apivm.h("view", {
							class: this$1.data.current == index$1 ? "banner_dot-on" : "banner_dot"
						});
					})
				)
			);
		};

		return HocBannerListOd;
	})(Component);
	HocBannerListOd.css = {
		".banner_box": {
			width: "100%",
			height: "200px",
			padding: "10px 0",
			backgroundColor: "#fff"
		},
		".banner_swiper": {height: "200px", borderRadius: "6px"},
		".banner_img": {width: "100%", height: "173px", borderRadius: "6px"},
		".banner_dots": {
			flexDirection: "row",
			justifyContent: "center",
			width: "100%",
			height: "4px",
			position: "absolute",
			bottom: "28px"
		},
		".banner_dot": {
			width: "4px",
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 0.4)",
			borderRadius: "2px",
			margin: "0 2px"
		},
		".banner_dot-on": {
			width: "15px",
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 1)",
			borderRadius: "2px",
			margin: "0 2px"
		}
	};
	apivm.define("hoc-banner-list-od", HocBannerListOd);

	var HocSearchBarOd = /*@__PURE__*/ (function(Component) {
		function HocSearchBarOd(props) {
			Component.call(this, props);
			this.data = {
				placeholder: this.props.placeholder || "请输入商品名称"
			};
		}

		if (Component) HocSearchBarOd.__proto__ = Component;
		HocSearchBarOd.prototype = Object.create(Component && Component.prototype);
		HocSearchBarOd.prototype.constructor = HocSearchBarOd;
		HocSearchBarOd.prototype.apiready = function() {};
		HocSearchBarOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "search_container"},
				apivm.h(
					"view",
					{class: "search_box"},
					apivm.h("image", {
						class: "search_img",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/e8ef34b317414172d61a612451b01b78.png"
					}),
					apivm.h("text", {class: "search_zi"}, this.data.placeholder)
				)
			);
		};

		return HocSearchBarOd;
	})(Component);
	HocSearchBarOd.css = {
		".search_container": {
			justifyContent: "center",
			height: "44px",
			padding: "0 15px",
			backgroundColor: "#fff",
			borderBottom: "1px solid #f8f8f8"
		},
		".search_box": {
			flexDirection: "row",
			alignItems: "center",
			height: "30px",
			backgroundColor: "#f5f5f5",
			borderRadius: "15px"
		},
		".search_img": {
			width: "12px",
			height: "12px",
			marginLeft: "13px",
			marginRight: "6px"
		},
		".search_zi": {color: "#b5b5b5", fontSize: "12px", lineHeight: "17px"}
	};
	apivm.define("hoc-search-bar-od", HocSearchBarOd);

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

	var TemplateOdMain = /*@__PURE__*/ (function(Component) {
		function TemplateOdMain(props) {
			Component.call(this, props);
			this.data = {
				placeholder: "请输入商品名称",
				// 轮播图
				bannerList: [
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3794f574251ab98366a921c0913b3cdc.png"
					},

					{
						icon:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/74f3bc9acdac7fc7554869f7011848df.png"
					},

					{
						icon:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/1d4e6036e2742d1500dfa7c6b0d65e84.png"
					}
				],

				// 分类列表
				sortList: [
					{
						id: "f4aaeef0-caf6-11ea-8523-0da8a6a49497",
						name: "连衣裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/e2eeaa09375067448a2389831afdfafe.png"
					},
					{
						id: "fc084f30-caf6-11ea-8523-0da8a6a49497",
						name: "衬衫",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/5cc9c8a23f3b3f039b8584f73c0fb338.png"
					},
					{
						id: "1ff38f90-caf7-11ea-8523-0da8a6a49497",
						name: "半身裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/07e8b3a6970cac4bd001b47e22526df6.png"
					},
					{
						id: "418835c0-caf7-11ea-8523-0da8a6a49497",
						name: "针织衫",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3869e031b7cf08f0150171c85ea155c1.png"
					}
				],

				// 商品列表标题
				title: "活动专区",
				// 商品列表
				goodsList: [
					{
						id: "1",
						title: "莫代尔无袖吊带连衣裙春秋侧开叉长裙女夏季内搭修身显瘦打底裙子",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7a6f4bb167b352d84a884fcc93c5442e.png",
						price: 6999,
						buy_num: 39000,
						delprice: 7299
					},
					{
						id: "2",
						title: "夏新款套装女洋气时尚短裤阔腿裤两件套小个子夏装搭配显高",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/d8a697c7e8cf71516074cefde7466e12.png",
						price: 629,
						buy_num: 666,
						delprice: 1236
					},
					{
						id: "3",
						title: "2020夏新款韩版连衣裙女收腰显瘦显高A字裙气质法式",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c6f60b449d9112c4aac0b681da880526.png",
						price: 1299,
						buy_num: 200,
						delprice: 2199
					},
					{
						id: "4",
						title: "港风套装女复古chic减龄短袖 ins复古穿搭",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6d5eb36bc7afa77efcc6356f021b7625.png",
						price: 1998,
						buy_num: 1234,
						delprice: 2666
					}
				],

				goodsList1: [
					{
						id: "1",
						title: "吊带连衣裙女2020夏季新款夏季雪纺上衣真…",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/19e25045ec08361d583a31be8ab2270a.png",
						price: 399,
						buy_num: 39000,
						delprice: 7299
					},
					{
						id: "2",
						title: "港风套装女复古chic减龄短袖",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/02a33b94f3856b401bc8153ecac56385.png",
						price: 299,
						buy_num: 666,
						delprice: 1236
					},
					{
						id: "3",
						title: "休闲时尚套装女夏裤子洋气可盐可甜",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/e7754353993fee1251b4b07f6ed60cf5.png",
						price: 369,
						buy_num: 200,
						delprice: 2199
					},
					{
						id: "4",
						title: "时尚短裤阔腿裤两件套",
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/5b5e1dab45b0d7c9850bffb1d693e92c.png",
						price: 329,
						buy_num: 1234,
						delprice: 2666
					}
				]
			};
		}

		if (Component) TemplateOdMain.__proto__ = Component;
		TemplateOdMain.prototype = Object.create(Component && Component.prototype);
		TemplateOdMain.prototype.constructor = TemplateOdMain;
		TemplateOdMain.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h("hoc-nav-bar-od", {msg: "首页"}),
				apivm.h(
					"scroll-view",
					{"scroll-y": true, "show-scrollbar": false},

					apivm.h("hoc-search-bar-od", {placeholder: this.data.placeholder}),

					apivm.h("hoc-banner-list-od", {list: this.data.bannerList}),

					apivm.h("hoc-sort-list-od", {list: this.data.sortList}),

					apivm.h("hoc-good-list-lt-od", {
						list: this.data.goodsList,
						title: this.data.title
					}),

					apivm.h("hoc-good-list-gr-od", {
						list: this.data.goodsList1,
						title: "精品推荐"
					})
				)
			);
		};

		return TemplateOdMain;
	})(Component);
	TemplateOdMain.css = {
		".page": {backgroundColor: "white"},
		"scroll-view": {height: "100%"}
	};
	apivm.define("template-od-main", TemplateOdMain);
	apivm.render(apivm.h("template-od-main", null), "body");
})();
