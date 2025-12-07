---
id: fivem-rcon
title: "FiveM: RCON"
description: "Upptäck hur du fjärrstyr FiveM-spelservrar med RCON för flexibel serverkontroll och övervakning → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I FiveM används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra gameplay-inställningar eller få tillgång till diagnostikdata. Anslutningen skyddas av ett lösenord och körs över en specifik port, tillgänglig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra FiveM från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet för fjärrstyrning.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs i **CFG Editor**-sektionen i gameserver-administrationen i **txAdmin**. Se till att följande rader är tillagda eller justerade i konfigurationen:

```cfg
ensure rconlog
set rcon_password "ditt-säkra-lösenord"
```



## Ansluta via RCON

För att ansluta till GameXY-servern via RCON används Windows-verktyget **IceCon**. Det finns att ladda ner på [GitHub-repot](https://github.com/icedream/icecon). Efter att ha installerat verktyget på din dator, skapa en ny anslutning med följande information:

- **Serverns IP-adress**  
- **Game-port**
- **RCON-lösenord**

När anslutningen är etablerad ger IceCon ett grafiskt gränssnitt för att skicka RCON-kommandon till FiveM-servern. Du kan utföra standard RCON-kommandon och se realtidsrespons direkt i verktyget.

IceCon har även extra funktioner som:

- Kommandologg och autokomplettering  
- Serverloggvisare  
- Anpassade knappkommandon  
- Anslutningsprofiler för att hantera flera servrar



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på FiveM-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                  | Beskrivning                                      |
| ------------------------- | ------------------------------------------------- |
| `say <meddelande>`        | Skickar ett meddelande till alla spelare i chatten |
| `start <resource-namn>`   | Startar en specifik serverresurs                  |
| `stop <resource-namn>`    | Stoppar en specifik serverresurs                   |
| `restart <resource-namn>` | Startar om en specifik serverresurs                |
| `ensure <resource-namn>`  | Startar resursen endast om den inte redan körs     |
| `refresh`                 | Laddar om alla resurser från resursmappen          |
| `clear`                   | Rensar serverkonsolens utdata                       |
| `crash`                   | Tvingar fram en serverkrasch (för felsökning)      |
| `quit`                    | Stänger ner servern på ett ordnat sätt              |



## Slutsats

RCON är ett kärnverktyg för fjärradministration av FiveM-spelservrar. Det möjliggör snabb och direkt åtkomst till administrativa funktioner samtidigt som det ger åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverstabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />