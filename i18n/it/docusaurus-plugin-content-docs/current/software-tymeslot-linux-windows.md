---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Scopri come distribuire Tymeslot con Docker, gestire i container docker e rivedere i punti chiave di configurazione per ambienti di hosting Linux e Windows. -> Scopri di più ora"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Tymeslot è una piattaforma open-source per la gestione di riunioni e appuntamenti, sviluppata con Elixir e Phoenix LiveView. In questa guida imparerai cosa serve a Tymeslot, come distribuirlo con Docker su Linux o Windows e quali configurazioni controllare prima di metterlo in produzione.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, ti serve un sistema che possa eseguire Docker in modo affidabile e che esponga Tymeslot in rete.

### Requisiti

| Requisito | Raccomandazione |
| --- | --- |
| CPU | 1 vCPU o più |
| RAM | Almeno 2 GB |
| Spazio su disco | Almeno 10 GB |
| Sistema operativo | Linux o Windows |
| Piattaforma container | [Docker](https://www.docker.com/) |
| Porta di rete | `4000/tcp` |

### Cosa devi avere pronto

| Elemento | Perché serve |
| --- | --- |
| Un server Linux o sistema Windows | Per ospitare l’applicazione |
| Docker installato | Tymeslot fornisce file Docker nel suo repository |
| Accesso di rete aperto sulla porta `4000` o un reverse proxy | Per accedere all’interfaccia web |
| Un hostname come `[your_domain]` | Consigliato per l’uso in produzione |
| Un secret generato forte | Necessario per la sicurezza di sessioni e applicazione |

:::info Requisito Installazione Docker
Questa guida si concentra su Docker perché il repository di Tymeslot include file correlati come `Dockerfile.docker` e `docker-compose.yml`. L’installazione nativa con Elixir e Phoenix potrebbe essere possibile, ma i passaggi esatti per la produzione non sono stati completamente verificabili dal materiale fornito.
:::

### Nota per Windows

Su Windows, generalmente serve un ambiente Docker funzionante come Docker Desktop. Se usi Docker per Windows, assicurati che la virtualizzazione sia abilitata e che Docker Desktop sia avviato prima di procedere.

## Informazioni su Tymeslot

Tymeslot è descritto nel repository come una piattaforma open-source per la pianificazione di riunioni, sviluppata con Elixir e Phoenix LiveView. È pensata per l’auto-ospitazione e può essere usata anche tramite l’offerta cloud gestita del progetto.

### Dettagli verificati del progetto

| Attributo | Valore |
| --- | --- |
| Nome | Tymeslot |
| Categoria | Scheduling |
| Repository sorgente | `https://github.com/tymeslot/tymeslot` |
| Menzione settimanale | Self-Host Weekly, 10 aprile 2026 |
| Tecnologia | Elixir / Phoenix LiveView |
| Supporto auto-ospitato | Sì |

:::note Verifica della fonte
Il repository conferma nome, scopo e stack tecnologico del progetto. Tuttavia, alcuni dettagli di runtime come il nome esatto dell’immagine Docker pubblicata, la lista completa delle variabili d’ambiente e la mappatura ufficiale delle porte di produzione non erano completamente visibili nel materiale fornito, quindi queste parti vanno verificate direttamente nel repository upstream prima della produzione.
:::

## Metodo di distribuzione

Per la maggior parte degli utenti, Docker è il metodo di distribuzione più semplice perché isola le dipendenze e facilita gli aggiornamenti.

### Perché Docker è consigliato

| Vantaggio | Spiegazione |
| --- | --- |
| Setup più semplice | Non serve installare manualmente Elixir, Erlang e Phoenix |
| Aggiornamenti più puliti | Puoi sostituire le immagini docker senza ricostruire l’ambiente host |
| Migliore portabilità | Lo stesso container funziona su Linux e Windows |
| Rollback più semplice | Puoi tornare a una versione precedente dell’immagine se serve |

### Limitazione importante

:::caution Nome immagine Docker da verificare
La bozza fornita usava `youruser/tymeslot:latest` come esempio di immagine, ma è solo un segnaposto e non un nome immagine ufficiale verificato. Prima di distribuire, controlla il repository Tymeslot, il file `README-Docker.md` o le istruzioni del registro container del progetto per confermare la fonte corretta dell’immagine.
:::

## Installare Tymeslot con Docker

Questa sezione mostra un flusso di distribuzione basato su Docker usando un riferimento immagine segnaposto. Sostituisci `[your_tymeslot_image]` con il nome immagine verificato dal progetto ufficiale Tymeslot.

### Scarica l’immagine

```bash
docker pull [your_tymeslot_image]
```

### Genera una chiave segreta

Su Linux puoi generare un secret forte con:

```bash
openssl rand -base64 64 | tr -d '\n'
```

Salva l’output in modo sicuro e usalo come `[your_secret_key_base]`.

Su Windows puoi generare un valore casuale sicuro con un altro metodo affidabile se `openssl` non è disponibile nel tuo ambiente shell.

### Avvia il container

```bash
docker run -d \
  --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE='[your_secret_key_base]' \
  -e PHX_HOST='[your_domain_or_ip]' \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  [your_tymeslot_image]
```

### Riferimento parametri

| Parametro | Significato |
| --- | --- |
| `-d` | Avvia il container in modalità detached |
| `--name tymeslot` | Assegna un nome leggibile al container |
| `-p 4000:4000` | Mappa la porta host `4000` sulla porta container `4000` |
| `-e SECRET_KEY_BASE=...` | Imposta il secret dell’applicazione |
| `-e PHX_HOST=...` | Imposta l’hostname usato da Phoenix |
| `-v tymeslot_data:/app/data` | Persiste i dati dell’applicazione |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persiste i dati PostgreSQL se usato dentro il container |

:::caution Verifica prima i percorsi dei volumi
I percorsi dei volumi mostrati sopra provengono dal materiale di bozza e non sono stati completamente confermati nella documentazione upstream. Controlla la documentazione ufficiale Docker di Tymeslot prima di affidarti a questi percorsi in produzione.
:::

### Controlla lo stato del container

```bash
docker ps
```

Per vedere i log:

```bash
docker logs tymeslot
```

Se hai problemi all’avvio, i log sono il primo posto da controllare.

## Distribuzione opzionale con Docker Compose

Se preferisci gestire i container con Compose, puoi definire il servizio in un file `docker-compose.yml`. È spesso più semplice da mantenere rispetto a lunghi comandi `docker run`.

### Esempio di file Compose

```yaml
services:
  tymeslot:
    image: [your_tymeslot_image]
    container_name: tymeslot
    ports:
      - "4000:4000"
    environment:
      SECRET_KEY_BASE: "[your_secret_key_base]"
      PHX_HOST: "[your_domain_or_ip]"
    volumes:
      - tymeslot_data:/app/data
      - tymeslot_pg:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  tymeslot_data:
  tymeslot_pg:
```

Avvia lo stack con:

```bash
docker compose up -d
```

:::tip Gestione con Compose
Usare Compose rende più semplici aggiornamenti, riavvii e backup perché la configurazione del container resta in un unico file. È particolarmente utile se gestisci più immagini docker sullo stesso host.
:::

## Configurare Tymeslot

Dopo che il container è in esecuzione, rivedi i valori di configurazione più importanti.

### Variabili d’ambiente principali

| Variabile | Scopo |
| --- | --- |
| `SECRET_KEY_BASE` | Protegge sessioni e segreti dell’applicazione |
| `PHX_HOST` | Definisce l’hostname pubblico o l’indirizzo IP |

Usa i segnaposto così:

- `[your_secret_key_base]` è il tuo secret sicuro generato
- `[your_domain_or_ip]` è l’hostname pubblico o IP del server, ad esempio `schedule.[your_domain]` o `[your_server_ip]`

### Configurazione SMTP

Il materiale di bozza indica che SMTP può essere configurato per le notifiche email in `config/prod.exs`. Esempio:

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "your_email@example.com",
  password: "your_password",
  tls: :if_available,
  auth: :always
```

:::note Verifica configurazione SMTP
L’esempio sopra proviene dalla bozza fornita e riflette una configurazione tipica di un mailer Elixir. Dovresti comunque confrontarlo con i file di configurazione correnti di Tymeslot perché le impostazioni mail possono cambiare tra le release.
:::

## Rete e Accesso

Una volta che Tymeslot è in esecuzione, devi assicurarti che sia raggiungibile dal browser.

### Accedi all’interfaccia web

Apri nel browser l’URL:

```text
http://[your_server_ip]:4000
```

Se hai configurato un reverse proxy e DNS, puoi invece usare:

```text
https://[your_domain]
```

### Riferimento porte

| Porta | Protocollo | Scopo |
| --- | --- | --- |
| `4000` | TCP | Accesso web di default dalla configurazione bozza |

### Considerazioni firewall

Devi permettere il traffico in ingresso sulla porta `4000/tcp` se accedi a Tymeslot direttamente.

:::caution Esposizione pubblica
Se esponi Tymeslot direttamente su internet, valuta fortemente di metterlo dietro un reverse proxy con HTTPS. Questo migliora la sicurezza e ti offre un accesso più pulito basato su dominio.
:::

## Raccomandazione Reverse Proxy

Un reverse proxy è consigliato se vuoi usare un nome di dominio e un certificato TLS.

### Perché usare un reverse proxy

| Vantaggio | Spiegazione |
| --- | --- |
| Supporto HTTPS | Cripta il traffico tra utenti e servizio |
| Accesso basato su dominio | Ti permette di usare `[your_domain]` invece di una porta grezza |
| Gestione certificati più semplice | Funziona bene con Let’s Encrypt e strumenti simili |
| Accesso pubblico più pulito | Nasconde le porte interne dell’applicazione |

### Cosa verificare

La configurazione esatta del reverse proxy dipende da Nginx, Apache o altro web server. Poiché non era disponibile un esempio ufficiale completo nel materiale fornito, verifica le intestazioni richieste e la gestione websocket nella documentazione upstream di Tymeslot prima della distribuzione.

## Note sull’installazione nativa

Tymeslot è costruito con Elixir e Phoenix LiveView, quindi un’installazione nativa potrebbe essere possibile su ambienti di sviluppo Linux o Windows. La bozza includeva questi comandi:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Cosa tenere a mente

| Argomento | Nota |
| --- | --- |
| Elixir e Erlang | Devono essere installati in versioni compatibili |
| Dipendenze Phoenix | Potrebbero richiedere strumenti di build aggiuntivi |
| Configurazione database | Deve essere corretta prima delle migrazioni |
| Hardening produzione | Di solito più complesso rispetto a Docker |

:::danger Distribuzione nativa in produzione richiede verifica
I passaggi di installazione nativa sopra erano inclusi nella bozza ma non sono stati completamente confermati dal repository upstream fornito. Non dovresti usarli in produzione senza prima controllare la documentazione ufficiale e i file correnti di Tymeslot.
:::

## Verifica dell’installazione

Dopo la distribuzione, conferma che l’applicazione funzioni correttamente.

### Controlli base

| Controllo | Risultato atteso |
| --- | --- |
| `docker ps` | Il container `tymeslot` è in esecuzione |
| `docker logs tymeslot` | Nessun errore ripetuto all’avvio o sul database |
| Accesso browser | L’interfaccia Tymeslot si carica |
| Test porta | La porta `4000` risponde sul server |

### Problemi comuni

| Problema | Possibile causa |
| --- | --- |
| La pagina non si carica | Porta `4000` bloccata o container non in esecuzione |
| Il container esce subito | Variabili d’ambiente errate o dipendenze mancanti |
| Errori database nei log | Fallita inizializzazione database o percorso storage errato |
| Comportamento hostname errato | `PHX_HOST` non impostato correttamente |

## Aggiornare Tymeslot

Quando è disponibile una versione più recente, aggiorna la distribuzione con attenzione.

### Flusso aggiornamento Docker

1. Scarica l’immagine aggiornata:
   ```bash
   docker pull [your_tymeslot_image]
   ```
2. Ferma il container corrente:
   ```bash
   docker stop tymeslot
   ```
3. Rimuovi il container vecchio:
   ```bash
   docker rm tymeslot
   ```
4. Avvia un nuovo container con la stessa configurazione.

Se usi Compose, puoi aggiornare di solito con:

```bash
docker compose pull
docker compose up -d
```

:::tip Backup prima di aggiornare
Prima di aggiornare, fai il backup dei volumi persistenti e di eventuali dati database correlati. Così hai una via di recupero se la nuova versione introduce migrazioni o problemi di compatibilità.
:::

## Riferimenti aggiuntivi

| Risorsa | Link |
| --- | --- |
| Repository ufficiale Tymeslot | [GitHub - Tymeslot](https://github.com/tymeslot/tymeslot) |
| Sito ufficiale Docker | [Docker](https://www.docker.com/) |
| Menzione Self-Host Weekly | [Self-Host Weekly - 10 aprile 2026](https://selfh.st/weekly/2026-04-10/) |

## Conclusione

Congratulazioni, hai revisionato e distribuito con successo Tymeslot su Linux o Windows usando Docker. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂