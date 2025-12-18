---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Mods / Modpacks installieren"
description: "Entdecke, wie du Minecraft Mods und Modpacks herunterlädst und installierst, um dein Server-Gameplay zu verbessern → Jetzt mehr erfahren"
sidebar_label: Mods / Modpacks installieren
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## Einführung

Hier lernst du, wie du Mods / Modpacks auf deinem Minecraft Gameserver herunterlädst und installierst.

<InlineVoucher />

## Vorbereitung

- Ein Gameserver ([hier kannst du einen mieten](https://zap-hosting.com/en/gameserver-hosting/))
- Ein FTP-Client (z.B. WinSCP, FileZilla)
- Verbinde dich per FTP mit deinem Server: ([Zugriff via FTP](gameserver-ftpaccess.md))



## Mods oder Modpacks finden & herunterladen

Es gibt viele Orte im Internet, um Mods / Modpacks zu finden. Die größte Plattform für Mods und Modpacks ist CurseForge. Fast 99% aller Minecraft Mods / Modpacks findest du dort und kannst sie mit nur wenigen Klicks herunterladen. Diese Anleitung konzentriert sich auf die Nutzung von CurseForge. Du kannst Mods [hier](https://www.curseforge.com/minecraft/mc-mods) und Modpacks [hier](https://curseforge.com/minecraft/modpacks) suchen.

:::note
Mods funktionieren nur mit einer bestimmten Version des Modloaders. Du musst auf der Mod-Seite prüfen, welche Version du brauchst. Wenn du mehrere Mods installierst, achte darauf, dass alle dieselbe Version nutzen. Außerdem sind Forge Mods nicht kompatibel mit Fabric Mods und umgekehrt.
:::

Gehe auf die Seite deiner gewünschten Mod / deines Modpacks und klicke auf den Reiter „Files“.

![](https://github.com/Yoshlix/docs/assets/26007280/cc528cf6-9fc8-4524-aca0-b954e24716f8)


Finde die Version, die du möchtest, und klicke darauf, um zum Bereich „File Details“ zu gelangen.

:::tip
Du kannst oben im Reiter „Files“ über das Dropdown-Menü nach Version und Modloader filtern.

![](https://github.com/Yoshlix/docs/assets/26007280/6867b2f2-e9db-4a4c-be88-b9b22b800e72)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="Für Mods" default>
Im Bereich „File Details“ drückst du auf den Button „Download“. Speichere die Datei irgendwo ab, du brauchst sie später.

![](https://github.com/Yoshlix/docs/assets/26007280/7b84ae33-1bef-4568-80d7-ef651a654b08)

</TabItem>

<TabItem value="Modpacks" label="Für Modpacks">
Im Bereich „File Details“ scrollst du runter bis zu „Additional Files“ und klickst auf die drei Punkte, dann „Download file“ auswählen. Speichere die Datei irgendwo ab, du brauchst sie später.

![](https://github.com/Yoshlix/docs/assets/26007280/49fb9317-fdd3-474e-8140-b78b102c5f3d)

</TabItem>
</Tabs>

## Schritt 2 – Dateien aus Downloads entpacken (nur für Modpacks)

Finde die heruntergeladene Datei auf deinem PC, Rechtsklick darauf und „Alle extrahieren...“ auswählen. Wähle einen Ordner, in den die Dateien entpackt werden sollen. Merke dir den Pfad!

![](https://github.com/Yoshlix/docs/assets/26007280/edbc753d-1906-4d81-9f05-354ff48ceebb)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Dein entpackter Ordner sollte die Ordner mods, config und defaultconfig enthalten. Es können auch mehr Ordner vorhanden sein als hier gezeigt.

:::note
Einige Modpacks erfordern zusätzliche Schritte, wie z.B. AllOfFabric6. Bei AllOfFabric6 musst du „startserver.bat“ (Windows) oder „startserver.sh“ (Linux / MacOS) ausführen, um die oben genannten Ordner zu erhalten. Das Script lädt die Ordner für dich herunter. In den meisten Fällen sind die Ordner aber direkt da. Falls kein Script im entpackten Ordner ist, solltest du kurz im Internet suchen, wie du die Serverfiles für dein Modpack bekommst.
:::


## Schritt 3 – Die richtige Serverversion installieren

Im Zap-Hosting Webinterface wählst du deinen Gameserver aus und gehst in den Einstellungen auf „Games“.

![](https://github.com/Yoshlix/docs/assets/26007280/47e88856-0120-408a-8bec-41e54e3b0738)

Klappe den Bereich „Available Games“ auf und suche deinen Modloader (Forge für Forge Mods / Modpacks, Fabric für Fabric Mods / Modpacks). Wähle den grünen Download-Button.

![](https://github.com/Yoshlix/docs/assets/26007280/e3b4e5d3-11c9-4f09-ae46-27cea93a58a3)


Klicke auf das Dropdown-Menü unter „Game version“ und wähle deine Minecraft-Version, die zur richtigen Version für deine Mod / dein Modpack passt. Bei Forge kannst du die neueste Version oder die empfohlene Version wählen. Probiere zuerst die neueste Version, und falls dein Server nicht wie erwartet läuft, versuche die empfohlene Version. Drücke auf „Akzeptieren und Installieren“.

![](https://github.com/Yoshlix/docs/assets/26007280/3530466f-bd58-4d0e-9ca3-8d964ac76d80)


:::tip
Wenn du nicht weißt, welche Minecraft-Version du brauchst, geh zurück zur „File Details“-Seite auf CurseForge. Neben dem Gamecontroller-Icon siehst du die Version.

![](https://github.com/Yoshlix/docs/assets/26007280/89f751c1-7179-4107-b8bc-7c4381a7d94c)

:::

Nach der Installation siehst du einen blauen Button neben dem Namen deines Spiels (z.B. Forge, Fabric). Klick den Button, um das Spiel zu aktivieren.

![](https://github.com/Yoshlix/docs/assets/26007280/53cf9569-3529-42fb-9a7d-6ae636ca4f9c)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Schritt 4 – Mods / Modpack per FTP verbinden & hochladen

Verbinde dich mit deinem gewählten FTP-Client mit deinem Server. Achte darauf, dass dein Server gestoppt ist.

### Mod hochladen

Wenn du verbunden bist, navigiere in deinen Spielordner (z.B. minecraft-forge, minecraft-fabric). Öffne den mods-Ordner und zieh deine heruntergeladenen Mod-Dateien einfach per Drag & Drop in den Ordner.
![](https://github.com/Yoshlix/docs/assets/26007280/8619fc4f-4fab-415a-9692-f74f8930da3f)

Wenn der Upload fertig ist, kannst du deinen Server starten.

### Modpack hochladen

Wenn du verbunden bist, navigiere in deinen Spielordner (z.B. minecraft-forge, minecraft-fabric). Lösche die Ordner world, mods, config und defaultconfig auf deinem Server. Lade jetzt alle Ordner aus dem entpackten Ordner hoch, außer den Ordnern jre und libraries. Einfach alle Ordner auswählen und in dein Serververzeichnis ziehen.

![](https://github.com/Yoshlix/docs/assets/26007280/1424a94d-aa96-40ca-8b30-7c1905e67c21)

Sobald der Upload abgeschlossen ist, kannst du deinen Server starten.



## Beliebte Mods

Du suchst noch die perfekten Mods für deinen Server? Stöbere durch unsere sorgfältig kuratierte Liste der beliebtesten und am meisten empfohlenen Mods, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Addons, die zu deinem Projekt passen.

<SearchableItemList items={mods} />

## Beliebte Modpacks

Du suchst noch die perfekten Modpacks für deinen Server? Stöbere durch unsere sorgfältig kuratierte Liste der beliebtesten und am meisten empfohlenen Modpacks, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Addons, die zu deinem Projekt passen.

<SearchableItemList items={modpacks} />

<InlineVoucher />