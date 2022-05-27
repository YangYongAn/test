(function() {
	global.aboutus = [
		{
			value:
				"<p class='content-text'>柚子英语教育，创建于2007年，专为为有学习英语需求的学员提供英语辅导教学。采取“直播+辅导”双师模式，AI技术辅助教学。总部设立在北京，先后在上海、广州、深圳、天津、杭州、成都、西安、南京等地成立分支机构，现已有120余所辅导中心，成为颇受家长和学生信赖的英语辅导品牌之一。秉承“激发兴趣、培养习惯、塑造品格”的教育理念，柚子英语不仅关注学生学习成绩的提高，更关注学生学习兴趣的激发、学习习惯的培养和思维模式的塑造。柚子英语以“给孩子受益一生的教育”为使命，为广大学子提供优质的课程辅导和贴心的教学服务，满足学生英语课外补习需求。</p>"
		},
		{
			value:
				"<img src='http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/70886d751d5940247055ab8b88854e08.png' style='height: 194px; width: 100%; margin: 15px 0;'/>"
		},
		{
			value:
				"<p class='content-text'>柚子英语教育还与北京大学数学系、南开大学数学系、上海交大数学系、武汉大学数学系等机构签订合作协议，成为他们的实习基地和就业实践基地。依托强大的教学资源与师资力量，柚子英语以实现优秀教育资源的共享为己任，建立起英语网络远程教育平台，大量学员在每年的考试与各类竞赛中取得优异成绩。</p>"
		}
	];
	var HocAboutusEt = /*@__PURE__*/ (function(Component) {
		function HocAboutusEt(props) {
			Component.call(this, props);
			this.data = {
				moduleTitle:
					this.props.moduleTitle !== undefined ? this.props.moduleTitle : "关于我们",
				contents: this.props.contents || aboutus
			};
		}

		if (Component) HocAboutusEt.__proto__ = Component;
		HocAboutusEt.prototype = Object.create(Component && Component.prototype);
		HocAboutusEt.prototype.constructor = HocAboutusEt;
		HocAboutusEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "main__about"},
				apivm.h(
					"view",
					{class: "main__about--title"},
					apivm.h("text", {class: "main__about--title-line"}),
					apivm.h("text", {class: "main__about--title-text"}, this.data.moduleTitle)
				),
				(Array.isArray(this.data.contents)
					? this.data.contents
					: Object.values(this.data.contents)
				).map(function(item$1, index$1) {
					return apivm.h("rich-text", {
						class: "main__about--text ",
						key: "about-us-et-" + index$1,
						nodes: item$1.value
					});
				})
			);
		};

		return HocAboutusEt;
	})(Component);
	HocAboutusEt.css = {
		".main__about": {background: "#fff", padding: "16px", marginBottom: "10px"},
		".main__about--title": {
			marginBottom: "16px",
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		},
		".main__about--title-line": {
			width: "4px",
			height: "18px",
			background: "#f1c694",
			marginRight: "8px",
			borderRadius: "4px"
		},
		".main__about--title-text": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#333"
		},
		".main__about--text": {
			color: "#666",
			fontSize: "14px",
			lineHeight: "24px",
			whiteSpace: "wrap"
		}
	};
	apivm.define("hoc-aboutus-et", HocAboutusEt);

	global.teacher_teams = [
		{
			name: "张亦宏",
			thumb:
				"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/380f6633aab0352d42dc1217a8d10c8f.png",
			introduction: "10余年雅思教龄"
		},
		{
			name: "王明云",
			thumb:
				"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/380f6633aab0352d42dc1217a8d10c8f.png",
			introduction: "12余年托福教龄"
		},
		{
			name: "周宇航",
			thumb:
				"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/380f6633aab0352d42dc1217a8d10c8f.png",
			introduction: "近20年雅思教龄"
		}
	];
	var HocTeacherTeamEt = /*@__PURE__*/ (function(Component) {
		function HocTeacherTeamEt(props) {
			Component.call(this, props);
			this.data = {
				moduleTitle:
					this.props.moduleTitle !== undefined ? this.props.moduleTitle : "名师团队",
				teacherList: this.props.teacherList || teacher_teams
			};
		}

		if (Component) HocTeacherTeamEt.__proto__ = Component;
		HocTeacherTeamEt.prototype = Object.create(Component && Component.prototype);
		HocTeacherTeamEt.prototype.constructor = HocTeacherTeamEt;
		HocTeacherTeamEt.prototype.handleClick = function(item) {
			this.fire("itemClick", item);
		};
		HocTeacherTeamEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "main__teacher"},
				apivm.h(
					"view",
					{class: "main__teacher--title"},
					apivm.h("text", {class: "main__teacher--title-line"}),
					apivm.h(
						"text",
						{class: "main__teacher--title-text"},
						this.data.moduleTitle
					)
				),
				apivm.h(
					"scroll-view",
					{class: "main__teacher-con", "scroll-x": true, "show-scrollbar": false},
					(Array.isArray(this.data.teacherList)
						? this.data.teacherList
						: Object.values(this.data.teacherList)
					).map(function(item$1) {
						return apivm.h(
							"view",
							{
								class: "main__teacher--item",
								key: item$1.name,
								onClick: function() {
									return this$1.handleClick(item$1);
								}
							},
							apivm.h("img", {src: item$1.thumb, class: "main__teacher--item-img"}),
							apivm.h("text", {class: "main__teacher--item-name"}, item$1.name),
							apivm.h(
								"text",
								{class: "main__teacher--item-introduction"},
								item$1.introduction
							)
						);
					})
				)
			);
		};

		return HocTeacherTeamEt;
	})(Component);
	HocTeacherTeamEt.css = {
		".main__teacher": {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			padding: "16px",
			background: "#fff",
			marginBottom: "10px"
		},
		".main__teacher--title": {
			marginBottom: "16px",
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		},
		".main__teacher--title-line": {
			width: "4px",
			height: "18px",
			background: "#f1c694",
			marginRight: "8px",
			borderRadius: "4px"
		},
		".main__teacher--title-text": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#333"
		},
		".main__teacher-con": {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			flexWrap: "nowrap",
			alignItems: "center",
			justifyContent: "space-between"
		},
		".main__teacher--item": {
			width: "120px",
			padding: "16px 0",
			background: "#ffffff",
			border: "1px solid #f0f0f0",
			boxShadow: "1px 1px 6px #e2e0e0",
			borderRadius: "3px",
			margin: "0 5px",
			justifyContent: "center",
			alignItems: "center",
			flexShrink: "0",
			display: "inline-flex"
		},
		".main__teacher--item-img": {
			height: "50px",
			width: "50px",
			borderRadius: "50%"
		},
		".main__teacher--item-name": {
			color: "#333",
			fontSize: "14px",
			margin: "12px 0",
			fontWeight: "bold"
		},
		".main__teacher--item-introduction": {
			color: "#999",
			fontSize: "12px",
			textOverflow: "ellipsis",
			overflow: "hidden",
			textAlign: "center",
			width: "110px",
			whiteSpace: "nowrap",
			fontWeight: "400"
		}
	};
	apivm.define("hoc-teacher-team-et", HocTeacherTeamEt);

	global.course_category = [
		{
			name: "雅思培训",
			image:
				"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/62d63d588551d1c75bd11404e0666d9f.png"
		},
		{
			name: "托福培训",
			image:
				"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/936c24de0b3049dea6162b5d9bcf01cb.png"
		},
		{
			name: "商务英语",
			image:
				"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/06a6961f626afd2d539e66a30725c3e3.png"
		},
		{
			name: "少儿英语",
			image:
				"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/12cb821ff1c86094e67f55c08b8d5f6c.png"
		}
	];
	var HocCourseMenuEt = /*@__PURE__*/ (function(Component) {
		function HocCourseMenuEt(props) {
			Component.call(this, props);
			this.data = {
				menuList: this.props.menuList || course_category
			};
		}

		if (Component) HocCourseMenuEt.__proto__ = Component;
		HocCourseMenuEt.prototype = Object.create(Component && Component.prototype);
		HocCourseMenuEt.prototype.constructor = HocCourseMenuEt;
		HocCourseMenuEt.prototype.apiready = function() {};
		HocCourseMenuEt.prototype.goto = function(item) {
			this.fire("itemClick", item);
		};
		HocCourseMenuEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "main__menu", "scroll-x": true, "show-scrollbar": false},
				(Array.isArray(this.data.menuList)
					? this.data.menuList
					: Object.values(this.data.menuList)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							class: "main__menu--item",
							key: "menu-et-" + index$1,
							onClick: function() {
								return this$1.goto(item$1);
							}
						},
						apivm.h("img", {src: item$1.image, class: "main__menu--item-img"}),
						apivm.h("text", {class: "main__menu--item-text"}, item$1.name)
					);
				})
			);
		};

		return HocCourseMenuEt;
	})(Component);
	HocCourseMenuEt.css = {
		".main__menu": {
			flexFlow: "row nowrap",
			whiteSpace: "nowrap",
			flexShrink: "0",
			marginBottom: "10px",
			padding: "16px 12px",
			alignItems: "center",
			justifyContent: "space-between",
			background: "#fff",
			overflow: "auto"
		},
		".main__menu--item": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			width: "80px",
			flexShrink: "0"
		},
		".main__menu--item-img": {width: "60px", height: "60px", borderRadius: "8px"},
		".main__menu--item-text": {
			color: "#333",
			fontSize: "12px",
			paddingTop: "12px",
			textAlign: "center",
			width: "80px",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		}
	};
	apivm.define("hoc-course-menu-et", HocCourseMenuEt);

	var HocSwiperEt = /*@__PURE__*/ (function(Component) {
		function HocSwiperEt(props) {
			Component.call(this, props);
			this.data = {
				swiperList: this.props.swiperList || [
					{
						cover:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f37011096dcb1d65093b6aa247b4f7c7.png"
					},

					{
						cover:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/9e904b8fcf2572d05d44c553f3f74f04.png"
					},

					{
						cover:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/d0e5835a20a57e2716aba301ae715893.png"
					}
				]
			};
		}

		if (Component) HocSwiperEt.__proto__ = Component;
		HocSwiperEt.prototype = Object.create(Component && Component.prototype);
		HocSwiperEt.prototype.constructor = HocSwiperEt;
		HocSwiperEt.prototype.apiready = function() {};
		HocSwiperEt.prototype.render = function() {
			return apivm.h(
				"swiper",
				{autoplay: true, circular: true, class: "main__swiper"},
				(Array.isArray(this.data.swiperList)
					? this.data.swiperList
					: Object.values(this.data.swiperList)
				).map(function(item$1, index$1) {
					return apivm.h(
						"swiper-item",
						{key: "swiper-et-" + index$1, class: "main__swiper--item"},
						apivm.h("img", {src: item$1.cover, class: "main__swiper--img"})
					);
				})
			);
		};

		return HocSwiperEt;
	})(Component);
	HocSwiperEt.css = {
		".main__swiper": {height: "200px"},
		".main__swiper--item": {height: "100%"},
		".main__swiper--img": {height: "100%", width: "100%"}
	};
	apivm.define("hoc-swiper-et", HocSwiperEt);

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

	function objectWithoutProperties(obj, exclude) {
		var target = {};
		for (var k in obj)
			if (
				Object.prototype.hasOwnProperty.call(obj, k) &&
				exclude.indexOf(k) === -1
			)
				target[k] = obj[k];
		return target;
	}
	var TemplateEtHome = /*@__PURE__*/ (function(Component) {
		function TemplateEtHome(props) {
			Component.call(this, props);
			this.data = {
				banners: [
					{
						cover:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f37011096dcb1d65093b6aa247b4f7c7.png"
					},
					{
						cover:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/9e904b8fcf2572d05d44c553f3f74f04.png"
					},
					{
						cover:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/d0e5835a20a57e2716aba301ae715893.png"
					}
				],

				menuList: [
					{
						name: "雅思培训",
						image:
							"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/62d63d588551d1c75bd11404e0666d9f.png"
					},
					{
						name: "托福培训",
						image:
							"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/936c24de0b3049dea6162b5d9bcf01cb.png"
					},
					{
						name: "商务英语",
						image:
							"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/06a6961f626afd2d539e66a30725c3e3.png"
					},
					{
						name: "少儿英语",
						image:
							"http://aa8954a760b087bd5575.qiniucdn.apicloud-system.com/apicloud/12cb821ff1c86094e67f55c08b8d5f6c.png"
					}
				],

				teacherList: [
					{
						name: "张亦宏",
						thumb:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/380f6633aab0352d42dc1217a8d10c8f.png",
						introduction: "10余年雅思教龄"
					},
					{
						name: "王明云",
						thumb:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/380f6633aab0352d42dc1217a8d10c8f.png",
						introduction: "12余年托福教龄"
					},
					{
						name: "周宇航",
						thumb:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/380f6633aab0352d42dc1217a8d10c8f.png",
						introduction: "近20年雅思教龄"
					}
				],

				contents: [
					{
						value:
							"<p class='content-text'>柚子英语教育，创建于2007年，专为为有学习英语需求的学员提供英语辅导教学。采取“直播+辅导”双师模式，AI技术辅助教学。总部设立在北京，先后在上海、广州、深圳、天津、杭州、成都、西安、南京等地成立分支机构，现已有120余所辅导中心，成为颇受家长和学生信赖的英语辅导品牌之一。秉承“激发兴趣、培养习惯、塑造品格”的教育理念，柚子英语不仅关注学生学习成绩的提高，更关注学生学习兴趣的激发、学习习惯的培养和思维模式的塑造。柚子英语以“给孩子受益一生的教育”为使命，为广大学子提供优质的课程辅导和贴心的教学服务，满足学生英语课外补习需求。</p>"
					},
					{
						value:
							"<img src='http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/70886d751d5940247055ab8b88854e08.png' style='height: 194px; width: 100%; margin: 15px 0;'/>"
					},

					{
						value:
							"<p class='content-text'>柚子英语教育还与北京大学数学系、南开大学数学系、上海交大数学系、武汉大学数学系等机构签订合作协议，成为他们的实习基地和就业实践基地。依托强大的教学资源与师资力量，柚子英语以实现优秀教育资源的共享为己任，建立起英语网络远程教育平台，大量学员在每年的考试与各类竞赛中取得优异成绩。</p>"
					}
				]
			};
		}

		if (Component) TemplateEtHome.__proto__ = Component;
		TemplateEtHome.prototype = Object.create(Component && Component.prototype);
		TemplateEtHome.prototype.constructor = TemplateEtHome;
		TemplateEtHome.prototype.installed = function() {
			// 显式声明状态栏样式 解决部分安卓机型自动生成的灰色半透明背景
			api.setStatusBarStyle &&
				api.setStatusBarStyle({
					style: "dark", //字体样式
					color: "-" //背景色
				});
		};
		TemplateEtHome.prototype.gotoCourse = function(data) {
			api.openWin({
				name: "template-et-course-list",
				url: "../template-et-course-list/template-et-course-list.stml",
				pageParam: Object.assign({}, data.detail)
			});
		};
		TemplateEtHome.prototype.teacherClick = function(data) {
			var ref = data.detail;
			var name = ref.name;
			var introduction = ref.introduction;
			this.showModal({
				title: name,
				content: introduction,
				success: function(res) {
					if (res.confirm) {
						console.log("用户点击确定");
					} else if (res.cancel) {
						console.log("用户点击取消");
					}
				},
				complete: function(res) {
					console.log(res);
				}
			});
		};
		TemplateEtHome.prototype.success = function(res) {
			if (res.confirm) {
				console.log("用户点击确定");
			} else if (res.cancel) {
				console.log("用户点击取消");
			}
		};
		TemplateEtHome.prototype.complete = function(res) {
			console.log(res);
		};
		TemplateEtHome.prototype.showModal = function(ref) {
			var rest = objectWithoutProperties(ref, []);
			var options = rest;

			if (!api.appVersion) {
				return wx.showModal(options);
			} else {
				options.msg = options.content;
				var showCancel = options.showCancel || true;
				if (showCancel) {
					api.confirm(options, function(_) {
						_result(
							Object.assign({}, _, {
								confirm: _.buttonIndex === 2,
								cancel: _.buttonIndex === 1
							})
						);
					});
				} else {
					api.alert(options, function(_) {
						_result(
							Object.assign({}, _, {confirm: _.buttonIndex === 1, cancel: false})
						);
					});
				}

				function _result(res) {
					if (res) {
						options.success && options.success(res);
					} else {
						options.fail && options.fail();
					}
					options.complete && options.complete(res);
				}
			}
		};
		TemplateEtHome.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {title: "柚子英语教育"}),
				apivm.h(
					"scroll-view",
					{class: "main", "scroll-y": true, "show-scrollbar": false},

					apivm.h("hoc-swiper-et", {swiperList: this.data.banners}),

					apivm.h("hoc-course-menu-et", {
						menuList: this.data.menuList,
						onItemClick: this.gotoCourse
					}),

					apivm.h("hoc-teacher-team-et", {
						teacherList: this.data.teacherList,
						onItemClick: this.teacherClick
					}),

					apivm.h("hoc-aboutus-et", {contents: this.data.contents})
				)
			);
		};

		return TemplateEtHome;
	})(Component);
	TemplateEtHome.css = {
		".page": {width: "100%", height: "100%", background: "#f2f2f2"},
		".main": {flex: "1"},
		".content-text": {
			color: "#666",
			fontSize: "14px",
			lineHeight: "24px",
			margin: "0",
			padding: "0"
		},
		".desc-list-item": {
			background: "#f00",
			width: "33%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center"
		},
		".desc-list-item-title": {
			fontSize: "14px",
			fontWeight: "400",
			color: "#999",
			lineHeight: "14px",
			padding: "10px 0"
		},
		".desc-list-item-desc": {
			fontSize: "16px",
			fontWeight: "500",
			color: "#333",
			lineHeight: "16px"
		}
	};
	apivm.define("template-et-home", TemplateEtHome);
	apivm.render(apivm.h("template-et-home", null), "body");
})();
