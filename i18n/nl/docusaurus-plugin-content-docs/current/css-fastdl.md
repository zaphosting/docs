---
id: css-fastdl
title: "Counter-Strike: Source: FastDL instellen"
description: "Ontdek hoe je gamecontent optimaliseert met FastDL via ZAP-Hosting webspace voor snellere downloads en minder serverbelasting → Leer het nu"
sidebar_label: FastDL
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie

FastDL (Fast Download) is een methode om custom content zoals maps, sounds of modellen via een externe webserver te leveren in plaats van via de game server zelf. Dit zorgt voor snellere downloads voor spelers en minder belasting op de server.

Om FastDL te gebruiken, heb je toegang nodig tot een publieke HTTP-webserver. Een top optie hiervoor is een **ZAP-Hosting Webspace pakket**, perfect geschikt voor het leveren van gamecontent. Deze gids legt uit hoe je FastDL instelt met ZAP webspace.

<InlineVoucher />

## Vereisten

Je hebt een actieve Counter-Strike: Source server nodig, gehost bij ZAP-Hosting, plus een extra webspace pakket. FTP-toegang of toegang tot de File Manager moet beschikbaar zijn voor zowel de game server als de webspace.

Aan de game kant moeten de bestanden die je wilt verspreiden (zoals `.bsp` maps, soundbestanden of modellen) al correct georganiseerd zijn. Diezelfde mappenstructuur moet je ook op de webspace aanhouden om FastDL succesvol te laten werken.

## Webspace voorbereiden

Voor het beheren en uploaden van je FastDL-bestanden raden we aan de **File Manager** te gebruiken die in de ZAP webspace interface zit. Je vindt deze direct in het webpanel onder **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Maak in de root directory van je webspace een map aan met de naam `fastdl`. Maak binnen deze map submappen aan zoals `maps`, `sound` of `models`, afhankelijk van welke content je wilt aanbieden. De mappenstructuur moet exact overeenkomen met die van je Counter-Strike: Source server.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Voordat je bestanden uploadt, zorg dat ze **gecomprimeerd zijn in het `.bz2` formaat** (bzip2). De meeste Source-engines verwachten bestanden in dit formaat. Bijvoorbeeld, een mapbestand `custom_map.bsp` moet je uploaden als `custom_map.bsp.bz2`.

:::info Comprimeren met 7-Zip
Om je bestanden klaar te maken voor FastDL kun je tools zoals **7-Zip** gebruiken om ze te comprimeren naar het `.bz2` formaat. Klik met rechts op het bestand, kies **7-Zip > Toevoegen aan archief...**, selecteer `bzip2` als archiefformaat en bevestig.
:::

Nadat je de gecomprimeerde bestanden in de juiste mappen hebt geüpload, zorg je dat **alle mappen en bestanden de juiste leesrechten hebben** zodat ze publiek toegankelijk zijn. In de File Manager kun je de rechten van mappen en bestanden aanpassen.

Als alles geüpload en ingesteld is, is je FastDL-content bereikbaar via de volgende publieke URL:

```
https://[jouw-domeinnaam].zap.cloud/fastdl/
```

Test dit door de URL in je browser te openen en te checken of de bestanden zichtbaar zijn.

## Game server configureren

Open in de ZAP interface onder game server beheer het `server.cfg` bestand via de **Configs** pagina en voeg de volgende regels toe:

```cfg
sv_downloadurl "https://[jouw-domeinnaam].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Zorg dat de FastDL URL exact overeenkomt met de structuur op je webspace. Sla het bestand op en herstart je game server om de instellingen toe te passen.

## Conclusie

FastDL instellen gaat snel en betrouwbaar met je eigen ZAP webspace. Zo lever je custom content snel en efficiënt en verbeter je de ervaring voor alle spelers op jouw Counter-Strike: Source server.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />