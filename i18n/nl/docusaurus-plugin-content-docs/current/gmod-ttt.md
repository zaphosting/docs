---
id: gmod-ttt
title: "Garry's Mod: Configuratie"
description: "Ontdek hoe je je TTT-serverinstellingen optimaliseert voor betere gameplay en rondebeheer → Leer het nu"
sidebar_label: Garry's Mod TTT Configuratie
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## De Configuratie van je TTT-Server

**Belangrijk: Zet je server uit voor alle wijzigingen.**

De basisconfiguratie kan je makkelijk doen via ons webinterface, bijvoorbeeld servernaam, Rcon- en serverwachtwoord.

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

Als je de server naar wens hebt ingesteld, kunnen we verder met het configureren van de specifieke instellingen van de TTT-gamemode. Je kunt hiervoor ons webinterface gebruiken, of het bestand via ftp aanpassen.

Je vindt de Configuratie Editor in ons webinterface onder het tabblad "Configs", open daar het server.cfg bestand.
In ons webinterface vind je deze functie onder "Configs", daar open je de server.cfg

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

Daar vind je de waarden om de gameplay op je TTT-server aan te passen, de belangrijkste variabelen snel uitgelegd:

<InlineVoucher />

## Ronden en Mapwissel

ttt_round_limit  
:::info  
Het maximale aantal ronden voordat de map wordt gewisseld. (Standaard: 6)  
:::

ttt_time_limit_minutes  
:::info  
Het maximale aantal minuten voordat de map wordt gewisseld of er een stemming wordt gestart. (Standaard: 75)  
:::

ttt_postround_dm  
:::info  
Schakelt schade in na het einde van een ronde. Kills worden niet geregistreerd voor score, dus het is een free-for-all. (Standaard: 1)  
:::

ttt_ragdoll_pinning_innocents  
:::info  
Laat ook niet-verraders lichamen vastpinnen. (Standaard: 1)  
:::

## Gameplay

ttt_traitor_pct  
:::info  
Percentage van het totaal aantal spelers dat verrader wordt. Het aantal spelers wordt vermenigvuldigd met dit getal en naar beneden afgerond. Als het resultaat minder dan 1 is of meer dan het aantal spelers, wordt het begrensd. (Standaard: 0.25)  
:::

ttt_traitor_max  
:::info  
Maximaal aantal verraders. (Standaard: 32)  
:::

ttt_detective_pct  
:::info  
Percentage van het totaal aantal spelers dat detective wordt. (Standaard: 0.13)  
:::

ttt_detective_max  
:::info  
Maximaal aantal detectives. Kan gebruikt worden om detectives te limiteren of uit te schakelen. (Standaard: 32)  
:::

ttt_detective_min_players  
:::info  
Minimaal aantal spelers voordat detectives meedoen. (Standaard: 5)  
:::

ttt_detective_karma_min  
:::info  
Als de Karma van een speler onder dit punt zakt, wordt de kans kleiner dat hij als detective wordt gekozen. (Standaard: 600)  
:::

ttt_minimum_players  
:::info  
Aantal spelers dat aanwezig moet zijn voordat de ronde begint. Dit wordt gecontroleerd vóór de voorbereidingsfase en vóór de ronde start. (Standaard: 2)  
:::

## DNA

ttt_killer_dna_range  
:::info  
Maximale afstand waarbinnen een DNA-monster van de moordenaar op het lijk van het slachtoffer wordt geplaatst. (Standaard: 300)  
:::

## Karma

ttt_karma  
:::info  
Schakelt het karma-systeem in. Spelers starten met een bepaald karma en verliezen dit als ze "teamgenoten" beschadigen/doden (bijv. onschuldige als ze onschuldig zijn, verrader als verrader). Hoeveel je verliest hangt af van het karma van degene die je hebt geraakt of gedood. (Standaard: 1)  
:::

ttt_karma_strict  
:::info  
Als ingeschakeld, neemt de schade-penalty sneller toe naarmate karma daalt. Als strict uitstaat, is de schade-penalty laag zolang spelers boven de 800 blijven. (Standaard: 1)  
:::

ttt_karma_starting  
:::info  
Startkarma van spelers. Wil je dat spelers een schadebonus kunnen "verdienen", zet dit dan op ongeveer 850. Schone rondes spelen laat ze stijgen naar 1000 en iets meer schade doen dan een nieuwe speler. (Standaard: 1000)  
:::

ttt_karma_max  
:::info  
Maximaal karma dat een speler kan hebben. Hogere waarden dan 1000 geven geen schadebonus, maar wel een buffer voordat een schade-penalty begint. (Standaard: 1000)  
:::

ttt_karma_ratio  
:::info  
De verhouding van de schade die gebruikt wordt om te berekenen hoeveel karma van het slachtoffer wordt afgetrokken van de aanvaller. (Standaard: 0.001)  
:::

ttt_karma_kill_penalty  
:::info  
Alle karma-penalty's zijn gebaseerd op toegebrachte schade. De kill-penalty is een extra hoeveelheid "schade" die je krijgt bij het doden van iemand. Als dit 100 is en je maakt een headshot met een geweer, wordt je gestraft alsof je 200 schade hebt toegebracht. (Standaard: 15)  
:::

ttt_karma_round_increment  
:::info  
De basishoeveelheid waarmee ieders karma aan het einde van elke ronde "hersteld" wordt. (Standaard: 5)  
:::

ttt_karma_clean_bonus  
:::info  
Als een speler deze ronde geen teamgenoot heeft beschadigd of gedood, krijgt hij extra 30 karma terug. (Standaard: 30)  
:::

ttt_karma_traitordmg_ratio  
:::info  
Zoals ttt_karma_ratio, maar voor de karma-beloning bij het beschadigen van een verrader. Standaard wordt het beschadigen van een verrader beloond met ongeveer 1/4 van de penalty die je zou krijgen als het een onschuldige met vol karma was. (Standaard: 30)  
:::

ttt_karma_traitorkill_bonus  
:::info  
Bonus karma voor het doden van een verrader. (Standaard: 40)  
:::

ttt_karma_low_autokick  
:::info  
Speelers met een laag karma worden automatisch gekickt aan het einde van een ronde. (Standaard: 1)  
:::

ttt_karma_low_amount  
:::info  
Het karma-niveau waarbij spelers aan het einde van de ronde worden gekickt. (Standaard: 300)  
:::

ttt_karma_low_ban  
:::info  
Als low_autokick aanstaat, worden spelers ook verbannen als dit aanstaat. Geen effect als autokick uitstaat. (Standaard: 1)  
:::

ttt_karma_low_ban_minutes  
:::info  
Aantal minuten dat spelers worden verbannen. (Standaard: 60)  
:::

ttt_karma_persist  
:::info  
Slaat het karma van een speler op in persistente opslag aan het einde van de ronde of bij disconnect. Bij opnieuw verbinden wordt het geladen. Karma blijft dus behouden, ook bij mapwissel. (Standaard: 1)  
:::

ttt_karma_clean_half  
:::info  
Als het karma van een speler boven het startniveau ligt (dus als de max hoger is ingesteld), worden alle karma-stijgingen verminderd op basis van hoe ver het karma boven dat startniveau ligt. Het stijgt dus langzamer naarmate het hoger is. (Standaard: 0.25)  
:::

Als je alle variabelen naar wens hebt aangepast, is de volgende stap om je wijzigingen op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

Daarna kun je je server starten!

<InlineVoucher />