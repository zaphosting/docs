---
id: terraria-tmodloader-installmod
title: "Terraria: Installation von Mods (tModLoader)"
description: "Entdecke, wie du ganz easy tModLoader Mods für Terraria installierst und aktivierst, um dein Spielerlebnis zu pimpen → Jetzt mehr erfahren"
sidebar_label: Mods installieren (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mod-Installation via tModLoader

Der tModLoader für Terraria ist eine wichtige Modifikation, die es ermöglicht, Mods auf deinem Terraria Gameserver zu laden. Die Installation erfolgt per Drag & Drop und mit nur einer kleinen Anpassung auf deinem Server, sodass das Ganze super easy ist und in wenigen Minuten erledigt ist.


## Installation von tModLoader auf deinem PC

Falls du tModLoader noch nicht installiert hast, kannst du ihn direkt kostenlos über Steam herunterladen. Such einfach im Steam Store nach tModLoader oder nutze den folgenden Link: [tModLoader im Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

Nach dem Download und der Installation kannst du deinen tModLoader direkt über Steam starten.

## Mods auf deinem PC hinzufügen

Im Hauptmenü öffnest du deinen Mod-Ordner, indem du auf **Mods** klickst, dann auf **Manage Mods** und anschließend auf **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

Im nun geöffneten Ordner, der standardmäßig unter **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods** liegt, kannst du jetzt deine gewünschten Mods reinpacken.
In diesem Beispiel installieren wir den Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
Eine Mod muss immer die Endung **.tmod** haben, sonst kann sie vom Server nicht geladen werden!
:::

Dann kannst du den Ordner wieder schließen, im Spiel auf **Back** klicken und dann auf **Mods**:

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

Dort siehst du jetzt deine hinzugefügte Mod, die du durch Klicken auf **Disabled** aktivieren kannst:

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

Um die Mod zu aktivieren, klick auf **Reload Mods**, dann kannst du das Spiel schließen und mit der Mod-Installation auf deinem Server starten.


## Installation von Mods auf deinem Server

Um die Mod auf deinem Server zu installieren, verbinde dich per FTP mit deinem Server. Wie das geht, erfährst du hier: [Zugriff via FTP](gameserver-ftpaccess.md)

Dort navigierst du in folgendes Verzeichnis: /g******/terraria/mods/ und fügst dort die zuvor genutzte **.tmod**-Datei ein:

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
Falls keine Datei mit dem Namen **enabled.json** vorhanden ist, musst du den Server einmal starten, dann sollte sie erscheinen. Alternativ kannst du die Datei auch selbst erstellen.
:::

Öffne die Datei **enabled.json** per **Rechtsklick > Bearbeiten** und füge dort den Namen deiner Mod ein, das sollte dann so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

Wenn du mehrere Mods einfügen willst, machst du das so:

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
Achte darauf, dass nach jedem Mod-Namen ein Komma steht, außer nach dem letzten Mod-Namen!
:::

Jetzt kannst du die FTP-Verbindung schließen, deinen Server starten und dich mit dem tModLoader verbinden, den du über Steam heruntergeladen hast.

Drück **ESC**, klick auf **Settings** und dann auf **Mod Configuration**, um deine Mods zu sehen, die auf dem Server geladen sind:

<InlineVoucher />