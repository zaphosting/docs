---
id: palworld-change-death-penalty
title: "Palworld: Death Penalty Wijzigen"
description: "Leer hoe je de Palworld death penalty aanpast door het serverconfiguratiebestand te bewerken, inclusief DeathPenalty-waarden en herstartstappen. -> Leer nu meer"
sidebar_label: Palworld: Death Penalty Wijzigen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld geeft je de mogelijkheid om te bepalen wat spelers verliezen bij overlijden door de `DeathPenalty` serverinstelling aan te passen. In deze gids leer je hoe je het juiste configuratiebestand bewerkt in de ZAP-Hosting webinterface en de wijziging correct toepast.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Voordat je begint, zorg ervoor dat:

- je toegang hebt tot je Palworld game server in de ZAP-Hosting webinterface
- je server offline is of dat je bereid bent deze te herstarten na het aanbrengen van wijzigingen
- je weet welk sterfgedrag je voor je spelers wilt instellen

:::info Toegang tot Configuratiebestand
Voor Palworld servers bij ZAP-Hosting kunnen de relevante instellingen worden aangepast via je game server beheer onder **Configs**.
:::

## Open het Palworld Configuratiebestand

Om de death penalty te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

### Vind het bestand in de ZAP-Hosting interface

Log eerst in op de ZAP-Hosting webinterface en open je Palworld game server. Navigeer vervolgens naar de sectie **Configs** in het game server beheer en open het bestand met de naam `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste gameplay configuratiewaarden voor je Palworld server, inclusief het sterfgedrag.

:::note Handmatige Configuratie Wijzigingen
De death penalty instelling staat direct in het configuratiebestand. Je moet de waarde handmatig aanpassen en niet vertrouwen op een aparte snelle instelling, tenzij je huidige interface die expliciet aanbiedt.
:::

## Wijzig de DeathPenalty Waarde

In `PalWorldSettings.ini` zoek je de sectie `OptionSettings` waar gameplay instellingen staan. Je moet de `DeathPenalty` regel vinden en de waarde aanpassen naar de gewenste optie.

### Ondersteunde DeathPenalty waarden

De volgende waarden worden momenteel door Palworld gebruikt voor de `DeathPenalty` instelling:

| Waarde | Effect |
| --- | --- |
| `None` | Spelers verliezen niets bij overlijden |
| `Item` | Spelers verliezen items, maar houden uitrusting |
| `ItemAndEquipment` | Spelers verliezen items en uitrusting |
| `All` | Spelers verliezen items, uitrusting en alle Pals in hun team |

:::tip Kies de Juiste Instelling
Wil je een meer casual serverervaring, dan is `None` of `Item` meestal de beste keuze. Voor de standaard survival ervaring gebruik je `All`.
:::

### Voorbeeld configuratieregel

In de meeste Palworld serverconfiguraties staat de instelling als onderdeel van een langere `OptionSettings` regel. Bijvoorbeeld:

```ini
OptionSettings=(DeathPenalty=All)
```

Om de death penalty volledig uit te schakelen, verander je dit in:

```ini
OptionSettings=(DeathPenalty=None)
```

Als je bestand al veel instellingen bevat in dezelfde `OptionSettings=(...)` blok, wijzig dan alleen de `DeathPenalty` waarde en laat de andere instellingen ongewijzigd. Bijvoorbeeld:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

In dit geval vervang je alleen `ItemAndEquipment` door jouw gewenste waarde.

:::caution Behoud Bestaande Syntax
Verwijder geen komma’s, haakjes of andere bestaande instellingen uit het `OptionSettings=(...)` blok. Foute syntax kan ervoor zorgen dat de server de configuratie niet correct kan laden.
:::

## Sla de Wijzigingen Op en Pas ze Toe

Nadat je de `DeathPenalty` waarde hebt aangepast, sla je de wijzigingen op in `PalWorldSettings.ini`.

### Herstart de server

Zodra het bestand is opgeslagen, herstart je je Palworld server via de ZAP-Hosting webinterface. Een herstart is nodig zodat de server de bijgewerkte configuratie kan laden.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra console commando’s uitvoeren | Nee |

:::info Herstart Vereist
Palworld leest deze instelling uit de serverconfiguratie. Het nieuwe sterfgedrag wordt pas actief na een volledige serverherstart.
:::

## Controleer de Nieuwe Death Instelling

Na de herstart, join je de server en test je het gedrag in-game om de wijziging te bevestigen.

### Waar op te letten

Afhankelijk van de gekozen waarde controleer je of spelers:

- alle items behouden na overlijden
- alleen inventarisitems verliezen
- inventarisitems en uitrusting verliezen
- inventarisitems, uitrusting en team Pals verliezen

Als de instelling niet lijkt te zijn gewijzigd, open dan `PalWorldSettings.ini` opnieuw en controleer of:

- de `DeathPenalty` waarde exact correct gespeld is
- de wijziging succesvol is opgeslagen
- de server is herstart na de wijziging

:::danger Gebruik Exacte Waarden
De `DeathPenalty` instelling is hoofdlettergevoelig in de configuratie. Gebruik altijd de exacte waardes `None`, `Item`, `ItemAndEquipment` of `All`.
:::

## Conclusie

Gefeliciteerd, je hebt de Palworld death penalty succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂