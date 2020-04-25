---
id: fivem_esx_disableinventory
title: Inventar (F2) Deaktivieren
sidebar_label: Inventar (F2) Deaktivieren
---

## Vorbereitung

Zuerst gehen wir sicher das "Überschreiben Erzwingen" in den Resourcen Deaktiviert ist, damit unsere änderungen auch gespeichert werden:

![](https://screensaver01.zap-hosting.com/index.php/s/NXnmWJgJd8DW7Sf/preview)


## Mit FTP verbinden

Bevor wir das Inventar Deaktivieren können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/ekYw27nA4cgiNAk/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/MHt37AFEeZYgs97/preview)


## Änderungen Vornehmen

Nun öffnen wir den `server-data/resources/[esx]` Pfad, hier finden wie einen es_extended Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/w4y7sPz5NmDD2Jw/preview)

In diesem Ordner öffnen wir nun den `client` Ordner, und öffnen die `main.lua` Datei.

Nachdem wir diese Datei in einem Texteditor geöffnet haben, suchen wir nach folgendem Code:

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

Hier ersetzen wir nun:

`ESX.ShowInventory()`

mit:

`--ESX.ShowInventory()`

Sodass unser Endresultat so aussieht:

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


Nun können wir die Datei Abspeichern und den Server neustarten, nachdem wir den Server gejoint sind, kann das Inventar nun nicht mehr geöffnet werden.