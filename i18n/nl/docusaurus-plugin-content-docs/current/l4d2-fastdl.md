---
id: l4d2-fastdl
title: "Left 4 Dead 2: FastDL instellen"
description: "Ontdek hoe je Left 4 Dead 2 content optimaliseert met FastDL via ZAP-Hosting webspace voor snellere downloads en minder serverbelasting → Leer het nu"
sidebar_label: FastDL
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Intro

FastDL (Fast Download) is een manier om custom content zoals maps, sounds of modellen via een externe webserver te leveren in plaats van via je game server zelf. Dit zorgt voor snellere downloads voor spelers en minder load op je server.

Om FastDL te gebruiken heb je toegang nodig tot een publieke HTTP webserver. Een top optie hiervoor is een **ZAP-Hosting Webspace pakket**, perfect geschikt om game content te hosten. In deze gids leggen we uit hoe je FastDL instelt met ZAP webspace.

<InlineVoucher />

## Wat heb je nodig?

Je hebt een actieve Left 4 Dead 2 server bij ZAP-Hosting nodig en een extra webspace pakket. FTP-toegang of toegang tot de File Manager moet beschikbaar zijn voor zowel je game server als je webspace.

Aan de game kant moeten de bestanden die je wilt verspreiden (zoals `.bsp` maps, sound files of modellen) al netjes georganiseerd zijn. Diezelfde structuur moet je ook op je webspace aanhouden om FastDL succesvol te laten werken.

## Webspace voorbereiden

Voor het beheren en uploaden van je FastDL bestanden raden we aan de **File Manager** te gebruiken die je in het ZAP webspace paneel vindt. Je opent ‘m via **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Maak in de root van je webspace een map aan met de naam `fastdl`. Maak daarin submappen zoals `maps`, `sound` of `models` aan, afhankelijk van welke content je wilt aanbieden. De mappenstructuur moet precies hetzelfde zijn als die op je Left 4 Dead 2 server.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Voordat je bestanden uploadt, zorg dat ze **gecomprimeerd zijn in het `.bz2` formaat** (bzip2). De meeste Source-engines verwachten bestanden in dit formaat. Bijvoorbeeld, een map bestand `custom_map.bsp` moet je uploaden als `custom_map.bsp.bz2`.

:::info Comprimeren met 7-Zip
Je kunt tools zoals **7-Zip** gebruiken om je bestanden te comprimeren naar `.bz2`. Klik met rechts op het bestand, kies **7-Zip > Toevoegen aan archief...**, selecteer `bzip2` als archiefformaat en bevestig.
:::

Nadat je de gecomprimeerde bestanden in de juiste mappen hebt gezet, check je of **alle mappen en bestanden de juiste leesrechten hebben** zodat ze publiek toegankelijk zijn. In de File Manager kun je de permissies aanpassen.

Als alles geüpload en ingesteld is, is je FastDL content bereikbaar via deze publieke URL:

```
https://[jouw-domeinnaam].zap.cloud/fastdl/
```

Test dit door de URL in je browser te openen en te kijken of je de bestanden kunt zien.

## Game server configureren

Ga in het ZAP paneel naar je game server beheer, open het `server.cfg` bestand via de **Configs** pagina en voeg deze regels toe:

```cfg
sv_downloadurl "https://[jouw-domeinnaam].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Zorg dat de FastDL URL exact overeenkomt met de structuur op je webspace. Sla het bestand op en herstart je game server om de instellingen te activeren.

## Samenvatting

Met je eigen ZAP webspace kun je FastDL snel en betrouwbaar instellen. Zo lever je custom content razendsnel en soepel aan je spelers, wat de ervaring op je Left 4 Dead 2 server flink verbetert.

Heb je vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar! 🙂

<InlineVoucher />