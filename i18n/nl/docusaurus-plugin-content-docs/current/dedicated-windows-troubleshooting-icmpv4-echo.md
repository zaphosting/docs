---
id: dedicated-windows-troubleshooting-icmpv4-echo
title: "Dedicated: Netwerkproblemen oplossen - ICMPv4 Echo mist – Server lijkt offline"
description: "Ontdek hoe je ICMPv4 Echo-verzoeken toestaat in de Windows Firewall zodat je server correct wordt gedetecteerd door monitoringsystemen → Leer het nu"
sidebar_label: ICMPv4 Echo mist
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Soms lijkt een Windows-server **offline in het controlepaneel** terwijl het systeem zelf gewoon draait. Dit komt meestal door firewall-instellingen die **ICMPv4 Echo-verzoeken** blokkeren. Deze verzoeken worden gebruikt door de bekende `ping`-opdracht en zijn populair bij monitoringsystemen om te checken of een server of IP-adres bereikbaar is.

Als de Windows Firewall ICMP Echo-verzoeken blokkeert, kan het monitoringsysteem geen reactie van de server krijgen. Daardoor kan het controlepaneel de server of de toegewezen IP-adressen als offline tonen, terwijl de server zelf gewoon zonder problemen draait.

![img](https://screensaver01.zap-hosting.com/index.php/s/EBAybY5LRfk89kN/preview)



## Oorzaak

De meest voorkomende reden is dat er een regel mist in de **Windows Defender Firewall** die inkomende ICMPv4 Echo-verzoeken toestaat. Zonder deze regel blokkeert de firewall standaard ping-verzoeken.

Monitoringsystemen vertrouwen op deze reacties om te bepalen of een server beschikbaar is. Daarom lijkt het systeem offline, ook al draaien de services op de server gewoon door.



## Oplossing

Om dit op te lossen moet je een firewallregel aanmaken die ICMPv4 Echo-verzoeken toestaat. Begin met verbinden via de HTML5-console in het iLO-dashboard. Klik hiervoor op **HTML5** in het dashboard en log in met je gebruikelijke inloggegevens.

![img](https://screensaver01.zap-hosting.com/index.php/s/PE87d8gZSB7c9gk/download)

Als je bent ingelogd, open je de interface **Windows Defender Firewall met Geavanceerde Beveiliging**. Druk op `Windows + R`, typ het volgende commando en druk op Enter:

```
wf.msc
```
Het venster voor geavanceerde firewallconfiguratie opent. Kies in het linkermenu voor **Inbound Rules** (Inkomende regels), want de server moet inkomende ICMP-verzoeken accepteren. Klik rechts op **New Rule** om een nieuwe firewallregel aan te maken.

Kies tijdens het aanmaken van de regel voor **Custom** als type regel. Selecteer in de volgende stap het protocoltype **ICMPv4**. Open daarna de **Customize**-instellingen en vink de optie **Echo Request** aan, zodat de server kan reageren op ping-verzoeken.

Ga verder met de wizard en kies bij actie voor **Allow the connection** (Verbinding toestaan). Bij het profielselectiescherm kun je de regel meestal voor alle profielen inschakelen, zodat het werkt ongeacht of de server in een openbaar, privé of domeinnetwerk zit.

Geef de regel tot slot een duidelijke naam, bijvoorbeeld `Allow ICMPv4 Echo Requests`. Na het afronden van de wizard staat de nieuwe regel direct inkomende ICMP Echo-verzoeken toe.

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## Controleren

Als de regel is aangemaakt, kun je checken of de server reageert op ping-verzoeken. Voer vanaf een ander systeem het volgende commando uit:
```
ping <JOUW_SERVER_IP>
```
Als de server reageert, kan het monitoringsysteem hem ook weer detecteren. Na een korte tijd zou de serverstatus in het paneel moeten veranderen van offline naar online.



## Conclusie

Gefeliciteerd! Door de ICMPv4 Echo-regel in de Windows Firewall aan te maken, zorg je ervoor dat je Windows Dedicated Server weer reageert op ping-verzoeken.

Dit zorgt ervoor dat monitoringsystemen de beschikbaarheid van je server correct kunnen detecteren en voorkomt dat hij offline lijkt in het controlepaneel.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂