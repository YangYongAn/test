(function() {
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

	var HocAddressListSgm = /*@__PURE__*/ (function(Component) {
		function HocAddressListSgm(props) {
			Component.call(this, props);
			this.data = {
				dataList: this.props.addressList || [
					{
						def: 2,
						id: "1",
						name: "杨飞",
						phone: "15534212345",
						address: "北京北京市海淀区北太平庄街道北三环中路44号"
					},
					{
						def: 2,
						id: "1",
						name: "杨飞",
						phone: "15534212345",
						address: "北京北京市海淀区北太平庄街道北三环中路44号"
					}
				]
			};
		}

		if (Component) HocAddressListSgm.__proto__ = Component;
		HocAddressListSgm.prototype = Object.create(Component && Component.prototype);
		HocAddressListSgm.prototype.constructor = HocAddressListSgm;
		HocAddressListSgm.prototype.apiready = function() {};
		HocAddressListSgm.prototype.phoneHash = function(phone) {
			if (!phone) {
				return "";
			}
			phone = phone.substring(0, 3) + "****" + phone.substring(7);
			return phone;
		};
		HocAddressListSgm.prototype.clickAddressItem = function(item, index) {
			api.openWin({
				name: "edit_address",
				url: "widget://pages/template-sgm-edit_address/template-sgm-edit_address"
			});

			this.fire("clickAddressItem", {item: item, index: index});
		};
		HocAddressListSgm.prototype.editAddress = function(item, index) {
			this.fire("editAddress", {item: item, index: index});
		};
		HocAddressListSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "address-list"},
				(Array.isArray(this.data.dataList)
					? this.data.dataList
					: Object.values(this.data.dataList)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							class: "address-list-item",
							onClick: function() {
								return this$1.clickAddressItem(item$1, index$1);
							}
						},
						apivm.h(
							"view",
							{class: "address-list-item-inner"},
							apivm.h(
								"view",
								{class: "address-list-def"},
								item$1.def == 1
									? apivm.h("image", {
											class: "address-list-def-img",
											src:
												"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/a3f48960e4ee7525559e1bdc57fe1935.png"
									  })
									: null
							),
							apivm.h(
								"view",
								{class: "address-list-item-left"},
								apivm.h(
									"view",
									{class: "address-list-item-nav"},
									apivm.h(
										"text",
										{class: "address-list-item-name"},
										"收货人：" + item$1.name
									),
									apivm.h(
										"text",
										{class: "address-list-item-phone"},
										this$1.phoneHash(item$1.phone.toString())
									)
								),
								apivm.h(
									"text",
									{
										class: "address-list-item-content",
										"data-index": index$1,
										"data-id": item$1.id
									},
									"收货地址：" + item$1.address
								)
							),
							apivm.h(
								"view",
								{
									class: "address-list-item-right",
									onClick: function() {
										return this$1.editAddress(item$1, index$1);
									}
								},
								apivm.h("image", {
									class: "address-list-item-right-icon",
									src:
										"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/db8dc34b50fa750b4b7464959ee88d2c.png"
								})
							)
						)
					);
				})
			);
		};

		return HocAddressListSgm;
	})(Component);
	HocAddressListSgm.css = {
		".address-list-item": {margin: "15px 15px 0"},
		".address-list-item-inner": {
			flexDirection: "row",
			alignItems: "center",
			borderRadius: "4px",
			height: "106px",
			backgroundColor: "white"
		},
		".address-list-item-left": {flex: "1", marginLeft: "15px"},
		".address-list-item-right": {justifyContent: "center", padding: "10px 15px"},
		".address-list-item-right-icon": {width: "18px", height: "18px"},
		".address-list-def": {
			width: "37px",
			height: "37px",
			position: "absolute",
			top: "0",
			right: "0"
		},
		".address-list-def-img": {width: "100%", height: "100%"},
		".address-list-item-nav": {
			flexDirection: "row",
			justifyContent: "space-between"
		},
		".address-list-item-name": {fontSize: "15px", color: "#333333"},
		".address-list-item-phone": {fontSize: "14px", color: "#777777"},
		".address-list-item-content": {
			height: "50px",
			lineHeight: "25px",
			fontSize: "15px",
			marginTop: "5px",
			color: "#333333"
		}
	};
	apivm.define("hoc-address-list-sgm", HocAddressListSgm);

	var TemplateSgmAddressList = /*@__PURE__*/ (function(Component) {
		function TemplateSgmAddressList(props) {
			Component.call(this, props);
			this.data = {
				addresslist: [
					{
						def: 2,
						id: "1",
						name: "杨飞",
						phone: "15534212345",
						address: "北京北京市海淀区北太平庄街道北三环中路44号"
					},
					{
						def: 2,
						id: "1",
						name: "杨飞",
						phone: "15534212345",
						address: "北京北京市海淀区北太平庄街道北三环中路44号"
					}
				]
			};
		}

		if (Component) TemplateSgmAddressList.__proto__ = Component;
		TemplateSgmAddressList.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateSgmAddressList.prototype.constructor = TemplateSgmAddressList;
		TemplateSgmAddressList.prototype.apiready = function() {};
		TemplateSgmAddressList.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("hoc-nav-bar-sgm", {isShowBack: true, title: "收货地址"}),
				apivm.h("hoc-address-list-sgm", {addressList: this.data.addresslist})
			);
		};

		return TemplateSgmAddressList;
	})(Component);
	TemplateSgmAddressList.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"}
	};
	apivm.define("template-sgm-address_list", TemplateSgmAddressList);
	apivm.render(apivm.h("template-sgm-address_list", null), "body");
})();
