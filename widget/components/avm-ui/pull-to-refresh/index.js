// packages/avm-ui/src/utils/with-default-props.tsx
function mergeProps(defaultProps2, props) {
  return Object.assign({}, defaultProps2, props);
}

// packages/avm-ui/src/utils/sleep.ts
var sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

// packages/avm-ui/src/components/pull-to-refresh/pull-to-refresh.tsx
var classPrefix = `adm-pull-to-refresh`;
var defaultProps = {
  pullingText: "\u4E0B\u62C9\u5237\u65B0",
  canReleaseText: "\u91CA\u653E\u7ACB\u5373\u5237\u65B0",
  refreshingText: "\u52A0\u8F7D\u4E2D\u2026\u2026",
  completeText: "\u5237\u65B0\u6210\u529F",
  completeDelay: 500,
  onRefresh: () => {
  }
};
var PullToRefresh = class extends Component {
  data = {
    moveY: 0,
    startY: 0,
    status: "pulling"
  };
  async doRefresh() {
    const props = mergeProps(defaultProps, this.props);
    this.data.status = "refreshing";
    try {
      await props.onRefresh();
      this.data.status = "complete";
    } catch (e) {
      this.data.status = "pulling";
      throw e;
    }
    if (props.completeDelay > 0) {
      await sleep(props.completeDelay);
    }
    this.data.moveY = 0;
  }
  touchMove(e) {
    const threshold = this.props.threshold ?? 60;
    if (this.data.moveY > threshold) {
      this.data.status = "canRelease";
      this.data.moveY = this.data.moveY + (e.touches[0].clientY - this.data.startY) * 0.08;
    } else {
      this.data.moveY = this.data.moveY + e.touches[0].clientY - this.data.startY;
    }
    this.data.startY = e.touches[0].clientY;
  }
  touchEnd() {
    const headHeight = this.props.headHeight ?? 40;
    if (this.data.moveY > headHeight) {
      this.data.moveY = headHeight;
      this.doRefresh();
    }
  }
  render = (p) => {
    const props = mergeProps(defaultProps, p);
    const headHeight = props.headHeight ?? 40;
    const renderStatusText = () => {
      if (props.renderText) {
        return props.renderText?.(this.data.status);
      }
      if (this.data.status === "pulling")
        return props.pullingText;
      if (this.data.status === "canRelease")
        return props.canReleaseText;
      if (this.data.status === "refreshing")
        return props.refreshingText;
      if (this.data.status === "complete")
        return props.completeText;
    };
    return <div className={classPrefix} ontouchstart={(e) => {
      this.data.startY = e.touches[0].clientY;
    }} ontouchmove={this.touchMove.bind(this)} ontouchend={this.touchEnd.bind(this)}>
      <div className={`${classPrefix}-head`} style={{ height: this.data.moveY + "px" }}><div className={`${classPrefix}-head-content`} style={{ height: headHeight + "px" }}>{renderStatusText()}</div></div>
      <div className={`${classPrefix}-content`}>{props.children}</div>
    </div>;
  };
};

// packages/avm-ui/src/components/pull-to-refresh/index.ts
var pull_to_refresh_default = PullToRefresh;
export {
  pull_to_refresh_default as default
};
