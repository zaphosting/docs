---
id: vserver-linux-wine
title: "VPS: Wine Kompatibilitätsschicht Linux Setup"
description: Informationen zur Einrichtung der Wine (WineHQ) Windows-Kompatibilitätsschicht auf einem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Wine-Kompatibilitätsschicht einrichten
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wine ist eine Open-Source-Kompatibilitätsschicht für Linux, mit der Software, die ursprünglich für Windows entwickelt wurde, auf Linux-Systemen laufen kann. Dies ist besonders wichtig für dedizierte Spieleserver, die nur Windows-Serverdateien anbieten, und kann als Voraussetzung für unsere anderen Anleitungen zu dedizierten Linux-Spieleservern erforderlich sein. In diesem Anleitung werden wir uns mit der erstmaligen Installation von Wine auf deinem Linux-Server beschäftigen. In den Beispielen verwenden wir Ubuntu, aber der Prozess sollte für andere Distributionen sehr ähnlich sein.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem VPS oder Root-Server. Benutze unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du Hilfe brauchst.

## Wine installieren

Beginne den Installationsprozess, indem du sicherstellst, dass das Verzeichnis `/etc/apt/keyrings/` existiert, da es für Wine notwendig ist.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Als Nächstes lädst du den GPG-Schlüssel von Wine herunter und speicherst ihn in diesem Verzeichnis, um die Echtheit des Pakets zu überprüfen.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Du musst auch die Quellenliste für WineHQ speichern, was du mit dem folgenden vorgefertigten Befehl tun kannst:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Führe den Befehl update aus, um sicherzustellen, dass deine Paketänderungen gelesen und installiert werden.
```
sudo apt update
```

Jetzt kannst du mit dem Hauptschritt fortfahren und die neueste Version von Wine herunterladen. Dies kann einige Zeit in Anspruch nehmen.
```
sudo apt install --install-recommends winehq-staging
```

Zum Schluss musst du noch ein paar zusätzliche Pakete installieren, um sicherzustellen, dass Wine gut mit dem dedizierten Spieleserver zusammenarbeitet, indem du den folgenden Befehl ausführst.
```
sudo apt install cabextract winbind screen xvfb
```

## Abschluss

Du hast nun erfolgreich die Wine-Anpassungsschicht eingerichtet, mit der du Windows-Programme auf deinem Linux-Server ausführen kannst. Mit dieser wichtigen Voraussetzung kannst du nun dedizierte Spieleserver installieren, auch wenn sie für Windows entwickelt wurden.

Wir empfehlen dir, die anderen Anleitungen in diesem Abschnitt zu lesen, in denen es um die Installation bestimmter Spiele mit Hilfe von SteamCMD und möglicherweise Wine für Windows-basierte dedizierte Server geht.