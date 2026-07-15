---
id: palworld-enable-raids
title: "Palworld: Raids inschakelen"
description: "Leer hoe je raids op je Palworld-server aan- of uitzet door de juiste configuratie-instelling voor indringer-aanvallen te bewerken. -> Leer nu meer"
sidebar_label: "Raids inschakelen"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld raids zijn aanvallen van indringer-vijanden die spelersbases op je server kunnen aanvallen. In deze gids leer je hoe je raids aan- of uitzet door handmatig het juiste configuratiebestand te bewerken in de ZAP-Hosting game server administratie.



## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld game server via de ZAP-Hosting webinterface en dat je toestemming hebt om serverconfiguratiebestanden te bewerken.

:::info Handmatige Configuratie Vereist
Deze instelling wordt handmatig aangepast door het Palworld serverconfiguratiebestand te bewerken onder **Configs** in je game server administratie. Na het opslaan van je wijzigingen moet je de server herstarten om de nieuwe instelling actief te maken.
:::

## Vind het Juiste Configuratiebestand

Om raids aan- of uit te zetten, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting game server administratie:

1. Open je **Palworld** game server.
2. Ga naar **Configs**.
3. Open het bestand met de naam `PalWorldSettings.ini`.

Dit bestand bevat de belangrijkste gameplay-configuratie voor je Palworld server, inclusief de instelling die bepaalt of raids aanstaan.

## Bewerk de Raid-instelling

Zoek in `PalWorldSettings.ini` de sectie `OptionSettings`. De relevante configuratiesleutel is:

```ini
bEnableInvaderEnemy=True
```

Deze instelling bepaalt of indringer-vijand raids actief zijn op de server.

### Raids inschakelen

Wil je raids aanzetten, zet dan de waarde op `True`:

```ini
bEnableInvaderEnemy=True
```

Met deze waarde kunnen er periodiek vijandelijke aanvallen op spelersbases plaatsvinden tijdens het spelen.

### Raids uitschakelen

Wil je raids uitzetten, zet dan de waarde op `False`:

```ini
bEnableInvaderEnemy=False
```

Dit schakelt indringer-aanvallen volledig uit, wat zorgt voor een rustigere bouwervaring en mogelijk iets minder serverbelasting.

## Configuratie Referentie

Gebruik de volgende tabel als snelle referentie voor de raid-instelling:

| Configbestand | Configsleutel | Waarde | Effect |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | Schakelt raids en indringer-aanvallen in |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | Schakelt alle raids en indringer-aanvallen uit |

:::note Standaard Gedrag
De standaardinstelling van een Palworld server is meestal `bEnableInvaderEnemy=True`, wat betekent dat raids aanstaan tenzij je dit handmatig wijzigt.
:::

## Wijzigingen Opslaan en Toepassen

Na het aanpassen van de waarde in `PalWorldSettings.ini`, sla je het bestand op in de ZAP-Hosting **Configs** sectie.

Daarna moet je je Palworld server herstarten zodat de nieuwe configuratie geladen wordt.

### Server herstarten

Gebruik de herstartfunctie in je ZAP-Hosting game server administratie nadat je het bestand hebt opgeslagen.

:::caution Herstart Vereist
Als je de server niet herstart, wordt de gewijzigde raid-instelling mogelijk niet toegepast. Alleen het bestand bewerken is niet genoeg.
:::

## Controleer de Instelling

Na de herstart is je nieuwe raid-configuratie actief.

- Staat `bEnableInvaderEnemy=True`, dan zijn raids ingeschakeld.
- Staat `bEnableInvaderEnemy=False`, dan zijn raids uitgeschakeld.

Als de instelling niet lijkt te werken, open dan `PalWorldSettings.ini` opnieuw en controleer of de waarde correct is opgeslagen zonder formatteerfouten.

:::tip Rustig Bases Bouwen
Raids uitschakelen kan handig zijn als je je wilt richten op verkennen, bases bouwen of een ontspannen coöperatieve ervaring zonder periodieke vijandelijke aanvallen.
:::

## Conclusie

Gefeliciteerd, je hebt succesvol raids aan- of uitgezet op je Palworld server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂