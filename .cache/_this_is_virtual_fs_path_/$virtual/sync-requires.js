
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("D:\\Container\\Zwamp\\Quick-Cut-Gatsby-React\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\Container\\Zwamp\\Quick-Cut-Gatsby-React\\src\\pages\\index.js"))
}

