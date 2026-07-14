---
id: palworld-upload-existing-save
title: "Palworld: Ladda upp befintligt spar"
description: "Lär dig hur du laddar upp ett befintligt Palworld-spar, migrerar en servervärld och uppdaterar den nödvändiga konfigurationsfilen korrekt på din ZAP-Hosting-spelserver. -> Läs mer nu"
sidebar_label: Palworld: Ladda upp befintligt spar
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld lagrar dedikerade servervärldsdata i en specifik sparmapp och länkar den mappen via serverkonfigurationen. I den här guiden lär du dig hur du laddar upp ett befintligt spar till din ZAP-Hosting Palworld-server och uppdaterar inställningen så att servern laddar rätt värld.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har den befintliga Palworld-sparmappen tillgänglig på din lokala enhet.

:::danger Ej stöd för spar från vissa källor
Xbox-konsol och PS5 molnspar kan inte överföras direkt till en dedikerad Palworld-server. Du kan endast migrera spar från en PC-installation eller från en annan befintlig dedikerad server.
:::

:::info Nödvändiga åtkomster
Du behöver åtkomst till din ZAP-Hosting spelserver webbgränssnitt, inklusive filhanteraren och avsnittet `Configs`.
:::

Om du behöver hjälp med att komma åt dina serverfiler, använd relevant guide för filhantering i ZAP-Hosting-dokumentationen om den finns för din produkt.

## Förstå den nödvändiga sparstrukturen

Innan du laddar upp något bör du bekräfta att ditt spar har rätt struktur.

På en dedikerad Palworld-server lagras den aktiva världens spar här:

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

Mappnamnet `[your_save_folder_id]` är vanligtvis en lång sträng av bokstäver och siffror, till exempel:

```text
84B5E2264EC387DEDB43179D666031A1
```

En giltig sparmapp innehåller normalt filer och mappar liknande följande:

| Objekt | Syfte |
| --- | --- |
| `Level.sav` | Huvudsaklig världssparfil |
| `LevelMeta.sav` | Världsmetadata |
| `Players/` | Spelardata |
| `WorldOption.sav` | Äldre världsalternativsfil som kan behöva tas bort |

:::caution Ta bort föråldrad WorldOption.sav
Om din uppladdade sparmapp innehåller `WorldOption.sav`, radera den innan du startar servern. Denna fil är känd för att orsaka problem på nuvarande dedikerade serverinstallationer och bör inte användas för migrerade spar om det inte uttryckligen krävs av en nyare officiell Palworld-uppdatering.
:::

## Hitta konfigurationsfilen i ZAP-gränssnittet

Efter att sparmappen är uppladdad måste du peka servern till den mappen genom att redigera Palworld-konfigurationen.

I ZAP-Hostings spelserveradministration, öppna avsnittet `Configs` och hitta:

```text
GameUserSettings.ini
```

Beroende på serverns miljö lagras denna fil vanligtvis i någon av följande sökvägar:

| Möjlig sökväg | Noteringar |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Vanlig sökväg på Linux-baserade Palworld-servrar |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Äldre eller alternativ sökväg på Windows-baserade installationer |

:::note LinuxServer vs WindowsServer-sökväg
Dedikerade Palworld-servrar körs oftast med `LinuxServer`-konfigurationsvägen. Om du inte ser `WindowsServer`, kontrollera `LinuxServer` istället. I ZAP-gränssnittet är det enklaste sättet att öppna `Configs` och välja `GameUserSettings.ini` direkt.
:::

## Ladda upp det befintliga sparandet

Uppladdningsprocessen beror på varifrån ditt spar kommer, men målmappen på ZAP-servern är densamma.

### Stoppa servern först

Innan du ersätter standardvärlden, stoppa din Palworld-server i ZAP-Hostings webbgränssnitt.

:::caution Förhindra sparskador
Ladda inte upp eller ersätt världsfiler medan servern körs. Att stoppa servern först hjälper till att undvika ofullständiga skrivningar och korrupt spardata.
:::

### Ta bort standard sparmapp

Öppna filhanteraren och navigera till:

```text
Pal/Saved/SaveGames/0/
```

I den här katalogen hittar du vanligtvis en standardgenererad sparmapp. Radera den mappen innan du laddar upp ditt eget spar.

### Ladda upp din befintliga sparmapp

Ladda upp din befintliga sparmapp till:

```text
Pal/Saved/SaveGames/0/
```

Efter uppladdningen ska strukturen se ut så här:

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [your_save_folder_id]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

Om `WorldOption.sav` finns, ta bort den efter uppladdningen.

:::tip Kopiera mappnamnet exakt
Du behöver det exakta uppladdade mappnamnet för nästa steg. Kopiera `[your_save_folder_id]` exakt som det visas i filhanteraren, inklusive alla bokstäver och siffror.
:::

## Redigera GameUserSettings.ini

När uppladdningen är klar måste du uppdatera serverkonfigurationen så att Palworld laddar rätt värld.

Öppna `GameUserSettings.ini` från `Configs` och leta upp posten `DedicatedServerName`.

Sätt den till det exakta uppladdade sparmappnamnet:

```ini
DedicatedServerName=[your_save_folder_id]
```

Exempel:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### Nödvändig konfigurationspost

Använd följande referens vid redigering:

| Konfigfil | Nyckel | Krävd värde |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | Exakt namn på den uppladdade sparmappen |

### Vad denna inställning gör

`DedicatedServerName` talar om för den dedikerade Palworld-servern vilken mapp i `Pal/Saved/SaveGames/0/` som ska laddas som aktiv värld.

Om detta värde inte exakt matchar det uppladdade mappnamnet kan servern skapa en ny värld eller ladda fel.

:::danger Exakt matchning krävs
Om du ser saknad kartprogression, en tom värld eller ett nygenererat spar efter uppstart är den vanligaste orsaken att `DedicatedServerName` inte exakt matchar det uppladdade mappnamnet.
:::

## Källspecifika sparplatser

Om du är osäker på var du hittar ditt ursprungliga spar, använd rätt källväg nedan.

### Från en annan dedikerad serverleverantör

Hos din tidigare leverantör, säkerhetskopiera sparmappen från:

```text
Pal/Saved/SaveGames/0/
```

Kopiera hela världsmappen med dess ursprungliga namn och ladda sedan upp den mappen till din ZAP-Hosting-server enligt beskrivningen ovan.

### Från ett Steam Co-op-spar

För lokala Steam-spar på Windows, öppna följande sökväg:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_save_folder_id]
```

Mappen `[your_steamid64]` är ditt Steam 64-bitars ID, och `[your_save_folder_id]` är världsmappen du vill migrera.

:::caution Begränsning för värdkaraktär
När du migrerar en lokal Steam co-op-värld till en dedikerad server överförs inte den ursprungliga värdkaraktären automatiskt på samma sätt som anslutna spelardata. Ytterligare tredjepartsverktyg för sparkonvertering eller karaktärsöverföring kan behövas om du vill bevara värdkaraktären.
:::

### Från PC Game Pass

För PC Game Pass-installationer lagras lokala spardata vanligtvis under:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Game Pass-spar lagras inte i samma format som Steam eller dedikerade server-spar. I praktiken behöver du oftast ett tredjepartsverktyg för att konvertera sparfilen till ett Steam-kompatibelt eller dedikerad-server-kompatibelt format innan uppladdning.

:::info Krav på konvertering för Game Pass
En direkt uppladdning av rå PC Game Pass-spardata räcker vanligtvis inte. Du måste först konvertera sparfilen och sedan ladda upp den konverterade världsmappen till `Pal/Saved/SaveGames/0/` och ställa in `DedicatedServerName` därefter.
:::

## Starta servern

När sparmappen är uppladdad och `GameUserSettings.ini` är uppdaterad, starta servern igen från ZAP-Hostings webbgränssnitt.

Normalt krävs inga ytterligare konsolkommandon för denna migreringsprocess.

Efter uppstart, anslut till servern och kontrollera att:

- rätt värld laddas
- byggnader och kartprogression finns kvar
- spelardata är tillgänglig som förväntat

## Felsökning

Om det uppladdade sparandet inte laddas korrekt, kontrollera följande punkter.

### Servern skapade en ny värld

Verifiera att följande värde i `GameUserSettings.ini` exakt matchar det uppladdade mappnamnet:

```ini
DedicatedServerName=[your_save_folder_id]
```

Bekräfta också att det uppladdade sparandet finns direkt i:

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

### Kart- eller världprogression saknas

Detta betyder oftast något av följande:

| Möjlig orsak | Lösning |
| --- | --- |
| Felaktigt värde för `DedicatedServerName` | Ange det exakta uppladdade mappnamnet igen |
| Sparmappen uppladdad i fel katalog | Flytta den till `Pal/Saved/SaveGames/0/` |
| Ofullständig uppladdning | Ladda upp hela mappen igen och kontrollera att alla filer finns |

### WorldOption.sav orsakar problem

Om ditt spar innehåller `WorldOption.sav`, ta bort den och starta servern igen.

Denna fil är kopplad till äldre sparhantering och kan störa migrerade dedikerade servervärldar.

## Conclusion

Grattis, du har nu framgångsrikt laddat upp ett befintligt Palworld-spar till din ZAP-Hosting-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig! 🙂