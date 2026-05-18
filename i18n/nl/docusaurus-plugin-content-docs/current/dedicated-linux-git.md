---
id: dedicated-linux-git
title: "Git instellen op een Linux Server - Versiebeheer voor jouw projecten"
description: "Ontdek hoe je Git installeert en configureert voor efficiënt versiebeheer en soepele samenwerking in je projecten → Leer het nu"
sidebar_label: Git installeren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Git is een gedistribueerd versiebeheersysteem dat ontworpen is voor efficiënt beheer van broncode. Het stelt developers in staat om veranderingen bij te houden, tegelijkertijd aan verschillende branches te werken en naadloos samen te werken aan projecten. Dankzij de flexibiliteit en performance is Git dé standaardtool geworden voor versiebeheer in moderne softwareontwikkeling.

Wil je deze service zelf hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles waar je op moet letten.



## Git installeren met de One Click Apps Installer

Je kunt **Git** direct installeren via onze **One Click Apps Installer** in de VPS-webinterface. Na het afronden van de eerste apps setup, open je de appcatalogus, zoek je op **Git** en start je de installatie met jouw gewenste project-, omgeving- en domeininstellingen. Dit is een snelle en gebruiksvriendelijke manier om **Git** te deployen en beheren zonder handmatige command line setup, terwijl je toch profiteert van geïntegreerd webbeheer, custom domeinsupport en SSL waar beschikbaar.

## Voorbereiding

Voordat je **Git** installeert, moet je je systeem voorbereiden. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem updaten
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je altijd eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Zo zorg je dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.



## Installatie

Nu de voorbereidingen klaar zijn, kun je Git installeren. Voer het volgende commando uit:

```console
sudo apt install git-all -y
```

Als de installatie klaar is, controleer je of Git correct werkt door een terminal of command prompt te openen. Typ `git --version` en druk op Enter.

Als de installatie gelukt is, toont Git de geïnstalleerde versie. Krijg je een foutmelding of geen output? Dan is Git waarschijnlijk niet goed geïnstalleerd of staat het commando niet in het systeem pad.

```
git --version
git version 2.51.2
```



## Configuratie

Stel je Git gebruikersnaam en e-mail in met onderstaande commando’s, vervang de voorbeeldwaarden door jouw eigen gegevens. Deze gegevens worden gekoppeld aan elke commit die je maakt.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Afsluiting en meer bronnen

Gefeliciteerd! Je hebt nu Git succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server. We raden je ook aan om deze bronnen te checken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie:

- [git-scm.com](https://git-scm.com/) - Officiële website
- [git-scm.com/doc](https://git-scm.com/doc) Git documentatie

Heb je specifieke vragen die hier niet behandeld worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat om je te helpen! 🙂