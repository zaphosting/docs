---
id: server-linux-gluetun-webui
title: "Gluetun WebUI installeren op een Linux Server - Beheer je VPN-container makkelijk"
description: "Leer hoe je Gluetun WebUI installeert en draait op je Linux VPS om je Gluetun VPN-container te monitoren en beheren → Ontdek het nu"
sidebar_label: Gluetun WebUI installeren
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introductie

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) is een lichte webinterface die het beheren van de Gluetun VPN-container super eenvoudig maakt. Gluetun zelf is een populaire Docker-container die andere applicaties via een veilige VPN-verbinding laat lopen.

De WebUI voegt een handige dashboard toe waarmee je de VPN-status kunt monitoren, verbindingen beheren en het gedrag van de container kunt regelen zonder dat je handmatig met Docker-commando’s of configuratiebestanden hoeft te werken.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

Zelf Gluetun WebUI hosten op je eigen server geeft je een centrale plek om je VPN-setup te beheren. Super handig als je meerdere containers draait die afhankelijk zijn van een Gluetun VPN-verbinding.

Wil je Gluetun WebUI op je VPS draaien? Deze gids neemt je stap voor stap mee door de installatie en configuratie.

<InlineVoucher />

## Gebruiksscenario’s van Gluetun WebUI

Gluetun WebUI is ideaal voor iedereen die containerized apps achter een VPN draait. Typische toepassingen zijn:

- VPN-verbinding in real-time monitoren
- Containers beheren die verkeer via Gluetun VPN sturen
- VPN-container configuratie en troubleshooting vereenvoudigen
- VPN-services bedienen zonder ingewikkelde Docker-commando’s
- Een centrale VPN-beheerinterface draaien voor zelfgehoste omgevingen

De WebUI is vooral handig in homelabs of VPS-omgevingen waar meerdere apps afhankelijk zijn van een VPN-container.

## Vereisten

Voordat je Gluetun WebUI installeert, check even of je server aan de volgende eisen voldoet.

| Hardware | Minimaal | Aanbevolen |
|----------|----------|------------|
| CPU | 1 Core | 2 Cores |
| RAM | 1 GB | 4 GB |
| Schijfruimte | 5 GB | 10 GB |

Benodigde software:

- Docker
- Docker Compose

Heb je Docker nog niet geïnstalleerd? Volg dan eerst onze handleiding voor Docker-installatie.

<InlineServiceLink />

## Voorbereiding

Check eerst of Docker en Docker Compose op je server beschikbaar zijn. Voer deze commando’s uit om te controleren of Docker geïnstalleerd en klaar voor gebruik is:

```
docker --version
docker compose version
```
Maak daarna een map aan voor de Gluetun WebUI installatie.
```
mkdir gluetun-webui
cd gluetun-webui
```
In deze map komt de Docker Compose-configuratie voor de webinterface.

## Installatie

Maak een Docker Compose-bestand aan voor Gluetun WebUI.
```
nano compose.yaml
```
Plak de volgende configuratie erin:

```yaml
services:
  gluetun-webui:
    image: ghcr.io/sir-scuzza/gluetun-webui:latest
    container_name: gluetun-webui
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - GLUETUN_API_URL=http://gluetun:8000
    volumes:
      - ./data:/app/data
```

Deze configuratie zorgt ervoor dat:

- De Gluetun WebUI-container wordt uitgerold
- Verbinding wordt gemaakt met de Gluetun API
- De WebUI bereikbaar is via poort 8000
- Configuratiegegevens persistent worden opgeslagen in de `data` map

Sla het bestand op en sluit de editor.

## Gluetun WebUI starten

Start de container met Docker Compose.

```
docker compose up -d
```

Docker downloadt de benodigde image en start de WebUI-container. Check of de container draait met:

```
docker ps
```

## Toegang tot de webinterface

Als de container draait, open je de WebUI in je browser.

```
http://JOUW_SERVER_IP:8000
```

Vervang `JOUW_SERVER_IP` door het IP-adres van je VPS. In de interface kun je daarna:

- VPN-verbinding status monitoren
- Gluetun container gedrag beheren
- VPN-configuratie details bekijken
- Services beheren die via de VPN-container lopen

## Conclusie

Gefeliciteerd! Je hebt **Gluetun WebUI** succesvol geïnstalleerd op je Linux-server. Met deze webinterface beheer en monitor je je Gluetun VPN-container nu makkelijk zonder gedoe met Docker-commando’s.

Gluetun WebUI draaien naast je VPN-container maakt het beheer een stuk eenvoudiger en geeft je een helder overzicht van je VPN-verbinding en configuratie.

Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />