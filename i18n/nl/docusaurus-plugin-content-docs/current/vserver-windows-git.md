---
id: vserver-windows-git
title: "VPS: Git installeren op Windows"
description: "Ontdek hoe je Git installeert en configureert voor efficiënte versiebeheer en soepele samenwerking in softwareontwikkeling → Leer het nu"
sidebar_label: Git installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Git is een gedistribueerd versiebeheersysteem dat ontworpen is voor efficiënt beheer van broncode. Het stelt ontwikkelaars in staat om wijzigingen bij te houden, tegelijkertijd aan verschillende branches te werken en naadloos samen te werken aan projecten. Dankzij de flexibiliteit en prestaties is Git de standaardtool geworden voor versiebeheer in moderne softwareontwikkeling.

Denk je eraan om deze service zelf te hosten? We nemen je stap voor stap mee in het installatie- en configuratieproces, inclusief alles waar je op moet letten.

<InlineVoucher />



## Voorbereiding

Voordat je **Git** installeert, moet je je systeem voorbereiden. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem bijwerken
Om zeker te weten dat je systeem draait met de nieuwste software- en beveiligingsupdates, is het belangrijk om eerst een systeemupdate uit te voeren. Zo zorg je dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.



## Installatie

Nu de voorbereidingen zijn afgerond, kun je doorgaan met het installeren van de Git-applicatie. Download hiervoor Git voor Windows (x64) hier: https://git-scm.com/downloads/win 

Start daarna de setup van het gedownloade bestand en volg de stappen zoals aangegeven.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

Als de installatie klaar is, controleer je of Git correct werkt door een terminal of opdrachtprompt te openen. Typ het commando `git --version` en druk op Enter.

Als de installatie gelukt is, geeft Git het geïnstalleerde versienummer weer. Krijg je een foutmelding of geen output? Dan is Git waarschijnlijk niet goed geïnstalleerd of staat het commando niet in het systeem pad.

```
git --version
git version 2.51.2
```

![img](https://screensaver01.zap-hosting.com/index.php/s/FDDLGnLkStfb7nY/preview)



## Configuratie

Stel je Git gebruikersnaam en e-mail in met onderstaande commando’s, waarbij je de voorbeeldgegevens vervangt door je eigen info. Deze gegevens worden gekoppeld aan elke commit die je maakt.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Afsluiting en meer bronnen

Gefeliciteerd! Je hebt Git nu succesvol geïnstalleerd en geconfigureerd op je vServer. We raden je ook aan om eens te kijken naar de volgende bronnen, die je extra hulp en tips kunnen bieden tijdens je serverconfiguratie:

- [git-scm.com](https://git-scm.com/) - Officiële website
- [git-scm.com/doc](https://git-scm.com/doc) - Git documentatie

Heb je specifieke vragen die hier niet behandeld worden? Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />