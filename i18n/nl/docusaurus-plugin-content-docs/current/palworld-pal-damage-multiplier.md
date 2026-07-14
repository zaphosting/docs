---
id: palworld-pal-damage-multiplier
title: "Palworld: Pal Damage Multiplier"
description: "Learn how to change the Palworld pal damage multiplier by editing Pal damage settings for attack and defense values on your server. -> Learn more now"
sidebar_label: Palworld: Pal Damage Multiplier
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stelt je in staat om aan te passen hoeveel schade je Pals aanrichten en ontvangen door de damage multiplier instellingen van de server te wijzigen. In deze gids leer je welk configuratiebestand je moet bewerken in de ZAP-Hosting interface, welke waarden je moet aanpassen en hoe je de nieuwe instellingen correct toepast.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zorg ervoor dat je toegang hebt tot je Palworld game server via het ZAP-Hosting game server beheerpaneel voordat je begint.

:::info Handmatige Configuratie Vereist
Deze setup wordt uitgevoerd door het handmatig bewerken van het Palworld configuratiebestand. Er is geen aparte in-game command nodig voor deze wijziging.
:::

## Open het juiste configuratiebestand

Om de Pal damage multiplier te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

Open in het ZAP-Hosting game server beheerpaneel de sectie `Configs` en zoek daar het bestand `PalWorldSettings.ini`. Dit bestand bevat de belangrijkste wereld- en gameplayconfiguraties voor je Palworld server.

:::note Locatie van de Configuratie
Het relevante bestand voor deze gids is `PalWorldSettings.ini`, beschikbaar via je game server beheer onder `Configs`.
:::

## Bewerk de Pal damage multiplier waarden

Zoek binnen `PalWorldSettings.ini` de sectie `OptionSettings`. De Pal damage multiplier instellingen worden als configuratiesleutels binnen deze sectie opgeslagen.

Je moet de volgende items aanpassen:

| Config key | Standaardwaarde | Doel |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | Bepaalt hoeveel schade je Pals aanrichten |
| `PalDamageRateDefense` | `1.000000` | Bepaalt hoeveel schade je Pals ontvangen |

### Voorbeeldconfiguratie

Als de sleutels al bestaan, wijzig dan hun waarden naar de gewenste multiplier. Als ze ontbreken, voeg ze dan toe binnen de `OptionSettings` sectie.

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### Wat de waarden betekenen

Gebruik het volgende gedrag als referentie bij het kiezen van je multiplierwaarden:

| Wijziging waarde | Effect |
| --- | --- |
| Hogere `PalDamageRateAttack` | Je Pals richten meer schade aan |
| Lagere `PalDamageRateAttack` | Je Pals richten minder schade aan |
| Hogere `PalDamageRateDefense` | Je Pals ontvangen minder gunstige verdedigingsbalans en nemen effectief schade volgens de verhoogde multiplier |
| Lagere `PalDamageRateDefense` | Je Pals ontvangen meer schade |

:::caution Controleer je multiplierwaarden zorgvuldig
Palworld serverinstellingen gebruiken numerieke multiplierwaarden. Voer alleen geldige decimale getallen in zoals `0.500000`, `1.000000` of `2.000000`. Ongeldige opmaak kan voorkomen dat de server de configuratie correct laadt.
:::

## Sla de wijzigingen op

Nadat je de waarden in `PalWorldSettings.ini` hebt aangepast, sla je het bestand op in de ZAP-Hosting configuratie-editor.

Als je de balans voor PvE of coöperatieve gameplay aanpast, is het aan te raden om eerst één multiplier tegelijk te wijzigen. Dit maakt het makkelijker om te testen hoeveel de schade-uitvoer of schade-ontvangst is veranderd.

:::tip Begin met kleine aanpassingen
Een kleine verhoging zoals `1.200000` voor `PalDamageRateAttack` is vaak makkelijker te balanceren dan een grote sprong zoals `3.000000`.
:::

## Herstart de server

Zodra je de bijgewerkte configuratie hebt opgeslagen, herstart je je Palworld server zodat de nieuwe damage multiplier instellingen worden geladen.

Er zijn geen extra console-commando’s nodig na het bewerken van het bestand. Een volledige serverherstart is voldoende om de wijzigingen toe te passen.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Extra commando’s uitvoeren | Nee |
| Server herstarten | Ja |

## Controleer de nieuwe schade-instellingen

Na het herstarten van de server, join je je Palworld server en test je gevechten met je Pals. Controleer of:

- je Pals de verwachte hoeveelheid schade aanrichten
- je Pals de verwachte hoeveelheid schade ontvangen
- de gameplaybalans nog steeds past bij je serverinstellingen

Als het resultaat te sterk of te zwak is, ga dan terug naar `PalWorldSettings.ini`, pas de multiplierwaarden opnieuw aan, sla het bestand op en herstart de server nogmaals.

## Conclusion

Gefeliciteerd, je hebt de Pal damage multiplier op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂