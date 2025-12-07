---
id: dayz-rcon
title: "DayZ: RCON"
description: "Upptäck hur du effektivt kan fjärrstyra och hantera DayZ-spelservrar utan att vara inloggad i spelet → Lär dig mer nu"
sidebar_label: RCON
services:
  - gameserver-dayz
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I DayZ används RCON för att köra serverbaserade kommandon, som att hantera spelare, ändra spelinställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och sker över en specifik port, åtkomlig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra DayZ från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs direkt i gameserver-administrationen. Under avsnittet **Inställningar** finns ett alternativ som heter **RCON** som måste aktiveras. Ett säkert lösenord bör sättas.

Den tilldelade RCON-porten hittar du längst ner på inställningssidan under **Portöversikt**. 



## Ansluta via RCON

För att ansluta till DayZ-servern via RCON används verktyget **BattleWarden**. Det finns att ladda ner från [den officiella webbplatsen](https://www.battlewarden.net). Efter att ha laddat ner och installerat verktyget på din dator måste du skapa en ny anslutningsprofil. Följande värden krävs:

- Serverns IP-adress  
- RCON-port 
- RCON-lösenord

När anslutningen är upprättad kan RCON-kommandon köras via det grafiska gränssnittet. Verktyget erbjuder även extra funktioner som spelarlistor, livechatt och kommandologg, beroende på spelets integration.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON-kommandon

När du är ansluten via RCON kan olika administrativa och diagnostiska kommandon köras på DayZ-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                         | Beskrivning                                          |
|----------------------------------|------------------------------------------------------|
| `#login <password>`             | Loggar in som RCON-administratör                     |
| `#logout`                       | Avslutar admin-sessionen                              |
| `#kick <playerName>`            | Kickar en spelare från servern                        |
| `#ban <playerName>`             | Bannlyser en spelare permanent                        |
| `#exec ban <playerID>`          | Bannlyser en spelare via Steam64ID (BattlEye)        |
| `#exec unban <playerID>`        | Avbannlyser en tidigare bannlyst spelare             |
| `#shutdown`                     | Stänger ner servern                                   |
| `#monitor <seconds>`            | Visar prestandadata var x:e sekund                    |
| `#lock`                         | Låser servern för nya anslutningar                    |
| `#unlock`                       | Låser upp servern igen                                |




## Slutsats

RCON är ett kärnverktyg för fjärradministration av DayZ-spelservrar. Det möjliggör snabb och direkt åtkomst till administrativa funktioner samtidigt som åtkomstkontroll sker via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />