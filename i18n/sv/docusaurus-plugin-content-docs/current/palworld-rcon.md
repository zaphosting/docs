---
id: palworld-rcon
title: "Palworld: RCON"
description: "Upptäck hur du fjärrstyr Palworld-servrar för flexibel kontroll och övervakning utan att behöva gå med i spelet → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Detta gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Palworld används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra gameplay-inställningar eller få tillgång till diagnostikdata. Anslutningen skyddas av ett lösenord och körs över en specifik port, åtkomlig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Palworld från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverns administrationspanel. I filen som heter `PalWorldSettings.ini` måste följande rader läggas till eller ändras:

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="define-your-password"
```
Den tilldelade RCON-porten hittar du längst ner på inställningssidan i Port-översikten och måste anges där.



## Ansluta via RCON

För att ansluta till Palworld-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repositoriet](https://github.com/gorcon/rcon-cli). Efter att ha laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Port-översikten** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste stämma överens med värdena som är konfigurerade i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Palworld-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarkontroll, statusförfrågningar och serverhantering.

| Kommando                                 | Beskrivning                                               |
|-----------------------------------------|-----------------------------------------------------------|
| `/Shutdown <seconds> <message>`          | Stänger ner servern efter en nedräkning med meddelande    |
| `/DoExit`                               | Stoppar servern omedelbart                                |
| `/Broadcast <message>`                  | Skickar ett meddelande till alla anslutna spelare        |
| `/KickPlayer <SteamID>`                 | Kickar en spelare via SteamID                             |
| `/BanPlayer <SteamID>`                  | Bannlyser en spelare permanent                            |
| `/TeleportToPlayer <SteamID>`           | Teleporterar dig till den angivna spelaren                |
| `/TeleportToMe <SteamID>`               | Teleporterar den angivna spelaren till din position       |
| `/ShowPlayers`                          | Visar alla för närvarande anslutna spelare                |
| `/Info`                                 | Visar grundläggande serverinformation                      |
| `/Save`                                 | Sparar världen manuellt                                   |



## Sammanfattning

RCON är ett kärnverktyg för fjärradministration av Palworld-gameservrar. Det möjliggör snabb och direkt åtkomst till administrativa funktioner samtidigt som åtkomsten skyddas med lösenord. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />