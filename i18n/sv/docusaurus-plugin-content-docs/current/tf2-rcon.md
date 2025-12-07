---
id: tf2-rcon
title: "Team Fortress 2: RCON"
description: "Upptäck hur du fjärrstyr och hanterar din Team Fortress 2-server för flexibel administration och övervakning → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-tf2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan att behöva interagera direkt med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Team Fortress 2 används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra spelinställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och körs över en specifik port, åtkomlig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Team Fortress 2 från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverns administrationspanel. I filen som heter `server.cfg` måste följande rader läggas till eller ändras:

```cfg
rcon_password "sätt-ditt-lösenord-här"
```


## Ansluta via RCON

För att ansluta till Team Fortress 2-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repositoriet](https://github.com/gorcon/rcon-cli). Efter att ha laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikten** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste stämma överens med värdena som är konfigurerade i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <LÖSENORD> kommando
```


## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Team Fortress 2-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                      | Beskrivning                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <lösenord>`   | Autentiserar för RCON-åtkomst                |
| `status`                     | Visar server- och spelarinfo                  |
| `changelevel <kartanamn>`    | Byter till angiven karta                      |
| `mp_timelimit <min>`         | Sätter tidsgräns per karta                     |
| `mp_roundtime <min>`         | Sätter rundans längd                           |
| `sv_cheats 0/1`              | Aktiverar/inaktiverar fusk-kommandon (admin) |
| `kick <spelarnamn>`          | Kickar en spelare från servern                 |
| `banid <duration> <SteamID>` | Bannar en spelare under angiven tid            |
| `exec <fil.cfg>`             | Kör en konfigurationsfil                        |
| `say <meddelande>`           | Sänder ett meddelande till alla spelare        |

## Sammanfattning

RCON är ett kärnverktyg för fjärradministration av Team Fortress 2-gameservrar. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />