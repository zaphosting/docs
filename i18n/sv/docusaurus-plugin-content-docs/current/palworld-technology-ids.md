---
id: palworld-technology-ids
title: "Palworld: Technology IDs"
description: "Learn how to manage Palworld technology IDs, disable specific technology entries, and understand the required config values on your server -> Learn more now"
sidebar_label: Palworld: Technology IDs
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld använder *technology IDs* för att identifiera upplåsbara teknologier och vissa relaterade inställningar baserade på föremål. I den här guiden lär du dig hur du inaktiverar specifika teknologier på din ZAP-Hosting Palworld-server genom att manuellt redigera rätt konfigurationspost.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och behörighet att redigera serverns konfigurationsfiler.

:::info Krävd åtkomst
Du behöver åtkomst till din Palworld-serveradministration och avsnittet `Configs` i ZAP-Hosting-panelen för att slutföra denna inställning.
:::

:::note Källor för Technology IDs
Palworld technology IDs är interna strängar definierade av spelet, som till exempel `GrapplingGun` eller `SkillUnlock_JetDragon`. Det finns ingen officiell lista i spelet eller i ZAP-Hosting-panelen, så du måste använda en pålitlig extern referens för giltiga ID:n.
:::

## Förstå technology IDs

Technology IDs är interna identifierare som Palworld använder för upplåsbara teknologier. Istället för att använda det synliga namnet i spelet förväntar sig serverkonfigurationen den exakta ID-strängen.

För att inaktivera teknologier används inställningen `DenyTechnologyList`. Detta värde accepterar en kommaseparerad lista med technology IDs.

### Vad `DenyTechnologyList` gör

När du lägger till giltiga technology IDs i `DenyTechnologyList` blockeras dessa teknologier på din server. Detta är användbart om du vill begränsa progression, ta bort specifika rörelseverktyg eller anpassa spelregler för din community.

### Stödd värdeformat

Värdet måste anges som en kommaseparerad lista utan ytterligare förklaringar.

| Konfig-nyckel | Syfte | Format | Exempel |
|---|---|---|---|
| `DenyTechnologyList` | Inaktiverar valda teknologier | Kommaseparerade technology ID-strängar | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Exakt ID-matchning
Technology IDs måste matcha spelets interna värde exakt. Om ett ID är felstavat eller inte längre giltigt för den aktuella Palworld-versionen kan inställningen sluta fungera som förväntat.
:::

## Öppna rätt konfigurationsfil

På ZAP-Hosting görs denna ändring genom att manuellt redigera Palworlds konfigurationsfil.

### Fil att redigera

Du behöver redigera följande fil:

```ini
PalWorldSettings.ini
```

### Var du hittar den i ZAP-Hosting-gränssnittet

Öppna din Palworld-spelserveradministration och gå sedan till:

```text
Configs
```

Därifrån öppnar du `PalWorldSettings.ini`.

:::tip Konfigurationsplats i ZAP-Hosting
Om din server erbjuder flera redigerbara filer, se till att du väljer `PalWorldSettings.ini`, eftersom detta är filen som används för spelrelaterade serverinställningar som `DenyTechnologyList`.
:::

## Redigera inställningen för technology ID

När du har öppnat `PalWorldSettings.ini`, leta upp serverns alternativlista och lägg till eller ändra posten `DenyTechnologyList`.

### Lägg till technology IDs i `DenyTechnologyList`

Använd en kommaseparerad lista med de teknologier du vill inaktivera.

Exempel:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

Detta exempel inaktiverar:

| Technology ID | Betydelse |
|---|---|
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Högre nivå av Grappling Gun |
| `SkillUnlock_JetDragon` | JetDragon-relaterad upplåsning |

:::note Citatformat
Beroende på hur din befintliga `PalWorldSettings.ini`-post är strukturerad kan värdet finnas inuti en större alternativblock. Behåll den syntaxstil som redan används i din fil och ändra endast värdet för `DenyTechnologyList`.
:::

### Exempel inom ett alternativblock

På många Palworld-servrar lagras inställningar inuti en större `OptionSettings`-rad. I så fall kan posten se ut ungefär så här:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

Om `DenyTechnologyList` inte redan finns, lägg till den inuti samma `OptionSettings=(...)`-block och separera den från andra poster med ett kommatecken.

:::caution Behåll befintlig syntax
Ta inte bort andra inställningar från `OptionSettings`. En saknad komma, parentes eller citattecken kan göra att konfigurationen inte laddas korrekt.
:::

## Välj giltiga technology IDs

Du måste använda giltiga interna technology IDs, inte de visade namnen i spelet.

### Exempel på technology IDs

Följande är kända exempel på technology IDs som används i Palworld:

| Technology ID | Exempelbetydelse |
|---|---|
| `AIcore` | AI Core |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Variant av Grappling Gun |
| `GrapplingGun3` | Variant av Grappling Gun |
| `GrapplingGun4` | Variant av Grappling Gun |
| `GrapplingGun5` | Variant av Grappling Gun |
| `SkillUnlock_JetDragon` | JetDragon-upplåsning |
| `SkillUnlock_IceHorse` | Ice Horse-upplåsning |
| `PALBOX` | Palbox-relaterad teknologi |
| `RepairBench` | Repair Bench |

Eftersom Palworld uppdateras kan listan över ID:n ändras över tid. Om du behöver en bredare referenslista, verifiera ID:n mot en aktuell och pålitlig källa innan du använder dem.

### Relaterad användning av ID:n i andra inställningar

Teknologi-liknande interna ID:n kan också användas i andra Palworld-konfigurationsalternativ. Ett känt exempel är:

| Konfig-nyckel | Syfte |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Ställer in ett anpassat föremålsdrop vid PvP-död |

:::info Relaterad PvP-inställning
Om du planerar att använda ID:n för anpassning av föremålsdrop vid PvP, kontrollera att den ID-typ som krävs av `AdditionalDropItemWhenPlayerKillingInPvPMode` matchar det föremål du vill använda. Denna guide fokuserar specifikt på `DenyTechnologyList`.
:::

## Spara och starta om servern

Efter att du redigerat filen, spara dina ändringar i ZAP-Hosting-gränssnittet.

För att tillämpa den nya konfigurationen, starta om din Palworld-server.

### Krävd åtgärd efter redigering

| Åtgärd | Krävs |
|---|---|
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Kör ytterligare konsolkommandon | Inga bekräftade kommandon krävs |

En omstart krävs eftersom Palworld läser dessa serverinställningar vid uppstart. Utan omstart kan dina nya teknologibegränsningar inte träda i kraft.

:::tip Testa efter omstart
Efter att servern har startat om, anslut till servern och kontrollera att de valda teknologierna inte längre är tillgängliga som avsett. Detta hjälper dig att bekräfta att ID:n och syntaxen är korrekt inmatade.
:::

## Felsökning

Om teknologierna fortfarande är tillgängliga efter omstart, kontrollera följande punkter.

### Kontrollera stavningen av ID:n

Se till att varje technology ID är skrivet exakt som krävs, inklusive versaler och gemener.

### Kontrollera konfigurationssyntaxen

Om du redigerade `OptionSettings=(...)`-blocket, kontrollera att:

- varje inställning är separerad med ett kommatecken
- citattecken är korrekt öppnade och stängda
- parenteserna är kompletta
- `DenyTechnologyList` finns i rätt inställningsblock

### Bekräfta att servern startade om korrekt

Om servern inte startade om ordentligt kan den uppdaterade konfigurationen ha missats att laddas.

:::danger Risk för ogiltig konfiguration
En felaktigt formaterad `PalWorldSettings.ini` kan förhindra att inställningarna laddas korrekt. Om detta händer, återställ den tidigare fungerande versionen av filen och applicera ändringen noggrant igen.
:::

## Conclusion

Grattis, du har framgångsrikt inaktiverat specifika teknologier på din Palworld-server med hjälp av technology IDs. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig!