---
id: avorion-becomeadmin
title: "Avorion: Admin auf dem eigenen Server werden"
description: Informationen, wie du Admin auf deinem Avorion-Server von ZAP-Hosting wirst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Konfiguration
Das Hinzufügen eines Admins erfolgt über die Einstellungsseite im Webinterface statt. Klicke dazu in der **Gameserver Verwaltung** auf **Einstellungen** und scrolle dann runter zu den **Servereinstellungen**.

![](https://screensaver01.zap-hosting.com/index.php/s/aXAKkxfCq9JtjPC/preview)



Dort angelangt findest du ein Feld mit dem Namen **Admin SteamIDs**. Dort muss die SteamID64 eingetragen werden. Deine SteamID64 kannst du ausfindig machen, indem du zunächst dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle einen Rechtsklick machst. Dort klickst du dann auf **Steam URL kopieren**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Si4L2xBf3NJ4nqz/preview)



Im Anschluss rufst du dann eine der folgenden Seiten auf:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/



Dadurch erhältst du dort sowohl allgemeine Informationen als auch die Steam ID von deinem Account. In dem Fall benötigen wir nur die SteamID64. Diese tragen wir dann entsprechend in das Feld ein. Das sieht dann folgendermaßen aus:



![](https://screensaver01.zap-hosting.com/index.php/s/2BL9zsXy2yBZN4f/preview)



Klicke auf **Speichern**. Nun kannst du nach einem Neustart im Spiel Admin Befehle ausführen. Klicke dazu auf Enter, um den Chat zu öffnen und führe die Befehle dann mit einem / Symbol aus. 



## Admin Befehle

Hier findest du eine Übersicht von gängigen Befehlen, die du als Admin ausführen kannst. 



**Allgemeine Befehle** 

| Befehl                  | Beschreibung                                                |
| :---------------------- | :---------------------------------------------------------- |
| /help                   | Hilfemeldung anzeigen                                       |
| /w [player name]        | Eine private Nachricht an einen Spieler senden              |
| /save                   | Speichert den aktuellen Datenzustand                        |
| /stop                   | Stoppt den Server                                           |
| /seed                   | Seed des Servers                                            |
| /version                | Zeigt die aktuelle Serverversion an                         |
| /suicide                | Zerstört dein aktuelles Schiff                              |
| /player                 | Gibt die Anzahl der Spieler aus                             |
| /status                 | Liefert Informationen über den aktuellen Status des Servers |
| /admin -a [player name] | Einen Spieler als Administrator hinzufügen                  |
| /admin -r [player name] | Einen Spieler als Administrator entfernen                   |
| /kick [player name]     | Kickt einen Spieler vom Server                              |
| /ban [player name]      | Bannt einen Spieler vom Server                              |
| /unban [player name]    | Entfernt den Spieler von der Bannliste                      |
| /banip [player ip]      | Bannt einen Spieler vom Server                              |
| /unbanip [player ip]    | Entfernt den Spieler von der Bannliste                      |
| /blacklist              | Zeigt die Blacklist-Optionen an                             |
| /whitelist              | Zeigt die Whitelist-Optionen an                             |



**Cheat Befehle (Im Spiel):**

| Befehl                                 | Beschreibung                                              |
| :------------------------------------- | :-------------------------------------------------------- |
| /give [player name] [amout] credits    | Gibt dem Spieler die gewünschte Anzahl an Credits         |
| /give [player name] [amout] [ore name] | Gibt dem Spieler die gewünschte Menge des gewählten Erzes |



**Server Befehle (Konsole):**

| Befehl                        | Beschreibung                                                 |
| :---------------------------- | :----------------------------------------------------------- |
| /max-logs [value]             | Menge der zu behaltenden Log-Dateien                         |
| /difficulty [value]           | Schwierigkeit des Servers, erlaubte Werte sind: -3, -2, -1, 0, 1, 2, 3 Standard: 0 |
| /collision-damage [value]     | Höhe des Schadens, der einem Objekt bei einer Kollision zugefügt wird, von 0 bis 1. 0: kein Schaden, 1: voller Schaden. Standard: 1 |
| /exit-on-last-admin-logout    | Herunterfahren, wenn sich der letzte Administrator ausloggt. |
| /public [value]               | Gibt an, ob der Server anderen Spielern den Beitritt erlauben soll |
| /infinite-resources [value]   | Unendliche Ressourcen für alle Spieler ermöglichen           |
| /listed [value]               | Gibt an, ob der Server in öffentlichen Serverlisten angezeigt werden soll |
| /save-interval [value]        | Zeitabstand zwischen den Speichervorgängen -Standard: 300    |
| /same-start-sector arg        | Gibt an, ob alle Spieler im gleichen Sektor starten sollen   |
| /server-name [value]          | Setzen des Servername                                        |
| /use-steam-networking [value] | Verwendung von Steam-Netzwerken und Authentifizierung für Benutzer |
| /galaxy-name [value]          | Galaxienname, angehängt an Datenpfad, endgültiger Pfad wird [Datenpfad]/[Galaxienname] sein |
| /datapath [value]             | Ordner, in dem die Galaxien gespeichert werden sollen, wird dem Galaxiennamen vorangestellt |
| /admin [value]                | Steam-ID(s) des/der Administrator(en) des Servers            |
