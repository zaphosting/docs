---
id: palworld-enable-pvp
title: "Palworld: Aktivera PvP"
description: "Lär dig hur du aktiverar PvP i Palworld, konfigurerar basstridsbeteende och tillämpar rekommenderade PvP-inställningar på din server. -> Läs mer nu"
sidebar_label: "Aktivera PvP"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld har ett PvP-läge som låter spelare slåss mot varandra och ändrar hur basstrid och guild-interaktion fungerar på din server. I den här guiden lär du dig hur du manuellt aktiverar PvP genom att redigera rätt konfigurationsfil i ZAP-Hostings spelserveradministration och tillämpar de nödvändiga inställningarna.

:::caution Trial Feature Notice
PvP i Palworld betraktas som en testfunktion av spelutvecklaren. Konfigurationsalternativ och spelbeteende kan ändras i framtida uppdateringar.
:::

## Preparation

Innan du börjar, se till att:

- Du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt
- Din server är stoppad eller kan startas om efter ändringarna
- Du förstår att PvP ändrar spelupplevelsen avsevärt, särskilt kring spelarkamp, basförsvar och föremålsförlust vid död

:::info Configuration Access
För ZAP-Hostings Palworld-servrar nås relevant konfigurationsfil via spelserveradministrationen under `Configs`.
:::

## Öppna Palworld-konfigurationsfilen

För att aktivera PvP måste du redigera filen `PalWorldSettings.ini`.

### Hitta filen i ZAP-Hostings gränssnitt

1. Logga in i ZAP-Hostings webbgränssnitt.
2. Öppna din Palworld-spelserver.
3. Gå till `Configs` i spelserveradministrationen.
4. Öppna filen `PalWorldSettings.ini`.



:::note Konfigurationsformat
Palworlds serverinställningar finns vanligtvis i sektionen `OptionSettings=(...)` i `PalWorldSettings.ini`. Du behöver lägga till eller justera de nödvändiga nycklarna inom den inställningsblocket.
:::

## Aktivera nödvändiga PvP-inställningar

För att slå på PvP måste följande tre inställningar vara satta till `True` i `PalWorldSettings.ini`.

### Nödvändiga PvP-nycklar

| Inställning | Krävd värde | Beskrivning |
|---|---|---|
| `bIsPvP` | `True` | Aktiverar PvP-läge på servern |
| `bEnablePlayerToPlayerDamage` | `True` | Tillåter direkt skada mellan spelare |
| `bEnableDefenseOtherGuildPlayer` | `True` | Tillåter försvar mot andra guild-spelare |

### Exempel på konfiguration

Lägg till dessa värden i din `OptionSettings=(...)`-rad, eller ändra befintliga värden om de redan finns:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Undvik dubbletter
Om en inställning redan finns i `PalWorldSettings.ini`, ändra det befintliga värdet istället för att lägga till samma nyckel igen. Dubbletter kan orsaka oväntat beteende eller försvåra felsökning.
:::

## Rekommenderade PvP-inställningar

När PvP är aktiverat kan du även justera fler inställningar för en mer balanserad PvP-upplevelse. Följande värden rekommenderas ofta för PvP-fokuserade servrar.

### Föreslagna värden

| Inställning | Rekommenderat värde | Beskrivning |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | Förhindrar HP-statallokering |
| `bAllowEnhanceStat_Attack` | `False` | Förhindrar Attack-statallokering |
| `bEnableFastTravel` | `True` | Behåller snabbresor aktiverade |
| `bEnableFastTravelOnlyBaseCamp` | `True` | Begränsar snabbresor till basläger |
| `bExistPlayerAfterLogout` | `True` | Spelare finns kvar i världen efter utloggning |
| `bEnableAimAssistPad` | `False` | Avaktiverar sikthjälp för handkontroll |
| `DeathPenalty` | `All` | Tappar alla föremål och Pals vid död |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | Tillåter loot av andra spelares tappade föremål |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | Visar andra guilds basområden |
| `bBuildAreaLimit` | `True` | Hjälper till att förhindra byggande i begränsade områden |
| `GuildPlayerMaxNum` | `4` | Begränsar guildstorlek |
| `BaseCampMaxNumInGuild` | `2` | Begränsar antal baser per guild |
| `MaxBuildingLimitNum` | `1000` | Begränsar byggnader per spelare |
| `GuildRejoinCooldownMinutes` | `60` | Sätter cooldown för att gå med i guild igen |
| `BlockRespawnTime` | `5.0` | Sätter respawntid för bas |
| `RespawnPenaltyDurationThreshold` | `1800.0` | Tid innan respawnstraff återställs |
| `RespawnPenaltyTimeScale` | `2.0` | Multiplicerar respawnstraff vid upprepade dödsfall |

### Exempel på PvP-inställningsblock

Vill du använda de rekommenderade PvP-värdena, inkludera följande i din `OptionSettings=(...)`-sektion:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Valfria PvP-begränsningar och belöningar

Beroende på hur tävlingsinriktad du vill att din PvP-server ska vara kan du även konfigurera teknologibegränsningar och PvP-belöningar.

### Begränsa snabbrörelseteknologier

Du kan begränsa vissa rörelserelaterade teknologier genom att sätta `DenyTechnologyList`.

| Inställning | Exempelvärde |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

Exempelpost:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Kontrollera befintlig syntax
Palworlds konfigurationsformat kan variera beroende på serverversion och hur den befintliga `OptionSettings=(...)`-raden är strukturerad. Innan du sparar, se till att din post matchar den syntax som redan används i din fil.
:::

### Konfigurera PvP-belöningsdroppar

Palworld har även PvP-relaterade belöningsalternativ för spelardöd.

| Inställning | Beskrivning |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | Aktiverar extra föremålsdropp vid PvP-död |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Definierar vilket föremåls-ID som ska droppas |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | Sätter antal droppade föremål |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | Visar PvP-föremålsantal på världskartan för baser |
| `bDisplayPvPItemNumOnWorldMap_Player` | Visar PvP-föremålsantal på världskartan för spelare |

Exempelkonfiguration:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Kompatibilitet för föremåls-ID
Om du använder ett eget värde för `AdditionalDropItemWhenPlayerKillingInPvPMode`, se till att föremåls-ID:t är giltigt för din aktuella Palworld-version. Ogiltiga ID:n kan göra att inställningen misslyckas eller ignoreras.
:::

## Vad ändras när PvP är aktiverat

När PvP är aktiverat ändras spelet på din server på flera viktiga sätt. Baserat på nuvarande offentliga Palworld PvP-riktlinjer kan du generellt förvänta dig följande beteenden:

- Spelare kan skada varandra
- Att gå in i en annan spelares bas kan göra deras bas-Pals fientliga
- Flygande spelare och ryttare på Pals kan ta ökad skada
- Kallade Pals och bas-Pals kan ta minskad skada
- Spelare kan kunna komma åt kistor som tillhör andra guilds
- Närstridsvapen kan göra mindre skada på andra spelares byggnader
- Bas-Pals kan försvara ett större område
- Tillåten distans mellan grannbaser kan öka
- Spelare kan få notiser när deras bas attackeras
- Byggande och reparation kan begränsas under basattack
- Vissa vapen kan ha ändrad räckvidd eller skada i PvP-läge

:::danger Varning om spelpåverkan
Att aktivera PvP kan kraftigt påverka progression, basens säkerhet och spelarretention på din server. Om du driver en publik server rekommenderas att informera dina spelare innan du gör dessa ändringar.
:::

## Spara filen och starta om servern

När du är klar med att redigera `PalWorldSettings.ini`, spara filen i ZAP-Hostings `Configs`-område.

### Tillämpa ändringarna

För att aktivera de nya PvP-inställningarna:

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Starta om din Palworld-server från ZAP-Hostings spelserveradministration.

En omstart krävs för att konfigurationsändringarna ska träda i kraft.

:::info Ingen extra kommando krävs
Normalt behövs inget extra kommando i spelet eller konsolen efter att ha redigerat `PalWorldSettings.ini`. En fullständig serveromstart är det som krävs för att tillämpa den nya PvP-konfigurationen.
:::

## Verifiera att PvP är aktivt

Efter serveromstart, anslut till servern och testa beteendet i spelet.

### Grundläggande kontroller

Du kan verifiera inställningen genom att kontrollera om:

- Spelare kan skada varandra
- PvP-relaterat basbeteende är aktivt
- Dödsstraff och lootregler stämmer med dina inställda värden
- Valfria begränsningar som `DenyTechnologyList` fungerar som förväntat

Om ändringarna inte gäller, öppna `PalWorldSettings.ini` igen och kontrollera:

- Stavfel i inställningsnamn
- Dubbletter av nycklar
- Felaktiga kommatecken eller formatering i `OptionSettings=(...)`
- Värden som inte sparades korrekt före omstart

## Conclusion

Grattis, du har framgångsrikt aktiverat PvP på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig dagligen för att hjälpa dig!