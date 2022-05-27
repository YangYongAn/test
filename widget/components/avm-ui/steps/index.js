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

// packages/avm-ui/src/components/steps/step.tsx
var classPrefix = `adm-step`;
var Step = class extends Component {
  render = (props) => {
    const {
      title = "\u6B65\u9AA4\u6807\u9898",
      description = "\u6B65\u9AA4\u7684\u8BE6\u60C5\u63CF\u8FF0",
      status = "wait",
      direction,
      curIndex,
      totalLen,
      isDot = false
    } = props;
    const titleCls = classNames(`${classPrefix}-title`, `${classPrefix}-title-${status}`, `${classPrefix}-title-${direction}`);
    const descCls = classNames(`${classPrefix}-description`, `${classPrefix}-${direction}-content-description`, `${classPrefix}-description-${direction}`);
    const dotCls = classNames(`${classPrefix}-dot`, `${classPrefix}-dot-${status}`);
    const dotEle = <view className={classNames(`${classPrefix}-dottext`, `${classPrefix}-dottext-${status}`)} />;
    return <div className={classNames(`${classPrefix}`, `${classPrefix}-${direction}`)}>
      <div className={classNames(`${classPrefix}-indicator`, `${classPrefix}-${direction}-indicator`)}>
        {props.icon ? props.icon : isDot ? <div className={dotCls} /> : dotEle}
        {curIndex !== totalLen - 1 && <div className={classNames(`${classPrefix}-line`, `${classPrefix}-${direction}-line`, `${classPrefix}-line-${status}`)} />}
      </div>
      <div className={classNames(`${classPrefix}-content`, `${classPrefix}-${direction}-content`)}>
        {formatLabel(title, titleCls)}
        {!!description && formatLabel(description, descCls)}
      </div>
    </div>;
  };
  css = () => {
    return `
    .adm-step-indicator {
      align-items: center;
      position:relative;
    }
    .adm-step-line{
        position:absolute;
    }
    
    
    .adm-step-title {
      color: #333;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
    .adm-step-description {
      width: 100%;
      white-space: wrap;
      font-size: 12px;
      color: #999;
      line-height: 16px;
    }
    .adm-step-horizontal {
      flex: 1;
      flex-direction: column;
      align-items: center;
    }
    .adm-step-horizontal-indicator {
      width: 100%;
      height: 24px;
      flex-direction: row;
    justify-content:center;
    }
    .adm-step-horizontal-line {
      flex: 1;
      height: 1px;
      background: #e8e8e8;
      left:50%;
        width:100%;
    }
    .adm-step-horizontal-content {
      padding-top: 2px;
    }
    .adm-step-horizontal-content-description {
      margin-top: 2px;
    }
    .adm-step-vertical {
      flex-direction: row;
      align-items: flex-start;
    }
    .adm-step-vertical-indicator {
      width: 24px;
      height: 100%;
      margin-right: 8px;
      flex-direction: column;
      padding-top:6px;
    }
    
    
    .adm-step-vertical-line {
      flex: 1;
      width: 1px;
      background: #e8e8e8;
      height:100%;
    }
    .adm-step-vertical-content {
      flex: auto;
      margin: 0 0 15px 0;
    }
    .adm-step-vertical-content-description {
      padding-top: 2px;
    }
    
 
 
    
    .adm-step-line-wait {
      background: #ddd;
    }
    .adm-step-line-finish {
      background: #9ac200;
    }
    .adm-step-line-error {
      background: #e02020;
    }
    .adm-step-dot {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      z-index: 6;
      background-color: #ddd;
    }
    .adm-step-dot-wait {
      background-color: #ddd;
    }
    .adm-step-dot-process {
      background-color: #9ac200;
    }
    .adm-step-dot-finish {
      background-color: #9ac200;
    }
    .adm-step-dot-error {
      background-color: #e02020;
    }
    .adm-step-dottext {
    width: 8px;
    height: 8px;
    border-radius: 4px;
      z-index: 6;
    
    
    }
    .adm-step-dottext-wait {
      background: #ddd;
      color: #fff;
    }
    .adm-step-dottext-error {
      background: #e02020;
    }
    .adm-step-dottext-process {
      background: #9ac200;
    }
    .adm-step-dottext-finish {
      background: #9ac200;
    }
    
    .adm-step-title-horizontal,.adm-step-description-horizontal{
    text-align:center;
    }
    
    `;
  };
};

// packages/avm-ui/src/components/steps/steps.tsx
var classPrefix2 = `adm-steps`;
var defaultProps = {
  current: 0,
  direction: "horizontal"
};
var Steps = class extends Component {
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const { direction, current } = props;
    const list = props.children.map((item) => {
      return {
        ...item.attributes,
        children: item.children
      };
    });
    const stemItem = list.map((item, index) => {
      let { status } = item;
      if (index < current) {
        status = status || "finish";
      } else if (index === current) {
        status = status || "process";
      } else {
        status = status || "wait";
      }
      return <Step {...item} status={status} direction={direction} totalLen={list.length} curIndex={index} />;
    });
    return <div className={classNames(classPrefix2, `${classPrefix2}-${direction}`)}>{stemItem}</div>;
  };
  css = () => {
    return `
      .adm-steps {
        width: 100%;
      }
      .adm-steps-horizontal {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 8px 0;
      }
      .adm-steps-vertical {
        padding: 8px 16px;
      }
    `;
  };
};

// packages/avm-ui/src/components/steps/index.ts
var steps_default = attachPropertiesToComponent(Steps, {
  Step
});
avm.define("avm-steps", Steps);
avm.define("avm-step", Step);
export {
  steps_default as default
};
