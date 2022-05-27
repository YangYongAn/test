(function() {
	var HocEditAddressSgm = /*@__PURE__*/ (function(Component) {
		function HocEditAddressSgm(props) {
			Component.call(this, props);
			this.data = {
				id: this.props.id || null,
				name: this.props.name || "",
				phone: this.props.phone || "",
				qustr: this.props.qustr || "",
				address: this.props.address || "",
				isDefault: this.props.isDefault || false
			};
		}

		if (Component) HocEditAddressSgm.__proto__ = Component;
		HocEditAddressSgm.prototype = Object.create(Component && Component.prototype);
		HocEditAddressSgm.prototype.constructor = HocEditAddressSgm;
		HocEditAddressSgm.prototype.onswitchchange = function(e) {
			this.data.isDefault = e.detail.value;
		};
		HocEditAddressSgm.prototype.isMobile = function(str) {
			var mobileReg = /^1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{8}$/;
			return mobileReg.test(str);
		};
		HocEditAddressSgm.prototype.fnSubmit = function() {
			var ref = this.data;
			var name = ref.name;
			var phone = ref.phone;
			var qustr = ref.qustr;
			var address = ref.address;
			var isDefault = ref.isDefault;
			var id = ref.id;
			if (!name) {
				api.toast({msg: "请输入姓名~"});
				return;
			}
			if (name.length > 14) {
				api.toast({msg: "收货人姓名不得超过14个字符~"});
				return;
			}
			if (name.length < 2) {
				api.toast({msg: "收货人姓名不得少于2个字符~"});
				return;
			}
			if (!phone) {
				api.toast({msg: "请输入联系方式~"});
				return;
			}
			if (!this.isMobile(phone)) {
				api.toast({msg: "请输入正确的手机号~"});
				return;
			}
			if (!qustr) {
				api.toast({msg: "请填写收货地址~"});
				return;
			}
			if (!address) {
				api.toast({msg: "请输入详细地址~"});
				return;
			}
			if (address.length > 50) {
				api.toast({msg: "详细地址不得超过50个字符~"});
				return;
			}
			this.fire("submitFunc", this.data.formInfo);
		};
		HocEditAddressSgm.prototype.fnDelete = function() {
			this.fire("deleteFunc", this.data.formInfo);
		};
		HocEditAddressSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "edit-address"},
				apivm.h(
					"view",
					{class: "edit-address-topform"},
					apivm.h(
						"view",
						{class: "edit-address-topform-item"},
						apivm.h("text", {class: "edit-address-topform-text"}, "收货人"),
						apivm.h("input", {
							class: "edit-address-topform-input",
							placeholder: "请填写收货人",
							onInput: function(e) {
								if (typeof this$1 != "undefined") {
									this$1.data.name = e.target.value;
								} else {
									this$1.data.this.data.name = e.target.value;
								}
							},
							maxlength: 20,
							value:
								typeof this == "undefined" ? this.data.this.data.name : this.data.name
						})
					),
					apivm.h(
						"view",
						{class: "edit-address-topform-item"},
						apivm.h("text", {class: "edit-address-topform-text"}, "联系方式"),
						apivm.h("input", {
							class: "edit-address-topform-input",
							placeholder: "请填写联系方式",
							onInput: function(e) {
								if (typeof this$1 != "undefined") {
									this$1.data.phone = e.target.value;
								} else {
									this$1.data.this.data.phone = e.target.value;
								}
							},
							"keyboard-type": "number",
							maxlength: 11,
							value:
								typeof this == "undefined" ? this.data.this.data.phone : this.data.phone
						})
					),
					apivm.h(
						"view",
						{class: "edit-address-topform-item"},
						apivm.h("text", {class: "edit-address-topform-text"}, "收货地址"),
						apivm.h(
							"view",
							{class: "qu_box"},
							apivm.h("input", {
								class: "edit-address-topform-input",
								placeholder: "请填写收货地址",
								onInput: function(e) {
									if (typeof this$1 != "undefined") {
										this$1.data.qustr = e.target.value;
									} else {
										this$1.data.this.data.qustr = e.target.value;
									}
								},
								value:
									typeof this == "undefined"
										? this.data.this.data.qustr
										: this.data.qustr
							})
						)
					),
					apivm.h(
						"view",
						{class: "edit-address-topform-item"},
						apivm.h("text", {class: "edit-address-topform-text"}, "设为默认地址"),
						apivm.h("switch", {
							checked: this.data.isDefault == true,
							color: "#7FA000",
							onchange: this.onswitchchange.bind(this)
						})
					)
				),

				apivm.h("text", {class: "edit-address-back"}, "详细地址"),
				apivm.h(
					"view",
					{class: "edit-address-back-box"},
					apivm.h("textarea", {
						class: "edit-address-back-textarea",
						"data-id": "address",
						placeholder: "街道、门牌号等",
						onInput: function(e) {
							if (typeof this$1 != "undefined") {
								this$1.data.address = e.target.value;
							} else {
								this$1.data.this.data.address = e.target.value;
							}
						},
						value:
							typeof this == "undefined"
								? this.data.this.data.address
								: this.data.address
					})
				),

				apivm.h("view", {class: "flex1"}),
				apivm.h(
					"view",
					{class: "edit-address-footer"},
					this.data.id
						? apivm.h(
								"text",
								{
									class: "edit-address-btn btn_orange",
									onclick: this.fnSubmit.bind(this)
								},
								"保存"
						  )
						: null,
					this.data.id
						? apivm.h(
								"text",
								{class: "edit-address-btn btn_red", onclick: this.fnDelete.bind(this)},
								"删除"
						  )
						: null,
					!this.data.id
						? apivm.h(
								"text",
								{class: "edit-address-btn btn_red", onclick: this.fnSubmit.bind(this)},
								"提交"
						  )
						: null
				)
			);
		};

		return HocEditAddressSgm;
	})(Component);
	HocEditAddressSgm.css = {
		".edit-address": {height: "100%", backgroundColor: "#f6f6f6"},
		".edit-address-topform": {padding: "0 15px", backgroundColor: "white"},
		".edit-address-topform-item": {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			height: "51px",
			borderTop: "1px solid #f8f8f8"
		},
		".edit-address-topform-text": {fontSize: "16px", color: "#333333"},
		".edit-address-topform-input": {
			width: "210px",
			height: "30px",
			textAlign: "right",
			color: "#333333",
			border: "none"
		},
		".qu_box": {flexDirection: "row", alignItems: "center"},
		".a_picker": {
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center"
		},
		".a_gor": {width: "10px", height: "10px", marginLeft: "8px"},
		".edit-address-back": {
			fontSize: "14px",
			margin: "15px 15px 4px",
			color: "#6c7279"
		},
		".edit-address-back-box": {
			height: "122px",
			boxSizing: "border-box",
			padding: "15px",
			backgroundColor: "white"
		},
		".edit-address-back-textarea": {
			width: "100%",
			height: "100%",
			border: "none"
		},
		".flex1": {flex: "1"},
		".edit-address-footer": {flexDirection: "row", padding: "15px"},
		".edit-address-btn": {
			flex: "1",
			height: "45px",
			borderRadius: "4px",
			fontWeight: "bold",
			textAlign: "center",
			lineHeight: "45px",
			fontSize: "16px",
			color: "white"
		},
		".edit-address-btn:active": {opacity: "0.7"},
		".btn_orange": {backgroundColor: "#339dff", marginRight: "15px"},
		".btn_red": {backgroundColor: "#ff6600"}
	};
	apivm.define("hoc-edit-address-sgm", HocEditAddressSgm);

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

	var TemplateSgmEditAddress = /*@__PURE__*/ (function(Component) {
		function TemplateSgmEditAddress(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateSgmEditAddress.__proto__ = Component;
		TemplateSgmEditAddress.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateSgmEditAddress.prototype.constructor = TemplateSgmEditAddress;
		TemplateSgmEditAddress.prototype.apiready = function() {};
		TemplateSgmEditAddress.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("hoc-nav-bar-sgm", {isShowBack: true, title: "新增收货地址"}),
				apivm.h("hoc-edit-address-sgm", {
					name: "",
					phone: "",
					qustr: "",
					address: "",
					isDefault: false
				})
			);
		};

		return TemplateSgmEditAddress;
	})(Component);
	TemplateSgmEditAddress.css = {".page": {height: "100%"}};
	apivm.define("template-sgm-edit_address", TemplateSgmEditAddress);
	apivm.render(apivm.h("template-sgm-edit_address", null), "body");
})();
