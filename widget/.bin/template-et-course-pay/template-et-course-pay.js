(function() {
	var HocHandleBtnEt = /*@__PURE__*/ (function(Component) {
		function HocHandleBtnEt(props) {
			Component.call(this, props);
			this.data = {
				btnBgColor:
					this.props.bgColor !== undefined ? this.props.bgColor : "#F1C694",
				btnText: this.props.btnText !== undefined ? this.props.btnText : "按钮文本"
			};
		}

		if (Component) HocHandleBtnEt.__proto__ = Component;
		HocHandleBtnEt.prototype = Object.create(Component && Component.prototype);
		HocHandleBtnEt.prototype.constructor = HocHandleBtnEt;
		HocHandleBtnEt.prototype.apiready = function() {};
		HocHandleBtnEt.prototype.btnClick = function() {
			this.fire("btnClick");
		};
		HocHandleBtnEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "b-handle-btn", onClick: this.btnClick},
				apivm.h(
					"text",
					{class: "b-handle-btn__text", style: {background: this.data.btnBgColor}},
					this.data.btnText
				)
			);
		};

		return HocHandleBtnEt;
	})(Component);
	HocHandleBtnEt.css = {
		".b-handle-btn": {
			width: "100%",
			height: "44px",
			justifyContent: "center",
			alignItems: "center",
			margin: "12px 0"
		},
		".b-handle-btn__text": {
			width: "95%",
			borderRadius: "4px",
			color: "#FFF",
			fontSize: "16px",
			fontWeight: "bold",
			textAlign: "center",
			lineHeight: "44px"
		}
	};
	apivm.define("hoc-handle-btn-et", HocHandleBtnEt);

	var HocPayDescEt = /*@__PURE__*/ (function(Component) {
		function HocPayDescEt(props) {
			Component.call(this, props);
			this.data = {
				payInfo: this.props.payInfo || [
					{
						label: "课程类型",
						isRow: true,
						value: "线上直播课"
					},

					{
						label: "开课时间",
						isRow: true,
						value: "5月30日 09:00"
					},

					{
						label: "购买须知",
						isRow: false,
						value:
							"本课程由线上直播授课，请在购买课程后下载xxAPP，并 使用您登录小程序的手机号进行登录，登录后即可同步您 购买的课程进行上课。"
					}
				]
			};
		}

		if (Component) HocPayDescEt.__proto__ = Component;
		HocPayDescEt.prototype = Object.create(Component && Component.prototype);
		HocPayDescEt.prototype.constructor = HocPayDescEt;
		HocPayDescEt.prototype.apiready = function() {};
		HocPayDescEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "b-pay-content"},
				(Array.isArray(this.data.payInfo)
					? this.data.payInfo
					: Object.values(this.data.payInfo)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							key: "content" + index$1,
							class:
								"b-pay-content-item " + (item$1.isRow ? "b-pay-content-item-row" : "")
						},
						apivm.h("text", {class: "b-pay-content-item-label"}, item$1.label),
						apivm.h(
							"text",
							{
								class:
									"b-pay-content-item-content " +
									(!item$1.isRow ? "b-pay-content-item-content-padTop" : "")
							},
							item$1.value
						)
					);
				})
			);
		};

		return HocPayDescEt;
	})(Component);
	HocPayDescEt.css = {
		".b-pay-content": {marginTop: "10px", background: "#fff", padding: "0 16px"},
		".b-pay-content-item": {padding: "12px 0", borderBottom: "1px solid #e8e8e8"},
		".b-pay-content-item-row": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between"
		},
		".b-pay-content-item-label": {fontSize: "14px", color: "#333"},
		".b-pay-content-item-content": {fontSize: "14px", color: "#999"},
		".b-pay-content-item-content-padTop": {paddingTop: "12px", lineHeight: "16px"}
	};
	apivm.define("hoc-pay-desc-et", HocPayDescEt);

	var HocPayCourseInfoEt = /*@__PURE__*/ (function(Component) {
		function HocPayCourseInfoEt(props) {
			Component.call(this, props);
			this.data = {
				cover:
					this.props.cover !== undefined
						? this.props.cover
						: "http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/76abf6b3c8df591a726c3156427b1171.png",
				title: this.props.title !== undefined ? this.props.title : "托福基础班",
				class_hour: this.props.class_hour !== undefined ? this.props.class_hour : 2,
				price: this.props.price !== undefined ? this.props.price : 20
			};
		}

		if (Component) HocPayCourseInfoEt.__proto__ = Component;
		HocPayCourseInfoEt.prototype = Object.create(
			Component && Component.prototype
		);
		HocPayCourseInfoEt.prototype.constructor = HocPayCourseInfoEt;
		HocPayCourseInfoEt.prototype.apiready = function() {};
		HocPayCourseInfoEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "b-basecourse-card"},
				apivm.h("img", {src: this.data.cover, class: "b-basecourse-card-cover"}),
				apivm.h(
					"view",
					{class: "b-basecourse-card-info"},
					apivm.h("text", {class: "b-basecourse-card-title"}, this.data.title),
					apivm.h(
						"text",
						{class: "b-basecourse-card-price"},
						" ",
						this.data.class_hour,
						"课时 / ",
						this.data.price,
						"元"
					)
				)
			);
		};

		return HocPayCourseInfoEt;
	})(Component);
	HocPayCourseInfoEt.css = {
		".b-basecourse-card": {
			padding: "20px 15px",
			flexFlow: "row nowrap",
			alignItems: "center",
			background: "#FFF"
		},
		".b-basecourse-card-cover": {width: "124px", height: "70px"},
		".b-basecourse-card-info": {marginLeft: "15px"},
		".b-basecourse-card-title": {
			color: "#333",
			fontSize: "16px",
			fontWeight: "bold",
			marginBottom: "15px"
		},
		".b-basecourse-card-price": {
			fontSize: "16px",
			fontWeight: "bold",
			color: "#FA6400",
			lineHeight: "16px",
			fontFamily: "monospace"
		}
	};
	apivm.define("hoc-pay-course-info-et", HocPayCourseInfoEt);

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

	var TemplateEtCoursePay = /*@__PURE__*/ (function(Component) {
		function TemplateEtCoursePay(props) {
			Component.call(this, props);
			this.data = {
				payInfo: [
					{
						label: "课程类型",
						isRow: true,
						value: "线上直播课"
					},
					{
						label: "开课时间",
						isRow: true,
						value: "5月30日 09:00"
					},
					{
						label: "购买须知",
						isRow: false,
						value:
							"本课程由线上直播授课，请在购买课程后下载xxAPP，并 使用您登录小程序的手机号进行登录，登录后即可同步您 购买的课程进行上课。"
					}
				]
			};
		}

		if (Component) TemplateEtCoursePay.__proto__ = Component;
		TemplateEtCoursePay.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateEtCoursePay.prototype.constructor = TemplateEtCoursePay;
		TemplateEtCoursePay.prototype.installed = function() {};
		TemplateEtCoursePay.prototype.placeAnOrder = function() {
			api.toast({
				msg: "支付成功!"
			});

			api.closeWin();
		};
		TemplateEtCoursePay.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {title: "预约支付", isBack: true}),
				apivm.h(
					"scroll-view",
					{style: "flex: 1;", "scroll-y": true, "show-scrollbar": false},
					apivm.h("hoc-pay-course-info-et", {
						cover:
							"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/76abf6b3c8df591a726c3156427b1171.png",
						title: "托福基础班",
						class_hour: 20,
						price: "3500"
					}),
					apivm.h("hoc-pay-desc-et", {
						payInfo: this.data.payInfo,
						payCourseInfo: this.data.payInfo,
						payCourseInfo: this.data.payInfo
					})
				),
				apivm.h("hoc-handle-btn-et", {
					btnText: "去支付20元",
					btnBgColor: "#F1C694",
					onBtnClick: this.placeAnOrder
				})
			);
		};

		return TemplateEtCoursePay;
	})(Component);
	TemplateEtCoursePay.css = {".page": {background: "#F8F8F8", height: "100%"}};
	apivm.define("template-et-course-pay", TemplateEtCoursePay);
	apivm.render(apivm.h("template-et-course-pay", null), "body");
})();
