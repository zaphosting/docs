---
id: vserver-linux-standard-notes
title: "Configura Standard Notes su un Server Linux - Crea il Tuo Sistema Privato per Note"
description: "Scopri come sincronizzare e proteggere in modo sicuro le tue note su tutti i dispositivi con il self-hosting di Standard Notes → Scopri di più ora"
sidebar_label: Installa Standard Notes
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Standard Notes è un'app per note open-source che protegge i tuoi dati con una crittografia end-to-end verificata. Solo tu controlli le chiavi di decrittazione. Sincronizza senza problemi le tue note e file criptati su dispositivi illimitati, li mantiene accessibili offline e protegge attivamente i tuoi contenuti da accessi esterni.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Stai pensando di ospitare questo servizio in autonomia? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.

<InlineVoucher />



## Prerequisiti

Prima di installare **Standard Notes**, assicurati che il tuo ambiente di hosting soddisfi i seguenti requisiti per garantire un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo      | Consiglio ZAP-Hosting      |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Core | 4 vCPU Core                |
| RAM        | 2 GB         | 4 GB                       |
| Spazio disco | 5 GB         | 25 GB                      |

Il software richiede che tutte le dipendenze necessarie siano installate e che giri su un sistema operativo supportato. Assicurati che il tuo server rispetti questi requisiti prima di procedere con l’installazione:

**Dipendenze:** `Docker (Engine 26+ e Compose)`

**Sistema Operativo:** Ultima versione di Ubuntu/Debian compatibile con Docker 26+

Verifica che tutte le dipendenze siano installate e che il sistema operativo sia aggiornato per evitare problemi di compatibilità durante l’installazione di Standard Notes.



## Preparazione

Prima di configurare **Standard Notes**, devi preparare il sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze richieste. Questi passaggi garantiscono un ambiente stabile e aiutano a prevenire problemi durante o dopo l’installazione.


### Aggiorna il Sistema
Per assicurarti che il sistema abbia gli ultimi aggiornamenti software e di sicurezza, esegui sempre prima un aggiornamento completo. Usa questo comando:

```
sudo apt update && sudo apt upgrade -y
```
Così il sistema avrà tutte le patch di sicurezza e le versioni software più recenti prima di andare avanti.

### Installa le dipendenze
Una volta completato l’aggiornamento, puoi procedere con l’installazione delle dipendenze. Standard Notes verrà eseguito tramite una serie di container Docker, quindi Docker deve essere installato prima. Usa questi comandi:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Una guida completa all’installazione e all’uso di Docker è disponibile nella nostra guida [Docker](dedicated-linux-docker.md).




## Installazione
Ora che hai soddisfatto tutti i requisiti e completato le preparazioni, puoi procedere con l’installazione di Standard Notes.



Per prima cosa, crea una cartella che conterrà tutti i file di configurazione e setup. Questa cartella sarà la tua working directory per l’installazione.

```
mkdir standardnotes
cd standardnotes
```

Poi, crea un file `.env` nella tua working directory e riempilo con i valori di default presi dal file di configurazione di esempio del progetto:
```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Questo file contiene solo le variabili minime necessarie per una configurazione funzionante. La lista completa delle variabili attualmente in uso la trovi qui: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Apri il file `.env` e assicurati che tutte le chiavi nella sezione KEYS siano impostate correttamente. Genera valori casuali per ogni variabile d’ambiente richiesta con:

```
openssl rand -hex 32
```

Incolla questi valori nel file `.env`. Standard Notes richiede uno script bootstrap per LocalStack. Scaricalo nella tua working directory e rendilo eseguibile:

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Scarica la configurazione di esempio ufficiale e salvala come `docker-compose.yml` nella tua cartella di lavoro. Questo file definisce tutti i servizi container necessari per Standard Notes.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Quando tutto è pronto, scarica le immagini più recenti e avvia i servizi in modalità detached:

```
docker compose pull && docker compose up -d
```



## Configurazione

La configurazione di default nel file `docker-compose.yml` fornito può essere personalizzata in base alle tue esigenze. Un punto chiave è il servizio `server`, dove puoi modificare le mappature delle porte nella proprietà `ports`. Questo ti permette di scegliere su quali porte host l’app sarà accessibile, evitando conflitti con altri servizi o adattandola alla tua rete.

Un altro step importante è mettere in sicurezza il database. Le password di default vanno sostituite con stringhe forti e generate casualmente. Puoi creare una password sicura con:

```
openssl rand -hex 12  
```

Inserisci il valore generato nel file `.env` come `DB_PASSWORD`. Lo stesso valore deve essere impostato anche per `MYSQL_ROOT_PASSWORD` e `MYSQL_PASSWORD` nel file `docker-compose.yml` per mantenere tutto sincronizzato.

Queste modifiche assicurano che la tua installazione sia non solo funzionante, ma anche sicura e su misura per il tuo ambiente.





## Connessione al Sync Server

Per configurare il tuo account su Standard Notes, clicca sull’icona avatar in basso a destra nell’app. Nel menu che appare, seleziona “Create Account” per iniziare a creare un nuovo profilo utente. Inserisci una mail valida e una password sicura.

Prima di completare, apri la sezione “Advanced Options”. Sotto “Sync Server”, scegli l’opzione “Custom” e inserisci l’indirizzo IP e la porta del tuo server nel formato IP:Port. Così le tue note non saranno sincronizzate tramite il servizio Standard Notes di default, ma direttamente con il tuo server self-hosted.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Conclusione e Risorse Extra

Congratulazioni! Hai installato e configurato con successo Standard Notes sul tuo VPS/Dedicated Server. Ti consigliamo anche di dare un’occhiata a queste risorse, che possono darti supporto e info extra durante la configurazione del server:

- [Standardnotes.com](https://standardnotes.com/) - Sito Ufficiale
- [Standardnotes.com/help](https://standardnotes.com/help) - Centro Assistenza Standard Notes (Documentazione)

Hai domande specifiche non trattate qui? Per qualsiasi dubbio o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂