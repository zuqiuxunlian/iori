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
      head: [
        [
          "script",
          {
            async: "",
            src: "https://www.tiktok.com/embed.js",
          },
        ],
      ],
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/guide/" },
          // {
          //   text: "Buy",
          //   link: "/guide.html#official-sales-channel",
          // },
          {
            text: "Video Collection",
            items: [
              {
                text: "Track and Field",
                link: "https://www.instagram.com/iori.speed/",
              },
              {
                text: "NFL Combine",
                link: "https://www.tiktok.com/@ioritimer/collection/Football-7475011203157347079",
              },
            ],
          },
        ],
        socialLinks: [
          {
            icon: "instagram",
            link: "https://www.instagram.com/iori.speed/",
          },
          {
            icon: "tiktok",
            link: "https://www.tiktok.com/@ioritimer",
          },
        ],
        sidebar: [
          {
            text: "Home",
            link: "/",
          },
          {
            text: "Guide",
            link: "/guide",
          },
        ],
        footer: {
          copyright: "Copyright © 2021-2025 YQT FC",
        },
      },
    },
    cn: {
      label: "中文",
      lang: "zh-CN",
      title: "IORI计时器",
      themeConfig: {
        nav: [
          { text: "主页", link: "/cn/" },
          { text: "指南", link: "/cn/guide/" },
          // {
          //   text: "型号",
          //   ariaLabel: "Language Menu",
          //   items: [
          //     { text: "IORI 1S", link: "/cn/iori-1/" },
          //     { text: "IORI PRO", link: "/cn/iori-pro/" },
          //   ],
          // },
          // {
          //   text: "测试教案",
          //   link: "/drill/",
          // },
          // { text: "购买", link: "/guide.html#官方购买渠道" },
          {
            text: "评测合集",
            link: "https://v.douyin.com/iP3phvVo/",
          },
          // {
          //   text: "教练试用申请",
          //   link: "https://docs.qq.com/form/page/DUmFoaXlCQnZQU3Zz",
          // },
        ],
        socialLinks: [
          {
            icon: "tiktok",
            link: "https://v.douyin.com/iP3Gg77v/",
          },
        ],
        sidebar: [
          {
            text: "主页",
            link: "/cn",
          },
          {
            text: "指南",
            link: "/cn/guide",
          },
        ],
        footer: {
          copyright: "Copyright © 2021-2025 一起踢足球训练营",
        },
        sidebarMenuLabel: "菜单",
        outline: {
          label: "页面导航",
        },
        returnToTopLabel: "返回顶部",
      },
    },
  },
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.jpg",
    // search: {
    //   provider: "local",
    // },
  },
});
