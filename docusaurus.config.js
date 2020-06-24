module.exports = {
  title: "Welcome to GeekBeacon",
  tagline: "Geek Beacon Is Your Guiding Light To All Things Geek!",
  url: "https://geekbeacon.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "GeekBeacon", // Usually your GitHub org/user name.
  projectName: "geekbeacon.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Geek Beacon Documentation",
      logo: {
        alt: "GB Logo",
        src: "img/logo.png",
      },
      links: [
        {
          to: "docs/intro/welcome",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
          postsPerPage: 3,
          blogSidebarCount: "ALL",
          feedOptions: {
            type: "all",
          },
        },
        {
          href: "/blog/tags/engineering",
          label: "Tech Blog",
          position: "left",
          target: "_self",
        },
        {
          href: "https://github.com/GeekBeacon/geekbeacon-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: "266aced93096c0cb9effe165264556f4",
      indexName: "geekbeacon",
      //appId: '', // Optional, if you run the DocSearch crawler on your own
      //algoliaOptions: {}, // Optional, if provided by Algolia
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Main Website",
              href: "https://www.geekbeacon.org",
            },
            {
              label: "Forum",
              href: "https://forum.geekbeacon.org",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Mailing Lists",
              href: "https://lists.geekbeacon.org",
            },
          ],
        },
        {
          title: "Tech",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Geek-Beacon/geekbeacon-docs",
            },
          ],
        },
        {
          title: "GB Social",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCG_4Qltzr18ngVyoyOg-frQ",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/GeekBeacon/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/geekbeacon",
            },
          ],
        },
        {
          title: "Nixie Social",
          items: [
            {
              label: "YouTube",
              href: "https://twitter.com/nixiepixel",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/nixiepixel/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/nixiepixel",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/GeekBeacon/geekbeacon-docs/edit/master/",
          // routeBasePath: '/', // Set this value to '/'.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
