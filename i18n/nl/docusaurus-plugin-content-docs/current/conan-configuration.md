---
id: conan-configuration
title: "Conan Exiles: Stel je eigen server in"
description: "Ontdek hoe je je Conan Exiles-serverinstellingen kunt aanpassen voor optimale gameplay en veiligheid → Leer het nu"
sidebar_label: Serverconfiguratie
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Serverconfiguratie

Conan Exiles-servers zijn uitgebreid te configureren. De configuratie van de server gebeurt via de config-bestanden. Je vindt ze in de webinterface onder de game server administratie bij Configs. Open hiervoor het **ServerSettings.ini** configuratiebestand.



![](https://screensaver01.zap-hosting.com/index.php/s/HSqXbCnS62s9mEx/preview)



Hieronder vind je een gecategoriseerd overzicht van alle relevante commando’s die je kunt gebruiken om je server helemaal naar wens in te stellen. Sommige commando’s staan standaard niet in de config. Die kun je gewoon achteraf toevoegen.

<InlineVoucher />

## Algemeen

In de algemene instellingen vind je alle relevante commando’s om de servernaam, wachtwoorden, anti-cheat en meer aan te passen.

| Optie                             | Beschrijving                                                  | Config commando                |
| -------------------------------- | ------------------------------------------------------------- | ----------------------------- |
| Servernaam                       | Naam van je server.                                           | ServerName="..."              |
| Aantal spelers                  | Maximaal aantal spelers                                       | Afhankelijk van pakket         |
| Message Of The Day              | Welkomstbericht van de dag                                    |                               |
| Serverwachtwoord                | Hier kun je het serverwachtwoord instellen                    | ServerMessageOfTheDay="..."   |
| Adminwachtwoord                 | Toegang om admin te worden. Lees er meer over in de Become an admin gids | AdminPassword="..."           |
| BattlEye ingeschakeld          | Zet BattlEye AntiCheat aan                                    | IsBattlEyeEnabled=            |
| PVP ingeschakeld               | Zet PVP aan of uit. 1 = aan, 0 = uit                          | PVPEnabled=                   |
| Tijdrestrictie PvP             | Als deze optie aan staat, kan er alleen binnen bepaalde tijden gevochten worden | RestrictPVPTime=              |
| PvP Blitz ingeschakeld         | Zet PvPBlitz aan of uit. 1 = aan, 0 = uit (standaard)         | PVPBlitzServer=               |
| Tijdrestrictie PvP bouwschade | Als deze optie aan staat, kunnen spelers alleen binnen bepaalde tijden gebouwen aanvallen en slopen | RestrictPVPBuildingDamageTime= |
| Community                     | Bepaalt de communitystijl: 0=None 1=Purist 2=Relaxed 3=Hard Core 4=Role Playing 5=Experimental | ServerCommunity=              |
| Serverregio                   | Kies je serverregio voor betere filtering in de serverlijst. 0 = Europa, 1 = Noord-Amerika, 2 = Azië, 3 = Australië, 4 = Zuid-Amerika, 5 = Japan | serverRegion=                 |
| Geen eigendom                 | Als deze optie aan staat, zijn er geen eigendomsregels. Iedereen kan alle kisten looten, machines gebruiken, gebouwen mijnen, etc. 1 = aan, 0 = uit (standaard) | NoOwnership=                  |
| Containers negeren eigendom  | Als deze optie aan staat, zijn alle containers open voor andere spelers. 1 = aan, 0 = uit | ContainersIgnoreOwnership=    |
| Kan schade aan spelersgebouwen | Als deze optie aan staat, kunnen spelers elkaars gebouwen aanvallen en slopen. 1 = aan, 0 = uit | CanDamagePlayerOwnedStructures= |
| Kan spelers schade doen       | Als deze optie aan staat, kunnen spelers elkaar verwonden. 1 = aan, 0 = uit | bCanBeDamaged=                |
| Zandstorm inschakelen         | Hiermee kunnen er periodiek zandstormen over de Exiled Lands waaien. | EnableSandStorm=              |
| Max clan grootte              | Bepaalt de maximale grootte van clans op de server. Als een clan deze limiet bereikt, kunnen er geen nieuwe leden meer bij. | clanMaxSize=                  |
| Maximale naaktheid            | Bepaalt de maximale naaktheid op de server. Dit overschrijft de clientoptie. 0 = geen, 1 = gedeeltelijk, 2 = volledig | MaxNudity=                    |
| Server Voice Chat             | Bepaalt of voice chat in het spel aan of uit staat. 1 = aan, 0 = uit | serverVoiceChat=              |



## Progressie

In de Progressie-instellingen vind je alle relevante commando’s om de XP-ervaring van spelers aan te passen.

| Optie                       | Beschrijving                                                  | Config commando             |
| --------------------------- | ------------------------------------------------------------- | -------------------------- |
| Player XP Rate Multiplier   | Vermenigvuldigt alle soorten XP die spelers krijgen. Hiermee pas je de voortgang voor alle activiteiten aan. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPRateMultiplier=    |
| Player XP Time Multiplier   | Conan Exiles geeft passief XP over tijd voor overleven. Dit commando vermenigvuldigt de snelheid waarmee spelers deze XP krijgen. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPTimeMultiplier=    |
| Player XP Kill Multiplier   | Vermenigvuldigt de XP die spelers krijgen voor het doden van monsters en spelers. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPKillMultiplier=    |
| Player XP Harvest Multiplier| Vermenigvuldigt de XP die spelers krijgen voor het verzamelen. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPHarvestMultiplier= |
| Player XP Craft Multiplier  | Vermenigvuldigt de XP die spelers krijgen voor crafting. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPCraftMultiplier=   |



## Tijd

In de Tijd-instellingen vind je alle relevante commando’s om de tijd aan te passen. Zo kun je dagen en nachten langer of korter maken.

| Optie               | Beschrijving                                                  | Config commando        |
| ------------------- | ------------------------------------------------------------- | --------------------- |
| Dagcyclus snelheid  | Vermenigvuldigt de snelheid van de hele 24-uurs cyclus. De onderdelen hieronder kun je apart aanpassen. De multiplier wordt bovenop die aanpassingen toegepast. | DayCycleSpeedScale=   |
| Daglicht snelheid   | Daguren zijn tussen 7:00 en 16:59 game tijd. Deze multiplier vergroot de duur van de daguren. | DayTimeSpeedScale=    |
| Nachtsnelheid       | Nachturen zijn tussen 19:00 en 4:59 game tijd. Deze multiplier vergroot de duur van de nachturen. | NightTimeSpeedScale=  |
| Dageraad/Avond snelheid | Dageraad is tussen 5:00 en 6:59, avond tussen 17:00 en 18:59. Deze multiplier vermenigvuldigt de tijd in deze periodes. | DawnDuskSpeedScale=   |
| Gebruik inhaaltijd  | Zet inhaaltijd aan of uit. true = aan, false = uit.           | UseClientCatchUpTime= |
| Inhaaltijd          | Nieuwe spelers starten op een specifieke tijd, ongeacht de servertijd, tot de server 'bijgehaald' is. Niet aanbevolen om dit 's nachts te zetten. | ClientCatchUpTime=    |



## Overleven

In de Overleven-instellingen vind je alle relevante commando’s om de survival-ervaring aan te passen. Bijvoorbeeld hoeveel leven een speler heeft, hoe snel hij regenereert en meer.

| Optie                                | Beschrijving                                                  | Config commando                     |
| ----------------------------------- | ------------------------------------------------------------- | ---------------------------------- |
| Player Health Multiplier             | Vermenigvuldigt direct de gezondheid van de speler. 0.5 = 50 HP, 1.0 = 100 HP (standaard), 1.5 = 150 HP | PlayerHealthMultiplier=            |
| Player Health Regen Speed Scale      | Vermenigvuldigt de passieve gezondheid regeneratiesnelheid. 0.5 = 2.5 HP/s, 1.0 = 5.0 HP/s (standaard), 1.5 = 7.5 HP/s | PlayerHealthRegenSpeedScale=       |
| Player Stamina Multiplier            | Vermenigvuldigt de hoeveelheid stamina van de speler. 0.5 = 50 stamina, 1.0 = 100 stamina (standaard), 1.5 = 150 stamina | PlayerStaminaMultiplier=           |
| Player Sprint Speed Scale            | Bepaalt de sprint snelheid. 0.5 = 1 m/s, 1.0 = 2 m/s (standaard), 1.5 = 3 m/s | PlayerSprintSpeedScale=            |
| Player Stamina Cost Multiplier       | Verhoogt of verlaagt de stamina kosten per activiteit.        | PlayerStaminaCostMultiplier=       |
| Player Stamina Sprint Cost Multiplier| Verhoogt of verlaagt de stamina kosten per sprint.            | PlayerStaminaCostSprintMultiplier= |
| Player Stamina Regen Speed Scale     | Vermenigvuldigt de passieve stamina regeneratiesnelheid. 0 = geen verlies, 0.5 = 1.0 waterverlies/s, 1.0 = 2.0 waterverlies/s (standaard), 1.5 = 3.0 waterverlies/s | PlayerStaminaRegenSpeedScale=      |
| Player Active Thirst Multiplier      | Bepaalt hoe snel een speler actief water verliest of wint. 0 = geen verlies, 0.5 = 1.0 waterverlies/s, 1.0 = 2.0 waterverlies/s (standaard), 1.5 = 3.0 waterverlies/s | PlayerActiveThirstMultiplier=      |
| Player Idle Thirst Multiplier        | Bepaalt hoe snel een speler passief water verliest of wint. 0 = geen verlies, 0.5 = 1.0 waterverlies/s, 1.0 = 2.0 waterverlies/s (standaard), 1.5 = 3.0 waterverlies/s | PlayerIdleThirstMultiplier=        |
| Player Offline Thirst Multiplier     | Bepaalt hoe snel een speler water verliest of wint als hij offline is. 0 = geen verlies, 0.5 = 1.0 waterverlies/s, 1.0 = 2.0 waterverlies/s (standaard), 1.5 = 3.0 waterverlies/s | PlayerOfflineThirstMultiplier=     |
| Player Active Hunger Multiplier      | Bepaalt hoe snel een speler actief honger verliest of wint. 0 = geen verlies, 0.5 = 1.0 waterverlies/s, 1.0 = 2.0 waterverlies/s (standaard), 1.5 = 3.0 waterverlies/s | PlayerActiveHungerMultiplier=      |
| Player Idle Hunger Multiplier        | Bepaalt hoe snel een speler passief honger verliest of wint. 0 = geen verlies, 0.5 = 1.0 waterverlies/s, 1.0 = 2.0 waterverlies/s (standaard), 1.5 = 3.0 waterverlies/s | PlayerIdleHungerMultiplier=        |
| Player Offline Hunger Multiplier     | Bepaalt hoe snel een speler honger verliest of wint als hij offline is. 0 = geen verlies, 0.5 = 1.0 waterverlies/s, 1.0 = 2.0 waterverlies/s (standaard), 1.5 = 3.0 waterverlies/s | PlayerOfflineHungerMultiplier=     |
| Uitgelogde karakters blijven in wereld | Als True blijven lichamen in de wereld in een onbewuste staat, als False worden ze verwijderd. (Standaard: True) | LogoutCharactersRemainInTheWorld=  |
| Equipment droppen bij dood          | Als True droppen spelers hun uitrusting bij respawn na dood. Als False respawnen ze met alles. (Standaard: True) | DropEquipmentOnDeath=              |
| Shortcut bar items droppen bij dood | Als True verliezen spelers hun snelbalk-items bij respawn na dood. Als False houden ze deze items. (Standaard: True) | DropShortcutbarOnDeath=            |
| Rugzak droppen bij dood             | Als True verliezen spelers hun rugzakinhoud bij respawn na dood. Als False houden ze deze inhoud. (Standaard: True) | DropBackpackOnDeath=               |
| Iedereen kan lijk looten             | Als True kan iedereen het lijk van een dode speler looten. Als False alleen de speler zelf. (Standaard: True) | EverybodyCanLootCorpse=            |
| Thrall corruptie verwijder multiplier | Verhoogt de snelheid waarmee thralls corruptie verwijderen. | ThrallCorruptionRemovalMultiplier= |
| Player corruptie gain multiplier    | Vermenigvuldigt de corruptie die spelers krijgen.            | PlayerCorruptionGainMultiplier=    |



## Combat

In de Combat-instellingen vind je alle relevante commando’s om schade aan te passen. Bijvoorbeeld hoeveel schade een speler doet, kan absorberen en meer.

| Optie                          | Beschrijving                                                  | Config commando                 |
| ------------------------------ | ------------------------------------------------------------- | ------------------------------ |
| Player Damage Multiplier       | Vermenigvuldigt de schade die een speler doet. 0 = geen schade, 0.5 = 10 schade, 1.0 = 20 schade (standaard), 1.5 = 30 schade | PlayerDamageMultiplier=        |
| Player Damage Taken Multiplier | Vermenigvuldigt de schade die een speler ontvangt. 0 = geen schade, 0.5 = 10 schade, 1.0 = 20 schade (standaard), 1.5 = 30 schade | PlayerDamageTakenMultiplier=   |
| Minion Damage Multiplier       | Vermenigvuldigt de schade die thralls en huisdieren doen. 0 = geen schade, 0.5 = 10 schade, 1.0 = 20 schade (standaard), 1.5 = 30 schade | MinionDamageMultiplier=        |
| Minion Damage Taken Multiplier | Vermenigvuldigt de schade die thralls en huisdieren ontvangen. 0 = geen schade, 0.5 = 10 schade, 1.0 = 20 schade (standaard), 1.5 = 30 schade | MinionDamageTakenMultiplier=   |
| NPC Damage Multiplier          | Vermenigvuldigt de schade die NPCs en monsters doen. 0 = geen schade, 0.5 = 10 schade, 1.0 = 20 schade (standaard), 1.5 = 30 schade | NPCDamageMultiplier=           |
| NPC Damage Taken Multiplier    | Vermenigvuldigt de schade die NPCs en monsters ontvangen.     | NPCDamageTakenMultiplier=      |
| NPC Health Multiplier          | Verhoogt de gezondheid van alle NPCs.                         | NPCHealthMultiplier=           |
| NPC Respawn Multiplier         | Vermenigvuldigt de snelheid waarmee NPCs respawnen na dood. Veel NPCs respecteren deze waarde nog niet. 0 = nooit respawnen (ongetest), 0.5 = 15 seconden, 1.0 = 30 seconden (standaard), 1.5 = 45 seconden | NPCRespawnMultiplier=          |
| Duurzaamheid schade multiplier | Past de hoeveelheid duurzaamheidsschade aan die een item krijgt bij gebruik of beschadiging. 0= onkwetsbare wapens/tools, 0.5 = 5 duurzaamheid verlies per hit, 1.0 = 10 (standaard), 1.5 = 15 | DurabilityMultiplier=          |
| Schild duurzaamheid multiplier | Verandert de duurzaamheidsschade die een schild krijgt bij blokkeren. 0 = onkwetsbare schilden, 0.5 = 5 verlies per hit, 1.0 = 10 (standaard), 1.5 = 15 | ShieldDurabilityMultiplier=    |
| Thrall ontwakingstijd          | Hoe lang een thrall bewusteloos blijft. 0 = meteen wakker (ongetest), 300 = 5 minuten, 600 = 10 minuten (standaard), 900 = 15 minuten | UnconsciousTimeSeconds=        |
| Thrall schade tijdens bewusteloos | Vermenigvuldigt de schade die een thrall krijgt terwijl hij bewusteloos is. | ConciousnessDamageMultiplier=  |
| Avatar levensduur             | Bepaalt hoe lang een Avatar in de wereld kan blijven leven.   | AvatarLifetime=                |
| Avatars uitschakelen          | True: Avatars kunnen niet worden opgeroepen, False: wel.      | AvatarsDisabled=               |
| Avatar oproeptijd             | Tijd die nodig is om een Avatar op te roepen.                 | AvatarSummonTime=              |
| Avatar koepel duur multiplier | Bepaalt hoe lang avatar koepels blijven bestaan.              | AvatarDomeDurationMultiplier=  |
| Landclaim notificaties uitschakelen | Zet landclaim notificaties uit. True = uit, False = aan.    | DisableLandclaimNotifications= |



## Harvesting

In de Harvesting-instellingen vind je alle relevante commando’s om het verzamelen aan te passen. Bijvoorbeeld hoe snel iets geoogst kan worden, hoe vaak resources respawnen, etc.

| Optie                            | Beschrijving                                                  | Config commando                  |
| -------------------------------- | ------------------------------------------------------------- | ------------------------------- |
| Item bederfsnelheid schaal       | Bepaalt hoe lang voedsel goed blijft (kleinere waarde = langer). 0 = bederft nooit, 0.5 = 4 minuten, 1.0 = 2 minuten (standaard), 1.5 = 1 minuut | ItemSpoilRateScale=             |
| Oogst hoeveelheid multiplier     | Vermenigvuldigt de hoeveelheid resources die je krijgt bij oogsten. 1.0 = 1 resource (standaard), 2.0 = 2 resources | HarvestAmountMultiplier=        |
| Resource respawn snelheid multiplier | Vermenigvuldigt de snelheid waarmee resources respawnen na oogsten. 0.5 = 7,5 minuten, 1.0 = 15 minuten (standaard), 1.5 = 30 minuten | ResourceRespawnSpeedMultiplier= |
| Landclaim radius multiplier      | Vergroot of verkleint de radius van landclaim. Dit beïnvloedt respawn van resources en NPCs en of andere spelers land kunnen claimen. 0.5 = 10 meter, 1.0 = 20 meter (standaard), 1.5 = 30 meter | LandClaimRadiusMultiplier=      |



## Crafting

In de Crafting-instellingen vind je alle relevante commando’s om crafting aan te passen. Bijvoorbeeld hoe snel je kunt craften.

| Optie                                | Beschrijving                                                  | Config commando                      |
| ----------------------------------- | ------------------------------------------------------------- | ----------------------------------- |
| Crafting tijd multiplier            | Verhoogt of verlaagt de tijd die nodig is om items te maken. | CraftingTimeMultiplier=             |
| Thrall crafting tijd multiplier     | Verhoogt of verlaagt de tijd die nodig is om een thrall te trainen. | ThrallCraftingTimeMultiplier=       |
| Brandstof brandtijd multiplier      | Verhoogt of verlaagt de brandtijd van brandstof.              | FuelBurnTimeMultiplier=             |
| Crafting snelheid multiplier        | Vermenigvuldigt de snelheid waarmee items gemaakt worden. Het gebruik van een Wheel of Pain om Thralls te converteren telt ook als crafting. 0 of minder = direct, 0.5 = 10 seconden, 1.0 = 20 seconden (standaard), 1.5 = 30 seconden | ItemConvertionMultiplier=           |
| Structuurschade multiplier          | Vermenigvuldigt de schade die een verdedigingsstructuur (zoals een palissade) kan doen. 0 = geen schade (ongetest), 0.5 = 10 schade, 1.0 = 20 schade (standaard), 1.5 = 30 schade | StructureDamageMultiplier=          |
| Structuurschade ontvangen multiplier | Vermenigvuldigt de schade die een structuur ontvangt bij aanval (extra voor muren/crafting stations). 0 = geen schade (ongetest), 0.5 = 10 schade, 1.0 = 20 schade (standaard), 1.5 = 30 schade | StructureDamageTakenMultiplier=     |
| Structuur gezondheid multiplier     | Vermenigvuldigt de gezondheid van een structuur. 0.5 = 500 HP, 1.0 = 1000 HP (standaard), 1.5 = 1500 HP | StructureHealthMultiplier=          |
| Player Encumbrance Multiplier       | Vermenigvuldigt hoeveel gewicht een item toevoegt aan de speler. (0 zet het niet uit) 0.5 = 2.5 gewicht, 1.0 = 5.0 gewicht (standaard), 1.5 = 7.5 gewicht | PlayerEncumbranceMultiplier=        |
| Player Encumbrance Penalty Multiplier | Vermenigvuldigt de straf die een speler krijgt bij overbeladen zijn. (0 zet het niet uit) 0.5 = 35 bewegingsstraf bij 99%, 1.0 = 70 straf (standaard), 1.5 = 125 straf | PlayerEncumbrancePenaltyMultiplier= |



## Verlaten

In de Verlaten-instellingen vind je alle relevante commando’s om het verlaten van gebouwen aan te passen.

| Optie                         | Beschrijving                                                  | Config commando               |
| ----------------------------- | ------------------------------------------------------------- | ---------------------------- |
| Gebouwen verval uitschakelen  | Zet verval van gebouwen uit.                                  | DisableBuildingAbandonment=  |
| Gebouwen verval tijd multiplier | Verhoogt of verlaagt de tijd die het duurt voordat gebouwen vervallen. | BuildingDecayTimeMultiplier= |



## Chat

In de Chat-instellingen vind je alle relevante commando’s om de chat aan te passen. Bijvoorbeeld chat activeren, chat radius en maximale berichtlengte.

| Optie             | Beschrijving                                                  | Config commando        |
| ----------------- | ------------------------------------------------------------- | --------------------- |
| Lokale chat radius| Bepaalt binnen welke straal lokale chat hoorbaar is (in cm)  | ChatLocalRadius=      |
| Max berichtlengte | Bepaalt het maximale aantal tekens in een chatbericht.       | ChatMaxMessageLength= |
| Chat heeft global | Staat globale chat toe of niet. De in-game chat heeft een kanaal waar iedereen in kan praten. | ChatHasGlobal=        |



## Purge

In de Purge-instellingen vind je alle relevante commando’s om de purge aan te passen, de stappen, etc.

| Optie                           | Beschrijving                                                  | Config commando                                               |
| ------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------ |
| Purge inschakelen              | Zet de purge events volledig aan of uit.                      | EnablePurge=                                                 |
| Purge niveau                  | Verhoogt de moeilijkheidsgraad van de purge. 0 = purge uit.   | PurgeLevel=                                                  |
| Purge periodiciteit           | Verhoogt het aantal purge events per dag. Afhankelijk van andere opties. | PurgePeriodicity=                                            |
| Purge tijdrestrictie          | Als aan, worden purges beperkt tot bepaalde tijden.           | RestrictPurgeTime=                                           |
| Purge tijd doordeweeks einde  | Waarde 0000 betekent 00:00 uur als einde doordeweeks           | PurgeTimeWeekdayEnd=                                         |
| Purge tijd doordeweeks start  | Waarde 0000 betekent 00:00 uur als start doordeweeks           | PurgeTimeWeekdayStart=                                       |
| Purge tijd weekend einde      | Waarde 0000 betekent 00:00 uur als einde weekend               | PurgeTimeWeekendEnd=                                         |
| Purge tijd weekend start      | Waarde 0000 betekent 00:00 uur als start weekend               | PurgeTimeWeekendStart=                                       |
| Purge restrictie doordeweeks einde | Waarde 0830 betekent 08:30 uur als start doordeweeks          | PurgeRestrictionWeekdayEnd=                                  |
| Purge restrictie doordeweeks start | Waarde 2200 betekent 22:00 uur als einde weekend              | PurgeRestrictionWeekdayStart=                                |
| Purge restrictie weekend start | Waarde 1800 betekent 18:00 uur als start weekend               | PurgeRestrictionWeekendStart=                                |
| Purge voorbereidingstijd      | Verhoogt de tijd in minuten tussen purge waarschuwing en start | PurgePreparationTime=                                        |
| Purge duur                   | Verhoogt de maximale duur van een purge. Als je alle waves killt, kan het eerder eindigen | PurgeDuration=                                               |
| Minimaal aantal online spelers | Purges starten alleen als dit aantal spelers online is. 0 = purge valt clans aan boven de meter (offline purges) | MinPurgeOnlinePlayers=                                       |
| Bouwen toegestaan tijdens purge | Als aan, mag er gebouwd worden tijdens purges.                | AllowBuilding=                                               |
| Purge meter trigger waarde   | Verhoogt het aantal acties dat clans moeten doen om purge te triggeren. Hoe hoger, hoe langer het duurt. | ClanPurgeTrigger=                                            |
| Purge meter update interval  | Interval waarin purge scores worden opgeteld. Lagere waarde = sneller meter omhoog | ClanScoreUpateFrenquency=                                    |
| Purge NPC gebouwschade multiplier | Verhoogt de schade die NPCs aan gebouwen doen tijdens een purge. | PurgeNPCBuildingDamageMultiplier=                            |



## Huisdieren en honger

In de Huisdieren en honger-instellingen vind je alle relevante commando’s over de honger van huisdieren. Bijvoorbeeld hoeveel en hoe snel ze eten.

| Optie                              | Beschrijving                                                  | Config commando                   |
| --------------------------------- | ------------------------------------------------------------- | -------------------------------- |
| Hongersysteem aan/uit: Thralls    | Zet het hongersysteem voor thralls aan of uit.                | ToggleHungerSystemThralls=       |
| Hongersysteem aan/uit: Huisdieren | Zet het hongersysteem voor huisdieren aan of uit.             | ToggleHungerSystemPets=          |
| Voedingswaarde voedsel            | Hoeveel voeding een metgezel krijgt van eten.                  | FoodNutritionValue=              |
| Uithongeringstijd in minuten      | Hoeveel minuten het duurt voordat de honger van een metgezel van 100 naar 0 gaat. Standaard = 10080 | StarvationTimeInMinutes=         |
| Uithongering schade limiet        | Hoeveel gezondheid maximaal verloren kan worden door honger, in procenten (1 = 100%) | StarvationDamagePenaltyCap=      |
| Crafting tijd multiplier dierenhok | Vermenigvuldigt de crafting snelheid in dierenhokken.         | AnimalPenCraftingTimeMultiplier= |
| Voedselcontainer bereik multiplier | Vermenigvuldigt de afstand waarop voedselcontainers je metgezellen voeden. | FeedBoxRangeMultiplier=          |
| Exclusief dieet                   | Bepaalt of metgezellen alleen eten wat op hun dieetlijst staat. Uit = ze eten ook ander voedsel. | ExclusiveDiet=                   |

<InlineVoucher />