// packages/avm-ui/src/components/water-mark/water-mark.tsx
var classPrefix = `adm-water-mark`;
var defaultProps = {
  fullPage: true
};
var WaterMark = class extends Component {
  data = {
    base64Url: ""
  };
  setBase64Url = (url) => {
    this.data.base64Url = url;
  };
  render = (props) => {
    props = Object.assign({}, defaultProps, props);
    const {
      zIndex = 2e3,
      gapX = 24,
      gapY = 48,
      width = 120,
      height = 64,
      rotate = -22,
      image,
      imageWidth = 120,
      imageHeight = 64,
      content,
      fontStyle = "normal",
      fontWeight = "normal",
      fontColor = "rgba(0,0,0,.15)",
      fontSize = 14,
      fontFamily = "sans-serif"
    } = props;
    const canvas = document.createElement("canvas");
    const ratio = window.devicePixelRatio;
    const ctx = canvas.getContext("2d");
    const canvasWidth = `${(gapX + width) * ratio}px`;
    const canvasHeight = `${(gapY + height) * ratio}px`;
    const markWidth = width * ratio;
    const markHeight = height * ratio;
    canvas.setAttribute("width", canvasWidth);
    canvas.setAttribute("height", canvasHeight);
    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.src = image;
        img.onload = () => {
          ctx.drawImage(img, -imageWidth * ratio / 2, -imageHeight * ratio / 2, imageWidth * ratio, imageHeight * ratio);
          ctx.restore();
          this.setBase64Url(canvas.toDataURL());
        };
      } else if (content) {
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        const markSize = Number(fontSize) * ratio;
        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
        ctx.fillStyle = fontColor;
        ctx.fillText(content, 0, 0);
        ctx.restore();
        this.setBase64Url(canvas.toDataURL());
      }
    } else {
      throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas");
    }
    return <div className={classNames(classPrefix, {
      [`${classPrefix}-full-page`]: props.fullPage
    })} style={{
      zIndex,
      backgroundSize: `${gapX + width}px`,
      backgroundImage: `url('${this.data.base64Url}')`
    }} />;
  };
  css = () => {
    return `
      .adm-water-mark {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        pointer-events: none;
        background-repeat: repeat;
      }
      .adm-water-mark-full-page {
        position: fixed;
      }
    `;
  };
};

// packages/avm-ui/src/components/water-mark/index.ts
var water_mark_default = WaterMark;
avm.define("avm-water-mark", WaterMark);
export {
  water_mark_default as default
};
