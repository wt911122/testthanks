// const lang = process.env.lang;
const metas = {
    ja: {
        site: 'https://go.onelink.me/faIR/d588700',
        title: '第五人格 感謝祭イベント',
        description: '',
        image: '',
    },
    ch: {
        site: 'https://go.onelink.me/faIR/d588700',
        title: '《第五人格》感谢祭活动',
        description: '',
        image: '',
    }
}
const meta = metas['ja'];
module.exports = {
    devServer: {
        proxy: 'http://h5api.chatbot.nie.163.com'
    },
    // pluginOptions: {
    //     htmlWebpackPlugin: {
    //         metaSns: meta, 
    //         // 'meta': {
    //         //     'twitter:card': "summary_large_image",
    //         //     'twitter:site': meta.site,
    //         //     'twitter:title': meta.title,
    //         //     'twitter:description': meta.description,
    //         //     'twitter:image': meta.image,
    //         //     'property': { 
    //         //         'http-equiv': 'Content-Security-Policy', 
    //         //         'content': 'default-src https:' 
    //         //     },
    //         // }
    //     }
    // }
}
    // <meta name="twitter:card" content="summary_large_image">
    // <meta name="twitter:site" content="">
    // <meta name="twitter:title" content="Share Buttons Demo">
    // <meta name="twitter:description" content="Share Buttons is a project that aims to speed up the web by removing the need for Twitter's, Facebook's, or Google+'s external JavaScript that develope...">
    // <meta name="twitter:image" content="https://assets.codepen.io/172/internal/screenshots/pens/OPxbgq.default.png?fit=cover&amp;format=auto&amp;ha=false&amp;height=720&amp;quality=75&amp;v=2&amp;version=1426449821&amp;width=1279">
    // <meta name="twitter:creator" content="@sunnysinghio">
    // <meta property="og:image" content="https://assets.codepen.io/172/internal/screenshots/pens/OPxbgq.default.png?fit=cover&amp;format=auto&amp;ha=false&amp;height=720&amp;quality=75&amp;v=2&amp;version=1426449821&amp;width=1279" itemprop="thumbnailUrl">
    // <meta property="og:title" content="Share Buttons Demo">
    // <meta property="og:url" content="https://codepen.io/sunnysingh/details/OPxbgq">
    // <meta property="og:site_name" content="CodePen">
    // <meta property="og:description" content="Share Buttons is a project that aims to speed up the web by removing the need for Twitter's, Facebook's, or Google+'s external JavaScript that develope...">