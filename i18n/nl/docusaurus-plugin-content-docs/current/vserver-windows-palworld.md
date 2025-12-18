---
id: vserver-windows-palworld
title: "VPS: Palworld Dedicated Server Windows Setup"
description: "Ontdek hoe je een Palworld Dedicated Server op je Windows VPS installeert voor soepel gamehosting → Leer het nu"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS en wil je de Palworld Dedicated Server erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="Hoe je Palworld Dedicated Server instelt op Windows VPS!" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever op de meest toffe manier info opneemt!"/>
<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt.

Zodra je op je server bent, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en hiermee kun je makkelijk Steam workshop en dedicated server bestanden downloaden. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak een nieuwe map aan ergens op je server, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je net hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand uit door rechts te klikken en de Windows unzip functie te gebruiken, of met een programma zoals 7zip of Winrar. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot het installatieproces helemaal klaar is.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je verder met het installeren van de Palworld dedicated server in de volgende stap.

## Installatie

Na de installatie kun je commando’s uitvoeren in het **steamcmd.exe** command prompt dat je net hebt geopend. Je moet eerst inloggen met de gebruiker **anonymous** via het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad waar je de server wilt installeren. Bijvoorbeeld:
```
force_install_dir C:\Palworld-Server
```
:::

Voer nu het commando `app_update 2394010` uit om de download te starten. De App ID **2394010** is de **Palworld** applicatie.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

Als het gelukt is, ga je naar de downloadmap waar alle serverbestanden staan. Hier kun je de **PalServer.exe** gebruiken om de server te starten. We raden echter aan eerst poorten te forwarden en je server te configureren.

### Poorten forwarden voor je server

Om ervoor te zorgen dat je server publiek toegankelijk is, moet je poort forwarding regelen voor de poorten die de dedicated server gebruikt. Dit kan via Powershell commando’s (makkelijker) of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met rechts en kies **Als Administrator uitvoeren** zodat je de juiste rechten hebt.

:::info
Zorg dat je Powershell als Administrator draait, anders worden de instellingen niet goed toegepast.
:::

Plak de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Deze regels maken automatisch firewallregels aan zodat je Palworld server publiek bereikbaar wordt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Open via de zoekfunctie in Windows **Windows Firewall instellingen met geavanceerde beveiliging**. Mogelijk moet je eerst op **Geavanceerde instellingen** klikken om het juiste venster te openen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Maak nieuwe regels aan voor je Palworld server. Doe dit voor inkomend en uitgaand verkeer met de volgende protocollen en poorten:
- TCP inkomend en uitgaand: 8211
- UDP inkomend en uitgaand: 8211

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server bereikbaar en kun je verbinden via het IP-adres van je server. Dit doe je door in de serverlijst onderaan te zoeken op: `[jouw_ip_adres]:8211`

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt is de setup van je Palworld server klaar. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de servermap.

Ga naar de volgende map:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Hier vind je het configuratiebestand **PalWorldSettings.ini**. Hiermee kun je allerlei serverinstellingen aanpassen. Bekijk onze [Server Configuratie](palworld-configuration.md) gids voor alle opties en wat ze doen.

:::note
Zie je dit bestand niet? Start je server dan minstens **één keer** zodat het automatisch wordt aangemaakt. Je kunt ook de standaardinstellingen kopiëren uit `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Xbox Mode inschakelen

Palworld dedicated servers kunnen nu ook als Microsoft Store/Xbox dedicated server draaien, zodat Xbox- en Microsoft Store PC-spelers samen op dezelfde server kunnen spelen.

:::note
Cross-play tussen Steam & Microsoft Store/Xbox versies is nog niet mogelijk. Je server kan óf voor Steam óf voor Microsoft Store/Xbox ingesteld worden.
:::

Ga naar deze map en open het bestand **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Voeg hierin de volgende regels toe om Xbox mode te activeren:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Sla het bestand op en bij de volgende keer opstarten draait de server in Xbox mode.

:::info
Op Xbox consoles kun je niet direct via IP verbinden, dus als je op Xbox wilt spelen moet je je dedicated server openbaar maken.

Maak hiervoor een nieuw bestand `StartServer.bat` aan in de root map met de inhoud: `PalServer.exe -publiclobby`. De speciale `-publiclobby` startoptie zet de server in Community Server modus zodat hij in de serverlijst verschijnt.

Zorg ook dat je een servernaam instelt die makkelijk te vinden is. Check onze [Server Configuratie](palworld-configuration.md) gids voor hoe je dat doet.
:::

## Server starten & verbinden

Nu is het tijd om je server te starten. Mogelijk moet je eerst [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) installeren als die nog niet op je Windows VPS staat.

Ga naar de hoofdmap van je Palworld server en start **PalServer.exe** om de server te starten. Er opent een console in een command prompt en de server start op. Als alles goed gaat, verschijnt je server in de serverlijst. Je kunt ook direct verbinden via de zoekbalk onderin de serverlijst met: `[jouw_ip_adres]:8211`.

## Afsluiting

Gefeliciteerd, je hebt de Palworld server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />