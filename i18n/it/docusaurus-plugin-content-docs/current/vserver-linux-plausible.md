---
id: vserver-linux-plausible
title: "VPS: Configura Plausible su OS"
description: "Scopri come configurare una piattaforma di web analytics focalizzata sulla privacy per insight chiari e prestazioni rapide → Scopri di più ora"
sidebar_label: Installa Plausible
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Plausible è una piattaforma di web analytics leggera e open-source che funziona senza cookie e rispetta completamente le normative sulla privacy. Fornisce metriche chiave come il numero di visitatori, le visualizzazioni di pagina e la durata delle visite tramite una dashboard pulita e intuitiva. Grazie alla sua facilità d’uso, prestazioni rapide e infrastruttura basata in UE, Plausible è un’alternativa moderna e attenta alla privacy rispetto a Google Analytics.

Vuoi ospitare questo servizio in autonomia? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.

<InlineVoucher />

## Requisiti

Prima di installare **Plausible**, assicurati che il tuo ambiente di hosting soddisfi i seguenti requisiti per garantire un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo      | Consiglio ZAP-Hosting      |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 vCPU Core | 4 vCPU Core                |
| RAM        | 2 GB        | 4 GB                       |
| Spazio disco | 10 GB     | 25 GB                      |

Il software richiede che tutte le dipendenze necessarie siano installate e che giri su un sistema operativo supportato. Assicurati che il tuo server rispetti questi requisiti prima di procedere con l’installazione:

**Dipendenze:** `Docker`

**Sistema Operativo:** Ultima versione di Ubuntu/Debian con supporto Docker 26+

Verifica che tutte le dipendenze siano installate e che la versione del sistema operativo sia corretta per evitare problemi di compatibilità durante l’installazione di Plausible.

## Preparazione

Prima di configurare **Plausible**, devi preparare il sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze richieste. Questi passaggi assicurano un ambiente stabile e aiutano a prevenire problemi durante o dopo l’installazione.

### Aggiorna il sistema
Per assicurarti che il sistema abbia gli ultimi aggiornamenti software e di sicurezza, esegui sempre prima un aggiornamento completo. Usa questo comando:

```
sudo apt update && sudo apt upgrade -y
```
Così il sistema avrà tutte le patch di sicurezza e le versioni software più recenti prima di procedere.

### Installa le dipendenze
Una volta completato l’aggiornamento, puoi procedere con l’installazione delle dipendenze.

#### Git
I dati di Plausible verranno scaricati da GitHub, quindi Git deve essere installato. Esegui:

```
sudo apt install git-all
```

#### Docker

Plausible verrà eseguito in un container Docker, quindi Docker deve essere installato. Usa questi comandi:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Una guida completa all’installazione e all’uso di Docker è disponibile nella nostra guida [Docker](dedicated-linux-docker.md).

## Installazione
Ora che hai soddisfatto tutti i requisiti e completato le preparazioni, puoi procedere con l’installazione di Plausible.

Inizia clonando il repository della Community Edition e creando il file di configurazione necessario:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Poi crea un file ambiente (.env) e definisci le variabili essenziali. BASE_URL deve puntare al dominio reale che ha già un record DNS che risolve verso il tuo server. Devi anche generare una SECRET_KEY_BASE casuale di almeno 64 byte:

```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Controlla il contenuto con `cat .env` per confermare che i valori siano corretti. L’output dovrebbe essere così:

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Queste porte di default permettono a Let’s Encrypt di emettere automaticamente i certificati TLS. Se vuoi usare Plausible dietro un reverse proxy, puoi modificare questi valori. Inoltre, crea un file `compose.override.yml` per esporre le porte corrette del container Plausible:

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Infine, avvia i servizi necessari con Docker Compose:

```
docker compose up -d
```

Quando i container sono attivi, apri il browser sul dominio indicato in BASE_URL e crea il primo account utente.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## Configurazione

Plausible può integrarsi con Google Search Console per arricchire le tue analytics con i dati delle query di ricerca. Così puoi vedere quali keyword portano traffico al tuo sito, ottenendo insight più profondi sul comportamento dei visitatori.

Se hai già un account Google Cloud e un client OAuth configurato, ti basta aggiungere le credenziali (`GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET`) nel file `.env`. Dopo aver salvato, riavvia i servizi Docker con `docker compose up -d`. Nel dashboard di Plausible, vai su *Site Settings > Integrations* per completare la connessione e seguire le istruzioni di autenticazione.

Se non hai ancora un client OAuth o non sai come fare, la Wiki ufficiale di Plausible offre una guida dettagliata passo passo. Spiega come creare un progetto su Google Cloud, abilitare le API necessarie, configurare un client OAuth e aggiungere le credenziali generate a Plausible: [Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration).

Se usi Google Search Console, puoi configurare l’integrazione Google per importare i dati delle ricerche, davvero una figata.

Se hai già un account Google Cloud con client OAuth, incolla semplicemente `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET` nel file `.env`, riavvia il servizio Docker con `docker compose up -d` e segui le istruzioni in *Site Settings > Integrations* di Plausible.

## Conclusione e risorse utili

Complimenti! Hai installato e configurato Plausible con successo sul tuo VPS. Ti consigliamo di dare un’occhiata anche a queste risorse, che possono darti supporto e approfondimenti durante la configurazione del server:

- [Plausible.io](https://Plausible.io/) - Sito ufficiale
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Annunci, discussioni, segnalazioni problemi

Hai domande specifiche non trattate qui? Per qualsiasi dubbio o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />