---
id: rust-commands
title: "Rust: Admin Befehle"
description: Informationen zu Admin Befehle für Rust von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Admin Befehle
---

Rust verfügt über eine Vielzahl verschiedener Befehle, die von Serverbesitzern und Spielern verwendet werden können. Auf dieser Seite fassen wir die nützlichsten und beliebtesten zusammen, die für Servereinstellungen, Spielerverwaltung und zur Kontrolle von Spielern verwendet werden.

:::info
Einige Befehle erfordern die Verwendung der Steam64-ID eines Spielers. Verwende die kleine Anleitung unten, um zu verstehen, wie man die Steam-ID eines Spielers erhält.
:::

## Deine Steam ID erhalten
Erstens, verwende ein Tool wie das [Steam ID Finder](https://steamidfinder.com/), um deine Steam64 ID zu erhalten. Hier gibst du deine Steam URL ein:

![image](https://user-images.githubusercontent.com/13604413/159179966-154bb929-edcc-42aa-965e-cb747bb463f8.png)

Dann drückst du `Find Steam ID`. Jetzt solltest du dein Steam-Profil sehen können, hier kopierst du deine "Steam64ID (Dec)".

Und das war's, jetzt hast du die Steam64 ID und kannst sie für die Befehle verwenden, die eine Steam64 ID benötigen.

## Befehl Kategorien

Verwende die Registerkarten unten, um zwischen den einzelnen Kategorien zu wechseln. Die Tabellen bestehen aus dem Befehl selbst, den akzeptierten Werten für den Befehl (falls zutreffend) und einer Beschreibung, um das Verständnis zu erleichtern.

:::info
Jeder Befehl, der auf dieser Seite erwähnt wird, ist für Vanilla Rust.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Server-Einstellungen" label="Server-Einstellungen">

| Befehl Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | Bei true wird jede Chat-Nachricht allen Spielern angezeigt         | 
| server.stop      | -          | Stoppt den Server         | 
| server.save      | -          | Speichert den Server         | 
| server.saveinterval "value"      | Integer (Standard 60)          | Lege das Intervall für die automatische Speicherung für deinen Server fest (in Sekunden)         | 
| server.secure      | true/false          | Wenn diese Option aktiviert ist, verweigert Easy Anti Cheat (EAC) unregistrierten oder gesperrten Spielern die Verbindung, bevor sie sich verbinden.         | 
| server.seed "value"     | Integer (z. B. 123456)          | Setze den Seed-Wert für die Serverwelt         | 
| server.stability      | true/false          | Wenn echte Strukturstabilität für Gebäude aktiviert ist         | 
| server.tickrate "rate"      | Integer (Standard 30)          | Lege die Tickrate für deinen Server fest         | 
| server.writecfg      | -          | Speichert Konfigurationsänderungen, die zuvor durch andere Serverbefehle festgelegt wurden         | 
| chat.serverlog      | true/false          | Bei true wird der Chat immer in der Server-Konsole protokolliert         | 
| commands.echo "text"      | String (z. B. "Hallo Welt!")          | Druckt die angegebene Nachricht auf der Serverkonsole         | 
| global.say "message"      | String (z. B. "Wilkommen!")          | Sendet eine Nachricht an alle Spieler des Servers         | 
| env.time      | Integer (z. B. 16)          | Setzt die Weltzeit im Spiel auf den angegebenen Wert (in Stunden)         | 
| server.events      | -          | Bei "true" werden Serverereignisse wie Airdrops aktiviert.         | 
| commands.find "command"      | String (z. B. "quit")          | Suche nach einem Befehl oder mit "." werden alle verfügbaren Befehle aufgelistet         | 
| global.quit      | -          | Speichert den Server und hält ihn dann an         | 
| global.init      | -          | Konfigurationsdateien laden         | 

</TabItem>
<TabItem value="Spieler-Verwaltung" label="Spieler-Verwaltung">

| Befehl Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| global.ban "Spielername" "Grund"      | String (z. B. "Jacob"), String (z. B. "War frech!!")          | Verbannt einen Benutzer vom Server (mit optionalem Grund)         | 
| global.banid "steam64"      | Integer          | Bannt einen Benutzer über seine Steam 64 ID         | 
| global.banlistex      | -          | Gibt eine Liste der gesperrten Benutzer mit ihrem Spielernamen und dem Sperrgrund zurück         | 
| global.banlist      | -          | Gibt eine Liste der gesperrten Spieler im Chat zurück         | 
| global.unban "steam64"      | Integer          | Hebt die Sperrung eines Benutzers über seine Steam 64 ID auf         | 
| global.kickall      | -          | Wirft alle Spieler vom Server         | 
| global.kick "steam64 / Spielername" "Grund"      | Integer/String (z. B. "Jacob"), String (z. B. "War frech!!")         | Wirft einen Benutzer über seine Steam 64 ID oder seinen Spielernamen vom Server (mit optionalem Grund)         | 
| global.ownerid "steam64 / Spielername"      | Integer/String (z. B. "Jacob")          | Setzt den angegebenen Spieler über seine Steam 64 ID oder seinen Spielernamen als Server-Administartor (Auth-Level 2)         | 
| global.removeowner "steam64"      | Integer         | Entfernt die Administartor-Rechte des Benutzers über die angegebene Steam 64 ID         | 
| global.moderatorid "steam64 / Spielername"      | Integer/String (z. B. "Jacob")          | Setzt den angegebenen Spieler als Server-Moderator durch seine Steam 64 ID oder seinen Spielernamen (Auth-Level 1)         | 
| global.removemoderator "steam64"      | Integer          | Entfernt die Moderatorenrechte des Benutzers über die angegebene Steam 64 ID         | 
| global.listid      | -          | Gibt eine Liste von Benutzern zurück, die über Steam 64 ID gebannt wurden          | 

</TabItem>
<TabItem value="Spieler-Steuerungen" label="Spieler-Steuerungen">

| Befehl Syntax                  | Accepted Values | Description | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Töte deinen eigenen Spieler         | 
| global.quit      | -          | Speichert und verlässt das Spiel         | 
| global.god      | true/false          | Schaltet Gottmodus um, sodass der Spieler keinen Schaden nehmen kann (nur für Administratoren)          | 
| global.noclip      | true/false          | Schaltet Noclip-Modus um, sodass der Spieler frei fliegen kann (nur für Administratoren)         | 
| global.debugcamera      | true/false          | Schaltet den Debug-Kameramodus um, sodass der Spieler in den Freikameramodus gehen kann (nur für Administratoren)          | 
| player.sleep      | -          | Zwinge deinen Spieler zum Einschlafen         | 
| commands.find "command"      | String (z. B. "quit")          | Sucht nach einem Befehl, der für den Spieler verfügbar ist
| chat.say "text"     | String (z. B. "Hallo Welt!")          | Sendet eine Nachricht an alle Spieler des Servers         | 
| inventory.give "itemID" "amount"     | Integer (itemID), Integer (z. B. 5)          | Fügt einen Gegenstand in dein Inventar ein         | 
| inventory.giveto "Spielername" "itemID" "amount"      | String (z. B. "Jacob"), Integer (itemID), Integer (z. B. 5)          | Gibt einen Gegenstand in das Inventar des angegebenen Spielers         | 

</TabItem>
</Tabs>
