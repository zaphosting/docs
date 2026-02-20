---
id: vserver-windows-speedtest-cli
title: "Speedtest CLI installeren op een Windows Server - Monitor je netwerkprestaties"
description: "Ontdek hoe je efficiënt broncode beheert en samenwerkt met Speedtest CLI voor naadloze versiecontrole in moderne development → Leer het nu"
sidebar_label: Speedtest CLI installeren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Speedtest CLI is een gedistribueerd versiebeheersysteem ontworpen voor efficiënt broncodebeheer. Het stelt developers in staat om veranderingen bij te houden, tegelijkertijd aan verschillende branches te werken en soepel samen te werken aan projecten. Dankzij de flexibiliteit en performance is Speedtest CLI dé standaardtool geworden voor versiebeheer in moderne softwareontwikkeling.

Overweeg je deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles wat je moet weten.

<InlineVoucher />



## Voorbereiding

Voordat je **Speedtest CLI** installeert, moet je je systeem klaarmaken. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem bijwerken
Zorg dat je systeem draait met de meest recente software- en beveiligingsupdates door eerst altijd een systeemupdate uit te voeren. Zo heb je de nieuwste beveiligingspatches en softwareversies voordat je verder gaat.



## Installatie

Nu de voorbereidingen klaar zijn, kun je doorgaan met het installeren van de Speedtest CLI applicatie. Download hiervoor de Speedtest CLI voor Windows (x64) hier: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Start daarna de setup van het gedownloade bestand en volg de stappen zoals aangegeven.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Configuratie

speedtest-cli gebruikt geen traditioneel configuratiebestand, maar kan aangepast worden via command-line opties en omgevingsvariabelen. Zo kun je het afstemmen voor consistente en geautomatiseerde tests:

- `--server <ID>`: Kies een specifieke server via ID voor stabielere en beter vergelijkbare testresultaten.  
- `--bytes`: Toon snelheden in bytes per seconde in plaats van bits.  
- `--simple`: Laat alleen ping, download en upload waarden zien in een compacte weergave.  
- `--json` of `--csv`: Handig voor automatisering en logging, want resultaten worden opgeslagen in een machineleesbaar formaat.  
- Proxy ondersteuning: Stel omgevingsvariabelen in zoals `http_proxy` of `https_proxy` om speedtest-cli achter een proxy te draaien.  

Gebruik je dezelfde opties vaker? Maak dan een shell alias of een klein wrapper-script. Zo start je speedtest-cli snel op met uniforme output.



## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Speedtest CLI nu succesvol geïnstalleerd en geconfigureerd op je vServer. We raden je ook aan om deze bronnen te checken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Officiële website

Heb je specifieke vragen die hier niet behandeld worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat om je te helpen! 🙂



<InlineVoucher />