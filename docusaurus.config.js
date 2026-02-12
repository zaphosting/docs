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
            to: '/docs/dedicated-linux-openclaw', from: '/docs/vserver-linux-openclaw',
          },
          {
            to: '/docs/vserver-linux-bitwarden', from: '/docs/dedicated-linux-bitwarden',
          },
          {
            to: '/docs/vserver-linux-cockpit', from: '/docs/dedicated-linux-cockpit',
          },
          {
            to: '/docs/vserver-linux-curl', from: '/docs/dedicated-linux-curl',
          },
          {
            to: '/docs/vserver-linux-gitlab', from: '/docs/dedicated-linux-gitlab',
          },
          {
            to: '/docs/vserver-linux-joplin', from: '/docs/dedicated-linux-joplin',
          },
          {
            to: '/docs/vserver-linux-nextcloud', from: '/docs/dedicated-linux-nextcloud',
          },
          {
            to: '/docs/vserver-linux-nodejs', from: '/docs/dedicated-linux-nodejs',
          },
          {
            to: '/docs/vserver-linux-php', from: '/docs/dedicated-linux-php',
          },
          {
            to: '/docs/vserver-linux-plausible', from: '/docs/dedicated-linux-plausible',
          },
          {
            to: '/docs/vserver-linux-plesk', from: '/docs/dedicated-linux-plesk',
          },
          {
            to: '/docs/vserver-linux-python', from: '/docs/dedicated-linux-python',
          },
          {
            to: '/docs/vserver-linux-speedtest-cli', from: '/docs/dedicated-linux-speedtest-cli',
          },
          {
            to: '/docs/vserver-linux-standard-notes', from: '/docs/dedicated-linux-standard-notes',
          },
          {
            to: '/docs/vserver-linux-supabase', from: '/docs/dedicated-linux-supabase',
          },
          {
            to: '/docs/vserver-linux-ts6', from: '/docs/dedicated-linux-ts6',
          },
          // vserver-linux → dedicated-linux redirects
          {
            to: '/docs/dedicated-linux-certbot', from: '/docs/vserver-linux-certbot',
          },
          {
            to: '/docs/dedicated-linux-databases', from: '/docs/vserver-linux-databases',
          },
          {
            to: '/docs/dedicated-linux-docker', from: '/docs/vserver-linux-docker',
          },
          {
            to: '/docs/dedicated-linux-ftp-install', from: '/docs/vserver-linux-ftp-install',
          },
          {
            to: '/docs/dedicated-linux-git', from: '/docs/vserver-linux-git',
          },
          {
            to: '/docs/dedicated-linux-java', from: '/docs/vserver-linux-java',
          },
          {
            to: '/docs/dedicated-linux-javascript', from: '/docs/vserver-linux-javascript',
          },
          {
            to: '/docs/dedicated-linux-jitsi', from: '/docs/vserver-linux-jitsi',
          },
          {
            to: '/docs/dedicated-linux-mastodon', from: '/docs/vserver-linux-mastodon',
          },
          {
            to: '/docs/dedicated-linux-odoo', from: '/docs/vserver-linux-odoo',
          },
          {
            to: '/docs/dedicated-linux-openvpn', from: '/docs/vserver-linux-openvpn',
          },
          {
            to: '/docs/dedicated-linux-phpmyadmin', from: '/docs/vserver-linux-phpmyadmin',
          },
          {
            to: '/docs/dedicated-linux-plex', from: '/docs/vserver-linux-plex',
          },
          {
            to: '/docs/dedicated-linux-screen', from: '/docs/vserver-linux-screen',
          },
          {
            to: '/docs/dedicated-linux-ssh-server', from: '/docs/vserver-linux-ssh-server',
          },
          {
            to: '/docs/dedicated-linux-webserver', from: '/docs/vserver-linux-webserver',
          },
          {
            to: '/docs/dedicated-linux-wordpress', from: '/docs/vserver-linux-wordpress',
          },
          {
            to: '/docs/dedicated-linux-xrdp', from: '/docs/vserver-linux-xrdp',
          },
          // dedicated-windows → vserver-windows redirects
          {
            to: '/docs/vserver-windows-bitwarden', from: '/docs/dedicated-windows-bitwarden',
          },
          {
            to: '/docs/vserver-windows-docker', from: '/docs/dedicated-windows-docker',
          },
          {
            to: '/docs/vserver-windows-joplin', from: '/docs/dedicated-windows-joplin',
          },
          {
            to: '/docs/vserver-windows-plesk', from: '/docs/dedicated-windows-plesk',
          },
          {
            to: '/docs/vserver-windows-speedtest-cli', from: '/docs/dedicated-windows-speedtest-cli',
          },
          {
            to: '/docs/vserver-windows-supabase', from: '/docs/dedicated-windows-supabase',
          },
          {
            to: '/docs/vserver-windows-ts6', from: '/docs/dedicated-windows-ts6',
          },
          // vserver-windows → dedicated-windows redirects
          {
            to: '/docs/dedicated-windows-ftpserver', from: '/docs/vserver-windows-ftpserver',
          },
          {
            to: '/docs/dedicated-windows-git', from: '/docs/vserver-windows-git',
          },
          {
            to: '/docs/dedicated-windows-installmysql', from: '/docs/vserver-windows-installmysql',
          },
          {
            to: '/docs/dedicated-windows-javascript', from: '/docs/vserver-windows-javascript',
          },
          {
            to: '/docs/dedicated-windows-nodejs', from: '/docs/vserver-windows-nodejs',
          },
          {
            to: '/docs/dedicated-windows-plex', from: '/docs/vserver-windows-plex',
          },
          {
            to: '/docs/dedicated-windows-python', from: '/docs/vserver-windows-python',
          },
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
          type: 'dropdown',
          label: 'Gameserver',
          position: 'left',
          className: 'custom-dropdown-gameserver',
          items: [
            { type: 'docSidebar', sidebarId: 'gameserverSidebar', label: 'Gameserver' },
          ],
        },
        {
          type: 'dropdown',
          label: 'VPS',
          position: 'left',
          className: 'custom-dropdown-vps',
          items: [
            { type: 'docSidebar', sidebarId: 'vpsrootSidebar', label: 'VPS' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Dedicated Server',
          position: 'left',
          className: 'custom-dropdown-dedicated',
          items: [
            { type: 'docSidebar', sidebarId: 'dedicatedserverSidebar', label: 'Dedicated Server' },
          ],
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
          type: 'dropdown',
          label: 'Software',
          position: 'left',
          className: 'custom-dropdown-software',
          items: [
            { type: 'docSidebar', sidebarId: 'softwareSidebar', label: 'Software' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Rent a Server',
          position: 'right',
          className: 'custom-dropdown-rent',
          items: [
            { label: 'ZAP-Hosting', href: 'https://zap-hosting.com/en/server-hosting/' },
          ],
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