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
  onDuplicateRoutes: 'throw',
  onBrokenAnchors: 'warn',
 

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  customFields: {
    marketingSite: 'https://zap-hosting.com',
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'fr', 'ar', 'pt', 'th', 'pl', 'ja', 'sv', 'it', 'nl', 'zh'],
    localeConfigs: {
    ar: {
      direction: 'rtl',
      label: 'العربية',
      htmlLang: 'ar',
    },
    de: {
      label: 'Deutsch',
      htmlLang: 'de-DE',
    },
    en: {
      label: 'English',
      htmlLang: 'en-US',
    },
    es: {
      label: 'Español',
      htmlLang: 'es-ES',
    },
    fr: {
      label: 'Français',
      htmlLang: 'fr-FR',
    },
    ja: {
      label: '日本語',
      htmlLang: 'ja-JP',
    },
    pl: {
      label: 'Polski',
      htmlLang: 'pl-PL',
    },
    pt: {
      label: 'Português',
      htmlLang: 'pt-PT',
    },
    th: {
      label: 'ไทย',
      htmlLang: 'th-TH',
    },
    sv: {
      label: 'Svenska',
      htmlLang: 'sv-SV',
    },
    it: {
      label: 'Italiano',
      htmlLang: 'it-IT',
    },
    nl: {
      label: 'Nederlands',
      htmlLang: 'nl-NL',
    },
    zh: {
      label: '简体中文',
      htmlLang: 'zh-CN',
    },
  },    
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
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/docs/contribution-guides', from: '/docs/contribution-submission',
          },
          {
            to: '/docs/contribution-guides-guidelines', from: '/docs/contribution-guidelines',
          },
          {
            to: '/docs/ets2-server-modding', from: '/docs/trucksim-dlc',
          },
          {
            to: '/docs/fivem-dashboard', from: '/docs/fivem-vrp-changemoneyicon',
          },
          {
            to: '/docs/fivem-dashboard', from: '/docs/fivem-vrp-removespeedo',
          },
          {
            to: '/docs/fivem-dashboard', from: '/docs/altv-firststeps-dashboard',
          },
          {
            to: '/docs/fivem-dashboard', from: '/docs/altv-installresources',
          },
          {
            to: '/docs/fivem-dashboard', from: '/docs/ragemp-firststeps-dashboard',
          },
          {
            to: '/docs/fivem-dashboard', from: '/docs/ragemp-installpackages',
          },
          {
            to: '/docs/minecraft-forge-fabric-add-mods-modpacks', from: '/docs/minecraft_forge_add_mods',
          },
          {
            to: '/docs/vserver-dedicated-comparison', from: '/docs/vserver-root-difference',
          },
          {
            to: '/docs/welcome', from: '/docs/firststeps-rent-contractorprepaid',
          },
          {
            to: '/docs/gameserver-scheduled-tasks', from: '/docs/gameserver-restartplaner',
          },
          {
            to: '/docs/welcome', from: '/docs/account-contractsandprepaid',
          },
          {
            to: '/docs/welcome', from: '/docs/dayofinfamy-firststeps-dashboard',
          },
          {
            to: '/docs/welcome', from: '/docs/dayofinfamy-troubleshooting-common-issues',
          },
          {
            to: '/docs/dedicated-linux-openclawn', from: '/docs/vserver-linux-openclaw',
          }
        ],
      },
    ],
    [
    '@docusaurus/plugin-google-tag-manager',
    {
      containerId: 'GTM-5R9FLS69',
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
          editLocalizedFiles: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
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
  (
    
    {
    // Replace with your project's social card
    //image: 'img/docusaurus-default/docusaurus-social-card.jpg',
    image: undefined,
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'ZAP-Hosting Docs',
      logo: {
        href: "/docs/welcome",
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
          label: 'VPS',
        },
        {
          type: 'docSidebar',
          sidebarId: 'dedicatedserverSidebar',
          position: 'left',
          label: 'Dedicated Server',
        },
        {
          type: 'docSidebar',
          sidebarId: 'domainSidebar',
          position: 'left',
          label: 'Domain',
        },
        {
          type: 'docSidebar',
          sidebarId: 'webspaceSidebar',
          position: 'left',
          label: 'Webspace',
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
              case "en": return '<a href="https://zap-hosting.com/en/server-hosting/">Rent a server</a>';
              case "es": return '<a href="https://zap-hosting.com/en/server-hosting/">Alquilar servidor</a>';
              case "fr": return '<a href="https://zap-hosting.com/en/server-hosting/">Louer un serveur</a>';
              case "ar": return '<a href="https://zap-hosting.com/en/server-hosting/">استئجار خادم</a>';
              case "pt": return '<a href="https://zap-hosting.com/en/server-hosting/">Alugar servidor</a>';
              case "th": return '<a href="https://zap-hosting.com/en/server-hosting/">เช่าเซิร์ฟเวอร์</a>';
              case "pl": return '<a href="https://zap-hosting.com/en/server-hosting/">Wynajmij serwer</a>';
              case "ja": return '<a href="https://zap-hosting.com/en/server-hosting/">サーバーをレンタル</a>';
              case "sv": return '<a href="https://zap-hosting.com/en/server-hosting/">Hyr en server</a>';
              case "it": return '<a href="https://zap-hosting.com/en/server-hosting/">Noleggia un server </a>';
              case "nl": return '<a href="https://zap-hosting.com/en/server-hosting/">Huur een server</a>';
              case "zh": return '<a href="https://zap-hosting.com/en/server-hosting/">租用服务器</a>';
              default: return '<a href="https://zap-hosting.com/en/server-hosting/">Rent a server</a>';
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
              href: 'https://smoky.zap-hosting.com/smokeping/',
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
      copyright: `Copyright © ${new Date().getFullYear()} ZAP-Hosting GmbH`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
    experimental_faster: true
  }
  
};

export default config;