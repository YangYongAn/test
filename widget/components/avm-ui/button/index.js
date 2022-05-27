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

// packages/avm-ui/src/components/button/button.less
var button_default = ".adm-button {\n  border: 1px solid #eee;\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 7px 16px;\n  margin: 0;\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  opacity: 1;\n}\n.adm-button-block {\n  display: block;\n  width: 100%;\n}\n.adm-button-disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.adm-button-disabled:active::before {\n  display: none;\n}\n.adm-button-mini {\n  padding: 2px 7px;\n  font-size: 12px;\n}\n.adm-button-mini-shape-rounded {\n  padding-left: 9px;\n  padding-right: 9px;\n}\n.adm-button-small {\n  padding: 6px 11px;\n  font-size: 15px;\n}\n.adm-button-middle {\n  padding: 11px 20px;\n  font-size: 16px;\n}\n.adm-button-large {\n  padding: 15px 22px;\n  font-size: 18px;\n}\n.adm-button-shape-rounded {\n  border-radius: 1000px;\n}\n.adm-button-shape-rectangular {\n  border-radius: 0;\n}\n.adm-button-loading {\n  vertical-align: bottom;\n  background-image: url('./loading.png');\n  background-position: left center;\n  background-repeat: no-repeat;\n  background-size: 22px 22px;\n  padding-left: 24px;\n}\n.adm-button-default {\n  color: #333333;\n}\n.adm-button-primary {\n  background: #9AC200;\n  color: #ffffff;\n  border-color: #9AC200;\n}\n.adm-button-primary-fill-outline {\n  color: #9AC200;\n  background: #ffffff;\n}\n.adm-button-primary-fill-none {\n  color: #9AC200;\n  background: #ffffff;\n  border-color: transparent;\n}\n.adm-button-success {\n  background: #7FA000;\n  color: #ffffff;\n  border-color: #7FA000;\n}\n.adm-button-warning {\n  background: #FFA600;\n  color: #ffffff;\n  border-color: #FFA600;\n}\n.adm-button-danger {\n  background: #FA6400;\n  color: #ffffff;\n  border-color: #FA6400;\n}\n";

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

// packages/avm-ui/src/components/button/button.tsx
var classPrefix = `adm-button`;
var defaultProps = {
  color: "default",
  fill: "solid",
  size: "middle",
  block: false,
  disabled: false,
  loading: false,
  type: "button",
  shape: "default"
};
var Button = class extends Component {
  render(props) {
    props = Object.assign({}, defaultProps, props);
    const disabled = props.disabled || props.loading;
    const { shape, fill } = props;
    const btnCls = classNames(classPrefix, props.color ? `${classPrefix}-${props.color}` : null, {
      [`${classPrefix}-block`]: props.block,
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-${props.color}-fill-outline`]: fill === "outline",
      [`${classPrefix}-${props.color}-fill-none`]: fill === "none",
      [`${classPrefix}-${props.size}`]: true,
      [`${classPrefix}-loading`]: props.loading
    }, `${classPrefix}-shape-${shape}`);
    return <button type={props.type} className={btnCls} disabled={disabled}>{props.loading ? props.loadingText : props.children}</button>;
  }
  css = () => button_default;
};
__decorateClass([
  superProps
], Button.prototype, "render", 1);

// packages/avm-ui/src/components/button/index.ts
var button_default2 = Button;
avm.define("avm-button", Button);
export {
  button_default2 as default
};
