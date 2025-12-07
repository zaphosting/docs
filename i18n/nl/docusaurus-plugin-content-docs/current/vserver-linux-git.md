---
id: vserver-linux-git
title: "vServer: Git installeren op Linux"
description: "Ontdek hoe je Git installeert en configureert voor efficiënte versiebeheer en soepele samenwerking in je ontwikkelprojecten → Leer het nu"
sidebar_label: Git installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Git is een gedistribueerd versiebeheersysteem dat ontworpen is voor efficiënt beheer van broncode. Het stelt ontwikkelaars in staat om wijzigingen bij te houden, tegelijkertijd aan verschillende branches te werken en naadloos samen te werken aan projecten. Dankzij de flexibiliteit en performance is Git de standaardtool geworden voor versiebeheer in moderne softwareontwikkeling.

Overweeg je om deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles waar je op moet letten.

<InlineVoucher />



## Voorbereiding

Voordat je **Git** installeert, moet je je systeem voorbereiden. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem bijwerken
Om zeker te weten dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je altijd eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt ervoor dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.



## Installatie

Nu de voorbereidingen klaar zijn, kun je Git installeren. Voer hiervoor het volgende commando uit:

```console
sudo apt install git-all -y
```



Als de installatie klaar is, controleer je of Git correct werkt door een terminal of command prompt te openen. Typ het commando `git --version` en druk op Enter.

Als de installatie gelukt is, toont Git de geïnstalleerde versie. Krijg je een foutmelding of geen output? Dan is Git waarschijnlijk niet goed geïnstalleerd of staat het commando niet in het systeem pad.

```
git --version
git version 2.51.2
```



## Configuratie

Stel je Git gebruikersnaam en e-mail in met onderstaande commando’s, waarbij je de voorbeeldgegevens vervangt door je eigen info. Deze gegevens worden gekoppeld aan elke commit die je maakt.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Afronding en meer bronnen

Gefeliciteerd! Je hebt Git nu succesvol geïnstalleerd en geconfigureerd op je vServer. We raden je ook aan om deze bronnen te checken, die je extra hulp en tips kunnen geven tijdens het configureren van je server:

- [git-scm.com](https://git-scm.com/) - Officiële website
- [git-scm.com/doc](https://git-scm.com/doc) Git documentatie

Heb je specifieke vragen die hier niet behandeld worden? Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />