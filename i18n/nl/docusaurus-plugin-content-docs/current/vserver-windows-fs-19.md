---
id: vserver-windows-fs-19
title: "VPS: Farming Simulator 2019 Dedicated Server Windows Setup"
description: "Leer hoe je een Farming Simulator Dedicated Server 2019 op een Windows VPS installeert voor soepele multiplayer gameplay → Leer het nu"
sidebar_label: Farming Simulator 2019
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS en wil je de Farming Simulator Dedicated Server 2019 erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.
<InlineVoucher />

## Voorbereiding

Je hebt een server nodig die draait op Windows Server 2016/2019 met minimaal een 4x 2.4 GHz CPU (AMD/Intel), minstens 2GB RAM (DDR3/4) en 6GB vrije schijfruimte (bij voorkeur SSD of beter). De server moet op een 64-bit architectuur draaien.  
Daarnaast is een eigen GameLicense vereist (geen Steam-versie), evenals een publieke IPv4-adres. Een GPU of geluidskaart is niet nodig voor de Dedicated Server.  
Afhankelijk van hoeveel mods of DLC’s je op de dedicated server gebruikt, kunnen er meer resources nodig zijn.

## Stap 1 Digitale licentie aanschaffen

Je hebt een digitale versie van Farming Simulator 2019 nodig, het mag geen Steam-versie zijn.  
De digitale versie kun je kopen op de [Farming Simulator website](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Na aankoop kun je Farming Simulator online downloaden via de link in de mail die je van Giants hebt ontvangen: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Belangrijk: In de mail vind je de GameKey die je nodig hebt voor de download en later voor de activatie van de installatie.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Stap 2 Download Farming Simulator direct op je Windows server

Verbind via [Initial Access (RDP)](vserver-windows-userdp.md) met je Windows server. Open daarna de browser en ga opnieuw naar de [link](https://eshop.giants-software.com/downloads.php) uit de mail. Voer je GameKey in en kies de download voor Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

Het bestand wordt dan gedownload en zou in je downloadmap moeten staan (deze map kan verschillen).

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Dubbelklik op het bestand om het te openen en voer Setup.exe uit.  
Lees daarna de gebruiksvoorwaarden (TOS) en bevestig deze. Je kunt kiezen voor een standaard of aangepaste installatie, meestal is standaard voldoende.  
Klik op installeren en Farming Simulator 2019 wordt nu geïnstalleerd, dit kan een paar minuten duren.

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

Als de installatie klaar is, verschijnt de volgende melding die je bevestigt met "Voltooien".

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

De basisinstallatie is nu voltooid.

## Stap 3 Activatie van het spel en configuratie van de dedicated server

Start nu Farming Simulator. Er zou een snelkoppeling op het bureaublad moeten staan, anders kun je het via het Windows-menu starten.  
Foutmeldingen over een ontbrekende GPU of iets dergelijks kun je negeren of sluiten met Nee/Annuleren. Farming Simulator hoeft alleen gestart te worden om de key in te voeren.

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

Zodra de key is herkend, verschijnt er een bevestiging.

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Stel nu een gebruikersnaam en wachtwoord in of lees deze uit in de Config van de Dedicated Server, zodat je kunt inloggen op de webinterface van de Dedicated Server.  
De Config vind je standaard onder:  
`C:\Program Files (x86)\Farming Simulator 2019` met de naam `"dedicatedServer.xml"`.  
De inloggegevens kun je zelf aanpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Stap 4 Start de Farming Simulator 2019 Dedicated Server

Om de dedicated server te starten, moet je `"dedicatedServer.exe"` uitvoeren in dezelfde map waar `"dedicatedServer.xml"` staat.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Daarna kun je de webinterface openen via `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

Inloggen kan met de eerder ingestelde of uitgelezen gegevens uit `"dedicatedServer.xml"`.  
De verdere configuratie is intuïtief in de webinterface en kan met een paar klikken naar wens worden aangepast.

## Stap 5 Poorten vrijgeven in de firewall

De server moet natuurlijk publiekelijk bereikbaar zijn om met vrienden te kunnen spelen. Hiervoor moeten de poorten van de server in de Windows firewall worden vrijgegeven.  
De poorten 10823 en 8080 moeten openstaan voor het TCP-protocol. 10823 is de game server poort en 8080 is de webpoort voor de webinterface. De webpoort hoeft alleen open als je de webinterface extern wilt gebruiken; beheer kan ook lokaal via RDP op de Windows server.  
Hoe je poorten opent in Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).

Na het vrijgeven van de poorten is de server publiekelijk bereikbaar, mits deze gestart is.

## Conclusie

Gefeliciteerd, je hebt Farming Simulator 2019 succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />