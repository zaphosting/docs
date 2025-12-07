---
id: rust-commands
title: "Rust: Adminkommandon"
description: "Upptäck viktiga Rust-kommandon för serverhantering och spelarkontroll för att optimera gameplay och administration → Lär dig mer nu"
sidebar_label: Adminkommandon
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Rust har en mängd olika kommandon tillgängliga för serverägare och spelare att använda. På den här sidan sammanfattar vi de mest användbara och populära som används för serverinställningar, spelarförvaltning och för att kontrollera spelare.

:::info
Vissa kommandon kräver användning av en spelares Steam64 ID. Använd den lilla guiden nedan för att förstå hur du får en spelares Steam ID.
:::

<InlineVoucher />

## Så får du ditt Steam ID
Först, använd ett verktyg som [Steam ID Finder](https://steamidfinder.com/) för att få ditt Steam64 ID.

Här klistrar du in din Steam-URL:

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

Tryck sedan på `Find Steam ID`. Nu bör vi kunna se vår Steam-profil, här kopierar vi vår "Steam64ID (Dec)".

Och det är allt, nu har du Steam64 ID och kan använda det för kommandon som kräver Steam64 ID nedan.

## Kommando-kategorier

Använd flikarna nedan för att växla mellan varje kategori. Tabellerna består av själva kommandot, accepterade värden för kommandot (om tillämpligt) och en beskrivning för att göra det lättare att förstå.

:::info
Alla kommandon som nämns på denna sida gäller för vanilla Rust.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="Serverinställningar" default>

| Kommando Syntax                  | Accepterade värden | Beskrivning | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | När true visas alla chattmeddelanden för alla spelare         | 
| server.stop      | -          | Stoppar servern         | 
| server.save      | -          | Sparar servern         | 
| server.saveinterval "value"      | Heltal (standard 60)          | Ställer in auto-sparintervallet för din server (i sekunder)         | 
| server.secure      | true/false          | När true kommer Easy Anti Cheat (EAC) neka anslutning till alla oregistrerade eller bannade spelare innan de ansluter         | 
| server.seed "value"     | Heltal (t.ex. 123456)          | Sätter seed-värdet för serverns värld         | 
| server.stability      | true/false          | När true är strukturstabilitet för byggnader aktiverad         | 
| server.tickrate "rate"      | Heltal (standard 30)          | Ställer in tickrate för din server         | 
| server.writecfg      | -          | Sparar konfigurationsändringar som tidigare satts via andra serverkommandon         | 
| chat.serverlog      | true/false          | När true loggas chatten alltid i serverkonsolen         | 
| commands.echo "text"      | Sträng (t.ex. "Hello World!")          | Skriver ut det angivna meddelandet i serverkonsolen         | 
| global.say "message"      | Sträng (t.ex. "Welcome!")          | Skickar ett meddelande till alla spelare på servern         | 
| env.time      | Heltal (t.ex. 16)          | Sätter spelets världstid till angivet värde (i timmar)         | 
| server.events      | -          | När true aktiveras serverhändelser som airdrops         | 
| commands.find "command"      | Sträng (t.ex. "quit")          | Söker efter ett kommando eller använd "." för att lista alla tillgängliga kommandon         | 
| global.quit      | -          | Sparar servern och stoppar den sedan         | 
| global.init      | -          | Laddar konfigurationsfiler         | 

</TabItem>
<TabItem value="PlayerAdmin" label="Spelaradministration">

| Kommando Syntax                  | Accepterade värden | Beskrivning | 
| ----------------------- | ---------- | --------- | 
| global.ban "playername" "reason"      | Sträng (t.ex. "Jacob"), Sträng (t.ex. "Var busig!")          | Bannlyser en användare från servern (med valfri anledning)         | 
| global.banid "steam64"      | Heltal          | Bannlyser en användare via deras Steam64 ID         | 
| global.banlistex      | -          | Returnerar en lista över bannlysta användare med deras spelarnamn och bananledning         | 
| global.banlist      | -          | Returnerar en lista över bannlysta spelare i chatten         | 
| global.unban "steam64"      | Heltal          | Avbannlyser en användare via deras Steam64 ID         | 
| global.kickall      | -          | Kickar alla spelare från servern         | 
| global.kick "steam64 / playername" "reason"      | Heltal/Sträng (t.ex. "Jacob"), Sträng (t.ex. "Var busig!")         | Kickar en användare från servern via deras Steam64 ID eller spelarnamn (med valfri anledning)         | 
| global.ownerid "steam64 / playername"      | Heltal/Sträng (t.ex. "Jacob")          | Sätter angiven spelare som serveradmin via deras Steam64 ID eller spelarnamn (Auth nivå 2)         | 
| global.removeowner "steam64"      | Heltal         | Tar bort adminrättigheter från användaren via angivet Steam64 ID         | 
| global.moderatorid "steam64 / playername"      | Heltal/Sträng (t.ex. "Jacob")          | Sätter angiven spelare som servermoderator via deras Steam64 ID eller spelarnamn (Auth nivå 1)         | 
| global.removemoderator "steam64"      | Heltal          | Tar bort moderatorrättigheter från användaren via angivet Steam64 ID         | 
| global.listid      | -          | Returnerar en lista över användare som blivit bannlysta via Steam64 ID          | 

</TabItem>
<TabItem value="Player Controls" label="Spelarkontroller">

| Kommando Syntax                  | Accepterade värden | Beskrivning | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Dödar din egen spelare         | 
| global.quit      | -          | Sparar och avslutar spelet         | 
| global.god      | true/false          | Växlar God mode så spelaren inte kan ta skada (endast för admins)          | 
| global.noclip      | true/false          | Växlar Noclip-läge så spelaren kan flyga fritt (endast för admins)          | 
| global.debugcamera      | true/false          | Växlar Debug-kameraläge så spelaren kan gå in i fri kameravy (endast för admins)          | 
| player.sleep      | -          | Tvingar din spelare att somna         | 
| commands.find "command"      | Sträng (t.ex. "quit")          | Söker efter ett kommando som är tillgängligt för spelaren
| chat.say "text"     | Sträng (t.ex. "Hello World!")          | Skickar ett meddelande till alla spelare på servern         | 
| inventory.give "itemID" "amount"     | Heltal (itemID), Heltal (t.ex. 5)          | Ger ett föremål till din inventarie         | 
| inventory.giveto "playername" "itemID" "amount"      | Sträng (t.ex. "Jacob"), Heltal (itemID), Heltal (t.ex. 5)          | Ger ett föremål till angiven spelares inventarie         | 

</TabItem>
</Tabs>

<InlineVoucher />