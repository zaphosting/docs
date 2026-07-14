---
id: palworld-increase-xp
title: "Palworld: XP Verhogen"
description: "Leer hoe je de XP in het Palworld-spel verhoogt door de Palworld-serverconfiguratie te bewerken en de XP-rate multiplier correct aan te passen. -> Leer nu meer"
sidebar_label: Palworld: XP Verhogen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld stelt je in staat om gameplay-multipliers aan te passen via de serverconfiguratie, waaronder de hoeveelheid XP die spelers verdienen. In deze gids leer je hoe je de XP-rate op je ZAP-Hosting Palworld-server verhoogt door het juiste configuratiebestand te bewerken en de wijzigingen correct toe te passen.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld-gameserver via de ZAP-Hosting webinterface en dat je toestemming hebt om de configuratiebestanden te bewerken.

:::info Toegang tot Configuratie Vereist
Je hebt toegang nodig tot de webadministratie van je server om configuratiebestanden te bewerken onder de sectie `Configs`. Als je geen toegang hebt tot de serveradministratie, controleer dan eerst je producttoegang in het ZAP-Hosting paneel.
:::

## Vind het configuratiebestand

Om de XP op je Palworld-server te verhogen, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting game server administratie:

1. Open je Palworld-server.
2. Ga naar de sectie `Configs`.
3. Open het bestand `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste gameplay-instellingen die door de Palworld dedicated server worden gebruikt, inclusief de XP-multiplier.

## Bewerk de XP-multiplier

De instelling die verantwoordelijk is voor XP-verdiensten heet `ExpRate`.

### Vind de juiste instelling

Open `PalWorldSettings.ini` en zoek naar de regel `OptionSettings` of de sectie waar gameplay-multipliers zijn gedefinieerd.

De relevante configuratie-invoer is:

```ini
ExpRate=1.000000
```

### Pas de waarde aan

Stel de waarde van `ExpRate` in op de multiplier die je wilt gebruiken.

| Config key | Standaardwaarde | Voorbeeldwaarde | Effect |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | Verdubbelde XP-verdiensten |
| `ExpRate` | `1.000000` | `3.000000` | Verdrievoudigde XP-verdiensten |

Om bijvoorbeeld dubbele XP in te schakelen, stel je in:

```ini
ExpRate=2.000000
```

Voor driedubbele XP, stel je in:

```ini
ExpRate=3.000000
```

:::tip Aanbevolen Waardeformaat
Palworld-serverinstellingen gebruiken meestal decimale waarden zoals `1.000000` of `2.000000`. Het gebruik van hetzelfde formaat houdt de configuratie consistent en makkelijker leesbaar.
:::

## Voorbeeldconfiguratie

Afhankelijk van de inhoud van je huidige bestand verschijnt de instelling meestal binnen het `OptionSettings`-blok. Bijvoorbeeld:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

Als `ExpRate` al aanwezig is, wijzig dan alleen de waarde. Als het ontbreekt, voeg dan `ExpRate=[jouw_waarde]` toe binnen het bestaande `OptionSettings=(...)`-blok.

:::caution Wees Voorzichtig met het Bewerken van het Bestaande OptionSettings-blok
Maak geen meerdere `OptionSettings`-vermeldingen aan tenzij je huidige configuratie dit specifiek vereist. In de meeste gevallen bewerk je alleen de bestaande regel `OptionSettings=(...)` en verander je daar de waarde van `ExpRate`.
:::

## Opslaan en de server herstarten

Na het aanpassen van de XP-multiplier:

1. Sla de wijzigingen op in `PalWorldSettings.ini`.
2. Herstart je Palworld-server via de ZAP-Hosting serveradministratie.

Een herstart is nodig omdat Palworld deze gameplay-instelling niet direct toepast terwijl de server al draait.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra console-commando’s uitvoeren | Nee |

:::note Geen Extra Commando’s Nodig
Voor deze instelling zijn normaal gesproken geen extra in-game of console-commando’s nodig. De nieuwe XP-rate wordt toegepast na het herstarten van de server.
:::

## Controleer de nieuwe XP-rate

Zodra de server weer online is, join je de server en voer je een actie uit die XP oplevert, zoals vijanden verslaan, Pals vangen of normale gameplay-activiteiten voltooien.

Als de XP-verdiensten niet lijken te veranderen:

- open `PalWorldSettings.ini` opnieuw
- controleer of `ExpRate` aanwezig is in het `OptionSettings`-blok
- verifieer dat de waarde correct is geschreven, bijvoorbeeld `2.000000`
- zorg dat de server volledig is herstart na het opslaan

:::danger Vermijd Ongeldige Configuratiesyntaxis
Als je per ongeluk komma’s, haakjes of andere waarden uit de regel `OptionSettings=(...)` verwijdert, kan de server de instelling negeren of de configuratie niet correct laden. Controleer altijd de volledige regel voordat je opslaat.
:::

## Conclusie

Gefeliciteerd, je hebt de XP-verhoging op je Palworld-server succesvol ingesteld. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂