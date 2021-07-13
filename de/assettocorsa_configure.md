---
id: assettocorsa_configure
title: Assetto Corsa: Server Konfigurieren
description: Informationen zu den Konfigurationsoptionen deines Assetto Corsa-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Server Konfigurieren
---

## Mit FTP verbinden

Bevor wir den Server Konfigurieren können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/8B7xJaAGP7X97g9/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/SAW5bnPjCpGDE8P/preview)


## Vorbereitung

Zunächst Öffnen wir den Assetto Corsa Ordner, diesen können wir öffnen, indem wir Steam Öffnen und "Assetto Corsa" in der Spieleliste Rechtsklicken, dort wählen wir dann "Eigenschaften"

![](https://screensaver01.zap-hosting.com/index.php/s/eC9ny8CTa5PwAEN/preview)

Nun öffnen wir "Lokale Dateien" und Öffnen die Lokalen Spieldateien:

![](https://screensaver01.zap-hosting.com/index.php/s/NM5QR9PeJzjSiY8/preview)

Nun öffnen wir den "Server" Ordner, dort befindet sich eine "acServerManager" Datei, diese öffnen wir:

![](https://screensaver01.zap-hosting.com/index.php/s/onqBCHqaezK2csf/preview)


## Map Einstellen

Wir sind nun im "AC Server Manager" Interface, damit können wir Serverconfigs erstellen und verwalten, zunächst erstellen wir eine neue Config

![](https://screensaver01.zap-hosting.com/index.php/s/gDXC8MQeiGgZ7Rq/preview)

Nun können wir unseren Server konfigurieren, in unseren Fall wollen wir nur die Strecken&Autos editieren, dazu öffnen wir das "Tracks" Tab

![](https://screensaver01.zap-hosting.com/index.php/s/ePC7TwT4nEkJ88P/preview)

Hier können wir nun auf unsere bevorzugte Map klicken, oben können dann noch die Menge der Autos auf der Strecke eingestellt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/oizKLpW3wWfaw6g/preview)

> Gehe sicher das du nicht mehr Autos, als Slots auf deinem Server angibst, ansonsten wird der Server nicht starten

## Autos Einstellen

Nun wechseln wir in das Tab "Cars / Entry List", hier können wir nun neue Autos hinzufügen:

![](https://screensaver01.zap-hosting.com/index.php/s/ExfRpRW9LbjRNkP/preview)

Um Autos zu aktivieren, muss links das Häkchen gesetzt werden

![](https://screensaver01.zap-hosting.com/index.php/s/7tZqtpfMKLz7oiR/preview)

In der Mitte erscheinen nun Autos, welche auf dem Grid platziert werden können, hier können wir nun Autos in den Farben wählen, welche im Grid sein sollten:

![](https://screensaver01.zap-hosting.com/index.php/s/D67miafjkCAQTkZ/preview)

> Um mehrere Autos zu wählen, können mehrere haken gesetzt werden, um die verschiedenen Autos in der Mitte hinzugefügt werden.

> Beachte das alle Autoslots befüllt werden und nicht mehr, als die Menge der verfügbaren Slots gesetzt wird
> ![](https://screensaver01.zap-hosting.com/index.php/s/rGKR2zNwgEagYMa/preview)

## Config Hochladen

Nun können wir die Config über den "Save" Button Abspeichern und über den "Export" Button exportieren:

![](https://screensaver01.zap-hosting.com/index.php/s/ixFdiQHfA9q6ca4/preview)

Hier wählen wir nun einen freien Ordner, dort werden die Config-Daten gespeichert.

Nun kann der AC Server Manager geschlossen werden, wir öffnen nun den Ordner, in welche die Configs exportiert wurden.

![](https://screensaver01.zap-hosting.com/index.php/s/trBYPXFQT6AcxWL/preview)

Diese Configs können nun über Drag&Drop in den "cfg" Ordner des Servers hochgeladen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/9yFE96xgBQwHgsg/preview)

Der Server kann nun mit der neuen Config gestartet werden.
