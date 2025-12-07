---
id: dedicated-windows-vrising
title: "Dedicated Server: V-Rising Dedicated Server Windows Setup"
description: "Ontdek hoe je een V Rising dedicated Windows-server opzet voor optimale gameprestaties en serverbeheer → Leer het nu"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="Hoe je een V RISING Dedicated Windows Server opzet!" description="Snap je het beter als je dingen in actie ziet? Wij fixen het voor je! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>



## Basisinformatie: 
Je hebt een server nodig met Windows Server 2016/2019, minimaal 4x 2.4 GHz CPU (AMD/Intel), minstens 4GB RAM (DDR3/4) en 6GB vrije schijfruimte (SSD of beter, aanbevolen). De server moet draaien op 64-bit architectuur.

## Stap 1 Maak een map aan voor V-Rising

Eerst moet je verbinding maken met je server via [Initial Access (RDP)](vserver-windows-userdp.md). Zodra je verbonden bent, maak je een nieuwe map aan op je server waar de V-Rising bestanden in geïnstalleerd worden.  
In dit voorbeeld maken we een nieuwe map op ons bureaublad.  
Dit doe je door met de rechtermuisknop te klikken.  
Kies dan "Nieuw -> Map".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

Je mag de map een naam geven die je zelf wilt. In ons voorbeeld noemen we hem "VRising".

## Stap 2 Download SteamCMD naar je Windows-server

Open je browser en ga naar de [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Hiermee download je SteamCMD voor Windows naar je server.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

Het bestand wordt gedownload en staat in de downloadmap. (De downloadmap kan verschillen)

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

Voor overzicht kopiëren we het steamcmd.zip bestand naar de VRising map die we eerder op ons bureaublad hebben gemaakt.  
Klik op het bestand en druk op "CTRL+C".  
Open daarna de VRising map op je bureaublad en druk op "CTRL+V".  
Nu zie je het bestand in de VRising map.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

Klik met de rechtermuisknop op het steamcmd.zip bestand en kies "Alles uitpakken". Bevestig het bericht dat verschijnt door op de knop "Uitpakken" te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

Als dat klaar is, dubbelklik je op het steamcmd bestand.  
Er opent een nieuw venster dat de steamcmd bestanden installeert.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## Stap 3 Download de V Rising bestanden

Zodra de steamcmd bestanden geïnstalleerd zijn, zie je dit in het geopende venster.

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

Nu geef je aan waar de bestanden gedownload moeten worden.  
Dat doe je met het commando "force_install_dir".  
Het volledige commando in ons voorbeeld is:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

Daarna log je in als anonieme gebruiker.  
Typ hiervoor "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

Als dat gelukt is, kunnen we eindelijk de bestanden downloaden.  
Gebruik hiervoor het commando:  
app_update 1829350 validate

De bestanden worden nu gedownload.  
Dit kan een paar minuten duren.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

Als het proces klaar is, zie je alle bestanden in de VRising map op je server.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## Stap 4 Start en configureer de V Rising server

Je kunt het bestand start_server_example.bat aanpassen om wat instellingen te wijzigen.  
Klik met de rechtermuisknop op het bestand en kies "Bewerken".  
Je kunt de naam van de server en het pad waar de savebestanden komen aanpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

Meer instellingen kun je aanpassen in de configbestanden.  
Die vind je in de map VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

In het ServerHostSettings.json bestand kun je algemene dingen aanpassen, zoals poorten, serverbeschrijving, save-interval en bijvoorbeeld het wachtwoord van de gameserver.  
Ik heb de servernaam veranderd naar "ZAP-Hosting Test Server".

Om de server te starten dubbelklik je op het start_server_example.bat bestand.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

Het opstarten duurt even.  
Als de poorten goed zijn doorgestuurd, zie je de server daarna in de serverlijst.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## Stap 5 Open poorten in de firewall

De server moet natuurlijk publiekelijk bereikbaar zijn om met vrienden te spelen. Daarom moeten de poorten van de server opengezet worden in de Windows firewall. De poorten 9876 en 9877 moeten openstaan voor zowel TCP als UDP. Poort 9876 is de game server poort en 9877 is de Query poort.  
Hoe je poorten opent in Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).

Na het openzetten van de poorten is de server publiekelijk bereikbaar, mits hij gestart is.