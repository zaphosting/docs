---
id: satisfactory-commands
title: "Satisfactory: Console Commands"
description: "Discover how to optimize your Satisfactory gameplay with essential console commands and keybind tips → Learn more now"
sidebar_label: Console Commands
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Satisfactory has a wide range of useful commands available for players to adjust client settings. Within this page we summarise the popular and useful commands that are commonly used by players across Satisfactory.

<InlineVoucher />

## Accessing the console
Using the console within Satisfactory is very easy, simply press the ` key (backtick is located above TAB key) to cycle between console visibility. The console will either become closed, will be open with a small command window at the bottom or will be fully expanded each time you toggle.

:::info
If the backtick key doesn't work for you, follow the steps in the sub-section below to set and enable a new keybind.
:::

### Unable to access the console
Sometimes due to regional keyboards the default backtick activation console key may not work, thus you need to setup a new one. Before doing this, close Satisfactory if it's running.

Press `Windows-Key + R` or search in your startmenu for `Run`. Next, copy the following path into it:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Open up the `Input.ini` file with a text editor (such as notepad).

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

Next copy and paste the exact lines to the bottom:

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

Finally, save and restart your game and now you will be able to open the console with `F6` as a keybind.

## Console Commands

The table consist of the command itself, the accepted values for the command (if applicable) and a description to make it easier to understand.

In order to display the entire list of commands, use `?` in the console which will display a hovering list of all the different commands. You can navigate this hovering list by simply using the `UP` and `DOWN` arrow keys.

An example of using the `?` to view all commands can be viewed below.

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
Any command which is mentioned on this page is for vanilla Satisfactory.
:::

| Command Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| ?      | -          | This will display the entire full list of commands         | 
| Stat FPS      | -          | Toggles the built-in FPS counter in-game         | 
| Stat UNIT      | -          | Toggles on a display which shows frame time, game data, draw time and a few other stats         | 
| t.MaxFPS "maxfps"      | Integer (e.g. 120)          | Sets your game's maximum FPS         | 
| r.ScreenPercentage "value"      | Integer (default 100)          | Changes the screen resolution scale (only for world rendering, not the UI)         | 
| r.ViewDistanceScale "value"      | Integer (default 1)          | Changes the render distance for which objects are render from such as rocks or trees         | 
| Suicide      | -          | Kill your own player         | 
| FOV "value"      | Integer (e.g. 90)          | Sets your game's field of view (FOV)         | 
| r.Atmosphere "1 or 0"      | true (1)/false (0)          | Toggles whether the atmosphere is on for the game        | 
| r.Fog "1 or 0"      | true (1)/false (0)          | Toggles whether the fog is on for the game         | 
| Gamma "value"      | Integer (default 50)          | Sets your game's brightness level         | 

For an extensive list of commands, please visit [the Satisfactory wiki](https://satisfactory.fandom.com/wiki/Console) which covers a range of more technical commands in-depth.

<InlineVoucher />
