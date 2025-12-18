---
id: pathoftitans-becomeadmin
title: Become admin
description: "Discover how to assign and manage administrator permissions for full server control in your game server → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Preparation

The configuration of admin permissions is done through the configuration files of your server. To do this, navigate in your game server dashboard to **Configs** and open the Game.ini configuration file.



## Configuration

Under the section [/Script/PathOfTitans.IGameSession], the Alderon Games ID (AGID) of the admin must be entered. The entry for this is `Server-Admins=` followed by the AGID. If you want to add multiple admins, then you must create each in a new line. Assuming you want to assign admin permissions to a total of three players, then the configuration would look as follows:

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. Admin Record
ServerAdmins=XXX-XXX-XXX # 2. Admin Record
ServerAdmins=XXX-XXX-XXX # 3. Admin Record
```

Click on Save and then restart the server. The admin permissions are now successfully set. Once you have admin rights, you have the ability to appoint other players as admins through chat commands or to revoke their admin status. These functions are available to you as long as your server is active. You can find more information about the commands in the official [GitHub Wiki](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).


## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
