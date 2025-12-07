---
id: unturned-workshop
title: "Unturned: Workshop-content op je server installeren"
description: "Ontdek hoe je je Unturned-server kunt pimpen met custom Steam Workshop-content voor een persoonlijke game-ervaring → Leer het nu"
sidebar_label: Workshop Content
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

De Steam Workshop geeft je de kans om je server nog meer te customizen. Hieronder leggen we uit hoe je extra content aan je server toevoegt via de Steam Workshop.

### Voorbereiding

Er zijn verschillende plekken waar je mods, maps, modellen, etc. kunt downloaden. De populairste is de Steam Workshop. Daar vind je veel resources die je op je server kunt installeren. Eerst moet je de gewenste workshop-items vinden. De Steam Workshop voor Unturned vind je hier: [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

Als je een keuze hebt gemaakt, kopieer je de ID van het workshop-item en voeg je die toe in de interface. Afhankelijk van of je de Steam Workshop via je browser of de Steam Client bekijkt, kopieer je de ID zoals hieronder:

- **Steam Client**

  Klik met de rechtermuisknop op de Steam Workshop-pagina van het item en kies 'Kopieer paginalink'. Kopieer de ID uit de URL.

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

  

- **Browser**

  In de URL-balk vind je een reeks cijfers achter **.../?id=**. Kopieer die.

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)





### Content toevoegen

Als je alle gewenste content hebt verzameld, voeg je die toe aan de server. De content geef je op in de **WorkshopDownloadConfig.json** config, die je in de interface onder Configs vindt.

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

We voegen nu de IDs van de verschillende Steam Workshop-items toe aan 'FileIDs'. Het eindresultaat kan er zo uitzien:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // Placeholder (voorbeeld)
    0987654321  // Placeholder (voorbeeld)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "Workshop-bestand update gedetecteerd, afsluiten over: {0}",
  "Shutdown_Kick_Message": "Afsluiten vanwege Workshop-bestand update."
}
```

Daarna moet je de server starten. De toegevoegde content wordt tijdens het opstarten automatisch gedownload. Je ziet dit in de Live Console. De output ziet er zo uit:

```
1 workshop item(s) to download...
Downloading workshop item 1567256534
Successfully downloaded workshop item: 1567256534
```

De content is nu succesvol gedownload, geïnstalleerd en zou actief moeten zijn.

<InlineVoucher />