(function() {
	var Main = /*@__PURE__*/ (function(Component) {
		function Main(props) {
			Component.call(this, props);
		}

		if (Component) Main.__proto__ = Component;
		Main.prototype = Object.create(Component && Component.prototype);
		Main.prototype.constructor = Main;
		Main.prototype.goto = function(e) {
			var demoName = e.target.attributes.text;
			api.openWin({
				name: demoName,
				url: "../demo-" + demoName + "/demo-" + demoName + ".stml"
			});
		};
		Main.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				null,
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"dropdown"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"button"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"tree-select"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"divider"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"result"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"empty"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"nav-bar"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"side-bar"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"desense-text"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"progress-bar"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"action-sheet"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"badge"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"checkbox"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"checklist"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"collapse"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"error-block"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"grid"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"image"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"infinite-scroll"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"input"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"list"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"notice-bar"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"number-keyboard"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"page-indicator"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"popup"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"radio"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"rate"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"search"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"selector"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"space"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"stepper"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"steps"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"switch"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"tab-bar"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"tag"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"textarea"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onclick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"swiper"
				),
				apivm.h(
					"text",
					{
						class: "demo-item",
						onClick: function(event) {
							if (this$1.goto) {
								this$1.goto(event);
							} else {
								goto(event);
							}
						}
					},
					"image-uploader"
				)
			);
		};

		return Main;
	})(Component);
	Main.css = {".demo-item": {padding: "5px"}};
	apivm.define("main", Main);
	apivm.render(apivm.h("main", null), "body");
})();
