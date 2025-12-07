---
id: dods-fastdl
title: "Day of Defeat: Source: FastDL instellen"
description: "Ontdek hoe je game content downloads versnelt en serverbelasting vermindert met FastDL via ZAP-Hosting webspace → Leer het nu"
sidebar_label: FastDL
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Intro

FastDL (Fast Download) is een methode om custom content zoals maps, sounds of modellen via een externe webserver te leveren in plaats van via je game server zelf. Dit zorgt voor snellere downloads voor spelers en minder load op je server.

Om FastDL te gebruiken heb je toegang nodig tot een publieke HTTP-webserver. Een top optie hiervoor is een **ZAP-Hosting Webspace pakket**, perfect geschikt om game content te hosten. Deze gids legt uit hoe je FastDL instelt met ZAP webspace.

<InlineVoucher />

## Wat je nodig hebt

Je hebt een actieve Day of Defeat: Source server bij ZAP-Hosting nodig én een extra webspace pakket. FTP-toegang of toegang tot de File Manager moet beschikbaar zijn voor zowel je game server als je webspace.

Aan de game kant moeten de bestanden die je wilt verspreiden (zoals `.bsp` maps, sound files of modellen) al netjes georganiseerd zijn. Diezelfde structuur moet je ook op je webspace aanhouden om FastDL succesvol te laten werken.

## Webspace voorbereiden

Voor het beheren en uploaden van je FastDL bestanden raden we aan de **File Manager** te gebruiken die je vindt in het ZAP webspace paneel. Je opent ‘m direct via **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Maak in de root van je webspace een map aan met de naam `fastdl`. Maak daarin submappen zoals `maps`, `sound` of `models` aan, afhankelijk van welke content je wilt aanbieden. De mappenstructuur moet exact overeenkomen met die van je Day of Defeat: Source server.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Voordat je bestanden uploadt, zorg dat ze **gecomprimeerd zijn in het `.bz2` formaat** (bzip2). De meeste Source-engines verwachten dat bestanden zo worden geleverd. Een mapbestand `custom_map.bsp` moet je dus uploaden als `custom_map.bsp.bz2`.

:::info Comprimeren met 7-Zip
Je kunt tools zoals **7-Zip** gebruiken om je bestanden in `.bz2` te comprimeren. Klik met rechts op het bestand, kies **7-Zip > Toevoegen aan archief...**, selecteer `bzip2` als archiefformaat en bevestig.
:::

Na het uploaden van de gecomprimeerde bestanden in de juiste mappen, check je of **alle mappen en bestanden de juiste leesrechten hebben** zodat ze publiek toegankelijk zijn. In de File Manager kun je de rechten aanpassen.

Als alles goed staat, is je FastDL content bereikbaar via deze publieke URL:

```
https://[jouw-domeinnaam].zap.cloud/fastdl/
```

Test dit door de URL in je browser te openen en te kijken of je de bestanden kunt bereiken.

## Game server configureren

Open in het ZAP paneel onder game server beheer het `server.cfg` bestand via de **Configs** pagina en voeg de volgende regels toe:

```cfg
sv_downloadurl "https://[jouw-domeinnaam].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Zorg dat de FastDL URL precies overeenkomt met de structuur op je webspace. Sla het bestand op en herstart je game server om de instellingen toe te passen.

## Samenvatting

Met je eigen ZAP webspace kun je FastDL snel en betrouwbaar instellen. Zo lever je custom content razendsnel en soepel aan je spelers en verbeter je de ervaring op je Day of Defeat: Source server.

Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />