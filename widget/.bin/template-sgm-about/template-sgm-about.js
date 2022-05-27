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

	var HocAboutusSgm = /*@__PURE__*/ (function(Component) {
		function HocAboutusSgm(props) {
			Component.call(this, props);
			this.data = {
				image:
					this.props.image !== undefined
						? this.props.image
						: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/4bb17d1e558c34b813965d8b35e05407.png",
				title: this.props.title !== undefined ? this.props.title : "拼团商城",
				version: this.props.version !== undefined ? this.props.version : "1.0.98",
				url: this.props.url !== undefined ? this.props.url : "www.apicloud.com"
			};
		}

		if (Component) HocAboutusSgm.__proto__ = Component;
		HocAboutusSgm.prototype = Object.create(Component && Component.prototype);
		HocAboutusSgm.prototype.constructor = HocAboutusSgm;
		HocAboutusSgm.prototype.apiready = function() {};
		HocAboutusSgm.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "about-us"},
				apivm.h("img", {class: "about-us-logo", src: this.data.image}),
				apivm.h("text", {class: "about-us-name"}, this.data.title),
				apivm.h("text", {class: "about-us-version"}, this.data.version),
				apivm.h("text", {class: "about-us-url"}, this.data.url)
			);
		};

		return HocAboutusSgm;
	})(Component);
	HocAboutusSgm.css = {
		".about-us": {alignItems: "center", width: "100%"},
		".about-us-logo": {
			width: "100px",
			height: "100px",
			borderRadius: "8px",
			marginTop: "50px",
			backgroundColor: "#c3c6cd"
		},
		".about-us-name": {fontSize: "20px", fontWeight: "bold", marginTop: "10px"},
		".about-us-version": {fontSize: "16px", marginTop: "4px", color: "#666666"},
		".about-us-url": {fontSize: "14px", marginTop: "10px", color: "#999999"}
	};
	apivm.define("hoc-aboutus-sgm", HocAboutusSgm);

	var TemplateSgmAbout = /*@__PURE__*/ (function(Component) {
		function TemplateSgmAbout(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) TemplateSgmAbout.__proto__ = Component;
		TemplateSgmAbout.prototype = Object.create(Component && Component.prototype);
		TemplateSgmAbout.prototype.constructor = TemplateSgmAbout;
		TemplateSgmAbout.prototype.apiready = function() {};
		TemplateSgmAbout.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("hoc-nav-bar-sgm", {
					isShowBack: true,
					title: "关于我们",
					version: "1.0.98",
					image:
						"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/4bb17d1e558c34b813965d8b35e05407.png",
					url: "www.apicloud.com"
				}),
				apivm.h("hoc-aboutus-sgm", {
					title: "拼团商城",
					version: "1.0.98",
					url: "www.apicloud.com"
				})
			);
		};

		return TemplateSgmAbout;
	})(Component);
	TemplateSgmAbout.css = {".page": {height: "100%", backgroundColor: "#f8f8f8"}};
	apivm.define("template-sgm-about", TemplateSgmAbout);
	apivm.render(apivm.h("template-sgm-about", null), "body");
})();
