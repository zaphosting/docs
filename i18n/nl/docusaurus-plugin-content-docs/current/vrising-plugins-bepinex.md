---
id: vrising-plugins-bepinex
title: "V Rising: Plugins installeren op server (BepInEx)"
description: "Ontdek hoe je je V Rising gameplay kunt verbeteren met BepInEx mods en je server kunt customizen → Leer het nu"
sidebar_label: Plugins installeren (BepInEx)
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Gearchiveerde Gids
Dit document is gearchiveerd. Documenten worden gearchiveerd als ze niet meer relevant, onjuist of verouderd zijn. Het is om de volgende reden gearchiveerd:

**Reden**: Het product V Rising met BepInEx werkt niet meer en is daarom uit de shop verwijderd. 
::::

## Introductie
BepInEx is een superpopulair open-source plugin- en modding-framework waarmee je mods kunt toevoegen aan games die normaal gesproken geen officiële modding ondersteunen. In deze gids laten we zien hoe je plugins installeert via BepInEx op V Rising.
<InlineVoucher />

## BepInEx Gameversie

Om **BepInEx** compatibele plugins te gebruiken in V Rising, moet je eerst de **V Rising BepInEx** gameversie op je server installeren. Dit kan makkelijk via onze gameserver game switcher functie. Meer info vind je in onze [Game Change](gameserver-gameswitch.md) gids.

## Plugins Uploaden

Begin met het zoeken naar mods die compatibel zijn met BepInEx en die je aan je server wilt toevoegen. Meestal staat er op de downloadpagina info over de compatibiliteit van de plugin.

:::important
Plugins moeten **BepInEx** compatibel zijn, anders werken ze niet!
:::

Als je een mod hebt gedownload, maak dan verbinding met je gameserver via FTP. Lees onze [Toegang via FTP](gameserver-ftpaccess.md) gids om te leren hoe je dit doet.

Met je FTP-client klaar, navigeer je naar de volgende map:
```
../vrising/BepInEx/plugins
```

In deze map upload je de mods die je hebt gedownload. Dit zijn meestal bestanden met de extensie `.dll`. In dit voorbeeld uploaden we een framework mod die handig is voor het maken van commands.

:::note
De server moet uitstaan voordat je mods toevoegt of wijzigt, anders kunnen je aanpassingen verloren gaan.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Server Starten

Als je de plugins hebt geüpload die je wilde, start je je server gewoon weer op.

:::info
Sommige plugins moeten ook client-side op je PC geïnstalleerd worden. Check de info op de plugin-website om te zien of dit nodig is.
:::

Je hebt nu succesvol nieuwe BepInEx plugins geïnstalleerd op je V Rising gameserver!

<InlineVoucher />