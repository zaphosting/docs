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

![](https://screensaver01.zap-hosting.com/index.php/s/rZ5bspccMfJQSRJ/preview)

Im Anschluss navigierst du durch das klicken auf **Next** durch den Installationsvorgang bis du zur Eingabe des root-Passwortes aufgefordert wirst:

![](https://screensaver01.zap-hosting.com/index.php/s/Kk2N3ppEEzScnmC/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/ZPRYf5A452oQfFA/preview)

Dort legst du nun das Hauptpasswort für den Zugang zu deinem Datenbankserver fest, achte bitte unbedingt darauf dass du hier ein sicheres Passwort verwendest und dass 
niemand außer dir dieses Passwort kennt!

> WICHTIG! Möchtest du von Außen via Navicat, HeidiSQL oder mithilfe eines anderen Tool auf die Datenbank zugreifen können muss zusätzlich der Punkt **Enable access from remote machins for root user** aktiviert werden! Aus Sicherheitsgründen ist dies jedoch generell nicht zu empfehlen.

![](https://screensaver01.zap-hosting.com/index.php/s/5DckzRf9mwiSFyX/preview)

Im Anschluss klickst du auch hier auf **Next** bis du zum Ende der Installation gelangst, dort klickst du dann abschließend auf **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/f6z9jsEmzWNkpcQ/preview)

Dein Datenbankserver ist nun online und einsatzbereit!

## Freigabe des MySQL Ports für eine Verbindung von außen

Wenn du während der Installation den Zugriff von Außen (Enable access from remote machins for root user" aktiviert hast musst du zusätzlich noch den MySQL Port **3306** in der 
Windows-Firewall freigeben, dazu öffnest du diese und legst dort eine neue Regel an welche du wie folgt einstellst:

![](https://screensaver01.zap-hosting.com/index.php/s/sotFCqGBEZiQPwC/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/W6jDScQoMDqPPpW/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/6kLC8NsMPsDi36e/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/rFZFyyFG2nwiXJN/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/oNGe88fPmfHQZGN/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/TnTfLgmgPfRMq8L/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/KPSa7crTYYSGofa/preview)

Damit ist dein MySQL Server nun auch von außen erreichbar. 
