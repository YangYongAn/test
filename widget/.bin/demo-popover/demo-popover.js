(function() {
	function ownKeys(object, enumerableOnly) {
		var keys = Object.keys(object);

		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);

			if (enumerableOnly) {
				symbols = symbols.filter(function(sym) {
					return Object.getOwnPropertyDescriptor(object, sym).enumerable;
				});
			}

			keys.push.apply(keys, symbols);
		}

		return keys;
	}

	function _objectSpread2(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i] != null ? arguments[i] : {};

			if (i % 2) {
				ownKeys(Object(source), true).forEach(function(key) {
					_defineProperty(target, key, source[key]);
				});
			} else if (Object.getOwnPropertyDescriptors) {
				Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
			} else {
				ownKeys(Object(source)).forEach(function(key) {
					Object.defineProperty(
						target,
						key,
						Object.getOwnPropertyDescriptor(source, key)
					);
				});
			}
		}

		return target;
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	function _extends() {
		_extends =
			Object.assign ||
			function(target) {
				for (var i = 1; i < arguments.length; i++) {
					var source = arguments[i];

					for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}

				return target;
			};

		return _extends.apply(this, arguments);
	}

	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;

		_setPrototypeOf(subClass, superClass);
	}

	function _setPrototypeOf(o, p) {
		_setPrototypeOf =
			Object.setPrototypeOf ||
			function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
			};

		return _setPrototypeOf(o, p);
	}

	function _assertThisInitialized(self) {
		if (self === void 0) {
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		}

		return self;
	}

	var DemoBlock = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(DemoBlock, _Component);
		function DemoBlock() {
			var _this;
			for (
				var _len = arguments.length, args = new Array(_len), _key = 0;
				_key < _len;
				_key++
			) {
				args[_key] = arguments[_key];
			}
			_this = _Component.call.apply(_Component, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this), "render", function(props) {
				return apivm.h(
					"div",
					{className: "demo-block"},
					apivm.h("span", {className: "demo-block__title"}, props.title),
					apivm.h(
						"div",
						{
							className: "demo-block__content",
							style: {
								padding: props.padding || "12px 12px",
								background: props.background || "#ffffff",
								border: props.border
							}
						},
						props.children
					)
				);
			});
			_defineProperty(_assertThisInitialized(_this), "css", function() {
				return "\n  .demo-block:last-of-type {\n  padding-bottom: 32px;\n}\n.demo-block__title {\n  padding: 12px 8px 6px;\n  color: #969696;\n  font-size: 14px;\n}\n.demo-block__content {\n  border: solid 1px #eee;\n  border-right: none;\n  border-left: none;\n}\n  ";
			});
			return _this;
		}
		return DemoBlock;
	})(Component);

	// packages/avm-ui/src/demos/demo-description/index.tsx
	var DemoDescription = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(DemoDescription, _Component2);
		function DemoDescription() {
			var _this2;
			for (
				var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
				_key2 < _len2;
				_key2++
			) {
				args[_key2] = arguments[_key2];
			}
			_this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this2), "render", function(props) {
				return apivm.h(
					"div",
					{className: "demoDescription"},
					props.content || props.children
				);
			});
			_defineProperty(_assertThisInitialized(_this2), "css", function() {
				return ".demoDescription {color: #999999;}";
			});
			return _this2;
		}
		return DemoDescription;
	})(Component);

	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __decorateClass = function __decorateClass(decorators, target, key, kind) {
		var result =
			kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
		for (var i = decorators.length - 1, decorator; i >= 0; i--) {
			if ((decorator = decorators[i]))
				result =
					(kind ? decorator(target, key, result) : decorator(result)) || result;
		}
		if (kind && result) __defProp(target, key, result);
		return result;
	};

	// packages/avm-ui/src/components/button/button.less
	var button_default =
		".adm-button {\n  border: 1px solid #eee;\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 7px 16px;\n  margin: 0;\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  opacity: 1;\n}\n.adm-button-block {\n  display: block;\n  width: 100%;\n}\n.adm-button-disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.adm-button-disabled:active::before {\n  display: none;\n}\n.adm-button-mini {\n  padding: 2px 7px;\n  font-size: 12px;\n}\n.adm-button-mini-shape-rounded {\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.adm-button-small {\n  padding: 6px 11px;\n  font-size: 15px;\n}\n.adm-button-middle {\n  padding: 11px 20px;\n  font-size: 16px;\n}\n.adm-button-large {\n  padding: 15px 22px;\n  font-size: 18px;\n}\n.adm-button-shape-rounded {\n  border-radius: 1000px;\n}\n.adm-button-shape-rectangular {\n  border-radius: 0;\n}\n.adm-button-loading {\n  vertical-align: bottom;\n  background-image: url('./loading.png');\n  background-position: left center;\n  background-repeat: no-repeat;\n  background-size: 22px 22px;\n  padding-left: 24px;\n}\n.adm-button-default {\n  color: #333333;\n}\n.adm-button-primary {\n  background: #9AC200;\n  color: #ffffff;\n  border-color: #9AC200;\n}\n.adm-button-primary-fill-outline {\n  color: #9AC200;\n  background: #ffffff;\n}\n.adm-button-primary-fill-none {\n  color: #9AC200;\n  background: #ffffff;\n  border-color: transparent;\n}\n.adm-button-success {\n  background: #7FA000;\n  color: #ffffff;\n  border-color: #7FA000;\n}\n.adm-button-warning {\n  background: #FFA600;\n  color: #ffffff;\n  border-color: #FFA600;\n}\n.adm-button-danger {\n  background: #FA6400;\n  color: #ffffff;\n  border-color: #FA6400;\n}\n";

	// packages/avm-ui/src/utils/superProps.ts
	function superProps(targetOrProps, keyOrNode, descriptor) {
		if (descriptor) {
			var preRender = descriptor.value;
			descriptor.value = function(props) {
				var node = preRender(props);
				return _super(node, props);
			};
		} else {
			return _super(keyOrNode, targetOrProps);
		}
		function _super(node, props) {
			superClass(node, props);
			superStyle(node, props);
			superEvent(node, props);
			return node;
		}
	}
	function superClass(node, props) {
		var cls = [];
		if (props.className) {
			cls.push(props.className);
		}
		if (props.class) {
			cls.push(props.class);
		}
		if (node.attributes) {
			if (node.attributes.className) {
				cls.unshift(node.attributes.className);
			}
			if (node.attributes.class) {
				cls.unshift(node.attributes.className);
			}
			node.attributes.class = cls.join(" ");
			delete node.attributes.className;
		} else {
			node.attributes = {
				class: cls.join(" ")
			};
		}
	}
	function superStyle(node, props) {
		var style = [];
		if (props.style) {
			style.push(props.style);
		}
		if (node.attributes) {
			if (node.attributes.style) {
				style.unshift(node.attributes.style);
			}
			node.attributes.style = mergeStyle.apply(void 0, style);
		} else {
			node.attributes = {
				style: mergeStyle.apply(void 0, style)
			};
		}
	}
	function superEvent(node, props) {
		for (var propsKey in props) {
			if (propsKey.indexOf("on") === 0) {
				if (node.attributes) {
					node.attributes[propsKey] = props[propsKey];
				}
			}
		}
	}
	function mergeStyle() {
		var style = [];
		for (
			var _len = arguments.length, args = new Array(_len), _key = 0;
			_key < _len;
			_key++
		) {
			args[_key] = arguments[_key];
		}
		args.forEach(function(arg) {
			if (typeof arg === "string") {
				style.push(arg.replace(/;$/gm, ""));
			} else if (Object.prototype.toString.call(arg) === "[object Object]") {
				for (var key in arg) {
					arg[key] &&
						style.push(
							key.replace(/([A-Z])/, function(str) {
								return "-" + str.toLowerCase();
							}) +
								":" +
								arg[key]
						);
				}
			}
		});
		return style.join(";") + ";";
	}

	// packages/avm-ui/src/components/button/button.tsx
	var classPrefix = "adm-button";
	var defaultProps = {
		color: "default",
		fill: "solid",
		size: "middle",
		block: false,
		disabled: false,
		loading: false,
		type: "button",
		shape: "default"
	};

	var Button = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Button, _Component);
		function Button() {
			var _this;
			for (
				var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
				_key2 < _len2;
				_key2++
			) {
				args[_key2] = arguments[_key2];
			}
			_this = _Component.call.apply(_Component, [this].concat(args)) || this;
			_defineProperty(
				_assertThisInitialized(_this),
				"css",

				function() {
					return button_default;
				}
			);
			return _this;
		}
		var _proto = Button.prototype;
		_proto.render = function render(props) {
			var _classNames;
			props = Object.assign({}, defaultProps, props);
			var disabled = props.disabled || props.loading;
			var _props = props,
				shape = _props.shape,
				fill = _props.fill;
			var btnCls = classNames(
				classPrefix,
				props.color ? classPrefix + "-" + props.color : null,
				((_classNames = {}),
				(_classNames[classPrefix + "-block"] = props.block),
				(_classNames[classPrefix + "-disabled"] = disabled),
				(_classNames[classPrefix + "-" + props.color + "-fill-outline"] =
					fill === "outline"),
				(_classNames[classPrefix + "-" + props.color + "-fill-none"] =
					fill === "none"),
				(_classNames[classPrefix + "-" + props.size] = true),
				(_classNames[classPrefix + "-loading"] = props.loading),
				_classNames),
				classPrefix + "-shape-" + shape
			);
			return apivm.h(
				"button",
				{type: props.type, className: btnCls, disabled: disabled},
				props.loading ? props.loadingText : props.children
			);
		};
		return Button;
	})(Component);

	__decorateClass([superProps], Button.prototype, "render", 1);
	avm.define("avm-button", Button);

	function mergeProps(defaultProps2, props) {
		return Object.assign({}, defaultProps2, props);
	}

	// packages/avm-ui/src/components/space/space.tsx
	var classPrefix$1 = "adm-space";
	var defaultProps$1 = {
		direction: "horizontal",
		gap: "8px",
		style: {}
	};

	var Space = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Space, _Component);
		function Space() {
			var _this;
			for (
				var _len = arguments.length, args = new Array(_len), _key = 0;
				_key < _len;
				_key++
			) {
				args[_key] = arguments[_key];
			}
			_this = _Component.call.apply(_Component, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this), "render", function(props) {
				var _classNames;
				props = mergeProps(defaultProps$1, props);
				var _props = props,
					direction = _props.direction,
					gap = _props.gap,
					gapHorizontal = _props.gapHorizontal,
					gapVertical = _props.gapVertical;
				var itemStyles = {};
				var gaps =
					direction === "horizontal" ? gapHorizontal || gap : gapVertical || gap;
				itemStyles[
					direction === "horizontal" ? "marginRight" : "marginBottom"
				] = gaps;
				if (props.wrap && direction === "horizontal") {
					itemStyles["paddingBottom"] = gapVertical || gap;
				}
				return apivm.h(
					"div",
					_extends(
						{
							className: classNames(
								classPrefix$1,
								((_classNames = {}),
								(_classNames[classPrefix$1 + "-wrap"] = props.wrap),
								(_classNames[classPrefix$1 + "-" + direction + "-wrap"] = props.wrap),
								(_classNames[classPrefix$1 + "-block"] = props.block),
								(_classNames[classPrefix$1 + "-" + direction] = true),
								(_classNames[classPrefix$1 + "-align-" + props.align] = !!props.align),
								(_classNames[
									classPrefix$1 + "-justify-" + props.justify
								] = !!props.justify),
								_classNames)
							)
						},
						props
					),
					props.children.map(function(child, index) {
						var _classNames2;
						return (
							child !== null &&
							child !== void 0 &&
							apivm.h(
								"div",
								{
									className: classNames(
										classPrefix$1 + "-item",
										classPrefix$1 + "-" + direction + "-item",
										((_classNames2 = {}),
										(_classNames2[classPrefix$1 + "-" + direction + "-item-last"] =
											index === props.children.length - 1),
										(_classNames2[classPrefix$1 + "-" + direction + "-wrap-item"] =
											props.wrap),
										_classNames2)
									),
									style: itemStyles
								},
								child
							)
						);
					})
				);
			});
			_defineProperty(_assertThisInitialized(_this), "css", function() {
				return "\n    .adm-space-item {\n      flex: none;\n    }\n    .adm-space {\n      display: inline-flex;\n    }\n    .adm-space-wrap {\n      flex-wrap: wrap;\n    }\n    .adm-space-vertical {\n      flex-direction: column;\n    }\n    .adm-space-vertical-item-last {\n      margin-bottom: 0;\n    }\n    .adm-space-horizontal {\n      flex-direction: row;\n    }\n    .adm-space-horizontal-item-last {\n      margin-right: 0;\n    }\n    .adm-space-horizontal-wrap {\n      flex-wrap: wrap;\n    }\n    .adm-space-align-center {\n      align-items: center;\n    }\n    .adm-space-align-start {\n      align-items: flex-start;\n    }\n    .adm-space-align-end {\n      align-items: flex-end;\n    }\n    .adm-space-align-baseline {\n      align-items: baseline;\n    }\n    .adm-space-justify-center {\n      justify-content: center;\n    }\n    .adm-space-justify-start {\n      justify-content: flex-start;\n    }\n    .adm-space-justify-end {\n      justify-content: flex-end;\n    }\n    .adm-space-justify-between {\n      justify-content: space-between;\n    }\n    .adm-space-justify-around {\n      justify-content: space-around;\n    }\n    .adm-space-justify-evenly {\n      justify-content: space-evenly;\n    }\n    .adm-space-justify-stretch {\n      justify-content: stretch;\n    }\n    .adm-space-block {\n      display: flex;\n    }\n    ";
			});
			return _this;
		}
		return Space;
	})(Component);
	avm.define("avm-space", Space);

	var __defProp$1 = Object.defineProperty;
	var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
	var __decorateClass$1 = function __decorateClass(
		decorators,
		target,
		key,
		kind
	) {
		var result =
			kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
		for (var i = decorators.length - 1, decorator; i >= 0; i--) {
			if ((decorator = decorators[i]))
				result =
					(kind ? decorator(target, key, result) : decorator(result)) || result;
		}
		if (kind && result) __defProp$1(target, key, result);
		return result;
	};

	// packages/avm-ui/src/components/icon/icon.config.json
	var fontName = "avm-icon";

	// packages/avm-ui/src/utils/tag.ts
	function tag(name) {
		return function(target) {
			avm.define(name, target);
		};
	}

	// packages/avm-ui/src/components/icon/icons.json
	var icons = {
		AaOutline: "\uEA01",
		AddCircleOutline: "\uEA02",
		AddOutline: "\uEA03",
		AddSquareOutline: "\uEA04",
		AddressBookFill: "\uEA05",
		AlipayCircleFill: "\uEA06",
		AlipaySquareFill: "\uEA07",
		AntOutline: "\uEA08",
		ApiCloudlogo: "\uEA09",
		AppOutline: "\uEA0A",
		AppstoreOutline: "\uEA0B",
		ArrowDownCircleOutline: "\uEA0C",
		ArrowsAltOutline: "\uEA0D",
		AudioFill: "\uEA0E",
		AudioMutedOutline: "\uEA0F",
		AudioOutline: "\uEA10",
		BankcardOutline: "\uEA11",
		BellMuteOutline: "\uEA12",
		BellOutline: "\uEA13",
		BillOutline: "\uEA14",
		CalculatorOutline: "\uEA15",
		CalendarOutline: "\uEA16",
		CameraOutline: "\uEA17",
		ChatAddOutline: "\uEA18",
		ChatCheckOutline: "\uEA19",
		ChatWrongOutline: "\uEA1A",
		CheckCircleFill: "\uEA1B",
		CheckCircleOutline: "\uEA1C",
		CheckOutline: "\uEA1D",
		CheckShieldFill: "\uEA1E",
		CheckShieldOutline: "\uEA1F",
		ClockCircleFill: "\uEA20",
		ClockCircleOutline: "\uEA21",
		CloseCircleFill: "\uEA22",
		CloseCircleOutline: "\uEA23",
		CloseOutline: "\uEA24",
		CloseShieldOutline: "\uEA25",
		CollectMoneyOutline: "\uEA26",
		CompassOutline: "\uEA27",
		ContentOutline: "\uEA28",
		CouponOutline: "\uEA29",
		DeleteOutline: "\uEA2A",
		DownCircleOutline: "\uEA2B",
		DownFill: "\uEA2C",
		DownOutline: "\uEA2D",
		DownlandOutline: "\uEA2E",
		EditFill: "\uEA2F",
		EditSFill: "\uEA30",
		EditSOutline: "\uEA31",
		EnvironmentOutline: "\uEA32",
		ExclamationCircleFill: "\uEA33",
		ExclamationCircleOutline: "\uEA34",
		ExclamationOutline: "\uEA35",
		ExclamationShieldFill: "\uEA36",
		ExclamationShieldOutline: "\uEA37",
		ExclamationTriangleOutline: "\uEA38",
		EyeFill: "\uEA39",
		EyeInvisibleFill: "\uEA3A",
		EyeInvisibleOutline: "\uEA3B",
		EyeOutline: "\uEA3C",
		FaceRecognitionOutline: "\uEA3D",
		FileOutline: "\uEA3E",
		FileWrongOutline: "\uEA3F",
		FillinOutline: "\uEA40",
		FilterOutline: "\uEA41",
		FingerdownOutline: "\uEA42",
		FireFill: "\uEA43",
		FlagOutline: "\uEA44",
		FolderOutline: "\uEA45",
		ForbidFill: "\uEA46",
		FrownFill: "\uEA47",
		FrownOutline: "\uEA48",
		GiftOutline: "\uEA49",
		GlobalOutline: "\uEA4A",
		HandPayCircleOutline: "\uEA4B",
		HeartFill: "\uEA4C",
		HeartOutline: "\uEA4D",
		HistogramOutline: "\uEA4E",
		InformationCircleFill: "\uEA4F",
		InformationCircleOutline: "\uEA50",
		KeyOutline: "\uEA51",
		KoubeiFill: "\uEA52",
		KoubeiOutline: "\uEA53",
		LeftOutline: "\uEA54",
		LikeOutline: "\uEA55",
		LinkOutline: "\uEA56",
		LocationFill: "\uEA57",
		LocationOutline: "\uEA58",
		LockFill: "\uEA59",
		LockOutline: "\uEA5A",
		LoopOutline: "\uEA5B",
		MailFill: "\uEA5C",
		MailOpenOutline: "\uEA5D",
		MailOutline: "\uEA5E",
		MessageFill: "\uEA5F",
		MessageOutline: "\uEA60",
		MinusCircleOutline: "\uEA61",
		MinusOutline: "\uEA62",
		MoreOutline: "\uEA63",
		MovieOutline: "\uEA64",
		PayCircleOutline: "\uEA65",
		PhoneFill: "\uEA66",
		PhonebookFill: "\uEA67",
		PhonebookOutline: "\uEA68",
		PictureOutline: "\uEA69",
		PictureWrongOutline: "\uEA6A",
		PicturesOutline: "\uEA6B",
		PieOutline: "\uEA6C",
		PlayOutline: "\uEA6D",
		QuestionCircleFill: "\uEA6E",
		QuestionCircleOutline: "\uEA6F",
		ReceiptOutline: "\uEA70",
		ReceivePaymentOutline: "\uEA71",
		RedoOutline: "\uEA72",
		RightOutline: "\uEA73",
		ScanCodeOutline: "\uEA74",
		ScanningFaceOutline: "\uEA75",
		ScanningOutline: "\uEA76",
		SearchOutline: "\uEA77",
		SendOutline: "\uEA78",
		SetOutline: "\uEA79",
		ShopbagOutline: "\uEA7A",
		ShrinkOutline: "\uEA7B",
		SmileFill: "\uEA7C",
		SmileOutline: "\uEA7D",
		SoundMuteFill: "\uEA7E",
		SoundMuteOutline: "\uEA7F",
		SoundOutline: "\uEA80",
		StarFill: "\uEA81",
		StarOutline: "\uEA82",
		StopOutline: "\uEA83",
		SystemQRcodeOutline: "\uEA84",
		TagOutline: "\uEA85",
		TeamFill: "\uEA86",
		TeamOutline: "\uEA87",
		TextDeletionOutline: "\uEA88",
		TextOutline: "\uEA89",
		TransportQRcodeOutline: "\uEA8A",
		TravelOutline: "\uEA8B",
		TruckOutline: "\uEA8C",
		Uiwinbox: "\uEA8D",
		UndoOutline: "\uEA8E",
		UnlockOutline: "\uEA8F",
		UnorderedListOutline: "\uEA90",
		UpCircleOutline: "\uEA91",
		UpOutline: "\uEA92",
		UploadOutline: "\uEA93",
		UserAddOutline: "\uEA94",
		UserCircleOutline: "\uEA95",
		UserContactOutline: "\uEA96",
		UserOutline: "\uEA97",
		UserSetOutline: "\uEA98",
		VideoOutline: "\uEA99",
		Y1: "\uEA9A",
		Y10: "\uEA9B",
		Y11: "\uEA9C",
		Y12: "\uEA9D",
		Y13: "\uEA9E",
		Y14: "\uEA9F",
		Y15: "\uEAA0",
		Y16: "\uEAA1",
		Y17: "\uEAA2",
		Y18: "\uEAA3",
		Y19: "\uEAA4",
		Y2: "\uEAA5",
		Y20: "\uEAA6",
		Y21: "\uEAA7",
		Y22: "\uEAA8",
		Y23: "\uEAA9",
		Y24: "\uEAAA",
		Y25: "\uEAAB",
		Y26: "\uEAAC",
		Y27: "\uEAAD",
		Y28: "\uEAAE",
		Y29: "\uEAAF",
		Y3: "\uEAB0",
		Y30: "\uEAB1",
		Y31: "\uEAB2",
		Y32: "\uEAB3",
		Y33: "\uEAB4",
		Y34: "\uEAB5",
		Y35: "\uEAB6",
		Y36: "\uEAB7",
		Y37: "\uEAB8",
		Y38: "\uEAB9",
		Y39: "\uEABA",
		Y4: "\uEABB",
		Y40: "\uEABC",
		Y41: "\uEABD",
		Y42: "\uEABE",
		Y43: "\uEABF",
		Y44: "\uEAC0",
		Y45: "\uEAC1",
		Y46: "\uEAC2",
		Y47: "\uEAC3",
		Y48: "\uEAC4",
		Y49: "\uEAC5",
		Y5: "\uEAC6",
		Y50: "\uEAC7",
		Y51: "\uEAC8",
		Y52: "\uEAC9",
		Y53: "\uEACA",
		Y54: "\uEACB",
		Y55: "\uEACC",
		Y56: "\uEACD",
		Y57: "\uEACE",
		Y58: "\uEACF",
		Y59: "\uEAD0",
		Y6: "\uEAD1",
		Y60: "\uEAD2",
		Y61: "\uEAD3",
		Y62: "\uEAD4",
		Y63: "\uEAD5",
		Y64: "\uEAD6",
		Y65: "\uEAD7",
		Y66: "\uEAD8",
		Y67: "\uEAD9",
		Y68: "\uEADA",
		Y69: "\uEADB",
		Y7: "\uEADC",
		Y70: "\uEADD",
		Y71: "\uEADE",
		Y72: "\uEADF",
		Y73: "\uEAE0",
		Y74: "\uEAE1",
		Y75: "\uEAE2",
		Y76: "\uEAE3",
		Y77: "\uEAE4",
		Y78: "\uEAE5",
		Y79: "\uEAE6",
		Y8: "\uEAE7",
		Y80: "\uEAE8",
		Y81: "\uEAE9",
		Y82: "\uEAEA",
		Y83: "\uEAEB",
		Y84: "\uEAEC",
		Y85: "\uEAED",
		Y86: "\uEAEE",
		Y87: "\uEAEF",
		Y88: "\uEAF0",
		Y89: "\uEAF1",
		Y9: "\uEAF2",
		Y90: "\uEAF3"
	};

	// packages/avm-ui/src/components/icon/icon.tsx
	var classPrefix$2 = "adm-icon";
	var Icon = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Icon, _Component);
		function Icon() {
			var _this;
			for (
				var _len = arguments.length, args = new Array(_len), _key = 0;
				_key < _len;
				_key++
			) {
				args[_key] = arguments[_key];
			}
			_this = _Component.call.apply(_Component, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this), "css", function() {
				return (
					'@font-face {font-family: "' +
					fontName +
					"\"; src: url('../../components/avm-ui/icon/" +
					fontName +
					".ttf') format('truetype');}\n        ." +
					classPrefix$2 +
					" {font-family: " +
					fontName +
					";}"
				);
			});
			_defineProperty(_assertThisInitialized(_this), "render", function(props) {
				var name = props.name || props.type;
				if (/\d/.test(name)) {
					name.replace(/(\d)/);
				}
				var char = props.code
					? String.fromCharCode(props.code) || props.children
					: icons[name];
				return apivm.h(
					"text",
					{
						style: _objectSpread2({}, props),
						class:
							classPrefix$2 +
							" " +
							classPrefix$2 +
							"-font-icon-text " +
							(props.class || props.className || "")
					},
					char
				);
			});
			return _this;
		}
		return Icon;
	})(Component);

	Icon = __decorateClass$1([tag("avm-icon")], Icon);

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default = Icon;

	// packages/avm-ui/src/components/nav-bar/nav-bar.tsx
	var classPrefix2 = "adm-nav-bar";
	var defaultProps$2 = {
		back: "",
		backArrow: true
	};

	var NavBar = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(NavBar, _Component2);
		function NavBar() {
			var _this2;
			for (
				var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
				_key2 < _len2;
				_key2++
			) {
				args[_key2] = arguments[_key2];
			}
			_this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this2), "render", function(props) {
				props = Object.assign({}, defaultProps$2, props);
				var _props = props,
					back = _props.back,
					backArrow = _props.backArrow,
					right = _props.right,
					style = _props.style;
				var rightNode;
				if (right) {
					if (typeof right === "string") {
						rightNode = right;
					} else if (right.children) {
						rightNode = right.children;
					}
				}
				return apivm.h(
					"div",
					{className: classNames(classPrefix2), style: style},
					apivm.h(
						"div",
						{className: classPrefix2 + "-left", role: "button"},
						back !== null &&
							apivm.h(
								"div",
								{className: classPrefix2 + "-back", onClick: props.onBack},
								backArrow &&
									apivm.h(
										"div",
										{className: classPrefix2 + "-back-arrow"},
										backArrow === true || backArrow === "true"
											? apivm.h(Icon_default, {code: 59988, fontSize: "18"})
											: backArrow
									),
								apivm.h("text", {"aria-hidden": "true"}, back)
							),

						apivm.h("text", {className: classPrefix2 + "-left-text"}, props.left)
					),

					props.children &&
						Boolean(props.children) &&
						typeof props.children[0] === "string"
						? apivm.h("text", {className: classPrefix2 + "-title"}, props.children)
						: apivm.h("div", {className: classPrefix2 + "-title"}, props.children),
					apivm.h("div", {className: classPrefix2 + "-right"}, rightNode)
				);
			});
			_defineProperty(_assertThisInitialized(_this2), "css", function() {
				return "\n    .adm-nav-bar {\n      display: flex;\n      align-items: center;\n      flex-direction: row;\n      height: 45px;\n      border-bottom: none;\n      padding: 0 12px;\n      white-space: nowrap;\n    \n      \n    }\n    .adm-nav-bar-left{\n      flex: 1;\n      flex-direction: row;\n    }\n    .adm-nav-bar-right {\n      flex: 1;\n      flex-direction: row;\n      text-align: right;\n      justify-content: flex-end;\n    }\n    \n  \n    .adm-nav-bar-back {\n      display: flex;\n      margin-right: 12px;\n      flex-direction: row;\n      margin: 6px 0;\n      cursor: pointer;\n    }\n    .adm-nav-bar-back-arrow {\n      margin-top: 2px;\n      font-size: 18px;\n      margin-right: 6px;\n      flex-direction: row;\n    }\n  \n    .adm-nav-bar-left-text {\n      padding: 6px 0;\n    }\n    .adm-nav-bar-title {\n      flex: auto;\n      text-align: center;\n      overflow: hidden;\n      white-space: nowrap;\n      font-size: 18px;\n      max-width: 60%;\n      text-overflow: ellipsis;\n      justify-content: center;\n      padding: 0 12px;\n    }\n    \n    ";
			});
			return _this2;
		}
		return NavBar;
	})(Component);
	avm.define("avm-nav-bar", NavBar);

	var checkLabelType = function checkLabelType(ele) {
		return Object.prototype.toString.call(ele);
	};
	var formatLabel = function formatLabel(ele, cls, style) {
		if (style === void 0) {
			style = {};
		}
		if (checkLabelType(ele) === "[object Array]") {
			return ele.map(function(el) {
				return formatLabel(el, cls, style);
			});
		}
		return checkLabelType(ele) === "[object String]"
			? apivm.h("span", {className: cls, style: style}, ele)
			: apivm.h("div", {className: cls, style: style}, ele);
	};

	// packages/avm-ui/src/components/popover/popover.tsx
	var classPrefix$3 = "adm-popover";
	var defaultProps$3 = {
		mode: "light",
		isMenu: false,
		placement: "top",
		visible: false,
		zIndex: 1030,
		content: null
	};

	var Popover = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Popover, _Component);
		function Popover() {
			var _this;
			for (
				var _len = arguments.length, args = new Array(_len), _key = 0;
				_key < _len;
				_key++
			) {
				args[_key] = arguments[_key];
			}
			_this = _Component.call.apply(_Component, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this), "data", {
				visible: _this.props.visible || false,
				boxRect: {},
				popupRect: {}
			});
			_defineProperty(
				_assertThisInitialized(_this),
				"render",

				function(props) {
					var _document$getElementB,
						_document$getElementB2,
						_classNames,
						_classNames2,
						_classNames3,
						_classNames4,
						_classNames5;
					_this.props = Object.assign({}, defaultProps$3, props);
					var _this$props = _this.props,
						children = _this$props.children,
						mode = _this$props.mode,
						isMenu = _this$props.isMenu,
						placement = _this$props.placement,
						visibleChange = _this$props.visibleChange,
						zIndex = _this$props.zIndex,
						content = _this$props.content,
						actions = _this$props.actions,
						isHorizontalMenu = _this$props.isHorizontalMenu,
						id = _this$props.id,
						popupId = _this$props.popupId;
					var boxRect =
						(_document$getElementB = document.getElementById(id)) == null
							? void 0
							: _document$getElementB.getBoundingClientRect();
					var popupRect =
						(_document$getElementB2 = document.getElementById(popupId)) == null
							? void 0
							: _document$getElementB2.getBoundingClientRect();
					var popupStyle = {
						zIndex: zIndex,
						visibility: _this.data.visible === true ? "visible" : "hidden"
					};
					var sharpStyle = {};
					var topVal =
						-(
							((popupRect == null ? void 0 : popupRect.height) || 0) +
							((boxRect == null ? void 0 : boxRect.height) || 0) -
							20
						) + "px";
					var leftVal =
						-(((popupRect == null ? void 0 : popupRect.width) || 0) + 10) + "px";
					if (["top", "top-start", "top-end"].includes(placement)) {
						popupStyle.top = topVal;
					}
					if (["bottom", "bottom-start", "bottom-end"].includes(placement)) {
						popupStyle.bottom = topVal;
					}
					if (["left", "left-start", "left-end"].includes(placement)) {
						popupStyle.left = leftVal;
					}
					if (["right", "right-start", "right-end"].includes(placement)) {
						popupStyle.right = leftVal;
					}
					if (["top", "bottom"].includes(placement)) {
						sharpStyle.left =
							(((popupRect == null ? void 0 : popupRect.width) || 0) - 10) / 2 + "px";
						popupStyle.left =
							-(
								(((popupRect == null ? void 0 : popupRect.width) || 0) -
									((boxRect == null ? void 0 : boxRect.width) || 0)) /
								2
							) + "px";
					} else if (["top-start", "bottom-start"].includes(placement)) {
						sharpStyle.left = "20px";
						popupStyle.left = 0;
					} else if (["top-end", "bottom-end"].includes(placement)) {
						sharpStyle.right = "20px";
						popupStyle.right = 0;
					}
					if (placement === "left" || placement === "right") {
						popupStyle.top =
							-(
								(((popupRect == null ? void 0 : popupRect.height) || 0) -
									((boxRect == null ? void 0 : boxRect.height) || 0)) /
								2
							) + "px";
						sharpStyle.top =
							(((popupRect == null ? void 0 : popupRect.height) || 0) - 10) / 2 + "px";
					} else if (placement === "left-start" || placement === "right-start") {
						sharpStyle.top = 0;
						popupStyle.top = 0;
					} else if (placement === "left-end" || placement === "right-end") {
						sharpStyle.bottom = 0;
						popupStyle.bottom = 0;
					}
					var popupCls = classNames(
						classPrefix$3 + "-popup",
						classPrefix$3 + "-popup-" + mode,
						((_classNames = {}),
						(_classNames[classPrefix$3 + "-popup-default"] = !isHorizontalMenu),
						(_classNames[classPrefix$3 + "-popup-horizontal"] = isHorizontalMenu),
						_classNames)
					);

					var sharpCls = classNames(
						classPrefix$3 + "-popup-sharp",
						classPrefix$3 + "-popup-sharp-" + mode,
						classPrefix$3 + "-popup-sharp-" + placement
					);
					var popupTextCls = classNames(
						classPrefix$3 + "-popup-text",
						classPrefix$3 + "-popup-text-" + mode
					);
					var popupMenuCls = classNames(
						classPrefix$3 + "-popup-menu",
						classPrefix$3 + "-popup-menu-" + mode,
						((_classNames2 = {}),
						(_classNames2[classPrefix$3 + "-popup-menu-default"] = !isHorizontalMenu),
						(_classNames2[
							classPrefix$3 + "-popup-menu-horizontal"
						] = isHorizontalMenu),
						_classNames2)
					);

					var popupMenuItemCls = classNames(
						classPrefix$3 + "-popup-menu-item",
						((_classNames3 = {}),
						(_classNames3[
							classPrefix$3 + "-popup-menu-horizontal-item"
						] = isHorizontalMenu),
						(_classNames3[
							classPrefix$3 + "-popup-menu-default-item"
						] = !isHorizontalMenu),
						_classNames3)
					);

					var popupMenuItemImgCls = classNames(
						classPrefix$3 + "-popup-menu-item-img",
						((_classNames4 = {}),
						(_classNames4[
							classPrefix$3 + "-popup-menu-horizontal-item-img"
						] = isHorizontalMenu),
						_classNames4)
					);

					var popupMenuItemTextCls = classNames(
						classPrefix$3 + "-popup-menu-item-text",
						classPrefix$3 + "-popup-menu-item-text-" + mode,
						((_classNames5 = {}),
						(_classNames5[
							classPrefix$3 + "-popup-menu-horizontal-item-text"
						] = isHorizontalMenu),
						_classNames5)
					);

					return apivm.h(
						"div",
						{className: classPrefix$3},
						apivm.h(
							"div",
							{
								className: classPrefix$3 + "-con",
								id: id,
								onClick: function onClick() {
									_this.data.visible = !_this.data.visible;
									visibleChange == null ? void 0 : visibleChange();
								}
							},
							formatLabel(children)
						),
						apivm.h(
							"div",
							{style: popupStyle, id: popupId, className: popupCls},
							apivm.h("div", {className: sharpCls, style: sharpStyle}),
							!isMenu && apivm.h("span", {className: popupTextCls}, content),
							isMenu &&
								actions &&
								apivm.h(
									"div",
									{className: popupMenuCls},
									actions.map(function(item, index) {
										var _classNames6, _classNames7;
										var key = item.key,
											text = item.text,
											icon = item.icon,
											disabled = item.disabled;
										return apivm.h(
											"div",
											{
												className: classNames(
													popupMenuItemCls,
													((_classNames6 = {}),
													(_classNames6[
														classPrefix$3 + "-popup-menu-item-disabled"
													] = disabled),
													(_classNames6[classPrefix$3 + "-popup-menu-item-nobottom-border"] =
														index === actions.length - 1),
													_classNames6)
												),
												key: key,
												onClick: function onClick() {
													_this.props.actionClick == null
														? void 0
														: _this.props.actionClick(item);
												}
											},
											icon &&
												apivm.h("img", {
													src: icon,
													alt: "icon",
													className: popupMenuItemImgCls
												}),
											apivm.h(
												"span",
												{
													className: classNames(
														popupMenuItemTextCls,
														((_classNames7 = {}),
														(_classNames7[
															classPrefix$3 + "-popup-menu-item-text-center"
														] = !icon),
														_classNames7)
													)
												},
												text
											)
										);
									})
								)
						)
					);
				}
			);
			_defineProperty(_assertThisInitialized(_this), "css", function() {
				return "\n    .adm-popover-popup {\n      position: absolute;\n      align-items: center;\n      justify-content: center;\n    }\n    .adm-popover-popup-default {\n      width: 128px;\n    }\n    .adm-popover-popup-horizontal {\n      width: 288px;\n    }\n    .adm-popover-popup-light {\n      background: #f5f5f5;\n    }\n    .adm-popover-popup-dark {\n      background: #333;\n    }\n    .adm-popover-popup-text {\n      color: #333;\n      font-size: 14px;\n      padding: 12px;\n    }\n    .adm-popover-popup-text-dark {\n      color: #fff;\n    }\n    .adm-popover-popup-sharp {\n      position: absolute;\n      border-width: 10px;\n      border-style: solid;\n      border-color: transparent;\n      border-bottom-color: #f5f5f5;\n    }\n    .adm-popover-popup-sharp-dark {\n      border-bottom-color: #333;\n    }\n    .adm-popover-popup-sharp-top,\n    .adm-popover-popup-sharp-top-start,\n    .adm-popover-popup-sharp-top-end {\n      transform: rotate(180deg);\n      bottom: -20px;\n    }\n    .adm-popover-popup-sharp-bottom,\n    .adm-popover-popup-sharp-bottom-start,\n    .adm-popover-popup-sharp-bottom-end {\n      transform: rotate(0);\n      top: -20px;\n    }\n    .adm-popover-popup-sharp-left,\n    .adm-popover-popup-sharp-left-start,\n    .adm-popover-popup-sharp-left-end {\n      transform: rotate(90deg);\n      right: -20px;\n    }\n    .adm-popover-popup-sharp-right,\n    .adm-popover-popup-sharp-right-start,\n    .adm-popover-popup-sharp-right-end {\n      transform: rotate(-90deg);\n      left: -20px;\n    }\n    .adm-popover-popup-menu-light {\n      background: #f5f5f5;\n    }\n    .adm-popover-popup-menu-dark {\n      background: #333;\n    }\n    .adm-popover-popup-menu-item {\n      display: flex;\n      padding: 10px 0;\n      border-bottom: 0.5px solid #e8e8e8;\n    }\n    .adm-popover-popup-menu-item-disabled {\n      opacity: 0.6;\n      cursor: not-allowed;\n    }\n    .adm-popover-popup-menu-item-nobottom-border {\n      border-bottom: none;\n    }\n    .adm-popover-popup-menu-item-text {\n      font-size: 14px;\n      color: #333;\n      flex: 1;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    .adm-popover-popup-menu-item-text-dark {\n      color: #fff;\n    }\n    .adm-popover-popup-menu-item-text-center {\n      text-align: center;\n    }\n    .adm-popover-popup-menu-item-img {\n      flex-shrink: 0;\n      width: 26px;\n      height: 26px;\n      margin-right: 12px;\n    }\n    .adm-popover-popup-menu-default {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: 0 14px;\n    }\n    .adm-popover-popup-menu-default-item {\n      flex-direction: row;\n      align-items: center;\n      width: 100%;\n    }\n    .adm-popover-popup-menu-horizontal {\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-items: center;\n      max-width: 288px;\n    }\n    .adm-popover-popup-menu-horizontal-item {\n      padding: 0;\n      width: 72px;\n      height: 72px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      border-bottom: none;\n    }\n    .adm-popover-popup-menu-horizontal-item-img {\n      margin-bottom: 8px;\n      margin-right: 0;\n    }\n    .adm-popover-popup-menu-horizontal-item-text {\n      flex: none;\n      width: 100%;\n      text-align: center;\n    }\n    \n    ";
			});
			return _this;
		}
		return Popover;
	})(Component);
	avm.define("avm-popover", Popover);

	var DemoPopover = /*@__PURE__*/ (function(Component) {
		function DemoPopover(props) {
			Component.call(this, props);
			this.data = {
				actionList: [
					{
						key: "key1",
						text: "选择标题",
						icon: null,
						disabled: false
					},
					{
						key: "key2",
						text: "选择标题",
						icon: null,
						disabled: false
					},
					{
						key: "key3",
						text: "选择标题",
						icon: null,
						disabled: false
					}
				],

				actionList1: [
					{
						key: "key1",
						text: "选择标题",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
						disabled: false
					},
					{
						key: "key2",
						text: "选择标题",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
						disabled: false
					},
					{
						key: "key3",
						text: "选择标题",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
						disabled: false
					},
					{
						key: "key4",
						text: "选择标题",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
						disabled: false
					},
					{
						key: "key5",
						text: "选择标题",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
						disabled: false
					},
					{
						key: "key6",
						text: "选择标题",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
						disabled: false
					},
					{
						key: "key7",
						text: "选择标题",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
						disabled: false
					},
					{
						key: "key8",
						text: "选择标题",
						icon:
							"http://ae8b3ee28597856d3283.qiniucdn.apicloud-system.com/apicloud/3dd2bde750a04efd60869b5f9efdb3ca.png",
						disabled: false
					}
				]
			};
		}

		if (Component) DemoPopover.__proto__ = Component;
		DemoPopover.prototype = Object.create(Component && Component.prototype);
		DemoPopover.prototype.constructor = DemoPopover;
		DemoPopover.prototype.back = function() {
			api.closeWin();
		};
		DemoPopover.prototype.actionClick = function(e) {
			api.toast({
				msg: "点击了"
			});
		};
		DemoPopover.prototype.render = function() {
			return apivm.h(
				"scroll-view",
				{"scroll-y": true, "show-scrollbar": false, class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "Popover"),
				apivm.h(
					DemoBlock,
					{title: "不同方向"},
					apivm.h(
						"avm-space",
						{wrap: true},
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "top",
								id: "popover-top",
								popupId: "popover-top-popup"
							},
							apivm.h("avm-button", null, "top")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "top-start",
								id: "popover-top-start",
								popupId: "popover-top-start-popup"
							},
							apivm.h("avm-button", null, "top-start")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "top-end",
								id: "popover-top-end",
								popupId: "popover-top-end-popup"
							},
							apivm.h("avm-button", null, "top-end")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "bottom",
								id: "popover-bottom",
								popupId: "popover-bottom-start-popup"
							},
							apivm.h("avm-button", null, "bottom")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "bottom-start",
								id: "popover-bottom-start",
								popupId: "popover-bottom-start-popup"
							},
							apivm.h("avm-button", null, "bottom-start")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "bottom-end",
								id: "popover-bottom-end",
								popupId: "popover-bottom-end-popup"
							},
							apivm.h("avm-button", null, "bottom-end")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "left",
								id: "popover-left",
								popupId: "popover-left-popup"
							},
							apivm.h("avm-button", null, "left")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "left-start",
								id: "popover-left-start",
								popupId: "popover-left-start-popup"
							},
							apivm.h("avm-button", null, "left-start")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "left-end",
								id: "popover-left-end",
								popupId: "popover-left-end-popup"
							},
							apivm.h("avm-button", null, "left-end")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "right",
								id: "popover-right",
								popupId: "popover-right-popup"
							},
							apivm.h("avm-button", null, "right")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "right-start",
								id: "popover-right-start",
								popupId: "popover-right-start-popup"
							},
							apivm.h("avm-button", null, "right-start")
						),
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								placement: "right-end",
								id: "popover-right-end",
								popupId: "popover-right-end-popup"
							},
							apivm.h("avm-button", null, "right-end")
						)
					)
				),
				apivm.h(
					DemoBlock,
					{title: "黑色样式"},
					apivm.h(
						"avm-space",
						{wrap: true},
						apivm.h(
							"avm-popover",
							{
								content: "Hello world",
								mode: "dark",
								id: "popover-dark",
								popupId: "popover-dark-popup"
							},
							apivm.h("avm-button", null, "黑色样式")
						)
					)
				),
				apivm.h(
					DemoBlock,
					{title: "菜单列表"},
					apivm.h(
						"avm-space",
						{wrap: true},
						apivm.h(
							"avm-popover",
							{
								isMenu: true,
								actions: this.data.actionList,
								placement: "right",
								id: "popover-right-menu",
								popupId: "popover-right-menu-popup",
								onActionClick: this.actionClick
							},
							apivm.h("avm-button", null, "菜单列表")
						)
					)
				),
				apivm.h(
					DemoBlock,
					{title: "菜单列表-横向展示"},
					apivm.h(
						"avm-space",
						{wrap: true},
						apivm.h(
							"avm-popover",
							{
								isMenu: true,
								isHorizontalMenu: true,
								mode: "dark",
								actions: this.data.actionList1,
								placement: "top",
								id: "popover-top-menu-row",
								popupId: "popover-top-menu-row-popups"
							},
							apivm.h("avm-button", null, "菜单列表-横向展示")
						)
					)
				),
				apivm.h(
					DemoBlock,
					{title: "菜单列表-黑色样式"},
					apivm.h(
						"avm-space",
						{wrap: true},
						apivm.h(
							"avm-popover",
							{
								isMenu: true,
								actions: this.data.actionList,
								mode: "dark",
								placement: "right",
								id: "popover-right-menu",
								popupId: "popover-right-menu-popup"
							},
							apivm.h("avm-button", null, "菜单列表-黑色样式")
						)
					)
				),
				apivm.h(
					DemoBlock,
					{title: "菜单列表-带icon"},
					apivm.h(
						"avm-space",
						{wrap: true},
						apivm.h(
							"avm-popover",
							{
								isMenu: true,
								actions: this.data.actionList1,
								placement: "right",
								id: "popover-right-menu-icon",
								popupId: "popover-right-menu-icon-popup"
							},
							apivm.h("avm-button", null, "菜单列表-带icon")
						)
					)
				)
			);
		};

		return DemoPopover;
	})(Component);
	DemoPopover.css = {
		".page": {zIndex: "0", width: "100%", background: "#f2f2f2"}
	};
	DemoPopover.csslink = ["../../components/avm-ui/demos/index.css"];
	apivm.define("demo-popover", DemoPopover);
	apivm.render(apivm.h("demo-popover", null), "body");
})();
