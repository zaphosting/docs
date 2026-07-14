---
id: palworld-max-dropped-items
title: "Palworld: Max Dropped Items"
description: "Learn how to change dropped items limits and item despawn settings on your Palworld server by editing the correct config values. -> Learn more now"
sidebar_label: Palworld: Max Dropped Items
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stelt je in staat om te bepalen hoeveel gedropte items er in je wereld kunnen bestaan en hoe lang deze items blijven liggen voordat ze verdwijnen. In deze gids leer je hoe je het juiste configuratiebestand in de ZAP-Hosting interface bewerkt, de instellingen voor gedropte items aanpast en de wijzigingen veilig toepast.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Voordat je begint, zorg ervoor dat je toegang hebt tot je Palworld gameserver in de ZAP-Hosting webinterface en dat je toestemming hebt om de configuratiebestanden te bewerken.

:::info Handmatige Configuratie Vereist
Deze setup wordt handmatig uitgevoerd door het bewerken van de Palworld serverconfiguratie. Het benodigde bestand is toegankelijk via je gameserverbeheer onder `Configs`.
:::

## Open het Palworld Configuratiebestand

Om de limiet voor gedropte items te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In het ZAP-Hosting gameserverbeheer:

1. Open je Palworld server
2. Navigeer naar `Configs`
3. Open het bestand `PalWorldSettings.ini`

Dit bestand bevat de belangrijkste gameplay-configuratie voor je Palworld server, inclusief het gedrag van gedropte items.

## Wijzig de Instellingen voor Gedropte Items

De instellingen voor gedropte items worden geconfigureerd via invoer in `PalWorldSettings.ini`. Je moet de relevante waarden aanpassen in de actieve instellingenregel of sectie van het bestand.

### Relevante Configuratiesleutels

Gebruik de volgende configuratiesleutels om gedropte items te beheren:

| Config key | Standaardwaarde | Beschrijving |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | Maximale aantal gedropte items dat tegelijk in de wereld kan bestaan |
| `DropItemAliveMaxHours` | `1.0` | Tijd in uren voordat gedropte items automatisch verdwijnen |

### Voorbeeldconfiguratie

Afhankelijk van de inhoud van je huidige bestand, maken deze waarden meestal deel uit van de Palworld optie-instellingen. Bijvoorbeeld:

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

Als deze sleutels al bestaan in je `OptionSettings` invoer, wijzig dan alleen de waarden. Bijvoorbeeld:

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

In dit voorbeeld:

- `DropItemMaxNum=2000` beperkt de wereld tot `2000` gedropte items
- `DropItemAliveMaxHours=0.500000` zorgt ervoor dat gedropte items verdwijnen na `0,5` uur, oftewel `30` minuten

:::note Waardeformaat
Palworld serverinstellingen gebruiken vaak decimale waarden met meerdere nullen achter de komma, zoals `1.000000`. Houd waar mogelijk de bestaande formatteringsstijl in je bestand aan.
:::

## Kies Geschikte Waarden

De juiste waarden hangen af van je spelersaantal, serveractiviteit en lootgeneratie.

### Aanbevolen Gebruiksscenario's

| Scenario | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| Kleine private server | `3000` | `1.000000` |
| Drukke multiplayer server | `2000` | `0.500000` |
| Performance-georiënteerde setup | `1000` tot `1500` | `0.250000` tot `0.500000` |

### Prestatieoverwegingen

Lagere limieten voor gedropte items kunnen de serverprestaties verbeteren, vooral als:

- veel spelers tegelijk actief zijn
- je wereld een groot aantal items genereert
- spelers vaak farmen, bouwen of loot op de grond achterlaten

:::tip Verbeter de prestaties met lagere itemlimieten
Merk je lag of verminderde serverresponsiviteit? Het verlagen van zowel het maximum aantal gedropte items als de despawntimer kan helpen om de wereld opgeruimd te houden en de stabiliteit te verbeteren.
:::

:::caution Vermijd extreem lage waarden
Als je deze waarden te laag instelt, kunnen spelers merken dat items te snel verdwijnen of dat de limiet voor gedropte loot sneller wordt bereikt dan verwacht. Test wijzigingen daarom zorgvuldig na het toepassen.
:::

## Sla de Wijzigingen Op en Pas ze Toe

Na het bewerken van `PalWorldSettings.ini`, sla je het bestand op in de ZAP-Hosting interface.

Start vervolgens je Palworld server opnieuw op zodat de nieuwe instellingen voor gedropte items worden geladen.

| Actie | Vereist |
| --- | --- |
| Sla `PalWorldSettings.ini` op | Ja |
| Herstart de server | Ja |
| Extra consolecommando | Nee |

:::info Herstart Vereist
Wijzigingen in `PalWorldSettings.ini` worden pas actief na een herstart van de Palworld server.
:::

## Controleer de Nieuwe Instellingen

Na de herstart, join je server en observeer je hoe gedropte items zich gedragen tijdens normaal spel.

Controleer of:

- het aantal gedropte items wordt beheerst zoals verwacht
- items de bedoelde tijd op de grond blijven liggen
- de serverprestaties verbeteren na het verlagen van itemaantal of levensduur

Pas indien nodig de waarden in `PalWorldSettings.ini` verder aan.

## Conclusion

Gefeliciteerd, je hebt succesvol de maximale gedropte items en despawntimer op je Palworld server geconfigureerd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂