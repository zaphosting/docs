---
id: 7d2d-rcon
title: "7 Days to Die: RCON"
description: "Upptäck hur du säkert kan fjärrstyra och hantera 7 Days to Die-servrar utan att vara inne i spelet för effektiv serveradministration → Läs mer nu"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan att behöva interagera direkt med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I 7 Days to Die används RCON för att köra serverkommandon, som att hantera spelare, ändra gameplay-inställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och går via en specifik port, som nås med kompatibla RCON-klienter.

En stor fördel med RCON är att du kan administrera servern **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra 7 Days to Die från externa verktyg, kommandoradsgränssnitt eller webbdashboards, vilket ger flexibilitet och smidighet vid fjärrhantering.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det gör du direkt i gameserver-administrationen. Under **Inställningar** finns ett val som heter **RCON** som måste aktiveras. Sätt ett säkert lösenord och definiera en giltig port.

Den tilldelade RCON-porten hittar du längst ner på inställningssidan under **Portöversikt**.

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverpanelen. I filen `serverconfig.xml` måste följande rader läggas till eller ändras:

```cfg
<property name="TelnetPassword" value="sätt-ditt-lösenord-här"/>
```
Den tilldelade RCON-porten hittar du längst ner på inställningssidan under Portöversikt och den måste anges där.



## Ansluta via RCON

För att ansluta till 7 Days to Die-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repot](https://github.com/gorcon/rcon-cli). Efter att du laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikt** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste stämma överens med de värden som är konfigurerade i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> -t telnet kommando
```



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på 7 Days to Die-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                | Beskrivning                                    |
|------------------------|------------------------------------------------|
| `dm` eller `debugmenu on`  | Aktiverar utvecklarläge                         |
| `giveme <ItemName> <count>` | Ger dig ett föremål                     |
| `buffplayer <ID> <buff>` | Ger en buff till en spelare                      |
| `tele <x> <y> <z>`     | Teleporterar dig till koordinater                    |
| `settime <seconds>`     | Sätter aktuell speltid                      |
| `setgameday <day>`      | Sätter aktuell speldag                      |
| `spawnentity <ID>`      | Spawna en entitet med ID                         |
| `kick <player>`         | Kickar en spelare från servern                  |
| `ban <address>`         | Bannlyser en IP eller spelare                            |
| `saveworld`             | Sparar världens tillstånd manuellt            |



## Slutsats

RCON är ett kärnverktyg för fjärradministration av 7 Days to Die-gameservrar. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />