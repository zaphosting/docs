---
id: palworld-change-death-penalty
title: "Palworld: Ändra Dödsstraff"
description: "Lär dig hur du ändrar dödsstraffet i Palworld genom att redigera serverns konfigurationsfil, inklusive DeathPenalty-värden och omstartssteg. -> Lär dig mer nu"
sidebar_label: Palworld: Ändra Dödsstraff
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig styra vad spelare förlorar vid döden genom att ändra serverinställningen `DeathPenalty`. I den här guiden lär du dig hur du redigerar rätt konfigurationsfil i ZAP-Hostings webbgränssnitt och tillämpar ändringen korrekt.



## Preparation

Innan du börjar, se till att:

- du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt
- din server är offline eller att du är beredd att starta om den efter att ha gjort ändringar
- du vet vilket dödsbeteende du vill använda för dina spelare

:::info Åtkomst till konfigurationsfil
För Palworld-servrar hos ZAP-Hosting kan relevanta inställningar redigeras via din spelserveradministration under **Configs**.
:::

## Öppna Palworlds konfigurationsfil

För att ändra dödsstraffet behöver du redigera filen `PalWorldSettings.ini`.

### Hitta filen i ZAP-Hostings gränssnitt

Logga först in i ZAP-Hostings webbgränssnitt och öppna din Palworld-spelserver. Navigera sedan till sektionen **Configs** i spelserveradministrationen och öppna filen som heter `PalWorldSettings.ini`.

Denna fil innehåller huvudinställningarna för gameplay på din Palworld-server, inklusive dödsstraffets beteende.

:::note Manuella konfigurationsändringar
Inställningen för dödsstraff finns sparad i konfigurationsfilen. Du måste redigera värdet manuellt istället för att förlita dig på en separat snabbinställning, om inte ditt nuvarande gränssnitt uttryckligen erbjuder en sådan.
:::

## Ändra DeathPenalty-värdet

Inuti `PalWorldSettings.ini`, leta upp sektionen `OptionSettings` där gameplay-inställningarna definieras. Du behöver hitta posten `DeathPenalty` och ändra dess värde till det alternativ du vill ha.

### Stödda DeathPenalty-värden

Följande värden används för närvarande av Palworld för inställningen `DeathPenalty`:

| Värde | Effekt |
| --- | --- |
| `None` | Spelare tappar ingenting vid döden |
| `Item` | Spelare tappar föremål, men behåller utrustning |
| `ItemAndEquipment` | Spelare tappar föremål och utrustning |
| `All` | Spelare tappar föremål, utrustning och alla Pals i sitt team |

:::tip Välj rätt inställning
Vill du ha en mer avslappnad serverupplevelse är `None` eller `Item` oftast bäst. Vill du ha standard survival-upplevelsen, använd `All`.
:::

### Exempel på konfigurationspost

I de flesta Palworld-serverkonfigurationer finns inställningen som en del av en längre `OptionSettings`-rad. Till exempel:

```ini
OptionSettings=(DeathPenalty=All)
```

För att helt stänga av dödsstraffet, ändra till:

```ini
OptionSettings=(DeathPenalty=None)
```

Om din fil redan innehåller många inställningar i samma `OptionSettings=(...)`-block, ändra bara värdet för `DeathPenalty` och låt övriga poster vara oförändrade. Till exempel:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

Här byter du bara ut `ItemAndEquipment` mot ditt önskade värde.

:::caution Behåll befintlig syntax
Ta inte bort kommatecken, parenteser eller andra befintliga inställningar i `OptionSettings=(...)`-blocket. Felaktig syntax kan göra att servern inte kan läsa in konfigurationen korrekt.
:::

## Spara och tillämpa ändringarna

Efter att du redigerat `DeathPenalty`-värdet, spara ändringarna i `PalWorldSettings.ini`.

### Starta om servern

När filen är sparad, starta om din Palworld-server via ZAP-Hostings webbgränssnitt. En omstart krävs för att servern ska läsa in den uppdaterade konfigurationen.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Kör extra konsolkommandon | Nej |

:::info Omstart krävs
Palworld läser denna inställning från serverns konfiguration. Det nya dödsbeteendet träder i kraft först efter en fullständig serveromstart.
:::

## Verifiera den nya dödsinställningen

Efter att servern startat om, anslut till servern och testa beteendet i spelet om du vill bekräfta ändringen.

### Vad du ska kontrollera

Beroende på vilket värde du valt, kontrollera att spelare:

- behåller alla föremål efter döden
- endast förlorar inventarieobjekt
- förlorar inventarieobjekt och utrustning
- förlorar inventarieobjekt, utrustning och teamets Pals

Om inställningen inte verkar ha ändrats, öppna `PalWorldSettings.ini` igen och kontrollera att:

- `DeathPenalty`-värdet är exakt rättstavat
- ändringen sparades korrekt
- servern startades om efter redigeringen

:::danger Använd exakta värden
Inställningen `DeathPenalty` är skiftlägeskänslig i praktiken när den skrivs som konfigurationsvärde. Använd alltid exakt värdena `None`, `Item`, `ItemAndEquipment` eller `All`.
:::

## Conclusion

Grattis, du har nu ändrat dödsstraffet i Palworld. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂