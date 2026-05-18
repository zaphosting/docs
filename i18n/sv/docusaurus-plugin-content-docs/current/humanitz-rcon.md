---
id: humanitz-rcon
title: "HumanitZ: RCON"
description: "Lär dig hur du fjärrstyr din HumanitZ-server med RCON och rcon-cli → Läs mer nu"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det låter administratörer köra kommandon på servern utan att behöva ansluta direkt till spelet. Det gör det möjligt att hantera spelare, justera inställningar eller övervaka serveraktivitet externt.

I **HumanitZ** kan RCON användas för att köra administrativa kommandon som att sparka spelare, skicka meddelanden eller styra serverbeteende. Åtkomst skyddas med ett lösenord och en dedikerad port.

En stor fördel med RCON är att du kan administrera servern **utan att vara inloggad som spelare i spelet**, vilket ger flexibel och effektiv fjärrhantering.

<InlineVoucher />

## Konfiguration

Innan du kan använda RCON måste det aktiveras i serverns konfiguration. Öppna inställningssidan för din server och slå på rcon-alternativet. Du kan också justera det via konfigurationsfilerna. Öppna din gameserver-panel, gå till Configs och hitta filen `GameServerSettings.ini`.

Lägg till eller ändra följande rader:

```
RCONEnabled=true
RCONPassword=your_secure_password
RCONPort=XXXXX
```

Den tilldelade RCON-porten hittar du i **Portöversikten** i din serveradministration. Se till att lösenord och port stämmer överens med din konfiguration.

Efter ändringarna, spara filen och **starta om servern** så att inställningarna träder i kraft.

## Ansluta via RCON

För att ansluta till din HumanitZ-server via RCON kan du använda kommandoradsverktyget **rcon-cli**. Det finns på den officiella GitHub-repot:
https://github.com/gorcon/rcon-cli

När det är installerat kan du ansluta till din server med följande kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

Byt ut platshållarna mot din servers IP-adress, RCON-port och lösenord.

Det här kommandot låter dig köra RCON-kommandon direkt från din dator utan att behöva en interaktiv session.

## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa kommandon på din HumanitZ-server. Tillgängliga kommandon beror på spelets implementation men inkluderar ofta spelhantering och serverkontroll.

| Kommando | Beskrivning |
|----------------------------------|------------------------------------------|
| `broadcast <message>`| Skickar ett meddelande till alla spelare |
| `kick <playername>`| Sparkar en spelare från servern |
| `ban <playername>` | Bannlyser en spelare |
| `unban <playername>` | Avbannlyser en spelare |
| `save` | Sparar det aktuella speltillståndet |
| `restart`| Startar om servern |
| `shutdown` | Stänger ner servern |
| `whitelist add <steamid>`| Lägger till en spelare i whitelist |
| `whitelist remove <steamid>` | Tar bort en spelare från whitelist |

## Avslutning

Grattis! Du har nu framgångsrikt satt upp och använt **RCON för din HumanitZ-server**. Det ger dig möjlighet att fjärrstyra servern, köra administrativa kommandon och behålla kontrollen utan att behöva gå in i spelet.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />