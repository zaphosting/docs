---
id: unturned-workshop
title: "Unturned: Installera Workshop-innehåll på servern"
description: "Upptäck hur du kan pimpa din Unturned-server med custom Steam Workshop-innehåll för en personlig spelupplevelse → Läs mer nu"
sidebar_label: Workshop-innehåll
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Steam Workshop ger dig möjligheten att skräddarsy din server ännu mer. Här nedan förklarar vi hur du kan lägga till mer innehåll på din server via Steam Workshop.

### Förberedelser

Det finns flera källor där du kan ladda ner mods, kartor, modeller osv. Den populäraste är Steam Workshop. Där hittar du massor av resurser som du kan installera på din server. Först måste du hitta de workshop-objekt du vill ha. Steam Workshop för Unturned hittar du här: [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

När du bestämt dig kopierar du ID:t för workshop-objektet och lägger in det i gränssnittet. Beroende på om du surfar i Steam Workshop via webbläsaren eller Steam-klienten kan du kopiera ID:t så här:

- **Steam-klienten**

  Högerklicka på Steam Workshop-sidan för objektet och välj Kopiera sidans URL. Kopiera ID:t från URL:en.

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

  

- **Webbläsare**

  I URL-fältet hittar du en sifferkombination efter **.../?id=**. Kopiera den.

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)





### Lägg till innehåll

När du samlat ihop de önskade objekten lägger du till dem på servern. De önskade objekten specificeras i **WorkshopDownloadConfig.json**-filen som du hittar under Configs i gränssnittet.

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

Vi lägger nu till ID:n för varje Steam Workshop-objekt i 'FileIDs'. Resultatet kan se ut så här:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // Exempel (Placeholder)
    0987654321  // Exempel (Placeholder)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Workshop-filuppdatering upptäckt, stänger ner om: {0}",
  "Shutdown_Kick_Message": "Nedstängning för Workshop-filuppdatering."
}
```

Efter det startar du servern. Det tillagda innehållet laddas ner automatiskt under uppstarten. Du kan följa det i Live Console. Utdatan bör se ut så här:

```
1 workshop item(s) to download...
Downloading workshop item 1567256534
Successfully downloaded workshop item: 1567256534
```

Innehållet är nu nedladdat, installerat och ska vara aktivt.

<InlineVoucher />