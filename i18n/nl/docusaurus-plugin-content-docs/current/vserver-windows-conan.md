---
id: vserver-windows-conan
title: "VPS: Conan Exiles Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en makkelijk een Conan Exiles Dedicated server op je Windows VPS installeert → Lees nu verder"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS en wil je daar de Conan Exiles Dedicated server op installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) handleiding als je hulp nodig hebt bij het verbinden.

:::note Server Launcher Tool
Als alternatief voor SteamCMD onderhouden de ontwikkelaars van Conan Exiles een handige server launcher tool die je op Windows kunt gebruiken om het starten van een server makkelijker te maken.

We raden aan om de [Officiële Forum Post](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) te lezen als je deze tool wilt gebruiken.
:::

Zodra je toegang hebt tot je server, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en hiermee kun je makkelijk Steam workshop en dedicated server bestanden downloaden. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak een nieuwe map aan ergens op je server, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je net hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand uit door er met rechts op te klikken en de Windows unzip functie te gebruiken, of gebruik een programma zoals 7zip of Winrar. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot het installatieproces helemaal klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je doorgaan met het installeren van de Conan Exiles dedicated server in de volgende stap.

## Installatie

Na de installatie kun je commando’s uitvoeren in het **steamcmd.exe** command prompt dat je net hebt geopend. Je moet eerst inloggen met de gebruiker **anonymous** via het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad waar je de server wilt installeren. Bijvoorbeeld:
```
force_install_dir C:\Conan-Server
```
:::

Voer nu het commando `app_update 443030` uit om de download te starten. De App ID **443030** is de **Conan Exiles** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

Als het downloaden klaar is, ga je naar de map waar de serverbestanden zijn gedownload. Hier kun je de **StartServer.bat** gebruiken om de server te starten. We raden echter aan eerst poorten te forwarden en je server te configureren.

### Poorten forwarden voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding instellen voor de poorten die de dedicated server gebruikt. Dit kan via Powershell commando’s (makkelijker) of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met rechts en kies **Als Administrator uitvoeren** zodat je de juiste rechten hebt.

:::info
Zorg dat je Powershell als Administrator draait, anders worden de instellingen mogelijk niet correct toegepast.
:::

Plak vervolgens de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Deze regels maken automatisch de firewallregels aan die nodig zijn om je Conan Exiles server publiek toegankelijk te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie in Windows om **Windows Firewall instellingen met geavanceerde beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je de basis Windows Firewall pagina opent.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je Conan Exiles server. Klik hiervoor op binnenkomende en uitgaande regels en voeg de volgende protocollen en poorten toe:
- TCP binnenkomend en uitgaand: 7777, 25575
- UDP binnenkomend en uitgaand: 7777, 7778, 27015

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) handleiding als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server bereikbaar en kun je verbinden via het IP-adres van je server. We raden aan eerst je serverinstellingen te configureren via de volgende stap voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de basis setup van je Conan Exiles server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de servermap.

Ga eerst naar de volgende map:
```
../Conan-Server/Engine/Config/Windows
```

Hier vind je het configuratiebestand **WindowsServerEngine.ini**. In dit bestand kun je allerlei instellingen aanpassen door specifieke parameters toe te voegen.

Als voorbeeld, om een servernaam, wachtwoord en admin wachtwoord toe te voegen, voeg je het volgende toe:
```
[OnlineSubsystem]
ServerName=[jouw_servernaam]
ServerPassword=[jouw_wachtwoord]

[ServerSettings]
AdminPassword=[jouw_adminwachtwoord]
```

We raden aan om de [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) te bekijken voor een uitgebreide lijst met opties.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdmap van je Conan Exiles server en start **StartServer.bat** die je eerder hebt gemaakt. Dit opent de serverconsole in een command prompt en start de server op. Je kunt nu direct verbinden via de in-game serverbrowser door het IP-adres en poort (standaard 7777) in te voeren.

## Afsluiting

Gefeliciteerd, je hebt succesvol de Conan Exiles server geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />