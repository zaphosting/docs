---
id: redm-installresources
title: "RedM: Installatie van resources"
description: "Ontdek hoe je jouw RedM-server kunt uitbreiden met populaire resources voor grotere projecten zoals roleplay-servers → Leer het nu"
sidebar_label: Resources installeren
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Resources kun je gebruiken om je RedM-server uit te breiden met extra functies. Dit is vooral interessant als je grotere projecten wilt starten, zoals een roleplay-server of iets vergelijkbaars. Zoiets kan niet zonder deze extra resources.

RedM en de community bieden een grote variëteit aan resources. Een overzicht van de populairste resources vind je op het Cfx.re Forum: https://forum.cfx.re/c/redm-development/54



<InlineVoucher />

## Voorbereiding

Het installeren van resources gebeurt via FTP. Je hebt een FTP-client nodig om bestanden naar je server te uploaden. Als je niet bekend bent met FTP, raden we je aan om even te kijken naar de [FTP toegang](gameserver-ftpaccess.md) handleiding.

Gedownloade resources worden meestal aangeboden in een gecomprimeerd formaat. Dit betekent dat je de gecomprimeerde bestanden moet uitpakken met een programma zoals 7Zip, WinRAR of WinZip. De uitgepakte resource-map moet minimaal de volgende bestanden bevatten: `__resource.lua` of `fxmanifest.lua` plus de bijbehorende scriptbestanden.

:::info
Als deze bestanden er niet zijn, kan het zijn dat ze in een submap binnen de resource staan.
:::

## Installatie

### Bestanden uploaden

Je moet nu de eerder uitgepakte bestanden als één map uploaden (als dat nog niet zo is). Je map moet geüpload worden naar de `resource` directory van je server. De mappenstructuur ziet er meestal zo uit: `/gXXXXXX/redm-txadmin/JOUW_FRAMEWORK/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/ofMKfG6rfewsb3o/preview)



Sommige resources werken samen met een database en bevatten daarom vaak al SQL-bestanden die geïmporteerd moeten worden in de database. Als dat zo is, ga dan naar onze [SQL File Import](redm-sql-file-import.md) handleiding om te leren hoe je dit doet.

### Activeren

Om ervoor te zorgen dat de geïnstalleerde resource wordt geladen bij het opstarten van de server, moet je deze eerst activeren in het `server.cfg` bestand van je server. De activatie gebeurt met het commando `start [voorbeeld resource]`.

Als je bijvoorbeeld de resource hebt geüpload met de mapnaam `eup-ui`, moet het startcommando in de config er zo uitzien:
```
start eup-ui
```

Je kunt je `server.cfg` bestand openen via de CFG Editor in de txAdmin interface.

:::info
Zorg ervoor dat de naam van de eerder aangemaakte map exact overeenkomt met de naam in het startcommando. Dit is hoofdlettergevoelig.
:::



## Afronding
Tot slot kun je je server herstarten. De geïnstalleerde resource zou nu geladen moeten worden zodra je server volledig is opgestart. Je hebt succesvol een resource geïnstalleerd op je RedM game server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />