let path = require("path");
//let StylelintPlugin = require('stylelint-webpack-plugin');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    publicPath: "/",
    productionSourceMap: false,

    css: {
        extract: false
    },

    /*
    pages: {
        index: {
            // page 的入口
            entry: "src/main.js",
            // 模板来源
            template: "public/index.html",
            // 在 dist/index.html 的输出
            filename: "index.html"
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        indexH5: {
            // page 的入口
            entry: "src/mainH5.js",
            // 模板来源
            template: "public/index-h5.html",
            // 在 dist/index.html 的输出
            filename: "index-h5.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "大搜车家选"
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ["chunk-vendors", "chunk-common", "indexH5"]
        }
    },
    */

    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src"),
                api: resolve("./src/api"),
                tools: resolve("./src/utils/tools"),
                const: resolve("./src/utils/const"),
                core: resolve("./src/core"),
                src: resolve("./src"),
                styles: resolve("./src/styles"),
                variable: resolve("./src/core/variable"),
                components: resolve("./src/components"),
                utils: "@souche-f2e/souche-util",
                "som-ui": "@souche-ui/som-ui",
                durian: "@souche-ui/durian",
                package: resolve("package.json"),
                lemon: "@souche-ui/lemon"
            }
        },
        plugins: [
            // new BundleAnalyzerPlugin()
        ]
    },

    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                //path.resolve(__dirname, './src/styles/index.less'),
                path.resolve(__dirname, "./node_modules/@souche-ui/lemon/less/global.less")
            ]
        }
    }
};
