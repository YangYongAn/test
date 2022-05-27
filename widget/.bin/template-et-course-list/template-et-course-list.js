(function() {
	var HocCourseListEt = /*@__PURE__*/ (function(Component) {
		function HocCourseListEt(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						id: "486747f0-e6c7-11ea-8da4-530d11e9ab6f",
						title: "托福基础班",
						introduction:
							"专项针对听说和读写进行授课，符合英语学习规律为冲刺托福高分奠定坚实基础。",
						class_hour: 20,
						price: 3500,
						cover:
							"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/76abf6b3c8df591a726c3156427b1171.png"
					},
					{
						id: "d38e2bc0-d296-11ec-8b39-cda3e4fd4f7b",
						title: "提交学习能力",
						introduction:
							"专项针对听说和读写进行授课，符合英语学习规律为冲刺托福高分奠定坚实基础。",
						class_hour: 20,
						price: 5000,
						cover:
							"http://a0a67a2d94d23442aaa3.qiniucdn.apicloud-system.com/apicloud/45cad7acde20f5ee41692957385a9453.png"
					}
				]
			};
		}

		if (Component) HocCourseListEt.__proto__ = Component;
		HocCourseListEt.prototype = Object.create(Component && Component.prototype);
		HocCourseListEt.prototype.constructor = HocCourseListEt;
		HocCourseListEt.prototype.apiready = function() {};
		HocCourseListEt.prototype.gotoCourseDetail = function(item) {
			this.fire("gotoCourseDetail", item);
		};
		HocCourseListEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "page"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{
							key: item$1.id,
							class: "b-course-card",
							onClick: function() {
								return this$1.gotoCourseDetail(item$1);
							}
						},
						apivm.h("img", {class: "b-course-card-img", src: item$1.cover}),
						apivm.h(
							"view",
							{class: "b-course-card-content"},
							apivm.h(
								"view",
								{class: "b-course-card-content-info"},
								apivm.h("text", {class: "b-course-card-content-title"}, item$1.title),
								apivm.h(
									"text",
									{class: "b-course-card-price"},
									item$1.class_hour,
									"课时/",
									item$1.price,
									"元"
								)
							),
							apivm.h(
								"text",
								{class: "b-course-card-content-desc"},
								item$1.introduction
							)
						)
					);
				})
			);
		};

		return HocCourseListEt;
	})(Component);
	HocCourseListEt.css = {
		".b-course-card": {
			width: "auto",
			height: "auto",
			margin: "15px",
			background: "#fff",
			border: "1px solid #f3f3f3",
			borderRadius: "4px"
		},
		".b-course-card-img": {width: "100%", height: "194px"},
		".b-course-card-content": {margin: "12px"},
		".b-course-card-content-info": {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			height: "22px"
		},
		".b-course-card-content-title": {
			flex: "1",
			color: "#333",
			fontSize: "16px",
			fontWeight: "bold",
			marginRight: "8px",
			flexWrap: "wrap"
		},
		".b-course-card-content-desc": {
			marginTop: "15px",
			whiteSpace: "pre-wrap",
			fontSize: "14px",
			color: "#666666"
		},
		".b-course-card-price": {
			fontSize: "16px",
			color: "#fa6400",
			fontWeight: "bold"
		}
	};
	apivm.define("hoc-course-list-et", HocCourseListEt);

	var HocNoDataEt = /*@__PURE__*/ (function(Component) {
		function HocNoDataEt(props) {
			Component.call(this, props);
			this.data = {
				iconSrc:
					this.props.iconSrc !== undefined
						? this.props.iconSrc
						: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/a74aa8ce90ba4ed3ec5c9963208ed856.png",
				title: this.props.title !== undefined ? this.props.title : "暂无数据哦"
			};
		}

		if (Component) HocNoDataEt.__proto__ = Component;
		HocNoDataEt.prototype = Object.create(Component && Component.prototype);
		HocNoDataEt.prototype.constructor = HocNoDataEt;
		HocNoDataEt.prototype.apiready = function() {};
		HocNoDataEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "no-data"},
				apivm.h("img", {src: this.data.iconSrc, alt: "", class: "no-data-img"}),
				apivm.h("text", {class: "no-data-title"}, this.data.title)
			);
		};

		return HocNoDataEt;
	})(Component);
	HocNoDataEt.css = {
		".no-data": {
			margin: "16px 0",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		},
		".no-data-img": {width: "100px", height: "100px"},
		".no-data-title": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#333",
			marginTop: "20px",
			textAlign: "center"
		}
	};
	apivm.define("hoc-no-data-et", HocNoDataEt);

	var HocLoadingEt = /*@__PURE__*/ (function(Component) {
		function HocLoadingEt(props) {
			Component.call(this, props);
			this.data = {
				iconSrc:
					this.props.iconSrc !== undefined
						? this.props.iconSrc
						: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/57c8f972dc7a095e2d0ed9dc33197d4d.gif",
				title:
					this.props.title !== undefined ? this.props.title : "加载中，请稍后..."
			};
		}

		if (Component) HocLoadingEt.__proto__ = Component;
		HocLoadingEt.prototype = Object.create(Component && Component.prototype);
		HocLoadingEt.prototype.constructor = HocLoadingEt;
		HocLoadingEt.prototype.apiready = function() {};
		HocLoadingEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "loading"},
				apivm.h("img", {src: this.data.iconSrc, alt: "", class: "loading-img"}),
				apivm.h("text", {class: "loading-title"}, this.data.title)
			);
		};

		return HocLoadingEt;
	})(Component);
	HocLoadingEt.css = {
		".loading": {
			margin: "16px 0",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		},
		".loading-img": {width: "100px", height: "100px"},
		".loading-title": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#333",
			marginTop: "20px",
			textAlign: "center"
		}
	};
	apivm.define("hoc-loading-et", HocLoadingEt);

	var HocTabSwitchEt = /*@__PURE__*/ (function(Component) {
		function HocTabSwitchEt(props) {
			Component.call(this, props);
			this.data = {
				current: this.props.curTabIndex !== undefined ? this.props.curTabIndex : 0,
				tabList: this.props.tabList || [
					{
						id: "749961c0-bd94-11ea-8376-af740ed8c823",
						name: "班级通知",
						sort: 1,
						image:
							"http://a0a67a2d94d23442aaa3.qiniucdn.apicloud-system.com/apicloud/81a87fd10a1230a70471742c0f74fe79.jpg"
					},

					{
						id: "961d8d30-bd94-11ea-8376-af740ed8c823",
						name: "课时课程",
						sort: 2,
						image:
							"http://a0a67a2d94d23442aaa3.qiniucdn.apicloud-system.com/apicloud/1b61d88512ca97be541bde8af683c843.jpg"
					},

					{
						id: "90200b10-bd94-11ea-8376-af740ed8c823",
						name: "体育比赛",
						sort: 3,
						image:
							"http://a0a67a2d94d23442aaa3.qiniucdn.apicloud-system.com/apicloud/d1f24b049b711af201636460188b3891.jpg"
					},

					{
						id: "80fbcea0-022e-11ec-9c07-fb71c9c0d810",
						name: "文娱活动",
						sort: 5,
						image:
							"http://a0a67a2d94d23442aaa3.qiniucdn.apicloud-system.com/apicloud/a509a1b7be98d65cf2270f9cb9c07857.jpg"
					},

					{
						id: "7d001bb0-bd94-11ea-8376-af740ed8c823",
						name: "班务管理",
						sort: 6,
						image:
							"http://a0a67a2d94d23442aaa3.qiniucdn.apicloud-system.com/apicloud/da13f315322f6e0c1a1f64e826e75d20.jpg"
					}
				]
			};
		}

		if (Component) HocTabSwitchEt.__proto__ = Component;
		HocTabSwitchEt.prototype = Object.create(Component && Component.prototype);
		HocTabSwitchEt.prototype.constructor = HocTabSwitchEt;
		HocTabSwitchEt.prototype.apiready = function() {};
		HocTabSwitchEt.prototype.tabClick = function(item, index) {
			this.data.current = index;
			this.fire("tabClick", {data: item, curTabIndex: index});
		};
		HocTabSwitchEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "a-tabs"},
				(Array.isArray(this.data.tabList)
					? this.data.tabList
					: Object.values(this.data.tabList)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							key: item$1.id,
							class: "a-tab-item",
							onClick: function() {
								return this$1.tabClick(item$1, index$1);
							}
						},
						apivm.h(
							"text",
							{
								class:
									"a-tab-item-text  " +
									(this$1.data.current === index$1 ? "a-tab-item-text-active" : "")
							},
							item$1.name
						),
						this$1.data.current === index$1
							? apivm.h("text", {class: "a-tab-item-line"})
							: null
					);
				})
			);
		};

		return HocTabSwitchEt;
	})(Component);
	HocTabSwitchEt.css = {
		".a-tabs": {
			width: "100%",
			justifyContent: "space-between",
			alignItems: "center",
			height: "44px",
			display: "flex",
			flexDirection: "row",
			flexWrap: "nowrap",
			flexShrink: "0",
			background: "#fff",
			overflow: "auto"
		},
		".a-tab-item": {
			flex: "1",
			height: "100%",
			padding: "0 12px",
			justifyContent: "center",
			alignItems: "center"
		},
		".a-tab-item-text": {
			color: "#666",
			fontSize: "14px",
			fontWeight: "normal",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis"
		},
		".a-tab-item-text-active": {color: "#333", fontWeight: "bold"},
		".a-tab-item-line": {
			position: "absolute",
			bottom: "0",
			background: "#f1c694",
			width: "20px",
			height: "2px"
		}
	};
	apivm.define("hoc-tab-switch-et", HocTabSwitchEt);

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

	var TemplateEtCourseList = /*@__PURE__*/ (function(Component) {
		function TemplateEtCourseList(props) {
			Component.call(this, props);
			this.data = {
				current: 0,
				tabList: [
					{
						id: "749961c0-bd94-11ea-8376-af740ed8c823",
						name: "雅思培训",
						sort: 1,
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/390be1f11e19e09f45c1136bba0b53f1.png"
					},
					{
						id: "961d8d30-bd94-11ea-8376-af740ed8c823",
						name: "托福培训",
						sort: 2,
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/7169bed4660ca42b7c6f847bcbfcd58e.png"
					},
					{
						id: "90200b10-bd94-11ea-8376-af740ed8c823",
						name: "商务英语",
						sort: 3,
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/4fe32561e81c4b7dda9b8a30ae18e287.png"
					},
					{
						id: "80fbcea0-022e-11ec-9c07-fb71c9c0d810",
						name: "少儿英语",
						sort: 5,
						image:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/0c659a25e1561802b467b14a1b7c209c.png"
					}
				],

				dataList: [
					{
						id: "486747f0-e6c7-11ea-8da4-530d11e9ab6f",
						title: "托福基础班",
						introduction:
							"专项针对听说和读写进行授课，符合英语学习规律为冲刺托福高分奠定坚实基础。",
						class_hour: 100,
						price: 6000,
						cover:
							"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/76abf6b3c8df591a726c3156427b1171.png"
					},

					{
						id: "d38e2bc0-d296-11ec-8b39-cda3e4fd4f7b",
						title: "提交学习能力",
						introduction:
							"专项针对听说和读写进行授课，符合英语学习规律为冲刺托福高分奠定坚实基础。",
						class_hour: 50,
						price: 1254,
						cover:
							"http://a0a67a2d94d23442aaa3.qiniucdn.apicloud-system.com/apicloud/45cad7acde20f5ee41692957385a9453.png"
					}
				]
			};
		}

		if (Component) TemplateEtCourseList.__proto__ = Component;
		TemplateEtCourseList.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateEtCourseList.prototype.constructor = TemplateEtCourseList;
		TemplateEtCourseList.prototype.tabChange = function(e) {
			this.data.current = e.detail.curTabIndex;
		};
		TemplateEtCourseList.prototype.goto = function(data) {
			api.openWin({
				name: "template-et-course-detail",
				url: "../template-et-course-detail/template-et-course-detail.stml"
			});
		};
		TemplateEtCourseList.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {isBack: true, title: "柚子英语教育"}),
				apivm.h("hoc-tab-switch-et", {
					tabList: this.data.tabList,
					curTabIndex: this.data.current,
					onTabClick: this.tabChange
				}),
				apivm.h(
					"scroll-view",
					{"scroll-y": true, "show-scrollbar": false},
					apivm.h(
						"view",
						{class: "course-tabs__item--list"},
						apivm.h("hoc-course-list-et", {
							list: this.data.dataList,
							onGotoCourseDetail: this.goto
						})
					)
				)
			);
		};

		return TemplateEtCourseList;
	})(Component);
	TemplateEtCourseList.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"}
	};
	apivm.define("template-et-course-list", TemplateEtCourseList);
	apivm.render(apivm.h("template-et-course-list", null), "body");
})();
