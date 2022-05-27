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

	// packages/avm-ui/src/utils/with-default-props.tsx
	function mergeProps(defaultProps3, props) {
		return Object.assign({}, defaultProps3, props);
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
	var classPrefix = "adm-mask";
	var opacityRecord = {
		default: 0.55,
		thin: 0.35,
		thick: 0.75
	};

	var defaultProps = {
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
				var props = mergeProps(defaultProps, p);
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
						className: classPrefix,
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
							className: classPrefix + "-aria-button",
							role: "button",
							"aria-label": "Mask",
							onClick: props.onMaskClick
						}),
					apivm.h(
						"div",
						{className: classPrefix + "-content", onClick: props.onMaskClick},
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
	var classPrefix2 = "adm-icon";
	var Icon = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(Icon, _Component2);
		function Icon() {
			var _this2;
			for (
				var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
				_key2 < _len2;
				_key2++
			) {
				args[_key2] = arguments[_key2];
			}
			_this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this2), "css", function() {
				return (
					'@font-face {font-family: "' +
					fontName +
					"\"; src: url('../../components/avm-ui/icon/" +
					fontName +
					".ttf') format('truetype');}\n        ." +
					classPrefix2 +
					" {font-family: " +
					fontName +
					";}"
				);
			});
			_defineProperty(_assertThisInitialized(_this2), "render", function(props) {
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
							classPrefix2 +
							" " +
							classPrefix2 +
							"-font-icon-text " +
							(props.class || props.className || "")
					},
					char
				);
			});
			return _this2;
		}
		return Icon;
	})(Component);

	Icon = __decorateClass([tag("avm-icon")], Icon);

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default = Icon;

	// packages/avm-ui/src/components/popup/popup.tsx
	var classPrefix3 = "adm-popup";
	var defaultProps2 = {
		position: "bottom",
		visible: false,
		getContainer: function getContainer() {
			return document.body;
		},
		mask: true,
		stopPropagation: ["click"],
		bodyStyle: {},
		isTitle: false,
		titleText: "\u6807\u9898"
	};

	var Popup = /*#__PURE__*/ (function(_Component3) {
		_inheritsLoose(Popup, _Component3);
		function Popup() {
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
				visible: _this3.props.visible
			});
			_defineProperty(
				_assertThisInitialized(_this3),
				"setVisible",

				function(visible) {
					if (visible) {
						_this3.props.afterShow && _this3.props.afterShow();
					}
					_this3.data.visible = visible;
				}
			);
			_defineProperty(_assertThisInitialized(_this3), "render", function(props) {
				_this3.props = Object.assign({}, defaultProps2, props);
				_this3.data.visible = props.visible;
				var _this3$props = _this3.props,
					_this3$props$zIndex = _this3$props.zIndex,
					zIndex = _this3$props$zIndex === void 0 ? 1e3 : _this3$props$zIndex,
					bodyClassName = _this3$props.bodyClassName,
					position = _this3$props.position,
					_this3$props$forceRen = _this3$props.forceRender,
					forceRender =
						_this3$props$forceRen === void 0 ? false : _this3$props$forceRen,
					_this3$props$destroyO = _this3$props.destroyOnClose,
					destroyOnClose =
						_this3$props$destroyO === void 0 ? false : _this3$props$destroyO,
					stopPropagation = _this3$props.stopPropagation,
					handleClick = _this3$props.handleClick,
					mask = _this3$props.mask,
					maskClick = _this3$props.maskClick,
					maskClassName = _this3$props.maskClassName,
					maskStyle = _this3$props.maskStyle,
					bodyStyle = _this3$props.bodyStyle,
					children = _this3$props.children,
					isTitle = _this3$props.isTitle,
					titleText = _this3$props.titleText,
					isBack = _this3$props.isBack,
					handleClose = _this3$props.handleClose,
					handleBack = _this3$props.handleBack,
					tipText = _this3$props.tipText,
					isFooterBtn = _this3$props.isFooterBtn,
					footBtnClick = _this3$props.footBtnClick,
					bodyHeight = _this3$props.bodyHeight,
					bodyWidth = _this3$props.bodyWidth;
				if (["top", "bottom"].includes(position)) {
					!bodyHeight && (bodyHeight = "375px");
					bodyStyle = _objectSpread2(
						_objectSpread2({}, bodyStyle),
						{},
						{height: bodyHeight}
					);
				}
				if (["left", "right"].includes(position)) {
					!bodyWidth && (bodyWidth = "311px");
					bodyStyle = _objectSpread2(
						_objectSpread2({}, bodyStyle),
						{},
						{width: bodyWidth}
					);
				}
				var bodyCls = classNames(
					classPrefix3 + "-body",
					bodyClassName,
					classPrefix3 + "-body-position-" + position
				);
				var shouldRender = useShouldRender(
					_this3.data.visible,
					forceRender,
					destroyOnClose
				);
				return apivm.h(
					"div",
					{
						className: classNames(classPrefix3, props.className),
						onClick: function onClick() {
							handleClick && handleClick();
						},
						style: {display: _this3.data.visible ? "flex" : "none", zIndex: zIndex}
					},
					mask &&
						apivm.h(Mask_default, {
							visible: props.visible,
							onMaskClick: function onMaskClick() {
								maskClick && maskClick();
							},
							className: maskClassName,
							style: maskStyle,
							disableBodyScroll: false,
							stopPropagation: stopPropagation
						}),
					apivm.h(
						"div",
						{
							className: bodyCls,
							style: _objectSpread2(
								_objectSpread2({}, bodyStyle),
								{},
								{
									zIndex: zIndex + 10
								}
							)
						},

						isTitle &&
							apivm.h(
								"div",
								{className: classPrefix3 + "-title"},
								isBack &&
									apivm.h(
										"div",
										{
											className: classPrefix3 + "-title-back",
											onClick: function onClick() {
												handleBack && handleBack();
											}
										},
										apivm.h(Icon_default, {code: 59988, fontSize: "18", color: "#bbb"}),
										apivm.h(
											"span",
											{className: classPrefix3 + "-title-back-text"},
											"\u8FD4\u56DE"
										)
									),

								apivm.h(
									"div",
									{className: classPrefix3 + "-title-con"},
									apivm.h("span", {className: classPrefix3 + "-title-text"}, titleText),
									tipText &&
										apivm.h(
											"div",
											{title: tipText},
											apivm.h(Icon_default, {code: 59940, fontSize: "18", color: "#bbb"})
										)
								),

								apivm.h(
									"div",
									{
										onClick: function onClick() {
											handleClose && handleClose();
										}
									},
									apivm.h(Icon_default, {code: 59940, fontSize: "18", color: "#bbb"})
								)
							),

						shouldRender && formatLabel(children),
						isFooterBtn &&
							apivm.h(
								"div",
								{className: classPrefix3 + "-footer"},
								apivm.h(
									"button",
									{
										onClick: function onClick() {
											footBtnClick && footBtnClick();
										},
										className: classPrefix3 + "-footer-btn"
									},
									"\u786E\u5B9A"
								)
							)
					)
				);
			});
			_defineProperty(_assertThisInitialized(_this3), "css", function() {
				return "\n      .adm-popup {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n      .adm-popup-body {\n        position: absolute;\n        background-color: #fff;\n      }\n      .adm-popup-body-position-bottom {\n        width: 100%;\n        bottom: 0;\n        left: 0;\n        border-radius: 12px 12px 0 0;\n      }\n      .adm-popup-body-position-top {\n        width: 100%;\n        top: 0;\n        left: 0;\n        border-radius: 0 0 12px 12px;\n      }\n      .adm-popup-body-position-left {\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n      .adm-popup-body-position-right {\n        height: 100%;\n        top: 0;\n        right: 0;\n      }\n      .adm-popup-title {\n        display: flex;\n        flex-direction: row;\n        height: 50px;\n        align-items: center;\n        padding: 0 16px;\n      }\n      .adm-popup-title-con {\n        flex: 1;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-popup-title-text {\n        text-align: center;\n        font-size: 16px;\n        color: #333330;\n        font-weight: 500;\n        margin-right: 6px;\n      }\n      .adm-popup-title-back {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n      }\n      .adm-popup-title-back-text {\n        font-size: 15px;\n        color: #BBBBBB;\n        padding-left: 8px;\n      }\n      .adm-popup-footer {\n        position: absolute;\n        bottom: 8px;\n        width: 100%;\n        height: 44px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-popup-footer-btn {\n        width: 95%;\n        height: 44px;\n        background: #9AC200;\n        border-radius: 4px;\n        color: #fff;\n        border: none;\n      }\n    ";
			});
			return _this3;
		}
		return Popup;
	})(Component);
	avm.define("avm-popup", Popup);

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
	var classPrefix$1 = "adm-icon";
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
					classPrefix$1 +
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

	Icon$1 = __decorateClass$1([tag$1("avm-icon")], Icon$1);

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default$1 = Icon$1;

	// packages/avm-ui/src/components/nav-bar/nav-bar.tsx
	var classPrefix2$1 = "adm-nav-bar";
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
					{className: classNames(classPrefix2$1), style: style},
					apivm.h(
						"div",
						{className: classPrefix2$1 + "-left", role: "button"},
						back !== null &&
							apivm.h(
								"div",
								{className: classPrefix2$1 + "-back", onClick: props.onBack},
								backArrow &&
									apivm.h(
										"div",
										{className: classPrefix2$1 + "-back-arrow"},
										backArrow === true || backArrow === "true"
											? apivm.h(Icon_default$1, {code: 59988, fontSize: "18"})
											: backArrow
									),
								apivm.h("text", {"aria-hidden": "true"}, back)
							),

						apivm.h("text", {className: classPrefix2$1 + "-left-text"}, props.left)
					),

					props.children &&
						Boolean(props.children) &&
						typeof props.children[0] === "string"
						? apivm.h("text", {className: classPrefix2$1 + "-title"}, props.children)
						: apivm.h("div", {className: classPrefix2$1 + "-title"}, props.children),
					apivm.h("div", {className: classPrefix2$1 + "-right"}, rightNode)
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
	var classPrefix$2 = "adm-button";
	var defaultProps$2 = {
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
			props = Object.assign({}, defaultProps$2, props);
			var disabled = props.disabled || props.loading;
			var _props = props,
				shape = _props.shape,
				fill = _props.fill;
			var btnCls = classNames(
				classPrefix$2,
				props.color ? classPrefix$2 + "-" + props.color : null,
				((_classNames = {}),
				(_classNames[classPrefix$2 + "-block"] = props.block),
				(_classNames[classPrefix$2 + "-disabled"] = disabled),
				(_classNames[classPrefix$2 + "-" + props.color + "-fill-outline"] =
					fill === "outline"),
				(_classNames[classPrefix$2 + "-" + props.color + "-fill-none"] =
					fill === "none"),
				(_classNames[classPrefix$2 + "-" + props.size] = true),
				(_classNames[classPrefix$2 + "-loading"] = props.loading),
				_classNames),
				classPrefix$2 + "-shape-" + shape
			);
			return apivm.h(
				"button",
				{type: props.type, className: btnCls, disabled: disabled},
				props.loading ? props.loadingText : props.children
			);
		};
		return Button;
	})(Component);

	__decorateClass$2([superProps], Button.prototype, "render", 1);
	avm.define("avm-button", Button);

	function mergeProps$1(defaultProps2, props) {
		return Object.assign({}, defaultProps2, props);
	}

	// packages/avm-ui/src/components/space/space.tsx
	var classPrefix$3 = "adm-space";
	var defaultProps$3 = {
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
				props = mergeProps$1(defaultProps$3, props);
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
								classPrefix$3,
								((_classNames = {}),
								(_classNames[classPrefix$3 + "-wrap"] = props.wrap),
								(_classNames[classPrefix$3 + "-" + direction + "-wrap"] = props.wrap),
								(_classNames[classPrefix$3 + "-block"] = props.block),
								(_classNames[classPrefix$3 + "-" + direction] = true),
								(_classNames[classPrefix$3 + "-align-" + props.align] = !!props.align),
								(_classNames[
									classPrefix$3 + "-justify-" + props.justify
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
										classPrefix$3 + "-item",
										classPrefix$3 + "-" + direction + "-item",
										((_classNames2 = {}),
										(_classNames2[classPrefix$3 + "-" + direction + "-item-last"] =
											index === props.children.length - 1),
										(_classNames2[classPrefix$3 + "-" + direction + "-wrap-item"] =
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

	var checkLabelType$1 = function checkLabelType(ele) {
		return Object.prototype.toString.call(ele);
	};
	var formatLabel$1 = function formatLabel(ele, cls, style) {
		if (style === void 0) {
			style = {};
		}
		if (checkLabelType$1(ele) === "[object Array]") {
			return ele.map(function(el) {
				return formatLabel(el, cls, style);
			});
		}
		return checkLabelType$1(ele) === "[object String]"
			? apivm.h("span", {className: cls, style: style}, ele)
			: apivm.h("div", {className: cls, style: style}, ele);
	};

	// packages/avm-ui/src/components/swiper/swiper-item.tsx
	var SwiperItem = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(SwiperItem, _Component);
		function SwiperItem() {
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
					"swiper-item",
					{
						className: "adm-swiper-item",
						onClick: function onClick() {
							return props.handleClick && props.handleClick(props.index);
						},
						style: props.style
					},
					formatLabel$1(props.children, "adm-swiper-item-child")
				);
			});
			return _this;
		}
		return SwiperItem;
	})(Component);

	// packages/avm-ui/src/components/page-indicator/page-indicator.tsx
	var classPrefix$4 = "adm-page-indicator";
	var defaultProps$4 = {
		direction: "horizontal",
		style: {},
		color: "primary",
		total: 5,
		current: 0
	};

	var colorMapping = {
		primary: "#9AC200",
		white: "#fff"
	};

	var PageIndicator = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(PageIndicator, _Component2);
		function PageIndicator() {
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
				props = Object.assign({}, defaultProps$4, props);
				var _props = props,
					direction = _props.direction,
					_props$dotColor = _props.dotColor,
					dotColor = _props$dotColor === void 0 ? "#ddd" : _props$dotColor,
					_props$activeDotColor = _props.activeDotColor,
					activeDotColor =
						_props$activeDotColor === void 0
							? ["primary", "white"].includes(props.color)
								? colorMapping[props.color]
								: props.color
							: _props$activeDotColor,
					_props$dotSize = _props.dotSize,
					dotSize = _props$dotSize === void 0 ? "6px" : _props$dotSize,
					_props$activeDotSize = _props.activeDotSize,
					activeDotSize =
						_props$activeDotSize === void 0 ? "6px" : _props$activeDotSize,
					_props$dotBorderRadiu = _props.dotBorderRadius,
					dotBorderRadius =
						_props$dotBorderRadiu === void 0 ? "3px" : _props$dotBorderRadiu,
					_props$activeDotBorde = _props.activeDotBorderRadius,
					activeDotBorderRadius =
						_props$activeDotBorde === void 0 ? "3px" : _props$activeDotBorde,
					_props$dotSpacing = _props.dotSpacing,
					dotSpacing = _props$dotSpacing === void 0 ? "8px" : _props$dotSpacing;
				var isHorizontal = direction === "horizontal";
				var dots = [];
				for (var i = 0; i < props.total; i++) {
					var _classNames;
					dots.push(
						apivm.h("div", {
							key: i,
							className: classNames(
								classPrefix$4 + "-dot",
								((_classNames = {}),
								(_classNames[classPrefix$4 + "-dot-active"] = props.current === i),
								_classNames)
							),
							style: {
								background: props.current === i ? activeDotColor : dotColor,
								width:
									props.current === i
										? isHorizontal
											? activeDotSize
											: dotSize
										: dotSize,
								height:
									props.current === i
										? !isHorizontal
											? activeDotSize
											: dotSize
										: dotSize,
								borderRadius:
									props.current === i ? activeDotBorderRadius : dotBorderRadius,
								marginRight: isHorizontal ? dotSpacing : 0,
								marginBottom: !isHorizontal ? dotSpacing : 0
							}
						})
					);
				}
				return apivm.h(
					"div",
					{
						className: classNames(
							classPrefix$4,
							props.className,
							classPrefix$4 + "-" + props.direction,
							classPrefix$4 + "-color-" + props.color
						),
						style: props.style
					},
					dots
				);
			});
			_defineProperty(_assertThisInitialized(_this2), "css", function() {
				return "\n      .adm-page-indicator {\n        display: flex;\n        width: fit-content;\n        padding:12px;\n      }\n      .adm-page-indicator-dot {\n        display: block;\n      }\n      .adm-page-indicator-dot:last-child {\n        margin-right: 0;\n      }\n      .adm-page-indicator-color-white .adm-page-indicator-dot-active {\n        background: #fff;\n      }\n      .adm-page-indicator-horizontal {\n        flex-direction: row;\n      }\n      .adm-page-indicator-vertical {\n        flex-direction: column;\n      }\n    ";
			});
			return _this2;
		}
		return PageIndicator;
	})(Component);

	// packages/avm-ui/src/components/swiper/swiper.tsx
	var classPrefix2$2 = "adm-swiper";
	var defaultProps2$1 = {
		defaultIndex: 0,
		allowTouchMove: true,
		autoplay: false,
		autoplayInterval: 3e3,
		loop: false,
		direction: "horizontal",
		slideSize: 100,
		trackOffset: 0,
		stuckAtBoundary: false
	};

	var Swiper = /*#__PURE__*/ (function(_Component3) {
		_inheritsLoose(Swiper, _Component3);
		function Swiper() {
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
				current: _this3.props.defaultIndex || 0,
				timer: null
			});
			_defineProperty(
				_assertThisInitialized(_this3),
				"render",

				function(props) {
					_this3.props = Object.assign({}, defaultProps2$1, props);
					var _this3$props = _this3.props,
						_this3$props$height = _this3$props.height,
						height = _this3$props$height === void 0 ? "120px" : _this3$props$height,
						_this3$props$width = _this3$props.width,
						width = _this3$props$width === void 0 ? "100%" : _this3$props$width,
						_this3$props$borderRa = _this3$props.borderRadius,
						borderRadius =
							_this3$props$borderRa === void 0 ? "0" : _this3$props$borderRa,
						autoplay = _this3$props.autoplay,
						autoplayInterval = _this3$props.autoplayInterval,
						loop = _this3$props.loop,
						direction = _this3$props.direction,
						indexChange = _this3$props.indexChange,
						indicatorProps = _this3$props.indicatorProps;
					var swiperStyle = {
						height: height,
						width: width,
						borderRadius: borderRadius
					};

					var pageIndicatorEle =
						props.indicator === void 0
							? apivm.h(
									"div",
									{
										className: classNames(
											classPrefix2$2 + "-pageindicator",
											classPrefix2$2 + "-pageindicator-" + direction
										)
									},
									apivm.h(
										PageIndicator,
										_extends({}, indicatorProps, {
											total: props.children.length,
											direction: direction,
											current: _this3.data.current
										})
									)
							  )
							: props.indicator({
									total: props.children.length,
									current: _this3.data.current
							  });
					return apivm.h(
						"div",
						{className: classPrefix2$2 + "-wrapper"},
						props.title &&
							apivm.h(
								"view",
								{className: classPrefix2$2 + "-title"},
								apivm.h(
									"text",
									{className: classPrefix2$2 + "-title-text"},
									props.title
								),
								apivm.h(
									"view",
									{className: classPrefix2$2 + "-title-pageindicator"},
									apivm.h(
										"text",
										{className: classPrefix2$2 + "-title-pageindicator-current"},
										_this3.data.current
									),
									apivm.h(
										"text",
										{className: classPrefix2$2 + "-title-pageindicator-total"},
										"/ ",
										props.children.length
									)
								)
							),

						apivm.h(
							"swiper",
							{
								className: classPrefix2$2,
								autoplay: autoplay,
								interval: autoplayInterval,
								style: swiperStyle,
								circular: loop,
								vertical: direction === "vertical",
								current: _this3.data.current,
								onChange: function onChange(e) {
									_this3.data.current = e.detail.current;
									indexChange == null ? void 0 : indexChange(_this3.data.current);
								}
							},
							props.children.map(function(item, index) {
								return apivm.h(
									SwiperItem,
									_extends({}, item.attributes, {index: index}),
									item.children
								);
							})
						),
						!!!props.title && pageIndicatorEle
					);
				}
			);
			_defineProperty(_assertThisInitialized(_this3), "css", function() {
				return "\n    .adm-swiper-wrapper {\n      position: relative;\n    }\n    .adm-swiper-title {\n      padding-bottom: 12px;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .adm-swiper-title-text {\n      font-size: 16px;\n      color: #333;\n      font-weight: 500;\n    }\n    .adm-swiper-title-pageindicator {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n    .adm-swiper-title-pageindicator-current {\n      font-size: 16px;\n      color: #333;\n      font-weight: 500;\n      padding-right: 4px;\n    }\n    .adm-swiper-title-pageindicator-total {\n      font-size: 14px;\n      color: #999;\n    }\n    .adm-swiper-item {\n      align-items: center;\n      justify-content: center;\n    }\n    .adm-swiper-item-child {\n      width: 100%;\n      height: 100%;\n    }\n    .adm-swiper-pageindicator {\n      position: absolute;\n    }\n    .adm-swiper-pageindicator-horizontal {\n      bottom: 12px;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    .adm-swiper-pageindicator-vertical {\n      right: 12px;\n      top: 50%;\n    }\n    ";
			});
			return _this3;
		}
		return Swiper;
	})(Component);

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

	// packages/avm-ui/src/components/swiper/index.ts
	var swiper_default = attachPropertiesToComponent(Swiper, {
		Item: SwiperItem
	});

	avm.define("avm-swiper", Swiper);
	avm.define("avm-swiper-item", SwiperItem);

	global.colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
	var DemoSwiper = /*@__PURE__*/ (function(Component) {
		function DemoSwiper(props) {
			Component.call(this, props);
			this.data = {
				current: 0,
				indicatorProps: {
					color: "white"
				},

				visiable: false,
				popupBodyStyle: {height: "100%", background: "#f00"}
			};
		}

		if (Component) DemoSwiper.__proto__ = Component;
		DemoSwiper.prototype = Object.create(Component && Component.prototype);
		DemoSwiper.prototype.constructor = DemoSwiper;
		DemoSwiper.prototype.back = function() {
			api.closeWin();
		};
		DemoSwiper.prototype.onchange = function(v) {
			api.toast({
				msg: v
			});

			this.data.current = v;
		};
		DemoSwiper.prototype.setVisible = function(v) {
			this.data.visiable = v;
		};
		DemoSwiper.prototype.handleClick = function(index) {
			api.toast({
				msg: "点击了" + index
			});
		};
		DemoSwiper.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "main"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "Swiper"),
				apivm.h(
					"scroll-view",
					null,
					apivm.h(
						DemoBlock,
						{title: "基础用法"},
						apivm.h(
							"avm-swiper",
							{indicatorProps: this.data.indicatorProps, title: "标题文本"},
							colors.map(function(color, index) {
								var styles = {background: color};
								return apivm.h(
									"avm-swiper-item",
									{key: index},
									apivm.h(
										"span",
										{
											className: "contents",
											style: styles,
											handleClick: function() {
												return api.toast({msg: "你点击了卡片 " + (index + 1)});
											}
										},
										index + 1
									)
								);
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "自动播放"},
						apivm.h(
							"avm-swiper",
							{autoplay: true, indicatorProps: this.data.indicatorProps},
							colors.map(function(color, index) {
								var styles = {background: color};
								return apivm.h(
									"avm-swiper-item",
									{key: index},
									apivm.h("span", {className: "contents", style: styles}, index + 1)
								);
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "自定义圆角样式"},
						apivm.h(
							"avm-space",
							{direction: "vertical", block: true},
							apivm.h(
								"avm-swiper",
								{
									borderRadius: "10px",
									defaultIndex: 2,
									indicatorProps: this.data.indicatorProps
								},
								colors.map(function(color, index) {
									var styles = {background: color};
									return apivm.h(
										"avm-swiper-item",
										{key: index},
										apivm.h("span", {className: "contents", style: styles}, index + 1)
									);
								})
							)
						)
					),
					apivm.h(
						DemoBlock,
						{title: "指示器颜色"},
						apivm.h(
							"avm-space",
							{direction: "vertical", block: true},
							apivm.h(
								"avm-swiper",
								{indicatorProps: {color: "#f0f"}, defaultIndex: 1},
								colors.map(function(color, index) {
									var styles = {background: color};
									return apivm.h(
										"avm-swiper-item",
										{
											key: index,
											handleClick: function(index) {
												return this$1.handleClick(index);
											}
										},
										apivm.h("span", {className: "contents", style: styles}, index + 1)
									);
								})
							),
							apivm.h(DemoDescription, {
								content: "通过indicatorProps可以控制指示器的外观"
							})
						)
					),

					apivm.h(
						DemoBlock,
						{title: "自定义指示器"},
						apivm.h(
							"avm-space",
							{direction: "vertical", block: true},
							apivm.h(
								"avm-swiper",
								{
									indicator: function(data) {
										return apivm.h(
											"span",
											{className: "customIndicator"},
											data.current + 1 + " / " + data.total
										);
									}
								},
								colors.map(function(color, index) {
									var styles = {background: color};
									return apivm.h(
										"avm-swiper-item",
										{key: index},
										apivm.h("span", {className: "contents", style: styles}, index + 1)
									);
								})
							),
							apivm.h(DemoDescription, {
								content: "你可以完全自定义指示器的渲染，甚至改变指示器的位置"
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "无指示器"},
						apivm.h(
							"avm-swiper",
							{
								indicator: function() {
									return null;
								}
							},
							colors.map(function(color, index) {
								var styles = {background: color};
								return apivm.h(
									"avm-swiper-item",
									{key: index},
									apivm.h("span", {className: "contents", style: styles}, index + 1)
								);
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "全屏引导"},
						apivm.h(
							"avm-button",
							{
								onClick: function() {
									return this$1.setVisible(true);
								}
							},
							"显示弹出层"
						),
						apivm.h(DemoDescription, {content: "配合 Popup 组件可以实现全屏引导"})
					)
				),
				apivm.h(
					"avm-popup",
					{
						position: "bottom",
						visible: this.data.visiable,
						bodyStyle: this.data.popupBodyStyle,
						bodyHeight: "100%"
					},
					apivm.h(
						"avm-swiper",
						{loop: false, height: "100%"},
						apivm.h(
							"avm-swiper-item",
							null,
							apivm.h(
								"span",
								{className: "contentFull", style: {background: "#ace0ff"}},
								"1"
							)
						),
						apivm.h(
							"avm-swiper-item",
							null,
							apivm.h(
								"span",
								{className: "contentFull", style: {background: "#bcffbd"}},
								"2"
							)
						),
						apivm.h(
							"avm-swiper-item",
							null,
							apivm.h(
								"div",
								{className: "contentFull", style: {background: "#fff"}},
								apivm.h(
									"avm-button",
									{
										onClick: function() {
											return this$1.setVisible(false);
										}
									},
									"开始使用"
								)
							)
						)
					)
				)
			);
		};

		return DemoSwiper;
	})(Component);
	DemoSwiper.css = {
		".main": {width: "100%", height: "100%"},
		".contents": {
			width: "100%",
			height: "120px",
			color: "#ffffff",
			textAlign: "center",
			lineHeight: "120px",
			fontSize: "48px",
			userSelect: "none"
		},
		".customIndicator": {
			position: "absolute",
			top: "6px",
			right: "6px",
			background: "rgba(0, 0, 0, 0.3)",
			padding: "3px 6px",
			color: "#ffffff",
			borderRadius: "50%",
			userSelect: "none",
			fontSize: "12px"
		},
		".contentFull": {
			width: "100%",
			height: "100%",
			textAlign: "center",
			color: "#fff",
			fontSize: "48px",
			userSelect: "none",
			paddingTop: "60px"
		}
	};
	DemoSwiper.csslink = ["../../components/avm-ui/demos/index.css"];
	apivm.define("demo-swiper", DemoSwiper);
	apivm.render(apivm.h("demo-swiper", null), "body");
})();
