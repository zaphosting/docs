---
id: dedicated-linux-joplin
title: "Dedicated Server: Joplin installeren op Linux"
description: "Ontdek hoe je versleutelde Markdown-notities organiseert en synchroniseert met Joplin voor veilige, flexibele notities → Leer het nu"
sidebar_label: Joplin installeren
services:
- dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Joplin is een open-source notitie- en takenapp waarmee je Markdown-notities kunt organiseren in doorzoekbare notitieboeken en synchroniseren tussen apparaten. Het biedt end-to-end encryptie, een webclipper en cross-platform synchronisatie. Perfect voor gebruikers die privacy, flexibiliteit en volledige controle over hun data belangrijk vinden!

![img](https://screensaver01.zap-hosting.com/index.php/s/qfo8k2RXWPFqi3g/preview)

Overweeg je deze dienst zelf te hosten? We nemen je stap voor stap mee in het installatie- en configuratieproces, inclusief alles waar je op moet letten.

:::danger Linux met Desktop-variant vereist
Deze applicatie kan alleen geïnstalleerd en gebruikt worden op een Linux-systeem met een grafische gebruikersinterface; in dit voorbeeld gebruiken we Ubuntu Desktop 25.04 als referentie.

:::





## Vereisten

Voordat je **Joplin** installeert, zorg je dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware | Minimaal | ZAP-Hosting Aanbeveling |
| ---------- | ------------ | -------------------------- |
| CPU| 1 vCPU Core | 4 vCPU Cores |
| RAM| 2 GB | 4 GB |
| Schijfruimte | 250 MB | 250 MB |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Controleer dat je server aan de volgende eisen voldoet voordat je verder gaat met de installatie:

**Dependencies:** `Libfuse2`

**Besturingssysteem:** Linux met Desktop-ondersteuning

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Joplin te voorkomen.



## Voorbereiding

Voordat je **Joplin** installeert, moet je je systeem klaarmaken. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie en alle benodigde dependencies installeert. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem updaten
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt ervoor dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de benodigde dependencies installeren.

#### Libfuse2
Joplin heeft Libfuse2 nodig. Installeer dit met het volgende commando: 
```
sudo apt install -y libfuse2
```




## Installatie
Nu aan alle vereisten is voldaan en de voorbereidingen zijn afgerond, kun je Joplin installeren. Voer het volgende commando uit:

```
wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash
```

Joplin wordt gedownload en geïnstalleerd via het officiële installatiescript. Laat het proces gewoon lopen tot het klaar is, daarna kun je de app direct starten.



![img](https://screensaver01.zap-hosting.com/index.php/s/Af9xjkqz7TSr4sZ/preview)



## Configuratie

Na de installatie stel je de basisinstellingen in om Joplin aan te passen aan jouw workflow. De configuratie vind je in het *Instellingen* menu.

**Synchronisatie**
Joplin ondersteunt meerdere sync-opties zoals Nextcloud, Dropbox, OneDrive of WebDAV. Kies je favoriete provider onder “Synchronisatie” en vul je inloggegevens in. Zo houd je je notities up-to-date op al je apparaten.

**Encryptie**
Om je gesynchroniseerde notities te beveiligen, zet je end-to-end encryptie aan in de “Encryptie” instellingen. Er wordt een sleutel gegenereerd die je op alle apparaten moet instellen die toegang hebben tot je notities.

**Editor & Uiterlijk**
Joplin gebruikt Markdown voor notities. In de “Editor” instellingen bepaal je of de preview automatisch wordt getoond en pas je het lettertype en de grootte aan.

**Plugins & Extensies**
Met de ingebouwde plugin manager kun je extra functies installeren, zoals diagramondersteuning, kalenderintegratie of geavanceerd tagbeheer.

**Web Clipper**
Optioneel kun je de “Joplin Web Clipper” browserextensie activeren om hele webpagina’s of geselecteerde delen direct als notities op te slaan.

Met deze basisinstellingen is Joplin klaar voor allerlei toepassingen, zoals taakbeheer, projectdocumentatie of persoonlijke kennisbanken.



![img](https://screensaver01.zap-hosting.com/index.php/s/FyjyeF3EcRFe2qf/preview)




## Afsluiting en meer bronnen

Gefeliciteerd! Je hebt Joplin nu succesvol geïnstalleerd en geconfigureerd op je Dedicated Server. We raden je ook aan om de volgende bronnen te bekijken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie:

- [Joplinapp.org](https://joplin.org/) - Officiële website
- [Joplinapp.org/help/](https://joplinapp.org/help/) - Joplin Helpcentrum

Heb je specifieke vragen die hier niet behandeld worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat om je te helpen! 🙂