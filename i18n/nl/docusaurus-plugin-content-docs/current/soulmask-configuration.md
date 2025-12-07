---
id: soulmask-configuration
title: "Soulmask: Serverconfiguratie"
description: "Ontdek hoe je de Soulmask-serverinstellingen kunt aanpassen en gameplayconfiguraties kunt optimaliseren voor een gepersonaliseerde game-ervaring → Leer nu meer"
sidebar_label: Serverconfiguratie
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Soulmask-servers bieden een breed scala aan configuratieparameters die je helemaal naar eigen wens kunt instellen. In deze gids duiken we in alle beschikbare configuratieopties en leggen we ze stuk voor stuk uit.

<InlineVoucher />

## Toegang tot je Configuratiebestand

Allereerst moet je toegang krijgen tot je configuratiebestanden om parameters te kunnen aanpassen. Je kunt je serverinstellingen via het webinterface aanpassen en je gameplay-instellingen via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

De belangrijkste manier om bij je serverconfiguratie te komen is door naar de **Instellingen** sectie te gaan in het webinterface van je game server en daar de juiste opties te zoeken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
De server moet gestopt zijn voordat je de config kunt aanpassen. Als je de config wijzigt en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

De beste manier om bij je gameplay-configuratiebestand te komen is via FTP. Ben je niet bekend met FTP? Check dan zeker onze [Toegang via FTP](gameserver-ftpaccess.md) gids.

</TabItem>
</Tabs>

## Serverconfiguratie-opties
In de volgende secties leggen we uit hoe je bij de configuratie-opties komt en bekijken we een aantal beschikbare instellingen voor zowel server- als gameplay-instellingen.

### Belangrijke Serverinstellingen

Op dit moment kun je serverinstellingen alleen aanpassen via de **Instellingen** sectie in het webinterface van je game server. Hier kun je de volgende opties instellen:

| Parameternaam        | Voorbeeld             | Beschrijving                                           |
| -------------------- | --------------------- | ----------------------------------------------------- | 
| Servernaam           | ZAP-Hosting Docs Test | Stel de naam van je server in                          |
| Game server wachtwoord | iLoveZAP!2024         | Stel een wachtwoord in voor je server, of laat leeg voor geen wachtwoord |
| Admin wachtwoord     | iLoveZAP!2024         | Stel een wachtwoord in voor Admin-toegang             |
| Gamemode             | PVE/PVP               | Kies of je game PVE of PVP moet zijn                   |

Als je klaar bent, vergeet dan niet op de opslaan-knop onderaan de sectie te klikken en je server te herstarten.

### Gameplay Configuratie-instellingen

Op dit moment kun je het configuratiebestand alleen via FTP bereiken. Stop je server voordat je het bestand aanpast, anders worden je wijzigingen waarschijnlijk ongedaan gemaakt.

Ga naar het volgende pad en open het **GameXishu.json** bestand:
```
../soulmask/WS/Saved/GameplaySettings
```

Dit bestand bevat een flinke hoeveelheid gameplay-configuratieopties die je naar wens kunt aanpassen.

Als je klaar bent met je aanpassingen, sla het bestand op en herstart je server. De volgende keer dat je server opstart, worden de door jou ingestelde instellingen gebruikt.

<InlineVoucher />