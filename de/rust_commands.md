---
id: rust_commands
title: Rust: Admin Befehle
description: Informationen zu Admin Befehle für Rust von ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin Befehle
---

Rust verfügt über eine Vielzahl verschiedener Befehle, die von Serverbesitzern und Spielern verwendet werden können. Auf dieser Seite fassen wir die nützlichsten und beliebtesten zusammen, die für Servereinstellungen, Spielerverwaltung und zur Kontrolle von Spielern verwendet werden.

> Einige Befehle erfordern die Verwendung der Steam64-ID eines Spielers. Verwenden Sie die kleine Anleitung unten, um zu verstehen, wie man die Steam-ID eines Spielers erhält.

## Deine Steam ID erhalten
Erstens, verwenden Sie ein Tool wie das [Steam ID Finder](https://steamidfinder.com/) um Ihre Steam64 ID.

Hier geben Sie Ihre Steam URL:

![image](https://user-images.githubusercontent.com/13604413/159179966-154bb929-edcc-42aa-965e-cb747bb463f8.png)

Dann drücken Sie `Find Steam ID`. Jetzt sollten wir unser Steam-Profil sehen können, hier kopieren wir unsere "Steam64ID (Dec)".

Und das war's, jetzt hast du die Steam64 ID und kannst sie für die Befehle verwenden, die eine Steam64 ID below.

## Befehl Kategorien

Verwenden Sie die Registerkarten unten, um zwischen den einzelnen Kategorien zu wechseln. Die Tabellen bestehen aus dem Befehl selbst, den akzeptierten Werten für den Befehl (falls zutreffend) und einer Beschreibung, um das Verständnis zu erleichtern.

> Jeder Befehl, der auf dieser Seite erwähnt wird, ist für Vanilla Rust.

<!--DOCUSAURUS_CODE_TABS-->

<!--Server-Einstellungen-->

| Command Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | Bei true wird jede Chat-Nachricht allen Spielern angezeigt         | 
| server.stop      | -          | Stoppt den Server         | 
| server.save      | -          | Speichert den Server         | 
| server.saveinterval "value"      | Integer (default 60)          | Legt das Intervall für die automatische Speicherung für Ihren Server fest (in Sekunden)         | 
| server.secure      | true/false          | Wenn diese Option aktiviert ist, verweigert Easy Anti Cheat (EAC) unregistrierten oder gesperrten Spielern die Verbindung, bevor sie sich verbinden.         | 
| server.seed "value"     | Integer (e.g. 123456)          | Setzen Sie den Seed-Wert für die Serverwelt         | 
| server.stability      | true/false          | Wenn echte Strukturstabilität für Gebäude aktiviert ist         | 
| server.tickrate "rate"      | Integer (default 30)          | Legt die Tickrate für Ihren Server fest         | 
| server.writecfg      | -          | Speichert Konfigurationsänderungen, die zuvor durch andere Serverbefehle festgelegt wurden         | 
| chat.serverlog      | true/false          | Bei true wird der Chat immer in der Server-Konsole protokolliert         | 
| commands.echo "text"      | String (e.g. "Hello World!")          | Druckt die angegebene Nachricht auf der Serverkonsole         | 
| global.say "message"      | String (e.g. "Welcome!")          | Sendet eine Nachricht an alle Spieler des Servers         | 
| env.time      | Integer (e.g. 16)          | Setzt die Weltzeit im Spiel auf den angegebenen Wert (in Stunden)         | 
| server.events      | -          | Bei "true" werden Serverereignisse wie Airdrops aktiviert.         | 
| commands.find "command"      | String (e.g. "quit")          | Suche nach einem Befehl oder mit "." werden alle verfügbaren Befehle aufgelistet         | 
| global.quit      | -          | Speichert den Server und hält ihn dann an         | 
| global.init      | -          | Konfigurationsdateien laden         | 

<!--Spieler-Verwaltung-->

| Command Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| global.ban "playername" "reason"      | String (e.g. "Jacob"), String (e.g. "Was naughty!")          | Verbannt einen Benutzer vom Server (mit optionalem Grund)         | 
| global.banid "steam64"      | Integer          | Bannt einen Benutzer über seine Steam 64 ID         | 
| global.banlistex      | -          | Gibt eine Liste der gesperrten Benutzer mit ihrem Spielernamen und dem Sperrgrund zurück         | 
| global.banlist      | -          | Gibt eine Liste der gesperrten Spieler im Chat zurück         | 
| global.unban "steam64"      | Integer          | Hebt die Sperrung eines Benutzers über seine Steam 64 ID auf         | 
| global.kickall      | -          | Schmeißt alle Spieler vom Server         | 
| global.kick "steam64 / playername" "reason"      | Integer/String (e.g. "Jacob"), String (e.g. "Was naughty!")         | Schmeißt einen Benutzer über seine Steam 64 ID oder seinen Spielernamen vom Server (mit optionalem Grund)         | 
| global.ownerid "steam64 / playername"      | Integer/String (e.g. "Jacob")          | Setzt den angegebenen Spieler über seine Steam 64 ID oder seinen Spielernamen als Server-Administartor (Auth-Level 2)         | 
| global.removeowner "steam64"      | Integer         | Entfernt die Administartor-Rechte des Benutzers über die angegebene Steam 64 ID         | 
| global.moderatorid "steam64 / playername"      | Integer/String (e.g. "Jacob")          | Setzt den angegebenen Spieler als Server-Moderator durch seine Steam 64 ID oder seinen Spielernamen (Auth-Level 1)         | 
| global.removemoderator "steam64"      | Integer          | Entfernt die Moderatorenrechte des Benutzers über die angegebene Steam 64 ID         | 
| global.listid      | -          | Gibt eine Liste von Benutzern zurück, die über Steam 64 ID gebannt wurden          | 

<!--Spieler-Steuerungen-->

| Command Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| global.kill      | -          | Töte deinen eigenen Spieler         | 
| global.quit      | -          | Speichert und verlässt das Spiel         | 
| global.respawn      | -          | Respawnt deinen Spieler         | 
| global.respawn_sleepingbag      | -          | Bringt den Spieler in den Schlafsack zurück         | 
| player.sleep      | -          | Zwingen Sie Ihren Player zum Einschlafen         | 
| player.wakeup      | -          | Aufwachen des Spielers erzwingen         | 
| commands.find "command"      | String (e.g. "quit")          | Sucht nach einem Befehl, der für den Spieler verfügbar ist
| chat.say "text"     | String (e.g. "Hello World!")          | Sendet eine Nachricht an alle Spieler des Servers         | 
| inventory.give "itemID" "amount"     | Integer (itemID), Integer (e.g. 5)          | Fügt einen Gegenstand in Ihr Inventar ein         | 
| inventory.giveto "playername" "itemID" "amount"      | String (e.g. "Jacob"), Integer (itemID), Integer (e.g. 5)          | Gibt einen Gegenstand an das Inventar des angegebenen Benutzers         | 

<!--END_DOCUSAURUS_CODE_TABS-->