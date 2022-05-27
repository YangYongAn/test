var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// packages/avm-ui/node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "packages/avm-ui/node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            } else {
              classes.push(arg.toString());
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// packages/avm-ui/src/components/tabs/tabs.tsx
var import_classnames = __toESM(require_classnames());

// packages/avm-ui/src/utils/with-default-props.tsx
function mergeProps(defaultProps2, props) {
  return Object.assign({}, defaultProps2, props);
}

// packages/avm-ui/src/components/tabs/tabs.tsx
var classPrefix = `adm-tabs`;
var Tab = class extends Component {
};
var defaultProps = {
  activeLineMode: "auto"
};
var Tabs = class extends Component {
  data = {
    activeKey: "",
    width: 0,
    left: 0,
    scrollLeft: 0
  };
  ele = [];
  scrollEle = [];
  installed() {
    let index = 0;
    const key = this.props.defaultActiveKey;
    if (key) {
      this.props.children?.forEach((child) => {
        if (child.key === key) {
          return;
        }
      });
    }
    this.data.activeKey = key || this.props.children[0].key;
    setTimeout(() => {
      const width = this.ele[index].getBoundingClientRect().width;
      const left = this.ele[index].getBoundingClientRect().left;
      this.data.width = width;
      this.data.left = left;
    }, 5);
  }
  scroll(e) {
    console.log(JSON.stringify(e));
    const { scrollLeft } = e.detail;
    this.data.scrollLeft = scrollLeft;
  }
  render = (p) => {
    const props = mergeProps(defaultProps, p);
    const leftMaskOpacity = 0;
    const rightMaskOpacity = 0;
    const breakPoint = props.breakPoint || 5;
    const panes = [];
    props.children.forEach((child) => {
      const childName = child?.nodeName?.name || "string";
      const key = child.key;
      if (childName !== "Tab")
        return;
      if (typeof key !== "string")
        return;
      panes.push(child);
    });
    return <div className={classPrefix}>
      <div className={`${classPrefix}-header`}>
        <div className={(0, import_classnames.default)(`${classPrefix}-header-mask`, `${classPrefix}-header-mask-left`)} style={{
          opacity: leftMaskOpacity
        }} />
        <div className={(0, import_classnames.default)(`${classPrefix}-header-mask`, `${classPrefix}-header-mask-right`)} style={{
          opacity: rightMaskOpacity
        }} />
        {props.children.length > breakPoint ? <scroll-view ref={(e) => {
          this.scrollEle.push(e);
        }} className={`${classPrefix}-tab-list`} scroll-x scroll-left={this.data.scrollLeft} scroll-y="false" show-scrollbar={false} onscroll={this.scroll.bind(this)}>
          <div className={`${classPrefix}-tab-line`} style={{
            width: props.activeLineMode === "fixed" ? `${props.fixedLineWidth || 30}px` : this.data.width,
            transform: props.activeLineMode === "fixed" ? `translate(${(this.data.width - (props.fixedLineWidth || 30)) / 2 + this.data.left}px, 0px)` : `translate(${this.data.left}px, 0px)`
          }} />
          {panes.map((pane, index) => {
            return <div key={pane.key} className={`${classPrefix}-tab-wrapper`}><div onClick={() => {
              const { key } = pane;
              if (pane.attributes.disabled)
                return;
              if (key === void 0 || key === null) {
                return;
              }
              this.data.width = this.ele[index].getBoundingClientRect().width;
              this.data.left = this.ele[index].getBoundingClientRect().left + this.data.scrollLeft;
              this.data.activeKey = key.toString();
              props.onChange?.(this.data.activeKey);
            }}><span className={(0, import_classnames.default)((0, import_classnames.default)(`${classPrefix}-tab`), {
              [`${classPrefix}-tab-active`]: pane.key === this.data.activeKey,
              [`${classPrefix}-tab-none`]: pane.key !== this.data.activeKey,
              [`${classPrefix}-tab-disabled`]: pane.attributes?.disabled || false
            })} ref={(e) => {
              this.ele.push(e);
            }}>{pane.attributes?.title}</span></div></div>;
          })}
        </scroll-view> : <div className={`${classPrefix}-tab-list`}>
          <div className={`${classPrefix}-tab-line`} style={{
            width: props.activeLineMode === "fixed" ? `${props.fixedLineWidth || 30}px` : this.data.width,
            transform: props.activeLineMode === "fixed" ? `translate(${(this.data.width - (props.fixedLineWidth || 30)) / 2 + this.data.left}px, 0px)` : `translate(${this.data.left}px, 0px)`
          }} />
          {panes.map((pane, index) => {
            return <div key={pane.key} className={`${classPrefix}-tab-wrapper`}><div onClick={() => {
              const { key } = pane;
              if (pane.attributes.disabled)
                return;
              if (key === void 0 || key === null) {
                return;
              }
              this.data.width = this.ele[index].getBoundingClientRect().width;
              this.data.left = this.ele[index].getBoundingClientRect().left;
              this.data.activeKey = key.toString();
              props.onChange?.(this.data.activeKey);
            }}><span className={(0, import_classnames.default)((0, import_classnames.default)(`${classPrefix}-tab`), {
              [`${classPrefix}-tab-active`]: pane.key === this.data.activeKey,
              [`${classPrefix}-tab-none`]: pane.key !== this.data.activeKey,
              [`${classPrefix}-tab-disabled`]: pane.attributes?.disabled || false
            })} ref={(e) => {
              this.ele.push(e);
            }}>{pane.attributes?.title}</span></div></div>;
          })}
        </div>}
      </div>
      {panes.map((pane) => {
        if (pane.children === void 0) {
          return null;
        }
        if (pane.key === this.data.activeKey) {
          return <div key={pane.key} className={`${classPrefix}-content`}><span>{pane.children}</span></div>;
        }
        if (pane.attributes.forceRender) {
          return <div key={pane.key} style={{ display: "none" }}><span>{pane.children}</span></div>;
        }
        return null;
      })}
    </div>;
  };
};

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

// packages/avm-ui/src/components/tabs/index.ts
var tabs_default = attachPropertiesToComponent(Tabs, {
  Tab
});
export {
  tabs_default as default
};
