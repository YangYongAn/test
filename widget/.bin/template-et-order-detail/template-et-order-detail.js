(function() {
	var HocFormListEt = /*@__PURE__*/ (function(Component) {
		function HocFormListEt(props) {
			Component.call(this, props);
			this.data = {
				moduleName:
					this.props.moduleName !== undefined ? this.props.moduleName : "预约信息",
				infoList: this.props.infoList || [
					{
						label: "预约信息",
						content: "2021-01-14 16:49:36"
					},
					{
						label: "预约姓名",
						content: "APP用户60F2"
					},
					{
						label: "手机号",
						content: "13466669999"
					},
					{
						label: "备注",
						content: "下午三点左右我可能到达，缴纳费用"
					}
				]
			};
		}

		if (Component) HocFormListEt.__proto__ = Component;
		HocFormListEt.prototype = Object.create(Component && Component.prototype);
		HocFormListEt.prototype.constructor = HocFormListEt;
		HocFormListEt.prototype.apiready = function() {};
		HocFormListEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "b-form-list"},
				apivm.h(
					"view",
					{class: "b-form-list-title"},
					apivm.h("text", {class: "b-form-list-title-line"}),
					apivm.h("text", {class: "b-form-list-title-text"}, this.data.moduleName)
				),
				(Array.isArray(this.data.infoList)
					? this.data.infoList
					: Object.values(this.data.infoList)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{class: "b-form-list-item"},
						apivm.h("text", {class: "b-form-list-item-title"}, item$1.label),
						apivm.h("text", {class: "b-form-list-item-value"}, item$1.content)
					);
				})
			);
		};

		return HocFormListEt;
	})(Component);
	HocFormListEt.css = {
		".b-form-list": {padding: "16px", background: "#fff"},
		".b-form-list-title": {
			flexDirection: "row",
			alignItems: "center",
			height: "22px",
			marginBottom: "16px"
		},
		".b-form-list-title-text": {
			height: "22px",
			lineHeight: "22px",
			fontSize: "18px",
			fontWeight: "bold",
			color: "#333"
		},
		".b-form-list-title-line": {
			width: "4px",
			height: "18px",
			background: "#F1C694",
			marginRight: "8px",
			borderRadius: "4px"
		},
		".b-form-list-item": {paddingBottom: "16px", flexDirection: "row"},
		".b-form-list-item-title": {fontSize: "14px", color: "#333"},
		".b-form-list-item-value": {
			fontSize: "14px",
			color: "#999",
			flex: "1",
			flexWrap: "wrap",
			textAlign: "right",
			marginLeft: "12px"
		}
	};
	apivm.define("hoc-form-list-et", HocFormListEt);

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

	var TemplateEtOrderDetail = /*@__PURE__*/ (function(Component) {
		function TemplateEtOrderDetail(props) {
			Component.call(this, props);
			this.data = {
				formList: [
					{
						label: "预约信息",
						content: "2021-01-14 16:49:36"
					},
					{
						label: "预约姓名",
						content: "APP用户60F2"
					},
					{
						label: "手机号",
						content: "13466669999"
					},
					{
						label: "备注",
						content: "下午三点左右我可能到达，缴纳费用"
					}
				]
			};
		}

		if (Component) TemplateEtOrderDetail.__proto__ = Component;
		TemplateEtOrderDetail.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateEtOrderDetail.prototype.constructor = TemplateEtOrderDetail;
		TemplateEtOrderDetail.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {title: "预约报名", isBack: true}),
				apivm.h(
					"scroll-view",
					{style: "flex: 1;", "show-scrollbar": false},
					apivm.h("hoc-pay-course-info-et", {
						cover:
							"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/76abf6b3c8df591a726c3156427b1171.png",
						title: "托福基础班",
						class_hour: 20,
						price: "3500"
					}),
					apivm.h("hoc-form-list-et", {
						title: "课程详情",
						infoList: this.data.formList
					})
				),
				apivm.h(
					"view",
					null,
					apivm.h(
						"view",
						{
							class: "cd__bottom--btn",
							style: "background: #CCC;",
							style: "background: #F1C694;"
						},
						apivm.h("text", {class: "cd__bottom--text"}, "支付")
					),
					apivm.h("safe-area", null)
				)
			);
		};

		return TemplateEtOrderDetail;
	})(Component);
	TemplateEtOrderDetail.css = {
		".page": {background: "#F8F8F8", height: "100%"},
		".pay-top": {
			padding: "20px 15px",
			flexFlow: "row nowrap",
			alignItems: "center",
			background: "#FFF"
		},
		".cover": {width: "124px", height: "70px"},
		".info": {marginLeft: "15px"},
		".title": {
			color: "#333",
			fontSize: "16px",
			fontWeight: "bold",
			marginBottom: "15px"
		},
		".price": {
			fontSize: "16px",
			fontWeight: "bold",
			color: "#FA6400",
			lineHeight: "16px",
			fontFamily: "monospace"
		},
		".intro": {marginTop: "10px", background: "#FFF"},
		".cd__bottom--btn": {
			height: "50px",
			justifyContent: "center",
			alignItems: "center",
			margin: "15px",
			borderRadius: "5px"
		},
		".cd__bottom--text": {color: "#FFF", fontSize: "16px", fontWeight: "bold"}
	};
	apivm.define("template-et-order-detail", TemplateEtOrderDetail);
	apivm.render(apivm.h("template-et-order-detail", null), "body");
})();
