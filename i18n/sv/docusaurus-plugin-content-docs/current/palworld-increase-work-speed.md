---
id: palworld-increase-work-speed
title: "Palworld: Öka Arbetsfarten"
description: "Lär dig hur du ökar arbetsfarten i Palworld genom att ändra inställningen WorkSpeedRate för snabbare arbete av spelare och Pals på din server. -> Läs mer nu"
sidebar_label: Palworld: Öka Arbetsfarten
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig justera hur snabbt spelare och Pals utför basrelaterat arbete genom att ändra ett serverkonfigurationsvärde. I den här guiden lär du dig hur du ökar arbetsfarten på din ZAP-Hosting Palworld-server genom att redigera rätt konfigurationsfil och tillämpa ändringarna korrekt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserveradministration i ZAP-Hostings webbgränssnitt.

:::info Manuell Konfiguration Krävs
Denna inställning görs manuellt via konfigurationseditorn. Du behöver själv redigera Palworld-serverns konfigurationsfil under avsnittet `Configs` i din spelserveradministration.
:::

## Öppna Palworld-konfigurationsfilen

För att ändra arbetsfarten behöver du redigera filen `PalWorldSettings.ini`.

### Var du hittar filen

1. Logga in på ZAP-Hostings webbplats.
2. Öppna din **Palworld**-spelserveradministration.
3. Navigera till **Configs**.
4. Öppna filen som heter `PalWorldSettings.ini`.

Denna fil innehåller spelinställningar som styr hastigheter och multiplikatorer för din Palworld-server.

:::note Plats för Konfigurationsfilen
Hos ZAP-Hosting finns den relevanta filen för denna ändring direkt tillgänglig via din spelserveradministration under `Configs`. Om din server visar flera konfigurationsfiler, se till att du redigerar `PalWorldSettings.ini`.
:::

## Ändra inställningen för arbetsfart

Inställningen som används för att öka arbetsfarten heter `WorkSpeedRate`.

### Vad inställningen gör

`WorkSpeedRate` styr hur snabbt spelare och Pals utför arbetsrelaterade uppgifter vid din bas. Standardvärdet är vanligtvis `1.0`, vilket betyder normal hastighet.

Högre värden ökar hastighetsmultiplikatorn:

| Konfigurationsnyckel | Standardvärde | Exempelvärde | Effekt |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | Dubblad arbetsfart |
| `WorkSpeedRate` | `1.0` | `10.0` | Mycket snabb arbetsfart |

### Redigera värdet

Sök efter raden `OptionSettings` i `PalWorldSettings.ini`. Posten `WorkSpeedRate` finns inuti den inställningsblocket.

Om posten redan finns, ändra dess värde. Till exempel:

```ini
WorkSpeedRate=1.000000
```

Ändra det till ett högre värde som:

```ini
WorkSpeedRate=2.000000
```

För ett mycket snabbare resultat kan du använda en högre multiplikator som:

```ini
WorkSpeedRate=10.000000
```

### Exempel på konfigurationsutdrag

Beroende på innehållet i din fil kan inställningen visas som en del av en längre `OptionSettings`-rad liknande denna:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Redigera Befintlig Syntax Försiktigt
`PalWorldSettings.ini` använder ett strikt format. Se till att du endast ändrar värdet för `WorkSpeedRate` och inte tar bort kommatecken, parenteser eller citattecken från den omgivande `OptionSettings`-raden.
:::

## Spara och starta om servern

Efter att du redigerat filen behöver du spara ändringarna och starta om din Palworld-server.

### Tillämpa ändringarna

1. Spara den uppdaterade filen `PalWorldSettings.ini`.
2. Starta om din Palworld-spelserver från ZAP-Hostings serveradministration.

En omstart krävs eftersom Palworld läser dessa spelinställningar när servern startar. Det nya arbetsfartsvärdet kommer inte att tillämpas korrekt förrän servern har startats om.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Ytterligare konsolkommando | Nej |

:::tip Rekommenderad Testning
Börja med ett måttligt värde som `2.0` och testa resultatet i spelet. Extremt höga värden kan göra progressionen mycket snabbare än tänkt, vilket kan påverka din spelbalans.
:::

## Verifiera den nya arbetsfarten

När servern är online igen, anslut till din Palworld-server och testa arbetsrelaterade aktiviteter vid din bas.

Du bör märka att spelare och Pals utför uppgifter snabbare än tidigare. Om du inte ser någon förändring, öppna `PalWorldSettings.ini` igen och kontrollera att:

- `WorkSpeedRate` finns med
- värdet är korrekt inställt
- filen sparades framgångsrikt
- servern startades om helt efter redigeringen

:::note Spelbalans
Att öka arbetsfarten kan förändra hur snabbt din bas utvecklas avsevärt. Om du vill ha en balanserad upplevelse, öka värdet gradvis istället för att sätta en extremt hög hastighet direkt.
:::

## Conclusion

Grattis, du har framgångsrikt ökat arbetsfarten på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig!