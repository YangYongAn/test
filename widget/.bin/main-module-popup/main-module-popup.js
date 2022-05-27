(function() {
	var MainModulePopup = /*@__PURE__*/ (function(Component) {
		function MainModulePopup(props) {
			Component.call(this, props);
			this.data = {};
			this.compute = {
				info: function() {
					return api.pageParam.info;
				},
				platformList: function() {
					var list = [];
					var mdPlatform = api.pageParam.info.mdPlatform || null;
					var android = [
						{
							icon: "../../image/android-icon.png",
							text: "Android"
						}
					];

					var ios = [
						{
							icon: "../../image/ios-icon.png",
							text: "ios"
						}
					];

					var applet = [
						{
							icon: "http://www.apicloud.com/img/moduledetail/miniprogram.png",
							text: "小程序"
						}
					];

					var h5 = [
						{
							icon: "http://www.apicloud.com/img/moduledetail/h5.png",
							text: "H5"
						}
					];

					if (mdPlatform === 0) {
						list = ios;
					} else if (mdPlatform === 2) {
						list = [].concat(android, ios);
					} else if (mdPlatform === 10) {
						list = [].concat(android, ios, applet);
					} else if (mdPlatform === 11) {
						list = [].concat(android, ios, h5);
					} else if (mdPlatform === 14) {
						list = [].concat(android, ios, applet, h5);
					}
					return list;
				},
				icon: function() {},
				text: function() {}
			};
		}

		if (Component) MainModulePopup.__proto__ = Component;
		MainModulePopup.prototype = Object.create(Component && Component.prototype);
		MainModulePopup.prototype.constructor = MainModulePopup;
		MainModulePopup.prototype.apiready = function() {};
		MainModulePopup.prototype.closeFrame = function() {
			api.closeFrame({
				name: "module-detail"
			});
		};
		MainModulePopup.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "main-module-popup"},
				apivm.h("view", {class: "mask-layout", onClick: this.closeFrame}),
				apivm.h(
					"view",
					{class: "main-module-popup-con"},
					apivm.h(
						"view",
						{class: "module-popup-top"},
						apivm.h("img", {
							class: "module-popup-top-left",
							src: this.info.icon_path,
							alt: "info.mdId"
						}),
						apivm.h(
							"view",
							{class: "module-popup-top-right"},
							apivm.h("text", {class: "module-popup-name"}, this.info.mdName),
							apivm.h(
								"view",
								{class: "module-popup-desc"},
								apivm.h(
									"text",
									{class: "module-popup-desc-text"},
									"V",
									this.info.mdVer
								),
								apivm.h("img", {
									src: "../../image/module-people-icon.png",
									alt: "people",
									class: "module-popup-icon"
								}),
								apivm.h(
									"text",
									{class: "module-popup-desc-text"},
									this.info.userName,
									"提供"
								)
							)
						)
					),
					apivm.h("text", {class: "module-popup-title"}, "适配平台"),
					apivm.h(
						"view",
						{class: "module-popup-platform"},
						(Array.isArray(this.platformList)
							? this.platformList
							: Object.values(this.platformList)
						).map(function(item$1) {
							return apivm.h(
								"view",
								{class: "module-popup-platform-item", key: item$1.text},
								apivm.h("img", {
									class: "module-popup-platform-icon",
									src: item$1.icon,
									alt: item$1.text
								}),
								apivm.h("text", {class: "module-popup-platform-text"}, item$1.text)
							);
						})
					),
					apivm.h("text", {class: "module-popup-title"}, "模块概述"),
					apivm.h("text", {class: "module-popup-overview"}, this.info.outline),
					apivm.h(
						"view",
						{class: "close-con", onClick: this.closeFrame},
						apivm.h("img", {
							src: "../../image/down-arrow.png",
							alt: "down-arrow",
							class: "close-con-icon"
						})
					)
				)
			);
		};

		return MainModulePopup;
	})(Component);
	MainModulePopup.css = {
		".main-module-popup": {width: "100%", height: "100%"},
		".mask-layout": {
			position: "absolute",
			left: "0",
			top: "0",
			bottom: "0",
			right: "0",
			background: "rgba(0, 0, 0, 0.5)",
			zIndex: "1"
		},
		".main-module-popup-con": {
			zIndex: "999",
			position: "absolute",
			left: "0",
			right: "0",
			bottom: "0",
			borderRadius: "10px 10px 0 0",
			background: "#fff",
			padding: "16px"
		},
		".module-popup-top": {
			display: "flex",
			flexDirection: "row",
			marginBottom: "26px"
		},
		".module-popup-top-left": {
			width: "82px",
			height: "60px",
			flexShrink: "0",
			marginRight: "16px"
		},
		".module-popup-top-right": {flex: "1"},
		".module-popup-name": {
			fontSize: "18px",
			fontWeight: "500",
			color: "#333",
			lineHeight: "25px"
		},
		".module-popup-desc": {
			marginTop: "16px",
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		},
		".module-popup-desc-text": {
			fontSize: "12px",
			color: "#999",
			marginRight: "16px"
		},
		".module-popup-icon": {width: "12px", height: "12px", marginRight: "4px"},
		".module-popup-title": {
			fontSize: "15px",
			color: "#333",
			fontWeight: "500",
			padding: "24px 0 10px"
		},
		".module-popup-platform": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		},
		".module-popup-platform-item": {
			marginRight: "16px",
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		},
		".module-popup-platform-icon": {
			width: "16px",
			height: "16px",
			marginRight: "4px"
		},
		".module-popup-platform-text": {
			fontSize: "14px",
			color: "#666",
			fontWeight: "400",
			lineHeight: "24px"
		},
		".module-popup-overview": {
			fontSize: "14px",
			color: "#666",
			lineHeight: "24px",
			fontWeight: "400"
		},
		".close-con": {
			padding: "30px 0",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		".close-con-icon": {width: "24px", height: "24px"}
	};
	apivm.define("main-module-popup", MainModulePopup);
	apivm.render(apivm.h("main-module-popup", null), "body");
})();
