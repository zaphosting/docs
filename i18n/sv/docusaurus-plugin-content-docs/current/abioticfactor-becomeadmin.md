---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: Bli admin"
description: "Lär dig hur du ger spelare adminrättigheter för full kontroll över servern och bättre spelhantering → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I **Abiotic Factor** behöver serveradministratörer högre behörigheter för att kunna hantera spelare, köra serverkommandon eller ändra inställningar under spelets gång.

<InlineVoucher />

## Konfiguration

Konfigurationen görs via konfigurationsfilen `admin.ini`. För att komma åt den, öppna **Configs**-sektionen i din gameserver-administration och hitta `admin.ini`. Som standard ska filen innehålla följande rad, där administratörer kan definieras. Byt ut `ExampleID` mot motsvarande **SteamID64** för de spelare du vill ge adminrättigheter.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```

## Slutsats

När informationen är korrekt tillagd och servern har startats om, kommer den angivna spelaren ha full adminåtkomst i spelet. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂


<InlineVoucher />