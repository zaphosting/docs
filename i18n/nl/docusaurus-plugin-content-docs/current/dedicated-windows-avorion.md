---
id: dedicated-windows-avorion
title: "Dedicated Server: Avorion Dedicated Server Windows Setup"
description: "Ontdek hoe je de Avorion Dedicated Server op je Windows VPS installeert voor een soepele gamehosting → Leer het nu"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS en wil je daarop de Avorion Dedicated Server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="How To Setup Avorion Dedicated Server on Windows VPS!" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>


## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) handleiding als je hulp nodig hebt.

Zodra je toegang hebt tot je server, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het tooltje waarmee je makkelijk Steam workshop en dedicated server bestanden downloadt. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak ergens op je server een nieuwe map aan, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je net hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand uit door rechts te klikken en de Windows unzip functie te gebruiken, of met een programma zoals 7zip of Winrar. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot het installatieproces helemaal klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je doorgaan met de installatie van de Avorion dedicated server in de volgende sectie.

## Installatie

Na de installatie zou je commando’s moeten kunnen uitvoeren in het **steamcmd.exe** command prompt dat je eerder opstartte. Je moet eerst inloggen via de **anonymous** gebruiker met het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad waar je de server wilt installeren. Bijvoorbeeld:
```
force_install_dir C:\Avorion-Server
```
:::

Voer nu het commando `app_update 565060` uit om de download te starten. De App ID **565060** is de **Avorion** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

Als het gelukt is, ga dan naar de downloadmap waar alle serverbestanden staan. Maak hier een kopie van het bestand **server.bat** en hernoem die naar **startserver.bat** of iets vergelijkbaars. Met dit nieuwe `.bat` bestand start je de server en kun je serverconfiguraties aanpassen in de volgende sectie. We raden aan eerst poort forwarding te regelen en je server te configureren.

### Poort Forwarding voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regelen voor de poorten die de dedicated server gebruikt. Dit kan via Powershell commando’s (makkelijker) of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met rechts en kies **Als Administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je Powershell als Administrator draait, anders worden de instellingen mogelijk niet goed toegepast.
:::

Plak vervolgens de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Deze regels maken automatisch firewallregels aan die nodig zijn om je Avorion server publiek toegankelijk te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie van Windows om **Windows Firewall met geavanceerde beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je alleen de basis Windows Firewall pagina ziet.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je Avorion server. Klik hiervoor op binnenkomende en uitgaande regels en voeg ze toe voor de volgende protocollen en poorten:
- TCP binnenkomend en uitgaand: 27000
- UDP binnenkomend en uitgaand: 27000, 27003, 27020, 27021

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) handleiding als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server nu bereikbaar en kun je verbinden via het IP-adres van je server. Dit doe je door in het hoofdmenu je karakter te selecteren, naar het tabblad **Find Games** te gaan en op **Add Server** te klikken. Vul hier je Server IP in met de poort (standaard 15636) en je serverwachtwoord (indien ingesteld, anders leeg laten).

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de setup van je Avorion server afgerond. Je kunt je serverinstellingen direct aanpassen via het **startserver.bat** bestand dat je eerder kopieerde. Open het bestand met een teksteditor zoals notepad en pas de parameters aan.

Wil je wereld-specifieke parameters en instellingen wijzigen? Dan moet je je galaxy saves openen en het **server.ini** configuratiebestand aanpassen. Dit bestand staat in je Windows AppData, te vinden via het volgende pad:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Je kunt dit pad makkelijk openen door tegelijk `CTRL` + `R` te drukken en in het run-venster het volgende pad in te voeren: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Klik op **OK** en je wordt direct naar de map gebracht.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Server starten & verbinden

Tijd om je server te starten! Ga naar de basismap van je Avorion server en start **startserver.bat** die je eerder maakte. Dit opent de serverconsole in een command prompt en start de server op. Je kunt nu direct verbinden via de in-game serverbrowser door je Server IP en poort (standaard 27000) in te voeren.

## Afsluiting

Gefeliciteerd, je hebt de Avorion server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!