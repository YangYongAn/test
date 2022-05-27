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

// packages/avm-ui/src/components/swiper/swiper-item.tsx
var SwiperItem = class extends Component {
  render = (props) => {
    return <swiper-item className="adm-swiper-item" onClick={() => props.handleClick && props.handleClick(props.index)} style={props.style}>{formatLabel(props.children, "adm-swiper-item-child")}</swiper-item>;
  };
};

// packages/avm-ui/src/components/page-indicator/page-indicator.tsx
var classPrefix = `adm-page-indicator`;
var defaultProps = {
  direction: "horizontal",
  style: {},
  color: "primary",
  total: 5,
  current: 0
};
var colorMapping = {
  primary: "#9AC200",
  white: "#fff"
};
var PageIndicator = class extends Component {
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const {
      direction,
      dotColor = "#ddd",
      activeDotColor = ["primary", "white"].includes(props.color) ? colorMapping[props.color] : props.color,
      dotSize = "6px",
      activeDotSize = "6px",
      dotBorderRadius = "3px",
      activeDotBorderRadius = "3px",
      dotSpacing = "8px"
    } = props;
    const isHorizontal = direction === "horizontal";
    const dots = [];
    for (let i = 0; i < props.total; i++) {
      dots.push(<div key={i} className={classNames(`${classPrefix}-dot`, {
        [`${classPrefix}-dot-active`]: props.current === i
      })} style={{
        background: props.current === i ? activeDotColor : dotColor,
        width: props.current === i ? isHorizontal ? activeDotSize : dotSize : dotSize,
        height: props.current === i ? !isHorizontal ? activeDotSize : dotSize : dotSize,
        borderRadius: props.current === i ? activeDotBorderRadius : dotBorderRadius,
        marginRight: isHorizontal ? dotSpacing : 0,
        marginBottom: !isHorizontal ? dotSpacing : 0
      }} />);
    }
    return <div className={classNames(classPrefix, props.className, `${classPrefix}-${props.direction}`, `${classPrefix}-color-${props.color}`)} style={props.style}>{dots}</div>;
  };
  css = () => {
    return `
      .adm-page-indicator {
        display: flex;
        width: fit-content;
        padding:12px;
      }
      .adm-page-indicator-dot {
        display: block;
      }
      .adm-page-indicator-dot:last-child {
        margin-right: 0;
      }
      .adm-page-indicator-color-white .adm-page-indicator-dot-active {
        background: #fff;
      }
      .adm-page-indicator-horizontal {
        flex-direction: row;
      }
      .adm-page-indicator-vertical {
        flex-direction: column;
      }
    `;
  };
};

// packages/avm-ui/src/components/swiper/swiper.tsx
var classPrefix2 = `adm-swiper`;
var defaultProps2 = {
  defaultIndex: 0,
  allowTouchMove: true,
  autoplay: false,
  autoplayInterval: 3e3,
  loop: false,
  direction: "horizontal",
  slideSize: 100,
  trackOffset: 0,
  stuckAtBoundary: false
};
var Swiper = class extends Component {
  data = {
    current: this.props.defaultIndex || 0,
    timer: null
  };
  render = (props) => {
    this.props = Object.assign({}, defaultProps2, props);
    const {
      height = "120px",
      width = "100%",
      borderRadius = "0",
      autoplay,
      autoplayInterval,
      loop,
      direction,
      indexChange,
      indicatorProps
    } = this.props;
    const swiperStyle = {
      height,
      width,
      borderRadius
    };
    const pageIndicatorEle = props.indicator === void 0 ? <div className={classNames(`${classPrefix2}-pageindicator`, `${classPrefix2}-pageindicator-${direction}`)}><PageIndicator {...indicatorProps} total={props.children.length} direction={direction} current={this.data.current} /></div> : props.indicator({ total: props.children.length, current: this.data.current });
    return <div className={`${classPrefix2}-wrapper`}>
      {props.title && <view className={`${classPrefix2}-title`}>
        <text className={`${classPrefix2}-title-text`}>{props.title}</text>
        <view className={`${classPrefix2}-title-pageindicator`}>
          <text className={`${classPrefix2}-title-pageindicator-current`}>{this.data.current}</text>
          <text className={`${classPrefix2}-title-pageindicator-total`}>
            {"/ "}
            {props.children.length}
          </text>
        </view>
      </view>}
      <swiper className={classPrefix2} autoplay={autoplay} interval={autoplayInterval} style={swiperStyle} circular={loop} vertical={direction === "vertical"} current={this.data.current} onChange={(e) => {
        this.data.current = e.detail.current;
        indexChange?.(this.data.current);
      }}>{props.children.map((item, index) => {
        return <SwiperItem {...item.attributes} index={index}>{item.children}</SwiperItem>;
      })}</swiper>
      {!!!props.title && pageIndicatorEle}
    </div>;
  };
  css = () => {
    return `
    .adm-swiper-wrapper {
      position: relative;
    }
    .adm-swiper-title {
      padding-bottom: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .adm-swiper-title-text {
      font-size: 16px;
      color: #333;
      font-weight: 500;
    }
    .adm-swiper-title-pageindicator {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .adm-swiper-title-pageindicator-current {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      padding-right: 4px;
    }
    .adm-swiper-title-pageindicator-total {
      font-size: 14px;
      color: #999;
    }
    .adm-swiper-item {
      align-items: center;
      justify-content: center;
    }
    .adm-swiper-item-child {
      width: 100%;
      height: 100%;
    }
    .adm-swiper-pageindicator {
      position: absolute;
    }
    .adm-swiper-pageindicator-horizontal {
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
    }
    .adm-swiper-pageindicator-vertical {
      right: 12px;
      top: 50%;
    }
    `;
  };
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

// packages/avm-ui/src/components/swiper/index.ts
var swiper_default = attachPropertiesToComponent(Swiper, {
  Item: SwiperItem
});
avm.define("avm-swiper", Swiper);
avm.define("avm-swiper-item", SwiperItem);
export {
  swiper_default as default
};
