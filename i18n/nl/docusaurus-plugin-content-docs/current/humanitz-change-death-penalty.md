---
id: humanitz-change-death-penalty
title: "HumanitZ: Death Penalty Aanpassen"
description: "Ontdek hoe je de death penalty instellingen op je HumanitZ-server aanpast → Leer het nu"
sidebar_label: Death Penalty Aanpassen
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## Intro

De death penalty in HumanitZ bepaalt wat een speler verliest na het overlijden. Afhankelijk van de speelstijl op je server, wil je misschien een meer vergevingsgezinde survival ervaring of juist een strenger systeem dat de spanning en het risico verhoogt. 

<InlineVoucher />



## Configuratie

De death penalty wordt geregeld in het `GameServerSettings.ini` bestand. Je vindt dit bestand in je serverbeheer paneel onder **Configs**. Zoek in het configbestand naar de volgende parameter:

```
;0=Lose nothing, 1=Lose backpack and weapon in hand, 2=Previous + pockets and backpack, 3=All previous + Equipment
OnDeath=2
```

De waarde achter `OnDeath=` bepaalt hoeveel van de inventaris van een speler verloren gaat bij overlijden:

- `0` – Spelers verliezen niks  
- `1` – Spelers verliezen hun rugzak en het wapen dat ze in hun hand hebben  
- `2` – Vorige + inhoud van zakken en rugzak  
- `3` – Alles van hierboven + uitrusting  

Om de penalty aan te passen, verander je simpelweg het getal naar de gewenste instelling. Sla het bestand op en herstart de server zodat de nieuwe instelling actief wordt.



## Afsluiting

Gefeliciteerd! Door de `OnDeath` waarde in het `GameServerSettings.ini` bestand te wijzigen, heb je de death penalty op je HumanitZ-server succesvol ingesteld. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />