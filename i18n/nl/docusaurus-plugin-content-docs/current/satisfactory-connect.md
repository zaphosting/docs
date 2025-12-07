---
id: satisfactory-connect
title: "Satisfactory: Verbinden met de Server"
description: "Ontdek hoe je effectief verbinding maakt met en je Satisfactory Server beheert voor een soepele game-ervaring → Leer het nu"
sidebar_label: Verbinden met de Server
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="Hoe maak je een Satisfactory Server aan bij ZAP en upload je je eigen savegame" description="Snap je het beter als je dingen in actie ziet? Wij fixen het! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

:::info
Gebruik je al een QWERTY-toetsenbord? Doe deze stappen dan niet, druk gewoon op CTRL + SHIFT + L en open de Console met ~
:::

Om verbinding te maken met je Satisfactory Server moet je de console van het spel openen, dat kan op twee manieren.

<InlineVoucher />

## Console openen

### Wisselen van toetsenbordindeling
Je wisselt je toetsenbordindeling makkelijk in een paar stappen.
Start je Satisfactory tot je in het hoofdmenu bent.
Druk nu op `CTRL + Shift` en je toetsenbordindeling zou nu veranderd moeten zijn naar `EN`.
Check makkelijk of het gelukt is door naar je desktop te gaan en te kijken of er rechtsonder in je taakbalk `EN` staat.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Als het gelukt is, ga je terug naar het spel, druk nu op `CTRL + SHIFT + L`
Druk nu op `^` op je toetsenbord, de console zou nu moeten openen.

### De toets aanpassen die de console opent
Druk op `Windows-toets + R` of zoek in je startmenu naar `Uitvoeren`
Plak dit pad erin:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

en druk op enter.

Open nu het bestand Input.ini met een editor naar keuze (bijvoorbeeld kladblok)

:::info
Als het bestand er nog niet is, maak het dan gewoon aan.
:::

Voeg deze tekst toe aan je bestand:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Sla op en start het spel opnieuw op - je kunt nu de console openen met `F6`

## Verbinden met je Satisfactory Gameserver
Kopieer het IP-adres van je serverdashboard:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

Open de console in het spel, zoals hierboven beschreven

Typ nu `open IP-Adres-van-Je-Server` erin.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

en druk op enter.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

Je bent nu verbonden met je Satisfactory server!

## De HUB
De HUB staat al in de wereld, je kunt hem kapot maken door op `F` te drukken en hem op een andere plek neerzetten.
Je vindt de HUB makkelijk door de markering te volgen.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
De server slaat je voortgang elke 5 minuten op, je ziet ze in de savegame manager in je serverdashboard.
Hij bewaart altijd de laatste 6 saves (30 minuten) voortgang.

<InlineVoucher />