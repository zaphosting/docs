---
id: dedicated-windows-ragemp
title: "Dedicated Server: RageMP Dedicated Server Windows Setup"
description: "Leer hoe je RageMP Dedicated Server installeert op je Windows-server om multiplayer GTA V-sessies te hosten → Leer het nu"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows Dedicated Server en wil je daarop de RageMP Dedicated server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

## Voorbereiding

Begin met verbinden met je Dedicated Server via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt bij het verbinden.

Zodra je toegang hebt tot je server, installeer je eerst [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), want dit is een vereiste voor RageMP. Zorg dat dit geïnstalleerd is voordat je verder gaat. Weet je niet zeker of het al geïnstalleerd is? Start dan de installer; die geeft het tijdens de setup aan.

Als de dependency geïnstalleerd is, download je de nieuwste server release van de [RageMP-website](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Heb je RageMP al geïnstalleerd? Ga dan direct door naar de subsectie **Switching to Server Branch**. Je hoeft RageMP niet opnieuw te installeren.
:::

## Installatie

Als de release is gedownload, start je het uitvoerbare bestand **RAGEMultiplayer_Setup.exe** en volg je de installatie-instructies. Je kunt tijdens de setup het installatiepad aanpassen, wat we aanraden.

Met RageMP geïnstalleerd, start je de **RAGE Multiplayer** app, die nu beschikbaar zou moeten zijn in je Windows-apps.

Bij de eerste keer opstarten moet je het pad naar je GTA:V game-installatiemap instellen. De installatiemap hangt af van de launcher waar je het spel vandaan hebt geïnstalleerd en staat standaard onder `C:/Program Files` of `C:/Program Files (x86)`.

Nu moet je de branch aanpassen om de serverbestanden te downloaden.

### Overschakelen naar Server Branch

Ga naar de map waar RageMP is geïnstalleerd. Zoek het bestand **config.xml** in deze map. Pas de `channel` parameter aan van `prerelease` naar `prerelease_server` en sla het bestand op.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Start nu het uitvoerbare bestand **updater.exe**. Dit downloadt de benodigde serverbestanden op basis van de branch-wijziging. Je ziet een nieuwe map **server-files** verschijnen in je RageMP-directory, dit is wat je nodig hebt.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Je kunt de `channel` parameter nu weer terugzetten naar `prerelease` en **update.exe** opnieuw draaien om terug te schakelen naar de client-versie, zodat je weer kunt spelen.

:::tip
Je kunt de serverbestanden verplaatsen en de map hernoemen naar wat je maar wilt, bijvoorbeeld naar je bureaublad. Je hoeft dit niet binnen de `RAGEMP` map te draaien.
:::

Om de server te starten, run je simpelweg **ragemp-server.exe** in de `server-files` map of je servermap en de server begint met opstarten. We raden echter aan eerst poort forwarding en serverconfiguratie te regelen.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Poort Forwarden voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regelen voor de poorten die de dedicated server gebruikt. Dit kan via PowerShell-commando’s, wat makkelijker is, of via de Windows Defender Firewall instellingen.

:::tip
Bij de eerste keer opstarten van de server verschijnt er een UAC-venster. Als je dit accepteert, worden de firewallregels automatisch ingesteld en kun je door naar de volgende stap. Anders volg je een van de onderstaande methodes.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Open de Windows zoekbalk en zoek naar **PowerShell**. Klik met de rechtermuisknop en kies **Als Administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je PowerShell als Administrator draait, anders worden de instellingen mogelijk niet correct toegepast.
:::

Plak vervolgens de volgende commando’s in je PowerShell prompt:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Deze regels maken automatisch firewallregels aan die nodig zijn om je RageMP server publiek toegankelijk te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Open via de zoekfunctie van Windows **Windows Firewall-instellingen met Geavanceerde Beveiliging**. Mogelijk moet je eerst op **Geavanceerde instellingen** klikken om het juiste venster te openen als je alleen de basis Windows Firewall pagina ziet.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je RageMP server. Klik hiervoor op binnenkomende en uitgaande regels en voeg ze toe voor de volgende protocollen en poorten:

- TCP binnenkomend en uitgaand: 22005
- UDP binnenkomend en uitgaand: 22005

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server nu bereikbaar en kun je verbinden via het IP-adres van je server.

We raden aan eerst je serverinstellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de setup van je RageMP server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand.

Ga terug naar de hoofdmap. Zoek en open het configuratiebestand **conf.json**. Hierin kun je verschillende serverparameters aanpassen, zoals poort, servernaam en meer.

Een voorbeeld van een paar configuratie-opties die zijn ingesteld:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Server starten & verbinden

Tijd om je server te starten! Ga naar de `server-files` map of je servermap en run **ragemp-server.exe** om het opstartproces te starten. Dit opent de serverconsole in een command prompt en begint met opstarten.

Je kunt nu direct in-game verbinden met je server via de RageMP launcher.

## Conclusie

Gefeliciteerd, je hebt RageMP succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!