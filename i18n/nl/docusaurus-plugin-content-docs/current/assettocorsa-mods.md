---
id: assettocorsa-mods
title: "Assetto Corsa: Mods installeren op een server"
description: "Ontdek hoe je jouw Assetto Corsa-server instelt en aanpast voor de beste game-ervaring → Leer het nu"
sidebar_label: Mods Installeren
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Verbinden met FTP

Voordat we de server kunnen configureren, moet de [Toegang via FTP](gameserver-ftpaccess.md) ingesteld zijn:

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

Als dit is ingesteld, kun je nu verbinden en de servermap openen:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Voorbereiding

Open eerst de Assetto Corsa-map, dit doe je door Steam te openen en met rechts te klikken op "Assetto Corsa" in je spellenlijst.

Open nu "Lokale bestanden" en open de lokale gamebestanden:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Open vervolgens de "server" map, daar vind je het bestand "acServerManager", open dit bestand.



## Auto's instellen

Ga nu naar het tabblad "Cars / Entry List", hier kun je nieuwe auto's toevoegen:


Om auto's te activeren, moet het vinkje links aangezet zijn

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

In het midden zie je de auto's die op de grid geplaatst kunnen worden, hier kies je de kleuren van de auto's die in de grid moeten staan:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
Om meerdere auto's te selecteren, kun je meerdere vinkjes zetten om verschillende auto's in het midden toe te voegen.

Let erop dat alle autoplaceringen gevuld zijn en dat je niet meer auto's instelt dan beschikbare plekken.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Config uploaden

Sla nu de Config op met de knop "Save" en exporteer hem met de knop "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Kies hier een vrije map waar de configdata opgeslagen wordt.

Sluit nu de AC Server Manager af en open de map waar je de Configs naartoe hebt geëxporteerd.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

Deze Configs kun je nu via Drag&Drop kopiëren naar de "cfg" map van je game server.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Server Content uploaden

Nu moeten we de content voor de server genereren, zodat Car & Map Mods op de server geladen worden. Klik hiervoor eerst onderaan op "Update Server Content":

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

Dit proces kan een paar minuten duren, alle maps & auto's worden nu omgezet naar serverbestanden.

:::info
Na dit proces kan er een "Could not update" melding verschijnen, dit is geen probleem.
:::

Open nu de "Server" map waar de AcServerManager staat, daar vind je een "Content" map. Upload deze via Drag&Drop naar je Assetto Corsa-server en overschrijf de oude "Content" map:

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

Na het uploaden van de content zijn de carmods geïnstalleerd en actief na een server restart.

<InlineVoucher />