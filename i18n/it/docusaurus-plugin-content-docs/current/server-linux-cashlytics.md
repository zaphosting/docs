---
id: server-linux-cashlytics
title: "Configura Cashlytics su un server Linux - Self-host il tuo AI-powered finance manager"
description: "Scopri come installare e far girare Cashlytics sul tuo VPS Linux usando Docker per gestire finanze personali e budget con assistenza AI → Scopri di più ora"
sidebar_label: Installa Cashlytics
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) è una piattaforma moderna per la **gestione delle finanze personali e del budgeting**, pensata per aiutarti a tracciare le spese, gestire i budget e ottenere insight sulle tue abitudini finanziarie. Analizzando i dati delle transazioni e le categorie di spesa, Cashlytics ti aiuta a capire dove va il tuo denaro e come migliorare la pianificazione finanziaria.

La piattaforma può anche integrarsi opzionalmente con un **assistente AI**, che ti permette di analizzare i dati finanziari, identificare pattern di spesa e ricevere insight intelligenti sul tuo comportamento di budgeting.

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Self-hostare Cashlytics sul tuo server ti dà il **controllo totale sui tuoi dati finanziari**, mantenendo gli strumenti di budgeting accessibili ovunque tramite un’interfaccia web. Vuoi ospitare Cashlytics in autonomia? Questa guida ti accompagna passo passo nell’installazione usando Docker sul tuo VPS Linux.

<InlineVoucher />

## Casi d’uso di Cashlytics

Cashlytics può essere usato in diversi scenari personali e professionali dove organizzazione finanziaria e budgeting sono fondamentali. I casi d’uso tipici includono:

- Tracciare spese personali e budget mensili
- Monitorare pattern di spesa e abitudini finanziarie
- Gestire più fonti di reddito e categorie finanziarie
- Generare insight AI-powered per un budgeting più smart
- Ospitare un dashboard finanziario privato e sotto il tuo controllo

Essendo self-hosted, Cashlytics è perfetto per chi cerca un’alternativa privacy-friendly agli strumenti finanziari basati su cloud.

## Prerequisiti

Prima di installare Cashlytics, assicurati che il tuo VPS soddisfi i seguenti requisiti.

| Hardware | Minimo | Consigliato |
|----------|---------|-------------|
| CPU | 1 Core | 2 Core |
| RAM | 2 GB | 4 GB |
| Spazio disco | 10 GB | 20 GB |



Inoltre, devi avere installato:

- Docker
- Docker Compose

Se Docker non è ancora installato, segui la nostra guida per installare [Docker](dedicated-linux-docker.md) prima di procedere.



<InlineServiceLink />



## Preparazione

Per prima cosa crea una cartella progetto per l’installazione di Cashlytics.

```bash
mkdir cashlytics && cd cashlytics
```

Poi scarica i file ufficiali di configurazione Docker di Cashlytics.

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

Crea il file di configurazione ambiente copiando quello di esempio.

```
cp .env.example .env
```

Il file `.env` contiene le variabili di configurazione necessarie per far girare Cashlytics.



## Installazione



### Apri il file `.env`

Apri il file `.env` e configura le variabili d’ambiente richieste.

```
nano .env
```



### Configura la password del database

Imposta una password sicura per il database PostgreSQL usato da Cashlytics.

```
POSTGRES_PASSWORD=la_tua_password_sicura
```



### Configura la connessione al database

Aggiorna la stringa di connessione al database usando la stessa password impostata sopra.

```
DATABASE_URL=postgresql://cashlytics:la_tua_password_sicura@postgres:5432/cashlytics
```



### Assistente AI opzionale

Cashlytics supporta un assistente AI opzionale che può analizzare i dati finanziari e fornire insight sul budgeting. Per attivarlo, aggiungi la tua API key OpenAI.

```
OPENAI_API_KEY=sk-la-tua-openai-key
```

Se non vuoi usare l’assistente AI, lascia questa variabile vuota.



## Avvio di Cashlytics

Una volta completata la configurazione, avvia l’app usando Docker Compose.

```
docker compose -f docker-compose.selfhost.yml up -d
```

Docker scaricherà le immagini necessarie e avvierà i servizi di Cashlytics. Per verificare che i container siano attivi, usa:

```
docker ps
```



## Accesso a Cashlytics

Dopo che i container sono partiti correttamente, puoi accedere all’interfaccia web di Cashlytics. Apri il browser e vai su:

```
http://TUO_IP_SERVER:3000
```

Sostituisci TUO_IP_SERVER con l’indirizzo IP del tuo VPS. Una volta caricata l’interfaccia, puoi iniziare a configurare finanze, budget e categorie.

## Conclusione

Complimenti! Hai installato con successo Cashlytics sul tuo server Linux. Ora puoi iniziare a usare la piattaforma per tracciare spese, gestire budget e ottenere insight sui tuoi dati finanziari.

Far girare Cashlytics sul tuo VPS/Dedicated Server ti garantisce che le tue info finanziarie restino sotto il tuo controllo, pur godendo di strumenti moderni di budgeting e analisi AI opzionale.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />