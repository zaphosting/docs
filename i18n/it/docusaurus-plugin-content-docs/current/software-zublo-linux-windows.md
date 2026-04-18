---
id: software-zublo-linux-windows
title: "Software - Zublo (Linux/Windows)"
description: "Scopri come distribuire Zublo per una gestione sicura dei dati di abbonamento, monitoraggio dei pagamenti ricorrenti e analisi self-hosted con Docker -> Scopri di più ora"
sidebar_label: Software - Zublo (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Zublo è un tracker di abbonamenti open-source e self-hosted progettato per aiutarti a gestire pagamenti ricorrenti e dati correlati in un unico posto. In questa guida imparerai come distribuire Zublo su un server Linux o Windows usando Docker e verificare che l’interfaccia web funzioni correttamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati che il tuo server soddisfi i requisiti base e abbia Docker installato.

### Requisiti

| Componente | Minimo consigliato |
| --- | --- |
| CPU | 1 vCore |
| RAM | 512 MB |
| Storage | 1 GB di spazio libero su disco |
| Sistema operativo | Linux o Windows con supporto Docker |
| Rete | Accesso alla porta `9597` |

### Software richiesto

Devi avere installato il seguente software:

| Software | Scopo |
| --- | --- |
| [Docker](https://www.docker.com/) | Esegue il container Zublo |
| Docker Compose | Avvia e gestisce lo stack di container |

:::info Requisito Docker
Questa guida si basa sul metodo di distribuzione Docker indicato nel repository del progetto. Se Docker non è ancora installato, devi completare questa operazione prima di proseguire.
:::

:::caution Accesso alla porta
Zublo usa di default la porta `9597`. Assicurati che questa porta non sia già occupata da un altro servizio e che sia consentita dal firewall se vuoi accedere all’interfaccia web da remoto.
:::

## Informazioni su Zublo

Zublo è pensato per tracciare abbonamenti, pagamenti ricorrenti e dati di spesa tramite un’applicazione web self-hosted. Secondo il repository del progetto, è Docker-first e costruito per chi vuole mantenere il controllo sui propri dati.

### Cosa offre l’applicazione

In base alle informazioni disponibili, Zublo si concentra su:

| Area funzionale | Descrizione |
| --- | --- |
| Tracciamento abbonamenti | Gestisci servizi e pagamenti ricorrenti |
| Self-hosting | Conserva i dati degli abbonamenti sul tuo server |
| Interfaccia web | Accedi all’app tramite browser |
| Accesso API | Usa l’endpoint API integrato |
| Backend admin | Accedi all’interfaccia admin di PocketBase |

:::note Disponibilità delle funzionalità
Alcune funzioni avanzate menzionate in riassunti di terze parti, come l’analisi assistita da AI, potrebbero dipendere dalla versione attuale del progetto. Se una funzione non è visibile nella tua installazione, controlla il repository ufficiale per dettagli specifici sulla versione: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Crea la directory del progetto Zublo

Per prima cosa, crea una directory dedicata per la tua installazione di Zublo così da mantenere organizzati configurazioni e dati persistenti.

### Linux

Esegui questi comandi nel terminale:

```bash
mkdir -p zublo-data
cd zublo-data
```

### Windows

Se usi PowerShell, esegui:

```powershell
mkdir zublo-data
cd zublo-data
```

Questa cartella conterrà il file `docker-compose.yml` e la directory dei dati persistenti dell’applicazione.

## Crea la configurazione Docker Compose

Ora crea un file `docker-compose.yml` all’interno della directory del progetto.

### Configurazione di esempio

Usa questa configurazione:

```yaml
services:
  zublo:
    image: ghcr.io/danielalves96/zublo:latest
    container_name: zublo
    restart: unless-stopped
    ports:
      - "9597:9597"
    environment:
      PB_ENCRYPTION_KEY: "[your_secure_encryption_key]"
    volumes:
      - ./zublo-data:/pb/pb_data
```

### Panoramica della configurazione

| Chiave | Valore esempio | Scopo |
| --- | --- | --- |
| `image` | `ghcr.io/danielalves96/zublo:latest` | Scarica l’ultima immagine del container Zublo |
| `container_name` | `zublo` | Imposta un nome leggibile per il container |
| `restart` | `unless-stopped` | Riavvia automaticamente il container dopo reboot o errori |
| `ports` | `9597:9597` | Espone l’app web sulla porta `9597` |
| `PB_ENCRYPTION_KEY` | `[your_secure_encryption_key]` | Protegge i dati sensibili memorizzati |
| `volumes` | `./zublo-data:/pb/pb_data` | Mantiene persistenti i dati dell’app sul server |

:::danger Usa una chiave di crittografia forte
Non lasciare la chiave di crittografia con un valore debole o di default. Sostituisci `[your_secure_encryption_key]` con un segreto lungo e casuale prima di avviare il container in produzione.
:::

### Salva il file

Salva il file come `docker-compose.yml` nella directory corrente. Una volta salvato, sei pronto per avviare il servizio.

## Avvia Zublo

Dopo aver creato il file Compose, avvia lo stack di container.

```bash
docker compose up -d
```

Se il tuo ambiente usa la sintassi più vecchia di Docker Compose, potresti dover usare:

```bash
docker-compose up -d
```

### Verifica che il container sia in esecuzione

Controlla lo stato del container con:

```bash
docker ps
```

Dovresti vedere un container chiamato `zublo` nella lista.

### Visualizza i log se necessario

Se il servizio non parte correttamente, controlla i log:

```bash
docker logs zublo
```

Questo ti aiuta a identificare problemi come configurazioni errate, conflitti di porta o permessi sui dati persistenti.

## Accedi all’interfaccia web

Una volta che il container è in esecuzione, puoi aprire Zublo nel browser.

### URL dell’applicazione

Sostituisci `[your_server_ip]` con l’indirizzo IP pubblico o locale del tuo server.

| Interfaccia | URL |
| --- | --- |
| Applicazione principale | `http://[your_server_ip]:9597` |
| Interfaccia admin PocketBase | `http://[your_server_ip]:9597/_/` |
| Endpoint API | `http://[your_server_ip]:9597/api/` |

:::info Accesso locale vs remoto
Se lavori direttamente sulla stessa macchina dove è installato Zublo, puoi usare anche `http://localhost:9597`. Per accessi remoti, usa l’IP reale del server o un dominio configurato.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Configura un accesso sicuro

Dopo aver verificato che Zublo sia raggiungibile, dovresti valutare come esporlo su internet.

### Considerazioni sul firewall

Se non riesci a raggiungere l’app da un altro dispositivo, verifica che la porta `9597` sia aperta nella configurazione del firewall.

| Porta | Protocollo | Scopo |
| --- | --- | --- |
| `9597` | TCP | Interfaccia web, pannello admin e API di Zublo |

### Uso di un reverse proxy

Se vuoi usare un dominio come `[your_domain]`, puoi mettere Zublo dietro un reverse proxy come Nginx o altra soluzione supportata. In questo caso, il proxy inoltra le richieste a `http://127.0.0.1:9597` o all’indirizzo interno Docker.

:::tip Usa HTTPS per accessi pubblici
Se prevedi di esporre Zublo pubblicamente, è consigliato usare un reverse proxy con SSL per criptare i dati degli abbonamenti in transito.
:::

## Gestisci i dati persistenti

Zublo memorizza i dati persistenti dell’applicazione nella directory montata definita nel file Compose.

### Posizione dei dati

In questa guida, la mappatura del volume è:

```yaml
volumes:
  - ./zublo-data:/pb/pb_data
```

Questo significa che i dati dell’app sono salvati nella cartella locale `zublo-data` dentro la directory del progetto.

### Perché la persistenza è importante

Lo storage persistente garantisce che i dati dell’app rimangano disponibili dopo:

- riavvii del container
- reboot del server
- aggiornamenti dell’immagine
- operazioni di manutenzione

:::caution Consiglio di backup
Poiché Zublo conserva dati personali importanti sugli abbonamenti, è consigliato fare backup regolari della cartella `zublo-data` prima di modifiche o aggiornamenti importanti.
:::

## Manutenzione base

Quando Zublo è in esecuzione, potresti doverlo aggiornare o riavviare di tanto in tanto.

### Riavvia il container

```bash
docker restart zublo
```

### Ferma la distribuzione

```bash
docker compose down
```

### Aggiorna all’ultima immagine

Scarica l’ultima immagine e ricrea il container:

```bash
docker compose pull
docker compose up -d
```

### Riferimento comandi utili

| Comando | Scopo |
| --- | --- |
| `docker compose up -d` | Avvia Zublo in background |
| `docker ps` | Controlla i container in esecuzione |
| `docker logs zublo` | Visualizza i log del container |
| `docker restart zublo` | Riavvia il container |
| `docker compose down` | Ferma e rimuove il container |
| `docker compose pull` | Scarica l’ultima immagine |

## Risoluzione problemi

Se Zublo non funziona come previsto, verifica queste cause comuni.

### Porta `9597` già in uso

Se Docker segnala un errore di binding porta, un altro servizio sta già usando `9597`. Devi fermare il servizio in conflitto o cambiare la mappatura della porta host.

Esempio con porta esterna diversa:

```yaml
ports:
  - "9600:9597"
```

In questo caso accederesti all’app tramite `http://[your_server_ip]:9600`.

### Il container parte ma la pagina non si carica

Controlla:

- che il container sia in esecuzione con `docker ps`
- i log con `docker logs zublo`
- che il firewall permetta la porta selezionata
- che stai usando l’indirizzo IP o hostname corretto

### Problemi con la chiave di crittografia

Se cambi `PB_ENCRYPTION_KEY` dopo la configurazione iniziale, i dati criptati esistenti potrebbero non essere più leggibili. Se devi ruotare questa chiave, consulta prima la documentazione ufficiale del progetto perché il comportamento esatto della migrazione non è documentato nel materiale fornito.

:::note Dettagli mancanti sul comportamento
Il materiale fornito non documenta completamente tutti i passaggi admin al primo avvio, la creazione degli account o opzioni avanzate di configurazione. Per questi dettagli, consulta la documentazione upstream: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Conclusione

Congratulazioni, hai installato e configurato con successo Zublo su Linux o Windows usando Docker. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂