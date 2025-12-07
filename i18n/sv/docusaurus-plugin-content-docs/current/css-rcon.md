---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "Upptäck hur du säkert och smidigt fjärrstyr Counter-Strike: Source-servrar → Läs mer nu"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan att behöva interagera direkt med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Counter-Strike: Source används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra gameplay-inställningar eller få tillgång till diagnostikdata. Anslutningen skyddas av ett lösenord och körs över en specifik port, tillgänglig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Counter-Strike: Source från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet vid fjärrdrift.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverns administrationspanel. I filen som heter `server.cfg` måste följande rad läggas till eller ändras:

```cfg
rcon_password "definiera-ditt-losenord"
```


## Ansluta via RCON

För att ansluta till Counter-Strike: Source-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repositoriet](https://github.com/gorcon/rcon-cli). Efter att ha laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikten** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste stämma överens med värdena som är konfigurerade i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Counter-Strike: Source-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusfrågor och serverkontroll.

| Kommando                    | Beskrivning                                      |
|----------------------------|-------------------------------------------------|
| `rcon_password <password>` | Autentisera som RCON-admin                       |
| `status`                   | Visar spelare och serverinformation              |
| `changelevel <map>`        | Byter karta                                     |
| `mp_autoteambalance 0/1`   | Aktiverar/inaktiverar automatisk lagbalansering |
| `mp_timelimit <minutes>`   | Sätter tidsgräns för kartan                      |
| `mp_friendlyfire 0/1`      | Aktiverar/inaktiverar vänskjuts (friendly fire) |
| `mp_freezetime <seconds>`  | Sätter frystid i början av rundan                 |
| `sv_cheats 0/1`            | Aktiverar fusk (endast för admin)                |
| `exec <file.cfg>`          | Kör en konfigurationsfil                         |
| `kick <player>`            | Kickar en spelare från servern                    |


## Slutsats

RCON är ett kärnverktyg för fjärradministration av Counter-Strike: Source-gameservrar. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsautentisering. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂

<InlineVoucher />