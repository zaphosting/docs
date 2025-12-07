---
id: rust-plugins
title: "Rust: Plugins installeren"
description: "Ontdek hoe je jouw Rust-server kunt verbeteren met populaire plugins voor meer customization en betere gameplay → Leer het nu"
sidebar_label: Plugins Installeren
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## Introductie

Met plugins kun je je server nog verder uitbreiden en personaliseren. Hieronder leggen we uit waar je de meest gebruikte plugins vindt en hoe je ze installeert.

<InlineVoucher />


## Voorbereiding

Allereerst moet je de plugins downloaden die je op je server wilt installeren. Een grote selectie plugins vind je op [umod.org (voorheen OXIDE)](https://umod.org/plugins). Tijdens het downloaden krijg je een `.cs` bestand.

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## Installatie

Als je de gewenste plugins hebt gedownload, kun je beginnen met installeren. Dit doe je via **FTP**, dus je hebt een FTP-client nodig om de bestanden naar je server te uploaden. Ben je nog niet bekend met FTP en hoe het werkt? Check dan onze [FTP toegang](gameserver-ftpaccess.md) gids.

De juiste plugin-map vind je hier: `/gXXXXXX/rust-oxide/oxide/plugins`. Upload simpelweg de gedownloade `.cs` plugin-bestanden naar deze map. Het zou er na uploaden ongeveer zo uit moeten zien:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

Meer hoef je niet te doen. Daarmee is de installatie al afgerond. Je kunt daarna in de live console checken of de plugin succesvol is gecompileerd en geladen. De output ziet er zo uit:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Populaire Plugins

Ben je nog op zoek naar de perfecte plugins voor jouw server?

Blader door onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen plugins om je gameplay te verbeteren en je server die finishing touch te geven die ‘ie verdient. Laat je inspireren en vind precies de toevoegingen die bij jouw project passen.

<SearchableItemList items={items} />


## Conclusie

Als je alle stappen hebt gevolgd, zou je plugin nu succesvol geïnstalleerd moeten zijn. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />