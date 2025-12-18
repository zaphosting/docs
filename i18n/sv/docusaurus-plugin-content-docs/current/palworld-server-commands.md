---
id: palworld-server-commands
title: "Palworld: Palworld Serverkommandon"
description: "Upptäck hur du effektivt hanterar Palworld-servrar med inbyggda kommandon för adminkontroll och gameplay → Lär dig mer nu"
sidebar_label: Serverkommandon
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Palworld-servrar kommer alla med en uppsättning användbara inbyggda serverkommandon som kan användas i spelet och via din serverkonsol. I den här guiden går vi igenom många av dessa kommandon med beskrivningar och exempel på hur de används.

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="Sätt upp din PALWORLD-server på bara ETT MINUT!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Ställa in Admin

Du måste först sätta ett admin-lösenord för din Palworld-server och lägga till dig själv som admin i spelet innan du kan använda admin-kommandona i nästa avsnitt.

Du kan ställa in ditt servers admin-lösenord via **Inställningar**-fliken i serverns webbgränssnitt eller via konfigurationsfilen **PalWorldSettings.ini**. När det är satt kan du använda kommandot `/AdminPassword [lösenord]` i spelet för att lägga till dig själv som admin.

:::tip
Vi rekommenderar starkt att du kollar in vår [Setup Admin](palworld-admin.md)-guide som är helt dedikerad till detta och ger mer djupgående info om hur du sätter admin-lösenord och lägger till användare som admin.
:::

## Tillgängliga Kommandon

Tabellen nedan visar en rad serverkommandon för Palworld, tillsammans med exempel på användning och beskrivningar, som kan användas både i spelet och via serverkonsolen.

När parametern `steamid` behövs kan du enkelt kopiera en spelares SteamID genom att högerklicka två gånger på spelarlistan.

:::info
Du måste först ställa in ett admin-lösenord och ge dig själv behörighet med kommandot `/AdminPassword` innan du kan använda dessa kommandon. Annars får du ett behörighetsfel. Läs nästa avsnitt i guiden för att förstå hur du gör detta.
:::

| Kommando Syntax               | Accepterade Värden | Beskrivning                                                           | 
| ---------------------------- | ------------------ | --------------------------------------------------------------------- | 
| /Shutdown [sek] [meddelande] | Heltal, Sträng     | Stänger ner servern efter angivna sekunder, med medföljande meddelande | 
| /DoExit                      | -                  | Tvingar servern att stänga ner                                        | 
| /Broadcast                   | Sträng             | Skicka ett meddelande till alla spelare som är online på servern     | 
| /KickPlayer [steamid]        | Sträng             | Kicka ut vald spelare från servern                                   | 
| /BanPlayer [steamid]         | Sträng             | Banna vald spelare från servern                                       | 
| /TeleportToPlayer [steamid]  | Sträng             | Teleportera dig till vald spelare                                    | 
| /TeleportToMe [steamid]      | Sträng             | Teleportera vald spelare till dig                                     | 
| /ShowPlayers                 | -                  | Visa info om alla spelare som är anslutna just nu                     | 
| /Info                        | -                  | Visa serverinformation                                                | 
| /Save                        | -                  | Spara aktuell världdata                                               |

:::note
Du kan för närvarande inte ta bort en ban i spelet eftersom det inte finns något kommando för det. Du måste manuellt redigera filen `banlist.txt` i din serverkatalog om du vill ta bort en spelares ban.
:::

<InlineVoucher />