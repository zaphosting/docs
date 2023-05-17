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
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACUCAMAAAAeTeTrAAABI1BMVEUAAAAAAAAAAAAY6IgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY6IgAAAAY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgY6IgAAAAY6IhSRaLoAAAAX3RSTlMA/IL9BPnyCgjZL+XrDugra9/uxhXPRiiUUL/207yxSsKOfLU+OxGIGVklNRe5rXdmXG4d26hCIpgfyqBUm3Jhq+alI0b07Lty3NCYUjYOBIl+FVwwHmYJo7M8q8UqJ6NWahkAABO7SURBVHja7Fp3X9s6FJVD7JA9yCQJ2RCSF7IZCXuGUUahdL4q3/9TPEuOLclL7vuV/lF8+muhwbWso3vPPfe6wIULFy5cuHDhwoULFy5cuHDhwoWL94F6d9MHXDhAOLcmQTFVbQEX9vAFqgWoQNrabwIXlsj01vIQQgEByih46svAhQl8uYORwhTEwN8karE94EKHTHWSlwkSoYxUNd1bFeDir/7dOnBBsJ7bSkAIRcRNcJpGlXC5XYkLC7rEld4QuACYFg/WdJR1UvmQ0BLubwURVSjGItntdfDu0eptSapQ+bMlnZ63q2Vh8VOheBgF7xne0oF/EVNQrB2ZOatkaTeoXhKf5t5tcWxVUyiocJqNNtqWPOz0ysIiHfOp6g54f/hnf0tS611kbTMMbNHI+oWFeiXGpSR4T/Btb/hVTRdXPAHAR7O3FsL/AFuLNngvyBx2NE2P7+bYKvf57Px19vj4+DR7/vZRF16elOpVI8dH/4C/H97SaVz1A0K5Z9D0l5uLpTnGxeX119knNrxyYzV3hULlbw+vVjclLqgS4tmGUdMfwN3JnMLl7U9DVRAXUpdfPfp7O+3mvhYXMFTr6WX68+zpBX399+ri4vLk5FIOsCX59+Xss87ElqZabAYrf6dXrRPFgRNPA+jx8YtMzJe7e/m7u7vzDx/OX2+vFbq+fzSo3qAm/QGv2ow2Sul0PfOH47fZq4VUphLTnMnq918xMUs/KJk6m53Ml+RPr+6N9bSu1FNcJE4tvGombYeMF9gg2st2UqOglJAi/lQn2/vFE/l0psNnp5q+fRBX009IHZo/5BPiCtE1v779gMTr4UH+8+cVZuvW3KmtSYt0FAsmc9XtYkSyQyg1sJpdDwerIQHSEEIrA+ezoo9fL09YXN58A04QWFFCAPcraa/FSVzPl+RfcyW8vt59VJe9wSR+sDh+T0FcmC9pXAcMYgLkohg2feBKAj8xAvUVJrIB4AzPcyNundmqkLKd0Oqhdatyjrm6ubpQ6JrfzP5ViuMr/uDJ0t5unsYXdO0CGmkJfWoHREHVpGBvSIpdpqGeSLYFnODlcr6kw3wGHKEDsVTFUEYCC7xisp7A+ePNHC2EsvEcyPhwgcj6YqcuhxIe2TeY1D+F/MgSYMEgdrER+tzqejga2Cqdr5LDX29RlhCgOMC62+SS3YUIYiHbsAlcTNYjSsjnq/nCNFw93zsga8+TR/sos/ExgnwIMDLUFaJjQpUFXeOmjeKUYQ3TfyaHFkvWM0CoJjZ5oqUuny9uJq0CV2YEl70HOfe+3SJjisTr+vURy/6j7XszjAEbbiFHZAXZnbcLmA97tgqWncN+Qv75vlqvGK6ulCOMQ8HDGYVOSNb7PQHTOH74ju8+k7/Dev90g7jS1jq3OIZuAS6Q2Ps/ZK0AGqWgo9xNpIEpegLa48SnFCaWLWUDFShCOPUBO1ShQL2vOTUNr5cTFEEXM813PX+/xOqFz8XMpST3T7U5hADHuhmY39G+qwxXKDCgE7ZKplyJUCAh/jonbKkyEpCUR7VlK5CHMoLqxFNIeTIm9RCL0/yKBNGHx2tFva4+mbmGiUCKlgBzgMUuFCEX8SadgxEoGMql8tXAlon69hWuBOhv4sP+QSXGpWJ9jhcLTG1rxBpasNAY+LVx37hkqEPflO7m4sfj3Te527mTF/j0+kNe8cu94Yal45C6C0HEZY0oNdm6DsZN92gjWmC5Yi/W/cg/NHRzknbNBkC4W1LZUiW3pB1fFdgghm+UA779Wkh7ORhr6X3v7QWOXTX7npCWnX9/etA7oUFKO/DQNBZBT18BeuSC3HSq0flwbOAqlBp7BoPBxjiV0IWXANf07QSiWq0aineV+7cFV9dnWLpXtRWEfTsrFEeLTZG0NyoFdaPBbNqnCy7UOyts4Q4aLWIIqmyEasgDYBM9Qr5ksmh2ZRRnMEowG5a2acVhiUT31iZIy3gIwIbaADDIkh8L2B5jh7jATF2BROYOsAa2iJE9RXtjHXW3+Y6+4fr5fHt1raxycX1zZ2zaOnmVqfxxvylvpIaYL5sOapLRAI1ooMDwkaWjNajzFIdN1oAdxlU6SPgQ5BiBzJc0Z0r8aHJC83kArNHHwtJXzVF6qrUUo129WN6fvZzfyVOal7N7XRFsZ8l/hgji10Fe0MLFwwOcoM/wEd/TRwbBWhQw8MpnvAUJdNsNF6FgDLt/5QJP/GiXuURMA0sk/VBgEr3lGQnqwLPYTwI+kpvFvBaRK9rocIBuHHI0Yd5jy10MEDTYHKuYDk82EEemFfEICnR698kkhfiehp+5aG0ZWCKLjSOdqeu9jqTq5sjT9tpPedpVPyTvWqljWUWfFYET7DJPW/bqZIJgw7ZvI8qkwpeCFCRNvT/dILbO1bNKMevbhFZDNKqiN53FEwNsVcf9pE1QjRPqhbDcjdIqjo1kDzhAKU8zItbpuwSd6UkWUkhENcViEpTq/mbYj5Iyx5RiYI0VdEHHODGYQGJVo+aWdmMiqEolneaSuuZARqQJ+AivMgebZe+iARcLKyyXaVK7YAFKzQRGPj9/nZ+8UMcl0AFovluiLUGjtqzn1vKaaTouLRsb5YQm6iNP1KtLT5yFU+AAA4arUYvmgNZnySY/WG1bUVsrooUCXA0z1vH1BVCo4Av5zrSFPU7XNHQWRQ5b1UGLoiLTLZCestMPGx8eDxZLTtQ9aG2T2iQLUZNphym13XxGa6A1iLbPshOnFioDBvppHPHMxpm3qHmCbCm8aJSnJKj82bpFiy7AgpNiesAE1irzHEcQ2gcWQSMPCY70txbgln2h8lCXBm3ycB9dEGpY/4fSkMqMWBzsgJ3uiqZUsMi0Rqy/QSrBxzbjGsVtQGODd94EvhpF+q7yES1knFIToCqJuGmTBwW0sa516EWrI6JORfJ94mA7bHXOqBbmtwEXyytMYB2wBGxBgaMkBIcUsUVFYPykLYxzxsbeDlnK9pAr2BGFgTXW+6uqs9eiLNXdsxlYo2s7YSfqTiM4ZJtgikkhzTMgItXh4WSuhwhZXMO3AZ21PCU0xBA5XruuvGLEgDCytb9s5wZwAnQBF5k4E1gxXcz7Kclq8WbkcWq8gE12jpKxLOCgJ1Am3muztRUUB1XuxrplqCDlaQBbtAWI7QgXWYarok9n9hJU0K0De+ykKLIyuo6TL58libKlXrtSgK5ILfO7wFJNvrLWHwIOPErDycW2oJ8JsGRJ1OyUl9PrZT1Zg18hqx1ySFYAybGAo4V/yxFfibwpdL8j/nVlnXfnk8VvBAhZsd9OFnnbWuFvDkQj0M+PwAbOQr7J6rLefWh8Zf7HyHKehuDIYR6CQARVGh42eCUFAzFPo29qajSBz7wpWXyBJzUaNVFS6TeR5cNSyyv17HDdVOKStKvMvSlZrHXgTpQEWPlNZGErkuJK2yY0zlVYLI8pOitvS1bNuf8toSUmyd9DVsWRExmyI7cur2MrhN+MLLZlh/lNYIt/Jqg9yTkli38vqc2llG2g13nBJ/bfkqyurpHmO6PKbyErJ6KCwsvCukgP5vJpjitHA0rf25E1LPBbdoJ6AunM0CFZ/CyM/VIDbdmNrNFDudjbkVVlh38cLGOrlXNGFl+L4lFu2NMYWalljA6/SBR434IsNsxhPspv/8l7ES5Z/Fox5t6HCaxNS/0b0bP1SRN434KsoZ+s4qhNawVRQAydkMXtjTlizLzh4lDrgcwri+ZbRNZwonsVxsd/7Z3pdppAFICHnGETlyqYilEUFcVdY9Qsbicvct//LerMgKNBCtjG03PK9yNNUsXkywwMdxmXcKS57/6hrDk5+alGkgy0lkGhuNpljVvh78v6yV1FL98vc2zlXfd2WXiuizGiR8ZlEdFzZHCco83+tqw+X2HxIGMUsupVO73sFrfJys3L3gt2ki2xsKwEuCqWfDp+lP+eLOxcFvbGyt7x7AD5UGz9TC7LnZXB412JvvZwyp+TIIee38liBirZmtPOoHv0mRssbpKlDNihu4X+QeCueMlRDIY031UGEI+6eplkshY7+kQxz25dwuBJl2jaA38cBnSJ6vgwmbRfJrlbZDnqpNKa2tu6FqwjNFE85DEx29mzKmrtNRNflvvAnlRtkPtRqRCRhvmCcB0ou/znukDggflbZE0vuzM4geRdVM3kHhl7Np9KH5l4st56RSA0TbJiEWGiRCYW4iCAzW82r/sF8xZZFoje07/yiVFcCkUQaXmSstfpgcRPB0fKKvSy9LHNDas4FGAWeWqMKevF9V7iBYQwnclldf2jBV3JKD4f5J5iiPBR13xMC+1FVrwcLsuxs0AC7uM+ZkcQ4SXs6sBzgTHJrhBjHXaaa94g61G6Lh4+cigBfRIv2CGKvLGA6mrPcaiszgdVBe2NwtOAH1Gx5NhI5knxEq7qyrrJZbVCXPUUFA++puGpafnRYpNR38tXZXUOJSDUGzKvSgyvFODtKIlGFgO3hKu6GsllHUC4okrro4TY5IlDdMKZsCFbmxlfZeGVp7LawMgDLyGydGZQjH/OUkeI02nCFV29BLJ4VCSgSji8oaQ4T18vn51PNtFqpNQbn2TJDYu+ijg2EWddihEr30bICr2QKz9qwY6KamJZj1JQVXWDbkAP9kU6FU9Xa81GloLkfpuezwTLxOiMGYl5OlFVAKTMPwanWj3O206/WB3ROElSWTv40gcjWXMFJYOXLAqrYGsyaxbtGQMNasa+KtCfyzKVYK72HUWxIIeLRqy4KIBh0voUjrA5K0Y5kQ+XhQ+Xz39vOTeo4hOpEvx2L89uGpclKNXYLeQ40IL+U6IX02jWZushin3YAsToTD/1YvaIpls2L6aTLTGfpeRL6iB8ZJm9B86skEM3wU/RXRRg0SsCH+bw1G6gAFOWOL4HOXc0crvogq478jFwUNY30A9Nib21akyXAKJ19RFVVrr5z/Dtst7U8FD8246VKB8aV404WdoF9O/w7bJQBcTwlJjREkEycXg6Sf2X9l3+flmmSKM64SVHNXSdXP2o+RVFIsuydzRZVvgJx3gb0XMQ/4ZBH6fIPgizp7J/gofIGa7Rva8s4x3E8Bh6Justw4KsSgCiGT3Pl22LXQT69XHP7xWy9Vq+qFdOF9jFw/uL2t4rCFfGFmW8HDnHD4Wjg7rlX15m47qd824oek21+KK/mvIdZSGbNjaHy1KVsFkoxiotkQAcP8vFFmWF5Sl1fsiwB5WBss0hFTxK6z7QHtctgH9PVQEoj+iqZSmCh9W5o6wVWS2ZSWTxkk4bxalgE4f+SqPqbdpwRNJobXGxgzBrqSQDFaaI9SJTWeYTaJ2jIV6W0QPQDYSRQ5WKWokeaX8/WYjEJbeJZTmCAJITQ1b2TFaTDAqy3rU2g9HPTdVL/JsCCA/Gqnh0567mZh2gNt9sUP8J8kzWUZ3DZdFOb6jPC6PF6pN47d9DFo/3aEZSWQ+8/CRSlkMvFi02sshuCc9nF9SJQkoJtBxC/bLeHtHJxjaS4bIE+h3syVKssyTJj6xWKufuJqtA5sMmvixeGrmLKavA7kOprI7AfhN+wnTQ3Os6xZhafQWodxHmsqBWBph5skZodbE0HHaczl1k8fvhZUJZHTI11vFkCc8N0zRXH3Qa2gAqjyW5WYAHujLOV8wcYgRltR9F0N78aWgHX/p+smZ0l6G4sviQOKB4skAqEUQ6b8deToXHBA50wgFItWk3RJZOPmx9WU1+iPvLWpNT7iyRLJkEpDcxZflQWc3Lndts1of6qEs0WV0Ik7VWSUOGTWWVWcB0r9cZ46pVuJssTHI0h0SyGk8A6iKmLKGmH2kWwRtZH/i8U9Rr6F7ZZdari6/JUogJ3RtZOsAWk2F2opS5myw0Zw16OK4sTO8obRRTlriSu12DLEqr7HTNp7yh8bD6iBRxNa7Lwgi3AZ5bVNaWlQ72eJpZNe4ii3c1TobxR5ZR5k3I8ddZVJZ5URvRon5c11UQJubIf12XhYYSqHWRXA03IBIZmf38SGNLz573k4U+WIDPzMWSJXcsEOjq8IZ1llIG4XSCnJGTPl6o+VKL3EMXAVphsjBZ2bGXzb2fLdUyZDG/uqesPguyQ21aiJS1nr3zVEzyFTxro6sMFyN3+Hr8VOogQwfINkauTWsWccjIQrkaMFnsDs1arV030yJ54h66p6yu7vdBZz82xm9kKY920dsBhhq45d5w/0Sis+VmmfyFpL6fq9VpxldmssaeLI3JamKvcktkA3ojkToptflOtymp4LvKQj97L6cNQ/RWIUSW+4Nvtm8hTsKow6MOPvrq1HXElw5k9UpkzQUoreisLDMdW/KQ0SkDy8g/n1UF+RBZ38hiXxdOm4955SH4QpbzerYPVGUdN269HJ/iWfWe36/e1iRR0qx5FzHMcUmS1IcRuy8a13symbBWncWzxrb3J122/XhWrn/QpCcp25wOrhaC9dA3M3wt+rqE8m6AWb+nmqO/86wqBveBup3uOrM2EAe7g7Wc8BBvhcEII06j3rbaFKt+h9zAYtcUqS62AfqI9JaqCI0aFe1sH6gGSqHkNp980yd9N8+D6rR0gX9rmkEpJ/DwQYPTxVGEp/zpq6el+T+8FUoyRj/KwuX7G5IvXx7+77cICwWbVpZaOkXE2/McSgnDsVUqiqiq2enbQEYw+NEE9q506RuMxqDbmBTtYfpO0nFJTaWkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpPwNfgF7OovhP5rscgAAAABJRU5ErkJggg==',
        srcDark: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACUCAMAAAAeTeTrAAABNVBMVEUAAAD////+//////////////////8Y6Ij///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8k6o7///////////////////////////////////////////////////////////////////8Y6Ikt6pP///8e6Ysg6Y0l6o8p6pEb6Yoi6Y4o6pEt6pMz65Y/7JxI7aAk6Y4b6Yod6Ysg6Y0i6Y0c6Iod6Ysc6Yse6Ysi6Y3///8Y6IjBcj78AAAAZXRSTlMA/ASCCPna/PIKx+X1aw3uRd8sKBgVu+mszb7nlS6z6z0kT5l3ZlMebsAb0denikshj0A2ELg6MKN71CTCXVpIsH9Yhp7icg8zKrWSYeg9E8KgY1bxfUoxGREKcvjZrpHn0OG5irfv8jMAABUVSURBVHja7JkHVyo5GIYzQ5FepSmKdASxgCJgwd6va+/1avz/P2EnCTMkTAm7K3v2rPPc47kKmUnyztfyDTAxMTExMTExMTExMTExMTH5zyECE5MhMJXbcgKTAfBlJh3QVmmFTX/kBCrn8uYMJDjihVFTLn3C+UkPhFBAQIkZy5QVmGjgLOzYiVIQQX7xH3mLwKSP8GbCIwlkgxKVViA/LcDun/ZsDZj0ItUfmQ0/hNCGtHHvBFAmtNYXgkJXLpsrXzSjF8ZaJzEdeZ1jeq8MZPbXNtxIKmRj48nAIvjxpPNxhxyoZo47VsBw0FoVut8KY3sh8JOxzmVJTEcGdHSSBmoinaRbHhJsZn5ichSxUbVITMc6zB4gHUStgfP5VaHrjp5EK/3DalW01dFC3CHnu9jk1r6xro2kXehGL391LvKj5HLWtpWYbnNtLgM+o/nJFL5AItGqg59CeG/JI8f03WzmD0DzsHLzeP36+vr5eHF6x5rYlCUh16qx+Noo+P9jnWsG5XpAWM2n+z3q9vnpizDy6/njcYVxx3KhKvuu0F74H5uXiH7SuYqtK5Ww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'
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
          label: 'VPS & ROOT',
        },
        {
          type: 'docSidebar',
          sidebarId: 'vpsrootSidebar',
          position: 'left',
          label: 'Dedicated Server',
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
