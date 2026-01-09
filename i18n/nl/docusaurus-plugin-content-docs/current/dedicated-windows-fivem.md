---
id: dedicated-windows-fivem
title: "Dedicated Server: FiveM Dedicated Server Setup"
description: "Ontdek hoe je je eigen FiveM Dedicated Server met txAdmin opzet en runt voor naadloze multiplayer gaming → Leer het nu"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introductie

Heb je een dedicated server en wil je je eigen FiveM Dedicated Server service met txAdmin installeren en beheren? Dan ben je hier aan het juiste adres! Hieronder leggen we alle stappen uit die je nodig hebt om het te installeren, configureren en waar je op moet letten.



:::warning  Besturingssysteem geselecteerd en geïnstalleerd
We gaan ervan uit dat je al een besturingssysteem hebt geselecteerd en geïnstalleerd op je dedicated server. Als je deze stap nog niet hebt afgerond, volg dan eerst de stappen in de [Initial setup](dedicated-setup.md) handleiding voor dedicated servers.
:::



## Voorbereiding

Om een FiveM server op te zetten, zijn er een aantal voorbereidingen nodig die je moet uitvoeren voordat je daadwerkelijk met de installatie van de FiveM Dedicated Server kunt beginnen.



### Database opzetten

Wil je resources gebruiken en installeren die een database vereisen, dan heb je een extra **databaseserver** nodig. Er zijn verschillende manieren om zo’n server op te zetten. In onze [Install MySQL](dedicated-windows-installmysql.md) gids laten we zien hoe je je eigen **databaseserver** op je **dedicated server** installeert.



### FiveM Server Software downloaden

De volgende stap is het downloaden van de FiveM server software. Ga hiervoor via een van je geïnstalleerde browsers naar de [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) website van FiveM en download de nieuwste FiveM server build.

Pak het gedownloade bestand uit in de Downloads map en verplaats de FiveM server bestanden bij voorkeur naar een aparte map. In dit voorbeeld staat de server software in een map genaamd **FiveM** op het bureaublad.

:::warning Uitpaktool vereist
Om de gedownloade FiveM Server software uit te pakken, heb je een uitpaktool nodig voor het gecomprimeerde bestand. In dit voorbeeld gebruiken we [7Zip Software](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Maak een FiveM Server licentiesleutel aan

Elke FiveM server heeft een eigen licentiesleutel nodig, die je beheert via het nieuwe [Cfx.re Portal](http://portal.cfx.re/). De licentiesleutel is gekoppeld aan je Cfx.re account. Log in op de website, ga naar de categorie **Server** en klik op de knop **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuratie

Nu kun je beginnen met het installeren van de FiveM Server en txAdmin. Open hiervoor opnieuw je FiveM Server map en start de `FXServer.exe` applicatie.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Zodra de server applicatie draait, openen de serverconsole en txAdmin. In de txAdmin interface moet je je **Cfx.re account** koppelen aan txAdmin.


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin Setup

Tijdens de txAdmin setup wordt je eigen FiveM server in vijf stappen geïnstalleerd en geconfigureerd. Volg de instructies in de txAdmin interface en geef eerst een **servernaam** op. Kies daarna het gewenste **servertype**. Dit voorbeeld toont de installatie van een FiveM server met vooraf geïnstalleerde QBCore.

Selecteer in de stap **Deployment Type** de optie **Popular Recipes** en daarna de **QBCore Framework Template**. Bevestig de gewenste **Data Directory** en start de **Recipe Deployer** om de installatie af te ronden.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Tijdens de Recipe Deployer moet je de laatste benodigde gegevens invullen voordat de server echt kan starten. Vul je eerder aangemaakte FiveM licentiesleutel in het veld **License Key** in. Klik daarna op **Show/Hide Database Options (Advanced)** en vul de inloggegevens van je databaseserver in. In dit geval is alleen het eerder ingestelde wachtwoord voor de **root** gebruiker nodig. Alle andere instellingen kun je laten staan. Controleer je invoer en klik vervolgens op **Run Recipe** om het proces te starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Firewall configuratie
Om ervoor te zorgen dat je server publiekelijk bereikbaar is, moet je poort forwarding regels aanpassen voor de poorten die de dedicated server gebruikt. Dit kan je doen via Powershell commando’s, wat makkelijker is, of via de Windows Defender Firewall pagina.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Open je Windows zoekbalk en zoek naar **Powershell**. Klik met de rechtermuisknop en kies **Als administrator uitvoeren** zodat je de juiste rechten hebt en alles goed werkt.

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

Deze commando’s maken automatisch firewallregels aan die nodig zijn om je FiveM server publiekelijk bereikbaar te maken.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Gebruik de zoekfunctie in Windows om **Windows Firewall instellingen met geavanceerde beveiliging** te openen. Mogelijk moet je op **Geavanceerde instellingen** klikken om het juiste venster te openen als je de basis Windows Firewall pagina opent.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Je moet nieuwe regels aanmaken voor je FiveM server. Klik hiervoor op binnenkomende en uitgaande regels zoals hieronder beschreven en voeg ze toe voor de volgende protocollen en poorten:
- TCP binnenkomend en uitgaand: 30120
- UDP binnenkomend en uitgaand: 30120

Gebruik onze [Port Forwarding (Firewall)](vserver-windows-port.md) gids als je hier extra hulp bij nodig hebt.

</TabItem>
</Tabs>

## Conclusie

Je hebt nu succesvol een FiveM Dedicated Server service geïnstalleerd en geconfigureerd op je dedicated server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂



