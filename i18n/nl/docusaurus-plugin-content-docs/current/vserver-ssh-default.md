---
id: vserver-ssh-default
title: "VPS: Beheer standaard SSH-sleutels in je profiel"
description: "Ontdek hoe je SSH-sleutels automatisch instelt voor snellere servertoegang en soepelere productinstallaties met ZAP-Hosting → Leer nu meer"
sidebar_label: Standaard SSH-sleutels
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Een van de nieuwste toevoegingen aan onze ZAP-Hosting webinterface is de mogelijkheid om standaard SSH-sleutels toe te voegen aan je ZAP-Hosting account via onze website. Het toffe hieraan is dat de SSH-sleutels die je instelt op je Profielpagina automatisch worden ingesteld en gebruikt tijdens de eerste productconfiguratie of OS-herinstallatie. Dit bespaart je tijd omdat je je SSH-sleutels niet handmatig hoeft in te stellen.

<InlineVoucher />

## Vereisten
Om deze functie te gebruiken, moet je een SSH-sleutel hebben gegenereerd. Als je al een SSH-sleutel hebt, kun je doorgaan naar de volgende sectie.

Om een SSH-sleutel te genereren, raden we aan om naar de sectie **Informatie->Toegang & Beveiliging** te gaan in de webinterface van je vServer.

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

Hier zie je een groene knop **Genereer SSH-sleutel**. Zodra je op deze knop drukt, wordt je SSH Private Key automatisch gedownload naar je pc. Dit is de sleutel die je gebruikt om verbinding te maken met je server zodra SSH is ingesteld.

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

Je moet nu de Public Key opslaan die in de prompt wordt weergegeven, want die heb je nodig om de SSH-sleutel in je profiel aan te maken.

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Ga door naar de volgende sectie zodra je er klaar voor bent.

## Standaard SSH-sleutels beheren in je profiel
Het beheren van je standaard SSH-sleutels in je account is simpel. Ga naar je **[ZAP-Hosting Profielpagina](https://zap-hosting.com/en/customer/home/profile/)** en scroll naar beneden tot je bij de sectie **Standaard SSH-sleutels** komt.

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### Nieuwe sleutel toevoegen
Om een sleutel toe te voegen, druk je eerst op het groene plus-icoon om de aanmaakprompt te openen. Kies hier eerst een passende naam voor je SSH-sleutel.

Plak daarna je SSH Public Key in het tweede veld. Je SSH-sleutel moet in OpenSSH-formaat zijn, beginnend met `ssh-rsa` en eindigend met een suffix. Druk op de groene **Opslaan** knop om de sleutel toe te voegen.

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
Zorg ervoor dat je je **SSH Public Key** indient en niet de SSH Private Key. De SSH Private Key wordt gebruikt tijdens het inloggen om te authenticeren met je Public Key.
:::

Je hebt nu succesvol een standaard SSH-sleutel toegevoegd aan je ZAP-Hosting account.

### Sleutel bewerken of verwijderen
Om een sleutel te bewerken, druk je simpelweg op het blauwe oog-icoon. Hiermee opent een prompt waarin je de huidige gegevens kunt bekijken en direct kunt aanpassen en opslaan.

Om een sleutel te verwijderen, druk je op het rode prullenbak-icoon om die specifieke sleutel te verwijderen.

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />