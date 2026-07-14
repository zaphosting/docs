---
id: palworld-performance-guide
title: "Palworld: Prestandaguide"
description: "Förbättra Palworld-serverns prestanda, minska prestandafall och sänk serverbelastningen med manuella konfigurationsändringar. -> Lär dig mer nu"
sidebar_label: Palworld: Prestandaguide
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld-serverns prestanda kan minska över tid, särskilt på aktiva servrar med många baser, arbetare, nedsläppta föremål och vilda Pals. I den här guiden lär du dig hur du optimerar filen `PalWorldSettings.ini` i ZAP-Hostings webbgränssnitt för att minska serverbelastningen och förbättra den totala prestandan.

## Preparation

Innan du börjar behöver du tillgång till din Palworld-spelserveradministration och behörighet att redigera konfigurationsfiler.

:::info Krävd åtkomst
Du behöver åtkomst till din Palworld-server i ZAP-Hostings spelserveradministrationspanel. Den nödvändiga konfigurationsfilen finns under `Configs`.
:::

:::caution Skapa en säkerhetskopia först
Prestandaoptimering kan påverka spelupplevelsen avsevärt. Innan du redigerar din konfiguration rekommenderas att du skapar en säkerhetskopia så att du kan återställa dina tidigare inställningar vid behov.
:::

## Open the Palworld Configuration File

För att optimera din server behöver du redigera huvudkonfigurationsfilen för Palworld-servern.

1. Logga in på ditt ZAP-Hosting webbgränssnitt.
2. Öppna din **Palworld** spelserveradministration.
3. Navigera till **Configs**.
4. Öppna filen `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Var du gör ändringarna
Prestandarelaterade inställningar finns i `PalWorldSettings.ini`. Du behöver redigera de befintliga värdena manuellt i denna fil.
:::

## Understand the Relevant Settings

Flera Palworld-inställningar påverkar serverns prestanda direkt. Vissa värden minskar belastningen på CPU, minne och världssimulering, medan andra hjälper till att begränsa ansamling från inaktiva spelare eller överdrivet många världsenheter.

### Main Performance Settings

Följande inställningar är mest relevanta om du vill minska prestandafall på en aktiv server.

| Inställning | Standard | Rekommenderad ändring | Effekt |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | Behåll på `0.1` eller högre | Högre försämring tar bort övergivna byggnader snabbare |
| `bAutoResetGuildNoOnlinePlayers` | `False` | Sätt till `True` om lämpligt | Tar bort inaktiva guildbaser efter konfigurerad väntetid |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Justera vid behov | Definierar inaktivitetstid i timmar innan guild återställs |
| `PalSpawnNumRate` | `1.0` | Minska | Spawna färre vilda Pals och minska simuleringsbelastning |
| `DropItemMaxNum` | `3000` | Minska | Begränsar nedsläppta föremål i världen |
| `DropItemAliveMaxHours` | `1.0` | Minska | Tar bort nedsläppta föremål snabbare |
| `BaseCampMaxNumInGuild` | `4` | Minska | Minskar antalet guildbaser |
| `ServerReplicatePawnCullDistance` | `15000.0` | Minska | Sänker synkroniseringsavstånd för Pals och minskar nätverks-/serverbelastning |
| `BaseCampWorkerMaxNum` | `15` | Minska | Begränsar antalet arbetande Pals per bas |
| `MaxBuildingLimitNum` | `0` | Sätt ett värde | Begränsar totala byggnader per spelare |
| `bEnableInvaderEnemy` | `True` | Sätt till `False` | Inaktiverar raid-liknande fiender och minskar belastning |
| `bEnableFastTravel` | `True` | Sätt till `False` vid behov | Kan minska frysningar orsakade av snabbresor |
| `bIsPvP` | `False` | Behåll `False` om inte nödvändigt | PvP kan öka serverbelastningen i aktiva miljöer |

### Secondary Performance Settings

Dessa inställningar kan också hjälpa, särskilt på större publika servrar.

| Inställning | Standard | Rekommenderad ändring | Effekt |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | Minska | Sänker det totala antalet baser som tillåts på servern |
| `AutoSaveSpan` | `240` | Öka | Minskar hur ofta servern gör automatiska sparningar |

:::tip Välj konservativa ändringar först
Det är bäst att ändra bara några få värden åt gången och sedan testa serverns beteende. Det gör det lättare att se vilken inställning som förbättrade prestandan och vilken som påverkade spelupplevelsen för mycket.
:::

## Edit the Configuration

Palworld lagrar serveralternativ i sektionen `OptionSettings` i `PalWorldSettings.ini`. Du behöver justera relevanta poster manuellt.

### Example Optimized Configuration

Följande exempel visar en konservativ konfiguration med fokus på prestanda. Byt bara ut de värden du faktiskt vill använda för din server.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution Kontrollera befintliga poster
Palworlds konfigurationsformat kan ändras mellan uppdateringar. Innan du sparar, se till att du redigerar den befintliga raden `OptionSettings` som redan finns i din fil istället för att skapa dubbletter eller motstridiga poster.
:::

### Recommended Value Adjustments

Om du inte vill ersätta hela raden kan du redigera bara de relevanta värdena i din befintliga konfiguration.

| Post | Exempelvärde | Varför ändra |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | Minskar vilda Pal-spawns |
| `DropItemMaxNum` | `2000` | Minskar mängden föremål på marken |
| `DropItemAliveMaxHours` | `0.5` | Tar bort nedsläppta föremål snabbare |
| `BaseCampMaxNum` | `64` | Minskar totalt antal baser |
| `BaseCampMaxNumInGuild` | `3` | Begränsar guildbasers expansion |
| `BaseCampWorkerMaxNum` | `10` | Minskar AI-arbetarbelastning |
| `ServerReplicatePawnCullDistance` | `10000.0` | Minskar replikeringsavstånd |
| `bEnableInvaderEnemy` | `False` | Inaktiverar raid-relaterad belastning |
| `bEnableFastTravel` | `False` | Undviker frysningar vid snabbresor |
| `bAutoResetGuildNoOnlinePlayers` | `True` | Rensar inaktiva guildbaser |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Sätter väntetid för inaktivitet |
| `MaxBuildingLimitNum` | `[your_limit]` | Begränsar överdrivet byggande |
| `bIsPvP` | `False` | Förhindrar extra PvP-belastning |
| `AutoSaveSpan` | `[your_value]` | Minskar sparfrekvens om stöds i din konfiguration |

:::danger Inaktiv guildåterställning tar bort baser
Om du aktiverar `bAutoResetGuildNoOnlinePlayers=True` kan inaktiva guilds automatiskt upplösas efter tiden som anges i `AutoResetGuildTimeNoOnlinePlayers`. Detta kan permanent radera baser och byggnader som tillhör inaktiva spelare.
:::

## Save and Apply the Changes

Efter att du redigerat filen behöver du spara konfigurationen och starta om servern så att de nya inställningarna laddas.

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Gå tillbaka till din spelserveradministration.
3. Starta om Palworld-servern.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Omstart krävs
En omstart krävs efter att du ändrat `PalWorldSettings.ini`. Utan omstart kommer servern fortsätta använda de tidigare inställningarna.
:::

## Best Practices for Long-Term Performance

Manuella konfigurationsändringar hjälper, men de är bara en del av den totala serveroptimeringen.

### Use Automatic Daily Restarts

En daglig omstart är en vanlig rekommendation för Palworld-servrar eftersom resursanvändningen kan byggas upp över tid.

- Skapa ett automatiskt omstartsschema i din ZAP-Hosting serveradministration
- Välj en tid med låg spelaraktivitet
- Informera dina spelare i förväg om din community är aktiv

### Limit World Growth

Den största orsaken till prestandaförsämring på långvariga Palworld-servrar är oftast världens komplexitet.

För att minska detta:

- sänk basgränser
- sänk antalet arbetare
- minska ansamling av nedsläppta föremål
- minska vilda Pal-spawns
- rensa inaktiva guilds försiktigt
- överväg att sätta en bygggräns med `MaxBuildingLimitNum`

### Test Changes Gradually

Applicera inte extrema minskningar direkt om inte din server redan är instabil.

En bra process är:

1. Minska spawn- och föremålsvärden först
2. Sänk bas- och arbetarbegränsningar därefter
3. Inaktivera valfria funktioner med hög belastning vid behov
4. Starta om och övervaka prestandan efter varje ändringsomgång

:::tip Balans mellan prestanda och spelupplevelse
De bästa inställningarna beror på din servertype. En liten privat server kan oftast behålla högre värden, medan en stor publik communityserver ofta behöver striktare gränser för att undvika prestandafall.
:::

## Conclusion

Grattis, du har framgångsrikt optimerat din Palworld-serverprestanda. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂