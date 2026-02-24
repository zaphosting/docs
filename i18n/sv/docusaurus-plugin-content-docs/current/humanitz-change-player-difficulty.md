---
id: humanitz-change-player-difficulty
title: "HumanitZ: Ändra Spelarsvårighet"
description: "Lär dig hur du justerar spelarsvårighet och överlevnadsinställningar på din HumanitZ-server → Läs mer nu"
sidebar_label: "Ändra Spelarsvårighet"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Spelarsvårigheten i HumanitZ bestämmer hur tuff överlevnadsupplevelsen blir. Från permanent död till hur snabbt dina vitala värden sjunker och banditernas styrka – dessa inställningar påverkar direkt hur utmanande din server känns.

<InlineVoucher />

## Konfiguration

Inställningarna för spelarsvårighet styrs i filen `GameServerSettings.ini`. Du hittar den i din serverpanel under **Configs**. Inuti konfigurationsfilen, leta upp följande parametrar:

````
;När satt till true förlorar spelaren som dog sin karaktär och måste skapa en ny
PermaDeath=false

;0=Förlorar inget, 1=Förlorar ryggsäck och vapen i handen, 2=Föregående + fickor och ryggsäck, 3=Allt ovan + Utrustning
OnDeath=2

;Sömnbrist effekt false=Avstängd true=Påslagen
Sleep=true

;Hur snabbt dina vitala värden sjunker 0=Långsamt, 1=Normal, 2=Snabbt
VitalDrain=1

;Hundkompisens hälsa 0=Låg 1=Standard 2=Hög
CompanionHealth=1

;Hundkompisens skada 0=Låg 1=Standard 2=Hög
CompanionDmg=1

;Tid i minuter för att mänskliga banditer ska respawna, sätt till 0 för att stänga av respawn.
HumanRespawnTimer=90

;Svårighetsgrad för mänskliga banditer där 0=Mycket Lätt, 1=Lätt, 2=Standard, 3=Svår, 4=Mycket Svår, 5=Mareritt
HumanHealth=2

;Hastighet för mänskliga banditer där 0=Mycket Lätt, 1=Lätt, 2=Standard, 3=Svår, 4=Mycket Svår, 5=Mareritt
HumanSpeed=2

;Skada för mänskliga banditer där 0=Mycket Lätt, 1=Lätt, 2=Standard, 3=Svår, 4=Mycket Svår, 5=Mareritt
HumanDamage=2
````

Här är en snabb förklaring av vad varje inställning styr:

- `PermaDeath` – Om satt till `true` förlorar spelare sin karaktär permanent vid död och måste skapa en ny  
- `OnDeath` – Bestämmer hur mycket av inventariet som förloras vid död  
- `Sleep` – Aktiverar eller inaktiverar effekter av sömnbrist  
- `VitalDrain` – Styr hur snabbt hunger, törst och andra vitala värden minskar  
- `CompanionHealth` – Sätter hälsan på hundkompisen  
- `CompanionDmg` – Sätter skadan hundkompisen gör  
- `HumanRespawnTimer` – Bestämmer hur lång tid det tar för mänskliga banditer att respawna (0 stänger av respawn)  
- `HumanHealth` – Justerar banditernas hälsosvårighet  
- `HumanSpeed` – Justerar banditernas rörelsehastighet  
- `HumanDamage` – Justerar banditernas skada  

Ändra värdena efter önskad svårighetsgrad. När du redigerat klart, spara filen och starta om servern för att ändringarna ska börja gälla.



## Exempel på Svårighetsinställningar

### Lätt Överlevnad

Den här setupen ger en mer chill upplevelse med långsammare vitala värden, svagare fiender och ingen permanent död.

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



### Svår Överlevnad

Den här setupen höjer överlevnadstrycket med permanent död, snabbare vitala värden och starkare banditer.

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



## Avslutning

Grattis! Genom att justera svårighetsvärdena i `GameServerSettings.ini` har du nu anpassat spelarsvårigheten på din HumanitZ-server. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />