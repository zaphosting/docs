---
id: humanitz-change-zombie-difficulty
title: "HumanitZ: Zombie Moeilijkheid Aanpassen"
description: "Leer hoe je de zombie- en AI-moeilijkheidsinstellingen op je HumanitZ-server aanpast → Ontdek het nu"
sidebar_label: "Zombie Moeilijkheid Aanpassen"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introductie

De moeilijkheidsgraad van zombies speelt een grote rol in hoe je de survival-ervaring in HumanitZ beleeft. Van de kracht en snelheid van zombies tot spawn-multipliers en AI raid-events, deze instellingen bepalen hoe gevaarlijk de wereld wordt.

Alle zombie- en AI-gerelateerde moeilijkheidsopties stel je in via het `GameServerSettings.ini` bestand, waarmee je de intensiteit van PvE-gevechten op je server volledig onder controle hebt.

<InlineVoucher />

## Configuratie

De zombie-moeilijkheidsinstellingen vind je in het `GameServerSettings.ini` bestand. Je opent dit bestand via je serverbeheer paneel onder **Configs**. Zoek in het config-bestand naar de volgende parameters:

```
;Health difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffHealth=1

;Speed difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffSpeed=2

;Damage difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffDamage=3

;Zombie amount multiplier 2 for example would mean twice as many zombies. 0.5 would mean half as many zombies.
ZombieAmountMulti=1

;Human bandit amount multiplier 2 for example would mean twice as many human bandits. 0.5 would mean half as many human bandits.
HumanAmountMulti=1

;Zombie dog mainly appear at night. 2 for example would mean twice as many zombie dogs. 0.5 would mean half as many zombie dogs.
ZombieDogMulti=1

;The time in minutes it takes for zombies to respawn, set to 0 to disable zombie respawning.
ZombieRespawnTimer=90

;The game will sometimes spawn AI events such as zombies or humans raiding your location. 0 = Disabled, 1 = Low, 2 = Default, 3 = High, 4 = Insane
AIEvent=2
```

Hieronder een overzicht van wat elke instelling regelt:

- `ZombieDiffHealth` – Bepaalt de gezondheid van zombies  
- `ZombieDiffSpeed` – Bepaalt de loopsnelheid van zombies  
- `ZombieDiffDamage` – Bepaalt de schade die zombies doen  
- `ZombieAmountMulti` – Vermenigvuldigt het aantal zombies dat spawnt  
- `HumanAmountMulti` – Vermenigvuldigt het aantal menselijke bandieten dat spawnt  
- `ZombieDogMulti` – Vermenigvuldigt het aantal zombiehonden dat spawnt  
- `ZombieRespawnTimer` – Hoe lang het duurt voordat zombies respawnen (0 zet respawn uit)  
- `AIEvent` – Regelt hoe vaak AI raid-events plaatsvinden  

Sla het bestand op na het aanpassen en herstart je server zodat de nieuwe instellingen actief worden.



## Voorbeeld Moeilijkheid Presets

### Makkelijke Zombie Setup

Deze configuratie zorgt voor een relaxtere PvE-ervaring met minder vijanden en minder dreiging.

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### Moeilijke Zombie Setup

Deze configuratie maakt vijanden sterker, verhoogt spawn rates en de frequentie van events voor een veel gevaarlijkere wereld.

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## Conclusie

Gefeliciteerd! Door de zombie-gerelateerde waarden in het `GameServerSettings.ini` bestand aan te passen, heb je de zombie-moeilijkheid op je HumanitZ-server succesvol gecustomized. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />