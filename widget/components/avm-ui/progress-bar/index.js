// packages/avm-ui/src/utils/to-css-length.ts
function toCSSLength(val) {
  return typeof val === "number" ? `${val}px` : val;
}

// packages/avm-ui/src/components/progress-bar/progress-bar.tsx
var classPrefix = `adm-progress-bar`;
var ProgressBar = class extends Component {
  render = (props) => {
    const back = {};
    back["height"] = toCSSLength(props.trackWidth) || "3px";
    back["borderRadius"] = toCSSLength(props.borderRadius) || "3px";
    back["backgroundColor"] = props.fillColor || "#E5E5E5";
    const styles = {};
    styles["width"] = `${props.percent}%`;
    styles["width"] = props.percent ? `${props.percent}%` : "0%";
    styles["background"] = props.trackColor || "#7FA000";
    styles["borderRadius"] = toCSSLength(props.borderRadius) || "3px";
    return <div className={classPrefix}><div className={`${classPrefix}-trail`} style={back}><div className={`${classPrefix}-fill`} style={styles} /></div></div>;
  };
  css = () => {
    return `
:root {
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
.adm-progress-bar {
  width: 100%;
}
.adm-progress-bar-trail {
  width: 100%;
}
.adm-progress-bar-fill {
  transition: width 0.3s;
  height: 100%;
}
`;
  };
};

// packages/avm-ui/src/components/progress-bar/index.ts
var progress_bar_default = ProgressBar;
avm.define("avm-progress-bar", ProgressBar);
export {
  progress_bar_default as default
};
