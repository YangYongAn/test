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
	var classPrefix$1 = "adm-icon";
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
					classPrefix$1 +
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
							classPrefix$1 +
							" " +
							classPrefix$1 +
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

	Icon = __decorateClass([tag("avm-icon")], Icon);

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default = Icon;

	// packages/avm-ui/src/components/nav-bar/nav-bar.tsx
	var classPrefix2 = "adm-nav-bar";
	var defaultProps$1 = {
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
				props = Object.assign({}, defaultProps$1, props);
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

	// packages/avm-ui/src/utils/attach-properties-to-component.ts
	function attachPropertiesToComponent(component, properties) {
		var ret = component;
		for (var key in properties) {
			if (properties.hasOwnProperty(key)) {
				ret[key] = properties[key];
			}
		}
		return ret;
	}

	// packages/avm-ui/src/utils/format-label.tsx
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
	var classPrefix$2 = "adm-icon";
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
					classPrefix$2 +
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

	Icon$1 = __decorateClass$1([tag$1("avm-icon")], Icon$1);

	// packages/avm-ui/src/components/checkbox/myCheckbox.tsx
	var classPrefix2$1 = "adm-checkbox";
	var MyCheckbox = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(MyCheckbox, _Component2);
		function MyCheckbox() {
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
				checked: _this2.props.checked
			});
			_defineProperty(
				_assertThisInitialized(_this2),
				"setChecked",

				function() {
					if (!_this2.props.indeterminate) {
						_this2.data.checked = !_this2.data.checked;
						_this2.props.onChange == null
							? void 0
							: _this2.props.onChange(_this2.data.checked);
					}
				}
			);
			_defineProperty(_assertThisInitialized(_this2), "render", function(props) {
				var _classNames, _classNames2, _classNames3, _classNames4, _classNames5;
				var _this2$props = _this2.props,
					_this2$props$iconSize = _this2$props.iconSize,
					iconSize =
						_this2$props$iconSize === void 0 ? "17px" : _this2$props$iconSize,
					_this2$props$fontSize = _this2$props.fontSize,
					fontSize =
						_this2$props$fontSize === void 0 ? "16px" : _this2$props$fontSize,
					_this2$props$gap = _this2$props.gap,
					gap = _this2$props$gap === void 0 ? "8px" : _this2$props$gap,
					_this2$props$disabled = _this2$props.disabled,
					disabled =
						_this2$props$disabled === void 0 ? false : _this2$props$disabled,
					id = _this2$props.id,
					_this2$props$block = _this2$props.block,
					block = _this2$props$block === void 0 ? false : _this2$props$block,
					isLastEle = _this2$props.isLastEle,
					isGroup = _this2$props.isGroup,
					descIsOneLineShow = _this2$props.descIsOneLineShow,
					isTwoHeadArrange = _this2$props.isTwoHeadArrange;
				var boxCls = classNames(
					classPrefix2$1,
					((_classNames = {}),
					(_classNames[classPrefix2$1 + "-checked"] =
						_this2.data.checked && !disabled),
					(_classNames[classPrefix2$1 + "-disabled"] = disabled),
					(_classNames[classPrefix2$1 + "-block"] = block),
					(_classNames[classPrefix2$1 + "-two-headarrange"] = isTwoHeadArrange),
					(_classNames[
						classPrefix2$1 + "-text-has-bottomborder"
					] = isTwoHeadArrange),
					_classNames)
				);

				var iconStyle = {
					width: iconSize,
					height: iconSize,
					lineHeight: iconSize
				};

				var childStyles = {
					fontSize: fontSize,
					paddingLeft: isTwoHeadArrange ? 0 : gap
				};

				var defaultEleIcons = apivm.h(
					"text",
					{
						style: _objectSpread2(
							_objectSpread2({}, iconStyle),
							{},
							{
								fontSize: Number(iconSize.replace("px", "")) - 5 + "px",
								marginLeft: isTwoHeadArrange && descIsOneLineShow ? "8px" : 0
							}
						),
						className: classNames(
							classPrefix2$1 + "-icon",
							((_classNames2 = {}),
							(_classNames2[classPrefix2$1 + "-icon-checked"] =
								_this2.data.checked && !disabled),
							(_classNames2[classPrefix2$1 + "-icon-indeterminate"] =
								props.indeterminate),
							(_classNames2[classPrefix2$1 + "-icon-disabled"] = disabled),
							(_classNames2[classPrefix2$1 + "-icon-disabled-checked"] =
								disabled && _this2.data.checked),
							_classNames2)
						)
					},
					_this2.data.checked
						? apivm.h(Icon$1, {type: "CheckOutline"})
						: props.indeterminate
						? "-"
						: ""
				);
				var iconEles =
					props.icon && props.selectedIcon
						? _this2.data.checked
							? props.selectedIcon
							: props.icon
						: defaultEleIcons;
				var textCls = classNames(
					classPrefix2$1 + "-text",
					((_classNames3 = {}),
					(_classNames3[classPrefix2$1 + "-text-has-bottomborder"] =
						!isTwoHeadArrange && isGroup && !isLastEle),
					(_classNames3[classPrefix2$1 + "-desc-onelineshow"] = descIsOneLineShow),
					_classNames3)
				);

				var labelContent = apivm.h(
					"view",
					{className: textCls},
					formatLabel(
						props.children,
						classNames(
							classPrefix2$1 + "-text-content",
							((_classNames4 = {}),
							(_classNames4[
								classPrefix2$1 + "-desc-onelineshow-content"
							] = descIsOneLineShow),
							_classNames4)
						),
						childStyles
					),
					props.description &&
						apivm.h(
							"span",
							{
								className: classNames(
									classPrefix2$1 + "-text-description",
									((_classNames5 = {}),
									(_classNames5[
										classPrefix2$1 + "-desc-onelineshow-desc"
									] = descIsOneLineShow),
									_classNames5)
								),
								style: {paddingLeft: isTwoHeadArrange ? 0 : gap}
							},
							props.description
						)
				);

				return apivm.h(
					"label",
					{
						className: boxCls,
						style: _objectSpread2({}, props.style),
						onClick: function onClick() {
							!disabled && _this2.setChecked();
						},
						id: id
					},
					!isTwoHeadArrange && iconEles,
					props.children && labelContent,
					isTwoHeadArrange && iconEles
				);
			});
			return _this2;
		}
		return MyCheckbox;
	})(Component);

	// packages/avm-ui/src/components/checkbox/checkbox.tsx
	var Checkbox = /*#__PURE__*/ (function(_Component3) {
		_inheritsLoose(Checkbox, _Component3);
		function Checkbox() {
			var _this3;
			for (
				var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
				_key3 < _len3;
				_key3++
			) {
				args[_key3] = arguments[_key3];
			}
			_this3 = _Component3.call.apply(_Component3, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this3), "data", {
				checked: !!(
					_this3.props.defaultChecked ||
					_this3.props.checked ||
					(_this3.props.defaultValue &&
						_this3.props.defaultValue.includes(_this3.props.value))
				)
			});
			_defineProperty(
				_assertThisInitialized(_this3),
				"setChecked",

				function(val) {
					if (!!!_this3.props.indeterminate) {
						_this3.data.checked = val;
						if (_this3.data.checked) {
							_this3.props.check == null
								? void 0
								: _this3.props.check(_this3.props.value);
						} else {
							_this3.props.uncheck == null
								? void 0
								: _this3.props.uncheck(_this3.props.value);
						}
						_this3.props.handleChange == null
							? void 0
							: _this3.props.handleChange(_this3.data.checked);
					}
				}
			);
			_defineProperty(_assertThisInitialized(_this3), "render", function(props) {
				var label = props.label,
					disabled = props.disabled,
					block = props.block,
					icon = props.icon,
					selectedIcon = props.selectedIcon,
					value = props.value,
					id = props.id,
					iconSize = props.iconSize,
					fontSize = props.fontSize,
					gap = props.gap,
					indeterminate = props.indeterminate,
					_props$isLastEle = props.isLastEle,
					isLastEle = _props$isLastEle === void 0 ? false : _props$isLastEle,
					_props$isGroup = props.isGroup,
					isGroup = _props$isGroup === void 0 ? false : _props$isGroup,
					description = props.description,
					_props$descIsOneLineS = props.descIsOneLineShow,
					descIsOneLineShow =
						_props$descIsOneLineS === void 0 ? false : _props$descIsOneLineS,
					_props$isTwoHeadArran = props.isTwoHeadArrange,
					isTwoHeadArrange =
						_props$isTwoHeadArran === void 0 ? false : _props$isTwoHeadArran;
				return apivm.h(
					MyCheckbox,
					{
						descIsOneLineShow: descIsOneLineShow,
						isTwoHeadArrange: isTwoHeadArrange,
						description: description,
						indeterminate: indeterminate,
						isLastEle: isLastEle,
						isGroup: isGroup,
						icon: icon,
						selectedIcon: selectedIcon,
						checked: _this3.data.checked,
						value: value,
						onChange: function onChange(checked) {
							return _this3.setChecked(checked);
						},
						disabled: disabled,
						id: id,
						iconSize: iconSize,
						fontSize: fontSize,
						gap: gap,
						block: block
					},
					props.children.length ? props.children : label || "\u9009\u9879"
				);
			});
			_defineProperty(_assertThisInitialized(_this3), "css", function() {
				return "\n      .adm-checkbox {\n        display: inline-flex;\n        vertical-align: text-bottom;\n        justify-content: flex-start;\n        align-items: center;\n        cursor: pointer;\n      }\n      .adm-checkbox-two-headarrange {\n        justify-content: space-between;\n      }\n      .adm-checkbox-icon {\n        border-radius: 2px;\n        border: 1px solid #ddd;\n        color: #fff;\n        background: #fff;\n        text-align: center;\n      }\n      .adm-checkbox-icon-checked {\n        background: #9AC200;\n        border-color: #9AC200;\n      }\n      .adm-checkbox-icon-disabled {\n        background: #f2f2f2;\n      }\n      .adm-checkbox-icon-disabled-checked {\n        background: #ddd;\n        color: #fefefe;\n      }\n      .adm-checkbox-icon-indeterminate {\n        border-color: #9AC200;\n        color: #9AC200;\n      }\n      .adm-checkbox-block {\n        display: flex;\n      }\n      .adm-checkbox-content {\n        flex: none;\n      }\n      .adm-checkbox-text {\n        flex: 1;\n        padding-top: 15px;\n        padding-bottom: 15px;\n        display: flex;\n        flex-direction: column;\n      }\n      .adm-checkbox-text-has-bottomborder {\n        border-bottom: 1px solid #e8e8e8;\n      }\n      .adm-checkbox-text-content {\n        flex: 1;\n        flex-wrap: wrap;\n      }\n      .adm-checkbox-text-description {\n        flex: 1;\n        flex-wrap: wrap;\n        font-size: 12px;\n        color: #999;\n        padding-top: 8px;\n      }\n      .adm-checkbox-desc-onelineshow {\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n      }\n      .adm-checkbox-desc-onelineshow-content {\n        flex: 1;\n      }\n      .adm-checkbox-desc-onelineshow-desc {\n        flex: none;\n        padding-top: 0;\n        font-size: 14px;\n        max-width: 100px;\n        text-align: right;\n      }\n    ";
			});
			return _this3;
		}
		return Checkbox;
	})(Component);

	// packages/avm-ui/src/components/checkbox/checkboxGroup.tsx
	var defaultProps$2 = {
		disabled: false
	};

	var CheckboxGroup = /*#__PURE__*/ (function(_Component4) {
		_inheritsLoose(CheckboxGroup, _Component4);
		function CheckboxGroup() {
			var _this4;
			for (
				var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
				_key4 < _len4;
				_key4++
			) {
				args[_key4] = arguments[_key4];
			}
			_this4 = _Component4.call.apply(_Component4, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this4), "data", {
				checkList: [],
				hasChecked: false
			});
			_defineProperty(
				_assertThisInitialized(_this4),
				"setCheckList",

				function(val, props) {
					_this4.data.checkList = val;
					_this4.data.hasChecked = true;
					props.handleChange == null ? void 0 : props.handleChange(val);
				}
			);
			_defineProperty(_assertThisInitialized(_this4), "render", function(props) {
				props = Object.assign({}, defaultProps$2, props);
				var _props = props,
					defaultValue = _props.defaultValue,
					disabled = _props.disabled;
				var list = props.children.map(function(item) {
					return _objectSpread2(
						_objectSpread2({}, item.attributes),
						{},
						{
							children: item.children
						}
					);
				});
				if (defaultValue && !_this4.data.hasChecked) {
					_this4.data.checkList = defaultValue;
				}
				var listEle = list.map(function(item, index) {
					return apivm.h(
						Checkbox,
						_extends({}, item, {
							isGroup: true,
							isLastEle: index === list.length - 1,
							defaultValue: defaultValue,
							checkedList: _this4.data.checkList,
							disabled: item.disabled || disabled,
							check: function check(val) {
								_this4.setCheckList([].concat(_this4.data.checkList, [val]), props);
							},
							uncheck: function uncheck(val) {
								_this4.setCheckList(
									_this4.data.checkList.filter(function(v) {
										return v !== val;
									}),
									props
								);
							}
						}),
						item.label
					);
				});
				return apivm.h("div", null, listEle);
			});
			return _this4;
		}
		return CheckboxGroup;
	})(Component);

	// packages/avm-ui/src/components/checkbox/index.ts
	var checkbox_default = attachPropertiesToComponent(Checkbox, {
		Group: CheckboxGroup
	});

	avm.define("avm-checkbox", Checkbox);
	avm.define("avm-checkbox-group", CheckboxGroup);

	var DemoCheckbox = /*@__PURE__*/ (function(Component) {
		function DemoCheckbox(props) {
			Component.call(this, props);
			this.data = {
				value: []
			};
		}

		if (Component) DemoCheckbox.__proto__ = Component;
		DemoCheckbox.prototype = Object.create(Component && Component.prototype);
		DemoCheckbox.prototype.constructor = DemoCheckbox;
		DemoCheckbox.prototype.onClick = function() {
			api.toast({
				msg: "点击啦"
			});
		};
		DemoCheckbox.prototype.onChange = function(val) {
			api.toast({msg: JSON.stringify(val)});
		};
		DemoCheckbox.prototype.back = function() {
			api.closeWin();
		};
		DemoCheckbox.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "Checkbox"),
				apivm.h(
					"scroll-view",
					null,
					apivm.h(
						DemoBlock,
						{title: "基础用法"},
						apivm.h("avm-checkbox", null),
						apivm.h(
							"avm-checkbox",
							{
								handleChange: function(val) {
									return this$1.onChange(val);
								}
							},
							"有描述的勾选框"
						),
						apivm.h("avm-checkbox", {defaultChecked: true}, "默认选中"),
						apivm.h(
							"avm-checkbox",
							{defaultChecked: true, disabled: true},
							"禁用状态"
						)
					),
					apivm.h(
						DemoBlock,
						{title: "选项组"},
						apivm.h(
							"avm-checkbox-group",
							{
								value: this.data.value,
								handleChange: function(val) {
									return this$1.onChange(val);
								}
							},
							apivm.h("avm-checkbox", {value: "A", label: "选项"}),
							apivm.h("avm-checkbox", {value: "B", label: "选项"}),
							apivm.h("avm-checkbox", {value: "C", label: "选项"}),
							apivm.h("avm-checkbox", {value: "D", label: "选项"})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "整组禁用"},
						apivm.h(
							"avm-checkbox-group",
							{defaultValue: ["B", "C"], disabled: true},
							apivm.h("avm-checkbox", {value: "A", label: "选项"}),
							apivm.h("avm-checkbox", {value: "B", label: "选项"}),
							apivm.h("avm-checkbox", {value: "C", label: "选项"}),
							apivm.h("avm-checkbox", {value: "D", label: "选项"})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "添加辅助说明默认样式"},
						apivm.h(
							"avm-checkbox-group",
							{
								value: this.data.value,
								handleChange: function(val) {
									return this$1.onChange(val);
								}
							},
							apivm.h("avm-checkbox", {
								value: "A",
								label: "选项",
								description: "辅助说明辅助说明辅助说明"
							}),
							apivm.h("avm-checkbox", {
								value: "B",
								label: "选项",
								description: "辅助说明辅助说明辅助说明"
							}),
							apivm.h("avm-checkbox", {
								value: "C",
								label: "选项",
								description: "辅助说明辅助说明辅助说明"
							}),
							apivm.h("avm-checkbox", {
								value: "D",
								label: "选项",
								description: "辅助说明辅助说明辅助说明"
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "添加辅助说明跟复选框文本一行展示"},
						apivm.h(
							"avm-checkbox-group",
							{
								value: this.data.value,
								handleChange: function(val) {
									return this$1.onChange(val);
								}
							},
							apivm.h("avm-checkbox", {
								value: "A",
								label: "选项",
								description: "辅助说明",
								descIsOneLineShow: true
							}),
							apivm.h("avm-checkbox", {
								value: "B",
								label: "选项",
								description: "辅助说明",
								descIsOneLineShow: true
							}),
							apivm.h("avm-checkbox", {
								value: "C",
								label: "选项",
								description: "辅助说明",
								descIsOneLineShow: true
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "复选icon和复选框文本两头分布展示"},
						apivm.h(
							"avm-checkbox-group",
							{
								value: this.data.value,
								handleChange: function(val) {
									return this$1.onChange(val);
								}
							},
							apivm.h("avm-checkbox", {
								value: "A",
								label: "选项",
								description: "辅助说明",
								isTwoHeadArrange: true
							}),
							apivm.h("avm-checkbox", {
								value: "B",
								label: "选项",
								description: "辅助说明",
								isTwoHeadArrange: true
							}),
							apivm.h("avm-checkbox", {
								value: "C",
								label: "选项",
								description: "辅助说明",
								isTwoHeadArrange: true
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "自定义icon"},
						apivm.h(
							"avm-checkbox-group",
							{
								value: this.data.value1,
								handleChange: function(val) {
									return this$1.onChange(val);
								}
							},
							apivm.h("avm-checkbox", {
								value: "A",
								label: "A",
								icon: apivm.h("text", {className: "icon-style"}, "未选中"),
								selectedIcon: apivm.h(
									"text",
									{className: "icon-style icon-style-checked"},
									"选中"
								)
							}),
							apivm.h("avm-checkbox", {
								value: "B",
								label: "B",
								icon: apivm.h("text", {className: "icon-style"}, "未选中"),
								selectedIcon: apivm.h(
									"text",
									{className: "icon-style icon-style-checked"},
									"选中"
								)
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "自定义大小"},
						apivm.h(
							"avm-checkbox",
							{iconSize: "12px", fontSize: "12px", gap: "6px"},
							"小号的勾选框"
						)
					)
				)
			);
		};

		return DemoCheckbox;
	})(Component);
	DemoCheckbox.css = {
		".page": {padding: "0 16px", background: "#f2f2f2"},
		".icon-style": {width: "30px", fontSize: "10px", color: "#666"},
		".icon-style-checked": {color: "#0f0"}
	};
	DemoCheckbox.csslink = ["../../components/avm-ui/demos/index.css"];
	apivm.define("demo-checkbox", DemoCheckbox);
	apivm.render(apivm.h("demo-checkbox", null), "body");
})();
