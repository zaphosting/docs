---
id: hytale-obtain-uuid
title: "Hytale: UUID verkrijgen"
description: "Ontdek hoe je de UUID van een speler vindt of verkrijgt voor gebruik in serverconfiguratie en permissies → Leer het nu"
sidebar_label: UUID verkrijgen
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Elke speler op een Hytale-server wordt intern geïdentificeerd door een UUID, ook wel een Universally Unique Identifier genoemd. Deze identifier is permanent en verandert niet, zelfs niet als de speler later zijn gebruikersnaam aanpast.

UUID's zijn nodig voor verschillende admin-taken zoals het beheren van permissies, toewijzen van groepen, of het verwijzen naar spelers in servercommando’s en configuratiebestanden.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel nog in actieve ontwikkeling is, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

<InlineVoucher />


## UUID verkrijgen

De UUID van een speler kun je direct in het spel opvragen met het ingebouwde chatcommando van de server. Deze methode is vooral handig als de speler al online is en je de UUID meteen nodig hebt.

Log in met voldoende permissies, open de in-game chat en voer het UUID-opzoekcommando uit voor de gewenste speler:

```
/whoami <spelernaam>
```

Na het uitvoeren van het commando reageert de server direct in de chat met de UUID die hoort bij de opgegeven speler. De teruggegeven UUID identificeert die speler uniek en kan gekopieerd worden voor gebruik bij permissiebeheer, groepsindelingen, whitelist-vermeldingen of andere server-side acties.



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## Conclusie

Het verkrijgen van de UUID van een speler is een essentiële stap bij geavanceerd serverbeheer op een Hytale-server. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂


<InlineVoucher />