---
id: fivem-optimize-textures
title: "FiveM: Textures optimaliseren"
description: "Ontdek hoe je GTA5 mod textures optimaliseert om de grootte te verkleinen en de gameprestaties te verbeteren → Leer het nu"
sidebar_label: Textures optimaliseren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Wil je je GTA5 mod textures optimaliseren en hun grootte verkleinen zonder in te leveren op kwaliteit? In deze gids laten we je zien hoe je textures effectief kunt comprimeren tot onder de 16MB. Met een paar simpele stappen en de juiste tools verbeter je de prestaties van je game en bespaar je opslagruimte. Dit helpt ook om mogelijke problemen te voorkomen zoals:

```
Asset hevo/hevo.ytd gebruikt 166.0 MiB fysieke geheugen. Te grote assets kunnen en zullen leiden tot streamingproblemen (modellen laden/niet renderen, ook wel bekend als 'texture loss', 'city bug' of 'streaming isn't great').
```

<InlineVoucher />


## Voorbereiding

Voordat je begint, zorg dat je de benodigde tools hebt gedownload en geïnstalleerd. Download **OpenIV** en **XnResize** van de officiële websites en volg de installatie-instructies. Deze tools gebruik je om de textures te bewerken:

- **OpenIV**  [(Download)](https://openiv.com/)
- **XnResize** [(Download)](https://www.xnview.com/en/xnresize/#downloads)



## Configuratie
Als je de tools hebt geïnstalleerd, kun je beginnen met het bewerken van de textures. Zoek het .ytd-bestand van je mod op in OpenIV en open het om toegang te krijgen tot de textures.

![OpenIV Texture Dictionary](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

In OpenIV vind je linksonder de optie "Export all textures". Klik hierop om alle textures van je mod te exporteren. Sla ze op in een map binnen je vehicle mod directory, bijvoorbeeld onder "textures".



## Optimalisatie

Nu je alle textures hebt geëxporteerd, is het tijd om ze te bewerken en te verkleinen. Start XnResize op je computer. Sleep alle geëxporteerde .dds-bestanden in het XnResize-venster. Je ziet nu al je textures in de app. Ga naar het tabblad "Action" in XnResize, zet breedte en hoogte op procent en verklein de textures naar 50% van hun originele grootte. Zorg dat de verhouding behouden blijft.

![XnResize Action Tab](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



Ga naar het tabblad "Output", kies een doelmap voor de bewerkte textures, bijvoorbeeld "textures_resized", en stel het formaat in op DDS - Direct Draw Surface.

![XnResize Output Tab](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## Conclusie
Nadat je alle textures hebt bewerkt en verkleind, vervang je de oude textures in je mod door de nieuwe, gecomprimeerde versies. Je zult merken dat de gecomprimeerde textures veel kleiner zijn, wat niet alleen opslagruimte bespaart maar ook de prestaties van je game verbetert.

| **Omschrijving**           | **Originele Texture Dictionary** | Gecomprimeerde Texture Dictionary | X Keer Beter      |
| :-------------------------- | :------------------------------ | :---------------------------- | :----------------- |
| **Gecomprimeerde Grootte** | 11.8 MB                         | 1.23 MB                        | 9.6x               |
| **Ongecomprimeerde Grootte** | 164 MB                          | 11 MB                          | 14.9x              |
| **Virtueel Geheugen**      | 0.05 MiB                        | 0.05 MiB                       | -                  |
| **Fysiek Geheugen**        | 166.00 MiB                      | 10.69 MiB                      | 15.5x              |

Vergeet niet om de textures in de game te testen. Als er problemen optreden, kun je altijd individuele textures terugzetten naar hun originele grootte of de originele .dds-bestanden gebruiken.

<InlineVoucher />