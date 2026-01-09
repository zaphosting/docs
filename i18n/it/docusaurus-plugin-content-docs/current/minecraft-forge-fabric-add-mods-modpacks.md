---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Mods / Modpacks installieren"
description: "Entdecke, wie du Minecraft Mods und Modpacks runterlädst und installierst, um dein Server-Gameplay zu pimpen → Jetzt mehr erfahren"
sidebar_label: Mods / Modpacks installieren
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## Einführung

Hier lernst du, wie du Mods oder Modpacks auf deinem Minecraft-Server runterlädst und installierst.

<InlineVoucher />

## Vorbereitung

- Ein Gameserver ([hier bekommst du einen](https://zap-hosting.com/en/gameserver-hosting/))
- Ein FTP-Client (z.B. WinSCP, FileZilla)
- Verbinde dich per FTP mit deinem Server: ([Zugriff via FTP](gameserver-ftpaccess.md))



## Mods oder Modpacks finden & runterladen

Im Netz gibt’s viele Quellen für Mods und Modpacks. Die größte Plattform dafür ist CurseForge. Fast 99% aller Minecraft Mods und Modpacks findest du dort und kannst sie mit ein paar Klicks runterladen. Diese Anleitung konzentriert sich auf CurseForge. Mods suchst du [hier](https://www.curseforge.com/minecraft/mc-mods), Modpacks [hier](https://curseforge.com/minecraft/modpacks).

:::note
Mods funktionieren nur mit einer bestimmten Version des Modloaders. Check auf der Mod-Seite, welche Version du brauchst. Wenn du mehrere Mods installierst, achte darauf, dass alle dieselbe Version nutzen. Forge Mods sind nicht kompatibel mit Fabric Mods und umgekehrt.
:::

Geh auf die Seite deiner Wunsch-Mod oder deines Modpacks und klick auf den Reiter „Files“.

![](https://screensaver01.zap-hosting.com/index.php/s/abryep5KdQcqpAi/preview)


Such dir die Version raus, die du willst, und klick drauf, um zum Bereich „File Details“ zu kommen.

:::tip
Du kannst oben im „Files“-Tab per Dropdown nach Version und Modloader filtern.

![](https://screensaver01.zap-hosting.com/index.php/s/HoJYzW7bkC4Z6oL/preview)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="Für Mods" default>
Im Bereich „File Details“ klickst du auf den „Download“-Button. Speichere die Datei irgendwo ab, du brauchst sie später.

![](https://screensaver01.zap-hosting.com/index.php/s/7ZcEHsmmqZWdZB5/preview)

</TabItem>

<TabItem value="Modpacks" label="Für Modpacks">
Im Bereich „File Details“ scrollst du runter bis zu „Additional Files“, klickst auf die drei Punkte und wählst „Download file“. Speichere die Datei irgendwo ab, du brauchst sie später.

![](https://screensaver01.zap-hosting.com/index.php/s/YzH5Gz4w3yJZjx3/preview)

</TabItem>
</Tabs>

## Schritt 2 – Dateien aus Downloads entpacken (nur für Modpacks)

Such die heruntergeladene Datei auf deinem PC, Rechtsklick drauf und „Alle extrahieren...“ auswählen. Such dir einen Ordner aus, wo die Dateien entpackt werden sollen. Merk dir den Pfad!

![](https://screensaver01.zap-hosting.com/index.php/s/y9SWDpX2HYgekbQ/preview)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Dein entpackter Ordner sollte die Ordner mods, config und defaultconfig enthalten. Es können auch noch weitere Ordner dabei sein.

:::note
Manche Modpacks brauchen extra Schritte, z.B. AllOfFabric6. Bei AllOfFabric6 musst du „startserver.bat“ (Windows) oder „startserver.sh“ (Linux / MacOS) ausführen, um die genannten Ordner zu bekommen. Das Script lädt die Ordner für dich runter. Meistens sind die Ordner aber schon da. Falls kein Script im entpackten Ordner ist, such kurz im Netz, wie du die Serverfiles für dein Modpack bekommst.
:::


## Schritt 3 – Richtige Server-Version installieren

Im Zap-Hosting Webinterface wählst du deinen Gameserver aus und gehst in den Einstellungen auf „Games“.

![](https://screensaver01.zap-hosting.com/index.php/s/Ne5B9CnHrbwgmfW/preview)

Klapp den Bereich „Available Games“ auf und such deinen Modloader (Forge für Forge Mods / Modpacks, Fabric für Fabric Mods / Modpacks). Klick auf den grünen Download-Button.

![](https://screensaver01.zap-hosting.com/index.php/s/dnBCddmXGAMpMj8/preview)


Klick auf das Dropdown-Menü unter „Game version“ und wähl deine Minecraft-Version, die zur Mod/Modpack-Version passt. Bei Forge kannst du zwischen der neuesten oder der empfohlenen Version wählen. Probier zuerst die neueste, wenn dein Server nicht läuft, probier die empfohlene. Klick auf „Akzeptieren und Installieren“.

![](https://screensaver01.zap-hosting.com/index.php/s/gCdcwLzc4Hxptqp/preview)


:::tip
Wenn du nicht weißt, welche Minecraft-Version du brauchst, geh zurück zur „File Details“-Seite auf CurseForge. Neben dem Gamecontroller-Icon siehst du die Version.

![](https://screensaver01.zap-hosting.com/index.php/s/9TsCBRP9PGQL2fC/preview)

:::

Nach der Installation siehst du einen blauen Button neben dem Namen deines Spiels (z.B. Forge, Fabric). Klick den an, um das Spiel zu aktivieren.

![](https://screensaver01.zap-hosting.com/index.php/s/YzzBzSJjnsaqKS2/preview)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Schritt 4 – Mods / Modpack per FTP hochladen

Verbinde dich mit deinem FTP-Client mit deinem Server. Server muss gestoppt sein.

### Mod hochladen

Im FTP-Client navigierst du in deinen Game-Ordner (z.B. minecraft-forge, minecraft-fabric). Öffne den mods-Ordner und zieh deine heruntergeladenen Mod-Dateien einfach rein.

![](https://screensaver01.zap-hosting.com/index.php/s/Zwm9SYdgK6MKBdz/preview)

Wenn der Upload fertig ist, kannst du deinen Server starten.

### Modpack hochladen

Im FTP-Client navigierst du in deinen Game-Ordner (z.B. minecraft-forge, minecraft-fabric). Lösche die Ordner world, mods, config und defaultconfig auf deinem Server. Jetzt lädst du alle Ordner aus deinem entpackten Modpack-Ordner hoch – außer jre und libraries. Einfach alle Ordner auswählen und in dein Serververzeichnis ziehen.

![](https://screensaver01.zap-hosting.com/index.php/s/PEyqrSES4xPGaFz/preview)

Wenn der Upload fertig ist, kannst du deinen Server starten.



## Beliebte Mods

Noch auf der Suche nach den perfekten Mods für deinen Server? Stöber durch unsere handverlesene Liste der beliebtesten und am meisten empfohlenen Mods, um dein Gameplay zu boosten und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Addons, die zu deinem Projekt passen.

<SearchableItemList items={mods} />

## Beliebte Modpacks

Noch auf der Suche nach den perfekten Modpacks für deinen Server? Stöber durch unsere handverlesene Liste der beliebtesten und am meisten empfohlenen Modpacks, um dein Gameplay zu boosten und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Addons, die zu deinem Projekt passen.

<SearchableItemList items={modpacks} />

<InlineVoucher />