(function() {
	var HocUserMenuOd = /*@__PURE__*/ (function(Component) {
		function HocUserMenuOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						title: "收货地址"
					},

					{
						title: "关于我们"
					}
				]
			};
		}

		if (Component) HocUserMenuOd.__proto__ = Component;
		HocUserMenuOd.prototype = Object.create(Component && Component.prototype);
		HocUserMenuOd.prototype.constructor = HocUserMenuOd;
		HocUserMenuOd.prototype.apiready = function() {};
		HocUserMenuOd.prototype.onItemClick = function(i) {};
		HocUserMenuOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "user-menu"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							class: "menu_item_box",
							onClick: function() {
								return this$1.onItemClick(index$1);
							}
						},
						apivm.h("text", {class: "title_menu_zi"}, item$1.title),
						apivm.h("image", {
							class: "title_gor",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
						})
					);
				})
			);
		};

		return HocUserMenuOd;
	})(Component);
	HocUserMenuOd.css = {
		".user-menu": {
			borderRadius: "4px",
			backgroundColor: "white",
			padding: "0 10px",
			margin: "0 15px"
		},
		".menu_item_box": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderBottom: "1px solid #f8f8f8",
			height: "49px"
		},
		".menu_item_box:active": {opacity: "0.7"},
		".title_menu_zi": {fontSize: "14px", color: "#333333"}
	};
	apivm.define("hoc-user-menu-od", HocUserMenuOd);

	var HocUserOrderOd = /*@__PURE__*/ (function(Component) {
		function HocUserOrderOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/9fbf5ccbba59d2aec005d6d7c3cebaaf.png",
						title: "待付款",
						type: 1
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/36e74ff9f2825539ceb2ce5b8381c7aa.png",
						title: "待发货",
						type: 2
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f54bf534bb3ce4419549e9fae82a0eb7.png",
						title: "待收货",
						type: 4
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/e3170f85fbe046f40c60103de203490c.png",
						title: "已完成",
						type: 5
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/b30dc501219d390d06de8ea751138207.png",
						title: "售后",
						type: 0
					}
				],

				active: this.props.active || "",
				num: this.props.num || "1"
			};
		}

		if (Component) HocUserOrderOd.__proto__ = Component;
		HocUserOrderOd.prototype = Object.create(Component && Component.prototype);
		HocUserOrderOd.prototype.constructor = HocUserOrderOd;
		HocUserOrderOd.prototype.apiready = function() {};
		HocUserOrderOd.prototype.fnOrderList = function() {
			api.openWin({
				name: "order_list",
				url: "widget://pages/template-od-order_list/template-od-order_list"
			});
		};
		HocUserOrderOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "user-order"},
				apivm.h(
					"view",
					{class: "content_item_box"},
					apivm.h(
						"view",
						{class: "title_box"},
						apivm.h("text", {class: "title_zi"}, "我的订单"),
						apivm.h("image", {
							class: "title_gor",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png"
						})
					),
					apivm.h(
						"view",
						{class: "user_btn_box"},
						(Array.isArray(this.data.list)
							? this.data.list
							: Object.values(this.data.list)
						).map(function(item$1, index$1) {
							return apivm.h(
								"view",
								{
									class: "user_btn",
									onClick: this$1.fnOrderList,
									"data-type": item$1.type
								},
								apivm.h("image", {class: "btn_icon", src: item$1.icon}),
								apivm.h("text", {class: "btn_zi"}, item$1.title),
								this$1.data.active != "" && this$1.data.active == index$1
									? apivm.h(
											"text",
											{class: this$1.data.active == index$1 ? "user_red" : ""},
											this$1.data.num
									  )
									: null
							);
						})
					)
				)
			);
		};

		return HocUserOrderOd;
	})(Component);
	HocUserOrderOd.css = {
		".user-order": {margin: "-40px 15px 0 15px"},
		".content_item_box": {
			borderRadius: "4px",
			backgroundColor: "white",
			marginBottom: "10px",
			padding: "0 10px"
		},
		".title_box": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderBottom: "1px solid #f8f8f8",
			height: "40px"
		},
		".title_gor": {width: "10px", height: "10px"},
		".title_zi": {fontSize: "14px", color: "#333333", fontWeight: "bold"},
		".user_btn_box": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-around",
			height: "80px"
		},
		".user_btn": {alignItems: "center"},
		".btn_icon": {width: "24px", height: "24px"},
		".btn_zi": {fontSize: "12px", color: "#333333"},
		".user_red": {
			position: "absolute",
			height: "12px",
			lineHeight: "12px",
			textAlign: "center",
			fontSize: "11px",
			backgroundColor: "red",
			color: "#fff",
			borderRadius: "6px",
			right: "0",
			top: "-6px",
			padding: "0 3px"
		}
	};
	apivm.define("hoc-user-order-od", HocUserOrderOd);

	var HocUserCardOd = /*@__PURE__*/ (function(Component) {
		function HocUserCardOd(props) {
			Component.call(this, props);
			this.data = {
				nickname: this.props.nickname || "测试账号",
				avatar:
					this.props.avatar ||
					"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/46e4b8d7a4a8d1febeec082516a8e8f5.png"
			};
		}

		if (Component) HocUserCardOd.__proto__ = Component;
		HocUserCardOd.prototype = Object.create(Component && Component.prototype);
		HocUserCardOd.prototype.constructor = HocUserCardOd;
		HocUserCardOd.prototype.apiready = function() {};
		HocUserCardOd.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "user-card"},

				apivm.h(
					"view",
					{class: "user_box"},
					apivm.h("image", {
						class: "user_bg",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/9f2f2379e0d71466281f3b2decbcb5af.png"
					}),
					apivm.h(
						"view",
						{class: "user_wrap"},
						apivm.h("image", {
							class: "user_logo",
							src: this.data.avatar,
							mode: "aspectFill"
						}),
						apivm.h("text", {class: "user_name"}, this.data.nickname),
						apivm.h("image", {
							class: "user_gor",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7158c8c5425bd78b31d74da4ca8563f2.png"
						})
					)
				)
			);
		};

		return HocUserCardOd;
	})(Component);
	HocUserCardOd.css = {
		".user_box": {height: "150px", justifyContent: "center"},
		".user_bg": {position: "absolute", width: "100%", height: "100%"},
		".user_wrap": {
			marginBottom: "25px",
			flexDirection: "row",
			alignItems: "center",
			height: "60px"
		},
		".user_logo": {
			width: "60px",
			height: "60px",
			borderRadius: "50%",
			marginLeft: "20px",
			backgroundColor: "#f8f8f8"
		},
		".user_name": {flex: "1", fontSize: "17px", color: "white", margin: "0 15px"},
		".user_gor": {width: "16px", height: "16px", marginRight: "20px"}
	};
	apivm.define("hoc-user-card-od", HocUserCardOd);

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

	var TemplateOdUser = /*@__PURE__*/ (function(Component) {
		function TemplateOdUser(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateOdUser.__proto__ = Component;
		TemplateOdUser.prototype = Object.create(Component && Component.prototype);
		TemplateOdUser.prototype.constructor = TemplateOdUser;
		TemplateOdUser.prototype.apiready = function() {};
		TemplateOdUser.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-nav-bar-od", {msg: "我的"}),
				apivm.h("hoc-user-card-od", null),
				apivm.h("hoc-user-order-od", {active: "1", num: "1"}),
				apivm.h("hoc-user-menu-od", null)
			);
		};

		return TemplateOdUser;
	})(Component);
	TemplateOdUser.css = {".page": {height: "100%", backgroundColor: "#fff"}};
	apivm.define("template-od-user", TemplateOdUser);
	apivm.render(apivm.h("template-od-user", null), "body");
})();
