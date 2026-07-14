---
id: palworld-enable-fast-travel
title: "Palworld: Fast Travel Inschakelen"
description: "Leer hoe je fast travel op je Palworld-server configureert, inclusief fast travel alleen vanaf bases en handmatige config-aanpassingen. -> Leer nu meer"
sidebar_label: Palworld: Fast Travel Inschakelen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld geeft je controle over hoe spelers fast travel gebruiken op je server via de hoofdserverconfiguratie. In deze gids leer je hoe je het juiste configbestand in de ZAP-Hosting interface bewerkt, de fast travel-instellingen aanpast en de wijzigingen correct toepast.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld-gameserver in de ZAP-Hosting webinterface en dat je toestemming hebt om de configuratiebestanden te bewerken.

:::info Handmatige Configuratie Vereist
Deze setup wordt uitgevoerd door handmatig het Palworld-serverconfiguratiebestand te bewerken. Je kunt het benodigde bestand bereiken via je game server administratie onder `Configs`.
:::

## Vind het Configuratiebestand

Om het fast travel-gedrag aan te passen, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting game server administratie:

1. Open je Palworld-server.
2. Ga naar `Configs`.
3. Open het bestand `PalWorldSettings.ini`.

Dit bestand bevat de gameplay-gerelateerde serverinstellingen, inclusief fast travel-opties.

:::note Locatie van Configuratie
Afhankelijk van de huidige panelindeling wordt het bestand beheerd via het `Configs`-gedeelte in je serveradministratie. Als het exacte onderliggende pad niet zichtbaar is in de interface, kun je de benodigde waarden nog steeds veilig direct in `PalWorldSettings.ini` bewerken.
:::

## Begrijp de Fast Travel Instellingen

Palworld biedt twee relevante configuratiesleutels voor fast travel-gedrag.

| Config sleutel | Waardetype | Standaardwaarde | Functie |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | Schakelt fast travel volledig in of uit |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | Beperkt fast travel zodat spelers alleen tussen bases kunnen reizen |

Deze waarden maken deel uit van de optie-string in `PalWorldSettings.ini`.

:::tip Kies de Juiste Setup
Wil je een meer meeslepende reiservaring en meer verkenning? Schakel dan fast travel helemaal uit. Wil je reizen beschikbaar houden maar de bewegingsvrijheid beperken? Dan is fast travel alleen tussen bases meestal de beste keuze.
:::

## Bewerk de Fast Travel Waarden

Open `PalWorldSettings.ini` en zoek de sectie `OptionSettings=`. In Palworld worden veel serverinstellingen als komma-gescheiden waarden in deze regel opgeslagen.

### Normale Fast Travel Inschakelen

Om standaard fast travel toe te staan, zorg je dat de volgende waarde aanwezig is:

```ini
bEnableFastTravel=True
```

Wil je dat spelers alle normale fast travel-opties kunnen gebruiken, zorg dan ook dat deze waarde zo staat:

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### Alle Fast Travel Uitschakelen

Om fast travel volledig uit te schakelen, stel je in:

```ini
bEnableFastTravel=False
```

Als dit uitstaat, moeten spelers handmatig door de wereld reizen.

### Fast Travel Alleen Tussen Bases Toestaan

Wil je fast travel alleen tussen bases toestaan, gebruik dan deze combinatie:

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

Deze setup wordt vaak gebruikt op PvP-servers omdat het beperkte reizen toestaat zonder onbeperkte bewegingsvrijheid.

:::caution Huidige Syntax Niet Veranderen
Verwijder geen andere bestaande waarden uit de `OptionSettings=`-regel tenzij je die bewust wilt aanpassen. Palworld slaat veel instellingen op in één komma-gescheiden regel, dus een verkeerde opmaak kan ervoor zorgen dat instellingen niet geladen worden.
:::

## Voorbeeldconfiguratie

Hieronder een voorbeeld van hoe het relevante deel van de configuratie eruit kan zien in `PalWorldSettings.ini`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

Vervang de fast travel-waarden in je bestaande configuratie volgens de gewenste setup.

:::note Bestaande Serverconfiguraties
Je `OptionSettings=`-regel bevat meestal veel meer waarden dan in het voorbeeld hierboven. Je hoeft alleen `bEnableFastTravel` en `bEnableFastTravelOnlyBaseCamp` aan te passen en de rest van de regel te behouden.
:::

## Aanbevolen Configuraties

Gebruik de volgende combinaties afhankelijk van het type server dat je wilt draaien:

| Serverstijl | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | Resultaat |
| --- | --- | --- | --- |
| Standaard gameplay | `True` | `False` | Volledige fast travel ingeschakeld |
| Verkenningsgericht | `False` | `False` | Alle fast travel uitgeschakeld |
| PvP of beperkte reizen | `True` | `True` | Fast travel alleen tussen bases |

## Wijzigingen Toepassen

Na het opslaan van je wijzigingen in `PalWorldSettings.ini` moet je de server herstarten zodat de nieuwe instellingen geladen worden.

### Server Herstarten

Gebruik de herstartfunctie in je ZAP-Hosting game server administratie nadat je het bestand hebt opgeslagen.

Normaal zijn geen extra in-game of console-commando’s nodig. De nieuwe fast travel-configuratie wordt toegepast bij het opnieuw opstarten van de server.

:::info Herstart Vereist
Wijzigingen in `PalWorldSettings.ini` worden niet betrouwbaar toegepast totdat de Palworld-server opnieuw is gestart.
:::

## Resultaat Controleren

Zodra de server weer online is, join je de server en test je het fast travel-gedrag in de game.

Controleer of:

- volledige fast travel werkt als ingeschakeld
- geen fast travel-opties beschikbaar zijn als uitgeschakeld
- alleen reizen tussen bases werkt als base-only travel is ingeschakeld

:::tip Problemen met Instellingen
Werkt de instelling niet? Open dan `PalWorldSettings.ini` opnieuw en controleer op opmaakfouten in de `OptionSettings=`-regel, zoals ontbrekende komma’s, dubbele sleutels of ongeldige `True` / `False` waarden.
:::

## Conclusie

Gefeliciteerd, je hebt fast travel succesvol ingeschakeld of geconfigureerd op je Palworld-server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂