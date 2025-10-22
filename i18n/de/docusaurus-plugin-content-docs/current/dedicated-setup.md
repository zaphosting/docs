---
id: dedicated-setup
title: "Dedicated Server: Erste Einrichtung"
description: "Entdecke, wie du deinen ZAP Dedicated Server ganz easy einrichtest und Zugriff auf verschiedene Betriebssysteme bekommst → Jetzt mehr erfahren"
sidebar_label: Erste Einrichtung
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Bist du noch neu in dem Bereich und hast Bock, aber auch ein bisschen Schiss, dass du mit der Einrichtung nicht klarkommst oder auf Probleme stößt? Kein Stress! Diese Anleitung und unser Setup-Assistent führen dich Schritt für Schritt durch die erste Einrichtung deines ZAP Dedicated Servers.

<InlineVoucher />

## Vorbereitung

### iLO aktivieren
Für die erste Einrichtung muss zuerst die iLO-Administrationsoberfläche aktiviert werden. Das kann einen Moment dauern. Für mehr Infos und zur weiteren Nutzung der iLO-Oberfläche empfehlen wir dir einen Blick in die [iLO](dedicated-ilo.md) Anleitung.

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

Sobald iLO aktiviert ist, sollte der Status als **Aktiv** angezeigt werden. Die iLO-Session ist standardmäßig immer für drei Stunden aktiviert und muss danach erneut aktiviert werden, falls du wieder darauf zugreifen willst. Danach kannst du mit der Auswahl des ISO weitermachen.

### ISO auswählen

Der nächste Schritt ist, ein ISO für die Erstinstallation auszuwählen und einzubinden. Klick dafür einfach auf das Dropdown-Menü, wähle eine ISO-Datei aus und drück auf den **Einlegen**-Button.

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

Wir bieten dir eine breite Auswahl an ISO-Dateien für die gängigsten Betriebssysteme wie Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux und Proxmox standardmäßig an. In der folgenden Tabelle findest du eine Übersicht aller verfügbaren Betriebssysteme und Versionen.

| ISO (Betriebssystem) | Versionen                                              |
| -------------------- | ------------------------------------------------------ |
| Debian               | 12, 11, 10.9, 9.13                                     |
| Ubuntu               | 22.04.3, 22.04, 22.02, 18.04                           |
| FreeBSD              | 13.0, 12.2, 11.4                                       |
| Windows              | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS               | 7.9, 8.3                                               |
| ArchLinux            | 2023                                                   |
| Proxmox              | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1               |

Du kannst auch deine eigene individuelle ISO hinzufügen und mounten. Wie das genau geht, erfährst du in der **[Eigene ISO](dedicated-iso.md)** Anleitung.

## Installation

### ISO mounten und booten

Nachdem du die ISO erfolgreich ausgewählt und eingelegt hast, muss das System einmal neu gestartet werden, damit die Änderung übernommen wird und der Bootvorgang über die ISO startet. Klick dafür einfach auf den **Neustart**-Button. Der Neustart kann einen Moment dauern.

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### Betriebssystem über iLO installieren

Jetzt ist die Grundlage für die Installation deines Wunsch-Betriebssystems gelegt. Das System hat die ISO eingebunden und den Setup-Prozess gestartet. Öffne jetzt die **iLO-Administrationsoberfläche** deines Servers und klick direkt auf „Integrated Remote Console: **HTML 5**“, um den Bildschirm deines Servers zu sehen. Mehr Infos zur Bedienung der Konsole in der iLO-Oberfläche findest du in unserer [iLO](dedicated-ilo.md) Anleitung.

Die Installation des Betriebssystems läuft jetzt über die HTML-Konsole. Für die gängigsten Betriebssysteme haben wir auch passende Anleitungen am Start. Für die nächsten Schritte check am besten die passenden Guides:

- [Windows installieren](dedicated-windows.md)
- [Debian installieren](dedicated-linux-debian.md)
- [Ubuntu installieren](dedicated-linux-ubuntu.md)
- [FreeBSD installieren](dedicated-freebsd.md)
- [CentOS installieren](dedicated-centos.md)
- [Proxmox installieren](dedicated-proxmox.md)

<InlineVoucher />