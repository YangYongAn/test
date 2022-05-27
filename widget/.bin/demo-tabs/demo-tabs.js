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

	function _unsupportedIterableToArray(o, minLen) {
		if (!o) return;
		if (typeof o === "string") return _arrayLikeToArray(o, minLen);
		var n = Object.prototype.toString.call(o).slice(8, -1);
		if (n === "Object" && o.constructor) n = o.constructor.name;
		if (n === "Map" || n === "Set") return Array.from(o);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
			return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
		if (len == null || len > arr.length) len = arr.length;

		for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

		return arr2;
	}

	function _createForOfIteratorHelperLoose(o, allowArrayLike) {
		var it =
			(typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
		if (it) return (it = it.call(o)).next.bind(it);

		if (
			Array.isArray(o) ||
			(it = _unsupportedIterableToArray(o)) ||
			(allowArrayLike && o && typeof o.length === "number")
		) {
			if (it) o = it;
			var i = 0;
			return function() {
				if (i >= o.length)
					return {
						done: true
					};
				return {
					done: false,
					value: o[i++]
				};
			};
		}

		throw new TypeError(
			"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
		);
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

	var __create = Object.create;
	var __defProp$1 = Object.defineProperty;
	var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJS = function __commonJS(cb, mod) {
		return function __require() {
			return (
				mod ||
					(0, cb[__getOwnPropNames(cb)[0]])((mod = {exports: {}}).exports, mod),
				mod.exports
			);
		};
	};
	var __copyProps = function __copyProps(to, from, except, desc) {
		if ((from && typeof from === "object") || typeof from === "function") {
			var _loop = function _loop() {
				var key = _step.value;
				if (!__hasOwnProp.call(to, key) && key !== except)
					__defProp$1(to, key, {
						get: function get() {
							return from[key];
						},
						enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
					});
			};
			for (
				var _iterator = _createForOfIteratorHelperLoose(__getOwnPropNames(from)),
					_step;
				!(_step = _iterator()).done;

			) {
				_loop();
			}
		}
		return to;
	};
	var __toESM = function __toESM(mod, isNodeMode, target) {
		return (
			(target = mod != null ? __create(__getProtoOf(mod)) : {}),
			__copyProps(
				isNodeMode || !mod || !mod.__esModule
					? __defProp$1(target, "default", {value: mod, enumerable: true})
					: target,
				mod
			)
		);
	};

	// packages/avm-ui/node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
	var require_classnames = __commonJS({
		"packages/avm-ui/node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js": function packagesAvmUiNode_modulesPnpmClassnames231Node_modulesClassnamesIndexJs(
			exports,
			module
		) {
			(function() {
				var hasOwn = {}.hasOwnProperty;
				function classNames2() {
					var classes = [];
					for (var i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						if (!arg) continue;
						var argType = typeof arg;
						if (argType === "string" || argType === "number") {
							classes.push(arg);
						} else if (Array.isArray(arg)) {
							if (arg.length) {
								var inner = classNames2.apply(null, arg);
								if (inner) {
									classes.push(inner);
								}
							}
						} else if (argType === "object") {
							if (arg.toString === Object.prototype.toString) {
								for (var key in arg) {
									if (hasOwn.call(arg, key) && arg[key]) {
										classes.push(key);
									}
								}
							} else {
								classes.push(arg.toString());
							}
						}
					}
					return classes.join(" ");
				}
				if (typeof module !== "undefined" && module.exports) {
					classNames2.default = classNames2;
					module.exports = classNames2;
				} else if (
					typeof define === "function" &&
					typeof define.amd === "object" &&
					define.amd
				) {
					define("classnames", [], function() {
						return classNames2;
					});
				} else {
					window.classNames = classNames2;
				}
			})();
		}
	});

	// packages/avm-ui/src/components/tabs/tabs.tsx
	var import_classnames = __toESM(require_classnames());

	// packages/avm-ui/src/utils/with-default-props.tsx
	function mergeProps(defaultProps2, props) {
		return Object.assign({}, defaultProps2, props);
	}

	// packages/avm-ui/src/components/tabs/tabs.tsx
	var classPrefix$1 = "adm-tabs";
	var Tab = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Tab, _Component);
		function Tab() {
			return _Component.apply(this, arguments) || this;
		}
		return Tab;
	})(Component);

	var defaultProps$1 = {
		activeLineMode: "auto"
	};

	var Tabs = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(Tabs, _Component2);
		function Tabs() {
			var _this;
			for (
				var _len = arguments.length, args = new Array(_len), _key = 0;
				_key < _len;
				_key++
			) {
				args[_key] = arguments[_key];
			}
			_this = _Component2.call.apply(_Component2, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this), "data", {
				activeKey: "",
				width: 0,
				left: 0,
				scrollLeft: 0
			});
			_defineProperty(
				_assertThisInitialized(_this),
				"ele",

				[]
			);
			_defineProperty(_assertThisInitialized(_this), "scrollEle", []);
			_defineProperty(
				_assertThisInitialized(_this),
				"render",

				function(p) {
					var props = mergeProps(defaultProps$1, p);
					var leftMaskOpacity = 0;
					var rightMaskOpacity = 0;
					var breakPoint = props.breakPoint || 5;
					var panes = [];
					props.children.forEach(function(child) {
						var _child$nodeName;
						var childName =
							(child == null
								? void 0
								: (_child$nodeName = child.nodeName) == null
								? void 0
								: _child$nodeName.name) || "string";
						var key = child.key;
						if (childName !== "Tab") return;
						if (typeof key !== "string") return;
						panes.push(child);
					});
					return apivm.h(
						"div",
						{className: classPrefix$1},
						apivm.h(
							"div",
							{className: classPrefix$1 + "-header"},
							apivm.h("div", {
								className: (0, import_classnames.default)(
									classPrefix$1 + "-header-mask",
									classPrefix$1 + "-header-mask-left"
								),
								style: {
									opacity: leftMaskOpacity
								}
							}),

							apivm.h("div", {
								className: (0, import_classnames.default)(
									classPrefix$1 + "-header-mask",
									classPrefix$1 + "-header-mask-right"
								),
								style: {
									opacity: rightMaskOpacity
								}
							}),

							props.children.length > breakPoint
								? apivm.h(
										"scroll-view",
										{
											ref: function ref(e) {
												_this.scrollEle.push(e);
											},
											className: classPrefix$1 + "-tab-list",
											"scroll-x": true,
											"scroll-left": _this.data.scrollLeft,
											"scroll-y": "false",
											"show-scrollbar": false,
											onscroll: _this.scroll.bind(_assertThisInitialized(_this))
										},
										apivm.h("div", {
											className: classPrefix$1 + "-tab-line",
											style: {
												width:
													props.activeLineMode === "fixed"
														? (props.fixedLineWidth || 30) + "px"
														: _this.data.width,
												transform:
													props.activeLineMode === "fixed"
														? "translate(" +
														  ((_this.data.width - (props.fixedLineWidth || 30)) / 2 +
																_this.data.left) +
														  "px, 0px)"
														: "translate(" + _this.data.left + "px, 0px)"
											}
										}),

										panes.map(function(pane, index) {
											var _pane$attributes, _ref, _pane$attributes2;
											return apivm.h(
												"div",
												{key: pane.key, className: classPrefix$1 + "-tab-wrapper"},
												apivm.h(
													"div",
													{
														onClick: function onClick() {
															var key = pane.key;
															if (pane.attributes.disabled) return;
															if (key === void 0 || key === null) {
																return;
															}
															_this.data.width = _this.ele[
																index
															].getBoundingClientRect().width;
															_this.data.left =
																_this.ele[index].getBoundingClientRect().left +
																_this.data.scrollLeft;
															_this.data.activeKey = key.toString();
															props.onChange == null
																? void 0
																: props.onChange(_this.data.activeKey);
														}
													},
													apivm.h(
														"span",
														{
															className: (0, import_classnames.default)(
																(0, import_classnames.default)(classPrefix$1 + "-tab"),
																((_ref = {}),
																(_ref[classPrefix$1 + "-tab-active"] =
																	pane.key === _this.data.activeKey),
																(_ref[classPrefix$1 + "-tab-none"] =
																	pane.key !== _this.data.activeKey),
																(_ref[classPrefix$1 + "-tab-disabled"] =
																	((_pane$attributes = pane.attributes) == null
																		? void 0
																		: _pane$attributes.disabled) || false),
																_ref)
															),
															ref: function ref(e) {
																_this.ele.push(e);
															}
														},
														(_pane$attributes2 = pane.attributes) == null
															? void 0
															: _pane$attributes2.title
													)
												)
											);
										})
								  )
								: apivm.h(
										"div",
										{className: classPrefix$1 + "-tab-list"},
										apivm.h("div", {
											className: classPrefix$1 + "-tab-line",
											style: {
												width:
													props.activeLineMode === "fixed"
														? (props.fixedLineWidth || 30) + "px"
														: _this.data.width,
												transform:
													props.activeLineMode === "fixed"
														? "translate(" +
														  ((_this.data.width - (props.fixedLineWidth || 30)) / 2 +
																_this.data.left) +
														  "px, 0px)"
														: "translate(" + _this.data.left + "px, 0px)"
											}
										}),

										panes.map(function(pane, index) {
											var _pane$attributes3, _ref2, _pane$attributes4;
											return apivm.h(
												"div",
												{key: pane.key, className: classPrefix$1 + "-tab-wrapper"},
												apivm.h(
													"div",
													{
														onClick: function onClick() {
															var key = pane.key;
															if (pane.attributes.disabled) return;
															if (key === void 0 || key === null) {
																return;
															}
															_this.data.width = _this.ele[
																index
															].getBoundingClientRect().width;
															_this.data.left = _this.ele[index].getBoundingClientRect().left;
															_this.data.activeKey = key.toString();
															props.onChange == null
																? void 0
																: props.onChange(_this.data.activeKey);
														}
													},
													apivm.h(
														"span",
														{
															className: (0, import_classnames.default)(
																(0, import_classnames.default)(classPrefix$1 + "-tab"),
																((_ref2 = {}),
																(_ref2[classPrefix$1 + "-tab-active"] =
																	pane.key === _this.data.activeKey),
																(_ref2[classPrefix$1 + "-tab-none"] =
																	pane.key !== _this.data.activeKey),
																(_ref2[classPrefix$1 + "-tab-disabled"] =
																	((_pane$attributes3 = pane.attributes) == null
																		? void 0
																		: _pane$attributes3.disabled) || false),
																_ref2)
															),
															ref: function ref(e) {
																_this.ele.push(e);
															}
														},
														(_pane$attributes4 = pane.attributes) == null
															? void 0
															: _pane$attributes4.title
													)
												)
											);
										})
								  )
						),

						panes.map(function(pane) {
							if (pane.children === void 0) {
								return null;
							}
							if (pane.key === _this.data.activeKey) {
								return apivm.h(
									"div",
									{key: pane.key, className: classPrefix$1 + "-content"},
									apivm.h("span", null, pane.children)
								);
							}
							if (pane.attributes.forceRender) {
								return apivm.h(
									"div",
									{key: pane.key, style: {display: "none"}},
									apivm.h("span", null, pane.children)
								);
							}
							return null;
						})
					);
				}
			);
			return _this;
		}
		var _proto = Tabs.prototype;
		_proto.installed = function installed() {
			var _this2 = this;
			var index = 0;
			var key = this.props.defaultActiveKey;
			if (key) {
				var _this$props$children;
				(_this$props$children = this.props.children) == null
					? void 0
					: _this$props$children.forEach(function(child) {
							if (child.key === key) {
								return;
							}
					  });
			}
			this.data.activeKey = key || this.props.children[0].key;
			setTimeout(function() {
				var width = _this2.ele[index].getBoundingClientRect().width;
				var left = _this2.ele[index].getBoundingClientRect().left;
				_this2.data.width = width;
				_this2.data.left = left;
			}, 5);
		};
		_proto.scroll = function scroll(e) {
			console.log(JSON.stringify(e));
			var scrollLeft = e.detail.scrollLeft;
			this.data.scrollLeft = scrollLeft;
		};
		return Tabs;
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

	// packages/avm-ui/src/components/tabs/index.ts
	var tabs_default = attachPropertiesToComponent(Tabs, {
		Tab: Tab
	});

	var Test = /*@__PURE__*/ (function(Component) {
		function Test(props) {
			Component.call(this, props);
			this.data = {
				list: [
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q"
				]
			};
		}

		if (Component) Test.__proto__ = Component;
		Test.prototype = Object.create(Component && Component.prototype);
		Test.prototype.constructor = Test;
		Test.prototype.change = function(key) {
			console.log(key);
		};
		Test.prototype.back = function() {
			api.closeWin();
		};
		Test.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "Tabs"),
				apivm.h(
					DemoBlock,
					{title: "基本用法", padding: "0"},
					apivm.h(
						tabs_default,
						{onChange: this.change},
						apivm.h(tabs_default.Tab, {title: "水果", key: "fruits"}, "菠萝"),
						apivm.h(
							tabs_default.Tab,
							{title: "蔬菜", key: "vegetables", forceRender: true},
							"西红柿"
						),
						apivm.h(tabs_default.Tab, {title: "动物", key: "animals"}, "蚂蚁")
					)
				),
				apivm.h(
					DemoBlock,
					{title: "超长自动滚动", padding: "0"},
					apivm.h(
						tabs_default,
						{defaultActiveKey: "2", onChange: this.change},
						apivm.h(tabs_default.Tab, {title: "Espresso", key: "1"}, "1"),
						apivm.h(tabs_default.Tab, {title: "Coffee Latte", key: "2"}, "2"),
						apivm.h(tabs_default.Tab, {title: "Cappuccino", key: "3"}, "3"),
						apivm.h(tabs_default.Tab, {title: "Americano", key: "4"}, "4"),
						apivm.h(tabs_default.Tab, {title: "Flat White", key: "5"}, "5"),
						apivm.h(tabs_default.Tab, {title: "Caramel Macchiato", key: "6"}, "6"),
						apivm.h(tabs_default.Tab, {title: "Cafe Mocha", key: "7"}, "7")
					)
				),
				apivm.h(
					DemoBlock,
					{title: "没有内容区", padding: "0"},
					apivm.h(
						tabs_default,
						null,
						apivm.h(tabs_default.Tab, {title: "水果", key: "fruits"}),
						apivm.h(tabs_default.Tab, {title: "蔬菜", key: "vegetables"}),
						apivm.h(tabs_default.Tab, {title: "动物", key: "animals"})
					)
				),
				apivm.h(
					DemoBlock,
					{title: "禁用", padding: "0"},
					apivm.h(
						tabs_default,
						null,
						apivm.h(tabs_default.Tab, {title: "水果", key: "fruits"}),
						apivm.h(tabs_default.Tab, {title: "蔬菜", key: "vegetables"}),
						apivm.h(tabs_default.Tab, {title: "动物", key: "animals", disabled: true})
					)
				),
				apivm.h(
					DemoBlock,
					{title: "固定长度模式", padding: "0"},
					apivm.h(
						tabs_default,
						{breakPoint: 4, activeLineMode: "fixed", fixedLineWidth: 50},
						apivm.h(tabs_default.Tab, {title: "超长的tab111", key: "1"}, "1"),
						apivm.h(tabs_default.Tab, {title: "超长的tab2", key: "2"}, "2"),
						apivm.h(tabs_default.Tab, {title: "超长的tab333", key: "3"}, "3"),
						apivm.h(tabs_default.Tab, {title: "超长的tab4444", key: "4"}, "4"),
						apivm.h(tabs_default.Tab, {title: "超长的tab55555", key: "5"}, "5")
					)
				)
			);
		};

		return Test;
	})(Component);
	Test.css = {".page": {position: "relative", height: "100%"}};
	Test.csslink = ["../../components/avm-ui/tabs/index.css"];
	apivm.define("test", Test);
	apivm.render(apivm.h("test", null), "body");
})();
