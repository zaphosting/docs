---
id: dedicated-linux-fivem
title: "Dedicated Server: FiveM Dedicated Server Linux Setup (GS/TS3 Interface)"
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
Heb je een dedicated server en wil je je eigen FiveM Dedicated Server service met txAdmin installeren en beheren? Dan ben je hier aan het juiste adres! Hieronder leggen we alle stappen uit die nodig zijn om het te installeren en configureren, en waar je op moet letten.

:::warning  Besturingssysteem geselecteerd en geïnstalleerd
Er wordt vanuit gegaan dat je al een besturingssysteem hebt geselecteerd en geïnstalleerd op je dedicated server. Als je deze stap nog niet hebt afgerond, volg dan eerst de stappen in de [Initial setup](dedicated-setup.md) handleiding voor dedicated servers.
:::



## Voorbereiding

Om een FiveM server op te zetten, zijn er een aantal voorbereidingen nodig die je moet uitvoeren voordat je daadwerkelijk kunt beginnen met het installeren van de FiveM Dedicated Server.


### Database instellen

Voor onze GS/TS3 interface optie leveren we al onze eigen databases mee. Wil je liever je eigen database server en database opzetten, dan raden we je aan om de [Install database](dedicated-linux-databases.md) handleiding te bekijken. 

:::warning
Gebruik je je eigen database, dan moet je tijdens de txAdmin setup de vooraf ingestelde databasegegevens vervangen door je eigen gegevens. 
:::



### GS/TS3 interface installeren
Met de gebruiksvriendelijke GS/TS3 interface installeer je je FiveM Dedicated Server met slechts een paar klikken. Er is geen voorkennis nodig voor deze installatie. De setup van alle benodigde pakketten, serverbestanden en de daadwerkelijke installatie zijn volledig geautomatiseerd, wat je tijd en moeite bespaart.

:::warning
De GS/TS3 interface functie werkt met de volgende besturingssystemen:

- Debian: 10, 11
- Ubuntu: 20.04

(*) We zijn al bezig om binnenkort ook andere en nieuwere besturingssystemen en (versies) beschikbaar te maken.
:::

Ben je nog niet bekend met de GS/TS3 interface? Bekijk dan onze [GS/TS3 Interface](dedicated-linux-gs-interface.md) handleiding. 

Heb je de GS/TS3 interface geïnstalleerd, open dan de nieuw aangemaakte game server service. Daar moet je nu het spel selecteren. Ga hiervoor naar de **Games** pagina. Klik op beschikbare games, zoek naar txAdmin en klik op de install-knop. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Maak een FiveM Server licentiesleutel aan

Elke FiveM server heeft een eigen licentiesleutel nodig, die je beheert via het nieuwe [Cfx.re Portal](http://portal.cfx.re/). De licentiesleutel is gekoppeld aan je Cfx.re account. Log in op de website, ga naar de categorie **Server** en klik op de knop **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuratie

Nu kun je beginnen met het configureren van de FiveM server en txAdmin. Open hiervoor het dashboard van je game server. Je vindt de link en inloggegevens voor de txAdmin omgeving in het txAdmin gedeelte. Open deze en log in.

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### txAdmin setup

Tijdens de txAdmin setup wordt je eigen FiveM server in vijf stappen geïnstalleerd en geconfigureerd. Volg de instructies in de txAdmin interface en geef eerst een **servernaam** op. Kies daarna het gewenste **servertype**. Dit voorbeeld toont de installatie van een FiveM server met vooraf geïnstalleerde QBCore.

Selecteer bij de stap **Deployment Type** de optie **Popular Recipes** en daarna de **QBCore Framework Template**. Bevestig de gewenste **Data Directory** en start de **Recipe Deployer** om de installatie af te ronden.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Firewall configuratie

Bij het installeren van de FiveM server via de GS/TS3 interface wordt alle benodigde poort forwarding **automatisch** ingesteld in de firewall. Mocht je problemen ondervinden, dan kun je de poort forwarding ook handmatig instellen via SSH met het volgende commando: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusie

Je hebt nu succesvol een FiveM Dedicated Server service geïnstalleerd en geconfigureerd op je dedicated server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂



