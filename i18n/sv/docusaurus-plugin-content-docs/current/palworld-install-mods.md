---
id: palworld-install-mods
title: "Palworld: Installera Mods"
description: "Lär dig hur du installerar Palworld-mods, inklusive UE4SS Palworld, Lua-mods och .pak-mods, på din dedikerade server. -> Läs mer nu"
sidebar_label: Palworld: Installera Mods
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stöder flera typer av servermods, vanligast är `UE4SS`, `.lua` och `.pak` mods. I den här guiden lär du dig hur du förbereder din server, identifierar rätt modtyp, laddar upp nödvändiga filer och startar om servern så att mods kan laddas korrekt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du installerar några mods bör du säkerställa att din server och den valda moden är kompatibla.

:::danger Säkerhetskopiera Din Värld Först
Du bör alltid skapa en backup av din Palworld-sparfil innan du installerar mods. Om en mod är inkompatibel eller orsakar startproblem kan du behöva återställa din tidigare värld.
:::

Du bör först verifiera följande:

| Krav | Detaljer |
| --- | --- |
| Serverversion | Dedikerade Palworld-servrar använder **Steam**-versionen. Mods som endast är avsedda för **Game Pass**-versionen bör inte användas. |
| Modkompatibilitet | Bekräfta att modskaparen uttryckligen anger att moden fungerar på en dedikerad server. |
| Modtyp | Kontrollera om moden är en `UE4SS`, `.lua` eller `.pak` mod. |
| Klientkrav | Vissa mods måste installeras både på **servern** och på alla **spelar-klienter**. |
| Serverversion | Kontrollera din nuvarande serverversion innan du installerar en mod. |

### Kontrollera din serverversion

För att bekräfta din nuvarande Palworld-serverversion, öppna serverkonsolen i din ZAP-Hosting spelserveradministration och kör:

```text
info
```

Detta visar versionsinformation som du kan jämföra med modens krav.

:::tip Installera En Mod i Taget
Du bör bara installera en mod i taget och testa den innan du lägger till en till. Det gör felsökning mycket enklare om servern inte startar eller om en mod inte fungerar korrekt.
:::

## Förstå vilken modtyp du installerar

Palworld-mods installeras inte på samma sätt. Du måste identifiera modtypen innan du laddar upp filer.

| Modtyp | Typiskt innehåll | Vanlig installationsväg | Noteringar |
| --- | --- | --- | --- |
| `UE4SS` / `.lua` mod | Mapp med skript som `main.lua` | `Pal/Binaries/Win64/ue4ss/Mods/` | Kräver vanligtvis `UE4SS`-ramverket |
| `.pak` mod | En eller flera `.pak`-filer, ibland med extra filer | `Pal/Content/Paks/~mods/` | Vissa mods kan istället använda `Pal/Content/Paks/LogicMods/` |
| Klientside-mod | Varierar | Inte alltid installerbar på servern | Får endast användas om modskaparen bekräftar serversupport |

:::caution Följ Modskaparnas Vägledning
Sökvägarna i denna guide är de vanligaste platserna som används för Palworld-mods just nu. Men vissa mods kräver en annan mappstruktur. Du bör alltid följa instruktionerna från modskaparen om de skiljer sig.
:::

## Kom åt dina serverfiler i ZAP-gränssnittet

Du behöver använda filhanteringsområdena i din ZAP-Hosting spelserveradministration.

### Öppna avsnittet Configs

De relevanta konfigurationsfilerna finns i din spelserveradministration under **Configs**. Detta område är användbart för att kontrollera och redigera tillgängliga konfigurationsfiler för din Palworld-server.

:::note Configs vs. Modfiler
Installation av Palworld-mods görs vanligtvis inte bara genom att ändra en spelinställning i en enda configfil. I de flesta fall måste du ladda upp själva modfilerna till rätt serverkataloger, och vissa mods kan dessutom kräva konfigurationsändringar i filer som finns under **Configs**.
:::

### Öppna filhanteraren

För att ladda upp modfiler som `.pak`-arkiv eller `UE4SS`-skriptmappar behöver du även åtkomst till dina serverfiler via filhanteraren i ZAP-gränssnittet.

Om en mod inkluderar sin egen konfigurationsfil bör du ladda upp den exakt som modskaparen tillhandahåller och sedan bara redigera den om skaparen dokumenterar vilka värden som stöds.

## Installera UE4SS-ramverket om det behövs

`UE4SS` är ett modding-ramverk som används av många Palworld Lua- och skriptbaserade mods. Du behöver det bara om din valda mod är beroende av det.

### Bekräfta att din server använder Windows

`UE4SS` för Palworld används generellt med Windows-serverversionen. Om din server inte kör en Windows Palworld-servermiljö kan `UE4SS`-baserade mods fungera oväntat eller inte alls.

:::info UE4SS-krav
Om din valda mod är en `UE4SS` eller `.lua` mod bör du kontrollera att ramverket redan finns installerat innan du laddar upp moden.
:::

### Kontrollera UE4SS-installationsvägen

Om `UE4SS` är installerat är den relevanta katalogen vanligtvis:

```text
Pal/Binaries/Win64/ue4ss/
```

Modmappen som används av de flesta `UE4SS` och Lua-mods är:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Om din ZAP-Hosting-produkt erbjuder ett inbyggt modding- eller `UE4SS`-alternativ i serveradministrationen kan du använda det om det finns tillgängligt. Om ett sådant alternativ inte syns i ditt gränssnitt, anta inte att det finns för din produkt eller servertyp.

## Ladda upp och installera Lua- eller UE4SS-mods

Lua och andra `UE4SS`-baserade Palworld-mods distribueras vanligtvis som mappar snarare än som en enda `.pak`-fil.

### Extrahera moden på din lokala enhet

Ladda ner modarkivet från modskaparnas officiella release-sida och extrahera det på din dator först. Du bör inte ladda upp `.zip` eller `.rar`-filen om inte skaparen uttryckligen instruerar dig att göra det.

### Ladda upp modmappen till rätt sökväg

För de flesta Lua- eller `UE4SS`-mods, ladda upp den extraherade modmappen till:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

En typisk Lua-modstruktur ser ut så här:

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

Byt ut `UploadedMod` mot det faktiska mappnamnet som modskaparen tillhandahåller.

### Exempelstruktur

| Objekt | Exempelsökväg |
| --- | --- |
| Modmapp | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| Skriptfil | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution Byt Inte Namn På Filer Godtyckligt
Du bör inte byta namn på modmappen, skriptfiler eller intern mappstruktur om inte modskaparen uttryckligen instruerar dig att göra det. Många `UE4SS`-mods är beroende av originalstrukturen för att laddas korrekt.
:::

## Ladda upp och installera .pak-mods

`.pak`-mods installeras annorlunda än Lua- eller `UE4SS`-skriptmods.

### Ladda upp `.pak`-filen

För de flesta Palworld `.pak`-mods, ladda upp filen till:

```text
Pal/Content/Paks/~mods/
```

Exempel:

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

Vissa mods kan istället instruera dig att använda:

```text
Pal/Content/Paks/LogicMods/
```

### Kontrollera ytterligare filer om de finns

Vissa `.pak`-mods kan innehålla mer än en fil, som metadata eller följeslagarfiler. Om modarkivet innehåller flera nödvändiga filer, ladda upp alla exakt som modskaparen beskriver.

| Vanlig `.pak`-plats | Användningsfall |
| --- | --- |
| `Pal/Content/Paks/~mods/` | Vanligaste platsen för generella `.pak`-mods |
| `Pal/Content/Paks/LogicMods/` | Används av vissa mods beroende på skaparinstruktioner |

## Redigera modkonfigurationsfiler om modden kräver det

Vissa Palworld-mods inkluderar egna konfigurationsfiler som måste redigeras efter uppladdning. Dessa inställningar är inte universella, så exakt filnamn och värden beror på vald mod.

### Var hittar du konfigurationsfilen

Om moden tillhandahåller en configfil kan den finnas på någon av dessa platser efter uppladdning:

| Modtyp | Möjlig konfigurationsplats |
| --- | --- |
| `UE4SS` / `.lua` mod | Inuti modmappen under `Pal/Binaries/Win64/ue4ss/Mods/[din_mod_namn]/` |
| `.pak` mod | Ibland ingår ingen redigerbar config; kontrollera moddokumentationen |
| Serverkonfigintegration | I vissa fall kan ytterligare inställningar redigeras via **Configs** i din ZAP-serveradministration |

### Vad du ska ändra

Du bör bara ändra värden som modskaparen uttryckligen dokumenterat. Typiska exempel kan vara:

- aktivera eller inaktivera modfunktioner
- ställa in multiplikatorer eller gränser
- definiera admin-endast beteenden
- ändra nyckelnamn eller interna alternativ som används av moden

Eftersom Palworld-mods inte använder ett enda standardiserat konfigurationsformat finns det ingen universell konfigurationspost som gäller för alla mods.

:::info Ingen Universell Palworld Mod-Konfig
Det finns för närvarande ingen enda Palworld-serverkonfigurationsfil eller inbyggd configsektion som aktiverar alla mods globalt. I praktiken görs modinstallation vanligtvis genom att placera rätt filer i rätt kataloger och sedan redigera eventuella modspecifika configfiler endast om moden inkluderar sådana.
:::

## Starta om servern och testa moden

Efter att du laddat upp modfilerna och gjort eventuella nödvändiga konfigurationsändringar måste du starta om din Palworld-server.

### Starta om servern

Använd omstarts-funktionen i din ZAP-Hosting spelserveradministration för att helt starta om tjänsten.

Detta steg krävs eftersom Palworld normalt inte laddar nyuppladdade servermods förrän servern startas om.

### Testa funktionaliteten

Efter omstart:

1. Gå med i servern.
2. Testa moddens funktion i spelet.
3. Kontrollera serverkonsolen efter fel om moden inte fungerar.
4. Ta bort de nyligen tillagda modfilerna om servern inte startar eller beter sig oväntat.

:::tip Felsökning av Mods som Misslyckas
Om en mod orsakar problem, ta först bort endast filerna från den senast installerade moden och starta om servern igen. Det är det snabbaste sättet att bekräfta om den moden är orsaken.
:::

## Snabbreferens

| Uppgift | Åtgärd |
| --- | --- |
| Kontrollera serverversion | Kör `info` i serverkonsolen |
| UE4SS basväg | `Pal/Binaries/Win64/ue4ss/` |
| UE4SS/Lua modväg | `Pal/Binaries/Win64/ue4ss/Mods/` |
| Vanlig Lua-skriptfil | `scripts/main.lua` |
| Vanlig `.pak` modväg | `Pal/Content/Paks/~mods/` |
| Alternativ `.pak`-väg | `Pal/Content/Paks/LogicMods/` |
| Åtkomst till configfiler | Öppna **Configs** i ZAP spelserveradministration |
| Slutsteg | Starta om servern |

## Conclusion

Grattis, du har installerat mods på din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig! 🙂