---
id: fivem-optimize-textures
title: "FiveM: Optimera texturer"
description: "Upptäck hur du optimerar GTA5 mod-texturer för att minska storlek och förbättra spelprestanda → Lär dig mer nu"
sidebar_label: Optimera texturer
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Vill du optimera dina GTA5 mod-texturer och minska deras storlek utan att tumma på kvaliteten? I den här guiden visar vi hur du effektivt komprimerar texturer till under 16MB. Med några enkla steg och rätt verktyg kan du förbättra spelets prestanda och spara lagringsutrymme. Det hjälper också till att undvika potentiella problem som:

```
Asset hevo/hevo.ytd uses 166.0 MiB of physical memory. Oversized assets can and will lead to streaming issues (models not loading/rendering, commonly known as 'texture loss', 'city bug' or 'streaming isn't great').
```

<InlineVoucher />


## Förberedelser

Innan du börjar, se till att du har laddat ner och installerat nödvändiga verktyg. Ladda ner **OpenIV** och **XnResize** från deras officiella hemsidor och följ installationsinstruktionerna. Dessa verktyg kommer du använda för att redigera texturerna:

- **OpenIV**  [(Ladda ner)](https://openiv.com/)
- **XnResize** [(Ladda ner)](https://www.xnview.com/en/xnresize/#downloads)



## Konfiguration
När du har laddat ner och installerat verktygen kan du börja redigera texturerna. Leta upp .ytd-filen för din mod i OpenIV och öppna den för att komma åt texturerna. 

![OpenIV Texture Dictionary](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

I OpenIV hittar du alternativet "Export all textures" längst ner till vänster. Klicka på det för att exportera alla texturer i din mod. Spara dem i en mapp inom din vehicle mod-katalog, till exempel under "textures". 



## Optimering

Nu när du har exporterat alla texturer är det dags att redigera och ändra storlek på dem. Starta XnResize på din dator. Dra in alla exporterade .dds-filer i XnResize-fönstret. Du ska nu se alla dina texturer i appen. Under fliken "Action" i XnResize, ställ in bredd och höjd till procent och minska storleken på texturerna till 50% av originalstorleken. Se till att behålla proportionerna.

![XnResize Action Tab](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



Under fliken "Output", välj en målmapp för de redigerade texturerna, till exempel "textures_resized", och ställ in formatet till DDS - Direct Draw Surface.

![XnResize Output Tab](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## Slutsats
När du har redigerat alla texturer och justerat deras storlek, ersätt de gamla texturerna i din mod med de nya, komprimerade versionerna. Du kommer märka att den komprimerade texturstorleken är betydligt mindre, vilket inte bara sparar lagringsutrymme utan också förbättrar spelets prestanda. 

| **Beskrivning**            | **Original Texture Dictionary** | Komprimerad Texture Dictionary | X Gånger Bättre     |
| :-------------------------- | :------------------------------ | :---------------------------- | :----------------- |
| **Komprimerad Storlek**         | 11.8 MB                         | 1.23 MB                        | 9.6x               |
| **Okonprimerad Storlek**       | 164 MB                          | 11 MB                          | 14.9x              |
| **Virtuellt Minne**          | 0.05 MiB                        | 0.05 MiB                       | -                  |
| **Fysiskt Minne**         | 166.00 MiB                      | 10.69 MiB                      | 15.5x              |

Glöm inte att testa texturerna i spelet. Om problem uppstår kan du alltid återställa enskilda texturer till originalstorlek eller använda de ursprungliga .dds-filerna.

<InlineVoucher />