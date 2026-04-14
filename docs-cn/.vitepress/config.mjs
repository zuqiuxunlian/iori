import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  label: "中文",
  lang: "zh-CN",
  title: "IORI计时器",
  description: "田径计时器，适用于运动员、教练和粉丝",
  locales: {
    root: {
      themeConfig: {
        nav: [
          { text: "主页", link: "/" },
          { text: "指南", link: "/guide/" },
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
        lastUpdated: {
          text: "最近更新",
        },
        footer: {
          copyright: "Copyright © 2021-2026 一起踢足球训练营",
        },
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "外观",
        outline: {
          label: "页面导航",
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        returnToTopLabel: "返回顶部",
      },
    },
  },
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    // search: {
    //   provider: "local",
    // },
  },
  sitemap: {
    hostname: "https://iori.zuqiuxunlian.com",
  },
});
