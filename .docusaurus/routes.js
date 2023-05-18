import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/guides/de/markdown-page',
    component: ComponentCreator('/guides/de/markdown-page', 'aca'),
    exact: true
  },
  {
    path: '/guides/de/docs',
    component: ComponentCreator('/guides/de/docs', 'd9b'),
    routes: [
      {
        path: '/guides/de/docs/7d2d_becomeadmin',
        component: ComponentCreator('/guides/de/docs/7d2d_becomeadmin', '423'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/7d2d_commands',
        component: ComponentCreator('/guides/de/docs/7d2d_commands', '4ec'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/7d2d_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/7d2d_firststeps_dashboard', '073'),
        exact: true
      },
      {
        path: '/guides/de/docs/7d2d_mods',
        component: ComponentCreator('/guides/de/docs/7d2d_mods', '9b5'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/account_2factor',
        component: ComponentCreator('/guides/de/docs/account_2factor', '632'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_backup_storage',
        component: ComponentCreator('/guides/de/docs/account_backup_storage', '329'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_cashbox',
        component: ComponentCreator('/guides/de/docs/account_cashbox', 'd36'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_community_ads',
        component: ComponentCreator('/guides/de/docs/account_community_ads', '1ca'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_contractsandprepaid',
        component: ComponentCreator('/guides/de/docs/account_contractsandprepaid', '748'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_donations',
        component: ComponentCreator('/guides/de/docs/account_donations', '777'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_friends',
        component: ComponentCreator('/guides/de/docs/account_friends', '872'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_partner_system',
        component: ComponentCreator('/guides/de/docs/account_partner_system', '65c'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_paymentoptions',
        component: ComponentCreator('/guides/de/docs/account_paymentoptions', 'a11'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_security',
        component: ComponentCreator('/guides/de/docs/account_security', '8ca'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_termination_and_cancellation_period',
        component: ComponentCreator('/guides/de/docs/account_termination_and_cancellation_period', '53a'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_usermanagement',
        component: ComponentCreator('/guides/de/docs/account_usermanagement', '1c6'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/account_vouchers',
        component: ComponentCreator('/guides/de/docs/account_vouchers', 'f54'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/altv_installresources',
        component: ComponentCreator('/guides/de/docs/altv_installresources', 'f2c'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/amongus_connection',
        component: ComponentCreator('/guides/de/docs/amongus_connection', '385'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/ark_becomeadmin',
        component: ComponentCreator('/guides/de/docs/ark_becomeadmin', '275'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/ark_configuration',
        component: ComponentCreator('/guides/de/docs/ark_configuration', '2e1'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/ark_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/ark_firststeps_dashboard', '80a'),
        exact: true
      },
      {
        path: '/guides/de/docs/ark_mods',
        component: ComponentCreator('/guides/de/docs/ark_mods', 'aab'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/ark_serverlisting',
        component: ComponentCreator('/guides/de/docs/ark_serverlisting', '626'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/arma3_altislife_ranks',
        component: ComponentCreator('/guides/de/docs/arma3_altislife_ranks', '290'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/arma3_gamemode',
        component: ComponentCreator('/guides/de/docs/arma3_gamemode', 'eee'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/arma3_missionfile',
        component: ComponentCreator('/guides/de/docs/arma3_missionfile', 'dcf'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/arma3_mods',
        component: ComponentCreator('/guides/de/docs/arma3_mods', '507'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/arma3_serverconfig',
        component: ComponentCreator('/guides/de/docs/arma3_serverconfig', '619'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/assetto_competizione_becomeadmin',
        component: ComponentCreator('/guides/de/docs/assetto_competizione_becomeadmin', '9a3'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/assetto_competizione_slot_requirement',
        component: ComponentCreator('/guides/de/docs/assetto_competizione_slot_requirement', 'fc2'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/assettocorsa_configure',
        component: ComponentCreator('/guides/de/docs/assettocorsa_configure', 'ab2'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/assettocorsa_contentmanager',
        component: ComponentCreator('/guides/de/docs/assettocorsa_contentmanager', '1d7'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/assettocorsa_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/assettocorsa_firststeps_dashboard', '472'),
        exact: true
      },
      {
        path: '/guides/de/docs/assettocorsa_mods',
        component: ComponentCreator('/guides/de/docs/assettocorsa_mods', '9ec'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/avorion_becomeadmin',
        component: ComponentCreator('/guides/de/docs/avorion_becomeadmin', '642'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/barotrauma_becomeadmin',
        component: ComponentCreator('/guides/de/docs/barotrauma_becomeadmin', '0f9'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/barotrauma_mods',
        component: ComponentCreator('/guides/de/docs/barotrauma_mods', 'b11'),
        exact: true
      },
      {
        path: '/guides/de/docs/beammp_authkey',
        component: ComponentCreator('/guides/de/docs/beammp_authkey', 'cb9'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/beammp_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/beammp_firststeps_dashboard', 'cf2'),
        exact: true
      },
      {
        path: '/guides/de/docs/beammp_mods',
        component: ComponentCreator('/guides/de/docs/beammp_mods', 'a13'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/community_info',
        component: ComponentCreator('/guides/de/docs/community_info', 'da8'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/conan_becomeadmin',
        component: ComponentCreator('/guides/de/docs/conan_becomeadmin', 'ceb'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/conan_configuration',
        component: ComponentCreator('/guides/de/docs/conan_configuration', '61e'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/corekeeper-connecttoserver',
        component: ComponentCreator('/guides/de/docs/corekeeper-connecttoserver', 'a6a'),
        exact: true,
        sidebar: "dedicatedserverSidebar"
      },
      {
        path: '/guides/de/docs/create_screenshots',
        component: ComponentCreator('/guides/de/docs/create_screenshots', 'e90'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/cs16_becomeadmin',
        component: ComponentCreator('/guides/de/docs/cs16_becomeadmin', 'bb7'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/cs16_plugins',
        component: ComponentCreator('/guides/de/docs/cs16_plugins', 'f25'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/csgo_configuration',
        component: ComponentCreator('/guides/de/docs/csgo_configuration', 'db4'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/csgo_gotv',
        component: ComponentCreator('/guides/de/docs/csgo_gotv', 'e4c'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/dayz_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/dayz_firststeps_dashboard', '776'),
        exact: true
      },
      {
        path: '/guides/de/docs/dedicated_centos',
        component: ComponentCreator('/guides/de/docs/dedicated_centos', 'c03'),
        exact: true
      },
      {
        path: '/guides/de/docs/dedicated_freebsd',
        component: ComponentCreator('/guides/de/docs/dedicated_freebsd', '831'),
        exact: true
      },
      {
        path: '/guides/de/docs/dedicated_ilo',
        component: ComponentCreator('/guides/de/docs/dedicated_ilo', '861'),
        exact: true
      },
      {
        path: '/guides/de/docs/dedicated_iso',
        component: ComponentCreator('/guides/de/docs/dedicated_iso', '0b8'),
        exact: true
      },
      {
        path: '/guides/de/docs/dedicated_linux_debian',
        component: ComponentCreator('/guides/de/docs/dedicated_linux_debian', '795'),
        exact: true
      },
      {
        path: '/guides/de/docs/dedicated_linux_ubuntu',
        component: ComponentCreator('/guides/de/docs/dedicated_linux_ubuntu', '7ce'),
        exact: true
      },
      {
        path: '/guides/de/docs/dedicated_raid',
        component: ComponentCreator('/guides/de/docs/dedicated_raid', 'a02'),
        exact: true
      },
      {
        path: '/guides/de/docs/dedicated_reset',
        component: ComponentCreator('/guides/de/docs/dedicated_reset', '707'),
        exact: true
      },
      {
        path: '/guides/de/docs/dedicated_windows',
        component: ComponentCreator('/guides/de/docs/dedicated_windows', 'e1d'),
        exact: true
      },
      {
        path: '/guides/de/docs/discordbot_setup',
        component: ComponentCreator('/guides/de/docs/discordbot_setup', 'ba7'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/domain_easydns',
        component: ComponentCreator('/guides/de/docs/domain_easydns', '203'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/domain_expertdns',
        component: ComponentCreator('/guides/de/docs/domain_expertdns', '117'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/domain_gameserver_srv_link',
        component: ComponentCreator('/guides/de/docs/domain_gameserver_srv_link', '576'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/domain_general_domain_info',
        component: ComponentCreator('/guides/de/docs/domain_general_domain_info', 'cd5'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/domain_order',
        component: ComponentCreator('/guides/de/docs/domain_order', 'd29'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/domain_profidns',
        component: ComponentCreator('/guides/de/docs/domain_profidns', '418'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/domain_records',
        component: ComponentCreator('/guides/de/docs/domain_records', 'ee3'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/domain_teamspeak_redirect',
        component: ComponentCreator('/guides/de/docs/domain_teamspeak_redirect', '0cb'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/dst_create_cave',
        component: ComponentCreator('/guides/de/docs/dst_create_cave', '81c'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/eco_becomeadmin',
        component: ComponentCreator('/guides/de/docs/eco_becomeadmin', '48a'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/eco_whitelist',
        component: ComponentCreator('/guides/de/docs/eco_whitelist', 'a3f'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/empyrion_becomeadmin',
        component: ComponentCreator('/guides/de/docs/empyrion_becomeadmin', '2b8'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/exiled_plugins',
        component: ComponentCreator('/guides/de/docs/exiled_plugins', 'a62'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/factorio_becomeadmin',
        component: ComponentCreator('/guides/de/docs/factorio_becomeadmin', '3ea'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/factorio_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/factorio_firststeps_dashboard', '9d7'),
        exact: true
      },
      {
        path: '/guides/de/docs/factorio_mods',
        component: ComponentCreator('/guides/de/docs/factorio_mods', '25b'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/firststeps',
        component: ComponentCreator('/guides/de/docs/firststeps', 'b3c'),
        exact: true
      },
      {
        path: '/guides/de/docs/firststeps_locations',
        component: ComponentCreator('/guides/de/docs/firststeps_locations', '6b4'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/firststeps_problem_melden',
        component: ComponentCreator('/guides/de/docs/firststeps_problem_melden', '687'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/firststeps_register',
        component: ComponentCreator('/guides/de/docs/firststeps_register', '1b6'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/firststeps_rent',
        component: ComponentCreator('/guides/de/docs/firststeps_rent', '0c4'),
        exact: true
      },
      {
        path: '/guides/de/docs/firststeps_rent_contractorprepaid',
        component: ComponentCreator('/guides/de/docs/firststeps_rent_contractorprepaid', 'b8c'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/fivem_change_servericon',
        component: ComponentCreator('/guides/de/docs/fivem_change_servericon', 'e73'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_changeloadingscreen',
        component: ComponentCreator('/guides/de/docs/fivem_changeloadingscreen', '74f'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_dashboard',
        component: ComponentCreator('/guides/de/docs/fivem_dashboard', 'd28'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_deletecache',
        component: ComponentCreator('/guides/de/docs/fivem_deletecache', '6f0'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_devtools',
        component: ComponentCreator('/guides/de/docs/fivem_devtools', 'feb'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_editlocalfiles',
        component: ComponentCreator('/guides/de/docs/fivem_editlocalfiles', '31b'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_esx_addcarstoshop',
        component: ComponentCreator('/guides/de/docs/fivem_esx_addcarstoshop', '074'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_esx_becomeadminoverdatabase',
        component: ComponentCreator('/guides/de/docs/fivem_esx_becomeadminoverdatabase', 'b37'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_esx_changejobgarages',
        component: ComponentCreator('/guides/de/docs/fivem_esx_changejobgarages', 'd67'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_esx_changemoneyicon',
        component: ComponentCreator('/guides/de/docs/fivem_esx_changemoneyicon', '375'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_esx_changerespawnpoint',
        component: ComponentCreator('/guides/de/docs/fivem_esx_changerespawnpoint', '949'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_esx_disablehud',
        component: ComponentCreator('/guides/de/docs/fivem_esx_disablehud', '6ac'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_esx_disableinventory',
        component: ComponentCreator('/guides/de/docs/fivem_esx_disableinventory', 'dea'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_gamebuild',
        component: ComponentCreator('/guides/de/docs/fivem_gamebuild', '413'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_gamechange',
        component: ComponentCreator('/guides/de/docs/fivem_gamechange', 'e57'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_installels',
        component: ComponentCreator('/guides/de/docs/fivem_installels', '0df'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_installeup',
        component: ComponentCreator('/guides/de/docs/fivem_installeup', '864'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_installresources',
        component: ComponentCreator('/guides/de/docs/fivem_installresources', 'c58'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_licensekey',
        component: ComponentCreator('/guides/de/docs/fivem_licensekey', '94e'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_mastodon',
        component: ComponentCreator('/guides/de/docs/fivem_mastodon', 'f9b'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_mods_installaddon',
        component: ComponentCreator('/guides/de/docs/fivem_mods_installaddon', 'aa7'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_mods_installreplace',
        component: ComponentCreator('/guides/de/docs/fivem_mods_installreplace', '7d1'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_notlisted',
        component: ComponentCreator('/guides/de/docs/fivem_notlisted', 'c84'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_prohibited_resources',
        component: ComponentCreator('/guides/de/docs/fivem_prohibited_resources', '8ec'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_qbcore_admin',
        component: ComponentCreator('/guides/de/docs/fivem_qbcore_admin', 'c7d'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_rcon',
        component: ComponentCreator('/guides/de/docs/fivem_rcon', '592'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_servername_color',
        component: ComponentCreator('/guides/de/docs/fivem_servername_color', 'e15'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_servername_emojis',
        component: ComponentCreator('/guides/de/docs/fivem_servername_emojis', 'aca'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_sql_file_import',
        component: ComponentCreator('/guides/de/docs/fivem_sql_file_import', '9f8'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_txadmin_features',
        component: ComponentCreator('/guides/de/docs/fivem_txadmin_features', '9af'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_txadmin_setup',
        component: ComponentCreator('/guides/de/docs/fivem_txadmin_setup', 'c28'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_upvotes',
        component: ComponentCreator('/guides/de/docs/fivem_upvotes', 'fab'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_useprofiler',
        component: ComponentCreator('/guides/de/docs/fivem_useprofiler', 'e45'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_vrp_changemoneyicon',
        component: ComponentCreator('/guides/de/docs/fivem_vrp_changemoneyicon', '107'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_vrp_removespeedo',
        component: ComponentCreator('/guides/de/docs/fivem_vrp_removespeedo', 'f15'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem_whitelist',
        component: ComponentCreator('/guides/de/docs/fivem_whitelist', '39d'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/fivem-steam-web-api-key',
        component: ComponentCreator('/guides/de/docs/fivem-steam-web-api-key', '556'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_backups',
        component: ComponentCreator('/guides/de/docs/gameserver_backups', '5dd'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_cloudvslifetime',
        component: ComponentCreator('/guides/de/docs/gameserver_cloudvslifetime', '7d8'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_database_external_access',
        component: ComponentCreator('/guides/de/docs/gameserver_database_external_access', 'cdf'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_databases_pma',
        component: ComponentCreator('/guides/de/docs/gameserver_databases_pma', 'e9d'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_ftpaccess',
        component: ComponentCreator('/guides/de/docs/gameserver_ftpaccess', '247'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_gameswitch',
        component: ComponentCreator('/guides/de/docs/gameserver_gameswitch', '3cd'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_resourcelimit',
        component: ComponentCreator('/guides/de/docs/gameserver_resourcelimit', '527'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_restartplaner',
        component: ComponentCreator('/guides/de/docs/gameserver_restartplaner', '02b'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_server_down_what_now',
        component: ComponentCreator('/guides/de/docs/gameserver_server_down_what_now', '5e3'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_tebex',
        component: ComponentCreator('/guides/de/docs/gameserver_tebex', 'b35'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gameserver_upgrade',
        component: ComponentCreator('/guides/de/docs/gameserver_upgrade', '497'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gmod_servercfg',
        component: ComponentCreator('/guides/de/docs/gmod_servercfg', '57a'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/gmod_ttt',
        component: ComponentCreator('/guides/de/docs/gmod_ttt', '179'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/lastoasis_createrealm',
        component: ComponentCreator('/guides/de/docs/lastoasis_createrealm', '370'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/legal_use_brand_assets',
        component: ComponentCreator('/guides/de/docs/legal_use_brand_assets', 'd7b'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_add_own_world',
        component: ComponentCreator('/guides/de/docs/minecraft_add_own_world', '88f'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_addop',
        component: ComponentCreator('/guides/de/docs/minecraft_addop', 'a2f'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_bungeecord_config',
        component: ComponentCreator('/guides/de/docs/minecraft_bungeecord_config', '333'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_commands',
        component: ComponentCreator('/guides/de/docs/minecraft_commands', '29d'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_default_config',
        component: ComponentCreator('/guides/de/docs/minecraft_default_config', '3c0'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_firststeps_connect',
        component: ComponentCreator('/guides/de/docs/minecraft_firststeps_connect', '001'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_forge_add_mods',
        component: ComponentCreator('/guides/de/docs/minecraft_forge_add_mods', 'e71'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_pluginuploader',
        component: ComponentCreator('/guides/de/docs/minecraft_pluginuploader', '214'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_rcon',
        component: ComponentCreator('/guides/de/docs/minecraft_rcon', '317'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_server_optimize',
        component: ComponentCreator('/guides/de/docs/minecraft_server_optimize', '232'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_server-icon',
        component: ComponentCreator('/guides/de/docs/minecraft_server-icon', '8c3'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_timings_report',
        component: ComponentCreator('/guides/de/docs/minecraft_timings_report', '3d1'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_whitelist',
        component: ComponentCreator('/guides/de/docs/minecraft_whitelist', 'e4d'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraft_worlds',
        component: ComponentCreator('/guides/de/docs/minecraft_worlds', '907'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/minecraftbedrock_behaviorresourcepacks',
        component: ComponentCreator('/guides/de/docs/minecraftbedrock_behaviorresourcepacks', 'a41'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/moe_firststeps_connect',
        component: ComponentCreator('/guides/de/docs/moe_firststeps_connect', 'eef'),
        exact: true
      },
      {
        path: '/guides/de/docs/moe_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/moe_firststeps_dashboard', '1e1'),
        exact: true
      },
      {
        path: '/guides/de/docs/mta_becomeadmin',
        component: ComponentCreator('/guides/de/docs/mta_becomeadmin', '458'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/partner-guide',
        component: ComponentCreator('/guides/de/docs/partner-guide', 'f09'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/pathoftitans_becomeadmin',
        component: ComponentCreator('/guides/de/docs/pathoftitans_becomeadmin', 'ab4'),
        exact: true
      },
      {
        path: '/guides/de/docs/preorders',
        component: ComponentCreator('/guides/de/docs/preorders', '207'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/projectzomboid_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/projectzomboid_firststeps_dashboard', 'b08'),
        exact: true
      },
      {
        path: '/guides/de/docs/ragemp_installpackages',
        component: ComponentCreator('/guides/de/docs/ragemp_installpackages', '75f'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/redm_change_servericon',
        component: ComponentCreator('/guides/de/docs/redm_change_servericon', '689'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/redm_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/redm_firststeps_dashboard', '1e9'),
        exact: true
      },
      {
        path: '/guides/de/docs/redm_installresources',
        component: ComponentCreator('/guides/de/docs/redm_installresources', '66b'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/rust_becomeadmin',
        component: ComponentCreator('/guides/de/docs/rust_becomeadmin', '42a'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/rust_commands',
        component: ComponentCreator('/guides/de/docs/rust_commands', '1b6'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/rust_connectrcon',
        component: ComponentCreator('/guides/de/docs/rust_connectrcon', 'e90'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/rust_decay',
        component: ComponentCreator('/guides/de/docs/rust_decay', '7f7'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/rust_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/rust_firststeps_dashboard', '172'),
        exact: true
      },
      {
        path: '/guides/de/docs/rust_plugins',
        component: ComponentCreator('/guides/de/docs/rust_plugins', '1ef'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/satisfactory_addmods',
        component: ComponentCreator('/guides/de/docs/satisfactory_addmods', '039'),
        exact: true
      },
      {
        path: '/guides/de/docs/satisfactory_commands',
        component: ComponentCreator('/guides/de/docs/satisfactory_commands', 'b60'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/satisfactory_connect',
        component: ComponentCreator('/guides/de/docs/satisfactory_connect', 'c06'),
        exact: true
      },
      {
        path: '/guides/de/docs/satisfactory_connect_experimental',
        component: ComponentCreator('/guides/de/docs/satisfactory_connect_experimental', '11b'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/satisfactory_firststeps_connect',
        component: ComponentCreator('/guides/de/docs/satisfactory_firststeps_connect', 'e7e'),
        exact: true
      },
      {
        path: '/guides/de/docs/satisfactory_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/satisfactory_firststeps_dashboard', 'c84'),
        exact: true
      },
      {
        path: '/guides/de/docs/satisfactory_savegame',
        component: ComponentCreator('/guides/de/docs/satisfactory_savegame', 'f5a'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/satisfactory_switchexperimental',
        component: ComponentCreator('/guides/de/docs/satisfactory_switchexperimental', 'd47'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/scp_becomeadmin',
        component: ComponentCreator('/guides/de/docs/scp_becomeadmin', '9c0'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/scp_colored_servername',
        component: ComponentCreator('/guides/de/docs/scp_colored_servername', 'b0d'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/scp_firststeps_connect',
        component: ComponentCreator('/guides/de/docs/scp_firststeps_connect', '19b'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/scp_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/scp_firststeps_dashboard', '5ab'),
        exact: true
      },
      {
        path: '/guides/de/docs/scp_newroles',
        component: ComponentCreator('/guides/de/docs/scp_newroles', '336'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/scp_pastebin',
        component: ComponentCreator('/guides/de/docs/scp_pastebin', '161'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/scpservermod_uploadplugins',
        component: ComponentCreator('/guides/de/docs/scpservermod_uploadplugins', '215'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/source_custom_content',
        component: ComponentCreator('/guides/de/docs/source_custom_content', '782'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/source_gsltoken',
        component: ComponentCreator('/guides/de/docs/source_gsltoken', '368'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/source_metamod_addadmins',
        component: ComponentCreator('/guides/de/docs/source_metamod_addadmins', '7a4'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/source_metamod_installation',
        component: ComponentCreator('/guides/de/docs/source_metamod_installation', '19f'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/source_metamod_plugins',
        component: ComponentCreator('/guides/de/docs/source_metamod_plugins', 'b37'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/spaceengineers_addmods',
        component: ComponentCreator('/guides/de/docs/spaceengineers_addmods', '9ef'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/spaceengineers_becomeadmin',
        component: ComponentCreator('/guides/de/docs/spaceengineers_becomeadmin', '6f7'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/spaceengineers_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/spaceengineers_firststeps_dashboard', '5d4'),
        exact: true
      },
      {
        path: '/guides/de/docs/stormworks-becomeadmin',
        component: ComponentCreator('/guides/de/docs/stormworks-becomeadmin', 'ddb'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/suggestions',
        component: ComponentCreator('/guides/de/docs/suggestions', '37a'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/de/docs/terraria_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/terraria_firststeps_dashboard', '335'),
        exact: true
      },
      {
        path: '/guides/de/docs/terraria_tmodloader_installmod',
        component: ComponentCreator('/guides/de/docs/terraria_tmodloader_installmod', '4f8'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/terraria_tshock_add_admin',
        component: ComponentCreator('/guides/de/docs/terraria_tshock_add_admin', '690'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/trucksim_dlc',
        component: ComponentCreator('/guides/de/docs/trucksim_dlc', '2c3'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/unturned_becomeadmin',
        component: ComponentCreator('/guides/de/docs/unturned_becomeadmin', '1a1'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/unturned_firstthirdperson',
        component: ComponentCreator('/guides/de/docs/unturned_firstthirdperson', '2d2'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/unturned_rocketmod_permissions',
        component: ComponentCreator('/guides/de/docs/unturned_rocketmod_permissions', 'c8e'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/unturned_rocketmod_plugins',
        component: ComponentCreator('/guides/de/docs/unturned_rocketmod_plugins', '319'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/unturned_whitelist',
        component: ComponentCreator('/guides/de/docs/unturned_whitelist', '43b'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/unturned_workshop',
        component: ComponentCreator('/guides/de/docs/unturned_workshop', '2d9'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/valheim_admin',
        component: ComponentCreator('/guides/de/docs/valheim_admin', 'ebe'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/valheim_backup_schedule',
        component: ComponentCreator('/guides/de/docs/valheim_backup_schedule', '027'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/valheim_connect',
        component: ComponentCreator('/guides/de/docs/valheim_connect', '759'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/valheim_firststeps_connect',
        component: ComponentCreator('/guides/de/docs/valheim_firststeps_connect', '496'),
        exact: true
      },
      {
        path: '/guides/de/docs/valheim_plugins_bepinex',
        component: ComponentCreator('/guides/de/docs/valheim_plugins_bepinex', '259'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/valheim_plus',
        component: ComponentCreator('/guides/de/docs/valheim_plus', 'e74'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/valheim_savegame',
        component: ComponentCreator('/guides/de/docs/valheim_savegame', '8f6'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/valheim_serverlisting',
        component: ComponentCreator('/guides/de/docs/valheim_serverlisting', '6d0'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/voiceserver_becomeadmin',
        component: ComponentCreator('/guides/de/docs/voiceserver_becomeadmin', 'a5c'),
        exact: true,
        sidebar: "voiceserverbotSidebar"
      },
      {
        path: '/guides/de/docs/voiceserver_configuration',
        component: ComponentCreator('/guides/de/docs/voiceserver_configuration', '943'),
        exact: true,
        sidebar: "voiceserverbotSidebar"
      },
      {
        path: '/guides/de/docs/voiceserver_query',
        component: ComponentCreator('/guides/de/docs/voiceserver_query', 'd65'),
        exact: true,
        sidebar: "voiceserverbotSidebar"
      },
      {
        path: '/guides/de/docs/voiceserver_ts3backup',
        component: ComponentCreator('/guides/de/docs/voiceserver_ts3backup', '902'),
        exact: true,
        sidebar: "voiceserverbotSidebar"
      },
      {
        path: '/guides/de/docs/voiceserver_voicebot_connection',
        component: ComponentCreator('/guides/de/docs/voiceserver_voicebot_connection', 'fd8'),
        exact: true,
        sidebar: "voiceserverbotSidebar"
      },
      {
        path: '/guides/de/docs/vrising_firststeps_dashboard',
        component: ComponentCreator('/guides/de/docs/vrising_firststeps_dashboard', '3db'),
        exact: true
      },
      {
        path: '/guides/de/docs/vrising-becomeadmin',
        component: ComponentCreator('/guides/de/docs/vrising-becomeadmin', 'eda'),
        exact: true,
        sidebar: "gameserverSidebar"
      },
      {
        path: '/guides/de/docs/vserver_linux_add_ip',
        component: ComponentCreator('/guides/de/docs/vserver_linux_add_ip', '7ff'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_cockpit',
        component: ComponentCreator('/guides/de/docs/vserver_linux_cockpit', '244'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_dnsserver',
        component: ComponentCreator('/guides/de/docs/vserver_linux_dnsserver', '798'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_docker',
        component: ComponentCreator('/guides/de/docs/vserver_linux_docker', '42f'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_ftp',
        component: ComponentCreator('/guides/de/docs/vserver_linux_ftp', 'f3d'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_ftp_install',
        component: ComponentCreator('/guides/de/docs/vserver_linux_ftp_install', '3a3'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_gs_interface',
        component: ComponentCreator('/guides/de/docs/vserver_linux_gs_interface', '0e7'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_java',
        component: ComponentCreator('/guides/de/docs/vserver_linux_java', 'f76'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_jitsi',
        component: ComponentCreator('/guides/de/docs/vserver_linux_jitsi', 'e53'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_mariadbinstall',
        component: ComponentCreator('/guides/de/docs/vserver_linux_mariadbinstall', 'd54'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_mastodon',
        component: ComponentCreator('/guides/de/docs/vserver_linux_mastodon', 'd5c'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_nextcloud',
        component: ComponentCreator('/guides/de/docs/vserver_linux_nextcloud', 'e45'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_openvpn',
        component: ComponentCreator('/guides/de/docs/vserver_linux_openvpn', 'fea'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_password_change',
        component: ComponentCreator('/guides/de/docs/vserver_linux_password_change', '0fc'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_phpmyadmin',
        component: ComponentCreator('/guides/de/docs/vserver_linux_phpmyadmin', '7de'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_plesk',
        component: ComponentCreator('/guides/de/docs/vserver_linux_plesk', 'd86'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_rsync',
        component: ComponentCreator('/guides/de/docs/vserver_linux_rsync', 'b49'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_sftp',
        component: ComponentCreator('/guides/de/docs/vserver_linux_sftp', '2dd'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_ssh',
        component: ComponentCreator('/guides/de/docs/vserver_linux_ssh', '218'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_ssh2fa',
        component: ComponentCreator('/guides/de/docs/vserver_linux_ssh2fa', '85e'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_sshkey',
        component: ComponentCreator('/guides/de/docs/vserver_linux_sshkey', '005'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_ssl',
        component: ComponentCreator('/guides/de/docs/vserver_linux_ssl', 'c66'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_webserver',
        component: ComponentCreator('/guides/de/docs/vserver_linux_webserver', 'c6f'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_linux_xrdp',
        component: ComponentCreator('/guides/de/docs/vserver_linux_xrdp', '6e0'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_network_analysis_winmtr',
        component: ComponentCreator('/guides/de/docs/vserver_network_analysis_winmtr', '608'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_root_unterschied',
        component: ComponentCreator('/guides/de/docs/vserver_root_unterschied', '692'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_vnc',
        component: ComponentCreator('/guides/de/docs/vserver_vnc', 'c50'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_addip',
        component: ComponentCreator('/guides/de/docs/vserver_windows_addip', 'a1a'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_ark',
        component: ComponentCreator('/guides/de/docs/vserver_windows_ark', '70b'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_change_language',
        component: ComponentCreator('/guides/de/docs/vserver_windows_change_language', 'ddc'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_expand_disk',
        component: ComponentCreator('/guides/de/docs/vserver_windows_expand_disk', '5c9'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_fs_19',
        component: ComponentCreator('/guides/de/docs/vserver_windows_fs_19', '8ff'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_fs_22',
        component: ComponentCreator('/guides/de/docs/vserver_windows_fs_22', '8ba'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_ftpserver',
        component: ComponentCreator('/guides/de/docs/vserver_windows_ftpserver', '90c'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_installmysql',
        component: ComponentCreator('/guides/de/docs/vserver_windows_installmysql', 'ef1'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_nointernet',
        component: ComponentCreator('/guides/de/docs/vserver_windows_nointernet', '869'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_plesk',
        component: ComponentCreator('/guides/de/docs/vserver_windows_plesk', '0ef'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_port',
        component: ComponentCreator('/guides/de/docs/vserver_windows_port', '59e'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_satisfactory',
        component: ComponentCreator('/guides/de/docs/vserver_windows_satisfactory', '930'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_userdp',
        component: ComponentCreator('/guides/de/docs/vserver_windows_userdp', '802'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_valheim',
        component: ComponentCreator('/guides/de/docs/vserver_windows_valheim', '8ca'),
        exact: true
      },
      {
        path: '/guides/de/docs/vserver_windows_vrising',
        component: ComponentCreator('/guides/de/docs/vserver_windows_vrising', '422'),
        exact: true
      },
      {
        path: '/guides/de/docs/webspace_adddomain',
        component: ComponentCreator('/guides/de/docs/webspace_adddomain', '69b'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/webspace_dashboard',
        component: ComponentCreator('/guides/de/docs/webspace_dashboard', '754'),
        exact: true
      },
      {
        path: '/guides/de/docs/webspace_htaccess_discord',
        component: ComponentCreator('/guides/de/docs/webspace_htaccess_discord', '869'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/webspace_mybb',
        component: ComponentCreator('/guides/de/docs/webspace_mybb', 'a08'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/webspace_plesk_ftp',
        component: ComponentCreator('/guides/de/docs/webspace_plesk_ftp', 'd19'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/webspace_plesk_sendmail',
        component: ComponentCreator('/guides/de/docs/webspace_plesk_sendmail', '1fb'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/webspace_plesk_ssl',
        component: ComponentCreator('/guides/de/docs/webspace_plesk_ssl', 'c80'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      },
      {
        path: '/guides/de/docs/webspace_wordpress',
        component: ComponentCreator('/guides/de/docs/webspace_wordpress', '028'),
        exact: true,
        sidebar: "domainwebspaceSidebar"
      }
    ]
  },
  {
    path: '/guides/de/',
    component: ComponentCreator('/guides/de/', '4cf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
