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

	function _objectWithoutPropertiesLoose(source, excluded) {
		if (source == null) return {};
		var target = {};
		var sourceKeys = Object.keys(source);
		var key, i;

		for (i = 0; i < sourceKeys.length; i++) {
			key = sourceKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			target[key] = source[key];
		}

		return target;
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

	var _excluded = ["title"];
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

	// packages/avm-ui/src/components/list/list.tsx
	var classPrefix$1 = "adm-list";
	var defaultProps$1 = {
		mode: "default"
	};

	var List = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(List, _Component);
		function List() {
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
				props = Object.assign({}, defaultProps$1, props);
				return apivm.h(
					"div",
					{className: classPrefix$1 + " " + classPrefix$1 + "--" + props.mode},
					props.header &&
						apivm.h("text", {className: classPrefix$1 + "-header"}, props.header),
					apivm.h(
						"div",
						{
							className: classNames(
								classPrefix$1 + "--inner",
								classPrefix$1 + "--inner__" + props.mode
							)
						},
						props.children
					)
				);
			});
			_defineProperty(_assertThisInitialized(_this), "css", function() {
				return "\n      .adm-list {\n        overflow: hidden;\n        font-size: 17px;\n      }\n      \n      .adm-list-header {\n        color: #999;\n        font-size: 15px;\n        padding: 8px 12px;\n      }\n      \n      .adm-list--inner {\n        background-color: #ffffff;\n        margin-bottom: -1px;\n      }\n      .adm-list--default {\n        border: solid 1px #eee;\n        border-right: none;\n        border-left: none;\n      }\n      .adm-list--card {\n        margin: 12px;\n      }\n      .adm-list--inner__card {\n        border-radius: 8px;\n      }\n      .adm-list-item {\n        width: 100%;\n        display: block;\n        padding-left: 12px;\n      }\n      .adm-list-item-title {\n        font-size: 14px;\n        color: #333;\n        padding-bottom: 8px;\n      }\n      .adm-list-item-title-active {\n        color: #9AC200;\n      }\n      .adm-list-item-description {\n        color: #999;\n        font-size: 12px;\n        padding-top: 8px;\n      }\n      .adm-list-item-children {\n        font-size: 16px;\n        color: #333;\n      }\n      .adm-list-item-children-active {\n        color: #9AC200;\n      }\n      .adm-list-item-content {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        padding: 12px 12px 12px 0;\n        border-bottom: solid 1px #e8e8e8;\n      }\n      .adm-list-item-content-prefix {\n        padding-right: 12px;\n      }\n      .adm-list-item-content-main {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n      }\n      .adm-list-item-content-extra {\n        padding-left: 12px;\n        color: #999;\n        font-size: 16px;\n      }\n      .adm-list-item-content-arrow {\n        display: flex;\n        align-items: center;\n        padding-left: 12px;\n        font-size: 16px;\n        color: #999;\n      }\n      .adm-list-item-content-arrow span {\n        font-size: 16px;\n      }\n      .list-disabled {\n        cursor: not-allowed;\n        opacity: 0.3;\n        pointer-events: none;\n      }\n    ";
			});
			return _this;
		}
		return List;
	})(Component);

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
	var classPrefix2$1 = "adm-icon";
	var Icon$1 = /*#__PURE__*/ (function(_Component2) {
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
					fontName$1 +
					"\"; src: url('../../components/avm-ui/icon/" +
					fontName$1 +
					".ttf') format('truetype');}\n        ." +
					classPrefix2$1 +
					" {font-family: " +
					fontName$1 +
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
					: icons$1[name];
				return apivm.h(
					"text",
					{
						style: _objectSpread2({}, props),
						class:
							classPrefix2$1 +
							" " +
							classPrefix2$1 +
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

	Icon$1 = __decorateClass$1([tag$1("avm-icon")], Icon$1);

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default$1 = Icon$1;

	// packages/avm-ui/src/components/list/list-item.tsx
	var classPrefix3 = "adm-list-item";
	var ListItem = /*#__PURE__*/ (function(_Component3) {
		_inheritsLoose(ListItem, _Component3);
		function ListItem() {
			var _this3;
			for (
				var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
				_key3 < _len3;
				_key3++
			) {
				args[_key3] = arguments[_key3];
			}
			_this3 = _Component3.call.apply(_Component3, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this3), "render", function(props) {
				var _props$clickable, _classNames, _classNames2;
				var active = props.active || false;
				var clickable =
					(_props$clickable = props.clickable) != null
						? _props$clickable
						: !!props.handleClick;
				var arrow = props.arrow === void 0 ? clickable : props.arrow;
				var prefixWidth = !!props.prefixWidth ? props.prefixWidth : "auto";
				var disabledClass = props.disabled && "list-disabled";
				var childCls = classNames(
					classPrefix3 + "-children",
					((_classNames = {}),
					(_classNames[classPrefix3 + "-children-active"] = active),
					_classNames)
				);

				var prefixCls = classNames(classPrefix3 + "-content-prefix", disabledClass);
				var prefixStyles = {width: prefixWidth};
				var extraCls = classNames(classPrefix3 + "-content-extra", disabledClass);
				var childEles = formatLabel(props.children, childCls);
				var prefixEles = formatLabel(props.prefix, prefixCls, prefixStyles);
				var extraEles = formatLabel(props.extra, extraCls);
				var content = apivm.h(
					"div",
					{className: classPrefix3 + "-content"},
					props.prefix && prefixEles,
					apivm.h(
						"div",
						{className: classNames(classPrefix3 + "-content-main", disabledClass)},
						props.title &&
							apivm.h(
								"span",
								{
									className: classNames(
										classPrefix3 + "-title",
										((_classNames2 = {}),
										(_classNames2[classPrefix3 + "-title-active"] = active),
										_classNames2)
									)
								},
								props.title || "\u5355\u5143\u683C"
							),
						childEles,
						props.description &&
							apivm.h(
								"span",
								{className: classPrefix3 + "-description"},
								props.description
							)
					),

					props.extra && extraEles,
					arrow &&
						apivm.h(
							"div",
							{className: classNames(classPrefix3 + "-content-arrow", disabledClass)},
							arrow === true
								? apivm.h(Icon$1, {
										code: 60019,
										color: "" + (active ? "#9AC200" : "#666")
								  })
								: arrow
						)
				);

				var listItemCls = classNames(
					"" + classPrefix3,
					clickable ? ["adm-plain-anchor"] : [],
					props.disabled && classPrefix3 + "-disabled"
				);
				var listItemEvent = props.disabled ? void 0 : props.handleClick;
				return apivm.h(
					"div",
					{className: listItemCls, onClick: listItemEvent},
					content
				);
			});
			return _this3;
		}
		return ListItem;
	})(Component);

	// packages/avm-ui/src/components/collapse/collapse.tsx
	var classPrefix4 = "adm-collapse";
	var CollapsePanel = /*#__PURE__*/ (function(_Component4) {
		_inheritsLoose(CollapsePanel, _Component4);
		function CollapsePanel() {
			var _this4;
			for (
				var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
				_key4 < _len4;
				_key4++
			) {
				args[_key4] = arguments[_key4];
			}
			_this4 = _Component4.call.apply(_Component4, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this4), "render", function() {
				return null;
			});
			return _this4;
		}
		return CollapsePanel;
	})(Component);

	var CollapsePanelContent = /*#__PURE__*/ (function(_Component5) {
		_inheritsLoose(CollapsePanelContent, _Component5);
		function CollapsePanelContent() {
			var _this5;
			for (
				var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
				_key5 < _len5;
				_key5++
			) {
				args[_key5] = arguments[_key5];
			}
			_this5 = _Component5.call.apply(_Component5, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this5), "render", function(props) {
				var visible = props.visible;
				return apivm.h(
					"div",
					{
						className: classPrefix4 + "-panel-content",
						style: {height: visible ? "auto" : 0}
					},
					apivm.h(
						ListItem,
						null,
						visible &&
							formatLabel(props.children, classPrefix4 + "-panel-content-text", {})
					)
				);
			});
			return _this5;
		}
		return CollapsePanelContent;
	})(Component);

	var Collapse = /*#__PURE__*/ (function(_Component6) {
		_inheritsLoose(Collapse, _Component6);
		function Collapse() {
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
				activeKey: _this6.props.accordion ? null : [],
				isInit: true
			});
			_defineProperty(
				_assertThisInitialized(_this6),
				"setActiveKey",

				function(activeKey) {
					_this6.data.isInit = false;
					_this6.data.activeKey = activeKey;
					_this6.props.handleChange &&
						_this6.props.handleChange(_this6.data.activeKey);
				}
			);
			_defineProperty(_assertThisInitialized(_this6), "render", function(props) {
				var panels = props.children.map(function(panel) {
					return _objectSpread2(
						_objectSpread2({}, panel.attributes),
						{},
						{children: panel.children}
					);
				});
				if (_this6.data.isInit) {
					_this6.data.activeKey =
						props.activeKey || props.defaultActiveKey
							? !props.accordion
								? props.activeKey || props.defaultActiveKey
								: [props.activeKey || props.defaultActiveKey]
							: props.accordion
							? null
							: [];
				}
				var activeKeyList =
					_this6.data.activeKey === null
						? []
						: Array.isArray(_this6.data.activeKey)
						? _this6.data.activeKey
						: [_this6.data.activeKey];
				return apivm.h(
					"div",
					{className: classPrefix4},
					apivm.h(
						List,
						null,
						panels.map(function(panel) {
							var key = panel.key;
							var active = activeKeyList.includes(key);
							var handleClick = function handleClick() {
								if (props.accordion) {
									_this6.setActiveKey(active ? [] : [key]);
								} else {
									var activekey = active
										? activeKeyList.filter(function(v) {
												return v !== key;
										  })
										: [].concat(activeKeyList, [key]);
									_this6.setActiveKey(activekey);
								}
								panel.handleClick == null ? void 0 : panel.handleClick();
							};
							var collapseTitle = panel.title,
								restProps = _objectWithoutPropertiesLoose(panel, _excluded);
							return apivm.h(
								"div",
								{key: panel.key},
								apivm.h(
									ListItem,
									_extends({}, restProps, {
										className: classPrefix4 + "-panel-header",
										disabled: panel.disabled,
										handleClick: panel.disabled ? void 0 : handleClick,
										arrow:
											panel.arrow ||
											(active
												? apivm.h(Icon_default$1, {code: 60049, color: "#bbb"})
												: apivm.h(Icon_default$1, {code: 59949, color: "#bbb"}))
									}),
									formatLabel(panel.title)
								),
								apivm.h(
									CollapsePanelContent,
									{visible: active},
									panel.content || panel.children
								)
							);
						})
					)
				);
			});
			_defineProperty(_assertThisInitialized(_this6), "css", function() {
				return "\n      .adm-collapse {\n        width: 100%;\n      }\n      .adm-collapse-panel-content {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        align-items: baseline;\n        font-size: 16px;\n        color: #999;\n        overflow: hidden;\n      }\n      .adm-collapse-panel-content-text {\n        color: #666;\n        font-size: 16px;\n        line-height: 22px;\n      }\n    ";
			});
			return _this6;
		}
		return Collapse;
	})(Component);

	// packages/avm-ui/src/components/collapse/index.ts
	var collapse_default = attachPropertiesToComponent(Collapse, {
		Panel: CollapsePanel
	});

	avm.define("avm-collapse", Collapse);
	avm.define("avm-collapse-panel", CollapsePanel);

	var DemoCollapse = /*@__PURE__*/ (function(Component) {
		function DemoCollapse(props) {
			Component.call(this, props);
		}

		if (Component) DemoCollapse.__proto__ = Component;
		DemoCollapse.prototype = Object.create(Component && Component.prototype);
		DemoCollapse.prototype.constructor = DemoCollapse;
		DemoCollapse.prototype.back = function() {
			api.closeWin();
		};
		DemoCollapse.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "Collapse"),
				apivm.h(
					"scroll-view",
					null,
					apivm.h(
						DemoBlock,
						{title: "基础用法", padding: "0", border: "none"},
						apivm.h(
							"avm-collapse",
							{defaultActiveKey: ["1"]},
							apivm.h(
								"avm-collapse-panel",
								{key: "1", title: "第一项", extra: "内容1"},
								"这里是第一项的内容 这里是第一项的内容 这里是第一项的内容 这里是第一项的内容 这里是第一项的内容 这里是第一项的内容"
							),
							apivm.h(
								"avm-collapse-panel",
								{key: "2", title: "第二项", extra: "内容2"},
								"这里是第二项的内容"
							),
							apivm.h(
								"avm-collapse-panel",
								{key: "3", title: "第三项", extra: "内容3"},
								"这里是第三项的内容"
							)
						)
					),
					apivm.h(
						DemoBlock,
						{title: "手风琴模式", padding: "0", border: "none"},
						apivm.h(
							"avm-collapse",
							{accordion: true},
							apivm.h(
								"avm-collapse-panel",
								{key: "1", title: "第一项"},
								"手风琴模式只能同时展开一个 手风琴模式只能同时展开一个 手风琴模式只能同时展开一个 手风琴模式只能同时展开一个 手风琴模式只能同时展开一个 手风琴模式只能同时展开一个"
							),
							apivm.h(
								"avm-collapse-panel",
								{key: "2", title: "第二项"},
								"手风琴模式只能同时展开一个"
							),
							apivm.h(
								"avm-collapse-panel",
								{key: "3", title: "第三项"},
								"手风琴模式只能同时展开一个"
							)
						)
					),
					apivm.h(
						DemoBlock,
						{title: "禁用", padding: "0", border: "none"},
						apivm.h(
							"avm-collapse",
							null,
							apivm.h(
								"avm-collapse-panel",
								{key: "1", title: "第一项"},
								"这里是第一项的内容"
							),
							apivm.h(
								"avm-collapse-panel",
								{key: "2", title: "第二项", disabled: true},
								"这里是第二项的内容"
							),
							apivm.h(
								"avm-collapse-panel",
								{key: "3", title: "第三项", disabled: true},
								"这里是第三项的内容"
							)
						)
					),
					apivm.h(
						DemoBlock,
						{title: "自定义箭头", padding: "0", border: "none"},
						apivm.h(
							"avm-collapse",
							null,
							apivm.h("avm-collapse-panel", {
								key: "1",
								title: "第一项",
								prefix: apivm.h("text", {className: "icon-style"}, "icon"),
								content:
									"你可以通过 avm-collapse-panel 的 arrow 属性来自定义单个面板的箭头",
								arrow: apivm.h("text", {className: "icon-style"}, "自定义图标")
							}),
							apivm.h("avm-collapse-panel", {
								key: "2",
								title: "第二项",
								prefix: apivm.h("text", {className: "icon-style"}, "icon"),
								content:
									"你可以通过 avm-collapse-panel 的 arrow 属性来自定义单个面板的箭头",
								arrow: apivm.h("text", {className: "icon-style"}, "自定义图标")
							}),
							apivm.h("avm-collapse-panel", {
								key: "3",
								title: "第三项",
								prefix: apivm.h("text", {className: "icon-style"}, "icon"),
								content:
									"你可以通过 avm-collapse-panel 的 arrow 属性来自定义单个面板的箭头",
								arrow: apivm.h("text", {className: "icon-style"}, "自定义图标")
							})
						)
					)
				)
			);
		};

		return DemoCollapse;
	})(Component);
	DemoCollapse.css = {
		".page": {background: "#f2f2f2"},
		".icon-style": {fontSize: "12px", color: "#999"}
	};
	DemoCollapse.csslink = ["../../components/avm-ui/demos/index.css"];
	apivm.define("demo-collapse", DemoCollapse);
	apivm.render(apivm.h("demo-collapse", null), "body");
})();
