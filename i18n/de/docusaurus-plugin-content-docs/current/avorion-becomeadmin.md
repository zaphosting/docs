---
id: avorion-becomeadmin
title: "Avorion: Werde Admin auf deinem eigenen Server"
description: "Entdecke, wie du Administratorrechte vergibst, um volle Kontrolle über deinen Server zu haben und Spiel-Funktionen effektiv zu managen → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du durchführen musst, um Administratorrechte für deinen Server zu vergeben, werden im Folgenden beschrieben.  
<InlineVoucher />

## Konfiguration

Einen Admin fügst du über die Einstellungsseite im Webinterface hinzu. Klicke in der **Gameserver-Verwaltung** auf **Einstellungen** und scrolle runter zu den **Servereinstellungen**.

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)



Dort findest du ein Feld namens **Admin SteamIDs**. Dort musst du deine SteamID64 eintragen. Deine SteamID64 findest du, indem du zuerst dein Steam-Profil aufrufst und dann irgendwo mit der rechten Maustaste klickst. Anschließend klickst du auf **Steam-URL kopieren**. 



![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)



Öffne danach eine der folgenden Seiten und füge dort die URL deines Profils ein: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Dort bekommst du allgemeine Infos sowie die Steam ID deines Accounts angezeigt. Wir brauchen hier nur die SteamID64. Diese trägst du dann entsprechend in das Feld ein. Das sollte dann so aussehen:



![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)



Klicke auf **Speichern**. Sobald du den Server neu gestartet hast, kannst du Admin-Befehle im Spiel ausführen. Drücke dazu Enter, um den Chat zu öffnen, und führe die Befehle mit einem /-Symbol aus. 



## Admin-Befehle

Hier findest du eine Übersicht der gängigen Befehle, die du als Admin ausführen kannst. 



**Allgemeine Befehle**

| Befehl                  | Beschreibung                                               |
| :---------------------- | :--------------------------------------------------------- |
| /help                   | zeigt die Hilfenachricht                                   |
| /w [Spielername]        | sendet eine private Nachricht an einen Spieler            |
| /save                   | speichert den aktuellen Zustand                            |
| /stop                   | stoppt den Server                                         |
| /seed                   | Seed des Servers                                          |
| /version                | zeigt die aktuelle Server-Version                          |
| /suicide                | zerstört dein aktuelles Schiff                             |
| /player                 | zeigt die Anzahl der Spieler an                            |
| /status                 | zeigt Infos zum aktuellen Serverstatus                     |
| /admin -a [Spielername] | fügt einen Spieler als Admin hinzu                         |
| /admin -r [Spielername] | entfernt einen Spieler als Admin                           |
| /kick [Spielername]     | kickt einen Spieler vom Server                             |
| /ban [Spielername]      | fügt den Spieler zur Blacklist hinzu                       |
| /unban [Spielername]    | entfernt den Spieler von der Blacklist                     |
| /banip [Spieler-IP]     | fügt die IP des Spielers zur Blacklist hinzu              |
| /unbanip [Spieler-IP]   | entfernt die IP des Spielers von der Blacklist            |
| /blacklist              | zeigt die Blacklist-Optionen                               |
| /whitelist              | zeigt die Whitelist-Optionen                               |



**Cheat-Befehle (im Spiel):**

| Befehl                                  | Beschreibung                                           |
| :------------------------------------- | :---------------------------------------------------- |
| /give [Spielername] [Anzahl] credits   | gibt dem Spieler die gewünschte Anzahl an Credits     |
| /give [Spielername] [Anzahl] [Erzname] | gibt dem Spieler die gewünschte Menge des ausgewählten Erzes |



**Server-Befehle (Konsole):**

| Befehl                        | Beschreibung                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| /max-logs [Wert]              | Anzahl der Logdateien, die behalten werden                   |
| /difficulty [Wert]            | Schwierigkeitsgrad des Servers, erlaubte Werte: -3, -2, -1, 0, 1, 2, 3 Standard: 0 |
| /collision-damage [Wert]      | Schaden bei Kollisionen, von 0 bis 1. 0: kein Schaden, 1: voller Schaden. Standard: 1 |
| /exit-on-last-admin-logout    | Server herunterfahren, wenn sich der letzte Admin ausloggt   |
| /public [Wert]                | gibt an, ob der Server anderen Spielern beitreten erlaubt    |
| /infinite-resources [Wert]    | unendliche Ressourcen für alle Spieler aktivieren            |
| /listed [Wert]                | gibt an, ob der Server in öffentlichen Serverlisten angezeigt wird |
| /max-players [Wert]           | maximale Anzahl an Spielern online Standard: 10              |
| /save-interval [Wert]         | Zeitintervall zwischen Speicherungen Standard: 300           |
| /same-start-sector arg        | gibt an, ob alle Spieler im gleichen Sektor starten sollen   |
| /server-name [Wert]           | Servername, wird bei Abfragen angezeigt                        |
| /use-steam-networking [Wert] | Steam Networking und Authentifizierung für Nutzer verwenden   |
| /galaxy-name [Wert]           | Galaxiename, wird an den Datenpfad angehängt, finaler Pfad ist [Datenpfad]/[Galaxiename] |
| /datapath [Wert]              | Ordner, in dem die Galaxien gespeichert werden, wird vor den Galaxienamen gesetzt |
| /admin [Wert]                 | Steam-ID(s) der Administrator(en) des Servers                 |


## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />