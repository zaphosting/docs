---
id: ark-configuration
title: "ARK: Serverkonfiguration"
description: "Upptäck hur du optimerar dina ARK-spelserverinställningar för bättre spelupplevelse och anpassning → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Serverkonfiguration

Konfigurationen av en **ARK-spelserver** kan kännas förvirrande och frustrerande för vissa. Men det finns en anledning till det. ARK erbjuder massor av konfigurationsmöjligheter för spelet. Dessutom sker konfigurationen i olika konfigurationsfiler, där du också måste hålla koll på vilka kommandon som hör hemma i vilken fil. I den här guiden vill vi ge dig en bättre överblick över hur konfigurationen av en ARK-spelserver fungerar.

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## Skillnader mellan konfigurationsfiler

Konfigurationen av **ARK-spelservern** sker via konfigurationsfilerna **GameUserSettings.ini** och **Game.ini**. Du kan ändra dem antingen via vårt **Webbgränssnitt** under **Configs** eller via **FTP**.

| Konfigurationsfil    | Webbgränssnitt                                              | FTP                                     |
| -------------------- | ----------------------------------------------------------- | --------------------------------------- |
| GameUserSettings.ini | `Gameserver Administration -> Configs ->GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini             | `Gameserver Administration -> Configs ->Game.ini`           | `ShooterGame/Saved/Config/LinuxServer/` |

Konfigurationsfilen **GameUserSettings.ini** innehåller inställningar för både spelklienten och servern. Inställningar för spelklienten används inte av servern. Serverinställningar anges i sektionen **[ServerSettings]**, som vanligtvis finns längst ner i filen. För avancerade ändringar, som att ändra engram-poäng eller XP som belönas per nivå, inaktivera visst innehåll eller anpassa spelarpreferenser, används konfigurationsfilen **Game.ini**.

## Konfiguration

Nedan förklarar vi de två konfigurationsfilerna. Vi går igenom de vanligaste kommandona och hur de fungerar.

## Konfiguration: Karta

ARK erbjuder olika kartor som kan spelas på servern. Du kan välja vilken karta du vill spela på i webbgränssnittet under inställningar.

| Kartor         | Publicerad  | Kommando namn     |
| -------------- | ----------- | ----------------- |
| The Island     | 02.06.2015  | `TheIsland`       |
| The Center     | 17.05.2016  | `TheCenter`       |
| Scorched Earth | 01.09.2016  | `ScorchedEarth_P` |
| Ragnarok       | 12.06.2017  | `Ragnarok`        |
| Aberration     | 12.12.2017  | `Aberration_P`    |
| Extinction     | 06.11.2018  | `Extinction`      |
| Valguero       | 18.06.2019  | `Valguero_P`      |
| Genesis        | 25.02.2020  | `Genesis`         |
| Crystal Isles  | 11.06.2020  | `CrystalIsles`    |

Skriv helt enkelt in kartans kommando namn i fältet **Map** så laddas den nästa gång du startar din server.

![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)

## Konfiguration: GameUserSettings.ini

### [ServerSettings]

**allowThirdPersonPlayer**

Detta kommando bestämmer om tredjepersonsperspektiv ska vara aktiverat eller inte.

| Datatyp  | Standardvärde | Värdeintervall |
| :------: | :-----------: | :------------: |
| Boolean  |       0       |      0/1       |

**AllowCaveBuildingPvE**

Detta kommando bestämmer om byggande i grottor ska tillåtas (när PVE-läge är aktivt) eller inte.

| Datatyp  | Standardvärde | Värdeintervall |
| :------: | :-----------: | :------------: |
| Boolean  |       0       |      0/1       |

**alwaysNotifyPlayerJoined**

Detta kommando bestämmer om spelare ska få en notis när någon ansluter till servern.

| Datatyp  | Standardvärde | Värdeintervall |
| :------: | :-----------: | :------------: |
| Boolean  |       0       |      0/1       |

**alwaysNotifyPlayerLeft**

Detta kommando bestämmer om spelare ska få en notis när någon lämnar servern.

| Datatyp  | Standardvärde | Värdeintervall |
| :------: | :-----------: | :------------: |
| Boolean  |       0       |      0/1       |

**bAllowFlyerCarryPvE**

Detta kommando bestämmer om spelare får bära dinosaurier med flygande dinosaurier eller inte.

| Datatyp  | Standardvärde | Värdeintervall |
| :------: | :-----------: | :------------: |
| Boolean  |       0       |      0/1       |

**bDisableStructureDecayPvE**

Detta kommando inaktiverar den progressiva förfallet av spelarbyggnader.

| Datatyp  | Standardvärde | Värdeintervall |
| :------: | :-----------: | :------------: |
| Boolean  |       0       |      0/1       |

**DayCycleSpeedScale**

Detta kommando definierar skalningsfaktorn för tidens gång i ARK och styr hur ofta dag blir natt och natt blir dag. Standardvärdet 1 ger samma cykelhastighet som i singleplayer (och på officiella servrar). Värden under 1 saktar ner cykeln, högre värden snabbar upp den. 1 minut verklig tid motsvarar ungefär 28 minuter speltid. För en ungefärlig 24-timmars dag/natt-cykel i spelet bör värdet .035 användas.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**DayTimeSpeedScale**

Detta kommando definierar skalningsfaktorn för tidens gång under dagen i ARK. Värdet bestämmer längden på varje dag i förhållande till natten (som styrs av NightTimeSpeedScale). Att minska värdet förlänger dagen.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**NightTimeSpeedScale**

Detta kommando definierar skalningsfaktorn för tidens gång under natten i ARK. Värdet bestämmer längden på varje natt i förhållande till dagen (som styrs av DayTimeSpeedScale). Att minska värdet förlänger natten.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**DinoCharacterFoodDrainMultiplier**

Detta kommando definierar dinosauriers matförbrukning. Ett högre värde ökar matförbrukningen (dinosaurierna blir hungrigare). Det påverkar även tamningstider.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**DinoCharacterHealthRecoveryMultiplier**

Detta kommando definierar dinosauriers hälsoregenerering. Ett högre värde ökar regenereringshastigheten, ett lägre gör den långsammare.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**DinoCharacterStaminaDrainMultiplier**

Detta kommando definierar hur snabbt en dinosaurie blir trött. Ett högre värde ökar trötthetshastigheten, ett lägre gör den långsammare.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**DinoCountMultiplier**

Detta kommando definierar hur många dinosaurier som ska spawna. Ett högre värde ökar chansen för dinosaurier att dyka upp på kartan, ett lägre minskar chansen.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**DinoDamageMultiplier**

Detta kommando definierar hur mycket skada en dinosaurie gör. Ett högre värde ökar skadan, ett lägre minskar den.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**DinoResistanceMultiplier**

Detta kommando definierar dinosauriers motståndskraft. Ett högre värde ökar motståndet.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**globalVoiceChat**

Detta kommando bestämmer om global röstchatt ska vara aktiverad på servern eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean |       0       |      0/1       |

**HarvestAmountMultiplier**

Detta kommando definierar mängden resurser som samlas vid skörd. Ett högre värde ger fler resurser, ett lägre färre.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**HarvestHealthMultiplier**

Detta kommando definierar hälsan på resurser som kan skördas. Högre värden ökar mängden material per slag.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**noTributeDownloads**

Detta kommando förbjuder nedladdning av spelarkaraktärer från servern.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PreventDownloadSurvivors**

Detta kommando förhindrar nedladdning av överlevare från servern.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PreventDownloadItems**

Detta kommando förhindrar nedladdning av föremål från servern.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PreventDownloadDinos**

Detta kommando förhindrar nedladdning av dinosaurier från servern.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PlayerCharacterFoodDrainMultiplier**

Detta kommando definierar hur snabbt en spelare blir hungrig. Att öka värdet gör att spelaren blir hungrigare snabbare, att minska värdet gör att spelaren blir hungrigare långsammare. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PlayerCharacterHealthRecoveryMultiplier**

Detta kommando definierar hur snabbt en spelare läker. Att öka värdet gör läkningen snabbare, att minska gör den långsammare. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PlayerCharacterStaminaDrainMultiplier**

Detta kommando definierar hur snabbt spelare blir trötta. Att öka värdet gör att tröttheten kommer snabbare, att minska gör att spelaren blir trött långsammare. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PlayerCharacterWaterDrainMultiplier**

Detta kommando definierar hur snabbt en spelare blir törstig. Att öka värdet gör att spelaren blir törstigare snabbare, att minska gör det långsammare. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PlayerDamageMultiplier**

Detta kommando definierar hur mycket skada en spelare gör. Att öka värdet ger mer skada, att minska ger mindre. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PlayerResistanceMultiplier**

Detta kommando definierar spelarens motståndskraft. Att öka värdet ökar motståndet, att minska värdet minskar det. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**proximityChat**

Detta kommando bestämmer om lokal chat ska vara aktiverad på servern eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (Inaktiverad) |     0/1       |

**ResourceNoReplenishRadiusPlayers**

Detta kommando definierar avståndet mellan spelare och resurser där resurser inte ska återväxa. Att öka värdet ökar radien, att minska värdet minskar radien. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**ResourceNoReplenishRadiusStructures**

Detta kommando definierar avståndet mellan byggnader och resurser där resurser inte ska återväxa. Att öka värdet ökar radien, att minska värdet minskar radien. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**ResourcesRespawnPeriodMultiplier**

Detta kommando definierar respawntiden för resurser. Att öka värdet förlänger respawntiden, att minska förkortar den. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**ServerAdminPassword**

Detta kommando sätter lösenordet för att logga in som admin. Mer info finns i vår guide: [Bli admin](ark-becomeadmin.md)

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| String  |      N/A      |    Valfritt    |

**ServerCrosshair**

Detta kommando bestämmer om ett sikte ska visas för spelaren eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**serverForceNoHud**

Detta kommando bestämmer om in-game kontroller ska visas för spelaren eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**serverHardcore**

Detta kommando bestämmer om hardcore-läget (där spelaren måste börja om från början vid död) ska vara aktiverat eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**ServerPassword**

Detta kommando sätter lösenord för att logga in på servern. Om endast vissa ska ha tillgång kan du sätta ett lösenord. Som standard är detta avstängt och aktiveras när ett lösenord sätts.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| String  |      N/A      |    Valfritt    |

**serverPVE**

Detta kommando bestämmer om PVP ska vara aktiverat på servern eller inte. Om PVP är avstängt är det endast PVE som gäller.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**ShowMapPlayerLocation**

Detta kommando bestämmer om spelare ska visas på kartan med markörer eller inte. - [Exempel](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**StructureDamageMultiplier**

Detta kommando definierar hur mycket skada en byggnad tål. Att öka värdet ökar motståndet, att minska värdet minskar det. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**StructureResistanceMultiplier**

Detta kommando definierar hur mycket skada en byggnad tar när den attackeras. Att öka värdet ger mer skada, att minska ger mindre. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**TamedDinoDamageMultiplier**

Detta kommando definierar skadan från en tam dinosaurie vid attack. Att öka värdet ger mer skada, att minska ger mindre. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**TamedDinoResistanceMultiplier**

Detta kommando definierar motståndskraften hos en tam dinosaurie. Att öka värdet ökar motståndet, att minska värdet minskar det. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**TamingSpeedMultiplier**

Detta kommando definierar tamningshastigheten. Att öka värdet ger snabbare tamning, att minska ger långsammare. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**XPMultiplier**

Detta kommando definierar erfarenhetspoäng (XP) som spelaren får. Att öka värdet ger mer XP, att minska ger mindre. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**EnablePVPGamma**

Detta kommando bestämmer om gamma-användning är tillåten på en PVP-server eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**EnablePVEGamma**

Detta kommando bestämmer om gamma-användning är tillåten på en PVE-server eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**SpectatorPassword**

Detta kommando sätter lösenordet som krävs för att gå in i åskådarläge (icke-admin).

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| String  |      N/A      |    Valfritt    |

**DifficultyOffset**

Detta kommando definierar serverns svårighetsgrad. För att räkna ut maxnivån för varelser multiplicerar du med 30 (eftersom maxnivån skalar linjärt med svårighetsgraden, och 1.0 ger maxnivå 30). För att räkna ut svårighetsoffset för maxnivå används:

```
DifficultyOffset = (Maximum Creature Level / 30 - 0.5) / (Official Difficulty - 0.5)
```

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| String  |    0.50000    |    Valfritt    |

**PvEStructureDecayPeriodMultiplier**

Detta kommando definierar tiden innan byggnader börjar förfalla. Att öka värdet förlänger tiden, att minska förkortar den. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PvEStructureDecayDestructionPeriod**

Detta kommando definierar när byggnader kan förstöras av andra spelare på en PVE-server. Att öka värdet förlänger väntetiden, att minska förkortar den. Värdet 2.0 dubblar standardvärdet, 0.5 halverar det.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**PvPStructureDecay**

Detta kommando bestämmer om automatisk förfall av byggnader på PVP-server ska vara aktiverat eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean |       0       |      0/1       |

**DisableDinoDecayPvE**

Detta kommando inaktiverar (true) eller aktiverar (false) automatisk avkrävning av dinos.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**PvEDinoDecayPeriodMultiplier**

Detta kommando definierar multiplikatorn för hur snabbt en dino blir avkrävd (högre = snabbare, lägre = långsammare).

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**AdminLogging**

Detta kommando aktiverar loggning av admin-cheatkommandon i chatten när de används av en admin i spelet.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**MaxTamedDinos**

Detta kommando definierar max antal tambara dinosaurier på ön.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |     8300      |       ∞        |

**MaxNumbersofPlayersInTribe**

Detta kommando definierar max antal spelare per stam.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |       2       |       ∞        |

**KickIdlePlayersPeriod**

Detta kommando definierar tidsperioden tills en inaktiv spelare kickas från servern.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer | 1800 (sekunder) |      ∞        |

**PerPlatformMaxStructuresMultiplier**

Detta kommando definierar multiplikatorn för byggnader på sadelplattformar. Använd med försiktighet – för höga värden kan ge stora prestandaproblem.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |    1.00000    |       ∞        |

**StructureDamageRepairCooldown**

Detta kommando definierar tiden innan en skadad byggnad kan repareras igen. (0 tillåter reparation utan väntetid)

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |      180      |       ∞        |

**bForceAllStructureLocking**

Detta kommando bestämmer om alla typer av behållare kan låsas.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean |       1       |      0/1       |

**bUseVSync**

Detta kommando bestämmer om VSync ska vara aktiverat eller inte (kan minska problem med vissa grafikkort).

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean |       0       |      0/1       |

**MaxPlatformSaddleStructureLimit**

Detta kommando definierar max antal byggnader på sadelplattformen.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |      100      |       ∞        |

**RCONPort**

Detta kommando definierar RCON-porten som används för inloggning via RCON-konsol.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |      100      |       ∞        |

**AutoSavePeriodMinutes**

Detta kommando definierar intervallet (i minuter) för automatisk sparning av servern.

:::info
Detta värde är satt till 30 minuter och kan inte ändras.
:::

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |      30       |       ∞        |

**RCONServerGameLogBuffer**

Detta kommando definierar hur många chatrader som ska listas i RCON-verktyg.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |      600      |       ∞        |

**PreventOfflinePvPInterval**

Detta kommando definierar hur många sekunder en spelare måste vara frånkopplad för att räknas som faktiskt offline.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer | 60 (sekunder) |       ∞        |

**bPvPDinoDecay**

Detta kommando bestämmer om dinosaurier i stam/spelare skyddas i aktiverad offline raid-skydd.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean |       1       |      0/1       |

**bPvPStructureDecay**

Detta kommando bestämmer om byggnader i stam/spelare skyddas vid offline raid-skydd.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean |       1       |      0/1       |

**DisableImprintDinoBuff**

Detta kommando bestämmer om bonusvärdet från att ha uppfostrat en dinobebis själv ska inaktiveras.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean |       1       |      0/1       |

**AllowAnyoneBabyImprintCuddle**

Detta kommando bestämmer om alla spelare kan gosa med bebisdinosaurier.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean |       1       |      0/1       |

**OverrideOfficialDifficulty**

Detta kommando skriver över svårighetsgraden.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |       1       |      0/1       |

**TheMaxStructuresInRange**

Detta kommando definierar max tillåtna antal byggnader inom nära räckhåll.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |     10500     |       ∞        |

**PvEAllowStructuresAtSupplyDrops**

Detta kommando bestämmer om byggnader nära supply crates är tillåtna eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**AutoDestroyDecayedDinos**

Detta kommando bestämmer om dinos ska förstöras direkt istället för att bli claimbara.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**ClampItemSpoilingTimes**

Detta kommando sätter alla föremåls utgångstider till maxvärdet.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**AllowCrateSpawnsOnTopOfStructures**

Detta kommando bestämmer om supply crates kan landa på byggnader.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (inaktiverat) |     0/1       |

**PreventOfflinePvP**

Detta kommando bestämmer om "Offline Raid Protection" ska vara aktiverat på PVE/PVP-servrar eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 1 (aktiverat) |     0/1       |

**AllowMultipleAttachedC4**

Detta kommando tillåter att fästa flera C4-explosiver på dinosaurier.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 1 (aktiverat) |     0/1       |

**bPvEDisableFriendlyFire**

Detta kommando bestämmer om friendly fire ska vara avstängt i PVE eller inte.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 1 (aktiverat) |     0/1       |

**ServerAutoForceRespawnWildDinosInterval**

Detta kommando definierar tiden i sekunder tills respawn av alla vilda dinos tvingas. Exempelvis betyder 86400 en tvingad respawn efter en dag.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |     86400     |      0/1      |

**DisableWeatherFog**

Detta kommando bestämmer om dimman på kartan ska vara aktiverad eller inaktiverad.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Boolean | 0 (aktiverat) |     0/1       |

### **[/script/engine.gamesession]**

**MaxPlayers**

Detta kommando definierar hur många spelare som kan spela samtidigt på servern.

| Datatyp |                        Standardvärde                         | Värdeintervall |
| :-----: | :----------------------------------------------------------: | :------------: |
|  Float  | Beroende på slotval vid beställning (Fast antal slots)      |    10-130      |

### **[SessionSettings]**

**SessionName**

Detta kommando sätter servernamnet som visas i serverlistan, spelet osv.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |  ARK #XXXXXX  |       ∞        |

### **[MessageOfTheDay]**

**Duration**

Detta kommando definierar hur länge välkomstmeddelandet visas efter anslutning.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
| Integer |    1.00000    |      X-X       |

**Message**

Detta kommando definierar välkomstmeddelandet som visas när en spelare ansluter till servern.

| Datatyp | Standardvärde | Värdeintervall |
| :-----: | :-----------: | :------------: |
|  Float  |     "..."     |       /        |

## Konfiguration: Game.ini

Som nämnts tidigare kan mer avancerade ändringar göras via Game.ini. Det inkluderar t.ex. att ändra engram-poäng eller XP som belönas per nivå.

### Nivågräns

Det finns ett sätt att höja maxnivån för spelare och dinosaurier. Funktionen `LevelExperienceRampOverrides` används för detta och infördes i version v194. Mer info och exempel finns i Steam-forumet: [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/).

Kommandot används två gånger: första för spelarens nivå och andra för dinosauriens nivå. Syntaxen ser ut så här:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

Hakparenteserna definierar respektive nivå (**LEVELVALUE**) och efter likhetstecknet anges mängden XP (**Points**) som krävs för att nå den nivån.

Om du t.ex. vill ha 500 nivåer som maxgräns ser det ut så här:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Förkortat för tydlighet
ExperiencePointsForLevel[499]=50000)
```

### Engram-poäng

Vid varje **level-up** får du **engram-poäng**. Antalet poäng per nivå kan också ändras sedan version v193. Syntaxen ser ut så här:

```
OverridePlayerLevelEngramPoints=
```

För varje nivå måste du lägga till en rad. Om du t.ex. definierar 10 nivåer och vill ha **5 engram-poäng** mer för varje nivå ser det ut så här:

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

Antalet rader beror vanligtvis på den tidigare definierade nivågränsen.

:::info
Ark är ett snabbt utvecklande spel och innehåller därför många regelbundna uppdateringar. Detta påverkar även serverkonfigurationen. Vi rekommenderar därför att kolla in den officiella dokumentationen för mer detaljerad info: https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />