---
id: terraria_tmodloader_installmod
title: Terraria: Mods auf Server installieren (tModLoader)
description: Informationen, wie du Mods auf deinen Terraria-Server mit tModLoader installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Mod installieren (tModLoader)
---


## Modinstallation via tModLoader

Beim tModLoader für Terraria handelt es sich um eine wichtige Modifikation welche das laden von Mod's auf deinem Terraria Server ermöglicht. 
Die Installation geschieht via Drag & Drop und mit nur einer Anpassung an deinem Server, das ganze ist also kinderleicht und in wenigen Minuten erledigt. 


## Installation von tModLoader auf deinem PC

Falls du tModLoader noch nicht installier hast, kannst du dir diesen **kostenlos** direkt via Steam herunterladen.
Suche dazu im Steam Store einfach nach **tModLoader** oder verwende folgenden Link: [tModLoader im Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

Nach dem Download und der Installation kannst du deinen tModLoader direkt über Steam starten.


## Hinzufügen von Mod's auf deinem PC

Im Hauptmenü angekommen öffnest du deinen Mod-Ordner, dies tust du durch einen Klick auf **Mods** und im Anschluss auf **Mod Ordner öffnen**:

![](https://screensaver01.zap-hosting.com/index.php/s/CPpSBLE75zwiWCC/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/DNeRpCmtmd4eiY2/preview)

In den nun geöffneten Ordner welcher sich standartmäßig unter **C:\Users\Benutzername\Documents\My Games\Terraria\ModLoader\Mods** befindet kannst du nun deine gewünschten Mod's legen.
In diesem Beispiel installieren wir die Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/NDbGQYLeRP9bcPN/preview)

> Eine Mod muss immer die Endung **.tmod** haben, sonst kann diese nicht vom Server geladen werden! 


Danach kannst du den Ordner wieder schließen, klickst dann im Spiel auf **Zurück** und im Anschluss erneut auf **Mods**: 

![](https://screensaver01.zap-hosting.com/index.php/s/r6BQ3gtfTrcXaka/preview)

Dort wird dir nun deine hinzugefügte Mod angezeigt welche du mit einem Klick auf **Deaktiviert** aktivieren kannst: 

![](https://screensaver01.zap-hosting.com/index.php/s/x2zQnJ2k8dRdH4Y/preview)

Damit die Mod aktiv wird klickst du nun auf **Mods neu laden**, danach kannst du das Spiiel erst einmal wieder schließen und du beginnst mit der Installation der Mod auf deinem Server.


## Installation von Mod's auf deinem Server

Um die Mod nun auch auf deinem Server installieren zu können verbindest du dich via FTP zu deinem Server, wie das funktionkiert erfährst du hier: [FTP Dateizugriff](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/)

Dort navigierst du in folgendes Verzeichnis: /g******/terraria/mods/ wo du ebenfalls die zuvor verwendete **.tmod** Datei einfügst:

![](https://screensaver01.zap-hosting.com/index.php/s/p3RQqQjKFLDYLYB/preview)

> Sollte dort keine Datei mit dem Namen **enabled.json** existieren musst du den Server zuerst einmal starten, danach sollte diese erscheinen. Alternativ kannst du die Datei auch selbst erstellen.


Im Anschluss öffnest du die Datei **enabled.json** via **Rechtsklick > Bearbeiten** und fügst dort den Namen deiner Mod ein, was so aussehen sollte: 

![](https://screensaver01.zap-hosting.com/index.php/s/EeGXKfnFwQJo37W/preview)

Solltest du mehrere Mod's einfügen wollen, kannst du dies so tun: 

![](https://screensaver01.zap-hosting.com/index.php/s/fEmD9jQbHTpsCTy/preview)

> Beachte bitte dass hinter jedem Mod-Namen ein Komma gesetzt werden muss, außer beim Namen der letzten Mod!

Nun kannst du die FTP Verbindung schließen, deinen Server starten und mit dem bei Steam heruntergeladenen tModLoader auf deinen Server verbinden. 

Durch das drücken von **ESC**, einem anschließenden Klick auf **Einstellungen** und dann einem Klick auf **Mod Configuration** siehst du deine auf dem Server geladenen Mod's:
