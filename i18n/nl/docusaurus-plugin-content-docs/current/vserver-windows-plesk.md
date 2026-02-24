---
id: vserver-windows-plesk
title: "Plesk installeren op een Windows Server - Beheer je websites met een krachtig control panel"
description: "Ontdek hoe je websites en servers efficiënt beheert met Plesk’s veelzijdige platform, geschikt voor beginners en experts → Leer nu meer"
sidebar_label: Plesk installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Plesk is een alles-in-één webhosting- en serverbeheerplatform waarmee je websites, servers, e-mailaccounts en meer kunt beheren via een gebruiksvriendelijke interface. Het is een veelzijdige oplossing die perfect is voor zowel beginners als ervaren webdevelopers en systeembeheerders.  
<InlineVoucher />


## Maak verbinding met de server

Om Plesk op de server te installeren, moet je eerst verbinding maken. Hoe dat werkt leggen we uitgebreid uit in onze aparte gids: [Eerste toegang (RDP)](vserver-windows-userdp.md)

## Plesk Installer

Vervolgens heb je de Plesk Installer nodig, die vereist is voor de installatie van Plesk. Deze kun je downloaden via deze link: [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Deze installer sla je op in een map, in ons voorbeeld gebruiken we een "Plesk" map die we op ons bureaublad hebben aangemaakt. Het pad naar dit bestand is belangrijk voor de volgende stappen.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Open de Command Prompt

Open nu de CMD-console om de installatie te starten. Dit doe je via de toetscombinatie [Windows] + [R] of door in het startmenu te zoeken op "command".

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Plesk installeren

In deze CMD-console navigeer je naar de map waar je de Plesk installer hebt opgeslagen. In ons voorbeeld is dat de "Plesk" map op het "Bureaublad".

Dit doe je met het CMD-commando "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Als je in de juiste map bent, voer je het installatiecommando uit. Hiermee start je de Plesk-installer.exe en wordt de nieuwste Plesk-versie automatisch geïnstalleerd.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Command: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
De installatie kan 30 tot 60 minuten duren. Daarna is Plesk geïnstalleerd en klaar voor gebruik.
:::


## Afronding

Gefeliciteerd, je hebt Plesk succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server! Heb je nog vragen of problemen? Neem dan gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />