---
id: server-linux-swush
title: "Configura Swush su un server Linux - Crea il tuo vault privato per media e file"
description: "Scopri come installare e far girare Swush sul tuo VPS Linux per creare una piattaforma self-hosted per media, file e gestione contenuti → Scopri di più ora"
sidebar_label: Installa Swush
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

[Swush](https://github.com/imthatdev/swush) è un vault digitale self-hosted e una piattaforma di content management pensata per aiutarti a organizzare file, media e dati personali in un unico cruscotto centralizzato. L’app combina storage file, strumenti di condivisione, streaming media e funzionalità di knowledge management in un’unica interfaccia web.

Con Swush puoi caricare e gestire file, organizzare contenuti con cartelle e tag, generare link condivisibili e persino fare streaming media direttamente dal tuo server. Essendo completamente self-hosted, mantieni il controllo totale sui tuoi dati e infrastruttura, un’ottima alternativa alle piattaforme cloud.

L’app è costruita con tecnologie moderne come Next.js, TypeScript e TailwindCSS, offrendo un’interfaccia veloce e reattiva, facile da deployare su VPS o server dedicati. Questa guida ti accompagna passo passo nell’installazione e avvio di Swush su un server Linux.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />



## Casi d’uso di Swush

Swush è pensato per essere il centro nevralgico dei tuoi contenuti digitali e workflow. Puoi usarlo in tanti modi diversi:

- Gestire e organizzare file, immagini e documenti
- Creare un media server personale per lo streaming dei contenuti caricati
- Generare link sicuri per condividere file e media
- Organizzare conoscenze come note, segnalibri o snippet
- Ospitare un dashboard privato per i tuoi workflow personali
- Automatizzare upload e integrazioni tramite API di Swush

La piattaforma unisce più strumenti in un unico ambiente, riducendo la dipendenza da servizi cloud sparsi.

## Prerequisiti

Prima di installare Swush, assicurati che il tuo server rispetti questi requisiti.

| Hardware | Minimo | Consigliato |
|----------|---------|-------------|
| CPU | 1 Core | 4 Core |
| RAM | 2 GB | 4 GB |
| Spazio disco | 20 GB | 50 GB |

Software richiesto:

- Runtime Bun
- Database PostgreSQL
- Git

Aggiorna il sistema prima di iniziare l’installazione.

<InlineServiceLink />

## Preparazione

Per prima cosa crea una cartella per l’installazione di Swush.
```
mkdir swush
cd swush
```
Poi clona il repository di Swush.
```
git clone https://github.com/imthatdev/swush.git .
```
Installa le dipendenze del progetto con Bun.
```
bun install
```
## Configurazione

Prima di avviare l’app, crea il file di configurazione ambiente.
```
cp example.env .env
```
Apri il file `.env` e configura i valori richiesti:
```
APP_NAME=Swush
APP_URL=http://tuo-server-ip:3000
SUPPORT_NAME=Supporto
SUPPORT_EMAIL=supporto@example.com
DATABASE_URL=postgresql://username:password@localhost:5432/swush
```
Puoi anche configurare impostazioni aggiuntive come:

- Backend di storage (locale o S3)
- Cartella upload
- Configurazioni SMTP per notifiche email
- Segreti per autenticazione

Swush supporta sia **storage locale che sistemi compatibili S3**, così puoi scalare lo storage in base al tuo setup.

## Installazione

Dopo aver configurato le variabili d’ambiente, inizializza lo schema del database.
```
bun run push:db
```
Poi builda l’applicazione.
```
bun run build
```
Avvia il server Swush.
```
bun start
```
L’app partirà e ascolterà sulla porta **3000**.

## Accesso a Swush

Quando il server è attivo, apri il browser e vai su:
```
http://TUO_SERVER_IP:3000
```
Sostituisci `TUO_SERVER_IP` con l’indirizzo IP del tuo VPS o server dedicato. Al primo accesso verrai guidato da un wizard per creare il primo account e configurare lo storage.

Dopo la configurazione puoi iniziare a caricare file, organizzare media e gestire i tuoi contenuti digitali dal dashboard di Swush.

## Conclusione

Complimenti! Hai installato con successo **Swush** sul tuo server Linux. Il tuo vault digitale self-hosted è pronto per gestire file, condividere media e organizzare contenuti personali da un cruscotto centralizzato.

Ospitando Swush in autonomia, hai il pieno controllo sui tuoi dati, godendo di una piattaforma moderna e privacy-friendly per la gestione dei contenuti.

Per domande o supporto, il nostro team è sempre a disposizione per aiutarti ogni giorno! 🙂

<InlineVoucher />