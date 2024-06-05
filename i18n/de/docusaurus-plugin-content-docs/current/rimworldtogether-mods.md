---
id: rimworldtogether-mods
title: "RimWorld Together: Installieren von Mods"
description: Informationen über die Installation von Mods auf deinem RimWorld Together-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Mods installieren
---

## Einleitung

RimWorld Together ist eine sehr beliebte Open-Source-Multiplayer-Mod, die vollständig von der RimWorld-Community betrieben wird und das Online-CO-OP-Gameplay für das Spiel RimWorld ermöglicht. In dieser Anleitung zeigen wir dir, wie du Mods auf deinem RimWorld Together-Server installierst.

## Mods einsammeln

Du kannst eine Vielzahl verschiedener RimWorld-Mods auf deinem RimWorld Together-Server installieren.

Mods lassen sich in drei verschiedene Typen einteilen:
- **Erzwungene Mods**: Diese sind erforderlich, d.h. der Client muss sie haben, sonst kann er sich nicht verbinden.
- **Optional Mods**: Diese sind nicht erforderlich, d.h. der Kunde kann eine Verbindung herstellen, auch wenn er sie nicht hat.
- **Verbotene Mods**: Diese Mods sind verboten, was bedeutet, dass der Server die Verbindung des Kunden sofort ablehnt.

Diese drei Typen werden im nächsten Abschnitt zum Hochladen von Mods angezeigt, da die Mods auf drei Ordner aufgeteilt sind.

### Kerndateien & DLCs

Mit RimWorld Together kannst du ganz einfach Kerndateien und DLCs herunterladen. Diese werden genauso behandelt wie alle anderen Mods.

Du kannst die Kerndateien und DLCs direkt aus dem [RimWorld Together GitHub Repository](https://github.com/RimworldTogether/RimWorld-Together) herunterladen, insbesondere aus dem Ordner **Extras.zip**.

### Andere Mods

Du kannst eine große Auswahl an RimWorld-Mods finden, indem du einfach im Internet suchst. Wir empfehlen, bei der Suche nach Mods die Seite [RimWorld's Steam Workshop](https://steamcommunity.com/app/294100/workshop/) zu verwenden, da sie sehr beliebt ist und daher mehr Mods verfügbar sind.

Wenn du Mods direkt über Steam Workshop abonnierst, werden sie über deinen Steam-Client in das folgende Verzeichnis heruntergeladen: `../steamapps/workshop/content/294100`.

:::tip
Wenn du RimWorld nicht auf Steam besitzt, kannst du trotzdem Dateien und Mods aus dem Steam Workshop herunterladen, indem du SteamCMD benutzt. Lade dir zunächst [SteamCMD von der offiziellen Valve-Website](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter. Führe **steamcmd.exe** aus und warte, bis der Installationsprozess abgeschlossen ist. Wenn du fertig bist, gib in der Konsole `login anonymous` ein. 

Jetzt kannst du anfangen, Mods herunterzuladen, indem du `workshop_download_item 294100 [workshop_id]` ausführst, wobei du `[workshop_id]` durch die ID der Steam Workshop Mod ersetzt. Du findest die ID der Workshop-Mod ganz einfach, indem du die URL analysierst, insbesondere den Endteil, z.B.: `/?id=3230195082`.

Alle Mods, die du über SteamCMD herunterlädst, werden im folgenden Pfad abgelegt: `../steamapps/workshop/content/294100`.
:::

Sobald du die Mods heruntergeladen hast, kannst du mit dem folgenden Abschnitt fortfahren, in dem es darum geht, sie auf deinen Gameserver hochzuladen.

:::note
Es gibt bestimmte Mods, die garantiert nicht mit RimWorld Together kompatibel sind. Du kannst die Liste der bestätigten [inkompatiblen Mods hier](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md) einsehen.

Außerdem kann es sein, dass andere Mods nicht wie erwartet funktionieren, wenn du versuchst, sie mit RimWorld Together zu verwenden. Du musst also einige Nachforschungen und Tests durchführen, um sicherzustellen, dass die Mods funktionieren.
:::

## Mods hochladen

Wenn du die Mods fertig hast, kannst du damit beginnen, dich per FTP mit deinem Gameserver zu verbinden. Lies unsere [Access FTP Anleitung](gameserver-ftpaccess.md), um zu erfahren, wie das geht.

Wenn dein FTP-Client bereit ist, navigiere in das folgende Verzeichnis:
```
../rimworld-together/Mods
```

In diesem Verzeichnis siehst du drei separate Ordner für verschiedene Arten von Mods. Damit knüpfen wir an den Anfang des vorherigen Abschnitts an, in dem wir die einzelnen Mod-Typen verglichen haben. Wenn du das noch nicht gelesen hast, empfehlen wir dir, noch einmal nachzulesen, um sicherzustellen, dass du weißt, wo du die einzelnen Mods ablegen musst.

Mit diesem Wissen solltest du jetzt die Dateien der heruntergeladenen Mods aufrufen und die Mod-Ordner nacheinander in den entsprechenden Mod-Kategorie-Ordner auf deinem Gameserver hochladen.

:::note
Der Server muss angehalten werden, bevor du Mods hinzufügst oder bearbeitest, da sonst alle Änderungen rückgängig gemacht werden können.
:::

![image](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Server starten

Wenn du die gewünschten Plugins hochgeladen hast, starte deinen Server einfach wieder. Wenn dein Server das nächste Mal startet, sollten alle Mods, die du hinzugefügt hast, jetzt zum Server hinzugefügt sein.

Du hast erfolgreich neue Mods auf deinem RimWorld Together Gameserver installiert!