---
id: dedicated-windows-fs-19
title: "Dedicated Server: Farming Simulator 2019 Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en efficiënt een Farming Simulator Dedicated Server 2019 op je Windows VPS of dedicated server installeert → Leer het nu"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS of dedicated server en wil je daarop de Farming Simulator Dedicated Server 2019 service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

## Voorbereiding

Je hebt een server nodig met Windows Server 2016/2019, minimaal 4x 2.4 GHz CPU (AMD/Intel), minstens 2GB RAM (DDR3/4) en 6GB vrije schijfruimte (bij voorkeur SSD of beter). De server moet draaien op een 64-bit architectuur.  
Daarnaast heb je een eigen GameLicense nodig (geen Steam-versie) en een publiek IPv4-adres. Een GPU of geluidskaart is niet nodig voor de Dedicated Server.  
Afhankelijk van hoeveel mods of DLC’s je op de dedicated server gebruikt, kunnen er meer resources nodig zijn.

## Stap 1 Digitale licentie aanschaffen

Je hebt een digitale versie van Farming Simulator 2019 nodig, de Steam-versie is niet geschikt.  
De digitale versie kun je kopen op de [FarmingSimulator website](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Na aankoop kun je Farming Simulator online downloaden via de link in de mail die je van Giants hebt ontvangen: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Belangrijk: In de mail vind je de GameKey die je nodig hebt voor de download én voor de latere activatie van de installatie.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Stap 2 Download Farming Simulator direct op je Windows server

Maak verbinding via [Initial Access (RDP)](vserver-windows-userdp.md) met je Windows server. Open daarna de browser en ga opnieuw naar de [link](https://eshop.giants-software.com/downloads.php) uit de mail. Voer je GameKey in en kies de download voor Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

Het bestand wordt dan gedownload en zou in je downloadmap moeten staan (deze map kan verschillen).

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Dubbelklik op het bestand om het te openen en start Setup.exe.  
Lees de gebruiksvoorwaarden (TOS) en bevestig deze. Kies daarna voor een standaard of aangepaste installatie, meestal is standaard voldoende.  
Klik op installeren en Farming Simulator 2019 wordt nu geïnstalleerd, dit kan een paar minuten duren.

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

Als de installatie klaar is, verschijnt het volgende bericht, klik op "Voltooien".

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

De basisinstallatie is nu afgerond.

## Stap 3 Activatie van het spel en configuratie van de dedicated server

Start nu Farming Simulator. Er zou een snelkoppeling op het bureaublad moeten staan, anders kun je het via het Windows-menu openen.  
Fouten over een ontbrekende GPU of iets dergelijks kun je negeren of sluiten met Nee/Annuleren. Farming Simulator hoeft alleen gestart te worden om de key in te voeren.

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

Zodra de key is herkend, verschijnt er een bevestiging.

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Stel nu een gebruikersnaam en wachtwoord in of lees deze uit in de Config van de Dedicated Server, zodat je kunt inloggen op de webinterface van de Dedicated Server.  
De Config vind je standaard onder:  
`C:\Program Files (x86)\Farming Simulator 2019` in het bestand `"dedicatedServer.xml"`.  
De inloggegevens kun je zelf aanpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Stap 4 Start de Farming Simulator 2019 Dedicated Server

Om de dedicated server te starten, moet je `"dedicatedServer.exe"` uitvoeren in dezelfde map waar `"dedicatedServer.xml"` staat.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Daarna kun je de webinterface openen via `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

Inloggen kan met de eerder ingestelde of uitgelezen gegevens uit `"dedicatedServer.xml"`.  
De verdere configuratie is intuïtief in de webinterface en kan met een paar klikken naar jouw wensen worden aangepast.

## Stap 5 Poorten vrijgeven in de firewall

De server moet natuurlijk publiekelijk bereikbaar zijn om met vrienden te kunnen spelen. Hiervoor moeten de poorten van de server in de Windows firewall worden vrijgegeven.  
De poorten 10823 en 8080 moeten openstaan voor het TCP-protocol. 10823 is de game server poort en 8080 is de webpoort voor de webinterface. De webpoort hoeft alleen open als je de webinterface extern wilt gebruiken; beheer kan ook lokaal via RDP op de Windows server.  
Hoe je poorten opent in Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).

Na het vrijgeven van de poorten is de server publiekelijk bereikbaar, mits deze gestart is.