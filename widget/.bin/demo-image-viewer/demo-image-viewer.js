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
	var classPrefix$1 = "adm-mask";
	var opacityRecord = {
		default: 0.55,
		thin: 0.35,
		thick: 0.75
	};

	var defaultProps$1 = {
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
				var props = mergeProps(defaultProps$1, p);
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
						className: classPrefix$1,
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
							className: classPrefix$1 + "-aria-button",
							role: "button",
							"aria-label": "Mask",
							onClick: props.onMaskClick
						}),
					apivm.h(
						"div",
						{className: classPrefix$1 + "-content", onClick: props.onMaskClick},
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
					var props = mergeProps(defaultProps2, p);
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
				var props = mergeProps(multiDefaultProps, p);
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

	var Test = /*@__PURE__*/ (function(Component) {
		function Test(props) {
			Component.call(this, props);
			this.data = {
				demoImages: [
					"https://img95.699pic.com/photo/50033/7459.jpg_wh860.jpg",
					"https://img95.699pic.com/photo/50033/7459.jpg_wh860.jpg",
					"https://img95.699pic.com/photo/50033/7459.jpg_wh860.jpg"
				],

				visible: false,
				visible1: false
			};
		}

		if (Component) Test.__proto__ = Component;
		Test.prototype = Object.create(Component && Component.prototype);
		Test.prototype.constructor = Test;
		Test.prototype.back = function() {
			api.closeWin();
		};
		Test.prototype.change = function(key) {
			api.toast({
				msg: key
			});
		};
		Test.prototype.openVisible = function() {
			this.data.visible = true;
		};
		Test.prototype.openVisible1 = function() {
			this.data.visible1 = true;
		};
		Test.prototype.closeVisible1 = function() {
			this.data.visible1 = false;
		};
		Test.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "ImageViewer"),
				apivm.h(
					DemoBlock,
					{title: "单张图片预览"},
					apivm.h("button", {onclick: this.openVisible}, "打开ImageViewer")
				),
				apivm.h(
					DemoBlock,
					{title: "多张图片预览"},
					apivm.h("button", {onclick: this.openVisible1}, "打开ImageViewer")
				),
				apivm.h("avm-image-viewer", {
					image: this.data.demoImages[0],
					visible: this.data.visible,
					onClose: function() {
						this$1.data.visible = false;
					}
				}),
				apivm.h("avm-image-viewer-multi", {
					images: this.data.demoImages,
					visible: this.data.visible1,
					onClose: this.closeVisible1,
					onIndexChange: function(e) {
						return this$1.change(e);
					}
				})
			);
		};

		return Test;
	})(Component);
	Test.css = {".page": {position: "relative", height: "100%"}};
	apivm.define("test", Test);
	apivm.render(apivm.h("test", null), "body");
})();
