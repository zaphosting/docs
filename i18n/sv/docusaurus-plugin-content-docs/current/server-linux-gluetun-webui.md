---
id: server-linux-gluetun-webui
title: "Installera Gluetun WebUI på en Linux-server – Hantera din VPN-container enkelt"
description: "Lär dig hur du installerar och kör Gluetun WebUI på din Linux VPS för att övervaka och hantera din Gluetun VPN-container → Läs mer nu"
sidebar_label: Installera Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) är ett lättviktigt webbgränssnitt designat för att förenkla hanteringen av Gluetun VPN-containern. Gluetun är en populär Docker-container som används för att routa andra applikationer genom en säker VPN-anslutning.

WebUI:n lägger till en smidig dashboard där du kan övervaka VPN-status, hantera anslutningar och styra container-beteende utan att behöva använda Docker-kommandon eller konfigurera filer manuellt.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

Att själv hosta Gluetun WebUI på din egen server ger dig en centraliserad plattform för att hantera din VPN-setup, vilket är extra smidigt när du kör flera containers som är beroende av en Gluetun VPN-anslutning.

Planerar du att köra Gluetun WebUI på din VPS? Den här guiden tar dig steg för steg genom installation och konfiguration.

<InlineVoucher />



## Användningsområden för Gluetun WebUI

Gluetun WebUI är perfekt för alla som kör containeriserade applikationer bakom en VPN. Typiska användningsområden är:

- Övervaka VPN-anslutningens status i realtid
- Hantera containers som routar trafik via Gluetun VPN
- Förenkla konfiguration och felsökning av VPN-containern
- Styra VPN-tjänster utan att använda krångliga Docker-kommandon
- Köra ett centraliserat VPN-hanteringsgränssnitt för självhostade miljöer

WebUI:n är särskilt användbar i homelab-miljöer eller VPS-setup där flera applikationer är beroende av en VPN-container.



## Förutsättningar

Innan du installerar Gluetun WebUI, se till att din server uppfyller följande krav.

| Hårdvara | Minimikrav | Rekommenderat |
|----------|------------|---------------|
| CPU | 1 kärna | 2 kärnor |
| RAM | 1 GB | 4 GB |
| Diskutrymme | 5 GB | 10 GB |

Nödvändig mjukvara:

- Docker
- Docker Compose

Om Docker inte är installerat än, följ vår guide för att installera Docker innan du fortsätter.

<InlineServiceLink />

## Förberedelser

Innan du installerar Gluetun WebUI, kontrollera att Docker och Docker Compose finns på din server. Kör följande kommandon för att verifiera att Docker är installerat och klart att använda:

```
docker --version
docker compose version
```
Skapa sedan en mapp för Gluetun WebUI-installationen.
```
mkdir gluetun-webui
cd gluetun-webui
```
Den här mappen kommer att innehålla Docker Compose-konfigurationen som används för att köra webbgränssnittet.

## Installation

Skapa en Docker Compose-fil för Gluetun WebUI.
```
nano compose.yaml
```
Klistra in följande konfiguration:

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

Den här konfigurationen kommer att:

- Starta Gluetun WebUI-containern
- Koppla den till Gluetun API
- Exponera WebUI via port 8000
- Spara konfigurationsdata i `data`-mappen för att behålla inställningar

Spara filen och avsluta editorn.

## Starta Gluetun WebUI

Starta containern med Docker Compose.

```
docker compose up -d
```

Docker laddar ner nödvändig image och startar WebUI-containern. För att kontrollera att containern körs, använd:

```
docker ps
```

## Öppna webbgränssnittet

När containern körs, öppna WebUI i din webbläsare.

```
http://DIN_SERVER_IP:8000
```

Byt ut `DIN_SERVER_IP` mot IP-adressen till din VPS. När du öppnar gränssnittet kan du:

- Övervaka VPN-anslutningens status
- Hantera Gluetun-containerbeteende
- Se VPN-konfigurationsdetaljer
- Styra tjänster som routas genom VPN-containern



## Avslutning

Grattis! Du har nu installerat **Gluetun WebUI** på din Linux-server. Webbgränssnittet gör det enkelt att övervaka och hantera din Gluetun VPN-container utan att behöva använda Docker-kommandon manuellt.

Att köra Gluetun WebUI tillsammans med din VPN-container förenklar hanteringen och ger dig en tydlig överblick över VPN-anslutningens status och konfiguration.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />