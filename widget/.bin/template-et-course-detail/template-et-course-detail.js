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

	var HocCourseDetailEt = /*@__PURE__*/ (function(Component) {
		function HocCourseDetailEt(props) {
			Component.call(this, props);
			this.data = {
				moduleTitle:
					this.props.moduleTitle !== undefined ? this.props.moduleTitle : "课程详情",
				content:
					this.props.content !== undefined
						? this.props.content
						: "<img src='http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/ee81799a56acb99a6bf2f76dc14c7a99.png' style='width: 100%;'/>"
			};
		}

		if (Component) HocCourseDetailEt.__proto__ = Component;
		HocCourseDetailEt.prototype = Object.create(Component && Component.prototype);
		HocCourseDetailEt.prototype.constructor = HocCourseDetailEt;
		HocCourseDetailEt.prototype.apiready = function() {};
		HocCourseDetailEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "course-detail-desc"},
				apivm.h(
					"view",
					{class: "course-detail--title"},
					apivm.h("text", {class: "course-detail--title-line"}),
					apivm.h(
						"text",
						{class: "course-detail--title-text"},
						this.data.moduleTitle
					)
				),
				apivm.h("rich-text", {nodes: this.data.content})
			);
		};

		return HocCourseDetailEt;
	})(Component);
	HocCourseDetailEt.css = {
		".course-detail-desc": {
			width: "100%",
			marginBottom: "10px",
			background: "#fff",
			padding: "16px"
		},
		".course-detail--title": {
			marginBottom: "16px",
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		},
		".course-detail--title-line": {
			width: "4px",
			height: "18px",
			background: "#F1C694",
			marginRight: "8px",
			borderRadius: "4px"
		},
		".course-detail--title-text": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#333"
		}
	};
	apivm.define("hoc-course-detail-et", HocCourseDetailEt);

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

	var TemplateEtCourseDetail = /*@__PURE__*/ (function(Component) {
		function TemplateEtCourseDetail(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateEtCourseDetail.__proto__ = Component;
		TemplateEtCourseDetail.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateEtCourseDetail.prototype.constructor = TemplateEtCourseDetail;
		TemplateEtCourseDetail.prototype.nextStep = function() {
			if (this.data.type !== 2) {
				api.openWin({
					name: "template-et-course-pay",
					url: "../template-et-course-pay/template-et-course-pay.stml",
					pageParam: api.pageParam
				});
			} else {
				api.openWin({
					name: "template-et-course-preorder",
					url: "../template-et-course-preorder/template-et-course-preorder.stml",
					pageParam: api.pageParam
				});
			}
		};
		TemplateEtCourseDetail.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {title: "课程详情", isBack: true}),
				apivm.h(
					"scroll-view",
					{
						style: "flex: 1;",
						"scroll-y": true,
						bounces: "false",
						"show-scrollbar": false
					},
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
					apivm.h("hoc-course-detail-et", {
						content:
							"<img src='http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/441c10a0fd1495f55df9019a6ddc32fe.png' style='width: 100%;'/>"
					}),
					apivm.h("hoc-handle-btn-et", {
						btnText: "立即报名",
						btnBgColor: "#F1C694",
						onBtnClick: this.nextStep
					})
				)
			);
		};

		return TemplateEtCourseDetail;
	})(Component);
	TemplateEtCourseDetail.css = {
		".page": {height: "100%", background: "#f8f8f8"},
		".cd--card": {background: "#fff", marginTop: "10px", padding: "15px"},
		".cd__bottom--btn": {
			height: "50px",
			width: "100%",
			background: "#f1c694",
			justifyContent: "center",
			alignItems: "center"
		},
		".cd__bottom--text": {color: "#fff", fontSize: "16px", fontWeight: "bold"}
	};
	apivm.define("template-et-course-detail", TemplateEtCourseDetail);
	apivm.render(apivm.h("template-et-course-detail", null), "body");
})();
