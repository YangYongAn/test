// packages/avm-ui/src/components/floating-panel/floating-panel.tsx
var FloatingPanel = class extends Component {
  data = {
    y: -100,
    startY: 0
  };
  height = this.props.height || 300;
  touchMove(e) {
    if (Math.abs(this.data.y) > this.height) {
      this.data.y = this.data.y - (this.data.startY - e.detail.y) * 0.08;
    } else {
      this.data.y = this.data.y - (this.data.startY - e.detail.y);
    }
    this.data.startY = e.detail.y;
  }
  touchEnd() {
    let sectionArr = [];
    this.props.anchors.sort((a, b) => {
      return a - b;
    });
    try {
      this.props.anchors.forEach((item) => {
        if (item < Math.abs(this.data.y)) {
          sectionArr[0] = item;
        } else {
          sectionArr[1] = item > this.height ? this.height : item;
          throw "\u4E2D\u65AD";
        }
      });
    } catch (e) {
      if (!sectionArr[0]) {
        sectionArr[0] = -100;
      }
    }
    const medianValue = (sectionArr[1] - sectionArr[0]) / 2 + sectionArr[0];
    const y = this.data.y < -medianValue ? sectionArr[1] : sectionArr[0];
    this.data.y = -y > -100 ? -100 : -y;
  }
  render = (props) => {
    return <div ontouchstart={(e) => {
      this.data.startY = e.detail.y;
    }} ontouchmove={this.touchMove.bind(this)} ontouchend={this.touchEnd.bind(this)} ontouchcancel={this.touchEnd.bind(this)} className="adm-floating-panel" style={{
      background: `${props.background || "#fff"}`,
      height: `${props.height || 300}px`,
      transform: `translateY(${this.data.y}px)`
    }}>
      <div className="adm-floating-panel-mask" style={{
        display: "flex"
      }} />
      <div className="adm-floating-panel-header"><div className="adm-floating-panel-bar" /></div>
      <scroll-view show-scrollbar={false} scroll-y className="adm-floating-panel-content">{props.children}</scroll-view>
    </div>;
  };
  css = () => {
    return `:root {
      --adm-color-primary: #9AC200;
      --adm-color-success: #7FA000;
      --adm-color-warning: #FFA600;
      --adm-color-danger: #FA6400;
      --adm-color-white: #ffffff;
      --adm-color-weak: #999999;
      --adm-color-light: #cccccc;
      --adm-border-color: #eeeeee;
      --adm-font-size-main: 13px;
      --adm-color-text: #333333;
      --adm-font-family:
        -apple-system,
        blinkmacsystemfont,
        "Helvetica Neue",
        helvetica,
        segoe ui,
        arial,
        roboto,
        "PingFang SC",
        "miui",
        "Hiragino Sans GB",
        "Microsoft Yahei",
        sans-serif;
    }
    .adm-floating-panel {
      box-shadow: -10px 0 10px 0 #f9f9f9;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      position: absolute;
      z-index: 900;
      top: 100%;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .adm-floating-panel-mask {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: -100%;
      background: transparent;
    }
    .adm-floating-panel-header {
      flex: none;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: grab;
      user-select: none;
    }
    .adm-floating-panel-bar {
      height: 3px;
      width: 20px;
      border-radius: 10px;
      background: var(--adm-color-light);
    }
    .adm-floating-panel-content {
      flex: 1;
      overflow-y: scroll;
    }`;
  };
};

// packages/avm-ui/src/components/floating-panel/index.ts
var floating_panel_default = FloatingPanel;
avm.define("avm-floating-panel", FloatingPanel);
export {
  floating_panel_default as default
};
