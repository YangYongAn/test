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

// packages/avm-ui/src/utils/to-css-length.ts
function toCSSLength(val) {
  return typeof val === "number" ? `${val}px` : val;
}

// packages/avm-ui/src/components/grid/grid.tsx
var classPrefix = `adm-grid`;
var Grid = class extends Component {
  render = (props) => {
    const { gap = 0, columns } = props;
    const baseWidth = (100 / Number(columns)).toFixed(2);
    const columnGap = Array.isArray(gap) ? toCSSLength(gap[0]) : toCSSLength(gap);
    const rowGap = Array.isArray(gap) ? toCSSLength(gap[1]) : toCSSLength(gap);
    return <div className={classPrefix}>{props.children.map((item, index) => {
      return <GridItem {...item.attributes} baseWidth={baseWidth} columnGap={columnGap} rowGap={rowGap} className={`${classPrefix}-item`} columns={columns} curIndex={index + 1}>{item}</GridItem>;
    })}</div>;
  };
  css = () => {
    return `
      .adm-grid {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex-wrap: wrap;
      }
    `;
  };
};
var GridItem = class extends Component {
  render = (props) => {
    props = Object.assign({}, { span: 1 }, props);
    const itemStyle = {
      width: props.baseWidth ? `${Number(props.baseWidth) * Number(props.span)}%` : "auto"
    };
    return <div style={itemStyle} onClick={() => {
      props.handleClick && props.handleClick();
    }}>{props.children}</div>;
  };
};

// packages/avm-ui/src/components/grid/index.ts
var grid_default = attachPropertiesToComponent(Grid, {
  Item: GridItem
});
avm.define("avm-grid", Grid);
avm.define("avm-grid-item", GridItem);
export {
  grid_default as default
};
