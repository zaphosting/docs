---
id: fivem_txadmin_features
title: txAdmin Interface
sidebar_label: txAdmin Interface
---

## Dashboard

In the dashboard of txAdmin we can see how many players are on the server, and how performant the server is running, here we can also start or stop the server, show announcements on the server, or kick all players:

![image](https://user-images.githubusercontent.com/13604413/159169522-fd692c95-1a15-486b-a959-99fa58bea7ce.png)

## Right Sidebar

In the right sidebar we have a list of players who are currently on the server, to manage a player you can simply click on the name.

Here we can now see some information about the player, e.g. how long he has been on the server, under IDs we can also see the identifiers of the player.

Below we have options to send a DM to the player, ingame this will be displayed in the chat.

Warnings are displayed as full screen notification in FiveM

There is also a "Ban" option, which allows you to ban the player directly from the server.


## Players

The Players Interface shows which players are on the server, here these players can also be managed:

![image](https://user-images.githubusercontent.com/13604413/159169588-75de442b-926b-402f-b73a-2d37d1619b8f.png)

Here you can also ban certain identifiers directly, if you have the whitelist active on the server, you can manage it here as well.

## Livekonsole

In the live console, commands can be entered in the server console and the logs of the FiveM server can be displayed:

![image](https://user-images.githubusercontent.com/13604413/159169620-7b13ee9e-8db8-409c-970f-1f5775e49a6d.png)

The server can also be restarted from here.

## Resources

Here all resources, which are on the server, can be administered, if a resource must be restarted, the whole can be done directly from here:

![image](https://user-images.githubusercontent.com/13604413/159169631-4445e0c8-d90f-4247-bc85-e967d8538ad4.png)

## Server Log

The server log is the txAdmin log, some info from txAdmin is shown here, if the resource supports it, logs from specific resources are also shown here.

![image](https://user-images.githubusercontent.com/13604413/159169641-23e3b19e-f5f2-4dbf-8ca3-19de39510c0f.png)

## Cfg Editor

In the Cfg editor your server.cfg can be configured, the whole thing works the same way as the config editor in the ZAP hosting interface.

![image](https://user-images.githubusercontent.com/13604413/159169655-907a4b05-0d58-4c27-a419-40805662d380.png)

## Diagnostics

The Diagnostics show how well the FiveM Server is running and indicates possible problems with txAdmin or the FiveM Server:

![image](https://user-images.githubusercontent.com/13604413/159169661-da828f3a-fd2d-4cfc-81a4-27fb9971926a.png)

## Admin Manager

In the Admin Manager new users can be added to the txAdmin interface, you can easily add them by username/password, but you can also link the Discord Id or the FiveM forum account.

![image](https://user-images.githubusercontent.com/13604413/159169682-2c6a3659-7ddc-45f7-a364-c9bb66ed1c82.png)

### Create new admins

To create new admins we click on the green "Add" button on the top right, here we can now add the account info:

![image](https://user-images.githubusercontent.com/13604413/159169687-fca2cad8-d6c8-476c-8eaf-1195acd65a7e.png)

Here we can also specify what functions the account should have available, for example, if it should be only an account for moderating the server, we can enable only the players options, and leave everything else disabled.


Now we get a temporary password, this must be specified when this user logs in, then you can change the password in txAdmin directly:

![image](https://user-images.githubusercontent.com/13604413/159169698-c6e3e457-90e2-4640-8414-581a478ed8dc.png)

Done! Now the new user was created, in the future this can be changed or deleted here again.

## txAdmin Log

In the txAdmin log we can see what has been done in the txAdmin interface lately, so we can check for example what created users are doing in the interface:

![image](https://user-images.githubusercontent.com/13604413/159169722-5e6275e4-1e89-47d5-93dd-fcc8b399c8e5.png)

## Settings

In the settings, several settings can be made for txAdmin and the FiveM server, these are divided into several categories.

Here you can also create backups of the database, import bans from other resources, or reset the FiveM server.
![image](https://user-images.githubusercontent.com/13604413/159169739-9f8533d7-59e6-4c8e-bc3a-1632f69c0c78.png)


### FXServer

Here we can change the server-data folder path if we upload another server-data folder, the server.cfg can also be changed.

![image](https://user-images.githubusercontent.com/13604413/159169756-f5917576-13a2-40ae-a0ef-bd1812da6f4e.png)

If you want to add your own startup parameters, this can also be done here, this is useful for forcing certain builds, or running multiple cfg files.

Onesync can also be enabled or disabled here.

If you restart txAdmin often, you can set here if txAdmin should automatically restart the FiveM server, this is enabled by default.

The "Quiet" option determines whether messages in the FiveM console are displayed in the live console of the server, this option is best left disabled.


### Restarter

In Restarter we can set scheduled restarts for the server, here we can insert specific times:

![image](https://user-images.githubusercontent.com/13604413/159169774-b7171fb6-ac1c-4cb1-a4fe-5ad1e448ee1b.png)

Also we can set here how often a warning should come in the chat, in the "Restart Warnings" parameter these periods are specified as minutes.


### Player Manager

The Player Manager has some features to moderate the server, among others we can activate the ban feature and the whitelist:

![image](https://user-images.githubusercontent.com/13604413/159169779-682fa426-907f-46a1-9531-ddef47d24c98.png)

If whitelisting is enabled, we can also specify here what message should come on connect if a player is not yet whitelisted.

The option "Wipe Pending Whitelist On txAdmin Start" determines whether the whitelisting requests that are created when connecting should be deleted when txAdmin restarts, if the whitelisting requests are processed over several days, it is best to disable this option.


### Discord

In the last menu of the settings we can set a Discord Bot, which posts information about txAdmin in a channel, for this the Discord Bot token and the channel ID, in which this information should be posted, must be entered.

![image](https://user-images.githubusercontent.com/13604413/159169784-4ef64bbb-ee96-4f42-9cb0-3105323ec334.png)
