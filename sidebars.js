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
  
  
  // But you can create a sidebar manually
  
  guidesSidebar: [
    {
      type: 'category',
      label: 'First Steps',
      items: [
        'firststeps_register',
        'firststeps_rent_contractorprepaid',
        'preorders',
        'firststeps_locations',
        'community_info',
        'suggestions',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        "firststeps_problem_melden",
        "create_screenshots"
      ]
    },
    {
      type: 'category',
      label: 'Account',
      items: [
        "account_contractsandprepaid",
        "account_termination_and_cancellation_period",
        "account_paymentoptions",
        "account_backup_storage",
        "account_friends",
        "account_cashbox",
        "account_usermanagement",
        "account_vouchers",
        "account_donations",
        "account_community_ads",
        {
          type: "category",
          label: "Security",
          items: [
            "account_2factor",
            "account_security"
          ]
        },
        {
          type: "category",
          label: "Partner",
          items: [
            "account_partner_system",
            "partner-guide",
            "legal_use_brand_assets"
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Gameserver - General',
      items: [
        "gameserver_cloudvslifetime",
        "gameserver_resourcelimit",
        "gameserver_gameswitch",
        "gameserver_upgrade",
        "gameserver_ftpaccess",
        "gameserver_restartplaner",
        "gameserver_backups",
        "gameserver_server_down_what_now",
        "gameserver_tebex",
        {
          type: "category",
          label: "Databases",
          items: [
            "gameserver_databases_pma",
            "gameserver_database_external_access"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "vServer & Rootserver",
      items: [
        "vserver_root_unterschied",
        "vserver_vnc",
        "vserver_network_analysis_winmtr",
        {
          type: "category",
          label: "Linux",
          items: [
            "vserver_linux_ssh",
            "vserver_linux_sftp",
            "vserver_linux_sshkey",
            "vserver_linux_ssh2fa",
            "vserver_linux_password_change",
            "vserver_linux_gs_interface",
            "vserver_linux_ftp",
            "vserver_linux_add_ip",
            "vserver_linux_ssl",
            "vserver_linux_rsync"
          ]
        },
        {
          type: "category",
          label: "Services (Linux)",
          items: [
            "vserver_linux_webserver",
            "vserver_linux_java",
            "vserver_linux_ftp_install",
            "vserver_linux_mariadbinstall",
            "vserver_linux_nextcloud",
            "vserver_linux_mastodon",
            "vserver_linux_docker",
            "vserver_linux_plesk",
            "vserver_linux_openvpn",
            "vserver_linux_phpmyadmin",
            "vserver_linux_jitsi",
            "vserver_linux_xrdp",
            "vserver_linux_cockpit"
          ]
        },
        {
          type: "category",
          label: "Windows",
          items: [
            "vserver_windows_userdp",
            "vserver_windows_port",
            "vserver_windows_addip",
            "vserver_windows_nointernet",
            "vserver_windows_change_language",
            "vserver_windows_expand_disk"
          ]
        }, 
        {
          type: "category",
          label: "Services (Windows)",
          items: [
            "vserver_windows_ftpserver",
            "vserver_windows_installmysql",
            "vserver_windows_plesk"
          ]
        },
        {
          type: "category",
          label: "Game server services (Windows)",
          items: [
            "vserver_windows_valheim",
            "vserver_windows_vrising",
            "vserver_windows_satisfactory",
            "vserver_windows_fs_19",
            "vserver_windows_fs_22"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Dedicated Server",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "dedicated_ilo",
            "dedicated_iso",
            "dedicated_raid",
            "dedicated_reset"
          ]
        },
        {
          type: "category",
          label: "Operating system",
          items: [
            "dedicated_windows",
            "dedicated_linux_debian",
            "dedicated_linux_ubuntu",
            "dedicated_freebsd",
            "dedicated_centos"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Webspace & Domains",
      items: [
        {
          type: "category",
          label: "Domain",
          items: [
            "domain_general_domain_info",
            "domain_order",
            "domain_easydns",
            "domain_profidns",
            "domain_expertdns",
            "domain_records",
            "domain_gameserver_srv_link",
            "domain_teamspeak_redirect"
          ]
        },
        {
          type: "category",
          label: "Webspace",
          items: [
            "webspace_adddomain",
            "webspace_plesk_ftp",
            "webspace_plesk_sendmail",
            "webspace_plesk_ssl",
            "webspace_htaccess_discord",
            "webspace_mybb",
            "webspace_wordpress"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Voicebot/Voiceserver",
      items: [
        {
          type: "category",
          label: "Voicebot",
          items: [
            "voiceserver_voicebot_connection"
          ]
        },
        {
          type: "category",
          label: "Voiceserver",
          items: [
            "voiceserver_becomeadmin",
            "voiceserver_configuration",
            "voiceserver_ts3backup",
            "voiceserver_query"
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
            "minecraft_firststeps_connect"
          ]
        },
        {
          type: "category",
          label: "Administration",
          items: [
            "minecraft_commands",
            "minecraft_addop",
            "minecraft_default_config",
            "minecraft_server-icon",
            "minecraft_add_own_world",
            "minecraft_worlds",
            "minecraftbedrock_behaviorresourcepacks",
            "minecraft_rcon",
            "minecraft_whitelist",
            "minecraft_timings_report",
            "minecraft_server_optimize"
          ]
        },
        {
          type: "category",
          label: "Spigot & Bukkit",
          items: [
            "minecraft_pluginuploader"
          ]
        },
        {
          type: "category",
          label: "Bungeecord",
          items: [
            "minecraft_bungeecord_config"
          ]
        },
        {
          type: "category",
          label: "Forge",
          items: [
            "minecraft_forge_add_mods"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "FiveM",
      items: [
        "fivem_dashboard",
        "fivem_upvotes",
        {
          type: "category",
          label: "Configuration & Administration",
          items: [
            "fivem_change_servericon",
            "fivem_servername_emojis",
            "fivem_servername_color",
            "fivem_rcon",
            "fivem_licensekey",
            "fivem_deletecache",
            "fivem_useprofiler",
            "fivem_mastodon",
            "fivem_prohibited_resources",
            "fivem_notlisted",
            "fivem_devtools",
            "fivem_gamebuild",
            "fivem_gamechange",
            "fivem-steam-web-api-key",
            "fivem_whitelist"
          ]
        },
        {
          type: "category",
          label: "Resources & Mods",
          items: [
            "fivem_installresources",
            "fivem_sql_file_import",
            "fivem_mods_installreplace",
            "fivem_mods_installaddon",
            "fivem_changeloadingscreen",
            "fivem_installels",
            "fivem_installeup"
          ]
        },
        {
          type: "category",
          label: "ESX",
          items: [
            "fivem_esx_disableinventory",
            "fivem_esx_changemoneyicon",
            "fivem_esx_becomeadminoverdatabase",
            "fivem_esx_disablehud",
            "fivem_esx_addcarstoshop",
            "fivem_esx_changejobgarages",
            "fivem_esx_changerespawnpoint",
            "fivem_editlocalfiles"
          ]
        },
        {
          type: "category",
          label: "Dunko VRP",
          items: [
            "fivem_vrp_changemoneyicon",
            "fivem_vrp_removespeedo"
          ]
        },
        {
          type: "category",
          label: "txAdmin",
          items: [
            "fivem_txadmin_setup",
            "fivem_txadmin_features"
          ]
        },
        {
          type: "category",
          label: "QBCore",
          items: [
            "fivem_qbcore_admin"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "RedM",
      items: [
        {
          type: "category",
          label: "Configuration & Administration",
          items: [
            "redm_change_servericon"
          ]
        },
        {
          type: "category",
          label: "Resources & Mods",
          items: [
            "redm_installresources"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "RageMP",
      items: [
        "ragemp_installpackages"
      ],
    },
    {
      type: "category",
      label: "Alt:V",
      items: [
        "altv_installresources"
      ],
    },
    {
      type: "category",
      label: "Satisfactory",
      items: [
        "satisfactory_connect_experimental",
        "satisfactory_savegame",
        "satisfactory_switchexperimental",
        "satisfactory_commands"
      ],
    },
    {
      type: "category",
      label: "Terraria",
      items: [
        "terraria_tshock_add_admin",
        "terraria_tmodloader_installmod"
      ],
    },
    {
      type: "category",
      label: "Source Games",
      items: [
        "source_gsltoken",
        "source_custom_content",
        {
          type: "category",
          label: "Sourcemod / Metamod",
          items: [
            "source_metamod_installation",
            "source_metamod_addadmins",
            "source_metamod_plugins"
          ]
        },
        {
          type: "category",
          label: "CS:GO",
          items: [
            "csgo_configuration",
            "csgo_gotv"
          ]
        },
        {
          type: "category",
          label: "Counter Strike 1.6",
          items: [
            "cs16_becomeadmin",
            "cs16_plugins"
          ]
        },
        {
          type: "category",
          label: "Garry's Mod",
          items: [
            "gmod_servercfg",
            "gmod_ttt"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "ArmA 3",
      items: [
        "arma3_serverconfig",
        "arma3_mods",
        "arma3_altislife_ranks",
        "arma3_gamemode",
        "arma3_missionfile"
      ]
    },
    {
      type: "category",
      label: "ARK",
      items: [
        "ark_becomeadmin",
        "ark_mods",
        "ark_serverlisting",
        "ark_configuration"
      ],
    },
    {
      type: "category",
      label: "Assetto Corsa",
      items: [
        "assettocorsa_configure",
        "assettocorsa_contentmanager",
        "assettocorsa_mods"
      ],
    },
    {
      type: "category",
      label: "Assetto Corsa Competizione",
      items: [
        "assetto_competizione_becomeadmin",
        "assetto_competizione_slot_requirement"
      ],
    },
    {
      type: "category",
      label: "Barotrauma",
      items: [
        "barotrauma_becomeadmin"
      ],
    },
    {
      type: "category",
      label: "BeamMP",
      items: [
        "beammp_authkey",
        "beammp_mods"
      ],
    },
    {
      type: "category",
      label: "Conan Exiles",
      items: [
        "conan_becomeadmin",
        "conan_configuration"
      ],
    },
    {
      type: "category",
      label: "Valheim",
      items: [
        "valheim_connect",
        "valheim_savegame",
        "valheim_backup_schedule",
        "valheim_serverlisting",
        "valheim_admin",
        "valheim_plus",
        "valheim_plugins_bepinex"
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
            "scp_firststeps_connect"
          ]
        },		
        "scp_becomeadmin",
        "scp_newroles",
        "scp_colored_servername",
        "scp_pastebin",
        {
          type: "category",
          label: "ServerMod",
          items: [
            "scpservermod_uploadplugins"
          ]
        },
        {
          type: "category",
          label: "Exiled",
          items: [
            "exiled_plugins"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "ECO",
      items: [
        "eco_becomeadmin",
        "eco_whitelist"
      ],
    },
    {
      type: "category",
      label: "Factorio",
      items: [
        "factorio_becomeadmin",
        "factorio_mods"
      ],
    },
    {
      type: "category",
      label: "Multi Theft Auto",
      items: [
        "mta_becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Space Engineers",
      items: [
        "spaceengineers_becomeadmin",
        "spaceengineers_addmods"
      ],
    },
    {
      type: "category",
      label: "Unturned",
      items: [
        "unturned_becomeadmin",
        "unturned_workshop",
        "unturned_firstthirdperson",
        "unturned_whitelist",
        {
          type: "category",
          label: "RocketMod",
          items: [
            "unturned_rocketmod_plugins",
            "unturned_rocketmod_permissions"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Don't Starve Together",
      items: [
        "dst_create_cave"
      ],
    },
    {
      type: "category",
      label: "Empyrion",
      items: [
        "empyrion_becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Rust",
      items: [
        "rust_becomeadmin",
        "rust_connectrcon",
        "rust_commands",
        "rust_plugins",
        "rust_decay"
      ],
    },
    {
      type: "category",
      label: "Among Us",
      items: [
        "amongus_connection"
      ],
    },
    {
      type: "category",
      label: "7 Days to Die",
      items: [
        "7d2d_becomeadmin",
        "7d2d_mods",
        "7d2d_commands"
      ],
    },
    {
      type: "category",
      label: "Avorion",
      items: [
        "avorion_becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Last Oasis",
      items: [
        "lastoasis_createrealm"
      ],
    },
    {
      type: "category",
      label: "Discord Bot",
      items: [
        "discordbot_setup"
      ],
    },
    {
      type: "category",
      label: "Truck Sim",
      items: [
        "trucksim_dlc"
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
      label: "Stormworks",
      items: [
        "stormworks-becomeadmin"
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
    
  ],
  

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gameserverSidebar: [
    {
      type: 'category',
      label: 'Gameserver - General',
      items: [
        "gameserver_cloudvslifetime",
        "gameserver_resourcelimit",
        "gameserver_gameswitch",
        "gameserver_upgrade",
        "gameserver_ftpaccess",
        "gameserver_restartplaner",
        "gameserver_backups",
        "gameserver_server_down_what_now",
        "gameserver_tebex",
        {
          type: "category",
          label: "Databases",
          items: [
            "gameserver_databases_pma",
            "gameserver_database_external_access"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Minecraft",
      items: [
        {
          type: "category",
          label: "First Steps",
          items: [
            "minecraft_firststeps_connect"
          ]
        },
        {
          type: "category",
          label: "Administration",
          items: [
            "minecraft_commands",
            "minecraft_addop",
            "minecraft_default_config",
            "minecraft_server-icon",
            "minecraft_add_own_world",
            "minecraft_worlds",
            "minecraftbedrock_behaviorresourcepacks",
            "minecraft_rcon",
            "minecraft_whitelist",
            "minecraft_timings_report",
            "minecraft_server_optimize"
          ]
        },
        {
          type: "category",
          label: "Spigot & Bukkit",
          items: [
            "minecraft_pluginuploader"
          ]
        },
        {
          type: "category",
          label: "Bungeecord",
          items: [
            "minecraft_bungeecord_config"
          ]
        },
        {
          type: "category",
          label: "Forge",
          items: [
            "minecraft_forge_add_mods"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "FiveM",
      items: [
        "fivem_dashboard",
        "fivem_upvotes",
        {
          type: "category",
          label: "Configuration & Administration",
          items: [
            "fivem_change_servericon",
            "fivem_servername_emojis",
            "fivem_servername_color",
            "fivem_rcon",
            "fivem_licensekey",
            "fivem_deletecache",
            "fivem_useprofiler",
            "fivem_mastodon",
            "fivem_prohibited_resources",
            "fivem_notlisted",
            "fivem_devtools",
            "fivem_gamebuild",
            "fivem_gamechange",
            "fivem-steam-web-api-key",
            "fivem_whitelist"
          ]
        },
        {
          type: "category",
          label: "Resources & Mods",
          items: [
            "fivem_installresources",
            "fivem_sql_file_import",
            "fivem_mods_installreplace",
            "fivem_mods_installaddon",
            "fivem_changeloadingscreen",
            "fivem_installels",
            "fivem_installeup"
          ]
        },
        {
          type: "category",
          label: "ESX",
          items: [
            "fivem_esx_disableinventory",
            "fivem_esx_changemoneyicon",
            "fivem_esx_becomeadminoverdatabase",
            "fivem_esx_disablehud",
            "fivem_esx_addcarstoshop",
            "fivem_esx_changejobgarages",
            "fivem_esx_changerespawnpoint",
            "fivem_editlocalfiles"
          ]
        },
        {
          type: "category",
          label: "Dunko VRP",
          items: [
            "fivem_vrp_changemoneyicon",
            "fivem_vrp_removespeedo"
          ]
        },
        {
          type: "category",
          label: "txAdmin",
          items: [
            "fivem_txadmin_setup",
            "fivem_txadmin_features"
          ]
        },
        {
          type: "category",
          label: "QBCore",
          items: [
            "fivem_qbcore_admin"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "RedM",
      items: [
        {
          type: "category",
          label: "Configuration & Administration",
          items: [
            "redm_change_servericon"
          ]
        },
        {
          type: "category",
          label: "Resources & Mods",
          items: [
            "redm_installresources"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "RageMP",
      items: [
        "ragemp_installpackages"
      ],
    },
    {
      type: "category",
      label: "Alt:V",
      items: [
        "altv_installresources"
      ],
    },
    {
      type: "category",
      label: "Satisfactory",
      items: [
        "satisfactory_connect_experimental",
        "satisfactory_savegame",
        "satisfactory_switchexperimental",
        "satisfactory_commands"
      ],
    },
    {
      type: "category",
      label: "Terraria",
      items: [
        "terraria_tshock_add_admin",
        "terraria_tmodloader_installmod"
      ],
    },
    {
      type: "category",
      label: "Source Games",
      items: [
        "source_gsltoken",
        "source_custom_content",
        {
          type: "category",
          label: "Sourcemod / Metamod",
          items: [
            "source_metamod_installation",
            "source_metamod_addadmins",
            "source_metamod_plugins"
          ]
        },
        {
          type: "category",
          label: "CS:GO",
          items: [
            "csgo_configuration",
            "csgo_gotv"
          ]
        },
        {
          type: "category",
          label: "Counter Strike 1.6",
          items: [
            "cs16_becomeadmin",
            "cs16_plugins"
          ]
        },
        {
          type: "category",
          label: "Garry's Mod",
          items: [
            "gmod_servercfg",
            "gmod_ttt"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "ArmA 3",
      items: [
        "arma3_serverconfig",
        "arma3_mods",
        "arma3_altislife_ranks",
        "arma3_gamemode",
        "arma3_missionfile"
      ]
    },
    {
      type: "category",
      label: "ARK",
      items: [
        "ark_becomeadmin",
        "ark_mods",
        "ark_serverlisting",
        "ark_configuration"
      ],
    },
    {
      type: "category",
      label: "Assetto Corsa",
      items: [
        "assettocorsa_configure",
        "assettocorsa_contentmanager",
        "assettocorsa_mods"
      ],
    },
    {
      type: "category",
      label: "Assetto Corsa Competizione",
      items: [
        "assetto_competizione_becomeadmin",
        "assetto_competizione_slot_requirement"
      ],
    },
    {
      type: "category",
      label: "Barotrauma",
      items: [
        "barotrauma_becomeadmin"
      ],
    },
    {
      type: "category",
      label: "BeamMP",
      items: [
        "beammp_authkey",
        "beammp_mods"
      ],
    },
    {
      type: "category",
      label: "Conan Exiles",
      items: [
        "conan_becomeadmin",
        "conan_configuration"
      ],
    },
    {
      type: "category",
      label: "Valheim",
      items: [
        "valheim_connect",
        "valheim_savegame",
        "valheim_backup_schedule",
        "valheim_serverlisting",
        "valheim_admin",
        "valheim_plus",
        "valheim_plugins_bepinex"
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
            "scp_firststeps_connect"
          ]
        },		
        "scp_becomeadmin",
        "scp_newroles",
        "scp_colored_servername",
        "scp_pastebin",
        {
          type: "category",
          label: "ServerMod",
          items: [
            "scpservermod_uploadplugins"
          ]
        },
        {
          type: "category",
          label: "Exiled",
          items: [
            "exiled_plugins"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "ECO",
      items: [
        "eco_becomeadmin",
        "eco_whitelist"
      ],
    },
    {
      type: "category",
      label: "Factorio",
      items: [
        "factorio_becomeadmin",
        "factorio_mods"
      ],
    },
    {
      type: "category",
      label: "Multi Theft Auto",
      items: [
        "mta_becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Space Engineers",
      items: [
        "spaceengineers_becomeadmin",
        "spaceengineers_addmods"
      ],
    },
    {
      type: "category",
      label: "Unturned",
      items: [
        "unturned_becomeadmin",
        "unturned_workshop",
        "unturned_firstthirdperson",
        "unturned_whitelist",
        {
          type: "category",
          label: "RocketMod",
          items: [
            "unturned_rocketmod_plugins",
            "unturned_rocketmod_permissions"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Don't Starve Together",
      items: [
        "dst_create_cave"
      ],
    },
    {
      type: "category",
      label: "Empyrion",
      items: [
        "empyrion_becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Rust",
      items: [
        "rust_becomeadmin",
        "rust_connectrcon",
        "rust_commands",
        "rust_plugins",
        "rust_decay"
      ],
    },
    {
      type: "category",
      label: "Among Us",
      items: [
        "amongus_connection"
      ],
    },
    {
      type: "category",
      label: "7 Days to Die",
      items: [
        "7d2d_becomeadmin",
        "7d2d_mods",
        "7d2d_commands"
      ],
    },
    {
      type: "category",
      label: "Avorion",
      items: [
        "avorion_becomeadmin"
      ],
    },
    {
      type: "category",
      label: "Last Oasis",
      items: [
        "lastoasis_createrealm"
      ],
    },
    {
      type: "category",
      label: "Discord Bot",
      items: [
        "discordbot_setup"
      ],
    },
    {
      type: "category",
      label: "Truck Sim",
      items: [
        "trucksim_dlc"
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
      label: "Stormworks",
      items: [
        "stormworks-becomeadmin"
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
  ]
  
};

module.exports = sidebars;
