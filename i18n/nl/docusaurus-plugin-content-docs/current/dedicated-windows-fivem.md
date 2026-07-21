---
id: dedicated-windows-fivem
title: "FiveM Dedicated Server Setup"
description: "Discover how to set up and run your own FiveM Dedicated Server with txAdmin for seamless multiplayer gaming → Learn more now"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Heb je een dedicated server en wil je je eigen FiveM Dedicated Server service met txAdmin installeren en beheren? Dan ben je hier aan het juiste adres! Hieronder leggen we alle benodigde stappen uit om het te installeren, configureren en waar je op moet letten.

:::warning Besturingssysteem geselecteerd en geïnstalleerd
Er wordt vanuit gegaan dat je al een besturingssysteem hebt geselecteerd en geïnstalleerd voor je VPS/Dedicated Server. Als je deze stap nog niet hebt voltooid, volg dan eerst de stappen in de [Eerste installatie](dedicated-setup.md) handleiding voor dedicated servers.
:::

## Voorbereiding

Om een FiveM-server op te zetten, zijn er een aantal voorbereidingen nodig die je moet uitvoeren voordat je daadwerkelijk met de installatie van de FiveM Dedicated Server kunt beginnen.

### Database opzetten

Wil je resources gebruiken en installeren die een database vereisen, dan heb je een extra **databaseserver** nodig. Er zijn verschillende manieren om zo’n server op te zetten. In onze [MySQL installeren](dedicated-windows-installmysql.md) handleiding laten we zien hoe je je eigen **databaseserver** op je **dedicated server** installeert.

### FiveM Server Software downloaden

De volgende stap is het downloaden van de FiveM server software. Ga hiervoor via een van de geïnstalleerde internetbrowsers naar de [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) website van FiveM en download de nieuwste FiveM server build.

Pak het gedownloade bestand uit in de Downloads map en verplaats de FiveM server bestanden bij voorkeur naar een aparte map. In dit voorbeeld staat de server software in een map genaamd **FiveM** op het bureaublad.

:::warning Uitpakprogramma vereist
Om de gedownloade FiveM Server software uit te pakken, heb je een uitpakprogramma nodig voor het gecomprimeerde bestand. In dit voorbeeld wordt [7Zip Software](https://7-zip.com/) gebruikt.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)

### Maak een FiveM Server licentiesleutel aan

Elke FiveM-server heeft een eigen licentiesleutel nodig, die wordt beheerd via het nieuwe [Cfx.re Portal](http://portal.cfx.re/). De licentiesleutel is gekoppeld aan je Cfx.re-account. Log in op de website, ga naar de categorie **Server** en klik op de knop **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)

## Configuratie

Je kunt nu beginnen met de installatie van de FiveM Server en txAdmin. Open hiervoor opnieuw je FiveM Server map en start de applicatie `cfx-server.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)

Zodra de serverapplicatie is gestart, openen de serverconsole en txAdmin. In de txAdmin interface moet je je **Cfx.re-account** koppelen aan txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)

### txAdmin Setup

Tijdens de txAdmin setup wordt je eigen FiveM-server in vijf stappen geïnstalleerd en geconfigureerd. Volg de instructies in de txAdmin interface en geef eerst een **servernaam** op. Kies daarna het gewenste **servertype**. Dit voorbeeld toont de installatie van een FiveM-server met vooraf geïnstalleerde QBCore.

Selecteer bij de stap **Deployment Type** de optie **Popular Recipes** en daarna de **QBCore Framework Template**. Bevestig de gewenste **Data Directory** en start de **Recipe Deployer** om de installatie te voltooien.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Tijdens de Recipe Deployer moet je de laatste benodigde gegevens invoeren voordat de server kan starten. Vul je eerder aangemaakte FiveM licentiesleutel in het veld **License Key** in. Klik vervolgens op **Show/Hide Database Options (Advanced)** en vul de inloggegevens van je databaseserver in. In dit geval is alleen het eerder ingestelde wachtwoord voor de **root** gebruiker nodig. Alle andere instellingen kunnen ongewijzigd blijven. Controleer je invoer en klik daarna op **Run Recipe** om het proces te starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)

### Firewall configuratie

Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poortdoorstuurregels aanpassen voor de poorten die het VPS/Dedicated Server proces gebruikt. Dit kan je doen via Powershell-commando’s, wat makkelijker is, of via de Windows Defender Firewall pagina.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met de rechtermuisknop en kies **Als administrator uitvoeren** zodat de juiste rechten beschikbaar zijn en alles goed werkt.

:::info
Zorg dat je Powershell in Administrator modus draait, anders worden de instellingen mogelijk niet correct toegepast.
:::

Kopieer en plak vervolgens de volgende commando’s in je Powershell prompt:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Deze commando’s maken automatisch firewallregels aan die nodig zijn om je FiveM-server publiekelijk bereikbaar te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie in Windows om **Windows Firewall Settings with Advanced Security** te openen. Mogelijk moet je op **Advanced Settings** klikken om het juiste venster te openen als je de basis Windows Firewall pagina opent.

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

Je moet nieuwe regels aanmaken voor je FiveM-server. Klik hiervoor op de inkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende protocollen en poorten:
- TCP inkomend en uitgaand: 30120
- UDP inkomend en uitgaand: 30120

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) handleiding als je hierbij extra hulp nodig hebt.

</TabItem>
</Tabs>

## Conclusie

Je hebt nu succesvol een FiveM Dedicated Server service geïnstalleerd en geconfigureerd op je VPS/Dedicated Server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂