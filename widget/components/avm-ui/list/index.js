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

// packages/avm-ui/src/components/list/list.tsx
var classPrefix = `adm-list`;
var defaultProps = {
  mode: "default"
};
var List = class extends Component {
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    return <div className={`${classPrefix} ${classPrefix}--${props.mode}`}>
      {props.header && <text className={`${classPrefix}-header`}>{props.header}</text>}
      <div className={classNames(classPrefix + "--inner", `${classPrefix}--inner__${props.mode}`)}>{props.children}</div>
    </div>;
  };
  css = () => {
    return `
      .adm-list {
        overflow: hidden;
        font-size: 17px;
      }
      
      .adm-list-header {
        color: #999;
        font-size: 15px;
        padding: 8px 12px;
      }
      
      .adm-list--inner {
        background-color: #ffffff;
        margin-bottom: -1px;
      }
      .adm-list--default {
        border: solid 1px #eee;
        border-right: none;
        border-left: none;
      }
      .adm-list--card {
        margin: 12px;
      }
      .adm-list--inner__card {
        border-radius: 8px;
      }
      .adm-list-item {
        width: 100%;
        display: block;
        padding-left: 12px;
      }
      .adm-list-item-title {
        font-size: 14px;
        color: #333;
        padding-bottom: 8px;
      }
      .adm-list-item-title-active {
        color: #9AC200;
      }
      .adm-list-item-description {
        color: #999;
        font-size: 12px;
        padding-top: 8px;
      }
      .adm-list-item-children {
        font-size: 16px;
        color: #333;
      }
      .adm-list-item-children-active {
        color: #9AC200;
      }
      .adm-list-item-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 12px 12px 12px 0;
        border-bottom: solid 1px #e8e8e8;
      }
      .adm-list-item-content-prefix {
        padding-right: 12px;
      }
      .adm-list-item-content-main {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .adm-list-item-content-extra {
        padding-left: 12px;
        color: #999;
        font-size: 16px;
      }
      .adm-list-item-content-arrow {
        display: flex;
        align-items: center;
        padding-left: 12px;
        font-size: 16px;
        color: #999;
      }
      .adm-list-item-content-arrow span {
        font-size: 16px;
      }
      .list-disabled {
        cursor: not-allowed;
        opacity: 0.3;
        pointer-events: none;
      }
    `;
  };
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

// packages/avm-ui/src/components/list/list-item.tsx
var classPrefix3 = `adm-list-item`;
var ListItem = class extends Component {
  render = (props) => {
    const active = props.active || false;
    const clickable = props.clickable ?? !!props.handleClick;
    const arrow = props.arrow === void 0 ? clickable : props.arrow;
    const prefixWidth = !!props.prefixWidth ? props.prefixWidth : "auto";
    const disabledClass = props.disabled && "list-disabled";
    const childCls = classNames(`${classPrefix3}-children`, {
      [`${classPrefix3}-children-active`]: active
    });
    const prefixCls = classNames(`${classPrefix3}-content-prefix`, disabledClass);
    const prefixStyles = { width: prefixWidth };
    const extraCls = classNames(`${classPrefix3}-content-extra`, disabledClass);
    const childEles = formatLabel(props.children, childCls);
    const prefixEles = formatLabel(props.prefix, prefixCls, prefixStyles);
    const extraEles = formatLabel(props.extra, extraCls);
    const content = <div className={`${classPrefix3}-content`}>
      {props.prefix && prefixEles}
      <div className={classNames(`${classPrefix3}-content-main`, disabledClass)}>
        {props.title && <span className={classNames(`${classPrefix3}-title`, {
          [`${classPrefix3}-title-active`]: active
        })}>{props.title || "\u5355\u5143\u683C"}</span>}
        {childEles}
        {props.description && <span className={`${classPrefix3}-description`}>{props.description}</span>}
      </div>
      {props.extra && extraEles}
      {arrow && <div className={classNames(`${classPrefix3}-content-arrow`, disabledClass)}>{arrow === true ? <Icon code={60019} color={`${active ? "#9AC200" : "#666"}`} /> : arrow}</div>}
    </div>;
    const listItemCls = classNames(`${classPrefix3}`, clickable ? ["adm-plain-anchor"] : [], props.disabled && `${classPrefix3}-disabled`);
    const listItemEvent = props.disabled ? void 0 : props.handleClick;
    return <div className={listItemCls} onClick={listItemEvent}>{content}</div>;
  };
};

// packages/avm-ui/src/utils/attach-properties-to-component.ts
function attachPropertiesToComponent(component, properties2) {
  const ret = component;
  for (const key in properties2) {
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
export {
  list_default as default
};
