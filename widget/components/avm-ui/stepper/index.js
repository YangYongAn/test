// packages/avm-ui/src/components/stepper/stepper.less
var stepper_default = ".adm-stepper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n}\n.adm-stepper-disabled {\n  opacity: 0.6;\n}\n.adm-stepper-disabled-btn {\n  background: #f8f8f8;\n}\n.adm-stepper-input {\n  text-align: center;\n  background: #f0f0f0;\n  padding: 0;\n  outline: none;\n  margin: 0 4px;\n}\n.adm-stepper-minus {\n  padding: 0;\n  text-align: center;\n  display: inline-block;\n}\n.adm-stepper-plus {\n  padding: 0;\n  text-align: center;\n  display: inline-block;\n}\n";

// packages/avm-ui/src/utils/bound.ts
function bound(position, min, max) {
  let ret = position;
  if (min !== void 0) {
    ret = Math.max(position, min);
  }
  if (max !== void 0) {
    ret = Math.min(ret, max);
  }
  return ret;
}

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

// packages/avm-ui/src/components/stepper/stepper.tsx
var classPrefix = `adm-stepper`;
var defaultProps = {
  defaultValue: 0,
  step: 1,
  disabled: false
};
var toStringVal = (val) => {
  return val ? val.toString() : val === 0 ? "0" : "";
};
var Stepper = class extends Component {
  data = {
    value: 0,
    inputValue: 0,
    hasFocus: false,
    isInit: true
  };
  setValue = (val) => {
    this.data.isInit = false;
    this.data.value = val;
    this.setInputValue(toStringVal(val));
    this.fire("handleChange", Number(val));
  };
  setInputValue = (val) => {
    this.data.inputValue = val;
  };
  setHasFocus = (focus) => {
    this.data.hasFocus = focus;
    if (!this.data.hasFocus) {
      this.setInputValue(toStringVal(this.data.value));
    }
  };
  setValueWithCheck = (v) => {
    if (isNaN(v))
      return;
    let target = bound(v, this.props.min, this.props.max);
    if (this.props.digits || this.props.digits === 0) {
      target = parseFloat(target.toFixed(this.props.digits));
    }
    this.setValue(target);
  };
  handleInputChange = (v) => {
    this.setInputValue(v);
    this.setValueWithCheck(parseFloat(v));
  };
  handleMinus = () => {
    this.setValueWithCheck(this.data.value - this.props.step);
  };
  handlePlus = () => {
    this.setValueWithCheck(this.data.value + this.props.step);
  };
  minusDisabled = () => {
    if (this.props.min === void 0) {
      return this.props.disabled;
    } else {
      return this.props.disabled || this.data.value <= this.props.min;
    }
  };
  plusDisabled = () => {
    if (this.props.max === void 0) {
      return this.props.disabled;
    } else {
      return this.props.disabled || this.data.value >= this.props.max;
    }
  };
  render(props) {
    this.props = Object.assign({}, defaultProps, props);
    if (this.data.isInit) {
      this.data.value = this.props.value || this.props.defaultValue;
      this.data.inputValue = this.props.value !== void 0 ? toStringVal(this.props.value) : toStringVal(this.props.defaultValue);
    }
    const borderStyle = "1px solid transparent";
    const {
      disabled,
      height = "28px",
      inputWidth = "32px",
      inputFontSize = "14px",
      inputFontColor = "#333",
      borderRaduis = "2px",
      border = borderStyle,
      activeBorder = borderStyle,
      borderInner = borderStyle,
      btnFontSize = "12px",
      btnBgColor = "#f0f0f0",
      btnWidth = "28px",
      btnTextColor = "#7FA000"
    } = this.props;
    const btnWidthStyle = {};
    btnWidthStyle["width"] = btnWidth;
    const boxStyle = {
      height,
      width: `${Number(inputWidth.replace("px", "")) + Number(btnWidth.replace("px", "")) * 2 + 8}px`,
      borderRadius: borderRaduis,
      border: this.data.hasFocus ? activeBorder : border
    };
    const btnStyle = {
      ...btnWidthStyle,
      height,
      lineHeight: `${Number(height.replace("px", "")) - 1}px`,
      backgroundColor: btnBgColor,
      fontSize: `${Number(btnFontSize.replace("px", "")) + 5}px`,
      opacity: 1
    };
    const inputStyle = {
      height,
      lineHeight: height,
      width: inputWidth,
      fontSize: inputFontSize,
      color: disabled ? "#999" : inputFontColor,
      border: "none",
      borderLeft: borderInner,
      borderRight: borderInner
    };
    return superProps(props, <div className={classNames(classPrefix, {
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-active`]: this.data.hasFocus
    })} style={boxStyle}>
      <span className={`${classPrefix}-minus`} onClick={this.handleMinus} disabled={this.minusDisabled()} fill="none" style={{
        ...btnStyle,
        color: !this.minusDisabled() ? btnTextColor : "#999",
        borderRadius: `${borderRaduis} 0 0 ${borderRaduis}`
      }}>-</span>
      <input className={`${classPrefix}-input`} style={inputStyle} onFocus={(e) => {
        this.setHasFocus(true);
        this.props.inputFocus?.(e);
      }} value={this.data.inputValue} onBlur={(e) => {
        !disabled && this.handleInputChange(e.detail.value);
        this.setHasFocus(false);
        this.props.inputBlur?.(e);
      }} />
      <span className={`${classPrefix}-plus`} onClick={this.handlePlus} disabled={this.plusDisabled()} fill="none" style={{
        ...btnStyle,
        color: !this.plusDisabled() ? btnTextColor : "#999",
        borderRadius: `0 ${borderRaduis} ${borderRaduis} 0`
      }}>+</span>
    </div>);
  }
  css = () => stepper_default;
};

// packages/avm-ui/src/components/stepper/index.ts
var stepper_default2 = Stepper;
avm.define("avm-stepper", Stepper);
export {
  stepper_default2 as default
};
