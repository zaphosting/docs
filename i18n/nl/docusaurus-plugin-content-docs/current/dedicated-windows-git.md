---
id: dedicated-windows-git
title: "Git instellen op een Windows Server - Versiebeheer voor je projecten"
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

Git is een gedistribueerd versiebeheersysteem, ontworpen voor efficiënt beheer van broncode. Het stelt ontwikkelaars in staat om wijzigingen bij te houden, tegelijkertijd aan verschillende branches te werken en naadloos samen te werken aan projecten. Dankzij de flexibiliteit en performance is Git dé standaardtool geworden voor versiebeheer in moderne softwareontwikkeling.

Overweeg je om deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles wat je moet weten.

## Git installeren met de One Click Apps Installer

Je kunt **Git** direct installeren via onze **One Click Apps Installer** in de VPS-webinterface. Na het voltooien van de initiële app-setup, open je de app-catalogus, zoek je naar **Git** en start je de installatie met je gewenste project-, omgeving- en domeininstellingen. Dit is een snelle en gebruiksvriendelijke manier om **Git** te deployen en beheren zonder handmatige command line setup, terwijl je toch profiteert van geïntegreerd webbeheer, ondersteuning voor custom domeinen en SSL waar beschikbaar.

## Voorbereiding

Voordat je **Git** installeert, moet je je systeem voorbereiden. Dit betekent dat je het besturingssysteem bijwerkt naar de nieuwste versie. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.

### Systeem bijwerken
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je altijd eerst een systeemupdate uit. Zo zorg je dat je systeem de laatste patches en softwareversies heeft voordat je verder gaat.

## Installatie

Nu de voorbereidingen klaar zijn, kun je doorgaan met het installeren van de Git-applicatie. Download hiervoor Git voor Windows (x64) hier: https://git-scm.com/downloads/win 

Start daarna de setup van het gedownloade bestand en volg de stappen zoals aangegeven.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

Als de installatie klaar is, controleer je of Git correct werkt door een terminal of command prompt te openen. Typ het commando `git --version` en druk op Enter.

Als de installatie gelukt is, toont Git de geïnstalleerde versie. Krijg je een foutmelding of geen output? Dan is Git waarschijnlijk niet goed geïnstalleerd of staat het commando niet in het systeem pad.

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

Gefeliciteerd! Je hebt nu Git succesvol geïnstalleerd en geconfigureerd op je vServer. We raden je ook aan om de volgende bronnen te bekijken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie:

- [git-scm.com](https://git-scm.com/) - Officiële website
- [git-scm.com/doc](https://git-scm.com/doc) - Git documentatie

Heb je specifieke vragen die hier niet behandeld worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat om je te helpen! 🙂