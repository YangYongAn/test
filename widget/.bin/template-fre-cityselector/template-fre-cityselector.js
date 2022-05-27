(function() {
	var TemplateFreCityselector = /*@__PURE__*/ (function(Component) {
		function TemplateFreCityselector(props) {
			Component.call(this, props);
			this.data = {
				dataList: []
			};
		}

		if (Component) TemplateFreCityselector.__proto__ = Component;
		TemplateFreCityselector.prototype = Object.create(
			Component && Component.prototype
		);
		TemplateFreCityselector.prototype.constructor = TemplateFreCityselector;
		TemplateFreCityselector.prototype.closeAction = function() {
			api.closeFrame({
				name: "citySelector"
			});
		};
		TemplateFreCityselector.prototype.closeFrame = function(currentCity) {
			this.fire("result", currentCity);
		};
		TemplateFreCityselector.prototype.fnSelectCity = function(name) {
			api.sendEvent({
				name: "fnSelectCity",
				extra: {
					name: name
				}
			});
		};
		TemplateFreCityselector.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "cityselector-main"},
				apivm.h(
					"text",
					{class: "cityselector-close", onClick: this.closeAction},
					"×"
				),
				apivm.h("text", {class: "cityselector-title"}, "选择所需服务的地区"),
				apivm.h(
					"scroll-view",
					{class: "cityselector-section", "scroll-y": "true"},
					apivm.h(
						"view",
						null,
						apivm.h(
							"text",
							{
								class: "cityselector-city",
								onClick: function() {
									return this$1.fnSelectCity("北京市");
								}
							},
							"北京市"
						),
						apivm.h(
							"text",
							{
								class: "cityselector-city",
								onClick: function() {
									return this$1.fnSelectCity("郑州市");
								}
							},
							"郑州市"
						),
						apivm.h(
							"text",
							{
								class: "cityselector-city",
								onClick: function() {
									return this$1.fnSelectCity("天津市");
								}
							},
							"天津市"
						),
						apivm.h(
							"text",
							{
								class: "cityselector-city",
								onClick: function() {
									return this$1.fnSelectCity("上海市");
								}
							},
							"上海市"
						),
						apivm.h(
							"text",
							{
								class: "cityselector-city",
								onClick: function() {
									return this$1.fnSelectCity("广州");
								}
							},
							"广州"
						)
					)
				)
			);
		};

		return TemplateFreCityselector;
	})(Component);
	TemplateFreCityselector.css = {
		".cityselector-main": {height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)"},
		".cityselector-close": {
			width: "50px",
			height: "35px",
			fontSize: "35px",
			color: "#fff",
			textAlign: "center"
		},
		".cityselector-title": {
			alignSelf: "center",
			width: "80%",
			padding: "10px",
			borderBottom: "2px solid #c8026f",
			color: "#fff",
			fontSize: "14px",
			textAlign: "center"
		},
		".cityselector-section": {width: "100%", flex: "1"},
		".cityselector-city": {
			width: "100%",
			height: "55px",
			lineHeight: "55px",
			textAlign: "center",
			fontSize: "22px",
			color: "#fff"
		}
	};
	apivm.define("template-fre-cityselector", TemplateFreCityselector);
	apivm.render(apivm.h("template-fre-cityselector", null), "body");
})();
