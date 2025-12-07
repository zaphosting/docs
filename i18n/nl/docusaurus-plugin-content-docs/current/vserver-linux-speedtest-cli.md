---
id: vserver-linux-speedtest-cli
title: "VPS: Speedtest-Cli installeren op Linux"
description: "Ontdek hoe je Speedtest-Cli instelt en gebruikt voor betrouwbare netwerktests en automatisering → Leer het nu"
sidebar_label: Speedtest-Cli installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Speedtest-Cli is zowel een gratis command-line tool als een softwarebibliotheek (libSpeedtest-Cli) voor het overdragen van data via URL’s. Het ondersteunt een breed scala aan protocollen—waaronder HTTP(S), FTP, SMTP, LDAP, MQTT en meer—en wordt vaak gebruikt voor taken zoals bestanden downloaden, API’s testen en netwerkautomatisering.

Overweeg je deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles wat je moet weten.

<InlineVoucher />

## Voorbereiding

Voordat je **Speedtest-Cli** installeert, moet je je systeem klaarmaken. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.

### Systeem bijwerken
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je altijd eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Zo zorg je dat je systeem de nieuwste beveiligingspatches en softwareversies heeft voordat je verder gaat.

## Installatie

Nu de voorbereidingen klaar zijn, kun je Speedtest-Cli installeren. Voer het volgende commando uit:

```console
sudo apt install speedtest-cli
```

## Configuratie

speedtest-cli gebruikt geen traditioneel configuratiebestand, maar je kunt het aanpassen met command-line opties en omgevingsvariabelen. Zo kun je het consistent en geautomatiseerd gebruiken:

- `--server <ID>`: Kies een specifieke server via het ID voor stabielere en beter vergelijkbare testresultaten.  
- `--bytes`: Toon snelheden in bytes per seconde in plaats van bits.  
- `--simple`: Laat alleen ping, download en upload zien in een compacte weergave.  
- `--json` of `--csv`: Handig voor automatisering en logging, want de resultaten worden opgeslagen in een machine-leesbaar formaat.  
- Proxy-ondersteuning: Stel omgevingsvariabelen in zoals `http_proxy` of `https_proxy` om speedtest-cli achter een proxy te draaien.

Gebruik je steeds dezelfde opties? Maak dan een shell alias of een klein wrapper-script. Zo start je speedtest-cli snel en krijg je altijd dezelfde output.

## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Speedtest-Cli succesvol geïnstalleerd en geconfigureerd op je VPS. We raden je ook aan om deze bronnen te checken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Officiële website

Heb je nog vragen die hier niet beantwoord worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />