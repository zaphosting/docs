/**
* Creating a sidebar enables you to:
- create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

The sidebars can be generated from the filesystem, or explicitly defined here.

Create as many sidebars as you want.
*/

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  
  guidesSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Erste Schritte";
          default: return "First steps";
        }
      })(),
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'General',
      items: [
        'firststeps-register',
        'firststeps-locations',
        'preorders',
        'firststeps-rent-or-purchase',
        'firststeps-rent-contractorprepaid',
        'community-info',
        'suggestions',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        "contactsupport",
        "create-screenshots"
      ]
    },
    {
      type: 'category',
      label: 'Account',
      items: [
        "account-contractsandprepaid",
        "account-termination-and-cancellation-period",
        "account-paymentoptions",
        "account-backup-storage",
        "account-affiliate",
        "account-cashbox",
        "account-usermanagement",
        "account-vouchers",
        "account-donations",
        "account-community-ads",
        {
          type: "category",
          label: "Security",
          items: [
            "account-security",
            "account-2factor"
          ]
        },
      ]
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Programme";
          default: return "Programs";
        }
      })(),
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Partner Program',
      items: [
        "account-partner-system",
        "partner-guide",
        "legal-use-brand-assets"
      ]
    },
    {
      type: 'category',
      label: 'Contribution Program',
      items: [
        "contribution-introduction",
        "contribution-rewards",
        {
          type: "category",
          label: "Guides",
          items: [
            "contribution-guides",
            "contribution-guides-guidelines"
          ]
        },
        {
          type: "category",
          label: "Blogs",
          items: [
            "contribution-blogs",
            "contribution-blogs-guidelines"
          ]
        },
      ]
    },
  ],
  
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gameserverSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Erste Schritte";
          default: return "First steps";
        }
      })(),
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'General',
      items: [
        "gameserver-resourcelimit",
        "gameserver-gameswitch",
        "gameserver-upgrade",
        "gameserver-ftpaccess",
        "gameserver-restartplaner",
        "gameserver-backups",
        "gameserver-server-down-what-now",
        "gameserver-tebex",
        {
          type: "category",
          label: "Databases",
          items: [
            "gameserver-databases-pma",
            "gameserver-database-external-access"
          ]
        }
      ]
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Bekannte Spiele";
          default: return "Popular Games";
        }
      })(),
      defaultStyle: true,
    },
    {
      type: "category",
      label: "FiveM",
      items: [
        "fivem-dashboard",
        "fivem-upvotes",
        {
          type: "category",
          label: "Configuration & Administration",
          items: [
            "fivem-change-servericon",
            "fivem-server-customisation",
            "fivem-rcon",
            "fivem-licensekey",
            "fivem-deletecache",
            "fivem-useprofiler",
            "fivem-mastodon",
            "fivem-prohibited-resources",
            "fivem-notlisted",
            "fivem-devtools",
            "fivem-gamebuild",
            "fivem-gamechange",
            "fivem-steam-web-api-key",
            "fivem-whitelist",
            "fivem-locale"
          ]
        },
        {
          type: "category",
          label: "Resources & Mods",
          items: [
            "fivem-installresources",
            "fivem-sql-file-import",
            "fivem-mods-installreplace",
            "fivem-mods-installaddon",
            "fivem-changeloadingscreen",
            "fivem-installels",
            "fivem-installeup"
          ]
        },
        {
          type: "category",
          label: "ESX",
          items: [
            "fivem-esx-disableinventory",
            "fivem-esx-changemoneyicon",
            "fivem-esx-becomeadminoverdatabase",
            "fivem-esx-disablehud",
            "fivem-esx-addcarstoshop",
            "fivem-esx-changejobgarages",
            "fivem-esx-changerespawnpoint",
            "fivem-editlocalfiles"
          ]
        },
        {
          type: "category",
          label: "Dunko VRP",
          items: [
            "fivem-vrp-changemoneyicon",
            "fivem-vrp-removespeedo"
          ]
        },
        {
          type: "category",
          label: "txAdmin",
          items: [
            "fivem-txadmin-setup",
            "fivem-txadmin-features"
          ]
        },
        {
          type: "category",
          label: "QBCore",
          items: [
            "fivem-qbcore-admin"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Minecraft",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "minecraft-firststeps-connect",
            "minecraft-firststeps-java-bedrock-comparison"
          ]
        },
        {
          type: "category",
          label: "Administration",
          items: [
            "minecraft-commands",
            "minecraft-addop",
            "minecraft-default-config",
            "minecraft-server-icon",
            "minecraft-add-own-world",
            "minecraft-worlds",
            "minecraftbedrock-behaviorresourcepacks",
            "minecraft-rcon",
            "minecraft-whitelist",
            "minecraft-timings-report",
            "minecraft-server-optimize"
          ]
        },
        {
          type: "category",
          label: "Spigot & Bukkit",
          items: [
            "minecraft-pluginuploader"
          ]
        },
        {
          type: "category",
          label: "Bungeecord",
          items: [
            "minecraft-bungeecord-config"
          ]
        },
        {
          type: "category",
          label: "Forge & Fabric",
          items: [
            "minecraft-forge-fabric-add-mods-modpacks"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "SCP: Secret Laboratory",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "scp-firststeps-connect"
          ]
        },		
        "scp-becomeadmin",
        "scp-newroles",
        "scp-colored-servername",
        "scp-pastebin",
        {
          type: "category",
          label: "ServerMod",
          items: [
            "scpservermod-uploadplugins"
          ]
        },
        {
          type: "category",
          label: "Exiled",
          items: [
            "exiled-plugins"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Valheim",
      items: [
        "valheim-firststeps-connect",
        "valheim-savegame",
        "valheim-backup-schedule",
        "valheim-serverlisting",
        "valheim-admin",
        "valheim-plus",
        "valheim-plugins-bepinex"
      ],
    },
    {
      type: "category",
      label: "ARK",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "ark-firststeps-dashboard"
          ]
        },
        "ark-becomeadmin",
        "ark-mods",
        "ark-serverlisting",
        "ark-configuration",
        "ark-savegame"
      ],
    },
    {
      type: "category",
      label: "Palworld",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "palworld-firststeps-dashboard"
          ]
        },
        "palworld-configuration",
        "palworld-server-commands",
        "palworld-server-savegames",
        "palworld-server-modding",
        "palworld-connect",
        "palworld-admin",
        "palworld-rcon"
      ],
    },
    {
      type: "category",
      label: "Enshrouded",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "enshrouded-firststeps-dashboard"
          ]
        },
        "enshrouded-configuration",
        "enshrouded-server-savegames"
      ],
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Alle Spiele (A-Z)";
          default: return "All Games (A-Z)";
        }
      })(),
      defaultStyle: true,
    },
    {
      type: "category",
      label: "7 Days to Die",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "7d2d-firststeps-dashboard"
          ]
        },
        "7d2d-becomeadmin",
        "7d2d-mods",
        "7d2d-commands",
      ],
    },
    {
      type: "category",
      label: "Alt:V",
      items: [
        "altv-installresources"
      ],
    },
    {
      type: "category",
      label: "Among Us",
      items: [
        "amongus-connection"
      ],
    },
    {
      type: "category",
      label: "ArmA 3",
      items: [
        "arma3-serverconfig",
        "arma3-mods",
        "arma3-altislife-ranks",
        "arma3-gamemode",
        "arma3-missionfile"
      ]
    },
    {
      type: "category",
      label: "Assetto Corsa",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "assettocorsa-firststeps-dashboard"
          ]
        },
        "assettocorsa-configure",
        "assettocorsa-contentmanager",
        "assettocorsa-mods"
      ],
    },
    {
      type: "category",
      label: "Assetto Corsa Competizione",
      items: [
        "assetto-competizione-becomeadmin",
        "assetto-competizione-slot-requirement"
      ],
    },
    {
      type: "category",
      label: "Avorion",
      items: [
        "avorion-becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Barotrauma",
      items: [
        "barotrauma-becomeadmin"
      ],
    },
    {
      type: "category",
      label: "BeamMP",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "beammp-firststeps-dashboard"
          ]
        },
        "beammp-authkey",
        "beammp-mods"
      ],
    },
    {
      type: "category",
      label: "Conan Exiles",
      items: [
        "conan-becomeadmin",
        "conan-configuration"
      ],
    },
    {
      type: "category",
      label: "Core Keeper",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "corekeeper-connecttoserver"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "DayZ",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "dayz-firststeps-dashboard"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Discord Bot",
      items: [
        "discordbot-setup"
      ],
    },
    {
      type: "category",
      label: "Don't Starve Together",
      items: [
        "dst-create-cave"
      ],
    },
    {
      type: "category",
      label: "ECO",
      items: [
        "eco-becomeadmin",
        "eco-whitelist"
      ],
    },
    {
      type: "category",
      label: "Empyrion",
      items: [
        "empyrion-becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Enshrouded",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "enshrouded-firststeps-dashboard"
          ]
        },
        "enshrouded-configuration",
        "enshrouded-server-savegames"
      ],
    },
    {
      type: "category",
      label: "Factorio",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "factorio-firststeps-dashboard"
          ]
        },
        "factorio-becomeadmin",
        "factorio-mods"
      ],
    },
    {
      type: "category",
      label: "FiveM",
      items: [
        "fivem-dashboard",
        "fivem-upvotes",
        {
          type: "category",
          label: "Configuration & Administration",
          items: [
            "fivem-change-servericon",
            "fivem-server-customisation",
            "fivem-rcon",
            "fivem-licensekey",
            "fivem-deletecache",
            "fivem-useprofiler",
            "fivem-mastodon",
            "fivem-prohibited-resources",
            "fivem-notlisted",
            "fivem-devtools",
            "fivem-gamebuild",
            "fivem-gamechange",
            "fivem-steam-web-api-key",
            "fivem-whitelist",
            "fivem-locale"
          ]
        },
        {
          type: "category",
          label: "Resources & Mods",
          items: [
            "fivem-installresources",
            "fivem-sql-file-import",
            "fivem-mods-installreplace",
            "fivem-mods-installaddon",
            "fivem-changeloadingscreen",
            "fivem-installels",
            "fivem-installeup"
          ]
        },
        {
          type: "category",
          label: "ESX",
          items: [
            "fivem-esx-disableinventory",
            "fivem-esx-changemoneyicon",
            "fivem-esx-becomeadminoverdatabase",
            "fivem-esx-disablehud",
            "fivem-esx-addcarstoshop",
            "fivem-esx-changejobgarages",
            "fivem-esx-changerespawnpoint",
            "fivem-editlocalfiles"
          ]
        },
        {
          type: "category",
          label: "Dunko VRP",
          items: [
            "fivem-vrp-changemoneyicon",
            "fivem-vrp-removespeedo"
          ]
        },
        {
          type: "category",
          label: "txAdmin",
          items: [
            "fivem-txadmin-setup",
            "fivem-txadmin-features"
          ]
        },
        {
          type: "category",
          label: "QBCore",
          items: [
            "fivem-qbcore-admin"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Last Oasis",
      items: [
        "lastoasis-createrealm"
      ],
    },    
    {
      type: "category",
      label: "Minecraft",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "minecraft-firststeps-connect",
            "minecraft-firststeps-java-bedrock-comparison"
          ]
        },
        {
          type: "category",
          label: "Administration",
          items: [
            "minecraft-commands",
            "minecraft-addop",
            "minecraft-default-config",
            "minecraft-server-icon",
            "minecraft-add-own-world",
            "minecraft-worlds",
            "minecraftbedrock-behaviorresourcepacks",
            "minecraft-rcon",
            "minecraft-whitelist",
            "minecraft-timings-report",
            "minecraft-server-optimize"
          ]
        },
        {
          type: "category",
          label: "Spigot & Bukkit",
          items: [
            "minecraft-pluginuploader"
          ]
        },
        {
          type: "category",
          label: "Bungeecord",
          items: [
            "minecraft-bungeecord-config"
          ]
        },
        {
          type: "category",
          label: "Forge & Fabric",
          items: [
            "minecraft-forge-fabric-add-mods-modpacks"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Multi Theft Auto",
      items: [
        "mta-becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Myth of Empires",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "moe-firststeps-dashboard",
            "moe-firststeps-connect"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Open.mp",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "openmp-firststeps-dashboard",
          ]
        },
        "openmp-configuration",
        "openmp-server-commands",
        "openmp-rcon"
      ],
    },
    {
      type: "category",
      label: "Palworld",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "palworld-firststeps-dashboard"
          ]
        },
        "palworld-configuration",
        "palworld-server-commands",
        "palworld-server-savegames",
        "palworld-server-modding",
        "palworld-connect",
        "palworld-admin"
      ],
    },
    {
      type: "category",
      label: "Project Zomboid",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "projectzomboid-firststeps-dashboard"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "RageMP",
      items: [
        "ragemp-installpackages"
      ],
    },
    {
      type: "category",
      label: "RedM",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "redm-firststeps-dashboard"
          ]
        },
        {
          type: "category",
          label: "Configuration & Administration",
          items: [
            "redm-change-servericon",
            "redm-server-customisation",
            "redm-licensekey",
            "redm-deletecache",
            "redm-gamebuild",
            "redm-steam-web-api-key",
            "redm-locale"
          ]
        },
        {
          type: "category",
          label: "Resources & Mods",
          items: [
            "redm-installresources",
            "redm-sql-file-import"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Rust",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "rust-firststeps-dashboard"
          ]
        },
        "rust-becomeadmin",
        "rust-connectrcon",
        "rust-commands",
        "rust-plugins",
        "rust-decay"
      ],
    },
    {
      type: "category",
      label: "Satisfactory",
      items: [
        "satisfactory-connect-experimental",
        "satisfactory-savegame",
        "satisfactory-switchexperimental",
        "satisfactory-commands"
      ],
    },
    {
      type: "category",
      label: "SCP: Secret Laboratory",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "scp-firststeps-connect"
          ]
        },		
        "scp-becomeadmin",
        "scp-newroles",
        "scp-colored-servername",
        "scp-pastebin",
        {
          type: "category",
          label: "ServerMod",
          items: [
            "scpservermod-uploadplugins"
          ]
        },
        {
          type: "category",
          label: "Exiled",
          items: [
            "exiled-plugins"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Source Games",
      items: [
        {
          type: "category",
          label: "CS 1.6",
          items: [
            "cs16-becomeadmin",
            "cs16-plugins"
          ]
        },
        {
          type: "category",
          label: "CS:S",
          items: [
            "source-gsltoken",
            {
              type: "category",
              label: "Sourcemod / Metamod",
              items: [
                "source-metamod-installation",
                "source-metamod-addadmins",
                "source-metamod-plugins"
              ]
            },
          ]
        },
        {
          type: "category",
          label: "CS:GO",
          items: [
            {
              type: "category",
              label: "First Steps",
              items: [
                "csgo-configuration",
              ]
            },
            {
              type: "category",
              label: "Configuration & Administration",
              items: [
                "csgo-gotv",
                "source-custom-content"
              ]
            },
            {
              type: "category",
              label: "Sourcemod / Metamod",
              items: [
                "source-metamod-installation",
                "source-metamod-addadmins",
                "source-metamod-plugins"
              ]
            },          
          ]
        },
        {
          type: "category",
          label: "CS2 (NEW)",
          items: [
            {
              type: "category",
              label: "First Steps",
              items: [
                "cs2-firststeps-dashboard",
                "cs2-firststeps-connect"
              ]
            },
            {
              type: "category",
              label: "Configuration & Administration",
              items: [
                "cs2-configuration",
                "cs2-cstv",
                "cs2-plugins"
              ]
            },
          ]
        },
        {
          type: "category",
          label: "Garry's Mod",
          items: [
            "gmod-servercfg",
            "gmod-ttt"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Space Engineers",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "spaceengineers-firststeps-dashboard"
          ]
        },
        "spaceengineers-becomeadmin",
        "spaceengineers-addmods"
      ],
    },
    {
      type: "category",
      label: "Stormworks",
      items: [
        "stormworks-firststeps-dashboard",
        "stormworks-becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Terraria",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "terraria-firststeps-dashboard"
          ]
        },
        "terraria-tshock-add-admin",
        "terraria-tmodloader-installmod"
      ],
    },
    {
      type: "category",
      label: "Truck Sim",
      items: [
        "trucksim-dlc"
      ],
    },
    {
      type: "category",
      label: "Unturned",
      items: [
        "unturned-becomeadmin",
        "unturned-workshop",
        "unturned-firstthirdperson",
        "unturned-whitelist",
        {
          type: "category",
          label: "RocketMod",
          items: [
            "unturned-rocketmod-plugins",
            "unturned-rocketmod-permissions"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "V Rising",
      items: [
        "vrising-becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Valheim",
      items: [
        "valheim-firststeps-connect",
        "valheim-savegame",
        "valheim-backup-schedule",
        "valheim-serverlisting",
        "valheim-admin",
        "valheim-plus",
        "valheim-plugins-bepinex"
      ],
    },
    
    
  ],
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  vpsrootSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Erste Schritte";
          default: return "First steps";
        }
      })(),
      defaultStyle: true,
    },
    'vserver-root-unterschied',
    'vserver-vnc',
    'vserver-network-analysis-winmtr',
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Linux";
          default: return "Linux";
        }
      })(),
      defaultStyle: true,
    },
    {
      type: "category",
      label: "General",
      items: [
        'vserver-linux-ssh',
        'vserver-linux-sftp',
        'vserver-linux-sshkey',
        'vserver-linux-ssh2fa',
        'vserver-linux-password-change',
        'vserver-linux-gs-interface',
        'vserver-linux-ftp',
        'vserver-linux-add-ip',
        'vserver-linux-ssl',
        'vserver-linux-rsync',
        'vserver-linux-security-tips',
        'vserver-linux-ssh-server',
      ]
    },
    {
      type: "category",
      label: "Services",
      items: [
        'vserver-linux-cockpit',	
        'vserver-linux-databases',
        'vserver-linux-docker',
        'vserver-linux-ftp-install',
        'vserver-linux-java',
        'vserver-linux-jitsi',
        'vserver-linux-mastodon',
        'vserver-linux-nextcloud',
        'vserver-linux-openvpn',
        'vserver-linux-phpmyadmin',
        'vserver-linux-plesk',
        'vserver-linux-webserver',
        'vserver-linux-xrdp',
      ],
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Windows";
          default: return "Windows";
        }
      })(),
      defaultStyle: true,
    },
    {
      type: "category",
      label: "General",
      items: [
        'vserver-windows-userdp',
        'vserver-windows-port',
        'vserver-windows-addip',
        'vserver-windows-nointernet',
        'vserver-windows-change-language',
        'vserver-windows-expand-disk',
      ]
    },
    {
      type: "category",
      label: "Services",
      items: [
        'vserver-windows-ftpserver',
        'vserver-windows-installmysql',
        'vserver-windows-plesk',
      ]
    },
    {
      type: "category",
      label: "Gameserver services",
      items: [
        'vserver-windows-arksurvivalascended',
        'vserver-windows-palworld',
        'vserver-windows-enshrouded',
        'vserver-windows-valheim',
        'vserver-windows-vrising',
        'vserver-windows-satisfactory',
        'vserver-windows-fs-19',
        'vserver-windows-fs-22',
      ]
    },		
  ],
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  dedicatedserverSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Erste Schritte";
          default: return "First steps";
        }
      })(),
      defaultStyle: true,
    },
    'dedicated-introduction',
    'dedicated-ilo',
    'dedicated-iso',
    'dedicated-raid',
    'vserver-linux-gs-interface',			
    'dedicated-reset',		
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Betriebssysteme";
          default: return "Operating systems";
        }
      })(),
      defaultStyle: true,
    },
    'dedicated-windows',
    'dedicated-linux-debian',
    'dedicated-linux-ubuntu',		
    'dedicated-freebsd',		
    'dedicated-centos',		
    'dedicated-proxmox',
    
  ],
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  domainwebspaceSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Domain";
          default: return "Domain";
        }
      })(),
      defaultStyle: true,
    },
    'domain-introduction',
    'domain-order',
    'domain-easydns',
    'domain-profidns',
    'domain-expertdns',
    'domain-records',
    'domain-gameserver-srv-link',
    'domain-teamspeak-redirect',		
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Webspace";
          default: return "Webspace";
        }
      })(),
      defaultStyle: true,
    }, 
    'webspace-adddomain',
    'webspace-plesk-ftp',
    'webspace-plesk-sendmail',
    'webspace-plesk-ssl',
    'webspace-htaccess-discord',
    'webspace-mybb',
    'webspace-wordpress',		
  ],
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  voiceserverbotSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Voicebot";
          default: return "Voicebot";
        }
      })(),
      defaultStyle: true,
    },
    'voiceserver-voicebot-connection',
    {
      type: 'html',
      className: 'sidebar-title',
      value: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case "de": return "Voiceserver";
          default: return "Voiceserver";
        }
      })(),
      defaultStyle: true,
    },
    'voiceserver-becomeadmin',
    'voiceserver-configuration',
    'voiceserver-ts3backup',
    'voiceserver-query',
  ],
  
};

export default sidebars;
