---
id: dedicated-linux-ubuntu-1804
title: "Dedicated Server: Installatie van Ubuntu 18.04"
description: "Ontdek hoe je Ubuntu installeert en configureert op je dedicated server voor optimale prestaties en langdurige ondersteuning → Leer het nu"
sidebar_label: Ubuntu 18.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Hier leggen we je stap voor stap uit hoe je het Ubuntu besturingssysteem installeert en configureert op je dedicated server. Volg deze instructies goed om ervoor te zorgen dat je het OS succesvol opzet en optimaal gebruikt.



:::warning Nieuwere versie beschikbaar / EOL details

De nieuwste versie van Ubuntu is [24.04](dedicated-linux-ubuntu.md). We raden aan om voor lange termijn projecten altijd de nieuwste versie te gebruiken.

De ondersteuning voor oudere Ubuntu versies wordt vroeg of laat stopgezet. Voor versie 18.04 gelden de volgende deadlines:

- Einde standaard ondersteuning: 01.03.2023
- Einde Ubuntu Pro ondersteuning: 01.04.2028
- Einde legacy ondersteuning: 01.04.2030

Meer info vind je op de [officiële website](https://ubuntu.com/about/release-cycle).
:::




## Voorbereiding

Voor de installatie en configuratie van een besturingssysteem is het eerst belangrijk om de bijbehorende ISO van het OS te mounten. Er zijn verschillende manieren om dit te doen:

1. Mounten via de initiële setup
2. Mounten via iLO (Virtual Media)
3. Mounten via iLO (Remote Console)

Als je nog niet bekend bent met het mounten van een ISO-bestand, kun je het beste onze [Initiële setup](dedicated-setup.md) of [Eigen ISO](dedicated-iso.md) handleiding raadplegen.



## Installatie

Zodra de ISO succesvol is gemount en geladen, zou de server in het setupproces moeten staan. De taal die je wilt gebruiken voor je OS wordt aan het begin van de setup gekozen. Selecteer een van de beschikbare talen en bevestig met de `Enter` toets.

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Vervolgens moet het juiste toetsenbordindeling worden geselecteerd en ingesteld voor de taal. Kies hier ook het toetsenbord dat voor jou geschikt is.

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Daarna volgt de netwerkconfiguratie. De server wordt standaard via DHCP ingesteld. De standaard netwerkadapter is `eno1`. Bevestig de standaardinstellingen en ga verder.

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Optioneel kan er een extra proxy worden ingesteld. Dit is niet verplicht. Als je dit niet nodig hebt, sla deze stap dan gewoon over.

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Nu wordt de Ubuntu Archive Mirror (downloadserver voor pakketten) ingesteld. Onze dedicated servers staan in Duitsland, dus het is aan te raden om de Duitse mirror te kiezen voor de best mogelijke downloadsnelheid.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

De partities kunnen nu worden ingesteld in de opslagconfiguratie. Je kunt één grote partitie gebruiken of deze opdelen als je dat wilt. Wil je gewoon de hele SSD als één partitie gebruiken, kies dan `Use an entire disk` en ga verder.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

De setup maakt automatisch de volumes aan en je kunt doorgaan door de optie `Done` te kiezen.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Voordat het proces start, word je geïnformeerd dat alle bestaande data wordt verwijderd. Deze melding moet je bevestigen met de optie `Continue`.

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Stel je gebruikersaccount in zoals jij dat wilt, je kunt uiteindelijk ook het root-account gebruiken door het wachtwoord te wijzigen. Je navigeert door de opties met tab of de pijltjestoetsen. Als je klaar bent, vink je `Done` aan om verder te gaan.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





De installatie van de SSH setup wordt aanbevolen. Wil je de server via SSH beheren, selecteer dan de optie om dit te installeren en bevestig.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu biedt een paar standaard snaps aan, als je er een paar wilt gebruiken, vink dan de gewenste aan.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Om het proces af te ronden, moet de ISO worden uitgeworpen zodat deze niet opnieuw wordt geladen bij een herstart van de server. Herstart de server één keer om het proces af te sluiten.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuratie



### Wachtwoord van root-gebruiker wijzigen

Je kunt het wachtwoord van de root-gebruiker eenvoudig wijzigen. Voer `sudo su` uit en voer je wachtwoord in. Daarna voer je `sudo passwd` uit om het wachtwoord te veranderen. Voer nu het nieuwe gewenste wachtwoord voor root in. Klaar, je kunt nu inloggen met de gebruiker `root`.



## Conclusie

Gefeliciteerd, je hebt Ubuntu 18.04 succesvol geïnstalleerd op je dedicated server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂