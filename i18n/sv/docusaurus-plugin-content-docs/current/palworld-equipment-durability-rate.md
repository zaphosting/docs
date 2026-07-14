---
id: palworld-equipment-durability-rate
title: "Palworld: Utrustnings hållbarhetsfaktor"
description: "Lär dig hur du ändrar utrustningens hållbarhet och justerar hållbarhetsfaktorn på din Palworld-server genom att redigera rätt konfigurationsvärde. -> Läs mer nu"
sidebar_label: Palworld: Utrustnings hållbarhetsfaktor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

I Palworld styr utrustningens hållbarhetsfaktor hur snabbt dina verktyg, vapen och rustningar tappar hållbarhet vid användning. I den här guiden lär du dig hur du manuellt ändrar inställningen `EquipmentDurabilityDamageRate` i din ZAP-Hosting Palworld-serverkonfiguration och tillämpar ändringen korrekt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserveradministration i ZAP-Hostings webbgränssnitt. Du behöver också behörighet att redigera dina serverkonfigurationsfiler under **Configs**.

:::info Manuell konfiguration krävs
Den här inställningen måste ändras manuellt i Palworlds konfigurationsfil. Det finns inget separat kommando som behöver köras i spelet för just denna ändring.
:::

## Förstå hållbarhetsinställningen

Palworld sparar många spelinställningar i konfigurationsfilen `PalWorldSettings.ini`. Inställningen som är relevant för utrustningens hållbarhet är:

- `EquipmentDurabilityDamageRate`

Detta värde fungerar som en multiplikator för hållbarhetsförlust:

| Konfig-nyckel | Beskrivning | Standardvärde |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | Styr hur snabbt utrustning tappar hållbarhet | `1.000000` |

Lägre värden minskar hållbarhetsförlusten, vilket betyder att din utrustning håller längre. Värdet `0.000000` inaktiverar hållbarhetsförlust helt för utrustning.

:::note Vad denna inställning påverkar
Denna inställning ändrar hastigheten för hållbarhetsförlust på utrustning som verktyg, vapen och rustningar. Den ökar inte skada på föremål, reparationshastighet eller föremåls kvalitet.
:::

## Öppna Palworlds konfigurationsfil

För att ändra inställningen behöver du redigera huvudkonfigurationsfilen för Palworld-servern via din ZAP-Hosting spelserveradministration.

### Hitta filen i ZAP-Hosting-gränssnittet

1. Logga in på ZAP-Hostings webbplats.
2. Öppna din **Palworld** spelserveradministration.
3. Gå till **Configs**.
4. Öppna filen `PalWorldSettings.ini`.

Detta är filen där Palworlds spelvärdesinställningar som hållbarhet, uthållighet, skada och andra världinställningar sparas.

## Redigera utrustningens hållbarhetsfaktor

När du har öppnat `PalWorldSettings.ini`, leta efter raden `OptionSettings`. Palworld sparar vanligtvis spelinställningar som kommaseparerade poster i denna sektion.

### Lägg till eller ändra konfigurationsposten

Du behöver säkerställa att följande post finns i `OptionSettings`:

```ini
EquipmentDurabilityDamageRate=1.000000
```

Om nyckeln redan finns, ersätt dess nuvarande värde med det du föredrar. Om den saknas, lägg till den i den befintliga `OptionSettings=(...)`-blocket.

### Exempelvärden

Du kan använda följande värden beroende på vilket resultat du vill ha:

| Värde | Effekt |
| --- | --- |
| `1.000000` | Standard hållbarhetsförlust |
| `0.500000` | Utrustningen håller ungefär dubbelt så länge |
| `0.250000` | Utrustningen håller ungefär fyra gånger så länge |
| `0.000000` | Utrustningen blir oförstörbar |

### Exempel på konfigurationssnutt

Det exakta innehållet i din `OptionSettings`-rad kan skilja sig beroende på din serverkonfiguration, men hållbarhetsinställningen bör finnas med i samma kommaseparerade lista, till exempel:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution Behåll befintlig formatering
Ta inte bort andra värden från `OptionSettings`-raden när du redigerar filen. Palworld förväntar sig att dessa inställningar finns kvar i korrekt kommaseparerat format.
:::

## Spara och tillämpa ändringarna

Efter att du redigerat konfigurationsfilen, spara dina ändringar i ZAP-Hosting-gränssnittet.

### Starta om servern

För att den nya hållbarhetsinställningen ska börja gälla, starta om din Palworld-server från spelserveradministrationen.

Utan omstart laddar vanligtvis inte servern den uppdaterade konfigurationen.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Kör ett kommando i spelet | Nej |
| Installera om servern | Nej |

:::tip Testa ändringar med en liten justering först
Om du är osäker på vilket hållbarhetsvärde som passar din spelstil, börja med `0.500000`. Det ger en märkbar förbättring av hållbarheten utan att helt inaktivera mekaniken.
:::

## Felsökning

Om den nya utrustningens hållbarhetsbeteende inte gäller efter omstart, kontrollera följande punkter.

### Verifiera konfigurationsnyckeln

Se till att nyckeln är skriven exakt som:

```ini
EquipmentDurabilityDamageRate
```

Palworlds konfigurationsnycklar är i praktiken skiftlägeskänsliga för pålitlig administration, så kopiera namnet exakt som visas.

### Kontrollera placeringen i `OptionSettings`

Värdet måste finnas inom `OptionSettings=(...)`-sektionen i `PalWorldSettings.ini`. Om du placerar det utanför detta block kan servern ignorera det.

### Bekräfta att filen sparades

Efter redigering i **Configs**, kontrollera att dina ändringar fortfarande finns kvar när du öppnar `PalWorldSettings.ini` igen. Om inte kan filen ha misslyckats med att sparas.

### Starta om igen vid behov

Om spelare var online under ändringen eller servern inte startade om ordentligt, gör en fullständig omstart till från serveradministrationspanelen.

## Conclusion

Grattis, du har framgångsrikt ändrat utrustningens hållbarhetsfaktor på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig!