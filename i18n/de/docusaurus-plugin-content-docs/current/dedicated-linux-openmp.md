---
id: dedicated-linux-openmp
title: "Dedicated Server: Open.mp Dedicated Server Linux Setup"
description: "Entdecke, wie du den open.mp Dedicated Server auf deinem Linux Dedicated Server für nahtloses Gameserver Hosting und Management einrichtest → Jetzt mehr erfahren"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den open.mp Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux Server installierst. Wir verwenden Ubuntu in den Beispielen, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Dedicated Server. Falls du Hilfe brauchst, schau dir unsere [SSH Initial Access](dedicated-linux-ssh.md) Anleitung an.

### Benutzer anlegen

Wir empfehlen dringend, einen separaten Benutzer anzulegen, unter dem alle deine Dedicated Gameserver Services laufen. Den Root-User zu verwenden, ist aus verschiedenen Gründen nicht ratsam. Falls du schon einen Benutzer hast, kannst du direkt mit der Installation weitermachen.

Nutze folgenden Befehl, um einen Benutzer namens `gameservers` mit einem optionalen Passwort deiner Wahl anzulegen:

```
sudo useradd -m gameservers
sudo passwd gameservers # Optionales Passwort
```

Sobald du Zugriff auf deinen Server hast und ein Benutzer bereitsteht, geht’s weiter mit der Installation.

## Installation

Melde dich als `gameservers` Benutzer an und wechsle in das Home-Verzeichnis, um alles ordentlich zu halten:
```
sudo -u gameservers -s
cd ~
```

Erstelle einen neuen Ordner für deinen open.mp Server und öffne ihn:
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Jetzt musst du die neueste Version vom [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases) herunterladen. Rechtsklicke auf die **linux-x86** Version und kopiere den Link. Lade die neueste Linux-Version mit folgendem Befehl herunter, ersetze `[link]` durch den kopierten Link:
```
wget [link]
```

Die `.zip` Datei wird in deinem aktuellen Ordner, also im `OpenMP-Server` Verzeichnis, gespeichert. Entpacke die Dateien mit:
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Deine Dateien sind jetzt im **Server** Ordner. Wechsle dorthin mit `cd Server`. Mit `ls` kannst du jederzeit den Inhalt anzeigen lassen. Der Server ist jetzt bereit, fahre mit der Konfiguration fort.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines open.mp Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Server-Verzeichnis vornehmen.

Bearbeite die wichtigsten Einstellungen in der **config.json** Datei:
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Sieh dir unsere Open.mp [Server Konfiguration](openmp-configuration.md) Anleitung an, um alle verfügbaren Optionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du ins Hauptverzeichnis wechselst und die **omp-server** Shell-Datei ausführst:
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

Im Terminal solltest du jetzt Logs sehen, inklusive Netzwerk-Logs – das bedeutet, der Server ist erfolgreich gestartet. Wenn alles läuft wie erwartet, ist dein Server über Direct Connect erreichbar und in der Serverliste sichtbar. Alternativ kannst du dich direkt verbinden über: `[deine_ip_adresse]:7777`.

## Fazit

Glückwunsch, du hast den open.mp Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Setup Linux Service](dedicated-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!