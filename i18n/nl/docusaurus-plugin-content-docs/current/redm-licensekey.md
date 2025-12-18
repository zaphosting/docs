---
id: redm-licensekey
title: "RedM: Voeg je eigen licentiesleutel toe"
description: "Ontdek hoe je je eigen RedM-licentiesleutel maakt en beheert om je abonnementsvoordelen te ontgrendelen en je serverconfiguratie te personaliseren → Leer het nu"
sidebar_label: Eigen Licentiesleutel
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Standaard wordt je RedM Game Server geleverd met een automatisch gegenereerde licentiesleutel. Het aanpassen hiervan en het gebruiken van je eigen RedM-licentiesleutel kan om verschillende redenen handig zijn, zoals toegang krijgen tot je RedM Element Club abonnement voordelen zoals Onesync, de server eigenaar wijzigen naar jouw naam en nog veel meer. In deze gids leggen we uit hoe je je eigen licentiesleutel maakt en toevoegt aan je RedM Game Server.

<InlineVoucher />

## Voorbereiding

Om te beginnen met het aanmaken van de sleutel, ga je naar de officiële **[Cfx.re Portal](https://portal.cfx.re/)** website en log je in met je Cfx.re Forum account. Heb je nog geen account? Kies dan voor registreren om er een aan te maken.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Nieuwe Cfx.re Portal
De Cfx.re Portal is de nieuwe plek voor alles wat met RedM te maken heeft, en vervangt de oude RedM Keymaster en Patreon oplossingen. Op deze nieuwe portal kun je nu je server licentiesleutels beheren, toegang krijgen tot aangekochte assets en je RedM abonnement beheren, allemaal op één plek.

We raden je sterk aan om de [officiële blogpost](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) te lezen over het migreren van Patreon abonnementen naar de nieuwe Cfx.re Portal om je voordelen te behouden.
:::

## Licentiesleutel genereren

Als je bent ingelogd op de portal, ga je via de bovenste navigatiebalk naar de **Servers** sectie om bij het hoofdgedeelte voor sleutelbeheer te komen. Dit vervangt de oude RedM Keymaster website en is een fijne alles-in-één portal. Je kunt ook elke licentiesleutel vernieuwen met de **Re-Activate** optie op deze pagina.

Klik op de **Generate Key** knop om het registratieformulier te openen.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

Voer in het formulier een handige naam in voor de sleutel, zodat je hem later makkelijk herkent. Klik op de generate knop zodra je klaar bent.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Je ziet nu een nieuwe regel in de tabel met de sleutel die je zojuist hebt aangemaakt. Kopieer de sleutel met de actieknoppen aan de rechterkant en houd deze bij de hand voor de volgende stap.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Sleutel toevoegen aan server

Nu je de licentiesleutel hebt, moet je de bestaande licentiesleutel op je RedM game server aanpassen en vervangen door de nieuw aangemaakte sleutel. Hiervoor moet je inloggen op het txAdmin paneel van je RedM game server. Dit vind je in het webinterface dashboard van je game server. Gebruik de inloggegevens op de pagina om in te loggen.

Eenmaal in de txAdmin interface, ga je aan de linkerkant naar de **CFG Editor** om het `server.cfg` bestand te openen. Zoek in de editor de regel met de `sv_licensekey` parameter en vervang deze door je eigen licentiesleutel. Klik op opslaan zodra je klaar bent.

![img](https://screensaver01.zap-hosting.com/index.php/s/KKQ8aRBKo9246yR/preview)

## Conclusie

Nadat je de custom licentiesleutel hebt ingesteld, herstart je je server om hem te activeren. Je hebt nu succesvol een eigen licentiesleutel toegevoegd aan je RedM game server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />