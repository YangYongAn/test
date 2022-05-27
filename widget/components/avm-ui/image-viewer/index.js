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
function mergeProps(defaultProps3, props) {
  return Object.assign({}, defaultProps3, props);
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
export {
  image_viewer_default as default
};
