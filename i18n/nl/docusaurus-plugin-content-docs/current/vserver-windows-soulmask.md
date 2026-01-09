---
id: vserver-windows-soulmask
title: "VPS: Soulmask Dedicated Server Windows Setup"
description: "Ontdek hoe je de Soulmask dedicated server installeert op je Windows VPS of dedicated server voor een soepele gameplay → Leer het nu"
sidebar_label: Soulmask
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS of dedicated server en wil je de Soulmask Dedicated server service daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt bij het verbinden.

Zodra je toegang hebt tot je server, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het tooltje waarmee je makkelijk verschillende Steam workshop en dedicated server bestanden downloadt. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak ergens op je server een nieuwe map aan, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je net hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand uit door er met rechts op te klikken en de Windows unzip functie te gebruiken, of met een programma zoals 7zip of WinRAR. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot het installatieproces helemaal klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je beginnen met het installeren van de Soulmask dedicated server in de volgende stap.

## Installatie

Na de installatie kun je commando’s uitvoeren in het **steamcmd.exe** command prompt dat je net hebt geopend. Je moet eerst inloggen via de **anonymous** gebruiker met het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad waar je de server wilt installeren. Bijvoorbeeld:
```
force_install_dir C:\Soulmask-Server
```
:::

Voer nu het commando `app_update 3017310` uit om de download te starten. De App ID **3017310** is de **Soulmask** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

Als het gelukt is, ga dan naar de downloadmap waar alle serverbestanden zijn opgeslagen. Hier kun je de **StartServer.bat** gebruiken om de server te starten. We raden echter aan eerst poort forwarding in te stellen en je server te configureren.

### Poort forwarding instellen voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regels aanpassen voor de poorten die de dedicated server gebruikt. Dit kan via PowerShell commando’s, wat makkelijker is, of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Open je Windows zoekbalk en zoek naar **PowerShell**. Klik met rechts en kies **Als administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je PowerShell in Administrator modus draait, anders worden de instellingen mogelijk niet goed toegepast.
:::

Plak vervolgens de volgende commando’s in je PowerShell prompt:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Deze regels maken automatisch firewallregels aan die nodig zijn om je Soulmask server publiek toegankelijk te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie in Windows om **Windows Firewall instellingen met geavanceerde beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je de basis Windows Firewall pagina opent.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je Soulmask server. Klik hiervoor op binnenkomende en uitgaande regels en voeg ze toe voor de volgende protocollen en poorten:
- TCP binnenkomend en uitgaand: 8777, 27015
- UDP binnenkomend en uitgaand: 8777, 27015

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server nu bereikbaar en kun je verbinden via het IP-adres van je server. Dit doe je door in het hoofdmenu naar Multiplayer te gaan, IP Direct Connect te kiezen en je IP-adres en poort in te voeren (standaard 8777, of wat je hebt ingesteld).

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de basis setup van je Soulmask server afgerond. Je kunt verdere serverconfiguratie doen door parameters aan te passen in je **StartServer.bat** bestand in de root directory en in het **GameUserSettings.ini** bestand onder `../WS/Saved/Config/WindowsServer`.

Bekijk onze [Server Configuratie](soulmask-configuration.md) pagina voor alle beschikbare parameters en opties voor je Soulmask server.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de root directory en voer **StartServer.bat** uit om het opstartproces te starten. Dit opent de serverconsole in een command prompt en begint met opstarten.

:::tip
Als je server niet start en het command prompt venster meteen sluit, ga dan naar de map `../WS/Saved/Logs` en check de nieuwste log om te zien wat er misgaat.

Er is een bekend probleem waarbij de Steam online service niet start op de Windows dedicated server binaries door verkeerde packaging. Als de fout met Steam te maken heeft, verplaats dan in je root directory de volgende bestanden naar de map `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Probeer daarna de server opnieuw te starten; dan zou het moeten lukken.
:::

Je kunt nu direct verbinden met je server via het IP-adres en poort 8777 in het multiplayer menu van het spel.

Wil je dat je server in de serverlijst verschijnt? Check dan onze [Server Configuratie](soulmask-configuration.md) en voeg de juiste `-SteamServerName` parameter toe aan je **StartServer.bat** bestand. Sla op en start de batch file opnieuw.

Je hebt Soulmask succesvol geïnstalleerd op je Windows Dedicated Server.

## Conclusie

Gefeliciteerd, je hebt de Soulmask Server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />