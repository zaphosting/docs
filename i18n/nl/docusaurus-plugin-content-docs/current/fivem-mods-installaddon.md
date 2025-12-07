---
id: fivem-mods-installaddon
title: "FiveM: Addon Carmods Installeren op je Server"
description: "Ontdek hoe je eenvoudig carmods voor FiveM downloadt en converteert om je game-ervaring te verbeteren met stap-voor-stap uitleg → Leer het nu"
sidebar_label: Addon Carmods Installeren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Verbinden via FTP

Eerst verbind je met je server via FTP, je kunt hiervoor onze [Toegang via FTP](gameserver-ftpaccess.md) gebruiken.

## Voorbereiding

Voor deze tutorial gebruiken we de [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest) tool, die het proces een stuk makkelijker maakt. Download hiervoor de "NConvert.zip" en "rpf2fivem.zip" bestanden uit de "Releases" sectie:

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

Pak nu eerst rpf2fivem uit in een lege map:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

Open daarna het NConvert zip-bestand en kopieer de "NConvert" map naar dezelfde map:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

Nu kunnen we `rpf2fivem.exe` openen!


## Mods Downloaden

Om mods te installeren via rpf2fivem moeten we directe links toevoegen, bijvoorbeeld van gta5-mods.com. Kies hier gewoon de carmod die je wilt en klik op "Download".

Klik vervolgens met de rechtermuisknop op de downloadknop en kies "Linkadres kopiëren". Dit plak je linksboven in rpf2fivem:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

Hier kun je een eigen resource naam invullen en op "Add to queue" klikken.

Wil je meerdere mods downloaden? Voeg ze dan op dezelfde manier toe, je kunt meerdere carmods tegelijk installeren:

## Mods Converteren

Als je lijst met mods compleet is, klik je gewoon op de "Start" knop.

:::info
Tip: Zorg dat 'compress/downsize textures' altijd aangevinkt is om texture fouten bij Carmods in FiveM te voorkomen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

De carmods worden nu gedownload en klaargemaakt voor FiveM.

## Resources Uploaden

Als rpf2fivem klaar is, vind je de carmods in de "rpf2fivem" map:

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

Upload deze nu simpelweg via [Resources Installeren](fivem-installresources.md). In de rpf2fivem map wordt ook een `servercfg.txt` aangemaakt met de benodigde entries om de carmods direct in je server.cfg te zetten. Kopieer deze entries gewoon naar je server.cfg.


Klaar! De Carmods zijn nu geïnstalleerd op je server en na een server restart kun je ze gebruiken.

<InlineVoucher />