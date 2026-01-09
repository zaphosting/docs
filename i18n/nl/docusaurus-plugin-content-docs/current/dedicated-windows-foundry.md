---
id: dedicated-windows-foundry
title: "Dedicated Server: Foundry Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en efficiënt een Foundry Dedicated Server installeert op je Windows VPS of dedicated server → Leer het nu"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS of dedicated server en wil je daarop de Foundry Dedicated Server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="Hoe je Foundry Dedicated Server instelt op een Windows VPS!" description="Snap je het beter als je dingen in actie ziet? Wij fixen het! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever op de meest toffe manier info opneemt!"/>



## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Eerste Toegang (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt bij deze stap.

Zodra je op je server bent ingelogd, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het tooltje waarmee je makkelijk Steam workshop en dedicated server bestanden binnenhaalt. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak ergens op je server een nieuwe map aan, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het zojuist gedownloade **steamcmd.zip** bestand en plaats het in je `steamcmd` map. Pak het bestand uit door er met rechts op te klikken en de Windows unzip functie te gebruiken, of met een programma zoals 7zip of Winrar. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot de installatie helemaal klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je doorgaan met de installatie van de Foundry dedicated server in de volgende sectie.

## Installatie

Na de installatie kun je in het geopende **steamcmd.exe** command prompt commando’s uitvoeren. Je moet eerst inloggen via de **anonymous** gebruiker met het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad waar je de server wilt installeren. Bijvoorbeeld:
```
force_install_dir C:\Foundry-Server
```
:::

Voer nu het commando `app_update 2915550` uit om de download te starten. De App ID **2915550** is de **Foundry** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar geduld loont! :)
:::

Als het gelukt is, ga dan naar de downloadmap waar alle serverbestanden staan. Hier kun je de **FoundryDedicatedServerLauncher.exe** gebruiken om de server te starten. We raden echter aan eerst poorten te forwarden en je server te configureren.

### Poorten forwarden voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regelen voor de poorten die de dedicated server gebruikt. Dit kan via PowerShell commando’s (makkelijker) of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Open je Windows zoekbalk en zoek naar **PowerShell**. Klik met rechts en kies **Als Administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je PowerShell in Administrator modus draait, anders worden de instellingen mogelijk niet goed toegepast.
:::

Kopieer en plak de volgende commando’s in je PowerShell prompt:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Deze regels maken automatisch firewallregels aan die nodig zijn om je Foundry server publiek toegankelijk te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie van Windows om **Windows Firewall met geavanceerde beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je alleen de basis Windows Firewall pagina ziet.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je Foundry server. Klik hiervoor op binnenkomende en uitgaande regels en voeg ze toe voor de volgende protocollen en poorten:
- TCP binnenkomend en uitgaand: 3724, 27015
- UDP binnenkomend en uitgaand: 3724, 27015

Gebruik onze [Poort Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server bereikbaar en kun je verbinden via het IP-adres van je server. Ga hiervoor in het hoofdmenu naar Multiplayer, kies IP Direct Connect en vul je IP-adres en poort in (standaard 3724, zoals je hebt ingesteld).

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt is de setup van je Foundry server klaar. Je kunt de server verder configureren via een configuratiebestand. Ga terug naar je game map en maak een nieuw bestand aan met de naam **app.cfg** (als die nog niet bestaat) in de hoofdmap. Dit is dezelfde map als waar de **FoundryDedicatedServerLauncher.exe** staat.

Open het **app.cfg** bestand met notepad of een editor naar keuze en voeg configuratie-opties toe voor de parameters die je wilt aanpassen. Maak voor elke parameter een nieuwe regel met een gelijkteken en de waarde die je wilt instellen.

Bijvoorbeeld, hier zijn drie configuratie-opties:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Check onze [Server Configuratie](foundry-configuration.md) gids voor alle opties en wat ze doen.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdmap en start **FoundryDedicatedServerLauncher.exe** om het opstartproces te starten. Dit opent de serverconsole in een command prompt.

Je kunt nu direct verbinden met je server via IP door naar **Multiplayer->IP Direct Connect** te gaan en het IP-adres van je server en poort 3724 in te vullen (standaard en zoals je hebt geforward).

Wil je dat je server in de serverlijst verschijnt? Check dan onze [Server Configuratie](foundry-configuration.md) gids en voeg de juiste `server_name` en `server_is_public` parameters toe aan je configuratiebestand. Sla het bestand op en start de server opnieuw.

Je hebt Foundry succesvol geïnstalleerd op je Windows Dedicated Server.