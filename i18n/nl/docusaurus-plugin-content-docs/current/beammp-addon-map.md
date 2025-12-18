---
id: beammp-addon-map
title: "BeamMP: Addon Map Installeren"
description: "Ontdek hoe je je BeamMP-server kunt verbeteren met custom map addons voor een betere multiplayer ervaring → Leer het nu"
sidebar_label: Addon Map Installeren
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

BeamNG.Drive heeft native modding-ondersteuning en een enorme community waarmee je de gameplay met je vrienden kunt uitbreiden en verbeteren. Omdat BeamMP simpelweg fungeert als een multiplayer mod, zouden de meeste map addons compatibel moeten zijn met je BeamMP-server. In deze gids leggen we uit hoe je een custom map addon installeert en activeert op je BeamMP-server.

<InlineVoucher />

## Voorbereiding

Om een addon map op je BeamMP-server te installeren, moet je verbinding maken via FTP. Als je hier niet bekend mee bent, raden we je aan om eerst de [Toegang via FTP](gameserver-ftpaccess.md) gids te bekijken.

Voordat je begint met installeren, moet je ook de map addons vinden die je op je server wilt zetten. We raden aan om te browsen op het [officiële BeamNG.Drive Forum](https://www.beamng.com/resources/categories/terrains-levels-maps.9/), waar een gigantische bibliotheek staat met mods en map addons gemaakt door de community.

:::tip
Omdat BeamMP een multiplayer mod is voor BeamNG.Drive, zouden de meeste map addons compatibel moeten zijn met je BeamMP-server. Toch kan het zijn dat sommige specifieke maps niet helemaal werken zoals verwacht, dus je moet elke map even testen.
:::

## Installatie

Zorg eerst dat je de addon map hebt gedownload die je op je server wilt zetten. Dit moet een `.zip` bestand zijn.

### Mapnaam Controleren

Voordat je verder gaat, is het belangrijk om zeker te weten dat je de juiste mapnaam gebruikt. Het `.zip` bestand dat je hebt gedownload heeft meestal de correcte naam, maar dat is niet altijd zo, dus dubbelcheck dit even.

Open het gedownloade `.zip` bestand. Zoek daarin de map `levels` en open deze, hier vind je de daadwerkelijke map.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Kopieer de exacte naam van de map addon folder die je hier vindt. Dit doe je door met rechts te klikken, `Eigenschappen` te kiezen en de gemarkeerde tekst te kopiëren met `CTRL + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Map Configureren

Nu je de mapnaam weet, moet je het configuratiebestand aanpassen om de actieve map te wijzigen.

#### Config override uitschakelen

Eerst moet je de standaard mapselectie in de instellingen uitzetten, want die zou anders je aanpassingen overschrijven.

Ga hiervoor naar de **Instellingen** sectie in het webinterface paneel van je game server.

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

Zet daar de "Map" instelling uit.

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

Vergeet niet onderaan de pagina op opslaan te klikken.

#### Map wijzigen in de config

Ga nu naar de **Configs** sectie in je webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Open het configuratiebestand `ServerConfig.toml` en zoek de regel:
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

Vervang deze waarde door `Map = "/levels/[jouw_mapnaam]/info.json"` met de mapnaam die je eerder hebt gekopieerd en sla het bestand op.

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
In zeldzame gevallen kan een map anders zijn opgebouwd. Als de map niet werkt na alle stappen, moet je misschien in plaats van `Map = "/levels/[jouw_mapnaam]/info.json"` deze pad gebruiken: `Map = "/levels/[jouw_mapnaam]/[jouw_mapnaam].mis"`
:::

:::tip
Je kunt altijd terug naar de standaard maps van het spel door de optie in de instellingen weer aan te zetten en een van de standaard maps te kiezen:
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### Map Uploaden

Als laatste stap upload je het eerder gedownloade `.zip` bestand met de map via FTP naar je BeamMP game server. Gebruik hiervoor onze [Toegang via FTP](gameserver-ftpaccess.md) gids als je hulp nodig hebt.

Navigeer in je FTP-client naar de volgende map:
```
../beammp/Resources/Client
```

Sleep het map addon `.zip` bestand hierheen om het te uploaden naar je server. Met de config aangepast en de map bestanden geüpload, is je map addon klaar voor gebruik.

## Conclusie

Als je alle stappen hebt gevolgd, start dan je BeamMP-server opnieuw op. Je hebt nu succesvol een addon map geïnstalleerd op je BeamMP game server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />