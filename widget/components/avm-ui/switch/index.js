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
var classPrefix = `adm-icon`;
var Icon = class extends Component {
  css = () => {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/avm-ui/icon/${fontName}.ttf') format('truetype');}
        .${classPrefix} {font-family: ${fontName};}`;
  };
  render = (props) => {
    let name = props.name || props.type;
    if (/\d/.test(name)) {
      name.replace(/(\d)/);
    }
    const char = props.code ? String.fromCharCode(props.code) || props.children : icons[name];
    return <text style={{ ...props }} class={`${classPrefix} ${classPrefix}-font-icon-text ${props.class || props.className || ""}`}>{char}</text>;
  };
};
Icon = __decorateClass([
  tag("avm-icon")
], Icon);

// packages/avm-ui/src/components/icon/index.ts
var Icon_default = Icon;

// packages/avm-ui/src/components/switch/switch.tsx
var classPrefix2 = `adm-switch`;
var formatPx = (str) => {
  return Number(str.replace("px", ""));
};
var defaultProps = {
  defaultChecked: false,
  checkedColor: "#9AC200",
  width: "44px",
  height: "26px",
  borderWidth: "2px"
};
var Switch = class extends Component {
  install = () => {
    this.props = Object.assign({}, defaultProps, this.props);
  };
  data = {
    changing: false,
    checked: this.props.checked || this.props.defaultChecked
  };
  setChanging = (state) => {
    this.data.changing = state;
  };
  setChecked = (check) => {
    this.data.checked = check;
    this.props.handleChange && this.props.handleChange(this.data.checked);
  };
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const { checkedColor, width, height, borderWidth } = props;
    const disabled = props.disabled || props.loading || false;
    const onClick = () => {
      if (disabled || props.loading || this.data.changing) {
        return;
      }
      this.setChanging(true);
      if (props.beforeChange) {
        try {
          const nextChecked = !this.data.checked;
          props.beforeChange(nextChecked);
          setTimeout(() => {
            this.setChecked(nextChecked);
            this.setChanging(false);
          }, 500);
        } catch (e) {
          this.setChanging(false);
          throw e;
        }
      } else {
        this.setChecked(!this.data.checked);
        this.setChanging(false);
      }
    };
    const checkboxStyle = {
      width,
      height,
      lineHeight: height,
      background: this.data.checked ? checkedColor : "#e8e8e8"
    };
    const handleSize = `${formatPx(props.height) - formatPx(borderWidth) * 2}px`;
    const handleStyle = {
      width: handleSize,
      height: handleSize,
      borderRadius: handleSize,
      top: borderWidth,
      left: this.data.checked ? `${formatPx(width) - formatPx(handleSize)}px` : borderWidth
    };
    const marginSize = `${formatPx(height) - formatPx(borderWidth) + 5}px`;
    const innerStyle = {
      lineHeight: height,
      margin: this.data.checked ? `0 ${marginSize} 0 10px` : `0 10px 0 ${marginSize}`
    };
    const innerCls = classNames(`${classPrefix2}-inner`, {
      [`${classPrefix2}-checked-inner`]: this.data.checked
    });
    return <div className={`${classPrefix2}-row`}><div onClick={onClick} className={classNames(classPrefix2, {
      [`${classPrefix2}-checked`]: this.data.checked,
      [`${classPrefix2}-disabled`]: disabled || this.data.changing
    })}><div className={classNames(`${classPrefix2}-checkbox`, {
      [`${classPrefix2}-checked-checkbox`]: this.data.checked
    })} style={checkboxStyle}>
      <div className={classNames(`${classPrefix2}-handle`, {
        [`${classPrefix2}-checked-handle`]: this.data.checked
      })} style={handleStyle}>{(props.loading || this.data.changing) && <Icon_default code={60045} className={`${classPrefix2}-icon`} color="#9AC200" />}</div>
      {formatLabel(this.data.checked ? props.checkedText : props.uncheckedText, innerCls, innerStyle)}
    </div></div></div>;
  };
  css = () => {
    return `
 
@keyframes loading-rotate {
    100% {
        transform: rotate(1turn);
    }
}

    .adm-switch-row{flex-flow:row;}
    .adm-switch {
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      align-self: center;
      cursor: pointer;
      opacity: 1;
    }
    .adm-switch input {
      display: none;
    }
    .adm-switch-checkbox {
      min-width: 45px;
      box-sizing: border-box;
      border-radius: 31px;
      z-index: 0;
      overflow: hidden;
    }
    .adm-switch-handle {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #fff;
      position: absolute;
      z-index: 0;
      box-shadow:
        0 0 2px 0 rgba(0, 0, 0, 0.2),
        0 2px 11.5px 0 rgba(0, 0, 0, 0.08),
        -1px 2px 2px 0 rgba(0, 0, 0, 0.1);
      transition: left 200ms;
    }
    .adm-switch-inner {
      position: relative;
      z-index: 1;
      color: #999;
      transition: margin 200ms;
      font-size:12px;
    }
    .adm-switch-checked-inner {
      color: #FFF;
    }
    .adm-switch-disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
    .adm-switch-icon {
      width: 16px;
      height: 16px;
      font-size:16px;
      line-height:16px;
      animation: loading-rotate 1s linear infinite;
    }
    `;
  };
};

// packages/avm-ui/src/components/switch/index.ts
var switch_default = Switch;
avm.define("avm-switch", Switch);
export {
  switch_default as default
};
