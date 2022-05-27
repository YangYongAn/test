// packages/avm-ui/src/components/divider/divider.tsx
var classPrefix = `adm-divider`;
var defaultProps = {
  contentPosition: "center",
  color: "#999999",
  borderColor: "#eeeeee",
  borderStyle: "solid",
  borderTopWidth: "1px"
};
var Divider = class extends Component {
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const { color, borderStyle, borderColor, borderTopWidth, contentPosition, children } = props;
    const fontContentSty = {
      color,
      flex: "none"
    };
    const dividerLineSty = {
      borderStyle,
      borderColor,
      borderTopWidth,
      flex: "auto"
    };
    const dividerLeftSty = Object.assign({
      maxWidth: contentPosition === "left" ? "10%" : "auto"
    }, dividerLineSty);
    const dividerRightSty = Object.assign({
      maxWidth: contentPosition === "right" ? "10%" : "auto"
    }, dividerLineSty);
    return <div className={classNames(classPrefix, `${classPrefix}-${contentPosition}`)}>
      <div style={dividerLeftSty} />
      {children.length > 0 && <text className={`${classPrefix}-content`} style={fontContentSty}>{children}</text>}
      <div style={dividerRightSty} />
    </div>;
  };
  css = () => {
    return `
    .adm-divider {
      align-items: center;
      margin: 16px 0;
      font-size: 14px;
      flex-direction: row;
      width: 100%;
    }
    .adm-divider-content {
      flex: none;
      padding: 0 16px;
    }
    `;
  };
};

// packages/avm-ui/src/components/divider/index.ts
var divider_default = Divider;
avm.define("avm-divider", Divider);
export {
  divider_default as default
};
