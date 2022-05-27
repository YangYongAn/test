// packages/avm-ui/src/utils/with-default-props.tsx
function mergeProps(defaultProps2, props) {
  return Object.assign({}, defaultProps2, props);
}

// packages/avm-ui/src/components/progress-circle/progress-circle.tsx
var classPrefix = `adm-progress-circle`;
var defaultProps = {
  "size": "50px",
  "track-width": "50px",
  "track-color": "50px",
  "fill-color": "#1677ff",
  percent: 0,
  strokeColor: "#1677ff"
};
var ProgressCircle = class extends Component {
  render = (props) => {
    debugger;
    props = mergeProps(defaultProps, props);
    const { percent } = props;
    const style = `--percent: ${percent}`;
    return <div className={`${classPrefix}`} style={style}><div className={`${classPrefix}-content`}>
      <svg className={`${classPrefix}-svg`}>
        <circle className={`${classPrefix}-track`} fill="transparent" />
        <circle className={`${classPrefix}-fill`} fill="transparent" />
      </svg>
      <div className={`${classPrefix}-info`}>{props.children}</div>
    </div></div>;
  };
};

// packages/avm-ui/src/components/progress-circle/index.ts
var progress_circle_default = ProgressCircle;
export {
  progress_circle_default as default
};
