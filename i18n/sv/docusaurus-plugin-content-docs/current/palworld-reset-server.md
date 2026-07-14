---
id: palworld-reset-server
title: "Palworld: Återställ Server"
description: "Lär dig hur du återställer din Palworld-server i ZAP-webbgränssnittet, förstå vilka inställningar som tas bort och hur du säkert återställer standardserverdata. -> Läs mer nu"
sidebar_label: Palworld: Återställ Server
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld sparar din värld, spelarprogression och serverinställningar på spelservern. I den här guiden lär du dig hur du helt återställer din Palworld-server hos ZAP-Hosting och startar om med en fräsch standardinstallation.

:::danger Fullständig Radering av Data
En fullständig återställning raderar permanent dina befintliga sparfiler, konfigurationsändringar och alla andra serverfiler som finns på den aktuella installationen. Du bör endast använda detta som en sista utväg.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och att du inte längre behöver den nuvarande världens data.

:::info Säkerhetskopiera Viktig Data Först
Om du vill behålla en kopia av din nuvarande värld eller konfiguration, skapa en backup innan du fortsätter. När återställningen är klar kan den raderade datan normalt inte återställas.
:::

## Förstå vad en Palworld-serveråterställning gör

En fullständig Palworld-återställning är inte samma sak som att ändra en enskild inställning i konfigurationsfilen. Istället installerar den om hela servern och tar bort den nuvarande serverdatan.

Återställningsprocessen tar vanligtvis bort följande:

| Datatyp | Tas bort vid återställning |
| --- | --- |
| Världens sparade data | Ja |
| Spelarprogression | Ja |
| Serverkonfigurationsändringar | Ja |
| Installerade mods eller anpassade filer | Ja |
| Standardspeldata | Installera om automatiskt |

Efter återställningen startar din server med en fräsch installation och standardinställningar.

## Kontrollera konfigurationsplatsen först

För vanliga konfigurationsändringar i Palworld kan du komma åt relevanta filer i din spelserveradministration under `Configs`. De viktigaste Palworld-inställningarna finns vanligtvis i följande fil:

| Fil | Syfte |
| --- | --- |
| `PalWorldSettings.ini` | Huvudkonfigurationsfil för Palworld-servern |

I ZAP-Hostings gränssnitt kan du vanligtvis nå denna via din Palworld-serveradministration under `Configs`.

:::note Återställning Kräver Inte Manuell Konfigredigering
En fullständig serveråterställning kräver inte att du manuellt redigerar `PalWorldSettings.ini`. Denna fil är relevant för vanliga inställningsändringar, men en komplett återställning görs genom att installera om eller formatera servern så att alla filer återskapas med standardvärden.
:::

Om ditt mål endast är att ändra spelinställningar istället för att radera hela servern, bör du redigera konfigurationsfilen i `Configs` istället för att göra en fullständig återställning.

## Stoppa servern

Innan du startar återställningen måste du helt stoppa Palworld-servern.

1. Logga in i ZAP-Hostings webbgränssnitt.
2. Öppna din Palworld-spelserver.
3. Stoppa servern via serveradministrationskontrollerna.
4. Vänta tills serverstatusen bekräftar att den är offline.

:::caution Starta Inte Återställning Medan Servern Körs
Om du startar en återställning medan servern fortfarande är aktiv kan filer inte tas bort korrekt och sparad data kan bli inkonsekvent.
:::

## Installera om och återställ servern

En fullständig återställning i Palworld görs genom att installera om servern med formaterings- eller återställningsalternativ i ZAP-gränssnittet.

### Öppna ominstallationsfunktionen

I din Palworld-serveradministration, leta efter ominstallations- eller återställningsfunktionen i serverhanteringsområdet.

Eftersom gränssnittsetiketter kan variera mellan panelversioner kan den exakta formuleringen skilja sig något. Hos ZAP-Hosting finns denna funktion vanligtvis i serveradministrationsområdet där ominstallation eller formateringsåtgärder är tillgängliga.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Starta fullständig återställning

Använd det tillgängliga ominstallationsalternativet som utför en fullständig formatering eller återställning av serverdatan.

Bekräfta åtgärden om panelen frågar om bekräftelse under detta steg.

:::danger Denna Åtgärd Raderar All Serverdata
En fullständig ominstallation eller formateringsåterställning raderar sparfiler, konfigurationer och anpassade serverfiler. Fortsätt endast om du är säker på att du vill återställa allt.
:::

### Vänta på att installationen slutförs

Efter att du bekräftat återställningen, vänta tills ominstallationsprocessen är klar. Beroende på panelens status och serverns storlek kan detta ta några minuter.

Avbryt inte processen medan servern installeras om.

## Starta den fräscha Palworld-servern

När ominstallationen är klar, starta Palworld-servern igen från serveradministrationen.

Efter uppstart:

- skapas en ny världssparning
- standardserverinställningar används
- tidigare spelar- och världprogression finns inte kvar

Om det behövs kan du nu gå tillbaka till `Configs` och justera dina Palworld-inställningar igen i `PalWorldSettings.ini`.

## Verifiera återställningsresultatet

Efter att servern har startat, anslut till servern och bekräfta att återställningen lyckades.

Du bör kontrollera följande:

| Kontroll | Förväntat resultat |
| --- | --- |
| Världens status | Ny, fräsch värld |
| Spelardata | Ingen tidigare progression |
| Serverinställningar | Standardvärden om du inte ändrat igen |
| Anpassade filer eller mods | Borttagna om de inte installerats om manuellt |

Om den gamla världen fortfarande visas, stoppa servern och kontrollera om ominstallationsprocessen slutfördes korrekt i ZAP-panelen. Om panelen inte utförde en fullständig formateringsåterställning kan du behöva upprepa processen noggrant.

## Konfigurera serverinställningar efter återställningen

Efter en lyckad återställning kommer din Palworld-server att använda standardkonfigurationsvärden. Om du vill anpassa servern igen, öppna `Configs` i din spelserveradministration och redigera `PalWorldSettings.ini`.

Typiska uppgifter efter återställning kan inkludera:

- ändra servernamn
- sätta lösenord
- justera svårighetsgrad eller spelvärden
- återapplicera anpassade konfigurationsändringar
- installera om stöd för mods eller tilläggsfiler vid behov

:::tip Återapplicera Inställningar Försiktigt
Om en tidigare konfiguration orsakade problem, undvik att kopiera tillbaka alla gamla inställningar direkt. Återapplicera endast de inställningar du verkligen behöver så att du lättare kan identifiera problematiska ändringar.
:::

## Konfigurationsreferens

Följande tabell sammanfattar relevant fil och återställningsbeteende:

| Objekt | Detaljer |
| --- | --- |
| Huvudkonfigfil | `PalWorldSettings.ini` |
| ZAP-plats för konfigredigering | `Configs` i spelserveradministrationen |
| Krävs manuell konfigändring för full återställning | Nej |
| Krävd åtgärd för full återställning | Ominstallation eller formatering/återställning av servern |
| Krävs omstart efteråt | Ja, starta servern igen efter ominstallation |
| Ytterligare kommandon krävs | Inga bekräftade |

:::note Gränssnittets Benämningar Kan Variera
Den exakta formuleringen för ominstallations- eller formateringsalternativet kan skilja sig beroende på aktuell version av ZAP-webbgränssnittet. Om du inte hittar återställningsfunktionen, kontakta support innan du försöker alternativa metoder för filborttagning.
:::

## Conclusion

Grattis, du har framgångsrikt återställt din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂