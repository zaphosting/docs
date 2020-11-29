---
id: mta_becomeadmin
title: Become Admin
sidebar_label: Become Admin

---


## Become werden

Administrator rights allow you to make changes directly in the game on your server without having to change it in the Config. 



### Preparation

First of all a user account has to be created which will later be given the admin rights. To do this you have to execute the following command in the Live Console:

```
addaccount <USERNAME> <PASSWORD>
```

The Live Console can be found in the gameserver dashboard in the interface while the server is running. This looks like this:

![img](https://screensaver01.zap-hosting.com/index.php/s/tTJeEgrE65tf33Q/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/foecH4m8iJ6KWF7/preview)





### Configuration

Once the account has been created, the account must be added to the Admin Group in the **acl.xml** Config. For this we connect to the server via FTP and open the file. The file is located at **gXXXX/gtamta/mods/deathmatch/**. If you don't know yet what a FTP client is and how to use it, then have a look at the following guide:  [FTP file access](https://docs.zap-hosting.com/docs/en/gameserver_ftpaccess/)

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

Now you have your administrator privileges and you can manage your server as you wish!

