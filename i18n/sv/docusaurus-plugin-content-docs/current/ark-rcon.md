---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "Upptäck hur du säkert kan fjärrstyra och hantera ARK: Survival Evolved-servrar utan att behöva gå med i spelet → Läs mer nu"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RCON (Remote Console) är ett nätverksprotokoll som används för att fjärrstyra gameservrar. Det ger tillgång till serverkonsolen utan direkt interaktion med servermiljön. Det gör det möjligt att köra administrativa kommandon, justera konfigurationsparametrar eller hämta serverstatusinformation.

I ARK: Survival Evolved används RCON för att köra serverbaserade kommandon, som att hantera spelare, ändra spelinställningar eller få tillgång till diagnostikdata. Anslutningen skyddas med ett lösenord och sker över en specifik port, tillgänglig via kompatibla RCON-klienter.

En stor fördel med RCON är att det möjliggör serverhantering **utan att behöva vara inloggad i spelet som spelare**. Serveradministratörer kan övervaka och styra ARK: Survival Evolved från externa verktyg, kommandoradsgränssnitt eller webbpaneler, vilket ger flexibilitet och bekvämlighet för fjärrstyrning.

<InlineVoucher />

## Konfiguration

Innan RCON kan användas måste det aktiveras och konfigureras. Detta görs genom att redigera konfigurationsfilen som finns under **Configs** i gameserverns administrationspanel. I filen som heter `GameUserSettings.ini` måste följande rader läggas till eller ändras:

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=define-your-password
```
Den tilldelade RCON-porten hittar du längst ner på inställningssidan under Portöversikt och den måste anges där.



## Ansluta via RCON

För att ansluta till ARK: Survival Evolved-servern via RCON används verktyget **ARKon**. Det finns att ladda ner från denna [Steam-tråd]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/)). Efter att ha laddat ner och installerat verktyget på din dator måste en ny serverpost skapas med följande information:

- Serverns IP-adress  
- RCON-port
- RCON-lösenord 

Efter att ha sparat anslutningsprofilen kan servern väljas från listan och anslutningen etableras. När du är ansluten kan RCON-kommandon köras via det grafiska gränssnittet. ARKon erbjuder även extra funktioner specifikt för ARK: Survival Evolved, som:

- Realtidslista över spelare och online-status  
- Övervakning och interaktion med in-game chat  
- Snabbknappar för vanliga admin-kommandon  
- Loggning av RCON-utdata och kommandohistorik



## RCON-kommandon

När du är ansluten via RCON kan olika administrativa och diagnostiska kommandon köras på ARK: Survival Evolved-servern. Tillgängliga kommandon beror på spelmotorn men inkluderar vanligtvis åtgärder för spelarhantering, statusförfrågningar och serverkontroll.

| Kommando                            | Beskrivning                                           |
|-----------------------------------|--------------------------------------------------------|
| `EnableCheats <password>`         | Aktiverar adminläge på servern (admin-kommandon)      |
| `AdminCheat KickPlayer <Steam64ID>` | Sparkar ut en spelare                                 |
| `AdminCheat BanPlayer <Steam64ID>`  | Bannlyser en spelare                                  |
| `AdminCheat UnbanPlayer <playerName>` | Avbannlyser en spelare                               |
| `AdminCheat Broadcast <message>`   | Skickar ett meddelande till alla spelare              |
| `AdminCheat SaveWorld`            | Sparar världens aktuella status                         |
| `AdminCheat SetTimeOfDay <hh:mm>` | Ställer in spelets tid                                 |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | Teleporterar en spelare till din position        |
| `cheat Slomo <factor>`            | Justerar spelhastigheten                               |
| `AdminCheat GiveItemNum <ItemID> <quantity> <quality> 0` | Spawna föremål i din inventory          |




## Slutsats

RCON är ett kärnverktyg för fjärradministration av ARK: Survival Evolved-gameservrar. Det ger snabb och direkt tillgång till administrativa funktioner samtidigt som det erbjuder åtkomstkontroll via lösenordsskydd. Korrekt och säker konfiguration är avgörande för att garantera serverns stabilitet och skydda mot obehörig åtkomst.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />