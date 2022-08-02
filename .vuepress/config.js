// .vuepress/config.js
module.exports = {
  title: "IORI计时器",
  description: "小孩子都会用的计时器，教练的好帮手",
  base: "/iori/",
  themeConfig: {
    // logo: "/assets/img/logo.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
      //   { text: "External", link: "https://google.com" },
    ],
  },
  repo: "zuqiuxunlian/iori-docs",
  repoLabel: "查看源码",
  docsRepo: "vuejs/vuepress",
  editLinks: true,
  editLinkText: "帮助我们改善此页面！",
};