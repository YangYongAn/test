(function() {
	var HocActivityAreaSgm = /*@__PURE__*/ (function(Component) {
		function HocActivityAreaSgm(props) {
			Component.call(this, props);
			this.data = {
				moduleTitle:
					this.props.moduleTitle !== undefined ? this.props.moduleTitle : "活动推荐",
				moreText: this.props.moreText !== undefined ? this.props.moreText : "更多",
				showHot: this.props.showHot || false,
				hotIcon:
					this.props.hotIcon !== undefined
						? this.props.hotIcon
						: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/784e573cab94112b0e91f5c063fee14f.png",
				productList: this.props.productList || [
					{
						id: "e9fc85d0-d275-11ec-803a-9bb76ce20623",
						title: "测血压手环智能心率心脏血氧运动量体温定位",
						image:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/2fffadde6135dda7de6c7567a461c5af.png",
						price: 30.9,
						delprice: 50,
						buy_num: 30,
						images:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/2fffadde6135dda7de6c7567a461c5af.png",
						dw: "个",
						pnum: 3,
						images_show: [
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/2fffadde6135dda7de6c7567a461c5af.png"
						],

						pnumstr: "三"
					},

					{
						id: "ac3abd20-d275-11ec-803a-9bb76ce20623",
						title: "NFC版全面彩屏支付30种运动模式心率检",
						image:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/746f329fbe1b3791e49072c8a05ec60e.png",
						price: 30.9,
						delprice: 40,
						buy_num: 451,
						images:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/746f329fbe1b3791e49072c8a05ec60e.png",
						dw: "个",
						pnum: 5,
						images_show: [
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/746f329fbe1b3791e49072c8a05ec60e.png"
						],

						pnumstr: "五"
					},

					{
						id: "8839f8f0-d275-11ec-803a-9bb76ce20623",
						title: "配充电盒Apple蓝牙耳机",
						image:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/521010247ff5852fe77dff5a943e6d97.png",
						price: 30,
						delprice: 40,
						buy_num: 20,
						images:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/521010247ff5852fe77dff5a943e6d97.png",
						dw: "个",
						pnum: 3,
						images_show: [
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/521010247ff5852fe77dff5a943e6d97.png"
						],

						pnumstr: "三"
					}
				]
			};
		}

		if (Component) HocActivityAreaSgm.__proto__ = Component;
		HocActivityAreaSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocActivityAreaSgm.prototype.constructor = HocActivityAreaSgm;
		HocActivityAreaSgm.prototype.apiready = function() {};
		HocActivityAreaSgm.prototype.clickMoreBtn = function(goods) {
			this.fire("clickMoreBtn");
		};
		HocActivityAreaSgm.prototype.itemClick = function(item) {
			this.fire("clickGoodsItem", item);
		};
		HocActivityAreaSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "index-activity-area"},
				apivm.h(
					"view",
					{class: "activity-area-card"},
					apivm.h(
						"view",
						{class: "activity-area-card-title"},
						apivm.h(
							"text",
							{class: "activity-area-card-title-text"},
							this.data.moduleTitle
						),
						apivm.h(
							"view",
							{class: "activity-area-card-morebtn", onClick: this.clickMoreBtn},
							apivm.h(
								"text",
								{class: "activity-area-card-morebtn-text"},
								this.data.moreText
							),
							apivm.h("image", {
								class: "activity-area-card-morebtn-icon",
								src:
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
							})
						)
					),

					apivm.h(
						"view",
						{class: "commodity-cards-wrapper"},
						(Array.isArray(this.data.productList)
							? this.data.productList
							: Object.values(this.data.productList)
						).map(function(item$1, index$1) {
							return apivm.h(
								"view",
								{
									class: "commodity-card",
									key: index$1,
									onClick: function() {
										return this$1.itemClick(item$1);
									}
								},
								apivm.h("img", {src: item$1.image, class: "commodity-card-img"}),
								apivm.h(
									"view",
									{class: "commodity-card-middle"},
									apivm.h("text", {class: "commodity-card-middle-title"}, item$1.title),
									this$1.data.showHot
										? apivm.h(
												"view",
												{class: "commodity-card-middle-num"},
												apivm.h("img", {
													class: "commodity-card-middle-num-img",
													src: this$1.data.hotIcon,
													alt: "hot"
												}),
												apivm.h(
													"text",
													{class: "commodity-card-middle-num-price"},
													fixBuynum(item$1.buy_num)
												)
										  )
										: null
								),
								apivm.h(
									"view",
									{class: "commodity-card-bottom"},
									apivm.h("text", {class: "commodity-card-bottom-label"}, "拼团价"),
									apivm.h("text", {class: "commodity-card-bottom-price-prefix"}, "￥"),
									apivm.h("text", {class: "commodity-card-bottom-price"}, item$1.price)
								),
								apivm.h(
									"view",
									{class: "commodity-card-tips"},
									apivm.h("img", {
										class: "commodity-card-tips-img",
										src:
											"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/87ed37507c476817e86d9f6c51b9fed8.png"
									}),
									apivm.h(
										"text",
										{class: "commodity-card-tips-text"},
										item$1.pnumstr,
										"人团"
									)
								)
							);
						})
					)
				)
			);
		};

		return HocActivityAreaSgm;
	})(Component);
	HocActivityAreaSgm.css = {
		".activity-area-card": {height: "100%", background: "#fff"},
		".activity-area-card-title": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			marginTop: "5px",
			padding: "15px",
			backgroundColor: "#fff"
		},
		".activity-area-card-title-text": {
			fontSize: "20px",
			height: "28px",
			lineHeight: "28px",
			fontWeight: "bold",
			color: "#6e552b"
		},
		".activity-area-card-morebtn": {flexDirection: "row", alignItems: "center"},
		".activity-area-card-morebtn-text": {fontSize: "12px", color: "#8f8f8f"},
		".activity-area-card-morebtn-icon": {width: "10px", height: "10px"},
		".index-activity-listbox": {backgroundColor: "#f8f8f8"},
		".commodity-cards-wrapper": {background: "#f8f8f8", padding: "0 16px"},
		".commodity-card": {
			position: "relative",
			marginBottom: "16px",
			background: "#fff",
			borderRadius: "8px",
			boxSizing: "border-box"
		},
		".commodity-card-img": {
			width: "100%",
			height: "180px",
			borderRadius: "8px 8px 0 0"
		},
		".commodity-card-middle": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			margin: "15px"
		},
		".commodity-card-middle-title": {
			flex: "1",
			fontSize: "16px",
			fontWeight: "600",
			lineHeight: "22px",
			color: "#333",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			overflow: "hidden",
			marginRight: "12px"
		},
		".commodity-card-middle-num": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			padding: "1px 6px",
			background: "#fef8f4",
			borderRadius: "8px",
			border: "1px solid #fe904a",
			color: "#fe904a",
			fontSize: "10px"
		},
		".commodity-card-middle-num-img": {
			width: "9px",
			height: "11px",
			marginRight: "3px"
		},
		".commodity-card-bottom": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			padding: "0 15px 15px"
		},
		".commodity-card-bottom-label": {
			flex: "1",
			color: "#ff7037",
			fontSize: "14px"
		},
		".commodity-card-bottom-price-prefix": {color: "#ff7037", fontSize: "14px"},
		".commodity-card-bottom-price": {
			fontSize: "28px",
			fontWeight: "500",
			color: "#ff7037"
		},
		".commodity-card-tips": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			width: "52px",
			height: "21px",
			top: "15px",
			left: "0"
		},
		".commodity-card-tips-img": {
			position: "absolute",
			width: "100%",
			height: "100%",
			fontSize: "12px",
			color: "#000",
			fontWeight: "500"
		},
		".commodity-card-tips-text": {
			zIndex: "999",
			fontSize: "12px",
			color: "#000",
			fontWeight: "500"
		}
	};
	apivm.define("hoc-activity-area-sgm", HocActivityAreaSgm);

	var HocClassifyTabSgm = /*@__PURE__*/ (function(Component) {
		function HocClassifyTabSgm(props) {
			Component.call(this, props);
			this.data = {
				classifylist: this.props.classifyList || [
					{
						id: "bbe35280-dba7-11ea-8529-d94a7752ff71",
						name: "华为",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/48529743a715842f9b70b36b789b7438.png",
						addtime: "2020-08-11T07:53:24.648Z",
						sta: 1,
						orderby: 5,
						pid: "765fdbc0-dba2-11ea-a68f-873831895ca3"
					},

					{
						id: "765fdbc0-dba2-11ea-a68f-873831895ca3",
						name: "5G手机",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/86e180a4995c449f3c3c45495e69dc8c.png",
						addtime: "2020-08-11T07:15:40.540Z",
						sta: 1,
						orderby: 4,
						pid: "1"
					},

					{
						id: "03e206d0-d6e9-11ea-8546-397f48399cb9",
						name: "游戏手机",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/0e842b738aa73a2db7b8582c9bf8a890.png",
						addtime: "2020-08-05T06:58:06.909Z",
						sta: 1,
						orderby: 3,
						pid: "1"
					},

					{
						id: "22737f20-d6e9-11ea-8546-397f48399cb9",
						name: "以旧换新",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/1dc6d1fad3d850332078348c20c1d2c9.png",
						addtime: "2020-08-05T06:58:58.194Z",
						sta: 1,
						orderby: 2,
						pid: "1"
					}
				]
			};
		}

		if (Component) HocClassifyTabSgm.__proto__ = Component;
		HocClassifyTabSgm.prototype = Object.create(Component && Component.prototype);
		HocClassifyTabSgm.prototype.constructor = HocClassifyTabSgm;
		HocClassifyTabSgm.prototype.apiready = function() {};
		HocClassifyTabSgm.prototype.classifyClick = function(item) {
			this.fire("classifyClick", item);
		};
		HocClassifyTabSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "index-classify"},
				(Array.isArray(this.data.classifylist)
					? this.data.classifylist
					: Object.values(this.data.classifylist)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							class: "index-classify-item",
							onClick: function() {
								return this$1.classifyClick(item$1);
							}
						},
						apivm.h("image", {class: "index-classify-item-icon", src: item$1.icon}),
						apivm.h("text", {class: "index-classify-item-text"}, item$1.name)
					);
				})
			);
		};

		return HocClassifyTabSgm;
	})(Component);
	HocClassifyTabSgm.css = {
		".index-classify": {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-around",
			padding: "10px 0",
			backgroundColor: "#fff",
			overflow: "auto"
		},
		".index-classify-item": {
			width: "70px",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: "0"
		},
		".index-classify-item-icon": {
			width: "50px",
			height: "50px",
			margin: "16px auto 8px"
		},
		".index-classify-item-text": {
			textAlign: "center",
			lineHeight: "17px",
			height: "17px",
			fontSize: "12px",
			color: "#666666"
		}
	};
	apivm.define("hoc-classify-tab-sgm", HocClassifyTabSgm);

	var HocSpellSucctipSgm = /*@__PURE__*/ (function(Component) {
		function HocSpellSucctipSgm(props) {
			Component.call(this, props);
			this.data = {
				productId:
					this.props.productId !== undefined ? this.props.productId : "111",
				paytime:
					this.props.paytime !== undefined ? this.props.paytime : "2022-01-02",
				avatar:
					this.props.avatar !== undefined
						? this.props.avatar
						: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/4bb17d1e558c34b813965d8b35e05407.png",
				nickname:
					this.props.nickname !== undefined ? this.props.nickname : "樱桃小丸子"
			};
		}

		if (Component) HocSpellSucctipSgm.__proto__ = Component;
		HocSpellSucctipSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocSpellSucctipSgm.prototype.constructor = HocSpellSucctipSgm;
		HocSpellSucctipSgm.prototype.apiready = function() {};
		HocSpellSucctipSgm.prototype.handleClick = function() {
			this.fire("handleClick");
		};
		HocSpellSucctipSgm.prototype.nameHash = function(uname) {
			if (!uname) {
				return "";
			}
			uname = uname.substring(0, 1) + "***";
			return uname;
		};
		HocSpellSucctipSgm.prototype.dateFormat = function(timestamp, format) {
			if (!format) {
				format = "yyyy.MM.dd hh:mm:ss";
			}
			var realDate = new Date(timestamp);
			function timeFormat(num) {
				return num < 10 ? "0" + num : num;
			}
			var date = [
				["M+", timeFormat(realDate.getMonth() + 1)],
				["d+", timeFormat(realDate.getDate())],
				["h+", timeFormat(realDate.getHours())],
				["m+", timeFormat(realDate.getMinutes())],
				["s+", timeFormat(realDate.getSeconds())],
				["q+", Math.floor((realDate.getMonth() + 3) / 3)],
				["S+", realDate.getMilliseconds()]
			];

			var reg1 = new RegExp("(y+)", "i").exec(format);
			if (reg1) {
				format = format.replace(
					reg1[1],
					(realDate.getFullYear() + "").substring(4 - reg1[1].length)
				);
			}
			for (var i = 0; i < date.length; i++) {
				var k = date[i][0];
				var v = date[i][1];

				var reg2 = new RegExp("(" + k + ")").exec(format);
				if (reg2) {
					format = format.replace(
						reg2[1],
						reg2[1].length == 1 ? v : ("00" + v).substring(("" + v).length)
					);
				}
			}
			return format;
		};
		HocSpellSucctipSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{
					class: "pin-success-tip",
					onClick: this.handleClick,
					"data-id": this.data.productId
				},
				apivm.h("image", {
					class: "pin-success-tip-logo",
					src:
						this.data.avatar ||
						"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/46e4b8d7a4a8d1febeec082516a8e8f5.png",
					policy: "cache_only",
					mode: "aspectFill"
				}),
				apivm.h(
					"text",
					{class: "pin-success-tip-name"},
					this.nameHash(this.data.nickname),
					" 拼团成功"
				),
				apivm.h("view", {style: "flex: 1;"}),
				apivm.h(
					"text",
					{class: "pin-success-tip-time"},
					this.dateFormat(this.data.paytime)
				)
			);
		};

		return HocSpellSucctipSgm;
	})(Component);
	HocSpellSucctipSgm.css = {
		".pin-success-tip": {
			flexDirection: "row",
			alignItems: "center",
			height: "45px",
			padding: "0 16px"
		},
		".pin-success-tip-logo": {
			width: "25px",
			height: "25px",
			borderRadius: "50%",
			marginRight: "6px"
		},
		".pin-success-tip-name": {fontSize: "12px"},
		".pin-success-tip-time": {fontSize: "12px"}
	};
	apivm.define("hoc-spell-succtip-sgm", HocSpellSucctipSgm);

	global.banerList = [
		{
			id: "0cdfb640-d2db-11ea-ab34-1b0cd727d0eb",
			title: "333",
			type: "class",
			orderby: 1,
			addtime: "2020-07-31T03:08:04.388Z",
			goodsid: "",
			topid: "top1",
			classid: "765fdbc0-dba2-11ea-a68f-873831895ca3",
			icon:
				"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/0a26deb65cb6e537a5e619241d382ecc.png"
		},
		{
			id: "df67a270-dba1-11ea-a68f-873831895ca3",
			title: "拼团4",
			type: "none",
			orderby: 1,
			addtime: "2020-08-11T07:11:27.255Z",
			goodsid: "",
			icon:
				"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/746f329fbe1b3791e49072c8a05ec60e.png"
		},
		{
			id: "f6c3c4f0-d2da-11ea-ab34-1b0cd727d0eb",
			title: "222",
			type: "top",
			orderby: 1,
			addtime: "2020-07-31T03:07:27.295Z",
			goodsid: "",
			topid: "top2",
			icon:
				"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/521010247ff5852fe77dff5a943e6d97.png"
		},
		{
			id: "d8ebd8a0-d2da-11ea-ab34-1b0cd727d0eb",
			title: "111",
			type: "item",
			orderby: 1,
			addtime: "2020-07-31T03:06:37.226Z",
			goodsid: "a304eb50-d2df-11ea-ab34-1b0cd727d0eb",
			topid: "top1",
			icon:
				"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/0a26deb65cb6e537a5e619241d382ecc.png"
		}
	];
	var HocSwiperSgm = /*@__PURE__*/ (function(Component) {
		function HocSwiperSgm(props) {
			Component.call(this, props);
			this.data = {
				current: this.props.current !== undefined ? this.props.current : 0,
				swiperList: this.props.list || banerList
			};
		}

		if (Component) HocSwiperSgm.__proto__ = Component;
		HocSwiperSgm.prototype = Object.create(Component && Component.prototype);
		HocSwiperSgm.prototype.constructor = HocSwiperSgm;
		HocSwiperSgm.prototype.apiready = function() {};
		HocSwiperSgm.prototype.fnSwiperChange = function(e) {
			this.data.current = e.detail.current;
			this.fire("swiperChange", e.detail);
		};
		HocSwiperSgm.prototype.fnBannerPage = function(item) {
			console.log(JSON.stringify(item));
			this.fire("itemClick", item);
		};
		HocSwiperSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "index-swiper-wrapper"},
				apivm.h(
					"swiper",
					{
						class: "index-swiper",
						circular: true,
						autoplay: true,
						onChange: this.fnSwiperChange
					},
					(Array.isArray(this.data.swiperList)
						? this.data.swiperList
						: Object.values(this.data.swiperList)
					).map(function(item$1, index$1) {
						return apivm.h(
							"swiper-item",
							{style: "width: 100%; height: 180px;"},
							apivm.h("image", {
								class: "index-swiper-img",
								src: item$1.icon,
								onClick: function() {
									return this$1.fnBannerPage(item$1);
								},
								"data-index": index$1
							})
						);
					})
				),
				apivm.h(
					"view",
					{class: "index-swiper-dots"},
					(Array.isArray(this.data.swiperList)
						? this.data.swiperList
						: Object.values(this.data.swiperList)
					).map(function(item$1, index$1) {
						return apivm.h("view", {
							class:
								this$1.data.current == index$1
									? "index-swiper-dot-on"
									: "index-swiper-dot"
						});
					})
				)
			);
		};

		return HocSwiperSgm;
	})(Component);
	HocSwiperSgm.css = {
		".index-swiper-wrapper": {
			height: "180px",
			margin: "10px 15px",
			backgroundColor: "#fff"
		},
		".index-swiper": {height: "180px", borderRadius: "6px"},
		".index-swiper-img": {width: "100%", height: "97%", borderRadius: "6px"},
		".index-swiper-dots": {
			flexDirection: "row",
			justifyContent: "center",
			width: "100%",
			height: "4px",
			position: "absolute",
			bottom: "12px"
		},
		".index-swiper-dot": {
			width: "4px",
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 0.4)",
			borderRadius: "2px",
			margin: "0 2px"
		},
		".index-swiper-dot-on": {
			width: "15px",
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 1)",
			borderRadius: "2px",
			margin: "0 2px"
		}
	};
	apivm.define("hoc-swiper-sgm", HocSwiperSgm);

	var HocSearchBarSgm = /*@__PURE__*/ (function(Component) {
		function HocSearchBarSgm(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) HocSearchBarSgm.__proto__ = Component;
		HocSearchBarSgm.prototype = Object.create(Component && Component.prototype);
		HocSearchBarSgm.prototype.constructor = HocSearchBarSgm;
		HocSearchBarSgm.prototype.apiready = function() {};
		HocSearchBarSgm.prototype.handleInput = function(e) {
			this.fire("handleInput", e.detail.value);
		};
		HocSearchBarSgm.prototype.handleCancel = function() {
			api.toast({
				msg: "点击取消按钮了!"
			});

			this.fire("handleCancel");
		};
		HocSearchBarSgm.prototype.searchClick = function() {
			this.fire("searchClick");
		};
		HocSearchBarSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "search-bar", onClick: this.searchClick},
				apivm.h(
					"view",
					{class: "search-bar-inner"},
					apivm.h("img", {
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/e8ef34b317414172d61a612451b01b78.png",
						alt: "search",
						class: "search-bar-inner-icon"
					}),
					!this.props.isClick
						? apivm.h("input", {
								placeholder:
									this.props.placeholder !== undefined
										? this.props.placeholder
										: "请输入商品名称",
								type: "text",
								onInput: this.handleInput,
								class: "search-bar-inner-input"
						  })
						: apivm.h(
								"text",
								{class: "search-bar-inner-input search-bar-inner-placeholder"},
								this.props.placeholder !== undefined
									? this.props.placeholder
									: "请输入商品名称"
						  )
				),
				this.props.isCancel
					? apivm.h(
							"text",
							{onClick: this.handleCancel, class: "search-bar-cancel-text"},
							"取消"
					  )
					: null
			);
		};

		return HocSearchBarSgm;
	})(Component);
	HocSearchBarSgm.css = {
		".search-bar": {
			zIndex: "999",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			height: "44px",
			backgroundColor: "#fff",
			borderBottom: "1px solid #f8f8f8",
			margin: "0 15px",
			padding: "8px 0"
		},
		".search-bar-inner": {
			flex: "1",
			height: "30px",
			background: "#f5f5f5",
			borderRadius: "15px",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			padding: "0 13px"
		},
		".search-bar-inner-icon": {width: "12px", height: "12px", marginRight: "6px"},
		".search-bar-inner-input": {
			flex: "1",
			fontSize: "12px",
			lineHeight: "17px",
			color: "#333",
			background: "transparent",
			border: "none"
		},
		".search-bar-cancel-text": {
			color: "#666",
			fontSize: "12px",
			marginLeft: "15px"
		},
		".search-bar-inner-placeholder": {color: "#999"}
	};
	apivm.define("hoc-search-bar-sgm", HocSearchBarSgm);

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

	var TemplateSgmMain = /*@__PURE__*/ (function(Component) {
		function TemplateSgmMain(props) {
			Component.call(this, props);
			this.data = {
				swiperList: [
					{
						id: "0cdfb640-d2db-11ea-ab34-1b0cd727d0eb",
						title: "333",
						type: "class",
						orderby: 1,
						addtime: "2020-07-31T03:08:04.388Z",
						goodsid: "",
						topid: "top1",
						classid: "765fdbc0-dba2-11ea-a68f-873831895ca3",
						icon:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/0a26deb65cb6e537a5e619241d382ecc.png"
					},
					{
						id: "df67a270-dba1-11ea-a68f-873831895ca3",
						title: "拼团4",
						type: "none",
						orderby: 1,
						addtime: "2020-08-11T07:11:27.255Z",
						goodsid: "",
						icon:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/746f329fbe1b3791e49072c8a05ec60e.png"
					},
					{
						id: "f6c3c4f0-d2da-11ea-ab34-1b0cd727d0eb",
						title: "222",
						type: "top",
						orderby: 1,
						addtime: "2020-07-31T03:07:27.295Z",
						goodsid: "",
						topid: "top2",
						icon:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/521010247ff5852fe77dff5a943e6d97.png"
					},
					{
						id: "d8ebd8a0-d2da-11ea-ab34-1b0cd727d0eb",
						title: "111",
						type: "item",
						orderby: 1,
						addtime: "2020-07-31T03:06:37.226Z",
						goodsid: "a304eb50-d2df-11ea-ab34-1b0cd727d0eb",
						topid: "top1",
						icon:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/0a26deb65cb6e537a5e619241d382ecc.png"
					}
				],

				classifyList: [
					{
						id: "bbe35280-dba7-11ea-8529-d94a7752ff71",
						name: "华为",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/48529743a715842f9b70b36b789b7438.png",
						addtime: "2020-08-11T07:53:24.648Z",
						sta: 1,
						orderby: 5,
						pid: "765fdbc0-dba2-11ea-a68f-873831895ca3"
					},
					{
						id: "765fdbc0-dba2-11ea-a68f-873831895ca3",
						name: "5G手机",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/86e180a4995c449f3c3c45495e69dc8c.png",
						addtime: "2020-08-11T07:15:40.540Z",
						sta: 1,
						orderby: 4,
						pid: "1"
					},
					{
						id: "03e206d0-d6e9-11ea-8546-397f48399cb9",
						name: "游戏手机",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/0e842b738aa73a2db7b8582c9bf8a890.png",
						addtime: "2020-08-05T06:58:06.909Z",
						sta: 1,
						orderby: 3,
						pid: "1"
					},
					{
						id: "22737f20-d6e9-11ea-8546-397f48399cb9",
						name: "以旧换新",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/1dc6d1fad3d850332078348c20c1d2c9.png",
						addtime: "2020-08-05T06:58:58.194Z",
						sta: 1,
						orderby: 2,
						pid: "1"
					}
				],

				activityAreaSgmProductList: [
					{
						id: "e9fc85d0-d275-11ec-803a-9bb76ce20623",
						title: "测血压手环智能心率心脏血氧运动量体温定位",
						image:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/2fffadde6135dda7de6c7567a461c5af.png",
						price: 30.9,
						delprice: 50,
						buy_num: 30,
						images:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/2fffadde6135dda7de6c7567a461c5af.png",
						dw: "个",
						pnum: 3,
						images_show: [
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/2fffadde6135dda7de6c7567a461c5af.png"
						],
						pnumstr: "三"
					},
					{
						id: "ac3abd20-d275-11ec-803a-9bb76ce20623",
						title: "NFC版全面彩屏支付30种运动模式心率检",
						image:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/746f329fbe1b3791e49072c8a05ec60e.png",
						price: 30.9,
						delprice: 40,
						buy_num: 451,
						images:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/746f329fbe1b3791e49072c8a05ec60e.png",
						dw: "个",
						pnum: 5,
						images_show: [
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/746f329fbe1b3791e49072c8a05ec60e.png"
						],
						pnumstr: "五"
					},
					{
						id: "8839f8f0-d275-11ec-803a-9bb76ce20623",
						title: "配充电盒Apple蓝牙耳机",
						image:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/521010247ff5852fe77dff5a943e6d97.png",
						price: 30,
						delprice: 40,
						buy_num: 20,
						images:
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/521010247ff5852fe77dff5a943e6d97.png",
						dw: "个",
						pnum: 3,
						images_show: [
							"http://a346b1014469c58049d5.qiniucdn.apicloud-system.com/apicloud/521010247ff5852fe77dff5a943e6d97.png"
						],
						pnumstr: "三"
					}
				]
			};
		}

		if (Component) TemplateSgmMain.__proto__ = Component;
		TemplateSgmMain.prototype = Object.create(Component && Component.prototype);
		TemplateSgmMain.prototype.constructor = TemplateSgmMain;
		TemplateSgmMain.prototype.openSearch = function() {
			console.log("点击搜索框了~");
		};
		TemplateSgmMain.prototype.fnOpenClassPage = function(data) {
			api.openWin({
				name: "sortDetail",
				url: "../template-sgm-sort_list/template-sgm-sort_list.stml"
			});
		};
		TemplateSgmMain.prototype.fnOpenMoreZonePage = function(data) {
			console.log("活动专区，点击进入更多页面了", JSON.stringify(data));
		};
		TemplateSgmMain.prototype.fnOpenDetails = function(data) {
			api.openWin({
				name: "compodityDetail",
				url: "../template-sgm-commodity_detail/template-sgm-commodity_detail.stml"
			});
		};
		TemplateSgmMain.prototype.fnOpenGoodsDetails = function(e) {
			console.log("点击拼团成功，进入到拼团商品信息页面", JSON.stringify(e));
		};
		TemplateSgmMain.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},

				apivm.h("hoc-nav-bar-sgm", {title: "拼团商城", isShowBack: false}),

				apivm.h("hoc-search-bar-sgm", {
					isClick: true,
					onSearchClick: this.openSearch,
					isCancel: false,
					isClick: false,
					placeholder: "请输入商品名称"
				}),
				apivm.h(
					"scroll-view",
					{class: "hoc-index-page-sgm", "scroll-y": true, "show-scrollbar": false},

					apivm.h("hoc-swiper-sgm", {list: this.data.swiperList}),

					apivm.h("hoc-spell-succtip-sgm", {
						onHandleClick: this.fnOpenGoodsDetails,
						nickname: "赵丽丽",
						paytime: "2022-01-01",
						avatar:
							"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/46e4b8d7a4a8d1febeec082516a8e8f5.png"
					}),

					apivm.h("hoc-classify-tab-sgm", {
						onClassifyClick: this.fnOpenClassPage,
						classifyList: this.data.classifyList
					}),

					apivm.h("hoc-activity-area-sgm", {
						onClickMoreBtn: this.fnOpenMoreZonePage,
						onClickGoodsItem: this.fnOpenDetails,
						productList: this.data.activityAreaSgmProductList
					})
				)
			);
		};

		return TemplateSgmMain;
	})(Component);
	TemplateSgmMain.css = {
		".hoc-index-page-sgm": {height: "100%", background: "#fff"},
		".page": {backgroundColor: "#fff"}
	};
	apivm.define("template-sgm-main", TemplateSgmMain);
	apivm.render(apivm.h("template-sgm-main", null), "body");
})();
