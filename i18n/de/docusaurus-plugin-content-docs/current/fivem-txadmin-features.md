---
id: fivem-txadmin-features
title: "FiveM: txAdmin Interface"
description: Übersicht zu den Einstellungsmöglichkeiten des TxAdmin Interfaces für FiveM Gameserver von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: txAdmin Interface
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

txAdmin ist ein vollständig kostenloses, funktionsreiches Webpanel zur Verwaltung und Überwachung deines FiveM-Servers. Es bietet eine breite Palette von Funktionen, die darauf ausgelegt sind, die Verwaltung eines FiveM-Servers so einfach wie möglich zu gestalten. Im Folgenden stellen wir dir die txAdmin-Oberfläche vor, heben ihre Funktionen hervor und erklären genau, was du damit machen kannst.

![img](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Navigation

Die Navigation umfasst die folgenden Elemente: **Spieler**, **Historie**, **Whitelist**, **Admins**, **Einstellungen** und **System**. Jeder dieser Punkte wird im Folgenden näher erläutert.

### Players

Der Bereich Players bietet dir einen allgemeinen Überblick über die Spielerstatistiken, einschließlich der Gesamtzahl der verbundenen Spieler, der Spieler, die in den letzten 24 Stunden verbunden waren, und der neuen Spieler, die in den letzten 24 Stunden und 7 Tagen verbunden waren. Darunter findest du eine Liste der aktuell verbundenen Spieler mit ihrer gesamten Spielzeit, der ersten Verbindungszeit und der letzten Verbindungszeit.

Klicke auf einen Spieler, um weitere Verwaltungsoptionen zu öffnen. Hier kannst du weitere Informationen, Notizen, Verlauf (Bans/Warnungen), IDs (Player Identifiers, Player Hardware IDs) und die Bannoptionen einsehen.

![img](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### History

Im Bereich History sind alle Warnungen und Bans von Spielern aufgelistet, einschließlich detaillierter Informationen über den Spieler, den Grund sowie denjenigen, der die Warnung oder den Ban ausgesprochen oder ausgeführt hat, einschließlich Datum und Uhrzeit. Dort kannst du auch Warnungen und Bans widerrufen.

![img](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

Im Bereich Whitelist hast du die Möglichkeit, die Whitelist-Funktion zu verwalten. Die Whitelist ermöglicht es dir, den Zugang zum Server zu beschränken. Wenn diese Option in den txAdmin-Einstellungen aktiviert ist, wird eine Whitelist-Anfrage automatisch erstellt, sobald ein neuer Spieler sich zum ersten Mal verbindet. Diese Anfragen kannst du dann entsprechend in diesem Bereich verwalten.

![img](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

Im Bereich Admins können Administratoren festgelegt und verwaltet werden. Neue Administratoren können durch Klicken auf den Button **Add** hinzugefügt werden. Daraufhin öffnet sich ein Pop-up-Fenster, in dem du das Konto erstellen und die entsprechenden Berechtigungen festlegen kannst.

![img](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Settings

Im Bereich Settings können zahlreiche Einstellungen für txAdmin und den Server selbst vorgenommen werden. Aufgrund der großen Menge an Einstellungsmöglichkeiten wurden diese in die Bereiche **Global**, **FXServer**, **Restarter**, **Player Manager**, **Discord** und **Game** unterteilt, auf die im Folgenden genauer eingegangen wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/PBE9sSfTXgsejqj/download)

#### Global

Einstellungen für den Servernamen, die Sprache für Chat-/Discord-Nachrichten und Bannvorlagen können im Bereich Global festgelegt werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)

#### FXServer

Im Bereich FXServer können Einstellungen für den Serverdaten-Ordner und den CFG-Dateipfad vorgenommen werden, sowie zusätzliche Argumente wie Gamemodes/DLC, das Aktivieren/Deaktivieren von OneSync, Autostart und Quietmode.

![img](https://screensaver01.zap-hosting.com/index.php/s/Gxd2LTaYCwzNN2R/preview)



#### Restarter

Geplante Neustarts können im Bereich Restarter definiert werden. Du kannst außerdem festlegen, wie lange nach einem Neustart gewartet werden soll, bis die Ressourcen gestartet werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/qP27oGX8ix6gNQc/preview)



#### Player Manager

Einstellungen für den Whitelist-Modus, Whitelist-Benachrichtigungen, Whitelist-Rollen sowie Bannüberprüfungen können über den Player Manager vorgenommen werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/NK9QgdAnmoKE8Q3/preview)

#### Discord

Die Discord-Integration kann im Bereich Discord aktiviert werden, sodass Informationen automatisch an den verknüpften Discord-Server übertragen werden. Dazu müssen die erforderlichen Informationen für den Discord-Bot hinterlegt werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/4FCaKgsDFH5k8qK/preview)

#### Game

Im Bereich Game kannst du das txAdmin-Menü für das Spiel aktivieren, wodurch Admins das Menü über den Befehl **/tx** aufrufen und verwalten können. Weitere Anpassungen für das Layout, die Tastenbelegung zum Umschalten und die Benachrichtigungen/Warnungen können ebenfalls festgelegt werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/X5xtGGeoGq5W4Ct/preview)

### System

Im Bereich Einstellungen kannst du einige wichtige allgemeine Optionen und Informationen einsehen. Diese sind in folgenden Abschnitte unterteilt: **Master Actions**, **Diagnostics**, **Console Log** and **Action Log**. Jeder dieser Bereiche wird im Folgenden näher erläutert.



#### Master Actions

In den Master Actions findest du die Option, deinen FXServer zurückzusetzen, ein Datenbank-Backup zu erstellen, die Datenbank zu bereinigen und festzulegen, wann Spieler von einer Whitelist entfernt werden sollen, wenn diese zu lange inaktiv gewesen sind.  

![img](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics

Der Bereich Diagnostics zeigt alle relevanten Informationen zur Umgebung, zur txAdmin Runtime, zum Diagnosereport, zur FXServer /info.json und zu den Prozessen an.

![img](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Console Log

Das Console Log zeigt die Ausgaben von txAdmin im übergeordneten Terminal an, einschließlich der normalerweise ausgeblendeten Debug-Nachrichten.

![img](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Action Log

Das Action Log zeichnet alle Aktionen auf, die von txAdmin oder einem Administrator durchgeführt wurden.

![img](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Sidebar 

Die Seitenleiste enthält die folgenden Elemente: **Dashboard**, **Live Console**, **Resources**, **Server Log** and **CFG Editor**. Jeder dieser Punkte wird im Folgenden näher erläutert.



### Dashboard

Das Dashboard zeigt alle wichtigen allgemeinen Informationen über den Server an. Live-Daten zur Auslastung und Leistung können über die Statistiken eingesehen werden. Der Serverstatus, ob gestartet, online oder gestoppt, ist in der Seitenleiste sichtbar. Dort kannst du den Server auch starten, stoppen oder neu starten, alle Spieler mit einem Klick kicken und Ankündigungen senden. Außerdem können dort geplante Neustarts erstellt werden. Auf der rechten Seite der Seitenleiste kannst du Informationen über die derzeit verbundenen Spieler einsehen.

![img](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console

Die Live-Konsole bietet dir Echtzeitinformationen über die Serveraktivitäten. Hier kannst du Details zu Aktivitäten, Warnungen und Fehlermeldungen einsehen. Sie dient als wertvolle Referenzstelle zur Fehlerbehebung, indem du mögliche Fehlermeldungen analysieren kannst.

![img](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Resources
Im Bereich Ressourcen findest du eine Übersicht über alle Ressourcen, egal ob sie über eine Template (Rezept) vorinstalliert sind oder später von dir hinzugefügt wurden. Darüber hinaus kannst du sie bei Bedarf neu starten oder stoppen.

![img](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Server Log

Die Server Log ermöglicht es dir, alle Aktivitäten auf dem Server zu überwachen. Du kannst z. B. Details einsehen, wenn Spieler sich verbinden oder die Verbindung trennen, Chat-Nachrichten, Spielabbrüche, Menüaktionen, ausgeführte Befehle und Systemereignisse.

![img](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG Editor

Du kannst den CFG-Editor verwenden, um die Konfigurationsdatei `server.cfg` deines Servers zu verwalten und zu aktualisieren. Hier finden Sie alle wichtigen Konfigurationsbefehle, die die Einstellungen Ihres Servers steuern.

![img](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)

