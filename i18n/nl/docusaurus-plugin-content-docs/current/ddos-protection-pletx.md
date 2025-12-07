---
id: ddos-protection-pletx
title: PletX DDoS-bescherming bij ZAP Hosting
description: "Ontdek hoe ZAP Hosting jouw servers beschermt met proactieve, realtime DDoS-verdediging op maat van elke dienst die je draait → Leer nu meer"
sidebar_label: PletX
---

## Introductie

DDoS (Distributed Denial of Service) aanvallen zijn kwaadaardige pogingen om het normale verkeer van een doelserver, dienst of netwerk te verstoren door het te overladen met te veel inkomend verkeer. Om een stabiele en ononderbroken werking voor onze klanten te garanderen, vertrouwt ZAP Hosting op speciale DDoS-beschermingssystemen die per datacenterlocatie zijn afgestemd.

Een van de belangrijkste technologieën binnen onze infrastructuur is PletX, een super adaptief beschermingsplatform dat aanvallen realtime filtert en afzwakt. In dit document leggen we uit hoe PletX werkt, welke diensten er baat bij hebben en waarom het een flinke voorsprong geeft in performance-kritische hostingomgevingen.

## Waar de Bescherming Wordt Ingezet

PletX is al volledig uitgerold op onze locatie FFM/Eygelshoven, waar het alle gehoste producten beschermt, inclusief gameservers, VPS, dedicated servers, TeamSpeak-servers, TS3 en Discord-bots, en webspace-diensten. Dit zorgt voor een allround en consistente bescherming over het hele productaanbod op deze locatie.

We zijn momenteel bezig met de voorbereidingen voor de uitrol op onze Amerikaanse locaties in Ashburn, Dallas en Los Angeles, waar PletX ook binnenkort beschikbaar zal zijn.

## Hoe de DDoS-bescherming Werkt

De PletX-bescherming op onze locaties is altijd actief en volledig gesynchroniseerd met ons netwerk. Al het inkomende verkeer wordt via het PletX-filtersysteem geleid voordat het onze infrastructuur bereikt. Zo wordt kwaadaardig verkeer zo vroeg mogelijk weggefilterd en komt het nooit bij jouw server aan.

### Automatische Protocoldetectie

PletX analyseert continu het inkomende verkeer en herkent protocol-specifieke signatures zodra er echt verkeer op een poort verschijnt. Wanneer spelers bijvoorbeeld verbinden met een FiveM-server op poort 30120,

herkent het de kenmerkende pakketstructuur en past automatisch de juiste FiveM-regel toe. Dit geldt ook voor andere diensten; als een Minecraft-server verkeer ontvangt op poort 25565, herkent het systeem de Minecraft-handshake en maakt het een bijpassende regel aan.

Als een gebruiker via SSH op poort 22 verbinding maakt met een VPS of dedicated server, herkent PletX de SSH-handshake en activeert het een SSH-regel. Voor Windows-systemen wordt RDP-verkeer op poort 3389 gedetecteerd en wordt een RDP-specifieke regel aangemaakt.

Wordt WireGuard of OpenVPN gebruikt op een custom poort, dan herkent PletX de eerste geldige uitwisseling en past het de juiste VPN-regel toe.

In alle gevallen geldt: zodra PletX het protocol heeft geïdentificeerd, wordt alleen legitiem verkeer voor dat protocol doorgelaten, terwijl ongewenst verkeer wordt weggefilterd voordat het de server bereikt.

### Ondersteunde Beschermingsprofielen

PletX ondersteunt een breed scala aan gangbare service- en gameprotocollen. Dit omvat populaire games zoals FiveM, Minecraft, titels die de Steam Source Engine gebruiken, Metin 2-gebaseerde diensten, RakNet-gestuurde games, SAMP, Growtopia en uitbreidingen zoals PlasmoVoice. Voice-apps zoals TeamSpeak worden ook automatisch herkend.

Naast gaming-gerelateerd verkeer herkent PletX ook remote access-protocollen zoals SSH en RDP, plus veilige netwerkprotocollen zoals WireGuard en OpenVPN.

<details>
  <summary>Gameservers</summary>
- FiveM
- Minecraft
- Diverse games met Steam Source Engine
- Metin 2 Auth & Channel
- Novalife
- RakNet-gebaseerde games
- SAMP
- Growtopia
- PlasmoVoice
- en meer..
</details>

<details>
  <summary>Voice-servers</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>Remote Access</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN en Secure Networking</summary>

- WireGuard
- OpenVPN
</details>

Elk protocol dat PletX niet herkent, wordt als onbekend behandeld, wat soms kan leiden tot false positives of onverwacht gedrag.

## Webverkeer en Niet-ondersteunde Diensten

PletX filtert momenteel geen HTTP- of HTTPS-verkeer. Webapplicaties of niet-ondersteunde protocollen kunnen daardoor af en toe last hebben van false positives. Als je hier last van hebt, volg dan deze stappen:

1. Open een supportticket bij ZAP-Hosting
2. Wij analyseren het verkeer
3. PletX kan op verzoek custom aanpassingen en fixes uitrollen

Deze aanpak is vooral bedoeld voor zeldzame of gespecialiseerde diensten. Voor webprojecten raden we aan om Cloudflare te blijven gebruiken. Idealiter met Cloudflare Proxy of CDN voor websites en Cloudflare Tunnel voor FiveM/RedM TxAdmin of andere webdashboards.

## Tijdelijke Uitschakeling van Bescherming

Binnenkort komt er een optie om de bescherming tijdelijk uit te schakelen. Met deze feature kunnen klanten de DDoS-bescherming voor specifieke servers volledig uitzetten wanneer dat nodig is. Dit is vooral handig voor omgevingen zonder noemenswaardig DDoS-risico, systemen met hoog volume zoals telemetry of monitoring platforms, en applicaties die ongewoon verkeer genereren dat anders false positives zou triggeren.

Deze feature geeft gevorderde gebruikers volledige controle over hun netwerkgedrag, terwijl game- en applicatiehostingklanten blijven profiteren van automatische en betrouwbare bescherming.