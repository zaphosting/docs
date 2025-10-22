---
id: redm-txadmin-features
title: "RedM: txAdmin Interface"
description: "Entdecke, wie du deinen RedM Gameserver effizient mit dem voll ausgestatteten txAdmin Webpanel verwaltest und überwachst → Jetzt mehr erfahren"
sidebar_label: txAdmin Interface
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

txAdmin ist ein komplett kostenlos nutzbares, voll ausgestattetes Webpanel zur Verwaltung & Überwachung deines RedM Gameservers. Es bietet eine Vielzahl an Features, die das Management eines RedM Servers super einfach machen. In dieser Anleitung stellen wir dir die txAdmin Oberfläche vor, heben die Funktionen hervor und erklären dir genau, was du damit alles anstellen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Navigation

Das Navigationsmenü beinhaltet folgende Punkte: **Players**, **History**, **Whitelist**, **Admins**, **Settings** und **System**. Jeder dieser Punkte wird im Folgenden genauer erklärt.

### Players

Der Bereich Players gibt dir einen Überblick über die Spielerstatistiken, inklusive der Gesamtanzahl aller verbundenen Spieler, der Spieler, die in den letzten 24 Stunden online waren, sowie der neuen Spieler in den letzten 24 Stunden und 7 Tagen. Darunter findest du eine Liste der aktuell verbundenen Spieler mit ihrer gesamten Spielzeit, dem Zeitpunkt der ersten Verbindung und der letzten Verbindung.

Klicke auf einen Spieler, um weitere Verwaltungsoptionen zu öffnen. Dort kannst du zusätzliche Infos, Notizen, die Historie (Banns/Warnings), IDs (Player Identifiers, Player Hardware IDs) und Bann-Optionen einsehen.

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### History

Im Bereich History findest du alle erteilten Warnungen und Banns der Spieler, inklusive detaillierter Infos zum Spieler, dem Grund sowie wer die Warnung oder den Bann ausgesprochen oder ausgeführt hat, inklusive Datum und Uhrzeit. Von hier aus kannst du auch Warnungen und Banns wieder aufheben.

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

Im Whitelist-Bereich kannst du die Whitelist-Funktion verwalten. Die Whitelist erlaubt es dir, den Zugang zum Server einzuschränken. Wenn diese Option in den txAdmin Einstellungen aktiviert ist, wird automatisch eine Whitelist-Anfrage erstellt, sobald sich ein neuer Spieler zum ersten Mal verbindet. Diese Anfragen kannst du dann hier verwalten.

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

Im Bereich Admins kannst du Administratoren festlegen und verwalten. Neue Admins fügst du über den **Add**-Button hinzu. Es öffnet sich ein Pop-up, in dem du den Account anlegst und die passenden Berechtigungen vergibst.

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Settings

Im Bereich Settings kannst du eine Vielzahl von Optionen sowohl für txAdmin als auch für den Server selbst konfigurieren. Aufgrund der vielen Einstellungsmöglichkeiten sind diese in folgende Kategorien unterteilt: **General**, **FXServer**, **Restarter**, **Player Manager**, **Discord** und **Game**. Diese werden im Folgenden genauer erklärt.

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### General

Unter General kannst du Einstellungen zum Servernamen, zur Chat-/Discord-Nachrichtensprache und zu Bann-Vorlagen vornehmen.

![](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)



#### FXServer

Im FXServer-Bereich kannst du den Server-Datenordner und den Pfad zur CFG-Datei einstellen sowie zusätzliche Argumente wie das Aktivieren von Gamemodes/DLCs, das Ein- oder Ausschalten von OneSync, Autostart und Quietmode konfigurieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bans

Im Bans-Bereich kannst du die Bann-Funktion verwalten. Hier legst du fest, ob Accounts aktiv auf ihren Bannstatus geprüft werden und welche Nachricht angezeigt wird, wenn die Verbindung wegen eines Banns abgelehnt wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

Im Whitelist-Bereich kannst du die Whitelist-Funktion verwalten. Hier definierst du, ob die Whitelist aktiviert oder deaktiviert ist und welche Nachricht angezeigt wird, wenn die Verbindung wegen fehlendem Whitelist-Eintrag abgelehnt wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)

#### Discord

Die Discord-Integration kannst du im Discord-Bereich aktivieren, damit Informationen automatisch an den verknüpften Discord-Server gesendet werden. Dafür müssen die nötigen Daten für den Discord-Bot konfiguriert werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Game

Unter Game kannst du das txAdmin Menü für die Ingame-Nutzung aktivieren, sodass Admins das Menü per /tx Befehl öffnen und verwalten können. Außerdem kannst du weitere Anpassungen für Layout, Button-Konfiguration zum Umschalten von Schaltern sowie Benachrichtigungen/Warnungen festlegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### System

Im Bereich Settings findest du einige wichtige allgemeine Optionen und Informationen. Diese sind in folgende Kategorien unterteilt: **Master Actions**, **Diagnostics**, **Console Log** und **Action Log**. Diese werden im Folgenden genauer erklärt.



#### Master Actions

Unter Master Actions findest du die Möglichkeit, deinen FXServer zurückzusetzen, ein Datenbank-Backup zu erstellen, die Datenbank zu bereinigen und festzulegen, wann Spieler von einer Whitelist entfernt werden sollen, wenn sie zu lange inaktiv waren.

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics

Der Bereich Diagnostics zeigt alle relevanten Informationen zur Umgebung, zur txAdmin Laufzeit, zum Diagnostics Report, FXServer /info.json und zu Prozessen an.

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Console Log

Das Console Log zeigt die Ausgaben von txAdmin im übergeordneten Terminal, inklusive der normalerweise versteckten Debug-Meldungen.

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Action Log

Das Action Log zeichnet alle Aktionen auf, die von txAdmin oder einem Admin durchgeführt wurden.

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Sidebar 

Das Sidebar-Menü beinhaltet folgende Punkte: **Dashboard**, **Live Console**, **Resources**, **Server Log** und **CFG Editor**. Diese werden im Folgenden genauer erklärt.



### Dashboard

Das Dashboard zeigt alle wichtigen allgemeinen Infos zum Server. Live-Daten zur Auslastung und Performance kannst du über die Statistiken überwachen. Der Serverstatus, ob gestartet, online oder gestoppt, ist in der Sidebar sichtbar. Von dort aus kannst du den Server starten, stoppen oder neu starten, alle Spieler mit einem Klick kicken und Ankündigungen senden. Außerdem lassen sich geplante Neustarts einrichten. Rechts in der Sidebar siehst du Infos zu den aktuell verbundenen Spielern.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console

Die Live Console liefert dir Echtzeit-Infos zu Serveraktivitäten. Hier kannst du Details zu Aktivitäten, Warnungen und Fehlermeldungen sehen. Sie ist ein wertvolles Tool zum Debuggen, indem du potenzielle Fehler analysierst.

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Resources
Im Bereich Resources findest du eine Übersicht aller Ressourcen, egal ob vorinstalliert via Template (Recipe) oder von dir später hinzugefügt. Du kannst sie bei Bedarf neu starten oder stoppen.

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Server Log

Das Server Log erlaubt dir, alle Aktivitäten auf dem Server zu überwachen. Zum Beispiel kannst du sehen, wann Spieler sich verbinden oder trennen, Chatnachrichten, Spielertode, Menüaktionen, ausgeführte Befehle und Systemereignisse.

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG Editor

Mit dem CFG Editor kannst du die `server.cfg` Konfigurationsdatei deines Servers verwalten und aktualisieren. Hier findest du alle wichtigen Konfigurationsbefehle, die die Einstellungen deines Servers steuern.

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />
