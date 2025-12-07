---
id: cs16-fastdl
title: "Counter-Strike 1.6: FastDL instellen"
description: "Ontdek hoe je gamecontent optimaliseert met FastDL via ZAP-Hosting webspace voor snellere downloads en minder serverbelasting → Leer het nu"
sidebar_label: FastDL
services:
  - gameserver-cs16
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie

FastDL (Fast Download) is een methode om custom content zoals maps, sounds of modellen via een externe webserver te leveren in plaats van via de game server zelf. Dit zorgt voor snellere downloads voor spelers en minder belasting op de server.

Om FastDL te gebruiken heb je toegang nodig tot een publieke HTTP-webserver. Een top optie hiervoor is een **ZAP-Hosting Webspace pakket**, perfect geschikt om gamecontent te hosten. Deze gids legt uit hoe je FastDL instelt met ZAP webspace.

<InlineVoucher />

## Vereisten

Je hebt een actieve Counter-Strike 1.6 server nodig die gehost wordt door ZAP-Hosting, plus een extra webspace pakket. FTP-toegang of toegang tot de File Manager moet beschikbaar zijn voor zowel de game server als de webspace.

Aan de game kant moeten de bestanden die je wilt verspreiden (zoals `.bsp` maps, soundbestanden of modellen) al correct georganiseerd zijn. Diezelfde mappenstructuur moet je ook op de webspace aanhouden om FastDL succesvol te laten werken.

## Webspace voorbereiden

Voor het beheren en uploaden van je FastDL-bestanden raden we aan de **File Manager** te gebruiken die in het ZAP webspace paneel zit. Je vindt deze direct via het webpanel onder **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Maak in de root directory van je webspace een map aan met de naam `fastdl`. Maak daarin submappen zoals `maps`, `sound` of `models` aan, afhankelijk van welke content je wilt aanbieden. De mappenstructuur moet exact overeenkomen met die van je Counter-Strike 1.6 server.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Voordat je bestanden uploadt, zorg dat ze **gecomprimeerd zijn in het `.bz2` formaat** (bzip2). De meeste Source-gebaseerde engines vereisen dat bestanden in dit formaat worden aangeboden. Bijvoorbeeld, een mapbestand `custom_map.bsp` moet je uploaden als `custom_map.bsp.bz2`.

:::info Comprimeren met 7-Zip
Om je bestanden klaar te maken voor FastDL kun je tools zoals **7-Zip** gebruiken om ze te comprimeren naar het `.bz2` formaat. Klik met rechts op het bestand, kies **7-Zip > Toevoegen aan archief...**, selecteer `bzip2` als archiefformaat en bevestig.
:::

Nadat je de gecomprimeerde bestanden in de juiste mappen hebt geüpload, zorg je dat **alle mappen en bestanden de juiste leesrechten hebben** zodat ze publiek toegankelijk zijn. In de File Manager kun je de permissies aanpassen.

Als je bestanden geüpload en de rechten goed staan, is de FastDL-content bereikbaar via de volgende publieke URL:

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

FastDL instellen gaat snel en betrouwbaar met je eigen ZAP webspace. Zo lever je custom content razendsnel en efficiënt, wat de ervaring voor alle spelers op je Counter-Strike 1.6 server verbetert.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />