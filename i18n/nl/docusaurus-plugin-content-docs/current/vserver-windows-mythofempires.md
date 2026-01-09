---
id: vserver-windows-mythofempires
title: "VPS: Myth of Empires Dedicated Server Windows Setup"
description: "Ontdek hoe je snel en makkelijk een Myth of Empires dedicated server op je Windows VPS installeert → Leer het nu"
sidebar_label: MOE Dedicated Server Setup
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Windows VPS en wil je daar een MOE Dedicated server op installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.
<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4WnZSyGqLyN7pmG/preview" title="How To Setup Myth Of Empires Server on Windows VPS!" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>
<InlineVoucher />

## Voorbereiding
Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt bij het verbinden.

Zodra je op je server bent ingelogd, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het tooltje waarmee je makkelijk Steam workshop en dedicated server bestanden downloadt. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak ergens op je server een nieuwe map aan, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je net hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand uit door er met rechts op te klikken en de Windows unzip functie te gebruiken, of gebruik een programma zoals 7zip of Winrar. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot de installatie helemaal klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je beginnen met het installeren van de MOE dedicated server in de volgende sectie.

## Installatie

Na de installatie kun je in het **steamcmd.exe** command prompt dat je net hebt geopend commando’s uitvoeren. Je moet eerst inloggen via de **anonymous** gebruiker met het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad waar je de server wilt installeren. Bijvoorbeeld:
```
force_install_dir C:\MOE-Server
```
:::

Voer nu het commando `app_update 1794810` uit om de download te starten. De App ID **1794810** is de **MOE** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

Als het gelukt is, ga dan naar de downloadmap waar alle serverbestanden zijn binnengehaald.

### Toegang tot de PrivateServerTool

In tegenstelling tot normale SteamCMD installaties, moet je bij MOE een map van je lokale Steam game installatie kopiëren om de server op Windows te kunnen draaien.

Open Steam op je pc, klik met rechts op je **Myth of Empires** game en kies **Browse local files** onder het **Manage** menu.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

In de hoofdmap die opent, zoek je de map **PrivateServerTool**. Die map moet je kopiëren naar je server. Dit doe je makkelijk met `CTRL+C` op je pc en `CTRL+V` in je Windows server via RDP. Zorg dat je het in de hoofdmap van je dedicated server plakt.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Ga daarna door naar de volgende sectie om poorten te forwarden en je server te configureren.

### Poorten forwarden voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regelen voor de poorten die de dedicated server gebruikt. Dit kan via Powershell commando’s (makkelijker) of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met rechts en kies **Run as Administrator** zodat je de juiste rechten hebt.

:::info
Zorg dat je Powershell als Administrator draait, anders werken de instellingen niet goed.
:::

Plak de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Deze regels maken automatisch de firewallregels aan die nodig zijn om je MOE server publiek toegankelijk te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Open via de zoekfunctie van Windows **Windows Firewall Settings with Advanced Security**. Mogelijk moet je op **Advanced Settings** klikken om het juiste venster te openen als je alleen de basis Windows Firewall pagina ziet.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Maak nieuwe regels aan voor je MOE server. Doe dit voor inkomend en uitgaand verkeer met de volgende protocollen en poorten:
- TCP inkomend en uitgaand: 11888, 12888
- UDP inkomend en uitgaand: 11888, 12888

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Ga door naar de volgende sectie om je configuratiebestand aan te maken en je start `.bat` bestand te maken.

## Configuratie

Je gaat nu de server tool gebruiken die in de map staat die je eerder van je game bestanden hebt gekopieerd, om je configuratiebestand en het start `.bat` bestand te maken waarmee je je server start.

Navigeer naar deze map (de map die je eerder hebt gekopieerd):
```
../MOE/PrivateServerTool
```

Start in deze map het bestand **PrivateServerTool.exe**. Met deze tool stel je de serveropties in zoals je wilt, inclusief mods, game settings en meer.

Wij raden aan om in ieder geval de basisinstellingen zoals **Server Name** in te stellen voordat je verder gaat.

Als je klaar bent, ga je naar het tabblad **Start Console** in de tool, klik je op **Save Config** en daarna op **Start Server**. Dit maakt het bestand `StartPrivateServer.bat` aan dat je gebruikt om je server te starten.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Maak een snelkoppeling naar je `StartPrivateServer.bat` bestand door er met rechts op te klikken en **Create a shortcut** te kiezen. Zo start je je server makkelijker.

:::note
Je moet misschien het pad naar je game map aanpassen in het automatisch gegenereerde `StartPrivateServer.bat` bestand. Open het bestand met bijvoorbeeld notepad en check of het pad aan het begin van het bestand klopt met de locatie van je server.

Als het pad niet klopt, kun je in de root van je dedicated MOE server map dubbelklikken op de adresbalk bovenin om het pad te kopiëren en dat in het bestand plakken.
:::

## Server starten & verbinden

Tijd om je server te starten! Ga naar de map van je Myth of Empires server en start **StartPrivateServer.bat** (of de snelkoppeling als je die hebt gemaakt). Dit opent de serverconsole in een command prompt en start de server op. Je kunt nu direct verbinden met je server via het **Custom Server** tabblad in het spel en zoeken op je servernaam.

:::tip
Als je problemen hebt met verbinden, open dan je `StartPrivateServer.bat` bestand met notepad en check of de twee IP parameters overeenkomen met het IP van je Windows server. Dit wordt normaal automatisch ingevuld door de tool, maar is een goede check bij problemen.
:::

## Afsluiting

Gefeliciteerd, je hebt Myth of Empires succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />