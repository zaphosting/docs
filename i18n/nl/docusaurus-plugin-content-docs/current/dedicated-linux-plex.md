---
id: dedicated-linux-plex
title: "Plex installeren op een Linux Server - Stream je persoonlijke mediatheek"
description: "Ontdek hoe je je persoonlijke mediatheek moeiteloos beheert en streamt met Plex voor eenvoudige toegang op al je apparaten → Leer het nu"
sidebar_label: Plex installeren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Plex is een platform om media zoals films, series, muziek en foto’s centraal te beheren en te streamen. Met de Plex Media Server kun je je bibliotheken organiseren, automatisch verrijken met metadata en streamen naar verschillende apparaten, zowel binnen je lokale netwerk als via internet. Hierdoor is Plex een flexibele oplossing om je persoonlijke mediacollectie makkelijk en overal toegankelijk te maken.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Overweeg je om deze service zelf te hosten? We nemen je stap voor stap mee in het installatie- en configuratieproces, inclusief alles wat je moet weten.



## Plex installeren met de One Click Apps Installer

Je kunt **Plex** direct installeren via onze **One Click Apps Installer** in de VPS-webinterface. Na de eerste setup van de apps open je de appcatalogus, zoek je op **Plex** en start je de installatie met je gewenste project-, omgeving- en domeininstellingen. Zo zet je snel en eenvoudig **Plex** op zonder handmatig via de command line te werken, terwijl je profiteert van geïntegreerd webbeheer, ondersteuning voor custom domeinen en SSL waar beschikbaar.

## Vereisten

Voordat je **Plex** installeert, check je of je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimum      | ZAP-Hosting Aanbeveling  |
| ---------- | ------------ | ------------------------ |
| CPU        | 4 vCPU Cores | 8 vCPU Cores             |
| RAM        | 4 GB         | 8 GB                     |
| Schijfruimte | 25GB        | 25 GB                    |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Zorg dat je server aan de volgende voorwaarden voldoet voordat je begint:

**Dependencies:** Geen

**Besturingssysteem:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Zorg dat alle dependencies aanwezig zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de Plex-installatie te voorkomen.



## Installatie

De officiële Plex Media website biedt de nieuwste Linux-versie van de Plex Media Server aan voor download. Gebruik de 64-bit variant om compatibiliteit met alle moderne Linux-versies te garanderen. Voer het volgende commando uit om het `.deb` bestand te downloaden:

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Na het downloaden kun je de installer uitvoeren om de Plex Media Server te installeren. De configuratie gebeurt daarna via de webinterface in je browser, waar je bibliotheken aanmaakt en je mediacollectie beheert. Voer het volgende commando uit om de installatie te starten:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Om Plex Media Server in te stellen, open je op dezelfde machine waar je de server hebt geïnstalleerd een browser en ga je naar `http://127.0.0.1:32400/web`. Je wordt gevraagd in te loggen met een bestaand Plex-account of een nieuw account aan te maken als je er nog geen hebt.

Deze login is nodig om de server aan je persoonlijke account te koppelen, zodat functies als remote access, gebruikersbeheer en synchronisatie tussen apparaten mogelijk zijn. Na succesvolle authenticatie ben je in je eigen Plex Media omgeving. Hier kun je bibliotheken aanmaken voor films, series, muziek of foto’s, automatisch metadata ophalen en content delen met andere gebruikers op je lokale netwerk of via internet.

Na de setup kun je ook extern toegang krijgen tot je Plex Media Server door in een browser te gaan naar `http://<ip-adres>:32400`. Vervang `<ip-adres>` door het publieke IP-adres van je server.

Poort 32400 is de standaardpoort voor Plex webtoegang en moet mogelijk opengezet worden in je firewall of router als je via internet wilt verbinden.

Als je het adres bereikt, word je doorgestuurd naar de Plex loginpagina en kun je je bibliotheken en instellingen beheren. Voor veilige externe toegang raden we aan Remote Access in de Plex-instellingen te activeren, zodat de verbinding versleuteld is en het verkeer via de Plex-service wordt geleid.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Plex nu succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server. We raden je ook aan om de volgende bronnen te bekijken, die je extra hulp en tips kunnen bieden tijdens je serverconfiguratie:

- [Plex.com](https://Plex.com/) - Officiële website
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plex Helpcentrum (Documentatie)

Heb je specifieke vragen die hier niet behandeld worden? Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂