---
id: palworld-enable-global-palbox
title: "Palworld: Global Palbox inschakelen"
description: "Leer hoe je de Palworld global palbox serverinstelling inschakelt voor wereldwijde palbox import en export op je dedicated server. -> Leer nu meer"
sidebar_label: Palworld: Global Palbox inschakelen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

De *Global Palbox* in Palworld stelt spelers in staat om Pals tussen servers te verplaatsen via het wereldwijde cloud-gebaseerde Pal-opslagsysteem van Palworld. In deze gids leer je hoe je Global Palbox import en export inschakelt op je ZAP-Hosting Palworld server door het juiste configuratiebestand handmatig aan te passen.



## Voorbereiding

Voordat je begint, zorg ervoor dat:

- je toegang hebt tot je Palworld game server in de ZAP-Hosting webinterface
- je server momenteel gestopt is of herstart kan worden na de wijzigingen
- je toegang hebt tot de sectie `Configs` in je game server beheer

:::info Toegang tot Configuratiebestand
Voor ZAP-Hosting Palworld servers kunnen de relevante instellingen worden aangepast via het game server beheer onder `Configs`. Externe bestands toegang is niet nodig als de configuratie-editor daar beschikbaar is.
:::

## Open het Palworld Configuratiebestand

Om de Global Palbox functie in te schakelen, moet je het bestand `PalWorldSettings.ini` bewerken.

### Vind het Configuratiebestand in de ZAP Interface

1. Log in op de [ZAP-Hosting website](https://zap-hosting.com).
2. Open het beheer van je Palworld game server.
3. Ga naar de sectie `Configs`.
4. Open het bestand met de naam `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste serverinstellingen die Palworld gebruikt, inclusief de Global Palbox opties.

:::note Handmatige Configuratie Vereist
De Global Palbox instelling wordt handmatig geconfigureerd via het serverconfiguratiebestand. Als je geen aparte schakelaar voor deze functie in de interface ziet, is het direct bewerken van `PalWorldSettings.ini` de juiste methode.
:::

## Schakel Global Palbox Import en Export in

Zodra je `PalWorldSettings.ini` hebt geopend, moet je de serveroptielijst vinden en de Global Palbox instellingen aanpassen.

### Vereiste Configuratiesleutels

De volgende instellingen regelen het gedrag van de Global Palbox:

| Config sleutel | Waarde | Functie |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` of `False` | Staat spelers toe Pals te importeren vanuit de Global Palbox |
| `bAllowGlobalPalboxExport` | `True` of `False` | Staat spelers toe Pals te exporteren naar de Global Palbox |

Volgens huidige referentiematerialen van derden is `bAllowGlobalPalboxImport` standaard uitgeschakeld met `False`, terwijl `bAllowGlobalPalboxExport` standaard ingeschakeld is met `True`. Als je bestand deze waarden al bevat, hoef je ze alleen aan te passen indien nodig.

### Stel de Waarden In

Om Global Palbox overdrachten tussen servers volledig in te schakelen, stel je beide waarden in op `True`.

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Als deze opties al in het bestand staan, vervang dan de bestaande waarden. Als ze niet aanwezig zijn, voeg ze dan toe in de serverinstellingen sectie van `PalWorldSettings.ini`.

:::caution Behoud de Bestaande Syntax
Palworld configuratiebestanden zijn gevoelig voor de opmaak. Verander alleen de benodigde waarden en verwijder geen komma’s, haakjes of andere bestaande items als deze opties deel uitmaken van een grotere instellingenregel in je bestand.
:::

## Sla de Wijzigingen Op

Na het bewerken van het bestand:

1. Sla de wijzigingen op in de editor van `PalWorldSettings.ini`.
2. Controleer of beide Global Palbox waarden aanwezig en correct ingesteld zijn.

Als je serverpaneel alleen een opslaan-knop biedt, gebruik die dan eerst voordat je de server herstart in de volgende stap.

## Herstart de Server

Na het wijzigen van de Global Palbox instellingen moet je de Palworld server herstarten zodat de nieuwe configuratie wordt geladen.

### Pas de Nieuwe Instellingen Toe

Herstart je server vanuit het game server beheer nadat je het bestand hebt opgeslagen.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra console commando’s uitvoeren | Nee |

Er zijn geen extra commando’s nodig na het bewerken van het configuratiebestand. Een normale serverherstart is voldoende om de nieuwe Palworld global palbox serverinstelling toe te passen.

:::tip Controleer de Functie In-Game
Na de herstart, join je server en test of spelers Pals kunnen importeren en exporteren via de Global Palbox. Dit is de makkelijkste manier om te bevestigen dat de instelling succesvol is toegepast.
:::

## Problemen Oplossen

Als de Global Palbox niet werkt na de herstart, controleer dan de volgende punten.

### Bevestig dat de Waarden Correct Zijn Opgeslagen

Open `PalWorldSettings.ini` opnieuw en controleer of deze waarden nog steeds aanwezig zijn:

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Als de waarden teruggedraaid zijn, is het bestand mogelijk niet correct opgeslagen.

### Controleer op Opmaakproblemen

Als je de waarden in een bestaande instellingenblok hebt toegevoegd, zorg dan dat de omliggende syntax nog geldig is. Onjuiste opmaak in `PalWorldSettings.ini` kan ervoor zorgen dat Palworld instellingen negeert of niet goed laadt.

### Herstart de Server Nogmaals

Als je het bestand hebt opgeslagen terwijl de server draaide, voer dan nog een volledige herstart uit om zeker te zijn dat de nieuwe configuratie wordt toegepast.

:::danger Beschikbaarheid van de Functie Hangt af van de Gameversie
Global Palbox is een gamefunctie die door Palworld zelf wordt geleverd. Als de instelling niet werkt ondanks een correcte configuratie, kan de functie afhankelijk zijn van de huidige Palworld serverversie of tijdelijke beperkingen aan de gamezijde. Controleer in dat geval of je server volledig up-to-date is.
:::

## Conclusie

Gefeliciteerd, je hebt Global Palbox import en export succesvol ingeschakeld op je Palworld server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂