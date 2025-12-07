---
id: gmod-rcon
title: "Garry's Mod: RCON"
description: "Upptäck hur du säkert och smidigt kan fjärrstyra Garry's Mod-servrar utan att behöva gå med i spelet → Läs mer nu"
sidebar_label: RCON
services:
  - gameserver-gmod
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan att behöva interagera direkt med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatus.

I Garry's Mod används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra spelinställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och körs över en specifik port, åtkomlig via kompatibla RCON-klienter.

En stor fördel med RCON är att du kan sköta servern **utan att behöva vara inloggad i spelet som spelare**. Serveradmin kan övervaka och styra Garry's Mod via externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet vid fjärrhantering.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverns kontrollpanel. I filen `server.cfg` ska följande rad läggas till eller ändras:

```cfg
rcon_password "sätt-ditt-lösenord-här"
```


## Ansluta via RCON

För att ansluta till Garry's Mod-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repot](https://github.com/gorcon/rcon-cli). Efter nedladdning och installation på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikten** längst ner på inställningssidan i serveradministrationen. Lösenordet och porten måste stämma överens med värdena i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <LÖSENORD> kommando
```


## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Garry's Mod-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelhantering, statusförfrågningar och serverkontroll.

| Kommando                      | Beskrivning                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <lösenord>`   | Autentiserar för RCON-åtkomst                |
| `status`                     | Visar server- och spelarinfo                  |
| `changelevel <karta>`        | Byter till angiven karta                      |
| `mp_timelimit <min>`         | Sätter tidsgräns per karta                     |
| `mp_roundtime <min>`         | Sätter rundans längd                          |
| `sv_cheats 0/1`              | Aktiverar/inaktiverar fusk-kommandon (admin) |
| `kick <spelarnamn>`          | Kickar en spelare från servern                |
| `banid <tid> <SteamID>`      | Bannar en spelare under angiven tid            |
| `exec <fil.cfg>`             | Kör en konfigurationsfil                       |
| `say <meddelande>`           | Sänder ett meddelande till alla spelare       |


## Sammanfattning

RCON är ett kärnverktyg för fjärradministration av Garry's Mod-servrar. Det ger snabb och direkt åtkomst till administrativa funktioner samtidigt som det skyddas med lösenord. En korrekt och säker konfiguration är avgörande för att hålla servern stabil och skydda mot obehörig åtkomst.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support – vi finns här för dig varje dag! 🙂

<InlineVoucher />