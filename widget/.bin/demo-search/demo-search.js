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

	function mergeProps(defaultProps2, props) {
		return Object.assign({}, defaultProps2, props);
	}

	// packages/avm-ui/src/components/space/space.tsx
	var classPrefix = "adm-space";
	var defaultProps = {
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
				props = mergeProps(defaultProps, props);
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
								classPrefix,
								((_classNames = {}),
								(_classNames[classPrefix + "-wrap"] = props.wrap),
								(_classNames[classPrefix + "-" + direction + "-wrap"] = props.wrap),
								(_classNames[classPrefix + "-block"] = props.block),
								(_classNames[classPrefix + "-" + direction] = true),
								(_classNames[classPrefix + "-align-" + props.align] = !!props.align),
								(_classNames[
									classPrefix + "-justify-" + props.justify
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
										classPrefix + "-item",
										classPrefix + "-" + direction + "-item",
										((_classNames2 = {}),
										(_classNames2[classPrefix + "-" + direction + "-item-last"] =
											index === props.children.length - 1),
										(_classNames2[classPrefix + "-" + direction + "-wrap-item"] =
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
	var classPrefix$1 = "adm-button";
	var defaultProps$1 = {
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
			props = Object.assign({}, defaultProps$1, props);
			var disabled = props.disabled || props.loading;
			var _props = props,
				shape = _props.shape,
				fill = _props.fill;
			var btnCls = classNames(
				classPrefix$1,
				props.color ? classPrefix$1 + "-" + props.color : null,
				((_classNames = {}),
				(_classNames[classPrefix$1 + "-block"] = props.block),
				(_classNames[classPrefix$1 + "-disabled"] = disabled),
				(_classNames[classPrefix$1 + "-" + props.color + "-fill-outline"] =
					fill === "outline"),
				(_classNames[classPrefix$1 + "-" + props.color + "-fill-none"] =
					fill === "none"),
				(_classNames[classPrefix$1 + "-" + props.size] = true),
				(_classNames[classPrefix$1 + "-loading"] = props.loading),
				_classNames),
				classPrefix$1 + "-shape-" + shape
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

	var __defProp$2 = Object.defineProperty;
	var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
	var __decorateClass$2 = function __decorateClass(
		decorators,
		target,
		key,
		kind
	) {
		var result =
			kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
		for (var i = decorators.length - 1, decorator; i >= 0; i--) {
			if ((decorator = decorators[i]))
				result =
					(kind ? decorator(target, key, result) : decorator(result)) || result;
		}
		if (kind && result) __defProp$2(target, key, result);
		return result;
	};

	// packages/avm-ui/src/components/icon/icon.config.json
	var fontName$1 = "avm-icon";

	// packages/avm-ui/src/utils/tag.ts
	function tag$1(name) {
		return function(target) {
			avm.define(name, target);
		};
	}

	// packages/avm-ui/src/components/icon/icons.json
	var icons$1 = {
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
	var classPrefix$3 = "adm-icon";
	var Icon$1 = /*#__PURE__*/ (function(_Component) {
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
					fontName$1 +
					"\"; src: url('../../components/avm-ui/icon/" +
					fontName$1 +
					".ttf') format('truetype');}\n        ." +
					classPrefix$3 +
					" {font-family: " +
					fontName$1 +
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
					: icons$1[name];
				return apivm.h(
					"text",
					{
						style: _objectSpread2({}, props),
						class:
							classPrefix$3 +
							" " +
							classPrefix$3 +
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

	Icon$1 = __decorateClass$2([tag$1("avm-icon")], Icon$1);

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default$1 = Icon$1;

	// packages/avm-ui/src/components/search/search.tsx
	var classPrefix2$1 = "adm-search";
	var defaultProps$3 = {
		clearable: true,
		showCancelButton: false,
		defaultValue: "",
		clearOnCancel: true,
		cancelText: "\u53D6\u6D88",
		cancelTextColor: "#333",
		bgColor: "#f5f5f5",
		borderRadius: "3px",
		maxLength: 500,
		minLength: 0
	};

	var Search = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(Search, _Component2);
		function Search() {
			var _this2;
			for (
				var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
				_key2 < _len2;
				_key2++
			) {
				args[_key2] = arguments[_key2];
			}
			_this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this2), "data", {
				searchVal: _this2.props.value,
				hasFocus: false
			});
			_defineProperty(
				_assertThisInitialized(_this2),
				"setSearchValue",

				function(val) {
					_this2.data.searchVal = val;
					_this2.props.handleChange &&
						_this2.props.handleChange(_this2.data.searchVal);
				}
			);
			_defineProperty(_assertThisInitialized(_this2), "setHasFocus", function(
				focus
			) {
				_this2.data.hasFocus = focus;
			});
			_defineProperty(_assertThisInitialized(_this2), "render", function(props) {
				var _classNames, _classNames2;
				_this2.props = Object.assign({}, defaultProps$3, props);
				var _this2$props = _this2.props,
					showCancelButton = _this2$props.showCancelButton,
					clearOnCancel = _this2$props.clearOnCancel,
					clearable = _this2$props.clearable,
					bgColor = _this2$props.bgColor,
					borderRadius = _this2$props.borderRadius,
					_this2$props$placehol = _this2$props.placeholderColor,
					placeholderColor =
						_this2$props$placehol === void 0 ? "#ccc" : _this2$props$placehol,
					cancelTextColor = _this2$props.cancelTextColor,
					inputClear = _this2$props.inputClear,
					handleCancel = _this2$props.handleCancel,
					inputFocus = _this2$props.inputFocus,
					inputBlur = _this2$props.inputBlur,
					handleSearch = _this2$props.handleSearch,
					onEnterPress = _this2$props.onEnterPress,
					onKeyDown = _this2$props.onKeyDown,
					maxLength = _this2$props.maxLength,
					_this2$props$placehol2 = _this2$props.placeholder,
					placeholder =
						_this2$props$placehol2 === void 0
							? "\u8BF7\u8F93\u5165"
							: _this2$props$placehol2,
					cancelText = _this2$props.cancelText;
				var handleKeydown = function handleKeydown(e) {
					if (onEnterPress && (e.code === "Enter" || e.keyCode === 13)) {
						handleSearch && handleSearch(_this2.data.searchVal);
					}
					onKeyDown && onKeyDown(e);
				};
				var renderCancelButton = function renderCancelButton() {
					var isShowCancel = false;
					if (typeof showCancelButton === "function") {
						isShowCancel = showCancelButton(
							_this2.data.hasFocus,
							_this2.data.searchVal
						);
					} else {
						isShowCancel = showCancelButton && !!_this2.data.searchVal;
					}
					return (
						isShowCancel &&
						apivm.h(
							"span",
							{
								className: classPrefix2$1 + "-suffix",
								style: {color: cancelTextColor},
								onClick: function onClick() {
									if (clearOnCancel) {
										_this2.setSearchValue("");
										inputClear == null ? void 0 : inputClear();
									}
									handleCancel == null ? void 0 : handleCancel();
								}
							},
							cancelText
						)
					);
				};
				var boxStyles = {
					background: bgColor,
					borderRadius: borderRadius
				};

				var boxCls = classNames(
					classPrefix2$1 + "-input-box",
					((_classNames = {}),
					(_classNames[classPrefix2$1 + "-active-input-box"] = _this2.data.hasFocus),
					_classNames)
				);

				return apivm.h(
					"div",
					{
						className: classNames(
							classPrefix2$1,
							((_classNames2 = {}),
							(_classNames2[classPrefix2$1 + "-active"] = _this2.data.hasFocus),
							_classNames2)
						)
					},

					apivm.h(
						"div",
						{className: boxCls, style: boxStyles},
						apivm.h(
							"div",
							{className: classPrefix2$1 + "-input-box-icon"},
							apivm.h(Icon_default$1, {code: 60023, color: "#ccc"})
						),
						apivm.h("input", {
							className: classPrefix2$1 + "-input",
							value: _this2.data.searchVal,
							onInput: function onInput(e) {
								_this2.setSearchValue(e.detail.value);
							},
							maxLength: maxLength,
							placeholder: placeholder,
							"placeholder-style": "color: " + placeholderColor,
							clearable: clearable,
							onFocus: function onFocus(e) {
								_this2.setHasFocus(true);
								inputFocus == null ? void 0 : inputFocus(e);
							},
							onBlur: function onBlur(e) {
								setTimeout(function() {
									_this2.setHasFocus(false);
								}, 300);
								inputBlur == null ? void 0 : inputBlur(e);
							},
							onClear: inputClear,
							onKeyDown: handleKeydown
						}),
						!!_this2.data.searchVal &&
							_this2.data.hasFocus &&
							apivm.h(
								"div",
								{
									className: classPrefix2$1 + "-clear",
									onClick: function onClick() {
										_this2.setSearchValue("");
										inputClear == null ? void 0 : inputClear();
									}
								},
								apivm.h(Icon_default$1, {
									code: 59938,
									color: "#bababa",
									className: classPrefix2$1 + "-clear-icon"
								})
							)
					),

					renderCancelButton()
				);
			});
			_defineProperty(_assertThisInitialized(_this2), "css", function() {
				return "\n    .adm-search {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n    }\n    .adm-search-input-box {\n      width: 100%;\n      flex: 1;\n      border: solid 1px transparent;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n    .adm-search-input-box-icon {\n      flex: none;\n      padding-left: 8px;\n      font-size: 16px;\n    }\n    .adm-search-input {\n      padding-left: 8px;\n      flex: 1;\n      line-height: 1.5;\n      background: transparent;\n      border: 0;\n      outline: none;\n      appearance: none;\n      min-height: 1.5em;\n      font-size: 14px;\n      color: #333;\n    }\n    .adm-search-suffix {\n      flex: none;\n      margin-left: 8px;\n      font-size: 16px;\n    }\n    .adm-search-clear {\n      flex: none;\n      margin: 0 8px;\n      padding: 3px;\n      cursor: pointer;\n    }\n    .adm-search-clear-icon {\n      width: 16px;\n      height: 16px;\n    }\n    ";
			});
			return _this2;
		}
		return Search;
	})(Component);
	avm.define("avm-search", Search);

	var DemoSearch = /*@__PURE__*/ (function(Component) {
		function DemoSearch(props) {
			Component.call(this, props);
			this.data = {
				value: ""
			};
		}

		if (Component) DemoSearch.__proto__ = Component;
		DemoSearch.prototype = Object.create(Component && Component.prototype);
		DemoSearch.prototype.constructor = DemoSearch;
		DemoSearch.prototype.back = function() {
			api.closeWin();
		};
		DemoSearch.prototype.handleClick = function(e) {
			api.toast({
				msg: JSON.stringify(e),
				location: "middle"
			});
		};
		DemoSearch.prototype.onChange = function(val) {
			this.data.value = val;
		};
		DemoSearch.prototype.onFocus = function() {
			api.toast({
				msg: "获得焦点"
			});
		};
		DemoSearch.prototype.onBlur = function() {
			api.toast({
				msg: "失去焦点"
			});
		};
		DemoSearch.prototype.onClear = function() {
			api.toast({
				msg: "清空内容"
			});
		};
		DemoSearch.prototype.onCancel = function() {
			api.toast({
				msg: "取消搜索"
			});
		};
		DemoSearch.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "Search"),
				apivm.h(
					"scroll-view",
					null,
					apivm.h(
						DemoBlock,
						{title: "基础用法"},
						apivm.h("avm-search", {placeholder: "请输入内容", value: "123"})
					),
					apivm.h(
						DemoBlock,
						{title: "带取消按钮的搜索框"},
						apivm.h("avm-search", {
							placeholder: "请输入内容",
							showCancelButton: true,
							handleChange: function(val) {
								return this$1.onChange(val);
							}
						})
					),
					apivm.h(
						DemoBlock,
						{title: "取消按钮长显"},
						apivm.h("avm-search", {
							placeholder: "请输入",
							cancelText: "取消",
							cancelTextColor: "#9AC200",
							showCancelButton: function() {
								return true;
							},
							handleChange: function(val) {
								return this$1.onChange(val);
							}
						})
					),
					apivm.h(
						DemoBlock,
						{title: "事件监听和 Ref"},
						apivm.h(
							"avm-space",
							{block: true, direction: "vertical"},
							apivm.h("avm-search", {
								placeholder: "请输入内容",
								showCancelButton: true,
								inputFocus: function() {
									return this$1.onFocus();
								},
								inputBlur: function() {
									return this$1.onBlur();
								},
								handleClear: function() {
									return this$1.onClear();
								},
								handleCancel: function() {
									return this$1.onCancel();
								}
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "自定义样式"},
						apivm.h("avm-search", {
							placeholder: "请输入内容",
							showCancelButton: true,
							borderRadius: "100px",
							bgColor: "#f5f5f5",
							placeholderColor: "#f00"
						})
					)
				)
			);
		};

		return DemoSearch;
	})(Component);
	DemoSearch.css = {
		".page": {
			height: "100%",
			width: "100%",
			background: "#f2f2f2",
			padding: "0 16px"
		}
	};
	DemoSearch.csslink = ["../../components/avm-ui/demos/index.css"];
	apivm.define("demo-search", DemoSearch);
	apivm.render(apivm.h("demo-search", null), "body");
})();