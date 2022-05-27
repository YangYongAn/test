(function() {
	var MainModule = /*@__PURE__*/ (function(Component) {
		function MainModule(props) {
			Component.call(this, props);
			this.data = {
				isShowShadow: false,
				moduleList: [],
				isLoading: false
			};
		}

		if (Component) MainModule.__proto__ = Component;
		MainModule.prototype = Object.create(Component && Component.prototype);
		MainModule.prototype.constructor = MainModule;
		MainModule.prototype.apiready = function() {
			//like created
			this.getModuleList(0, 200);
		};
		MainModule.prototype.handleScroll = function(e) {
			if (e.detail.scrollTop > 0) {
				this.data.isShowShadow = true;
			} else {
				this.data.isShowShadow = false;
			}
		};
		MainModule.prototype.getModuleDetail = function(item) {
			api.ajax(
				{
					url: "https://www.apicloud.com/getMdInfo?mdId=" + item.mdId
				},
				function(ret, err) {
					if (ret && ret.status === 1) {
						api.openFrame({
							name: "module-detail",
							url: "../main-module-popup/main-module-popup.stml",
							pageParam: {
								info: ret.body
							}
						});
					}
				}
			);
		};
		MainModule.prototype.getModuleList = function(startNum, size) {
			var this$1 = this;

			this.data.isLoading = true;
			api.ajax(
				{
					url:
						"http://www.apicloud.com/getAllMdStore?startNum=" +
						startNum +
						"&size=" +
						size +
						"&platform=-1&type=13&subclass=2&order=1&searchByName=false&searchName=&isfree=-1&provider=-1&green_diamond=-1&green_vip=-1&_=1653015055350"
				},
				function(ret, err) {
					this$1.data.moduleList = ret && ret.body ? ret.body : [];
					this$1.data.isLoading = false;
				}
			);
		};
		MainModule.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "main-module"},
				apivm.h(
					"view",
					{
						class:
							"main-module-title " +
							(this.data.isShowShadow === true ? "main-module-title-shadow" : "")
					},
					apivm.h("text", {class: "main-module-title-inner"}, "原生模块")
				),
				apivm.h(
					"scroll-view",
					{
						class: "main-module-content",
						"show-scrollbar": false,
						"scroll-y": true,
						onScroll: this.handleScroll
					},
					(Array.isArray(this.data.moduleList)
						? this.data.moduleList
						: Object.values(this.data.moduleList)
					).map(function(item$1, index$1) {
						return apivm.h(
							"view",
							{
								key: index$1,
								class: "main-module-item",
								onClick: function() {
									return this$1.getModuleDetail(item$1);
								}
							},
							apivm.h("img", {src: item$1.icon_path, class: "main-module-item-img"}),
							apivm.h("text", {class: "main-module-item-title"}, item$1.mdName),
							apivm.h(
								"view",
								{class: "main-module-item-number"},
								apivm.h("img", {
									src: "../../image/phone.png",
									alt: "phone",
									class: "main-module-item-number-icon"
								}),
								apivm.h("text", {class: "main-module-item-number-text"}, item$1.num)
							)
						);
					})
				),
				this.data.isLoading
					? apivm.h(
							"view",
							{class: "loading-con"},
							apivm.h("img", {
								class: "loading-icon",
								src: "../../image/loading_more.gif",
								alt: "loading"
							})
					  )
					: null
			);
		};

		return MainModule;
	})(Component);
	MainModule.css = {
		".main-module": {width: "100%", height: "100%", background: "#fff"},
		".main-module-title": {
			width: "100%",
			textAlign: "center",
			padding: "22px 0 10px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		".main-module-title-inner": {
			fontSize: "17px",
			color: "#000",
			lineHeight: "24px",
			fontWeight: "500"
		},
		".main-module-content": {
			marginTop: "10px",
			flex: "1",
			width: "100%",
			height: "100%",
			padding: "0 16px",
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "space-between"
		},
		".main-module-item": {
			boxSizing: "border-box",
			width: "50%",
			marginBottom: "17px",
			padding: "8px"
		},
		".main-module-item-img": {
			width: "auto",
			height: "122px",
			borderRadius: "8px"
		},
		".main-module-item-title": {
			padding: "6px 8px 9px",
			fontSize: "16px",
			fontWeight: "500"
		},
		".main-module-item-number": {
			flexDirection: "row",
			alignItems: "center",
			padding: "0 8px",
			fontSize: "12px",
			fontWeight: "400"
		},
		".main-module-item-number-icon": {
			width: "12px",
			height: "12px",
			marginRight: "4px"
		},
		".main-module-item-number-text": {
			fontSize: "12px",
			color: "#999",
			fontWeight: "400",
			lineHeight: "17px"
		},
		".loading-con": {
			width: "100%",
			height: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		".loading-icon": {width: "30px", height: "30px"}
	};
	apivm.define("main-module", MainModule);
	apivm.render(apivm.h("main-module", null), "body");
})();
