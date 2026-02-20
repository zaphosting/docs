---
id: dedicated-windows-git
title: "Git installeren op een Windows Server - Versiebeheer voor jouw projecten"
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

Git is een gedistribueerd versiebeheersysteem, ontworpen voor efficiënt beheer van broncode. Het stelt developers in staat om veranderingen bij te houden, tegelijkertijd aan verschillende branches te werken en soepel samen te werken aan projecten. Dankzij de flexibiliteit en performance is Git dé standaardtool geworden voor versiebeheer in moderne softwareontwikkeling.

Overweeg je om deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles waar je op moet letten.





## Voorbereiding

Voordat je **Git** installeert, moet je je systeem klaarmaken. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem bijwerken
Om zeker te weten dat je systeem draait met de meest recente software- en beveiligingsupdates, is het altijd slim om eerst een systeemupdate uit te voeren. Zo zorg je dat je systeem de nieuwste beveiligingspatches en softwareversies heeft voordat je verder gaat.



## Installatie

Nu de voorbereidingen klaar zijn, kun je Git installeren. Download Git voor Windows (x64) hier: https://git-scm.com/downloads/win 

Start daarna de setup van het gedownloade bestand en volg de stappen zoals aangegeven.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

Als de installatie klaar is, controleer je of Git goed werkt door een terminal of command prompt te openen. Typ het commando `git --version` en druk op Enter.

Als de installatie gelukt is, toont Git de geïnstalleerde versie. Krijg je een foutmelding of geen output? Dan is Git waarschijnlijk niet goed geïnstalleerd of staat het commando niet in het systeem pad.

```
git --version
git version 2.51.2
```

![img](https://screensaver01.zap-hosting.com/index.php/s/FDDLGnLkStfb7nY/preview)



## Configuratie

Stel je Git gebruikersnaam en e-mail in met onderstaande commando’s, vervang de voorbeeldwaarden door jouw eigen gegevens. Deze info wordt gekoppeld aan elke commit die je maakt.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Afsluiting en extra bronnen

Gefeliciteerd! Je hebt Git nu succesvol geïnstalleerd en geconfigureerd op je vServer. We raden je ook aan om deze bronnen te checken, die je extra hulp en tips kunnen geven tijdens het configureren van je server:

- [git-scm.com](https://git-scm.com/) - Officiële website
- [git-scm.com/doc](https://git-scm.com/doc) Git documentatie

Heb je specifieke vragen die hier niet behandeld worden? Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂