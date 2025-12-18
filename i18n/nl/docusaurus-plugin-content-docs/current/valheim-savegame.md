---
id: valheim-savegame
title: "Valheim: Savegames beheren op servers"
description: "Ontdek hoe je je Valheim savegames efficiënt beheert, downloadt en herstelt met de Savegame-Manager → Leer er nu meer over"
sidebar_label: Savegames beheren
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Savegames downloaden

:::info
Let op: Stop de server voordat je het savegame downloadt, zodat het actieve savegame wordt opgeslagen. Na het stoppen van de server verschijnt het savegame pas na het verversen van de pagina.
:::

Je kunt je savegame downloaden via de `Savegame-Manager` in het webinterface:

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

Klik hier simpelweg op de groene "Download" knop om je savegame te downloaden:

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
Let op, je moet zowel het `.db` **als** het `.fwl` bestand downloaden.
:::

Klaar! Je kunt deze backup nu voor andere doeleinden gebruiken of later weer uploaden.

## Savegame uploaden & activeren

Om je eigen savegames te uploaden, open je eerst de savegame manager.

Hier kun je je savegame eenvoudig uploaden via drag & drop, het zou er daarna zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
Let erop dat je savegame dezelfde naam heeft als toen het door het spel werd aangemaakt.
:::

In ons voorbeeld heten de backup bestanden `380622.fwl` en `380622.db`.

Vul nu bovenaan bij `Savegame (worlds)` de naam van de backup in:

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

Onder `ZAP Backups` zoeken we nu ons savegame:

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

Druk nu op de gele "Restore" knop bij beide bestanden en bevestig dit, dan wordt je savegame geladen.

Na het laden verschijnt er rechtsonder een melding:

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

Je kunt nu de server starten, het geüploade savegame is dan actief op de server.



## Autosaves

Helaas ondersteunt Valheim momenteel geen autosaves. Om je voortgang op te slaan, moet de server gestopt worden. Je kunt de Restart Planner in het webinterface gebruiken om je server automatisch op bepaalde tijden te herstarten:

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

Hier kun je eenvoudig een tijd toevoegen voor een dagelijkse of wekelijkse restart:

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

Na het opslaan van de restart kun je ook meerdere dagelijkse of wekelijkse restarts toevoegen.

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

Klaar! Je server zal nu op die specifieke tijden herstarten en het savegame wordt tijdens die restarts opgeslagen.

<InlineVoucher />