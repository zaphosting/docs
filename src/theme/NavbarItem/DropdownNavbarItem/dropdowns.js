import React from 'react';

export const icons = {
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="9" y1="7" x2="16" y2="7" />
      <line x1="9" y1="11" x2="14" y2="11" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  ),
  disc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" />
    </svg>
  ),
  windows: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12.5h8V21l-8-1.143V12.5zM3 11.5V3.643L11 2.5v9H3zM12 11.5V2.357L21 1v10.5h-9zM12 12.5H21V23l-9-1.357V12.5z" />
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9.5 2 8 4.5 8 7c0 1.5-.5 2.5-1.5 4C5 13 4 15 4 17c0 2 2 4 8 4s8-2 8-4c0-2-1-4-2.5-6C16.5 9.5 16 8.5 16 7c0-2.5-1.5-5-4-5z" />
      <circle cx="10" cy="8" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="14" cy="8" r="0.8" fill="currentColor" stroke="none" />
      <path d="M9 12c1 1 5 1 6 0" />
      <path d="M7 17c2 1 8 1 10 0" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  gamepad: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <line x1="15" y1="13" x2="15.01" y2="13" />
      <line x1="18" y1="11" x2="18.01" y2="11" />
      <rect x="2" y="6" width="20" height="12" rx="3" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  crosshair: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="22" y1="12" x2="18" y2="12" />
      <line x1="6" y1="12" x2="2" y2="12" />
      <line x1="12" y1="6" x2="12" y2="2" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  ),
  list: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  ),
  sword: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 17.5L3 6V3h3l11.5 11.5" />
      <path d="M13 19l6-6" />
      <path d="M16 16l4 4" />
      <path d="M19 21l2-2" />
    </svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  hardDrive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="12" x2="2" y2="12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
      <line x1="6" y1="16" x2="6.01" y2="16" />
      <line x1="10" y1="16" x2="10.01" y2="16" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  alertTriangle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  refreshCw: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  ),
  barChart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  upload: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  ),
  shuffle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  ),
  trendingUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  dollarSign: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  shoppingCart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  ),
  headphones: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
    </svg>
  ),
  music: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="9" cy="16" r="1.5" />
      <circle cx="15" cy="16" r="1.5" />
      <path d="M8.5 11V7a3.5 3.5 0 0 1 7 0v4" />
      <line x1="12" y1="4" x2="12" y2="1" />
      <circle cx="12" cy="1" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
};

export const dropdowns = {

// -------------------------------------------------------------------
  // Gameserver
  // -------------------------------------------------------------------
  gameserver: {
    mainLink: '/docs/gameserver-introduction',
    activePathMatch: '/gameserver-',

    topRow: {
      title: 'First Steps',
      titleKey: 'gettingStarted',
      description: 'Learn how to set up, manage, and optimize your game server. From backups and FTP access to databases and monetization.',
      descriptionKey: 'gettingStartedDesc',
      icon: 'rocket',
      items: [
        { to: '/docs/gameserver-introduction', icon: 'book', label: 'Introduction', labelKey: 'introduction' },
        { to: '/docs/gameserver-backups', icon: 'shield', label: 'Backups', labelKey: 'backups' },
        { to: '/docs/gameserver-ftpaccess', icon: 'upload', label: 'FTP Access', labelKey: 'ftpAccess' },
        { to: '/docs/gameserver-scheduled-tasks', icon: 'clock', label: 'Scheduled Tasks', labelKey: 'scheduledTasks' },
        { to: '/docs/gameserver-gameswitch', icon: 'shuffle', label: 'Switch Game', labelKey: 'switchGame' },
        { to: '/docs/gameserver-upgrade', icon: 'trendingUp', label: 'Up-/Downgrade', labelKey: 'upDowngrade' },
        { to: '/docs/gameserver-server-down-what-now', icon: 'zap', label: 'Server Crash - What to do?', labelKey: 'serverCrash' },
        { to: '/docs/gameserver-tebex', icon: 'dollarSign', label: 'Tebex Monetization', labelKey: 'tebex' },
        { to: '/docs/gameserver-databases-pma', icon: 'database', label: 'Databases', labelKey: 'databases' },
        { to: '/docs/gameserver-introduction', icon: 'arrowRight', label: 'More...', labelKey: 'more' },
      ],
    },

    columnsHeader: {
      title: 'Popular Games',
      titleKey: 'popularGames',
      description: 'Find setup guides for the most popular games. Pick your title and get your server running in no time.',
      descriptionKey: 'popularGamesDesc',
      icon: 'gamepad',
    },

    columns: [
      {
        items: [
          { to: '/docs/fivem-dashboard', icon: 'gamepad', label: 'FiveM', labelKey: 'fivem', badge: 'Most Popular', badgeKey: 'badgeMostPopular' },
          { to: '/docs/minecraft-firststeps-dashboard', icon: 'gamepad', label: 'Minecraft', labelKey: 'minecraft', badge: 'Popular', badgeKey: 'badgePopular' },
          { to: '/docs/hytale-firststeps-dashboard', icon: 'gamepad', label: 'Hytale', labelKey: 'hytale', badge: 'Trending', badgeKey: 'badgeTrending' },
        ],
      },
      {
        items: [
          { to: '/docs/scp-firststeps-dashboard', icon: 'gamepad', label: 'SCP: Secret Laboratory', labelKey: 'scp' },
          { to: '/docs/valheim-firststeps-dashboard', icon: 'gamepad', label: 'Valheim', labelKey: 'valheim' },
          { to: '/docs/ark-firststeps-dashboard', icon: 'gamepad', label: 'Ark: Survival Evolved', labelKey: 'ark' },
        ],
      },
      {
        items: [
          { to: '/docs/palworld-firststeps-dashboard', icon: 'gamepad', label: 'Palworld', labelKey: 'palworld' },
          { to: '/docs/enshrouded-firststeps-dashboard', icon: 'gamepad', label: 'Enshrouded', labelKey: 'enshrouded' },
          { to: '/docs/scum-firststeps-dashboard', icon: 'gamepad', label: 'SCUM', labelKey: 'scum' },
        ],
      },
    ],

    bottomRow: {
      items: [
        { to: '/docs/7d2d-firststeps-dashboard', icon: 'list', label: 'All Games (A-Z)', labelKey: 'allGames' },
      ],
    },
  },

  // -------------------------------------------------------------------
  // VPS
  // -------------------------------------------------------------------
  vps: {
    mainLink: '/docs/vserver-introduction',
    activePathMatch: null,

    topRow: {
      title: 'First Steps',
      titleKey: 'gettingStarted',
      description: 'Get your virtual private server up and running. Dashboard access, server resets, VNC, backups, and troubleshooting.',
      descriptionKey: 'gettingStartedDesc',
      icon: 'rocket',
      items: [
        { to: '/docs/vserver-introduction', icon: 'book', label: 'Introduction', labelKey: 'introduction' },
        { to: '/docs/vserver-dashboard', icon: 'dashboard', label: 'Dashboard', labelKey: 'dashboard' },
        { to: '/docs/vserver-reset', icon: 'refreshCw', label: 'Server Reset', labelKey: 'serverReset' },
        { to: '/docs/vserver-vnc', icon: 'monitor', label: 'VNC Console', labelKey: 'vncConsole' },
        { to: '/docs/vserver-rescue', icon: 'shield', label: 'System Rescue (Backup)', labelKey: 'systemRescue' },
        { to: '/docs/vserver-dedicated-comparison', icon: 'barChart', label: 'VPS/Dedicated Comparison', labelKey: 'vpsComparison' },
        { to: '/docs/vserver-ballooning', icon: 'cpu', label: 'Ballooning', labelKey: 'ballooning' },
        { to: '/docs/vserver-iso', icon: 'disc', label: 'Mount ISO file', labelKey: 'ownIso' },
        { to: '/docs/vserver-network-analysis-winmtr', icon: 'alertTriangle', label: 'Troubleshooting', labelKey: 'troubleshooting' },
        { to: '/docs/vserver-introduction', icon: 'arrowRight', label: 'More...', labelKey: 'more' },
      ],
    },

    columns: [
      {
        title: 'Linux',
        titleKey: 'linux',
        description: 'SSH, services, game servers, and more. Guides for managing your Linux-based VPS from the ground up.',
        descriptionKey: 'linuxDesc',
        icon: 'linux',
        items: [
          { to: '/docs/vserver-linux-ssh', icon: 'gear', label: 'General', labelKey: 'general' },
          { to: '/docs/vserver-linux-bitwarden', icon: 'cube', label: 'Services', labelKey: 'services' },
          { to: '/docs/software-overview-dedicated-game-server', icon: 'gamepad', label: 'Game Servers', labelKey: 'gameServers' },
          { to: '/docs/vserver-linux-ftp', icon: 'alertTriangle', label: 'Troubleshooting', labelKey: 'troubleshooting' },
        ],
      },
      {
        title: 'Windows',
        titleKey: 'windows',
        description: 'Remote Desktop, services, game servers, and troubleshooting. Everything for your Windows-based VPS.',
        descriptionKey: 'windowsDesc',
        icon: 'windows',
        items: [
          { to: '/docs/vserver-windows-userdp', icon: 'gear', label: 'General', labelKey: 'general' },
          { to: '/docs/vserver-windows-bitwarden', icon: 'cube', label: 'Services', labelKey: 'services' },
          { to: '/docs/software-overview-dedicated-game-server', icon: 'gamepad', label: 'Game Servers', labelKey: 'gameServers' },
          { to: '/docs/vserver-windows-rdp-freeze', icon: 'alertTriangle', label: 'Troubleshooting', labelKey: 'troubleshooting' },
        ],
      },
    ],

    bottomRow: {
      items: [
        { to: '/docs/software-overview-services', icon: 'list', label: 'Software', labelKey: 'software' },
      ],
    },
  },  

  // -------------------------------------------------------------------
  // Dedicated Server
  // -------------------------------------------------------------------
  dedicated: {
    mainLink: '/docs/dedicated-introduction',
    activePathMatch: null,

    topRow: {
      title: 'First Steps',
      titleKey: 'gettingStarted',
      description: 'Set up your dedicated server step by step. From initial setup and iLO/IPMI to RAID configuration and custom ISOs.',
      descriptionKey: 'gettingStartedDesc',
      icon: 'rocket',
      items: [
        { to: '/docs/dedicated-introduction', icon: 'book', label: 'Introduction', labelKey: 'introduction' },
        { to: '/docs/dedicated-dashboard', icon: 'dashboard', label: 'Dashboard', labelKey: 'dashboard' },
        { to: '/docs/dedicated-setup', icon: 'gear', label: 'Initial Setup', labelKey: 'initialSetup' },
        { to: '/docs/dedicated-ilo', icon: 'cpu', label: 'iLO', labelKey: 'ilo' },
        { to: '/docs/dedicated-ipmi', icon: 'cpu', label: 'IPMI', labelKey: 'ipmi' },
        { to: '/docs/dedicated-iso', icon: 'disc', label: 'Own ISO', labelKey: 'ownIso' },
        { to: '/docs/dedicated-raid', icon: 'hardDrive', label: 'Configure RAID', labelKey: 'configureRaid' },
        { to: '/docs/dedicated-reset', icon: 'shield', label: 'Server Reset', labelKey: 'serverReset' },
        { to: '/docs/dedicated-introduction', icon: 'arrowRight', label: 'More...', labelKey: 'more' },
      ],
    },

    columns: [
      {
        title: 'Linux',
        titleKey: 'linux',
        description: 'Full root access, services, game servers, and OS management. Guides for your Linux dedicated server.',
        descriptionKey: 'linuxDesc',
        icon: 'linux',
        items: [
          { to: '/docs/dedicated-linux-gs-interface', icon: 'gear', label: 'General', labelKey: 'general' },
          { to: '/docs/software-overview-services', icon: 'cube', label: 'Services', labelKey: 'services' },
          { to: '/docs/software-overview-dedicated-game-server', icon: 'gamepad', label: 'Game Servers', labelKey: 'gameServers' },
          { to: '/docs/dedicated-linux-ubuntu', icon: 'cube', label: 'Operating Systems', labelKey: 'operating-systems-linux' },
          { to: '/docs/dedicated-linux-troubleshooting-restore-access', icon: 'alertTriangle', label: 'Troubleshooting', labelKey: 'troubleshooting' },
        ],
      },
      {
        title: 'Windows',
        titleKey: 'windows',
        description: 'Remote Desktop, services, game servers, and OS management. Guides for your Windows dedicated server.',
        descriptionKey: 'windowsDesc',
        icon: 'windows',
        items: [
          { to: '/docs/dedicated-windows-userdp', icon: 'gear', label: 'General', labelKey: 'general' },
          { to: '/docs/software-overview-services', icon: 'cube', label: 'Services', labelKey: 'services' },
          { to: '/docs/software-overview-dedicated-game-server', icon: 'gamepad', label: 'Game Servers', labelKey: 'gameServers' },
          { to: '/docs/dedicated-windows', icon: 'cube', label: 'Operating Systems', labelKey: 'operating-systems-windows' },
          { to: '/docs/dedicated-windows-troubleshooting-restore-access', icon: 'alertTriangle', label: 'Troubleshooting', labelKey: 'troubleshooting' },
        ],
      },
    ],

    bottomRow: {
      items: [
        { to: '/docs/software-overview-services', icon: 'list', label: 'Software', labelKey: 'software' },
      ],
    },
  },

  // -------------------------------------------------------------------
  // Rent a Server
  // -------------------------------------------------------------------
  rent: {
    mainLink: 'https://zap-hosting.com/en/server-hosting/',
    activePathMatch: null,

    topRow: {
      title: 'Game Hosting',
      titleKey: 'gameHosting',
      description: 'Rent a game server for your favorite title. Instant setup, DDoS protection and many more features included!',
      descriptionKey: 'gameHostingDesc',
      icon: 'gamepad',
      items: [
        { href: 'https://zap-hosting.com/en/fivem-server-hosting/', icon: 'gamepad', label: 'FiveM', labelKey: 'fivem', badge: 'Most Popular', badgeKey: 'badgeMostPopular' },
        { href: 'https://zap-hosting.com/en/minecraft-server-hosting/', icon: 'gamepad', label: 'Minecraft', labelKey: 'minecraft', badge: 'Popular', badgeKey: 'badgePopular' },
        { href: 'https://zap-hosting.com/en/hytale-server-hosting/', icon: 'gamepad', label: 'Hytale', labelKey: 'hytale', badge: 'Trending', badgeKey: 'badgeTrending' },
        { href: 'https://zap-hosting.com/en/scp-secret-laboratory-server-hosting/', icon: 'gamepad', label: 'SCP: Secret Laboratory', labelKey: 'scp' },
        { href: 'https://zap-hosting.com/en/valheim-server-hosting/', icon: 'gamepad', label: 'Valheim', labelKey: 'valheim' },
        { href: 'https://zap-hosting.com/en/ark-survival-evolved-server-hosting/', icon: 'gamepad', label: 'Ark: Survival Evolved', labelKey: 'ark' },
        { href: 'https://zap-hosting.com/en/palworld-server-hosting/', icon: 'gamepad', label: 'Palworld', labelKey: 'palworld' },
        { href: 'https://zap-hosting.com/en/enshrouded-server-hosting/', icon: 'gamepad', label: 'Enshrouded', labelKey: 'enshrouded' },
        { href: 'https://zap-hosting.com/en/scum-server-hosting/', icon: 'gamepad', label: 'SCUM', labelKey: 'scum' },
        { href: 'https://zap-hosting.com/en/gameserver-hosting/', icon: 'arrowRight', label: 'Discover our 100+ Games', labelKey: 'more' },
      ],
    },

    columns: [
      {
        title: 'Server Hosting',
        titleKey: 'serverHosting',
        description: 'Virtual and dedicated servers with full root access. Scalable resources for any project.',
        descriptionKey: 'serverHostingDesc',
        icon: 'server',
        items: [
          { href: 'https://zap-hosting.com/en/vps-hosting/', icon: 'server', label: 'VPS', labelKey: 'vps' },
          { href: 'https://zap-hosting.com/en/dedicated-server-hosting/', icon: 'cpu', label: 'Dedicated Server', labelKey: 'dedicated' },
        ],
      },
      {
        title: 'Web Hosting',
        titleKey: 'webHosting',
        description: 'Register domains and host your website. Reliable webspace with easy management.',
        descriptionKey: 'webHostingDesc',
        icon: 'globe',
        items: [
          { href: 'https://zap-hosting.com/en/domain-check/', icon: 'globe', label: 'Domain', labelKey: 'domain' },
          { href: 'https://zap-hosting.com/en/webhosting-rent-a-webspace/', icon: 'cloud', label: 'Webspace', labelKey: 'webspace' },
        ],
      },
      {
        title: 'Voice Hosting',
        titleKey: 'voiceHosting',
        description: 'TeamSpeak servers, music bots, and Discord bot hosting. Keep your community connected.',
        descriptionKey: 'voiceHostingDesc',
        icon: 'headphones',
        items: [
          { href: 'https://zap-hosting.com/en/teamspeak-3-server-hosting/', icon: 'headphones', label: 'TeamSpeak 3 Server', labelKey: 'teamspeak' },
          { href: 'https://zap-hosting.com/en/teamspeak-3-mymusicbot-hosting/', icon: 'music', label: 'TS3/Discord MusicBot', labelKey: 'musicbot' },
          { href: 'https://zap-hosting.com/en/discord-bot-server-hosting/', icon: 'code', label: 'Discord Bot Server', labelKey: 'discordBot' },
        ],
      },
      {
        title: 'Lifetime',
        titleKey: 'lifetime',
        description: 'Enjoying ZAP-Hosting? Pay once, skip subscriptions and plan for the long run!',
        descriptionKey: 'lifetimeDesc',
        icon: 'zap',
        items: [
          { href: 'https://zap-hosting.com/en/buy-a-gameserver/', icon: 'gamepad', label: 'Lifetime Gameserver', labelKey: 'lifetimeGameserver' },
          { href: 'https://zap-hosting.com/en/shop/product/lifetime-vps/', icon: 'server', label: 'Lifetime VPS', labelKey: 'lifetimeVps' },
          { href: 'https://zap-hosting.com/en/shop/product/lifetime-dedicated-server/', icon: 'cpu', label: 'Lifetime Dedicated Server', labelKey: 'lifetimeDedicated' },
          { href: 'https://zap-hosting.com/en/shop/product/lifetime-teamspeak3-server/', icon: 'headphones', label: 'Lifetime TeamSpeak 3', labelKey: 'lifetimeTeamspeak' },
          { href: 'https://zap-hosting.com/en/shop/product/lifetime-webspace/', icon: 'cloud', label: 'Lifetime Webspace', labelKey: 'lifetimeWebspace' },
          { href: 'https://zap-hosting.com/en/shop/product/lifetime-gameserver/discord-bot/', icon: 'music', label: 'Lifetime Discord Bot', labelKey: 'discordBot' },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------
  // Software
  // -------------------------------------------------------------------
  software: {
    activePathMatch: null,

    columns: [
      {
        title: 'Linux - Services',
        titleKey: 'linuxServices',
        description: 'Install and configure self-hosted services on Linux. OpenClaw, Bitwarden, and more.',
        descriptionKey: 'linuxServicesDesc',
        icon: 'linux',
        items: [
          { to: '/docs/dedicated-linux-openclaw', icon: 'bot', label: 'OpenClaw', labelKey: 'openclaw', badge: '🔥Trending', badgeKey: 'badgeTrending' },
          { to: '/docs/vserver-linux-bitwarden', icon: 'shield', label: 'Bitwarden', labelKey: 'bitwarden' },
          { to: '/docs/vserver-linux-nextcloud', icon: 'cube', label: 'Nextcloud', labelKey: 'nextcloud' },
          { to: '/docs/dedicated-linux-plex', icon: 'cube', label: 'Plex', labelKey: 'plex' },
          { to: '/docs/dedicated-linux-jitsi', icon: 'headphones', label: 'Jitsi Meet', labelKey: 'jitsi' },
          { to: '/docs/dedicated-linux-openvpn', icon: 'shield', label: 'OpenVPN', labelKey: 'openvpn' },
          { to: '/docs/dedicated-linux-wordpress', icon: 'globe', label: 'WordPress', labelKey: 'wordpress', },
        ],
      },
      {
        title: 'Windows - Services',
        titleKey: 'windowsServices',
        description: 'Install and configure self-hosted services on Windows. Docker, Plex, and more.',
        descriptionKey: 'windowsServicesDesc',
        icon: 'windows',
        items: [
          { to: '/docs/vserver-windows-bitwarden', icon: 'shield', label: 'Bitwarden', labelKey: 'bitwarden' },
          { to: '/docs/dedicated-windows-plex', icon: 'cube', label: 'Plex', labelKey: 'plex' },
          { to: '/docs/vserver-windows-plesk', icon: 'dashboard', label: 'Plesk', labelKey: 'plesk' },
          { to: '/docs/dedicated-windows-ftpserver', icon: 'upload', label: 'FTP Server', labelKey: 'ftpServer' },
          { to: '/docs/vserver-windows-docker', icon: 'cube', label: 'Docker', labelKey: 'docker' },
          { to: '/docs/vserver-windows-ts6', icon: 'headphones', label: 'TeamSpeak', labelKey: 'teamspeak' },
          { to: '/docs/dedicated-windows-installmysql', icon: 'database', label: 'MySQL', labelKey: 'mysql' },
        ],
      },
      {
        title: 'Linux - Dedicated Games',
        titleKey: 'linuxDedicatedGames',
        description: 'Run the most popular dedicated game servers on your Linux machine.',
        descriptionKey: 'linuxDedicatedGamesDesc',
        icon: 'linux',
        items: [
          { to: '/docs/dedicated-linux-fivem', icon: 'gamepad', label: 'FiveM', labelKey: 'fivem' },
          { to: '/docs/dedicated-linux-hytale', icon: 'gamepad', label: 'Hytale', labelKey: 'hytale' },
          { to: '/docs/dedicated-linux-cs2', icon: 'gamepad', label: 'CS2', labelKey: 'cs2' },
          { to: '/docs/dedicated-linux-vrising', icon: 'gamepad', label: 'V-Rising', labelKey: 'vrising' },
          { to: '/docs/dedicated-linux-palworld', icon: 'gamepad', label: 'Palworld', labelKey: 'palworld' },
          { to: '/docs/dedicated-linux-enshrouded', icon: 'gamepad', label: 'Enshrouded', labelKey: 'enshrouded' },
          { to: '/docs/dedicated-linux-valheim', icon: 'gamepad', label: 'Valheim', labelKey: 'valheim' },
        ],
      },
      {
        title: 'Windows - Dedicated Games',
        titleKey: 'windowsDedicatedGames',
        description: 'Run the most popular dedicated game servers on your Windows machine.',
        descriptionKey: 'windowsDedicatedGamesDesc',
        icon: 'windows',
        items: [
          { to: '/docs/dedicated-windows-fivem', icon: 'gamepad', label: 'FiveM', labelKey: 'fivem' },
          { to: '/docs/dedicated-windows-hytale', icon: 'gamepad', label: 'Hytale', labelKey: 'hytale' },
          { to: '/docs/dedicated-windows-cs2', icon: 'gamepad', label: 'CS2', labelKey: 'cs2' },
          { to: '/docs/vserver-windows-vrising', icon: 'gamepad', label: 'V-Rising', labelKey: 'vrising' },
          { to: '/docs/vserver-windows-arksurvivalascended', icon: 'gamepad', label: 'Ark: SA', labelKey: 'arkSa' },
          { to: '/docs/vserver-windows-enshrouded', icon: 'gamepad', label: 'Enshrouded', labelKey: 'enshrouded' },
          { to: '/docs/vserver-windows-valheim', icon: 'gamepad', label: 'Valheim', labelKey: 'valheim' },

        ],
      },
    ],

    bottomRow: {
      items: [
        { to: '/docs/vserver-linux-bitwarden', icon: 'list', label: 'All Services', labelKey: 'allServices' },
        { to: '/docs/software-overview-dedicated-game-server', icon: 'list', label: 'All Dedicated Games', labelKey: 'allDedicatedGames' },
      ],
    },
  },
};
