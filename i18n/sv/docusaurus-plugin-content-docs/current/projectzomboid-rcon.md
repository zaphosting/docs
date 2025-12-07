---
id: projectzomboid-rcon
title: "Project Zomboid: RCON"
description: "Upptäck hur du säkert kan fjärrstyra och hantera Project Zomboid-servrar utan att vara inne i spelet → Läs mer nu"
sidebar_label: RCON
services:
  - gameserver-projectzomboid
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan att behöva interagera direkt med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Project Zomboid används RCON för att köra serverbaserade kommandon, som att hantera spelare, ändra spelinställningar eller få tillgång till diagnostikdata. Anslutningen skyddas av ett lösenord och körs över en specifik port, som nås via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Project Zomboid från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och smidighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverns kontrollpanel. I filen som heter `servertest.ini` måste följande rader läggas till eller ändras:

```cfg
RCONPort=XXXXX
RCONPassword=define-your-password
```
Den tilldelade RCON-porten hittar du längst ner på inställningssidan under Portöversikt och den måste anges där.



## Ansluta via RCON

För att ansluta till Project Zomboid-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repot](https://github.com/gorcon/rcon-cli). Efter att du laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikt** längst ner på inställningssidan i gameserver-administrationen. Lösenordet och porten måste stämma överens med värdena som är konfigurerade i panelen eller konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Project Zomboid-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                          | Beskrivning                             |
| -------------------------------- | --------------------------------------- |
| `/grantadmin <username>`         | Ger adminrättigheter till en spelare    |
| `/removeadmin <username>`        | Tar bort adminrättigheter från en spelare |
| `/save`                          | Sparar världen manuellt                 |
| `/kickuser <username>`           | Kickar en spelare från servern          |
| `/banuser <username>`            | Bannlyser en spelare                    |
| `/unbanuser <username>`          | Avbannlyser en spelare                  |
| `/adduser <username> <password>` | Skapar en ny användare med lösenord    |
| `/godmod <username>`             | Växlar gudläge för angiven användare   |
| `/teleport <Name1> <Name2>`      | Teleporterar Name1 till Name2           |
| `/chopper`                       | Simulerar en helikopterflygning         |



## Sammanfattning

RCON är ett kärnverktyg för fjärradministration av Project Zomboid-gameservrar. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />