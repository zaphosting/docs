---
id: vserver-windows-installmysql
title: "vServer: Installation von MySQL Server"
description: Informationen, wie du einen MySQL Server auf deinen Windows Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: MySQL Server Installieren
---

## Einführung

Ein MySQL Server wird für verschiedenste Anwendungsgebiete benötigt und kann zum Beispiel wichtige Daten für einen Gameserver oder eine Website enthalten.
Im Folgenden richtest du deinen eigenen MySQL Datenbankserver auf deinem Windows vServer oder Rootserver ein.


## Installation

Zu Beginn verbindest du dich via Remotedesktopverbindung auf deinen vServer oder Rootserver und lädst dir dort die
aktuellste Version von MariaDB herunter, diese verwenden wir als unseren Datenbankserver: [MariaDB Download](https://native-network.net/downloads/download/895/).

Das heruntergeladene Archiv entpackst du mit WinRAR oder 7Zip und startest die darin befindliche Installationsdatei mit einem Doppelklick: 

![](https://user-images.githubusercontent.com/61839701/166200051-bfd13072-ba5e-4013-a927-a9c848897976.png)

Im Anschluss navigierst du durch das Klicken auf **Next** durch den Installationsvorgang, bis du zur Eingabe des root Passwort aufgefordert wirst:

![](https://user-images.githubusercontent.com/61839701/166200079-25b262be-a90b-45e6-8361-95956c204381.png)

Dort legst du nun das Hauptpasswort für den Zugang zu deinem Datenbankserver fest, achte bitte unbedingt darauf, dass du hier ein sicheres Passwort verwendest und dass niemand außer dir dieses Passwort kennt!

:::info
WICHTIG! Möchtest du von Außen via Navicat, HeidiSQL oder mithilfe eines anderen Tool auf die Datenbank zugreifen können muss zusätzlich der Punkt **Enable access from remote machins for root user** aktiviert werden! Aus Sicherheitsgründen ist dies jedoch generell nicht zu empfehlen.
:::

Im Anschluss klickst du auch hier auf **Next** bis du zum Ende der Installation gelangst, dort klickst du dann abschließend auf **Install**:

![](https://user-images.githubusercontent.com/61839701/166200095-9d3ae478-42a3-4ef7-91f7-10adf549148a.png)

Dein Datenbankserver ist jetzt online und einsatzbereit!

## Externen Zugriff konfigurieren

Wenn du während der Installation den Zugriff von Außen (Enable access from remote machins for root user" aktiviert hast, musst du zusätzlich noch den MySQL Port **3306** in der Windows-Firewall freigeben, dazu öffnest du diese und legst dort eine neue Regel an.
Dafür findest du eine seperate Anleitung: [Firewall Ports freigeben](vserver-windows-port.md)


Damit ist dein MySQL Server nun auch von außen erreichbar. 
