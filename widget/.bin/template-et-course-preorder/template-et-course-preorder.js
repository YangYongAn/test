(function() {
	var HocOrderFormEt = /*@__PURE__*/ (function(Component) {
		function HocOrderFormEt(props) {
			Component.call(this, props);
			this.data = {
				name: this.props.name || "",
				phone: this.props.phone || "",
				comeTime: this.props.comeTime || "",
				remark: this.props.remark || ""
			};
		}

		if (Component) HocOrderFormEt.__proto__ = Component;
		HocOrderFormEt.prototype = Object.create(Component && Component.prototype);
		HocOrderFormEt.prototype.constructor = HocOrderFormEt;
		HocOrderFormEt.prototype.submit = function(formnfo) {
			var ref = this.data;
			var name = ref.name;
			var phone = ref.phone;
			var comeTime = ref.comeTime;
			if (!this.data.name) {
				api.toast({
					msg: "请输入姓名!"
				});

				return false;
			}
			if (!this.data.phone) {
				api.toast({
					msg: "请输入手机号!"
				});

				return false;
			}

			if (!/^1[3456789]\d{9}$/.test(this.data.phone)) {
				api.toast({
					msg: "请输入正确的手机号!"
				});

				return false;
			}

			if (!this.data.comeTime) {
				api.toast({
					msg: "请输入来校时间!"
				});

				return false;
			}
			this.fire("handleSubmit", this.data);
		};
		HocOrderFormEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{class: "b-preorder"},
				apivm.h("input", {
					class: "b-preorder-input",
					placeholder: "姓名",
					onInput: function(e) {
						if (typeof this$1 != "undefined") {
							this$1.data.name = e.target.value;
						} else {
							this$1.data.this.data.name = e.target.value;
						}
					},
					value:
						typeof this == "undefined" ? this.data.this.data.name : this.data.name
				}),
				apivm.h("input", {
					class: "b-preorder-input",
					placeholder: "手机号",
					onInput: function(e) {
						if (typeof this$1 != "undefined") {
							this$1.data.phone = e.target.value;
						} else {
							this$1.data.this.data.phone = e.target.value;
						}
					},
					value:
						typeof this == "undefined" ? this.data.this.data.phone : this.data.phone
				}),
				apivm.h("input", {
					class: "b-preorder-input",
					placeholder: "来校时间",
					onInput: function(e) {
						if (typeof this$1 != "undefined") {
							this$1.data.comeTime = e.target.value;
						} else {
							this$1.data.this.data.comeTime = e.target.value;
						}
					},
					value:
						typeof this == "undefined"
							? this.data.this.data.comeTime
							: this.data.comeTime
				}),
				apivm.h("textarea", {
					class: "b-preorder-input b-preorder-textarea",
					placeholder: "备注",
					onInput: function(e) {
						if (typeof this$1 != "undefined") {
							this$1.data.remark = e.target.value;
						} else {
							this$1.data.this.data.remark = e.target.value;
						}
					},
					value:
						typeof this == "undefined" ? this.data.this.data.remark : this.data.remark
				}),
				apivm.h(
					"view",
					{class: "b-preorder-btn", onClick: this.submit},
					apivm.h("text", {class: "b-preorder-btn-text"}, "提交")
				)
			);
		};

		return HocOrderFormEt;
	})(Component);
	HocOrderFormEt.css = {
		".b-preorder": {
			background: "#fff",
			padding: "16px",
			fontSize: "14px",
			color: "#333"
		},
		".b-preorder-input": {
			border: "1px solid #e8e8e8",
			boxSizing: "border-box",
			width: "100%",
			height: "52px",
			padding: "10px",
			background: "#f8f8f8",
			borderRadius: "4px",
			marginBottom: "10px"
		},
		".b-preorder-textarea": {height: "200px"},
		".b-preorder-btn": {
			marginTop: "16px",
			width: "100%",
			height: "44px",
			background: "#F1C694",
			borderRadius: "4px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		".b-preorder-btn-text": {
			fontSize: "16px",
			fontWeight: "500",
			color: "#FFFFFF",
			lineHeight: "16px"
		}
	};
	apivm.define("hoc-order-form-et", HocOrderFormEt);

	var HocHeaderBarEt = /*@__PURE__*/ (function(Component) {
		function HocHeaderBarEt(props) {
			Component.call(this, props);
			this.data = {
				title: this.props.title !== undefined ? this.props.title : "柚子英语教育",
				isBack: this.props.isBack || false,
				leftIcon: this.props.leftIcon || null,
				rightIcon: this.props.rightIcon || null
			};
		}

		if (Component) HocHeaderBarEt.__proto__ = Component;
		HocHeaderBarEt.prototype = Object.create(Component && Component.prototype);
		HocHeaderBarEt.prototype.constructor = HocHeaderBarEt;
		HocHeaderBarEt.prototype.onBack = function() {
			this.fire("onBack");
			api.closeWin();
		};
		HocHeaderBarEt.prototype.onClickRight = function() {
			this.fire("onClickRight");
		};
		HocHeaderBarEt.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "a-header"},
				this.data.isBack
					? apivm.h(
							"view",
							{class: "a-header__icon a-header__icon--left", onClick: this.onBack},
							apivm.h("img", {
								src:
									this.data.leftIcon ||
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/0b234caf9662d757a20a96b70f0d4eda.png",
								class: "a-header__icon--img"
							})
					  )
					: null,
				apivm.h("text", {class: "a-header--text"}, this.data.title),
				this.data.rightIcon
					? apivm.h(
							"view",
							{
								class: "a-header__icon a-header__icon--right",
								onClick: this.onClickRight
							},
							apivm.h("img", {src: this.data.rightIcon, class: "a-header__icon--img"})
					  )
					: null
			);
		};

		return HocHeaderBarEt;
	})(Component);
	HocHeaderBarEt.css = {
		".a-header": {
			background: "#fff",
			flexFlow: "row nowrap",
			borderBottom: "1px solid #f0f0f0",
			flexShrink: "0"
		},
		".a-header__icon": {padding: "15px", alignSelf: "center"},
		".a-header__icon--img": {width: "18px", height: "18px"},
		".a-header--text": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#000",
			height: "26px",
			margin: "9px 0",
			textAlign: "center",
			flex: "1"
		}
	};
	apivm.define("hoc-header-bar-et", HocHeaderBarEt);

	var TemplateEtCoursePreorder = /*@__PURE__*/ (function(Component) {
		function TemplateEtCoursePreorder(props) {
			Component.call(this, props);
		}

		if (Component) TemplateEtCoursePreorder.__proto__ = Component;
		TemplateEtCoursePreorder.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateEtCoursePreorder.prototype.constructor = TemplateEtCoursePreorder;
		TemplateEtCoursePreorder.prototype.handleSubmit = function(forminfo) {
			api.openWin({
				name: "template-et-pay-result",
				url: "../template-et-pay-result/template-et-pay-result.stml",
				pageParam: {
					title: "报名成功",
					desc: "可在“我的”中查看预约报名记录"
				}
			});
		};
		TemplateEtCoursePreorder.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {title: "预约报名", isBack: true}),
				apivm.h("hoc-order-form-et", {
					onHandleSubmit: this.handleSubmit,
					name: "",
					phone: "",
					comeTime: "",
					remark: ""
				})
			);
		};

		return TemplateEtCoursePreorder;
	})(Component);
	TemplateEtCoursePreorder.css = {".page": {height: "100%", background: "#FFF"}};
	apivm.define("template-et-course-preorder", TemplateEtCoursePreorder);
	apivm.render(apivm.h("template-et-course-preorder", null), "body");
})();
