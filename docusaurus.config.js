module.exports = {
  title: 'Geek Beacon Documentation Site',
  tagline: 'Geek Beacon Is Your Guiding Light To All Things Geek!',
  url: 'https://geekbeacon.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'GeekBeacon', // Usually your GitHub org/user name.
  projectName: 'geekbeacon.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Geek Beacon Documentation',
      logo: {
        alt: 'GB Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/intro/welcome',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'MeetingNotes', 
          position: 'left'
        },
        {
          href: 'https://github.com/GeekBeacon/geekbeacon-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
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
