---
id: ets2-server-modding
title: "ETS2: Mods/DLC’s installeren op je ETS2-server"
description: "Ontdek hoe je je Euro Truck Simulator 2-ervaring kunt upgraden met mods en DLC’s voor nog meer gameplezier → Lees snel verder"
sidebar_label: Mods/DLC’s installeren
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Euro Truck Simulator 2 ondersteunt modding rechtstreeks via de Steam Workshop, ingebouwd in de game. Zo kun je allerlei mods toevoegen aan je game en server, naast de DLC’s die je hebt gekocht. In deze guide leggen we uit hoe je mods installeert op je client en daarna op je ETS2-server.

<InlineVoucher />

## Mods & DLC’s toevoegen

Eerst moet je de mods en DLC’s vinden en kiezen die je wilt gebruiken. Dit doe je in de game via de opties **Mod Manager** en **DLC Browser** in het hoofdmenu.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Mods vind je via de **Mod Manager** in het hoofdmenu. Hiermee kun je makkelijk mods zoeken via de Steam Workshop.

Heb je mods geïnstalleerd? Zorg dan dat je ze met de pijltjes naast elke mod naar de lijst **Active Mods** verplaatst.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Bevestig daarna je wijzigingen en start de game op in singleplayer.

### DLC’s

Je kunt de DLC’s die je hebt gekocht bekijken via de **DLC Browser** in het hoofdmenu.

Hier zie je alle DLC’s die je bezit en op je client hebt geïnstalleerd.

## Server Packages exporteren

Nu je mods actief zijn en je in de game bent, moet je je mods exporteren als server packages. Hiervoor moet je de console in de game openen, die standaard uitstaat.

Om de console aan te zetten, ga je naar deze map en open je het bestand `config.cfg`:
```
C:/Users/[jouw_gebruiker]/Documents/Euro Truck Simulator 2
```

Zoek in dit bestand de regel `uset g_developer "0"` en verander die naar `uset g_developer "1"` om de developer mode aan te zetten. Doe hetzelfde met `uset g_console "0"` en verander die naar `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Start de game opnieuw op, en je kunt de console openen met een van deze toetsen, afhankelijk van je toetsenbord:
```
` OF ~ OF \
```

Typ nu in de console het volgende commando om de server packages te exporteren:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Er worden nu twee bestanden geëxporteerd naar je `Documents/Euro Truck Simulator 2` map: `server_packages.dat` en `server_packages.sii`. Deze bevatten info over je DLC’s/mods en heb je straks nodig.

## Server Packages uploaden

Met de geëxporteerde server packages moet je ze nu via FTP uploaden naar je ETS2-server. Gebruik onze [FTP Access](gameserver-ftpaccess.md) guide als je hulp nodig hebt met verbinden.

Ga naar de hoofdmap **Euro Truck Simulator 2** op je server en upload beide server package-bestanden hierheen. Bestaan ze al? Vervang ze dan gewoon.

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
Bij modden moeten mods gesynchroniseerd zijn tussen client en server. Als je verbinding maakt met een server met mods die jij niet hebt, krijg je een melding om de ontbrekende mods te downloaden.
:::

Herstart je server om de mods automatisch te activeren en installeren. Gefeliciteerd, je hebt mods succesvol op je ETS2-server geïnstalleerd!

<InlineVoucher />