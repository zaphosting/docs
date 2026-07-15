---
id: palworld-hunger-and-stamina
title: "Palworld: Honger en Uithoudingsvermogen"
description: "Leer hoe je de hongergevoeligheid en uithoudingsvermogen van spelers en Pals in Palworld aanpast door je serverconfiguratie te bewerken. -> Leer nu meer"
sidebar_label: Palworld: Honger en Uithoudingsvermogen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld geeft je controle over hoe snel honger en uithoudingsvermogen afnemen voor zowel spelers als Pals. In deze gids leer je hoe je het juiste serverconfiguratiebestand in de ZAP-Hosting webinterface bewerkt en veilige aangepaste afnames instelt.

## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld gameserver in de ZAP-Hosting game server administratie.

:::info Toegang tot Configuratie Vereist
Je hebt toegang nodig tot het serverbeheer paneel en de sectie `Configs` om de Palworld configuratiebestanden handmatig te kunnen bewerken.
:::

## Open het Palworld Configuratiebestand

Om het gedrag van honger en uithoudingsvermogen aan te passen, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting game server administratie:

1. Open je Palworld server.
2. Ga naar de sectie `Configs`.
3. Open het bestand `PalWorldSettings.ini`.



:::note Bestand voor Gameplay Multipliers
De instellingen voor honger en uithoudingsvermogen staan in `PalWorldSettings.ini`. Deze waarden maken meestal deel uit van de hoofdoptiestring die door de dedicated server wordt gebruikt.
:::

## Pas Honger- en Uithoudingswaarden Aan

Zoek in `PalWorldSettings.ini` de gameplay-instellingen die je serveroptiewaarden bevatten. Je moet de volgende configuratiesleutels toevoegen of aanpassen.

:::caution Belangrijke Spelling in Palworld
Palworld gebruikt de spelling `Decreace` in deze configuratie-items. Dit is bewust zo in het serverconfiguratieformaat, dus je moet de sleutels exact gebruiken zoals hieronder weergegeven.
:::

### Beschikbare Configuratiesleutels

| Config sleutel | Beschrijving | Standaardwaarde |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | Regelt de snelheid van hongervermindering bij spelers | `1.0` |
| `PlayerStaminaDecreaceRate` | Regelt de snelheid van uithoudingsvermindering bij spelers | `1.0` |
| `PalStomachDecreaceRate` | Regelt de snelheid van hongervermindering bij Pals | `1.0` |
| `PalStaminaDecreaceRate` | Regelt de snelheid van uithoudingsvermindering bij Pals | `1.0` |

### Hoe de Waarden Werken

Lagere waarden verminderen hoe snel honger of uithoudingsvermogen afneemt.

| Waarde | Effect |
| --- | --- |
| `1.0` | Standaard afnamesnelheid |
| `0.5` | Halve afnamesnelheid |
| `0.0` | Schakelt afname volledig uit |

:::tip Gebalanceerde Instellingen Kiezen
Wil je een relaxtere survival-ervaring zonder de mechaniek helemaal te verwijderen? Dan is `0.5` een praktische startwaarde voor zowel honger als uithoudingsvermogen.
:::

## Voorbeeldconfiguratie

Voeg de volgende waarden toe of pas ze aan in `PalWorldSettings.ini` afhankelijk van de gameplay-ervaring die je wilt:

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

Dit voorbeeld halveert de snelheid waarmee honger en uithoudingsvermogen afnemen voor zowel spelers als Pals.

Wil je honger en uithoudingsvermogen helemaal uitschakelen, gebruik dan:

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note Plaatsing van Instellingen
Afhankelijk van hoe jouw `PalWorldSettings.ini` is opgebouwd, moeten deze waarden mogelijk binnen de bestaande optielijst worden opgenomen in plaats van als losse regels. Als je bestand al een lange `OptionSettings`-regel bevat, zorg er dan voor dat je de bestaande opmaak behoudt en alleen de relevante sleutels wijzigt of toevoegt.
:::

## Opslaan en Server Herstarten

Na het bewerken van het bestand:

1. Sla de wijzigingen in `PalWorldSettings.ini` op.
2. Herstart je Palworld server via de ZAP-Hosting game server administratie.

Een herstart is nodig voordat de nieuwe honger- en uithoudingsinstellingen actief worden.

:::caution Herstart Vereist
Als je de server niet herstart, worden de bijgewerkte configuratiewaarden niet door de game server geladen.
:::

## Controleer de Wijzigingen In-Game

Zodra de server weer online is, join je server en test je de nieuwe instellingen.

### Waarop te Controleren

- Of de honger van spelers langzamer afneemt
- Of het uithoudingsvermogen van spelers langer meegaat tijdens beweging en acties
- Of de honger van Pals afneemt volgens de verwachte snelheid
- Of het uithoudingsverbruik van Pals overeenkomt met je ingestelde waarden

Als de waarden niet lijken te werken, open dan `PalWorldSettings.ini` opnieuw en controleer of:

- de config sleutels exact juist gespeld zijn
- de waarden geldige decimale getallen zijn zoals `1.0`, `0.5` of `0.0`
- de instellingen correct zijn opgeslagen
- de server volledig is herstart na het bewerken

## Conclusie

Gefeliciteerd, je hebt de hongergevoeligheid en uithoudingsverbruik op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂