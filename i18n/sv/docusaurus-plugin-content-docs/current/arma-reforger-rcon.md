---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Upptäck hur du säkert kan fjärrstyra och hantera Arma Reforger-servrar för flexibel administration och övervakning → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservers. Det ger tillgång till serverkonsolen utan att behöva interagera direkt med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Arma Reforger används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra gameplay-inställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och körs över en specifik port, som nås via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Arma Reforger från externa verktyg, kommandoradsgränssnitt eller webbaserade dashboards, vilket ger flexibilitet och bekvämlighet vid fjärrdrift.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Det görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverns kontrollpanel. I filen som heter `BEServer_x64.cfg` måste följande rader läggas till eller ändras:

```cfg
RConPort XXXXX
RConPassword define-your-password
```
Den tilldelade RCON-porten hittar du längst ner på inställningssidan under Port-översikten och måste anges där.



## Ansluta via RCON

För att ansluta till Arma Reforger-servern via RCON används verktyget **BattleWarden**. Det finns att ladda ner från [officiella hemsidan](https://www.battlewarden.net). Efter att du laddat ner och installerat verktyget på din dator måste du skapa en ny anslutningsprofil. Följande värden krävs:

- Serverns IP-adress  
- RCON-port  
- RCON-lösenord

När anslutningen är upprättad kan RCON-kommandon köras via det grafiska gränssnittet. Verktyget erbjuder även extra funktioner som spelarlistor, livechatt och kommandologg, beroende på spelets integration.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON-kommandon

När du är ansluten via RCON kan du köra olika administrativa och diagnostiska kommandon på Arma Reforger-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                         | Beskrivning                                        |
|----------------------------------|----------------------------------------------------|
| `#login <password>`             | Logga in som serveradmin                           |
| `#logout`                       | Logga ut från adminstatus                          |
| `#mission <missionName>`       | Startar en ny mission på servern                   |
| `#missions`                    | Lista tillgängliga missioner att välja från        |
| `#restart`                     | Startar om den aktuella missionen                  |
| `#reassign`                    | Flyttar alla spelare tillbaka till rolltilldelning |
| `#kick <playerID>`             | Kickar en spelare                                  |
| `#exec ban <playerID>`         | Bannlyser en spelare                               |
| `#exec unban <playerID>`       | Avbannlyser en spelare                             |
| `#shutdown`                    | Stänger ner servern                                |



## Slutsats

RCON är ett kärnverktyg för fjärradministration av Arma Reforger-gameservers. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som åtkomsten skyddas med lösenord. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂

<InlineVoucher />