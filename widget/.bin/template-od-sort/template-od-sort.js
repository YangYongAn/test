(function() {
	var HocSideContentOd = /*@__PURE__*/ (function(Component) {
		function HocSideContentOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						id: "258389c0-d532-11ea-9b7c-8f1336202828",
						name: "连衣裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/51a76d00c46bdc90fa0138601cdb2060.png"
					},

					{
						id: "11cca860-d2ff-11ea-a0bc-bd616acc739c",
						name: "针织裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/bf017f44d8396a43d0c3a5faaba647dd.png"
					},

					{
						id: "07bbe7f0-d2ff-11ea-a0bc-bd616acc739c",
						name: "T连衣裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c88d14de583f85ef069dd0b1e065bd92.png"
					},

					{
						id: "f97b6080-d2fe-11ea-a0bc-bd616acc739c",
						name: "裤子",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/19efd0fa529705147316dd696e860ff7.png"
					},

					{
						id: "42990ef0-ccb7-11ea-8ee1-07d7d7fa197c",
						name: "吊带裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/de8a2625b3adafabe55bfe1a7ec2b386.png"
					},

					{
						id: "42990ef0-ccb7-11ea-8ee1-07d7d7fa197c",
						name: "长裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/e240fc0c356abfb2a44d358521881c30.png"
					},

					{
						id: "42990ef0-ccb7-11ea-8ee1-07d7d7fa197c",
						name: "短裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3ce4698626fce034b2e9aebc33ee0065.png"
					}
				]
			};
			this.compute = {
				itemWidth: function() {
					return Math.floor((api.winWidth - 80 - 60 - 30) / 3);
				}
			};
		}

		if (Component) HocSideContentOd.__proto__ = Component;
		HocSideContentOd.prototype = Object.create(Component && Component.prototype);
		HocSideContentOd.prototype.constructor = HocSideContentOd;
		HocSideContentOd.prototype.apiready = function() {};
		HocSideContentOd.prototype.onItemClick = function() {
			api.openWin({
				name: "detail",
				url: "widget://pages/template-od-detail/template-od-detail"
			});
		};
		HocSideContentOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{class: "scroll_right", "scroll-y": true},
				apivm.h(
					"view",
					{class: "right_box"},
					(Array.isArray(this.data.list)
						? this.data.list
						: Object.values(this.data.list)
					).map(function(item$1, index$1) {
						return apivm.h(
							"view",
							{
								onClick: this$1.onItemClick,
								class: "right_item",
								"data-id": item$1.id,
								"data-name": item$1.name
							},
							apivm.h("image", {class: "right_item_img", src: item$1.icon}),
							apivm.h("text", {class: "right_item_zi color_12"}, item$1.name)
						);
					})
				)
			);
		};

		return HocSideContentOd;
	})(Component);
	HocSideContentOd.css = {
		".scroll_right": {flex: "1"},
		".right_box": {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			margin: "15px",
			padding: "15px 0 0 15px",
			backgroundColor: "white",
			borderRadius: "8px"
		},
		".right_item": {
			marginRight: "15px",
			marginBottom: "15px",
			width: "60px",
			height: "auto"
		},
		".right_item_img": {
			width: "60px",
			height: "60px",
			backgroundColor: "#f6f6f6",
			flexShrink: "0"
		},
		".right_item_zi": {
			lineHeight: "40px",
			textAlign: "center",
			color: "#8f8f8f",
			fontSize: "14px"
		}
	};
	apivm.define("hoc-side-content-od", HocSideContentOd);

	var HocSideBarOd = /*@__PURE__*/ (function(Component) {
		function HocSideBarOd(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						id: "1",
						name: "女装"
					},

					{
						id: "2",
						name: "男装"
					},

					{
						id: "1ff38f90-caf7-11ea-8523-0da8a6a49497",
						name: "运动装"
					},

					{
						id: "418835c0-caf7-11ea-8523-0da8a6a49497",
						name: "婴儿服饰"
					}
				],

				active: this.props.active || 1
			};
		}

		if (Component) HocSideBarOd.__proto__ = Component;
		HocSideBarOd.prototype = Object.create(Component && Component.prototype);
		HocSideBarOd.prototype.constructor = HocSideBarOd;
		HocSideBarOd.prototype.apiready = function() {};
		HocSideBarOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{class: "scroll_left", "scroll-y": true},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{
							class:
								"left_one" + (index$1 == this$1.data.active ? " left_one_on" : ""),
							"data-id": item$1.id
						},
						apivm.h("view", {
							class: index$1 == this$1.data.active ? "left_line" : ""
						}),
						apivm.h(
							"text",
							{
								class: "left_zi",
								style: "color:" + (index$1 == this$1.data.active ? "#333;" : "#8f8f8f;")
							},
							item$1.name
						)
					);
				})
			);
		};

		return HocSideBarOd;
	})(Component);
	HocSideBarOd.css = {
		".scroll_left": {width: "80px", height: "100%", backgroundColor: "#f8f8f8"},
		".left_one": {
			flexDirection: "row",
			alignItems: "center",
			height: "40px",
			backgroundColor: "#f8f8f8"
		},
		".left_one_on": {backgroundColor: "#ffffff"},
		".left_line": {
			width: "4px",
			height: "14px",
			backgroundColor: "#ff7037",
			visibility: "visible"
		},
		".hidden": {visibility: "hidden"},
		".left_zi": {flex: "1", fontWeight: "500", textAlign: "center"}
	};
	apivm.define("hoc-side-bar-od", HocSideBarOd);

	var HocNavBarOd = /*@__PURE__*/ (function(Component) {
		function HocNavBarOd(props) {
			Component.call(this, props);
			this.data = {
				msg: this.props.msg || "首页",
				isBack: this.props.isBack || false
			};
		}

		if (Component) HocNavBarOd.__proto__ = Component;
		HocNavBarOd.prototype = Object.create(Component && Component.prototype);
		HocNavBarOd.prototype.constructor = HocNavBarOd;
		HocNavBarOd.prototype.closeWin = function() {
			api.closeWin();
		};
		HocNavBarOd.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				null,
				apivm.h(
					"view",
					{class: "nav-bar"},
					this.data.isBack
						? apivm.h(
								"view",
								{
									onclick: function(event) {
										if (this$1.closeWin) {
											this$1.closeWin(event);
										} else {
											closeWin(event);
										}
									},
									class: "nav-bar-back"
								},
								apivm.h("image", {
									class: "nav-bar-icon",
									src:
										"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6958c7448f8d7106d3ee273fa7430063.png"
								}),
								apivm.h("text", {class: "nav-bar-text"}, "返回")
						  )
						: null,
					apivm.h("text", {class: "nav-bar-text"}, this.data.msg)
				)
			);
		};

		return HocNavBarOd;
	})(Component);
	HocNavBarOd.css = {
		".nav-bar": {
			width: "100%",
			height: "45px",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			borderBottom: "1px solid #ccc",
			backgroundColor: "#fff"
		},
		".nav-bar-back": {
			position: "absolute",
			left: "15px",
			width: "100px",
			flexDirection: "row",
			justifyContent: "left",
			alignItems: "center"
		},
		".nav-bar-icon": {marginRight: "5px", width: "15px", height: "15px"},
		".nav-bar-text": {fontSize: "18px", color: "#333"}
	};
	apivm.define("hoc-nav-bar-od", HocNavBarOd);

	var TemplateOdSort = /*@__PURE__*/ (function(Component) {
		function TemplateOdSort(props) {
			Component.call(this, props);
			this.data = {
				sideList: [
					{
						id: "1",
						name: "女装"
					},

					{
						id: "2",
						name: "男装"
					},

					{
						id: "1ff38f90-caf7-11ea-8523-0da8a6a49497",
						name: "运动装"
					},

					{
						id: "418835c0-caf7-11ea-8523-0da8a6a49497",
						name: "婴儿服饰"
					}
				],

				contentList: [
					{
						id: "258389c0-d532-11ea-9b7c-8f1336202828",
						name: "连衣裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/51a76d00c46bdc90fa0138601cdb2060.png"
					},

					{
						id: "11cca860-d2ff-11ea-a0bc-bd616acc739c",
						name: "针织裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/bf017f44d8396a43d0c3a5faaba647dd.png"
					},

					{
						id: "07bbe7f0-d2ff-11ea-a0bc-bd616acc739c",
						name: "T连衣裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c88d14de583f85ef069dd0b1e065bd92.png"
					},

					{
						id: "f97b6080-d2fe-11ea-a0bc-bd616acc739c",
						name: "裤子",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/19efd0fa529705147316dd696e860ff7.png"
					},

					{
						id: "42990ef0-ccb7-11ea-8ee1-07d7d7fa197c",
						name: "吊带裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/de8a2625b3adafabe55bfe1a7ec2b386.png"
					},

					{
						id: "42990ef0-ccb7-11ea-8ee1-07d7d7fa197c",
						name: "长裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/e240fc0c356abfb2a44d358521881c30.png"
					},

					{
						id: "42990ef0-ccb7-11ea-8ee1-07d7d7fa197c",
						name: "短裙",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3ce4698626fce034b2e9aebc33ee0065.png"
					}
				]
			};
		}

		if (Component) TemplateOdSort.__proto__ = Component;
		TemplateOdSort.prototype = Object.create(Component && Component.prototype);
		TemplateOdSort.prototype.constructor = TemplateOdSort;
		TemplateOdSort.prototype.apiready = function() {};
		TemplateOdSort.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h("hoc-nav-bar-od", {msg: "分类", isBack: false}),
				apivm.h(
					"view",
					{class: "sort"},
					apivm.h("hoc-side-bar-od", {list: this.data.sideList}),
					apivm.h("hoc-side-content-od", {list: this.data.contentList})
				)
			);
		};

		return TemplateOdSort;
	})(Component);
	TemplateOdSort.css = {
		".page": {height: "100%", backgroundColor: "#fff"},
		".sort": {flex: "1", flexDirection: "row"}
	};
	apivm.define("template-od-sort", TemplateOdSort);
	apivm.render(apivm.h("template-od-sort", null), "body");
})();
