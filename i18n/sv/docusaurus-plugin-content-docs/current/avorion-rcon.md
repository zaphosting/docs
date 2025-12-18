---
id: avorion-rcon
title: "Avorion: RCON"
description: "Upptäck hur du fjärrstyr Avorion-servrar med RCON för flexibel, säker kontroll utan att behöva gå med i spelet → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-avorion
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Avorion används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra gameplay-inställningar eller få tillgång till diagnostikdata. Anslutningen skyddas av ett lösenord och körs över en specifik port, åtkomlig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Avorion från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs direkt i gameserver-administrationen. Under **Inställningar** finns ett val som heter **RCON** som måste aktiveras. Ett säkert lösenord bör sättas.

Den tilldelade RCON-porten hittar du längst ner på inställningssidan under **Portöversikt**. 



## Ansluta via RCON

För att ansluta till Avorion-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repot](https://github.com/gorcon/rcon-cli). Efter att ha laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikt** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste matcha värdena som är konfigurerade i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Avorion-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                                   | Beskrivning                                               |
|--------------------------------------------|-----------------------------------------------------------|
| `/save`                                     | Sparar den aktuella spelvärlden                           |
| `/status`                                   | Visar server- och spelarstatus                            |
| `/kick <playername>`                        | Kickar en spelare från servern                            |
| `/ban <playername>`                         | Bannlyser en spelare från servern                         |
| `/unban <playername>`                       | Tar bort en spelarbannlysning                             |
| `/teleport <x> <y>`                         | Teleporterar spelaren till angivna sektorkoordinater     |
| `/tpto <playername>`                        | Teleporterar till en annan spelare                        |
| `/sethome`                                  | Sätter aktuell sektor som hem                             |
| `/home`                                     | Teleporterar dig till ditt hemsektor                      |
| `/give <itemName> <amount>`                 | Ger dig föremål eller resurser                            |




## Slutsats

RCON är ett kärnverktyg för fjärradministration av Avorion-gameservrar. Det möjliggör snabb och direkt åtkomst till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />