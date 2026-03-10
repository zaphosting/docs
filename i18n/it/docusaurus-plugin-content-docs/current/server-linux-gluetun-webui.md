---
id: server-linux-gluetun-webui
title: "Configura Gluetun WebUI su un server Linux - Gestisci facilmente il tuo container VPN"
description: "Scopri come installare e far girare Gluetun WebUI sul tuo VPS Linux per monitorare e gestire il container VPN Gluetun → Scopri di più ora"
sidebar_label: Installa Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) è un’interfaccia web leggera pensata per semplificare la gestione del container VPN Gluetun. Gluetun è un container Docker molto popolare usato per instradare altre applicazioni tramite una connessione VPN sicura.

La WebUI aggiunge una dashboard comoda che ti permette di monitorare lo stato della VPN, gestire le connessioni e controllare il comportamento del container senza dover usare manualmente comandi Docker o modificare file di configurazione.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

Ospitare in autonomia Gluetun WebUI sul tuo server ti offre un’interfaccia centralizzata per gestire la tua configurazione VPN, particolarmente utile se gestisci più container che dipendono da una connessione VPN Gluetun.

Vuoi far girare Gluetun WebUI sul tuo VPS? Questa guida ti accompagna passo passo nell’installazione e configurazione.

<InlineVoucher />

## Casi d’uso di Gluetun WebUI

Gluetun WebUI è perfetto per chiunque usi applicazioni containerizzate dietro una VPN. I casi d’uso tipici includono:

- Monitorare in tempo reale lo stato della connessione VPN
- Gestire container che instradano il traffico tramite la VPN Gluetun
- Semplificare la configurazione e il troubleshooting del container VPN
- Controllare i servizi VPN senza usare comandi Docker complessi
- Gestire centralmente la VPN in ambienti self-hosted

La WebUI è particolarmente utile in homelab o VPS dove più applicazioni dipendono da un container VPN.

## Prerequisiti

Prima di installare Gluetun WebUI, assicurati che il tuo server rispetti questi requisiti.

| Hardware | Minimo | Consigliato |
|----------|---------|-------------|
| CPU | 1 Core | 2 Core |
| RAM | 1 GB | 4 GB |
| Spazio disco | 5 GB | 10 GB |

Software richiesto:

- Docker
- Docker Compose

Se Docker non è ancora installato, segui la nostra guida per installarlo prima di procedere.

<InlineServiceLink />

## Preparazione

Prima di installare Gluetun WebUI, verifica che Docker e Docker Compose siano disponibili sul tuo server. Esegui questi comandi per controllare che Docker sia installato e pronto:

```
docker --version
docker compose version
```
Poi crea una cartella per l’installazione di Gluetun WebUI.
```
mkdir gluetun-webui
cd gluetun-webui
```
Questa cartella conterrà la configurazione Docker Compose per far girare l’interfaccia web.

## Installazione

Crea un file Docker Compose per Gluetun WebUI.
```
nano compose.yaml
```
Inserisci questa configurazione:

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

Questa configurazione:

- Avvia il container Gluetun WebUI
- Lo collega all’API di Gluetun
- Espone la WebUI sulla porta 8000
- Salva i dati di configurazione persistenti nella cartella `data`

Salva il file ed esci dall’editor.

## Avvia Gluetun WebUI

Avvia il container con Docker Compose.

```
docker compose up -d
```

Docker scaricherà l’immagine necessaria e lancerà il container WebUI. Per verificare che il container sia attivo, usa:

```
docker ps
```

## Accesso all’interfaccia web

Quando il container è attivo, apri la WebUI nel browser.

```
http://TUO_IP_SERVER:8000
```

Sostituisci `TUO_IP_SERVER` con l’indirizzo IP del tuo VPS. Una volta aperta l’interfaccia potrai:

- Monitorare lo stato della connessione VPN
- Gestire il comportamento del container Gluetun
- Visualizzare i dettagli di configurazione VPN
- Controllare i servizi instradati tramite il container VPN

## Conclusione

Congratulazioni! Hai installato con successo **Gluetun WebUI** sul tuo server Linux. Ora puoi monitorare e gestire facilmente il tuo container VPN Gluetun senza dover usare comandi Docker manuali.

Far girare Gluetun WebUI insieme al container VPN semplifica la gestione e ti dà una panoramica chiara dello stato e della configurazione della tua VPN.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />