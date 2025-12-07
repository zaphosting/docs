---
id: hl2-fastdl
title: "Half-Life 2: FastDL instellen"
description: "Ontdek hoe je game content downloads versnelt en serverbelasting verlaagt met FastDL via ZAP-Hosting webspace → Leer het nu"
sidebar_label: FastDL
services:
  - gameserver-hl2
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie

FastDL (Fast Download) is een methode om custom content zoals maps, sounds of modellen via een externe webserver te leveren in plaats van via de game server zelf. Dit zorgt voor snellere downloads voor spelers en minder belasting op de server.

Om FastDL te gebruiken heb je toegang nodig tot een publieke HTTP-webserver. Een top optie hiervoor is een **ZAP-Hosting Webspace pakket**, perfect geschikt om game content te hosten. Deze gids legt uit hoe je FastDL instelt met ZAP webspace.

<InlineVoucher />

## Vereisten

Je hebt een actieve Half-Life 2 server nodig die gehost wordt door ZAP-Hosting, plus een extra webspace pakket. FTP-toegang of toegang tot de File Manager moet beschikbaar zijn voor zowel de game server als de webspace.

Aan de game kant moeten de bestanden die je wilt verspreiden (zoals `.bsp` maps, sound files of modellen) al netjes georganiseerd zijn. Diezelfde mappenstructuur moet je ook op de webspace aanhouden om FastDL succesvol te laten werken.

## Webspace voorbereiden

Voor het beheren en uploaden van je FastDL-bestanden raden we aan om de **File Manager** te gebruiken die je vindt in het ZAP webspace paneel. Je opent ‘m direct via **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Maak in de root directory van je webspace een map aan met de naam `fastdl`. Maak daarin submappen zoals `maps`, `sound` of `models` aan, afhankelijk van welke content je wilt aanbieden. De mappenstructuur moet exact overeenkomen met die van je Half-Life 2 server.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Voordat je bestanden uploadt, zorg dat ze **gecomprimeerd zijn in het `.bz2` formaat** (bzip2). De meeste Source-engines verwachten bestanden in dit formaat. Bijvoorbeeld, een mapbestand `custom_map.bsp` moet je uploaden als `custom_map.bsp.bz2`.

:::info Comprimeren met 7-Zip
Om je bestanden klaar te maken voor FastDL kun je tools zoals **7-Zip** gebruiken om ze te comprimeren naar het `.bz2` formaat. Klik met rechts op het bestand, kies **7-Zip > Toevoegen aan archief...**, selecteer `bzip2` als archiefformaat en bevestig.
:::

Nadat je de gecomprimeerde bestanden in de juiste mappen hebt geüpload, zorg je dat **alle mappen en bestanden de juiste leesrechten hebben** zodat ze publiek toegankelijk zijn. In de File Manager kun je de permissies aanpassen.

Als je bestanden geüpload en de rechten goed staan, is je FastDL content bereikbaar via deze publieke URL:

```
https://[jouw-domeinnaam].zap.cloud/fastdl/
```

Test dit door de URL in je browser te openen en te checken of je de bestanden kunt zien.

## Game server configureren

Open in de ZAP interface onder game server beheer het `server.cfg` bestand via de **Configs** pagina en voeg de volgende regels toe:

```cfg
sv_downloadurl "https://[jouw-domeinnaam].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Zorg dat de FastDL URL precies overeenkomt met de structuur op je webspace. Sla het bestand op en herstart je game server om de instellingen te activeren.

## Conclusie

Met je eigen ZAP webspace kun je FastDL snel en betrouwbaar instellen. Zo lever je custom content razendsnel en efficiënt aan je spelers en verbeter je de ervaring op je Half-Life 2 server.

Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />