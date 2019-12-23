const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mokunshao/Documents/GitHub/daybreak/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/mokunshao/Documents/GitHub/daybreak/README.md"))),
  "component---docs-test-mdx": hot(preferDefault(require("/Users/mokunshao/Documents/GitHub/daybreak/docs/test.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mokunshao/Documents/GitHub/daybreak/.docz/src/pages/404.js")))
}

