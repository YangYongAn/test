// packages/avm-ui/src/components/infinite-scroll/infinite-scroll.tsx
var classPrefix = `adm-infinite-scroll`;
var InfiniteScrollContent = class extends Component {
  render = (props) => {
    return <view className={`${classPrefix}-tip`}>{props.hasMore ? <view><span className={`${classPrefix}-tip-text`}>{props.hasMoreText || "\u4E0A\u62C9\u7ACB\u5373\u5237\u65B0"}</span></view> : <span className={`${classPrefix}-tip-text`}>{props.notHasMoreText || "\u6CA1\u6709\u66F4\u591A\u4E86"}</span>}</view>;
  };
};
var InfiniteScroll = class extends Component {
  render = (props) => {
    props = Object.assign({}, { threshold: 250 }, props);
    const doLoadMore = () => {
      props.hasMore && props.loadMore();
    };
    return <scroll-view scroll-y show-scrollbar={false} bounces className={classPrefix} lower-threshold={props.threshold} onscrolltolower={doLoadMore}>
      {props.children}
      <InfiniteScrollContent hasMore={props.hasMore} {...props} />
    </scroll-view>;
  };
  css = () => {
    return `
      .adm-infinite-scroll {
        width: 100%;
        height: 100%;
        display: flex;
      }
      .adm-infinite-scroll-tip {
        width: 100%;
        text-align: center;
        background: #f2f2f2;
      }
      .adm-infinite-scroll-tip-text {
        width: 100%;
        text-align: center;
        color: #999;
        font-size: 12px;
        line-height: 14px;
        padding: 6px 0;
      }
    `;
  };
};

// packages/avm-ui/src/components/infinite-scroll/index.ts
var infinite_scroll_default = InfiniteScroll;
avm.define("avm-infinite-scroll", InfiniteScroll);
export {
  infinite_scroll_default as default
};
