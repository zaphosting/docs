---
id: cs2-becomeadmin
title: Become admin
description: Information on how to become an admin on your CS2 server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Become admin
---



## Introduction

Using administrator privileges allows you to manage the server in-game. This gives you the ability to execute commands through the console.

## Requirements
To use administrator privileges, a foundation must first be established. By default, CS2 does not offer comprehensive administration management. However, there are frameworks for this purpose, such as CounterStrikeSharp. The framework must be installed for configuration. If you have not installed it yet, feel free to check out our [Install Plugins](cs2-plugins) guide.

## Defining Admins

Adding an admin is done via the `admins.json` configuration file, found under `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`. To declare a new admin, you must create a new entry. This must include a name, identifier (identity), and flags (permissions). The name can be assigned at your discretion, as it is only used as a placeholder/identifier. For the identifier "identity," the SteamID from the Steam account must be provided. Additionally, the flags need to be defined as required.

```js title="admins.json (Beispiel)"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```


## Defining Admin Groups
Admin groups can also be defined. Thus, an admin's permissions can be defined via their corresponding group. This way, permissions do not need to be individually configured for each admin. The groups are defined in the admin_groups.json configuration file, found under `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`.
```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```



## Defining Admin Immunity
An immunity value can be assigned to admins. If an admin or player with a lower immunity value attacks another admin or player with a higher immunity value, the command will fail. You can define an immunity value by adding the immunity key to each admin in configs/admins.json.

```
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
The immunity check is not automatically carried out by CounterStrikeSharp. It is up to the individual plugins to handle/manage the immunity check.
:::