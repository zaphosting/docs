---
id: conan-rcon
title: "Conan Exiles: RCON"
description: "Upptäck hur du säkert kan fjärrstyra och hantera Conan Exiles-servrar utan att vara inloggad i spelet → Läs mer nu"
sidebar_label: RCON
services:
  - gameserver-conan
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Conan Exiles används RCON för att köra serverbaserade kommandon, som att hantera spelare, ändra spelinställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och körs över en specifik port, som nås via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Conan Exiles via externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och smidighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverns kontrollpanel. I filen som heter `game.ini` måste följande rader läggas till eller ändras:

```cfg
[RconPlugin]
RconEnabled=1
RconPassword=define-your-password
RconPort=XXXXX
```
Den tilldelade RCON-porten hittar du längst ner på inställningssidan under Portöversikt och den måste anges där.



## Ansluta via RCON

För att ansluta till Conan Exiles-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repositoriet](https://github.com/gorcon/rcon-cli). Efter att du laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikt** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste stämma överens med de värden som är konfigurerade i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Conan Exiles-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                    | Beskrivning                      |
| --------------------------- | -------------------------------- |
| `broadcast <message>`       | Skickar ett meddelande till alla spelare |
| `kick <playername>`         | Kickar ut en spelare från servern |
| `ban <playername>`          | Bannlyser en spelare             |
| `unban <playername>`        | Tar bort bannlysning för en spelare |
| `restartserver`             | Startar om servern               |
| `restartserver <seconds>`   | Startar om servern med fördröjning |
| `shutdownserver`            | Stänger ner servern              |
| `shutdownserver <seconds>`  | Stänger ner servern med fördröjning |
| `changemap <mapname>`       | Laddar en annan karta            |
| `setpassword <newpassword>` | Sätter ett nytt RCON-lösenord    |

## Sammanfattning

RCON är ett kärnverktyg för fjärradministration av Conan Exiles gameservrar. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />