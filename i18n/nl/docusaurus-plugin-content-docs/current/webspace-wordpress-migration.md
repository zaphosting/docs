---
id: webspace-wordpress-migration
title: "Webspace: Je WordPress-website migreren naar ZAP-Hosting"
description: "Ontdek hoe je moeiteloos je WordPress-site migreert naar ZAP-Hosting Webspace en je online aanwezigheid verbetert → Leer het nu"
sidebar_label: Migratie
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Ben je geïnteresseerd in onze krachtige webspace-producten en wil je overstappen naar ons? Zoek niet verder! In deze gids nemen we je mee door het proces om je WordPress-site te migreren naar jouw ZAP-Hosting Webspace product met behulp van een WordPress-plugin.

<InlineVoucher />

## Voorbereiding

Zorg voordat je verder gaat met deze gids dat je het volgende klaar hebt staan:
- Een domein, met admin-toegang om DNS-instellingen te beheren.
- Admin-toegang tot je oude WordPress-installatie.
- Een eigen [Webspace](https://zap-hosting.com/en/shop/product/webspace/) product bij ons.

## Stap 1: Webspace voorbereiden

Begin met het bezoeken van onze [Webspace](https://zap-hosting.com/en/shop/product/webspace/) productpagina en koop het webspace-hostingpakket dat het beste bij jouw website past. Zodra het product is ingesteld, moet je WordPress erop installeren. Lees hiervoor onze speciale [Installatie](webspace-wordpress.md) gids voor een stap-voor-stap uitleg.

Met WordPress geïnstalleerd op de Webspace, moet je je domein eraan koppelen. Lees hiervoor onze speciale [Domein toevoegen](webspace-adddomain.md) gids voor een duidelijke uitleg.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## Stap 2: Migrate Guru Plugin installeren

Om het migratieproces te automatiseren, gebruik je de **Migrate Guru** WordPress-plugin, die gratis en erg populair is. Je moet deze op zowel je nieuwe als oude WordPress-installatie installeren.

:::tip Inloggen op Admin Panel
Om als admin in te loggen op een WordPress-site, open je je browser en ga je naar je website. Voeg `/wp-admin` toe achter de URL van je website (bijv. `[jouw_website].com/wp-admin`) en zoek dit op in je browser. Je wordt dan doorgestuurd naar de WordPress admin login pagina, waar je moet inloggen met je admin-gegevens van je oude hosting WordPress panel.

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

Ga in je WordPress panel naar de categorie **Plugins** aan de linkerkant van de pagina. Klik op **Nieuwe plugin toevoegen** en typ in de zoekbalk **Migrate Guru**.

Als het resultaat verschijnt, klik je op **Installeren** en daarna op **Activeren**. Zorg dat je dit op zowel de oude als nieuwe WordPress-installatie doet voordat je verder gaat.

Na activatie verschijnt er een scherm waarin je je e-mailadres moet invullen en akkoord moet gaan met de voorwaarden. Doe dit.

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## Stap 3: Migratiesleutel ophalen

Nu de Migrate Guru plugin op beide installaties staat, moet je de **Migratiesleutel** ophalen die je vindt in je **nieuwe** ZAP-Hosting WordPress installatie.

Je vindt deze door in je WordPress panel links naar **Migrate Guru** te gaan. Kopieer deze sleutel, want die heb je in de volgende stap nodig.

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip Backup maken
Als extra veiligheid raden we aan om een backup te maken van je oude WordPress-installatie voordat je met de migratie via de plugin begint. Dit proces veroorzaakt geen dataverlies, maar het is altijd slim om een backup achter de hand te hebben, just in case.
:::

## Stap 4: Migratie starten

Ga terug naar het admin panel van je **oude** WordPress-installatie. Ga naar de **Migrate Guru** sectie, klik op de **Migrate** knop en kies **Other Hosts** uit de lijst.

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

Plak de migratiesleutel die je net van je nieuwe ZAP-Hosting WordPress hebt gekopieerd en klik op **Migrate** om de migratie te starten.

:::warning
Zorg dat je de Migratiesleutel van je **nieuwe** ZAP-Hosting WordPress admin panel kopieert en deze in je **oude** WordPress admin panel plakt. Doe je het andersom, dan wis je data.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

Na het klikken op **Migrate** start het migratieproces direct na een paar controles.

De migratie draait op de achtergrond zonder downtime en duurt meestal een paar minuten. Heb geduld, want het hangt af van de grootte van je website. Als het klaar is, zie je een succesmelding.

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
We raden aan je website goed te testen op je nieuwe WordPress-installatie om zeker te weten dat de migratie helemaal goed is gegaan.
:::

## Stap 5: DNS-instellingen van je domein aanpassen

Als de migratie klaar is, is de laatste stap het aanpassen van de DNS-instellingen van je domein, zodat het naar je nieuwe Webspace verwijst. Je moet de DNS-instellingen van je domein wijzigen en instellen op het IP-adres van de ZAP Hosting Webspace om je WordPress-website vanaf onze server te laten draaien.

Om het IP-adres van je webspace te vinden, ga je naar het webinterface paneel van je webserver op de ZAP-Hosting website en navigeer je naar de **DNS** sectie. Hier vind je het IP-adres van je Webspace.

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

Heb je je domein niet bij ZAP-Hosting, log dan in bij je domeinprovider.

Zoek de **DNS-instellingen** of iets vergelijkbaars. Vervang de bestaande **A Record(s)** die naar je oude hosting wijzen door het IP-adres van je ZAP Webspace.

Doe dit voor alle **A Records** die nog naar je oude hosting verwijzen. Zodra dit klaar is, werkt je domein samen met je WordPress-website op ZAP-Hosting.

:::info
Let op: het kan tot 24 uur duren voordat DNS-wijzigingen wereldwijd zijn doorgevoerd. Meestal gaat het sneller, maar soms duurt het wat langer.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Stap 6: SSL-certificaat instellen

Als laatste raden we aan een nieuw SSL-certificaat in te stellen voor je nieuwe website op je ZAP-Hosting Webspace. Standaard blijft een domein dat via webspace wordt toegevoegd onbeveiligd.

Lees onze speciale [SSL-certificaat aanmaken](webspace-plesk-ssl.md) gids voor een duidelijke uitleg over hoe je dit instelt.

## Conclusie

Als je deze gids hebt gevolgd, heb je je oude WordPress-website succesvol gemigreerd naar je nieuwe ZAP-Hosting Webspace. Test alles goed om zeker te weten dat de migratie vlekkeloos is verlopen.

<InlineVoucher />