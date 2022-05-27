(function() {
	/*
	 * APICloud JavaScript Library
	 * Copyright (c) 2014 apicloud.com
	 */
	var $kn = {
		byId: function byId(id) {
			return document.getElementById(id);
		},
		ajax: function ajax(p, callback) {
			var _this = this;
			var param = p;
			if (!param.headers) {
				param.headers = {};
			}
			param.headers["x-apicloud-mcm-key"] = "cZKzX7DabDmYyfez";
			if (param.data && param.data.body) {
				param.headers["Content-Type"] = "application/json; charset=utf-8";
			}
			if (param.url) {
				var baseUrl = "https://a8888888888888-pd.apicloud-saas.com/api/";
				param.url = baseUrl + param.url;
			}
			api.ajax(param, function(ret, err) {
				if (callback) callback(ret, err);
				if (ret) {
					var status = ret.status;
					if (status && status == 4001) {
						var didShowLogoutAlert = api.getGlobalData({
							key: "didShowLogoutAlert"
						});

						if (!didShowLogoutAlert) {
							api.setGlobalData({
								key: "didShowLogoutAlert",
								value: true
							});

							_this.setUserInfo("");
							api.alert(
								{
									msg: "登录已失效，请重新登录"
								},
								function() {
									api.setGlobalData({
										key: "didShowLogoutAlert",
										value: false
									});

									api.closeToWin({
										name: "root"
									});
								}
							);
						}
					}
				}
			});
		},
		getUserInfo: function getUserInfo() {
			var value = api.getPrefs({
				key: "userInfo",
				sync: true
			});

			return value ? JSON.parse(value) : "";
		},
		setUserInfo: function setUserInfo(userInfo) {
			api.setPrefs({
				key: "userInfo",
				value: userInfo
			});
		},
		getCurrentCityInfo: function getCurrentCityInfo() {
			var value = api.getPrefs({
				key: "currentCity",
				sync: true
			});

			return value ? JSON.parse(value) : "";
		},
		setCurrentCityInfo: function setCurrentCityInfo(cityInfo) {
			api.setPrefs({
				key: "currentCity",
				value: cityInfo
			});
		},
		getWareTypeList: function getWareTypeList() {
			var value = api.readFile({
				sync: true,
				path: "fs://WareTypeList"
			});

			return value ? JSON.parse(value) : "";
		},
		setWareTypeList: function setWareTypeList(list) {
			api.writeFile({
				path: "fs://WareTypeList",
				data: JSON.stringify(list)
			});
		},
		fitRichText: function fitRichText(richtext, width) {
			var str = '<img style="max-width:' + width + 'px;"';
			var result = richtext.replace(/\<img/gi, str);
			return result;
		}
	};

	var TemplateFrePersonalcenter = /*@__PURE__*/ (function(Component) {
		function TemplateFrePersonalcenter(props) {
			Component.call(this, props);
			this.data = {
				avatarUrl: "",
				userInfo: {}
			};
			this.compute = {
				accountInfo: function() {
					return (
						"积分: " +
						(this.data.userInfo.points ? this.data.userInfo.points : 0) +
						" | 余额: ￥" +
						(this.data.userInfo.balance ? this.data.userInfo.balance : 0)
					);
				}
			};
		}

		if (Component) TemplateFrePersonalcenter.__proto__ = Component;
		TemplateFrePersonalcenter.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateFrePersonalcenter.prototype.constructor = TemplateFrePersonalcenter;
		TemplateFrePersonalcenter.prototype.onLeftButton = function() {
			api.closeWin();
		};
		TemplateFrePersonalcenter.prototype.fnItemAction = function(name) {
			api.openWin({
				name: name,
				url: "../" + name + "/" + name + ".stml",
				scrollEnabled: false,
				softInputMode: "pan"
			});
		};
		TemplateFrePersonalcenter.prototype.fnSetAvatar = function() {
			var that = this;
			api.actionSheet(
				{
					title: "选择图片",
					cancelTitle: "取消",
					buttons: ["拍照", "相册"]
				},
				function(ret, err) {
					if (ret) {
						var sourceTypes = ["camera", "album"];
						if (ret.buttonIndex == sourceTypes.length + 1) {
							return;
						}
						var sourceType = sourceTypes[ret.buttonIndex - 1];
						var permission = ret.buttonIndex == 1 ? "camera" : "photos";
						var resultList = api.hasPermission({
							list: [permission]
						});

						if (resultList[0].granted) {
							that.getPicture(sourceType);
						} else {
							api.confirm(
								{
									msg:
										"应用需要您的授权才能访问" +
										(permission == "camera" ? "相机" : "相册"),
									buttons: ["取消", "去设置"]
								},
								function(ret1) {
									if (ret1.buttonIndex == 2) {
										api.requestPermission(
											{
												list: [permission]
											},
											function(ret2) {
												if (ret2.list[0].granted) {
													that.getPicture(sourceType);
												}
											}
										);
									}
								}
							);
						}
					}
				}
			);
		};
		TemplateFrePersonalcenter.prototype.getPicture = function(sourceType) {
			var that = this;
			api.getPicture(
				{
					sourceType: sourceType,
					encodingType: "jpg",
					allowEdit: true,
					quality: 100,
					targetWidth: 200,
					targetHeight: 200
				},
				function(ret, err) {
					if (ret) {
						that.data.avatarUrl = ret.data;
						that.fnUpdateAtavar(ret.data);
					}
				}
			);
		};
		TemplateFrePersonalcenter.prototype.fnUpdateAtavar = function(avatarUrl_) {
			$kn.ajax(
				{
					url: "users/updateAvatar",
					method: "post",
					data: {
						values: {
							filename: "icon.jpg"
						},

						files: {
							file: avatarUrl_
						}
					}
				},

				function(ret, err) {
					if (ret && ret.data);
					else {
						api.toast({
							msg: "头像修改失败",
							location: "middle"
						});
					}
				}
			);
		};
		TemplateFrePersonalcenter.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "main"},

				apivm.h(
					"view",
					{class: "nav-header"},
					apivm.h(
						"view",
						{class: "nav-header-button nav-left-button", onClick: this.onLeftButton},
						apivm.h("img", {
							src: "../../image/back.png",
							mode: "widthFix",
							class: "nav-bar-left-img"
						})
					),
					apivm.h("text", null),
					apivm.h("view", null)
				),
				apivm.h(
					"scroll-view",
					{class: "scroll-view", "scroll-y": "true", bounces: "false"},
					apivm.h(
						"view",
						{class: "info-bg"},
						apivm.h("img", {
							class: "info-avatar",
							placeholder: "../../image/default_square.png",
							src:
								"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/46e4b8d7a4a8d1febeec082516a8e8f5.png",
							mode: "scallToFill",
							onClick: this.fnSetAvatar
						}),
						apivm.h("text", {id: "username", class: "info-username"}, "测试账号"),
						apivm.h("text", {class: "info-account"}, "积分: 0 余额: ￥0")
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnItemAction("template-fre-myorder");
							}
						},
						apivm.h(
							"view",
							{class: "item-left"},
							apivm.h("img", {
								class: "item-icon",
								src: "../../image/img_item_myorder.png"
							}),
							apivm.h("text", {class: "item-title"}, "我的订单")
						),
						apivm.h(
							"view",
							{class: "item-right"},
							apivm.h("text", {class: "item-desc"}, "查看所有订单详情"),
							apivm.h("img", {class: "item-arrow", src: "../../image/arrow_right.png"})
						)
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnItemAction("template-fre-account");
							}
						},
						apivm.h(
							"view",
							{class: "item-left"},
							apivm.h("img", {
								class: "item-icon",
								src: "../../image/icon_user_info_accounts.png"
							}),
							apivm.h("text", {class: "item-title"}, "我的账户")
						),
						apivm.h(
							"view",
							{class: "item-right"},
							apivm.h("text", {class: "item-desc"}, "充值有礼"),
							apivm.h("img", {class: "item-arrow", src: "../../image/arrow_right.png"})
						)
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnItemAction("template-fre-coupon");
							}
						},
						apivm.h(
							"view",
							{class: "item-left"},
							apivm.h("img", {
								class: "item-icon",
								src: "../../image/icon_user_coupon.png"
							}),
							apivm.h("text", {class: "item-title"}, "优惠券")
						),
						apivm.h(
							"view",
							{class: "item-right"},
							apivm.h("text", {class: "item-desc"}, "查看优惠券"),
							apivm.h("img", {class: "item-arrow", src: "../../image/arrow_right.png"})
						)
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnItemAction("template-fre-address");
							}
						},
						apivm.h(
							"view",
							{class: "item-left"},
							apivm.h("img", {
								class: "item-icon",
								src: "../../image/item_user_address.png"
							}),
							apivm.h("text", {class: "item-title"}, "收货地址")
						),
						apivm.h(
							"view",
							{class: "item-right"},
							apivm.h("text", {class: "item-desc"}, "管理收货地址"),
							apivm.h("img", {class: "item-arrow", src: "../../image/arrow_right.png"})
						)
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnItemAction("template-fre-message");
							}
						},
						apivm.h(
							"view",
							{class: "item-left"},
							apivm.h("img", {
								class: "item-icon",
								src: "../../image/icon_user_messages.png"
							}),
							apivm.h("text", {class: "item-title"}, "消息")
						),
						apivm.h(
							"view",
							{class: "item-right"},
							apivm.h("text", {class: "item-desc"}, "消息提示"),
							apivm.h("img", {class: "item-arrow", src: "../../image/arrow_right.png"})
						)
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnItemAction("template-fre-customerservice");
							}
						},
						apivm.h(
							"view",
							{class: "item-left"},
							apivm.h("img", {class: "item-icon", src: "../../image/user_call.png"}),
							apivm.h("text", {class: "item-title"}, "客服")
						),
						apivm.h(
							"view",
							{class: "item-right"},
							apivm.h("text", {class: "item-desc"}, "在线客服"),
							apivm.h("img", {class: "item-arrow", src: "../../image/arrow_right.png"})
						)
					),
					apivm.h(
						"view",
						{
							class: "item",
							onClick: function() {
								return this$1.fnItemAction("template-fre-setting");
							}
						},
						apivm.h(
							"view",
							{class: "item-left"},
							apivm.h("img", {
								class: "item-icon",
								src: "../../image/user_setting.png"
							}),
							apivm.h("text", {class: "item-title"}, "设置")
						),
						apivm.h(
							"view",
							{class: "item-right"},
							apivm.h("text", {class: "item-desc"}),
							apivm.h("img", {class: "item-arrow", src: "../../image/arrow_right.png"})
						)
					)
				)
			);
		};

		return TemplateFrePersonalcenter;
	})(Component);
	TemplateFrePersonalcenter.css = {
		".main": {
			width: "100%",
			height: "100%",
			paddingBottom: "16px",
			background: "#fff"
		},
		".nav-header": {
			backgroundColor: "#e3007f",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			height: "80px",
			paddingTop: "35px",
			flexShrink: "0"
		},
		".nav-header-title": {color: "#fff", fontSize: "18px", fontWeight: "bold"},
		".nav-header-button": {
			flexDirection: "row",
			alignItems: "center",
			minWidth: "44px",
			height: "100%"
		},
		".nav-header-button:active": {opacity: "0.5"},
		".nav-left-button": {justifyContent: "flex-start", paddingLeft: "10px"},
		".nav-bar-left-img": {width: "11px"},
		".nav-header-text": {color: "#fff", fontSize: "17px"},
		".info-bg": {
			width: "100%",
			height: "120px",
			backgroundColor: "#e3007f",
			alignItems: "center",
			justifyContent: "space-around"
		},
		".info-avatar": {width: "60px", height: "60px", borderRadius: "30px"},
		".info-username": {color: "white", fontSize: "11px"},
		".info-account": {color: "white", fontSize: "11px"},
		".scroll-view": {width: "100%", flex: "1"},
		".item": {
			padding: "0 10px",
			height: "50px",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			borderBottom: "0.5px solid #ddd"
		},
		".item:active": {opacity: "0.7"},
		".item-left": {flexDirection: "row"},
		".item-right": {display: "flex", flexDirection: "row", alignItems: "center"},
		".item-icon": {width: "20px", height: "20px"},
		".item-title": {marginLeft: "10px", fontSize: "14px", color: "#000"},
		".item-desc": {marginRight: "5px", fontSize: "13px", color: "#888"},
		".item-arrow": {width: "9px", height: "14px"}
	};
	apivm.define("template-fre-personalcenter", TemplateFrePersonalcenter);
	apivm.render(apivm.h("template-fre-personalcenter", null), "body");
})();
