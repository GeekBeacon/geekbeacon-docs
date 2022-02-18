module.exports = {
  title: 'GeekBeacon Documentation Site',
  tagline: 'GeekBeacon Is Your Guiding Light To All Things Geek!',
  url: 'https://geekbeacon.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'GeekBeacon', // Usually your GitHub org/user name.
  projectName: 'geekbeacon.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GeekBeacon Documentation',
      logo: {
        alt: 'GB Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/intro/welcome',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left',
          postsPerPage: 3,
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all'
          }

        },
        {
          href: '/blog/tags/engineering',
          label: 'Tech Blog',
          position: 'left',
          target: '_self'
        },
        {
          href: 'https://github.com/GeekBeacon/geekbeacon-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '482fae14eba68f1c2f52aa5729904ff7',
      indexName: 'geekbeacon',
      appId: 'LV2H11NOFN', // Optional, if you run the DocSearch crawler on your own
      contextualSearch: true,
      //searchParameters: {}, // Optional, if provided by Algolia
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'MeetingNotes',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Geek-Beacon/geekbeacon',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/geekbeacon',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/GeekBeacon/geekbeacon-docs/edit/master/'
          // routeBasePath: '/', // Set this value to '/'.

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
