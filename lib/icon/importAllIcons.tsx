// 引入当前目录下 icon 文件夹的所有 svg 文件
// const requireContext = require.context('./icons', true, /\.svg$/);
// requireContext.keys().forEach(requireContext);
type RC = __WebpackModuleApi.RequireContext;

const importAll = (requireContext: RC) => requireContext.keys().forEach(requireContext);

try {
  importAll(require.context('./icons', true, /\.svg$/));
} catch {
  // 应付 eslint 的检查
  (() => { })();
}
