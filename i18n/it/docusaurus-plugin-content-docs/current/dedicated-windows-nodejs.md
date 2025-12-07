---
id: dedicated-windows-nodejs
title: "Dedicated Server: Configura Node.js su Windows"
description: "Scopri come configurare Node.js per applicazioni scalabili e in tempo reale usando un ambiente snello → Scopri di più ora"
sidebar_label: Installa Node.js
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Node.js è un ambiente di runtime JavaScript open-source e multipiattaforma che esegue codice JavaScript fuori dal browser, ad esempio su server o tramite strumenti da linea di comando. Basato sul motore V8, supporta I/O asincrono e event-driven, rendendolo super efficiente per costruire applicazioni di rete scalabili e in tempo reale.

Il paradigma “JavaScript ovunque” permette agli sviluppatori di usare un unico linguaggio sia per il backend che per il frontend.  

## Preparazione

Prima di configurare **Node.js**, devi preparare il tuo sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze necessarie. Questi passaggi garantiscono un ambiente stabile e aiutano a prevenire problemi durante o dopo l’installazione.

### Aggiorna il sistema
Per assicurarti che il sistema abbia gli ultimi aggiornamenti software e di sicurezza, esegui sempre prima un aggiornamento completo. Usa questo comando:

```
sudo apt update && sudo apt upgrade -y
```
Così il sistema avrà tutte le patch di sicurezza e le versioni software più recenti prima di procedere.

### Installa le dipendenze
Una volta completato l’aggiornamento, puoi procedere con l’installazione delle dipendenze. Node.js verrà eseguito sulla tua macchina tramite una serie di container Docker, quindi Docker deve essere installato prima. Usa questi comandi:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Una guida completa all’installazione e all’uso di Docker è disponibile nel nostro tutorial [Docker](vserver-windows-docker.md).

## Installazione

Ora che hai tutto pronto, puoi procedere con l’installazione di Node.js.

Per usare Node.js in un ambiente isolato, devi prima scaricare l’immagine ufficiale basata su Alpine. Esegui questo comando per prendere l’ultima immagine Node.js 22 sul tuo sistema, pronta per il deployment in container:

```
docker pull node:22-alpine
```

Poi puoi avviare un container basato su questa immagine e aprire una shell interattiva dentro di esso. Usa questo comando per partire con una shell interattiva. L’opzione `--rm` fa sì che il container venga rimosso automaticamente quando esci, mantenendo pulito l’ambiente host.

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Dentro il container, verifica la versione di Node.js con `node -v` che dovrebbe mostrare `v22.19.0`. Puoi anche controllare la versione di npm con

`npm -v` e l’output atteso è `10.9.3`. Questo conferma che l’immagine contiene le versioni corrette di Node.js e npm, pronte all’uso.

## Configurazione

Dopo aver avviato il container Node.js, è consigliato configurare le impostazioni essenziali direttamente nell’ambiente. Un approccio comune è definire variabili d’ambiente, ad esempio:

```
export NODE_ENV=production
```

Questo attiva la modalità produzione, con ottimizzazioni di performance e logging ridotto. Per lo sviluppo, puoi invece impostare NODE_ENV=development per avere messaggi di errore dettagliati e funzionalità di debug.

Una struttura di progetto ben organizzata parte da un file di configurazione creato con:

```
npm init -y
```

Questo genera un file `package.json`, che definisce dipendenze, script e metadata del progetto. È il file centrale di configurazione per ogni app Node.js.

Le dipendenze si installano con `npm install <package>`, mentre quelle di sviluppo con `npm install <package> --save-dev`. La sezione `scripts` dentro `package.json` ti permette di definire comandi personalizzati, tipo `npm start` o `npm run build`, per semplificare l’esecuzione e la gestione del progetto.

Per setup più avanzati, Node.js può essere personalizzato con file `.npmrc` o `.nvmrc`, che permettono di configurare registry privati, opzioni di caching o forzare una versione specifica di Node.js. Così le tue app girano sempre uguali su ambienti diversi.

## Conclusione e risorse extra

Complimenti! Hai installato e configurato Node.js con successo sul tuo Dedicated Server. Ti consigliamo di dare un’occhiata anche a queste risorse, che possono aiutarti ulteriormente nella configurazione del server:

- [Node.js.com](https://Node.js.com/) - Sito ufficiale
- https://Node.js.com/help/ - Centro assistenza Node.js (Documentazione)

Hai domande specifiche non trattate qui? Per qualsiasi dubbio o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per darti una mano! 🙂