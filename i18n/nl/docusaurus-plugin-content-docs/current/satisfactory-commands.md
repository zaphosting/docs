---
id: satisfactory-commands
title: "Satisfactory: Console Commands"
description: "Ontdek hoe je je Satisfactory gameplay optimaliseert met essentiële console commands en keybind tips → Leer het nu"
sidebar_label: Console Commands
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Satisfactory heeft een breed scala aan handige commands waarmee je client-instellingen kunt aanpassen. Op deze pagina vind je een overzicht van de populairste en meest gebruikte commands door spelers in Satisfactory.

<InlineVoucher />

## De console openen
De console gebruiken in Satisfactory is super simpel, druk gewoon op de ` toets (backtick, te vinden boven de TAB-toets) om te wisselen tussen console zichtbaar of niet. De console zal telkens sluiten, openen als klein commandovenster onderin, of volledig uitklappen.

:::info
Werkt de backtick-toets niet? Volg dan de stappen in de onderstaande subsectie om een nieuwe keybind in te stellen en te activeren.
:::

### Kan je de console niet openen?
Soms werkt de standaard backtick-toets niet vanwege regionale toetsenborden. Dan moet je een nieuwe keybind instellen. Sluit Satisfactory eerst af als het nog openstaat.

Druk op `Windows-toets + R` of zoek in je startmenu naar `Uitvoeren`. Plak vervolgens het volgende pad erin:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Open het bestand `Input.ini` met een teksteditor (zoals Kladblok).

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

Plak vervolgens deze regel helemaal onderaan:

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

Sla het bestand op en start je game opnieuw. Nu kun je de console openen met `F6` als keybind.

## Console Commands

In de tabel hieronder vind je de command zelf, de mogelijke waarden (indien van toepassing) en een korte uitleg zodat het duidelijk is wat het doet.

Wil je de volledige lijst met commands zien? Typ dan `?` in de console. Er verschijnt dan een zwevende lijst met alle commands. Navigeer door deze lijst met de pijltjestoetsen `OMHOOG` en `OMLAAG`.

Hieronder zie je een voorbeeld van het gebruik van `?` om alle commands te bekijken.

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
Alle commands die op deze pagina genoemd worden zijn voor vanilla Satisfactory.
:::

| Command Syntax                  | Mogelijke Waarden | Beschrijving | 
| ----------------------- | ---------- | --------- | 
| ?      | -          | Toont de volledige lijst met commands         | 
| Stat FPS      | -          | Zet de ingebouwde FPS-teller in- of uit         | 
| Stat UNIT      | -          | Toont een display met frametijd, game data, draw time en andere stats         | 
| t.MaxFPS "maxfps"      | Integer (bijv. 120)          | Stelt de maximale FPS van je game in         | 
| r.ScreenPercentage "waarde"      | Integer (standaard 100)          | Verandert de resolutieschaal van de wereldweergave (niet de UI)         | 
| r.ViewDistanceScale "waarde"      | Integer (standaard 1)          | Past de renderafstand aan voor objecten zoals rotsen en bomen         | 
| Suicide      | -          | Laat je eigen speler sterven         | 
| FOV "waarde"      | Integer (bijv. 90)          | Stelt het gezichtsveld (Field of View) in         | 
| r.Atmosphere "1 of 0"      | true (1)/false (0)          | Zet de atmosfeer aan of uit in de game        | 
| r.Fog "1 of 0"      | true (1)/false (0)          | Zet de mist aan of uit in de game         | 
| Gamma "waarde"      | Integer (standaard 50)          | Stelt de helderheid van je game in         | 

Voor een uitgebreide lijst met commands, check zeker [de Satisfactory wiki](https://satisfactory.fandom.com/wiki/Console) waar ook meer technische commands diepgaand worden uitgelegd.

<InlineVoucher />