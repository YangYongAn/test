// packages/avm-ui/src/utils/classnames.ts
function classNames(...args) {
  const cls = [];
  args.forEach((arg) => {
    if (typeof arg === "string") {
      cls.push(arg);
    } else if (Object.prototype.toString.call(arg) === "[object Object]") {
      for (const argKey in arg) {
        arg[argKey] && cls.push(argKey);
      }
    } else if (arg) {
      console.log(`arg ${arg} type not support`);
    }
  });
  return cls.join(" ");
}

// packages/avm-ui/src/components/card/card.tsx
var classPrefix = `adm-card`;
var Card = class extends Component {
  render = (props) => {
    console.log(props);
    const renderHeader = () => {
      if (!(props.title || props.extra)) {
        return null;
      }
      return <div className={classNames(`${classPrefix}-header`, props.headerClassName)} style={props.headerStyle} onClick={props.onHeaderClick}>
        {props.title.children ? props.title : <text className={`${classPrefix}-header-title`} style={props.headerStyle}>{props.title}</text>}
        {props.extra && <text className={`${classPrefix}-header-extra`}>{props.extra}</text>}
      </div>;
    };
    const renderBody = () => {
      if (!props.children) {
        return null;
      }
      let children = "";
      props.children.map((item) => {
        if (typeof item === "string") {
          children = <text class={props.bodyClassName}>{item}</text>;
        } else {
          children = props.children;
        }
      });
      return <div className={classNames(`${classPrefix}-body`, props.bodyClassName)} style={props.bodyStyle} onClick={props.onBodyClick}>{children}</div>;
    };
    return <div className={classPrefix} onClick={props.onClick} style={props.style}>
      {renderHeader()}
      {renderBody()}
    </div>;
  };
  css = () => {
    return `
    .adm-card {
      background: #ffffff;
      border-radius: 8px;
      padding: 0 12px;
      border: solid 0.5px #eeeeee;
    }
    .adm-card-header {
      position: relative;
      display: flex;
      flex-direction: initial;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 12px 0;
      font-size: 16px;
      
    }
    .adm-card-header:not(:last-child) {
      border-bottom: solid 0.5px #eeeeee;
    }
    .adm-card-header-title {
      font-size: 15px;
      line-height: 1.4;
      font-weight: bold;
      color:#333;
    }
    .adm-card-header-extra {
      margin-left: 12px;
            width: 50px;
            flex-shrink: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            color: #666;
    }
    .adm-card-body {
      padding: 12px 0;
      color:#666;
    }`;
  };
};

// packages/avm-ui/src/components/card/index.ts
var card_default = Card;
avm.define("avm-card", Card);
export {
  card_default as default
};
