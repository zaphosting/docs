---
id: vserver-linux-ragemp
title: "VPS: RageMP Dedicated Server Linux Setup"
description: "Entdecke, wie du einen RageMP Dedicated Server auf deinem Linux VPS für nahtloses Multiplayer-Gaming einrichtest → Jetzt mehr erfahren"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest den RageMP Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server einrichtest. Wir verwenden Ubuntu in den Beispielen, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du Hilfe brauchst, schau dir unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung an.

### Benutzer anlegen

Wir empfehlen dringend, einen separaten Benutzer anzulegen, unter dem alle deine Dedicated Gameserver-Services laufen. Den Root-User zu verwenden, ist aus verschiedenen Gründen nicht ratsam. Falls du schon einen Benutzer hast, kannst du direkt mit der Installation weitermachen.

Nutze folgenden Befehl, um einen Benutzer namens `gameservers` mit einem optionalen Passwort deiner Wahl anzulegen.

```
sudo useradd -m gameservers
sudo passwd gameservers # Optionales Passwort
```

Sobald du Zugriff auf deinen Server hast und ein Benutzer bereitsteht, geht’s weiter mit der Installation.

## Installation

Melde dich als `gameservers` Benutzer an und wechsle in das Home-Verzeichnis, um alles ordentlich zu halten.
```
sudo -u gameservers -s
cd ~
```

Erstelle einen neuen Ordner für deinen RageMP Server und öffne ihn.
```
mkdir RageMP-Server && cd RageMP-Server
```

Jetzt musst du die neueste Version von der RageMP-Webseite herunterladen. Nutze dazu diesen Befehl:
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Das `.zip`-Archiv wird in deinem aktuellen Verzeichnis, also im neuen `RageMP-Server` Ordner, gespeichert. Entpacke die Dateien mit:
```
tar -xvzf linux_x64.tar.gz
```

Deine Dateien findest du jetzt im Ordner **ragemp-srv**. Wechsle dorthin mit `cd ragemp-srv`. Mit `ls` kannst du jederzeit den Inhalt anzeigen lassen. Der Server ist jetzt bereit, im nächsten Abschnitt geht’s an die Konfiguration.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines RageMP Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

:::tip
Eventuell musst du den Server mindestens einmal starten, damit die Konfigurationsdateien erstellt werden. Starte ihn dazu mit der Shell-Datei: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Mit `CTRL+C` kannst du den Server wieder stoppen.
:::

Die wichtigsten Einstellungen findest du in der **conf.json** Datei, die du so öffnest:
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du ins Hauptverzeichnis wechselst und die Shell-Datei ausführst:
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Im Terminal solltest du jetzt Logs sehen, inklusive Netzwerk-Logs – das zeigt, dass der Server erfolgreich gestartet ist. Wenn alles läuft, kannst du dich per Direct Connect verbinden oder deinen Server in der Serverliste finden. Alternativ verbindest du dich direkt über: `[deine_ip_adresse]:22005`.

## Fazit

Glückwunsch, du hast deinen RageMP Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächstes empfehlen wir dir, unsere [Setup Linux Service](vserver-linux-create-gameservice.md) Anleitung anzuschauen. Dort erfährst du, wie du deinen Dedicated Gameserver als Service einrichtest – mit Vorteilen wie automatischem Start beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Falls du noch Fragen hast oder Probleme auftreten, steht dir unser Support-Team täglich zur Seite!

<InlineVoucher />