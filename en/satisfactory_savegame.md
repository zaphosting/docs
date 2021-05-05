---
id: satisfactory_savegame
title: Savegame-Manager
sidebar_label: Savegame-Manager
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/EC4FXT5Mwb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can easily modify savegames through our interface, with only a few clicks you can upload your own savegame.
Navigate to "Savegame-Manager" in your servers dashboard. 

> Your server is saving every 5 minutes automatically, it will always keep the last 6 autosaves.

## New Savegame
Satisfactory prodvides you by default 4 different worlds

![](https://screensaver01.zap-hosting.com/index.php/s/qYK5G6KwTRs2fd6/preview)

You'll see in your Savegame-Manager 4 different saves.
Du findest in deinem Savegame-Manager 4 verschiedene Saves mit unterschiedlichen Namen

![](https://screensaver01.zap-hosting.com/index.php/s/AQEAwwQpzi6mzgF/preview)

Choose the map on which you want to play, the worlds have different difficulty levels. 
For Satisfactory newbies, Grass Fields is the best as there is a lot of space and straight areas.

Fill in your desired savegame at "Active Savegame" please mention to not add the .sav ending

![](https://screensaver01.zap-hosting.com/index.php/s/W2MsxgB4qWJepgd/preview)

On every server stop the most recent savegame will be loaded.
There could be a rollback if youre stopping your server before it was saved after the last progress

Just start your server and the desired savegame will be loaded.

## Your own savegame
You can easily upload your own Savegame through our Savegame-Manager
To do that, locate your savegame on your computer.

Press `Windows-Key + R` 
and copy this path in there: `%LOCALAPPDATA%\FactoryGame\Saved\SaveGames\`

![](https://screensaver01.zap-hosting.com/index.php/s/KCoopNjEqWLE9LL/preview)

You're now in your Savegame directory of your satisfactory game, here you can see all savegame which you have.
You should be able to identify the savegame by checking their date and timestamp

![](https://screensaver01.zap-hosting.com/index.php/s/7yZXKB96TtzeEkC/preview)

In the next step you should rename your savegame, we recommend to remove everything except the name of the savegame itself.
In this example the savegame would be named "TolleSpiel"

Upload now your file through the savegame-manager by drag&drop to your server

![](https://screensaver01.zap-hosting.com/index.php/s/yAan4sZqoBPdrnQ/preview)

and fill in the name at "Active Savegame"

![](https://screensaver01.zap-hosting.com/index.php/s/xxH6PKfownM3TWj/preview)

When you start the server now, the savegame will be loaded.

> It could be possible that you have not your inventory in the server, so be sure to move them into chests.

## Edit Savegames
If you'd like to modify your savegame, as example to cheat, editing your savegame is the only way to do that.
You could use [this](https://github.com/Goz3rr/SatisfactorySaveEditor) Savegame Editor
Download Version [0.9.17](https://github.com/Goz3rr/SatisfactorySaveEditor/releases/tag/v0.9.17)

Download the Savegame from your Savegame-Manager and open it in the Savegame Editor (File > Open Recent)

As example if you'd like to modify the inventory, search for:
`FactoryGame.FGInventoryComponent` in this search for `Persistent_Level:PersistentLevel.Char_Player_C *************.Inventory`
If you have more players, there are more entries, you could identify the player by the items in the inventory.
As example you'd like to change the amount of power shards in your inventory, search for this item and change the value in "NumItems"

![](https://screensaver01.zap-hosting.com/index.php/s/LsGsCAAEW49wQzw/preview)

When you are done with your changes, open "File" and press Save.

You can now reupload the edited savegame and start the server.

The Sacegame Editor provides you some more Cheats, just open the "Cheats"-Tab

> We can not guarantee the functionality of these cheats
