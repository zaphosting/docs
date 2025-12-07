---
id: dods-rcon
title: "Day of Defeat: Source: RCON"
description: "Upptäck hur du fjärrstyr Day of Defeat: Source-servrar för flexibel kontroll och övervakning → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-dods
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverns konsol utan att behöva interagera direkt med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatus.

I Day of Defeat: Source används RCON för att köra serverkommandon, som att hantera spelare, ändra gameplay-inställningar eller få tillgång till diagnostik. Anslutningen skyddas med ett lösenord och går via en specifik port, åtkomlig via kompatibla RCON-klienter.

En stor fördel med RCON är att du kan administrera servern **utan att behöva vara inloggad i spelet som spelare**. Serveradmin kan övervaka och styra Day of Defeat: Source från externa verktyg, kommandoradsgränssnitt eller webbdashboards, vilket ger flexibilitet och smidighet vid fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det gör du direkt i gameserver-administrationen. Under **Inställningar** finns ett val som heter **RCON** som måste aktiveras. Sätt ett säkert lösenord och definiera en giltig port.

Den tilldelade RCON-porten hittar du längst ner på inställningssidan under **Portöversikt**.

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverpanelen. I filen `server.cfg` ska följande rad läggas till eller ändras:

```cfg
rcon_password "definiera-ditt-losenord"
```


## Ansluta via RCON

För att ansluta till Day of Defeat: Source-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repot](https://github.com/gorcon/rcon-cli). Efter nedladdning och installation på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikt** längst ner på inställningssidan i gameserver-administrationen. Lösenord och port måste stämma överens med värdena i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Day of Defeat: Source-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelhantering, statusfrågor och serverkontroll.

| Kommando                      | Beskrivning                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <password>`   | Autentiserar för RCON-åtkomst                |
| `status`                     | Visar server- och spelarinfo                  |
| `changelevel <mapname>`      | Byter till angiven karta                      |
| `mp_timelimit <min>`         | Sätter tidsgräns per karta                     |
| `mp_roundtime <min>`         | Sätter rundans längd                           |
| `sv_cheats 0/1`              | Aktiverar/inaktiverar fusk-kommandon (admin) |
| `kick <playername>`          | Kickar en spelare från servern                 |
| `banid <duration> <SteamID>` | Bannar en spelare under angiven tid            |
| `exec <file.cfg>`            | Kör en konfigurationsfil                        |
| `say <message>`              | Sänder ett meddelande till alla spelare        |


## Sammanfattning

RCON är ett kärnverktyg för fjärradministration av Day of Defeat: Source-gameservrar. Det ger snabb och direkt åtkomst till adminfunktioner samtidigt som det skyddas med lösenord. Rätt och säker konfiguration är avgörande för serverns stabilitet och för att skydda mot obehörig åtkomst.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />