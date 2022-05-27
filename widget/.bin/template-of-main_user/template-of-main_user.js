(function() {
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

	/**
	 * POST 请求快捷方法
	 * @param url
	 * @param data
	 * @param options {Object} 附加参数
	 * @returns {Promise<Object>}
	 * @constructor
	 */
	function POST(url, data, options) {
		if (options === void 0) {
			options = {};
		}
		return req(
			_objectSpread2(
				_objectSpread2({}, options),
				{},
				{
					url: url,
					method: "POST",
					data: {
						values: data
					}
				}
			)
		);
	}

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
	 * 获取设备标识
	 * @returns {ConstrainDOMString | string | boolean}
	 */
	function getDeviceId() {
		return api.deviceId;
	}

	var TemplateOfMainUser = /*@__PURE__*/ (function(Component) {
		function TemplateOfMainUser(props) {
			Component.call(this, props);
			this.data = {
				orderList: [],
				loading: false
			};
		}

		if (Component) TemplateOfMainUser.__proto__ = Component;
		TemplateOfMainUser.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateOfMainUser.prototype.constructor = TemplateOfMainUser;
		TemplateOfMainUser.prototype.apiready = function() {
			var this$1 = this;

			if (this.data.userInfo) {
				this.getOrderList();
			}
			api.addEventListener(
				{
					name: "PAY-SUCCESS"
				},
				function(_) {
					this$1.getOrderList();
					if (isMP()) {
						api.sendEvent({
							name: "CLOSE-GOODS-ADD"
						});
					} else {
						setTimeout(function(_) {
							api.closeFrame({
								name: "goods_add"
							});
						}, 345);
					}
				}
			);
		};
		TemplateOfMainUser.prototype.onRefresh = function() {
			var this$1 = this;

			this.data.loading = true;
			if (this.data.userInfo) {
				this.getOrderList();
			} else {
				setTimeout(function(_) {
					this$1.data.loading = false;
					api.toast({
						msg: "请登录后查看历史订单"
					});
				}, 1000);
			}
		};
		TemplateOfMainUser.prototype.doLogin = function(data) {
			var this$1 = this;

			POST("c_users/app_login", data, {
				returnAll: false
			}).then(function(data) {
				api.setPrefs({
					key: "COOKIE",
					value: data.header.cookie
				});

				this$1.mockLogin();
			});
		};
		TemplateOfMainUser.prototype.wxLogin = function() {
			if (isMP()) {
				this.mpLogin();
			} else {
				this.doLogin({
					ssid: getDeviceId()
				});
			}
		};
		TemplateOfMainUser.prototype.mpLogin = function() {
			var this$1 = this;

			console.log("mpLogin");
			var baseUrl = config.schema + "://" + config.host + "/" + config.path + "/";
			this.getCode()
				.then(function(code) {
					wx.request({
						url: baseUrl + "c_users/wxLogin",
						//仅为示例，并非真实的接口地址
						method: "POST",
						data: {
							code: code
						},

						header: {
							"content-type": "application/json" // 默认值
						},
						success: function(res) {
							api.setPrefs({
								key: "COOKIE",
								value: res.header["Set-Cookie"]
							});

							this$1.mockLogin();
						},
						fail: function(error) {
							api.alert({
								title: "微信登录失败",
								msg: JSON.stringify(error)
							});
						}
					});
				})
				.catch(function(error) {
					wx.showModal({
						title: "获取登录信息失败",
						content: error,
						showCancel: false
					});
				});
		};
		TemplateOfMainUser.prototype.fail = function(err) {
			reject(err);
		};
		TemplateOfMainUser.prototype.getCode = function() {
			return new Promise(function(resolve, reject) {
				wx.login({
					success: function(res) {
						if (res.code) {
							//  获取code成功
							resolve(res.code);
						} else {
							console.log("登录失败！" + res.errMsg);
							reject(res);
						}
					},
					fail: function(err) {
						reject(err);
					}
				});
			});
		};
		TemplateOfMainUser.prototype.success = function(res) {
			if (res.code) {
				resolve(res.code);
			} else {
				console.log("登录失败！" + res.errMsg);
				reject(res);
			}
		};
		TemplateOfMainUser.prototype.mockLogin = function() {
			var this$1 = this;

			api.alert(
				{
					title: "模拟登录",
					msg: "APP模拟登录为演示账号"
				},
				function(_) {
					this$1.loginSuccess({
						nickName: "演示账号",
						avatarUrl:
							"https://file.service.qq.com/user-files/uploads/202004/e0a02a9af8fe637e71f37aea190811e0.png"
					});
				}
			);
		};
		TemplateOfMainUser.prototype.loginSuccess = function(userInfo) {
			api.setPrefs({
				key: "USER",
				value: userInfo
			});

			this.data.userInfo = userInfo;
			this.getOrderList();
		};
		TemplateOfMainUser.prototype.logout = function() {
			var this$1 = this;

			api.confirm(
				{
					title: "退出账号",
					msg: "确定要退出当前账号吗",
					buttons: ["取消", "确认退出"]
				},
				function(_) {
					api.removePrefs({
						key: "USER"
					});

					api.removePrefs({
						key: "COOKIE"
					});

					this$1.data.userInfo = false;
					this$1.data.orderList = [];
				}
			);
		};
		TemplateOfMainUser.prototype.getOrderList = function() {
			var this$1 = this;

			GET("orders/get_all_user_list").then(function(data) {
				this$1.data.orderList = data;
				setTimeout(function() {
					this$1.data.loading = false;
				}, 1000);
			});
		};
		TemplateOfMainUser.prototype.orderAction = function(e) {
			var this$1 = this;

			var ref = e.detail;
			var name = ref.name;
			var order_id = ref.props.order.id;
			POST(name, {
				order_id: order_id
			}).then(function(res) {
				api.toast(res);
				this$1.getOrderList();
			});
		};
		TemplateOfMainUser.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "main-user flex"},
				apivm.h(
					"safe-area",
					null,
					apivm.h(
						"view",
						{class: "header"},
						apivm.h("text", {class: "title"}, "我的")
					)
				),
				apivm.h(
					"view",
					{class: "user-info flex flex-h flex-center-v", onClick: this.logout},
					apivm.h("img", {
						class: "user-avatar",
						src: "../../image/icon/icon-user-avatar.png",
						alt: ""
					}),
					apivm.h("text", {class: "user-name"}, "演示账号")
				),

				apivm.h(
					"scroll-view",
					{
						"show-scrollbar": false,
						"scroll-y": true,
						class: "flex-1 main-user-scroll-view",
						"enable-back-to-top": true,
						"refresher-enabled": true,
						"refresher-triggered": this.data.loading,
						onRefresherrefresh: this.onRefresh
					},

					apivm.h(
						"view",
						{class: "order-item-order-item"},
						apivm.h(
							"view",
							{class: "order-item-order-header"},
							apivm.h(
								"view",
								{class: "order-item-order-num"},
								apivm.h("text", {class: "order-item-order-num-key"}, "取餐号"),
								apivm.h("text", {class: "order-item-order-num-value"}, "001")
							),
							apivm.h(
								"text",
								{"v-else": true, class: "order-item-order-status"},
								"订单已完成"
							)
						),

						apivm.h(
							"view",
							{class: "order-item-order-goods"},
							apivm.h(
								"view",
								{class: "order-item-order-goods-item flex-h"},
								apivm.h("img", {
									class: "order-item-goods-cover",
									src:
										"http://a9591bba3d7a4cf76617.qiniucdn.apicloud-system.com/apicloud/6e51da2766d83e1000c165a1277d7683.jpg",
									alt: ""
								}),
								apivm.h(
									"text",
									{class: "order-item-goods-title flex-1"},
									"麻辣捞派滑牛肉"
								),
								apivm.h("text", {class: "order-item-goods-count"}, "× 1")
							),
							apivm.h(
								"view",
								{class: "order-item-order-goods-item flex-h"},
								apivm.h("img", {
									class: "order-item-goods-cover",
									src:
										"http://a565c1d1f30b65a4d46d.qiniucdn.apicloud-system.com/apicloud/3b4905680e5d0d520c4f511361c502b9.png",
									alt: ""
								}),
								apivm.h("text", {class: "order-item-goods-title flex-1"}, "捞派毛肚"),
								apivm.h("text", {class: "order-item-goods-count"}, "× 1")
							)
						),

						apivm.h(
							"view",
							{class: "order-item-order-price flex-h"},
							apivm.h(
								"text",
								{class: "order-item-order-price-text  flex-1"},
								"商品总价"
							),
							apivm.h("text", {class: "order-item-order-price-text"}, "¥ 2.00")
						),

						apivm.h(
							"view",
							{class: "order-item-order-info"},
							apivm.h(
								"view",
								{class: "order-item-order-info-item flex-h"},
								apivm.h("text", {class: "order-item-order-info-key"}, "下单时间"),
								apivm.h(
									"text",
									{class: "order-item-order-info-value"},
									"2022-05-15 21:43:15"
								)
							),
							apivm.h(
								"view",
								{class: "order-item-order-info-item flex-h"},
								apivm.h("text", {class: "order-item-order-info-key"}, "取餐状态"),
								apivm.h("text", {class: "order-item-order-info-value"}, "已完成")
							),
							apivm.h(
								"view",
								{class: "order-item-order-info-item flex-h"},
								apivm.h("text", {class: "order-item-order-info-key"}, "取餐号"),
								apivm.h("text", {class: "order-item-order-info-value"}, "001")
							),
							apivm.h(
								"view",
								{class: "order-item-order-info-item flex-h"},
								apivm.h("text", {class: "order-item-order-info-key"}, "备注"),
								apivm.h(
									"text",
									{class: "order-item-order-info-value"},
									"老板多加点米饭哦"
								)
							)
						),

						apivm.h(
							"view",
							{class: "order-item-order-action"},
							apivm.h(
								"view",
								{class: "order-item-act-btn act-btn-red"},
								apivm.h("text", {class: "order-item-act-text act-text-red"}, "删除订单")
							)
						)
					)
				)
			);
		};

		return TemplateOfMainUser;
	})(Component);
	TemplateOfMainUser.css = {
		".main-user": {height: "100%", background: "#fff"},
		".title": {
			fontWeight: "500",
			color: "#020202",
			fontSize: "18px",
			textAlign: "center",
			height: "44px",
			lineHeight: "44px"
		},
		".user-info": {
			padding: "16px",
			alignItems: "center",
			borderBottom: "2px solid #eee"
		},
		".user-avatar": {width: "54px", height: "54px", borderRadius: "50%"},
		".user-name": {
			fontSize: "15px",
			fontWeight: "bold",
			color: "#333333",
			marginLeft: "10px"
		},
		".empty-block": {marginTop: "50px"},
		".order-item-order-item": {
			border: "1px solid #eee",
			margin: "10px 15px",
			padding: "10px 10px 0 10px",
			borderRadius: "5px",
			display: "flex",
			flexDirection: "column"
		},
		".order-item-order-header": {
			display: "flex",
			alignItems: "center",
			paddingBottom: "10px"
		},
		".order-status": {
			fontSize: "24px",
			fontWeight: "bold",
			color: "#333",
			margin: "10px",
			textAlign: "center"
		},
		".order-item-order-num": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		".order-item-order-num-key": {
			margin: "5px",
			color: "#333",
			fontWeight: "bold",
			fontSize: "15px"
		},
		".order-item-order-goods": {
			borderTop: "1px solid #eee",
			borderBottom: "1px solid #eee",
			paddingBottom: "10px"
		},
		".order-item-order-goods-item": {marginTop: "10px", alignItems: "center"},
		".order-item-goods-title": {
			marginLeft: "10px",
			fontSize: "15px",
			fontWeight: "bold",
			color: "#333"
		},
		".order-item-goods-cover": {
			width: "54px",
			height: "54px",
			borderRadius: "5px"
		},
		".order-item-order-price": {
			padding: "15px 0",
			borderBottom: "1px solid #eee"
		},
		".order-item-order-price-text": {
			color: "#333",
			fontWeight: "bold",
			fontSize: "15px"
		},
		".flex-h": {flexDirection: "row"},
		".flex-1": {flex: "1"},
		".order-item-order-num-value": {
			color: "#fe5760",
			fontSize: "24px",
			fontWeight: "bold"
		},
		".order-item-order-info": {
			paddingBottom: "10px",
			borderBottom: "1px solid #eee"
		},
		".order-item-order-info-item": {marginTop: "10px"},
		".order-item-order-info-key": {
			fontSize: "12px",
			color: "#666",
			width: "60px"
		},
		".order-item-order-info-value": {fontSize: "12px", color: "#666"},
		".order-item-order-action": {
			height: "54px",
			flexFlow: "row",
			alignItems: "center",
			justifyContent: "flex-end",
			flexDirection: "row"
		},
		".order-item-act-btn": {
			padding: "7px 20px",
			borderRadius: "4px",
			marginLeft: "10px",
			height: "34px"
		},
		".order-item-act-text-btn": {marginLeft: "10px"},
		".act-text": {fontSize: "15px", whiteSpace: "nowrap"},
		".act-btn-red": {border: "1px solid #fe5760"},
		".act-text-red": {color: "#fe5760"},
		".act-btn-gray": {border: "1px solid #999"},
		".act-text-gray": {color: "#999"}
	};
	apivm.define("template-of-main-user", TemplateOfMainUser);
	apivm.render(apivm.h("template-of-main-user", null), "body");
})();
