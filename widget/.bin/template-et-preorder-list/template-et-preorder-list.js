(function() {
	var HocNoDataEt = /*@__PURE__*/ (function(Component) {
		function HocNoDataEt(props) {
			Component.call(this, props);
			this.data = {
				iconSrc:
					this.props.iconSrc !== undefined
						? this.props.iconSrc
						: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/a74aa8ce90ba4ed3ec5c9963208ed856.png",
				title: this.props.title !== undefined ? this.props.title : "暂无数据哦"
			};
		}

		if (Component) HocNoDataEt.__proto__ = Component;
		HocNoDataEt.prototype = Object.create(Component && Component.prototype);
		HocNoDataEt.prototype.constructor = HocNoDataEt;
		HocNoDataEt.prototype.apiready = function() {};
		HocNoDataEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "no-data"},
				apivm.h("img", {src: this.data.iconSrc, alt: "", class: "no-data-img"}),
				apivm.h("text", {class: "no-data-title"}, this.data.title)
			);
		};

		return HocNoDataEt;
	})(Component);
	HocNoDataEt.css = {
		".no-data": {
			margin: "16px 0",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		},
		".no-data-img": {width: "100px", height: "100px"},
		".no-data-title": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#333",
			marginTop: "20px",
			textAlign: "center"
		}
	};
	apivm.define("hoc-no-data-et", HocNoDataEt);

	var HocMyOrderCardEt = /*@__PURE__*/ (function(Component) {
		function HocMyOrderCardEt(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						status: 1,
						create_time: "2022-03-27",
						title: "课程一"
					},
					{
						status: 0,
						create_time: "2022-03-27",
						title: "课程二"
					}
				]
			};
		}

		if (Component) HocMyOrderCardEt.__proto__ = Component;
		HocMyOrderCardEt.prototype = Object.create(Component && Component.prototype);
		HocMyOrderCardEt.prototype.constructor = HocMyOrderCardEt;
		HocMyOrderCardEt.prototype.apiready = function() {};
		HocMyOrderCardEt.prototype.timer = function(time) {
			return new Date(
				new Date(time) - 0 - new Date().getTimezoneOffset() * 60 * 1000
			)
				.toJSON()
				.replace("T", " ")
				.slice(0, -5);
		};
		HocMyOrderCardEt.prototype.itemClick = function(item) {
			this.fire("itemClick", item);
		};
		HocMyOrderCardEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"scroll-view",
				{
					"scroll-y": true,
					"show-scrollbar": false,
					class: "b-preorder-card-wrapper"
				},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{
							class: "b-preorder-card",
							key: item$1.id,
							onClick: function() {
								return this$1.itemClick(item$1);
							}
						},
						apivm.h(
							"view",
							{class: "b-preorder-card-left"},
							apivm.h(
								"view",
								{class: "b-preorder-card-left__header"},
								apivm.h(
									"text",
									{class: "b-preorder-card__header--title"},
									item$1.title
								),
								item$1.status === 1
									? apivm.h(
											"text",
											{
												class: "b-preorder-card__header--tag",
												style: "background: #F1C694;"
											},
											"预约中"
									  )
									: apivm.h(
											"text",
											{class: "b-preorder-card__header--tag", style: "background: #CCC;"},
											"已取消"
									  )
							),
							apivm.h(
								"text",
								{class: "b-preorder-card__content--time"},
								"预约时间：",
								this$1.timer(item$1.create_time)
							)
						),
						apivm.h("img", {
							class: "b-preorder-card__content--arrow",
							src:
								"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/32c33a52906720ff44bd953ad901b853.png"
						})
					);
				})
			);
		};

		return HocMyOrderCardEt;
	})(Component);
	HocMyOrderCardEt.css = {
		".b-preorder-card-wrapper": {height: "100%"},
		".b-preorder-card": {
			flexDirection: "row",
			alignItems: "center",
			background: "#fff",
			borderRadius: "4px",
			padding: "20px 10px",
			margin: "10px 15px 0"
		},
		".b-preorder-card-left": {flex: "1"},
		".b-preorder-card-left__header": {flexFlow: "row nowrap"},
		".b-preorder-card__header--title": {
			fontSize: "16px",
			fontWeight: "bold",
			color: "#333"
		},
		".b-preorder-card__header--tag": {
			borderRadius: "2px",
			fontSize: "12px",
			padding: "3px 6px",
			color: "#fff",
			marginLeft: "10px"
		},
		".b-preorder-card__content--time": {
			marginTop: "14px",
			color: "#999",
			fontSize: "14px"
		},
		".b-preorder-card__content--arrow": {width: "18px", height: "18px"}
	};
	apivm.define("hoc-my-order-card-et", HocMyOrderCardEt);

	var HocHeaderBarEt = /*@__PURE__*/ (function(Component) {
		function HocHeaderBarEt(props) {
			Component.call(this, props);
			this.data = {
				title: this.props.title !== undefined ? this.props.title : "柚子英语教育",
				isBack: this.props.isBack || false,
				leftIcon: this.props.leftIcon || null,
				rightIcon: this.props.rightIcon || null
			};
		}

		if (Component) HocHeaderBarEt.__proto__ = Component;
		HocHeaderBarEt.prototype = Object.create(Component && Component.prototype);
		HocHeaderBarEt.prototype.constructor = HocHeaderBarEt;
		HocHeaderBarEt.prototype.onBack = function() {
			this.fire("onBack");
			api.closeWin();
		};
		HocHeaderBarEt.prototype.onClickRight = function() {
			this.fire("onClickRight");
		};
		HocHeaderBarEt.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "a-header"},
				this.data.isBack
					? apivm.h(
							"view",
							{class: "a-header__icon a-header__icon--left", onClick: this.onBack},
							apivm.h("img", {
								src:
									this.data.leftIcon ||
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/0b234caf9662d757a20a96b70f0d4eda.png",
								class: "a-header__icon--img"
							})
					  )
					: null,
				apivm.h("text", {class: "a-header--text"}, this.data.title),
				this.data.rightIcon
					? apivm.h(
							"view",
							{
								class: "a-header__icon a-header__icon--right",
								onClick: this.onClickRight
							},
							apivm.h("img", {src: this.data.rightIcon, class: "a-header__icon--img"})
					  )
					: null
			);
		};

		return HocHeaderBarEt;
	})(Component);
	HocHeaderBarEt.css = {
		".a-header": {
			background: "#fff",
			flexFlow: "row nowrap",
			borderBottom: "1px solid #f0f0f0",
			flexShrink: "0"
		},
		".a-header__icon": {padding: "15px", alignSelf: "center"},
		".a-header__icon--img": {width: "18px", height: "18px"},
		".a-header--text": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#000",
			height: "26px",
			margin: "9px 0",
			textAlign: "center",
			flex: "1"
		}
	};
	apivm.define("hoc-header-bar-et", HocHeaderBarEt);

	var TemplateEtPreorderList = /*@__PURE__*/ (function(Component) {
		function TemplateEtPreorderList(props) {
			Component.call(this, props);
			this.data = {
				list: [
					{
						status: 1,
						create_time: "2022-03-27",
						title: "托福基础班"
					},
					{
						status: 0,
						create_time: "2022-03-27",
						title: "托福提升班"
					}
				]
			};
		}

		if (Component) TemplateEtPreorderList.__proto__ = Component;
		TemplateEtPreorderList.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateEtPreorderList.prototype.constructor = TemplateEtPreorderList;
		TemplateEtPreorderList.prototype.intoDetail = function(pageParam) {
			api.openWin({
				name: "template-et-preorder-detail",
				url: "../template-et-preorder-detail/template-et-preorder-detail.stml",
				pageParam: pageParam
			});
		};
		TemplateEtPreorderList.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {title: "我的预约", isBack: true}),
				apivm.h(
					"scroll-view",
					{style: "flex: 1;", "scroll-y": true, "show-scrollbar": false},

					apivm.h("hoc-my-order-card-et", {
						list: this.data.list,
						onItemClick: this.intoDetail
					})
				)
			);
		};

		return TemplateEtPreorderList;
	})(Component);
	TemplateEtPreorderList.css = {
		".page": {height: "100%", backgroundColor: "#f8f8f8"}
	};
	apivm.define("template-et-preorder-list", TemplateEtPreorderList);
	apivm.render(apivm.h("template-et-preorder-list", null), "body");
})();
