---
id: server-windows-arma3
title: "Arma 3 Dedicated Server Windows Setup"
description: "Ontdek hoe je een Arma 3 Dedicated Server op je Windows-server installeert voor soepel gamen en volledige controle → Leer het nu"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Windows VPS/Dedicated Server en wil je daarop de Arma 3 Dedicated server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS/Dedicated Server via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt bij het verbinden.

Zodra je toegang hebt tot je server, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het tooltje waarmee je makkelijk Steam workshop en dedicated server bestanden downloadt. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak ergens op je server een nieuwe map aan, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het zojuist gedownloade **steamcmd.zip** bestand en plaats het in je `steamcmd` map. Pak het bestand uit door er met rechts op te klikken en Windows’ unzip functie te gebruiken, of met een programma zoals 7zip of Winrar. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot het installatieproces helemaal klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/RsC7AK37qrYnDYR/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je verder met het installeren van de Arma 3 dedicated server in de volgende sectie.

## Installatie

Na de installatie kun je in het **steamcmd.exe** command prompt dat je net hebt geopend commando’s uitvoeren. Je moet eerst inloggen via de **anonymous** gebruiker met het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad waar je de server wilt installeren. Bijvoorbeeld:
```
force_install_dir C:\arma3-server
```
:::

Voer nu het commando `app_update 233780` uit om de download te starten. De App ID **233780** is de **Arma 3** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/52dAJQDFjTs8Y4f/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

Als het gelukt is, ga dan naar de downloadmap waar alle serverbestanden zijn opgeslagen. Hier kun je de **Arma 3_server.exe** gebruiken om de server te starten. We raden echter aan eerst je poorten te forwarden en je server te configureren.

### Poorten forwarden voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regelen voor de poorten die je VPS/Dedicated Server gebruikt. Dit kan via Powershell-commando’s (makkelijker) of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met rechts en kies **Als Administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je Powershell in Administrator modus draait, anders worden de instellingen mogelijk niet correct toegepast.
:::

Plak vervolgens de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Inbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Outbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
```

Deze commando’s maken automatisch firewallregels aan die nodig zijn om je Arma 3 server publiek toegankelijk te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie in Windows om **Windows Firewall instellingen met geavanceerde beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen.

![](https://screensaver01.zap-hosting.com/index.php/s/r9j8kYmR3LtcQJ2/preview)

Je moet nieuwe regels aanmaken voor je Arma 3 server. Klik hiervoor op binnenkomende en uitgaande regels en voeg regels toe voor de volgende protocollen en poorten:
- UDP binnenkomend en uitgaand: 2302–2306

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server bereikbaar en kun je verbinden via het IP-adres van je server. Dit doe je door in het hoofdmenu je character te selecteren, naar het tabblad **Find Games** te gaan en op **Add Server** te klikken. Vul hier je Server IP in met de poort (standaard 2302) en je serverwachtwoord (indien ingesteld, anders leeg laten).

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de setup van je Arma 3 server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de servermap.

Ga eerst naar de volgende map:
```
C:\arma3-Server
```

Hier vind je het **server.cfg** configuratiebestand. Hiermee kun je een aantal parameters voor je server instellen.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdmap van het spel en start het uitvoerbare bestand **arma3server_x64.exe**.

Dit opent de serverconsole en start het opstartproces.

Spelers kunnen via de **Arma 3 server browser** verbinden met je server door je **server IP-adres** en de standaardpoort **2302** te gebruiken.

## Afsluiting

Gefeliciteerd, je hebt de **Arma 3 server** succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />