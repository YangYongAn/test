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

// packages/avm-ui/src/components/popover/popover.tsx
var classPrefix = `adm-popover`;
var defaultProps = {
  mode: "light",
  isMenu: false,
  placement: "top",
  visible: false,
  zIndex: 1030,
  content: null
};
var Popover = class extends Component {
  data = {
    visible: this.props.visible || false,
    boxRect: {},
    popupRect: {}
  };
  render = (props) => {
    this.props = Object.assign({}, defaultProps, props);
    let {
      children,
      mode,
      isMenu,
      placement,
      visibleChange,
      zIndex,
      content,
      actions,
      isHorizontalMenu,
      id,
      popupId
    } = this.props;
    const boxRect = document.getElementById(id)?.getBoundingClientRect();
    const popupRect = document.getElementById(popupId)?.getBoundingClientRect();
    let popupStyle = { zIndex, visibility: this.data.visible === true ? "visible" : "hidden" };
    let sharpStyle = {};
    const topVal = `${-((popupRect?.height || 0) + (boxRect?.height || 0) - 20)}px`;
    const leftVal = `${-((popupRect?.width || 0) + 10)}px`;
    if (["top", "top-start", "top-end"].includes(placement)) {
      popupStyle.top = topVal;
    }
    if (["bottom", "bottom-start", "bottom-end"].includes(placement)) {
      popupStyle.bottom = topVal;
    }
    if (["left", "left-start", "left-end"].includes(placement)) {
      popupStyle.left = leftVal;
    }
    if (["right", "right-start", "right-end"].includes(placement)) {
      popupStyle.right = leftVal;
    }
    if (["top", "bottom"].includes(placement)) {
      sharpStyle.left = `${((popupRect?.width || 0) - 10) / 2}px`;
      popupStyle.left = `${-(((popupRect?.width || 0) - (boxRect?.width || 0)) / 2)}px`;
    } else if (["top-start", "bottom-start"].includes(placement)) {
      sharpStyle.left = "20px";
      popupStyle.left = 0;
    } else if (["top-end", "bottom-end"].includes(placement)) {
      sharpStyle.right = "20px";
      popupStyle.right = 0;
    }
    if (placement === "left" || placement === "right") {
      popupStyle.top = `${-(((popupRect?.height || 0) - (boxRect?.height || 0)) / 2)}px`;
      sharpStyle.top = `${((popupRect?.height || 0) - 10) / 2}px`;
    } else if (placement === "left-start" || placement === "right-start") {
      sharpStyle.top = 0;
      popupStyle.top = 0;
    } else if (placement === "left-end" || placement === "right-end") {
      sharpStyle.bottom = 0;
      popupStyle.bottom = 0;
    }
    const popupCls = classNames(`${classPrefix}-popup`, `${classPrefix}-popup-${mode}`, {
      [`${classPrefix}-popup-default`]: !isHorizontalMenu,
      [`${classPrefix}-popup-horizontal`]: isHorizontalMenu
    });
    const sharpCls = classNames(`${classPrefix}-popup-sharp`, `${classPrefix}-popup-sharp-${mode}`, `${classPrefix}-popup-sharp-${placement}`);
    const popupTextCls = classNames(`${classPrefix}-popup-text`, `${classPrefix}-popup-text-${mode}`);
    const popupMenuCls = classNames(`${classPrefix}-popup-menu`, `${classPrefix}-popup-menu-${mode}`, {
      [`${classPrefix}-popup-menu-default`]: !isHorizontalMenu,
      [`${classPrefix}-popup-menu-horizontal`]: isHorizontalMenu
    });
    const popupMenuItemCls = classNames(`${classPrefix}-popup-menu-item`, {
      [`${classPrefix}-popup-menu-horizontal-item`]: isHorizontalMenu,
      [`${classPrefix}-popup-menu-default-item`]: !isHorizontalMenu
    });
    const popupMenuItemImgCls = classNames(`${classPrefix}-popup-menu-item-img`, {
      [`${classPrefix}-popup-menu-horizontal-item-img`]: isHorizontalMenu
    });
    const popupMenuItemTextCls = classNames(`${classPrefix}-popup-menu-item-text`, `${classPrefix}-popup-menu-item-text-${mode}`, {
      [`${classPrefix}-popup-menu-horizontal-item-text`]: isHorizontalMenu
    });
    return <div className={classPrefix}>
      <div className={`${classPrefix}-con`} id={id} onClick={() => {
        this.data.visible = !this.data.visible;
        visibleChange?.();
      }}>{formatLabel(children)}</div>
      <div style={popupStyle} id={popupId} className={popupCls}>
        <div className={sharpCls} style={sharpStyle} />
        {!isMenu && <span className={popupTextCls}>{content}</span>}
        {isMenu && actions && <div className={popupMenuCls}>{actions.map((item, index) => {
          const { key, text, icon, disabled } = item;
          return <div className={classNames(popupMenuItemCls, {
            [`${classPrefix}-popup-menu-item-disabled`]: disabled,
            [`${classPrefix}-popup-menu-item-nobottom-border`]: index === actions.length - 1
          })} key={key} onClick={() => {
            this.props.actionClick?.(item);
          }}>
            {icon && <img src={icon} alt="icon" className={popupMenuItemImgCls} />}
            <span className={classNames(popupMenuItemTextCls, {
              [`${classPrefix}-popup-menu-item-text-center`]: !icon
            })}>{text}</span>
          </div>;
        })}</div>}
      </div>
    </div>;
  };
  css = () => {
    return `
    .adm-popover-popup {
      position: absolute;
      align-items: center;
      justify-content: center;
    }
    .adm-popover-popup-default {
      width: 128px;
    }
    .adm-popover-popup-horizontal {
      width: 288px;
    }
    .adm-popover-popup-light {
      background: #f5f5f5;
    }
    .adm-popover-popup-dark {
      background: #333;
    }
    .adm-popover-popup-text {
      color: #333;
      font-size: 14px;
      padding: 12px;
    }
    .adm-popover-popup-text-dark {
      color: #fff;
    }
    .adm-popover-popup-sharp {
      position: absolute;
      border-width: 10px;
      border-style: solid;
      border-color: transparent;
      border-bottom-color: #f5f5f5;
    }
    .adm-popover-popup-sharp-dark {
      border-bottom-color: #333;
    }
    .adm-popover-popup-sharp-top,
    .adm-popover-popup-sharp-top-start,
    .adm-popover-popup-sharp-top-end {
      transform: rotate(180deg);
      bottom: -20px;
    }
    .adm-popover-popup-sharp-bottom,
    .adm-popover-popup-sharp-bottom-start,
    .adm-popover-popup-sharp-bottom-end {
      transform: rotate(0);
      top: -20px;
    }
    .adm-popover-popup-sharp-left,
    .adm-popover-popup-sharp-left-start,
    .adm-popover-popup-sharp-left-end {
      transform: rotate(90deg);
      right: -20px;
    }
    .adm-popover-popup-sharp-right,
    .adm-popover-popup-sharp-right-start,
    .adm-popover-popup-sharp-right-end {
      transform: rotate(-90deg);
      left: -20px;
    }
    .adm-popover-popup-menu-light {
      background: #f5f5f5;
    }
    .adm-popover-popup-menu-dark {
      background: #333;
    }
    .adm-popover-popup-menu-item {
      display: flex;
      padding: 10px 0;
      border-bottom: 0.5px solid #e8e8e8;
    }
    .adm-popover-popup-menu-item-disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .adm-popover-popup-menu-item-nobottom-border {
      border-bottom: none;
    }
    .adm-popover-popup-menu-item-text {
      font-size: 14px;
      color: #333;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .adm-popover-popup-menu-item-text-dark {
      color: #fff;
    }
    .adm-popover-popup-menu-item-text-center {
      text-align: center;
    }
    .adm-popover-popup-menu-item-img {
      flex-shrink: 0;
      width: 26px;
      height: 26px;
      margin-right: 12px;
    }
    .adm-popover-popup-menu-default {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 14px;
    }
    .adm-popover-popup-menu-default-item {
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
    .adm-popover-popup-menu-horizontal {
      height: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      max-width: 288px;
    }
    .adm-popover-popup-menu-horizontal-item {
      padding: 0;
      width: 72px;
      height: 72px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: none;
    }
    .adm-popover-popup-menu-horizontal-item-img {
      margin-bottom: 8px;
      margin-right: 0;
    }
    .adm-popover-popup-menu-horizontal-item-text {
      flex: none;
      width: 100%;
      text-align: center;
    }
    
    `;
  };
};

// packages/avm-ui/src/components/popover/index.ts
var popover_default = Popover;
avm.define("avm-popover", Popover);
export {
  popover_default as default
};
