---
id: satisfactory-savegame
title: "Satisfactory: Savegame Manager"
description: Information on possibilities to manage savegames via Savegames Manager on your Satisfactory server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Savegame Manager
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
You can easily modify savegames through our interface. With only a few clicks you can manage your savegames including uploading and restoring.
Navigate to `Savegame Manager` in your server's dashboard. 

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4gQxAMEggbGRnBy/preview" title="How to create a Satisfactory Server at ZAP and upload your own save-game" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

:::info
Note: Your server is saves in 5 minute increments automatically and will always keep the last 6 autosaves.
:::

<InlineVoucher />

## Downloading your Savegame

Downloading your savegame is very easy. Head over to the `Savegame Manager` section in the webinterface:

![Screenshot 2023-02-04 002245](https://screensaver01.zap-hosting.com/index.php/s/cdDn5cNt2SbJDyM/preview)

Scroll down and near the bottom of the page, you will see your active savegames and any backups that you currently have of your game saves. To download, simply press the `Download` button on the right hand side of the file you wish to download.

![Screenshot 2023-02-04 003915](https://screensaver01.zap-hosting.com/index.php/s/BQmTa4grkdBJm9Y/preview)

## Using your own Savegame
It is very easy to use your own savegame by using the Savegame Uploader section of the Savegame Manager.
However, firstly you must find the savegame on your own computer.

:::info
It is sometimes possible that your inventory may not save correctly, so ensure to move them into chests and saving before continuing.
:::

Press `Windows-Key + R` and copy this path in there: `%LOCALAPPDATA%\FactoryGame\Saved\SaveGames\`
Now you are in the SaveGames folder for your Satisfactory game. Now press the folder which has alot of numbers (green on the screenshot).

![Screenshot 2023-02-04 004351](https://screensaver01.zap-hosting.com/index.php/s/CHE2sw7PYMH5zL6/preview)

You are now in your Savegame directory of your satisfactory game. In this folder you can see all savegame which you have.
You should be able to identify the savegame by checking their file name, date, timestamp or size. If you are using autosaves, `x_autosave_0` will always be the latest one which was saved.

![Screenshot 2023-02-04 004903](https://screensaver01.zap-hosting.com/index.php/s/cmYeSwNSpX3nAxL/preview)

:::info
Optional: We recommend to remove everything except the name of the savegame itself to make it easier to identify in the future. In this example the savegame would be named "Factory".
:::

Upload now your file through the Savegame Manager by dragging & dropping to your server:

![Screenshot 2023-02-04 005404(1)](https://screensaver01.zap-hosting.com/index.php/s/nGFnTJXPPsMEB26/preview)

And finally, ensure to change the `Active savegame` at the top of the page to the name of the savegame you have uploaded and press Save! In this example, the uploaded file is called Factory thus it is changed to that.

![Screenshot 2023-02-04 005836](https://screensaver01.zap-hosting.com/index.php/s/adnst92YdtzK7QK/preview)

Now the next time you start the server now, the savegame will be loaded.

## Edit Savegames
If you'd like to modify your savegame, as example to cheat, editing your savegame is the only way to do that.
You could use [the Satisfactory Save Editor tool](https://github.com/Goz3rr/SatisfactorySaveEditor).

:::info
We cannot guarantee full functionality of the tool as it's an open-source project. 
:::

Download the Savegame from your Savegame-Manager and open it in the Savegame Editor (File > Open Recent)

As example if you'd like to modify the inventory, search for:
`FactoryGame.FGInventoryComponent` in this search for `Persistent_Level:PersistentLevel.Char_Player_C *************.Inventory`

If you have more players, there are more entries, you could identify the player by the items in the inventory. As example you'd like to change the amount of power shards in your inventory, search for this item and change the value in "NumItems"

When you are done with your changes, open "File" and press Save. You can now reupload the edited savegame and start the server.

The Sacegame Editor provides you some more Cheats, just open the "Cheats"-Tab
