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

	global.classifyList = [
		{
			id: "f7cf34d0-d6e8-11ea-8546-397f48399cb9",
			name: "特色美食",
			icon:
				"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/f431072b8b58f5eb2adae2d6167c4a14.JPG",
			addtime: "2020-08-05T06:57:46.653Z",
			sta: 1,
			orderby: 4,
			pid: "1"
		},
		{
			id: "765fdbc0-dba2-11ea-a68f-873831895ca3",
			name: "乡土文创",
			icon:
				"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/1825d8792308e9ba9cb9ad9c6e5d1380.JPG",
			addtime: "2020-08-11T07:15:40.540Z",
			sta: 1,
			orderby: 4,
			pid: "1"
		},
		{
			id: "03e206d0-d6e9-11ea-8546-397f48399cb9",
			name: "农耕课堂",
			icon:
				"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/20af6bccfa9fff071477b1708743f9e1.JPG",
			addtime: "2020-08-05T06:58:06.909Z",
			sta: 1,
			orderby: 3,
			pid: "1"
		},
		{
			id: "210952f0-a3b5-11ec-9291-8d2664d910ab",
			name: "农家特色",
			icon:
				"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/5b6a61c32d64e918f51422549b0a3900.JPG",
			addtime: "2022-03-14T16:38:08.031Z",
			sta: 0,
			orderby: 3,
			pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
		},
		{
			id: "22737f20-d6e9-11ea-8546-397f48399cb9",
			name: "初心笃志",
			icon:
				"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/a77b21b571526bfba17131c44b957c55.JPG",
			addtime: "2020-08-05T06:58:58.194Z",
			sta: 1,
			orderby: 2,
			pid: "1"
		},
		{
			id: "0292b5a0-a3b5-11ec-9291-8d2664d910ab",
			name: "养生滋味",
			icon:
				"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/ac17fbba3b3dd76a142e4e805501d22e.JPG",
			addtime: "2022-03-14T16:37:16.922Z",
			sta: 0,
			orderby: 2,
			pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
		},
		{
			id: "3a80f260-a3b5-11ec-9291-8d2664d910ab",
			name: "复古怀旧",
			icon:
				"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/77f093776045f6187ccb188cee428985.JPG",
			addtime: "2022-03-14T16:38:50.758Z",
			sta: 0,
			orderby: 2,
			pid: "765fdbc0-dba2-11ea-a68f-873831895ca3"
		}
	];
	var HocClassifyListSgm = /*@__PURE__*/ (function(Component) {
		function HocClassifyListSgm(props) {
			Component.call(this, props);
			this.data = {
				classDetailList: this.props.classDetailList || classifyList
			};
		}

		if (Component) HocClassifyListSgm.__proto__ = Component;
		HocClassifyListSgm.prototype = Object.create(
			Component && Component.prototype
		);
		HocClassifyListSgm.prototype.constructor = HocClassifyListSgm;
		HocClassifyListSgm.prototype.apiready = function() {};
		HocClassifyListSgm.prototype.clickItem = function(item) {
			this.fire("classifyItemClick", item);
		};
		HocClassifyListSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{class: "classify-detail-list", "show-scrollbar": false, "scroll-y": true},
				apivm.h(
					"view",
					{class: "classify-detail-list-box"},
					(Array.isArray(this.data.classDetailList)
						? this.data.classDetailList
						: Object.values(this.data.classDetailList)
					).map(function(item$1, index$1) {
						return apivm.h(
							"view",
							{
								class: "classify-detail-list-item",
								"data-id": item$1.id,
								"data-name": item$1.name,
								onClick: function() {
									return this$1.clickItem(item$1);
								}
							},
							apivm.h("image", {
								class: "classify-detail-list-item-img",
								src: item$1.icon
							}),
							apivm.h("text", {class: "classify-detail-list-item-text"}, item$1.name)
						);
					})
				)
			);
		};

		return HocClassifyListSgm;
	})(Component);
	HocClassifyListSgm.css = {
		".classify-detail-list": {flex: "1"},
		".classify-detail-list-box": {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "space-between",
			margin: "15px",
			padding: "15px",
			background: "#fff",
			borderRadius: "8px"
		},
		".classify-detail-list-item": {
			width: "100px",
			height: "auto",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center"
		},
		".classify-detail-list-item-img": {
			width: "100px",
			height: "100px",
			backgroundColor: "#f6f6f6"
		},
		".classify-detail-list-item-text": {
			height: "40px",
			lineHeight: "40px",
			textAlign: "center",
			color: "#8f8f8f",
			fontSize: "14px"
		}
	};
	apivm.define("hoc-classify-list-sgm", HocClassifyListSgm);

	var HocSlideBarSgm = /*@__PURE__*/ (function(Component) {
		function HocSlideBarSgm(props) {
			Component.call(this, props);
			this.data = {
				curTab:
					this.props.curTab !== undefined
						? this.props.curTab
						: "f7cf34d0-d6e8-11ea-8546-397f48399cb9",
				sideBarList: this.props.sideBarList || [
					{
						value: "f7cf34d0-d6e8-11ea-8546-397f48399cb9",
						text: "全面屏"
					},
					{
						value: "765fdbc0-dba2-11ea-a68f-873831895ca3",
						text: "5G手机"
					},
					{
						value: "03e206d0-d6e9-11ea-8546-397f48399cb9",
						text: "游戏手机"
					},
					{
						value: "22737f20-d6e9-11ea-8546-397f48399cb9",
						text: "以旧换新"
					},
					{
						value: "ef79ea90-d6e9-11ea-90a3-f3961652479d",
						text: "轻薄本"
					}
				]
			};
		}

		if (Component) HocSlideBarSgm.__proto__ = Component;
		HocSlideBarSgm.prototype = Object.create(Component && Component.prototype);
		HocSlideBarSgm.prototype.constructor = HocSlideBarSgm;
		HocSlideBarSgm.prototype.apiready = function() {};
		HocSlideBarSgm.prototype.tabClick = function(item) {
			this.data.curTab = item.value;
			this.fire("tabClick", item.value);
		};
		HocSlideBarSgm.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "side-bar"},
				(Array.isArray(this.data.sideBarList)
					? this.data.sideBarList
					: Object.values(this.data.sideBarList)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{
							class:
								"side-bar-item " +
								(this$1.data.curTab === item$1.value ? "side-bar-item-active" : ""),
							key: item$1.value,
							onClick: function() {
								return this$1.tabClick(item$1);
							}
						},
						apivm.h("text", {
							class:
								"side-bar-item-line " +
								(this$1.data.curTab === item$1.value ? "side-bar-item-line-active" : "")
						}),
						apivm.h(
							"text",
							{
								class:
									"side-bar-item-text " +
									(this$1.data.curTab === item$1.value
										? "side-bar-item-text-active"
										: "")
							},
							item$1.text
						)
					);
				})
			);
		};

		return HocSlideBarSgm;
	})(Component);
	HocSlideBarSgm.css = {
		".side-bar": {
			flexShrink: "0",
			width: "80px",
			height: "554px",
			background: "#f8f8f8",
			display: "flex",
			flexDirection: "column",
			overflow: ["auto", "hidden"],
			whiteSpace: "nowrap",
			textOverflow: "ellipsis"
		},
		".side-bar-item": {
			height: "40px",
			background: "#f8f8f8",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			flexShrink: "0"
		},
		".side-bar-item-active": {background: "#fff"},
		".side-bar-item-line": {
			width: "4px",
			height: "14px",
			background: "#f8f8f8",
			marginRight: "8px"
		},
		".side-bar-item-line-active": {background: "#339dff"},
		".side-bar-item-text": {fontSize: "14px", color: "#8f8f8f"},
		".side-bar-item-text-active": {color: "#333", fontWeight: "500"}
	};
	apivm.define("hoc-slide-bar-sgm", HocSlideBarSgm);

	var TemplateSgmSortList = /*@__PURE__*/ (function(Component) {
		function TemplateSgmSortList(props) {
			Component.call(this, props);
			this.data = {
				hocSlideBarSgmSideBarList: [
					{
						value: "f7cf34d0-d6e8-11ea-8546-397f48399cb9",
						text: "全面屏"
					},
					{
						value: "765fdbc0-dba2-11ea-a68f-873831895ca3",
						text: "5G手机"
					},
					{
						value: "03e206d0-d6e9-11ea-8546-397f48399cb9",
						text: "游戏手机"
					},
					{
						value: "22737f20-d6e9-11ea-8546-397f48399cb9",
						text: "以旧换新"
					},
					{
						value: "ef79ea90-d6e9-11ea-90a3-f3961652479d",
						text: "轻薄本"
					}
				],

				classifyDetailList: [
					{
						id: "d977cc10-dd3a-11ea-a00f-b1cb47de4c5d",
						name: "苹果",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/b4debccf74e1bf80987b9ef7d26eb410.png",
						addtime: "2020-08-13T07:59:01.457Z",
						sta: 0,
						orderby: 15,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "befe25f0-dd3a-11ea-a00f-b1cb47de4c5d",
						name: "酷派",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/821e618ed09bd7362bebcd67f95b6e5a.png",
						addtime: "2020-08-13T07:58:17.039Z",
						sta: 0,
						orderby: 14,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "a3ce2820-dd3a-11ea-a00f-b1cb47de4c5d",
						name: "联想",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/eb68dcff099c697cdb236e10ac6ba2a0.png",
						addtime: "2020-08-13T07:57:31.426Z",
						sta: 0,
						orderby: 13,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "79d40080-dd3a-11ea-a00f-b1cb47de4c5d",
						name: "索尼",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/fbec6c3342f338a1a695767de6418043.png",
						addtime: "2020-08-13T07:56:21.000Z",
						sta: 0,
						orderby: 11,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "309abb70-dd3a-11ea-a00f-b1cb47de4c5d",
						name: "朵唯",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/257d5ee6fb64af28532c5f22e7556233.png",
						addtime: "2020-08-13T07:54:18.151Z",
						sta: 0,
						orderby: 10,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "50e57c80-dd3a-11ea-a00f-b1cb47de4c5d",
						name: "realme",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/5fd767d4c58b39e7b17b3eb9af7920cc.png",
						addtime: "2020-08-13T07:55:12.328Z",
						sta: 0,
						orderby: 10,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "144f89a0-dd3a-11ea-a00f-b1cb47de4c5d",
						name: "中兴",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/97dc81dce8c60823c8513cdc32768427.png",
						addtime: "2020-08-13T07:53:30.682Z",
						sta: 0,
						orderby: 9,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "eaef5810-dd39-11ea-a00f-b1cb47de4c5d",
						name: "努比亚",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/8736833ee903574b9195ce08befefb75.png",
						addtime: "2020-08-13T07:52:21.265Z",
						sta: 0,
						orderby: 8,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "c7639cd0-dd39-11ea-a00f-b1cb47de4c5d",
						name: "魅族",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/d33fdae7c219579f0386ecf7f7cf99cc.png",
						addtime: "2020-08-13T07:51:21.629Z",
						sta: 0,
						orderby: 7,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "abba2940-dd39-11ea-a00f-b1cb47de4c5d",
						name: "三星",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/18978148da48e5631b6f5f915ca46402.png",
						addtime: "2020-08-13T07:50:35.219Z",
						sta: 0,
						orderby: 6,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "bbe35280-dba7-11ea-8529-d94a7752ff71",
						name: "华为",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/48529743a715842f9b70b36b789b7438.png",
						addtime: "2020-08-11T07:53:24.648Z",
						sta: 1,
						orderby: 5,
						pid: "765fdbc0-dba2-11ea-a68f-873831895ca3"
					},

					{
						id: "95f335c0-dd39-11ea-a00f-b1cb47de4c5d",
						name: "小米",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/9cae1c3dbc5308072ae17e8c78e3d230.png",
						addtime: "2020-08-13T07:49:58.684Z",
						sta: 0,
						orderby: 5,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "f7cf34d0-d6e8-11ea-8546-397f48399cb9",
						name: "全面屏手机",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/59009af9b6a33a6f76ae18903fd5b877.png",
						addtime: "2020-08-05T06:57:46.653Z",
						sta: 0,
						orderby: 4,
						pid: "1"
					},

					{
						id: "765fdbc0-dba2-11ea-a68f-873831895ca3",
						name: "5G手机",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/86e180a4995c449f3c3c45495e69dc8c.png",
						addtime: "2020-08-11T07:15:40.540Z",
						sta: 1,
						orderby: 4,
						pid: "1"
					},

					{
						id: "b15d8920-dba7-11ea-8529-d94a7752ff71",
						name: "vivo",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/c7745619843e52fa2ca9b2bc573af6ce.png",
						addtime: "2020-08-11T07:53:06.994Z",
						sta: 0,
						orderby: 4,
						pid: "765fdbc0-dba2-11ea-a68f-873831895ca3"
					},

					{
						id: "7e495170-dd39-11ea-a00f-b1cb47de4c5d",
						name: "OPPO",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/32ca3a27dd5ed85402f34e815940eccf.png",
						addtime: "2020-08-13T07:49:18.983Z",
						sta: 0,
						orderby: 4,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "03e206d0-d6e9-11ea-8546-397f48399cb9",
						name: "游戏手机",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/0e842b738aa73a2db7b8582c9bf8a890.png",
						addtime: "2020-08-05T06:58:06.909Z",
						sta: 1,
						orderby: 3,
						pid: "1"
					},

					{
						id: "27ed38d0-dbab-11ea-8529-d94a7752ff71",
						name: "红米",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/ba72311913e2a2b73cd8396f1832d2eb.png",
						addtime: "2020-08-11T08:17:54.397Z",
						sta: 0,
						orderby: 3,
						pid: "765fdbc0-dba2-11ea-a68f-873831895ca3"
					},

					{
						id: "59b8d060-dd39-11ea-a00f-b1cb47de4c5d",
						name: "vivo",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/87af547c6ff2b6771186e89232fc5d11.png",
						addtime: "2020-08-13T07:48:17.638Z",
						sta: 0,
						orderby: 3,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "22737f20-d6e9-11ea-8546-397f48399cb9",
						name: "以旧换新",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/1dc6d1fad3d850332078348c20c1d2c9.png",
						addtime: "2020-08-05T06:58:58.194Z",
						sta: 1,
						orderby: 2,
						pid: "1"
					},

					{
						id: "2a2e8e70-dd39-11ea-a00f-b1cb47de4c5d",
						name: "荣耀手机",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/479e0616617ac4f53da5511a20943f4f.png",
						addtime: "2020-08-13T07:46:57.879Z",
						sta: 0,
						orderby: 2,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "3bfad600-d6e9-11ea-8546-397f48399cb9",
						name: "黑鲨",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/4c80a7da2a728008fcfc320cb0b10e72.png",
						addtime: "2020-08-05T06:59:41.024Z",
						sta: 0,
						orderby: 1,
						pid: "03e206d0-d6e9-11ea-8546-397f48399cb9"
					},

					{
						id: "ef79ea90-d6e9-11ea-90a3-f3961652479d",
						name: "轻薄本",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/14d14b5346419666e2de8d2cb0f1f682.png",
						addtime: "2020-08-05T07:04:42.169Z",
						sta: 0,
						orderby: 1,
						pid: "1"
					},

					{
						id: "f9b84ab0-d6e9-11ea-90a3-f3961652479d",
						name: "联想小新",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/14d14b5346419666e2de8d2cb0f1f682.png",
						addtime: "2020-08-05T07:04:59.355Z",
						sta: 0,
						orderby: 1,
						pid: "ef79ea90-d6e9-11ea-90a3-f3961652479d"
					},

					{
						id: "f8156440-dd38-11ea-a00f-b1cb47de4c5d",
						name: "华为",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/004cf8d697ced4481f35c75892983ff9.png",
						addtime: "2020-08-13T07:45:33.827Z",
						sta: 0,
						orderby: 1,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "f069ab00-dd3a-11ea-a00f-b1cb47de4c5d",
						name: "飞利浦",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/638c015a52cfe201c5c1b63ab1d72355.png",
						addtime: "2020-08-13T07:59:39.952Z",
						sta: 0,
						orderby: 1,
						pid: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					},

					{
						id: "a0532ad0-dd3d-11ea-a00f-b1cb47de4c5d",
						name: "iPhone",
						icon:
							"http://a5acb3a72579f0bf5f6c.qiniucdn.apicloud-system.com/apicloud/73fced1ed2d9832b3da557e362aa2a61.png",
						addtime: "2020-08-13T08:18:54.077Z",
						sta: 0,
						orderby: 1,
						pid: "22737f20-d6e9-11ea-8546-397f48399cb9"
					}
				]
			};
		}

		if (Component) TemplateSgmSortList.__proto__ = Component;
		TemplateSgmSortList.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateSgmSortList.prototype.constructor = TemplateSgmSortList;
		TemplateSgmSortList.prototype.apiready = function() {};
		TemplateSgmSortList.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("hoc-nav-bar-sgm", {title: "分类", isShowBack: true}),
				apivm.h(
					"view",
					{class: "sort-container"},
					apivm.h("hoc-slide-bar-sgm", {
						sideBarList: this.data.hocSlideBarSgmSideBarList,
						curTab: "f7cf34d0-d6e8-11ea-8546-397f48399cb9"
					}),
					apivm.h("hoc-classify-list-sgm", {
						classDetailList: this.data.classifyDetailList
					})
				)
			);
		};

		return TemplateSgmSortList;
	})(Component);
	TemplateSgmSortList.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"},
		".sort-container": {flex: "1", flexDirection: "row"}
	};
	apivm.define("template-sgm-sort_list", TemplateSgmSortList);
	apivm.render(apivm.h("template-sgm-sort_list", null), "body");
})();
