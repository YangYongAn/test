(function() {
	var HocInfoDetailEs = /*@__PURE__*/ (function(Component) {
		function HocInfoDetailEs(props) {
			Component.call(this, props);
			this.data = {
				html_detail:
					this.props.html_detail !== undefined
						? this.props.html_detail
						: [
								{
									value:
										"<div style='display: block; margin-bottom: 12px;'><span style='color: #6d6d6d; font-size: 14px; line-height: 24px; display: block;'>「茶事分享」一款红茶醉了心</span></div>"
								},
								{
									value:
										"<div style='display: block;'><span style='color: #6d6d6d; font-size: 14px; line-height: 24px; display: block;'>茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。</span></div>"
								},
								{
									value:
										"<div style='display: block;'><span style='color: #6d6d6d; font-size: 14px; line-height: 24px; display: block;'><img style='width: 100%;' src='http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/088027e418a92d499df3067228bcd536.png'/></span></div>"
								},
								{
									value:
										"<div style='display: block;'><span style='color: #6d6d6d; font-size: 14px; line-height: 24px; display: block;'>发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品种和制作方式以及产品外形分成六大类。依据季节采制可分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用保健茶、茶食品、含茶饮料等。</span></div>"
								}
						  ]
			};
		}

		if (Component) HocInfoDetailEs.__proto__ = Component;
		HocInfoDetailEs.prototype = Object.create(Component && Component.prototype);
		HocInfoDetailEs.prototype.constructor = HocInfoDetailEs;
		HocInfoDetailEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "detail-content"},
				(Array.isArray(this.data.html_detail)
					? this.data.html_detail
					: Object.values(this.data.html_detail)
				).map(function(item$1) {
					return apivm.h("rich-text", {nodes: item$1.value});
				})
			);
		};

		return HocInfoDetailEs;
	})(Component);
	HocInfoDetailEs.css = {
		".detail": {height: "100%"},
		".detail-content": {flex: "1", backgroundColor: "#fff", padding: "10px 15px"}
	};
	apivm.define("hoc-info-detail-es", HocInfoDetailEs);

	var HocInfoTitleEs = /*@__PURE__*/ (function(Component) {
		function HocInfoTitleEs(props) {
			Component.call(this, props);
			this.data = {
				title: this.props.title || "创业夫妻加盟66天，门店已经排起了长龙",
				date: this.props.date || "2020-08-24 14:37:20"
			};
		}

		if (Component) HocInfoTitleEs.__proto__ = Component;
		HocInfoTitleEs.prototype = Object.create(Component && Component.prototype);
		HocInfoTitleEs.prototype.constructor = HocInfoTitleEs;
		HocInfoTitleEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "info-title"},
				apivm.h("text", {class: "title-text"}, this.data.title),
				apivm.h("text", {class: "date-text"}, this.data.date)
			);
		};

		return HocInfoTitleEs;
	})(Component);
	HocInfoTitleEs.css = {
		".info-title": {
			padding: "10px 15px",
			backgroundColor: "#fff",
			marginBottom: "5px"
		},
		".title-text": {color: "#262626", fontSize: "18px"},
		".date-text": {marginTop: "5px", color: "#999", fontSize: "12px"}
	};
	apivm.define("hoc-info-title-es", HocInfoTitleEs);

	var HocNavBarEs = /*@__PURE__*/ (function(Component) {
		function HocNavBarEs(props) {
			Component.call(this, props);
			this.data = {
				msg: this.props.msg || "首页",
				isBack: this.props.isBack || false
			};
		}

		if (Component) HocNavBarEs.__proto__ = Component;
		HocNavBarEs.prototype = Object.create(Component && Component.prototype);
		HocNavBarEs.prototype.constructor = HocNavBarEs;
		HocNavBarEs.prototype.closeWin = function() {
			api.closeWin();
		};
		HocNavBarEs.prototype.render = function() {
			return apivm.h(
				"safe-area",
				null,
				apivm.h(
					"view",
					{class: "nav-bar"},
					this.data.isBack
						? apivm.h(
								"view",
								{class: "nav-bar-back", onClick: this.closeWin},
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

		return HocNavBarEs;
	})(Component);
	HocNavBarEs.css = {
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
		".nav-bar-text": {fontSize: "20px", color: "#333"}
	};
	apivm.define("hoc-nav-bar-es", HocNavBarEs);

	var TemplateEsDetail = /*@__PURE__*/ (function(Component) {
		function TemplateEsDetail(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateEsDetail.__proto__ = Component;
		TemplateEsDetail.prototype = Object.create(Component && Component.prototype);
		TemplateEsDetail.prototype.constructor = TemplateEsDetail;
		TemplateEsDetail.prototype.apiready = function() {};
		TemplateEsDetail.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-nav-bar-es", {msg: "案例详情", isBack: true}),
				apivm.h("hoc-info-title-es", null),
				apivm.h("hoc-info-detail-es", null)
			);
		};

		return TemplateEsDetail;
	})(Component);
	TemplateEsDetail.css = {".page": {height: "100%", backgroundColor: "#f8f8f8"}};
	apivm.define("template-es-detail", TemplateEsDetail);
	apivm.render(apivm.h("template-es-detail", null), "body");
})();
