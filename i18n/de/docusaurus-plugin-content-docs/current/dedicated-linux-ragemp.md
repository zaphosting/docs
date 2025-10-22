---
id: dedicated-linux-ragemp
title: "Dedicated Server: RageMP Dedicated Server Linux Setup"
description: "Entdecke, wie du einen RageMP Dedicated Server auf deinem Linux Server für nahtloses Gameserver Hosting und Management einrichtest → Jetzt mehr erfahren"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den RageMP Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux Server installierst. Wir verwenden Ubuntu in den Beispielen, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Dedicated Server. Falls du Hilfe brauchst, schau dir unsere [SSH Initial Access](dedicated-linux-ssh.md) Anleitung an.

### Benutzer anlegen

Wir empfehlen dringend, einen separaten Benutzer anzulegen, unter dem alle deine dedizierten Gameserver-Services laufen. Den Root-User zu verwenden, ist aus verschiedenen Gründen nicht empfehlenswert. Falls du schon einen Benutzer hast, kannst du direkt mit der Installation weitermachen.

Nutze folgenden Befehl, um einen Benutzer namens `gameservers` mit einem optionalen Passwort deiner Wahl anzulegen:

```
sudo useradd -m gameservers
sudo passwd gameservers # Optionales Passwort
```

Sobald du Zugriff auf deinen Server hast und ein Benutzer bereitsteht, kannst du mit der Installation starten.

## Installation

Melde dich als `gameservers` Benutzer an und wechsle in das Home-Verzeichnis, um alles ordentlich zu halten:
```
sudo -u gameservers -s
cd ~
```

Um alles übersichtlich zu halten, erstelle einen neuen Ordner für deinen RageMP Server und öffne ihn:
```
mkdir RageMP-Server && cd RageMP-Server
```

Jetzt musst du die neueste Version von der RageMP Webseite herunterladen. Nutze folgenden Befehl, um sie direkt zu laden:
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Das lädt die `.tar.gz` Datei in deinen aktuellen Ordner, der dein neuer `RageMP-Server` Ordner sein sollte. Entpacke die Dateien mit folgendem Befehl:
```
tar -xvzf linux_x64.tar.gz
```

Deine Dateien sind jetzt im Ordner **ragemp-srv** verfügbar. Wechsle dorthin mit `cd ragemp-srv`. Mit `ls` kannst du jederzeit den Inhalt anzeigen lassen. Der Server ist jetzt bereit, fahre mit der Konfiguration fort.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines RageMP Servers abgeschlossen. Weitere Server-Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

:::tip
Eventuell musst du den Server mindestens einmal starten, damit die Konfigurationsdateien erstellt werden. Starte dazu die Shell-Datei: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Beende den Server danach mit `CTRL+C`.
:::

Die wichtigsten Einstellungen findest du in der **conf.json** Datei, die du so bearbeiten kannst:
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du ins Hauptverzeichnis wechselst und die Shell-Datei **ragemp-server** ausführst:
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Im Terminal solltest du jetzt Logs sehen, inklusive Netzwerk-Logs – das zeigt, dass der Server erfolgreich gestartet ist. Wenn alles läuft wie erwartet, ist dein Server über Direct Connect erreichbar und in der Serverliste sichtbar. Alternativ kannst du dich direkt verbinden über: `[deine_ip_adresse]:22005`.

## Fazit

Glückwunsch, du hast deinen RageMP Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir, unsere [Setup Linux Service](dedicated-linux-create-gameservice.md) Anleitung anzuschauen. Dort erfährst du, wie du deinen neuen dedizierten Gameserver als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />