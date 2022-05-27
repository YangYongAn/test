// packages/avm-ui/src/components/tag/tag.tsx
var classPrefix = `adm-tag`;
var colorRecord = {
  default: "#666666",
  primary: "#9AC200",
  success: "#00b578",
  warning: "#ff8f1f",
  danger: "#ff3141"
};
var defaultProps = {
  color: "default",
  fill: "solid",
  round: false,
  size: "middle",
  borderRadius: "2px",
  isDelete: false,
  isDisabled: false
};
var sizeMappings = {
  small: {
    padding: "0 4px",
    heights: "18px",
    fontSize: "12px",
    maxWidth: "104px",
    minWidth: "50px"
  },
  middle: {
    padding: "0 6px",
    heights: "20px",
    fontSize: "12px",
    maxWidth: "108px",
    minWidth: "60px"
  },
  large: {
    padding: "0 8px",
    heights: "24px",
    fontSize: "14px",
    maxWidth: "128px",
    minWidth: "70px"
  }
};
var Tag = class extends Component {
  data = {
    isShowTag: true
  };
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const color = colorRecord[props.color] ?? props.color;
    const wrapperStyles = {};
    wrapperStyles["border"] = `1px solid ${props.borderColor ?? color}`;
    wrapperStyles["height"] = sizeMappings[props.size].heights;
    if (props.fill === "outline") {
      sizeMappings[props.size]["color"] = props.textColor ?? color;
    } else {
      wrapperStyles["background"] = props.bgColor ?? color;
      sizeMappings[props.size]["color"] = props.textColor ?? "#fff";
    }
    if (props.borderRadius && !props.round) {
      wrapperStyles["borderRadius"] = props.borderRadius;
    }
    return <view className={`${classPrefix}-row`}><view className={classNames(`${classPrefix}-wrapper`, {
      [`${classPrefix}-wrapper-disabled`]: props.isDisabled,
      [`${classPrefix}-round`]: props.round
    })} style={{ ...wrapperStyles, display: this.data.isShowTag ? "flex" : "none" }}>
      <span style={{ ...sizeMappings[props.size] }} onClick={props.handleClick} className={classPrefix}>{props.children}</span>
      {props.isDelete && <span className={`${classPrefix}-close`} style={{ color: sizeMappings[props.size].color }} onClick={() => {
        !props.isDisabled && (this.data.isShowTag = false);
      }}>{"\u2715"}</span>}
    </view></view>;
  };
  css = () => {
    return `
    .adm-tag-row{
    flex-flow:row;
    margin:1px;
    }
      .adm-tag-wrapper {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
      }
      .adm-tag-wrapper-disabled {
        opacity: 0.3;
      }
      .adm-tag {
        font-weight: normal;
        display: block;
        white-space: nowrap;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align:center;
      }
      .adm-tag-round {
        border-radius: 100px;
      }
      .adm-tag-close {
        font-size: 10px;
        padding-right: 8px;
      }
    `;
  };
};

// packages/avm-ui/src/components/tag/index.ts
var tag_default = Tag;
avm.define("avm-tag", Tag);
export {
  tag_default as default
};
