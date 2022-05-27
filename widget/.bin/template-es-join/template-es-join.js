(function() {
	var HocJoinFormEs = /*@__PURE__*/ (function(Component) {
		function HocJoinFormEs(props) {
			Component.call(this, props);
			this.data = {
				placeholderName:
					this.props.placeholderName !== undefined
						? this.props.placeholderName
						: "请输入您的姓名",
				valueName: this.props.valueName || "",
				placeholderPhone:
					this.props.placeholderPhone !== undefined
						? this.props.placeholderPhone
						: "请输入您的手机号",
				valuePhone: this.props.valuePhone !== undefined ? this.props.valuePhone : ""
			};
		}

		if (Component) HocJoinFormEs.__proto__ = Component;
		HocJoinFormEs.prototype = Object.create(Component && Component.prototype);
		HocJoinFormEs.prototype.constructor = HocJoinFormEs;
		HocJoinFormEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "from"},
				apivm.h("text", {class: "f-join-title"}, "申请加盟"),
				apivm.h("text", {class: "f-join-msg"}, "提交联系方式，加盟顾问1V1服务"),
				apivm.h(
					"view",
					{class: "f-input-box"},
					apivm.h("input", {
						class: "f-input",
						type: "text",
						maxlength: "10",
						value: this.data.valueName,
						placeholder: this.data.placeholderName
					})
				),
				apivm.h(
					"view",
					{class: "f-input-box"},
					apivm.h("input", {
						class: "f-input",
						type: "number",
						"keyboard-type": "number",
						value: this.data.valuePhone,
						placeholder: this.data.placeholderPhone,
						maxlength: "11"
					})
				),
				apivm.h("button", {class: "f-btn"}, "提交")
			);
		};

		return HocJoinFormEs;
	})(Component);
	HocJoinFormEs.css = {
		".from": {padding: "10px 15px 27px", backgroundColor: "#fff", top: "-4px"},
		".f-join-title": {color: "#333", fontSize: "16px", fontWeight: "bold"},
		".f-join-msg": {
			color: "#999",
			fontSize: "12px",
			marginTop: "10px",
			marginBottom: "20px"
		},
		".f-input-box": {
			padding: "15px 11px",
			background: "rgba(239, 239, 239, 0.7)",
			borderRadius: "10px",
			marginBottom: "10px"
		},
		".f-input": {
			width: "100%",
			color: "#333",
			fontSize: "13px",
			backgroundColor: "transparent",
			border: "none"
		},
		".f-btn": {
			width: "100%",
			height: "44px",
			background: "rgba(92, 135, 255, 1)",
			borderRadius: "5px",
			color: "#fff",
			fontSize: "16px",
			padding: "0",
			marginTop: "10px"
		},
		".btn-gray": {background: "#cccccc"}
	};
	apivm.define("hoc-join-form-es", HocJoinFormEs);

	var HocSortContentEs = /*@__PURE__*/ (function(Component) {
		function HocSortContentEs(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						id: "1",
						title: "代理政策",
						content:
							'<div class="p1" style="margin-top: 0; "><span style="color: #6d6d6d; font-size: 14px; line-height: 24px; display: block; ">丹东凤凰山自古有辽东第一山的美誉。常年吸引全国各地游客前来观赏。山上的泉水清甜甘洌，是大自然对于小镇市民最好的馈赠。而老毕纯粮就坐落在凤凰山脚下，坚持纯粮酿造，借凤凰山名号可以作为特产出售。我们不生产酒，我们只是大自然的搬运工。</span></div>\n<div class="p1" style="margin-top: 0; "><span style="color: #6d6d6d; font-size: 14px; line-height: 24px; display: block; ">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。</span></div>\n<div class="p1" style="margin-top: 0; "><span style="color: #6d6d6d; font-size: 14px; line-height: 24px; display: block; "><img style="width: 100%;" src="http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/088027e418a92d499df3067228bcd536.png" /></span></div>\n<div class="p1" style="margin-top: 0; "><span style="color: #6d6d6d; font-size: 14px; line-height: 24px; display: block; ">中国目前白酒市场上，至少有60%-70%的白酒属于非纯粮酿造的酒精勾兑酒。尽管国家允许白酒生产使用食用酒精，但添加食用酒精勾兑与纯粮酿造酒成本悬殊至少在2倍以上，然而许多白酒企业却“用而不标”。</span></div>'
					}
				]
			};
		}

		if (Component) HocSortContentEs.__proto__ = Component;
		HocSortContentEs.prototype = Object.create(Component && Component.prototype);
		HocSortContentEs.prototype.constructor = HocSortContentEs;
		HocSortContentEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "sotr-content"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{class: "sc-content-item", id: "content" + item$1.id},
						apivm.h("text", {class: "sc-content-title"}, item$1.title),
						apivm.h("rich-text", {nodes: item$1.content})
					);
				})
			);
		};

		return HocSortContentEs;
	})(Component);
	HocSortContentEs.css = {
		".sotr-content": {padding: "10px 15px", backgroundColor: "#fff", top: "-9px"},
		".sc-content-title": {
			fontWeight: "500",
			padding: "10px 0",
			fontSize: "16px",
			color: "#333",
			display: "block"
		}
	};
	apivm.define("hoc-sort-content-es", HocSortContentEs);

	var HocSortListEs = /*@__PURE__*/ (function(Component) {
		function HocSortListEs(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						title: "代理政策",
						image:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/942b00fe148810e9a6c0b41ed6a014ec.png"
					},

					{
						title: "代理政策",
						image:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/942b00fe148810e9a6c0b41ed6a014ec.png"
					},

					{
						title: "代理政策",
						image:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/942b00fe148810e9a6c0b41ed6a014ec.png"
					},

					{
						title: "代理政策",
						image:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/942b00fe148810e9a6c0b41ed6a014ec.png"
					}
				]
			};
		}

		if (Component) HocSortListEs.__proto__ = Component;
		HocSortListEs.prototype = Object.create(Component && Component.prototype);
		HocSortListEs.prototype.constructor = HocSortListEs;
		HocSortListEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "sort-list"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{class: "sl-cate-item", "data-id": item$1.id},
						apivm.h("image", {src: item$1.image, class: "sl-cate-img"}),
						apivm.h("text", {class: "sl-cate-word"}, item$1.title)
					);
				})
			);
		};

		return HocSortListEs;
	})(Component);
	HocSortListEs.css = {
		".sort-list": {
			flexDirection: "row",
			flexWrap: "wrap",
			padding: "27px 0 10px",
			backgroundColor: "#fff",
			borderRadius: "15px 15px 0 0",
			top: "-14px"
		},
		".sl-cate-item": {alignItems: "center", width: "25%", marginBottom: "10px"},
		".sl-cate-img": {width: "50px", height: "50px"},
		".sl-cate-word": {
			marginTop: "2px",
			fontSize: "12px",
			color: "#333",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		}
	};
	apivm.define("hoc-sort-list-es", HocSortListEs);

	var HocBannerCoverEs = /*@__PURE__*/ (function(Component) {
		function HocBannerCoverEs(props) {
			Component.call(this, props);
			this.data = {
				src:
					this.props.src !== undefined
						? this.props.src
						: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/67b9a14f680297491cec517ed9aaf2ed.png"
			};
		}

		if (Component) HocBannerCoverEs.__proto__ = Component;
		HocBannerCoverEs.prototype = Object.create(Component && Component.prototype);
		HocBannerCoverEs.prototype.constructor = HocBannerCoverEs;
		HocBannerCoverEs.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "banner-cover"},
				apivm.h("image", {class: "bc-cover", src: this.data.src, mode: "widthFix"})
			);
		};

		return HocBannerCoverEs;
	})(Component);
	HocBannerCoverEs.css = {".bc-cover": {width: "100%"}};
	apivm.define("hoc-banner-cover-es", HocBannerCoverEs);

	var TemplateEsJoin = /*@__PURE__*/ (function(Component) {
		function TemplateEsJoin(props) {
			Component.call(this, props);
			this.data = {
				hocSortContentEsList: [
					{
						id: "1",
						title: "代理政策",
						content:
							'<div class="p1" style="margin-top: 0; "><span style="color: #6d6d6d; font-size: 14px; line-height: 24px; display: block; ">丹东凤凰山自古有辽东第一山的美誉。常年吸引全国各地游客前来观赏。山上的泉水清甜甘洌，是大自然对于小镇市民最好的馈赠。而老毕纯粮就坐落在凤凰山脚下，坚持纯粮酿造，借凤凰山名号可以作为特产出售。我们不生产酒，我们只是大自然的搬运工。</span></div>\n<div class="p1" style="margin-top: 0; "><span style="color: #6d6d6d; font-size: 14px; line-height: 24px; display: block; ">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。</span></div>\n<div class="p1" style="margin-top: 0; "><span style="color: #6d6d6d; font-size: 14px; line-height: 24px; display: block; "><img style="width: 100%;" src="http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/088027e418a92d499df3067228bcd536.png" /></span></div>\n<div class="p1" style="margin-top: 0; "><span style="color: #6d6d6d; font-size: 14px; line-height: 24px; display: block; ">中国目前白酒市场上，至少有60%-70%的白酒属于非纯粮酿造的酒精勾兑酒。尽管国家允许白酒生产使用食用酒精，但添加食用酒精勾兑与纯粮酿造酒成本悬殊至少在2倍以上，然而许多白酒企业却“用而不标”。</span></div>'
					}
				]
			};
		}

		if (Component) TemplateEsJoin.__proto__ = Component;
		TemplateEsJoin.prototype = Object.create(Component && Component.prototype);
		TemplateEsJoin.prototype.constructor = TemplateEsJoin;
		TemplateEsJoin.prototype.apiready = function() {};
		TemplateEsJoin.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h(
					"scroll-view",
					null,

					apivm.h("hoc-banner-cover-es", {
						src:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/67b9a14f680297491cec517ed9aaf2ed.png"
					}),

					apivm.h("hoc-sort-list-es", null),

					apivm.h("hoc-sort-content-es", {list: this.data.hocSortContentEsList}),

					apivm.h("hoc-join-form-es", null)
				)
			);
		};

		return TemplateEsJoin;
	})(Component);
	TemplateEsJoin.css = {
		".page": {height: "100%", backgroundColor: "#f7f7f7"},
		"scroll-view": {height: "100%"}
	};
	apivm.define("template-es-join", TemplateEsJoin);
	apivm.render(apivm.h("template-es-join", null), "body");
})();
