---
id: satisfactory-addmods
title: "Satisfactory: Mods installieren"
description: "Entdecke, wie du Mods für Satisfactory-Server sicher verwaltest und installierst, während du dein Savegame schützt → Jetzt mehr erfahren"
sidebar_label: Mods installieren
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

Mods werden **nicht offiziell** von den Entwicklern unterstützt, aber sie werden toleriert!

Im schlimmsten Fall kann die Installation von Mods das Savegame zerstören, es durch ein Update temporär unspielbar machen oder ebenfalls zerstören!

Ein Backup sollte **auf jeden Fall vor** der Mod-Installation erstellt werden und Backups sollten auch regelmäßig zur Sicherheit angelegt werden!
:::

<InlineVoucher />

## Modded Satisfactory auf dem Server installieren

Um überhaupt Mods auf deinem Server installieren zu können, musst du zuerst einen Modded Satisfactory Server bestellen: https://zap-hosting.com/en/satisfactory-server-hosting/
Wenn du bereits einen Satisfactory-Server gemietet hast, kann das Spiel dank des Cloud-Systems jederzeit wie in der [Spielwechsel](gameserver-gameswitch.md) Anleitung beschrieben geändert werden.

## Mod-Manager installieren

Das Tool „SatisfactoryModManager“ macht die Verwaltung und Installation von Mods super easy und geht mit nur wenigen Klicks.
Das Tool ist für Windows und Linux verfügbar und kann hier heruntergeladen werden: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Alle Versionen sind auf der verlinkten Seite gelistet; in der Regel sollte immer die neueste Version verwendet werden, also der erste Eintrag von oben.
Das Tool kann jetzt unter „Assets“ heruntergeladen werden. Je nachdem, welches Betriebssystem (Windows oder Linux) du nutzt, klickst du auf die passende Datei, die den Download automatisch startet oder, je nach Browser oder Einstellungen, musst du ihn bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

Wenn der Download abgeschlossen ist, starte die Datei und installiere den Mod-Manager auf deinem PC, wobei du während der Installation die Optionen auswählst, die dir passen.

## Mods installieren

Die gleichen Mods müssen 1:1 auf dem Client (von allen Spielern!) und auf dem Server installiert sein, damit die Verbindung klappt und keine Crashes auftreten.
Im ersten Schritt werden die Mods auf dem Client kompiliert und installiert, damit sie anschließend auf den Server übertragen werden können.

:::info
**WARNUNG**

Nicht alle Mods sind mit dem Multiplayer kompatibel!

Wenn der Mod mit dem Multiplayer kompatibel ist, steht das normalerweise immer in der Mod-Beschreibung.

Hinweis: Auch wenn der Mod als multiplayer-kompatibel angegeben ist, ist das keine Garantie dafür!
:::

### Client

Die Mods werden in Profilen gespeichert, damit z.B. andere Mods in einer Testwelt ausprobiert werden können und du mit einem Klick wieder zu den regulären Mods wechseln kannst.
Wähle also zuerst ein Profil aus oder erstelle ein neues, wie im Screenshot gezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

Stelle zuerst den Filter auf „Compatible“, damit nur Mods angezeigt werden, die aktuell mit der Version kompatibel sind.

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

Mods können jetzt einfach durch Klick auf das Download-Symbol installiert werden, wenn sichergestellt ist, dass der Mod mit dem Multiplayer kompatibel ist, wie oben beschrieben.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Server

Nachdem alle gewünschten Mods auf dem Client installiert wurden und sichergestellt wurde, dass der Mod mit dem Multiplayer kompatibel ist, können die Mods jetzt auf dem Server installiert werden.
Damit es keine Probleme beim Übertragen der Änderungen gibt, stelle bitte sicher, dass dein Server vorher gestoppt ist!

Verbinde dich jetzt per FTP mit deinem Server, um die Mods im nächsten Schritt hochladen zu können.
Alles zur FTP-Verbindung haben wir in [Zugriff via FTP](gameserver-ftpaccess.md) beschrieben.
Nachdem die Verbindung steht, öffne folgenden Ordnerpfad: `/gXXXX/modded-satisfactory/FactoryGame/Mods`

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
Epic Games hat keinen Button, um den Installationsordner zu öffnen, daher muss der Ordner manuell geöffnet werden.
Öffne dazu den Windows Explorer und navigiere zu dem Ordner, in dem du Epic Games installiert hast.
Das ist normalerweise folgender Pfad: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

Die Mods, die auf dem Client vom Mod-Manager installiert wurden, müssen jetzt per FTP hochgeladen werden.
Um an die Mods selbst zu kommen, müssen nacheinander folgende Ordner geöffnet werden: `FactoryGame -> Mods`.

Jetzt wählst du alle Ordner **außer dem SML-Ordner** aus, indem du die STRG-Taste gedrückt hältst und auf die Ordner klickst.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

Die ausgewählten Ordner werden jetzt per Drag & Drop in den zuvor geöffneten Mods-Ordner im FTP gezogen.

## Server starten

Nachdem die Mods hochgeladen wurden, kann der Server einfach über das Webinterface gestartet werden. Der Server sollte jetzt joinbar sein, wie du im [Mit Server verbinden](satisfactory-connect.md) Guide noch mehr erfahren kannst.

<InlineVoucher />