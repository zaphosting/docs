---
id: vserver-windows-ragemp
title: "VPS: RageMP Dedicated Server Windows Setup"
description: "Leer hoe je de RageMP Dedicated server installeert en instelt op je Windows VPS voor naadloos multiplayer gamen → Ontdek het nu"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS en wil je de RageMP Dedicated server service daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) handleiding als je hulp nodig hebt bij het verbinden.

Zodra je toegang hebt tot je server, installeer je eerst [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), want dit is een vereiste voor RageMP. Zorg dat dit geïnstalleerd is voordat je verder gaat. Weet je niet zeker of het al geïnstalleerd is? Start dan de installer, die vertelt het je tijdens de setup.

Als de dependency geïnstalleerd is, download je de nieuwste server release van de [RageMP Website](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Heb je RageMP al geïnstalleerd? Ga dan direct door naar de subsectie **Switching to Server Branch**. Je hoeft RageMP niet opnieuw te installeren.
:::

## Installatie

Als de release is gedownload, start je het **RAGEMultiplayer_Setup.exe** bestand en volg je de installatie stappen. Je kunt tijdens de setup het installatiepad aanpassen, wat we aanraden.

Met RageMP geïnstalleerd, start je nu de **RAGE Multiplayer** app, die je nu in je Windows apps zou moeten vinden.

Bij de eerste keer opstarten moet je het pad naar je GTA:V installatie map instellen. De locatie hangt af van de launcher waar je het spel mee hebt geïnstalleerd en staat standaard onder `C:/Program Files` of `C:/Program Files (x86)`.

Nu moet je de branch aanpassen om de serverbestanden te downloaden.

### Switchen naar Server Branch

Ga naar de map waar RageMP is geïnstalleerd. Zoek het bestand **config.xml** in deze map. Pas de `channel` parameter aan van `prerelease` naar `prerelease_server` en sla het bestand op.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Start nu het **updater.exe** bestand, dit downloadt de benodigde serverbestanden op basis van de branch wijziging. Je ziet een nieuwe map **server-files** verschijnen in je RageMP directory, dit is wat je nodig hebt.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Je kunt de `channel` parameter nu weer terugzetten naar `prerelease` en de **update.exe** opnieuw draaien om terug te schakelen naar de client versie zodat je weer kunt gamen.

:::tip
Je kunt de serverbestanden verplaatsen en de map hernoemen naar wat je maar wilt, bijvoorbeeld naar je desktop. Je hoeft dit niet binnen de `RAGEMP` map te draaien.
:::

Om de server te starten, run je simpelweg **ragemp-server.exe** in de `server-files` map of je server map en de server begint met opstarten. We raden echter aan eerst poorten te forwarden en je server te configureren.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Poorten forwarden voor je server

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regelen voor de poorten die de dedicated server gebruikt. Dit kan via PowerShell commando’s, wat makkelijker is, of via de Windows Defender Firewall instellingen.

:::tip
De eerste keer dat je de server start, krijg je een UAC prompt. Als je deze accepteert, worden de firewall regels automatisch ingesteld en kun je door naar de volgende stap. Zo niet, volg dan een van de onderstaande methodes.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Open je Windows zoekbalk en zoek naar **PowerShell**. Klik met rechts en kies **Als Administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

:::info
Zorg dat je PowerShell in Administrator modus draait, anders worden de instellingen mogelijk niet correct toegepast.
:::

Plak vervolgens de volgende commando’s in je PowerShell prompt:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Deze regels maken automatisch de firewall regels aan die nodig zijn om je RageMP server publiekelijk bereikbaar te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Open via de zoekfunctie van Windows **Windows Firewall instellingen met geavanceerde beveiliging**. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je eerst de basis Windows Firewall pagina opent.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Je moet nieuwe regels aanmaken voor je RageMP server. Klik hiervoor op binnenkomende en uitgaande regels en voeg ze toe voor de volgende protocollen en poorten:

- TCP binnenkomend en uitgaand: 22005
- UDP binnenkomend en uitgaand: 22005

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) handleiding als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server nu bereikbaar en kun je verbinden via het IP-adres van je server.

We raden aan eerst je server instellingen te configureren via de volgende sectie voordat je verbinding maakt.

## Configuratie

Op dit punt heb je de setup van je RageMP server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand.

Ga terug naar de root folder. Zoek en open het **conf.json** configuratiebestand. Hier kun je een aantal serverparameters aanpassen, zoals poort, servernaam en meer.

Als voorbeeld, hier een paar configuratie opties die zijn ingesteld:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Server starten & verbinden

Tijd om je server te starten. Ga naar de `server-files` map of je server map en run **ragemp-server.exe** om het opstartproces te starten. Dit opent de serverconsole in een command prompt en begint met opstarten.

Je kunt nu direct verbinden met je server in-game via de RageMP launcher.

## Conclusie

Gefeliciteerd, je hebt de RageMP server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />