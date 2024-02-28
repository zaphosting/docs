// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZAP-Hosting Docs',
  tagline: 'If you want more POWER!',
  favicon: '/img/favicon.ico',
  
  // Set the production url of your site here
  url: 'https://zap-hosting.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/guides/',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zaphosting', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  onBrokenAnchors: 'throw',
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/srcDark.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#1b1b1d',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/srcDark.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/srcDark.png',
            color: '#18e888',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/srcDark.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
    [ 
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'de'] // language codes
      }
    ]
  ],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/zaphosting/docs/tree/master/',
          editLocalizedFiles: true
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    // Replace with your project's social card
    //image: 'img/docusaurus-default/docusaurus-social-card.jpg',
    image: undefined,
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'ZAP-Hosting Docs',
      logo: {
        href: "/docs/firststeps-register",
        alt: 'ZAP-Hosting',
        src: 'img/src.png',
        srcDark: 'img/srcDark.png'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'General',
        },
        {
          type: 'docSidebar',
          sidebarId: 'gameserverSidebar',
          position: 'left',
          label: 'Gameserver',
        },
        {
          type: 'docSidebar',
          sidebarId: 'vpsrootSidebar',
          position: 'left',
          label: 'vRootserver',
        },
        {
          type: 'docSidebar',
          sidebarId: 'dedicatedserverSidebar',
          position: 'left',
          label: 'Dedicated Server',
        },
        {
          type: 'docSidebar',
          sidebarId: 'domainwebspaceSidebar',
          position: 'left',
          label: 'Domain & Webspace',
        },
        {
          type: 'docSidebar',
          sidebarId: 'voiceserverbotSidebar',
          position: 'left',
          label: 'Voicebot & Voiceserver',
        },
        {
          type: 'html',
          position: 'right',
          className: 'externalLink',
          value: (() => {
            switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
              case "de": return '<a href="https://zap-hosting.com/de/server-mieten/">Server mieten</a>';
              default: return '<a href="https://zap-hosting.com/en/server-hosting/">Rent a server</a>';
            }
          })(),
        },
        {
          type: 'html',
          position: 'right',
          className: 'externalLink',
 
          value: (() => {
            switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
              case "de": return '<a href="https://zap-hosting.com/de/">Zurück zu ZAP-Hosting ⤾</a>';
              default: return '<a href="https://zap-hosting.com/en/">Back to ZAP-Hosting ⤾</a>';
            }
          })(),
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Rent a Server',
          items: [
            {
              label: 'Rent a VPS',
              href: 'https://zap-hosting.com/en/rent-a-virtual-server/',
            },
            {
              label: 'Rent a RootServer',
              href: 'https://zap-hosting.com/en/rent-a-root-server/',
            },
            {
              label: 'Rent a Gameserver',
              href: 'https://zap-hosting.com/en/rent-a-gameserver/',
            },
            {
              label: 'Rent a TeamSpeak server',
              href: 'https://zap-hosting.com/en/rent-a-teamspeak-3-server/',
            },
            {
              label: 'Rent a Discord Musicbot',
              href: 'https://zap-hosting.com/en/rent-a-discord-musicbot/',
            },
            {
              label: 'Rent a Domain',
              href: 'https://zap-hosting.com/en/domain-check/',
            },
            {
              label: 'Rent a Webspace',
              href: 'https://zap-hosting.com/en/webhosting-rent-a-webspace/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'X',
              href: 'https://x.com/zaphosting',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/zaphosting/',
            },
            {
              label: 'Blog',
              href: 'https://zap-hosting.com/en/blog/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/zaphosting',
            },
            {
              label: 'TikTok',
              href: 'https://tiktok.com/@zaphosting',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@zaphosting',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Changelog',
              href: 'https://zap-hosting.com/en/changelog/',
            },
            {
              label: 'Ticketsupport',
              href: 'https://zap-hosting.com/en/customer/support/',
            },
            {
              label: 'Server Status',
              href: 'https://status.zap-hosting.com/',
            },
            {
              label: 'Smokeping',
              href: 'http://smoky.zap-hosting.com/smokeping/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              href: 'https://zap-hosting.com/en/terms/',
            },
            {
              label: 'Imprint',
              href: 'https://zap-hosting.com/en/imprint/',
            },
            {
              label: 'Privacy Policy',
              href: 'https://zap-hosting.com/en/privacy-policy/',
            },
            {
              label: 'Security',
              href: 'https://zap-hosting.com/en/security/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZAP-Hosting GmbH & Co. KG`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

export default config;