---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Scopri come distribuire Tymeslot con Docker, container Docker e le basi dell’installazione Docker su Linux o Windows per la pianificazione self-hosted. -> Scopri di più ora"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Tymeslot è una piattaforma open-source per la gestione di appuntamenti e riunioni, sviluppata con Elixir e Phoenix LiveView. In questa guida scoprirai cos’è Tymeslot, cosa ti serve per farlo funzionare e come distribuirlo su Linux o Windows usando Docker.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di distribuire Tymeslot, assicurati che il tuo sistema soddisfi i requisiti base e che Docker sia installato.

### Requisiti

I seguenti requisiti si basano sulle informazioni disponibili del progetto e sul draft di configurazione fornito:

| Requisito | Raccomandazione |
|---|---|
| CPU | Almeno `1` vCPU |
| RAM | Almeno `2 GB` |
| Spazio su disco | Almeno `10 GB` |
| Sistema operativo | Linux o Windows |
| Runtime container | Docker |
| Rete | Accesso alla porta `4000` |

### Cosa è verificato e cosa no

:::info Disponibilità della fonte
Il repository di Tymeslot conferma che il progetto è una piattaforma open-source per la pianificazione di appuntamenti sviluppata con Elixir e Phoenix LiveView, e che nel repository sono presenti file relativi a Docker come `Dockerfile.docker` e `docker-compose.yml`.

Tuttavia, i passaggi esatti per la distribuzione in produzione, il nome dell’immagine e tutte le variabili d’ambiente richieste non sono completamente verificabili dal materiale sorgente fornito qui. Per questo motivo, questa guida utilizza le informazioni disponibili nel draft e segnala chiaramente i valori che dovresti verificare nel repository ufficiale prima dell’uso in produzione.
:::

### Installare Docker

Docker è necessario per eseguire Tymeslot in un container.

- Su Linux, installa Docker Engine seguendo la guida ufficiale [Docker documentation](https://docs.docker.com/engine/install/)
- Su Windows, installa [Docker Desktop](https://www.docker.com/products/docker-desktop/)

:::tip Docker per Windows
Se usi Docker su Windows, assicurati che la virtualizzazione sia abilitata e che Docker Desktop sia in esecuzione prima di procedere.
:::

## Panoramica del Software

Tymeslot appartiene alla categoria *Scheduling* ed è pensato per la gestione self-hosted di appuntamenti e riunioni.

| Proprietà | Valore |
|---|---|
| Nome | `Tymeslot` |
| Categoria | `Scheduling` |
| Sorgente | `https://github.com/tymeslot/tymeslot` |
| Tecnologia | `Elixir`, `Phoenix LiveView` |
| Modalità di distribuzione | Self-hosted, supporto Docker |
| Menzione settimanale | Self-Host Weekly, 10 aprile 2026 |

### Perché usare Tymeslot

Tymeslot è utile se vuoi:

- ospitare la tua piattaforma di pianificazione
- mantenere i dati delle prenotazioni sulla tua infrastruttura
- gestire appuntamenti senza dipendere da piattaforme SaaS di terze parti
- distribuire un’app web moderna con container Docker

## Opzioni di Distribuzione

In base alle informazioni disponibili, ci sono due approcci possibili:

| Metodo | Stato |
|---|---|
| Distribuzione con Docker | Consigliata |
| Installazione nativa Elixir/Phoenix | Possibile, ma più avanzata |

Per la maggior parte degli utenti, Docker è la scelta migliore perché semplifica installazione, aggiornamenti e gestione del servizio.

## Installare Tymeslot con Docker

Questo è il metodo più pratico per sistemi Linux e Windows.

### Scaricare l’immagine Docker

Il draft fornito usa questo riferimento immagine:

```bash
docker pull youruser/tymeslot:latest
```

:::caution Verifica prima l’immagine Docker
Il nome esatto dell’immagine pubblica non è confermato dal contenuto del repository scaricato. Prima di usare questo comando in produzione, verifica il nome corretto dell’immagine nel repository ufficiale di Tymeslot, nelle note di rilascio o sulla pagina Docker Hub se disponibile.
:::

### Avviare il container

Puoi avviare Tymeslot con questo comando tratto dal draft di configurazione:

```bash
docker run --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  youruser/tymeslot:latest
```

Se usi Windows PowerShell, il comando `openssl` potrebbe non essere disponibile di default. In tal caso, genera un valore casuale sicuro separatamente e sostituisci manualmente `SECRET_KEY_BASE`.

### Riferimento comandi esempio

| Opzione | Scopo |
|---|---|
| `--name tymeslot` | Imposta il nome del container |
| `-p 4000:4000` | Espone Tymeslot sulla porta `4000` |
| `-e SECRET_KEY_BASE=...` | Definisce il segreto dell’app per crittografia e sessioni |
| `-e PHX_HOST=localhost` | Imposta il nome host usato da Phoenix |
| `-v tymeslot_data:/app/data` | Conserva i dati dell’applicazione |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Conserva i dati di PostgreSQL |
| `youruser/tymeslot:latest` | Nome immagine Docker dal draft |

### Generare una chiave segreta su Linux

Se `openssl` è installato, puoi generare un segreto così:

```bash
openssl rand -base64 64 | tr -d '\n'
```

### Generare una chiave segreta su Windows PowerShell

Puoi generare un segreto placeholder in PowerShell così:

```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

:::danger Usa un valore segreto personale
Non riutilizzare segreti di esempio in produzione. Genera sempre un tuo `SECRET_KEY_BASE` e conservalo in modo sicuro.
:::

## Configurare Tymeslot

Prima del primo utilizzo, è consigliato rivedere le impostazioni runtime più importanti.

### Variabili d’ambiente

Il draft conferma queste variabili d’ambiente:

| Variabile | Esempio | Scopo |
|---|---|---|
| `SECRET_KEY_BASE` | `[your_secret_key]` | Protegge sessioni e funzioni di crittografia |
| `PHX_HOST` | `[your_domain]` o `[your_server_ip]` | Definisce il nome host pubblico usato dall’app |

Quando usi i placeholder:

- `[your_secret_key]` è il tuo segreto sicuro generato
- `[your_domain]` è il tuo dominio pubblico se ne usi uno
- `[your_server_ip]` è l’indirizzo IP del server per accesso diretto

### Configurazione SMTP

Il draft menziona anche la configurazione SMTP in `config/prod.exs` per le notifiche email:

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

:::note Verifica SMTP
Il formato esatto della configurazione mailer dovrebbe essere verificato nel repository ufficiale di Tymeslot prima di applicarlo in produzione, perché la configurazione dell’app può cambiare tra le release.
:::

## Accedere a Tymeslot

Una volta che il container è in esecuzione, puoi testare l’interfaccia web.

### Accesso locale

Se stai testando in locale, apri:

```text
http://localhost:4000
```

### Accesso remoto

Se Tymeslot gira su un server remoto, apri:

```text
http://[your_server_ip]:4000
```

Se hai configurato un dominio e un reverse proxy, puoi accedere tramite:

```text
https://[your_domain]
```

## Firewall e Rete

Tymeslot necessita di accesso di rete sulla porta che pubblichi da Docker.

### Porta richiesta

| Porta | Protocollo | Scopo |
|---|---|---|
| `4000` | TCP | Accesso web all’applicazione Tymeslot |

### Considerazioni sul firewall

Assicurati che:

- la porta `4000` sia aperta sul firewall del server se vuoi accesso diretto
- il firewall cloud o del provider consenta la stessa porta
- il reverse proxy inoltri correttamente il traffico se usi un dominio

:::caution Esposizione pubblica
Se esponi la porta `4000` direttamente su internet, assicurati di comprendere le implicazioni di sicurezza. Per distribuzioni in produzione, un reverse proxy con HTTPS è quasi sempre la scelta migliore.
:::

## Installazione Nativa Opzionale

Un’installazione nativa può essere possibile se preferisci non usare Docker. Questo metodo è più avanzato e richiede un ambiente compatibile con Elixir e Phoenix.

### Passaggi base nativi

Secondo il draft fornito, il processo è:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Note sulla distribuzione nativa

Per una distribuzione nativa servirebbero anche:

- Elixir
- Erlang/OTP
- dipendenze Phoenix
- configurazione database supportata
- revisione configurazione produzione

:::info Complessità installazione nativa
Il materiale sorgente scaricato non fornisce dettagli sufficientemente verificati per documentare in sicurezza una configurazione completa nativa Linux o Windows in produzione. Se vuoi usare questo metodo, consulta direttamente la documentazione ufficiale del repository prima della distribuzione.
:::

## Manutenzione e Risoluzione Problemi

Dopo la distribuzione, verifica che il servizio rimanga disponibile e che i dati siano persistenti.

### Controllare lo stato del container

```bash
docker ps
```

### Visualizzare i log

```bash
docker logs tymeslot
```

### Riavviare il container

```bash
docker restart tymeslot
```

### Problemi comuni

| Problema | Possibile causa | Azione suggerita |
|---|---|---|
| Pagina web non si carica | Porta `4000` bloccata | Controlla firewall e mappatura porte Docker |
| Container si chiude subito | Variabili d’ambiente errate | Verifica `SECRET_KEY_BASE` e impostazioni immagine |
| Errori legati al database | Problemi di storage persistente o inizializzazione DB | Controlla i log e verifica i volumi |
| Hostname errato nei link | `PHX_HOST` non corretto | Imposta `PHX_HOST` su `[your_domain]` o `[your_server_ip]` |

## Best Practices

### Usa volumi persistenti

Mantieni sempre volumi Docker persistenti per dati applicazione e database così la ricreazione del container non cancella i dati.

### Usa un reverse proxy

Per distribuzioni pubbliche, è consigliabile mettere Tymeslot dietro un reverse proxy come Nginx o Apache e abilitare HTTPS.

### Verifica aggiornamenti upstream

Poiché Tymeslot è in sviluppo attivo, rivedi il repository ufficiale prima di aggiornare. Questo è particolarmente importante per:

- immagini Docker cambiate
- variabili d’ambiente aggiornate
- migrazioni database
- modifiche alla configurazione mail

## Riferimenti Aggiuntivi

| Risorsa | Link |
|---|---|
| Repository GitHub Tymeslot | [Official Tymeslot Repository](https://github.com/tymeslot/tymeslot) |
| Menzione Self-Host Weekly | [Self-Host Weekly - 10 April 2026](https://selfh.st/weekly/2026-04-10/) |
| Documentazione Docker | [Docker Documentation](https://docs.docker.com/) |
| Download Docker Desktop | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |

## Conclusione

Congratulazioni, hai imparato con successo come esaminare e distribuire Tymeslot su Linux o Windows usando Docker. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂