---
id: dedicated-setup
title: "Dedicated Server: Ersteinrichtung"
description: Informationen über die Ersteinrichtung deines dedizierten Servers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Ersteinrichtung
---


## Einführung
Du bist noch neu in diesem Bereich und hast die Befürchtung, dass du der Einrichtung solch eines Dienstes nicht gewachsen bist oder bei der Einrichtung auf Schwierigkeiten stoßen könntest? Keine Sorge! Diese Anleitung und unser Einrichtungsassistent bringen dich einfach durch alle Schritte für die Erstinstallation deines ZAP Dedicated Servers. 

## Vorbereitung

### iLO aktivieren
Für die Ersteinrichtung muss die iLO Verwaltungsoberfläche zunächst aktiviert werden. Dieser Vorgang kann einen Augenblick beanspruchen. Für weitere Informationen und weitere Verwendung der iLO Verwaltungsoberfläche empfehlen wir einen Blick in die [iLO](dedicated-ilo.md) Anleitung zu werfen. 

![DE](https://screensaver01.zap-hosting.com/index.php/s/tmE6pKr43a4DE2T/preview)

Sobald die iLO aktiviert ist, sollte dir der iLO-Status als **Aktiv** angezeigt werden. Die iLO Session ist standardmäßig immer für drei Stunden aktiviert und muss im Anschluss erneut aktiviert werden, wenn darauf zurückgegriffen werden soll. Es kann nun mit der Auswahl der ISO fortgefahren werden. 

### ISO auswählen

Als Nächstes muss eine ISO ausgewählt werden, die für die Ersteinrichtung gemountet werden soll. Klicke dazu auf das Drop-down-Menü, wähle eine ISO-Datei aus und klicke auf den Button **Einlegen**.  


![DE](https://screensaver01.zap-hosting.com/index.php/s/pC7RPXm9Yr3pD4W/preview)


Wir stellen standardmäßig eine große Auswahl an ISO-Dateien für die gängigsten Betriebssysteme wie zum Beispiel Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux und Proxmox zur Verfügung. In der folgenden Tabelle findest du eine Übersicht über alle verfügbaren Betriebssysteme und dessen Versionen. 

| ISO (Betriebssystem) | Versionen                                              |
| -------------------- | ------------------------------------------------------ |
| Debian               | 12, 11, 10.9, 9.13                                     |
| Ubuntu               | 22.04.3, 22.04, 22.02, 18.04                           |
| FreeBSD              | 13.0, 12.2, 11.4                                       |
| Windows              | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS               | 7.9, 8.3                                               |
| ArchLinux            | 2023                                                   |
| Proxmox              | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1               |

Des Weiteren besteht ebenfalls die Möglichkeit eine eigene individuelle IOS hinzuzufügen und zu mounten. Für mehr Informationen zum mounten einer eigenen ISO Datei empfiehlt sich ein Blick in die **[Eigene ISO](dedicated-iso.md)** Anleitung zu werfen.




## Installation

### ISO mounten und booten

Nachdem die ISO-Datei erfolgreich ausgewählt und eingelegt wurde, muss das System nun einmal neu gestartet werden, damit das System die Änderung übernimmt und den Starvorgang über die ISO-Datei durchführt. Klicke dafür auf den **Neustarten** Button. Es kann einen Augenblick dauern, bis der Neustart abgeschlossen wurde. 

![DE](https://screensaver01.zap-hosting.com/index.php/s/G6m3nAkifF367bN/preview)

### iLO öffnen und Betriebssystem installieren

Die Grundlage für die Installation deines gewünschten Betriebssystems ist nun erfüllt. Das System hat die ISO gemountet und dementsprechend die Einrichtung eingeleitet. Öffne jetzt die **ILO Verwaltungsoberfläche** deines Servers und klicke auf der Startseite (Overview) direkt auf "Intergraded Remote Console: **HTML 5**", um auf den Bildschirm deines Servers zuzugreifen. Mehr Informationen zu der Verwaltung der Konsole in der iLO Verwaltungsoberfläche kannst du aus unserer [iLO](dedicated-ilo.md) Anleitung entnehmen. 

In der HTML-Konsole wird nun die Einrichtung des Betriebssystems fortgeführt. Auch dafür bieten wir für die gängigsten Betriebssysteme ebenfalls Anleitungen an. Mehr Informationen zu den weiteren notwendigen Schritten kannst du aus einer der zutreffenden Anleitungen entnehmen:  

- [Windows installieren](dedicated-windows.md)
- [Debian installieren](dedicated-linux-debian.md)
- [Ubuntu installieren](dedicated-linux-ubuntu.md)
- [FreeBSD installieren](dedicated-freebsd.md)
- [CentOS installieren](dedicated-centos.md)
- [Proxmox installieren](dedicated-proxmox.md)
