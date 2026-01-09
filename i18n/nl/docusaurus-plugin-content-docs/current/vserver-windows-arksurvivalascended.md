---
id: vserver-windows-arksurvivalascended
title: "VPS: ARK Survival Ascended Dedicated Server Windows Setup"
description: "Ontdek hoe je een ARK: Survival Ascended Dedicated Server op een Windows VPS installeert voor soepele gameplay en serverbeheer → Leer het nu"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Windows VPS en wil je de ARK: Survival Ascended Dedicated server erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="ARK: Survival Ascended Dedicated Server Setup op Windows VPS" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>
<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt.

Zodra je op je server bent, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en is het tooltje waarmee je makkelijk Steam workshop en dedicated server bestanden binnenhaalt. Download [SteamCMD van de officiële Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) of direct [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Maak een nieuwe map aan ergens op je server, in dit voorbeeld noemen we die `steamcmd`. Ga naar je Downloads map, zoek het bestand **steamcmd.zip** dat je net hebt gedownload en plaats het in je `steamcmd` map. Pak het bestand uit door rechts te klikken en de Windows unzip functie te gebruiken, of met een programma zoals .7zip of Winrar. Je krijgt dan een **steamcmd.exe** bestand.

Start simpelweg **steamcmd.exe** en wacht tot de installatie helemaal klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Zodra de melding **Loading Steam API.... OK** verschijnt, is het proces succesvol afgerond en kun je verder met de installatie van de ARK: Survival Ascended dedicated server in de volgende sectie.

## Installatie

Na de installatie zou je commando’s moeten kunnen uitvoeren in het **steamcmd.exe** command prompt dat je net hebt geopend. Je moet eerst inloggen via de **anonymous** gebruiker met het commando: `login anonymous`

Als je bent ingelogd, kun je beginnen met het downloaden van de bestanden.

:::tip
Optioneel: Je kunt je gewenste installatiemap instellen met het commando `force_install_dir [pad]`, waarbij je `[pad]` vervangt door het pad dat je wilt gebruiken voor je server. Bijvoorbeeld:
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Voer nu het commando `app_update 2430930` uit om de download te starten. De App ID **2430930** is de **ARK: Survival Ascended Dedicated Server** applicatie.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
Onderbreek het proces niet voordat het klaar is om fouten te voorkomen. Het kan even duren, maar het is het wachten waard! :)
:::

### Startup bestand aanmaken

Als de download succesvol is afgerond, ga dan naar de map waar je de installatie hebt uitgevoerd en navigeer naar de volgende submap:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

In deze map moet je een startup bestand maken om de dedicated server te kunnen starten. Maak een bestand aan met de naam: `start-ark.bat`. Je kunt eerst een tekstbestand maken en dat daarna hernoemen naar de `.bat` extensie.

:::info
Zorg dat je in Verkenner de optie "Bestandsextensies weergeven" aan hebt staan, zodat je zeker weet dat het juiste bestandstype wordt gebruikt.
:::

Open het bestand met een teksteditor (zoals Notepad++) en voeg de volgende inhoud toe:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_naam]?ServerAdminPassword=[admin_wachtwoord]?Port=7777?QueryPort=27015?MaxPlayers=[max_spelers] -NoBattlEye
exit
```

Vervang in dit commando `[server_naam]`, `[admin_wachtwoord]` en `[max_spelers]` door jouw gewenste waarden.

Wil je ook een wachtwoord instellen zodat gewone spelers kunnen joinen? Voeg dan `?ServerPassword=[join_wachtwoord]` toe aan het commando in het bestand hierboven. Het wordt dan:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_naam]?ServerPassword=[join_wachtwoord]?ServerAdminPassword=[admin_wachtwoord]?Port=7777?QueryPort=27015?MaxPlayers=[max_spelers] -NoBattlEye
exit
```

Zorg dat je de variabelen hebt ingevuld en sla het bestand op voordat je het sluit.

Je server is nu lokaal bereikbaar via `127.0.0.1:7777` zodra je het startup bestand runt en de server online komt. Maar je moet nog wel Windows Firewall poortregels toevoegen als je wilt dat je server publiek toegankelijk is, dat behandelen we in de volgende sectie.

### Poort forwarding instellen

Om ervoor te zorgen dat je server publiek toegankelijk is, moet je poort forwarding regelen voor de poorten die de dedicated server gebruikt. Dit kan via Powershell commando’s (makkelijker) of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met rechts en kies **Als administrator uitvoeren** zodat je de juiste rechten hebt.

:::info
Zorg dat je Powershell als administrator draait, anders worden de instellingen mogelijk niet goed toegepast.
:::

Plak de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Deze regels maken automatisch de firewallregels aan die nodig zijn om je Ark: Survival Ascended server publiek bereikbaar te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Open via de zoekfunctie van Windows **Windows Firewall instellingen met geavanceerde beveiliging**. Mogelijk moet je eerst op **Geavanceerde instellingen** klikken om het juiste venster te openen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je Ark: Survival Ascended server. Doe dit voor inkomend en uitgaand verkeer met de volgende protocollen en poorten:
- TCP inkomend en uitgaand: 27020
- UDP inkomend en uitgaand: 27015
- UDP inkomend en uitgaand: 7777-7778

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server publiek bereikbaar en kun je verbinden via het IP-adres van je server. Open in Ark: Survival Ascended de console en voer `open [jouw_ip_adres]:7777` uit om te verbinden.

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je de server betreedt.

## Configuratie

Op dit punt heb je de setup van je Ark: Survival Ascended dedicated server afgerond. Je kunt je server verder configureren via twee configuratiebestanden in de servermap.

Ga naar de volgende mappen:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Hier vind je de configuratiebestanden **DefaultGameUserSettings.ini** en **GameUserSettings.ini**. In deze bestanden kun je allerlei instellingen en opties voor je server aanpassen.

:::warning[CROSSPLAY SUPPORT]
Sinds 18 november 2023 moeten servereigenaren handmatig de certificate revocation list installeren die je kunt downloaden via https://dev.epicgames.com/ (of direct via http://crl.r2m02.amazontrust.com/r2m02.crl). Het gedownloade r2m02.crl bestand moet geïnstalleerd worden (rechtsklik op het bestand) door te kiezen voor "Alle certificaten plaatsen in de volgende opslag" en dan "Trusted Root Certification Authorities". Een herstart van het systeem kan nodig zijn.

Als servereigenaren vóór 18 november 2023 het r2m02.cer certificaat hebben geïnstalleerd en de server niet zichtbaar is, moet dat certificaat verwijderd worden om de servers weer zichtbaar te maken. Verwijder het via (Windows + R) `certmgr.msc` en zoek naar Amazon RSA 2048 M02 onder Trusted Root Certification Authorities. Doe hetzelfde met `certlm.msc`. Tot slot kan een herstart nodig zijn.
:::





## Server starten & verbinden

Nu is het tijd om je server te starten. Om de server succesvol te starten, moet je eerst [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) op je Windows VPS installeren.

:::info
Je moet [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) op je Windows VPS installeren voordat je de server start als je dit nog niet hebt, want het is een vereiste. Zonder deze installatie kan je server mogelijk niet starten.
:::

Als je dit geïnstalleerd hebt, kun je de server starten door het **start-ark.bat** bestand uit te voeren dat je eerder hebt gemaakt.

Dit opent de serverconsole in een command prompt en start het proces. Als alles goed gaat, verschijnt je server in de serverlijst. Je kunt ook direct verbinden door in de gameconsole `open [jouw_ip_adres]:7777` te typen.

## Afsluiting

Gefeliciteerd, je hebt de ARK-Survival-Ascended server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />