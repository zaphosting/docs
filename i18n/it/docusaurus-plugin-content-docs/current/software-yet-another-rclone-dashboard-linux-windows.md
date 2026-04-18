---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Scopri come configurare Yet Another Rclone Dashboard come interfaccia moderna per rclone e browser rclone per sistemi Linux e Windows. -> Scopri di più ora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Yet Another Rclone Dashboard è una moderna dashboard web per `rclone rcd` che ti offre un’interfaccia grafica per navigare tra i file, ispezionare i remoti e gestire la tua configurazione Rclone. In questa guida imparerai come installarla su Linux o Windows e collegarla in modo sicuro al tuo demone Rclone esistente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati che il tuo sistema soddisfi i requisiti di base e che Rclone sia già installato.

### Requisiti

| Requisito | Dettagli |
|---|---|
| Sistema operativo | Linux o Windows |
| Versione Rclone | Consigliata `v1.72.0` o superiore |
| Metodo di accesso | Console locale, SSH o RDP |
| Rete | Accesso all’URL della dashboard dal browser |
| Porta predefinita | `5572/tcp` |

### Cosa devi sapere prima

Yet Another Rclone Dashboard non è un servizio di storage autonomo. È un frontend per `rclone rcd`, la modalità daemon di controllo remoto di Rclone. Questo significa che devi avviare `rclone rcd` con le opzioni web corrette affinché la dashboard possa caricarsi e comunicare con il backend.

:::info Rclone è necessario
Devi avere un’installazione funzionante di [Rclone](https://rclone.org/) prima di usare questa dashboard. Se Rclone non è ancora installato, procedi prima con l’installazione e la configurazione.
:::

### Checklist di preparazione consigliata

| Attività | Perché è importante |
|---|---|
| Installare Rclone | Necessario per eseguire `rclone rcd` |
| Configurare almeno un remoto | Serve per navigare nello storage cloud come `rclone google drive` |
| Aprire o inoltrare la porta richiesta | Necessario per l’accesso remoto via browser |
| Decidere accesso locale o remoto | Determina se serve l’autenticazione |

## Come funziona la dashboard

Yet Another Rclone Dashboard è un’applicazione web statica che si collega all’API di controllo remoto di Rclone. Puoi servire i file della dashboard direttamente tramite Rclone oppure ospitare il frontend separatamente con un web server come Nginx o Caddy.

### Funzionalità principali

In base alle informazioni pubblicate sul progetto, la dashboard offre le seguenti funzioni:

| Funzionalità | Descrizione |
|---|---|
| Profili di connessione multipli | Connessione a diverse istanze di `rclone rcd` |
| Informazioni di sistema | Visualizza stato e dettagli dell’ambiente Rclone |
| Ispezione remoti | Controlla remoti disponibili e configurazioni |
| Browser file | Naviga tra directory e gestisci file |
| Anteprima media | Visualizza contenuti supportati |
| Vista trasferimenti | Monitora l’attività di trasferimento |
| Interfaccia impostazioni | Modifica opzioni relative alla dashboard |

### Quando usare questa dashboard

Questo progetto è utile se vuoi un `rclone gui` o `rclone browser` leggero invece di lavorare solo da terminale. È particolarmente comodo per gestire remoti cloud da VPS, server dedicati o sistemi Windows locali.

## Metodi di installazione

Puoi installare Yet Another Rclone Dashboard in diversi modi. La scelta dipende se vuoi la configurazione più semplice, un’installazione manuale o un reverse proxy davanti al servizio.

### Metodo 1: Servire la dashboard con file locali

Questo metodo usa la build estratta della dashboard con l’opzione `--rc-files` di Rclone.

#### Scarica la release

Scarica l’ultima release dall’area GitHub del progetto:

- Progetto GitHub: [Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- Ultima release verificata nel materiale fornito: `v0.3.8`
- Archivio release: `yet-another-rclone-dashboard-v0.3.8.zip`

Estrai l’archivio in una cartella a tua scelta.

Esempi di percorsi:

| Piattaforma | Percorso esempio |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### Avvia Rclone su Linux

Se esegui la dashboard localmente sulla stessa macchina e vuoi solo accesso locale via browser, puoi legarla a `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

Se vuoi accedervi da remoto da un altro dispositivo, usa l’autenticazione e ascolta su tutte le interfacce.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Avvia Rclone su Windows

Apri `Prompt dei comandi` o `PowerShell` ed esegui:

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

Sostituisci i placeholder con i tuoi valori:

| Placeholder | Significato |
|---|---|
| `[your_rc_username]` | Username per il login all’API Rclone |
| `[your_rc_password]` | Password per proteggere l’API Rclone |
| `[your_server_ip]` | IP pubblico o privato usato per accedere alla dashboard |

:::caution Non esporre un’API Rclone senza autenticazione
Non usare `--rc-no-auth` insieme a `0.0.0.0:5572` su un server accessibile da internet. Esporresti l’interfaccia di controllo Rclone senza protezione.
:::

### Metodo 2: Usa il fetcher WebGUI di Rclone

Questo metodo permette a Rclone di scaricare automaticamente la dashboard invece di scaricare manualmente i file. Può semplificare l’installazione per una configurazione rapida.

#### Esempio accesso locale

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Esempio accesso remoto

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::note Comportamento fetch automatico
Il percorso esatto usato da Rclone per i file della GUI scaricati dipende dall’ambiente Rclone. Se vuoi pieno controllo su file e aggiornamenti, il metodo manuale con `--rc-files` è generalmente più semplice da gestire.
:::

### Metodo 3: Servire il frontend con un web server

Poiché il progetto è un’app web statica, puoi ospitare il frontend separatamente con un web server e mantenere `rclone rcd` in esecuzione in background.

#### Esempio Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Esempio Caddy

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

Questo approccio è utile se usi già uno stack con reverse proxy e vuoi servire la dashboard da un dominio personalizzato.

:::tip Best practice reverse proxy
Se usi un dominio o reverse proxy, imposta `--rc-allow-origin` sull’URL esatto che apri nel browser, ad esempio `https://[your_domain]`.
:::

### Metodo 4: Reverse proxy avanzato con autenticazione esterna

Una configurazione avanzata può usare un gateway di autenticazione esterno e passare l’utente autenticato a Rclone tramite header. È pensata per utenti esperti.

#### Esempio Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

#### Esempio Caddy

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::danger Configurazione avanzata autenticazione
L’autenticazione basata su header deve essere usata solo dietro un reverse proxy affidabile. Se configurata male, può permettere accessi non autorizzati alla tua istanza Rclone.
:::

## Opzioni Rclone importanti

Le seguenti opzioni sono le più rilevanti per installare Yet Another Rclone Dashboard.

| Opzione | Scopo |
|---|---|
| `--rc-files` | Serve i file estratti della dashboard tramite Rclone |
| `--rc-web-gui` | Abilita il supporto web GUI tramite Rclone |
| `--rc-web-fetch-url` | Scarica i metadati della release GUI da una fonte remota |
| `--rc-user` | Imposta l’username API |
| `--rc-pass` | Imposta la password API |
| `--rc-no-auth` | Disabilita l’autenticazione |
| `--rc-addr` | Definisce indirizzo e porta di ascolto |
| `--rc-allow-origin` | Permette l’accesso browser dall’origine specificata |
| `--rc-web-gui-no-open-browser` | Impedisce l’apertura automatica del browser |
| `--rc-user-from-header` | Accetta l’utente autenticato da header reverse proxy |

## Guida alla configurazione

Dopo aver scelto il metodo di installazione, rivedi i principali valori di configurazione prima del primo utilizzo.

### Impostazioni di autenticazione

Se la dashboard è usata solo localmente sulla tua macchina, l’accesso locale senza autenticazione può andare bene. Per qualsiasi configurazione remota o pubblica, usa sempre l’autenticazione.

| Tipo di accesso | Impostazione consigliata |
|---|---|
| Solo locale | `127.0.0.1` con eventuale `--rc-no-auth` |
| Accesso LAN o internet | `0.0.0.0` con `--rc-user` e `--rc-pass` |
| Reverse proxy con dominio | Bind a `127.0.0.1` o privato più autenticazione proxy |

### Origine consentita

Il valore di `--rc-allow-origin` deve corrispondere all’URL da cui il browser carica la dashboard.

Esempi:

| URL di accesso | `--rc-allow-origin` corrispondente |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[your_server_ip]:5572` | `http://[your_server_ip]:5572` |
| `https://[your_domain]` | `https://[your_domain]` |

Se questo valore non corrisponde, il browser potrebbe bloccare le richieste e la dashboard potrebbe non caricarsi correttamente.

## Avvio e verifica della dashboard

Una volta avviato il comando, apri l’indirizzo configurato nel browser.

### Cosa aspettarsi

Se la configurazione è corretta, vedrai l’interfaccia di Yet Another Rclone Dashboard e potrai connetterti al demone Rclone configurato.

Esempi tipici:

| Scenario | URL |
|---|---|
| Accesso locale Linux o Windows | `http://127.0.0.1:5572` |
| Accesso remoto via IP | `http://[your_server_ip]:5572` |
| Accesso tramite reverse proxy | `https://[your_domain]` |

### Passaggi base di verifica

1. Avvia `rclone rcd` con il metodo scelto.
2. Apri l’URL della dashboard nel browser.
3. Effettua il login se l’autenticazione è abilitata.
4. Controlla che remoti, funzioni del browser file o informazioni di stato siano visibili.
5. Prova un’azione semplice di lettura, come aprire una directory.

## Risoluzione problemi

Se la dashboard non si carica o non si connette correttamente, verifica le cause comuni seguenti.

### Connessione rifiutata

Se ricevi un errore di connessione rifiutata, controlla:

- che `rclone rcd` sia effettivamente in esecuzione
- che la porta corretta `5572` sia usata
- che il servizio ascolti sull’interfaccia prevista
- che il firewall permetta l’accesso in ingresso se necessario

### Problemi di origine browser o login

Se la pagina si carica ma le richieste API falliscono:

- verifica `--rc-allow-origin`
- conferma che l’URL del browser corrisponda esattamente all’origine consentita
- controlla `--rc-user` e `--rc-pass`
- assicurati che il reverse proxy inoltri correttamente le richieste

### Problemi con il percorso dei file

Se usi `--rc-files` e l’interfaccia non appare:

- conferma che i file estratti della dashboard siano nella directory corretta
- verifica la sintassi del percorso per Linux o Windows
- assicurati che il contenuto dell’archivio sia stato estratto e non solo scaricato

:::tip Controlla l’output della console Rclone
Rclone di solito stampa informazioni utili di avvio ed errori direttamente nel terminale. Controlla prima quell’output se la dashboard, `rclone download` o le funzioni di browser remoto non funzionano come previsto.
:::

## Raccomandazioni di sicurezza

Una dashboard che controlla Rclone può accedere ai remoti configurati e alle operazioni sui file, quindi la sicurezza è fondamentale.

| Raccomandazione | Motivo |
|---|---|
| Usa l’autenticazione per accessi remoti | Protegge l’API Rclone |
| Lega a `127.0.0.1` quando possibile | Riduce l’esposizione |
| Usa HTTPS dietro un reverse proxy | Protegge le credenziali in transito |
| Limita l’esposizione del firewall | Riduce la superficie di attacco |
| Usa credenziali forti | Previene accessi non autorizzati |

:::caution Remoti sensibili
Se la tua configurazione Rclone include storage cloud come Google Drive, esporre la dashboard in modo insicuro può esporre anche l’accesso a quei remoti e dati.
:::

## Informazioni aggiuntive sul progetto

Il progetto è pubblicato su GitHub ed è stato presentato su Self-Host Weekly il 10 aprile 2026.

| Voce | Valore |
|---|---|
| Nome progetto | Yet Another Rclone Dashboard |
| Categoria | Frontend |
| Fonte | [Repository GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Feature settimanale | [Self-Host Weekly (10 aprile 2026)](https://selfh.st/weekly/2026-04-10/) |
| Release verificata dal materiale | `v0.3.8` |

## Conclusione

Congratulazioni, hai configurato con successo Yet Another Rclone Dashboard su Linux o Windows. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂