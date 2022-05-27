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

	// packages/avm-ui/src/components/badge/badge.less
	var badge_default =
		".adm-badge-row {\n  flex-flow: row;\n}\n.adm-badge-wrap {\n  position: relative;\n  margin: 10px;\n}\n.adm-badge {\n  color: #fff;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  box-sizing: border-box;\n  min-width: 16px;\n  border-radius: 100px;\n  padding: 0 4px;\n  font-size: 10px;\n  line-height: 16px;\n  height: 16px;\n  white-space: nowrap;\n}\n.adm-badge--fixed {\n  position: absolute;\n  transform: translate(50%, -50%);\n}\n.adm-badge--dot {\n  min-width: 8px;\n  width: 8px;\n  height: 8px;\n  border-radius: 5px;\n}\n";

	// packages/avm-ui/src/components/badge/badge.tsx
	var classPrefix = "adm-badge";
	var defaultProps = {
		color: "#E02020",
		isDot: false
	};

	var Badge = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Badge, _Component);
		function Badge() {
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
					return badge_default;
				}
			);
			return _this;
		}
		var _proto = Badge.prototype;
		_proto.render = function render(props) {
			var _classNames;
			props = Object.assign({}, defaultProps, props);
			var _props = props,
				content = _props.content,
				color = _props.color,
				children = _props.children,
				right = _props.right,
				top = _props.top,
				isDot = _props.isDot;
			var hasChild = children && children.length;
			var badgeCls = classNames(
				classPrefix,
				((_classNames = {}),
				(_classNames[classPrefix + "--fixed"] = hasChild),
				(_classNames[classPrefix + "--dot"] = isDot),
				_classNames)
			);
			var styleRight = !!right && hasChild ? right : 0;
			var styleTop = !!top && hasChild ? top : 0;
			var contentEle = formatLabel(!isDot ? content : null, badgeCls, {
				backgroundColor: color,
				right: styleRight,
				top: styleTop
			});
			return apivm.h(
				"div",
				{className: classPrefix + "-row"},
				apivm.h("div", {className: classPrefix + "-wrap"}, children, contentEle)
			);
		};
		return Badge;
	})(Component);

	__decorateClass([superProps], Badge.prototype, "render", 1);
	avm.define("avm-badge", Badge);

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

	Icon = __decorateClass$1([tag("avm-icon")], Icon);

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

	// packages/avm-ui/src/utils/format-label.tsx
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

	// packages/avm-ui/src/utils/superProps.ts
	function superProps$1(targetOrProps, keyOrNode, descriptor) {
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
			superClass$1(node, props);
			superStyle$1(node, props);
			superEvent$1(node, props);
			return node;
		}
	}
	function superClass$1(node, props) {
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
	function superStyle$1(node, props) {
		var style = [];
		if (props.style) {
			style.push(props.style);
		}
		if (node.attributes) {
			if (node.attributes.style) {
				style.unshift(node.attributes.style);
			}
			node.attributes.style = mergeStyle$1.apply(void 0, style);
		} else {
			node.attributes = {
				style: mergeStyle$1.apply(void 0, style)
			};
		}
	}
	function superEvent$1(node, props) {
		for (var propsKey in props) {
			if (propsKey.indexOf("on") === 0) {
				if (node.attributes) {
					node.attributes[propsKey] = props[propsKey];
				}
			}
		}
	}
	function mergeStyle$1() {
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

	// packages/avm-ui/src/components/badge/badge.less
	var badge_default$1 =
		".adm-badge-row {\n  flex-flow: row;\n}\n.adm-badge-wrap {\n  position: relative;\n  margin: 10px;\n}\n.adm-badge {\n  color: #fff;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  box-sizing: border-box;\n  min-width: 16px;\n  border-radius: 100px;\n  padding: 0 4px;\n  font-size: 10px;\n  line-height: 16px;\n  height: 16px;\n  white-space: nowrap;\n}\n.adm-badge--fixed {\n  position: absolute;\n  transform: translate(50%, -50%);\n}\n.adm-badge--dot {\n  min-width: 8px;\n  width: 8px;\n  height: 8px;\n  border-radius: 5px;\n}\n";

	// packages/avm-ui/src/components/badge/badge.tsx
	var classPrefix$2 = "adm-badge";
	var defaultProps$2 = {
		color: "#E02020",
		isDot: false
	};

	var Badge$1 = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(Badge, _Component);
		function Badge() {
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
					return badge_default$1;
				}
			);
			return _this;
		}
		var _proto = Badge.prototype;
		_proto.render = function render(props) {
			var _classNames;
			props = Object.assign({}, defaultProps$2, props);
			var _props = props,
				content = _props.content,
				color = _props.color,
				children = _props.children,
				right = _props.right,
				top = _props.top,
				isDot = _props.isDot;
			var hasChild = children && children.length;
			var badgeCls = classNames(
				classPrefix$2,
				((_classNames = {}),
				(_classNames[classPrefix$2 + "--fixed"] = hasChild),
				(_classNames[classPrefix$2 + "--dot"] = isDot),
				_classNames)
			);
			var styleRight = !!right && hasChild ? right : 0;
			var styleTop = !!top && hasChild ? top : 0;
			var contentEle = formatLabel$1(!isDot ? content : null, badgeCls, {
				backgroundColor: color,
				right: styleRight,
				top: styleTop
			});
			return apivm.h(
				"div",
				{className: classPrefix$2 + "-row"},
				apivm.h("div", {className: classPrefix$2 + "-wrap"}, children, contentEle)
			);
		};
		return Badge;
	})(Component);

	__decorateClass$2([superProps$1], Badge$1.prototype, "render", 1);

	// packages/avm-ui/src/components/badge/index.ts
	var Badge_default = Badge$1;
	avm.define("avm-badge", Badge$1);

	// packages/avm-ui/src/components/tab-bar/tab-bar.tsx
	var TabBarItem = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(TabBarItem, _Component2);
		function TabBarItem() {
			var _this2;
			for (
				var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
				_key3 < _len3;
				_key3++
			) {
				args[_key3] = arguments[_key3];
			}
			_this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this2), "render", function() {
				return null;
			});
			return _this2;
		}
		return TabBarItem;
	})(Component);

	var TabBar = /*#__PURE__*/ (function(_Component3) {
		_inheritsLoose(TabBar, _Component3);
		function TabBar() {
			var _this3;
			for (
				var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
				_key4 < _len4;
				_key4++
			) {
				args[_key4] = arguments[_key4];
			}
			_this3 = _Component3.call.apply(_Component3, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this3), "data", {
				activeKey: _this3.props.activeKey || _this3.props.defaultActiveKey
			});
			_defineProperty(
				_assertThisInitialized(_this3),
				"setActiveKey",

				function(key) {
					_this3.data.activeKey = key;
					_this3.props.handleChange && _this3.props.handleChange(key);
				}
			);
			_defineProperty(_assertThisInitialized(_this3), "render", function(props) {
				var items =
					(props.children &&
						props.children.map(function(item) {
							return item.attributes;
						})) ||
					[];
				!_this3.data.activeKey &&
					(_this3.data.activeKey = items.length ? items[0].key : null);
				return apivm.h(
					"div",
					{className: classNames("adm-tab-bar", props.className)},
					items.map(function(item) {
						var _classNames2, _classNames3;
						var active = item.key === _this3.data.activeKey;
						var iconCls = classNames(
							"adm-tab-bar-item-icon",
							((_classNames2 = {}),
							(_classNames2["adm-tab-bar-item-icon-active"] = active),
							_classNames2)
						);

						var titleCls = classNames(
							"adm-tab-bar-item-title",
							((_classNames3 = {}),
							(_classNames3["adm-tab-bar-item-title-active"] = active),
							(_classNames3["adm-tab-bar-item-title-only"] =
								!item.icon && !item.badgeContent && !item.isDot),
							_classNames3)
						);

						var renderContent = function renderContent() {
							var iconEle =
								item.icon &&
								formatLabel$1(
									typeof item.icon === "function" ? item.icon(active) : item.icon,
									iconCls
								);
							var titleEle = item.title && formatLabel$1(item.title, titleCls);
							if (iconEle) {
								return apivm.h(
									"div",
									{className: "tabbar-align-item-center"},
									apivm.h(
										Badge_default,
										{
											content: item.badgeContent,
											isDot: item.isDot,
											className: "adm-tab-bar-icon-badge",
											top: "2px"
										},
										iconEle
									),
									titleEle
								);
							}
							if (titleEle) {
								return apivm.h(
									"div",
									{className: "tabbar-align-item-center"},
									apivm.h(
										Badge_default,
										{
											content: item.badgeContent,
											isDot: item.isDot,
											className: "adm-tab-bar-title-badge",
											top: "-3px",
											right: "-3px"
										},
										titleEle
									)
								);
							}
							return null;
						};
						return apivm.h(
							"div",
							{
								key: item.key,
								onClick: function onClick() {
									var key = item.key;
									if (item.key === void 0 || item.key === null) {
										return;
									} else {
										_this3.setActiveKey(key);
									}
								},
								className: "adm-tab-bar-item"
							},
							renderContent()
						);
					})
				);
			});
			_defineProperty(_assertThisInitialized(_this3), "css", function() {
				return "\n      .adm-tab-bar {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n        align-items: stretch;\n        min-height: 50px;\n      }\n      .adm-tab-bar-item {\n        flex: 1;\n        white-space: nowrap;\n        padding: 4px 8px;\n        position: relative;\n        cursor: pointer;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n      }\n      .adm-tab-bar-item-icon {\n        font-size: 20px;\n        height: auto;\n        line-height: 1;\n        margin: 4px 0 1px;\n        color: #999;\n      }\n      .adm-tab-bar-item-icon-active {\n        color: #9AC200;\n        font-weight: 500;\n      }\n      .adm-tab-bar-item-title {\n        font-size: 10px;\n        line-height: 12px;\n        color: #999;\n      }\n      .adm-tab-bar-item-title-active {\n        color: #9AC200;\n      }\n      .adm-tab-bar-item-title-only {\n        font-size: 14px;\n        line-height: 14px;\n      }\n      .tabbar-align-item-center {\n        align-items: center;\n      }\n    ";
			});
			return _this3;
		}
		return TabBar;
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

	// packages/avm-ui/src/components/tab-bar/index.ts
	var tab_bar_default = attachPropertiesToComponent(TabBar, {
		Item: TabBarItem
	});

	avm.define("avm-tabbar", TabBar);
	avm.define("avm-tabbar-item", TabBarItem);
	avm.define("avm-tab-bar", TabBar);
	avm.define("avm-tab-bar-item", TabBarItem);

	global.tabs = [
		{key: "home", title: "首页"},
		{key: "todo", title: "我的待办"},
		{key: "message", title: "我的消息"},
		{key: "personalCenter", title: "个人中心"}
	];
	var DemoTabbar = /*@__PURE__*/ (function(Component) {
		function DemoTabbar(props) {
			Component.call(this, props);
			this.data = {
				activeKey: "todo"
			};
		}

		if (Component) DemoTabbar.__proto__ = Component;
		DemoTabbar.prototype = Object.create(Component && Component.prototype);
		DemoTabbar.prototype.constructor = DemoTabbar;
		DemoTabbar.prototype.back = function() {
			api.closeWin();
		};
		DemoTabbar.prototype.setActiveKey = function(key) {
			api.toast({
				msg: key
			});

			this.data.activeKey = key;
		};
		DemoTabbar.prototype.getIcon = function(key) {
			return key === this.data.activeKey
				? "../../image/select.png"
				: "../../image/unSelect.png";
		};
		DemoTabbar.prototype.render = function() {
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "TabBar"),
				apivm.h(
					"scroll-view",
					null,
					apivm.h(
						DemoBlock,
						{title: "基本用法", padding: "0"},
						apivm.h(
							"avm-tabbar",
							null,
							apivm.h("avm-tabbar-item", {
								key: "home",
								title: "首页",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "todo",
								title: "我的待办",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "message",
								title: "我的消息",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "personalCenter",
								title: "个人中心",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "徽标", padding: "0"},
						apivm.h(
							"avm-tabbar",
							null,
							apivm.h("avm-tabbar-item", {
								key: "home",
								title: "首页",
								isDot: true,
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "todo",
								title: "我的待办",
								badgeContent: "5",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "message",
								title: "我的消息",
								badgeContent: "99+",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "personalCenter",
								title: "个人中心",
								isDot: true,
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "仅图标", padding: "0"},
						apivm.h(
							"avm-tabbar",
							null,
							apivm.h("avm-tabbar-item", {
								key: "home",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "todo",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "message",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "personalCenter",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "仅标题", padding: "0"},
						apivm.h(
							"avm-tabbar",
							null,
							tabs.map(function(item) {
								return apivm.h("avm-tabbar-item", {
									key: item.key,
									title: item.title,
									badgeContent: item.badge
								});
							})
						)
					),
					apivm.h(
						DemoBlock,
						{title: "受控组件", padding: "0"},
						apivm.h(
							"avm-tabbar",
							{activeKey: this.data.activeKey, handleChange: this.setActiveKey},
							apivm.h("avm-tabbar-item", {
								key: "home",
								title: "首页",
								className: "icon-style",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "todo",
								title: "我的待办",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "message",
								title: "我的消息",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							}),
							apivm.h("avm-tabbar-item", {
								key: "personalCenter",
								title: "个人中心",
								icon: apivm.h("text", {className: "icon-style"}, "icon占位")
							})
						)
					)
				)
			);
		};

		return DemoTabbar;
	})(Component);
	DemoTabbar.css = {
		".page": {height: "100%", width: "100%", background: "#f2f2f2"},
		".icon-style": {
			width: "auto",
			height: "20px",
			fontSize: "10px",
			color: "#999"
		}
	};
	DemoTabbar.csslink = ["../../components/avm-ui/demos/index.css"];
	apivm.define("demo-tabbar", DemoTabbar);
	apivm.render(apivm.h("demo-tabbar", null), "body");
})();
