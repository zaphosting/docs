---
id: minecraft-pluginuploader
title: "Minecraft: Server met ZAP-Hosting Plugin Uploader"
description: "Ontdek hoe je Minecraft server plugins makkelijk beheert voor Spigot of Bukkit servers en je gameplay verbetert → Leer het nu"
sidebar_label: Plugin Uploader
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugin Uploader

Klik op je Minecraft server in het serveroverzicht. Selecteer daarna het tabblad Plugins, dat je vindt onder het submenu Instellingen.

:::info
Zorg dat je huidige game Spigot of Bukkit is. De plugin uploader is alleen daar beschikbaar.
:::

## Plugins Installeren/Uploaden

Er zijn twee manieren om een plugin op je Minecraft server te installeren.

- Je kunt een plugin kiezen uit onze vooraf samengestelde selectie (indien beschikbaar)
- Je kunt je eigen plugins uploaden via drag & drop

### Plugins uit de lijst

Selecteer je gewenste plugin uit de lijst "Alle plugins" en klik op de groene knop "Installeren". De installatie kan even duren, afhankelijk van de grootte van de plugin.

![](https://screensaver01.zap-hosting.com/index.php/s/dxrtY8pQwmtfEP9/preview)

### Upload je eigen Plugin

Sleep het gewenste plugin .jar bestand in het vak dat op de afbeelding is aangegeven. Het is ook mogelijk om meerdere plugins tegelijk in dit gebied te slepen en te installeren.

![](https://screensaver01.zap-hosting.com/index.php/s/fM2a4AeyspaQzYd/preview)

Als je de plugin in het uploadveld hebt gesleept, duurt het even voordat de plugin op de server staat.

Om de plugin te kunnen gebruiken, moet je je server herladen met het commando `/rl` of `/reload` via je game server console (of de hele server herstarten).

:::info
In zeldzame gevallen moet de server opnieuw worden gestart zodat de plugin soepel draait.
:::


## Plugin Verwijderen

![](https://screensaver01.zap-hosting.com/index.php/s/dKaeJr8M3jzgMBS/preview)

Om een plugin te verwijderen, klik je op de rode prullenbak naast de plugin.

## Plugin Deactiveren

Klik op de groene knop met het slotje achter een geïnstalleerde plugin. Als de knop van groen naar oranje verandert, heb je de plugin gedeactiveerd. Andersom activeer je de plugin weer. Het pluginbestand blijft na deactivering op de server staan, maar wordt niet meer door de game server geladen.

:::info
Na het deactiveren van je plugin moet je de server herladen voor de wijziging. Gebruik hiervoor `/rl` of `/reload` in je game server console of in-game.
:::

## Veelvoorkomende Problemen

**Mijn plugin kan niet geüpload worden via het "Drag & Drop" gebied.**

Oplossingen:

- Je plugin is mogelijk groter dan 5 MB en daardoor niet geschikt voor upload via de webinterface. Gebruik dan een FTP-client.
- De FTP-rechten kunnen problemen geven. Klik in de webinterface op het FTP-tabblad en druk op de knop FTP-rechten resetten. Daarna zou je weer plugins moeten kunnen uploaden.
- Je plugin is mogelijk ongeldig en bevat geen geldige plugin.yml. Gebruik in dat geval een FTP-client als alternatief.
- Soms wordt de lijst niet opnieuw geladen. Vernieuw de pagina met F5 of een andere manier.

### Mijn plugin kan niet meer verwijderd worden.

:::info
Neem in dat geval contact op met de support.
:::

### Mijn plugin kan niet gedeactiveerd/geactiveerd worden.

Oplossingen:

- Staat je plugin nog op de server? Controleer dit door op de knop Vernieuwen te klikken aan de rand van de tabel. Dit synchroniseert de getoonde lijst met de plugins op de server. Alleen plugins die echt op de server staan worden dan getoond.

### Plugins ontbreken in het Alle Plugins overzicht.

Oplossingen:

- Er is mogelijk geen actuele versie van deze plugin voor de geïnstalleerde versie van je game server. Vraag een plugin aan via de blauwe knop Plugin ontbreekt?.

![](https://screensaver01.zap-hosting.com/index.php/s/DeMjH2s74geaLPq/preview)

### Het verwijderen/installeren uit de vooraf samengestelde lijst werkt niet.

Oplossingen:

- Vernieuw de pagina om het probleem op te lossen.

### Er wordt een plugin getoond die helemaal niet op de server staat.

Oplossingen:

- Verwijder de plugin-entry simpelweg door op de uninstall knop te klikken.
- Of probeer op de Synchroniseren knop te klikken.

<InlineVoucher />