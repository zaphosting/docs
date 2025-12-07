---
id: vserver-linux-ftp-install
title: "VPS: Installatie van een FTP-server"
description: "Ontdek hoe je een veilige FTP-server op Linux instelt en beheert met FileZilla Server om efficiënt bestanden te transfereren → Leer het nu"
sidebar_label: FTP-server installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

**FTP (File Transfer Protocol)** is een netwerkprotocol dat wordt gebruikt om bestanden te verzenden via een TCP/IP-netwerk. Het protocol is ontwikkeld om het eenvoudig uitwisselen van bestanden tussen systemen mogelijk te maken. Met **FileZilla Server** kun je zo’n FTP-server op een Linux-besturingssysteem opzetten. FileZilla Server is makkelijk te installeren en configureren, en biedt tal van functies zoals het aanmaken van gebruikersaccounts, beheren van toegangsrechten en het overzetten van bestanden. In deze gids nemen we je mee door het proces van het installeren en configureren van de **FileZilla Server** service op een Linux-server.

<InlineVoucher />

## Installatie

Om een FTP-gebruiker toe te voegen, moet je eerst de FTP-server installeren. Verbind hiervoor één keer via SSH (bijvoorbeeld met Putty) met je server.

Om de FTP-server te installeren, voer je het volgende in: **apt-get install proftpd**. Bevestig de vraag met een **Y** en druk op Enter:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

Nu moeten we de configuratie nog aanpassen. Hiervoor typ je: **nano /etc/proftpd/proftpd.conf** en druk je op Enter. Daarna opent het configuratiebestand in de Nano-editor:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

De volgende regels moeten worden toegevoegd:

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

Nu moet de FTP-server opnieuw worden gestart zodat de wijzigingen actief worden. Dit doe je met het commando: **service proftpd restart**

## Gebruikers toevoegen

Om een nieuwe FTP-gebruiker aan te maken, maken we eerst een FTP-groep aan. Dit doe je met het commando **addgroup ftpuser**. Dit ziet er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

Vervolgens voegen we onze eerste FTP-gebruiker toe met de commando’s: **adduser benutzerftp -shell /bin/false -home /var/www** en daarna **adduser benutzerftp ftpuser**.

Je wordt nu gevraagd een wachtwoord in te stellen:

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

Daarna moet je bevestigen dat de ingevoerde gegevens kloppen:

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

De laatste stap is om de nieuwe gebruiker aan de groep toe te wijzen via **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

Nu kun je verbinden met de zojuist ingestelde gegevens:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)



## Conclusie

Gefeliciteerd, je hebt FTP succesvol geïnstalleerd en geconfigureerd! Heb je nog vragen of problemen? Neem dan gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />