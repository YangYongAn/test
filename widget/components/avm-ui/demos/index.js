// packages/avm-ui/src/demos/demo-block/index.tsx
var DemoBlock = class extends Component {
  render = (props) => {
    return <div className="demo-block">
      <span className="demo-block__title">{props.title}</span>
      <div className="demo-block__content" style={{
        padding: props.padding || "12px 12px",
        background: props.background || "#ffffff",
        border: props.border
      }}>{props.children}</div>
    </div>;
  };
  css = () => `
  .demo-block:last-of-type {
  padding-bottom: 32px;
}
.demo-block__title {
  padding: 12px 8px 6px;
  color: #969696;
  font-size: 14px;
}
.demo-block__content {
  border: solid 1px #eee;
  border-right: none;
  border-left: none;
}
  `;
};

// packages/avm-ui/src/demos/demo-description/index.tsx
var DemoDescription = class extends Component {
  render = (props) => <div className="demoDescription">{props.content || props.children}</div>;
  css = () => `.demoDescription {color: #999999;}`;
};

// packages/avm-ui/src/demos/create-props-table.tsx
function createPropsTable(propRecord) {
  return function PropsTable() {
    return <div className="markdown"><table>
      <thead><tr>
        <th>{"\u5C5E\u6027"}</th>
        <th>{"\u8BF4\u660E"}</th>
        <th>{"\u7C7B\u578B"}</th>
        <th>{"\u9ED8\u8BA4\u503C"}</th>
      </tr></thead>
      <tbody>{Object.keys(propRecord).map((prop) => {
        const item = propRecord[prop];
        return <tr key={prop}>
          <td>{prop}</td>
          <td>{item.description}</td>
          <td>{item.type && <code>{item.type}</code>}</td>
          <td>{item.default ? <code>{item.default}</code> : "-"}</td>
        </tr>;
      })}</tbody>
    </table></div>;
  };
}
export {
  DemoBlock,
  DemoDescription,
  createPropsTable
};
