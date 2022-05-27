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

	var HocCourseBaseinfoEt = /*@__PURE__*/ (function(Component) {
		function HocCourseBaseinfoEt(props) {
			Component.call(this, props);
			this.data = {
				id:
					this.props.id !== undefined
						? this.props.id
						: "486747f0-e6c7-11ea-8da4-530d11e9ab6f",
				title: this.props.title !== undefined ? this.props.title : "托福基础班",
				introduction:
					this.props.introduction !== undefined
						? this.props.introduction
						: "托福基础班",
				class_hour:
					this.props.class_hour !== undefined ? this.props.class_hour : 20,
				price: this.props.price !== undefined ? this.props.price : 3500,
				// video_path: this.props.video_path !== undefined ?  "https://www.baidu.com",
				cover:
					this.props.cover !== undefined
						? this.props.cover
						: "http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/76abf6b3c8df591a726c3156427b1171.png"
			};
		}

		if (Component) HocCourseBaseinfoEt.__proto__ = Component;
		HocCourseBaseinfoEt.prototype = Object.create(
			Component && Component.prototype
		);
		HocCourseBaseinfoEt.prototype.constructor = HocCourseBaseinfoEt;
		HocCourseBaseinfoEt.prototype.playVideo = function() {
			api.openWin({
				name: "play-video",
				url: "../template-et-play-video/template-et-play-video.stml",
				pageParam: this.data.courseInfo
			});

			console.log("查看公开课");
		};
		HocCourseBaseinfoEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "b-course"},
				apivm.h("img", {src: this.data.cover, alt: "", class: "b-course--cover"}),
				apivm.h("text", {class: "b-course--title"}, this.data.title),
				apivm.h("text", {class: "b-course--introduction"}, this.data.introduction),

				apivm.h(
					"view",
					{class: "b-course--footer"},
					apivm.h(
						"text",
						{class: "b-course--price"},
						this.data.class_hour,
						"课时/",
						this.data.price,
						"元"
					),
					this.data.video_path
						? apivm.h(
								"view",
								{class: "b-course--video-box", onClick: this.playVideo},
								apivm.h("img", {
									class: "b-course--icon-video",
									src:
										"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/fba3d4eabc8081b9076b4bcb90b1e6f2.png",
									alt: ""
								}),
								apivm.h("text", {class: "b-course--goto"}, "查看公开课")
						  )
						: null
				)
			);
		};

		return HocCourseBaseinfoEt;
	})(Component);
	HocCourseBaseinfoEt.css = {
		".b-course": {padding: "15px", background: "#FFF", marginBottom: "10px"},
		".b-course--cover": {width: "100%", height: "194px"},
		".b-course--title": {
			color: "#333",
			fontSize: "16px",
			fontWeight: "bold",
			margin: "15px 0"
		},
		".b-course--introduction": {
			fontSize: "14px",
			color: "#666",
			marginBottom: "15px"
		},
		".b-course--footer": {flexFlow: "row nowrap"},
		".b-course--price": {
			fontSize: "16px",
			fontWeight: "bold",
			color: "#FA6400",
			lineHeight: "16px",
			fontFamily: "monospace",
			flex: "1"
		},
		".b-course--icon-video": {width: "20px", height: "20px"},
		".b-course--goto": {fontSize: "14px", color: "#E5BA87", fontWeight: "bold"},
		".b-course--video-box": {flexFlow: "row nowrap"}
	};
	apivm.define("hoc-course-baseinfo-et", HocCourseBaseinfoEt);

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

	var TemplateEtPreorderDetail = /*@__PURE__*/ (function(Component) {
		function TemplateEtPreorderDetail(props) {
			Component.call(this, props);
			this.data = {
				formlist: [
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

		if (Component) TemplateEtPreorderDetail.__proto__ = Component;
		TemplateEtPreorderDetail.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateEtPreorderDetail.prototype.constructor = TemplateEtPreorderDetail;
		TemplateEtPreorderDetail.prototype.installed = function() {};
		TemplateEtPreorderDetail.prototype.nextStep = function() {
			api.confirm(
				{
					title: "提示",
					msg: "是否要取消预约?",
					buttons: ["确定", "取消"]
				},
				function(ret, err) {
					ret.buttonIndex === 1 && api.closeWin();
				}
			);
		};
		TemplateEtPreorderDetail.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {title: "预约详情", isBack: true}),
				apivm.h(
					"scroll-view",
					{style: "flex: 1;", "show-scrollbar": false},
					apivm.h("hoc-course-baseinfo-et", {
						id: "458287d0-daf0-11ea-860c-79b0f1c26dc1",
						title: "托福基础班",
						introduction: "托福基础班",
						price: 3500,
						cover:
							"http://a0a67a2d94d23442aaa3.qiniucdn.apicloud-system.com/apicloud/f644528c36a155b6d7e05deb972f504a.png",
						type: "2",
						class_hour: 20
					}),
					apivm.h("hoc-form-list-et", {
						infoList: this.data.formlist,
						title: "预约信息"
					})
				),

				apivm.h(
					"view",
					null,
					apivm.h("hoc-handle-btn-et", {
						btnText: "取消预约",
						btnBgColor: "#F1C694",
						onBtnClick: this.nextStep
					})
				)
			);
		};

		return TemplateEtPreorderDetail;
	})(Component);
	TemplateEtPreorderDetail.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"}
	};
	apivm.define("template-et-preorder-detail", TemplateEtPreorderDetail);
	apivm.render(apivm.h("template-et-preorder-detail", null), "body");
})();
