import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // title: "IORI Timer",
  // description:
  //   "Simple Yet Powerful Timer for Soccer Training and Video Recording",
  head: [
    [
      "meta",
      { property: "og:image", content: "https://ioritimer.com/iori.png" },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    [
      "meta",
      { name: "twitter:image", content: "https://ioritimer.com/iori.png" },
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.tiktok.com/embed.js",
      },
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-42RC5BYH40",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-2RHPF1PLEQ');",
    ],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "IORI Timer",
      description: "Track and Field Timer for Athletes, Coaches, and Fans",
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
        // editLink: {
        //   pattern: "https://github.com/zuqiuxunlian/iori/edit/main/docs/:path",
        //   text: "Edit this page on GitHub",
        // },
        lastUpdated: {
          text: "Last updated",
        },
        footer: {
          copyright: "Copyright © 2021-2026 YQT FC",
        },
      },
    },
    es: {
      label: "Español",
      lang: "es-ES",
      title: "IORI Timer",
      description: "Timer de Pista y Campo para Atletas, Entrenadores y Fans",
      themeConfig: {
        nav: [
          { text: "Hogar", link: "/es/" },
          { text: "Guía", link: "/es/guide/" },
          {
            text: "Colección de vídeos",
            items: [
              {
                text: "Pista y campo",
                link: "https://www.instagram.com/iori.speed/",
              },
              {
                text: "Combinado de la NFL",
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
            text: "Hogar",
            link: "/es",
          },
          {
            text: "Guía",
            link: "/es/guide",
          },
        ],
        editLink: {
          pattern: "https://github.com/zuqiuxunlian/iori/issues",
          text: "El informe está descrito incorrectamente",
        },
        lastUpdated: {
          text: "Última actualización",
        },
        footer: {
          copyright: "Copyright © 2021-2026 YQT FC",
        },
        sidebarMenuLabel: "Menú",
        darkModeSwitchLabel: "Tema oscuro",
        outline: {
          label: "En esta página",
        },
        docFooter: {
          prev: "Página anterior",
          next: "Página siguiente",
        },
        returnToTopLabel: "Volver arriba",
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
    hostname: "https://ioritimer.com",
  },
});
