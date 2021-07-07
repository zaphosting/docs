---
id: avorion_becomeadmin
title: Avorion: Admin auf dem eigenen Server werden
description: Informationen, wie du Admin auf deinem Avorion-Server von ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden
---



## 🔑 Admin werden

Mit Administrator-Rechten kannst du direkt im Spiel Änderungen im Live-Zustand an deinem Server vornehmen, ohne diese in der Config vorzunehmen. Das Hinzufügen eines Admins erfolgt über die Einstellungsseite im Webinterface statt. Klicke dazu in der **Gameserver Verwaltung** auf **Einstellungen** und Scrolle dann runter zu den **Servereinstellungen**.

![img](https://screensaver01.zap-hosting.com/index.php/s/CYcXZfrYNMZg6Rm/preview)



Dort angelangt findest du ein Feld mit dem Namen **Admin SteamIDs**. Dort muss die SteamID64 eingetragen werden. Deine SteamID64 kannst du ausfindig machen, indem du zunächst dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle einen Rechtsklick machst. Dort klickst du dann auf **Steam URL kopieren**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/ZpbwyyqEqaAbSNw/preview)



Im Anschluss rufst du dann eine der folgenden Seiten auf:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/



Dadurch erhältst du dort sowohl allgemeine Informationen als auch die Steam ID von deinem Account. In dem Fall benötigen wir nur die SteamID64. Diese tragen wir dann entsprechend in das Feld ein. Das sieht dann folgendermaßen aus:



![img](https://screensaver01.zap-hosting.com/index.php/s/JimKjGzbxLfBNgz/preview)



Klicke auf **Speichern**. Nun kannst du nach einem Neustart im Spiel Admin Befehle ausführen. Klicke dazu auf Enter um den Chat zu öffnen und führe die Befehle dann mit einem / Symbol aus. 



## ⌨️ Admin Befehle

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
