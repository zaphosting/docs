---
id: fivem_esx_disableinventory
title: FiveM ESX Server: Disable inventory (F2)
DESCRIPTIONS: Information on how to disable inventory on your FiveM server running ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Deactivate the Inventory (F2)
---

## Preparation

First we make sure that "Force overwrite" is disabled in the resources so that our changes are saved:

![](https://screensaver01.zap-hosting.com/index.php/s/NXnmWJgJd8DW7Sf/preview)


## Connect to FTP

Before we can deactivate the inventory, the [FTP access](gameserver_ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/PkowAdzot9tjZeY/preview)

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/REzpxtQXT4RKfCb/preview)


## Makig the Changes

Now we open the `server-data/resources/[esx]` path, here we find an es_extended folder:

![](https://screensaver01.zap-hosting.com/index.php/s/w4y7sPz5NmDD2Jw/preview)

In this folder we now open the `client` folder, and open the `main.lua` file.

After we have opened this file in a text editor, we look for the following code:

```Lua
-- Menu interactions
Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)

		if IsControlJustReleased(0, 289) and IsInputDisabled(0) and not isDead and not ESX.UI.Menu.IsOpen('default', 'es_extended', 'inventory') then
			ESX.ShowInventory()
		end
	end
end)
```

Here we replace:

`ESX.ShowInventory()`

with:

`--ESX.ShowInventory()`

So that our Code looks like this:

```Lua
-- Menu interactions
Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)

		if IsControlJustReleased(0, 289) and IsInputDisabled(0) and not isDead and not ESX.UI.Menu.IsOpen('default', 'es_extended', 'inventory') then
			--ESX.ShowInventory()
		end
	end
end)
```


Now we can save the file and restart the server, after we have joined the server, the inventory can no longer be opened.
