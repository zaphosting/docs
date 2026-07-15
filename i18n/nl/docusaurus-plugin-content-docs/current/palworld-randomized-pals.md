---
id: palworld-randomized-pals
title: "Palworld: Randomized Pals"
description: "Learn how to enable randomized Pals in Palworld by editing your server configuration, including randomizer type and seed settings for the Palworld game world. -> Learn more now"
sidebar_label: "Randomized Pals"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld bevat randomizer-instellingen die bepalen hoe Pals in je gamewereld verschijnen. In deze gids leer je hoe je handmatig randomized Pals inschakelt en configureert op je ZAP-Hosting Palworld-server door het juiste configuratiebestand aan te passen.



## Preparation

Zorg ervoor dat je toegang hebt tot je Palworld-gameserver in de ZAP-Hosting webinterface en dat je toestemming hebt om serverconfiguratiebestanden te bewerken.

:::info Toegang tot configuratie vereist
Je hebt toegang nodig tot de webadministratie van je server om de sectie `Configs` te openen en de Palworld-configuratiebestanden te bewerken.
:::

## Open het juiste configuratiebestand

Om randomized Pals te configureren, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting game server administratie:

1. Open je **Palworld** server.
2. Ga naar **Configs**.
3. Open het bestand met de naam `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste gameplay-configuratie voor je Palworld-server, inclusief randomizer-opties.

## Configureer randomized Pals

De randomizer-instellingen staan als keys in `PalWorldSettings.ini`. Je moet het bestaande instellingenblok vinden en de relevante waarden handmatig aanpassen.

### Overzicht randomizer-instellingen

Gebruik de volgende configuratiesleutels voor randomized Pal-spawns:

| Config key | Toegestane waarden | Standaard | Doel |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | Bepaalt of random Pal-spawns uitgeschakeld zijn of gerandomized per regio |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | Zet volledig willekeurige wilde Pal-levels aan bij `True` |
| `RandomizerSeed` | `[your_seed_value]` of leeg | `""` | Definieert de seed die wordt gebruikt bij het genereren van de wereld |

:::caution Dedicated Server Compatibiliteit
De waarde `All` is gemeld als incompatibel met Palworld dedicated servers. Gebruik alleen ondersteunde waarden zoals `None` of `Region`.
:::

### Voorbeeldconfiguratie

Voeg de volgende waarden toe of pas ze aan in je `PalWorldSettings.ini` bestand indien nodig:

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

Vervang `zaphosting` door je eigen seedwaarde als je een specifieke randomized setup wilt. Een seed zorgt ervoor dat hetzelfde randomisatiepatroon wordt gebruikt bij het genereren van de wereld.

### Wat elke instelling doet

#### `RandomizerType`

Deze instelling bepaalt of Pal-spawns gerandomized worden.

- `None` schakelt randomisatie uit
- `Region` schakelt regionale randomisatie voor Pal-spawns in

Wil je randomized Pals in je Palworld wereldkaart, zet deze waarde dan op `Region`.

#### `bIsRandomizerPalLevelRandom`

Deze instelling regelt de levels van wilde Pals.

- `False` houdt normaal levelgedrag aan
- `True` zet volledig willekeurige levels van wilde Pals aan

Dit maakt het Palworld-spel een stuk onvoorspelbaarder, vooral in de vroege progressie.

#### `RandomizerSeed`

Deze optionele instelling definieert de randomisatie-seed die wordt gebruikt tijdens het genereren van de wereld.

Voorbeeld:

```ini
RandomizerSeed="[your_seed_value]"
```

Vervang `[your_seed_value]` door elke gewenste tekst of nummer als seed.

:::note Seed Gedrag
De randomizer-seed wordt toegepast bij het genereren van de wereld. Als je `RandomizerSeed` later aanpast in een bestaande wereld, wordt de wijziging niet toegepast tenzij je de wereld reset of een nieuwe start.
:::

## Sla de wijzigingen op en pas ze toe

Sla na het bewerken het bestand op in de ZAP-Hosting `Configs` sectie.

Start daarna je Palworld-server opnieuw op zodat de nieuwe configuratie geladen wordt.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra console-commando’s uitvoeren | Nee |
| Wereld resetten voor seed-wijzigingen op bestaande save | Alleen als `RandomizerSeed` is aangepast |

:::tip Wanneer een nieuwe wereld starten
Als je randomisatie voor het eerst inschakelt, vooral met een aangepaste `RandomizerSeed`, is het het beste om een verse wereld te gebruiken zodat de instellingen correct worden toegepast.
:::

## Controleer het resultaat

Na de herstart, join je server en controleer of Pal-spawns zich gedragen volgens je gekozen randomizer-instellingen.

Controleer of:

- de randomized regionale spawns actief zijn
- de levels van wilde Pals gerandomized zijn als dat aanstaat
- het verwachte wereldgedrag overeenkomt met je ingestelde seed in een nieuwe wereld

Werken de wijzigingen niet? Open dan `PalWorldSettings.ini` opnieuw en controleer of:

- de keys correct zijn ingevoerd
- de waarden de juiste hoofdlettergebruik hebben zoals `True` en `False`
- de server is herstart na opslaan
- er een nieuwe wereld is gestart als je de seed hebt aangepast

## Problemen oplossen

### Randomized Pals verschijnen niet

Controleer of `RandomizerType=Region` in `PalWorldSettings.ini` staat. Staat het nog op `None`, dan is randomisatie uitgeschakeld.

### Seed-wijzigingen werken niet

Dit betekent meestal dat de wereld al gegenereerd was voordat de nieuwe seed werd toegevoegd. Je moet dan de wereld resetten of een nieuwe maken om de seed toe te passen.

### Serverproblemen na aanpassen randomizer-instellingen

Als je een niet-ondersteunde waarde hebt gebruikt, zoals `All`, zet de instelling dan terug naar een ondersteunde waarde zoals `None` of `Region`, sla op en herstart de server opnieuw.

:::danger Vermijd niet-ondersteunde randomizer-waarden
Gebruik `RandomizerType=All` niet op een dedicated server tenzij de officiële Palworld serverdocumentatie dit ondersteunt. Deze instelling is momenteel bekend als incompatibel in dedicated serveromgevingen.
:::

## Conclusion

Gefeliciteerd, je hebt randomized Pals succesvol geconfigureerd op je Palworld-server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂