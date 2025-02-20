import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // title: "IORI Timer",
  // description:
  //   "Simple Yet Powerful Timer for Soccer Training and Video Recording",
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "IORI Timer",
      // description:
      //   "Simple Yet Powerful Timer for Soccer Training and Video Recording",
      themeConfig: {
        logo: "/logo.jpg",
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
        footer: {
          copyright: "Copyright © 2021-2025 IORI Timer Team",
        },
      },
    },
    cn: {
      label: "中文",
      lang: "zh-CN",
      title: "IORI计时器",
      // description: "运动，由我记录",
      themeConfig: {
        logo: "/logo.jpg",
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
        footer: {
          copyright: "Copyright © 2021-2024 一起踢足球训练营",
        },
      },
    },
  },
  cleanUrls: true,
  lastUpdated: true,
});
