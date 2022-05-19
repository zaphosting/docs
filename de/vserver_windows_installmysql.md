---
id: vserver_windows_installmysql
title: vServer: MySQL Server auf Windows Server installieren
description: Informationen, wie du einen MySQL Server auf deinen Windows Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: MySQL Server Installieren
---

## MySQL Server unter Windows

Ein MySQL Server wird für verschiedenste Anwendunsgebiete benötigt und kann zum Beispiel wichtige Daten für einen Gameserver oder eine Website enthalten.
Im folgenden richtest du deinen eigenen MySQL Datenbankserver auf deinem Windows vServer oder Rootserver ein.


## Start der Installation

Zu Beginn verbindest du dich via Remotedesktopverbindung auf deinen vServer oder Rootserver und lädst dir dort die
aktuellste Version von MariaDB herunter, diese verwenden wir als unseren Datenbankserver: [MariaDB Download](https://native-network.net/downloads/download/895/).

Das heruntergeladene Archiv entpackst du mit WinRAR oder 7Zip und startest die darin befindliche Installationsdatei mit einem Doppelklick: 

![](https://user-images.githubusercontent.com/61839701/166200051-bfd13072-ba5e-4013-a927-a9c848897976.png)

Im Anschluss navigierst du durch das klicken auf **Next** durch den Installationsvorgang bis du zur Eingabe des root-Passwortes aufgefordert wirst:

![](https://user-images.githubusercontent.com/61839701/166200079-25b262be-a90b-45e6-8361-95956c204381.png)

Dort legst du nun das Hauptpasswort für den Zugang zu deinem Datenbankserver fest, achte bitte unbedingt darauf dass du hier ein sicheres Passwort verwendest und dass 
niemand außer dir dieses Passwort kennt!

> WICHTIG! Möchtest du von Außen via Navicat, HeidiSQL oder mithilfe eines anderen Tool auf die Datenbank zugreifen können muss zusätzlich der Punkt **Enable access from remote machins for root user** aktiviert werden! Aus Sicherheitsgründen ist dies jedoch generell nicht zu empfehlen.

Im Anschluss klickst du auch hier auf **Next** bis du zum Ende der Installation gelangst, dort klickst du dann abschließend auf **Install**:

![](https://user-images.githubusercontent.com/61839701/166200095-9d3ae478-42a3-4ef7-91f7-10adf549148a.png)

Dein Datenbankserver ist nun online und einsatzbereit!

## Freigabe des MySQL Ports für eine Verbindung von außen

Wenn du während der Installation den Zugriff von Außen (Enable access from remote machins for root user" aktiviert hast musst du zusätzlich noch den MySQL Port **3306** in der 
Windows-Firewall freigeben, dazu öffnest du diese und legst dort eine neue Regel an.
Dafür findest du eine seperate Anleitung:
[Firewall Ports freigeben](https://zap-hosting.com/guides/docs/de/vserver_windows_port)


Damit ist dein MySQL Server nun auch von außen erreichbar. 
