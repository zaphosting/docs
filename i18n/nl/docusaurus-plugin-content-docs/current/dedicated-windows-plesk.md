---
id: dedicated-windows-plesk
title: "Dedicated Server: Installatie van Plesk"
description: "Ontdek hoe je websites en servers efficiënt beheert met Plesk, voor beginners én experts → Leer nu meer"
sidebar_label: Plesk Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Plesk is een complete webhosting- en serverbeheerplatform waarmee je websites, servers, e-mailaccounts en meer kunt beheren via een gebruiksvriendelijke interface. Het is een veelzijdige oplossing die geschikt is voor zowel beginners als ervaren webdevelopers en systeembeheerders.

## Verbinding maken met de server

Om Plesk op de server te installeren, moet je eerst verbinding maken. Hoe dat werkt, leggen we uitgebreid uit in onze aparte handleiding: [Eerste Toegang (RDP)](vserver-windows-userdp.md)

## Plesk Installer

Vervolgens heb je de Plesk Installer nodig, die vereist is voor de installatie van Plesk. Je kunt deze downloaden via deze link: [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Deze installer sla je op in een map, in ons voorbeeld gebruiken we een "Plesk" map die we op ons bureaublad hebben aangemaakt. Het pad naar dit bestand is belangrijk voor de volgende stappen.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Open de Command Prompt

Open nu de CMD-console om de installatie te starten. Dit doe je via de toetscombinatie [Windows] + [R] of door in het startmenu te zoeken op "command".

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Plesk Installatie

In deze CMD-console navigeer je naar de map waar je de Plesk installer hebt opgeslagen. In ons voorbeeld is dat de "Plesk" map op het "Bureaublad".

Dit doe je met het CMD-commando "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

Als je in de juiste map bent, voer je het installatiecommando uit. Hiermee start je de Plesk-installer en wordt de nieuwste Plesk-versie automatisch geïnstalleerd.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Command: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
De installatie kan 30 tot 60 minuten duren. Daarna is Plesk geïnstalleerd en klaar voor gebruik.
:::

## Afsluiting

Gefeliciteerd, je hebt Plesk succesvol geïnstalleerd! Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂