---
id: dedicated-windows-palworld
title: "Dedicated Server: Palworld Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en efficiënt een Palworld Dedicated Server op je Windows VPS of server installeert → Leer het nu"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS of dedicated server en wil je daarop de Palworld Dedicated Server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="Hoe je Palworld Dedicated Server instelt op Windows VPS!" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>



## Voorbereiding

Begin met het verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Eerste Toegang (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt bij deze stap.

Zodra je toegang hebt tot je server, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het tooltje waarmee je makkelijk Steam workshop en dedicated server bestanden downloadt. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak ergens op je server een nieuwe map aan, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je net hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand uit door rechts te klikken en de Windows unzip functie te gebruiken, of met een programma zoals 7zip of Winrar. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot de installatie helemaal klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je verder met de installatie van de Palworld dedicated server in de volgende sectie.

## Installatie

Na de installatie zou je in het **steamcmd.exe** command prompt dat je eerder opende commando’s moeten kunnen uitvoeren. Je moet eerst inloggen via de **anonymous** gebruiker met het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad waar je de server wilt installeren. Bijvoorbeeld:
```
force_install_dir C:\Palworld-Server
```
:::

Voer nu het commando `app_update 2394010` uit om de download te starten. De App ID **2394010** is de **Palworld** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

Als het gelukt is, ga dan naar de downloadmap waar alle serverbestanden zijn opgeslagen. Hier kun je de **PalServer.exe** gebruiken om de server te starten. We raden echter aan eerst poort forwarding in te stellen en je server te configureren.

### Poort Forwarding instellen voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regels aanpassen voor de poorten die de dedicated server gebruikt. Dit kan via Powershell commando’s (makkelijker) of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met rechts en kies **Als Administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je Powershell als Administrator draait, anders worden de instellingen mogelijk niet correct toegepast.
:::

Plak vervolgens de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Deze regels maken automatisch firewallregels aan die nodig zijn om je Palworld server publiek toegankelijk te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie van Windows om **Windows Firewall Instellingen met Geavanceerde Beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je de basis Windows Firewall pagina opent.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je Palworld server. Klik hiervoor op binnenkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende protocollen en poorten:
- TCP binnenkomend en uitgaand: 8211
- UDP binnenkomend en uitgaand: 8211

Gebruik onze [Poort Forwarding (Firewall)](vserver-windows-port.md) gids als je hier extra hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server nu bereikbaar en kun je verbinden via het IP-adres van je server. Dit doe je door in de serverlijst te zoeken met je IP-adres en poort onderaan in de zoekbalk. Zoek op: `[jouw_ip_adres]:8211`

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de setup van je Palworld server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de map van je server.

Ga eerst naar de volgende map:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Hier vind je het configuratiebestand **PalWorldSettings.ini**. In dit bestand kun je allerlei instellingen voor je server aanpassen. Bekijk onze [Server Configuratie](palworld-configuration.md) gids voor alle opties en wat ze doen.

:::note
Zie je dit bestand niet? Start dan je server minstens **één keer** zodat het automatisch wordt aangemaakt. Je kunt ook de standaardinstellingen kopiëren uit `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Xbox Mode inschakelen

Palworld dedicated servers kunnen nu ook als Microsoft Store/Xbox dedicated server draaien, zodat Xbox spelers en Microsoft Store PC spelers samen op dezelfde server kunnen spelen.

:::note
Cross-play tussen Steam & Microsoft Store/Xbox versies is nog niet mogelijk. Je server kan óf voor Steam óf voor Microsoft Store/Xbox ingesteld worden.
:::

Ga naar de volgende map en open het bestand **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Voeg hierin de volgende regels toe om Xbox mode te activeren:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Sla het bestand op en bij de volgende keer dat je de server start, draait hij in Xbox mode.

:::info
Op Xbox consoles kun je niet direct via IP verbinden, dus als je op Xbox wilt spelen, moet je je dedicated server openbaar maken.

Maak hiervoor een nieuw `StartServer.bat` bestand aan in de root map en zet hierin: `PalServer.exe -publiclobby`. De speciale `-publiclobby` startoptie zet de server in Community Server modus, waardoor hij zichtbaar wordt in de serverlijst.

Zorg ook dat je een servernaam instelt die makkelijk te vinden is. Bekijk onze [Server Configuratie](palworld-configuration.md) gids voor hoe je dat doet.
:::

## Server starten & verbinden

Nu is het tijd om je server te starten. Mogelijk moet je [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) installeren als die nog niet op je Windows Dedicated Server staat.

Ga naar de hoofdmap van je Palworld server en start **PalServer.exe** om het opstartproces te beginnen. Dit opent de serverconsole in een command prompt en start de server op. Als alles goed gaat, verschijnt je server in de serverlijst. Je kunt ook direct verbinden door in de zoekbalk onderaan in de serverlijst te zoeken op: `[jouw_ip_adres]:8211`.

Je hebt Palworld succesvol geïnstalleerd op je Windows Dedicated Server.