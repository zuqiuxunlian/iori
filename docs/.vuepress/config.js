// .vuepress/config.js
module.exports = {
  base: "/",
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "IORI计时器, IORI Timer, 计时器,IORITimer, ioritimer, iori speed,Stopwatch",
      },
    ],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],

    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-42RC5BYH40",
      },
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-42RC5BYH40');",
      ],
    ],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "IORI Timer",
      description:
        "Simple Yet Powerful Timer for Soccer Training and Video Recording",
    },
    "/cn/": {
      lang: "zh-CN",
      title: "IORI计时器",
      description: "运动，由我记录",
    },
  },
  themeConfig: {
    // logo: "/logo.jpg",
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        // lastUpdated: "Last Updated",
        nav: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/guide/" },
          {
            text: "Buy",
            link: "/guide.html#official-sales-channel",
          },
          // {
          //   text: "视频合集",
          //   link: "https://www.bilibili.com/video/BV1ZN4y1G7u7",
          // },
        ],
        lastUpdated: "Last Updated", // string | boolean
        editLinkText: "Edit this page on GitHub",
      },
      "/cn/": {
        selectText: "选择语言",
        label: "中文",
        lastUpdated: "最后更新",
        nav: [
          { text: "主页", link: "/cn/" },
          { text: "指南", link: "/cn/iori-pro/" },
          {
            text: "型号",
            ariaLabel: "Language Menu",
            items: [
              { text: "IORI 1S", link: "/cn/iori-1/" },
              { text: "IORI PRO", link: "/cn/iori-pro/" },
            ],
          },
          // {
          //   text: "测试教案",
          //   link: "/drill/",
          // },
          // { text: "购买", link: "/guide.html#官方购买渠道" },
          {
            text: "视频合集",
            link: "https://www.bilibili.com/video/BV1ZN4y1G7u7",
          },
          // {
          //   text: "教练试用申请",
          //   link: "https://docs.qq.com/form/page/DUmFoaXlCQnZQU3Zz",
          // },
        ],
        lastUpdated: "上次更新", // string | boolean
        editLinkText: "帮助我们改善此页面！",
      },
    },
    sidebar: {
      "/drill/": [
        "",
        "Common",
        "Football-soccer",
        "Football-rugby",
        "Frisbee",
        "Basketball",
        "Baseball",
        "Other",
      ],
    },
    displayAllHeaders: false, // 默认值：false
    smoothScroll: true,
    // repo: "zuqiuxunlian/iori-docs",
    // docsBranch: "main",
    // repoLabel: "Github",
    // editLinks: true,
  },
  plugins: [
    [
      "vuepress-plugin-baidu-tongji-analytics",
      {
        key: "86b7ffbe3429f402fed4ed377ecdfcad",
        dev: false,
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "G-42RC5BYH40",
      },
    ],
    [
      "sitemap",
      {
        hostname: "https://ioritimer.com",
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString();
        },
      },
    ],
  ],
};
