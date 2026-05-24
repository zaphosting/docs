---
id: gameserver-subnautica-2-connect-to-server
title: "Gameserver - Subnautica 2 - Verbinden met server"
description: "Leer hoe je verbinding maakt met je Subnautica 2-server met de juiste servergegevens en een soepele verbinding tot stand brengt zonder veelvoorkomende problemen -> Leer het nu"
sidebar_label: Gameserver - Subnautica 2 - Verbinden met server
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Weet je niet zeker hoe je verbinding maakt met je **Subnautica 2**-server of welke informatie je nodig hebt om te beginnen? Deze gids laat je zien hoe je de benodigde servergegevens verkrijgt, de verbinding tot stand brengt en veelvoorkomende verbindingsproblemen oplost.

:::info Vroege Toegang Waarschuwing
Subnautica 2 kan nog in actieve ontwikkeling zijn, afhankelijk van de huidige releasefase. Hierdoor kunnen multiplayerfuncties, serverbrowsergedrag en verbindingsprocessen in de loop van de tijd veranderen.
:::

<InlineVoucher />

## Servergegevens verkrijgen

Je hebt alle relevante informatie nodig om verbinding te maken met je server. Je vindt de gegevens van je server in het dashboard van het webinterfacepaneel van je gameserver. Belangrijke informatie omvat het volgende:

- IP-adres en poort
- Servernaam
- Serverwachtwoord

Met de bovenstaande informatie kun je je server identificeren en ervoor zorgen dat je verbinding maakt met de juiste server.

| Gegeven | Beschrijving |
| --- | --- |
| `IP-adres` | Het publieke adres van je Subnautica 2-server |
| `Poort` | De gamepoort die wordt gebruikt voor de verbinding |
| `Servernaam` | De naam die in het spel wordt weergegeven als er een serverlijst of sessiebrowser beschikbaar is |
| `Serverwachtwoord` | Alleen vereist als je server met een wachtwoord is beveiligd |

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

## Verbinding maken met de server

De exacte manier waarop je verbinding maakt met een **Subnautica 2**-server hangt af van de multiplayeropties die beschikbaar zijn in de versie van het spel die je gebruikt. Over het algemeen heb je het **IP-adres** en de **poort** van de server nodig, en in sommige gevallen ook het **serverwachtwoord**.

### Verbinden via het multiplayermenu in het spel

Start **Subnautica 2** en open het multiplayer- of serververbindinggedeelte vanuit het hoofdmenu. Als het spel een directe verbindingsoptie biedt, voer dan het `IP-adres` en de `poort` van je server precies in zoals weergegeven in je ZAP-Hosting webinterface. Als er een wachtwoord is ingesteld, voer dan het `serverwachtwoord` in wanneer hierom wordt gevraagd.

Na het bevestigen van de gegevens zal het spel proberen verbinding te maken met je server.

:::note Beschikbaarheid Directe Verbinding
De exacte benaming van menu’s en knoppen kan verschillen afhankelijk van de huidige spelversie. Als je geen directe verbindingsoptie ziet, controleer dan of het spel momenteel vereist dat je via een serverlijst, uitnodigingssysteem of sessiebrowser verbindt.
:::

### Verbinden via een serverlijst of sessiebrowser

Als **Subnautica 2** een ingebouwde serverbrowser gebruikt in plaats van een handmatig veld voor directe verbinding, zoek dan je server op met de geconfigureerde `servernaam`. Daarom is het belangrijk om de servernaam in je webinterface te controleren voordat je verbinding probeert te maken.

Als je de juiste server in de lijst hebt gevonden:

1. Selecteer de serververmelding
2. Controleer of de weergegeven naam overeenkomt met je server
3. Maak verbinding met de server
4. Voer het wachtwoord in als hierom wordt gevraagd

:::tip Gebruik Unieke Servernamen
Als je server moeilijk te herkennen is in een lijst, geef dan een duidelijke en unieke servernaam op in je serverconfiguratie. Dit maakt het makkelijker om de juiste server te vinden en voorkomt dat je per ongeluk met de verkeerde server verbindt.
:::

### Als de server niet direct zichtbaar is

Als je server niet verschijnt in de in-game browser, betekent dit niet altijd dat de server offline is. Soms duurt het even voordat serverlijsten worden vernieuwd, of toont het spel servers pas na een succesvolle initialisatie.

Controleer het volgende:

- De server staat online in de ZAP-Hosting webinterface
- De juiste gamepoort wordt gebruikt
- De server is volledig gestart
- De servernaam is correct geconfigureerd
- Er is een wachtwoord ingevoerd als dat vereist is

![img](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Mogelijke problemen en oplossingen

De verbinding met een gameserver kan door verschillende factoren worden beïnvloed. De meest voorkomende problemen en oplossingen worden hieronder beschreven.

### Niet zichtbaar

Als de server niet zichtbaar is, kan dit betekenen dat de initialisatie niet succesvol is afgerond. Dit kan bijvoorbeeld komen door een foutieve configuratie of corrupte bestanden. Meer informatie vind je meestal in de serverconsole of logbestanden.

:::caution Server moet volledig gestart zijn
Probeer niet te verbinden voordat de server volledig is opgestart. Als de server nog aan het laden of herstarten is, kunnen spelers mogelijk niet verbinden of verschijnt de server nog niet in een lijst.
:::

### Verkeerde verbindingsgegevens

Als je geen verbinding kunt maken, controleer dan of je het juiste `IP-adres`, de juiste `poort` en het juiste `serverwachtwoord` gebruikt. Zelfs een kleine typefout kan een succesvolle verbinding verhinderen.

| Controleren | Wat te verifiëren |
| --- | --- |
| `IP-adres` | Komt overeen met het adres in je serverdashboard |
| `Poort` | Komt overeen met de toegewezen gamepoort |
| `Wachtwoord` | Exact ingevoerd zoals geconfigureerd, inclusief hoofd- en kleine letters |
| `Servernaam` | Komt overeen met de geconfigureerde servernaam als je zoekt in een browser |

### Server is online maar verbinding mislukt

Als de server online lijkt te zijn maar je toch niet kunt verbinden, bekijk dan de serverconsole en logs in je webinterface. Fouten daar kunnen aangeven of de server niet correct is geladen of dat een configuratieprobleem spelersverbindingen blokkeert.

:::tip Controleer eerst de logs
De serverconsole en logbestanden zijn meestal de snelste manier om te achterhalen waarom een verbinding mislukt. Ze helpen je bevestigen of de server correct luistert en of verbindingspogingen de server bereiken.
:::

### Geen oplossing gevonden of onduidelijk

Heb je na het oplossen van problemen nog steeds problemen? Dan staat ons supportteam dagelijks voor je klaar. Maak eenvoudig een **[Ticket](https://zap-hosting.com/en/customer/support/)** aan op onze website en leg je probleem zo gedetailleerd mogelijk uit. Voeg je server IP, poort en een korte beschrijving toe van wat er gebeurt als je verbinding probeert te maken.

## Conclusie

Gefeliciteerd, je hebt succesvol verbinding gemaakt met je Subnautica 2-server. Voor verdere vragen of hulp kun je altijd contact opnemen met ons supportteam, dat dagelijks voor je klaarstaat! 🙂