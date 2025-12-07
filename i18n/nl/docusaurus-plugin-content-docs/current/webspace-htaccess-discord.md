---
id: webspace-htaccess-discord
title: "Webspace: Discord doorsturen instellen via domein"
description: "Ontdek hoe je je domein kunt doorsturen naar een specifieke URL via webserverconfiguratie voor een naadloze forwarding → Leer het nu"
sidebar_label: Discord doorsturen
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Standaard kun je een domein niet direct doorsturen naar een specifieke URL, alleen naar het hoofdadres van een server of website. Wil je toch naar een specifieke URL verwijzen? Dan kun je een redirect instellen via de webserver in combinatie met een `.htaccess`-bestand. Zo wordt het domein automatisch doorgestuurd naar de gewenste URL.

<InlineVoucher />



## Voorbereiding

Om zo’n doorsturing te regelen, gaan we ervan uit dat je al een eigen domein (TLD) en een webspace pakket hebt. Koppel je domein aan je webspace pakket. Weet je niet precies hoe? Gebruik dan onze supermakkelijke [EasyDNS](domain-easydns.md) optie.

:::warning DNS-wijzigingen kosten tijd

DNS-wijzigingen kunnen tot **24 uur** duren voordat ze wereldwijd volledig zijn doorgevoerd en actief zijn. Soms gaat het sneller, maar vertragingen zijn normaal door caching op verschillende servers.

:::

Zodra je domein succesvol naar je webspace wijst en bereikbaar is, kun je beginnen met het instellen van de Discord doorsturing.



## Configuratie

Je moet een `.htaccess`-bestand aanmaken en configureren om de doorsturing te regelen. Ga hiervoor naar de bestandsbeheerder in Plesk voor je domein. Klik daar op het plusje om een nieuwe map aan te maken met de naam `discord`.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

Ga naar de map `discord` en maak daar een nieuw bestand aan met de naam `.htaccess`. Open dit bestand vervolgens met de teksteditor. Nu voeg je de doorstuurregel toe. Kopieer en plak de volgende inhoud:
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

Voor de regel en redirect om te werken op jouw domein, moet je de domeinnaam aanpassen. Vervang `example-example.de` door jouw eigen domein en sla het bestand op. Vervang ook de Discord Invite URL door die van jouw server.

Je kunt nu de redirect bereiken via je domein met het pad `/discord`. In ons voorbeeld ziet dat er zo uit: `beispiel-example.de/discord`.

## Afsluiting

Als je alle stappen hebt gevolgd, heb je nu succesvol de domein-doorsturing naar je Discord-server ingesteld. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />