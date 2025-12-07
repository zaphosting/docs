---
id: vserver-windows-vrising
title: "VPS: V-Rising Dedicated Server Windows Setup"
description: "Ontdek hoe je een V Rising dedicated Windows-server instelt voor optimale gameprestaties en soepele hosting → Leer het nu"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="Hoe je een V RISING Dedicated Windows Server instelt!" description="Snap je het beter als je dingen in actie ziet? Wij fixen het voor je! Duik in onze video die alles voor je uitzoekt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>
<InlineVoucher />

## Basisinformatie: 
Je hebt een server nodig die draait op Windows Server 2016/2019 met minimaal 4x 2.4 GHz CPU (AMD/Intel), minstens 4GB RAM (DDR3/4) en 6GB vrije schijfruimte (SSD of beter, aanbevolen). De server moet 64-bit architectuur gebruiken.

## Stap 1 Maak een map aan voor V-Rising

Eerst moet je verbinding maken met je server via [Initial Access (RDP)](vserver-windows-userdp.md). Zodra je verbonden bent, maak je een nieuwe map aan op je server waar de V-Rising bestanden in komen te staan.  
In dit voorbeeld maken we een nieuwe map op ons bureaublad.  
Dat doe je door met de rechtermuisknop te klikken.  
Kies dan "Nieuw -> Map".

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

Je mag de map een naam geven die jij wilt. In ons voorbeeld noemen we hem "VRising".

## Stap 2 Download SteamCMD naar je Windows-server

Open de browser en ga naar de [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Hiermee download je SteamCMD voor Windows naar je server.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

Het bestand wordt gedownload en staat in je downloadmap. (De downloadmap kan verschillen)

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

Voor overzicht kopiëren we het steamcmd.zip bestand naar de VRising map die we eerder op ons bureaublaat hebben gemaakt.  
Klik op het bestand en druk op "CTRL+C".  
Open daarna de VRising map en druk op "CTRL+V".  
Nu zie je het bestand in de VRising map.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

Klik met de rechtermuisknop op het steamcmd.zip bestand en kies "Alles uitpakken". Bevestig het bericht door op de knop "Uitpakken" te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

Als dat klaar is, dubbelklik je op het steamcmd bestand.  
Er opent een nieuw venster dat de steamcmd bestanden installeert.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## Stap 3 Download de V Rising bestanden

Als de steamcmd bestanden geïnstalleerd zijn, zie je dit in het geopende venster.

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

Nu geef je aan waar de bestanden gedownload moeten worden.  
Dat doe je met het commando "force_install_dir".  
Het volledige commando in ons voorbeeld is:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

Daarna log je in als anonieme gebruiker.  
Typ hiervoor "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

Als dat gelukt is, kunnen we eindelijk de bestanden downloaden.  
Gebruik hiervoor dit commando:  
app_update 1829350 validate

De bestanden worden nu gedownload.  
Dit kan een paar minuten duren.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

Als het proces klaar is, zie je alle bestanden in de VRising map op je server.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## Stap 4 Start en configureer de V Rising server

Je kunt het bestand start_server_example.bat aanpassen om wat instellingen te wijzigen.  
Klik met de rechtermuisknop op het bestand en kies "Bewerken".  
Je kunt de naam van de server en het pad waar het proces opgeslagen wordt aanpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

Meer instellingen vind je in de config-bestanden.  
Die staan in de map VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

In het ServerHostSettings.json bestand kun je algemene dingen aanpassen.  
Zoals poorten, een serverbeschrijving, de SaveInterval en bijvoorbeeld het wachtwoord van de gameserver.  
Ik heb de servernaam veranderd naar "ZAP-Hosting Test Server".

Om de server te starten dubbelklik je op het start_server_example.bat bestand.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

Het opstarten duurt even.  
Als de poorten goed zijn doorgestuurd, zie je de server straks in de serverlijst.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## Stap 5 Poorten vrijgeven in de firewall

De server moet natuurlijk publiekelijk bereikbaar zijn om met vrienden te spelen. Hiervoor moeten de poorten van de server opengezet worden in de Windows firewall. De poorten 9876 en 9877 moeten openstaan voor het TCP EN UDP protocol. 9876 is de game server poort en 9877 is de Query poort.  
Hoe je poorten opent in Windows, check je hier: [Port Forwarding (Firewall)](vserver-windows-port.md).

Na het vrijgeven van de poorten is de server publiek bereikbaar, mits hij gestart is.

## Conclusie

Gefeliciteerd, je hebt V-Rising succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />