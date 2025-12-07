---
id: ark-configuration
title: "ARK: Serverconfiguratie"
description: "Ontdek hoe je jouw ARK gameserver instellingen optimaliseert voor betere gameplay en personalisatie → Leer het nu"
sidebar_label: Serverconfiguratie
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Serverconfiguratie

De configuratie van een **ARK gameserver** kan voor sommigen verwarrend en frustrerend zijn. Maar daar is een goede reden voor. ARK biedt namelijk ontzettend veel configuratie-opties voor het spel. Daarnaast gebeurt de configuratie in verschillende configuratiebestanden, waarbij je ook moet opletten welke commando’s in welk bestand horen. In deze gids geven we je een beter overzicht van hoe de configuratie van een ARK gameserver werkt.

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## Verschillen tussen configuratiebestanden

De configuratie van de **ARK gameserver** gebeurt via de configuratiebestanden **GameUserSettings.ini** en **Game.ini**. Je kunt deze aanpassen via ons **Webinterface** onder **Configs** of via **FTP**.

| Configuratiebestand   | Webinterface                                                 | FTP                                     |
| --------------------- | ------------------------------------------------------------ | --------------------------------------- |
| GameUserSettings.ini  | `Gameserver Administratie -> Configs -> GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini              | `Gameserver Administratie -> Configs -> Game.ini`             | `ShooterGame/Saved/Config/LinuxServer/` |

Het configuratiebestand **GameUserSettings.ini** bevat opties voor zowel de gameclient als de server. Opties voor de gameclient worden niet door de server gebruikt. Serveropties staan in de sectie **[ServerSettings]**, meestal onderaan het bestand. Voor geavanceerdere aanpassingen, zoals het veranderen van engram punten of XP per level, het uitschakelen van bepaalde content of het aanpassen van spelersvoorkeuren, gebruik je het configuratiebestand **Game.ini**.

## Configuratie

Hieronder leggen we de twee configuratiebestanden uit. We behandelen de meest gebruikte commando’s en hoe ze werken.

## Configuratie: Map

ARK biedt verschillende maps waarop je kunt spelen op de server. Je kiest welke map je wilt spelen in het webinterface onder instellingen.

| Maps           | Releasedatum | Commandonaam      |
| -------------- | ------------ | ----------------- |
| The Island     | 02-06-2015   | `TheIsland`       |
| The Center     | 17-05-2016   | `TheCenter`       |
| Scorched Earth | 01-09-2016   | `ScorchedEarth_P` |
| Ragnarok       | 12-06-2017   | `Ragnarok`        |
| Aberration     | 12-12-2017   | `Aberration_P`    |
| Extinction     | 06-11-2018   | `Extinction`      |
| Valguero       | 18-06-2019   | `Valguero_P`      |
| Genesis        | 25-02-2020   | `Genesis`         |
| Crystal Isles  | 11-06-2020   | `CrystalIsles`    |

Voer simpelweg de commandonaam van de map in het veld **Map** in en deze wordt geladen bij de volgende keer dat je server opstart.

![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)

## Configuratie: GameUserSettings.ini

### [ServerSettings]

**allowThirdPersonPlayer**

Bepaalt of de 3rd person perspectief aan of uit staat.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       0         |     0/1       |

**AllowCaveBuildingPvE**

Bepaalt of bouwen in grotten toegestaan is in PVE modus.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       0         |     0/1       |

**alwaysNotifyPlayerJoined**

Bepaalt of spelers een melding krijgen als iemand de server betreedt.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       0         |     0/1       |

**alwaysNotifyPlayerLeft**

Bepaalt of spelers een melding krijgen als iemand de server verlaat.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       0         |     0/1       |

**bAllowFlyerCarryPvE**

Bepaalt of spelers dinosaurussen mogen oppakken met een vliegende dinosaurus.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       0         |     0/1       |

**bDisableStructureDecayPvE**

Schakelt de progressieve verval van gebouwen uit.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       0         |     0/1       |

**DayCycleSpeedScale**

Bepaalt de snelheid van de dag/nacht cyclus. 1 is standaard (zoals singleplayer en officiële servers). Waarden lager dan 1 vertragen de cyclus, hoger versnellen.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**DayTimeSpeedScale**

Bepaalt de snelheid van de tijd tijdens de dag. Lagere waarde verlengt de dag.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**NightTimeSpeedScale**

Bepaalt de snelheid van de tijd tijdens de nacht. Lagere waarde verlengt de nacht.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**DinoCharacterFoodDrainMultiplier**

Bepaalt de voedselconsumptie van dinosaurussen. Hogere waarde = sneller honger.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**DinoCharacterHealthRecoveryMultiplier**

Bepaalt de gezondheid regeneratie van dinosaurussen. Hogere waarde = sneller herstel.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**DinoCharacterStaminaDrainMultiplier**

Bepaalt hoe snel dinosaurussen moe worden. Hogere waarde = sneller moe.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**DinoCountMultiplier**

Bepaalt hoeveel dinosaurussen spawnen. Hogere waarde = meer dino’s.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**DinoDamageMultiplier**

Bepaalt hoeveel schade dinosaurussen doen. Hogere waarde = meer schade.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**DinoResistanceMultiplier**

Bepaalt de weerstand van dinosaurussen. Hogere waarde = meer weerstand.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**globalVoiceChat**

Bepaalt of globale voice chat aan staat op de server.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       0         |     0/1       |

**HarvestAmountMultiplier**

Bepaalt hoeveel grondstoffen je krijgt bij het oogsten. Hogere waarde = meer grondstoffen.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**HarvestHealthMultiplier**

Bepaalt de gezondheid van grondstoffen. Hogere waarde = meer materiaal per slag.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**noTributeDownloads**

Verhindert het downloaden van gamekarakters van de server.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PreventDownloadSurvivors**

Voorkomt het downloaden van survivor karakters van de server.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PreventDownloadItems**

Voorkomt het downloaden van items van de server.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PreventDownloadDinos**

Voorkomt het downloaden van dinosaurussen van de server.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PlayerCharacterFoodDrainMultiplier**

Bepaalt hoe snel een speler honger krijgt. Waarde 2.0 = dubbel zo snel, 0.5 = half zo snel.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PlayerCharacterHealthRecoveryMultiplier**

Bepaalt hoe snel een speler geneest. Waarde 2.0 = dubbel zo snel, 0.5 = half zo snel.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PlayerCharacterStaminaDrainMultiplier**

Bepaalt hoe snel een speler moe wordt. Waarde 2.0 = dubbel zo snel, 0.5 = half zo snel.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PlayerCharacterWaterDrainMultiplier**

Bepaalt hoe snel een speler dorst krijgt. Waarde 2.0 = dubbel zo snel, 0.5 = half zo snel.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PlayerDamageMultiplier**

Bepaalt hoeveel schade een speler doet. Waarde 2.0 = dubbel, 0.5 = half.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PlayerResistanceMultiplier**

Bepaalt de weerstand van een speler. Waarde 2.0 = dubbel, 0.5 = half.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**proximityChat**

Bepaalt of lokale chat aan staat op de server.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (Uit)         |     0/1       |

**ResourceNoReplenishRadiusPlayers**

Bepaalt de afstand rondom spelers waarin grondstoffen niet opnieuw groeien. Waarde 2.0 = dubbel, 0.5 = half.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**ResourceNoReplenishRadiusStructures**

Bepaalt de afstand rondom structuren waarin grondstoffen niet opnieuw groeien. Waarde 2.0 = dubbel, 0.5 = half.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**ResourcesRespawnPeriodMultiplier**

Bepaalt de respawn tijd van grondstoffen. Waarde 2.0 = dubbel zo lang, 0.5 = half zo lang.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**ServerAdminPassword**

Wachtwoord om in te loggen als admin. Meer info in onze gids: [Admin worden](ark-becomeadmin.md)

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| String   |      NVT        |  Vrij te kiezen |

**ServerCrosshair**

Bepaalt of een crosshair wordt weergegeven voor de speler.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**serverForceNoHud**

Bepaalt of in-game controls worden weergegeven.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**serverHardcore**

Bepaalt of hardcore modus aan staat (bij dood opnieuw beginnen).

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**ServerPassword**

Wachtwoord om in te loggen op de server. Standaard uit, actief bij invullen wachtwoord.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| String   |      NVT        |  Vrij te kiezen |

**serverPVE**

Bepaalt of PVP aan staat. Uit = alleen PVE.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**ShowMapPlayerLocation**

Bepaalt of spelers op de map worden weergegeven met markers. - [Voorbeeld](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**StructureDamageMultiplier**

Bepaalt hoeveel schade een structuur kan weerstaan. Waarde 2.0 = dubbel, 0.5 = half.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**StructureResistanceMultiplier**

Bepaalt hoeveel schade een structuur ontvangt bij aanval. Waarde 2.0 = dubbel, 0.5 = half.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**TamedDinoDamageMultiplier**

Bepaalt hoeveel schade een getemde dinosaurus doet. Waarde 2.0 = dubbel, 0.5 = half.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**TamedDinoResistanceMultiplier**

Bepaalt de weerstand van een getemde dinosaurus. Waarde 2.0 = dubbel, 0.5 = half.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**TamingSpeedMultiplier**

Bepaalt de snelheid van temmen. Waarde 2.0 = dubbel zo snel, 0.5 = half zo snel.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**XPMultiplier**

Bepaalt hoeveel XP een speler krijgt. Waarde 2.0 = dubbel, 0.5 = half.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**EnablePVPGamma**

Bepaalt of gamma gebruik toegestaan is op PVP servers.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**EnablePVEGamma**

Bepaalt of gamma gebruik toegestaan is op PVE servers.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**SpectatorPassword**

Wachtwoord voor niet-admins om de spectator modus te betreden.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| String   |      NVT        |  Vrij te kiezen |

**DifficultyOffset**

Bepaalt de moeilijkheidsgraad van de server. Max level = DifficultyOffset × 30.

Formule voor DifficultyOffset:

```
DifficultyOffset = (Max Creature Level / 30 - 0.5) / (Official Difficulty - 0.5)
```

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| String   |    0.50000      |  Vrij te kiezen |

**PvEStructureDecayPeriodMultiplier**

Bepaalt hoe lang het duurt voordat gebouwen beginnen te vervallen. Waarde 2.0 = dubbel zo lang, 0.5 = half zo lang.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PvEStructureDecayDestructionPeriod**

Bepaalt wanneer structuren vernietigd kunnen worden door andere spelers op PVE servers. Waarde 2.0 = langer wachten, 0.5 = korter wachten.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**PvPStructureDecay**

Bepaalt of automatische verval van gebouwen aan of uit staat op PVP servers.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       0         |     0/1       |

**DisableDinoDecayPvE**

Schakelt automatisch unclaimen van dino’s uit (false) of aan (true).

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**PvEDinoDecayPeriodMultiplier**

Bepaalt de snelheid waarmee een dino unclaimed wordt. Hogere waarde = sneller.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**AdminLogging**

Toont admin cheat commando’s in chat als ze gebruikt worden.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**MaxTamedDinos**

Maximaal aantal getemde dinosaurussen op de map.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |     8300        |      ∞       |

**MaxNumbersofPlayersInTribe**

Maximaal aantal spelers per stam.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |       2         |      ∞       |

**KickIdlePlayersPeriod**

Tijd in seconden voordat een inactieve speler wordt gekickt.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  | 1800 (seconden) |      ∞       |

**PerPlatformMaxStructuresMultiplier**

Multiplicator voor structuren op zadelplatforms. Gebruik met voorzichtigheid, te hoge waarden kunnen performance problemen geven.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |    1.00000      |      ∞       |

**StructureDamageRepairCooldown**

Tijd in seconden voordat een beschadigde structuur weer gerepareerd kan worden. 0 = direct repareren.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |      180        |      ∞       |

**bForceAllStructureLocking**

Bepaalt of alle soorten containers vergrendelbaar zijn.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       1         |     0/1       |

**bUseVSync**

Bepaalt of VSync aan staat (kan problemen met sommige grafische kaarten verminderen).

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       0         |     0/1       |

**MaxPlatformSaddleStructureLimit**

Maximaal aantal structuren op een zadelplatform.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |      100        |      ∞       |

**RCONPort**

Poort voor RCON verbinding.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |      100        |      ∞       |

**AutoSavePeriodMinutes**

Interval in minuten voor automatische server saves.

:::info
Deze waarde staat vast op 30 minuten en kan niet aangepast worden.
:::

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |      30         |      ∞       |

**RCONServerGameLogBuffer**

Aantal chatregels dat in RCON tools wordt weergegeven.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |      600        |      ∞       |

**PreventOfflinePvPInterval**

Aantal seconden dat een speler offline moet zijn om als echt offline te worden gezien.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  | 60 (seconden)   |      ∞       |

**bPvPDinoDecay**

Bepaalt of dinosaurussen van stam/speler beschermd zijn tijdens offline raid bescherming.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       1         |     0/1       |

**bPvPStructureDecay**

Bepaalt of structuren van stam/speler beschermd zijn tijdens offline raid bescherming.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       1         |     0/1       |

**DisableImprintDinoBuff**

Bepaalt of de extra bonus uit imprinting uit staat.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       1         |     0/1       |

**AllowAnyoneBabyImprintCuddle**

Bepaalt of elke speler baby dino’s mag knuffelen.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  |       1         |     0/1       |

**OverrideOfficialDifficulty**

Overschrijft de officiële moeilijkheidsgraad.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |       1         |     0/1       |

**TheMaxStructuresInRange**

Maximaal aantal structuren toegestaan in een klein gebied.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |     10500       |      ∞       |

**PvEAllowStructuresAtSupplyDrops**

Bepaalt of bouwen bij supply crates is toegestaan.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**AutoDestroyDecayedDinos**

Bepaalt of dino’s direct vernietigd worden in plaats van claimbaar.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**ClampItemSpoilingTimes**

Bepaalt of alle bederftijden van items worden ingesteld op de maximale tijd.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**AllowCrateSpawnsOnTopOfStructures**

Bepaalt of supply crates op structuren kunnen landen.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (uit)         |     0/1       |

**PreventOfflinePvP**

Bepaalt of offline raid bescherming aan staat op PVE/PVP servers.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 1 (aan)         |     0/1       |

**AllowMultipleAttachedC4**

Bepaalt of meerdere C4 explosieven aan dinosaurussen bevestigd mogen worden.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 1 (aan)         |     0/1       |

**bPvEDisableFriendlyFire**

Bepaalt of friendly fire uit staat in PVE.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 1 (aan)         |     0/1       |

**ServerAutoForceRespawnWildDinosInterval**

Tijd in seconden tot een geforceerde respawn van alle wilde dino’s. Bijvoorbeeld 86400 = 1 dag.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |     86400       |      ∞       |

**DisableWeatherFog**

Bepaalt of mist op de map aan of uit staat.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Boolean  | 0 (aan)         |     0/1       |

### **[/script/engine.gamesession]**

**MaxPlayers**

Bepaalt hoeveel spelers tegelijk op de server kunnen spelen.

| Datatype |                        Standaardwaarde                        | Waarde bereik |
| :-------: | :-----------------------------------------------------------: | :-----------: |
| Float    | Afhankelijk van gekozen slots bij bestelling (Fixed Slots)   |   10-130      |

### **[SessionSettings]**

**SessionName**

Stelt de servernaam in die wordt weergegeven in de serverbrowser, game, etc.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |  ARK #XXXXXX    |      ∞       |

### **[MessageOfTheDay]**

**Duration**

Bepaalt hoe lang het welkomstbericht wordt weergegeven na verbinding.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Integer  |    1.00000      |     X-X      |

**Message**

Bepaalt het welkomstbericht dat wordt getoond bij het verbinden met de server.

| Datatype | Standaardwaarde | Waarde bereik |
| :-------: | :-------------: | :-----------: |
| Float    |     "..."       |      /       |

## Configuratie: Game.ini

Zoals eerder genoemd, kunnen uitgebreidere aanpassingen via Game.ini worden gedaan. Bijvoorbeeld het veranderen van engram punten of XP per level.

### Level limiet

Je kunt het maximale level van spelers en dinosaurussen verhogen met `LevelExperienceRampOverrides`. Dit is geïntroduceerd in versie v194. Meer info en voorbeelden vind je op het Steam forum: [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/).

Het commando wordt twee keer toegepast: één keer voor spelerslevels en één keer voor dinosauruslevels. De syntax:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

De vierkante haken geven het level aan (**LEVELVALUE**) en achter het gelijkteken staat het aantal XP (**Points**) dat nodig is om dat level te bereiken.

Wil je bijvoorbeeld een level limiet van 500, dan ziet dat er zo uit:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Verkort voor de duidelijkheid
ExperiencePointsForLevel[499]=50000)
```

### Engram punten

Bij elk **level-up** krijg je **engram punten**. Het aantal punten per level kan sinds versie v193 aangepast worden. De syntax:

```
OverridePlayerLevelEngramPoints=
```

Voor elk level voeg je een regel toe. Bijvoorbeeld, als je 10 levels definieert en voor elk level 5 extra engram punten wilt, dan wordt het:

```
OverridePlayerLevelEngramPoints=5
OverridePlayerLevelEngramPoints=10
OverridePlayerLevelEngramPoints=15
OverridePlayerLevelEngramPoints=20
OverridePlayerLevelEngramPoints=25
OverridePlayerLevelEngramPoints=30
OverridePlayerLevelEngramPoints=35
OverridePlayerLevelEngramPoints=40
OverridePlayerLevelEngramPoints=45
OverridePlayerLevelEngramPoints=50
```

Het aantal regels hangt af van de eerder ingestelde level limiet.

:::info
ARK is een snel veranderend spel met regelmatig updates. Dit heeft ook invloed op de serverconfiguratie. We raden daarom aan om de officiële documentatie te checken voor meer en gedetailleerdere info: https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />