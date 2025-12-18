---
id: conan-configuration
title: "Conan Exiles: Konfigurera din egen server"
description: "Upptäck hur du anpassar dina Conan Exiles-serverinställningar för optimal spelupplevelse och säkerhet → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Serverkonfiguration

Conan Exiles-servrar kan konfigureras i detalj. Serverns konfiguration sker via config-filerna. Du hittar dem i webbgränssnittet under spelserveradministrationen under Configs. Öppna filen **ServerSettings.ini** för att komma igång.



![](https://screensaver01.zap-hosting.com/index.php/s/HSqXbCnS62s9mEx/preview)



Nedan hittar du en kategoriserad översikt över alla relevanta kommandon som du kan använda för att fritt konfigurera din server efter dina önskemål. Vissa kommandon finns kanske inte i config-filen från början, men de kan enkelt läggas till i efterhand.

<InlineVoucher />

## Allmänt

I de allmänna inställningarna hittar du alla relevanta kommandon för att anpassa servernamn, lösenord, anti-cheat med mera.

| Alternativ                        | Beskrivning                                                | Config-kommando                |
| -------------------------------- | ---------------------------------------------------------- | ----------------------------- |
| Servernamn                       | Namnet på din server.                                      | ServerName="..."              |
| Antal spelare                   | Max antal spelare                                          | Paketberoende                 |
| Dagens meddelande               | Dagens meddelande                                         |                               |
| Serverlösenord                  | Här kan du ändra serverns lösenord                         | ServerMessageOfTheDay="..."   |
| Adminlösenord                   | Lösenord för att bli admin. Läs mer i guiden Bli admin    | AdminPassword="..."           |
| BattlEye aktiverat              | Aktiverar BattlEye AntiCheat-skydd                        | IsBattlEyeEnabled=            |
| PVP aktiverat                  | Aktiverar eller inaktiverar PVP. 1 = aktiverat, 0 = inaktiverat | PVPEnabled=                   |
| Tidsbegränsat PvP              | Om aktiverat kan spelare bara slåss under angivna tidsperioder | RestrictPVPTime=              |
| PvP Blitz aktiverat            | Aktiverar eller inaktiverar PVPBlitz. 1 = aktiverat, 0 = inaktiverat (standard) | PVPBlitzServer=               |
| Tidsbegränsat PvP byggskada   | Om aktiverat kan spelare bara attackera och förstöra byggnader under angivna tider | RestrictPVPBuildingDamageTime= |
| Community                      | Definierar community-stil: 0=Ingen 1=Purist 2=Avslappnad 3=Hardcore 4=Rollspel 5=Experimentell | ServerCommunity=              |
| Serverregion                  | Välj serverregion för att påverka filtreringen i serverlistan. Välj din region så att spelare från samma område hittar servern. 0 = Europa, 1 = Nordamerika, 2 = Asien, 3 = Australien, 4 = Sydamerika, 5 = Japan | serverRegion=                 |
| Ingen ägarskap                | Om aktiverat finns inga ägarskapsregler på servern. Alla kan plundra alla kistor, använda maskiner, bryta byggnader osv. 1 = aktiverat, 0 = inaktiverat (standard) | NoOwnership=                  |
| Behållare ignorerar ägarskap | Om aktiverat är alla behållare öppna för andra spelare. 1 = aktiverat, 0 = inaktiverat | ContainersIgnoreOwnership=    |
| Kan skada spelarägda byggnader | Om aktiverat kan spelare attackera och förstöra andras byggnader. 1 = aktiverat, 0 = inaktiverat | CanDamagePlayerOwnedStructures= |
| Kan skada spelare             | Om aktiverat kan spelare skadas av andra spelare. 1 = aktiverat, 0 = inaktiverat | bCanBeDamaged=                |
| Aktivera sandstorm            | Tillåter att sandstormar periodvis sveper över Exiled Lands | EnableSandStorm=              |
| Max storlek på klan           | Sätter maxstorlek på klaner på servern. När gränsen nås kan inga nya medlemmar gå med. | clanMaxSize=                  |
| Maximal nakenhet              | Sätter max nakenhet på servern. Överskrider klientinställningen. 0 = ingen, 1 = delvis, 2 = full | MaxNudity=                    |
| Server Voice Chat             | Bestämmer om röstchatt ska vara aktiverad i spelet. 1 = aktiverat, 0 = inaktiverat | serverVoiceChat=              |



## Progression

I Progression-inställningarna hittar du alla relevanta kommandon för att anpassa XP-upplevelsen spelare får.

| Alternativ                   | Beskrivning                                                | Config-kommando             |
| ---------------------------- | ---------------------------------------------------------- | -------------------------- |
| Spelar-XP-faktor             | Multiplicerar all XP spelare får. Justerar progression för alla aktiviteter. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPRateMultiplier=    |
| Spelar-XP-tidsfaktor         | Multiplicerar XP spelare får passivt över tid för att överleva. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPTimeMultiplier=    |
| Spelar-XP-döda-faktor        | Multiplicerar XP för att döda monster och spelare. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPKillMultiplier=    |
| Spelar-XP-skörda-faktor      | Multiplicerar XP för skörd. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPHarvestMultiplier= |
| Spelar-XP-snickra-faktor     | Multiplicerar XP för crafting. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPCraftMultiplier=   |



## Tid

I Tid-inställningarna hittar du alla relevanta kommandon för att justera tiden. Du kan göra dag och natt längre eller kortare som du vill.

| Alternativ               | Beskrivning                                                | Config-kommando        |
| ------------------------ | ---------------------------------------------------------- | --------------------- |
| Dagscykelns hastighet    | Multiplicerar hastigheten på hela 24-timmarscykeln. Justeringar nedan läggs på denna multiplikator. | DayCycleSpeedScale=   |
| Dagtidshastighet         | Dagtimmar är 07:00-16:59 i spelet. Multiplicerar längden på dagtimmarna. | DayTimeSpeedScale=    |
| Nattidshastighet         | Nattetimmar är 19:00-04:59 i spelet. Multiplicerar längden på nattetimmarna. | NightTimeSpeedScale=  |
| Gryning/skymningshastighet | Gryning är 05:00-06:59, skymning 17:00-18:59. Multiplicerar tiden i dessa perioder. | DawnDuskSpeedScale=   |
| Använd catch-up-tid      | Aktiverar eller inaktiverar catch-up-timing på servern. true = aktiverat, false = inaktiverat. | UseClientCatchUpTime= |
| Catch-up-tid             | Nybörjare startar vid angiven tid oavsett servertid och spelar tills servern "hinner ikapp". Rekommenderas ej under natten. | ClientCatchUpTime=    |



## Survival

I Survival-inställningarna hittar du alla relevanta kommandon för att anpassa överlevnadsinställningarna. Det inkluderar t.ex. hur mycket liv en spelare kan ha, hur snabbt hen regenererar och mycket mer.

| Alternativ                          | Beskrivning                                                | Config-kommando                     |
| ---------------------------------- | ---------------------------------------------------------- | ---------------------------------- |
| Spelarhälsa-faktor                 | Multiplicerar spelarens hälsovärde. 0.5 = 50 HP, 1.0 = 100 HP (standard), 1.5 = 150 HP | PlayerHealthMultiplier=            |
| Spelarhälsa regenereringshastighet | Multiplicerar passiv hälsoregenerering. 0.5 = 2.5 HP/s, 1.0 = 5.0 HP/s (standard), 1.5 = 7.5 HP/s | PlayerHealthRegenSpeedScale=       |
| Spelaruthållighet-faktor           | Multiplicerar spelarens uthållighet. 0.5 = 50 stamina, 1.0 = 100 stamina (standard), 1.5 = 150 stamina | PlayerStaminaMultiplier=           |
| Spelarlöphastighet                 | Definierar sprintfarten. 0.5 = 1 m/s, 1.0 = 2 m/s (standard), 1.5 = 3 m/s | PlayerSprintSpeedScale=            |
| Spelaruthållighetskostnad-faktor  | Ökar eller minskar uthållighetsförbrukning per aktivitet | PlayerStaminaCostMultiplier=       |
| Spelaruthållighets-sprintkostnad  | Ökar eller minskar uthållighetsförbrukning vid sprint | PlayerStaminaCostSprintMultiplier= |
| Spelaruthållighetsregenerering    | Multiplicerar passiv uthållighetsregenerering. 0 = ingen förlust, 0.5 = 1.0 vattenförlust/s, 1.0 = 2.0 vattenförlust/s (standard), 1.5 = 3.0 vattenförlust/s | PlayerStaminaRegenSpeedScale=      |
| Spelar aktiv törst-multiplikator  | Skalar hur snabbt spelaren aktivt förlorar eller får vatten. 0 = ingen förlust, 0.5 = 1.0 vattenförlust/s, 1.0 = 2.0 vattenförlust/s (standard), 1.5 = 3.0 vattenförlust/s | PlayerActiveThirstMultiplier=      |
| Spelar passiv törst-multiplikator | Skalar hur snabbt spelaren passivt förlorar eller får vatten. 0 = ingen förlust, 0.5 = 1.0 vattenförlust/s, 1.0 = 2.0 vattenförlust/s (standard), 1.5 = 3.0 vattenförlust/s | PlayerIdleThirstMultiplier=        |
| Spelar offline törst-multiplikator | Skalar hur snabbt spelaren förlorar eller får vatten offline. 0 = ingen förlust, 0.5 = 1.0 vattenförlust/s, 1.0 = 2.0 vattenförlust/s (standard), 1.5 = 3.0 vattenförlust/s | PlayerOfflineThirstMultiplier=     |
| Spelar aktiv hunger-multiplikator | Skalar hur snabbt spelaren aktivt förlorar eller får mat. 0 = ingen förlust, 0.5 = 1.0 vattenförlust/s, 1.0 = 2.0 vattenförlust/s (standard), 1.5 = 3.0 vattenförlust/s | PlayerActiveHungerMultiplier=      |
| Spelar inaktiv hunger-multiplikator | Skalar hur snabbt spelaren passivt förlorar eller får mat. 0 = ingen förlust, 0.5 = 1.0 vattenförlust/s, 1.0 = 2.0 vattenförlust/s (standard), 1.5 = 3.0 vattenförlust/s | PlayerIdleHungerMultiplier=        |
| Spelar offline hunger-multiplikator | Skalar hur snabbt spelaren förlorar eller får mat offline. 0 = ingen förlust, 0.5 = 1.0 vattenförlust/s, 1.0 = 2.0 vattenförlust/s (standard), 1.5 = 3.0 vattenförlust/s | PlayerOfflineHungerMultiplier=     |
| Utloggade karaktärer stannar kvar | Om True stannar spelarens kropp kvar i världen i ett omedvetet tillstånd, om False tas kroppen bort när offline. (Standard: True) | LogoutCharactersRemainInTheWorld=  |
| Släpp utrustning vid död         | Om True tappar spelare sin utrustning vid respawn efter död. Om False respawnar spelare med all utrustning. (Standard: True) | DropEquipmentOnDeath=              |
| Släpp snabbvalsobjekt vid död    | Om True tappar spelare snabbvalsobjekt vid respawn. Om False behålls de. (Standard: True) | DropShortcutbarOnDeath=            |
| Släpp ryggsäck vid död           | Om True tappar spelare ryggsäcksobjekt vid respawn. Om False behålls de. (Standard: True) | DropBackpackOnDeath=               |
| Alla kan plundra lik             | Om True kan alla plundra döda spelares kroppar. Om False kan bara spelaren själv plundra sin kropp. (Standard: True) | EverybodyCanLootCorpse=            |
| Thrall korruptionsborttagning    | Ökar hastigheten thrall-entertainers tar bort spelarens korruption. | ThrallCorruptionRemovalMultiplier= |
| Spelar korruptionsökning         | Multiplicerar korruption som spelare får.                   | PlayerCorruptionGainMultiplier=    |



## Combat

I Combat-inställningarna hittar du alla relevanta kommandon för att justera skada. Det inkluderar hur mycket skada spelare kan göra, ta emot och mycket mer.

| Alternativ                      | Beskrivning                                                | Config-kommando                 |
| ------------------------------- | ---------------------------------------------------------- | ------------------------------ |
| Spelarskada-faktor             | Multiplicerar skadan spelare gör. 0 = ingen skada, 0.5 = 10 skada, 1.0 = 20 skada (standard), 1.5 = 30 skada | PlayerDamageMultiplier=        |
| Spelarskada mottagen-faktor   | Multiplicerar skadan spelare tar. 0 = ingen skada, 0.5 = 10 skada, 1.0 = 20 skada (standard), 1.5 = 30 skada | PlayerDamageTakenMultiplier=   |
| Minion-skada-faktor            | Multiplicerar skadan thralls och husdjur gör. 0 = ingen skada, 0.5 = 10 skada, 1.0 = 20 skada (standard), 1.5 = 30 skada | MinionDamageMultiplier=        |
| Minion-skada mottagen-faktor  | Multiplicerar skadan thralls och husdjur tar. 0 = ingen skada, 0.5 = 10 skada, 1.0 = 20 skada (standard), 1.5 = 30 skada | MinionDamageTakenMultiplier=   |
| NPC-skada-faktor              | Multiplicerar skadan NPCs och monster gör. 0 = ingen skada, 0.5 = 10 skada, 1.0 = 20 skada (standard), 1.5 = 30 skada | NPCDamageMultiplier=           |
| NPC-skada mottagen-faktor    | Multiplicerar skadan NPCs och monster tar.                 | NPCDamageTakenMultiplier=      |
| NPC-hälsa-faktor             | Ökar hälsan för alla NPCs.                                 | NPCHealthMultiplier=           |
| NPC respawn-faktor           | Multiplicerar respawntiden för NPCs efter död. Många NPCs respekterar dock inte detta värde. 0 = aldrig respawn (otestad), 0.5 = 15 sek, 1.0 = 30 sek (standard), 1.5 = 45 sek | NPCRespawnMultiplier=          |
| Hållbarhetsskada-faktor      | Ändrar hur mycket hållbarhet ett föremål förlorar vid användning eller skada. Påverkar hur länge vapen, verktyg och rustningar håller. 0 = osårbara, 0.5 = 5 hållbarhetsförlust per träff, 1.0 = 10 (standard), 1.5 = 15 | DurabilityMultiplier=          |
| Sköldhållbarhet-faktor       | Ändrar hållbarhetsförlust för sköldar vid blockering. 0 = osårbara, 0.5 = 5 förluster per träff, 1.0 = 10 (standard), 1.5 = 15 | ShieldDurabilityMultiplier=    |
| Thrall vakningstid           | Hur länge en thrall är medvetslös. 0 = vaknar direkt (otestad), 300 = 5 min, 600 = 10 min (standard), 900 = 15 min | UnconsciousTimeSeconds=        |
| Thrall skada när medvetslös | Multiplicerar skadan thrall tar när medvetslös.             | ConciousnessDamageMultiplier=  |
| Avatar livslängd             | Hur länge en Avatar kan finnas kvar i världen.              | AvatarLifetime=                |
| Avaktivera Avatars           | True: Avatars kan inte kallas på, False: Avatars kan kallas på | AvatarsDisabled=               |
| Avatar inkallningstid        | Tiden det tar att kalla på en Avatar.                       | AvatarSummonTime=              |
| Avatar kupolens varaktighet  | Hur länge avatar-kupoler varar.                              | AvatarDomeDurationMultiplier=  |
| Avaktivera landclaim-notiser | Stänger av landclaim-notiser. True: avaktiverar, False: aktiverar | DisableLandclaimNotifications= |



## Skörd

I Skörd-inställningarna hittar du alla relevanta kommandon för att anpassa skörden. Det inkluderar hur snabbt något kan skördas, hur ofta resurser respawnar osv.

| Alternativ                      | Beskrivning                                                | Config-kommando                  |
| ------------------------------- | ---------------------------------------------------------- | ------------------------------- |
| Föremåls ruttningshastighet     | Påverkar hur länge matvaror håller innan de ruttnar (lägre värde = längre hållbarhet). 0 = ruttnar aldrig, 0.5 = 4 min, 1.0 = 2 min (standard), 1.5 = 1 min | ItemSpoilRateScale=             |
| Skördemängd-faktor              | Multiplicerar mängden resurser vid skörd. 1.0 = 1 resurs (standard), 2.0 = 2 resurser | HarvestAmountMultiplier=        |
| Resursrespawn-faktor            | Multiplicerar hur snabbt resurser respawnar efter skörd. 0.5 = 7,5 min, 1.0 = 15 min (standard), 1.5 = 30 min | ResourceRespawnSpeedMultiplier= |
| Landclaim-radie-faktor          | Ökar eller minskar radien för landclaim. Påverkar respawn av resurser och NPCs samt andra spelares möjlighet att claima mark. 0.5 = 10 m, 1.0 = 20 m (standard), 1.5 = 30 m | LandClaimRadiusMultiplier=      |



## Crafting

I Crafting-inställningarna hittar du alla relevanta kommandon för att anpassa crafting. Det inkluderar hur snabbt saker kan tillverkas.

| Alternativ                        | Beskrivning                                                | Config-kommando                      |
| -------------------------------- | ---------------------------------------------------------- | ----------------------------------- |
| Crafting-tidsfaktor              | Ökar eller minskar tiden det tar att tillverka föremål.   | CraftingTimeMultiplier=             |
| Thrall crafting-tidsfaktor       | Ökar eller minskar tiden det tar att träna en thrall.     | ThrallCraftingTimeMultiplier=       |
| Bränslets brinntid-faktor        | Ökar eller minskar hur länge bränsleeenheter brinner.     | FuelBurnTimeMultiplier=             |
| Crafting-hastighetsfaktor        | Multiplicerar craftinghastigheten. Att använda Wheel of Pain för att konvertera thralls räknas som crafting. 0 eller mindre = omedelbart, 0.5 = 10 sek, 1.0 = 20 sek (standard), 1.5 = 30 sek | ItemConvertionMultiplier=           |
| Struktur-skada-faktor            | Multiplicerar skadan en försvarsstruktur kan ge. 0 = ingen skada (otestad), 0.5 = 10 skada, 1.0 = 20 skada (standard), 1.5 = 30 skada | StructureDamageMultiplier=          |
| Struktur-skada mottagen-faktor  | Multiplicerar skadan en struktur tar vid attack (extra för väggar/craftingstationer). 0 = ingen skada (otestad), 0.5 = 10 skada, 1.0 = 20 skada (standard), 1.5 = 30 skada | StructureDamageTakenMultiplier=     |
| Strukturhälsa-faktor             | Multiplicerar hälsan för strukturer. 0.5 = 500 HP, 1.0 = 1000 HP (standard), 1.5 = 1500 HP | StructureHealthMultiplier=          |
| Spelar belastningsfaktor        | Multiplicerar hur mycket vikt ett föremål lägger på spelaren. (0 inaktiverar ej) 0.5 = 2.5 vikt, 1.0 = 5.0 vikt (standard), 1.5 = 7.5 vikt | PlayerEncumbranceMultiplier=        |
| Spelar belastningsstraff-faktor | Multiplicerar straffen spelaren får när hen är överbelastad. (0 inaktiverar ej) 0.5 = 35 rörelsehämning vid 99%, 1.0 = 70 rörelsehämning (standard), 1.5 = 125 rörelsehämning | PlayerEncumbrancePenaltyMultiplier= |



## Övergivande

I Övergivande-inställningarna hittar du alla relevanta kommandon för att justera övergivande av byggnader.

| Alternativ                     | Beskrivning                                                | Config-kommando               |
| ------------------------------ | ---------------------------------------------------------- | ---------------------------- |
| Inaktivera byggnadsförfall     | Om aktiverat inaktiveras förfall på byggnader över tid.   | DisableBuildingAbandonment=  |
| Byggnadsförfallstidsfaktor     | Ökar eller minskar tiden det tar för byggnadsdelar att förfalla. | BuildingDecayTimeMultiplier= |



## Chatt

I Chatt-inställningarna hittar du alla relevanta kommandon för att anpassa chatten. Det inkluderar att aktivera chatten, chattradie och max meddelandelängd.

| Alternativ             | Beskrivning                                                | Config-kommando        |
| ---------------------- | ---------------------------------------------------------- | --------------------- |
| Lokal chattradie       | Sätter radien i centimeter för lokal chatt runt spelaren  | ChatLocalRadius=      |
| Max meddelandelängd    | Max antal tecken i ett chattmeddelande                     | ChatMaxMessageLength= |
| Chatt har global kanal | Tillåter eller förbjuder global chatt. Alla kan prata i global kanal. | ChatHasGlobal=        |



## Purge

I Purge-inställningarna hittar du alla relevanta kommandon för att justera rensningen, dess steg osv.

| Alternativ                      | Beskrivning                                                | Config-kommando                                               |
| ------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| Aktivera Purge                 | Att inaktivera detta stänger av rensningsevent helt        | EnablePurge=                                                 |
| Purge-nivå                    | Ökar svårighetsgraden på rensningen. 0 inaktiverar rensningar | PurgeLevel=                                                  |
| -                             | Ökar antalet rensningstillfällen per dag. Faktiskt antal beror på andra inställningar | PurgePeriodicity=                                            |
| -                             | Om aktiverat begränsas rensning till vissa tider           | RestrictPurgeTime=                                           |
| -                             | Värdet 0000 betyder att 00:00 är veckodagens sluttid       | PurgeTimeWeekdayEnd=                                         |
| -                             | Värdet 0000 betyder att 00:00 är veckodagens starttid       | PurgeTimeWeekdayStart=                                       |
| -                             | Värdet 0000 betyder att 00:00 är helgens sluttid            | PurgeTimeWeekendEnd=                                         |
| -                             | Värdet 0000 betyder att 00:00 är helgens starttid           | PurgeTimeWeekendStart=                                       |
| -                             | Värdet 0830 betyder att 08:30 är veckodagens starttid       | PurgeRestrictionWeekdayEnd=                                  |
| -                             | Värdet 2200 betyder att 22:00 är helgens sluttid            | PurgeRestrictionWeekdayStart=                                |
| -                             | Värdet 1800 betyder att 18:00 är helgens starttid           | PurgeRestrictionWeekendStart=                                |
| Purge förberedelsetid         | Ökar tiden i minuter mellan varning och start av rensning  | PurgePreparationTime=                                        |
| Purge varaktighet             | Ökar max tid rensningen pågår. Om alla vågor dödas kan rensningen avslutas tidigare | PurgeDuration=                                               |
| Min antal online-spelare      | Rensningar sker bara om minst detta antal spelare är online. 0 = rensar alla klaner över tröskeln (offline purge) | MinPurgeOnlinePlayers=                                       |
| Tillåt byggande under purge  | Om aktiverat är byggande tillåtet under rensningar          | AllowBuilding=                                               |
| Purge-triggervärde           | Ökar antal handlingar klaner/spelare måste göra för att trigga rensning. Ju högre värde desto längre aktivitet krävs | ClanPurgeTrigger=                                            |
| Purge-poänguppdateringsintervall | Hur ofta poäng för rensning räknas ihop och läggs till mätaren. Lägre värde ökar snabbare. | ClanScoreUpateFrenquency=                                    |
| -                             | Ökar skadan NPCs gör under rensning. Exempel: 5.000000, 10.000000, 15.000000, 20.000000, 25.000000 | PurgeNPCBuildingDamageMultiplier=                            |



## Husdjur och hunger

I inställningarna för Husdjur och hunger hittar du alla relevanta kommandon om husdjurs hungerförbrukning. Det inkluderar hur mycket och hur snabbt de förbrukar.

| Alternativ                      | Beskrivning                                                | Config-kommando                   |
| ------------------------------- | ---------------------------------------------------------- | -------------------------------- |
| Aktivera hungersystem: Thralls  | Slår på eller av hungersystemet för thralls                | ToggleHungerSystemThralls=       |
| Aktivera hungersystem: Husdjur  | Slår på eller av hungersystemet för husdjur                | ToggleHungerSystemPets=          |
| Matens näringsvärde             | Hur mycket näring följeslagare får från mat                | FoodNutritionValue=              |
| Svälttid i minuter             | Hur många minuter det tar för följeslagares hunger att gå från 100 till 0. Standard = 10080 | StarvationTimeInMinutes=         |
| Svältskadegräns                | När hungermätaren når 0 börjar följeslagaren ta skada. Detta värde bestämmer max hälsa som kan förloras i procent (1 = 100%) | StarvationDamagePenaltyCap=      |
| Djurfållans crafting-tidsfaktor | Multiplicerar craftinghastigheten i djurfållan             | AnimalPenCraftingTimeMultiplier= |
| Matbehållarens räckviddsfaktor | Multiplicerar räckvidden för matbehållare till följeslagare | FeedBoxRangeMultiplier=          |
| Exklusiv diet                  | Bestämmer om följeslagare bara äter mat på sin dietlista. Avstängt betyder att de äter all mat utöver dieten. | ExclusiveDiet=                   |

<InlineVoucher />