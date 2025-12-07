---
id: ats-server-modding
title: "ATS: Mods/DLC’s installeren op je ATS-server"
description: "Ontdek hoe je je American Truck Simulator-ervaring kunt verbeteren met mods en DLC’s voor zowel client als server gameplay → Leer het nu"
sidebar_label: Mods/DLC’s installeren
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

American Truck Simulator ondersteunt modding rechtstreeks via de Steam Workshop, ingebouwd in het spel. Zo kun je allerlei mods toevoegen aan je game én je server, naast de gekochte DLC’s. In deze gids leggen we uit hoe je mods installeert op je client en daarna op je ATS-server.

<InlineVoucher />

## Mods & DLC’s toevoegen

Eerst moet je de mods en DLC’s vinden en kiezen die je wilt gebruiken. Dit doe je in-game via de opties **Mod Manager** en **DLC Browser** in het hoofdmenu.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Via de optie **Mod Manager** in het hoofdmenu kun je makkelijk mods zoeken via de Steam Workshop.

Als je mods hebt geïnstalleerd, zorg dan dat je ze verplaatst naar de lijst **Active Mods** met de pijltjes naast elke mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Bevestig daarna de wijzigingen en start het spel op in singleplayer modus.

### DLC’s

Je kunt de DLC’s die je hebt gekocht op je account bekijken via de optie **DLC Browser** in het hoofdmenu.

Hier zie je alle DLC’s die je bezit en geïnstalleerd hebt op je client.

## Server Packages exporteren

Nu je de mods hebt geactiveerd en in-game bent, moet je je mods exporteren als server packages. Hiervoor moet je de console in-game openen, die standaard uitstaat.

Om de console aan te zetten, ga je naar deze map en open je het bestand `config.cfg`:
```
C:/Users/[jouw_gebruiker]/Documents/American Truck Simulator
```

Zoek in dit bestand de regel `uset g_developer "0"` en verander die naar `uset g_developer "1"` om de developer mode aan te zetten. Doe hetzelfde voor `uset g_console "0"` en verander die naar `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Start je game opnieuw op, en je kunt de console openen met een van deze toetsen, afhankelijk van je toetsenbord:
```
` OF ~ OF \
```

Typ in de console nu het volgende commando om de server packages te exporteren:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Er worden twee bestanden geëxporteerd naar je `Documents/American Truck Simulator` map: `server_packages.dat` en `server_packages.sii`. Deze bevatten info over je DLC’s/mods en heb je nodig voor de volgende stap.

## Server Packages uploaden

Met je geëxporteerde server packages moet je deze nu via FTP uploaden naar je ATS-server. Gebruik onze [FTP Access](gameserver-ftpaccess.md) gids als je hulp nodig hebt met verbinden.

Ga naar de hoofdmap **American Truck Simulator** op je server en upload beide server package-bestanden hiernaartoe. Bestaan ze al? Vervang ze dan gewoon.

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
Bij modden moeten de mods gesynchroniseerd zijn tussen client en server. Als je verbinding maakt met een server met mods die jij niet hebt, krijg je een melding om de ontbrekende mods te downloaden.
:::

Herstart je server om de mods automatisch te activeren en installeren. Gefeliciteerd, je hebt mods succesvol op je ATS-server geïnstalleerd!

<InlineVoucher />