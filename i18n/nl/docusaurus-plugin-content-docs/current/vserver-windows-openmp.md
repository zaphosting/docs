---
id: vserver-windows-openmp
title: "VPS: Open.mp Dedicated Server Windows Setup"
description: "Leer hoe je een open.mp Dedicated server installeert en configureert op je Windows VPS voor naadloos multiplayer gamen → Ontdek het nu"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS en wil je de open.mp Dedicated server service erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt bij het verbinden.

Als je eenmaal toegang hebt tot je server, download dan de nieuwste release van de [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases). Zorg ervoor dat je de **win-x86** versie kiest.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installatie

Als de release is gedownload, pak je de bestanden uit met een tool zoals 7zip of WinRAR. Dit levert een **Server** map op met alle benodigde serverbestanden.

Om de server te starten, voer je simpelweg **omp-server.exe** uit en de server begint op te starten. We raden echter aan om eerst poort forwarding in te stellen en je server te configureren.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Poort forwarding instellen voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je de poort forwarding regels aanpassen voor de poorten die de dedicated server gebruikt. Dit kan je doen via PowerShell-commando’s, wat makkelijker is, of via de Windows Defender Firewall instellingen.

:::tip
Bij de eerste keer opstarten van de server verschijnt er een UAC prompt. Als je deze accepteert, worden de firewallregels automatisch ingesteld en kan je door naar de volgende stap. Anders volg je een van de onderstaande methodes.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Open je Windows zoekbalk en zoek naar **PowerShell**. Klik met de rechtermuisknop en kies **Als administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je PowerShell in Administrator-modus draait, anders worden de instellingen mogelijk niet correct toegepast.
:::

Kopieer en plak vervolgens de volgende commando’s in je PowerShell prompt:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Deze commando’s maken automatisch de benodigde firewallregels aan zodat je open.mp server publiekelijk bereikbaar is.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie in Windows om **Windows Firewall instellingen met geavanceerde beveiliging** te openen. Mogelijk moet je eerst op **Geavanceerde instellingen** klikken om het juiste venster te openen.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je open.mp server. Klik hiervoor op binnenkomende en uitgaande regels en voeg deze toe voor de volgende protocollen en poorten:
- TCP binnenkomend en uitgaand: 7777
- UDP binnenkomend en uitgaand: 7777

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier extra hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server nu bereikbaar en kan je verbinden via het IP-adres van je server.

We raden aan om eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de setup van je open.mp server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand.

Ga terug naar de hoofdmap en open het **config.json** bestand. Hierin kun je allerlei serverparameters aanpassen, van poort tot wachtwoord en meer.

Als voorbeeld, hier een paar configuratie-opties die zijn ingesteld:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Bekijk onze [Server Configuratie](openmp-configuration.md) pagina om alle opties en hun functies te zien.

## Server starten & verbinden

Nu is het tijd om je server te starten. Ga naar de hoofdmap en voer **omp-server.exe** uit om het opstartproces te starten. Dit opent de serverconsole in een command prompt.

Je kunt nu direct verbinden met je server in-game via de open.mp launcher. Wil je serverinformatie in de serverlijst tonen? Check dan onze [Server Configuratie](openmp-configuration.md) gids en zorg dat de `enable_query` parameter op true staat (standaard zo). Sla het bestand op en start de server opnieuw.

## Afsluiting

Gefeliciteerd, je hebt de open.mp server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />