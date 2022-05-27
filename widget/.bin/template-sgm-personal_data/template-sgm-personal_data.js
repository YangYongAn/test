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
		HocUserMenuOd.prototype.onItemClick = function(i) {
			if (i == 0) {
				api.openWin({
					name: "address_list",
					url: "widget://pages/template-sgm-address_list/template-sgm-address_list"
				});
			} else if (i == 1) {
				api.openWin({
					name: "about",
					url: "widget://pages/template-sgm-about/template-sgm-about"
				});
			}
		};
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
		".title_menu_zi": {fontSize: "14px", color: "#333333"},
		".title_gor": {width: "16px", height: "16px"}
	};
	apivm.define("hoc-user-menu-od", HocUserMenuOd);

	var HocOrderbtnGroupSgm = /*@__PURE__*/ (function(Component) {
		function HocOrderbtnGroupSgm(props) {
			Component.call(this, props);
			this.data = {
				redDot: this.props.redDot || 0,
				title: this.props.title !== undefined ? this.props.title : "我的订单",
				btnList: this.props.btnList || [
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f9598c0f83fd29b3e4ca2a4841ab0e74.png",
						title: "待成团",
						type: 2,
						curNum: 3
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/ed4e2be97367495159c485945c27f8c1.png",
						title: "待发货",
						type: 3
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7536dd50631ca84685212723acaef895.png",
						title: "待收货",
						type: 4
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/9e3281f3b18e74bade2d3f34129eb014.png",
						title: "已完成",
						type: 5
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/23d1c533a1a64b2729d340ddb6fb6ecf.png",
						title: "售后",
						type: 0,
						curNum: 5
					}
				]
			};
		}

		if (Component) HocOrderbtnGroupSgm.__proto__ = Component;
		HocOrderbtnGroupSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocOrderbtnGroupSgm.prototype.constructor = HocOrderbtnGroupSgm;
		HocOrderbtnGroupSgm.prototype.apiready = function() {};
		HocOrderbtnGroupSgm.prototype.btnClick = function(item) {
			this.fire("btnClick", item);
		};
		HocOrderbtnGroupSgm.prototype.gotoOrderList = function() {
			this.fire("gotoOrderList");
		};
		HocOrderbtnGroupSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "my-btn-group"},
				apivm.h(
					"view",
					{class: "my-btn-group-title", onClick: this.gotoOrderList},
					apivm.h("text", {class: "my-btn-group-title-text"}, this.data.title),
					apivm.h("img", {
						class: "my-btn-group-title-img",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c89316e175437ebce8f361ef3f9c3973.png",
						alt: "right-arrow"
					})
				),
				apivm.h(
					"view",
					{class: "my-btn-group-btn"},
					(Array.isArray(this.data.btnList)
						? this.data.btnList
						: Object.values(this.data.btnList)
					).map(function(item$1, index$1) {
						return apivm.h(
							"view",
							{
								class: "my-btn",
								onClick: function() {
									return this$1.btnClick(item$1);
								}
							},
							apivm.h("image", {class: "my-btn-icon", src: item$1.icon}),
							apivm.h("text", {class: "my-btn-text"}, item$1.title),
							item$1.curNum
								? apivm.h("text", {class: "my-btn-red"}, item$1.curNum)
								: null
						);
					})
				)
			);
		};

		return HocOrderbtnGroupSgm;
	})(Component);
	HocOrderbtnGroupSgm.css = {
		".my-btn-group": {
			background: "#fff",
			borderRadius: "4px",
			marginBottom: "10px"
		},
		".my-btn-group-title": {
			height: "50px",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			margin: "0 8px",
			borderBottom: "1px solid #f8f8f8"
		},
		".my-btn-group-title-text": {
			fontSize: "14px",
			color: "#333",
			fontWeight: "bold"
		},
		".my-btn-group-btn": {
			padding: "16px 0",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-around"
		},
		".my-btn-group-title-img": {width: "10px", height: "10px"},
		".my-btn": {alignItems: "center"},
		".my-btn-icon": {width: "24px", height: "24px"},
		".my-btn-text": {fontSize: "12px", color: "#333333", paddingTop: "5px"},
		".my-btn-red": {
			position: "absolute",
			height: "14px",
			lineHeight: "14px",
			textAlign: "center",
			fontSize: "12px",
			backgroundColor: "#f00",
			color: "#fff",
			borderRadius: "7px",
			right: "-3px",
			top: "-6px",
			padding: "0 3px"
		}
	};
	apivm.define("hoc-orderbtn-group-sgm", HocOrderbtnGroupSgm);

	var HocUserPanelSgm = /*@__PURE__*/ (function(Component) {
		function HocUserPanelSgm(props) {
			Component.call(this, props);
			this.data = {
				id: this.props.id !== undefined ? this.props.id : "111",
				avatar:
					this.props.avatar !== undefined
						? this.props.avatar
						: "http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/46e4b8d7a4a8d1febeec082516a8e8f5.png",
				nickname:
					this.props.nickname !== undefined ? this.props.nickname : "测试账号"
			};
		}

		if (Component) HocUserPanelSgm.__proto__ = Component;
		HocUserPanelSgm.prototype = Object.create(Component && Component.prototype);
		HocUserPanelSgm.prototype.constructor = HocUserPanelSgm;
		HocUserPanelSgm.prototype.apiready = function() {};
		HocUserPanelSgm.prototype.handleClick = function() {
			this.fire("handleClick");
		};
		HocUserPanelSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "hoc-user-panel-sgm", onClick: this.handleClick},
				apivm.h("image", {
					class: "hoc-user-panel-sgm_bg",
					src:
						"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/4ab30505532e709b72bc49fde2ff3b2b.png"
				}),
				apivm.h(
					"view",
					{class: "hoc-user-panel-sgm-wrap"},
					apivm.h("img", {
						class: "hoc-user-panel-sgm-logo",
						src: this.data.avatar,
						mode: "aspectFill"
					}),
					apivm.h("text", {class: "hoc-user-panel-sgm-name"}, this.data.nickname),
					apivm.h("image", {
						class: "hoc-user-panel-sgm-gol",
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7158c8c5425bd78b31d74da4ca8563f2.png"
					})
				)
			);
		};

		return HocUserPanelSgm;
	})(Component);
	HocUserPanelSgm.css = {
		".hoc-user-panel-sgm": {height: "126px"},
		".hoc-user-panel-sgm_bg": {
			position: "absolute",
			width: "100%",
			height: "100%"
		},
		".hoc-user-panel-sgm-wrap": {
			flexDirection: "row",
			alignItems: "center",
			height: "100%"
		},
		".hoc-user-panel-sgm-logo": {
			width: "60px",
			height: "60px",
			borderRadius: "50%",
			marginLeft: "20px",
			backgroundColor: "#f8f8f8"
		},
		".hoc-user-panel-sgm-name": {
			flex: "1",
			fontSize: "17px",
			color: "white",
			margin: "0 15px"
		},
		".hoc-user-panel-sgm-gol": {
			width: "16px",
			height: "16px",
			marginRight: "20px"
		}
	};
	apivm.define("hoc-user-panel-sgm", HocUserPanelSgm);

	var TemplateSgmPersonalData = /*@__PURE__*/ (function(Component) {
		function TemplateSgmPersonalData(props) {
			Component.call(this, props);
			this.data = {
				hocOrderbtnGroupSgmBtnList: [
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f9598c0f83fd29b3e4ca2a4841ab0e74.png",
						title: "待成团",
						curNum: 3
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/ed4e2be97367495159c485945c27f8c1.png",
						title: "待发货"
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7536dd50631ca84685212723acaef895.png",
						title: "待收货"
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/9e3281f3b18e74bade2d3f34129eb014.png",
						title: "已完成"
					},
					{
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/23d1c533a1a64b2729d340ddb6fb6ecf.png",
						title: "售后",
						curNum: 5
					}
				],

				hocUserMenuOdList: [
					{
						title: "收货地址"
					},
					{
						title: "关于我们"
					}
				]
			};
		}

		if (Component) TemplateSgmPersonalData.__proto__ = Component;
		TemplateSgmPersonalData.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateSgmPersonalData.prototype.constructor = TemplateSgmPersonalData;
		TemplateSgmPersonalData.prototype.apiready = function() {};
		TemplateSgmPersonalData.prototype.btnClick = function() {
			api.openWin({
				name: "myOrder",
				url: "../template-sgm-order/template-sgm-order.stml"
			});
		};
		TemplateSgmPersonalData.prototype.gotoOrderList = function() {
			api.openWin({
				name: "orderList",
				url: "../template-sgm-order/template-sgm-order.stml"
			});
		};
		TemplateSgmPersonalData.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("hoc-user-panel-sgm", {
					id: "111",
					nickname: "测试账号",
					avatar:
						"http://aea8bc2ccdd582de43c1.qiniucdn.apicloud-system.com/apicloud/46e4b8d7a4a8d1febeec082516a8e8f5.png"
				}),
				apivm.h("hoc-orderbtn-group-sgm", {
					title: "我的订单",
					btnList: this.data.hocOrderbtnGroupSgmBtnList,
					onGotoOrderList: this.gotoOrderList,
					onBtnClick: this.btnClick
				}),
				apivm.h("hoc-user-menu-od", {list: this.data.hocUserMenuOdList})
			);
		};

		return TemplateSgmPersonalData;
	})(Component);
	TemplateSgmPersonalData.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"}
	};
	apivm.define("template-sgm-personal_data", TemplateSgmPersonalData);
	apivm.render(apivm.h("template-sgm-personal_data", null), "body");
})();
