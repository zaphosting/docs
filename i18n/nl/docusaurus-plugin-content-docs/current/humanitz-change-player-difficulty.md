---
id: humanitz-change-player-difficulty
title: "HumanitZ: Speler Moeilijkheid Aanpassen"
description: "Leer hoe je de moeilijkheidsgraad en survival-instellingen voor spelers op je HumanitZ-server aanpast → Ontdek het nu"
sidebar_label: "Speler Moeilijkheid Aanpassen"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Intro

De moeilijkheidsgraad van spelers in HumanitZ bepaalt hoe pittig de survival-ervaring is. Van permanente dood tot hoe snel je vitale stats afnemen en hoe sterk bandieten zijn, deze instellingen bepalen direct hoe uitdagend jouw server aanvoelt.

<InlineVoucher />

## Configuratie

De moeilijkheidsinstellingen voor spelers regel je in het `GameServerSettings.ini` bestand. Je vindt dit bestand in je serverbeheer paneel onder **Configs**. Zoek in het config-bestand naar de volgende parameters:

````
;Wanneer op true gezet, verliest de speler die sterft zijn karakter en moet een nieuwe maken
PermaDeath=false

;0=Verliest niets, 1=Verliest rugzak en wapen in hand, 2=Vorige + zakken en rugzak, 3=Alles + uitrusting
OnDeath=2

;Effect van slaaptekort false=Uitgeschakeld true=Ingeschakeld
Sleep=true

;Hoe snel je vitale stats afnemen 0=Langzaam, 1=Normaal, 2=Snel
VitalDrain=1

;Gezondheid van hondenvriend 0=Laag 1=Standaard 2=Hoog
CompanionHealth=1

;Schade van hondenvriend 0=Laag 1=Standaard 2=Hoog
CompanionDmg=1

;Tijd in minuten voordat menselijke bandieten respawnen, 0 = geen respawn
HumanRespawnTimer=90

;Moeilijkheid menselijke bandieten gezondheid 0=Zeer makkelijk, 1=Makkelijk, 2=Standaard, 3=Moeilijk, 4=Zeer moeilijk, 5=Nachtmerrie
HumanHealth=2

;Moeilijkheid menselijke bandieten snelheid 0=Zeer makkelijk, 1=Makkelijk, 2=Standaard, 3=Moeilijk, 4=Zeer moeilijk, 5=Nachtmerrie
HumanSpeed=2

;Moeilijkheid menselijke bandieten schade 0=Zeer makkelijk, 1=Makkelijk, 2=Standaard, 3=Moeilijk, 4=Zeer moeilijk, 5=Nachtmerrie
HumanDamage=2
````

Hieronder een korte uitleg van wat elke instelling doet:

- `PermaDeath` – Staat op `true`? Dan verlies je je karakter permanent bij de dood en moet je een nieuwe maken  
- `OnDeath` – Bepaalt hoeveel inventaris je verliest bij de dood  
- `Sleep` – Zet het effect van slaaptekort aan of uit  
- `VitalDrain` – Regelt hoe snel honger, dorst en andere vitale stats afnemen  
- `CompanionHealth` – Bepaalt de gezondheid van je hondenvriend  
- `CompanionDmg` – Bepaalt hoeveel schade je hondenvriend doet  
- `HumanRespawnTimer` – Hoe lang het duurt voordat menselijke bandieten respawnen (0 = geen respawn)  
- `HumanHealth` – Moeilijkheidsgraad van bandieten qua gezondheid  
- `HumanSpeed` – Moeilijkheidsgraad van bandieten qua snelheid  
- `HumanDamage` – Moeilijkheidsgraad van bandieten qua schade  

Pas de waardes aan naar jouw gewenste moeilijkheid. Na het aanpassen sla je het bestand op en herstart je de server, zodat de nieuwe instellingen actief worden.



## Voorbeeld Moeilijkheidsprofielen

### Easy Survival Setup

Deze setup zorgt voor een relaxtere ervaring met langzamere vitale afname, zwakkere vijanden en geen permanente dood.

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### Hard Survival Setup

Deze setup maakt het survivalen pittiger met permanente dood, snellere vitale afname en sterkere bandieten.

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## Afronding

Nice! Door de moeilijkheidswaarden in `GameServerSettings.ini` aan te passen, heb je de speler-moeilijkheid op je HumanitZ-server helemaal naar jouw smaak gezet. Heb je nog vragen of hulp nodig? Onze support staat elke dag voor je klaar! 🙂

<InlineVoucher />