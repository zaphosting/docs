---
id: palworld-upload-existing-save
title: "Palworld: Ladda upp befintligt spar"
description: "Lär dig hur du laddar upp ett befintligt Palworld-spar, laddar upp fildata korrekt och konfigurerar din server för att ladda rätt världsmapp. -> Läs mer nu"
sidebar_label: Palworld: Ladda upp befintligt spar
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld lagrar dedikerade servervärldsdata i en specifik sparmapp och kräver en matchande konfigurationspost för att ladda den korrekt. I den här guiden lär du dig hur du laddar upp ett befintligt spar till din ZAP-Hosting Palworld-server och konfigurerar servern så att den startar med rätt världdata.

:::danger Ej stöd för spar från vissa källor
Du kan inte överföra Xbox-konsol- eller PS5-molnspar direkt till en dedikerad Palworld-server. Endast spar från en PC-installation eller en befintlig dedikerad server kan migreras med denna metod.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har följande:

| Krav | Detaljer |
| --- | --- |
| Befintligt Palworld-spar | En sparmapp från en PC-installation eller en annan dedikerad server |
| Tillgång till din ZAP-Hosting spelserver | Du behöver tillgång till webbgränssnittet, inklusive filhanteraren och `Configs`-sektionen |
| Servern stoppad | Palworld-servern bör vara stoppad innan du byter ut sparfiler |
| Sparmappens namn | Du behöver det exakta mappnamnet på ditt uppladdade spar, till exempel `[your_savefolder_id]` |

:::info Åtkomst till konfigurationsfil
På ZAP-Hosting kan du komma åt relevanta Palworld-konfigurationsfiler via din spelserveradministration under `Configs`. Du behöver inte redigera filen direkt via filhanteraren om du inte vill verifiera sökvägen manuellt.
:::

## Förstå den nödvändiga sparstrukturen

Innan du laddar upp något är det viktigt att förstå vilken mapp Palworld faktiskt laddar.

Serverns sparplats är:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Inuti denna mapp bör du vanligtvis se filer och mappar som liknar följande:

```text
Level.sav
LevelMeta.sav
Players/
```

I vissa äldre eller migrerade spar kan du även se:

```text
WorldOption.sav
```

:::caution Ta bort föråldrad WorldOption.sav
Om `WorldOption.sav` finns i den uppladdade sparmappen, ta bort den innan du startar servern. Denna fil är känd för att orsaka problem med nyare Palworld-serverinstallationer och bör inte användas för migrerade spar om det inte uttryckligen krävs av en bekräftad aktuell setup.
:::

## Hitta rätt konfigurationsfil

För att få servern att ladda din uppladdade värld måste du redigera `GameUserSettings.ini`.

I ZAP-Hosting spelserveradministration:

1. Öppna din Palworld-server.
2. Gå till `Configs`.
3. Öppna `GameUserSettings.ini`.

Beroende på servermiljön är den underliggande filsökvägen vanligtvis en av följande:

| Möjlig sökväg | Noteringar |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Vanligt på Linux-baserade Palworld-serverinstallationer |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Kan förekomma på Windows-baserade installationer |

:::note Skillnader i sökväg
Palworld-serverinstallationer kan använda antingen `LinuxServer` eller `WindowsServer` i konfigurationssökvägen beroende på plattformen som leverantören använder. Om du redigerar filen via `Configs` är rätt fil redan tillgänglig där, så du behöver bara se till att du ändrar `GameUserSettings.ini`.
:::

## Ladda upp ett spar från en annan dedikerad server

Om ditt spar redan kommer från en annan hosting-leverantör kan du migrera det direkt.

### Säkerhetskopiera det befintliga sparandet

Hos din tidigare leverantör, hitta och ladda ner den befintliga sparmappen från:

```text
Pal/Saved/SaveGames/0/
```

Kopiera hela mappen med det slumpmässiga alfanumeriska namnet, till exempel:

```text
[your_savefolder_id]
```

### Stoppa ZAP-Hosting-servern

Innan du laddar upp det nya sparandet, stoppa din Palworld-server i ZAP-Hostings webbgränssnitt.

:::caution Undvik spar-konflikter
Byt inte ut sparfiler medan servern körs. Detta kan leda till ofullständiga uppladdningar, överskrivna data eller ett korrupt spar.
:::

### Ersätt standard sparmapp

Öppna filhanteraren för din spelserver och navigera till:

```text
Pal/Saved/SaveGames/0/
```

Ta bort standard sparmappen som skapades automatiskt av servern och ladda sedan upp din befintliga sparmapp till samma plats.

Efter uppladdningen ska strukturen se ut så här:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Ange rätt sparmapp i GameUserSettings.ini

Öppna nu `GameUserSettings.ini` via `Configs` och leta upp posten `DedicatedServerName`.

Sätt den till det exakta namnet på din uppladdade sparmapp:

```ini
DedicatedServerName=[your_savefolder_id]
```

| Konfigurationspost | Krävt värde |
| --- | --- |
| `DedicatedServerName` | Det exakta mappnamnet inuti `Pal/Saved/SaveGames/0/` |

:::tip Exakt matchning krävs
`DedicatedServerName` måste matcha det uppladdade mappnamnet exakt, inklusive alla bokstäver och siffror. Om värdet inte matchar kan servern starta en annan värld eller verka ladda utan kartframsteg.
:::

### Starta servern

Efter att ha sparat konfigurationen, starta din Palworld-server igen.

Ingen extra konsolkommando krävs normalt efter uppladdningen. En fullständig serveromstart räcker för att det nya sparandet ska laddas.

## Ladda upp ett spar från en Steam Co-op-värld

Om du tidigare hostade din värld lokalt via Steam co-op kan du också ladda upp det sparandet till din dedikerade server.

### Hitta det lokala Steam-sparandet

På din Windows-PC, tryck `Windows` + `R` och öppna:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

Inuti denna plats, öppna mappen med ditt SteamID64. Leta sedan upp världsmappen du vill ladda upp:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### Ladda upp sparandet till servern

När du har identifierat rätt sparmapp:

1. Stoppa din Palworld-server.
2. Öppna filhanteraren.
3. Navigera till `Pal/Saved/SaveGames/0/`.
4. Ta bort standard sparmappen.
5. Ladda upp din befintliga sparmapp.
6. Öppna `GameUserSettings.ini` under `Configs`.
7. Sätt:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Spara filen och starta servern igen.

:::caution Begränsning för värdkaraktär
När du migrerar en lokal Steam co-op-värld överförs inte värdkaraktären automatiskt på samma sätt som anslutna spelardata. I praktiken betyder detta att den ursprungliga värden kan behöva ytterligare tredjepartsverktyg för spar-konvertering eller karaktärsöverföring om karaktärskontinuitet krävs.
:::

## Ladda upp ett spar från PC Game Pass

PC Game Pass-spar använder ett annat format och är inte direkt kompatibelt med en dedikerad Palworld-server.

### Hitta Game Pass-sparandet

De lokala Game Pass-sparfilerna finns vanligtvis i:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### Konvertera sparandet först

För att använda ett PC Game Pass-spar på en dedikerad server måste du konvertera det till ett Steam-kompatibelt format med ett tredjepartsverktyg.

Ett vanligt alternativ är [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools).

:::danger Ansvarsfriskrivning för tredjepartsverktyg
Tredjepartsverktyg för spar-konvertering utvecklas inte eller underhålls av ZAP-Hosting. Funktionaliteten kan ändras över tid och kompatibilitet garanteras inte. Skapa alltid en säkerhetskopia av ditt ursprungliga spar innan du använder något konverteringsverktyg.
:::

Efter konvertering placeras det exporterade sparandet vanligtvis i en mapp som:

```text
XGP_converted_saves
```

### Ladda upp det konverterade sparandet

När sparandet har konverterats:

1. Stoppa din server.
2. Öppna filhanteraren.
3. Gå till `Pal/Saved/SaveGames/0/`.
4. Ta bort standard sparmappen.
5. Ladda upp den konverterade sparmappen.
6. Öppna `GameUserSettings.ini` i `Configs`.
7. Sätt rätt mappnamn:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Spara filen och starta servern.

## Nödvändiga konfigurationsändringar

Det viktigaste manuella steget i processen är att redigera `GameUserSettings.ini` korrekt.

### Översikt över konfigurationspost

| Fil | Plats i ZAP-gränssnittet | Post att ändra | Exempelvärde |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### Exempel på konfiguration

Om din uppladdade sparmapp heter `84B5E2264EC387DEDB43179D666031A1` ska posten se ut så här:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

Lägg inte till extra citattecken om de inte redan finns i filens syntax enligt din nuvarande konfigurationsmall.

## Verifiera uppladdningen

Efter att servern startat, anslut till servern och kontrollera att din världdata har laddats korrekt.

Du bör verifiera följande:

| Kontroll | Förväntat resultat |
| --- | --- |
| Världen laddas | Den befintliga kartan och strukturer finns kvar |
| Spelardata | Tidigare överförd spelardata finns tillgänglig där det är tillämpligt |
| Sparmapp matchar | `DedicatedServerName` matchar den uppladdade mappen exakt |
| Föråldrad fil borttagen | `WorldOption.sav` finns inte längre om den orsakade problem |

## Felsökning

Om uppladdningen inte fungerar som förväntat, kontrollera dessa vanliga orsaker.

### Servern startar en ny värld

Om servern skapar en ny värld istället för att ladda ditt uppladdade spar är den vanligaste orsaken ett felaktigt värde för `DedicatedServerName`.

Se till att:

- den uppladdade mappen finns i `Pal/Saved/SaveGames/0/`
- mappnamnet är kopierat exakt
- `DedicatedServerName=[your_savefolder_id]` matchar mappen exakt

### Kartdata saknas

Om servern startar men din värld eller kartdata verkar saknas, verifiera samma mappnamnsmatch igen.

Detta problem orsakas ofta av en mismatch mellan:

- det uppladdade sparmappnamnet
- värdet för `DedicatedServerName` i `GameUserSettings.ini`

### Sparuppladdningen ser korrekt ut men misslyckas ändå

Om mappstrukturen ser korrekt ut men sparandet ändå inte laddas:

- bekräfta att sparandet kommer från en stödd källa
- ta bort `WorldOption.sav` om den finns
- se till att servern var helt stoppad innan filerna byttes ut
- starta om servern efter att ha sparat konfigurationsändringarna

:::tip Bästa praxis vid filuppladdning
Om du laddar upp ett stort spar, vänta tills överföringen är helt klar innan du startar servern. Att starta för tidigt kan göra att sparandet blir ofullständigt och hindra världen från att laddas korrekt.
:::

## Conclusion

Grattis, du har framgångsrikt laddat upp ett befintligt Palworld-spar till din ZAP-Hosting-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂