---
id: fivem-changeloadingscreen
title: "FiveM: Installatie van een Custom Loading Screen"
description: "Ontdek hoe je je FiveM loading screen kunt customizen voor een unieke spelerervaring en verbeter de visuals van je server → Leer het nu"
sidebar_label: Custom Loading Screen Installeren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Intro

Wil je je eigen custom loading screen gebruiken in plaats van de standaard FiveM loading screen? Hieronder leggen we uit hoe je dat doet en welke stappen je moet volgen!

<InlineVoucher />



## Voorbereiding

Om je eigen loading screen te installeren, moet je eerst een geschikte resource vinden. Je vindt een grote selectie aan resources op de officiële [Cfx.re website](https://forum.cfx.re/c/releases/7). Download daarna de resource en pak deze uit op je computer.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Installatie

De installatie van de loading screen gaat via FTP. Verbind hiervoor met je game server via FTP. Als je nog niet weet hoe je FTP gebruikt, check dan onze [FTP toegang](gameserver-ftpaccess.md) handleiding.

Als je verbonden bent via FTP, navigeer je naar de resource map. Afhankelijk van het framework dat je hebt geïnstalleerd, vind je je resource map onder deze folderstructuur: `/gXXXXXX/fivem/JOUW_FRAMEWORK/resources`

Upload de map van je resource die je eerder hebt gedownload en uitgepakt op je computer naar deze locatie.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Nu de loading screen resource succesvol is geüpload, moet je deze nog toevoegen aan het serverconfiguratiebestand `server.cfg`. Log hiervoor in op de txAdmin interface en open de CFG Editor.

Voeg vervolgens je resource toe aan de config. Dit doe je met het commando `start resourcenaam`. In dit voorbeeld is dat `start loadingscreen`. Sla je wijzigingen op en herstart daarna de server.

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## Conclusie

Als je alle stappen hebt gevolgd, zie je na de volgende server restart je nieuwe loading screen. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />