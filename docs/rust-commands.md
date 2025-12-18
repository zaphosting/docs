---
id: rust-commands
title: "Rust: Admin Commands"
description: "Discover essential Rust commands for server management and player control to optimize gameplay and administration → Learn more now"
sidebar_label: Admin Commands
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Rust has a wide range of different commands available for server owners and players to use. On this page, we summarise the most useful and popular ones which are used for server settings, player administrating and to control players.

:::info
Some commands require the use of a player's Steam64 ID. Use the small tutorial below to understand how to get a player's Steam ID.
:::

<InlineVoucher />

## Getting your Steam ID
Firstly, use use a tool like the [Steam ID Finder](https://steamidfinder.com/) to get your Steam64 ID.

Here you enter your Steam URL:

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

Then press `Find Steam ID`. Now we should be able to see our Steam Profile, here we copy our "Steam64ID (Dec)".

And that is it, now you have the Steam64 ID and can use it for the commands which require Steam64 ID below.

## Command Categories

Use the section tabs below to switch between each category. The tables consist of the command itself, the accepted values for the command (if applicable) and a description to make it easier to understand.

:::info
Any command which is mentioned on this page is for vanilla Rust.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="Server Settings" default>

| Command Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | When true any chat message will be shown to all players         | 
| server.stop      | -          | Stops the server         | 
| server.save      | -          | Saves the server         | 
| server.saveinterval "value"      | Integer (default 60)          | Sets the auto-save interval for your server (in seconds)         | 
| server.secure      | true/false          | When true Easy Anti Cheat (EAC) will refuse connection to any unregistered or banned players before they connect         | 
| server.seed "value"     | Integer (e.g. 123456)          | Set the seed value for the server world         | 
| server.stability      | true/false          | When true structure stability for buildings is enabled         | 
| server.tickrate "rate"      | Integer (default 30)          | Sets the tick rate for your server         | 
| server.writecfg      | -          | Saves configuration changes which have been previously set through other server commands         | 
| chat.serverlog      | true/false          | When true chat will always be logged into the server console         | 
| commands.echo "text"      | String (e.g. "Hello World!")          | Prints the specified message to the server console         | 
| global.say "message"      | String (e.g. "Welcome!")          | Sends a message to all players in the server         | 
| env.time      | Integer (e.g. 16)          | Sets the in-game world time to specified value (in hours)         | 
| server.events      | -          | When true it enables server events such as airdrops         | 
| commands.find "command"      | String (e.g. "quit")          | Searches for a command or using "." will list all available commands         | 
| global.quit      | -          | Saves the server and then stops it         | 
| global.init      | -          | Load configuration files         | 

</TabItem>
<TabItem value="PlayerAdmin" label="Player Admin">

| Command Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| global.ban "playername" "reason"      | String (e.g. "Jacob"), String (e.g. "Was naughty!")          | Bans a user from the server (with optional reason)         | 
| global.banid "steam64"      | Integer          | Bans a user through their Steam 64 ID         | 
| global.banlistex      | -          | Returns a list of banned users with their playername and ban reason         | 
| global.banlist      | -          | Returns a list of banned players within the chat         | 
| global.unban "steam64"      | Integer          | Unbans a user through their Steam 64 ID         | 
| global.kickall      | -          | Kicks all players from the server         | 
| global.kick "steam64 / playername" "reason"      | Integer/String (e.g. "Jacob"), String (e.g. "Was naughty!")         | Kicks a user from the server through their Steam 64 ID or their playername (with optional reason)         | 
| global.ownerid "steam64 / playername"      | Integer/String (e.g. "Jacob")          | Sets the specified player as a server administartor through their Steam 64 ID or their playername (Auth level 2)         | 
| global.removeowner "steam64"      | Integer         | Removes administartor privileges  from the user through the specified Steam 64 ID         | 
| global.moderatorid "steam64 / playername"      | Integer/String (e.g. "Jacob")          | Sets the specified player as a server moderator through their Steam 64 ID or their playername (Auth level 1)         | 
| global.removemoderator "steam64"      | Integer          | Removes moderator privileges  from the user through the specified Steam 64 ID         | 
| global.listid      | -          | Returns a list of users who have been banned via Steam 64 ID          | 

</TabItem>
<TabItem value="Player Controls" label="Player Controls">

| Command Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Kill your own player         | 
| global.quit      | -          | Saves and quits the game         | 
| global.god      | true/false          | Toggles God mode so the player cannot take any damage (for admins only)          | 
| global.noclip      | true/false          | Toggles Noclip mode so the player can fly freely (for admins only)          | 
| global.debugcamera      | true/false          | Toggles Debug camera mode so the player can go into free camera mode (for admins only)          | 
| player.sleep      | -          | Force your player to go to sleep         | 
| commands.find "command"      | String (e.g. "quit")          | Searches for a command which is available for the player
| chat.say "text"     | String (e.g. "Hello World!")          | Sends a message to all players in the server         | 
| inventory.give "itemID" "amount"     | Integer (itemID), Integer (e.g. 5)          | Gives an item to your inventory         | 
| inventory.giveto "playername" "itemID" "amount"      | String (e.g. "Jacob"), Integer (itemID), Integer (e.g. 5)          | Gives an item to the specified user's inventory         | 

</TabItem>
</Tabs>

<InlineVoucher />
