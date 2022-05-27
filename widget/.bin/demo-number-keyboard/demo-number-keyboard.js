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

	// packages/avm-ui/src/components/list/list.tsx
	var classPrefix = "adm-list";
	var defaultProps = {
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
				props = Object.assign({}, defaultProps, props);
				return apivm.h(
					"div",
					{className: classPrefix + " " + classPrefix + "--" + props.mode},
					props.header &&
						apivm.h("text", {className: classPrefix + "-header"}, props.header),
					apivm.h(
						"div",
						{
							className: classNames(
								classPrefix + "--inner",
								classPrefix + "--inner__" + props.mode
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
								? apivm.h(Icon, {
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

	// packages/avm-ui/src/utils/attach-properties-to-component.ts
	function attachPropertiesToComponent(component, properties2) {
		var ret = component;
		for (var key in properties2) {
			if (properties2.hasOwnProperty(key)) {
				ret[key] = properties2[key];
			}
		}
		return ret;
	}

	// packages/avm-ui/src/components/list/index.ts
	var properties = {
		Item: ListItem
	};

	var list_default = attachPropertiesToComponent(List, properties);
	avm.define("avm-list", List);
	avm.define("avm-list-item", ListItem);

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
	var Icon_default = Icon$1;

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
											? apivm.h(Icon_default, {code: 59988, fontSize: "18"})
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

	// packages/avm-ui/src/utils/shuffle.ts
	function shuffle(array) {
		var result = [].concat(array);
		for (var i = result.length; i > 0; i--) {
			var j = Math.floor(Math.random() * i);
			var _ref = [result[j], result[i - 1]];
			result[i - 1] = _ref[0];
			result[j] = _ref[1];
		}
		return result;
	}

	// packages/avm-ui/src/utils/with-default-props.tsx
	function mergeProps(defaultProps4, props) {
		return Object.assign({}, defaultProps4, props);
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
				var props = mergeProps(defaultProps$2, p);
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

	// packages/avm-ui/src/components/icon/icon.config.json
	var fontName$2 = "avm-icon";

	// packages/avm-ui/src/utils/tag.ts
	function tag$2(name) {
		return function(target) {
			avm.define(name, target);
		};
	}

	// packages/avm-ui/src/components/icon/icons.json
	var icons$2 = {
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
	var classPrefix2$2 = "adm-icon";
	var Icon$2 = /*#__PURE__*/ (function(_Component2) {
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
					fontName$2 +
					"\"; src: url('../../components/avm-ui/icon/" +
					fontName$2 +
					".ttf') format('truetype');}\n        ." +
					classPrefix2$2 +
					" {font-family: " +
					fontName$2 +
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
					: icons$2[name];
				return apivm.h(
					"text",
					{
						style: _objectSpread2({}, props),
						class:
							classPrefix2$2 +
							" " +
							classPrefix2$2 +
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

	Icon$2 = __decorateClass$2([tag$2("avm-icon")], Icon$2);

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default$1 = Icon$2;

	// packages/avm-ui/src/components/popup/popup.tsx
	var classPrefix3$1 = "adm-popup";
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
					classPrefix3$1 + "-body",
					bodyClassName,
					classPrefix3$1 + "-body-position-" + position
				);
				var shouldRender = useShouldRender(
					_this3.data.visible,
					forceRender,
					destroyOnClose
				);
				return apivm.h(
					"div",
					{
						className: classNames(classPrefix3$1, props.className),
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
								{className: classPrefix3$1 + "-title"},
								isBack &&
									apivm.h(
										"div",
										{
											className: classPrefix3$1 + "-title-back",
											onClick: function onClick() {
												handleBack && handleBack();
											}
										},
										apivm.h(Icon_default$1, {code: 59988, fontSize: "18", color: "#bbb"}),
										apivm.h(
											"span",
											{className: classPrefix3$1 + "-title-back-text"},
											"\u8FD4\u56DE"
										)
									),

								apivm.h(
									"div",
									{className: classPrefix3$1 + "-title-con"},
									apivm.h(
										"span",
										{className: classPrefix3$1 + "-title-text"},
										titleText
									),
									tipText &&
										apivm.h(
											"div",
											{title: tipText},
											apivm.h(Icon_default$1, {code: 59940, fontSize: "18", color: "#bbb"})
										)
								),

								apivm.h(
									"div",
									{
										onClick: function onClick() {
											handleClose && handleClose();
										}
									},
									apivm.h(Icon_default$1, {code: 59940, fontSize: "18", color: "#bbb"})
								)
							),

						shouldRender && formatLabel$1(children),
						isFooterBtn &&
							apivm.h(
								"div",
								{className: classPrefix3$1 + "-footer"},
								apivm.h(
									"button",
									{
										onClick: function onClick() {
											footBtnClick && footBtnClick();
										},
										className: classPrefix3$1 + "-footer-btn"
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

	// packages/avm-ui/src/components/popup/index.ts
	var Popup_default = Popup;
	avm.define("avm-popup", Popup);

	// packages/avm-ui/src/components/number-keyboard/number-keyboard.tsx
	var classPrefix4 = "adm-number-keyboard";
	var defaultProps3 = {
		defaultVisible: false,
		randomOrder: false,
		showCloseButton: true,
		closeOnConfirm: true,
		isShowClearBtn: true,
		type: "default"
	};

	var NumberKeyboard = /*#__PURE__*/ (function(_Component4) {
		_inheritsLoose(NumberKeyboard, _Component4);
		function NumberKeyboard() {
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
				popupBodyStyle: {
					background: "#f5f5f5"
				}
			});
			_defineProperty(
				_assertThisInitialized(_this4),
				"render",

				function(props) {
					var _classNames2, _classNames3, _classNames4;
					props = Object.assign({}, defaultProps3, props);
					var _props = props,
						visible = _props.visible,
						getContainer = _props.getContainer,
						randomOrder = _props.randomOrder,
						showCloseButton = _props.showCloseButton,
						handleInput = _props.handleInput,
						handleDelete = _props.handleDelete,
						isShowClearBtn = _props.isShowClearBtn,
						type = _props.type;
					var confirmText;
					var keys = function keys() {
						var defaultKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
						var keyList = randomOrder ? shuffle(defaultKeys) : defaultKeys;
						if (type === "default") {
							keyList.push("0");
							keyList.splice(9, 0, "CLOSE_KEYBOARD");
							keyList.push("BACKSPACE");
						} else if (type === "ID") {
							keyList.push("0");
							keyList.splice(9, 0, "X");
							keyList.push("BACKSPACE");
						} else if (type === "custom") {
							confirmText = "\u5B8C\u6210";
						}
						return keyList;
					};
					var onKeyPress = function onKeyPress(key) {
						switch (key) {
							case "BACKSPACE":
								handleDelete == null ? void 0 : handleDelete();
								break;
							case "OK":
								props.handleConfirm == null ? void 0 : props.handleConfirm();
								if (props.closeOnConfirm) {
									props.handleClose == null ? void 0 : props.handleClose();
								}
								break;
							case "CLEAR":
								props.clearAll == null ? void 0 : props.clearAll();
								break;
							default:
								handleInput == null ? void 0 : handleInput(key);
								break;
						}
					};
					var renderKey = function renderKey(key, index) {
						var _classNames;
						var isNumberKey = /^\d$/.test(key);
						var keyCls = classNames(
							classPrefix4 + "-key",
							((_classNames = {}),
							(_classNames[classPrefix4 + "-key-number"] = isNumberKey),
							(_classNames[classPrefix4 + "-key-sign"] = !isNumberKey && key),
							(_classNames[classPrefix4 + "-key-mid"] = index === 9 && !!confirmText),
							_classNames)
						);

						return apivm.h(
							"div",
							{
								key: key,
								className: keyCls,
								onClick: function onClick() {
									return key && onKeyPress(key);
								},
								title: key,
								role: "button",
								style: {marginRight: (index + 1) % 3 !== 0 ? "8px" : 0}
							},
							key === "BACKSPACE"
								? apivm.h(Icon$2, {code: 59931})
								: key === "CLOSE_KEYBOARD"
								? apivm.h(
										"view",
										{
											className: classPrefix4 + "-key-text",
											onClick: function onClick() {
												props.handleClose == null ? void 0 : props.handleClose();
											}
										},
										apivm.h(Icon$2, {code: 59931})
								  )
								: apivm.h("span", {className: classPrefix4 + "-key-text"}, key)
						);
					};
					return apivm.h(
						Popup_default,
						{
							visible: visible,
							getContainer: getContainer,
							mask: false,
							bodyHeight: "auto",
							afterClose: props.afterClose,
							afterShow: props.afterShow,
							className: classPrefix4 + "-popup",
							bodyStyle: _this4.data.popupBodyStyle
						},
						apivm.h(
							"div",
							{className: classPrefix4},
							apivm.h(
								"div",
								{className: classPrefix4 + "-wrapper"},
								apivm.h(
									"div",
									{
										className: classNames(
											classPrefix4 + "-main",
											((_classNames2 = {}),
											(_classNames2[classPrefix4 + "-confirmed-style"] = !!confirmText),
											_classNames2)
										)
									},

									keys().map(function(key, index) {
										return renderKey(key, index);
									}),
									type === "custom" &&
										apivm.h(
											"div",
											{className: classPrefix4 + "-custom-keys"},
											apivm.h(
												"span",
												{
													onClick: function onClick() {
														return onKeyPress("0");
													},
													className: classPrefix4 + "-key-text-span2"
												},
												"0"
											),
											showCloseButton
												? apivm.h(
														"view",
														{
															className: classPrefix4 + "-key-text-span1",
															onClick: function onClick() {
																props.handleClose == null ? void 0 : props.handleClose();
															}
														},
														apivm.h(Icon$2, {code: 59931})
												  )
												: apivm.h(
														"span",
														{
															className: classPrefix4 + "-key-text-span1",
															onClick: function onClick() {
																return onKeyPress(".");
															}
														},
														"."
												  )
										)
								),

								!!confirmText &&
									apivm.h(
										"div",
										{className: classPrefix4 + "-confirm"},
										isShowClearBtn &&
											apivm.h(
												"div",
												{
													className:
														classPrefix4 + "-key-extra " + classPrefix4 + "-key-clear",
													onClick: function onClick() {
														return onKeyPress("CLEAR");
													},
													title: "CLEAR",
													role: "button"
												},
												apivm.h(
													"text",
													{className: classPrefix4 + "-key-clear-text"},
													"\u6E05\u7A7A"
												)
											),
										apivm.h(
											"div",
											{
												className: classNames(
													classPrefix4 + "-key-extra",
													classPrefix4 + "-key-bs",
													((_classNames3 = {}),
													(_classNames3[classPrefix4 + "-key-bs-hasclear"] = isShowClearBtn),
													_classNames3)
												),
												onClick: function onClick() {
													return onKeyPress("BACKSPACE");
												},
												title: "BACKSPACE",
												role: "button"
											},
											apivm.h(Icon$2, {code: 59931})
										),
										apivm.h(
											"div",
											{
												className: classNames(
													classPrefix4 + "-key-extra",
													classPrefix4 + "-key-ok",
													((_classNames4 = {}),
													(_classNames4[classPrefix4 + "-key-ok-hasclear"] = isShowClearBtn),
													_classNames4)
												),
												onClick: function onClick() {
													return onKeyPress("OK");
												},
												role: "button"
											},
											apivm.h(
												"span",
												{className: classPrefix4 + "-key-ok-text"},
												confirmText
											)
										)
									)
							)
						)
					);
				}
			);
			_defineProperty(_assertThisInitialized(_this4), "css", function() {
				return "\n      .adm-number-keyboard {\n        padding: 0 0 8px 8px;\n        background: #f2f3f5;\n        width: 100%;\n      }\n      .adm-number-keyboard-main {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        width: 100%;\n      }\n      .adm-number-keyboard-confirmed-style {\n        width: 75%;\n      }\n      .adm-number-keyboard-popup {\n        width: 100%;\n        user-select: none;\n        z-index: 1050;\n      }\n      .adm-number-keyboard-wrapper {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n      }\n      .adm-number-keyboard-header {\n        height: 34px;\n        line-height: 34px;\n        border-top: 1px solid #f5f5f5;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        padding: 0 12px;\n        color: #999;\n        background-color: #fff;\n      }\n      .adm-number-keyboard-header-close-button {\n        padding: 0 12px;\n        height: 34px;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-number-keyboard-header-with-title {\n        justify-content: space-between;\n      }\n      .adm-number-keyboard-header-with-title-close-button {\n        padding-right: 0;\n      }\n      .adm-number-keyboard-title {\n        color: #999;\n        font-size: 14px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .adm-number-keyboard-confirm {\n        width: 25%;\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n      }\n      .adm-number-keyboard-key {\n        width: 31.5%;\n        border-radius: 8px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 48px;\n        box-sizing: border-box;\n        border-top: 1px solid #f5f5f5;\n        border-right: 1px solid #f5f5f5;\n        background: #f5f5f5;\n        margin-top: 8px;\n      }\n      .adm-number-keyboard-key-text {\n        font-size: 22px;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-number-keyboard-key-mid {\n        width: 63%;\n      }\n      .adm-number-keyboard-key-sign {\n        background: #fff;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-number-keyboard-key-sign:active {\n        background-color: #f2f2f2;\n      }\n      .adm-number-keyboard-key-extra {\n        background-color: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 8px;\n        margin-top: 8px;\n        margin-left: 8px;\n        margin-right: 8px;\n      }\n      .adm-number-keyboard-key-number {\n        background-color: #fff;\n      }\n      .adm-number-keyboard-key-number:active {\n        background-color: #f2f2f2;\n      }\n      .adm-number-keyboard-key-ok {\n        display: inline-block;\n        background-color: #9AC200;\n        text-align: center;\n        margin-top: 8px;\n        align-items: center;\n        justify-content: center;\n        height: 104px;\n      }\n      .adm-number-keyboard-key-ok-text {\n        color: #fff;\n        font-size: 16px;\n      }\n      .adm-number-keyboard-key-bs {\n        border-top: 1px solid #f5f5f5;\n        border-bottom: 1px solid #f5f5f5;\n        height: 104px;\n      }\n      .adm-number-keyboard-key-bs-hasclear {\n        height: 48px;\n      }\n      .adm-number-keyboard-key-clear {\n        height: 48px;\n      }\n      .adm-number-keyboard-key-clear-text {\n        color: #333;\n        font-size: 16px;\n      }\n      .adm-number-keyboard-custom-keys {\n        flex-direction: row;\n        width: 100%;\n        height: auto;\n      }\n      .adm-number-keyboard-key-text-span2 {\n        flex: 2;\n        border-radius: 8px;\n        height: 48px;\n        background: #fff;\n        margin-top: 8px;\n        text-align: center;\n        line-height: 48px;\n        color: #333;\n        font-size: 16px;\n        margin-right: 8px;\n      }\n      .adm-number-keyboard-key-text-span1 {\n        flex: 1;\n        border-radius: 8px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 48px;\n        background: #fff;\n        margin-top: 8px;\n        line-height: 48px;\n        text-align: center;\n        color: #333;\n        font-size: 16px;\n        margin-right: 5px;\n        margin-left: 1px;\n      }\n    ";
			});
			return _this4;
		}
		return NumberKeyboard;
	})(Component);
	avm.define("avm-number-keyboard", NumberKeyboard);

	var DemoNumberkeyboard = /*@__PURE__*/ (function(Component) {
		function DemoNumberkeyboard(props) {
			var this$1 = this;
			Component.call(this, props);
			this.data = {
				visible: "",
				value: "",
				value1: "123",
				actions: {
					onClose: function() {
						api.toast({
							msg: "close"
						});

						this$1.setVisible("");
					},
					onInput: function(key) {
						api.toast({
							msg: "input" + key
						});
					},
					onDelete: function() {
						api.toast({
							msg: "delete"
						});

						this$1.setVisible("");
					},
					onClearAll: function() {
						api.toast({
							msg: "点击清空按钮啦~~"
						});
					}
				}
			};
		}

		if (Component) DemoNumberkeyboard.__proto__ = Component;
		DemoNumberkeyboard.prototype = Object.create(
			Component && Component.prototype
		);
		DemoNumberkeyboard.prototype.constructor = DemoNumberkeyboard;
		DemoNumberkeyboard.prototype.back = function() {
			api.closeWin();
		};
		DemoNumberkeyboard.prototype.setVisible = function(v) {
			this.data.visible = v;
		};
		DemoNumberkeyboard.prototype.openKeyboard = function(name) {
			this.setVisible(name);
		};
		DemoNumberkeyboard.prototype.onInput = function(v) {
			api.toast({
				msg: this.data.value + v
			});

			this.data.value = this.data.value + v;
		};
		DemoNumberkeyboard.prototype.onDelete = function() {
			var ref = this.data;
			var value = ref.value;
			this.data.value = value.slice(0, value.length - 1);
		};
		DemoNumberkeyboard.prototype.InputOnInput = function(val) {
			api.toast({
				msg: val
			});
		};
		DemoNumberkeyboard.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"safe-area",
				{class: "page"},
				apivm.h("avm-nav-bar", {onBack: this.back}, "NumberKeyboard"),
				apivm.h(
					"scroll-view",
					null,
					apivm.h(
						"avm-list",
						null,
						apivm.h(
							"avm-list-item",
							{
								handleClick: function() {
									return this$1.openKeyboard("demo1");
								}
							},
							"基础样式"
						),
						apivm.h(
							"avm-list-item",
							{
								handleClick: function() {
									return this$1.openKeyboard("demo2");
								}
							},
							"身份证号键盘"
						),
						apivm.h(
							"avm-list-item",
							{
								handleClick: function() {
									return this$1.openKeyboard("demo3");
								}
							},
							"自定义样式-1"
						),
						apivm.h(
							"avm-list-item",
							{
								handleClick: function() {
									return this$1.openKeyboard("demo4");
								}
							},
							"自定义样式-2"
						),
						apivm.h(
							"avm-list-item",
							{
								handleClick: function() {
									return this$1.openKeyboard("demo5");
								}
							},
							"自定义样式-3"
						)
					)
				),
				apivm.h("avm-number-keyboard", {
					visible: this.data.visible === "demo1",
					handleClose: this.data.actions.onClose,
					handleInput: this.data.actions.onInput,
					handleDelete: this.data.actions.onDelete,
					type: "default"
				}),
				apivm.h("avm-number-keyboard", {
					visible: this.data.visible === "demo2",
					handleClose: this.data.actions.onClose,
					handleInput: this.data.actions.onInput,
					handleDelete: this.data.actions.onDelete,
					type: "ID"
				}),
				apivm.h("avm-number-keyboard", {
					visible: this.data.visible === "demo3",
					handleClose: this.data.actions.onClose,
					handleInput: this.data.actions.onInput,
					handleDelete: this.data.actions.onDelete,
					clearAll: this.data.actions.onClearAll,
					type: "custom",
					showCloseButton: false
				}),
				apivm.h("avm-number-keyboard", {
					visible: this.data.visible === "demo4",
					handleClose: this.data.actions.onClose,
					handleInput: this.data.actions.onInput,
					handleDelete: this.data.actions.onDelete,
					clearAll: this.data.actions.onClearAll,
					showCloseButton: false,
					isShowClearBtn: true,
					type: "custom"
				}),
				apivm.h("avm-number-keyboard", {
					visible: this.data.visible === "demo5",
					handleClose: this.data.actions.onClose,
					handleInput: this.data.actions.onInput,
					handleDelete: this.data.actions.onDelete,
					clearAll: this.data.actions.onClearAll,
					type: "custom"
				})
			);
		};

		return DemoNumberkeyboard;
	})(Component);
	DemoNumberkeyboard.css = {
		".page": {height: "100%", width: "100%", background: "#fff"}
	};
	DemoNumberkeyboard.csslink = [
		"../../components/avm-ui/number-keyboard/index.css"
	];
	apivm.define("demo-numberkeyboard", DemoNumberkeyboard);
	apivm.render(apivm.h("demo-numberkeyboard", null), "body");
})();
