(function() {
	var HocCaseListEs = /*@__PURE__*/ (function(Component) {
		function HocCaseListEs(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						title: "创业夫妻加盟66天，门店已经排起了长龙",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/20a6218c83f5e7e940a07c9a1ff44c5e.png",
						creat_time: 1593768754
					},

					{
						id: "231dc560-dab9-11ea-90e2-ad9fabf4a7a9",
						title: "上海外滩加盟店，加盟数日火爆上海滩",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/aae0244b645bcf2b0ea70dfde8da8e47.png",
						creat_time: 1597029928
					},

					{
						id: "47e72430-dace-11ea-90e2-ad9fabf4a7a9",
						title: "「茶事分享」一款红茶醉了心",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d6f008eb12663454510e42dbe3038e7b.png",
						creat_time: 1597039009
					},

					{
						id: "ef888080-dace-11ea-90e2-ad9fabf4a7a9",
						title: "北京五道口店火爆开业",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/2f469dd46543e17ce03405ba98997922.png",
						creat_time: 1597039291
					},

					{
						id: "1fe92180-bd10-11ea-b835-0faeeada0334",
						title: "创业夫妻加盟66天，门店已经排起了长龙",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/20a6218c83f5e7e940a07c9a1ff44c5e.png",
						creat_time: 1593768754
					},

					{
						id: "231dc560-dab9-11ea-90e2-ad9fabf4a7a9",
						title: "上海外滩加盟店，加盟数日火爆上海滩",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/aae0244b645bcf2b0ea70dfde8da8e47.png",
						creat_time: 1597029928
					},

					{
						id: "47e72430-dace-11ea-90e2-ad9fabf4a7a9",
						title: "「茶事分享」一款红茶醉了心",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d6f008eb12663454510e42dbe3038e7b.png",
						creat_time: 1597039009
					},

					{
						id: "ef888080-dace-11ea-90e2-ad9fabf4a7a9",
						title: "北京五道口店火爆开业",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/2f469dd46543e17ce03405ba98997922.png",
						creat_time: 1597039291
					}
				]
			};
		}

		if (Component) HocCaseListEs.__proto__ = Component;
		HocCaseListEs.prototype = Object.create(Component && Component.prototype);
		HocCaseListEs.prototype.constructor = HocCaseListEs;
		HocCaseListEs.prototype.onDetailClick = function() {
			api.openWin({
				name: "detail",
				url: "widget://pages/template-es-detail/template-es-detail.stml"
			});
		};
		HocCaseListEs.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "case"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1, index$1) {
					return apivm.h(
						"view",
						{class: "case-item", onClick: this$1.onDetailClick, "data-id": item$1.id},
						apivm.h("image", {src: item$1.cover_img, class: "case-item-img"}),
						apivm.h("text", {class: "item-title"}, item$1.title)
					);
				}),
				apivm.h(
					"view",
					{class: "case-footer"},
					apivm.h("text", {class: "case-loadDesc"}, "没有更多啦")
				)
			);
		};

		return HocCaseListEs;
	})(Component);
	HocCaseListEs.css = {
		".case-item": {
			flexDirection: "row",
			height: "120px",
			padding: "10px 15px",
			boxSizing: "border-box"
		},
		".case-item:active": {opacity: "0.8"},
		".case-item-img": {
			width: "100px",
			height: "100px",
			marginRight: "16px",
			border: "1px solid #f1f1f1",
			borderRadius: "8px"
		},
		".item-title": {
			fontSize: "14px",
			fontWeight: "500",
			color: "#333",
			flex: "1"
		},
		".case-footer": {
			height: "44px",
			justifyContent: "center",
			alignItems: "center"
		},
		".case-loadDesc": {fontSize: "12px", color: "#999"}
	};
	apivm.define("hoc-case-list-es", HocCaseListEs);

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

	var TemplateEsCase = /*@__PURE__*/ (function(Component) {
		function TemplateEsCase(props) {
			Component.call(this, props);
			this.data = {
				navText: "案例",
				// 案例列表
				caseList: [
					{
						id: "1fe92180-bd10-11ea-b835-0faeeada0334",
						title: "创业夫妻加盟66天，门店已经排起了长龙",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/20a6218c83f5e7e940a07c9a1ff44c5e.png",
						status: 1,
						content:
							'<p class="p1"><span style="color: #6d6d6d;">「茶事分享」一款红茶醉了心</span></p>\n<p class="p1"><span style="color: #6d6d6d;">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。</span></p>\n<p class="p1"><span style="color: #6d6d6d;"><img src="http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/9c363e07972579c92f95d405c2f985ff.png" /></span></p>\n<p class="p1"><span style="color: #6d6d6d;">发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品种和制作方式以及产品外形分成六大类。依据季节采制可分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用保健茶、茶食品、含茶饮料等。</span></p>',
						creat_time: 1593768754
					},

					{
						id: "231dc560-dab9-11ea-90e2-ad9fabf4a7a9",
						title: "上海外滩加盟店，加盟数日火爆上海滩",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/aae0244b645bcf2b0ea70dfde8da8e47.png",
						status: 1,
						content:
							'<p class="p1"><span style="color: #6d6d6d;">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。</span></p>\n<p class="p1"><span style="color: #6d6d6d;"><img src="http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/9c363e07972579c92f95d405c2f985ff.png" /></span></p>\n<p class="p1"><span style="color: #6d6d6d;">发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品种和制作方式以及产品外形分成六大类。依据季节采制可分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用保健茶、茶食品、含茶饮料等。</span></p>',
						creat_time: 1597029928
					},

					{
						id: "47e72430-dace-11ea-90e2-ad9fabf4a7a9",
						title: "「茶事分享」一款红茶醉了心",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d6f008eb12663454510e42dbe3038e7b.png",
						status: 1,
						content:
							'<p class="p1"><span style="color: #6d6d6d;">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。</span></p>\n<p class="p1"><span style="color: #6d6d6d;"><img src="http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d6f008eb12663454510e42dbe3038e7b.png" /></span></p>\n<p class="p1"><span style="color: #6d6d6d;">发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品种和制作方式以及产品外形分成六大类。依据季节采制可分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用保健茶、茶食品、含茶饮料等。</span></p>',
						creat_time: 1597039009
					},

					{
						id: "ef888080-dace-11ea-90e2-ad9fabf4a7a9",
						title: "北京五道口店火爆开业",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/2f469dd46543e17ce03405ba98997922.png",
						status: 1,
						content:
							'<p class="p1"><span style="color: #6d6d6d;">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。<img src="http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/9c363e07972579c92f95d405c2f985ff.png" /></span></p>\n<p class="p1"><span style="color: #6d6d6d;">发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品种和制作方式以及产品外形分成六大类。依据季节采制可分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用保健茶、茶食品、含茶饮料等。</span></p>',
						creat_time: 1597039291
					},

					{
						id: "1fe92180-bd10-11ea-b835-0faeeada0334",
						title: "创业夫妻加盟66天，门店已经排起了长龙",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/20a6218c83f5e7e940a07c9a1ff44c5e.png",
						status: 1,
						content:
							'<p class="p1"><span style="color: #6d6d6d;">「茶事分享」一款红茶醉了心</span></p>\n<p class="p1"><span style="color: #6d6d6d;">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。</span></p>\n<p class="p1"><span style="color: #6d6d6d;"><img src="http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/9c363e07972579c92f95d405c2f985ff.png" /></span></p>\n<p class="p1"><span style="color: #6d6d6d;">发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品种和制作方式以及产品外形分成六大类。依据季节采制可分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用保健茶、茶食品、含茶饮料等。</span></p>',
						creat_time: 1593768754
					},

					{
						id: "231dc560-dab9-11ea-90e2-ad9fabf4a7a9",
						title: "上海外滩加盟店，加盟数日火爆上海滩",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/aae0244b645bcf2b0ea70dfde8da8e47.png",
						status: 1,
						content:
							'<p class="p1"><span style="color: #6d6d6d;">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。</span></p>\n<p class="p1"><span style="color: #6d6d6d;"><img src="http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/9c363e07972579c92f95d405c2f985ff.png" /></span></p>\n<p class="p1"><span style="color: #6d6d6d;">发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品种和制作方式以及产品外形分成六大类。依据季节采制可分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用保健茶、茶食品、含茶饮料等。</span></p>',
						creat_time: 1597029928
					},

					{
						id: "47e72430-dace-11ea-90e2-ad9fabf4a7a9",
						title: "「茶事分享」一款红茶醉了心",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d6f008eb12663454510e42dbe3038e7b.png",
						status: 1,
						content:
							'<p class="p1"><span style="color: #6d6d6d;">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。</span></p>\n<p class="p1"><span style="color: #6d6d6d;"><img src="http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/d6f008eb12663454510e42dbe3038e7b.png" /></span></p>\n<p class="p1"><span style="color: #6d6d6d;">发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品种和制作方式以及产品外形分成六大类。依据季节采制可分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用保健茶、茶食品、含茶饮料等。</span></p>',
						creat_time: 1597039009
					},

					{
						id: "ef888080-dace-11ea-90e2-ad9fabf4a7a9",
						title: "北京五道口店火爆开业",
						cover_img:
							"http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/2f469dd46543e17ce03405ba98997922.png",
						status: 1,
						content:
							'<p class="p1"><span style="color: #6d6d6d;">茶叶源于中国，茶叶最早是被作为祭品使用的。但从春秋后期就被人们作为菜食，在西汉中期发展为药用，西汉后期才发展为宫廷高级饮料，普及民间作为普通饮料那是西晋以后的事。<img src="http://a3a17abb08c7cc355eb5.qiniucdn.apicloud-system.com/apicloud/9c363e07972579c92f95d405c2f985ff.png" /></span></p>\n<p class="p1"><span style="color: #6d6d6d;">发现最早人工种植茶叶的遗迹在浙江余姚的田螺山遗址，已有6000多年的历史。饮茶始于中国。叶革质，长圆形或椭圆形，可以用开水直接泡饮，依据品种和制作方式以及产品外形分成六大类。依据季节采制可分为春茶、夏茶、秋茶、冬茶。以各种毛茶或精制茶叶再加工形成再加茶，包括分为花茶、紧压茶、萃取茶、药用保健茶、茶食品、含茶饮料等。</span></p>',
						creat_time: 1597039291
					}
				]
			};
		}

		if (Component) TemplateEsCase.__proto__ = Component;
		TemplateEsCase.prototype = Object.create(Component && Component.prototype);
		TemplateEsCase.prototype.constructor = TemplateEsCase;
		TemplateEsCase.prototype.apiready = function() {};
		TemplateEsCase.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},

				apivm.h("hoc-nav-bar-es", {msg: this.data.navText}),
				apivm.h(
					"scroll-view",
					{"scroll-y": true, "show-scrollbar": false},

					apivm.h("hoc-case-list-es", {list: this.data.caseList})
				)
			);
		};

		return TemplateEsCase;
	})(Component);
	TemplateEsCase.css = {
		".page": {height: "100%", backgroundColor: "#fff"},
		"scroll-view": {height: "100%"}
	};
	apivm.define("template-es-case", TemplateEsCase);
	apivm.render(apivm.h("template-es-case", null), "body");
})();
