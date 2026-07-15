---
id: palworld-item-weight
title: "Palworld: Item Weight"
description: "Learn how to change the Palworld item weight multiplier by editing the item weight setting in your server configuration for better carry weight balance. -> Learn more now"
sidebar_label: "Item Weight"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig justera vikt på föremål på din server genom att ändra ett konfigurationsvärde i huvudinställningsfilen för servern. I den här guiden lär du dig var du hittar rätt fil i ZAP-Hostings webbgränssnitt, vilken `item weight`-inställning du ska ändra och hur du tillämpar ändringen korrekt.



## Preparation

Innan du börjar, se till att din Palworld-spelserver är online och att du kan komma åt dess webbadministration.

:::info Required Access
Du behöver tillgång till din Palworld-serveradministrationspanel i ZAP-Hostings webbgränssnitt för att kunna redigera konfigurationsfiler under **Configs**.
:::

## Open the Palworld Configuration File

För att ändra viktmultiplikatorn för föremål måste du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration:

1. Öppna din Palworld-server.
2. Gå till **Configs**.
3. Öppna filen `PalWorldSettings.ini`.

Den här filen innehåller huvudkonfigurationsvärden för gameplay som används av din Palworld-server.

:::note Configuration File Purpose
`PalWorldSettings.ini` lagrar flera gameplay-modifierare, inklusive värden för skada, uthållighet, dropprater och `item weight`.
:::

## Edit the Item Weight Setting

Inuti `PalWorldSettings.ini`, leta upp sektionen `OptionSettings` och hitta posten `ItemWeightRate`.

Om posten redan finns, ändra dess värde. Om den saknas, lägg till den i listan med parametrar under `OptionSettings`.

### Configuration Key

Använd följande inställning:

```ini
ItemWeightRate=1.000000
```

### What the Value Means

`ItemWeightRate` styr viktmultiplikatorn för föremål på din server.

| Config key | Default value | Effect |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | Standard vikt för föremål |
| `ItemWeightRate` lägre än `1.0` | Exempel: `0.500000` | Föremål väger mindre, så spelare kan bära mer |
| `ItemWeightRate` högre än `1.0` | Exempel: `2.000000` | Föremål väger mer, så spelare kan bära mindre |

### Example Values

Du kan använda något av följande exempel beroende på vilken gameplay-balans du vill ha:

| Desired result | Value |
|---|---:|
| Standard vikt för föremål | `1.000000` |
| Halv vikt för föremål | `0.500000` |
| Mycket lätta föremål | `0.250000` |
| Dubbel vikt för föremål | `2.000000` |

:::tip Choosing a Good Multiplier
Om du vill ha en mer avslappnad överlevnadsupplevelse är ett lägre `item weight`-värde som `0.5` ofta en bra utgångspunkt. Det minskar trycket på inventariet utan att helt ta bort viktbegränsningar.
:::

## Example Configuration

I Palworld lagras dessa gameplay-värden vanligtvis i raden `OptionSettings=(...)` i `PalWorldSettings.ini`. Din fil kan redan innehålla många andra inställningar.

Ett förenklat exempel ser ut så här:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

På många servrar innehåller `OptionSettings` redan flera värden separerade med kommatecken. I så fall lägger du bara till eller ändrar `ItemWeightRate`-delen utan att ta bort de andra posterna.

Exempel:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution Keep Existing Settings Intact
Ta inte bort andra värden från `OptionSettings`-raden om du inte medvetet vill återställa dem. Att ta bort kommatecken, parenteser eller befintliga poster kan orsaka konfigurationsfel.
:::

## Save and Apply the Changes

Efter att du redigerat filen:

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Starta om din Palworld-server.

En omstart krävs eftersom servern läser in gameplay-konfigurationen vid uppstart. Det nya `item weight`-värdet träder inte i kraft fullt ut förrän servern har startats om.

## Verify the New Item Weight

Efter omstarten, anslut till din server och testa hur föremålsvikt fungerar i spelet.

Du bör märka att:

- lägre värden minskar den effektiva vikten på föremål
- högre värden ökar den effektiva vikten på föremål
- inventarieutrymmet känns annorlunda beroende på vilken multiplikator du valde

Om ändringen inte verkar gälla, öppna `PalWorldSettings.ini` igen och kontrollera att:

| Check | What to verify |
|---|---|
| Rätt fil | Du redigerade `PalWorldSettings.ini` |
| Rätt plats | Filen öppnades via **Configs** i serveradministrationen |
| Rätt nyckel | `ItemWeightRate` finns med |
| Rätt syntax | Värdet finns i raden `OptionSettings=(...)` om din fil använder det formatet |
| Omstart genomförd | Servern startades om efter sparandet |

## Conclusion

Grattis, du har nu ändrat inställningen för föremålsvikt på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂