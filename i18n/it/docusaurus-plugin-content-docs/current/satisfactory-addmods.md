---
id: satisfactory-addmods
title: "Satisfactory: Mods Installieren"
description: "Entdecke, wie du Mods für deinen Satisfactory-Server sicher verwaltest und installierst, ohne dein Savegame zu gefährden → Jetzt mehr erfahren"
sidebar_label: Mods Installieren
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**WICHTIG**

Mods funktionieren aktuell nicht!
:::

:::info
**ACHTUNG**

Mods werden von den Entwicklern **nicht offiziell** unterstützt, aber geduldet!

Im schlimmsten Fall kann die Installation von Mods dein Savegame zerstören, es durch ein Update temporär unspielbar machen oder sogar komplett kaputt machen!

Erstelle **auf jeden Fall vor** der Mod-Installation ein Backup und sichere regelmäßig deine Saves, nur für den Fall!
:::

<InlineVoucher />

## Modded Satisfactory auf dem Server installieren

Um Mods auf deinem Server installieren zu können, musst du zuerst einen Modded Satisfactory Server bestellen: https://zap-hosting.com/en/satisfactory-server-hosting/
Falls du schon einen Satisfactory Server gemietet hast, kannst du das Spiel dank unseres Cloud-Systems jederzeit wechseln, wie in [Spiel wechseln](gameserver-gameswitch.md) beschrieben.

## Mod-Manager installieren

Das Tool "SatisfactoryModManager" macht die Verwaltung und Installation von Mods super easy und geht mit nur wenigen Klicks.
Das Tool gibt’s für Windows und Linux und kannst du hier runterladen: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Auf der verlinkten Seite findest du alle Versionen; normalerweise solltest du immer die neueste Version nehmen, also den ersten Eintrag von oben.
Unter "Assets" kannst du das Tool jetzt runterladen. Je nachdem, welches Betriebssystem (Windows oder Linux) du nutzt, klickst du auf die passende Datei. Der Download startet dann automatisch oder du musst ihn je nach Browser/Settings bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

Wenn der Download fertig ist, öffne die Datei und installiere den Mod-Manager auf deinem PC. Wähle während der Installation die Optionen, die für dich passen.

## Mods installieren

Die gleichen Mods müssen 1:1 auf dem Client (bei allen Spielern!) und auf dem Server installiert sein, damit die Verbindung klappt und keine Crashes passieren.
Im ersten Schritt werden die Mods auf dem Client kompiliert und installiert, damit sie danach auf den Server übertragen werden können.

:::info
**WARNUNG**

Nicht alle Mods sind mit dem Multiplayer kompatibel!

Wenn ein Mod multiplayer-kompatibel ist, steht das normalerweise in der Mod-Beschreibung.

Tipp: Auch wenn ein Mod als multiplayer-kompatibel angegeben ist, ist das keine Garantie!
:::

### Client

Die Mods werden in Profilen gespeichert, damit du z.B. andere Mods in einer Testwelt ausprobieren kannst und mit einem Klick wieder zu den regulären Mods zurückwechseln kannst.
Wähle also zuerst ein Profil aus oder erstelle ein neues, wie im Screenshot gezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

Stell den Filter zuerst auf "Compatible", damit nur Mods angezeigt werden, die aktuell mit deiner Version kompatibel sind.

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

Mods kannst du jetzt einfach per Klick auf das Download-Symbol installieren, vorausgesetzt, der Mod ist wie oben beschrieben multiplayer-kompatibel.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Server

Nachdem alle gewünschten Mods auf dem Client installiert sind und du sichergestellt hast, dass sie multiplayer-kompatibel sind, kannst du die Mods jetzt auf dem Server installieren.
Damit es keine Probleme beim Übertragen gibt, stelle bitte sicher, dass dein Server vorher gestoppt ist!

Verbinde dich jetzt per FTP mit deinem Server, um die Mods hochzuladen.
Alles Wichtige zur FTP-Verbindung findest du in [Zugriff via FTP](gameserver-ftpaccess.md).
Nach der Verbindung öffne folgenden Ordnerpfad: `/gXXXX/modded-satisfactory/FactoryGame/Mods`

Jetzt musst du den lokalen Satisfactory-Ordner auf deinem PC öffnen.
Die Schritte unterscheiden sich leicht zwischen Steam und Epic Games:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Wenn du Satisfactory über Steam installiert hast, kannst du den Ordner direkt über den Steam-Client öffnen:

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games hat keinen Button zum Öffnen des Installationsordners, daher musst du den Ordner manuell öffnen.
Öffne dazu den Windows Explorer und navigiere zu dem Ordner, in dem du Epic Games installiert hast.
Das ist normalerweise folgender Pfad: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

Die Mods, die du mit dem Mod-Manager auf dem Client installiert hast, müssen jetzt per FTP hochgeladen werden.
Dafür öffnest du nacheinander die Ordner: `FactoryGame -> Mods`.

Jetzt wählst du alle Ordner **außer dem SML-Ordner** aus, indem du die STRG-Taste gedrückt hältst und die Ordner anklickst.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

Die ausgewählten Ordner ziehst du jetzt per Drag & Drop in den zuvor geöffneten Mods-Ordner auf dem Server via FTP.

## Server starten

Nachdem die Mods hochgeladen sind, kannst du den Server einfach über das Webinterface starten. Der Server sollte jetzt joinbar sein – wie das genau geht, erfährst du im Guide [Mit Server verbinden](satisfactory-connect.md).

<InlineVoucher />