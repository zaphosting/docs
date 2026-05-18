---
id: dedicated-windows-plex
title: "Plex installeren op een Windows Server - Stream je persoonlijke mediatheek"
description: "Ontdek hoe je je persoonlijke media moeiteloos beheert en streamt met Plex voor naadloze toegang op al je apparaten → Leer het nu"
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

Wil je deze dienst zelf hosten? We nemen je stap voor stap mee in het installatie- en configuratieproces, inclusief alles wat je moet weten.

## Plex installeren met de One Click Apps Installer

Je kunt **Plex** direct installeren via onze **One Click Apps Installer** in de VPS-webinterface. Na de eerste setup van de apps open je de appcatalogus, zoek je op **Plex** en start je de installatie met je gewenste project-, omgeving- en domeininstellingen. Zo zet je snel en eenvoudig **Plex** op zonder handmatig via de command line te werken, terwijl je profiteert van geïntegreerd webbeheer, custom domeinen en SSL waar mogelijk.

## Vereisten

Zorg voordat je **Plex** installeert dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimaal    | Aanbevolen door ZAP-Hosting |
| ---------- | ----------- | --------------------------- |
| CPU        | 4 vCPU cores| 8 vCPU cores                |
| RAM        | 4 GB        | 8 GB                        |
| Schijfruimte | 25 GB     | 25 GB                       |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Controleer dus vooraf of je server aan deze eisen voldoet:

**Dependencies:** Geen

**Besturingssysteem:** Windows 10/11, Windows Server 20XX

Zorg dat alle dependencies aanwezig zijn en dat je de juiste Windows-versie gebruikt om compatibiliteitsproblemen tijdens de Plex-installatie te voorkomen.

## Installatie

De officiële Plex Media website biedt de actuele Windows-versie van de Plex Media Server aan voor download. Gebruik de 64-bit variant om compatibiliteit met alle moderne Windows-edities te garanderen. Download hier: https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

Na het downloaden kun je de installer starten om de Plex Media Server te installeren. De configuratie gebeurt daarna via de webinterface in je browser, waar je bibliotheken aanmaakt en je mediacollectie beheert.

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

Na de installatie opent de Plex Media Server webinterface automatisch in je standaardbrowser. Je wordt gevraagd in te loggen met een bestaand Plex-account of een nieuw account aan te maken als je er nog geen hebt.

Deze login is nodig om de server aan je persoonlijke account te koppelen, zodat functies als remote access, gebruikersbeheer en synchronisatie tussen apparaten mogelijk zijn. Na succesvolle authenticatie ben je in je eigen Plex Media omgeving. Hier kun je bibliotheken aanmaken voor films, series, muziek of foto’s, automatisch metadata ophalen en content delen met andere gebruikers binnen je netwerk of via internet.

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

Na de setup kun je ook extern bij je Plex Media Server via de webinterface door `http://<ip-adres>:32400` in je browser te openen. Vervang `<ip-adres>` door het publieke IP-adres van je server.

Poort 32400 is de standaardpoort voor Plex webtoegang en moet mogelijk opengezet worden in je firewall of router als je via internet wilt verbinden.

Als je de pagina bereikt, word je doorgestuurd naar de Plex loginpagina en kun je je bibliotheken en instellingen beheren. Voor veilige externe toegang raden we aan Remote Access in de Plex-instellingen te activeren, zodat je verbinding versleuteld is en het verkeer via de Plex-service loopt.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Plex nu succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server. We raden je ook aan om de volgende bronnen te bekijken, die je extra hulp en tips kunnen geven tijdens het configureren van je server:

- [Plex.com](https://Plex.com/) - Officiële website
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plex Help Center (documentatie)

Heb je nog specifieke vragen die hier niet behandeld worden? Neem gerust contact op met onze support, we staan dagelijks voor je klaar om je te helpen! 🙂