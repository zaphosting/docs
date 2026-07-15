---
id: palworld-collection-drop-rate
title: "Palworld: Collection Drop Rate"
description: "Learn how to adjust Palworld collection settings, increase gathered resources, and speed up respawns on your Palworld game server. -> Learn more now"
sidebar_label: Palworld: Collection Drop Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra hur mycket resurser spelare samlar och hur snabbt samlingsbara objekt återkommer. I den här guiden lär du dig hur du manuellt redigerar rätt konfigurationsfil på din ZAP-Hosting-spelserver för att ändra samlingsfrekvensen och relaterade resursinställningar.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och att servern är offline eller kan startas om efter att ändringarna har gjorts.

:::info Åtkomst till konfigurationsfil
För Palworld lagras relevanta spelinställningar i filen `PalWorldSettings.ini`. I ZAP-Hostings spelserveradministration kan du komma åt denna fil via avsnittet `Configs`.
:::

## Öppna Palworld-konfigurationsfilen

För att ändra samlingsinställningarna behöver du redigera huvudkonfigurationsfilen för Palworld-servern.

### Hitta filen i ZAP-Hostings gränssnitt

1. Logga in på [ZAP-Hostings webbgränssnitt](https://zap-hosting.com).
2. Öppna din Palworld-spelserver.
3. Navigera till avsnittet `Configs` i serveradministrationen.
4. Öppna filen som heter `PalWorldSettings.ini`.

:::note Rätt fil
De samlingsrelaterade inställningarna som beskrivs i denna guide finns i `PalWorldSettings.ini`. Om du inte ser de förväntade posterna direkt, finns de vanligtvis inuti konfigurationsraden `OptionSettings`.
:::

## Redigera samlingsinställningarna

Palworld lagrar många spelalternativ som nyckel-värde-par i avsnittet `OptionSettings` i `PalWorldSettings.ini`. För att öka insamlade resurser eller ändra hur snabbt resursnoder återkommer behöver du justera relevanta värden där.

### Relevanta konfigurationsnycklar

Använd följande inställningar för samlingsrelaterat beteende:

| Konfigurationsnyckel | Standardvärde | Beskrivning |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | Styr hur många föremål spelare får från samlingsbara resurser. Högre värden ökar mängden som samlas in. |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | Styr hur snabbt samlingsbara objekt återkommer. Högre värden gör att resurser återkommer snabbare. |
| `CollectionObjectHpRate` | `1.000000` | Styr HP för samlingsbara objekt som stenar eller träd. Högre värden gör vanligtvis att de tar längre tid att bryta. |

### Exempel på konfigurationsvärden

Om du vill dubbla insamlade resurser och göra att resursnoder återkommer dubbelt så snabbt, sätt båda värdena till `2.000000`.

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

Om du också vill att samlingsbara objekt ska vara lättare att bryta kan du sänka deras HP-multiplikator:

```ini
CollectionObjectHpRate=0.500000
```

:::tip Rekommenderade startvärden
Värdet `2.000000` är en vanlig startpunkt för både `CollectionDropRate` och `CollectionObjectRespawnSpeedRate`. Detta ger en märkbar snabbare progression utan att ändra Palworld-spelet för aggressivt.
:::

## Tillämpa ändringarna i `PalWorldSettings.ini`

Efter att ha öppnat `PalWorldSettings.ini`, hitta den befintliga posten `OptionSettings` och justera de relevanta nycklarna direkt där.

### Exempel på `OptionSettings`-utdrag

Beroende på din nuvarande serverkonfiguration kan raden redan innehålla många inställningar. Du behöver bara ändra värdena för de samlingsrelaterade nycklarna om de redan finns, eller lägga till dem om de saknas.

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution Behåll befintlig syntax
Se till att du behåller det befintliga formatet för raden `OptionSettings` intakt. Ta inte bort kommatecken, parenteser eller andra inställningar av misstag, annars kan servern misslyckas med att läsa in konfigurationen korrekt.
:::

## Spara och starta om servern

När du är klar med att redigera filen, spara dina ändringar i avsnittet `Configs`.

### Krav på omstart

Palworld tillämpar inte dessa spelkonfigurationsändringar direkt medan servern körs. Du måste starta om servern efter att ha sparat filen för att de nya värdena ska laddas.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Ytterligare konsolkommando | Inget verifierat kommando krävs |

:::info Omstart krävs
En fullständig serveromstart krävs efter att du ändrat `CollectionDropRate`, `CollectionObjectRespawnSpeedRate` eller `CollectionObjectHpRate`. Inga ytterligare in-game- eller konsolkommandon krävs för dessa specifika inställningar.
:::

## Verifiera det nya samlingsbeteendet

När omstarten är klar, anslut till din server och testa några samlingsbara objekt som träd, stenar eller malmnoder.

### Vad du ska kontrollera

- Om spelare får fler material per samlingsaktion
- Om förstörda resursnoder återkommer snabbare än tidigare
- Om samlingsbara objekt känns lättare eller svårare att bryta om du ändrat `CollectionObjectHpRate`

Om resultatet är för starkt eller för svagt, gå tillbaka till `PalWorldSettings.ini` och justera multiplikatorerna igen.

:::tip Finjustera din server
Om du vill ha en mer balanserad Palworld-samlingsinställning, öka värdena gradvis, till exempel från `1.000000` till `1.500000`, innan du går vidare till högre multiplikatorer.
:::

## Konfigurationsreferens

Följande tabell sammanfattar de viktigaste värdena för denna Palworld-samlingsinställning.

| Inställning | Exempel | Effekt |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | Standard | Standard mängd insamlade resurser |
| `CollectionDropRate=2.000000` | Ökat | Dubbla insamlade resurser |
| `CollectionObjectRespawnSpeedRate=1.000000` | Standard | Standard återkomsthastighet |
| `CollectionObjectRespawnSpeedRate=2.000000` | Ökat | Snabbare återkomst av resurser |
| `CollectionObjectHpRate=1.000000` | Standard | Standard HP för samlingsbara objekt |
| `CollectionObjectHpRate=0.500000` | Minskat | Samlingsbara objekt bryts snabbare |

## Conclusion

Congratulations, you have successfully changed the collection drop rate on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂