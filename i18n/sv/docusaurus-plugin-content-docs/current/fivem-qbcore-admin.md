---
id: fivem-qbcore-admin
title: "FiveM: Bli admin med QBCore"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över din server och bättre in-game hantering → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och komplett administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge administratörsrättigheter på din server beskrivs nedan.

<InlineVoucher />

## Konfiguration

Konfigurationen av administratörsrättigheterna görs via konfigurationsfilen ``server.cfg``. Logga in i txAdmin-gränssnittet och öppna CFG Editorn. Navigera sedan till slutet av konfigurationsfilen tills du når `Permissions`.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore stödjer flera spelaridentifierare, inklusive FiveM IDs (`identifier.fivem:`), Rockstar-licenser (`identifier.license:`) och Discord IDs (`identifier.discord:`). Dessa identifierare kan du hämta direkt från ditt txAdmin-gränssnitt. Du kan sedan välja om du vill ge dem GOD, Admin eller Mod-status.

När du har fått tag på identifierarna och bestämt vilken status du vill sätta, kan du tilldela individuella spelarrättigheter genom att lägga till dem i din `server.cfg`. Lägg till en av dessa tre tillgängliga alternativ som en ny rad under permissions-sektionen:

```
add_principal identifier.license:xxxxxx qbcore.god   # Spelarnamn
add_principal identifier.license:xxxxxx qbcore.admin # Spelarnamn
add_principal identifier.license:xxxxxx qbcore.mod   # Spelarnamn
```

Ett exempel på hur det kan se ut i slutändan:

```
## Permissions ##
add_ace group.admin command allow # tillåt alla kommandon
# Deployer Note: denna admin master har inga identifierare för automatisk tillägg.
# add_principal identifier.discord:111111111111111111 group.admin #exempel

add_principal identifier.fivem:16219250 qbcore.admin # Spelarnamn
```

## Avslutning

Om du har följt alla steg korrekt är du nu admin på din egen server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />