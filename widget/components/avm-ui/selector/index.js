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

// packages/avm-ui/src/utils/with-default-props.tsx
function mergeProps(defaultProps3, props) {
  return Object.assign({}, defaultProps3, props);
}

// packages/avm-ui/src/components/space/space.tsx
var classPrefix = `adm-space`;
var defaultProps = {
  direction: "horizontal",
  gap: "8px",
  style: {}
};
var Space = class extends Component {
  render = (props) => {
    props = mergeProps(defaultProps, props);
    const { direction, gap, gapHorizontal, gapVertical } = props;
    const itemStyles = {};
    const gaps = direction === "horizontal" ? gapHorizontal || gap : gapVertical || gap;
    itemStyles[direction === "horizontal" ? "marginRight" : "marginBottom"] = gaps;
    if (props.wrap && direction === "horizontal") {
      itemStyles["paddingBottom"] = gapVertical || gap;
    }
    return <div className={classNames(classPrefix, {
      [`${classPrefix}-wrap`]: props.wrap,
      [`${classPrefix}-${direction}-wrap`]: props.wrap,
      [`${classPrefix}-block`]: props.block,
      [`${classPrefix}-${direction}`]: true,
      [`${classPrefix}-align-${props.align}`]: !!props.align,
      [`${classPrefix}-justify-${props.justify}`]: !!props.justify
    })} {...props}>{props.children.map((child, index) => {
      return child !== null && child !== void 0 && <div className={classNames(`${classPrefix}-item`, `${classPrefix}-${direction}-item`, {
        [`${classPrefix}-${direction}-item-last`]: index === props.children.length - 1,
        [`${classPrefix}-${direction}-wrap-item`]: props.wrap
      })} style={itemStyles}>{child}</div>;
    })}</div>;
  };
  css = () => {
    return `
    .adm-space-item {
      flex: none;
    }
    .adm-space {
      display: inline-flex;
    }
    .adm-space-wrap {
      flex-wrap: wrap;
    }
    .adm-space-vertical {
      flex-direction: column;
    }
    .adm-space-vertical-item-last {
      margin-bottom: 0;
    }
    .adm-space-horizontal {
      flex-direction: row;
    }
    .adm-space-horizontal-item-last {
      margin-right: 0;
    }
    .adm-space-horizontal-wrap {
      flex-wrap: wrap;
    }
    .adm-space-align-center {
      align-items: center;
    }
    .adm-space-align-start {
      align-items: flex-start;
    }
    .adm-space-align-end {
      align-items: flex-end;
    }
    .adm-space-align-baseline {
      align-items: baseline;
    }
    .adm-space-justify-center {
      justify-content: center;
    }
    .adm-space-justify-start {
      justify-content: flex-start;
    }
    .adm-space-justify-end {
      justify-content: flex-end;
    }
    .adm-space-justify-between {
      justify-content: space-between;
    }
    .adm-space-justify-around {
      justify-content: space-around;
    }
    .adm-space-justify-evenly {
      justify-content: space-evenly;
    }
    .adm-space-justify-stretch {
      justify-content: stretch;
    }
    .adm-space-block {
      display: flex;
    }
    `;
  };
};

// packages/avm-ui/src/components/space/index.ts
var Space_default = Space;
avm.define("avm-space", Space);

// packages/avm-ui/src/utils/attach-properties-to-component.ts
function attachPropertiesToComponent(component, properties) {
  const ret = component;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }
  return ret;
}

// packages/avm-ui/src/utils/to-css-length.ts
function toCSSLength(val) {
  return typeof val === "number" ? `${val}px` : val;
}

// packages/avm-ui/src/components/grid/grid.tsx
var classPrefix2 = `adm-grid`;
var Grid = class extends Component {
  render = (props) => {
    const { gap = 0, columns } = props;
    const baseWidth = (100 / Number(columns)).toFixed(2);
    const columnGap = Array.isArray(gap) ? toCSSLength(gap[0]) : toCSSLength(gap);
    const rowGap = Array.isArray(gap) ? toCSSLength(gap[1]) : toCSSLength(gap);
    return <div className={classPrefix2}>{props.children.map((item, index) => {
      return <GridItem {...item.attributes} baseWidth={baseWidth} columnGap={columnGap} rowGap={rowGap} className={`${classPrefix2}-item`} columns={columns} curIndex={index + 1}>{item}</GridItem>;
    })}</div>;
  };
  css = () => {
    return `
      .adm-grid {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex-wrap: wrap;
      }
    `;
  };
};
var GridItem = class extends Component {
  render = (props) => {
    props = Object.assign({}, { span: 1 }, props);
    const itemStyle = {
      width: props.baseWidth ? `${Number(props.baseWidth) * Number(props.span)}%` : "auto"
    };
    return <div style={itemStyle} onClick={() => {
      props.handleClick && props.handleClick();
    }}>{props.children}</div>;
  };
};

// packages/avm-ui/src/components/grid/index.ts
var Grid_default = attachPropertiesToComponent(Grid, {
  Item: GridItem
});
avm.define("avm-grid", Grid);
avm.define("avm-grid-item", GridItem);

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
var classPrefix3 = `adm-icon`;
var Icon = class extends Component {
  css = () => {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/avm-ui/icon/${fontName}.ttf') format('truetype');}
        .${classPrefix3} {font-family: ${fontName};}`;
  };
  render = (props) => {
    let name = props.name || props.type;
    if (/\d/.test(name)) {
      name.replace(/(\d)/);
    }
    const char = props.code ? String.fromCharCode(props.code) || props.children : icons[name];
    return <text style={{ ...props }} class={`${classPrefix3} ${classPrefix3}-font-icon-text ${props.class || props.className || ""}`}>{char}</text>;
  };
};
Icon = __decorateClass([
  tag("avm-icon")
], Icon);

// packages/avm-ui/src/components/selector/selector.tsx
var classPrefix4 = `adm-selector`;
var defaultProps2 = {
  multiple: false,
  defaultValue: [],
  checkedColor: "#9AC200",
  checkedBgColor: "#e7f1ff"
};
var Selector = class extends Component {
  data = {
    value: this.props.value || this.props.defaultValue
  };
  setValue = (val) => {
    this.data.value = val;
    const extend = this.props.options.filter((option) => val.includes(option.value));
    this.props.handleChange && this.props.handleChange(val, extend);
  };
  render = (props) => {
    props = Object.assign({}, defaultProps2, props);
    const activeStyles = {};
    activeStyles["color"] = props.checkedColor;
    activeStyles["background"] = props.checkedBgColor;
    const items = props.options.map((option) => {
      const active = (this.data.value || []).includes(option.value);
      const disabled = option.disabled || props.disabled;
      const itemCls = classNames(`${classPrefix4}-item`, {
        [`${classPrefix4}-item-active`]: active && !props.multiple,
        [`${classPrefix4}-item-multiple-active`]: active && props.multiple,
        [`${classPrefix4}-item-disabled`]: disabled
      });
      return <div key={option.value} className={itemCls} style={active ? activeStyles : { background: "#f5f5f5" }} onClick={() => {
        if (disabled) {
          return;
        }
        if (props.multiple) {
          const val = active ? this.data.value.filter((v) => v !== option.value) : [...this.data.value, option.value];
          this.setValue(val);
        } else {
          const val = active ? [] : [option.value];
          this.setValue(val);
        }
      }}>
        <span className={`${classPrefix4}-label`} style={{ color: active ? props.checkedColor : "#666" }}>{option.label}</span>
        {active && <div className={`${classPrefix4}-check-mark-wrapper`}><Icon name="CheckOutline" fontSize={9} className={`${classPrefix4}-check-mark-wrapper-img`} /></div>}
      </div>;
    });
    return <div className={classPrefix4}>
      {!props.columns && <Space_default wrap style="padding:8px 8px 0;">{items}</Space_default>}
      {props.columns && <Grid_default columns={props.columns} gap={8}>{items}</Grid_default>}
    </div>;
  };
  css = () => {
    return `
      .adm-selector-item {
        padding: 0 20px;
        width: auto;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        opacity: 1;
        cursor: pointer;
        text-align: center;
        position:relative;
        overflow:hidden;
      }
      .adm-selector-item-disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      .adm-selector-label {
        font-size: 16px;
      }
      .adm-selector-check-mark-wrapper {
        align-self: flex-end;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-top: solid 8px transparent;
        border-bottom: solid 8px #9AC200;
        border-left: solid 10px transparent;
        border-right: solid 10px #9AC200;
      }
      .adm-selector-check-mark-wrapper-img {
       position: absolute;
    left: 0;
    top: -2px;
    color: #fff;
      }
    `;
  };
};

// packages/avm-ui/src/components/selector/index.ts
var selector_default = Selector;
avm.define("avm-selector", Selector);
export {
  selector_default as default
};
