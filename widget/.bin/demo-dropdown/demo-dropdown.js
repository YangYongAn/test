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

	function mergeProps(defaultProps2, props) {
		return Object.assign({}, defaultProps2, props);
	}

	// packages/avm-ui/src/components/space/space.tsx
	var classPrefix$1 = "adm-space";
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
								classPrefix$1,
								((_classNames = {}),
								(_classNames[classPrefix$1 + "-wrap"] = props.wrap),
								(_classNames[classPrefix$1 + "-" + direction + "-wrap"] = props.wrap),
								(_classNames[classPrefix$1 + "-block"] = props.block),
								(_classNames[classPrefix$1 + "-" + direction] = true),
								(_classNames[classPrefix$1 + "-align-" + props.align] = !!props.align),
								(_classNames[
									classPrefix$1 + "-justify-" + props.justify
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
										classPrefix$1 + "-item",
										classPrefix$1 + "-" + direction + "-item",
										((_classNames2 = {}),
										(_classNames2[classPrefix$1 + "-" + direction + "-item-last"] =
											index === props.children.length - 1),
										(_classNames2[classPrefix$1 + "-" + direction + "-wrap-item"] =
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

	// packages/avm-ui/src/components/space/index.ts
	var space_default = Space;
	avm.define("avm-space", Space);

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

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default = Icon$1;

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

	// packages/avm-ui/src/components/nav-bar/index.ts
	var nav_bar_default = NavBar;
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

	// packages/avm-ui/src/components/radio/myRadio.tsx
	var classPrefix$3 = "adm-radio";
	var MyRadio = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(MyRadio, _Component);
		function MyRadio() {
			var _this;
			for (
				var _len = arguments.length, args = new Array(_len), _key = 0;
				_key < _len;
				_key++
			) {
				args[_key] = arguments[_key];
			}
			_this = _Component.call.apply(_Component, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this), "data", {
				checked: _this.props.checked || false
			});
			_defineProperty(
				_assertThisInitialized(_this),
				"setChecked",

				function() {
					if (!_this.data.checked) {
						_this.data.checked = !_this.data.checked;
						_this.props.onChange == null
							? void 0
							: _this.props.onChange(_this.data.checked);
					}
				}
			);
			_defineProperty(_assertThisInitialized(_this), "render", function(props) {
				var _classNames,
					_classNames2,
					_classNames3,
					_classNames4,
					_classNames5,
					_classNames6;
				var _this$props = _this.props,
					_this$props$fontSize = _this$props.fontSize,
					fontSize = _this$props$fontSize === void 0 ? "16px" : _this$props$fontSize,
					_this$props$gap = _this$props.gap,
					gap = _this$props$gap === void 0 ? "8px" : _this$props$gap,
					_this$props$iconSize = _this$props.iconSize,
					iconSize = _this$props$iconSize === void 0 ? "18px" : _this$props$iconSize,
					_this$props$disabled = _this$props.disabled,
					disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
					_this$props$block = _this$props.block,
					block = _this$props$block === void 0 ? false : _this$props$block,
					icon = _this$props.icon,
					selectedIcon = _this$props.selectedIcon,
					isGroup = _this$props.isGroup,
					isLastEle = _this$props.isLastEle,
					descIsOneLineShow = _this$props.descIsOneLineShow,
					isTwoHeadArrange = _this$props.isTwoHeadArrange;
				var boxCls = classNames(
					classPrefix$3,
					props.className,
					((_classNames = {}),
					(_classNames[classPrefix$3 + "-checked"] = _this.data.checked),
					(_classNames[classPrefix$3 + "-disabled"] = disabled),
					(_classNames[classPrefix$3 + "-block"] = block),
					(_classNames[classPrefix$3 + "-two-headarrange"] = isTwoHeadArrange),
					(_classNames[classPrefix$3 + "-text-has-bottomborder"] = isTwoHeadArrange),
					_classNames)
				);

				var iconStyles = {
					width: iconSize,
					height: iconSize
				};

				var childStyles = {
					fontSize: fontSize,
					paddingLeft: isTwoHeadArrange ? 0 : gap
				};

				var defaultEleIcons = apivm.h(
					"view",
					{
						className: classNames(
							classPrefix$3 + "-icon",
							((_classNames2 = {}),
							(_classNames2[classPrefix$3 + "-icon-checked"] = _this.data.checked),
							(_classNames2[classPrefix$3 + "-icon-disabled"] = disabled),
							_classNames2)
						),
						style: iconStyles
					},
					_this.data.checked &&
						apivm.h("text", {
							className: classNames(
								classPrefix$3 + "-icon-inner",
								((_classNames3 = {}),
								(_classNames3[classPrefix$3 + "-icon-inner-disabled"] = disabled),
								_classNames3)
							)
						})
				);

				var iconEles =
					icon && selectedIcon
						? _this.data.checked
							? selectedIcon
							: icon
						: defaultEleIcons;
				var textCls = classNames(
					classPrefix$3 + "-text",
					((_classNames4 = {}),
					(_classNames4[classPrefix$3 + "-text-disabled"] = disabled),
					(_classNames4[classPrefix$3 + "-text-has-bottomborder"] =
						!isTwoHeadArrange && isGroup && !isLastEle),
					(_classNames4[classPrefix$3 + "-desc-onelineshow"] = descIsOneLineShow),
					_classNames4)
				);

				var labelContent = apivm.h(
					"view",
					{className: textCls},
					formatLabel(
						props.children,
						classNames(
							classPrefix$3 + "-text-content",
							((_classNames5 = {}),
							(_classNames5[
								classPrefix$3 + "-desc-onelineshow-content"
							] = descIsOneLineShow),
							_classNames5)
						),
						childStyles
					),
					props.description &&
						apivm.h(
							"span",
							{
								className: classNames(
									classPrefix$3 + "-text-description",
									((_classNames6 = {}),
									(_classNames6[
										classPrefix$3 + "-desc-onelineshow-desc"
									] = descIsOneLineShow),
									_classNames6)
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
							!disabled && _this.setChecked();
						}
					},
					!isTwoHeadArrange && iconEles,
					props.children && labelContent,
					isTwoHeadArrange && iconEles
				);
			});
			return _this;
		}
		return MyRadio;
	})(Component);

	// packages/avm-ui/src/components/radio/radio.tsx
	var defaultProps$2 = {
		defaultChecked: false
	};

	var Radio = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(Radio, _Component2);
		function Radio() {
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
				checked: _this2.props.checked || _this2.props.defaultChecked || false
			});
			_defineProperty(
				_assertThisInitialized(_this2),
				"setChecked",

				function(check) {
					_this2.data.checked = check;
					_this2.props.radioChange == null
						? void 0
						: _this2.props.radioChange(_this2.props.value);
				}
			);
			_defineProperty(_assertThisInitialized(_this2), "render", function(props) {
				_this2.props = Object.assign({}, defaultProps$2, props);
				var _this2$props = _this2.props,
					RadioGroupContext = _this2$props.RadioGroupContext,
					style = _this2$props.style,
					id = _this2$props.id,
					fontSize = _this2$props.fontSize,
					gap = _this2$props.gap,
					iconSize = _this2$props.iconSize,
					value = _this2$props.value,
					radioChange = _this2$props.radioChange,
					icon = _this2$props.icon,
					selectedIcon = _this2$props.selectedIcon,
					description = _this2$props.description,
					isGroup = _this2$props.isGroup,
					isLastEle = _this2$props.isLastEle,
					_this2$props$descIsOn = _this2$props.descIsOneLineShow,
					descIsOneLineShow =
						_this2$props$descIsOn === void 0 ? false : _this2$props$descIsOn,
					_this2$props$isTwoHea = _this2$props.isTwoHeadArrange,
					isTwoHeadArrange =
						_this2$props$isTwoHea === void 0 ? false : _this2$props$isTwoHea;
				var groupContext = RadioGroupContext;
				var disabled =
					_this2.props.disabled || (groupContext ? groupContext.disabled : false);
				if (groupContext && value !== void 0) {
					_this2.data.checked = groupContext.value.includes(value);
					_this2.setChecked = function(checked) {
						if (checked) {
							groupContext.check(value);
						} else {
							groupContext.uncheck(value);
						}
						radioChange == null ? void 0 : radioChange(checked);
					};
				}
				return apivm.h(
					MyRadio,
					{
						isGroup: isGroup,
						isLastEle: isLastEle,
						descIsOneLineShow: descIsOneLineShow,
						isTwoHeadArrange: isTwoHeadArrange,
						description: description,
						style: style,
						checked: _this2.data.checked,
						icon: icon,
						selectedIcon: selectedIcon,
						value: value,
						onChange: function onChange(checked) {
							return _this2.setChecked(checked);
						},
						disabled: disabled,
						id: id,
						fontSize: fontSize,
						iconSize: iconSize,
						gap: gap
					},
					props.children
				);
			});
			_defineProperty(_assertThisInitialized(_this2), "css", function() {
				return "\n      .adm-radio {\n        display: inline-flex;\n        vertical-align: text-bottom;\n        justify-content: flex-start;\n        align-items: center;\n        cursor: pointer;\n      }\n      .adm-radio-two-headarrange {\n        justify-content: space-between;\n      }\n      .adm-radio-icon {\n        border-radius: 50%;\n        border: 1px solid #ddd;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-radio-icon-inner {\n        width: 70%;\n        height: 70%;\n        border-radius: 50%;\n        background: #9AC200;\n      }\n      .adm-radio-icon-inner-disabled {\n        background: #ddd;\n      }\n      .adm-radio-icon-checked {\n        border-color: #9AC200;\n      }\n      .adm-radio-icon-disabled {\n        background: #f2f2f2;\n        border-color: #ddd;\n      }\n      .adm-radio-block {\n        display: flex;\n      }\n      .adm-radio-content {\n        flex: none;\n      }\n      .adm-radio-text {\n        flex: 1;\n        padding-top: 15px;\n        padding-bottom: 15px;\n        display: flex;\n        flex-direction: column;\n      }\n      .adm-radio-text-has-bottomborder {\n        border-bottom: 1px solid #e8e8e8;\n      }\n      .adm-radio-text-content {\n        flex: 1;\n        flex-wrap: wrap;\n      }\n      .adm-radio-text-description {\n        flex: 1;\n        flex-wrap: wrap;\n        font-size: 12px;\n        color: #999;\n        padding-top: 8px;\n      }\n      .adm-radio-text-disabled {\n        color: #bbb;\n      }\n      .adm-radio-desc-onelineshow {\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n      }\n      .adm-radio-desc-onelineshow-content {\n        flex: 1;\n      }\n      .adm-radio-desc-onelineshow-desc {\n        flex: none;\n        padding-top: 0;\n        font-size: 14px;\n        max-width: 100px;\n        text-align: right;\n      }\n    ";
			});
			return _this2;
		}
		return Radio;
	})(Component);

	// packages/avm-ui/src/components/radio/group.tsx
	var defaultProps2 = {
		disabled: false,
		defaultValue: null
	};

	var Group = /*#__PURE__*/ (function(_Component3) {
		_inheritsLoose(Group, _Component3);
		function Group() {
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
				value: _this3.props.value || _this3.props.defaultValue
			});
			_defineProperty(
				_assertThisInitialized(_this3),
				"setValue",

				function(val) {
					_this3.data.value = val;
					_this3.props.groupChange && _this3.props.groupChange(val);
				}
			);
			_defineProperty(_assertThisInitialized(_this3), "render", function(props) {
				props = Object.assign({}, defaultProps2, props);
				var RadioGroupContext = {
					value: _this3.data.value === null ? [] : [_this3.data.value],
					check: function check(v) {
						_this3.setValue(v);
					},
					uncheck: function uncheck() {},
					disabled: props.disabled
				};

				var eles = props.children.map(function(ele, index) {
					return apivm.h(
						Radio,
						_extends({}, ele.attributes, {
							RadioGroupContext: RadioGroupContext,
							isGroup: true,
							isLastEle: index === props.children.length - 1
						}),
						ele.children
					);
				});
				return apivm.h("div", null, eles);
			});
			return _this3;
		}
		return Group;
	})(Component);

	// packages/avm-ui/src/components/radio/index.ts
	var radio_default = attachPropertiesToComponent(Radio, {
		Group: Group
	});

	avm.define("avm-radio", Radio);
	avm.define("avm-radio-group", Group);

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

	// packages/avm-ui/src/utils/with-default-props.tsx
	function mergeProps$1(defaultProps4, props) {
		return Object.assign({}, defaultProps4, props);
	}

	// packages/avm-ui/src/components/dropdown/item.tsx
	var DropdownItem = /*#__PURE__*/ (function(_Component) {
		_inheritsLoose(DropdownItem, _Component);
		function DropdownItem() {
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
				return apivm.h("div", null, props.children);
			});
			return _this;
		}
		return DropdownItem;
	})(Component);

	// packages/avm-ui/src/utils/use-should-render.tsx
	function useShouldRender(active, forceRender, destroyOnClose) {
		var initialized = active;
		if (forceRender) return true;
		if (active) return true;
		if (!initialized) return false;
		return !destroyOnClose;
	}

	// packages/avm-ui/src/components/mask/mask.tsx
	var classPrefix$4 = "adm-mask";
	var opacityRecord = {
		default: 0.55,
		thin: 0.35,
		thick: 0.75
	};

	var defaultProps$3 = {
		visible: true,
		destroyOnClose: false,
		forceRender: false,
		color: "black",
		opacity: "default",
		disableBodyScroll: true,
		getContainer: null,
		stopPropagation: ["click"]
	};

	var Mask = /*#__PURE__*/ (function(_Component2) {
		_inheritsLoose(Mask, _Component2);
		function Mask() {
			var _this2;
			for (
				var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
				_key2 < _len2;
				_key2++
			) {
				args[_key2] = arguments[_key2];
			}
			_this2 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this2), "render", function(p) {
				var _opacityRecord$props$;
				var props = mergeProps$1(defaultProps$3, p);
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
						className: classPrefix$4,
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
							className: classPrefix$4 + "-aria-button",
							role: "button",
							"aria-label": "Mask",
							onClick: props.onMaskClick
						}),
					apivm.h(
						"div",
						{className: classPrefix$4 + "-content", onClick: props.onMaskClick},
						shouldRender && props.children
					)
				);
			});
			_defineProperty(_assertThisInitialized(_this2), "css", function() {
				return ':root {\n      --adm-color-primary: #9AC200;\n      --adm-color-success: #7FA000;\n      --adm-color-warning: #FFA600;\n      --adm-color-danger: #FA6400;\n      --adm-color-white: #ffffff;\n      --adm-color-weak: #999999;\n      --adm-color-light: #cccccc;\n      --adm-border-color: #eeeeee;\n      --adm-font-size-main: 13px;\n      --adm-color-text: #333333;\n      --adm-font-family:\n        -apple-system,\n        blinkmacsystemfont,\n        "Helvetica Neue",\n        helvetica,\n        segoe ui,\n        arial,\n        roboto,\n        "PingFang SC",\n        "miui",\n        "Hiragino Sans GB",\n        "Microsoft Yahei",\n        sans-serif;\n    }\n    .adm-mask {\n      --z-index: var(--adm-mask-z-index, 1000);\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      z-index: var(--z-index);\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    .adm-mask-aria-button {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .adm-mask-content {\n      height: 100%;\n      z-index: 1;\n    }';
			});
			return _this2;
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
	var classPrefix2$1 = "adm-icon";
	var Icon$2 = /*#__PURE__*/ (function(_Component3) {
		_inheritsLoose(Icon, _Component3);
		function Icon() {
			var _this3;
			for (
				var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
				_key3 < _len3;
				_key3++
			) {
				args[_key3] = arguments[_key3];
			}
			_this3 = _Component3.call.apply(_Component3, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this3), "css", function() {
				return (
					'@font-face {font-family: "' +
					fontName$2 +
					"\"; src: url('../../components/avm-ui/icon/" +
					fontName$2 +
					".ttf') format('truetype');}\n        ." +
					classPrefix2$1 +
					" {font-family: " +
					fontName$2 +
					";}"
				);
			});
			_defineProperty(_assertThisInitialized(_this3), "render", function(props) {
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
							classPrefix2$1 +
							" " +
							classPrefix2$1 +
							"-font-icon-text " +
							(props.class || props.className || "")
					},
					char
				);
			});
			return _this3;
		}
		return Icon;
	})(Component);

	Icon$2 = __decorateClass$2([tag$2("avm-icon")], Icon$2);

	// packages/avm-ui/src/components/icon/index.ts
	var Icon_default$1 = Icon$2;

	// packages/avm-ui/src/components/popup/popup.tsx
	var classPrefix3 = "adm-popup";
	var defaultProps2$1 = {
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

	var Popup = /*#__PURE__*/ (function(_Component4) {
		_inheritsLoose(Popup, _Component4);
		function Popup() {
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
				visible: _this4.props.visible
			});
			_defineProperty(
				_assertThisInitialized(_this4),
				"setVisible",

				function(visible) {
					if (visible) {
						_this4.props.afterShow && _this4.props.afterShow();
					}
					_this4.data.visible = visible;
				}
			);
			_defineProperty(_assertThisInitialized(_this4), "render", function(props) {
				_this4.props = Object.assign({}, defaultProps2$1, props);
				_this4.data.visible = props.visible;
				var _this4$props = _this4.props,
					_this4$props$zIndex = _this4$props.zIndex,
					zIndex = _this4$props$zIndex === void 0 ? 1e3 : _this4$props$zIndex,
					bodyClassName = _this4$props.bodyClassName,
					position = _this4$props.position,
					_this4$props$forceRen = _this4$props.forceRender,
					forceRender =
						_this4$props$forceRen === void 0 ? false : _this4$props$forceRen,
					_this4$props$destroyO = _this4$props.destroyOnClose,
					destroyOnClose =
						_this4$props$destroyO === void 0 ? false : _this4$props$destroyO,
					stopPropagation = _this4$props.stopPropagation,
					handleClick = _this4$props.handleClick,
					mask = _this4$props.mask,
					maskClick = _this4$props.maskClick,
					maskClassName = _this4$props.maskClassName,
					maskStyle = _this4$props.maskStyle,
					bodyStyle = _this4$props.bodyStyle,
					children = _this4$props.children,
					isTitle = _this4$props.isTitle,
					titleText = _this4$props.titleText,
					isBack = _this4$props.isBack,
					handleClose = _this4$props.handleClose,
					handleBack = _this4$props.handleBack,
					tipText = _this4$props.tipText,
					isFooterBtn = _this4$props.isFooterBtn,
					footBtnClick = _this4$props.footBtnClick,
					bodyHeight = _this4$props.bodyHeight,
					bodyWidth = _this4$props.bodyWidth;
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
					_this4.data.visible,
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
						style: {display: _this4.data.visible ? "flex" : "none", zIndex: zIndex}
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
										apivm.h(Icon_default$1, {code: 59988, fontSize: "18", color: "#bbb"}),
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
			_defineProperty(_assertThisInitialized(_this4), "css", function() {
				return "\n      .adm-popup {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n      .adm-popup-body {\n        position: absolute;\n        background-color: #fff;\n      }\n      .adm-popup-body-position-bottom {\n        width: 100%;\n        bottom: 0;\n        left: 0;\n        border-radius: 12px 12px 0 0;\n      }\n      .adm-popup-body-position-top {\n        width: 100%;\n        top: 0;\n        left: 0;\n        border-radius: 0 0 12px 12px;\n      }\n      .adm-popup-body-position-left {\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n      .adm-popup-body-position-right {\n        height: 100%;\n        top: 0;\n        right: 0;\n      }\n      .adm-popup-title {\n        display: flex;\n        flex-direction: row;\n        height: 50px;\n        align-items: center;\n        padding: 0 16px;\n      }\n      .adm-popup-title-con {\n        flex: 1;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-popup-title-text {\n        text-align: center;\n        font-size: 16px;\n        color: #333330;\n        font-weight: 500;\n        margin-right: 6px;\n      }\n      .adm-popup-title-back {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n      }\n      .adm-popup-title-back-text {\n        font-size: 15px;\n        color: #BBBBBB;\n        padding-left: 8px;\n      }\n      .adm-popup-footer {\n        position: absolute;\n        bottom: 8px;\n        width: 100%;\n        height: 44px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .adm-popup-footer-btn {\n        width: 95%;\n        height: 44px;\n        background: #9AC200;\n        border-radius: 4px;\n        color: #fff;\n        border: none;\n      }\n    ";
			});
			return _this4;
		}
		return Popup;
	})(Component);

	// packages/avm-ui/src/components/dropdown/dropdown.tsx
	var classPrefix4 = "adm-dropdown";
	var defaultProps3 = {
		defaultActiveKey: null,
		closeOnMaskClick: true,
		closeOnClickAway: true,
		activeKey: "",
		arrow: apivm.h(Icon$2, {code: 59948})
	};

	var Dropdown = /*#__PURE__*/ (function(_Component5) {
		_inheritsLoose(Dropdown, _Component5);
		function Dropdown() {
			var _this5;
			for (
				var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
				_key5 < _len5;
				_key5++
			) {
				args[_key5] = arguments[_key5];
			}
			_this5 = _Component5.call.apply(_Component5, [this].concat(args)) || this;
			_defineProperty(_assertThisInitialized(_this5), "data", {
				visible: false,
				children: [],
				activeKey: _this5.props.activeKey || _this5.props.defaultActiveKey,
				list: [],
				isActived: true
			});
			_defineProperty(
				_assertThisInitialized(_this5),
				"setVisible",

				function(v, key) {
					if (key === _this5.data.activeKey) {
						_this5.data.visible = false;
						_this5.data.activeKey = "";
					} else {
						_this5.props.onChange == null ? void 0 : _this5.props.onChange(key);
						_this5.props.children.forEach(function(item) {
							if (item.key === key) {
								_this5.data.list = item.children;
							}
						});
						_this5.data.visible = v;
						_this5.data.activeKey = key;
					}
				}
			);
			_defineProperty(_assertThisInitialized(_this5), "render", function(props) {
				props = mergeProps$1(defaultProps3, props);
				console.log(props, 123123123);
				var _props = props,
					children = _props.children;
				if (props.activeKey && _this5.data.isActived) {
					_this5.data.visible = true;
					_this5.data.isActived = false;
					_this5.props.children.forEach(function(item) {
						if (item.key === _this5.data.activeKey) {
							_this5.data.list = item.children;
						}
					});
				} else if (props.defaultActiveKey && _this5.data.isActived) {
					_this5.data.visible = true;
					_this5.data.isActived = false;
					_this5.props.children.forEach(function(item) {
						if (item.key === _this5.data.activeKey) {
							_this5.data.list = item.children;
						}
					});
				}
				_this5.data.children = children;
				return apivm.h(
					"div",
					{className: "container"},
					apivm.h(
						"div",
						{className: classPrefix4},
						children.map(function(item) {
							var _classNames, _classNames2;
							return apivm.h(
								"div",
								_extends({}, item.attributes, {
									className: classPrefix4 + "-item",
									onClick: _this5.setVisible.bind(
										_assertThisInitialized(_this5),
										true,
										item.key
									)
								}),
								apivm.h(
									"span",
									{
										className: classNames(
											classPrefix4 + "-default",
											((_classNames = {}),
											(_classNames[classPrefix4 + "-active"] =
												item.key === _this5.data.activeKey),
											(_classNames[classPrefix4 + "-default"] =
												item.key !== _this5.data.activeKey),
											_classNames)
										)
									},
									item.attributes.title
								),
								apivm.h(
									"div",
									{
										className: classNames(
											"",
											((_classNames2 = {}),
											(_classNames2["container-icon"] =
												item.key === _this5.data.activeKey),
											(_classNames2["default-icon"] = item.key !== _this5.data.activeKey),
											_classNames2)
										)
									},
									props.arrow
								)
							);
						})
					),
					apivm.h(
						Popup,
						{
							isTitle: false,
							className: "pop",
							visible: _this5.data.visible,
							position: "top",
							onMaskClick: function onMaskClick() {
								if (props.closeOnMaskClick && props.closeOnClickAway) {
									_this5.setVisible(false, "");
									_this5.data.list = [];
									_this5.data.visible = false;
								}
							}
						},
						apivm.h(
							DropdownItem,
							{
								className: classPrefix4 + "-item",
								onClick: _this5.setVisible.bind(_assertThisInitialized(_this5), true)
							},
							_this5.data.list
						)
					)
				);
			});
			_defineProperty(_assertThisInitialized(_this5), "css", function() {
				return '\n    :root {\n      --adm-color-primary: #9AC200;\n      --adm-color-success: #7FA000;\n      --adm-color-warning: #FFA600;\n      --adm-color-danger: #FA6400;\n      --adm-color-white: #ffffff;\n      --adm-color-weak: #999999;\n      --adm-color-light: #cccccc;\n      --adm-border-color: #eeeeee;\n      --adm-font-size-main: 13px;\n      --adm-color-text: #333333;\n      --adm-font-family:\n        -apple-system,\n        blinkmacsystemfont,\n        "Helvetica Neue",\n        helvetica,\n        segoe ui,\n        arial,\n        roboto,\n        "PingFang SC",\n        "miui",\n        "Hiragino Sans GB",\n        "Microsoft Yahei",\n        sans-serif;\n    }\n    .container {\n      position: relative;\n      width: 100%;\n      height: 100%;\n    }\n    .pop {\n      position: absolute;\n      width: 100%;\n      top: 50px;\n      height: 100%;\n    }\n    .adm-dropdown {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      border-top: 1px solid var(--adm-border-color);\n      border-bottom: 1px solid var(--adm-border-color);\n    }\n    .adm-dropdown-item {\n      flex: 1;\n      flex-direction: row;\n      padding: 12px;\n      justify-content: center;\n      align-items: center;\n      font-size: 13px;\n      cursor: pointer;\n    }\n    .adm-dropdown-default {\n      color: #000;\n    }\n    .adm-dropdown-active {\n      color: #9AC200;\n    }\n    .adm-dropdown .container-icon {\n      transform: rotate(180deg) translateY(0px);\n      transition: all 0.2s ease;\n    }\n    .adm-dropdown .adm-icon {\n      font-size: 8px;\n    }\n    .adm-dropdown .default-icon {\n      transition: all 0.2s ease;\n      transform: rotate(0deg) translateY(1px);\n    }\n    .adm-popup {\n      top: 50px;\n    }\n    .adm-popup-body-position-top {\n      padding: 12px;\n    }\n    \n\n    .adm-mask {\n      --z-index: var(--adm-mask-z-index, 1000);\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      z-index: var(--z-index);\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    .adm-mask-aria-button {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .adm-mask-content {\n      height: 100%;\n      z-index: 1;\n    }\n    \n    .adm-popup {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .adm-popup-body {\n      position: absolute;\n      background-color: #fff;\n    }\n    .adm-popup-body-position-bottom {\n      width: 100%;\n      bottom: 0;\n      left: 0;\n    }\n    .adm-popup-body-position-top {\n      width: 100%;\n      top: 0;\n      left: 0;\n    }\n    .adm-popup-body-position-left {\n      height: 100%;\n      top: 0;\n      left: 0;\n    }\n    .adm-popup-body-position-right {\n      height: 100%;\n      top: 0;\n      right: 0;\n    }\n    \n    ';
			});
			return _this5;
		}
		return Dropdown;
	})(Component);
	avm.define("avm-dropdown", Dropdown);
	avm.define("avm-dropdown-item", DropdownItem);

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

	var DemoDivider = /*@__PURE__*/ (function(Component) {
		function DemoDivider(props) {
			Component.call(this, props);
		}

		if (Component) DemoDivider.__proto__ = Component;
		DemoDivider.prototype = Object.create(Component && Component.prototype);
		DemoDivider.prototype.constructor = DemoDivider;
		DemoDivider.prototype.back = function() {
			api.closeWin();
		};
		DemoDivider.prototype.render = function() {
			return apivm.h(
				"safe-area",
				null,
				apivm.h(nav_bar_default, {onBack: this.back}, "avm-dropdown"),

				apivm.h(
					DemoBlock,
					{title: "一列", padding: "0"},
					apivm.h(
						"avm-dropdown",
						null,
						apivm.h(
							"avm-dropdown-item",
							{key: "sorter", title: "排序"},

							apivm.h(
								space_default,
								{direction: "vertical", block: true},
								apivm.h(radio_default, {block: true, value: "default"}, "综合排序"),
								apivm.h(radio_default, {block: true, value: "nearest"}, "距离最近"),
								apivm.h(radio_default, {block: true, value: "top-rated"}, "评分最高")
							)
						)
					)
				),

				apivm.h(
					DemoBlock,
					{title: "两列", padding: "0"},
					apivm.h(
						"avm-dropdown",
						null,
						apivm.h(
							"avm-dropdown-item",
							{key: "sorter", title: "排序"},
							apivm.h(
								"div",
								{style: "padding: 12px"},
								apivm.h("span", null, "排序内容"),
								apivm.h("span", null, "排序内容"),
								apivm.h("span", null, "排序内容")
							)
						),
						apivm.h(
							"avm-dropdown-item",
							{key: "bizop", title: "商机筛选"},
							apivm.h(
								"div",
								{style: "padding: 12px"},
								apivm.h("span", null, "商机筛选内容"),
								apivm.h("span", null, "商机筛选内容"),
								apivm.h("span", null, "商机筛选内容")
							)
						)
					)
				),
				apivm.h(
					DemoBlock,
					{title: "自定义arrow", padding: "0"},
					apivm.h(
						"avm-dropdown",
						{arrow: apivm.h("avm-icon", {name: "StarFill", fontSize: 12})},
						apivm.h(
							"avm-dropdown-item",
							{key: "sorter", title: "排序"},
							apivm.h(
								"div",
								{style: "padding: 12px"},
								apivm.h("span", null, "排序内容"),
								apivm.h("span", null, "排序内容"),
								apivm.h("span", null, "排序内容")
							)
						),
						apivm.h(
							"avm-dropdown-item",
							{key: "bizop", title: "商机筛选"},
							apivm.h(
								"div",
								{style: "padding: 12px"},
								apivm.h("span", null, "商机筛选内容"),
								apivm.h("span", null, "商机筛选内容"),
								apivm.h("span", null, "商机筛选内容")
							)
						),
						apivm.h(
							"avm-dropdown-item",
							{key: "more", title: "更多筛选"},
							apivm.h(
								"div",
								{style: "padding: 12px"},
								apivm.h("span", null, "更多筛选内容"),
								apivm.h("span", null, "更多筛选内容")
							)
						)
					)
				)
			);
		};

		return DemoDivider;
	})(Component);
	DemoDivider.csslink = [
		"../../components/avm-ui/space/index.css",
		"../../components/avm-ui/nav-bar/index.css",
		"../../components/avm-ui/radio/index.css",
		"../../components/avm-ui/avm-dropdown/index.css",
		"../../components/avm-ui/demos/index.css"
	];
	apivm.define("demo-divider", DemoDivider);
	apivm.render(apivm.h("demo-divider", null), "body");
})();
