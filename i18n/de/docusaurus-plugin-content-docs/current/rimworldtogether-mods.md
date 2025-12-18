---
id: rimworldtogether-mods
title: "RimWorld Together: Mods installieren"
description: "Entdecke, wie du deinen RimWorld Together Gameserver mit beliebten Mods für nahtloses Online-Co-op Gameplay aufrüstest → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## Einführung

RimWorld Together ist ein mega beliebter Open-Source-Multiplayer-Mod, der komplett von der RimWorld Community betrieben wird und Online-CO-OP-Gameplay für RimWorld ermöglicht. In dieser Anleitung zeigen wir dir, wie du Mods auf deinem RimWorld Together Gameserver installierst.

<InlineVoucher />

## Mods sammeln

Du kannst eine riesige Auswahl an verschiedenen RimWorld Mods auf deinem RimWorld Together Gameserver installieren.

Mods lassen sich in drei Typen unterteilen:
- **Erzwungene Mods**: Diese sind Pflicht, der Client muss sie haben, sonst kann er sich nicht verbinden.
- **Optionale Mods**: Diese sind nicht zwingend, der Client kann sich auch ohne sie verbinden.
- **Verbotene Mods**: Diese Mods sind gebannt, der Server lehnt die Verbindung des Clients sofort ab.

Diese drei Typen wirst du im nächsten Abschnitt zum Hochladen der Mods sehen, da die Mods in drei Ordner aufgeteilt sind.

### Core-Dateien & DLCs

RimWorld Together ermöglicht dir, Core-Dateien & DLCs ganz easy herunterzuladen. Diese werden genau wie andere Mods behandelt.

Du kannst die Core-Dateien und DLCs direkt aus dem [RimWorld Together GitHub Repository](https://github.com/RimworldTogether/RimWorld-Together) herunterladen, speziell den Ordner **Extras.zip**.

### Andere Mods

Eine große Auswahl an RimWorld Mods findest du einfach durchs Internet suchen. Wir empfehlen dir besonders die [Steam Workshop Seite von RimWorld](https://steamcommunity.com/app/294100/workshop/), da sie mega beliebt ist und dadurch viele Mods bietet.

Wenn du Mods direkt über den Steam Workshop abonnierst, werden sie über deinen Steam-Client in folgendes Verzeichnis geladen: `../steamapps/workshop/content/294100`.

:::tip
Falls du RimWorld nicht über Steam besitzt, kannst du Steam Workshop Dateien und Mods trotzdem mit SteamCMD herunterladen. Lade zuerst [SteamCMD von der offiziellen Valve-Seite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter. Starte **steamcmd.exe** und warte, bis die Installation abgeschlossen ist. Gib dann `login anonymous` in die Konsole ein.

Jetzt kannst du Mods herunterladen, indem du `workshop_download_item 294100 [workshop_id]` ausführst, wobei du `[workshop_id]` durch die ID des Steam Workshop Mods ersetzt. Die ID findest du ganz einfach in der URL, z.B. am Ende: `/?id=3230195082`.

Alle Mods, die du via SteamCMD herunterlädst, landen im Pfad: `../steamapps/workshop/content/294100`.
:::

Sobald du deine Mods heruntergeladen hast, kannst du im nächsten Abschnitt weiterlesen, wie du sie auf deinen Gameserver hochlädst.

:::note
Es gibt bestimmte Mods, die definitiv nicht mit RimWorld Together kompatibel sind. Die Liste der bestätigten [inkompatiblen Mods findest du hier](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md).

Außerdem kann es sein, dass andere Mods nicht wie erwartet funktionieren, wenn du sie mit RimWorld Together nutzt. Du solltest also etwas Zeit in Recherche und Tests investieren, um sicherzugehen, dass die Mods laufen.
:::

## Mods hochladen

Jetzt, wo du deine Mods ready hast, verbinde dich per FTP mit deinem Gameserver. Schau dir unsere [Anleitung zum FTP-Zugang](gameserver-ftpaccess.md) an, falls du Hilfe brauchst.

Im FTP-Client navigierst du zu folgendem Verzeichnis:
```
../rimworld-together/Mods
```

Hier findest du drei verschiedene Ordner für die unterschiedlichen Mod-Typen. Das entspricht den drei Kategorien aus dem vorherigen Abschnitt. Falls du den noch nicht gelesen hast, empfehlen wir dir, das nachzuholen, damit du weißt, wo du welche Mods reinpackst.

Jetzt öffnest du die Ordner deiner heruntergeladenen Mods und lädst sie einzeln in den passenden Mod-Ordner auf deinem Gameserver hoch.

:::note
Der Server muss gestoppt sein, bevor du Mods hinzufügst oder änderst, sonst gehen deine Änderungen verloren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Server starten

Nachdem du alle gewünschten Mods hochgeladen hast, startest du deinen Server einfach wieder. Beim nächsten Start werden alle hinzugefügten Mods geladen.

Herzlichen Glückwunsch, du hast erfolgreich neue Mods auf deinem RimWorld Together Gameserver installiert!

## Beliebte Mods

Du suchst noch nach den perfekten Mods für deinen Server? Stöbere durch unsere sorgfältig zusammengestellte Liste der beliebtesten und am meisten empfohlenen Mods, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Add-ons, die zu deinem Projekt passen.

<SearchableItemList items={items} />

<InlineVoucher />