const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Daybreak',
    description: 'A React UI Component Library.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/mokunshao/Documents/GitHub/daybreak/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Daybreak',
        description: 'A React UI Component Library.',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/mokunshao/Documents/GitHub/daybreak',
          templates:
            '/Users/mokunshao/Documents/GitHub/daybreak/node_modules/docz/node_modules/docz-core/dist/templates',
          docz: '/Users/mokunshao/Documents/GitHub/daybreak/.docz',
          cache: '/Users/mokunshao/Documents/GitHub/daybreak/.docz/.cache',
          app: '/Users/mokunshao/Documents/GitHub/daybreak/.docz/app',
          appPackageJson:
            '/Users/mokunshao/Documents/GitHub/daybreak/package.json',
          gatsbyConfig:
            '/Users/mokunshao/Documents/GitHub/daybreak/gatsby-config.js',
          gatsbyBrowser:
            '/Users/mokunshao/Documents/GitHub/daybreak/gatsby-browser.js',
          gatsbyNode:
            '/Users/mokunshao/Documents/GitHub/daybreak/gatsby-node.js',
          gatsbySSR: '/Users/mokunshao/Documents/GitHub/daybreak/gatsby-ssr.js',
          importsJs:
            '/Users/mokunshao/Documents/GitHub/daybreak/.docz/app/imports.js',
          rootJs:
            '/Users/mokunshao/Documents/GitHub/daybreak/.docz/app/root.jsx',
          indexJs:
            '/Users/mokunshao/Documents/GitHub/daybreak/.docz/app/index.jsx',
          indexHtml:
            '/Users/mokunshao/Documents/GitHub/daybreak/.docz/app/index.html',
          db: '/Users/mokunshao/Documents/GitHub/daybreak/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
