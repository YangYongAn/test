(function() {
	var HocAboutUsEs = /*@__PURE__*/ (function(Component) {
		function HocAboutUsEs(props) {
			Component.call(this, props);
			this.data = {
				html_detail:
					this.props.html_detail !== undefined
						? this.props.html_detail
						: "<div><span style='color: #222222; font-size: 18px;'>柚子深山茶叶有限公司</span></div>\n<div><span style='color: #888888; font-size: 14px;'>北京市朝阳区中关村科技园区电子城科技园A1座2层</span></div>\n<div><span style='color: #888888; font-size: 14px;'>www.apicloud.com</span></div>\n<div><span style='color: #888888; font-size: 14px; display: block;'>18642511611</span></div>"
			};
		}

		if (Component) HocAboutUsEs.__proto__ = Component;
		HocAboutUsEs.prototype = Object.create(Component && Component.prototype);
		HocAboutUsEs.prototype.constructor = HocAboutUsEs;
		HocAboutUsEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "about"},
				apivm.h("rich-text", {nodes: this.data.html_detail})
			);
		};

		return HocAboutUsEs;
	})(Component);
	apivm.define("hoc-about-us-es", HocAboutUsEs);

	var HocCompanyDetailEs = /*@__PURE__*/ (function(Component) {
		function HocCompanyDetailEs(props) {
			Component.call(this, props);
			this.data = {
				html_detail:
					this.props.html_detail !== undefined
						? this.props.html_detail
						: '<img src="http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/049597870908fc92d2fe5f19541cfa1c.png" alt="detail"/>'
			};
		}

		if (Component) HocCompanyDetailEs.__proto__ = Component;
		HocCompanyDetailEs.prototype = Object.create(
			Component && Component.prototype
		);
		HocCompanyDetailEs.prototype.constructor = HocCompanyDetailEs;
		HocCompanyDetailEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "company-detail"},
				apivm.h("rich-text", {nodes: this.data.html_detail})
			);
		};

		return HocCompanyDetailEs;
	})(Component);
	apivm.define("hoc-company-detail-es", HocCompanyDetailEs);

	var HocAdvantageListEs = /*@__PURE__*/ (function(Component) {
		function HocAdvantageListEs(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d42370efd94ba8249e8e24c96e154313.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/b6c101bcfbe547e0dc85545342764074.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/644f407f24cd192913be807488572c2d.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/39d0bf6bea912a5380d5b9a7c2c77d95.png"
				]
			};
			this.compute = {
				cateItemWidth: function() {
					return parseInt((api.winWidth - 40) / 2);
				}
			};
		}

		if (Component) HocAdvantageListEs.__proto__ = Component;
		HocAdvantageListEs.prototype = Object.create(
			Component && Component.prototype
		);
		HocAdvantageListEs.prototype.constructor = HocAdvantageListEs;
		HocAdvantageListEs.prototype.apiready = function() {};
		HocAdvantageListEs.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "advantage-list"},
				apivm.h(
					"view",
					{class: "cate"},
					(Array.isArray(this.data.list)
						? this.data.list
						: Object.values(this.data.list)
					).map(function(item$1, index$1) {
						return apivm.h(
							"view",
							{
								style:
									"width:" +
									this$1.cateItemWidth +
									"px;height:" +
									this$1.cateItemWidth * 0.41 +
									"px;",
								class: "cate-item"
							},
							apivm.h("image", {class: "cate-img", src: item$1})
						);
					})
				)
			);
		};

		return HocAdvantageListEs;
	})(Component);
	HocAdvantageListEs.css = {
		".cate": {flexDirection: "row", flexWrap: "wrap", padding: "0 7px 10px 15px"},
		".cate-item": {
			marginRight: "8px",
			marginBottom: "4px",
			boxShadow: "0 3px 5px 2px #f1f1f1"
		},
		".cate-img": {
			width: "100%",
			height: "100%",
			borderRadius: "8px",
			border: "1px solid #f1f1f1"
		}
	};
	apivm.define("hoc-advantage-list-es", HocAdvantageListEs);

	var HocBannerListEs = /*@__PURE__*/ (function(Component) {
		function HocBannerListEs(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c44fc5c4b158c96b414f55ac12562be2.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/aae0244b645bcf2b0ea70dfde8da8e47.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d6f008eb12663454510e42dbe3038e7b.png"
				]
			};
			this.compute = {
				swiperHeight: function() {
					return api.winWidth * 0.42;
				}
			};
		}

		if (Component) HocBannerListEs.__proto__ = Component;
		HocBannerListEs.prototype = Object.create(Component && Component.prototype);
		HocBannerListEs.prototype.constructor = HocBannerListEs;
		HocBannerListEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "banner"},
				apivm.h(
					"view",
					{class: "swiper-box"},
					apivm.h(
						"swiper",
						{
							class: "swiper",
							autoplay: true,
							"indicator-dots": true,
							"indicator-color": "rgba(255,255,255,0.2)",
							"indicator-active-color": "rgba(51,51,51,1)"
						},
						(Array.isArray(this.data.list)
							? this.data.list
							: Object.values(this.data.list)
						).map(function(item_, index_) {
							return apivm.h(
								"swiper-item",
								{"data-index": index_},
								apivm.h("image", {
									src: item_,
									class: "banner-image",
									mode: "aspectFill"
								})
							);
						})
					)
				)
			);
		};

		return HocBannerListEs;
	})(Component);
	HocBannerListEs.css = {
		".swiper-box": {width: "100%", height: "148px", margin: "12px 0"},
		".swiper": {width: "100%", height: "100%", borderRadius: "8px"},
		".banner-image": {width: "100%", height: "148px"}
	};
	apivm.define("hoc-banner-list-es", HocBannerListEs);

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

	var TemplateEsMain = /*@__PURE__*/ (function(Component) {
		function TemplateEsMain(props) {
			Component.call(this, props);
			this.data = {
				// 顶部导航
				navText: "首页",
				// 轮播图列表
				bannersList: [
					"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/c44fc5c4b158c96b414f55ac12562be2.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/aae0244b645bcf2b0ea70dfde8da8e47.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d6f008eb12663454510e42dbe3038e7b.png"
				],

				// 优势列表
				advantageList: [
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d42370efd94ba8249e8e24c96e154313.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/b6c101bcfbe547e0dc85545342764074.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/644f407f24cd192913be807488572c2d.png",
					"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/39d0bf6bea912a5380d5b9a7c2c77d95.png"
				],
				// 企业详情
				product_description:
					'<img style="width: 100%;" src="http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/049597870908fc92d2fe5f19541cfa1c.png" alt="detail"/>\n',
				// 关于我们
				about_us:
					"<div><span style='color: #222222; font-size: 18px;'>柚子深山茶叶有限公司</span></div>\n<div><span style='color: #888888; font-size: 14px;'>北京市朝阳区中关村科技园区电子城科技园A1座2层</span></div>\n<div><span style='color: #888888; font-size: 14px;'>www.apicloud.com</span></div>\n<div><span style='color: #888888; font-size: 14px; display: block;'>18642511611</span></div>"
			};
		}

		if (Component) TemplateEsMain.__proto__ = Component;
		TemplateEsMain.prototype = Object.create(Component && Component.prototype);
		TemplateEsMain.prototype.constructor = TemplateEsMain;
		TemplateEsMain.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h("hoc-nav-bar-es", {msg: this.data.navText}),
				apivm.h(
					"scroll-view",
					{"scroll-y": true},

					apivm.h("hoc-banner-list-es", {list: this.data.bannersList}),

					apivm.h("hoc-advantage-list-es", {list: this.data.advantageList}),

					apivm.h("hoc-company-detail-es", {
						html_detail: this.data.product_description
					}),

					apivm.h("hoc-about-us-es", {html_detail: this.data.about_us})
				)
			);
		};

		return TemplateEsMain;
	})(Component);
	TemplateEsMain.css = {
		".page": {height: "100%", backgroundColor: "#fff"},
		"scroll-view": {height: "100%"}
	};
	apivm.define("template-es-main", TemplateEsMain);
	apivm.render(apivm.h("template-es-main", null), "body");
})();
