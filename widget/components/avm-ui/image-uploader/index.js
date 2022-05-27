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

// packages/avm-ui/src/utils/with-default-props.tsx
function mergeProps(defaultProps5, props) {
  return Object.assign({}, defaultProps5, props);
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

// packages/avm-ui/src/utils/get-container.ts
function resolveContainer(getContainer) {
  const container = typeof getContainer === "function" ? getContainer() : getContainer;
  return container || document.body;
}

// packages/avm-ui/src/utils/can-use-dom.ts
var canUseDom = !!(typeof window !== "undefined" && typeof document !== "undefined" && window.document && window.document.createElement);

// packages/avm-ui/src/utils/render-to-container.ts
function renderToContainer(getContainer, node) {
  if (canUseDom && getContainer) {
    const container = resolveContainer(getContainer);
    avm.render(node, container);
    return;
  }
  return node;
}

// packages/avm-ui/src/components/image-viewer/slide.tsx
var classPrefix2 = `adm-image-viewer`;
var Slide = class extends Component {
  data = {
    zoom: this.props.zoom || 1,
    touchTime: new Date()
  };
  touchEnd() {
    const delayTime = new Date().getTime() - this.data.touchTime.getTime();
    if (delayTime < 300) {
      this.props.onTap();
    }
  }
  render = (props) => {
    const { zoom } = this.data;
    return <div className={`${classPrefix2}-slide`} onTouchMove={(e) => {
      e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    }}><div className={`${classPrefix2}-control`}><div className={`${classPrefix2}-image-wrapper`} style={`transform: scale(${zoom});`} ontouchstart={() => {
      this.data.touchTime = new Date();
    }} ontouchend={this.touchEnd.bind(this)}><img src={props.image} draggable={false} /></div></div></div>;
  };
};

// packages/avm-ui/src/components/image-viewer/slides.tsx
var classPrefix3 = `adm-image-viewer`;
var Slides = class extends Component {
  data = {
    zoom: this.props.zoom || 1,
    touchTime: new Date()
  };
  touchEnd() {
    const delayTime = new Date().getTime() - this.data.touchTime.getTime();
    if (delayTime < 300) {
      this.props.onTap();
    }
  }
  render = (props) => {
    return <swiper className={`${classPrefix3}-swiper`} onchange={(e) => {
      props.onIndexChange({ index: e.detail.current });
    }}>{props.images.map((image) => <swiper-item onClick={props.onTap} className={`${classPrefix3}-swiper-item`}><img style="display: block;max-width: 100%;max-height: 100%;" src={image} draggable={false} /></swiper-item>)}</swiper>;
  };
};

// packages/avm-ui/src/components/image-viewer/image-viewer.tsx
var classPrefix4 = `adm-image-viewer`;
var defaultProps2 = {
  maxZoom: 3,
  getContainer: null,
  visible: false
};
var ImageViewer = class extends Component {
  data = {
    visible: this.props.visible || defaultProps2.visible
  };
  render = (p) => {
    const props = mergeProps(defaultProps2, p);
    const node = <Mask_default visible={props.visible} disableBodyScroll={false} opacity="1"><div className={`${classPrefix4}-content`}>{props.image && <Slide image={props.image} onTap={() => {
      props.onClose?.();
      props.afterClose?.();
    }} maxZoom={props.maxZoom} />}</div></Mask_default>;
    return renderToContainer(props.getContainer, node);
  };
  css = () => {
    return `.adm-image-viewer-container {
      height: 100%;
      width: 100%;
      position: absolute;
    }
    .adm-image-viewer-content {
      width: 100%;
      height: 100%;
      max-height: -webkit-fill-available;
      touch-action: none;
      user-select: none;
    }
    .adm-image-viewer-slides {
      height: 100%;
      position: relative;
      z-index: 1;
      cursor: grab;
    }
    .adm-image-viewer-slides-inner {
      height: 100%;
      white-space: nowrap;
    }
    .adm-image-viewer-slide {
      position: relative;
      width: 100%;
      height: 100%;
      display: inline-block;
    }
    .adm-image-viewer-control {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      cursor: grab;
    }
    .adm-image-viewer-image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .adm-image-viewer-image-wrapper img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    .adm-image-viewer-indicator {
      position: absolute;
      z-index: 2;
      left: 50%;
      top: 12px;
      transform: translateX(-50%);
      color: #e6e6e6;
      font-size: 14px;
    }
    .adm-image-viewer-swiper {
      display: flex !important;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .adm-image-viewer-swiper-item {
      display: flex !important;
      height: 100%;
      justify-content: center;
      align-items: center;
    }`;
  };
};
var multiDefaultProps = {
  ...defaultProps2,
  defaultIndex: 0
};
var MultiImageViewer = class extends Component {
  render = (p) => {
    const props = mergeProps(multiDefaultProps, p);
    const node = <Mask_default visible={props.visible} disableBodyScroll={false} opacity="thick" afterClose={props.afterClose}><div className={`${classPrefix4}-content`}>{props.images && <Slides images={props.images} onTap={() => {
      props.onClose?.();
    }} onIndexChange={(e) => {
      props.onIndexChange?.(e);
    }} maxZoom={props.maxZoom} />}</div></Mask_default>;
    return renderToContainer(props.getContainer, node);
  };
  css = () => {
    return `.adm-image-viewer-container {
      height: 100%;
      width: 100%;
      position: absolute;
    }
    .adm-image-viewer-content {
      width: 100%;
      height: 100%;
      max-height: -webkit-fill-available;
      touch-action: none;
      user-select: none;
    }
    .adm-image-viewer-slides {
      height: 100%;
      position: relative;
      z-index: 1;
      cursor: grab;
    }
    .adm-image-viewer-slides-inner {
      height: 100%;
      white-space: nowrap;
    }
    .adm-image-viewer-slide {
      position: relative;
      width: 100%;
      height: 100%;
      display: inline-block;
    }
    .adm-image-viewer-control {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      cursor: grab;
    }
    .adm-image-viewer-image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .adm-image-viewer-image-wrapper img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    .adm-image-viewer-indicator {
      position: absolute;
      z-index: 2;
      left: 50%;
      top: 12px;
      transform: translateX(-50%);
      color: #e6e6e6;
      font-size: 14px;
    }
    .adm-image-viewer-swiper {
      display: flex !important;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .adm-image-viewer-swiper-item {
      display: flex !important;
      height: 100%;
      justify-content: center;
      align-items: center;
    }`;
  };
};
var Wrapper = class extends Component {
  data = {
    visible: true
  };
  render = (props) => {
    const node = <ImageViewer {...props} visible={this.data.visible} onClose={() => {
      props.onClose?.();
      this.data.visible = false;
    }} />;
    return node;
  };
};
function showImageViewer(props) {
  avm.render(<Wrapper {...props} />, "#toast-box");
}
var MultiWrapper = class extends Component {
  data = {
    visible: true
  };
  render = (props) => {
    const node = <MultiImageViewer {...props} visible={this.data.visible} onClose={() => {
      props.onClose?.();
      this.data.visible = false;
    }} onChange={(e) => {
      console.log(e);
    }} />;
    return node;
  };
};
function showMultiImageViewer(props) {
  const imageViewerContainer = document.getElementById("image-viewer-container");
  if (!imageViewerContainer) {
    const node = <div id="image-viewer-container" className={`${classPrefix4}-container`} />;
    avm.render(node, "body");
  }
  avm.render(<MultiWrapper {...props} />, "#image-viewer-container");
}

// packages/avm-ui/src/components/image-viewer/index.ts
var Multi = attachPropertiesToComponent(MultiImageViewer, {
  show: showMultiImageViewer
});
var image_viewer_default = attachPropertiesToComponent(ImageViewer, {
  Multi,
  show: showImageViewer
});
avm.define("avm-image-viewer", ImageViewer);
avm.define("avm-image-viewer-multi", MultiImageViewer);

// packages/avm-ui/src/utils/to-css-length.ts
function toCSSLength(val) {
  return typeof val === "number" ? `${val}px` : val;
}

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
var classPrefix5 = `adm-icon`;
var Icon = class extends Component {
  css = () => {
    return `@font-face {font-family: "${fontName}"; src: url('../../components/avm-ui/icon/${fontName}.ttf') format('truetype');}
        .${classPrefix5} {font-family: ${fontName};}`;
  };
  render = (props) => {
    let name = props.name || props.type;
    if (/\d/.test(name)) {
      name.replace(/(\d)/);
    }
    const char = props.code ? String.fromCharCode(props.code) || props.children : icons[name];
    return <text style={{ ...props }} class={`${classPrefix5} ${classPrefix5}-font-icon-text ${props.class || props.className || ""}`}>{char}</text>;
  };
};
Icon = __decorateClass([
  tag("avm-icon")
], Icon);

// packages/avm-ui/src/components/icon/index.ts
var Icon_default = Icon;

// packages/avm-ui/src/components/image/image.tsx
var classPrefix6 = `adm-image`;
var defaultProps3 = {
  fit: "fill",
  placeholder: <div className={`${classPrefix6}-tip`}><Icon_default code={60009} color="#ddd" /></div>,
  fallback: <div className={`${classPrefix6}-tip`}><Icon_default code={60010} color="#ddd" /></div>
};
var Image = class extends Component {
  data = {
    loaded: false,
    failed: false
  };
  setLoaded = (status) => {
    this.data.loaded = status;
  };
  setFailed = (status) => {
    this.data.failed = status;
  };
  render = (props) => {
    props = Object.assign({}, defaultProps3, props);
    const { width = "238px", height = "165px", src, srcSet, isRound = false, isSquare = false } = props;
    const style = {};
    style["width"] = toCSSLength(width);
    style["height"] = toCSSLength(height);
    if (isRound) {
      style["borderRadius"] = "50%";
      style["width"] = "120px";
      style["height"] = "120px";
    }
    if (isSquare) {
      style["borderRadius"] = "4px";
      style["width"] = "120px";
      style["height"] = "120px";
    }
    const renderInner = () => {
      if (this.data.failed) {
        return formatLabel(props.fallback);
      }
      const imgs = () => <img className={`${classPrefix6}-img`} src={src} alt={props.alt} onClick={() => {
        props.handleClick && props.handleClick();
      }} onLoad={() => {
        this.setLoaded(true);
      }} onError={(e) => {
        this.setFailed(true);
        props.handleError?.(e);
      }} style={{
        objectFit: props.fit,
        ...props.style,
        ...style
      }} crossOrigin={props.crossOrigin} decoding={props.decoding} loading={props.loading} referrerPolicy={props.referrerPolicy} sizes={props.sizes} srcSet={srcSet} useMap={props.useMap} />;
      return <view className={`${classPrefix6}-wrapper`}>
        {imgs()}
        <div className={!this.data.loaded ? `${classPrefix6}-placeholder-wrapper` : ""}>{!this.data.loaded && props.placeholder}</div>
      </view>;
    };
    return <div className={classPrefix6} style={style}>{renderInner()}</div>;
  };
  css = () => {
    return `
      .adm-image {
        display: inline-block;
        overflow: hidden;
      }
      .adm-image-wrapper {
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .adm-image-img {
        z-index: 1;
      }
      .adm-image-tip {
        position: relative;
        background-color: #f3f3f3;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      .adm-image-placeholder-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
      }
    `;
  };
};

// packages/avm-ui/src/components/image/index.ts
var Image_default = Image;
avm.define("avm-image", Image);

// packages/avm-ui/src/components/loading/loading.tsx
var classPrefix7 = `adm-loading`;
var Loading = class extends Component {
  render = (props) => {
    const { color = "#1677ff", size = "default" } = props;
    return <div className={classPrefix7}><div className={`${classPrefix7}-loading ${classPrefix7}-${size}`} style={{ borderColor: color, borderTopColor: "transparent" }} /></div>;
  };
};

// packages/avm-ui/src/components/loading/index.ts
var Loading_default = Loading;

// packages/avm-ui/src/components/image-uploader/preview-item.tsx
var classPrefix8 = `adm-image-uploader`;
var PreviewItem = class extends Component {
  render = (props) => {
    const { url, deletable, onDelete, cellSizeStyle } = props;
    const renderLoading = () => {
      return props.status === "pending" && <div className={`${classPrefix8}-cell-mask`}><span className={`${classPrefix8}-cell-loading`}>
        <Loading_default color="#fff" />
        <span className={`${classPrefix8}-cell-mask-message`}>{"\u4E0A\u4F20\u4E2D"}</span>
      </span></div>;
    };
    const renderDelete = () => {
      return deletable && <div className={`${classPrefix8}-cell-delete-wrap`} onClick={onDelete}><text className={`${classPrefix8}-cell-delete-wrap-inner`}>{"\u2715"}</text></div>;
    };
    return <div className={classNames(`${classPrefix8}-cell`, {
      [`${classPrefix8}-cell-fail`]: props.status === "fail"
    })} style={cellSizeStyle}>
      <Image_default mode="aspectFill" width={cellSizeStyle.width} height={cellSizeStyle.height} className={`${classPrefix8}-cell-image`} src={url} onClick={() => {
        props.onClick?.();
      }} />
      {renderLoading()}
      {renderDelete()}
    </div>;
  };
};

// packages/avm-ui/src/components/image-uploader/image-uploader.tsx
var classPrefix9 = `adm-image-uploader`;
var defaultProps4 = {
  disableUpload: false,
  deletable: true,
  showUpload: true,
  multiple: false,
  defaultValue: [],
  accept: "jpg",
  capture: "library"
};
var ImageUploader = class extends Component {
  data = {
    imgList: this.props.value || this.props.defaultValue || [],
    previewUrls: null,
    defaultPreviewIndex: 0,
    imageViewvisible: false,
    uploadError: false
  };
  setValue = (v) => {
    this.data.imgList = [].concat(v);
    this.props.handleChange?.(this.data.imgList);
  };
  saveImg = (imgSrc) => {
    const { maxCount } = this.props;
    const { imgList } = this.data;
    if (!maxCount || maxCount && imgList.length <= maxCount) {
      const newData = [...this.data.imgList, { url: imgSrc }];
      this.setValue(newData);
    } else {
      this.props.countExceed?.();
    }
  };
  selectPicture = () => {
    try {
      api.getPicture({
        sourceType: this.props.capture,
        encodingType: this.props.accept,
        mediaValue: "pic",
        destinationType: "url",
        quality: 50,
        targetWidth: 100,
        targetHeight: 100
      }, (ret, err) => {
        if (ret) {
          if (this.props.beforeUpload) {
            new Promise((resolve, reject) => {
              const status = this.props.beforeUpload(ret.data);
              if (status) {
                resolve(status);
              } else {
                reject(status);
              }
            }).then((res) => {
              if (res) {
                this.data.uploadError = false;
                ret.data && ret.data !== "" && this.saveImg(ret.data);
              }
            });
          } else {
            this.data.uploadError = false;
            ret.data && ret.data !== "" && this.saveImg(ret.data);
          }
        } else {
          api.toast({
            msg: "\u4E0A\u4F20\u5931\u8D25" + err
          });
          this.data.uploadError = true;
        }
      });
    } catch (err) {
      api.toast({
        msg: JSON.stringify(err)
      });
      this.data.uploadError = true;
    }
  };
  render = (props) => {
    props = Object.assign({}, defaultProps4, props);
    this.data.previewUrls = this.data.imgList.map((fileItem) => fileItem.url);
    const { maxCount, onPreview, cellSize = "109px", gap = "8px" } = props;
    const cellSizeStyle = {
      width: cellSize,
      height: cellSize,
      marginRight: gap,
      marginBottom: gap
    };
    const previewImage = (index) => {
      this.data.defaultPreviewIndex = index;
      onPreview?.(index);
    };
    const showUpload = props.showUpload && (!maxCount || maxCount && this.data.imgList.length < maxCount);
    return <div className={classPrefix9}>
      <div className={`${classPrefix9}-wrapper`}>
        {this.data.imgList.map((fileItem, index) => <PreviewItem cellSizeStyle={cellSizeStyle} url={fileItem.url} deletable={props.deletable} onClick={() => previewImage(index)} onDelete={() => {
          const canDelete = props.handleDelete?.(fileItem);
          if (canDelete === false)
            return;
          this.setValue(this.data.imgList.filter((x) => x.url !== fileItem.url));
        }} />)}
        {showUpload && <div className={classNames(`${classPrefix9}-cell ${classPrefix9}-btn-wrap`, {
          [`${classPrefix9}-btn-wrap-disabled`]: props.disableUpload,
          [`${classPrefix9}-btn-wrap-upload-error`]: this.data.uploadError
        })} style={cellSizeStyle} onClick={() => {
          !props.disableUpload && this.selectPicture();
        }}>{!this.data.uploadError ? props.uploadIcon ?? <view className={`${classPrefix9}-btn-wrap-img`} style={{ width: cellSizeStyle.width, height: cellSizeStyle.height }}><Icon code={59908} color="#ddd" size={32} fontSize="32px" width="32px" height="32px" /></view> : <div className={`${classPrefix9}-error-wrapper`} style={{ width: cellSizeStyle.width, height: cellSizeStyle.height }}>
          <span className={`${classPrefix9}-error-wrapper-close`}>{"\u2715"}</span>
          <span className={`${classPrefix9}-error-wrapper-text`}>{"\u4E0A\u4F20\u5931\u8D25"}</span>
          <span className={`${classPrefix9}-error-wrapper-text`}>{"\u91CD\u65B0\u4E0A\u4F20"}</span>
        </div>}</div>}
      </div>
      <image_viewer_default.Multi images={this.data.previewUrls} visible={this.data.imageViewvisible} onClose={() => this.data.imageViewvisible = false} />
      <text className={`${classPrefix9}-tip-desc`}>{props.tipDesc}</text>
    </div>;
  };
  css = () => {
    return `
    .adm-image-uploader-wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      width: auto;
      height: auto;
    }
    .adm-image-uploader-cell {
      border-radius: 4px;
      overflow: hidden;
      width: auto;
      height: auto;
    }
    .adm-image-uploader-cell-fail {
      border: 1px solid #f00;
      box-sizing: border-box;
    }
    .adm-image-uploader-cell-delete-wrap {
      width: 14.5px;
      height: 14.5px;
      position: absolute;
      top: 4.8px;
      right: 4.8px;
      z-index: 7;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      align-items: center;
      justify-content: center;
    }
    .adm-image-uploader-cell-delete-wrap-inner {
      font-size: 8px;
      color: #fff;
    }
    .adm-image-uploader-cell-mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      color: #fff;
      background-color: rgba(50, 50, 51, 0.88);
    }
    .adm-image-uploader-cell-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 16px;
    }
    .adm-image-uploader-cell-mask-message {
      display: inline-block;
      padding: 6px 4px;
      font-size: 12px;
    }
    .adm-image-uploader-btn-wrap {
      background-color: #f6f6f6;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .adm-image-uploader-btn-wrap-img {
      align-items: center;
      justify-content: center;
    }
    .adm-image-uploader-btn-wrap-disabled {
      opacity: 0.6;
    }
    .adm-image-uploader-btn-wrap-upload-error {
      background: rgba(0, 0, 0, 0.3);
    }
    .adm-image-uploader-tip-desc {
      font-size: 12px;
      color: #999;
      padding-top: 16px;
    }
    .adm-image-uploader-error-wrapper {
      align-items: center;
      justify-content: center;
    }
    .adm-image-uploader-error-wrapper-close {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      color: #fff;
      border: 1px solid #fff;
      text-align: center;
      line-height: 14px;
      font-size: 6px;
    }
    .adm-image-uploader-error-wrapper-text {
      font-size: 12px;
      color: #fff;
      padding-top: 8px;
    }
    `;
  };
};

// packages/avm-ui/src/components/image-uploader/index.ts
var image_uploader_default = ImageUploader;
avm.define("avm-image-uploader", ImageUploader);
export {
  image_uploader_default as default
};
