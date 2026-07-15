---
id: palworld-structure-damage-rate
title: "Palworld: Structure Damage Rate"
description: "Learn how to change Palworld structure damage and structure decay rates by editing the server configuration safely and correctly. -> Learn more now"
sidebar_label: "Structure Damage Rate"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld geeft je controle over hoeveel schade structuren oplopen en hoe snel ze na verloop van tijd vervallen. In deze gids leer je hoe je handmatig het juiste configuratiebestand in jouw ZAP-Hosting game server administratie aanpast en de nieuwe instellingen voor structuurschade toepast.



## Preparation

Voordat je begint, zorg ervoor dat je Palworld-server al geïnstalleerd is en dat je toegang hebt tot de webadministratie.

:::info Vereiste Toegang
Je hebt toegang nodig tot het ZAP-Hosting game server administratiepaneel en het onderdeel `Configs` van je Palworld-server.
:::

:::note Handmatige Configuratie
Deze setup wordt uitgevoerd door handmatig het Palworld-configuratiebestand te bewerken. De exacte instellingen worden in deze gids niet via een aparte one-click toggle aangepast.
:::

## Open het juiste configuratiebestand

Om structuurschade en verval aan te passen, moet je het bestand `PalWorldSettings.ini` bewerken.

In jouw ZAP-Hosting game server administratie:

1. Open je **Palworld** server.
2. Ga naar **Configs**.
3. Open het bestand `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste gameplay-configuratiewaarden voor je server, inclusief de multipliers die met structuren te maken hebben.

## Pas de structuurschade-instellingen aan

De relevante waarden staan in de serverinstellingen binnen `PalWorldSettings.ini`.

### Relevante configuratiesleutels

Gebruik de volgende instellingen om het gedrag van structuurschade te regelen:

| Config key | Beschrijving | Standaardwaarde |
| --- | --- | --- |
| `BuildObjectDamageRate` | Bepaalt hoeveel schade structuren oplopen | `1.0` |
| `BuildObjectDeteriorationDamageRate` | Bepaalt hoe snel structuren vervallen | `1.0` |

Een waarde van `1.0` is de normale standaard. Lagere waarden verminderen het effect, hogere waarden vergroten het.

### Voorbeeldconfiguratie

Afhankelijk van de inhoud van je huidige bestand, maken deze waarden meestal deel uit van de serveroptielijst in `PalWorldSettings.ini`.

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

Als je configuratie een gecombineerde optie-string gebruikt, zorg er dan voor dat je alleen de waarden aanpast en de omliggende syntax intact laat.

Bijvoorbeeld:

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution Syntax Ongewijzigd Laten
`PalWorldSettings.ini` kan veel instellingen bevatten in één enkele `OptionSettings=(...)` regel. Als dit bij jouw server het geval is, verwijder dan geen komma’s, haakjes of andere bestaande entries bij het bewerken.
:::

## Kies geschikte waarden

Je kunt de multipliers aanpassen op basis van hoe duurzaam je wilt dat door spelers gebouwde structuren zijn.

### Structuurschade multiplier

`BuildObjectDamageRate` bepaalt hoeveel directe schade een structuur ontvangt.

| Waarde | Effect |
| --- | --- |
| `0.5` | Structuren krijgen de helft van de schade |
| `1.0` | Standaard structuurschade |
| `2.0` | Structuren krijgen dubbele schade |

### Structuurverval multiplier

`BuildObjectDeteriorationDamageRate` bepaalt hoe snel structuren na verloop van tijd achteruitgaan.

| Waarde | Effect |
| --- | --- |
| `0.1` | Zeer langzaam verval |
| `1.0` | Standaard vervalsnelheid |
| `2.0` | Sneller verval |

:::tip Aanbevolen Minimale Vervalwaarde
Het wordt aanbevolen om `BuildObjectDeteriorationDamageRate` op `0.1` of hoger te houden. Zeer laag of uitgeschakeld verval kan ervoor zorgen dat ongebruikte structuren langer blijven staan, wat op termijn de schoonmaak en serverprestaties negatief kan beïnvloeden.
:::

## Sla het bestand op en herstart de server

Nadat je de waarden in `PalWorldSettings.ini` hebt aangepast, sla je het bestand op in de `Configs` sectie.

Je moet daarna de Palworld-server herstarten zodat de nieuwe structuurschade-instellingen worden geladen.

### Vereiste actie na bewerking

| Actie | Vereist |
| --- | --- |
| `PalWorldSettings.ini` opslaan | Ja |
| Server herstarten | Ja |
| Extra console-commando | Geen bevestigd commando vereist |

:::info Herstart Vereist
Wijzigingen aan `BuildObjectDamageRate` en `BuildObjectDeteriorationDamageRate` worden niet betrouwbaar toegepast totdat de server opnieuw is gestart.
:::

## Controleer de wijzigingen

Zodra de server weer online is, join je je Palworld-server en test je het nieuwe gedrag.

Je kunt de wijzigingen controleren door te kijken of:

- structuren meer of minder directe schade oplopen dan voorheen
- verlaten of blootgestelde structuren vervallen volgens de verwachte snelheid

Als de wijzigingen niet lijken te werken, open dan opnieuw `PalWorldSettings.ini` en controleer of:

- de instellingen exact zijn geschreven als `BuildObjectDamageRate` en `BuildObjectDeteriorationDamageRate`
- de waarden in de juiste sectie of `OptionSettings` regel staan
- de server is herstart na het opslaan

## Conclusion

Gefeliciteerd, je hebt succesvol de structuurschade- en vervalsnelheden op je Palworld-server aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂