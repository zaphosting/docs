---
id: dedicated-linux-ftp-install
title: "ProFTPD op een Linux Server Installeren - Host een Veilige FTP Service"
description: "Ontdek hoe je een veilige FTP-server op Linux instelt en beheert met FileZilla Server om bestandsoverdrachten en gebruikersbeheer te vereenvoudigen → Leer het nu"
sidebar_label: FTP-server installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

**FTP (File Transfer Protocol)** is een netwerkprotocol dat wordt gebruikt om bestanden over een TCP/IP-netwerk te versturen. Het protocol is ontwikkeld om het eenvoudig uitwisselen van bestanden tussen systemen mogelijk te maken. Met de **FileZilla Server** kun je zo’n FTP-server op een Linux besturingssysteem opzetten. FileZilla Server is makkelijk te installeren en configureren, en biedt tal van functies zoals het aanmaken van gebruikersaccounts, beheren van toegangsrechten en het overzetten van bestanden. In deze gids nemen we je mee door het proces van het installeren en configureren van de **FileZilla Server** service op een Linux server.

## Hoe installeer ik de FTP-server om een gebruiker toe te voegen?

Om een FTP-gebruiker toe te voegen, moet je eerst de FTP-server installeren. Maak hiervoor één keer verbinding met de server via SSH (bijvoorbeeld met Putty).

Om de FTP-server te installeren, voer je het volgende in: **apt-get install proftpd**. Bevestig de vraag met een **Y** en druk op Enter:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Nu moeten we de configuratie nog aanpassen. Hiervoor voer je in: **nano /etc/proftpd/proftpd.conf** en bevestig je. Daarna opent het configuratiebestand in de Nano-editor:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

De volgende regels moeten worden toegevoegd:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Nu moet de FTP-server opnieuw worden gestart zodat de wijzigingen actief worden. Dit doe je met het commando: **service proftpd restart**

## Hoe voeg ik een FTP-gebruiker toe?

Om een nieuwe FTP-gebruiker aan te maken, moeten we eerst een FTP-groep maken. Dat doe je met het commando **addgroup ftpuser**. Dit ziet er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Nu kunnen we onze eerste FTP-gebruiker toevoegen met de commando’s: **adduser benutzerftp -shell /bin/false -home /var/www** en daarna **adduser benutzerftp ftpuser**.

Je wordt nu gevraagd een wachtwoord in te stellen:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Daarna moet je bevestigen dat de ingevoerde gegevens kloppen:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

De laatste stap is om de nieuwe gebruiker aan de groep toe te wijzen via **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Nu kunnen we met de ingestelde gegevens verbinden:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)