var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// packages/avm-ui/src/utils/shuffle.ts
function shuffle(array) {
  const result = [...array];
  for (let i = result.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [result[i - 1], result[j]] = [result[j], result[i - 1]];
  }
  return result;
}

// packages/avm-ui/src/utils/with-default-props.tsx
function mergeProps(defaultProps4, props) {
  return Object.assign({}, defaultProps4, props);
}

// packages/avm-ui/src/utils/use-should-render.tsx
function useShouldRender(active, forceRender, destroyOnClose) {
  const initialized = active;
  if (forceRender)
    return true;
  if (active)
    return true;
  if (!initialized)
    return false;
  return !destroyOnClose;
}

// packages/avm-ui/src/components/mask/mask.tsx
var classPrefix = `adm-mask`;
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
var Mask = class extends Component {
  render = (p) => {
    const props = mergeProps(defaultProps, p);
    const opacity = opacityRecord[props.opacity] ?? props.opacity;
    const rgb = props.color === "white" ? "255, 255, 255" : "0, 0, 0";
    const background = `rgba(${rgb}, ${opacity})`;
    const shouldRender = useShouldRender(props.visible, props.forceRender, props.destroyOnClose);
    return <div className={classPrefix} style={{
      ...props.style,
      background,
      display: props.visible ? "flex" : "none"
    }}>
      {props.onMaskClick && <div className={`${classPrefix}-aria-button`} role="button" aria-label="Mask" onClick={props.onMaskClick} />}
      <div className={`${classPrefix}-content`} onClick={props.onMaskClick}>{shouldRender && props.children}</div>
    </div>;
  };
  css = () => {
    return `:root {
      --adm-color-primary: #9AC200;
      --adm-color-success: #7FA000;
      --adm-color-warning: #FFA600;
      --adm-color-danger: #FA6400;
      --adm-color-white: #ffffff;
      --adm-color-weak: #999999;
      --adm-color-light: #cccccc;
      --adm-border-color: #eeeeee;
      --adm-font-size-main: 13px;
      --adm-color-text: #333333;
      --adm-font-family:
        -apple-system,
        blinkmacsystemfont,
        "Helvetica Neue",
        helvetica,
        segoe ui,
        arial,
        roboto,
        "PingFang SC",
        "miui",
        "Hiragino Sans GB",
        "Microsoft Yahei",
        sans-serif;
    }
    .adm-mask {
      --z-index: var(--adm-mask-z-index, 1000);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: var(--z-index);
      display: block;
      width: 100%;
      height: 100%;
    }
    .adm-mask-aria-button {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .adm-mask-content {
      height: 100%;
      z-index: 1;
    }`;
  };
};

// packages/avm-ui/src/components/mask/index.ts
var Mask_default = Mask;
avm.define("avm-mask", Mask);

// packages/avm-ui/src/utils/format-label.tsx
var checkLabelType = (ele) => {
  return Object.prototype.toString.call(ele);
};
var formatLabel = (ele, cls, style = {}) => {
  if (checkLabelType(ele) === "[object Array]") {
    return ele.map((el) => {
      return formatLabel(el, cls, style);
    });
  }
  return checkLabelType(ele) === "[object String]" ? <span className={cls} style={style}>{ele}</span> : <div className={cls} style={style}>{ele}</div>;
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
var icons = { AaOutline: "\uEA01", AddCircleOutline: "\uEA02", AddOutline: "\uEA03", AddSquareOutline: "\uEA04", AddressBookFill: "\uEA05", AlipayCircleFill: "\uEA06", AlipaySquareFill: "\uEA07", AntOutline: "\uEA08", ApiCloudlogo: "\uEA09", AppOutline: "\uEA0A", AppstoreOutline: "\uEA0B", ArrowDownCircleOutline: "\uEA0C", ArrowsAltOutline: "\uEA0D", AudioFill: "\uEA0E", AudioMutedOutline: "\uEA0F", AudioOutline: "\uEA10", BankcardOutline: "\uEA11", BellMuteOutline: "\uEA12", BellOutline: "\uEA13", BillOutline: "\uEA14", CalculatorOutline: "\uEA15", CalendarOutline: "\uEA16", CameraOutline: "\uEA17", ChatAddOutline: "\uEA18", ChatCheckOutline: "\uEA19", ChatWrongOutline: "\uEA1A", CheckCircleFill: "\uEA1B", CheckCircleOutline: "\uEA1C", CheckOutline: "\uEA1D", CheckShieldFill: "\uEA1E", CheckShieldOutline: "\uEA1F", ClockCircleFill: "\uEA20", ClockCircleOutline: "\uEA21", CloseCircleFill: "\uEA22", CloseCircleOutline: "\uEA23", CloseOutline: "\uEA24", CloseShieldOutline: "\uEA25", CollectMoneyOutline: "\uEA26", CompassOutline: "\uEA27", ContentOutline: "\uEA28", CouponOutline: "\uEA29", DeleteOutline: "\uEA2A", DownCircleOutline: "\uEA2B", DownFill: "\uEA2C", DownOutline: "\uEA2D", DownlandOutline: "\uEA2E", EditFill: "\uEA2F", EditSFill: "\uEA30", EditSOutline: "\uEA31", EnvironmentOutline: "\uEA32", ExclamationCircleFill: "\uEA33", ExclamationCircleOutline: "\uEA34", ExclamationOutline: "\uEA35", ExclamationShieldFill: "\uEA36", ExclamationShieldOutline: "\uEA37", ExclamationTriangleOutline: "\uEA38", EyeFill: "\uEA39", EyeInvisibleFill: "\uEA3A", EyeInvisibleOutline: "\uEA3B", EyeOutline: "\uEA3C", FaceRecognitionOutline: "\uEA3D", FileOutline: "\uEA3E", FileWrongOutline: "\uEA3F", FillinOutline: "\uEA40", FilterOutline: "\uEA41", FingerdownOutline: "\uEA42", FireFill: "\uEA43", FlagOutline: "\uEA44", FolderOutline: "\uEA45", ForbidFill: "\uEA46", FrownFill: "\uEA47", FrownOutline: "\uEA48", GiftOutline: "\uEA49", GlobalOutline: "\uEA4A", HandPayCircleOutline: "\uEA4B", HeartFill: "\uEA4C", HeartOutline: "\uEA4D", HistogramOutline: "\uEA4E", InformationCircleFill: "\uEA4F", InformationCircleOutline: "\uEA50", KeyOutline: "\uEA51", KoubeiFill: "\uEA52", KoubeiOutline: "\uEA53", LeftOutline: "\uEA54", LikeOutline: "\uEA55", LinkOutline: "\uEA56", LocationFill: "\uEA57", LocationOutline: "\uEA58", LockFill: "\uEA59", LockOutline: "\uEA5A", LoopOutline: "\uEA5B", MailFill: "\uEA5C", MailOpenOutline: "\uEA5D", MailOutline: "\uEA5E", MessageFill: "\uEA5F", MessageOutline: "\uEA60", MinusCircleOutline: "\uEA61", MinusOutline: "\uEA62", MoreOutline: "\uEA63", MovieOutline: "\uEA64", PayCircleOutline: "\uEA65", PhoneFill: "\uEA66", PhonebookFill: "\uEA67", PhonebookOutline: "\uEA68", PictureOutline: "\uEA69", PictureWrongOutline: "\uEA6A", PicturesOutline: "\uEA6B", PieOutline: "\uEA6C", PlayOutline: "\uEA6D", QuestionCircleFill: "\uEA6E", QuestionCircleOutline: "\uEA6F", ReceiptOutline: "\uEA70", ReceivePaymentOutline: "\uEA71", RedoOutline: "\uEA72", RightOutline: "\uEA73", ScanCodeOutline: "\uEA74", ScanningFaceOutline: "\uEA75", ScanningOutline: "\uEA76", SearchOutline: "\uEA77", SendOutline: "\uEA78", SetOutline: "\uEA79", ShopbagOutline: "\uEA7A", ShrinkOutline: "\uEA7B", SmileFill: "\uEA7C", SmileOutline: "\uEA7D", SoundMuteFill: "\uEA7E", SoundMuteOutline: "\uEA7F", SoundOutline: "\uEA80", StarFill: "\uEA81", StarOutline: "\uEA82", StopOutline: "\uEA83", SystemQRcodeOutline: "\uEA84", TagOutline: "\uEA85", TeamFill: "\uEA86", TeamOutline: "\uEA87", TextDeletionOutline: "\uEA88", TextOutline: "\uEA89", TransportQRcodeOutline: "\uEA8A", TravelOutline: "\uEA8B", TruckOutline: "\uEA8C", Uiwinbox: "\uEA8D", UndoOutline: "\uEA8E", UnlockOutline: "\uEA8F", UnorderedListOutline: "\uEA90", UpCircleOutline: "\uEA91", UpOutline: "\uEA92", UploadOutline: "\uEA93", UserAddOutline: "\uEA94", UserCircleOutline: "\uEA95", UserContactOutline: "\uEA96", UserOutline: "\uEA97", UserSetOutline: "\uEA98", VideoOutline: "\uEA99", Y1: "\uEA9A", Y10: "\uEA9B", Y11: "\uEA9C", Y12: "\uEA9D", Y13: "\uEA9E", Y14: "\uEA9F", Y15: "\uEAA0", Y16: "\uEAA1", Y17: "\uEAA2", Y18: "\uEAA3", Y19: "\uEAA4", Y2: "\uEAA5", Y20: "\uEAA6", Y21: "\uEAA7", Y22: "\uEAA8", Y23: "\uEAA9", Y24: "\uEAAA", Y25: "\uEAAB", Y26: "\uEAAC", Y27: "\uEAAD", Y28: "\uEAAE", Y29: "\uEAAF", Y3: "\uEAB0", Y30: "\uEAB1", Y31: "\uEAB2", Y32: "\uEAB3", Y33: "\uEAB4", Y34: "\uEAB5", Y35: "\uEAB6", Y36: "\uEAB7", Y37: "\uEAB8", Y38: "\uEAB9", Y39: "\uEABA", Y4: "\uEABB", Y40: "\uEABC", Y41: "\uEABD", Y42: "\uEABE", Y43: "\uEABF", Y44: "\uEAC0", Y45: "\uEAC1", Y46: "\uEAC2", Y47: "\uEAC3", Y48: "\uEAC4", Y49: "\uEAC5", Y5: "\uEAC6", Y50: "\uEAC7", Y51: "\uEAC8", Y52: "\uEAC9", Y53: "\uEACA", Y54: "\uEACB", Y55: "\uEACC", Y56: "\uEACD", Y57: "\uEACE", Y58: "\uEACF", Y59: "\uEAD0", Y6: "\uEAD1", Y60: "\uEAD2", Y61: "\uEAD3", Y62: "\uEAD4", Y63: "\uEAD5", Y64: "\uEAD6", Y65: "\uEAD7", Y66: "\uEAD8", Y67: "\uEAD9", Y68: "\uEADA", Y69: "\uEADB", Y7: "\uEADC", Y70: "\uEADD", Y71: "\uEADE", Y72: "\uEADF", Y73: "\uEAE0", Y74: "\uEAE1", Y75: "\uEAE2", Y76: "\uEAE3", Y77: "\uEAE4", Y78: "\uEAE5", Y79: "\uEAE6", Y8: "\uEAE7", Y80: "\uEAE8", Y81: "\uEAE9", Y82: "\uEAEA", Y83: "\uEAEB", Y84: "\uEAEC", Y85: "\uEAED", Y86: "\uEAEE", Y87: "\uEAEF", Y88: "\uEAF0", Y89: "\uEAF1", Y9: "\uEAF2", Y90: "\uEAF3" };

// packages/avm-ui/src/components/icon/icon.tsx
var classPrefix2 = `adm-icon`;
var Icon = class extends Component {
  css = () => {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/avm-ui/icon/${fontName}.ttf') format('truetype');}
        .${classPrefix2} {font-family: ${fontName};}`;
  };
  render = (props) => {
    let name = props.name || props.type;
    if (/\d/.test(name)) {
      name.replace(/(\d)/);
    }
    const char = props.code ? String.fromCharCode(props.code) || props.children : icons[name];
    return <text style={{ ...props }} class={`${classPrefix2} ${classPrefix2}-font-icon-text ${props.class || props.className || ""}`}>{char}</text>;
  };
};
Icon = __decorateClass([
  tag("avm-icon")
], Icon);

// packages/avm-ui/src/components/icon/index.ts
var Icon_default = Icon;

// packages/avm-ui/src/components/popup/popup.tsx
var classPrefix3 = `adm-popup`;
var defaultProps2 = {
  position: "bottom",
  visible: false,
  getContainer: () => document.body,
  mask: true,
  stopPropagation: ["click"],
  bodyStyle: {},
  isTitle: false,
  titleText: "\u6807\u9898"
};
var Popup = class extends Component {
  data = {
    visible: this.props.visible
  };
  setVisible = (visible) => {
    if (visible) {
      this.props.afterShow && this.props.afterShow();
    }
    this.data.visible = visible;
  };
  render = (props) => {
    this.props = Object.assign({}, defaultProps2, props);
    this.data.visible = props.visible;
    let {
      zIndex = 1e3,
      bodyClassName,
      position,
      forceRender = false,
      destroyOnClose = false,
      stopPropagation,
      handleClick,
      mask,
      maskClick,
      maskClassName,
      maskStyle,
      bodyStyle,
      children,
      isTitle,
      titleText,
      isBack,
      handleClose,
      handleBack,
      tipText,
      isFooterBtn,
      footBtnClick,
      bodyHeight,
      bodyWidth
    } = this.props;
    if (["top", "bottom"].includes(position)) {
      !bodyHeight && (bodyHeight = "375px");
      bodyStyle = { ...bodyStyle, height: bodyHeight };
    }
    if (["left", "right"].includes(position)) {
      !bodyWidth && (bodyWidth = "311px");
      bodyStyle = { ...bodyStyle, width: bodyWidth };
    }
    const bodyCls = classNames(`${classPrefix3}-body`, bodyClassName, `${classPrefix3}-body-position-${position}`);
    const shouldRender = useShouldRender(this.data.visible, forceRender, destroyOnClose);
    return <div className={classNames(classPrefix3, props.className)} onClick={() => {
      handleClick && handleClick();
    }} style={{ display: this.data.visible ? "flex" : "none", zIndex }}>
      {mask && <Mask_default visible={props.visible} onMaskClick={() => {
        maskClick && maskClick();
      }} className={maskClassName} style={maskStyle} disableBodyScroll={false} stopPropagation={stopPropagation} />}
      <div className={bodyCls} style={{
        ...bodyStyle,
        zIndex: zIndex + 10
      }}>
        {isTitle && <div className={`${classPrefix3}-title`}>
          {isBack && <div className={`${classPrefix3}-title-back`} onClick={() => {
            handleBack && handleBack();
          }}>
            <Icon_default code={59988} fontSize="18" color="#bbb" />
            <span className={`${classPrefix3}-title-back-text`}>{"\u8FD4\u56DE"}</span>
          </div>}
          <div className={`${classPrefix3}-title-con`}>
            <span className={`${classPrefix3}-title-text`}>{titleText}</span>
            {tipText && <div title={tipText}><Icon_default code={59940} fontSize="18" color="#bbb" /></div>}
          </div>
          <div onClick={() => {
            handleClose && handleClose();
          }}><Icon_default code={59940} fontSize="18" color="#bbb" /></div>
        </div>}
        {shouldRender && formatLabel(children)}
        {isFooterBtn && <div className={`${classPrefix3}-footer`}><button onClick={() => {
          footBtnClick && footBtnClick();
        }} className={`${classPrefix3}-footer-btn`}>{"\u786E\u5B9A"}</button></div>}
      </div>
    </div>;
  };
  css = () => {
    return `
      .adm-popup {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .adm-popup-body {
        position: absolute;
        background-color: #fff;
      }
      .adm-popup-body-position-bottom {
        width: 100%;
        bottom: 0;
        left: 0;
        border-radius: 12px 12px 0 0;
      }
      .adm-popup-body-position-top {
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 0 0 12px 12px;
      }
      .adm-popup-body-position-left {
        height: 100%;
        top: 0;
        left: 0;
      }
      .adm-popup-body-position-right {
        height: 100%;
        top: 0;
        right: 0;
      }
      .adm-popup-title {
        display: flex;
        flex-direction: row;
        height: 50px;
        align-items: center;
        padding: 0 16px;
      }
      .adm-popup-title-con {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .adm-popup-title-text {
        text-align: center;
        font-size: 16px;
        color: #333330;
        font-weight: 500;
        margin-right: 6px;
      }
      .adm-popup-title-back {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .adm-popup-title-back-text {
        font-size: 15px;
        color: #BBBBBB;
        padding-left: 8px;
      }
      .adm-popup-footer {
        position: absolute;
        bottom: 8px;
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .adm-popup-footer-btn {
        width: 95%;
        height: 44px;
        background: #9AC200;
        border-radius: 4px;
        color: #fff;
        border: none;
      }
    `;
  };
};

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
var NumberKeyboard = class extends Component {
  data = {
    popupBodyStyle: {
      background: "#f5f5f5"
    }
  };
  render = (props) => {
    props = Object.assign({}, defaultProps3, props);
    let {
      visible,
      getContainer,
      randomOrder,
      showCloseButton,
      handleInput,
      handleDelete,
      isShowClearBtn,
      type
    } = props;
    let confirmText;
    const keys = () => {
      const defaultKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const keyList = randomOrder ? shuffle(defaultKeys) : defaultKeys;
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
    const onKeyPress = (key) => {
      switch (key) {
        case "BACKSPACE":
          handleDelete?.();
          break;
        case "OK":
          props.handleConfirm?.();
          if (props.closeOnConfirm) {
            props.handleClose?.();
          }
          break;
        case "CLEAR":
          props.clearAll?.();
          break;
        default:
          handleInput?.(key);
          break;
      }
    };
    const renderKey = (key, index) => {
      const isNumberKey = /^\d$/.test(key);
      const keyCls = classNames(`${classPrefix4}-key`, {
        [`${classPrefix4}-key-number`]: isNumberKey,
        [`${classPrefix4}-key-sign`]: !isNumberKey && key,
        [`${classPrefix4}-key-mid`]: index === 9 && !!confirmText
      });
      return <div key={key} className={keyCls} onClick={() => key && onKeyPress(key)} title={key} role="button" style={{ marginRight: (index + 1) % 3 !== 0 ? "8px" : 0 }}>{key === "BACKSPACE" ? <Icon code={59931} /> : key === "CLOSE_KEYBOARD" ? <view className={`${classPrefix4}-key-text`} onClick={() => {
        props.handleClose?.();
      }}><Icon code={59931} /></view> : <span className={`${classPrefix4}-key-text`}>{key}</span>}</div>;
    };
    return <Popup_default visible={visible} getContainer={getContainer} mask={false} bodyHeight="auto" afterClose={props.afterClose} afterShow={props.afterShow} className={`${classPrefix4}-popup`} bodyStyle={this.data.popupBodyStyle}><div className={classPrefix4}><div className={`${classPrefix4}-wrapper`}>
      <div className={classNames(`${classPrefix4}-main`, {
        [`${classPrefix4}-confirmed-style`]: !!confirmText
      })}>
        {keys().map((key, index) => renderKey(key, index))}
        {type === "custom" && <div className={`${classPrefix4}-custom-keys`}>
          <span onClick={() => onKeyPress("0")} className={`${classPrefix4}-key-text-span2`}>0</span>
          {showCloseButton ? <view className={`${classPrefix4}-key-text-span1`} onClick={() => {
            props.handleClose?.();
          }}><Icon code={59931} /></view> : <span className={`${classPrefix4}-key-text-span1`} onClick={() => onKeyPress(".")}>.</span>}
        </div>}
      </div>
      {!!confirmText && <div className={`${classPrefix4}-confirm`}>
        {isShowClearBtn && <div className={`${classPrefix4}-key-extra ${classPrefix4}-key-clear`} onClick={() => onKeyPress("CLEAR")} title="CLEAR" role="button"><text className={`${classPrefix4}-key-clear-text`}>{"\u6E05\u7A7A"}</text></div>}
        <div className={classNames(`${classPrefix4}-key-extra`, `${classPrefix4}-key-bs`, {
          [`${classPrefix4}-key-bs-hasclear`]: isShowClearBtn
        })} onClick={() => onKeyPress("BACKSPACE")} title="BACKSPACE" role="button"><Icon code={59931} /></div>
        <div className={classNames(`${classPrefix4}-key-extra`, `${classPrefix4}-key-ok`, {
          [`${classPrefix4}-key-ok-hasclear`]: isShowClearBtn
        })} onClick={() => onKeyPress("OK")} role="button"><span className={`${classPrefix4}-key-ok-text`}>{confirmText}</span></div>
      </div>}
    </div></div></Popup_default>;
  };
  css = () => {
    return `
      .adm-number-keyboard {
        padding: 0 0 8px 8px;
        background: #f2f3f5;
        width: 100%;
      }
      .adm-number-keyboard-main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      }
      .adm-number-keyboard-confirmed-style {
        width: 75%;
      }
      .adm-number-keyboard-popup {
        width: 100%;
        user-select: none;
        z-index: 1050;
      }
      .adm-number-keyboard-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
      }
      .adm-number-keyboard-header {
        height: 34px;
        line-height: 34px;
        border-top: 1px solid #f5f5f5;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 12px;
        color: #999;
        background-color: #fff;
      }
      .adm-number-keyboard-header-close-button {
        padding: 0 12px;
        height: 34px;
        align-items: center;
        justify-content: center;
      }
      .adm-number-keyboard-header-with-title {
        justify-content: space-between;
      }
      .adm-number-keyboard-header-with-title-close-button {
        padding-right: 0;
      }
      .adm-number-keyboard-title {
        color: #999;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .adm-number-keyboard-confirm {
        width: 25%;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .adm-number-keyboard-key {
        width: 31.5%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        box-sizing: border-box;
        border-top: 1px solid #f5f5f5;
        border-right: 1px solid #f5f5f5;
        background: #f5f5f5;
        margin-top: 8px;
      }
      .adm-number-keyboard-key-text {
        font-size: 22px;
        align-items: center;
        justify-content: center;
      }
      .adm-number-keyboard-key-mid {
        width: 63%;
      }
      .adm-number-keyboard-key-sign {
        background: #fff;
        align-items: center;
        justify-content: center;
      }
      .adm-number-keyboard-key-sign:active {
        background-color: #f2f2f2;
      }
      .adm-number-keyboard-key-extra {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin-top: 8px;
        margin-left: 8px;
        margin-right: 8px;
      }
      .adm-number-keyboard-key-number {
        background-color: #fff;
      }
      .adm-number-keyboard-key-number:active {
        background-color: #f2f2f2;
      }
      .adm-number-keyboard-key-ok {
        display: inline-block;
        background-color: #9AC200;
        text-align: center;
        margin-top: 8px;
        align-items: center;
        justify-content: center;
        height: 104px;
      }
      .adm-number-keyboard-key-ok-text {
        color: #fff;
        font-size: 16px;
      }
      .adm-number-keyboard-key-bs {
        border-top: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        height: 104px;
      }
      .adm-number-keyboard-key-bs-hasclear {
        height: 48px;
      }
      .adm-number-keyboard-key-clear {
        height: 48px;
      }
      .adm-number-keyboard-key-clear-text {
        color: #333;
        font-size: 16px;
      }
      .adm-number-keyboard-custom-keys {
        flex-direction: row;
        width: 100%;
        height: auto;
      }
      .adm-number-keyboard-key-text-span2 {
        flex: 2;
        border-radius: 8px;
        height: 48px;
        background: #fff;
        margin-top: 8px;
        text-align: center;
        line-height: 48px;
        color: #333;
        font-size: 16px;
        margin-right: 8px;
      }
      .adm-number-keyboard-key-text-span1 {
        flex: 1;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        background: #fff;
        margin-top: 8px;
        line-height: 48px;
        text-align: center;
        color: #333;
        font-size: 16px;
        margin-right: 5px;
        margin-left: 1px;
      }
    `;
  };
};

// packages/avm-ui/src/components/number-keyboard/index.ts
var number_keyboard_default = NumberKeyboard;
avm.define("avm-number-keyboard", NumberKeyboard);
export {
  number_keyboard_default as default
};
