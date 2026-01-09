---
id: vserver-windows-fs-25
title: "VPS: Farming Simulator 2025 Dedicated Server Windows Setup"
description: "Ontdek hoe je een Farming Simulator 2025 dedicated server installeert op je Windows VPS voor soepel multiplayer gamen → Leer het nu"
sidebar_label: Farming Simulator 2025
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een Windows VPS en wil je de Farming Simulator Dedicated Server 2025 service daarop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je server installeert.

<InlineVoucher />

## Voorbereiding

Om een Farming Simulator 2025 dedicated server te hosten, moet je een Windows-server klaar hebben staan én een geldige game-licentie om de dedicated server te draaien.

Voordat je begint met installeren, maak verbinding met je Windows Server via Remote Desktop (RDP). Gebruik onze [Initial Access (RDP)](vserver-windows-userdp.md) gids als je hulp nodig hebt.

### Game Licentie

Om de dedicated server op je Windows-server te hosten, moet je een digitale versie van Farming Simulator 2025 bezitten, rechtstreeks gekocht via de [Farming Simulator](https://www.farming-simulator.com/buy-now.php) website.

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Je kunt niet dezelfde licentiesleutel gebruiken als waarmee je het spel speelt, dus je moet een **tweede** exemplaar van de game aanschaffen, speciaal voor je Dedicated Server.

:::info Steam Game License
Je kunt een Steam-licentie gebruiken om je dedicated server te hosten, maar dit is vaak onhandig omdat je dan de Steam-client continu op de achtergrond moet draaien. Dit betekent ook dat je niet op een ander systeem met hetzelfde Steam-account een andere game kunt spelen vanwege Steam’s beperkingen. Daarom raden we sterk aan om een losse key direct via de website te kopen om gedoe te voorkomen.

Als je toch een **Steam**-licentie wilt gebruiken, installeer dan de bestanden via Steam zoals gewoonlijk en ga direct door naar de sectie **Dedicated Server Setup** in deze gids.
:::

Na aankoop van de digitale versie via de website ontvang je een productcode per e-mail op het adres dat je bij de checkout hebt opgegeven. Deze licentiesleutel heb je nodig in de volgende stap om de game te downloaden en je dedicated server te valideren tijdens de setup.

## Installatie

### Bestanden Installeren

Nu je licentiesleutel en Windows-server klaar zijn, ga je op je Windows-server naar de [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) pagina en voer je de licentiesleutel in die je per e-mail hebt ontvangen.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Als het goed is, krijg je toegang tot een pagina met verschillende downloadopties voor de game. Zoek de hoofdoptie Windows **Farming Simulator 25 (Windows 10/11)** en klik op downloaden.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

De download start nu en kan even duren omdat de volledige game wordt binnengehaald, dus even geduld.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Als de download klaar is, ga je naar je downloads en zoek je het **.img** bestand dat je hebt gedownload. Open dit door erop te dubbelklikken, dit mount de drive in de Verkenner.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Start nu het **Setup.exe** bestand en accepteer de UAC prompt. Volg het installatieproces, inclusief het accepteren van de voorwaarden en eventueel aanpassen van het installatietraject.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Wees geduldig en wacht tot de installatie helemaal klaar is. Sluit daarna het setup-menu af. We raden aan om met rechts te klikken op de gemounte **DVD Drive** in Verkenner en **Uitwerpen** te kiezen, want die heb je niet meer nodig. De basisinstallatie van de game is nu voltooid.

### Game Activeren

Nu de game geïnstalleerd is, moet je hem minstens één keer starten om te activeren. Start de game via de snelkoppeling op je bureaublad of via de Windows zoekbalk.

Bij de eerste keer starten krijg je een prompt om je licentiesleutel in te voeren. Vul de sleutel in die je per e-mail hebt ontvangen en bevestig. Als het lukt, wordt de game geactiveerd en begint het laden.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Je kunt de game nu afsluiten, die heb je niet meer nodig. Ga door naar de volgende stap om de dedicated server en de bijbehorende webinterface in te stellen. Krijg je een **Video Driver** foutmelding? Kies dan gewoon **nee** om het opstarten te annuleren.

## Dedicated Server Setup

Met de game klaar, moet je wat configuraties aanpassen voor je dedicated server. Ga naar je game-installatiemap. Standaard is dat `C:\Program Files (x86)\Farming Simulator 2025`, tenzij je tijdens installatie een andere locatie koos.

Open hier het bestand **dedicatedServer.xml** met een teksteditor.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Wij raden aan om de velden `username` en `passphrase` bovenaan het bestand aan te passen naar je eigen inloggegevens. Dit zijn de credentials die je straks gebruikt om in te loggen op het webinterface paneel van je server. Sla het bestand op en sluit het.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Webinterface Toegang

Met je inloggegevens ingesteld, start je de server door het bestand **dedicatedServer.exe** te draaien in dezelfde hoofdmap van de game.

:::info Administratorrechten
Zorg dat je de dedicated server uitvoert met Administratorrechten, anders loop je waarschijnlijk tegen problemen aan bij het starten van de game server. Klik met rechts op het bestand en kies **Als administrator uitvoeren**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Er opent een CMD-venster dat automatisch certificaten aanmaakt, updates installeert en benodigde tools toevoegt. Dit kan even duren bij de eerste keer opstarten, dus even geduld.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Als het klaar is, kun je via je browser naar `http://[jouw_serverip]:8080` gaan om het webinterface paneel te openen. Log in met de eerder ingestelde gebruikersnaam en wachtwoord.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

In dit webinterface paneel kun je allerlei instellingen aanpassen, zoals serverinstellingen, savegames beheren, mods beheren en meer.

### Poorten Openzetten (Port Forwarding)

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poortregels aanpassen voor de poorten die de dedicated server gebruikt. Dit kan via PowerShell, wat makkelijker is, of via de Windows Defender Firewall instellingen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Open je Windows zoekbalk en zoek naar **PowerShell**. Klik met rechts en kies **Als administrator uitvoeren** zodat je de juiste rechten hebt.

:::info
Zorg dat je PowerShell in Administrator-modus draait, anders worden de instellingen niet goed toegepast.
:::

Plak vervolgens de volgende commando’s in je PowerShell prompt:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Deze regels maken automatisch de firewall open voor de benodigde poorten zodat je Farming Simulator 2025 server publiekelijk bereikbaar is.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Open via de zoekfunctie in Windows **Windows Firewall met geavanceerde beveiliging**. Soms moet je eerst op **Geavanceerde instellingen** klikken om het juiste venster te openen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Maak nieuwe regels aan voor je FS2025 Server. Doe dit voor inkomend en uitgaand verkeer met de volgende protocollen en poorten:
- TCP inkomend en uitgaand: 8080, 10823
- UDP inkomend en uitgaand: 8080, 10823

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier hulp bij nodig hebt.

</TabItem>
</Tabs>

Als je deze regels hebt toegevoegd, is je server nu bereikbaar vanaf internet. Je kunt dan het webinterface paneel openen en in-game verbinden met je server.

### Server Starten

Als je alles hebt ingesteld en de firewallregels hebt toegevoegd, ga je naar de startpagina van het webinterface en klik je op de **Start** knop om de server op te starten.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Als het goed is, begint de server met opstarten. Dit zie je terug in de interface en in een nieuw CMD-venster waar de game server draait. Krijg je fouten bij het starten? Controleer dan of je het webinterface als Administrator draait.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Afsluiting

Gefeliciteerd, je hebt de Farming Simulator 2025 dedicated server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />