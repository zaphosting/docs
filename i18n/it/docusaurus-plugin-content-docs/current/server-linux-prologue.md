---
id: server-linux-prologue
title: "Configura Prologue su un server Linux - Ospita la tua piattaforma di audiolibri"
description: "Scopri come installare e far girare un server di audiolibri compatibile con Prologue sul tuo VPS Linux usando Docker o una configurazione manuale → Scopri di più ora"
sidebar_label: Installa Prologue
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

[Prologue](https://prologue.audio/) è una piattaforma moderna per ascoltare audiolibri, pensata per funzionare con server di audiolibri self-hosted. Ti permette di fare streaming, organizzare e ascoltare la tua libreria di audiolibri su più dispositivi come iPhone, iPad, Apple Watch e CarPlay.

Invece di affidarti a piattaforme cloud per audiolibri, una configurazione self-hosted ti dà il pieno controllo sulla tua collezione e sull’infrastruttura di streaming. Una volta configurato il server, l’app mobile Prologue si collega a esso e sincronizza il progresso di ascolto, i segnalibri e la cronologia.

In questa guida vedrai come mettere su un server di audiolibri compatibile con Prologue su un VPS Linux usando due metodi diversi:

- Installazione manuale su un web server
- Deploy basato su Docker per una gestione containerizzata più semplice

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Casi d’uso di Prologue

Prologue è perfetto in tanti scenari dove vuoi avere piena proprietà e flessibilità sulla tua libreria di audiolibri.

Gli usi più comuni sono:

- Ospitare una piattaforma privata di streaming di audiolibri
- Gestire grandi collezioni di audiolibri in un’interfaccia centralizzata
- Sincronizzare la riproduzione su più dispositivi
- Accedere agli audiolibri da remoto ovunque tu sia
- Creare un’alternativa self-hosted alle piattaforme commerciali di audiolibri

Con un setup self-hosted i tuoi file media restano sotto il tuo controllo e puoi costruire un server di audiolibri scalabile.



## Prerequisiti

Prima di installare il server, assicurati che il tuo sistema rispetti questi requisiti.

| Hardware | Minimo | Consigliato |
|----------|---------|-------------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 GB | 4 GB |
| Spazio disco | 20 GB | 50 GB |

<InlineServiceLink />

Il software richiesto dipende dal metodo di installazione:

Setup manuale:

- Server Linux
- Web server (Apache o Nginx)
- PHP
- Server database

Setup Docker:

- Docker
- Docker Compose





## Preparazione

Prima di iniziare l’installazione, aggiorna i pacchetti del sistema.

```
sudo apt update
sudo apt upgrade
```


Verifica che l’ambiente runtime richiesto sia installato in base al metodo scelto. Per installazioni Docker:

```
docker --version
docker compose version
```

Se Docker non è ancora installato, falla prima di proseguire.



## Setup Manuale

Il setup manuale installa l’applicazione direttamente sul server senza container. Utile se usi hosting web tradizionali.



### Scarica l’applicazione

Crea prima una cartella progetto e scarica i file dell’app.

```
mkdir prologue-server
cd prologue-server
```


Poi clona il repository del progetto:

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Configura il web server

Sposta i file dell’app nella directory del web server. Esempio per [Apache](dedicated-linux-webserver.md#apache):

```
sudo mv prologue-server /var/www/prologue
```


Crea una configurazione virtual host che punti alla directory dell’app. Esempio di configurazione Apache:

```<VirtualHost *:80>
ServerName yourdomain.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


Riavvia il web server dopo la configurazione.

```
sudo systemctl restart apache2
```



### Configura le impostazioni ambiente

Modifica il file di configurazione e aggiorna i parametri necessari come la connessione al database e l’URL del server.

```
nano config.php
```


Una volta completata la configurazione, l’interfaccia web sarà accessibile tramite il dominio o l’IP del server configurato.



## Setup Docker

Docker offre un modo più semplice per il deploy eseguendo l’app dentro un container.



### Crea la cartella progetto

Crea una cartella per il deploy Docker.

```
mkdir prologue-docker
cd prologue-docker
```



### Crea la configurazione Docker Compose

Crea un file Docker Compose con `nano compose.yaml` e inserisci questa configurazione:

```
services:
  prologue:
    image: ghcr.io/michaelstaake/prologue:latest
    container_name: prologue
    ports:
      - "13378:80"
    volumes:
      - ./data:/data
    restart: unless-stopped
```



### Avvia il container

Avvia il container con Docker Compose usando `docker compose up -d` e verifica che sia attivo con `docker ps`. Docker scaricherà automaticamente l’immagine necessaria e farà partire il server audiolibri.



### Accesso al Server

Quando il server è attivo, apri il browser e vai su:

```
http://TUO_IP_SERVER:13378
```

Sostituisci TUO_IP_SERVER con l’indirizzo IP del tuo VPS. Al primo avvio ti verrà chiesto di:

- Creare un account amministratore
- Configurare la cartella della libreria audiolibri
- Scansionare e importare i file audiolibri


Dopo aver configurato la libreria, puoi collegare l’app mobile Prologue al server e iniziare a fare streaming della tua collezione.



## Conclusione

Complimenti! Hai appena messo su un server di audiolibri compatibile con Prologue usando sia l’installazione manuale che quella Docker.

Entrambi i metodi ti permettono di ospitare la tua collezione su infrastruttura tua e fare streaming sui tuoi dispositivi tramite l’app Prologue. Il setup Docker è più semplice da mantenere e aggiornare, mentre quello manuale ti dà più controllo sull’ambiente web server.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, sempre pronto ad aiutarti ogni giorno! 🙂

<InlineVoucher />