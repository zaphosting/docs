---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "Upptäck hur du fjärrstyr Minecraft-servrar med RCON för flexibel, säker kontroll och effektiv serveradministration → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservers. Det ger tillgång till serverkonsolen utan att behöva interagera direkt med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Minecraft används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra spelinställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och körs över en specifik port, som nås via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Minecraft från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det gör du direkt i gameserver-administrationen. Under **Inställningar** finns ett alternativ som heter **RCON** som måste aktiveras. Ett säkert lösenord ska sättas och en giltig port definieras. Detta görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverpanelen. I filen `server.properties` måste följande rader läggas till eller ändras:

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<definiera-ditt-lösenord>
```
Den tilldelade RCON-porten hittar du längst ner på inställningssidan i portöversikten och den måste anges där.



## Ansluta via RCON

För att ansluta till Minecraft-servern via RCON används kommandoradsverktyget **rcon-cli**. Det kan laddas ner från den officiella [GitHub-repositoriet](https://github.com/gorcon/rcon-cli). Efter att ha laddat ner och installerat verktyget på din dator kan du ansluta med serverns IP-adress, RCON-port och RCON-lösenord.

Den tilldelade porten hittar du i **Portöversikten** längst ner på inställningssidan i gameserveradministrationen. Lösenordet och porten måste matcha de värden som är konfigurerade i panelen eller i konfigurationsfilen. Använd följande kommando för att ansluta och direkt köra ett kommando:

```bash
rcon-cli -a <IP>:<PORT> -p <LÖSENORD> kommando
```



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Minecraft-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelhantering, statusförfrågningar och serverkontroll.

| Kommando               | Beskrivning                                 |
|------------------------|---------------------------------------------|
| `list`                 | Visar anslutna spelare                      |
| `say <meddelande>`     | Sänder ett meddelande till alla spelare    |
| `kick <spelare>`       | Kickar en spelare från servern              |
| `ban <spelare>`        | Bannlyser en spelare                        |
| `pardon <spelare>`     | Avbannlyser en spelare                      |
| `op <spelare>`         | Ger operatörsrättigheter till en spelare   |
| `deop <spelare>`       | Tar bort operatörsrättigheter               |
| `time set <värde>`     | Sätter världstid (t.ex. dag, natt, nummer) |
| `gamemode <läge> <spelare>` | Sätter en spelares spelläge             |
| `weather <clear/rain/thunder>` | Ändrar vädret                       |
| `stop`                 | Stoppar servern snyggt                      |



## Slutsats

RCON är ett kärnverktyg för fjärradministration av Minecraft-gameservers. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />