// packages/avm-ui/src/components/text-area/text-area.tsx
var classPrefix = "adm-text-area";
var defaultProps = {
  rows: 2,
  showCount: false,
  autoSize: false,
  defaultValue: "",
  fontSize: "16px",
  color: "#333",
  placeholderColor: "#bbb",
  disabledColor: "#999"
};
var TextArea = class extends Component {
  data = {
    value: this.props.value || this.props.defaultValue || ""
  };
  setValue = (val) => {
    this.data.value = val;
  };
  render = (props) => {
    this.props = Object.assign({}, defaultProps, props);
    const {
      className,
      style,
      rows,
      autoSize,
      showCount,
      disabled,
      readOnly,
      fontSize,
      color,
      placeholder = "\u8BF7\u8F93\u5165",
      autoComplete = "on",
      placeholderColor,
      disabledColor,
      maxLength
    } = this.props;
    let count;
    if (typeof showCount === "function") {
      count = showCount(this.data.value.length, maxLength);
    } else if (showCount) {
      count = <span className={`${classPrefix}-count`}>{maxLength === void 0 ? this.data.value.length : this.data.value.length + "/" + maxLength}</span>;
    }
    const textareaStyle = {
      fontSize,
      color: !disabled ? color : disabledColor,
      height: autoSize ? "auto" : `${26 * rows}px`,
      lineHeight: "26px"
    };
    const textareaCls = classNames(classPrefix, {
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-readonly`]: readOnly
    });
    return <div className={classNames(`${classPrefix}-wrapper`, className)} style={style}>
      <textarea placeholder={placeholder} autoComplete={autoComplete} disabled={!!(disabled || readOnly)} className={textareaCls} style={textareaStyle} maxlength={maxLength} value={this.data.value} placeholder-style={`color: ${placeholderColor}`} auto-height={autoSize} onInput={(e) => {
        this.setValue(e.detail.value);
      }} onFocus={(e) => {
        props.inputFocus?.(e);
      }} onBlur={(e) => {
        props.handleChange && props.handleChange(e.detail.value);
        props.inputBlur?.(e);
      }} />
      {count}
    </div>;
  };
  css = () => {
    return `
      .adm-text-area-wrapper {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 4px;
        border-bottom: 1px solid #ddd;
        padding: 15px;
      }
      .adm-text-area {
        resize: none;
        flex: auto;
        display: block;
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        padding: 0;
        margin: 0;
        line-height: 1.5;
        background: transparent;
        border: 0;
        outline: none;
        appearance: none;
        min-height: 52px;
      }
      .adm-text-area-disabled {
        cursor: not-allowed;
        opacity: 1;
      }
      .adm-text-area-readonly {
        cursor: not-allowed;
        pointer-events: none;
      }
      .adm-text-area-count {
        text-align: right;
        color: #999;
        font-size: 12px;
        padding-top: 8px;
        line-height: 17px;
      }
    `;
  };
};

// packages/avm-ui/src/components/text-area/index.ts
var text_area_default = TextArea;
avm.define("avm-textarea", TextArea);
avm.define("avm-text-area", TextArea);
export {
  text_area_default as default
};
