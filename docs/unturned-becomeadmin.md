---
id: unturned-becomeadmin
title: "Unturned: Become a server admin"
description: "Discover how to assign administrator permissions for full server control and enhanced in-game management → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Preparations

In order to be able to add admins on a server, a config file must be edited. So that there are no problems applying the changes, please make sure that your server is stopped beforehand!

In addition, the respective Steam ID (64) is required so that the server can also identify the player. This [Tool](https://steamidfinder.com/) can be used as an example.
Once on the side of the tool, the required information can usually be determined by entering the name.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Open Config Files

There are two ways to edit the files on a server.
One would way would be possible using [Access via FTP](gameserver-ftpaccess.md).

The other way would be using the Config Editor in the web interface itself. 
In this case we use the built-in editor of the web interface. To do this, the menu item "Configs" must be opened in the left sidebar of the server under the "Settings" tab.
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

The system now loads all available configs and then lists them. A little patience is required here, this process usually takes a few seconds. As soon as all config files have been loaded, the "commands.dat" file must be edited. All you have to do is click on the blue button "Open file", whereupon the file is opened in the web editor.

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## Add Admins

Admin or owner can now be appointed in the config. Please note that the owner rank can only be assigned once!

For this purpose, the following must be entered in a new line in the case for the assignment of the owner rank:

`owner Steam64IDReplacedHere //<-- Must be replaced with your own Steam64-ID`

For adding an Administrator, the "owner" is simply replaced by "admin".

`admin Steam64IDReplacedHere //<-- Must be replaced with your own Steam64-ID`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

After all ranks have been assigned in the config, the config can be saved with a click on "Save". The server can now be restarted and all players entered in the config receive their rank automatically.

## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
