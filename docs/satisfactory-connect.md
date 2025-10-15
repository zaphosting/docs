---
id: satisfactory-connect
title: "Satisfactory: Connect to the Server"
description: "Discover how to connect and manage your Satisfactory Server effectively for a seamless gaming experience → Learn more now"
sidebar_label: Connect to the Server
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="How to create a Satisfactory Server at ZAP and upload your own save-game" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

:::info
If you're already using a QWERTY keyboard layout, you must not do these steps, just press CTRL + SHIFT + L and open the Console with ~
:::

To connect to your Satisfactory Server, its required to open the console of the game, there are two ways on how to do that.

<InlineVoucher />

## Open the Console

### Switching the keyboard layout
You can easily switch your keyboard layout in a few steps.
Start your Satisfactory game until you're in the main menu.
Press now `CTRL + Shift` your keyboard layout should now have changed to `EN`.
You can easily check if that worked, switch to your desktop and check if in your taskbar is `EN` on the right lower corner.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

If the change were successfully, you can now go back into the game, press now `CTRL + SHIFT + L`
Press now `^` on your keyboard, it should open the console.

### Verändern der Taste welche die Console öffnet
Press `Windows-Key + R` or search in your startmenu for `Run`
Copy this path into it:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

and press enter.

Please open now the file Input.ini with a editor of you choice (as example notepad)

:::info
If the file isn't there yet, just created it.
:::

Add this text into your file:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Save and restart the game - you can now open the console with `F6`

## Connect to your Satisfactory Gameserver
Copy the IP-Address from your server dashboard:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

Open the console in the game, as mentioned in the steps before

Write now `open IP-Adress-of-Your-Server` into it.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

and press enter.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

You're now joining your satisfactory server!

## The HUB
The HUB is already placed in the world, you can destroy it if you'd like by pressing `F` and replace it on another location.
You'll find the HUB easily by following the mark.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
The Server saves your progress all 5 minutes, you can see them in the savegame manager in your servers dashboard.
It will always keep the last 6 saves (30 minutes) of progress.

<InlineVoucher />
