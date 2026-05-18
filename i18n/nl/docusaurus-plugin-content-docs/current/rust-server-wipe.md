---
id: rust-server-wipe
title: "Rust: Server Wipe - Houd je server in balans en schoon"
description: "Leer wat Rust server wipes zijn, waarom ze nodig zijn en hoe je een wipe uitvoert op je Rust server → Ontdek het nu"
sidebar_label: Server Wipe
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

In **Rust** reset een server wipe delen van de gamewereld om een frisse start voor alle spelers te creëren. Na verloop van tijd raken Rust maps volgebouwd met grote bases, verzamelde resources en gevestigde spelersgroepen. Dit kan de balans en performance van de server beïnvloeden.

Een server wipe verwijdert de bestaande voortgang en herstelt een schone omgeving zodat spelers weer helemaal opnieuw kunnen beginnen. Veel Rust communities voeren wipes regelmatig uit om de gameplay eerlijk en spannend te houden, vooral bij nieuwe updates of maps.

Afhankelijk van het type wipe wordt de **map**, de **player blueprints** of **beide** gereset.

<InlineVoucher />



## Wat een Server Wipe Doet

Een Rust server wipe verwijdert opgeslagen wereld- of spelerprogressie data. Dit kan het volgende omvatten:

- Door spelers gebouwde structuren en bases  
- Spelerinventarissen en opgeslagen items  
- Map verkenningsdata  
- Geleerde blueprints (afhankelijk van het type wipe)

Na een wipe gedraagt de server zich als een verse wereld waar spelers resources moeten verzamelen, bases opnieuw moeten bouwen en progressie opnieuw moeten leren.



## Types Rust Wipes

Rust ondersteunt verschillende soorten wipes, afhankelijk van wat je wilt resetten. De volgende types wipes worden hieronder uitgelegd.

### Map wipe

Een **map wipe** verwijdert het volledige wereld save-bestand. Alle bases, structuren en mapvoortgang worden verwijderd. Bij het herstarten van de server wordt een nieuwe map gegenereerd of gedownload. Blueprint voortgang blijft ongewijzigd tenzij er ook een blueprint wipe wordt uitgevoerd.

### Blueprint wipe

Een **blueprint wipe** reset alle geleerde crafting blueprints. Spelers moeten items opnieuw onderzoeken voordat ze ze kunnen maken. Dit type wipe beïnvloedt alleen de progressie en reset de map zelf niet.

### Full wipe

Een **full wipe** reset zowel de map als alle player blueprints. Dit creëert een volledig frisse serveromgeving en wordt vaak gebruikt voor seizoensresets of grote updates.



## Waarom Server Wipes Belangrijk Zijn

Server wipes helpen een gezonde Rust serveromgeving te behouden. Na verloop van tijd verzamelen servers grote aantallen structuren, opslagcontainers en wereldentiteiten. Dit kan de serverperformance en gameplaybalans negatief beïnvloeden. Regelmatige wipes bieden verschillende voordelen:

- Herstellen van serverperformance  
- Een frisse start voor alle spelers creëren  
- Voorkomen dat dominante clans de map voor altijd controleren  
- Servers in staat stellen nieuwe maps of map seeds te draaien

Veel Rust communities voeren geplande wipes uit, wekelijks, tweewekelijks of maandelijks, afhankelijk van de serverstijl.



## Een Server Wipe Uitvoeren

Om een wipe uit te voeren op je Rust server, krijg je toegang tot je serverbestanden via de [FTP toegang](gameserver-ftpaccess.md). Zoek vervolgens de save-bestanden in de Rust server directory. Deze bestanden bevatten meestal:

```
proceduralmap.*
player.blueprints.*
player.deaths.*
player.identities.*
player.states.*
```
Het verwijderen van specifieke bestanden bepaalt het type wipe dat wordt uitgevoerd. Het verwijderen van de `proceduralmap.*` bestanden voert een **map wipe** uit, waarmee de bestaande wereld wordt verwijderd. Het verwijderen van de `player.blueprints.*` bestanden voert een **blueprint wipe** uit.

![img](https://screensaver01.zap-hosting.com/index.php/s/QdeoFWbaaQz7Yaf/preview)

Het verwijderen van beide resulteert in een **full wipe**. Start de server opnieuw op nadat je de gewenste bestanden hebt verwijderd. De server genereert automatisch een nieuwe wereld en spelers kunnen weer helemaal opnieuw beginnen.



## Conclusie

Gefeliciteerd! Je weet nu hoe Rust server wipes werken en hoe je ze uitvoert. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />