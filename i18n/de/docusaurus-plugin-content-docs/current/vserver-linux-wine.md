---
id: vserver-linux-wine
title: "vServer: Wine Compatibility Layer Linux Setup"
description: "Entdecke, wie du Wine auf Linux einrichtest, um Windows-Software und Gameserver problemlos auf deinem System laufen zu lassen → Jetzt mehr erfahren"
sidebar_label: Wine Compatibility Layer Setup
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wine ist eine Open-Source-Kompatibilitätsschicht für Linux, die es ermöglicht, Software, die ursprünglich für Windows entwickelt wurde, auf Linux-Systemen auszuführen. Das ist besonders wichtig für dedizierte Gameserver, die nur Windows-Serverdateien anbieten und oft eine Voraussetzung für unsere anderen Linux-Gameserver-Anleitungen sind. In dieser Anleitung zeigen wir dir, wie du Wine zum ersten Mal auf deinem Linux-Server installierst. Wir nutzen Ubuntu als Beispiel, aber der Ablauf ist bei anderen Distributionen ähnlich.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, schau dir unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung an.

## Wine installieren

Starte die Installation, indem du sicherstellst, dass das Verzeichnis `/etc/apt/keyrings/` existiert, denn das wird für Wine benötigt.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Lade als Nächstes den Wine GPG-Schlüssel herunter und speichere ihn in diesem Verzeichnis, damit die Authentizität des Pakets geprüft werden kann.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Du musst außerdem die Quellenliste für WineHQ speichern. Das geht mit folgendem vorgefertigten Befehl:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Führe dann ein Update aus, damit deine Paketquellen aktualisiert und die Änderungen übernommen werden.
```
sudo apt update
```

Jetzt kannst du den Hauptschritt starten und die neueste Wine-Version herunterladen. Das kann eine Weile dauern.
```
sudo apt install --install-recommends winehq-staging
```

Zum Schluss installierst du noch ein paar zusätzliche Pakete, damit Wine gut mit dedizierten Gameservern zusammenarbeitet:
```
sudo apt install cabextract winbind screen xvfb
```

## Fazit

Du hast jetzt erfolgreich die Wine-Kompatibilitätsschicht eingerichtet, mit der du Windows-Programme auf deinem Linux-Server ausführen kannst. Mit dieser wichtigen Voraussetzung kannst du nun auch dedizierte Gameserver installieren, selbst wenn sie für Windows gebaut sind.

Wir empfehlen dir, auch die anderen Anleitungen in diesem Bereich anzuschauen, die zeigen, wie man bestimmte Games über SteamCMD und eventuell Wine für Windows-basierte dedizierte Serverdateien installiert.

<InlineVoucher />