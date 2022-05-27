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

	function ownKeys(object, enumerableOnly) {
		var keys = Object.keys(object);

		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);

			if (enumerableOnly) {
				symbols = symbols.filter(function(sym) {
					return Object.getOwnPropertyDescriptor(object, sym).enumerable;
				});
			}

			keys.push.apply(keys, symbols);
		}

		return keys;
	}

	function _objectSpread2(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i] != null ? arguments[i] : {};

			if (i % 2) {
				ownKeys(Object(source), true).forEach(function(key) {
					_defineProperty(target, key, source[key]);
				});
			} else if (Object.getOwnPropertyDescriptors) {
				Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
			} else {
				ownKeys(Object(source)).forEach(function(key) {
					Object.defineProperty(
						target,
						key,
						Object.getOwnPropertyDescriptor(source, key)
					);
				});
			}
		}

		return target;
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	var config = {
		schema: "https",
		host: "a7777777777777-pd.apicloud-saas.com",
		path: "api"
	};

	function req(options) {
		var baseUrl = config.schema + "://" + config.host + "/" + config.path + "/";
		options.url = baseUrl + options.url;
		return new Promise(function(resolve, reject) {
			var Cookie = api.getPrefs({sync: true, key: "COOKIE"});
			if (Cookie) {
				if (options.headers) {
					options.headers.Cookie = Cookie;
				} else {
					options.headers = {Cookie: Cookie};
				}
			}
			api.ajax(options, function(ret, err) {
				console.log(
					"[" +
						options.method +
						"] " +
						options.url +
						" [" +
						api.winName +
						"/" +
						api.frameName +
						"]\n" +
						JSON.stringify(
							_objectSpread2(_objectSpread2({}, options), {}, {ret: ret, err: err})
						)
				);

				if (ret) {
					if (ret.status === 0 || ret.code === 0) {
						resolve(ret.data ? ret.data : ret);
					} else {
						reject(ret);
						if (typeof options.error === "function") {
							options.error(ret);
						} else {
							api.alert({
								title: ret.msg,
								msg: "\u670D\u52A1\u7AEF\u9519\u8BEF\u4EE3\u7801:[" + ret.code + "]"
							});
						}
					}
				} else {
					var errNames = [
						"连接错误",
						"超时",
						"授权错误",
						"数据类型错误",
						"不安全的数据"
					];
					console.log([errNames[err.code], JSON.stringify(err)]);
					reject(err);

					if (typeof options.fail === "function") {
						options.fail(err);
					} else {
						api.toast({
							msg: errNames[err.code] + "[" + err.code + "]\n" + err.msg,
							location: "top",
							duration: 2500
						});
					}
				}
			});
		});
	}

	/**
	 * GET请求快捷方法
	 * @constructor
	 * @param url {string} 地址
	 * @param options {Object} 附加参数
	 */
	function GET(url, options) {
		if (options === void 0) {
			options = {};
		}
		return req(
			_objectSpread2(_objectSpread2({}, options), {}, {url: url, method: "GET"})
		);
	}

	var TemplateOfMainHome = /*@__PURE__*/ (function(Component) {
		function TemplateOfMainHome(props) {
			Component.call(this, props);
			this.data = {
				photoHeight: 210,
				opacity: 0,
				shopInfo: {
					shopName: "小龙坎老火锅（西直门店）",
					address: "北京市 海淀区 文教产业园44号院F座4层 柚子科技",
					operation: {
						status: 1,
						times: ["09:00 - 13:00", "16:00 - 22:00"]
					}
				},

				safeAreaTop: 0,
				classifyList: []
			};
			this.compute = {
				photoRealHeight: function() {
					return this.data.photoHeight + this.data.safeAreaTop;
				},
				statusBarStyle: function() {
					return this.data.opacity < 0.5 ? "light" : "dark";
				}
			};
		}

		if (Component) TemplateOfMainHome.__proto__ = Component;
		TemplateOfMainHome.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOfMainHome.prototype.constructor = TemplateOfMainHome;
		TemplateOfMainHome.prototype.apiready = function() {
			this.data.safeAreaTop = api.safeArea ? api.safeArea.top : 0;
			this.initEventListener();
			this.getData();
			this.getClassifiesData();
			this.getCartNum(); // 初始状态栏是白色的
			api.setStatusBarStyle && api.setStatusBarStyle({style: "light", color: "-"});
		};
		TemplateOfMainHome.prototype.onshow = function() {
			var cartData = api.getPrefs({sync: true, key: "CART-DATA"});
			if (cartData) {
				cartData = JSON.parse(cartData);
				setTabBarBadge(2, Object.keys(cartData).length);
			}
		};
		TemplateOfMainHome.prototype.onScroll = function(e) {
			var y = isMP() ? e.detail.scrollTop : e.detail.y;

			var threshold = this.photoRealHeight - y;
			if (threshold < 0) {
				threshold = 0;
			}
			this.data.opacity = 1 - threshold / this.photoRealHeight;
			api.setStatusBarStyle &&
				api.setStatusBarStyle({
					style: this.statusBarStyle
				});
		};
		TemplateOfMainHome.prototype.initEventListener = function() {
			var this$1 = this;

			// 监听来自其他页面逻辑主动触发的切换tabBar请求，后续需要手动调用setTabIndex来切换
			api.addEventListener(
				{
					name: "SET-TAB-INDEX"
				},
				function(ret) {
					console.log("收到了");
					this$1.setTabIndex(ret.value);
				}
			);

			// 监听来自tabBar本身点击触发的切换tabBar请求，后续需要手动调用setTabIndex来切换
			api.addEventListener(
				{
					name: "tabitembtn"
				},
				this.setTabIndex
			);
		};
		TemplateOfMainHome.prototype.setTabIndex = function(ret) {
			var index = ret.index;
			api.setTabBarAttr({index: index}); // 切换tabBar
			api.setStatusBarStyle &&
				api.setStatusBarStyle({
					// 设置状态栏
					style: index ? "dark" : this.statusBarStyle
				});
		};
		TemplateOfMainHome.prototype.getCartNum = function() {
			var cartList = api.getPrefs({sync: true, key: "CART-DATA"});
			if (cartList) {
				cartList = JSON.parse(cartList);
				setTabBarBadge(2, Object.keys(cartList).length);
			}
		};
		TemplateOfMainHome.prototype.getData = function(format) {
			var this$1 = this;

			GET("shops/getInfo").then(function(data) {
				this$1.data.shopInfo = data;
			});
		};
		TemplateOfMainHome.prototype.callPhone = function() {
			if (isMP()) {
				wx.makePhoneCall({
					phoneNumber: this.data.shopInfo.phone
				});
			} else {
				api.call({
					type: "tel_prompt",
					number: this.data.shopInfo.phone
				});
			}
		};
		TemplateOfMainHome.prototype.getClassifiesData = function() {
			var this$1 = this;

			GET("classifies/getClassifyGoodsList").then(function(data) {
				this$1.data.classifyList = data;
			});
		};
		TemplateOfMainHome.prototype.intoGoodsDetail = function(item) {
			api.openWin({
				name: "goods_detail",
				url: "../../pages/template-of-goods_detail/template-of-goods_detail.stml",
				pageParam: {
					item: item
				}
			});
		};
		TemplateOfMainHome.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "main-home"},
				apivm.h("img", {
					class: "shop-photo",
					style: "height:" + this.photoRealHeight + "px",
					src:
						"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/fdab4e4b956dad43d21661c645b6f32c.jpg",
					alt: ""
				}),
				apivm.h(
					"scroll-view",
					{
						"scroll-y": true,
						class: "flex-1 scroll-view",
						"enable-back-to-top": true,
						onScroll: this.onScroll,
						"show-scrollbar": false
					},
					apivm.h(
						"view",
						{class: "shop", style: "margin-top:210px;"},
						apivm.h(
							"view",
							{class: "shop-header flex-h"},
							apivm.h(
								"text",
								{class: "shop-name flex-1 ellipsis-1"},
								"小龙坎老火锅（西直门店）"
							),
							apivm.h("img", {
								class: "shop-phone",
								onClick: this.callPhone,
								src: "../../image/icon/icon-home-phone.png",
								alt: ""
							})
						),
						apivm.h(
							"view",
							{class: "content-wrap"},
							apivm.h(
								"text",
								{class: "shop-text shop-address"},
								"北京市 海淀区 文教产业园44号院F座4层 柚子科技"
							)
						),
						apivm.h(
							"view",
							{class: "shop-operation content-wrap"},
							apivm.h(
								"text",
								{class: "shop-text"},
								"营业中 09:00 - 13:00，16:00 - 22:00"
							)
						)
					),

					apivm.h(
						"view",
						{class: "list"},

						apivm.h(
							"view",
							{class: "goods-list-item-home-goods"},
							apivm.h("text", {class: "goods-list-item-goods-channel"}, "限时折扣"),
							apivm.h(
								"view",
								{class: "goods-list-item-goods-list"},
								apivm.h(
									"view",
									{
										class: "goods-list-item-goods-item",
										onClick: function() {
											return this$1.intoGoodsDetail({});
										}
									},
									apivm.h("img", {
										class: "goods-list-item-goods-cover",
										src:
											"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/6e51da2766d83e1000c165a1277d7683.jpg",
										alt: ""
									}),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info"},
										apivm.h(
											"text",
											{class: "goods-list-item-goods-name"},
											"麻辣捞派滑牛肉"
										)
									),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info flex-h flex-center-v"},
										apivm.h("text", {class: "goods-list-item-goods-price"}, "¥ 48.00"),
										apivm.h(
											"text",
											{class: "goods-list-item-goods-price-deleted"},
											"¥ 68.00"
										)
									)
								),

								apivm.h(
									"view",
									{
										class: "goods-list-item-goods-item",
										onClick: function() {
											return this$1.intoGoodsDetail({});
										}
									},
									apivm.h("img", {
										class: "goods-list-item-goods-cover",
										src:
											"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/cb5ac9803faf2e2a9098e25fdb003328.jpg",
										alt: ""
									}),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info"},
										apivm.h("text", {class: "goods-list-item-goods-name"}, "招牌厚切牛肉")
									),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info flex-h flex-center-v"},
										apivm.h("text", {class: "goods-list-item-goods-price"}, "¥ 58.00"),
										apivm.h(
											"text",
											{class: "goods-list-item-goods-price-deleted"},
											"¥ 68.00"
										)
									)
								)
							)
						),

						apivm.h(
							"view",
							{class: "goods-list-item-home-goods"},
							apivm.h("text", {class: "goods-list-item-goods-channel"}, "推荐菜品"),
							apivm.h(
								"view",
								{class: "goods-list-item-goods-list"},

								apivm.h(
									"view",
									{
										class: "goods-list-item-goods-item",
										onClick: function() {
											return this$1.intoGoodsDetail({});
										}
									},
									apivm.h("img", {
										class: "goods-list-item-goods-cover",
										src:
											"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/62b0154b1a846987d550e626c4b987c0.jpg",
										alt: ""
									}),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info"},
										apivm.h("text", {class: "goods-list-item-goods-name"}, "捞派毛肚")
									),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info flex-h flex-center-v"},
										apivm.h("text", {class: "goods-list-item-goods-price"}, "¥ 58.00"),
										apivm.h(
											"text",
											{class: "goods-list-item-goods-price-deleted"},
											"¥ 68.00"
										)
									)
								),
								apivm.h(
									"view",
									{
										class: "goods-list-item-goods-item",
										onClick: function() {
											return this$1.intoGoodsDetail({});
										}
									},
									apivm.h("img", {
										class: "goods-list-item-goods-cover",
										src:
											"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/6591903d20151263236bc94434699027.jpg",
										alt: ""
									}),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info"},
										apivm.h("text", {class: "goods-list-item-goods-name"}, "招牌雪花牛肉")
									),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info flex-h flex-center-v"},
										apivm.h("text", {class: "goods-list-item-goods-price"}, "¥ 50.00"),
										apivm.h(
											"text",
											{class: "goods-list-item-goods-price-deleted"},
											"¥ 68.00"
										)
									)
								),

								apivm.h(
									"view",
									{
										class: "goods-list-item-goods-item",
										onClick: function() {
											return this$1.intoGoodsDetail({});
										}
									},
									apivm.h("img", {
										class: "goods-list-item-goods-cover",
										src:
											"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/5c5ed91e788d31fd0080f859c72bee24.jpg",
										alt: ""
									}),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info"},
										apivm.h("text", {class: "goods-list-item-goods-name"}, "招牌深海虾")
									),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info flex-h flex-center-v"},
										apivm.h("text", {class: "goods-list-item-goods-price"}, "¥ 48.00"),
										apivm.h(
											"text",
											{class: "goods-list-item-goods-price-deleted"},
											"¥ 68.00"
										)
									)
								),
								apivm.h(
									"view",
									{
										class: "goods-list-item-goods-item",
										onClick: function() {
											return this$1.intoGoodsDetail({});
										}
									},
									apivm.h("img", {
										class: "goods-list-item-goods-cover",
										src:
											"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/d3152cab6eb78e4c525fcef1d473785c.jpg",
										alt: ""
									}),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info"},
										apivm.h("text", {class: "goods-list-item-goods-name"}, "三文鱼籽拼盘")
									),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info flex-h flex-center-v"},
										apivm.h("text", {class: "goods-list-item-goods-price"}, "¥ 48.00"),
										apivm.h(
											"text",
											{class: "goods-list-item-goods-price-deleted"},
											"¥ 68.00"
										)
									)
								)
							)
						),

						apivm.h(
							"view",
							{class: "goods-list-item-home-goods"},
							apivm.h("text", {class: "goods-list-item-goods-channel"}, "优质菜品"),
							apivm.h(
								"view",
								{class: "goods-list-item-goods-list"},
								apivm.h(
									"view",
									{
										class: "goods-list-item-goods-item",
										onClick: function() {
											return this$1.intoGoodsDetail({});
										}
									},
									apivm.h("img", {
										class: "goods-list-item-goods-cover",
										src:
											"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/2c19491954ad0d9a737859ecff762331.jpg",
										alt: ""
									}),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info"},
										apivm.h("text", {class: "goods-list-item-goods-name"}, "芝士糯米福袋")
									),
									apivm.h(
										"view",
										{class: "goods-list-item-goods-info flex-h flex-center-v"},
										apivm.h("text", {class: "goods-list-item-goods-price"}, "¥ 0.01"),
										apivm.h(
											"text",
											{class: "goods-list-item-goods-price-deleted"},
											"¥ 2.00"
										)
									)
								)
							)
						)
					)
				),
				apivm.h(
					"view",
					{
						class: "header-bar",
						style:
							"opacity:" +
							this.data.opacity +
							";padding-top:" +
							this.data.safeAreaTop +
							"px"
					},
					apivm.h("text", {class: "nav-title shop-name"}, "小龙坎老火锅（西直门店）")
				)
			);
		};

		return TemplateOfMainHome;
	})(Component);
	TemplateOfMainHome.css = {
		".main-home": {
			height: "100%",
			background: "#f6f2f2",
			position: "relative",
			display: "flex"
		},
		".content-wrap": {padding: "10px 15px"},
		".header-bar": {
			position: "absolute",
			opacity: "0",
			width: "100%",
			zIndex: "999",
			background: "#f9f9f9"
		},
		".nav-title": {height: "44px", lineHeight: "44px", textAlign: "center"},
		".scroll-view": {marginTop: "-11px"},
		".shop": {background: "#fff", borderRadius: "10px 10px 0 0"},
		".shop-photo": {position: "absolute", width: "100%"},
		".shop-header": {padding: "10px 15px 0"},
		".shop-name": {fontSize: "18px", fontWeight: "500"},
		".shop-phone": {width: "22px", height: "22px"},
		".shop-operation": {borderTop: "1px solid #eee"},
		".shop-text": {color: "#666", fontSize: "15px"},
		".shop-address": {width: "80%"},
		".list": {paddingTop: "10px", background: "#f6f2f2"},
		".flex-h": {flexDirection: "row"},
		".flex-1": {WebkitBoxFlex: "1", WebkitFlex: "1", flex: "1"},
		".goods-list-item-home-goods": {background: "#fff", padding: "10px 0"},
		".goods-list-item-goods-channel": {
			fontSize: "18px",
			fontWeight: "500",
			padding: "9px 15px"
		},
		".goods-list-item-goods-list": {
			display: "flex",
			flexWrap: "wrap",
			flexDirection: "row",
			padding: "7px"
		},
		".goods-list-item-goods-item": {
			boxSizing: "border-box",
			width: "50%",
			padding: "0 8px",
			marginBottom: "10px"
		},
		".goods-list-item-goods-cover": {
			width: "100%",
			height: "110px",
			borderRadius: "5px",
			marginBottom: "5px"
		},
		".goods-list-item-goods-info": {height: "20px", lineHeight: "20px"},
		".goods-list-item-goods-name,\n.goods-list-item-goods-price": {
			fontSize: "14px",
			color: "#333333",
			fontWeight: "500",
			marginRight: "8px"
		},
		".goods-list-item-goods-price-deleted": {
			color: "#999",
			textDecorationLine: "line-through",
			fontSize: "12px"
		}
	};
	apivm.define("template-of-main-home", TemplateOfMainHome);
	apivm.render(apivm.h("template-of-main-home", null), "body");
})();
