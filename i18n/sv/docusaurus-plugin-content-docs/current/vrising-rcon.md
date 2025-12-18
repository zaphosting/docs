---
id: vrising-rcon
title: "V Rising: RCON"
description: "Upptäck hur du effektivt kan fjärrstyra och hantera V Rising-servrar utan att vara inloggad i spelet → Läs mer nu"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I V Rising används RCON för att köra serverkommandon, som att hantera spelare, ändra spelinställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och går via en specifik port, tillgänglig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra V Rising från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet vid fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det görs genom att redigera konfigurationsfilen under **Configs** i gameserverns administrationspanel. I filen som heter `ServerHostSettings.json` måste följande poster läggas till eller ändras:

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

Den tilldelade RCON-porten hittar du längst ner på inställningssidan under Portöversikt och måste anges där.



## Ansluta via RCON

För att ansluta till V Rising-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repositoriet](https://github.com/gorcon/rcon-cli). Efter att ha laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikten** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste stämma överens med de värden som är konfigurerade i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på V Rising-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelhantering, statusförfrågningar och serverkontroll.

| Kommando                                   | Beskrivning                                                  |
|--------------------------------------------|--------------------------------------------------------------|
| `adminauth`                                | Aktiverar adminrättigheter för din karaktär (endast i spelet)|
| `admindeauth`                              | Avaktiverar adminrättigheter                                 |
| `banuser <SteamID>`                        | Bannlyser en spelare permanent                               |
| `unbanuser <SteamID>`                      | Tar bort bannlysning för en tidigare bannlyst spelare       |
| `kick <playername>`                        | Kickar omedelbart ut en spelare från servern                 |
| `give <ItemName> <Amount>`                 | Ger föremål direkt till din inventarie                       |
| `teleport <X> <Y>`                         | Teleporterar din karaktär till angivna koordinater           |
| `teleportplayer <name> <X> <Y>`            | Teleporterar en annan spelare till specifika koordinater     |
| `changehealth <value>`                     | Sätter din nuvarande hälsa till ett specifikt värde          |
| `spawn <EntityName> <Amount>`              | Spawna NPC:er, varelser eller andra entiteter                |



## Slutsats

RCON är ett kärnverktyg för fjärradministration av V Rising-gameservrar. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂

<InlineVoucher />