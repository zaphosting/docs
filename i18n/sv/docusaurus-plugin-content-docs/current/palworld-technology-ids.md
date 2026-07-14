---
id: palworld-technology-ids
title: "Palworld: Technology IDs"
description: "Learn how to manage Palworld technology IDs, disable specific technology entries, and edit the correct server configuration safely. -> Learn more now"
sidebar_label: Palworld: Technology IDs
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld använder *technology IDs* för att identifiera upplåsbara teknologier och vissa inställningar relaterade till föremål i serverkonfigurationen. I den här guiden lär du dig hur du inaktiverar specifika teknologier genom att redigera inställningen `DenyTechnologyList` i din ZAP-Hosting Palworld-serverkonfiguration.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och behörighet att redigera dess konfigurationsfiler.

:::info Krav på konfigurationstillgång
Du behöver tillgång till din spelserveradministration och avsnittet `Configs` för att kunna redigera `PalWorldSettings.ini`.
:::

:::note Källa för Technology IDs
Palworld technology IDs är strängbaserade värden, som till exempel `GrapplingGun`, `GrapplingGun2` eller `SkillUnlock_JetDragon`. En aktuell tredjepartsreferenslista finns här: [Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids).

Eftersom Palworld-uppdateringar kan ändra tillgängliga teknologier bör du alltid verifiera att de IDs du planerar att använda fortfarande finns i den aktuella spelversionen.
:::

## Förstå technology IDs

Technology IDs är interna identifierare som Palworld använder för upplåsbara teknologiposter. På dedikerade servrar kan dessa IDs användas i specifika konfigurationsalternativ för att styra spelbeteendet.

Den mest relevanta inställningen för detta ämne är `DenyTechnologyList`, som låter dig blockera utvalda teknologier från att låsas upp eller användas på din server.

### Stödd konfigurationsanvändning

Följande tabell visar den relevanta konfigurationsnyckeln som täcks i denna guide:

| Konfigurationsnyckel | Syfte | Värdeformat |
| --- | --- | --- |
| `DenyTechnologyList` | Inaktiverar specifika teknologier på servern | Komma-separerad lista med technology ID-strängar |

### Exempel på technology IDs

Följande IDs är exempel som ofta refereras till:

| Technology ID | Exempel på betydelse |
| --- | --- |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Högre nivå av Grappling Gun |
| `SkillUnlock_JetDragon` | Upplåsning relaterad till JetDragon |
| `SkillUnlock_IceHorse` | Upplåsning relaterad till Frostallion |
| `PALBOX` | Teknologi relaterad till Palbox |
| `RepairBench` | Repair Bench |
| `AIcore` | AI Core |

:::caution Använd Exakta ID-värden
Technology IDs är skiftlägeskänsliga strängvärden. Om du anger ett felaktigt ID kan Palworld ignorera det, och teknologin kommer inte att inaktiveras som avsett.
:::

## Öppna Palworld-konfigurationsfilen

För att konfigurera technology IDs på din ZAP-Hosting-server behöver du redigera rätt Palworld-inställningsfil manuellt.

### Hitta filen i ZAP-Hosting-gränssnittet

1. Logga in på ZAP-Hostings webbgränssnitt.
2. Öppna din **Palworld**-spelserver.
3. Gå till **Configs** i spelserveradministrationen.
4. Öppna filen `PalWorldSettings.ini`.

Detta är konfigurationsfilen där inställningen `DenyTechnologyList` lagras och redigeras.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Lokalisera relevant inställning

Inuti `PalWorldSettings.ini`, leta efter serveralternativblocket som innehåller dina Palworld-inställningar.

Du behöver hitta eller lägga till posten `DenyTechnologyList`.

:::tip Snabbt söka i filen
Använd din webbläsares sökfunktion med `CTRL` + `F` och sök efter `DenyTechnologyList` för att hitta inställningen snabbare.
:::

## Konfigurera `DenyTechnologyList`

Du kan nu definiera vilka teknologier som ska blockeras på din server.

### Värdeformat

`DenyTechnologyList` använder en komma-separerad lista med technology IDs.

Exempel på format:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

Varje post måste vara ett giltigt Palworld technology ID. Lägg inte till beskrivningar, extra mellanslag i själva ID:t eller otillåtna tecken.

### Lägg till eller redigera inställningen

Om inställningen redan finns, ersätt dess nuvarande värde med din önskade lista.

Om inställningen inte finns än, lägg till den i rätt serverinställningsavsnitt i `PalWorldSettings.ini`.

Exempel:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

Detta exempel inaktiverar flera teknologier via deras IDs.

### Referensexempel för konfiguration

| Exempelpost | Resultat |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | Inaktiverar endast grundläggande Grappling Gun-teknologi |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | Inaktiverar flera nivåer av Grappling Gun-teknologi |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | Inaktiverar utvalda specialupplåsningar |

:::note Relaterad användning av Item IDs
Vissa Palworld-inställningar relaterade till föremål använder också ID-baserade värden. Till exempel visar tredjepartsreferenser att `AdditionalDropItemWhenPlayerKillingInPvPMode` också kan använda Palworld ID-värden för PvP-föremålsdroppar. Denna guide fokuserar dock specifikt på `DenyTechnologyList`.
:::

## Spara och tillämpa ändringarna

Efter att ha redigerat konfigurationen behöver du spara filen och starta om servern så att Palworld kan läsa in de uppdaterade inställningarna.

### Spara filen

När du är klar med redigeringen av `PalWorldSettings.ini`:

1. Spara ändringarna i `Configs`-editorn.
2. Granska posten en gång till för att bekräfta att IDs är korrekt stavade.

### Starta om servern

När filen är sparad, starta om din Palworld-server från ZAP-Hostings spelserveradministration.

Denna omstart krävs eftersom konfigurationsändringar i `PalWorldSettings.ini` inte tillämpas pålitligt förrän servern startas om med den uppdaterade filen.

:::info Omstart krävs
En serveromstart krävs efter att ha ändrat `DenyTechnologyList`. Vanligtvis behövs inga ytterligare kommandon i spelet när du använder konfigurationsfilmetoden.
:::

## Verifiera att teknologierna är inaktiverade

Efter omstarten bör du kontrollera att konfigurationen fungerar som förväntat.

### Vad du ska kontrollera

Du kan verifiera resultatet genom att kontrollera om de valda teknologierna fortfarande är tillgängliga i spelet.

Använd följande checklista:

| Kontroll | Förväntat resultat |
| --- | --- |
| Servern startade om utan problem | Servern kommer tillbaka online normalt |
| `PalWorldSettings.ini` sparades korrekt | Din `DenyTechnologyList`-post finns kvar |
| Test av inaktiverad teknologi i spelet | Den valda teknologin är inte längre tillgänglig som förväntat |

### Om inställningen inte fungerar

Om teknologierna fortfarande är tillgängliga, kontrollera följande:

| Möjligt problem | Vad du ska verifiera |
| --- | --- |
| Ogiltigt ID | Bekräfta att technology ID exakt matchar den aktuella spelversionen |
| Formateringsproblem | Se till att listan är komma-separerad och skriven som rena ID-strängar |
| Filen sparades inte | Öppna `PalWorldSettings.ini` igen och kontrollera att värdet finns kvar |
| Servern startades inte om | Starta om servern igen efter att ha sparat ändringarna |

:::caution Speluppdateringar kan ändra IDs
Palworld får kontinuerliga uppdateringar och teknologiinformation kan ändras över tid. Om ett tidigare giltigt ID inte längre fungerar, verifiera det mot en aktuell och pålitlig referens innan du felsöker vidare.
:::

## Conclusion

Grattis, du har framgångsrikt inaktiverat specifika teknologier på din Palworld-server med hjälp av technology IDs. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig! 🙂