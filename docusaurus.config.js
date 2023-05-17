// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZAP-Hosting Docs',
  tagline: 'If you want more Power!',
  favicon: '/img/favicon-32x32.png',

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

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  plugins: [[ require.resolve('docusaurus-lunr-search'), {
    languages: ['en', 'de'] // language codes
  }]],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          //editUrl: 'https://github.com/zaphosting/docs/tree/master/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ZAP-Hosting Docs',
        logo: {
          href: "/docs/firststeps_register",
          alt: 'ZAP-Hosting',
          src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADhCAMAAABFoniZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUxpcf///+v36v///1e8VP///////1a8U////+q0pXoAAAAIdFJOUwDmHH/8TLSMCZYNfgAACOlJREFUeNrtndti6ygMRSOpYP//FzfmYoONQKR9CKD9cprJpcOqJDYyJq+XSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVSqVIjKQEjK2H23RnkJUBHsTkCKS0Yq8DKKhE+/iArOHzS86kHlACXglBebfhAre0LPKi4uqC5pePGkrCk9G59WMyGIHTbuNKga0+Si4ZWQEkTM0uGFbPrhtv0c2rYN2YzV9AtP/iTKea0XXm6ZzAwZfWjxuNbilbjPR1AdMbUdP2xeERcHuz4rzOTTn3GBj1DairRWCK90mVxcvpzZt223/4Y1fzajmcDn4k9S2LdiaM0eXgEWP7BgGG64kAstF16BF0wXW1CJqjSGtpxXDdZh11wmTpeH1MgZzyj3DhtWIytWrvkmRdxZz5Ak3HYr9j8nQr5owYTTYdJdL4ZXPvOl1nSrtiv2GRc/Lg9r7mHLJ0LcWFbZdQ2Y0WqhH1llxo8m9F2qDoViv3GTYEA/YxaGPHzXKx5XXqo234OorAJo1iwMeUjXjF/qtmx3Wmxn553HzrvBpAseuJKGz0bcroZWY2mJc5osLxdP+JzPQLK8KzTBaE6TFfDcIqFjeWdK/QqYtryfo0OuvYWdTTCct7xzedO6GMZ3VinL6jmtlhVUI76o3+P09VonD2OQlJEkQfVcUJq5szC1WnUH1QqqOLfCzBctnNWyzTL+hpMslJkuBUxssiThcKVdvUGxRBa2h5jvk6xd7Jo+C0OJt0KnXnOqC2ShL/GtgHD1qmHqzdwmq8d226aBspObrA4r2YTlsnD+zTSiRUoT1hJZKIyJJqw1slA2zhasRbJQlkEtWLRGFoYST3+DZRcwWYnV+hMsl4Vr3ASF7RxqwKIFljryPGzAsouUd1ke1mHhMuU9lpzq2q8Ky6xisq40quKqwAoXxda5b8C0mjAsrPP64UL3pMC5BaaMqwwrbTyvw8qVeBuayBZlsAIqMOuYrCsP30YJOVwFWBGVmwthqTvDYnREXKYOK0YVxahciVUy4nDBMN9Jk8M6EzDjvI6c1Tpvs3/sa0th5ah8Fr7WUrbkObMMH7BuqHxM0mKwTHGrVsQVYYWSlh6zAmuZrDMPS1u1PC4Pq4BqySwspVOC64BlbOnwnhWzMFgtxky9/wlnXzzOOYLVTFZl2Le9DqZR6hbOwzS6mNOzaDmT1SrVbvVXPmgMVizvDRPAtWhWzcLqxMbBsotmYbBaXbBw2Sz0cYI9sMySJqs1dgaWXdNkNbKKaSsvnIW+xHf04FfOQm+1SA5r5SyseMwirCML7bqs2NVLEZZZ1mRdwUJSWHbl8l4BULxuCHOXd386Q8tqGTmsby/vaFhVSKCheFsXWKrc0Qu39oI//4LAYjwJIyFrv7+o8GJ2KiRn/DZv7qI8s24n9jAHjY3Iqnwd/XYA/t51ftrPQ/OwKpRcgs44jL9r9MgyTVZ3l9hIW56W8aUL77DcO8wIsyD1wjKNUGS/lIKihdhKgQX7AMfn98ISvJ65m/x6qhRYQ2wyEqSh6WPFGfYrSZ/nHPnU/npa7QIPvaxKtGz2zGMqpEFOYKMO52BABuvh2Cn/NCwG1hC0QBol+PSh5rDg5uFQb4M29wK4FQNrhMYfUi7LDft2JEM6fSHxuZtDzu0D3p8frUFDTGCZqqFCy5Ytes6t2WndVubTvr7kA5eE1ICcDBoLG0GQCazRWjTc39k0h8SEZPED07O6c5ojhRbLBNp/firFJJZJZGfhwqChxf2VkV8tlqPSFAiarFOzFTN1oL4yCao0oKTe2Sf9DDJuzK8dJg+56p6NmUSs4RGRlXKEMGAesrM4Cksw3COEZBRovDzkZzwjqFhFNlaYXzDcfMjP4cIASaHSHYI0pseARbyVIuFY8BaBSTGy0t89xJKHr+7pH76eJXiLpOQxvbpCctTqnsOSZvLUsKrrGVBYfBLiSyPrs+reM1l9CmuoAo97dfEntQ7/Aev7rUOjTSI1pR/DGsmUUqNbJV3ufAoLB1ru1CxWz0L6Y1hWGrlfZrHKNYO6V9I9sHAfp763W8bZS+y/wxrou65ETXBh6/cjWDRQW5l2QRZkDXb6V1i0j9MobVisUvjxI/8AFu37MOVdeiWK2OvRf4KFdh/oShhJr3GCZEtkJ6z79lQaKLCK+2giFnZjiOmFhW7POCJZqOyR+HaLVd93RIJtSSJYx5ZJAOjZkfp9Fqu1VZKj1QvLdu5HHSUJ8z85NTdxiWABszF8pM6MYC8ftfboSmDhmKyku0SvkVJj36kElhkxBztgXSMpbizFLlilXzrANnhhfc/30xR2oVIXLBgwBTsKvK2Y7vx5ASz87A6pUWg9cuQeXdADiwZF5f7fLdRlizmSbOh+vwZ7YGWfPdzJBFhT9W2G3JInQX/KVJY77c9eUeKrOyqFpbDutSh/+Pmbp4L1npnCDj2A0xW4acqcpgr81/OekyYa9yZzToImfsjxJY9wNcCmg5VsZ0RPLzdXYXXzxnLd52bcm64zW034EISHI58aFvkzLWz87mx3+pd1hw9Z165zkXXC8m8OsPz3x1hrk/O6Z4ZFZ1AYfzoTuuhBn6TH4R94wjHnotE/Tg6evk6RnBhWenLO8bMJsGLVvsMKx135x5Sstw9TOjssky6J6Xjg8CVrmRyWJde88Y+hdIF2Nlju2oE/q5ayfiYcQUXpWvcByyeme4w7d9baVLCuDt4DFsbpEIppaP2PKSxzLQ5nhHXMX9ZykeX7CyFqnrCOc7AwhUUf7vwbr2ZRWrPMlVcY6lEB1vsp62GF+RRiVtvZZ8Okne5nxtBHCS8rwHKAz9kwdl/O49hm91nhlm9/ZKjnEP8pwfLOPvgsi6dJg+lNqRubJePLVHSpJlqoIqzzG58dInq/2l6XOKZe7uDtjqZzsPTiYF1+3Tz3Z0/edTA2+zIhf2kivMj6PsPZdYgu/fwpfPfJdWVr+n4WYn6KJBr8+M14XZvQTqlKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpOvQLPzmynZ6/SL0AAAAASUVORK5CYII=',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'All Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gameserverSidebar',
            position: 'left',
            label: 'Gameserver Guides',
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
                label: 'Rent a rootserver',
                href: 'https://zap-hosting.com/en/rent-a-root-server/',
              },
              {
                label: 'Rent a gameserver',
                href: 'https://zap-hosting.com/en/rent-a-gameserver/',
              },
              {
                label: 'Rent a TS3 server',
                href: 'https://zap-hosting.com/en/rent-a-teamspeak-3-server/',
              },
              {
                label: 'Rent a Discord Musicbot',
                href: 'https://zap-hosting.com/en/rent-a-discord-musicbot/',
              },
              {
                label: 'Rent a domain',
                href: 'https://zap-hosting.com/en/domain-check/',
              },
              {
                label: 'Rent a webspace',
                href: 'https://zap-hosting.com/en/webhosting-rent-a-webspace/',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/zaphosting',
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
                href: 'https://discord.gg/mTstGt2',
              },
              {
                label: 'Twitch',
                href: 'https://twitch.tv/zaphosting',
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

module.exports = config;
