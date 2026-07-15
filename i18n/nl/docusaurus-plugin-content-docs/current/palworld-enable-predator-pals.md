---
id: palworld-enable-predator-pals
title: "Palworld: Predator Pals inschakelen"
description: "Leer hoe je predator pals aan- of uitzet op je Palworld-server, problemen met het niet spawnen van predator pals oplost en de juiste instelling handmatig configureert. -> Leer nu meer"
sidebar_label: Palworld: Predator Pals inschakelen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

*Predator Pals* zijn krachtige boss-achtige Pals die overal in de wereld van Palworld kunnen spawnen. In deze gids leer je hoe je predator pals aan- of uitzet op je ZAP-Hosting Palworld-server door het juiste configuratiebestand handmatig te bewerken.



## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld-gameserver in de ZAP-Hosting webinterface en dat je de rechten hebt om de configuratiebestanden te beheren.

:::info Toegang tot configuratiebestand
Voor deze setup moet je je serverconfiguratie handmatig aanpassen via de **Configs** sectie in je game server beheer.
:::

## Open de Palworld-configuratie

Om te wijzigen of predator pals kunnen spawnen, moet je het bestand `PalWorldSettings.ini` bewerken.

### Vind het juiste bestand in de ZAP-interface

Open eerst je Palworld-gameserver in de ZAP-Hosting webinterface. Ga vervolgens naar de **Configs** sectie van je serverbeheer en open het bestand `PalWorldSettings.ini`.

Dit is het hoofdconfiguratiebestand voor gameplay-gerelateerde serverinstellingen, inclusief het gedrag van predator boss pals.

:::note Handmatige aanpassing vereist
Deze instelling moet handmatig in het configuratiebestand worden aangepast. Als je interface geen aparte schakelaar voor deze optie toont, is het direct bewerken van `PalWorldSettings.ini` de juiste methode.
:::

## Bewerk de Predator Pals-instelling

Zoek in `PalWorldSettings.ini` naar de sectie `OptionSettings`. De relevante configuratiesleutel is `EnablePredatorBossPal`.

### Configuratiewaarde

Gebruik een van de volgende waarden, afhankelijk van wat je wilt bereiken:

| Instelling | Waarde | Resultaat |
| --- | --- | --- |
| Predator pals inschakelen | `True` | Predator boss Pals kunnen in de wereld spawnen |
| Predator pals uitschakelen | `False` | Predator boss Pals zullen niet spawnen in de wereld |

### Voorbeeld van een invoer

Als de instelling al bestaat, wijzig dan de waarde. Als deze ontbreekt, voeg hem dan toe binnen de `OptionSettings` configuratielijst.

```ini
EnablePredatorBossPal=True
```

Om predator pals uit te schakelen, gebruik je:

```ini
EnablePredatorBossPal=False
```

:::tip Controleer eerst de bestaande syntax
Palworld serverinstellingen staan vaak als onderdeel van een langere `OptionSettings` regel in `PalWorldSettings.ini`. Als je bestand deze structuur al bevat, voeg dan `EnablePredatorBossPal=True` of `EnablePredatorBossPal=False` toe of wijzig dit binnen die bestaande instellingenlijst in plaats van een aparte, niet-gerelateerde sectie te maken.
:::

## Sla de wijzigingen op en pas ze toe

Sla na het bewerken het bestand op in de **Configs** sectie.

### Herstart de server

Start daarna je Palworld-server opnieuw op zodat de nieuwe instelling correct wordt geladen.

| Actie | Vereist |
| --- | --- |
| `PalWorldSettings.ini` opslaan | Ja |
| Server herstarten | Ja |
| Extra consolecommando | Nee |

:::caution Herstart vereist
De nieuwe predator pals-instelling wordt pas toegepast nadat je server opnieuw is gestart. Als predator pals na de wijziging niet spawnen, controleer dan of het bestand correct is opgeslagen en of de herstart van de server succesvol is afgerond.
:::

## Controleer de instelling

Na de herstart, join je server en controleer je of predator pals zich gedragen zoals verwacht.

Als je ze hebt ingeschakeld en predator pals spawnen niet, controleer dan opnieuw de invoer in `PalWorldSettings.ini` en zorg dat de waarde exact `True` of `False` is. Controleer ook of de instelling correct binnen de bestaande serverconfiguratiesyntax staat.

:::note Spawn-gedrag
Deze instelling bepaalt of predator boss Pals mogen spawnen in de wereld. Het biedt geen kaart met predator pals-locaties, verandert geen individuele spawnpunten, en garandeert geen directe ontmoetingen op een specifieke plek.
:::

## Configuratieoverzicht

| Bestand | Locatie in ZAP-Hosting | Sleutel | Mogelijke waarden | Standaardgedrag | Herstart vereist |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | Game server beheer → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | Ja |

## Conclusie

Gefeliciteerd, je hebt predator pals succesvol aan- of uitgezet op je Palworld-server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂