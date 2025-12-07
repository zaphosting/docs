---
id: spaceengineers-addmods
title: "Space Engineers: Mods installeren"
description: "Ontdek hoe je veilig mods configureert en toevoegt aan je Space Engineers-server voor een gepersonaliseerde gameplay-ervaring → Leer het nu"
sidebar_label: Mods installeren
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Voorbereiding

Om mods toe te kunnen voegen aan een server, moet er een configbestand aangepast worden. Zorg ervoor dat je server vooraf gestopt is, zodat er geen problemen ontstaan bij het toepassen van de wijzigingen!

Om zeker te weten dat de juiste config wordt aangepast, moet je eerst de naam van de savegame achterhalen. Als deze niet aangepast is, staat deze standaard op "zap001". Check dit voor de zekerheid zoals hieronder beschreven:

Ga naar de instellingen van je server door in de linker lijst het item "Instellingen" te openen onder het tabblad "Instellingen".

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

De naam van de savegame kun je in het eerste veld op deze pagina bekijken of aanpassen. Onthoud deze naam goed, want hiermee open je straks het juiste configbestand.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

Voor deze handleiding is het ook een must om **Notepad++** geïnstalleerd te hebben, zodat je de stappen precies zo kunt uitvoeren!

## Mods uitzoeken

Er zijn heel veel mods te vinden in de Space Engineers Workshop. De workshop vind je [hier](https://steamcommunity.com/workshop/about/?appid=244850).

Heb je een toffe mod gevonden? Klik er dan op om alle details te zien. Vind je de mod leuk? Sla dan de mod-ID op. Die staat meestal vetgedrukt aan de zijkant of bovenin de URL-balk:

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## Configbestanden openen

Je kunt de serverbestanden op twee manieren aanpassen: via [FTP-toegang](gameserver-ftpaccess.md) of via de Config Editor in de webinterface.

In dit geval passen we de config handmatig aan via FTP, zodat je geen syntaxfouten maakt. Hoe je verbinding maakt via FTP staat uitgebreid beschreven in de link hierboven.

Als je verbonden bent via FTP, navigeer je naar de volgende map:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

Hier staan alle savegames die ooit op de server zijn aangemaakt. Om de config van de juiste savegame aan te passen, open je de bijbehorende map. In ons voorbeeld is dat "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

In deze map moet het sandbox-bestand aangepast worden. Open precies dit configbestand zoals op de screenshot te zien is!

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Mods toevoegen

Er is al een mod-gedeelte in de config, helemaal onderaan. Selecteer dit gedeelte met je muis en verwijder het. Voeg daarna de volgende inhoud toe:

`<Mods></Mods>`

Zet de cursor tussen de "&gt;" en "&lt;" en druk één keer op ENTER. Zo wordt de juiste syntax automatisch toegepast en kun je verder.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

Nu voegen we de eerste mod toe. Hiervoor gebruiken we een "ModItem", dat één mod voorstelt. Kopieer de volgende inhoud en plak die in de config, zoals te zien is in de GIF:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
Vervang hier 12345 door de mod-ID van jouw gekozen mod!
:::

Zoals je in de GIF ziet, herhaal je deze stappen voor elke mod die je wilt toevoegen. Als alle mods erin staan, sla je de config op met **CTRL+S** en sluit je het bestand. Start daarna je server gewoon weer op, de mods worden dan automatisch geïnstalleerd.

<InlineVoucher />