---
id: l4d2-rcon
title: "Left 4 Dead 2: RCON"
description: "Upptäck hur du säkert kan fjärrstyra och hantera Left 4 Dead 2-servrar utan att behöva gå med i spelet → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-l4d2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Left 4 Dead 2 används RCON för att köra serverkommandon, som att hantera spelare, ändra spelinställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och körs över en specifik port, åtkomlig via kompatibla RCON-klienter.

En stor fördel med RCON är att det gör det möjligt att administrera servern **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Left 4 Dead 2 från externa verktyg, kommandoradsgränssnitt eller webbaserade dashboards, vilket ger flexibilitet och smidighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverns kontrollpanel. I filen som heter `server.cfg` måste följande rader läggas till eller ändras:

```cfg
rcon_password "definiera-ditt-losenord"
```


## Ansluta via RCON

För att ansluta till Left 4 Dead 2-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repot](https://github.com/gorcon/rcon-cli). Efter att ha laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikten** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste matcha de värden som är konfigurerade i panelen eller i konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Left 4 Dead 2-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                     | Beskrivning                                  |
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

RCON är ett kärnverktyg för fjärradministration av Left 4 Dead 2-gameservrar. Det ger snabb och direkt åtkomst till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsautentisering. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />