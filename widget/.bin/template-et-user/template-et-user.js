(function() {
	var HocCheckListEt = /*@__PURE__*/ (function(Component) {
		function HocCheckListEt(props) {
			Component.call(this, props);
			this.data = {
				list: this.props.list || [
					{
						id: "preorderList",
						leftIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/f5286334165d33c9e96aad27d08d67cb.png",
						text: "我的预约",
						extraText: "立即查看",
						link: null
					},
					{
						id: "orderList",
						leftIcon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/07d97e58534b11938a0d1c682c2511df.png",
						text: "我的线上课订单",
						link: null
					}
				]
			};
		}

		if (Component) HocCheckListEt.__proto__ = Component;
		HocCheckListEt.prototype = Object.create(Component && Component.prototype);
		HocCheckListEt.prototype.constructor = HocCheckListEt;
		HocCheckListEt.prototype.handleClick = function(item) {
			this.fire("itemClick", item);
			if (item.link) {
				api.openWin({
					name: "open" + item.id,
					url: item.link
				});
			}
		};
		HocCheckListEt.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "a-checklist"},
				(Array.isArray(this.data.list)
					? this.data.list
					: Object.values(this.data.list)
				).map(function(item$1) {
					return apivm.h(
						"view",
						{
							key: item$1.id,
							class: "a-checklist-item",
							onClick: function() {
								return this$1.handleClick(item$1);
							}
						},
						item$1.leftIcon
							? apivm.h("img", {
									src: item$1.leftIcon,
									alt: "left",
									class: "a-checklist-item-left-icon"
							  })
							: null,
						apivm.h("text", {class: "a-checklist-item-text"}, item$1.text),
						apivm.h(
							"view",
							{class: "a-checklist-item-right"},
							apivm.h(
								"text",
								{class: "a-checklist-item-right-text"},
								item$1.extraText
							),
							apivm.h("img", {
								class: "a-checklist-item-right-icon",
								src:
									item$1.rightIcon ||
									"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/32c33a52906720ff44bd953ad901b853.png",
								alt: "right"
							})
						)
					);
				})
			);
		};

		return HocCheckListEt;
	})(Component);
	HocCheckListEt.css = {
		".a-checklist": {background: "#fff", padding: "0 16px", marginBottom: "10px"},
		".a-checklist-item": {
			padding: "15px 0",
			alignItems: "center",
			flexDirection: "row",
			borderBottom: "1px solid #f1f1f1"
		},
		".a-checklist-item-left-icon": {width: "20px", height: "20px"},
		".a-checklist-item-text": {
			flex: "1",
			fontSize: "14px",
			color: "#333",
			marginRight: "15px"
		},
		".a-checklist-item-right": {flexDirection: "row", alignItems: "center"},
		".a-checklist-item-right-icon": {
			width: "20px",
			height: "20px",
			marginLeft: "8px"
		},
		".a-checklist-item-right-text": {fontSize: "14px", color: "#999"}
	};
	apivm.define("hoc-check-list-et", HocCheckListEt);

	var HocUserPanelEt = /*@__PURE__*/ (function(Component) {
		function HocUserPanelEt(props) {
			Component.call(this, props);
			this.data = {
				avatar: this.userName
					? "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/21ecd0b8aa98499fa0bb3534295480ee.png"
					: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/6fbc0b9f6404895c6400d27261011ab1.png",
				userName:
					this.props.userName !== undefined ? this.props.userName : "APP用户9626"
			};
		}

		if (Component) HocUserPanelEt.__proto__ = Component;
		HocUserPanelEt.prototype = Object.create(Component && Component.prototype);
		HocUserPanelEt.prototype.constructor = HocUserPanelEt;
		HocUserPanelEt.prototype.handleClick = function() {
			this.fire("handleClick");
		};
		HocUserPanelEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "b-user-panel", onClick: this.handleClick},
				apivm.h("img", {
					src: this.data.avatar,
					alt: "avatar",
					class: "b-user-panel-avatar"
				}),
				this.data.userName
					? apivm.h("text", {class: "b-user-panel-name"}, this.data.userName)
					: apivm.h("text", null, "请登录")
			);
		};

		return HocUserPanelEt;
	})(Component);
	HocUserPanelEt.css = {
		".b-user-panel": {
			width: "100%",
			height: "170px",
			background:
				"#fdf9f5 url('http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/1fe6bacf26d00b491d7a72d74e0291d6.png') no-repeat left top",
			backgroundSize: "100% 100%",
			flexFlow: "row nowrap",
			alignItems: "center",
			overflow: "hidden"
		},
		".b-user-panel-avatar": {
			width: "60px",
			height: "60px",
			background: "#EFEFEF",
			borderRadius: "30px",
			border: "4px solid #F1C694",
			margin: "20px"
		},
		".b-user-panel-name": {
			fontSize: "16px",
			fontWeight: "500",
			color: "#333333",
			lineHeight: "16px"
		}
	};
	apivm.define("hoc-user-panel-et", HocUserPanelEt);

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

	var TemplateEtUser = /*@__PURE__*/ (function(Component) {
		function TemplateEtUser(props) {
			Component.call(this, props);
			this.data = {
				checkList: [
					{
						id: "preorderList",
						leftIcon: "../../image/icon__user-cell--alarm.png",
						text: "我的预约",
						extraText: "立即查看",
						link: "../template-et-preorder-list/template-et-preorder-list.stml"
					},
					{
						id: "orderList",
						leftIcon: "../../image/icon__user-cell--order.png",
						text: "我的线上课订单",
						link: "../template-et-order-list/template-et-order-list.stml"
					}
				]
			};
		}

		if (Component) TemplateEtUser.__proto__ = Component;
		TemplateEtUser.prototype = Object.create(Component && Component.prototype);
		TemplateEtUser.prototype.constructor = TemplateEtUser;
		TemplateEtUser.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("hoc-header-bar-et", {title: "柚子英语教育"}),
				apivm.h("hoc-user-panel-et", {userName: "APP用户9626"}),
				apivm.h("hoc-check-list-et", {list: this.data.checkList})
			);
		};

		return TemplateEtUser;
	})(Component);
	TemplateEtUser.css = {".page": {height: "100%", backgroundColor: "#fff"}};
	apivm.define("template-et-user", TemplateEtUser);
	apivm.render(apivm.h("template-et-user", null), "body");
})();
