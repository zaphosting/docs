---
id: dedicated-windows-enshrouded
title: "Dedicated Server: Enshrouded Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en makkelijk een Enshrouded Dedicated Server installeert op je Windows VPS of dedicated server → Leer het nu"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Windows VPS of dedicated server en wil je daarop de Enshrouded Dedicated Server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="Hoe je Enshrouded Dedicated Server instelt op Windows VPS!" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>



## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Eerste Toegang (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt.

Zodra je op je server bent, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het tooltje waarmee je makkelijk Steam workshop en dedicated server bestanden binnenhaalt. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak ergens op je server een nieuwe map aan, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je net hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand uit door er met rechts op te klikken en de Windows unzip functie te gebruiken, of via programma’s zoals 7zip of Winrar. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot de installatie helemaal klaar is.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je doorgaan met het installeren van de Enshrouded dedicated server in de volgende stap.

## Installatie

Na de installatie kun je in het **steamcmd.exe** command prompt dat je net opende commando’s uitvoeren. Je moet eerst inloggen met de gebruiker **anonymous** via het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad waar je de server wilt installeren. Bijvoorbeeld:
```
force_install_dir C:\Enshrouded-Server
```
:::

Voer nu het commando `app_update 2278520` uit om de download te starten. De App ID **2278520** is de **Enshrouded** applicatie.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

Als het gelukt is, ga dan naar de downloadmap waar alle serverbestanden zijn binnengehaald. Hier kun je de **enshrouded_server.exe** gebruiken om de server te starten. We raden echter aan eerst poort forwarding in te stellen en je server te configureren.

### Poort forwarding instellen voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regelen voor de poorten die de dedicated server gebruikt. Dit kan via Powershell commando’s (makkelijker) of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open de Windows zoekbalk en zoek naar **Powershell**. Klik met rechts en kies **Als Administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je Powershell als Administrator draait, anders worden de instellingen mogelijk niet correct toegepast.
:::

Plak vervolgens de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Deze regels maken automatisch firewallregels aan die nodig zijn om je Enshrouded server publiek toegankelijk te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie van Windows om **Windows Firewall met geavanceerde beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je de basis Windows Firewall pagina opent.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Je moet nieuwe regels aanmaken voor je Enshrouded server. Klik hiervoor op binnenkomende en uitgaande regels en voeg ze toe voor de volgende protocollen en poorten:
- TCP binnenkomend en uitgaand: 15636-15637
- UDP binnenkomend en uitgaand: 15636-15637

Gebruik onze [Poort Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server bereikbaar en kun je verbinden via het IP-adres van je server. Dit doe je door in het hoofdmenu je character te selecteren, naar het tabblad **Find Games** te gaan en op **Add Server** te klikken. Vul hier je Server IP in, samen met de poort (standaard 15636) en je serverwachtwoord (als je die hebt ingesteld, anders leeg laten).

:::tip
Check onze [Server Configuratie](enshrouded-configuration.md) gids als je een wachtwoord wilt instellen en andere instellingen wilt aanpassen.
:::

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de setup van je Enshrouded server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de servermap.

Ga eerst naar de volgende map:
```
..EnshroudedServer/ (root directory)
```

Hier vind je het configuratiebestand **enshrouded_server.json**. Hiermee kun je een aantal parameters van je server instellen. Bekijk onze [Server Configuratie](enshrouded-configuration.md) gids voor alle opties en wat ze doen.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdmap van je Enshrouded server en start **enshrouded_server.exe** om het opstartproces te beginnen. Dit opent de serverconsole in een command prompt en start de server op. Je kunt nu direct verbinden via het tabblad **Find Games**, klik op **Add Server** en vul je Server IP en Poort in (standaard 15636).

Je hebt Enshrouded succesvol geïnstalleerd op je Windows Dedicated Server.