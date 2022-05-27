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

	var AvmBasePicker = /*@__PURE__*/ (function(Component) {
		function AvmBasePicker(props) {
			Component.call(this, props);
			this.data = {
				genderDesc: "",
				dateDesc: "",
				areaDesc: "",
				selectorValue: 0,
				multiSelectorValue: [0, 0],
				areaMltiSelectorValue: [0, 0, 0],
				genderList: ["男", "女"],
				dateList: [
					[1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990],
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
				],
				areaList: [],
				areaInfo: [
					{
						name: "北京",
						sub: [
							{
								name: "北京市",
								sub: [
									{
										name: "东城区"
									},
									{
										name: "西城区"
									},
									{
										name: "海淀区"
									},
									{
										name: "朝阳区"
									},
									{
										name: "丰台区"
									},
									{
										name: "石景山区"
									},
									{
										name: "昌平区"
									},
									{
										name: "通州区"
									}
								]
							}
						]
					},

					{
						name: "河南省",
						sub: [
							{
								name: "郑州市",
								sub: [
									{
										name: "中原区"
									},
									{
										name: "金水区"
									}
								]
							},

							{
								name: "驻马店市",
								sub: [
									{
										name: "西平县"
									},
									{
										name: "泌阳县"
									}
								]
							}
						]
					}
				]
			};
		}

		if (Component) AvmBasePicker.__proto__ = Component;
		AvmBasePicker.prototype = Object.create(Component && Component.prototype);
		AvmBasePicker.prototype.constructor = AvmBasePicker;
		AvmBasePicker.prototype.back = function() {
			api.closeWin();
		};
		AvmBasePicker.prototype.apiready = function() {
			var selector = document.getElementById("selector");
			selector.setData({
				data: this.data.genderList
			});

			var multiSelector = document.getElementById("multiSelector");
			multiSelector.setData({
				data: this.data.dateList
			});

			this.initAreaData(this.data.areaMltiSelectorValue);
		};
		AvmBasePicker.prototype.initAreaData = function(values) {
			var component0 = [];
			for (var i = 0; i < this.data.areaInfo.length; i++) {
				component0[i] = this.data.areaInfo[i];
			}
			var component1 = component0[values[0]]["sub"];
			var component2 = component1[values[1]]["sub"];
			var dataList = [component0, component1, component2];
			this.data.areaList = dataList;
			var picker = document.getElementById("areaMltiSelector");
			picker.setData({
				data: dataList
			});
		};
		AvmBasePicker.prototype.selectorChange = function(e) {
			this.data.selectorValue = e.detail.value;
			this.data.genderDesc = this.data.genderList[this.data.selectorValue];
		};
		AvmBasePicker.prototype.multiSelectorChange = function(e) {
			this.data.multiSelectorValue = e.detail.value;
			this.data.dateDesc =
				this.data.dateList[0][this.data.multiSelectorValue[0]] +
				"-" +
				this.data.dateList[1][this.data.multiSelectorValue[1]];
		};
		AvmBasePicker.prototype.areaMultiSelectorChange = function(e) {
			var value = e.detail.value;
			this.data.areaMltiSelectorValue = value;
			var region = "";
			if (this.data.areaList.length > 0) {
				for (var i = 0; i < value.length; i++) {
					var index = value[i];
					var list = this.data.areaList[i];
					region += list[index].name;
				}
			}
			this.data.areaDesc = region;
		};
		AvmBasePicker.prototype.areaMultiSelectorColumnChange = function(e) {
			var column = e.detail.column;
			if (column == this.data.areaList.length - 1) {
				return;
			}
			var value = e.detail.value;
			var selectValue = this.data.areaMltiSelectorValue;
			selectValue[column] = value;
			if (column == 0) {
				selectValue[1] = 0;
				selectValue[2] = 0;
			} else if (column == 1) {
				selectValue[2] = 0;
			}
			this.initAreaData(selectValue);
		};
		AvmBasePicker.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "Picker"),
				apivm.h(
					DemoBlock,
					{title: "普通选择器"},
					apivm.h(
						"picker",
						{
							class: "picker",
							id: "selector",
							mode: "selector",
							value: this.data.selectorValue,
							onChange: this.selectorChange
						},
						apivm.h(
							"view",
							{class: "text_box"},
							apivm.h("text", {class: "text_label"}, "选择性别"),
							apivm.h("text", {class: "text_label"}, this.data.genderDesc || "--")
						)
					)
				),
				apivm.h(
					DemoBlock,
					{title: "多列选择器"},
					apivm.h(
						"avm-space",
						{direction: "vertical", gap: "20px"},
						apivm.h(
							"picker",
							{
								class: "picker",
								id: "multiSelector",
								mode: "multiSelector",
								value: this.data.multiSelectorValue,
								onChange: this.multiSelectorChange
							},
							apivm.h(
								"view",
								{class: "text_box"},
								apivm.h("text", {class: "text_label"}, "选择年月"),
								apivm.h("text", {class: "text_label"}, this.data.dateDesc || "--")
							)
						),
						apivm.h(
							"picker",
							{
								class: "picker",
								id: "areaMltiSelector",
								mode: "multiSelector",
								"range-key": "name",
								value: this.data.areaMltiSelectorValue,
								onchange: this.areaMultiSelectorChange,
								oncolumnchange: this.areaMultiSelectorColumnChange
							},
							apivm.h(
								"view",
								{class: "text_box"},
								apivm.h("text", {class: "text_label"}, "选择区域"),
								apivm.h("text", {class: "text_label"}, this.data.areaDesc || "--")
							)
						)
					)
				)
			);
		};

		return AvmBasePicker;
	})(Component);
	AvmBasePicker.css = {
		".page": {
			width: "100%",
			height: "100%",
			background: "#f2f2f2",
			padding: "0 16px"
		},
		".text_box": {flexDirection: "row", justifyContent: "space-between"},
		".text": {margin: "8px", fontSize: "14px", color: "#333"},
		".slider": {margin: "8px", width: "60%"},
		".text_label": {fontSize: "14px", color: "#333"}
	};
	apivm.define("avm-base-picker", AvmBasePicker);
	apivm.render(apivm.h("avm-base-picker", null), "body");
})();