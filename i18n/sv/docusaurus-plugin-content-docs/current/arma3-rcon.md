---
id: arma3-rcon
title: "Arma 3: RCON"
description: "Upptäck hur du säkert kan fjärrstyra och hantera Arma 3-servrar utan att behöva gå med i spelet → Läs mer nu"
sidebar_label: RCON
services:
  - gameserver-arma3
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I Arma 3 används RCON för att köra server-sidiga kommandon, som att hantera spelare, ändra gameplay-inställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och körs över en specifik port, åtkomlig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra Arma 3 från externa verktyg, kommandoradsgränssnitt eller webbaserade dashboards, vilket ger flexibilitet och smidighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs direkt i gameserver-administrationen. Under avsnittet **Inställningar** finns ett val som heter **RCON** som måste aktiveras. Ett säkert lösenord bör sättas.

Den tilldelade RCON-porten hittar du längst ner på inställningssidan under **Portöversikt**. 



## Ansluta via RCON

För att ansluta till Arma 3-servern via RCON används verktyget **BattleWarden**. Det finns att ladda ner från [den officiella webbplatsen](https://www.battlewarden.net). Efter att ha laddat ner och installerat verktyget på din dator måste du skapa en ny anslutningsprofil. Följande värden krävs:

- Serverns IP-adress  
- RCON-port  
- RCON-lösenord

När anslutningen är upprättad kan RCON-kommandon köras via det grafiska gränssnittet. Verktyget erbjuder även extra funktioner som spelarlistor, livechatt och kommandologg, beroende på spelets integration.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON-kommandon

När du är ansluten via RCON kan olika administrativa och diagnostiska kommandon köras på Arma 3-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                         | Beskrivning                                        |
|----------------------------------|----------------------------------------------------|
| `#login <password>`             | Logga in som serveradmin                           |
| `#logout`                       | Logga ut från adminstatus                          |
| `#mission <missionName>`       | Startar en ny mission på servern                   |
| `#missions`                    | Lista tillgängliga uppdrag att välja från          |
| `#restart`                     | Startar om det aktuella uppdraget                  |
| `#reassign`                    | Flyttar alla spelare tillbaka till rolltilldelning |
| `#kick <playerID>`             | Kickar en spelare                                  |
| `#exec ban <playerID>`         | Bannlyser en spelare                               |
| `#exec unban <playerID>`       | Avbannlyser en spelare                             |
| `#shutdown`                    | Stänger ner servern                                |



## Sammanfattning

RCON är ett kärnverktyg för fjärradministration av Arma 3-gameservrar. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />