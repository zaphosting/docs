---
id: fivem_txadmin_features
title: txAdmin Interface
sidebar_label: txAdmin Interface
---

## Dashboard

In the dashboard of txAdmin we can see how many players are on the server, and how performant the server is running, here we can also start or stop the server, show announcements on the server, or kick all players:

![](https://screensaver01.zap-hosting.com/index.php/s/xb5Ds96QapDCMSs/preview)

## Right Sidebar

In the right sidebar we have a list of players who are currently on the server, to manage a player you can simply click on the name:

![](https://screensaver01.zap-hosting.com/index.php/s/irYqwoKsKKxB28T/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/Y9St2R8iFfE7jCr/preview)

Here we can now see some information about the player, e.g. how long he has been on the server, under IDs we can also see the identifiers of the player.

Below we have options to send a DM to the player, ingame this will be displayed in the chat.

Warnings are displayed as full screen notification in FiveM

There is also a "Ban" option, which allows you to ban the player directly from the server:

![](https://screensaver01.zap-hosting.com/index.php/s/Y6ynKjm9pBMn8nd/preview)


## Players

The Players Interface shows which players are on the server, here these players can also be managed:

![](https://screensaver01.zap-hosting.com/index.php/s/MmYCNcaYEj3xmRQ/preview)

Here you can also ban certain identifiers directly, if you have the whitelist active on the server, you can manage it here as well.

## Livekonsole

In the live console, commands can be entered in the server console and the logs of the FiveM server can be displayed:

![](https://screensaver01.zap-hosting.com/index.php/s/t4mcXbbcCwZZk5w/preview)

The server can also be restarted from here.

## Resources

Here all resources, which are on the server, can be administered, if a resource must be restarted, the whole can be done directly from here:

![](https://screensaver01.zap-hosting.com/index.php/s/wqBiSp9GXbM5CGf/preview)

## Server Log

The server log is the txAdmin log, some info from txAdmin is shown here, if the resource supports it, logs from specific resources are also shown here.

![](https://screensaver01.zap-hosting.com/index.php/s/KkbNYWQzARMTfEQ/preview)

## Cfg Editor

In the Cfg editor your server.cfg can be configured, the whole thing works the same way as the config editor in the ZAP hosting interface.

![](https://screensaver01.zap-hosting.com/index.php/s/yKZTBn8t4kY2o5S/preview)

## Diagnostics

The Diagnostics show how well the FiveM Server is running and indicates possible problems with txAdmin or the FiveM Server:

![](https://screensaver01.zap-hosting.com/index.php/s/rLqwDXtmHgySQfD/preview)

## Admin Manager

In the Admin Manager new users can be added to the txAdmin interface, you can easily add them by username/password, but you can also link the Discord Id or the FiveM forum account.

![](https://screensaver01.zap-hosting.com/index.php/s/6sb2QDeRm6Bnck7/preview)

### Create new admins

To create new admins we click on the green "Add" button on the top right, here we can now add the account info:

![](https://screensaver01.zap-hosting.com/index.php/s/nfjtCFcwsfr4x8z/preview)

Here we can also specify what functions the account should have available, for example, if it should be only an account for moderating the server, we can enable only the players options, and leave everything else disabled.


Now we get a temporary password, this must be specified when this user logs in, then you can change the password in txAdmin directly:

![](https://screensaver01.zap-hosting.com/index.php/s/B6tgysFQHJe5wXW/preview)

Done! Now the new user was created, in the future this can be changed or deleted here again.

## txAdmin Log

In the txAdmin log we can see what has been done in the txAdmin interface lately, so we can check for example what created users are doing in the interface:

![](https://screensaver01.zap-hosting.com/index.php/s/e3s9KLxdr5RTBte/preview)

## Settings

In the settings, several settings can be made for txAdmin and the FiveM server, these are divided into several categories.

Here you can also create backups of the database, import bans from other resources, or reset the FiveM server.
![](https://screensaver01.zap-hosting.com/index.php/s/f63rT2SQCESa6ER/preview)


### FXServer

Here we can change the server-data folder path if we upload another server-data folder, the server.cfg can also be changed.

![](https://screensaver01.zap-hosting.com/index.php/s/z4F6jjfr6CyRWHm/preview)

If you want to add your own startup parameters, this can also be done here, this is useful for forcing certain builds, or running multiple cfg files.

Onesync can also be enabled or disabled here.

If you restart txAdmin often, you can set here if txAdmin should automatically restart the FiveM server, this is enabled by default.

The "Quiet" option determines whether messages in the FiveM console are displayed in the live console of the server, this option is best left disabled.


### Restarter

In Restarter we can set scheduled restarts for the server, here we can insert specific times:

![](https://screensaver01.zap-hosting.com/index.php/s/bbMHydMCZyoEKCM/preview)

Also we can set here how often a warning should come in the chat, in the "Restart Warnings" parameter these periods are specified as minutes.


### Player Manager

The Player Manager has some features to moderate the server, among others we can activate the ban feature and the whitelist:

![](https://screensaver01.zap-hosting.com/index.php/s/WpnBQoiNnmxnggM/preview)

If whitelisting is enabled, we can also specify here what message should come on connect if a player is not yet whitelisted.

The option "Wipe Pending Whitelist On txAdmin Start" determines whether the whitelisting requests that are created when connecting should be deleted when txAdmin restarts, if the whitelisting requests are processed over several days, it is best to disable this option.


### Discord

In the last menu of the settings we can set a Discord Bot, which posts information about txAdmin in a channel, for this the Discord Bot token and the channel ID, in which this information should be posted, must be entered.

![](https://screensaver01.zap-hosting.com/index.php/s/oXADGQWy2Kr3xRZ/preview)
