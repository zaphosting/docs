---
id: palworld-max-workers
title: "Palworld: Max Workers"
description: "Learn how to change the Palworld max workers setting by editing BaseCampWorkerMaxNum, including the default max and safe vanilla limits for workers per base. -> Learn more now"
sidebar_label: "Max Workers"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig ändra det maximala antalet arbetande Pals som tilldelas varje basläger på din server. I den här guiden lär du dig hur du redigerar rätt konfigurationsfil i ZAP-Hostings webbgränssnitt, justerar värdet för `BaseCampWorkerMaxNum` och tillämpar ändringen korrekt.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver via ZAP-Hostings administrationspanel för spelservrar.

:::info Krav på konfigurationstillgång
Du behöver tillgång till serverns webbadministration så att du kan öppna avsnittet **Configs** och redigera Palworlds konfigurationsfiler manuellt.
:::

## Understanding the Max Workers Setting

Inställningen i Palworld som styr max antal arbetare är `BaseCampWorkerMaxNum`. Denna option kontrollerar hur många Pals som kan arbeta vid varje enskilt basläger.

| Inställning | Konfigurationsfil | Syfte | Standardvärde | Vanilla max |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | Sätter max antal arbetande Pals per basläger | `15` | `50` |

:::note Vanilla-gränsinfo
Officiell dokumentation visar att det normala maxvärdet i spelet är `50`. Värden över `50` kräver oftast moddar och ingår inte i standard vanilla-serverkonfigurationen.
:::

:::caution Prestandapåverkan
Att öka antalet arbetare kan öka CPU- och minnesanvändningen eftersom fler Pals är aktiva vid dina baser. Om du använder ett högt värde, övervaka serverns prestanda efter ändringen.
:::

## Open the Palworld Configuration File

För att ändra max workers-inställningen måste du redigera filen `PalWorldSettings.ini`.

### Hitta filen i ZAP-Hostings gränssnitt

Öppna din Palworld-spelserveradministration och navigera till:

- `Configs`
- `PalWorldSettings.ini`

Detta är konfigurationsfilen där spelinställningarna för din Palworld-server sparas.



## Edit the BaseCampWorkerMaxNum Value

När du har öppnat `PalWorldSettings.ini`, leta efter raden `OptionSettings`. Palworlds serverinställningar lagras vanligtvis som kommaseparerade nyckel-värde-par i denna sektion.

### Ändra konfigurationsposten

Hitta följande nyckel:

```ini
BaseCampWorkerMaxNum=15
```

Ändra värdet till det antal du vill ha. Till exempel, för att tillåta `20` arbetande Pals per bas, använd:

```ini
BaseCampWorkerMaxNum=20
```

### Exempel på konfiguration

Beroende på din nuvarande fil visas inställningen oftast inuti en längre `OptionSettings`-post som liknar denna:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Ändra Endast Det Nödvändiga Värdet
Ändra endast `BaseCampWorkerMaxNum` om du inte avsiktligt vill justera andra spelinställningar. Det minskar risken för misstag i konfigurationen.
:::

## Recommended Values

Du kan välja vilket värde som helst som passar din spelstil, så länge det håller sig inom de stödda vanilla-gränserna.

| Värde | Resultat | Rekommendation |
| --- | --- | --- |
| `15` | Standardgräns för Palworld-arbetare | Bäst för standardspel |
| `20` till `30` | Ökad basautomation | Bra balans för de flesta privata servrar |
| `40` till `50` | Mycket högt antal arbetare | Använd endast om din server har tillräckliga resurser |
| Över `50` | Inte standard vanilla-beteende | Kräver oftast moddar och rekommenderas inte utan testning |

## Save and Apply the Changes

Efter att du redigerat värdet, spara filen `PalWorldSettings.ini` i ZAP-Hostings konfigurationsredigerare.

### Starta om servern

När filen är sparad, starta om din Palworld-server så att den nya max workers-inställningen laddas.

:::info Omstart Krävs
Ändringar i `PalWorldSettings.ini` tillämpas inte direkt medan servern körs. Du måste starta om servern efter att ha sparat filen.
:::

## Verify the New Worker Limit

Efter omstart, anslut till din Palworld-server och kontrollera ett av dina basläger. Du ska nu kunna tilldela arbetande Pals upp till den nya gränsen du konfigurerat.

Om ändringen inte verkar fungera, kontrollera följande:

| Kontroll | Vad du ska verifiera |
| --- | --- |
| Rätt fil | Du redigerade `PalWorldSettings.ini` |
| Rätt nyckel | `BaseCampWorkerMaxNum` finns och är rättstavad |
| Giltig syntax | Raden `OptionSettings` är inte bruten |
| Omstart genomförd | Servern startades om helt efter sparandet |
| Värdeintervall | Värdet ligger inom normal vanilla-gräns på `50` |

:::caution Syntax för konfiguration
Palworlds konfigurationsposter är känsliga för formatering. Om du av misstag tar bort kommatecken, parenteser eller andra delar av `OptionSettings`-raden kan servern ignorera inställningen eller misslyckas med att läsa in den korrekt.
:::

## Conclusion

Grattis, du har framgångsrikt ändrat det maximala antalet arbetare per basläger på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂