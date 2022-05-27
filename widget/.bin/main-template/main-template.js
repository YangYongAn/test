(function() {
	var MainTemplate = /*@__PURE__*/ (function(Component) {
		function MainTemplate(props) {
			Component.call(this, props);
			this.data = {
				curTab: 0,
				dataList: [
					{
						img: "template_es",
						name: "企业展示",
						project: "es",
						bgColor: "linear-gradient(to bottom, rgba(223, 238, 192, 0.1), #fff)"
					},

					{
						img: "template_refresh",
						name: "生鲜电商",
						project: "fre",
						bgColor: "linear-gradient(to bottom, #FEF6EC, #fff)"
					},

					{
						img: "template_ts",
						name: "堂食点餐",
						project: "of",
						bgColor: "linear-gradient(to bottom, rgba(245, 130, 130, 0.1), #fff)"
					},

					{
						img: "template_et",
						name: "教育培训",
						project: "et",
						bgColor: "linear-gradient(to bottom, rgba(119, 195, 255, 0.1), #fff)"
					},

					{
						img: "template_od",
						name: "线上服饰",
						project: "od",
						bgColor: "linear-gradient(to bottom, #F6F6F6, #fff)"
					},

					{
						img: "template_sgm",
						name: "拼团商城",
						project: "sgm",
						bgColor: "linear-gradient(to bottom, rgba(255, 203, 203, 0.1), #fff)"
					}
				],

				current: 0
			};
		}

		if (Component) MainTemplate.__proto__ = Component;
		MainTemplate.prototype = Object.create(Component && Component.prototype);
		MainTemplate.prototype.constructor = MainTemplate;
		MainTemplate.prototype.onchange = function(e) {
			this.data.curTab = e.detail.current;
		};
		MainTemplate.prototype.rightNowExperience = function() {
			var project = this.data.dataList[this.data.curTab].project;
			api.openWin({
				name: project,
				url: "../template-" + project + "/template-" + project + ".stml"
			});
		};
		MainTemplate.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{
					class: "main-template",
					style: "background: " + this.data.dataList[this.data.curTab].bgColor
				},
				apivm.h(
					"swiper",
					{class: "main-template-swiper", autoplay: true, onchange: this.onchange},
					(Array.isArray(this.data.dataList)
						? this.data.dataList
						: Object.values(this.data.dataList)
					).map(function(item$1, index$1) {
						return apivm.h(
							"swiper-item",
							{class: "main-template-item"},
							apivm.h("image", {
								src: "../../image/" + item$1.img + ".png",
								alt: "templateImg",
								class: "main-template-item-img",
								mode: "aspectFill"
							}),
							apivm.h("text", {class: "main-template-item-text"}, item$1.name, "模板")
						);
					})
				),
				apivm.h(
					"view",
					{class: "main-template-page-indicator"},
					(Array.isArray(this.data.dataList)
						? this.data.dataList
						: Object.values(this.data.dataList)
					).map(function(item$1, index$1) {
						return apivm.h("text", {
							class:
								"main-template-page-indicator-item " +
								(index$1 === this$1.data.curTab
									? "main-template-page-indicator-item-active"
									: "")
						});
					})
				),
				apivm.h(
					"view",
					{class: "experience"},
					apivm.h(
						"text",
						{class: "experience-btn", onClick: this.rightNowExperience},
						"立刻体验"
					)
				)
			);
		};

		return MainTemplate;
	})(Component);
	MainTemplate.css = {
		".main-template": {width: "100%", height: "100%", alignItems: "center"},
		".main-template-swiper": {width: "100%", height: "635px"},
		".main-template-item-img": {
			width: "100%",
			height: "490px",
			borderRadius: "6px",
			marginTop: "71px",
			padding: "0 32px"
		},
		".main-template-item-text": {
			width: "100%",
			textAlign: "center",
			fontSize: "17px",
			color: "#000",
			fontWeight: "500",
			margin: "24px 0"
		},
		".main-template-page-indicator": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			margin: "0 auto"
		},
		".main-template-page-indicator-item": {
			width: "5px",
			height: "5px",
			background: "#eee",
			borderRadius: "3px",
			margin: "0 2.5px"
		},
		".main-template-page-indicator-item-active": {
			background: "#9ac200",
			width: "7px",
			height: "7px",
			borderRadius: "4px"
		},
		".experience": {
			margin: "25px 0 31px",
			width: "125px",
			height: "36px",
			border: "1px solid #9ac200",
			borderRadius: "20px",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center"
		},
		".experience-btn": {color: "#9ac200", fontSize: "14px", fontWeight: "400"}
	};
	apivm.define("main-template", MainTemplate);
	apivm.render(apivm.h("main-template", null), "body");
})();
