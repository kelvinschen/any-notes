import "nextra-theme-docs/style.css";

import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-rust");
require("prismjs/components/prism-haskell");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-ocaml");
// 高亮扩展 https://github.com/PrismJS/prism/tree/master/components

// 配置参考：https://nextra.vercel.app/

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
