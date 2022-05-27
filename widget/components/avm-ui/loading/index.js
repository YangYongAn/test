// packages/avm-ui/src/components/loading/loading.tsx
var classPrefix = `adm-loading`;
var Loading = class extends Component {
  render = (props) => {
    const { color = "#1677ff", size = "default" } = props;
    return <div className={classPrefix}><div className={`${classPrefix}-loading ${classPrefix}-${size}`} style={{ borderColor: color, borderTopColor: "transparent" }} /></div>;
  };
};

// packages/avm-ui/src/components/loading/index.ts
var loading_default = Loading;
export {
  loading_default as default
};
