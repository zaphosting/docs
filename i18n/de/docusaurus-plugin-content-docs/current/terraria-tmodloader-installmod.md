---
id: terraria-tmodloader-installmod
title: "Terraria: Installation von Mods (tModLoader)"
description: Informationen, wie du Mods auf deinen Terraria-Server mit tModLoader installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Mods installieren (tModLoader)
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Modinstallation via tModLoader

Beim tModLoader für Terraria handelt es sich um eine wichtige Modifikation, welche das Laden von Mods auf deinem Terraria Server ermöglicht. 
Die Installation geschieht via Drag & Drop und mit nur einer Anpassung an deinem Server, das Ganze ist also kinderleicht und in wenigen Minuten erledigt. 


## Installation von tModLoader auf deinem PC

Falls du tModLoader noch nicht installiert hast, kannst du dir diesen **kostenlos** direkt via Steam herunterladen.
Suche dazu im Steam Store einfach nach **tModLoader** oder verwende folgenden Link: [tModLoader im Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

Nach dem Download und der Installation kannst du deinen tModLoader direkt über Steam starten.


## Hinzufügen von Mods auf deinem PC

Im Hauptmenü angekommen öffnest du deinen Mod-Ordner, dies tust du durch einen Klick auf **Workshop** und im Anschluss auf **Mods verwalten** dann:

![](https://screensaver01.zap-hosting.com/index.php/s/bT7XGbNynGxbFnZ/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/3Mbgk3jPgMxLPBp/preview)

In den nun geöffneten Ordner, welcher sich standardmäßig unter **C:\Users\Benutzername\Documents\My Games\Terraria\ModLoader\Mods** befindet, kannst du nun deine gewünschten Mods legen.
In diesem Beispiel installieren wir die Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/9APQqsZbpM4AGYg/preview)

:::info
Ein Mod muss immer die Endung **.tmod** haben, sonst kann diese nicht vom Server geladen werden! 
:::


Danach kannst du den Ordner wieder schließen, klickst dann im Spiel auf **Zurück** und im Anschluss erneut auf **Mods**: 

![](https://screensaver01.zap-hosting.com/index.php/s/4iDX3xiL9Yfgxj9/preview)

Dort wird dir nun dein hinzugefügter Mod angezeigt, welchen du mit einem Klick auf **Deaktiviert** aktivieren kannst: 

![](https://screensaver01.zap-hosting.com/index.php/s/d9sJ6YWPGT7JzyY/preview)

Damit die Mods aktiv werden, klickst du nun auf **Mods neu laden**, danach kannst du das Spiel erst einmal wieder schließen und du beginnst mit der Installation der Mod auf deinem Server.


## Installation von Mods auf deinem Server

Um die Mods nun auch auf deinem Server installieren zu können verbindest du dich via FTP zu deinem Server, wie das funktioniert erfährst du hier: [Zugriff per FTP](gameserver-ftpaccess.md)

Dort navigierst du in folgendes Verzeichnis: /g******/terraria/mods/ wo du ebenfalls die zuvor verwendete **.tmod** Datei einfügst:

![](https://screensaver01.zap-hosting.com/index.php/s/Ae62fDXQHazEXfJ/preview)

:::info
Sollte dort keine Datei mit dem Namen **enabled.json** existieren musst du den Server zuerst einmal starten, danach sollte diese erscheinen. Alternativ kannst du die Datei auch selbst erstellen.
:::


Im Anschluss öffnest du die Datei **enabled.json** via **Rechtsklick > Bearbeiten** und fügst dort den Namen deiner Mods ein, was so aussehen sollte: 

![](https://screensaver01.zap-hosting.com/index.php/s/fJZFYqsXP4YgE8Y/preview)

Solltest du mehrere Mods einfügen wollen, kannst du dies so tun: 

![](https://screensaver01.zap-hosting.com/index.php/s/YK3n2bXjfF5mT37/preview)

:::info
Beachte bitte, dass hinter jedem Mod-Namen ein Komma gesetzt werden muss, außer beim Namen des letzten Mod!
:::

Jetzt kannst du die FTP Verbindung schließen, deinen Server starten und mit dem bei Steam heruntergeladenen tModLoader auf deinen Server verbinden. 

Durch das Drücken von **ESC**, einem anschließenden Klick auf **Einstellungen** und dann einem Klick auf **Mod Configuration** siehst du deine auf dem Server geladenen Mods:
