---
id: humanitz-change-zombie-difficulty
title: "HumanitZ: Ändra Zombie Svårighetsgrad"
description: "Lär dig hur du justerar zombie- och AI-svårighetsinställningar på din HumanitZ-server → Läs mer nu"
sidebar_label: "Ändra Zombie Svårighetsgrad"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Zombie-svårighetsgraden spelar en stor roll för hur överlevnadsupplevelsen i HumanitZ formas. Från zombies styrka och hastighet till spawn-multiplikatorer och AI-raid-event, dessa inställningar avgör hur farlig världen blir.

Alla zombie- och AI-relaterade svårighetsalternativ konfigureras i filen `GameServerSettings.ini` och låter dig ha full kontroll över intensiteten på PvE-möten på din server.

<InlineVoucher />

## Konfiguration

Zombie-svårighetsinställningarna styrs i filen `GameServerSettings.ini`. Du hittar den i din serverhanteringspanel under **Configs**. Inuti konfigurationsfilen, leta upp följande parametrar:

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

Här är en förklaring av vad varje inställning styr:

- `ZombieDiffHealth` – Styr zombiehälsans svårighetsgrad  
- `ZombieDiffSpeed` – Styr zombies rörelsehastighet  
- `ZombieDiffDamage` – Styr zombies skada  
- `ZombieAmountMulti` – Multiplicerar det totala antalet zombies som spawnar  
- `HumanAmountMulti` – Multiplicerar antalet mänskliga banditer som spawnar  
- `ZombieDogMulti` – Multiplicerar antalet zombiehundar som spawnar  
- `ZombieRespawnTimer` – Bestämmer hur lång tid det tar för zombies att respawna (0 stänger av respawn)  
- `AIEvent` – Styr frekvensen av AI-raid-event  

När du gjort dina ändringar, spara filen och starta om servern för att de nya inställningarna ska börja gälla.



## Exempel på Svårighetsförinställningar

### Enkel Zombie-Setup

Denna konfiguration skapar en mer förlåtande PvE-upplevelse med färre fiender och lägre hotnivåer.

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



### Svår Zombie-Setup

Denna konfiguration ökar fiendens styrka, spawnfrekvens och eventfrekvens för en mycket farligare värld.

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



## Slutsats

Grattis! Genom att justera zombie-relaterade värden i `GameServerSettings.ini` har du nu anpassat zombie-svårighetsinställningarna på din HumanitZ-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />