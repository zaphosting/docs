---
id: palworld-max-guild-players
title: "Palworld: Max Guild Players"
description: "Learn how to change Palworld guild players limits by editing the max guild players setting on your server. -> Learn more now"
sidebar_label: Palworld: Max Guild Players
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld laat je bepalen hoeveel spelers er in één guild op jouw server kunnen zitten. In deze gids leer je hoe je handmatig de maximale guild spelerslimiet aanpast door het juiste configuratiebestand in jouw ZAP-Hosting game server administratie te bewerken.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Voordat je begint, zorg dat je toegang hebt tot de Palworld game server administratie in de ZAP-Hosting webinterface.

:::info Toegang tot Configuratie Vereist
Je hebt toegang nodig tot de Palworld server administratie en de sectie `Configs`, omdat deze instelling handmatig in het serverconfiguratiebestand aangepast moet worden.
:::

## Zoek het juiste configuratiebestand

Om de guild spelerslimiet te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In jouw ZAP-Hosting game server administratie:

1. Open je **Palworld** server
2. Ga naar **Configs**
3. Open het bestand met de naam `PalWorldSettings.ini`

Dit bestand bevat de belangrijkste gameplay configuratiewaarden voor jouw Palworld server, inclusief guild-gerelateerde instellingen.

## Bewerk de max guild players instelling

In `PalWorldSettings.ini` zoek je naar de configuratieregel `OptionSettings`. De guild spelerslimiet wordt geregeld door de sleutel `GuildPlayerMaxNum`.

### Configuratiewaarde

Gebruik de volgende instelling om het maximale aantal spelers per guild te bepalen:

```ini
GuildPlayerMaxNum=[your_value]
```

Vervang `[your_value]` door het aantal spelers dat je per guild wilt toestaan.

### Standaard- en voorbeeldwaarden

| Config key | Beschrijving | Standaardwaarde |
| --- | --- | --- |
| `GuildPlayerMaxNum` | Maximaal aantal spelers toegestaan in één guild | `20` |

Wil je bijvoorbeeld maximaal `30` spelers per guild toestaan, stel dan in:

```ini
GuildPlayerMaxNum=30
```

:::note Bewerk de Bestaande OptionSettings Regel
In Palworld worden serverinstellingen meestal opgeslagen in één enkele `OptionSettings=(...)` regel. Je moet meestal de bestaande `GuildPlayerMaxNum` waarde binnen die regel aanpassen in plaats van een tweede duplicaat toe te voegen.
:::

### Voorbeeldfragment

Je configuratie kan er ongeveer zo uitzien:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

Als je bestand al veel instellingen binnen `OptionSettings=(...)` bevat, wijzig dan alleen het deel `GuildPlayerMaxNum` en laat de andere waarden ongewijzigd.

:::caution Vermijd Dubbele Sleutels
Voeg `GuildPlayerMaxNum` niet meerdere keren toe in hetzelfde configuratieblok. Dubbele sleutels kunnen onverwacht gedrag veroorzaken of onduidelijk maken welke waarde de server gebruikt.
:::

## Sla de wijzigingen op en pas ze toe

Na het aanpassen van de waarde:

1. Sla de wijzigingen op in `PalWorldSettings.ini`
2. Herstart je Palworld server

Een herstart is nodig zodat de nieuwe guild spelerslimiet door de server wordt geladen.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra console commando | Geen geverifieerd commando vereist |

:::tip Herstart Vereist
De bijgewerkte max guild players waarde wordt niet direct toegepast terwijl de server draait. Je moet de server volledig herstarten nadat je de configuratie hebt opgeslagen.
:::

## Controleer de nieuwe guild limiet

Zodra de server opnieuw is gestart, zou de nieuwe guild grootte limiet actief moeten zijn voor spelers die guilds joinen of beheren op jouw Palworld server.

Als de wijziging niet lijkt te werken, controleer dan het volgende:

- bevestig dat je het juiste bestand hebt bewerkt: `PalWorldSettings.ini`
- bevestig dat `GuildPlayerMaxNum` correct is geschreven
- bevestig dat de waarde binnen de actieve `OptionSettings=(...)` configuratie staat
- bevestig dat de server herstart succesvol is afgerond

:::caution Configuratie Formatting
Palworld configuratiebestanden zijn gevoelig voor formatting. Als je per ongeluk komma’s, haakjes of andere bestaande waarden binnen `OptionSettings=(...)` verwijdert, kan de server de instelling negeren of niet correct laden.
:::

## Conclusion

Gefeliciteerd, je hebt de maximale guild spelerslimiet op jouw Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂