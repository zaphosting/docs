---
id: rust-commands
title: "Rust: Admin Commands"
description: "Ontdek essentiële Rust-commando's voor serverbeheer en spelerscontrole om gameplay en administratie te optimaliseren → Leer nu meer"
sidebar_label: Admin Commands
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Rust heeft een breed scala aan verschillende commando's die servereigenaren en spelers kunnen gebruiken. Op deze pagina vatten we de meest nuttige en populaire samen, die gebruikt worden voor serverinstellingen, spelersbeheer en om spelers te controleren.

:::info
Sommige commando's vereisen het gebruik van de Steam64 ID van een speler. Gebruik de korte tutorial hieronder om te begrijpen hoe je de Steam ID van een speler kunt achterhalen.
:::

<InlineVoucher />

## Je Steam ID achterhalen
Gebruik eerst een tool zoals de [Steam ID Finder](https://steamidfinder.com/) om je Steam64 ID te krijgen.

Hier vul je je Steam URL in:

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

Klik daarna op `Find Steam ID`. Nu zou je je Steam-profiel moeten zien, hier kopieer je je "Steam64ID (Dec)".

En dat is het, nu heb je de Steam64 ID en kun je deze gebruiken voor de commando's hieronder die een Steam64 ID vereisen.

## Commandocategorieën

Gebruik de sectietabs hieronder om tussen de categorieën te wisselen. De tabellen bevatten het commando zelf, de geaccepteerde waarden (indien van toepassing) en een beschrijving om het makkelijker te maken.

:::info
Alle commando's die op deze pagina genoemd worden, zijn voor vanilla Rust.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="Serverinstellingen" default>

| Command Syntax                  | Geaccepteerde Waarden | Beschrijving | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | Wanneer true wordt elk chatbericht aan alle spelers getoond         | 
| server.stop      | -          | Stopt de server         | 
| server.save      | -          | Slaat de server op         | 
| server.saveinterval "value"      | Integer (standaard 60)          | Stelt het auto-save interval in voor je server (in seconden)         | 
| server.secure      | true/false          | Wanneer true weigert Easy Anti Cheat (EAC) verbindingen van niet-geregistreerde of gebande spelers         | 
| server.seed "value"     | Integer (bijv. 123456)          | Stelt de seed waarde in voor de serverwereld         | 
| server.stability      | true/false          | Wanneer true is de structuurstabiliteit voor gebouwen ingeschakeld         | 
| server.tickrate "rate"      | Integer (standaard 30)          | Stelt de tickrate van je server in         | 
| server.writecfg      | -          | Slaat configuratiewijzigingen op die eerder via andere servercommando's zijn ingesteld         | 
| chat.serverlog      | true/false          | Wanneer true wordt chat altijd gelogd in de serverconsole         | 
| commands.echo "text"      | String (bijv. "Hello World!")          | Print het opgegeven bericht naar de serverconsole         | 
| global.say "message"      | String (bijv. "Welkom!")          | Stuurt een bericht naar alle spelers op de server         | 
| env.time      | Integer (bijv. 16)          | Stelt de in-game wereldtijd in op de opgegeven waarde (in uren)         | 
| server.events      | -          | Wanneer true worden serverevents zoals airdrops ingeschakeld         | 
| commands.find "command"      | String (bijv. "quit")          | Zoekt naar een commando of toont met "." alle beschikbare commando's         | 
| global.quit      | -          | Slaat de server op en stopt deze daarna         | 
| global.init      | -          | Laadt configuratiebestanden         | 

</TabItem>
<TabItem value="PlayerAdmin" label="Spelerbeheer">

| Command Syntax                  | Geaccepteerde Waarden | Beschrijving | 
| ----------------------- | ---------- | --------- | 
| global.ban "playername" "reason"      | String (bijv. "Jacob"), String (bijv. "Was stout!")          | Bant een gebruiker van de server (optioneel met reden)         | 
| global.banid "steam64"      | Integer          | Bant een gebruiker via zijn Steam64 ID         | 
| global.banlistex      | -          | Geeft een lijst van gebande gebruikers met hun spelersnaam en banreden         | 
| global.banlist      | -          | Geeft een lijst van gebande spelers in de chat         | 
| global.unban "steam64"      | Integer          | Haalt een ban van een gebruiker via zijn Steam64 ID         | 
| global.kickall      | -          | Kickt alle spelers van de server         | 
| global.kick "steam64 / playername" "reason"      | Integer/String (bijv. "Jacob"), String (bijv. "Was stout!")         | Kickt een gebruiker via Steam64 ID of spelersnaam (optioneel met reden)         | 
| global.ownerid "steam64 / playername"      | Integer/String (bijv. "Jacob")          | Zet de opgegeven speler als serveradmin via Steam64 ID of spelersnaam (Auth level 2)         | 
| global.removeowner "steam64"      | Integer         | Verwijdert adminrechten van de gebruiker via de opgegeven Steam64 ID         | 
| global.moderatorid "steam64 / playername"      | Integer/String (bijv. "Jacob")          | Zet de opgegeven speler als servermoderator via Steam64 ID of spelersnaam (Auth level 1)         | 
| global.removemoderator "steam64"      | Integer          | Verwijdert moderatorrechten van de gebruiker via de opgegeven Steam64 ID         | 
| global.listid      | -          | Geeft een lijst van gebruikers die via Steam64 ID zijn geband          | 

</TabItem>
<TabItem value="Player Controls" label="Spelerbesturing">

| Command Syntax                  | Geaccepteerde Waarden | Beschrijving | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Dood je eigen speler         | 
| global.quit      | -          | Slaat op en verlaat het spel         | 
| global.god      | true/false          | Zet God mode aan of uit zodat de speler geen schade kan krijgen (alleen voor admins)          | 
| global.noclip      | true/false          | Zet Noclip mode aan of uit zodat de speler vrij kan vliegen (alleen voor admins)          | 
| global.debugcamera      | true/false          | Zet Debug camera mode aan of uit zodat de speler in free camera mode kan (alleen voor admins)          | 
| player.sleep      | -          | Dwingt je speler om te gaan slapen         | 
| commands.find "command"      | String (bijv. "quit")          | Zoekt naar een commando dat beschikbaar is voor de speler
| chat.say "text"     | String (bijv. "Hello World!")          | Stuurt een bericht naar alle spelers op de server         | 
| inventory.give "itemID" "amount"     | Integer (itemID), Integer (bijv. 5)          | Geeft een item aan je inventory         | 
| inventory.giveto "playername" "itemID" "amount"      | String (bijv. "Jacob"), Integer (itemID), Integer (bijv. 5)          | Geeft een item aan de inventory van de opgegeven gebruiker         | 

</TabItem>
</Tabs>

<InlineVoucher />