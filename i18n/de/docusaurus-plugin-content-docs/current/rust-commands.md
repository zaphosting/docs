---
id: rust-commands
title: "Rust: Admin Befehle"
description: "Entdecke wichtige Rust-Befehle für die Serververwaltung und Spielersteuerung, um Gameplay und Administration zu optimieren → Jetzt mehr erfahren"
sidebar_label: Admin Befehle
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Rust bietet eine Vielzahl an Befehlen, die Serverbesitzer und Spieler nutzen können. Auf dieser Seite fassen wir die nützlichsten und beliebtesten Befehle zusammen, die für Servereinstellungen, Spieleradministration und Spielersteuerung verwendet werden.

:::info
Einige Befehle benötigen die Steam64 ID eines Spielers. Nutze die kleine Anleitung unten, um zu erfahren, wie du die Steam ID eines Spielers bekommst.
:::

<InlineVoucher />

## So findest du deine Steam ID
Nutze zuerst ein Tool wie den [Steam ID Finder](https://steamidfinder.com/), um deine Steam64 ID zu erhalten.

Hier gibst du deine Steam URL ein:

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

Dann klickst du auf `Find Steam ID`. Jetzt solltest du dein Steam-Profil sehen können, hier kopierst du deine "Steam64ID (Dec)".

Und das war’s, jetzt hast du die Steam64 ID und kannst sie für die unten stehenden Befehle verwenden, die eine Steam64 ID benötigen.

## Befehls-Kategorien

Nutze die Tabs unten, um zwischen den Kategorien zu wechseln. Die Tabellen zeigen den Befehl selbst, die akzeptierten Werte (falls vorhanden) und eine Beschreibung, damit du alles besser verstehst.

:::info
Alle hier genannten Befehle gelten für Vanilla Rust.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="Server Einstellungen" default>

| Befehlssyntax                  | Akzeptierte Werte | Beschreibung | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | Wenn aktiviert, werden alle Chatnachrichten für alle Spieler angezeigt         | 
| server.stop      | -          | Stoppt den Server         | 
| server.save      | -          | Speichert den Server         | 
| server.saveinterval "value"      | Integer (Standard 60)          | Legt das automatische Speicherintervall für deinen Server fest (in Sekunden)         | 
| server.secure      | true/false          | Wenn aktiviert, blockiert Easy Anti Cheat (EAC) Verbindungen von nicht registrierten oder gebannten Spielern vor dem Verbindungsaufbau         | 
| server.seed "value"     | Integer (z.B. 123456)          | Setzt den Seed-Wert für die Serverwelt         | 
| server.stability      | true/false          | Wenn aktiviert, ist die Stabilität von Gebäuden aktiviert         | 
| server.tickrate "rate"      | Integer (Standard 30)          | Legt die Tickrate für deinen Server fest         | 
| server.writecfg      | -          | Speichert Konfigurationsänderungen, die zuvor über andere Serverbefehle gesetzt wurden         | 
| chat.serverlog      | true/false          | Wenn aktiviert, werden Chatnachrichten immer in der Serverkonsole protokolliert         | 
| commands.echo "text"      | String (z.B. "Hello World!")          | Gibt die angegebene Nachricht in der Serverkonsole aus         | 
| global.say "message"      | String (z.B. "Welcome!")          | Sendet eine Nachricht an alle Spieler auf dem Server         | 
| env.time      | Integer (z.B. 16)          | Setzt die Ingame-Weltzeit auf den angegebenen Wert (in Stunden)         | 
| server.events      | -          | Wenn aktiviert, werden Serverevents wie Airdrops eingeschaltet         | 
| commands.find "command"      | String (z.B. "quit")          | Sucht nach einem Befehl oder listet mit "." alle verfügbaren Befehle auf         | 
| global.quit      | -          | Speichert den Server und stoppt ihn anschließend         | 
| global.init      | -          | Lädt Konfigurationsdateien         | 

</TabItem>
<TabItem value="PlayerAdmin" label="Spieler Admin">

| Befehlssyntax                  | Akzeptierte Werte | Beschreibung | 
| ----------------------- | ---------- | --------- | 
| global.ban "playername" "reason"      | String (z.B. "Jacob"), String (z.B. "War unartig!")          | Bannt einen Spieler vom Server (mit optionalem Grund)         | 
| global.banid "steam64"      | Integer          | Bannt einen Spieler über seine Steam64 ID         | 
| global.banlistex      | -          | Gibt eine Liste der gebannten Spieler mit Spielernamen und Bann-Grund zurück         | 
| global.banlist      | -          | Gibt eine Liste der gebannten Spieler im Chat aus         | 
| global.unban "steam64"      | Integer          | Hebt den Bann eines Spielers über seine Steam64 ID auf         | 
| global.kickall      | -          | Kickt alle Spieler vom Server         | 
| global.kick "steam64 / playername" "reason"      | Integer/String (z.B. "Jacob"), String (z.B. "War unartig!")         | Kickt einen Spieler über seine Steam64 ID oder Spielernamen (mit optionalem Grund)         | 
| global.ownerid "steam64 / playername"      | Integer/String (z.B. "Jacob")          | Setzt den angegebenen Spieler als Server-Admin über seine Steam64 ID oder Spielernamen (Auth-Level 2)         | 
| global.removeowner "steam64"      | Integer         | Entfernt Adminrechte von einem Spieler über die angegebene Steam64 ID         | 
| global.moderatorid "steam64 / playername"      | Integer/String (z.B. "Jacob")          | Setzt den angegebenen Spieler als Server-Moderator über seine Steam64 ID oder Spielernamen (Auth-Level 1)         | 
| global.removemoderator "steam64"      | Integer          | Entfernt Moderatorrechte von einem Spieler über die angegebene Steam64 ID         | 
| global.listid      | -          | Gibt eine Liste der Spieler zurück, die via Steam64 ID gebannt wurden          | 

</TabItem>
<TabItem value="Player Controls" label="Spieler Steuerung">

| Befehlssyntax                  | Akzeptierte Werte | Beschreibung | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Tötet deinen eigenen Spieler         | 
| global.quit      | -          | Speichert und beendet das Spiel         | 
| global.god      | true/false          | Schaltet den God-Modus ein/aus, sodass der Spieler keinen Schaden nimmt (nur für Admins)          | 
| global.noclip      | true/false          | Schaltet den Noclip-Modus ein/aus, sodass der Spieler frei fliegen kann (nur für Admins)          | 
| global.debugcamera      | true/false          | Schaltet den Debug-Kameramodus ein/aus, sodass der Spieler in den freien Kameramodus wechseln kann (nur für Admins)          | 
| player.sleep      | -          | Zwingt deinen Spieler zum Schlafen         | 
| commands.find "command"      | String (z.B. "quit")          | Sucht nach einem Befehl, der für den Spieler verfügbar ist
| chat.say "text"     | String (z.B. "Hello World!")          | Sendet eine Nachricht an alle Spieler auf dem Server         | 
| inventory.give "itemID" "amount"     | Integer (itemID), Integer (z.B. 5)          | Gibt dir einen Gegenstand ins Inventar         | 
| inventory.giveto "playername" "itemID" "amount"      | String (z.B. "Jacob"), Integer (itemID), Integer (z.B. 5)          | Gibt dem angegebenen Spieler einen Gegenstand ins Inventar         | 

</TabItem>
</Tabs>

<InlineVoucher />