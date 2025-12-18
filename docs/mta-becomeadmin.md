---
id: mta-becomeadmin
title: "Multi Theft Auto: Become an admin on MTA servers"
description: "Discover how to assign administrator permissions for full server control and efficient game management → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

### Preparation

First of all a user account has to be created which will later be given the admin rights. To do this you have to execute the following command in the Live Console:

```
addaccount [options] <PASSWORD>
```

The Live Console can be found in the game server dashboard in the interface while the server is running. This looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### Configuration

Once the account has been created, the account must be added to the Admin Group in the **acl.xml** Config. For this we connect to the server via FTP and open the file. The file is located at **gXXXX/gtamta/mods/deathmatch/**. If you don't know yet what a FTP client is and how to use it, then have a look at the following guide:  [FTP file access](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

There you have to add a user object to assign the user to the Admin Group:

```
<object name="user.BENUTZERNAME"></object>
```

Instead of the username you type in your own username there. The result of this should look like this:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### Log in as admin

Now that you have finished the configuration of the **acl.xml** config you can start your game/server and connect to your server. Afterwards you can log in with the following command:

```
login USERNAME PASSWORD
```

## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


<InlineVoucher />
