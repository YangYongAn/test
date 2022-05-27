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

	// packages/avm-ui/src/utils/with-default-props.tsx
	function mergeProps$1(defaultProps5, props) {
		return Object.assign({}, defaultProps5, props);
	}

	// packages/avm-ui/src/utils/use-should-render.tsx
	function useShouldRender(active, forceRender, destroyOnClose) {
		var initialized = active;
		if (forceRender) return true;
		if (active) return true;
		if (!initialized) return false;
		return !destroyOnClose;
	}

	// packages/avm-ui/src/components/mask/mask.tsx
	var classPrefix$2 = "adm-mask";
	var opacityRecord = {
		default: 0.55,
		thin: 0.35,
		thick: 0.75
	};

	var defaultProps$2 = {
		visible: true,
		destroyOnClose: false,
		forceRender: false,
		color: "black",
		opacity: "default",
		disableBodyScroll: true,
		getContainer: null,
		stopPropagation: ["click"]
	};

	var Mask = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Mask, _Component);
		function Mask() {
			var _this;
			for (
				var _len = arguments.length, args = new Array(_len), _key = 0;
				_key < _len;
				_key++
			) {
				args[_key] = arguments[_key];
			}
			_this = _Component.call.apply(_Component, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this), "render", function(p) {
				var _opacityRecord$props$;
				var props = mergeProps$1(defaultProps$2, p);
				var opacity =
					(_opacityRecord$props$ = opacityRecord[props.opacity]) != null
						? _opacityRecord$props$
						: props.opacity;
				var rgb = props.color === "white" ? "255, 255, 255" : "0, 0, 0";
				var background = "rgba(" + rgb + ", " + opacity + ")";
				var shouldRender = useShouldRender(
					props.visible,
					props.forceRender,
					props.destroyOnClose
				);
				return apivm.h(
					"div",
					{
						className: classPrefix$2,
						style: _objectSpread2(
							_objectSpread2({}, props.style),
							{},
							{
								background: background,
								display: props.visible ? "flex" : "none"
							}
						)
					},

					props.onMaskClick &&
						apivm.h("div", {
							className: classPrefix$2 + "-aria-button",
							role: "button",
							"aria-label": "Mask",
							onClick: props.onMaskClick
						}),
					apivm.h(
						"div",
						{className: classPrefix$2 + "-content", onClick: props.onMaskClick},
						shouldRender && props.children
					)
				);
			});
			_defineProperty(_assertThisInitialized(_this), "css", function() {
				return ':root {\n      --adm-color-primary: #9AC200;\n      --adm-color-success: #7FA000;\n      --adm-color-warning: #FFA600;\n      --adm-color-danger: #FA6400;\n      --adm-color-white: #ffffff;\n      --adm-color-weak: #999999;\n      --adm-color-light: #cccccc;\n      --adm-border-color: #eeeeee;\n      --adm-font-size-main: 13px;\n      --adm-color-text: #333333;\n      --adm-font-family:\n        -apple-system,\n        blinkmacsystemfont,\n        "Helvetica Neue",\n        helvetica,\n        segoe ui,\n        arial,\n        roboto,\n        "PingFang SC",\n        "miui",\n        "Hiragino Sans GB",\n        "Microsoft Yahei",\n        sans-serif;\n    }\n    .adm-mask {\n      --z-index: var(--adm-mask-z-index, 1000);\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      z-index: var(--z-index);\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    .adm-mask-aria-button {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .adm-mask-content {\n      height: 100%;\n      z-index: 1;\n    }';
			});
			return _this;
		}
		return Mask;
	})(Component);

	// packages/avm-ui/src/components/mask/index.ts
	var Mask_default = Mask;
	avm.define("avm-mask", Mask);

	// packages/avm-ui/src/utils/get-container.ts
	function resolveContainer(getContainer) {
		var container =
			typeof getContainer === "function" ? getContainer() : getContainer;
		return container || document.body;
	}

	// packages/avm-ui/src/utils/can-use-dom.ts
	var canUseDom = !!(
		typeof window !== "undefined" &&
		typeof document !== "undefined" &&
		window.document &&
		window.document.createElement
	);

	// packages/avm-ui/src/utils/render-to-container.ts
	function renderToContainer(getContainer, node) {
		if (canUseDom && getContainer) {
			var container = resolveContainer(getContainer);
			avm.render(node, container);
			return;
		}
		return node;
	}

	// packages/avm-ui/src/components/image-viewer/slide.tsx
	var classPrefix2$1 = "adm-image-viewer";
	var Slide = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(Slide, _Component2);
		function Slide() {
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
				zoom: _this2.props.zoom || 1,
				touchTime: new Date()
			});
			_defineProperty(
				_assertThisInitialized(_this2),
				"render",

				function(props) {
					var zoom = _this2.data.zoom;
					return apivm.h(
						"div",
						{
							className: classPrefix2$1 + "-slide",
							onTouchMove: function onTouchMove(e) {
								e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
							}
						},
						apivm.h(
							"div",
							{className: classPrefix2$1 + "-control"},
							apivm.h(
								"div",
								{
									className: classPrefix2$1 + "-image-wrapper",
									style: "transform: scale(" + zoom + ");",
									ontouchstart: function ontouchstart() {
										_this2.data.touchTime = new Date();
									},
									ontouchend: _this2.touchEnd.bind(_assertThisInitialized(_this2))
								},
								apivm.h("img", {src: props.image, draggable: false})
							)
						)
					);
				}
			);
			return _this2;
		}
		var _proto = Slide.prototype;
		_proto.touchEnd = function touchEnd() {
			var delayTime = new Date().getTime() - this.data.touchTime.getTime();
			if (delayTime < 300) {
				this.props.onTap();
			}
		};
		return Slide;
	})(Component);

	// packages/avm-ui/src/components/image-viewer/slides.tsx
	var classPrefix3 = "adm-image-viewer";
	var Slides = /*#__PURE__*/ (function(_Component3) {
		_inheritsLoose(Slides, _Component3);
		function Slides() {
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
				zoom: _this3.props.zoom || 1,
				touchTime: new Date()
			});
			_defineProperty(
				_assertThisInitialized(_this3),
				"render",

				function(props) {
					return apivm.h(
						"swiper",
						{
							className: classPrefix3 + "-swiper",
							onchange: function onchange(e) {
								props.onIndexChange({index: e.detail.current});
							}
						},
						props.images.map(function(image) {
							return apivm.h(
								"swiper-item",
								{onClick: props.onTap, className: classPrefix3 + "-swiper-item"},
								apivm.h("img", {
									style: "display: block;max-width: 100%;max-height: 100%;",
									src: image,
									draggable: false
								})
							);
						})
					);
				}
			);
			return _this3;
		}
		var _proto2 = Slides.prototype;
		_proto2.touchEnd = function touchEnd() {
			var delayTime = new Date().getTime() - this.data.touchTime.getTime();
			if (delayTime < 300) {
				this.props.onTap();
			}
		};
		return Slides;
	})(Component);

	// packages/avm-ui/src/components/image-viewer/image-viewer.tsx
	var classPrefix4 = "adm-image-viewer";
	var defaultProps2 = {
		maxZoom: 3,
		getContainer: null,
		visible: false
	};

	var ImageViewer = /*#__PURE__*/ (function(_Component4) {
		_inheritsLoose(ImageViewer, _Component4);
		function ImageViewer() {
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
				visible: _this4.props.visible || defaultProps2.visible
			});
			_defineProperty(
				_assertThisInitialized(_this4),
				"render",

				function(p) {
					var props = mergeProps$1(defaultProps2, p);
					var node = apivm.h(
						Mask_default,
						{visible: props.visible, disableBodyScroll: false, opacity: "1"},
						apivm.h(
							"div",
							{className: classPrefix4 + "-content"},
							props.image &&
								apivm.h(Slide, {
									image: props.image,
									onTap: function onTap() {
										props.onClose == null ? void 0 : props.onClose();
										props.afterClose == null ? void 0 : props.afterClose();
									},
									maxZoom: props.maxZoom
								})
						)
					);
					return renderToContainer(props.getContainer, node);
				}
			);
			_defineProperty(_assertThisInitialized(_this4), "css", function() {
				return ".adm-image-viewer-container {\n      height: 100%;\n      width: 100%;\n      position: absolute;\n    }\n    .adm-image-viewer-content {\n      width: 100%;\n      height: 100%;\n      max-height: -webkit-fill-available;\n      touch-action: none;\n      user-select: none;\n    }\n    .adm-image-viewer-slides {\n      height: 100%;\n      position: relative;\n      z-index: 1;\n      cursor: grab;\n    }\n    .adm-image-viewer-slides-inner {\n      height: 100%;\n      white-space: nowrap;\n    }\n    .adm-image-viewer-slide {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      display: inline-block;\n    }\n    .adm-image-viewer-control {\n      position: absolute;\n      z-index: 1;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      cursor: grab;\n    }\n    .adm-image-viewer-image-wrapper {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .adm-image-viewer-image-wrapper img {\n      display: block;\n      max-width: 100%;\n      max-height: 100%;\n    }\n    .adm-image-viewer-indicator {\n      position: absolute;\n      z-index: 2;\n      left: 50%;\n      top: 12px;\n      transform: translateX(-50%);\n      color: #e6e6e6;\n      font-size: 14px;\n    }\n    .adm-image-viewer-swiper {\n      display: flex !important;\n      width: 100%;\n      height: 100%;\n      justify-content: center;\n      align-items: center;\n    }\n    .adm-image-viewer-swiper-item {\n      display: flex !important;\n      height: 100%;\n      justify-content: center;\n      align-items: center;\n    }";
			});
			return _this4;
		}
		return ImageViewer;
	})(Component);

	var multiDefaultProps = _objectSpread2(
		_objectSpread2({}, defaultProps2),
		{},
		{
			defaultIndex: 0
		}
	);

	var MultiImageViewer = /*#__PURE__*/ (function(_Component5) {
		_inheritsLoose(MultiImageViewer, _Component5);
		function MultiImageViewer() {
			var _this5;
			for (
				var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
				_key5 < _len5;
				_key5++
			) {
				args[_key5] = arguments[_key5];
			}
			_this5 = _Component5.call.apply(_Component5, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this5), "render", function(p) {
				var props = mergeProps$1(multiDefaultProps, p);
				var node = apivm.h(
					Mask_default,
					{
						visible: props.visible,
						disableBodyScroll: false,
						opacity: "thick",
						afterClose: props.afterClose
					},
					apivm.h(
						"div",
						{className: classPrefix4 + "-content"},
						props.images &&
							apivm.h(Slides, {
								images: props.images,
								onTap: function onTap() {
									props.onClose == null ? void 0 : props.onClose();
								},
								onIndexChange: function onIndexChange(e) {
									props.onIndexChange == null ? void 0 : props.onIndexChange(e);
								},
								maxZoom: props.maxZoom
							})
					)
				);
				return renderToContainer(props.getContainer, node);
			});
			_defineProperty(_assertThisInitialized(_this5), "css", function() {
				return ".adm-image-viewer-container {\n      height: 100%;\n      width: 100%;\n      position: absolute;\n    }\n    .adm-image-viewer-content {\n      width: 100%;\n      height: 100%;\n      max-height: -webkit-fill-available;\n      touch-action: none;\n      user-select: none;\n    }\n    .adm-image-viewer-slides {\n      height: 100%;\n      position: relative;\n      z-index: 1;\n      cursor: grab;\n    }\n    .adm-image-viewer-slides-inner {\n      height: 100%;\n      white-space: nowrap;\n    }\n    .adm-image-viewer-slide {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      display: inline-block;\n    }\n    .adm-image-viewer-control {\n      position: absolute;\n      z-index: 1;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      cursor: grab;\n    }\n    .adm-image-viewer-image-wrapper {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .adm-image-viewer-image-wrapper img {\n      display: block;\n      max-width: 100%;\n      max-height: 100%;\n    }\n    .adm-image-viewer-indicator {\n      position: absolute;\n      z-index: 2;\n      left: 50%;\n      top: 12px;\n      transform: translateX(-50%);\n      color: #e6e6e6;\n      font-size: 14px;\n    }\n    .adm-image-viewer-swiper {\n      display: flex !important;\n      width: 100%;\n      height: 100%;\n      justify-content: center;\n      align-items: center;\n    }\n    .adm-image-viewer-swiper-item {\n      display: flex !important;\n      height: 100%;\n      justify-content: center;\n      align-items: center;\n    }";
			});
			return _this5;
		}
		return MultiImageViewer;
	})(Component);

	var Wrapper = /*#__PURE__*/ (function(_Component6) {
		_inheritsLoose(Wrapper, _Component6);
		function Wrapper() {
			var _this6;
			for (
				var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
				_key6 < _len6;
				_key6++
			) {
				args[_key6] = arguments[_key6];
			}
			_this6 = _Component6.call.apply(_Component6, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this6), "data", {
				visible: true
			});
			_defineProperty(
				_assertThisInitialized(_this6),
				"render",

				function(props) {
					var node = apivm.h(
						ImageViewer,
						_extends({}, props, {
							visible: _this6.data.visible,
							onClose: function onClose() {
								props.onClose == null ? void 0 : props.onClose();
								_this6.data.visible = false;
							}
						})
					);
					return node;
				}
			);
			return _this6;
		}
		return Wrapper;
	})(Component);

	function showImageViewer(props) {
		avm.render(apivm.h(Wrapper, props), "#toast-box");
	}
	var MultiWrapper = /*#__PURE__*/ (function(_Component7) {
		_inheritsLoose(MultiWrapper, _Component7);
		function MultiWrapper() {
			var _this7;
			for (
				var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
				_key7 < _len7;
				_key7++
			) {
				args[_key7] = arguments[_key7];
			}
			_this7 = _Component7.call.apply(_Component7, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this7), "data", {
				visible: true
			});
			_defineProperty(
				_assertThisInitialized(_this7),
				"render",

				function(props) {
					var node = apivm.h(
						MultiImageViewer,
						_extends({}, props, {
							visible: _this7.data.visible,
							onClose: function onClose() {
								props.onClose == null ? void 0 : props.onClose();
								_this7.data.visible = false;
							},
							onChange: function onChange(e) {
								console.log(e);
							}
						})
					);
					return node;
				}
			);
			return _this7;
		}
		return MultiWrapper;
	})(Component);

	function showMultiImageViewer(props) {
		var imageViewerContainer = document.getElementById("image-viewer-container");
		if (!imageViewerContainer) {
			var node = apivm.h("div", {
				id: "image-viewer-container",
				className: classPrefix4 + "-container"
			});
			avm.render(node, "body");
		}
		avm.render(apivm.h(MultiWrapper, props), "#image-viewer-container");
	}

	// packages/avm-ui/src/components/image-viewer/index.ts
	var Multi = attachPropertiesToComponent(MultiImageViewer, {
		show: showMultiImageViewer
	});

	var image_viewer_default = attachPropertiesToComponent(ImageViewer, {
		Multi: Multi,
		show: showImageViewer
	});

	avm.define("avm-image-viewer", ImageViewer);
	avm.define("avm-image-viewer-multi", MultiImageViewer);

	// packages/avm-ui/src/utils/to-css-length.ts
	function toCSSLength(val) {
		return typeof val === "number" ? val + "px" : val;
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
	var classPrefix5 = "adm-icon";
	var Icon$1 = /*#__PURE__*/ (function(_Component8) {
		_inheritsLoose(Icon, _Component8);
		function Icon() {
			var _this8;
			for (
				var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
				_key8 < _len8;
				_key8++
			) {
				args[_key8] = arguments[_key8];
			}
			_this8 = _Component8.call.apply(_Component8, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this8), "css", function() {
				return (
					'@font-face {font-family: "' +
					fontName$1 +
					"\"; src: url('../../components/avm-ui/icon/" +
					fontName$1 +
					".ttf') format('truetype');}\n        ." +
					classPrefix5 +
					" {font-family: " +
					fontName$1 +
					";}"
				);
			});
			_defineProperty(_assertThisInitialized(_this8), "render", function(props) {
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
							classPrefix5 +
							" " +
							classPrefix5 +
							"-font-icon-text " +
							(props.class || props.className || "")
					},
					char
				);
			});
			return _this8;
		}
		return Icon;
	})(Component);

	Icon$1 = __decorateClass$1([tag$1("avm-icon")], Icon$1);

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default$1 = Icon$1;

	// packages/avm-ui/src/components/image/image.tsx
	var classPrefix6 = "adm-image";
	var defaultProps3 = {
		fit: "fill",
		placeholder: apivm.h(
			"div",
			{className: classPrefix6 + "-tip"},
			apivm.h(Icon_default$1, {code: 60009, color: "#ddd"})
		),
		fallback: apivm.h(
			"div",
			{className: classPrefix6 + "-tip"},
			apivm.h(Icon_default$1, {code: 60010, color: "#ddd"})
		)
	};

	var Image = /*#__PURE__*/ (function(_Component9) {
		_inheritsLoose(Image, _Component9);
		function Image() {
			var _this9;
			for (
				var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
				_key9 < _len9;
				_key9++
			) {
				args[_key9] = arguments[_key9];
			}
			_this9 = _Component9.call.apply(_Component9, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this9), "data", {
				loaded: false,
				failed: false
			});
			_defineProperty(
				_assertThisInitialized(_this9),
				"setLoaded",

				function(status) {
					_this9.data.loaded = status;
				}
			);
			_defineProperty(_assertThisInitialized(_this9), "setFailed", function(
				status
			) {
				_this9.data.failed = status;
			});
			_defineProperty(_assertThisInitialized(_this9), "render", function(props) {
				props = Object.assign({}, defaultProps3, props);
				var _props = props,
					_props$width = _props.width,
					width = _props$width === void 0 ? "238px" : _props$width,
					_props$height = _props.height,
					height = _props$height === void 0 ? "165px" : _props$height,
					src = _props.src,
					srcSet = _props.srcSet,
					_props$isRound = _props.isRound,
					isRound = _props$isRound === void 0 ? false : _props$isRound,
					_props$isSquare = _props.isSquare,
					isSquare = _props$isSquare === void 0 ? false : _props$isSquare;
				var style = {};
				style["width"] = toCSSLength(width);
				style["height"] = toCSSLength(height);
				if (isRound) {
					style["borderRadius"] = "50%";
					style["width"] = "120px";
					style["height"] = "120px";
				}
				if (isSquare) {
					style["borderRadius"] = "4px";
					style["width"] = "120px";
					style["height"] = "120px";
				}
				var renderInner = function renderInner() {
					if (_this9.data.failed) {
						return formatLabel(props.fallback);
					}
					var imgs = function imgs() {
						return apivm.h("img", {
							className: classPrefix6 + "-img",
							src: src,
							alt: props.alt,
							onClick: function onClick() {
								props.handleClick && props.handleClick();
							},
							onLoad: function onLoad() {
								_this9.setLoaded(true);
							},
							onError: function onError(e) {
								_this9.setFailed(true);
								props.handleError == null ? void 0 : props.handleError(e);
							},
							style: _objectSpread2(
								_objectSpread2(
									{
										objectFit: props.fit
									},
									props.style
								),
								style
							),
							crossOrigin: props.crossOrigin,
							decoding: props.decoding,
							loading: props.loading,
							referrerPolicy: props.referrerPolicy,
							sizes: props.sizes,
							srcSet: srcSet,
							useMap: props.useMap
						});
					};
					return apivm.h(
						"view",
						{className: classPrefix6 + "-wrapper"},
						imgs(),
						apivm.h(
							"div",
							{
								className: !_this9.data.loaded
									? classPrefix6 + "-placeholder-wrapper"
									: ""
							},
							!_this9.data.loaded && props.placeholder
						)
					);
				};
				return apivm.h(
					"div",
					{className: classPrefix6, style: style},
					renderInner()
				);
			});
			_defineProperty(_assertThisInitialized(_this9), "css", function() {
				return "\n      .adm-image {\n        display: inline-block;\n        overflow: hidden;\n      }\n      .adm-image-wrapper {\n        width: 100%;\n        height: 100%;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-image-img {\n        z-index: 1;\n      }\n      .adm-image-tip {\n        position: relative;\n        background-color: #f3f3f3;\n        width: 100%;\n        height: 100%;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-image-placeholder-wrapper {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        top: 0;\n      }\n    ";
			});
			return _this9;
		}
		return Image;
	})(Component);

	// packages/avm-ui/src/components/image/index.ts
	var Image_default = Image;
	avm.define("avm-image", Image);

	// packages/avm-ui/src/components/loading/loading.tsx
	var classPrefix7 = "adm-loading";
	var Loading = /*#__PURE__*/ (function(_Component10) {
		_inheritsLoose(Loading, _Component10);
		function Loading() {
			var _this10;
			for (
				var _len10 = arguments.length, args = new Array(_len10), _key10 = 0;
				_key10 < _len10;
				_key10++
			) {
				args[_key10] = arguments[_key10];
			}
			_this10 = _Component10.call.apply(_Component10, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this10), "render", function(props) {
				var _props$color = props.color,
					color = _props$color === void 0 ? "#1677ff" : _props$color,
					_props$size = props.size,
					size = _props$size === void 0 ? "default" : _props$size;
				return apivm.h(
					"div",
					{className: classPrefix7},
					apivm.h("div", {
						className: classPrefix7 + "-loading " + classPrefix7 + "-" + size,
						style: {borderColor: color, borderTopColor: "transparent"}
					})
				);
			});
			return _this10;
		}
		return Loading;
	})(Component);

	// packages/avm-ui/src/components/loading/index.ts
	var Loading_default = Loading;

	// packages/avm-ui/src/components/image-uploader/preview-item.tsx
	var classPrefix8 = "adm-image-uploader";
	var PreviewItem = /*#__PURE__*/ (function(_Component11) {
		_inheritsLoose(PreviewItem, _Component11);
		function PreviewItem() {
			var _this11;
			for (
				var _len11 = arguments.length, args = new Array(_len11), _key11 = 0;
				_key11 < _len11;
				_key11++
			) {
				args[_key11] = arguments[_key11];
			}
			_this11 = _Component11.call.apply(_Component11, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this11), "render", function(props) {
				var _classNames;
				var url = props.url,
					deletable = props.deletable,
					onDelete = props.onDelete,
					cellSizeStyle = props.cellSizeStyle;
				var renderLoading = function renderLoading() {
					return (
						props.status === "pending" &&
						apivm.h(
							"div",
							{className: classPrefix8 + "-cell-mask"},
							apivm.h(
								"span",
								{className: classPrefix8 + "-cell-loading"},
								apivm.h(Loading_default, {color: "#fff"}),
								apivm.h(
									"span",
									{className: classPrefix8 + "-cell-mask-message"},
									"\u4E0A\u4F20\u4E2D"
								)
							)
						)
					);
				};
				var renderDelete = function renderDelete() {
					return (
						deletable &&
						apivm.h(
							"div",
							{className: classPrefix8 + "-cell-delete-wrap", onClick: onDelete},
							apivm.h(
								"text",
								{className: classPrefix8 + "-cell-delete-wrap-inner"},
								"\u2715"
							)
						)
					);
				};
				return apivm.h(
					"div",
					{
						className: classNames(
							classPrefix8 + "-cell",
							((_classNames = {}),
							(_classNames[classPrefix8 + "-cell-fail"] = props.status === "fail"),
							_classNames)
						),
						style: cellSizeStyle
					},
					apivm.h(Image_default, {
						mode: "aspectFill",
						width: cellSizeStyle.width,
						height: cellSizeStyle.height,
						className: classPrefix8 + "-cell-image",
						src: url,
						onClick: function onClick() {
							props.onClick == null ? void 0 : props.onClick();
						}
					}),
					renderLoading(),
					renderDelete()
				);
			});
			return _this11;
		}
		return PreviewItem;
	})(Component);

	// packages/avm-ui/src/components/image-uploader/image-uploader.tsx
	var classPrefix9 = "adm-image-uploader";
	var defaultProps4 = {
		disableUpload: false,
		deletable: true,
		showUpload: true,
		multiple: false,
		defaultValue: [],
		accept: "jpg",
		capture: "library"
	};

	var ImageUploader = /*#__PURE__*/ (function(_Component12) {
		_inheritsLoose(ImageUploader, _Component12);
		function ImageUploader() {
			var _this12;
			for (
				var _len12 = arguments.length, args = new Array(_len12), _key12 = 0;
				_key12 < _len12;
				_key12++
			) {
				args[_key12] = arguments[_key12];
			}
			_this12 = _Component12.call.apply(_Component12, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this12), "data", {
				imgList: _this12.props.value || _this12.props.defaultValue || [],
				previewUrls: null,
				defaultPreviewIndex: 0,
				imageViewvisible: false,
				uploadError: false
			});
			_defineProperty(
				_assertThisInitialized(_this12),
				"setValue",

				function(v) {
					_this12.data.imgList = [].concat(v);
					_this12.props.handleChange == null
						? void 0
						: _this12.props.handleChange(_this12.data.imgList);
				}
			);
			_defineProperty(_assertThisInitialized(_this12), "saveImg", function(
				imgSrc
			) {
				var maxCount = _this12.props.maxCount;
				var imgList = _this12.data.imgList;
				if (!maxCount || (maxCount && imgList.length <= maxCount)) {
					var newData = [].concat(_this12.data.imgList, [{url: imgSrc}]);
					_this12.setValue(newData);
				} else {
					_this12.props.countExceed == null ? void 0 : _this12.props.countExceed();
				}
			});
			_defineProperty(
				_assertThisInitialized(_this12),
				"selectPicture",
				function() {
					try {
						api.getPicture(
							{
								sourceType: _this12.props.capture,
								encodingType: _this12.props.accept,
								mediaValue: "pic",
								destinationType: "url",
								quality: 50,
								targetWidth: 100,
								targetHeight: 100
							},
							function(ret, err) {
								if (ret) {
									if (_this12.props.beforeUpload) {
										new Promise(function(resolve, reject) {
											var status = _this12.props.beforeUpload(ret.data);
											if (status) {
												resolve(status);
											} else {
												reject(status);
											}
										}).then(function(res) {
											if (res) {
												_this12.data.uploadError = false;
												ret.data && ret.data !== "" && _this12.saveImg(ret.data);
											}
										});
									} else {
										_this12.data.uploadError = false;
										ret.data && ret.data !== "" && _this12.saveImg(ret.data);
									}
								} else {
									api.toast({
										msg: "\u4E0A\u4F20\u5931\u8D25" + err
									});

									_this12.data.uploadError = true;
								}
							}
						);
					} catch (err) {
						api.toast({
							msg: JSON.stringify(err)
						});

						_this12.data.uploadError = true;
					}
				}
			);
			_defineProperty(_assertThisInitialized(_this12), "render", function(props) {
				var _classNames2, _props$uploadIcon;
				props = Object.assign({}, defaultProps4, props);
				_this12.data.previewUrls = _this12.data.imgList.map(function(fileItem) {
					return fileItem.url;
				});
				var _props2 = props,
					maxCount = _props2.maxCount,
					onPreview = _props2.onPreview,
					_props2$cellSize = _props2.cellSize,
					cellSize = _props2$cellSize === void 0 ? "109px" : _props2$cellSize,
					_props2$gap = _props2.gap,
					gap = _props2$gap === void 0 ? "8px" : _props2$gap;
				var cellSizeStyle = {
					width: cellSize,
					height: cellSize,
					marginRight: gap,
					marginBottom: gap
				};

				var previewImage = function previewImage(index) {
					_this12.data.defaultPreviewIndex = index;
					onPreview == null ? void 0 : onPreview(index);
				};
				var showUpload =
					props.showUpload &&
					(!maxCount || (maxCount && _this12.data.imgList.length < maxCount));
				return apivm.h(
					"div",
					{className: classPrefix9},
					apivm.h(
						"div",
						{className: classPrefix9 + "-wrapper"},
						_this12.data.imgList.map(function(fileItem, index) {
							return apivm.h(PreviewItem, {
								cellSizeStyle: cellSizeStyle,
								url: fileItem.url,
								deletable: props.deletable,
								onClick: function onClick() {
									return previewImage(index);
								},
								onDelete: function onDelete() {
									var canDelete =
										props.handleDelete == null ? void 0 : props.handleDelete(fileItem);
									if (canDelete === false) return;
									_this12.setValue(
										_this12.data.imgList.filter(function(x) {
											return x.url !== fileItem.url;
										})
									);
								}
							});
						}),
						showUpload &&
							apivm.h(
								"div",
								{
									className: classNames(
										classPrefix9 + "-cell " + classPrefix9 + "-btn-wrap",
										((_classNames2 = {}),
										(_classNames2[classPrefix9 + "-btn-wrap-disabled"] =
											props.disableUpload),
										(_classNames2[classPrefix9 + "-btn-wrap-upload-error"] =
											_this12.data.uploadError),
										_classNames2)
									),
									style: cellSizeStyle,
									onClick: function onClick() {
										!props.disableUpload && _this12.selectPicture();
									}
								},
								!_this12.data.uploadError
									? (_props$uploadIcon = props.uploadIcon) != null
										? _props$uploadIcon
										: apivm.h(
												"view",
												{
													className: classPrefix9 + "-btn-wrap-img",
													style: {width: cellSizeStyle.width, height: cellSizeStyle.height}
												},
												apivm.h(Icon$1, {
													code: 59908,
													color: "#ddd",
													size: 32,
													fontSize: "32px",
													width: "32px",
													height: "32px"
												})
										  )
									: apivm.h(
											"div",
											{
												className: classPrefix9 + "-error-wrapper",
												style: {width: cellSizeStyle.width, height: cellSizeStyle.height}
											},
											apivm.h(
												"span",
												{className: classPrefix9 + "-error-wrapper-close"},
												"\u2715"
											),
											apivm.h(
												"span",
												{className: classPrefix9 + "-error-wrapper-text"},
												"\u4E0A\u4F20\u5931\u8D25"
											),
											apivm.h(
												"span",
												{className: classPrefix9 + "-error-wrapper-text"},
												"\u91CD\u65B0\u4E0A\u4F20"
											)
									  )
							)
					),

					apivm.h(image_viewer_default.Multi, {
						images: _this12.data.previewUrls,
						visible: _this12.data.imageViewvisible,
						onClose: function onClose() {
							return (_this12.data.imageViewvisible = false);
						}
					}),
					apivm.h("text", {className: classPrefix9 + "-tip-desc"}, props.tipDesc)
				);
			});
			_defineProperty(_assertThisInitialized(_this12), "css", function() {
				return "\n    .adm-image-uploader-wrapper {\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: row;\n      width: auto;\n      height: auto;\n    }\n    .adm-image-uploader-cell {\n      border-radius: 4px;\n      overflow: hidden;\n      width: auto;\n      height: auto;\n    }\n    .adm-image-uploader-cell-fail {\n      border: 1px solid #f00;\n      box-sizing: border-box;\n    }\n    .adm-image-uploader-cell-delete-wrap {\n      width: 14.5px;\n      height: 14.5px;\n      position: absolute;\n      top: 4.8px;\n      right: 4.8px;\n      z-index: 7;\n      background: rgba(0, 0, 0, 0.5);\n      border-radius: 50%;\n      align-items: center;\n      justify-content: center;\n    }\n    .adm-image-uploader-cell-delete-wrap-inner {\n      font-size: 8px;\n      color: #fff;\n    }\n    .adm-image-uploader-cell-mask {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      color: #fff;\n      background-color: rgba(50, 50, 51, 0.88);\n    }\n    .adm-image-uploader-cell-loading {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n      font-size: 16px;\n    }\n    .adm-image-uploader-cell-mask-message {\n      display: inline-block;\n      padding: 6px 4px;\n      font-size: 12px;\n    }\n    .adm-image-uploader-btn-wrap {\n      background-color: #f6f6f6;\n      text-align: center;\n      align-items: center;\n      justify-content: center;\n    }\n    .adm-image-uploader-btn-wrap-img {\n      align-items: center;\n      justify-content: center;\n    }\n    .adm-image-uploader-btn-wrap-disabled {\n      opacity: 0.6;\n    }\n    .adm-image-uploader-btn-wrap-upload-error {\n      background: rgba(0, 0, 0, 0.3);\n    }\n    .adm-image-uploader-tip-desc {\n      font-size: 12px;\n      color: #999;\n      padding-top: 16px;\n    }\n    .adm-image-uploader-error-wrapper {\n      align-items: center;\n      justify-content: center;\n    }\n    .adm-image-uploader-error-wrapper-close {\n      width: 14px;\n      height: 14px;\n      border-radius: 50%;\n      color: #fff;\n      border: 1px solid #fff;\n      text-align: center;\n      line-height: 14px;\n      font-size: 6px;\n    }\n    .adm-image-uploader-error-wrapper-text {\n      font-size: 12px;\n      color: #fff;\n      padding-top: 8px;\n    }\n    ";
			});
			return _this12;
		}
		return ImageUploader;
	})(Component);
	avm.define("avm-image-uploader", ImageUploader);

	global.defaultList = [
		{
			url:
				"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
		}
	];
	var DemoImageUploader = /*@__PURE__*/ (function(Component) {
		function DemoImageUploader(props) {
			Component.call(this, props);
			this.data = {
				fileList1: [].concat(defaultList),
				fileList2: [].concat(defaultList),
				fileList3: [].concat(defaultList),
				fileList4: [].concat(defaultList),
				fileList5: [].concat(defaultList),
				fileList6: [].concat(defaultList),
				fileList7: [].concat(defaultList),
				myStyle: {
					width: 80,
					height: 80,
					borderRadius: 40,
					backgroundColor: "#f5f5f5",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "#999999"
				}
			};
		}

		if (Component) DemoImageUploader.__proto__ = Component;
		DemoImageUploader.prototype = Object.create(Component && Component.prototype);
		DemoImageUploader.prototype.constructor = DemoImageUploader;
		DemoImageUploader.prototype.apiready = function() {};
		DemoImageUploader.prototype.setFileList = function(key, val) {
			api.toast({
				msg: "key=" + key + "---val=" + JSON.stringify(val)
			});

			this.data[key] = val;
		};
		DemoImageUploader.prototype.toastExceed = function() {
			api.toast({
				msg:
					"最多选择 " + this.data.maxCount + " 张图片，你多选了 " + exceed + " 张"
			});
		};
		DemoImageUploader.prototype.handleDelete = function() {
			api.alert({
				msg: "是否确定删除？"
			});
		};
		DemoImageUploader.prototype.back = function() {
			api.closeWin();
		};
		DemoImageUploader.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "ImageUploader"),
				apivm.h(
					"scroll-view",
					null,
					apivm.h(
						DemoBlock,
						{title: "基础用法"},
						apivm.h("avm-image-uploader", {
							defaultValue: this.data.fileList1,
							handleChange: function(imgs) {
								return this$1.setFileList("fileList1", imgs);
							}
						})
					),
					apivm.h(
						DemoBlock,
						{title: "上传状态"},
						apivm.h("avm-image-uploader", {
							value: this.data.fileList2,
							handleChange: function(imgs) {
								return this$1.setFileList("fileList1", imgs);
							}
						}),
						apivm.h(DemoDescription, {
							content: "当用户选择的文件超过 1M 时，跳过上传并提示用户"
						})
					),
					apivm.h(
						DemoBlock,
						{title: "限制上传大小"},
						apivm.h(
							"avm-space",
							{direction: "vertical"},
							apivm.h("avm-image-uploader", {
								value: this.data.fileList3,
								handleChange: function(imgs) {
									return this$1.setFileList("fileList1", imgs);
								}
							}),
							apivm.h(DemoDescription, {
								content: "当用户选择的文件超过 1M 时，跳过上传并提示用户"
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "限制图片数量"},
						apivm.h(
							"avm-space",
							{direction: "vertical"},
							apivm.h("avm-image-uploader", {
								disableUpload: false,
								value: this.data.fileList4,
								tipDesc: "限制上传三张图片",
								maxCount: 3,
								showUpload: this.data.fileList4.length < 3,
								onCountExceed: function() {
									return this$1.toastExceed($event);
								},
								handleChange: function(imgs) {
									return this$1.setFileList("fileList1", imgs);
								}
							}),
							apivm.h(DemoDescription, {
								content: "限制用户最多上传 3 张图片，当达到最大数量时隐藏掉上传按钮"
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "删除图片确认"},
						apivm.h(
							"avm-space",
							{direction: "vertical"},
							apivm.h("avm-image-uploader", {
								value: this.data.fileList5,
								onHandleDelete: this.handleDelete,
								handleChange: function(imgs) {
									return this$1.setFileList("fileList1", imgs);
								}
							}),
							apivm.h(DemoDescription, {
								content: "当用户删除图片时，进行确认，确认后可删除图片"
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "自定义大小"},
						apivm.h("avm-image-uploader", {
							cellSize: "90px",
							value: this.data.fileList6,
							handleChange: function(imgs) {
								return this$1.setFileList("fileList1", imgs);
							}
						})
					),
					apivm.h(
						DemoBlock,
						{title: "自定义上传按钮"},
						apivm.h("avm-image-uploader", {
							value: this.data.fileList7,
							uploadIcon: apivm.h(
								"view",
								{style: this.data.myStyle},
								apivm.h("img", {src: "../../image/cf.png", alt: "自定义"})
							)
						})
					)
				)
			);
		};

		return DemoImageUploader;
	})(Component);
	DemoImageUploader.css = {".page": {width: "100%", height: "100%"}};
	DemoImageUploader.csslink = ["../../components/avm-ui/demos/index.css"];
	apivm.define("demo-image-uploader", DemoImageUploader);
	apivm.render(apivm.h("demo-image-uploader", null), "body");
})();
