---
id: dedicated-linux-jitsi
title: "Jitsi Meet op een Linux Server Installeren - Host Je Eigen Videoconferentie Platform"
description: "Ontdek hoe je je eigen veilige Jitsi Meet videoconferentie server opzet en runt voor makkelijke, privé online meetings → Leer het nu"
sidebar_label: Jitsi Meet Installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Jitsi Meet is open source videoconferentie software waarmee je je eigen videoconferenties op je server kunt draaien. Een groot voordeel van Jitsi Meet is de eenvoudige bediening: je hebt alleen een browser nodig (op smartphones de Jitsi App) en je hoeft niet in te loggen bij externe diensten. Elke videovergadering krijgt een eigen URL om deel te nemen. Jitsi Meet is perfect voor videobellen, ook met mensen die niet zo technisch zijn.
Let op: zonder extra instellingen kan iedereen die toegang heeft tot de Jitsi Meet server zelf videoconferenties starten op de server.



## Jitsi Meet Installeren op een Debian Server

Hier laten we zien hoe je een Jitsi Meet Server installeert op een Debian Server. Jitsi Meet werkt ook op andere Linux servers, zoals Ubuntu, en de installatie is vrijwel hetzelfde.

### Voorbereidingen

Om Jitsi Meet goed te gebruiken, is het slim om je eigen domein te gebruiken om de Jitsi Server te bereiken. Het is handig om een eigen subdomein aan te maken voor de Jitsi Meet server. Als voorbeeld gebruiken we het domein meet.zap-testdomain.de.
Voor ZAP-Hosting domeinen moet je een nieuwe DNS-entry aanmaken. Vul de naam van het subdomein in bij "Naam" en het IP-adres van je server bij "Waarde". In ons voorbeeld vullen we "meet" in bij Naam en het IP-adres van de ZAP testserver waar we Jitsi Meet op installeren bij Waarde: 185.239.239.49 (gebruik het IP van jouw server, niet dit voorbeeld-IP)


Je kunt ook via het IP-adres naar een Jitsi Meet server verbinden. Maar voor het SSL-certificaat heb je een domein nodig. Zonder domein krijg je een beveiligingswaarschuwing in de browser.

Als het subdomein is ingesteld (het kan tot 24 uur duren voordat de wijziging actief is), kun je je server klaarmaken voor de installatie.
Verbind met je server via Putty of WinSCP.
Zorg dat de server up-to-date is. Voer elke command uit met superuser rechten door "sudo" voor het commando te zetten (bijv. "sudo apt-get update")

```
$	apt-get update
```
```
$	apt-get upgrade
```

Als er geen firewall op de server staat, kun je er een installeren, bijvoorbeeld UFW:
```
$	apt install ufw
```

Stel de volgende regels in op de firewall:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Activeer de firewall:
```
$	ufw enable
```

Check de status:
```
$	ufw status
```

### Jitsi Meet Installeren

Voor de installatie van Jitsi Meet heb je eerst het gnupg pakket nodig:
```
$	apt install gnupg
```

Na de installatie download je de Jitsi-GPG sleutel en voeg je deze toe:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Voeg de Jitsi repository toe:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

Voeg de volgende regel toe in de editor. Sla daarna op en sluit de editor:
```
$	deb https://download.jitsi.org stable/
```

Nu kun je Jitsi Meet installeren. Het is aan te raden eerst alle pakketten te updaten:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Tijdens de installatie wordt je gevraagd een hostname in te vullen. Vul hier het subdomein in dat je voor je Jitsi Meet server hebt aangemaakt. In ons testvoorbeeld is dat: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)


Bevestig met "Ok". Er opent een nieuw venster waarin je wordt gevraagd of je een zelfondertekend TLS-certificaat wilt aanmaken of een bestaand certificaat wilt gebruiken. Kies voor "Generate a new self-signed certificate":

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)


De installatie van Jitsi Meet is nu klaar en het enige wat nog moet, is het ophalen van het TLS-certificaat.
Installeer het Certbot pakket:
```
$	apt install certbot
```

Start het script voor het installeren van het TLS-certificaat:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Tijdens het proces wordt gevraagd om een e-mailadres in te vullen dat wordt doorgegeven aan letsencrypt.org. Vul een e-mailadres in en bevestig.

Daarna zou Jitsi Meet volledig geïnstalleerd en actief moeten zijn op je server. Om te testen of Jitsi Meet goed werkt, typ je het subdomein dat je hebt ingesteld in de URL-balk van je browser. In deze tutorial is dat:
```
https://meet.zap-testdomain.de
```

Als de pagina met Jitsi Meet laadt, kun je meteen je eerste videovergadering starten.