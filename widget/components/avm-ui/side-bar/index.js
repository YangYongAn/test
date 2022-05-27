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

// packages/avm-ui/src/utils/superProps.ts
function superProps(targetOrProps, keyOrNode, descriptor) {
  if (descriptor) {
    let preRender = descriptor.value;
    descriptor.value = function(props) {
      const node = preRender(props);
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
  const cls = [];
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
  const style = [];
  if (props.style) {
    style.push(props.style);
  }
  if (node.attributes) {
    if (node.attributes.style) {
      style.unshift(node.attributes.style);
    }
    node.attributes.style = mergeStyle(...style);
  } else {
    node.attributes = {
      style: mergeStyle(...style)
    };
  }
}
function superEvent(node, props) {
  for (let propsKey in props) {
    if (propsKey.indexOf("on") === 0) {
      if (node.attributes) {
        node.attributes[propsKey] = props[propsKey];
      }
    }
  }
}
function mergeStyle(...args) {
  let style = [];
  args.forEach((arg) => {
    if (typeof arg === "string") {
      style.push(arg.replace(/;$/gm, ""));
    } else if (Object.prototype.toString.call(arg) === "[object Object]") {
      for (let key in arg) {
        arg[key] && style.push(key.replace(/([A-Z])/, (str) => "-" + str.toLowerCase()) + ":" + arg[key]);
      }
    }
  });
  return style.join(";") + ";";
}

// packages/avm-ui/src/components/badge/badge.less
var badge_default = ".adm-badge-row {\n  flex-flow: row;\n}\n.adm-badge-wrap {\n  position: relative;\n  margin: 10px;\n}\n.adm-badge {\n  color: #fff;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  box-sizing: border-box;\n  min-width: 16px;\n  border-radius: 100px;\n  padding: 0 4px;\n  font-size: 10px;\n  line-height: 16px;\n  height: 16px;\n  white-space: nowrap;\n}\n.adm-badge--fixed {\n  position: absolute;\n  transform: translate(50%, -50%);\n}\n.adm-badge--dot {\n  min-width: 8px;\n  width: 8px;\n  height: 8px;\n  border-radius: 5px;\n}\n";

// packages/avm-ui/src/components/badge/badge.tsx
var classPrefix = `adm-badge`;
var defaultProps = {
  color: "#E02020",
  isDot: false
};
var Badge = class extends Component {
  render(props) {
    props = Object.assign({}, defaultProps, props);
    const { content, color, children, right, top, isDot } = props;
    const hasChild = children && children.length;
    const badgeCls = classNames(classPrefix, {
      [`${classPrefix}--fixed`]: hasChild,
      [`${classPrefix}--dot`]: isDot
    });
    const styleRight = !!right && hasChild ? right : 0;
    const styleTop = !!top && hasChild ? top : 0;
    const contentEle = formatLabel(!isDot ? content : null, badgeCls, {
      backgroundColor: color,
      right: styleRight,
      top: styleTop
    });
    return <div className={`${classPrefix}-row`}><div className={`${classPrefix}-wrap`}>
      {children}
      {contentEle}
    </div></div>;
  }
  css = () => badge_default;
};
__decorateClass([
  superProps
], Badge.prototype, "render", 1);

// packages/avm-ui/src/components/side-bar/side-bar.tsx
var classPrefix2 = `adm-side-bar`;
var SideBarItem = class extends Component {
  render = () => {
    return null;
  };
};
var SideBar = class extends Component {
  data = {
    activeKey: this.props.activeKey || this.props.defaultActiveKey
  };
  activeItem = (val) => {
    if (!val.attributes.disabled) {
      this.data.activeKey = val.attributes.key;
      this.props.onChange && this.props.onChange(val.attributes.key);
    }
  };
  render = (props) => {
    const { children } = props;
    const fontWeight = {
      fontWeight: "bold"
    };
    const fontWeightNormal = {
      fontWeight: "normal"
    };
    let customizeWidth = "";
    if (props.style) {
      customizeWidth = props.style.split(":")[1];
    }
    const back = {
      "width": customizeWidth || "106px"
    };
    return <div style={back} className={classNames(classPrefix2)}>{children.map((item) => {
      return <div style={back} onClick={this.activeItem.bind(this, item)} className={classNames(`${classPrefix2}-item`, {
        [`${classPrefix2}-item-active`]: this.data.activeKey == item.attributes.key,
        [`${classPrefix2}-item-disabled`]: item.attributes.disabled
      })}><Badge content={item.attributes.badgeContent} isDot={item.attributes.isDot}><span style={this.data.activeKey == item.attributes.key ? fontWeight : fontWeightNormal} className={classNames(`${classPrefix2}-item-active-none`, {
        [`${classPrefix2}-item-text`]: this.data.activeKey == item.attributes.key,
        [`${classPrefix2}-item-disabled`]: item.attributes.disabled
      })}>{item.attributes.title}</span></Badge></div>;
    })}</div>;
  };
  css = () => {
    return `
    :root {
      --adm-color-primary: #1677ff;
      --adm-color-success: #00b578;
      --adm-color-warning: #ff8f1f;
      --adm-color-danger: #ff3141;
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
    .active-color {
      color: var(--adm-color-primary);
    }
    .adm-side-bar {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: 15px;
      overflow-y: auto;
    }
    .adm-side-bar-item {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 50px;
      padding: 6px 22px;
      font-size: 13px;
      position: relative;
      cursor: pointer;
      background-color: #f5f5f5;    
      white-space: nowrap;
    }
    .adm-side-bar-item-active {
      background-color: #fff;
      font-weight: bold;
      position: relative;
      color: #000;
    }
    .adm-side-bar-item-active-none {
      color: #000;
    }
    .adm-side-bar-item-text {
      font-weight: bold;
      color: #000;
    }
    .adm-side-bar-item-disabled {
      cursor: not-allowed;
      color: #000;
      opacity: 0.4;
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

// packages/avm-ui/src/components/side-bar/index.ts
var side_bar_default = attachPropertiesToComponent(SideBar, {
  Item: SideBarItem
});
avm.define("avm-side-bar", SideBar);
avm.define("avm-side-bar-item", SideBarItem);
export {
  side_bar_default as default
};
