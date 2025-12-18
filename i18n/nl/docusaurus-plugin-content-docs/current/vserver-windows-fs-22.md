---
id: vserver-windows-fs-22
title: "VPS: Farming Simulator 2022 Dedicated Server Windows Setup"
description: "Ontdek hoe je Farming Simulator Dedicated Server 2022 installeert op je Windows VPS voor soepele multiplayer gameplay → Leer het nu"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS en wil je de Farming Simulator Dedicated Server 2022 erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.
<InlineVoucher />

## Voorbereiding
Je hebt een server nodig met Windows Server 2016/2019, minimaal 4x 2.4 GHz CPU (AMD/Intel), minstens 2GB RAM (DDR3/4) en 6GB vrije schijfruimte (bij voorkeur SSD of beter). De server moet draaien op een 64-bit architectuur.  
Daarnaast heb je een eigen GameLicense nodig (geen Steam-versie) en een publieke IPv4-adres. Een GPU of geluidskaart is niet nodig voor de Dedicated Server.  
Afhankelijk van hoeveel mods of DLC’s je op de dedicated server zet, kunnen er meer resources nodig zijn.

## Stap 1 Digitale licentie aanschaffen

Je hebt een digitale versie van Farming Simulator 2022 nodig, dit mag niet de Steam-versie zijn.  
De digitale versie kun je kopen op de [Farming Simulator website](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Na aankoop kun je Farming Simulator online downloaden via de link in de mail die je van Giants hebt ontvangen: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Belangrijk: In de mail vind je de GameKey die je nodig hebt voor de download én voor de latere activatie van de installatie.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## Stap 2 Download Farming Simulator direct op je Windows server

Verbind via [Initial Access (RDP)](vserver-windows-userdp.md) met je Windows server. Open daarna de browser en ga opnieuw naar de [link](https://eshop.giants-software.com/downloads.php) uit de mail. Voer je GameKey in en kies de download voor Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

Het bestand wordt nu gedownload en staat in de downloadmap (deze kan verschillen).

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

Dubbelklik op het bestand om het te openen en start Setup.exe.  
Lees de TOS en bevestig deze. Kies daarna voor een standaard of aangepaste installatie, meestal is standaard voldoende.  
Klik op installeren en Farming Simulator 2022 wordt nu geïnstalleerd, dit kan een paar minuten duren.

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

Als de installatie klaar is, verschijnt het volgende bericht, klik op "Finish".

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

De basisinstallatie is nu voltooid.

## Stap 3 Activatie van het spel en configuratie van de dedicated server

Start nu Farming Simulator. Er zou een snelkoppeling op het bureaublad moeten staan, anders kun je het via het Windows-menu starten.  
Fouten over een ontbrekende GPU of iets dergelijks kun je negeren of sluiten met Nee/Annuleren. Farming Simulator hoeft alleen gestart te worden om de key in te voeren.

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

Stel nu een gebruikersnaam en wachtwoord in of lees deze uit in de Config van de Dedicated Server, zodat je kunt inloggen op de webinterface van de Dedicated Server.  
De config vind je standaard onder:  
`C:\Program Files (x86)\Farming Simulator 2022` met de naam `"dedicatedServer.xml"`.  
De inloggegevens kun je zelf aanpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## Stap 4 Start Farming Simulator 2022 Dedicated Server

Om de dedicated server te starten, moet je `"dedicatedServer.exe"` uitvoeren in dezelfde map waar `"dedicatedServer.xml"` staat.

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

Daarna kun je de webinterface openen via `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

Log in met de eerder ingestelde of uitgelezen gegevens uit `"dedicatedServer.xml"`.  
De verdere configuratie is super intuïtief in de webinterface en kan je met een paar klikken helemaal naar jouw wens instellen.

## Stap 5 Poorten openzetten in de firewall

Je server moet natuurlijk publiekelijk bereikbaar zijn om met vrienden te kunnen spelen. Hiervoor moeten de poorten in de Windows firewall opengezet worden. Poorten 10823 en 8080 moeten openstaan voor het TCP-protocol. 10823 is de game server poort en 8080 is de webpoort voor de webinterface. De webpoort hoef je alleen open te zetten als je de webinterface extern wilt gebruiken; beheer kan ook lokaal via RDP op de Windows server.  
Hoe je poorten opent in Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).

Na het openzetten van de poorten is je server publiekelijk bereikbaar, mits hij gestart is.

## Conclusie

Gefeliciteerd, je hebt Farming Simulator 2022 succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />