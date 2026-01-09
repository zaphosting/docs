---
id: dedicated-windows-conan
title: "Dedicated Server: Conan Exiles Dedicated Server Windows Setup"
description: "Ontdek hoe je een Conan Exiles Dedicated Server op een Windows Dedicated Server installeert voor soepele gameplay en serverbeheer → Leer het nu"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows Dedicated Server en wil je daarop de Conan Exiles Dedicated Server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

## Voorbereiding

Begin met het verbinden met je Dedicated Server via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt bij het verbinden.

:::note Server Launcher Tool
Als alternatief voor SteamCMD onderhouden de ontwikkelaars van Conan Exiles een handige server launcher tool die je op Windows kunt gebruiken om het starten van een server makkelijker te maken.

We raden aan om de [Officiële Forum Post](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) te lezen als je deze tool wilt gebruiken.
:::

Zodra je toegang hebt tot je server, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het hulpmiddel waarmee je eenvoudig verschillende Steam workshop en dedicated server bestanden kunt downloaden. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak een nieuwe map aan ergens op je server, in dit voorbeeld noemen we deze `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je zojuist hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand nu uit door er met de rechtermuisknop op te klikken en de Windows unzip-functionaliteit te gebruiken, of een programma zoals 7zip of Winrar. Dit resulteert in een uitgepakte **steamcmd.exe**.

Start simpelweg **steamcmd.exe** en wacht tot het installatieproces volledig is afgerond.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je doorgaan met de installatie van de Conan Exiles dedicated server in de volgende sectie.

## Installatie

Na de installatie zou je commando’s moeten kunnen uitvoeren binnen de **steamcmd.exe** command prompt die je eerder hebt gestart. Je moet eerst inloggen voordat je iets kunt doen, via de **anonymous** gebruiker, met het commando: `login anonymous`

Eenmaal ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad dat je wilt gebruiken voor je server. Bijvoorbeeld:
```
force_install_dir C:\Conan-Server
```
:::

Voer nu het commando `app_update 443030` uit om de download te starten. De App ID **443030** is de **Conan Exiles** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Onderbreek het proces niet voordat het is afgerond om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

Als het downloaden gelukt is, ga dan naar de downloadmap waar alle serverbestanden zijn opgeslagen. Hier kun je de **StartServer.bat** gebruiken om de server te starten. We raden echter aan eerst poort forwarding in te stellen en je server te configureren.

### Poort forwarding instellen voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regels aanpassen voor de poorten die de dedicated server gebruikt. Dit kan je doen via Powershell commando’s, wat makkelijker is, of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met de rechtermuisknop en kies **Als administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je Powershell in Administrator modus draait, anders worden de instellingen mogelijk niet correct toegepast.
:::

Kopieer en plak vervolgens de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Deze commando’s maken automatisch firewallregels aan die nodig zijn om je Conan Exiles server publiekelijk bereikbaar te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie van Windows om **Windows Firewall instellingen met geavanceerde beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je de basis Windows Firewall pagina opent.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je Conan Exiles server. Klik hiervoor op binnenkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende protocollen en poorten:
- TCP binnenkomend en uitgaand: 7777, 25575
- UDP binnenkomend en uitgaand: 7777, 7778, 27015

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier extra hulp bij nodig hebt.

</TabItem>
</Tabs>

Zodra je deze regels hebt toegevoegd, is je server bereikbaar en kun je verbinden via het IP-adres van je server. We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de setup van je Conan Exiles server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand dat je vindt in de map van je server.

Navigeer eerst naar de volgende map:
```
../Conan-Server/Engine/Config/Windows
```

Hier vind je het configuratiebestand **WindowsServerEngine.ini**. In dit bestand kun je allerlei instellingen aanpassen door specifieke parameters toe te voegen.

Als voorbeeld, om een servernaam, wachtwoord en admin wachtwoord toe te voegen, voeg je het volgende toe aan het bestand:
```
[OnlineSubsystem]
ServerName=[jouw_servernaam]
ServerPassword=[jouw_wachtwoord]

[ServerSettings]
AdminPassword=[jouw_adminwachtwoord]
```

We raden aan om de [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) te bekijken voor een uitgebreide lijst met beschikbare opties.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdmap van je Conan Exiles server en start **StartServer.bat** die je eerder hebt gemaakt om het opstartproces te starten. Dit opent de serverconsole in een command prompt en begint met opstarten. Je kunt nu direct verbinden met je server via de in-game serverbrowser door het IP-adres en de poort van je server in te voeren (standaard is 7777).

## Conclusie

Gefeliciteerd, je hebt de Conan Exiles server succesvol geïnstalleerd en geconfigureerd op je dedicated server! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!