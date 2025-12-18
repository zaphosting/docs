---
id: dedicated-linux-ubuntu-2004
title: "Dedicated Server: Installatie van Ubuntu 20.04"
description: "Ontdek hoe je Ubuntu installeert en configureert op je dedicated server voor optimale prestaties en langdurige ondersteuning → Leer het nu"
sidebar_label: Ubuntu 20.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Hier leggen we je stap voor stap uit hoe je het Ubuntu besturingssysteem installeert en configureert op je dedicated server. Volg deze instructies goed om ervoor te zorgen dat je het OS succesvol opzet en optimaal gebruikt.



:::warning Nieuwere versie beschikbaar / EOL details

De nieuwste versie van Ubuntu is [24.04](dedicated-linux-ubuntu.md). We raden aan om voor lange termijn projecten altijd de nieuwste versie te gebruiken.

De ondersteuning voor oudere Ubuntu versies wordt op den duur stopgezet. Voor versie 20.04 gelden de volgende deadlines:

- Einde standaard ondersteuning: 01.05.2025
- Einde Ubuntu Pro ondersteuning: 01.04.2030
- Einde legacy ondersteuning: 01.04.2032

Meer info vind je op de [officiële website](https://ubuntu.com/about/release-cycle).
:::




## Voorbereiding

Voor de installatie en configuratie van een besturingssysteem is het belangrijk om eerst de juiste ISO van het OS te mounten. Dit kan op verschillende manieren:

1. Mounten via de initiële setup
2. Mounten via iLO (Virtual Media)
3. Mounten via iLO (Remote Console)

Als je nog niet bekend bent met het mounten van een ISO-bestand, bekijk dan onze [Initiële setup](dedicated-setup.md) of [Eigen ISO](dedicated-iso.md) handleiding.



## Installatie

Zodra de ISO succesvol is gemount en geladen, start de server met het installatieproces. Kies aan het begin de taal die je wilt gebruiken voor je OS. Selecteer een taal en bevestig met de `Enter` toets.

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Vervolgens kies je het juiste toetsenbordlayout dat bij je taal past.

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Daarna volgt de netwerkconfiguratie. Standaard staat de server ingesteld op DHCP. De standaard netwerkadapter is `eno1`. Bevestig de standaardinstellingen en ga door.

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Optioneel kun je een proxy instellen. Dit is niet verplicht, dus als je dit niet nodig hebt, sla deze stap gewoon over.

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Nu kies je de Ubuntu Archive Mirror (downloadserver voor pakketten). Onze dedicated servers staan in Duitsland, dus het is aan te raden om de Duitse mirror te kiezen voor de beste downloadsnelheid.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Vervolgens bepaal je de partities in de opslagconfiguratie. Je kunt één grote partitie gebruiken of deze opdelen. Wil je gewoon de hele SSD als één partitie gebruiken, kies dan `Use an entire disk` en ga verder.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

De setup maakt automatisch de volumes aan, kies daarna `Done` om door te gaan.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Voordat het proces start, krijg je een melding dat alle bestaande data wordt verwijderd. Bevestig dit met `Continue`.

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Stel nu je gebruikersaccount in zoals jij wilt. Je kunt ook de root-account gebruiken door het wachtwoord te wijzigen. Navigeer door de opties met tab of pijltjestoetsen. Als je klaar bent, vink `Done` aan.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

De installatie van SSH wordt aanbevolen. Wil je je server via SSH beheren, kies dan voor installatie en bevestig.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu biedt een paar standaard snaps aan. Wil je er een paar gebruiken, vink dan de gewenste opties aan.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Om het proces af te ronden, moet de ISO worden uitgeworpen zodat deze niet opnieuw wordt geladen bij een herstart. Herstart de server één keer om de installatie te voltooien.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuratie



### Wachtwoord van root-gebruiker wijzigen

Je kunt het root-wachtwoord makkelijk aanpassen. Voer `sudo su` uit en geef je wachtwoord op. Daarna voer je `sudo passwd` uit om het wachtwoord te wijzigen. Vul het nieuwe gewenste root-wachtwoord in. Klaar, je kunt nu inloggen met de gebruiker `root`.



## Conclusie

Gefeliciteerd, je hebt Ubuntu 20.04 succesvol geïnstalleerd op je dedicated server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂