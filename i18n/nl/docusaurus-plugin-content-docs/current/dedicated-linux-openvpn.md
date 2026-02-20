---
id: dedicated-linux-openvpn
title: "OpenVPN instellen op een Linux-server - Creëer je veilige VPN-infrastructuur"
description: "Ontdek hoe je je internetverbinding beveiligt en toegang krijgt tot geblokkeerde content met OpenVPN op Linux-servers → Leer het nu"
sidebar_label: OpenVPN installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

OpenVPN is krachtige en veelzijdige VPN-software die een veilige verbinding via het internet mogelijk maakt. Het is een open source oplossing die robuuste en configureerbare VPN-technologie biedt om een versleutelde verbinding tot stand te brengen tussen jouw apparaat en een VPN-server. Met OpenVPN kun je je internetverbinding beveiligen, je online privacy beschermen en geo-beperkte content bekijken, waar je ook bent ter wereld. In deze gids nemen we je mee door het proces van het installeren en configureren van de **OpenVPN**-dienst op een Linux-server.

## Voorbereiding

Allereerst moet de netwerkdriver **TUN** geactiveerd worden. Deze stap is niet nodig voor root-servers.  
Hiervoor maak je een nieuw bestand aan met de naam **tunscript.sh** in de map **/usr/sbin**.

```
nano /usr/sbin/tunscript.sh 
```

Voeg daarna de volgende regels toe:
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Sla het bestand op met `CTRL+O`, bevestig met `Y` en druk op `Enter`. Sluit het bestand af met `CTRL+X`. Voer daarna het volgende commando uit:

```
chmod +x /usr/sbin/tunscript.sh
```

Daarna open je met ``crontab -e`` de cron-editor en kies je de **nano editor** [1]. Voeg deze regel toe aan het einde van het bestand:
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Sla het bestand weer op met `CTRL+O`, bevestig met `Y` en druk op `Enter`. Sluit af met `CTRL+X`. Na een herstart zou dit automatisch moeten werken.

## Installatie

Om OpenVPN te installeren, voer je het volgende commando uit in de console:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Er verschijnt een dialoog waarin je wordt gevraagd of je UDP of TCP wilt gebruiken. Wij raden UDP aan, dus typ `1` en druk op `Enter`. Vervolgens wordt je gevraagd om een poort voor OpenVPN te kiezen; wij adviseren de standaardpoort te gebruiken.

Daarna moet je de DNS-server instellen. Wij raden aan om Google Public DNS of Cloudflare DNS te gebruiken:
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Vervolgens geef je een clientnaam op. Dit kan elke naam zijn die je wilt, bijvoorbeeld de naam van je apparaat.

## Configuratie

### Meer clients toevoegen

Wil je meerdere verbindingen maken? Dan is het handig om meerdere accounts aan te maken. Voer hiervoor het volgende commando uit:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Kies `1` en bevestig. Daarna geef je de clientnaam op.

### Clients verwijderen

Gebruik het volgende commando om een client te verwijderen:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Selecteer het nummer van de client die je wilt verwijderen en druk op `Enter`. Je wordt gevraagd om de verwijdering te bevestigen. Druk op `Y` en daarna op `Enter` als je zeker bent. De client wordt dan verwijderd.

## Verwijderen

Heb je OpenVPN niet meer nodig? Dan kun je het zo verwijderen:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Druk op `3` en bevestig. Bevestig nogmaals en OpenVPN wordt verwijderd.

## Verbinden met de VPN

Wil je verbinding maken met je VPN? Dan raden we aan om de **[OpenVPN client](https://openvpn.net/community-downloads/)** te gebruiken. Download deze simpelweg op het apparaat waarmee je wilt verbinden.

Verbind via SFTP met je server om het aangemaakte .ovpn-bestand te downloaden en verwijder het bestand daarna van je server. Zodra je de client hebt geïnstalleerd, start je het programma. Klik met de rechtermuisknop op het OpenVPN-icoon in de taakbalk. Klik vervolgens op 'Import file' en selecteer het eerder gedownloade bestand, klik op 'Open'. Om te verbinden klik je opnieuw op het icoon en kies je "Connect".

:::info
Heb je meerdere bestanden geïmporteerd? Dan moet je eerst de client selecteren die je wilt gebruiken en daarna op Connect klikken.
:::