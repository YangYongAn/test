(function() {
	var HocApplySuccTipEt = /*@__PURE__*/ (function(Component) {
		function HocApplySuccTipEt(props) {
			Component.call(this, props);
			this.data = {
				iconSrc:
					this.props.iconSrc !== undefined
						? this.props.iconSrc
						: "http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
				title: this.props.title !== undefined ? this.props.title : "报名成功",
				desc:
					this.props.desc !== undefined
						? this.props.desc
						: '可在"我的"中查看预约报名记录',
				btnText: this.props.btnText !== undefined ? this.props.btnText : "确定"
			};
		}

		if (Component) HocApplySuccTipEt.__proto__ = Component;
		HocApplySuccTipEt.prototype = Object.create(Component && Component.prototype);
		HocApplySuccTipEt.prototype.constructor = HocApplySuccTipEt;
		HocApplySuccTipEt.prototype.btnClick = function() {
			api.toast({
				msg: "点击按钮了"
			});

			this.fire("btnClick");
		};
		HocApplySuccTipEt.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "b-notice"},
				apivm.h("img", {
					src: this.data.iconSrc,
					alt: "",
					class: "b-notice__icon--img"
				}),
				apivm.h("text", {class: "b-notice__title--text"}, this.data.title),
				apivm.h("text", {class: "b-notice__desc--text"}, " ", this.data.desc),
				apivm.h(
					"view",
					{class: "b-notice__btn"},
					apivm.h(
						"view",
						{class: "b-notice__button", onClick: this.btnClick},
						apivm.h("text", {class: "b-notice__button--text"}, this.data.btnText)
					)
				)
			);
		};

		return HocApplySuccTipEt;
	})(Component);
	HocApplySuccTipEt.css = {
		".b-notice": {justifyContent: "center", alignItems: "center"},
		".b-notice__icon--img": {width: "100px", height: "100px", marginTop: "40px"},
		".b-notice__title--text": {
			fontSize: "18px",
			fontWeight: "bold",
			color: "#333",
			marginTop: "20px",
			textAlign: "center"
		},
		".b-notice__desc--text": {marginTop: "6px", color: "#999", fontSize: "15px"},
		".b-notice__btn": {marginTop: "30px", flexFlow: "row", width: "100%"},
		".b-notice__button": {
			height: "44px",
			background: "#F1C694",
			borderRadius: "4px",
			boxSizing: "border-box",
			justifyContent: "center",
			flex: "1",
			margin: "20px"
		},
		".b-notice__button--text": {
			color: "#fff",
			fontSize: "16px",
			fontWeight: "bold",
			textAlign: "center"
		}
	};
	apivm.define("hoc-apply-succ-tip-et", HocApplySuccTipEt);

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

	var TemplateEtPayResult = /*@__PURE__*/ (function(Component) {
		function TemplateEtPayResult(props) {
			Component.call(this, props);
		}

		if (Component) TemplateEtPayResult.__proto__ = Component;
		TemplateEtPayResult.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateEtPayResult.prototype.constructor = TemplateEtPayResult;
		TemplateEtPayResult.prototype.sureBtnClick = function() {
			api.closeWin();
			this.fire("btnClick");
		};
		TemplateEtPayResult.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "b-tip"},
				apivm.h("hoc-header-bar-et", {title: "柚子英语教育", isBack: true}),
				apivm.h("hoc-apply-succ-tip-et", {
					title: "报名成功",
					iconSrc:
						"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
					desc: "可在【我的】中查看预约报名记录",
					btnText: "确定",
					onBtnClick: this.sureBtnClick
				})
			);
		};

		return TemplateEtPayResult;
	})(Component);
	TemplateEtPayResult.css = {".b-tip": {background: "#F8F8F8", height: "100%"}};
	apivm.define("template-et-pay-result", TemplateEtPayResult);
	apivm.render(apivm.h("template-et-pay-result", null), "body");
})();
