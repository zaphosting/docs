---
id: palworld-faster-egg-hatching
title: "Palworld: Snabbare Äggkläckning"
description: "Lär dig hur du minskar äggkläckningstiden i Palworld genom att redigera inställningen för äggkläckning på din Palworld-server för snabbare resultat. -> Läs mer nu"
sidebar_label: Palworld: Snabbare Äggkläckning
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

I Palworld styrs äggkläckningstiden via en serverkonfigurationsinställning. I den här guiden lär du dig hur du minskar äggkläckningstiden på din ZAP-Hosting Palworld-server genom att redigera rätt konfigurationsfil och tillämpa ändringen korrekt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att:

- du har tillgång till din ZAP-Hosting spelserver via webbgränssnittet
- din Palworld-server är tillgänglig i spelserveradministrationen
- du kan redigera filer under avsnittet **Configs**

:::info Åtkomst till konfigurationsfil
För Palworld på ZAP-Hosting kan relevanta serverinställningar redigeras via spelserveradministrationen under **Configs**. För denna uppgift behöver du ändra filen `PalWorldSettings.ini`.
:::

## Förstå Äggkläckningsinställningen

Palworld använder inställningen `PalEggDefaultHatchingTime` för att definiera grundläggande äggkläckningstid i timmar. Ett lägre värde innebär att äggen kläcks snabbare.

Enligt nuvarande referenser för Palworld-serverkonfiguration är standardvärdet `72`, vilket motsvarar `72` timmar för ett Stort Ägg. Andra äggtyper skalas också från detta grundvärde.

| Konfigurationsnyckel | Standardvärde | Beskrivning |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | Grundläggande äggkläckningstid i timmar |

:::note Hur inställningen fungerar
Detta värde påverkar den generella äggkläckningsprocessen på din server. Om du minskar det blir kläckningen snabbare för alla spelare som använder inkubatorer.
:::

## Öppna Palworld-konfigurationsfilen

Först behöver du komma åt rätt konfigurationsfil i ZAP-Hosting-gränssnittet.

### Navigera till avsnittet Configs

Öppna din Palworld-spelserveradministration och gå till avsnittet **Configs**. Där hittar du och öppnar filen med namnet:

```ini
PalWorldSettings.ini
```

Detta är filen som innehåller gameplay-konfigurationsinställningarna för din Palworld-server, inklusive inställningen för äggkläckningstid.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Redigera Äggkläckningstiden

När du har öppnat `PalWorldSettings.ini`, sök efter raden `OptionSettings`. Palworld lagrar många gameplay-inställningar i detta avsnitt.

### Ändra rätt konfigurationsnyckel

Hitta följande rad:

```ini
PalEggDefaultHatchingTime=72.000000
```

Ändra värdet till ett lägre tal för att göra äggkläckningen snabbare.

Till exempel:

```ini
PalEggDefaultHatchingTime=24.000000
```

Detta skulle minska grundläggande äggkläckningstid från `72` timmar till `24` timmar.

### Exempelvärden

Du kan använda olika värden beroende på hur snabbt du vill att kläckningen ska gå på din server.

| Värde | Resultat |
| --- | --- |
| `72.000000` | Standard äggkläckningstid |
| `48.000000` | Långsammare minskning, mer balanserat gameplay |
| `24.000000` | Mycket snabbare äggkläckning |
| `12.000000` | Väldigt snabb äggkläckning |
| `1.000000` | Extremt snabb kläckning |

:::caution Använd realistiska värden
Mycket låga värden kan påverka gameplay-balansen kraftigt. Om du vill ha en mer naturlig progression, börja med ett måttligt värde som `24.000000` eller `48.000000`.
:::

### Exempel på konfigurationsavsnitt

Beroende på din nuvarande konfiguration kommer inställningen att finnas inuti `OptionSettings`-blocket. Ett typiskt exempel ser ut ungefär så här:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip Redigera rätt post
Om nyckeln `PalEggDefaultHatchingTime` redan finns, redigera det befintliga värdet istället för att lägga till en duplicerad post. Dubbletter i samma `OptionSettings`-block kan göra att inställningar ignoreras eller skrivs över.
:::

## Spara och tillämpa ändringarna

Efter att du redigerat värdet, spara filen `PalWorldSettings.ini` i ZAP-Hosting-gränssnittet.

### Starta om servern

När filen är sparad, starta om din Palworld-server så att den nya äggkläckningstiden laddas in.

:::info Omstart krävs
Den uppdaterade konfigurationen träder inte i kraft förrän servern har startats om.
:::

## Viktigt beteende för redan existerande ägg

Om ägg redan är under inkubation uppdateras inte det nya kläckningstidsvärdet pålitligt för dessa aktiva inkubationstimers. I praktiken bör du ta bort och starta om inkubationen för de äggen så att den nya hastigheten tillämpas.

| Situation | Krävd åtgärd |
| --- | --- |
| Nya ägg placerade efter ändringen | Ingen extra åtgärd behövs efter omstart |
| Ägg som redan inkuberades före ändringen | Starta om inkubationen för dessa ägg |

:::note Befintliga inkubationstimers
Om du ändrar äggkläckningstiden och inte ser förväntat resultat, kontrollera om ägget redan var under inkubation innan konfigurationsändringen.
:::

## Conclusion

Grattis, du har framgångsrikt minskat äggkläckningstiden på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig dagligen för att hjälpa dig! 🙂