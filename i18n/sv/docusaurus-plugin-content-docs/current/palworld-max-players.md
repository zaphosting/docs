---
id: palworld-max-players
title: "Palworld: Max Players"
description: "Learn how to change the Palworld max players setting on your Palworld game server by editing the correct config file in the ZAP interface. -> Learn more now"
sidebar_label: Palworld: Max Players
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra hur många spelare som kan ansluta till din server samtidigt. I den här guiden lär du dig hur du manuellt ändrar max antal spelare genom att redigera rätt konfigurationsfil i din ZAP-Hosting spelserveradministration.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld spelserveradministration i ZAP-Hostings webbgränssnitt.

:::info Åtkomst till konfigurationsfil
Du behöver redigera serverns konfiguration manuellt via **Configs**-området i din spelserveradministration. Om du inte vet hur du öppnar din spelserver än, öppna den först från ZAP-Hostings webbgränssnitt.
:::

## Locate the Palworld Configuration File

För att ändra max antal spelare måste du redigera filen `PalWorldSettings.ini`.

I din ZAP-Hosting spelserveradministration:

1. Öppna din **Palworld**-server
2. Gå till **Configs**
3. Öppna filen som heter `PalWorldSettings.ini`

Den här filen innehåller de viktigaste spel- och serverinställningarna, inklusive max antal tillåtna spelare.

:::note Rätt fil
För denna ändring ska du endast redigera `PalWorldSettings.ini`. Om din server innehåller fler filer, ändra inte värden som inte hör till om du inte vet exakt vad de gör.
:::

## Change the Maximum Player Count

Inuti `PalWorldSettings.ini`, leta upp sektionen `OptionSettings` och hitta posten `ServerPlayerMaxNum`.

Den relevanta inställningen är:

| Config key | Beskrivning | Standardvärde |
| --- | --- | --- |
| `ServerPlayerMaxNum` | Ställer in max antal spelare som kan ansluta till servern | `32` |

En typisk post ser ut så här:

```ini
ServerPlayerMaxNum=32
```

Ändra värdet till din önskade spelarbegränsning. Till exempel, för att tillåta 16 spelare:

```ini
ServerPlayerMaxNum=16
```

Eller för att behålla standardinställningen med 32 spelare:

```ini
ServerPlayerMaxNum=32
```

:::caution Använd stödda värden
Palworld dedikerade servrar använder vanligtvis `32` som standard maxvärde. Om du sätter ett mycket högre värde kan det påverka serverns stabilitet eller prestanda beroende på din plan och den aktuella spelversionen. Om du är osäker, börja med ett lägre värde och testa servern först.
:::

## Example Configuration

Beroende på hur din fil är formaterad kan inställningen finnas inuti en längre `OptionSettings`-rad. I så fall behöver du bara ändra värdet för `ServerPlayerMaxNum`.

Exempel:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Om din fil använder detta format, ta inte bort kommatecken, parenteser eller citattecken från andra poster. Ersätt endast siffran efter `ServerPlayerMaxNum=`.

## Save and Apply the Changes

Efter att du ändrat värdet:

1. Spara filen `PalWorldSettings.ini`
2. Starta om din Palworld-server

En omstart krävs för att den nya maxspelarbegränsningen ska börja gälla.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Kör ytterligare konsolkommandon | Inga verifierade ytterligare kommandon krävs |
| Starta om servern | Ja |

:::tip Omstart krävs
Konfigurationsändringar för `ServerPlayerMaxNum` tillämpas inte direkt medan servern körs. Du måste starta om servern för att Palworld ska läsa in de uppdaterade inställningarna.
:::

## Verify the New Player Limit

Efter omstarten ska din server använda den nya maxspelarbegränsningen.

Du kan verifiera detta genom att:

- kontrollera serverdetaljerna i din spelserveradministration om de visas där
- ansluta till servern med flera spelare
- granska den aktuella konfigurationen igen i `PalWorldSettings.ini`

Om inställningen inte gäller, öppna filen igen och kontrollera att:

- `ServerPlayerMaxNum=[ditt_värde]` finns med
- filens formatering inte är bruten
- servern startades om helt efter sparandet

:::caution Konfigurationssyntax
Om du av misstag tar bort ett kommatecken, parentes eller annat värde från `OptionSettings`-raden kan servern ignorera inställningen eller misslyckas med att läsa in konfigurationen korrekt. Redigera filen noggrant och ändra endast det värde som krävs.
:::

## Conclusion

Grattis, du har nu ändrat max antal spelare på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!