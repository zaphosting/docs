---
id: gameserver-backups
title: "Game server: Create, restore, download and manage backups"
description: "Discover how to create, restore, download and manage backups for your game server to protect your data → Learn more now"
sidebar_label: Backups
services:
  - gameserver
  - premium-storage
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The backup system allows you to capture the complete state of your game server at any point in time. If something goes wrong, such as a bad configuration, a corrupted world file, or an accidental deletion, you can restore your server back to any saved snapshot in just a few clicks. Backups are stored on your storage server, which includes 10 GB of free storage space by default. If you need more, you can upgrade to Premium Storage.

:::tip
We recommend creating a backup before making any major changes to your server, such as updating the game version or installing mods.
:::

<InlineVoucher />

## Creating a backup

You can create a backup manually at any time from your gameserver dashboard. Navigate to the **Backups** section in your game server administration and press the green **+** button next to the backup list to start the process.

Optionally, you can enter a name to identify the backup more easily later. The backup captures the complete data directory of your game server. During the process, the backup status will show as **Running**. Once finished, it changes to **Completed** and the snapshot appears in the list.

The total storage space used by all your backups is displayed above the backup list.

:::info
The backup creation process can take several minutes depending on the size of your server data.
:::

### Backup status overview

| Status    | Description                                       |
|-----------|---------------------------------------------------|
| Pending   | The backup has been queued and will start shortly |
| Running   | The backup is currently being created             |
| Completed | The backup finished successfully                  |
| Failed    | Something went wrong; the backup was not created  |

## Automatic backups

In addition to manual backups, your game server can also create backups fully automatically using a cron schedule. You can find the automation settings at the bottom of the **Backups** page. Enable the **Create backups automatically** option and define the schedule using a cron expression to control exactly when and how often backups are created.

![img](https://nextcloud-team.zap-hosting.com/index.php/s/cg3CrCwmWHs2BxJ/preview)

:::tip Cron generator
Not familiar with cron expressions? Use [**Crontab Guru**](https://crontab.guru/) to build and copy cron expressions with a few clicks.
:::

:::info
Automatic backups have a minimum interval of **2 hours**. Schedules set to a shorter interval will not trigger more frequently than once every 2 hours.
:::

Automatic backups are listed together with manual backups and are labeled accordingly so you can tell them apart at a glance.

![img](https://nextcloud-team.zap-hosting.com/index.php/s/99jnxXc756TBwsC/preview)

> ⚠️ Having sufficient storage space is essential for creating regular backups. Make sure that you always have enough storage available.

## Managing backups

Each backup entry in the list displays the following information:

- **Creation date** of the snapshot
- **Creation type** (manual or automatic)
- **Status** of the backup
- **Storage location** where the backup is stored

![img](https://nextcloud-team.zap-hosting.com/index.php/s/csb7yESgfScLznA/preview)

From each entry you can directly **restore**, **rename**, **download**, or **delete** the backup using the corresponding action buttons.

### Restoring a backup

Restoring a backup replaces the current state of your game server with the data from the selected snapshot. All files that exist on your server but were not part of the snapshot will be removed.

:::warning
Restoring a backup is irreversible. Any changes made after the snapshot was created will be lost. Create a new backup first if you want to preserve the current state.
:::

Click the **Restore** button on the backup entry and confirm the action in the dialog. Your server will be restored exactly to the state it was in when the snapshot was taken.

### Renaming a backup

Click the **Rename** button on the backup entry to give it a more descriptive name. This helps you identify specific snapshots in the list more easily.

### Downloading a backup

Click the **Download** button on the backup entry. The archive will be prepared on our servers and your browser will start the download automatically once it is ready.

:::info
The downloaded file is a compressed archive of your complete server data at the time of the snapshot. You can extract it with any standard tool such as 7-Zip, WinRAR, or the built-in extractor on macOS/Linux.
:::

### Deleting a backup

Click the **Delete** button on the backup entry and confirm the deletion to remove it and free up storage space.

:::note
Deleting the last remaining backup will automatically clean up the entire backup storage for your server.
:::

## Retention policy

To prevent your backup storage from filling up indefinitely, the system automatically removes older snapshots based on a **retention policy**. This follows the Grandfather-Father-Son (GFS) principle and keeps the most recent snapshots while progressively thinning out older ones.

The default retention settings are:

| Period  | Default   | Maximum   |
|---------|-----------|-----------|
| Daily   | 7 days    | 90 days   |
| Weekly  | 8 weeks   | 52 weeks  |
| Monthly | 12 months | 60 months |

This means all snapshots from the last 7 days are kept in full. For snapshots older than 7 days but within 8 weeks, only one per week is kept. For snapshots older than 8 weeks but within 12 months, only one per month is kept. Everything older than 12 months is removed automatically.

### Adjusting the retention settings

You can customize the retention values to fit your needs. Navigate to the **Retention Settings** tab in the **Backups** section, adjust the daily, weekly, and monthly values, and save your changes.

![img](https://nextcloud-team.zap-hosting.com/index.php/s/ew2FYpeqgad7pSo/preview)

:::tip
Increasing the retention values means more snapshots are kept for longer, but this also uses more storage space.
:::

## Conclusion

You now know how to create, restore, download, rename, delete, and manage backups for your game server, as well as how the retention policy and automatic backup scheduling work. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
