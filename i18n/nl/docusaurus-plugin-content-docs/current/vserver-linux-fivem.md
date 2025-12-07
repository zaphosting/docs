---
id: vserver-linux-fivem
title: "VPS: FiveM Dedicated Server Linux Setup (GS/TS3 Interface)"
description: "Ontdek hoe je je eigen FiveM Dedicated Server met txAdmin opzet en runt voor soepel multiplayer gamen → Leer het nu"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introductie
Heb je een VPS en wil je je eigen FiveM Dedicated Server met txAdmin installeren en beheren? Dan ben je hier aan het juiste adres! Hieronder leggen we alle stappen uit die je nodig hebt om het te installeren, configureren en waar je op moet letten.



## Voorbereiding

Om een FiveM server op te zetten, zijn er een aantal voorbereidingen nodig die je moet doen voordat je echt kunt beginnen met het opzetten van de FiveM Dedicated Server.


### Database opzetten

Voor onze GS/TS3 interface optie leveren we al onze eigen databases mee. Wil je liever je eigen database server en database opzetten, dan raden we je aan om onze [Install database](vserver-linux-databases.md) handleiding te bekijken. 

:::warning
Gebruik je je eigen database? Dan moet je tijdens de txAdmin setup de vooraf ingestelde databasegegevens vervangen door je eigen gegevens. 
:::



### GS/TS3 interface installeren
Met de gebruiksvriendelijke GS/TS3 interface installeer je je FiveM Dedicated Server met slechts een paar klikken. Je hebt geen voorkennis nodig voor deze installatie. De setup van alle benodigde pakketten, serverbestanden en de daadwerkelijke installatie zijn volledig geautomatiseerd, wat je tijd en moeite bespaart.

:::warning
De GS/TS3 interface werkt met de volgende besturingssystemen:

- Debian: 10, 11
- Ubuntu: 20.04

(*) We zijn al bezig om binnenkort ook andere en nieuwere besturingssystemen en versies beschikbaar te maken.
:::

Ben je nog niet bekend met de GS/TS3 interface? Check dan onze [GS/TS3 Interface](dedicated-linux-gs-interface.md) handleiding. 

Heb je de GS/TS3 interface geïnstalleerd? Open dan de nieuw aangemaakte game server service. Kies daar het spel door naar de **Games** pagina te gaan. Klik op beschikbare games, zoek naar txAdmin en klik op de install knop. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Maak een FiveM Server licentiesleutel aan

Elke FiveM server heeft een eigen licentiesleutel nodig, die je regelt via het nieuwe [Cfx.re Portal](http://portal.cfx.re/). De licentiesleutel is gekoppeld aan je Cfx.re account. Log in op de website, ga naar de **Server** categorie en klik op de **Generate Key** knop.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuratie

Nu kun je beginnen met het configureren van de FiveM server en txAdmin. Open hiervoor het dashboard van je game server. Je vindt de link en inloggegevens voor de txAdmin omgeving in het txAdmin gedeelte. Open deze en log in. 

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### txAdmin setup

Tijdens de txAdmin setup wordt je eigen FiveM server in vijf stappen geïnstalleerd en geconfigureerd. Volg de instructies in de txAdmin interface en geef eerst een **servernaam** op. Kies daarna het gewenste **servertype**. Dit voorbeeld laat de installatie zien van een FiveM server met vooraf geïnstalleerde QBCore.

Selecteer bij de stap **Deployment Type** de optie **Popular Recipes** en kies vervolgens de **QBCore Framework Template**. Bevestig de gewenste **Data Directory** en start de **Recipe Deployer** om de installatie af te ronden.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Firewall configuratie

Bij het installeren van de FiveM server via de GS/TS3 interface wordt alle benodigde poort forwarding **automatisch** ingesteld in de firewall. Mocht je problemen ervaren, dan kun je de poort forwarding ook handmatig instellen via SSH met het volgende commando: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusie

Je hebt nu succesvol een FiveM Dedicated Server service geïnstalleerd en geconfigureerd op je VPS. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂


<InlineVoucher />