---
id: factorio-rcon
title: "Factorio: RCON"
description: "Upptäck hur du fjärrstyr och hanterar din Factorio-server för effektiv administration och gameplay-justeringar → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Detta gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Factorio används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra gameplay-inställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och körs över en specifik port, åtkomlig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Factorio från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet vid fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs direkt i gameserver-administrationen. Under avsnittet **Inställningar** finns ett val som heter **RCON** som måste aktiveras. Ett säkert lösenord bör sättas.

Den tilldelade RCON-porten hittar du längst ner på inställningssidan under **Portöversikt**. 



## Ansluta via RCON

För att ansluta till Factorio-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repositoriet](https://github.com/gorcon/rcon-cli). Efter att ha laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikt** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste matcha de värden som är konfigurerade i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Factorio-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarkontroll, statusförfrågningar och serverhantering.

| Kommando                        | Beskrivning                                          |
|--------------------------------|------------------------------------------------------|
| `/help`                        | Visar alla tillgängliga kommandon                    |
| `/players`                     | Listar alla anslutna spelare                          |
| `/kick <player>`               | Kickar en spelare från servern                        |
| `/ban <player>`                | Bannlyser en spelare permanent                        |
| `/unban <player>`              | Avbannlyser en tidigare bannlyst spelare             |
| `/admins`                      | Visar listan över serveradministratörer              |
| `/promote <player>`            | Ger adminrättigheter till en spelare                  |
| `/demote <player>`             | Tar bort adminrättigheter från en spelare             |
| `/save`                        | Sparar det aktuella världstillståndet                  |
| `/server-save`                 | Triggerar en manuell serversparning                    |



## Slutsats

RCON är ett kärnverktyg för fjärradministration av Factorio-gameservrar. Det möjliggör snabb och direkt åtkomst till administrativa funktioner samtidigt som åtkomstkontroll sker via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverstabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />