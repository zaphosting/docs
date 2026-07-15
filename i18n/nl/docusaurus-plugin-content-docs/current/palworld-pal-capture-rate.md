---
id: palworld-pal-capture-rate
title: "Palworld: Pal Capture Rate"
description: "Learn how to change the Palworld Pal capture rate by editing the PalCaptureRate setting for easier capture results on your server. -> Learn more now"
sidebar_label: Palworld: Pal Capture Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stelt je in staat om de Pal capture rate op je server aan te passen via de hoofdwereldconfiguratie. In deze gids leer je waar je het juiste config-bestand vindt in de ZAP-Hosting interface, welke waarde je moet wijzigen en hoe je de nieuwe capture rate toepast.



## Preparation

Zorg ervoor dat je toegang hebt tot je Palworld game server via de ZAP-Hosting webinterface en dat de server actief en draaiende is.

:::info Toegang tot Configuratiebestand
Voor Palworld servers bij ZAP-Hosting kun je de relevante instellingen aanpassen via de game server administratie onder `Configs`.
:::

## Vind het Palworld Configuratiebestand

Om de Pal capture rate te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

### Open de Configs Sectie

Log eerst in op de ZAP-Hosting webinterface en open je Palworld game server. Ga in de game server administratie naar `Configs`.

Zoek daar naar het bestand met de naam:

```ini
PalWorldSettings.ini
```

### Vind de Juiste Instelling

In `PalWorldSettings.ini` slaat Palworld veel gameplay-instellingen op in de sectie `OptionSettings`. De instelling die relevant is voor Pal capture is:

```ini
PalCaptureRate=[your_value]
```

De standaardwaarde is meestal:

```ini
PalCaptureRate=1.000000
```

Een hogere waarde maakt het vangen van Pals makkelijker, terwijl een lagere waarde het moeilijker maakt.

## Pas de Pal Capture Rate aan

Nu je het juiste bestand hebt geopend, kun je de capture rate aanpassen naar jouw gewenste gameplay-balans.

### Wijzig de Configuratie Waarde

Zoek in `PalWorldSettings.ini` naar de regel met `PalCaptureRate` en vervang de waarde door jouw gewenste factor.

Bijvoorbeeld:

```ini
PalCaptureRate=2.000000
```

Dit zou de capture rate verdubbelen ten opzichte van de standaardinstelling.

### Voorbeeldwaarden

Gebruik de volgende tabel als algemene richtlijn:

| Waarde | Effect |
| --- | --- |
| `1.000000` | Standaard Pal capture rate |
| `1.500000` | Iets makkelijker vangen |
| `2.000000` | Merkbaar makkelijker vangen |
| `3.000000` | Veel makkelijker vangen |

:::tip Gebalanceerde Configuratie
Wil je makkelijker vangen zonder dat het gegarandeerd voelt? Dan is een waarde tussen `1.500000` en `2.000000` meestal een goede start.
:::

## Sla de Wijzigingen op en Pas ze toe

Na het aanpassen van de `PalCaptureRate` waarde, sla je de wijzigingen op in de ZAP-Hosting config editor.

### Herstart de Server

Palworld past deze instelling niet live toe. Na het opslaan van het bestand moet je je game server herstarten via de ZAP-Hosting server administratie zodat de nieuwe capture rate wordt geladen.

:::caution Herstart Vereist
Als je de server niet herstart na het bewerken van `PalWorldSettings.ini`, wordt de nieuwe capture rate niet actief.
:::

## Configuratie Referentie

De volgende tabel vat de gebruikte instelling samen:

| Bestand | Config key | Standaardwaarde | Doel | Herstart vereist |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | Bepaalt de Pal capture rate multiplier | Ja |

## Problemen Oplossen

Als de nieuwe capture rate niet lijkt te werken, controleer dan het volgende.

### Controleer het Formaat van de Instelling

Zorg dat de regel correct is geschreven en een numerieke waarde gebruikt, bijvoorbeeld:

```ini
PalCaptureRate=2.000000
```

Voorkom extra tekens of het wijzigen van andere regels in het bestand.

### Controleer of het Bestand is Opgeslagen

Controleer na het bewerken of de wijzigingen daadwerkelijk zijn opgeslagen in `PalWorldSettings.ini` via de `Configs` sectie.

### Herstart Nogmaals indien Nodig

Als de server niet correct is herstart na de wijziging, voer dan nogmaals een herstart uit via de server administratie.

:::note Server-Side Gameplay Instelling
`PalCaptureRate` is een server gameplay instelling, dus spelers merken de nieuwe rate pas na het herladen van de geüpdatete configuratie door de server.
:::

## Conclusion

Gefeliciteerd, je hebt de Pal capture rate op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂