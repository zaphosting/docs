---
id: dedicated-windows-soulmask
title: "Dedicated Server: Soulmask Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en efficiënt de Soulmask dedicated server installeert op je Windows VPS of dedicated server → Leer het nu"
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS of dedicated server en wil je de Soulmask Dedicated server service daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt bij het verbinden.

Zodra je toegang hebt tot je server, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het tooltje waarmee je makkelijk verschillende Steam workshop en dedicated server bestanden kunt downloaden. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak een nieuwe map aan ergens op je server, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je net hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand uit door er met rechts op te klikken en de Windows unzip functie te gebruiken, of met een programma zoals 7zip of WinRAR. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot het installatieproces helemaal klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je doorgaan met de installatie van de Soulmask dedicated server in de volgende sectie.

## Installatie

Na de installatie kun je commando’s uitvoeren in de **steamcmd.exe** command prompt die je net hebt geopend. Je moet eerst inloggen via de **anonymous** gebruiker met het commando: `login anonymous`

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

Als het gelukt is, ga dan naar de downloadmap waar alle serverbestanden staan. Hier kun je de **StartServer.bat** gebruiken om de server te starten. We raden echter aan eerst poorten te forwarden en je server te configureren.

### Poorten forwarden voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regelen voor de poorten die de dedicated server gebruikt. Dit kan via PowerShell commando’s, wat makkelijker is, of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Open je Windows zoekbalk en zoek naar **PowerShell**. Klik met rechts en kies **Als administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je PowerShell als administrator draait, anders worden de instellingen mogelijk niet goed toegepast.
:::

Kopieer en plak de volgende commando’s in je PowerShell prompt:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Deze regels maken automatisch de firewallregels aan die nodig zijn om je Soulmask server publiekelijk bereikbaar te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie in Windows om **Windows Firewall instellingen met geavanceerde beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je de basis Windows Firewall pagina opent.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je Soulmask server. Doe dit door inkomende en uitgaande regels toe te voegen voor de volgende protocollen en poorten:
- TCP inkomend en uitgaand: 8777, 27015
- UDP inkomend en uitgaand: 8777, 27015

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server bereikbaar en kun je verbinden via het IP-adres van je server. Dit doe je door in het hoofdmenu naar Multiplayer te gaan, IP Direct Connect te kiezen en je IP-adres en poort in te vullen (standaard 8777, tenzij je iets anders hebt ingesteld).

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt is de setup van je Soulmask server klaar. Je kunt de server verder configureren door parameters aan te passen in je **StartServer.bat** bestand in de root directory en in het **GameUserSettings.ini** bestand onder `../WS/Saved/Config/WindowsServer`.

Bekijk onze [Server Configuratie](soulmask-configuration.md) gids om alle beschikbare parameters en opties voor je Soulmask server te zien.

## Server starten & verbinden

Tijd om je server te starten! Ga naar de root directory en voer **StartServer.bat** uit om het opstartproces te starten. Dit opent de serverconsole in een command prompt en start de server op.

:::tip
Als je server niet start en het command prompt venster meteen sluit, ga dan naar de map `../WS/Saved/Logs` en check het nieuwste logbestand om te zien wat er misgaat.

Er is een bekend probleem waarbij de Steam online service niet start op de Windows dedicated server binaries door verkeerde packaging. Als de fout met Steam te maken heeft, verplaats dan de volgende bestanden vanuit je root directory naar `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Probeer daarna de server opnieuw te starten; dan zou het moeten lukken.
:::

Je kunt nu direct verbinden met je server via het IP-adres en poort 8777 in het multiplayer menu van het spel.

Wil je dat je server in de serverlijst verschijnt? Check dan onze [Server Configuratie](soulmask-configuration.md) gids en voeg de juiste `-SteamServerName` parameter toe aan je **StartServer.bat** bestand. Sla het bestand op en start de batch file opnieuw.

Gefeliciteerd, je hebt Soulmask succesvol geïnstalleerd op je Windows Dedicated Server!