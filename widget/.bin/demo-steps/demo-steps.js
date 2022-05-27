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
	var classPrefix = "adm-icon";
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
					classPrefix +
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
							classPrefix +
							" " +
							classPrefix +
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
	var defaultProps = {
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
				props = Object.assign({}, defaultProps, props);
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

	// packages/avm-ui/src/components/steps/step.tsx
	var classPrefix$1 = "adm-step";
	var Step = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Step, _Component);
		function Step() {
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
				var _props$title = props.title,
					title =
						_props$title === void 0 ? "\u6B65\u9AA4\u6807\u9898" : _props$title,
					_props$description = props.description,
					description =
						_props$description === void 0
							? "\u6B65\u9AA4\u7684\u8BE6\u60C5\u63CF\u8FF0"
							: _props$description,
					_props$status = props.status,
					status = _props$status === void 0 ? "wait" : _props$status,
					direction = props.direction,
					curIndex = props.curIndex,
					totalLen = props.totalLen,
					_props$isDot = props.isDot,
					isDot = _props$isDot === void 0 ? false : _props$isDot;
				var titleCls = classNames(
					classPrefix$1 + "-title",
					classPrefix$1 + "-title-" + status,
					classPrefix$1 + "-title-" + direction
				);
				var descCls = classNames(
					classPrefix$1 + "-description",
					classPrefix$1 + "-" + direction + "-content-description",
					classPrefix$1 + "-description-" + direction
				);
				var dotCls = classNames(
					classPrefix$1 + "-dot",
					classPrefix$1 + "-dot-" + status
				);
				var dotEle = apivm.h("view", {
					className: classNames(
						classPrefix$1 + "-dottext",
						classPrefix$1 + "-dottext-" + status
					)
				});
				return apivm.h(
					"div",
					{
						className: classNames("" + classPrefix$1, classPrefix$1 + "-" + direction)
					},
					apivm.h(
						"div",
						{
							className: classNames(
								classPrefix$1 + "-indicator",
								classPrefix$1 + "-" + direction + "-indicator"
							)
						},
						props.icon
							? props.icon
							: isDot
							? apivm.h("div", {className: dotCls})
							: dotEle,
						curIndex !== totalLen - 1 &&
							apivm.h("div", {
								className: classNames(
									classPrefix$1 + "-line",
									classPrefix$1 + "-" + direction + "-line",
									classPrefix$1 + "-line-" + status
								)
							})
					),

					apivm.h(
						"div",
						{
							className: classNames(
								classPrefix$1 + "-content",
								classPrefix$1 + "-" + direction + "-content"
							)
						},
						formatLabel(title, titleCls),
						!!description && formatLabel(description, descCls)
					)
				);
			});
			_defineProperty(_assertThisInitialized(_this), "css", function() {
				return "\n    .adm-step-indicator {\n      align-items: center;\n      position:relative;\n    }\n    .adm-step-line{\n        position:absolute;\n    }\n    \n    \n    .adm-step-title {\n      color: #333;\n      width: 100%;\n      font-size: 14px;\n      line-height: 20px;\n    }\n    .adm-step-description {\n      width: 100%;\n      white-space: wrap;\n      font-size: 12px;\n      color: #999;\n      line-height: 16px;\n    }\n    .adm-step-horizontal {\n      flex: 1;\n      flex-direction: column;\n      align-items: center;\n    }\n    .adm-step-horizontal-indicator {\n      width: 100%;\n      height: 24px;\n      flex-direction: row;\n    justify-content:center;\n    }\n    .adm-step-horizontal-line {\n      flex: 1;\n      height: 1px;\n      background: #e8e8e8;\n      left:50%;\n        width:100%;\n    }\n    .adm-step-horizontal-content {\n      padding-top: 2px;\n    }\n    .adm-step-horizontal-content-description {\n      margin-top: 2px;\n    }\n    .adm-step-vertical {\n      flex-direction: row;\n      align-items: flex-start;\n    }\n    .adm-step-vertical-indicator {\n      width: 24px;\n      height: 100%;\n      margin-right: 8px;\n      flex-direction: column;\n      padding-top:6px;\n    }\n    \n    \n    .adm-step-vertical-line {\n      flex: 1;\n      width: 1px;\n      background: #e8e8e8;\n      height:100%;\n    }\n    .adm-step-vertical-content {\n      flex: auto;\n      margin: 0 0 15px 0;\n    }\n    .adm-step-vertical-content-description {\n      padding-top: 2px;\n    }\n    \n \n \n    \n    .adm-step-line-wait {\n      background: #ddd;\n    }\n    .adm-step-line-finish {\n      background: #9ac200;\n    }\n    .adm-step-line-error {\n      background: #e02020;\n    }\n    .adm-step-dot {\n      width: 8px;\n      height: 8px;\n      border-radius: 4px;\n      z-index: 6;\n      background-color: #ddd;\n    }\n    .adm-step-dot-wait {\n      background-color: #ddd;\n    }\n    .adm-step-dot-process {\n      background-color: #9ac200;\n    }\n    .adm-step-dot-finish {\n      background-color: #9ac200;\n    }\n    .adm-step-dot-error {\n      background-color: #e02020;\n    }\n    .adm-step-dottext {\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n      z-index: 6;\n    \n    \n    }\n    .adm-step-dottext-wait {\n      background: #ddd;\n      color: #fff;\n    }\n    .adm-step-dottext-error {\n      background: #e02020;\n    }\n    .adm-step-dottext-process {\n      background: #9ac200;\n    }\n    .adm-step-dottext-finish {\n      background: #9ac200;\n    }\n    \n    .adm-step-title-horizontal,.adm-step-description-horizontal{\n    text-align:center;\n    }\n    \n    ";
			});
			return _this;
		}
		return Step;
	})(Component);

	// packages/avm-ui/src/components/steps/steps.tsx
	var classPrefix2$1 = "adm-steps";
	var defaultProps$1 = {
		current: 0,
		direction: "horizontal"
	};

	var Steps = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(Steps, _Component2);
		function Steps() {
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
					direction = _props.direction,
					current = _props.current;
				var list = props.children.map(function(item) {
					return _objectSpread2(
						_objectSpread2({}, item.attributes),
						{},
						{
							children: item.children
						}
					);
				});
				var stemItem = list.map(function(item, index) {
					var status = item.status;
					if (index < current) {
						status = status || "finish";
					} else if (index === current) {
						status = status || "process";
					} else {
						status = status || "wait";
					}
					return apivm.h(
						Step,
						_extends({}, item, {
							status: status,
							direction: direction,
							totalLen: list.length,
							curIndex: index
						})
					);
				});
				return apivm.h(
					"div",
					{className: classNames(classPrefix2$1, classPrefix2$1 + "-" + direction)},
					stemItem
				);
			});
			_defineProperty(_assertThisInitialized(_this2), "css", function() {
				return "\n      .adm-steps {\n        width: 100%;\n      }\n      .adm-steps-horizontal {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        padding: 8px 0;\n      }\n      .adm-steps-vertical {\n        padding: 8px 16px;\n      }\n    ";
			});
			return _this2;
		}
		return Steps;
	})(Component);

	// packages/avm-ui/src/components/steps/index.ts
	var steps_default = attachPropertiesToComponent(Steps, {
		Step: Step
	});

	avm.define("avm-steps", Steps);
	avm.define("avm-step", Step);

	var DemoSteps = /*@__PURE__*/ (function(Component) {
		function DemoSteps(props) {
			Component.call(this, props);
			this.data = {
				current: 0
			};
		}

		if (Component) DemoSteps.__proto__ = Component;
		DemoSteps.prototype = Object.create(Component && Component.prototype);
		DemoSteps.prototype.constructor = DemoSteps;
		DemoSteps.prototype.back = function() {
			api.closeWin();
		};
		DemoSteps.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "Steps"),
				apivm.h(
					"scroll-view",
					null,
					apivm.h(
						DemoBlock,
						{title: "基础样式"},
						apivm.h(
							"avm-steps",
							{current: 1},
							apivm.h("avm-step", {title: "标题文字"}),
							apivm.h("avm-step", {title: "标题文字"}),
							apivm.h("avm-step", {title: "标题文字"})
						)
					),

					apivm.h(
						DemoBlock,
						{title: "异常状态"},
						apivm.h(
							"avm-steps",
							{current: 2},
							apivm.h("avm-step", {title: "标题文字", description: "小正文"}),
							apivm.h("avm-step", {
								title: "标题文字",
								status: "error",
								description: "小正文"
							}),
							apivm.h("avm-step", {
								title: "标题文字",
								status: "wait",
								description: "小正文"
							})
						)
					),

					apivm.h(
						DemoBlock,
						{title: "纵向"},
						apivm.h(
							"avm-steps",
							{direction: "vertical"},
							apivm.h("avm-step", {title: "填写机构信息", status: "process"}),
							apivm.h("avm-step", {title: "签约机构", status: "wait"}),
							apivm.h("avm-step", {title: "关联服务区", status: "wait"})
						)
					),

					apivm.h(
						DemoBlock,
						{title: "纵向（失败状态）"},
						apivm.h(
							"avm-steps",
							{direction: "vertical"},
							apivm.h("avm-step", {
								title: "填写机构信息",
								status: "finish",
								description: "完成时间：2020-12-01 12:30"
							}),
							apivm.h("avm-step", {
								title: "签约机构",
								status: "finish",
								description: "完成时间：2020-12-01 12:30"
							}),
							apivm.h("avm-step", {
								title: "关联服务区",
								status: "finish",
								description: "完成时间：2020-12-01 12:30"
							}),
							apivm.h("avm-step", {
								title: "审批失败",
								status: "error",
								description: "完成时间：2020-12-01 12:30"
							})
						)
					),

					apivm.h(
						DemoBlock,
						{title: "自定义显示节点"},
						apivm.h(
							"avm-steps",
							{direction: "vertical"},
							apivm.h("avm-step", {
								title: "第一步",
								status: "finish",
								description: "完成人111",
								icon: apivm.h("text", {style: "font-size: 12px; color: #0ff"}, "一")
							}),
							apivm.h("avm-step", {
								title: "第二步",
								status: "finish",
								description: "完成人222",
								icon: apivm.h("text", {style: "font-size: 12px; color: #00f"}, "二")
							}),
							apivm.h("avm-step", {
								title: "第三步",
								status: "wait",
								description: "完成人333",
								icon: apivm.h("text", {style: "font-size: 12px"}, "三")
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "小圆点显示节点"},
						apivm.h(
							"avm-steps",
							{direction: "vertical"},
							apivm.h("avm-step", {
								title: "第一步",
								status: "finish",
								description: "完成人111"
							}),
							apivm.h("avm-step", {
								title: "第二步",
								status: "finish",
								description: "完成人222",
								isDot: true
							}),
							apivm.h("avm-step", {
								title: "第三步",
								status: "wait",
								description: "完成人333",
								isDot: true
							})
						)
					)
				)
			);
		};

		return DemoSteps;
	})(Component);
	DemoSteps.css = {
		".page": {height: "100%", width: "100%"},
		".text-style": {fontSize: "16px", color: "#f0f", background: "#ff0"},
		".icon-style": {width: "20px", height: "20px"}
	};
	DemoSteps.csslink = ["../../components/avm-ui/demos/index.css"];
	apivm.define("demo-steps", DemoSteps);
	apivm.render(apivm.h("demo-steps", null), "body");
})();
