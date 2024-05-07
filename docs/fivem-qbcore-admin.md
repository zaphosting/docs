---
id: fivem-qbcore-admin
title: "FiveM: QBCore Server Setting Permissions"
description: Learn how to configure permissions on your new QBCore server! - ZAP-Hosting.com documentation
sidebar_label: Setting Permissions
---

## What are ace permissions?

Ace permissions refer to the authorization settings, within the CFX platform. These permissions are part of the built in system that enables users to establish nodes with authorizations assigned to them. The permission structure comprises aces and principals to branches, on a tree. Each ace represents a created permission and each branch (principal) inherits the permissions associated with that ace. When installing qbcore based server txAdmin should assign the server owner the highest permission available in server.

## Where to find ace permissions in server.cfg?

* Towards the end of your server.cfg file you'll come across a section dedicated to permissions.

```
## Permissions ##
add_ace group.admin command allow # allow all commands
{{addPrincipalsMaster}} # This is the way txAdmin assigns permissions to the server owner

# Resources
add_ace resource.qb-core command allow # Allow qb-core to execute commands

# Gods
add_ace qbcore.god command allow # Allow all commands

# Inheritance
add_principal qbcore.god group.admin # Allow gods access to the main admin group used to get all default permissions
add_principal qbcore.god qbcore.admin # Allow gods access to admin commands
add_principal qbcore.admin qbcore.mod # Allow admins access to mod commands 
```

## Where you can find player identifiers?

* FiveM ID
* Rockstar License
* Discord ID
* Xbos Identifiers
* Microsoft Identifiers
* Player Hardware ID

If you want to obtain a FiveM or GTA license you can search for the player using your txAdmin web panel.

![You will obtain all available identifiers if they are connected to the server at the present time.](https://i.imgur.com/n7BpAzD.png)

## How to add new user into ace permissions?
```
add_ace group.admin command allow # allow all commands
{{addPrincipalsMaster}} # This is the way txAdmin assigns permissions to the server owner

# Resources
add_ace resource.qb-core command allow # Allow qb-core to execute commands

# Gods
add_ace qbcore.god command allow # Allow all commands

# Inheritance
add_principal qbcore.god group.admin # Allow gods access to the main admin group used to get all default permissions
add_principal qbcore.god qbcore.admin # Allow gods access to admin commands
add_principal qbcore.admin qbcore.mod # Allow admins access to mod commands

# Players
add_principal identifier.license:HERE YOU PUT YOUR IDENTIFIER qbcore.god # Player Name - So you can understand for what player did you add ace permissions
add_principal identifier.license:HERE YOU PUT YOUR IDENTIFIER qbcore.admin # Player Name - So you can understand for what player did you add ace permissions
add_principal identifier.license:HERE YOU PUT YOUR IDENTIFIER qbcore.mod # Player Name - So you can understand for what player did you add ace permissions
```

## How to set permissions for user while in server?

You may set permission for users using the admin menu or commands provided that you have permissions.

| Command     | Description              | Usage                 |
| ----------- | ------------------------ | --------------------- |
| `/addpermission`      | Setting permissions using the command       | `/addpermission [id] [addpermissions]`      |
| `/admin`       | Setting permissions through the admin menu         | Chat command `/admin` should be entered to access "Player Management" tab for selecting a player with permissions Locate "Permissions" menu item Change the user group of this user before submitting.    |

## How to use commands add function with ace permissions?

Go to qb-core/config.lua and find **`QBConfig.Server.Permissions = {'god', 'admin', 'mod'}`**

![Found at the bottom of the image](https://i.imgur.com/PUNDeaO.png)

Here you may include more groups like if perhaps I wanted to create one for mechanics you just add it like that. **`QBConfig.Server.Permissions = {'god', 'admin', 'mod', 'mechanic'}`**

Go to permissions section again and add this under all permissions `add_principal identifier.license:xxxxxxx qbcore.mechanic # Player Name - So you can understand for what player did you add ace permissions`.

It would look like creating a command that can only be accessed by mechanic only. Of course if there is command added with mechanic value.

```lua
QBCore.Commands.Add('menu', 'Open mechanic menu', {}, false, function(source)
-- Run code
end, 'mechanic') <- There you write the things you wrote in Config Permissions and server.cfg
```