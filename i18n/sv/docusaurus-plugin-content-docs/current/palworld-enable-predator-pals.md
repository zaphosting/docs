---
id: palworld-enable-predator-pals
title: "Palworld: Aktivera Predator Pals"
description: "Lär dig hur du aktiverar eller inaktiverar predator pals på din Palworld-server, åtgärdar att predator pals inte spawnar och konfigurerar rätt inställning manuellt. -> Läs mer nu"
sidebar_label: "Aktivera Predator Pals"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

*Predator Pals* är kraftfulla boss-typ Pals som kan spawnas runt om i världen i Palworld. I den här guiden lär du dig hur du aktiverar eller inaktiverar predator pals på din ZAP-Hosting Palworld-server genom att manuellt redigera rätt konfigurationsfil.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och behörighet att hantera dess konfigurationsfiler.

:::info Åtkomst till konfigurationsfil
För denna inställning behöver du redigera din serverkonfiguration manuellt via **Configs**-sektionen i din spelserveradministration.
:::

## Öppna Palworld-konfigurationen

För att ändra om predator pals kan spawnas måste du redigera filen `PalWorldSettings.ini`.

### Hitta rätt fil i ZAP-gränssnittet

Öppna först din Palworld-spelserver i ZAP-Hostings webbgränssnitt. Navigera sedan till **Configs**-området i din serveradministration och öppna filen `PalWorldSettings.ini`.

Detta är huvudkonfigurationsfilen som används för serverinställningar relaterade till gameplay, inklusive predator boss pal-beteende.

:::note Manuell redigering krävs
Denna inställning måste ändras manuellt i konfigurationsfilen. Om ditt gränssnitt inte visar en dedikerad växlingsknapp för detta alternativ är det korrekt att redigera `PalWorldSettings.ini` direkt.
:::

## Redigera inställningen för Predator Pals

Inuti `PalWorldSettings.ini`, leta upp sektionen `OptionSettings`. Den relevanta konfigurationsnyckeln är `EnablePredatorBossPal`.

### Konfigurationsvärde

Använd ett av följande värden beroende på vad du vill uppnå:

| Inställning | Värde | Resultat |
| --- | --- | --- |
| Aktivera predator pals | `True` | Predator boss Pals kan spawnas i världen |
| Inaktivera predator pals | `False` | Predator boss Pals kommer inte att spawnas i världen |

### Exempel på post

Om inställningen redan finns, ändra dess värde. Om den saknas, lägg till den i listan `OptionSettings` i konfigurationen.

```ini
EnablePredatorBossPal=True
```

För att inaktivera predator pals, använd istället:

```ini
EnablePredatorBossPal=False
```

:::tip Kontrollera befintlig syntax först
Palworld-serverinställningar lagras ofta som en del av en längre `OptionSettings`-rad i `PalWorldSettings.ini`. Om din fil redan innehåller denna struktur, lägg till eller ändra `EnablePredatorBossPal=True` eller `EnablePredatorBossPal=False` inom den befintliga inställningslistan istället för att skapa en separat, orelaterad sektion.
:::

## Spara och tillämpa ändringarna

Efter att du redigerat filen, spara dina ändringar i **Configs**-sektionen.

### Starta om servern

När filen är sparad, starta om din Palworld-server så att den nya inställningen laddas korrekt.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Ytterligare konsolkommando | Nej |

:::caution Omstart krävs
Den nya inställningen för predator pals träder inte i kraft förrän servern har startats om. Om predator pals inte spawnar efter ändringen, kontrollera att filen sparades korrekt och att serveromstarten slutfördes utan problem.
:::

## Verifiera inställningen

Efter omstart, anslut till din server och kontrollera om predator pals beter sig som förväntat.

Om du aktiverade dem men predator pals inte spawnar, granska posten i `PalWorldSettings.ini` igen och säkerställ att värdet är exakt `True` eller `False`. Kontrollera också att inställningen är korrekt placerad inom den befintliga serverkonfigurationssyntaxen.

:::note Spawn-beteende
Denna inställning styr om predator boss Pals får spawnas i världen. Den ger inte en karta över predator pals-platser, ändrar individuella spawnpunkter eller garanterar omedelbara möten i ett specifikt område.
:::

## Konfigurationsreferens

| Fil | Plats i ZAP-Hosting | Nyckel | Möjliga värden | Standardbeteende | Omstart krävs |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | Spelserveradministration → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | Ja |

## Conclusion

Grattis, du har framgångsrikt aktiverat eller inaktiverat predator pals på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig! 🙂