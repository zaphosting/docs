---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Scopri come usare Yet Another Rclone Dashboard come GUI moderna per rclone su Linux e Windows, inclusi accesso browser e configurazione daemon con rclone rcd. -> Scopri di più ora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Yet Another Rclone Dashboard è una moderna dashboard web per gestire `rclone rcd` tramite un’interfaccia browser. In questa guida scoprirai cosa fa il software, cosa serve e come configurarlo su Linux o Windows usando i metodi di deployment supportati.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati che il tuo sistema soddisfi i requisiti base e che `rclone` sia già installato.

### Requisiti

Secondo il repository del progetto, Yet Another Rclone Dashboard è pensato per `rclone rcd` e consiglia **Rclone `v1.72.0` o superiore**.

| Requisito | Dettagli |
|---|---|
| Sistema operativo | Linux o Windows |
| Dipendenza principale | `rclone` |
| Versione Rclone consigliata | `v1.72.0` o superiore |
| Metodo di accesso | Browser web |
| Porta RC predefinita | `5572/tcp` |
| Software opzionale | `Docker`, `Nginx` o `Caddy` a seconda della configurazione |

### Cosa offre la dashboard

Il progetto upstream descrive Yet Another Rclone Dashboard come un frontend per `rclone rcd`. Dalle informazioni disponibili, include queste funzionalità:

| Funzionalità | Descrizione |
|---|---|
| Profili di connessione multipli | Connessione a diverse istanze di `rclone rcd` |
| Informazioni di sistema | Visualizza info di sistema e stato di Rclone |
| Gestione remoti | Ispeziona remoti e importa/esporta configurazioni Rclone |
| File browser | Naviga directory e gestisci file tramite la dashboard |

:::info Requisito Rclone
Questo software non è un server di storage standalone. Serve un’installazione funzionante di `rclone` in modalità daemon con `rcd`.
:::

### Scarica il sorgente

Il codice ufficiale è disponibile su GitHub:

- [Yet Another Rclone Dashboard su GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Al momento del materiale fornito, l’ultima release è `v0.3.8` con l’asset `yet-another-rclone-dashboard-v0.3.8.zip`.

## Come funziona la dashboard

Yet Another Rclone Dashboard è un frontend web statico che si collega all’*API di controllo remoto* di Rclone fornita da `rclone rcd`. Questo significa che la dashboard non sostituisce `rclone`, ma ti offre un’esperienza GUI più pulita direttamente nel browser.

In pratica, puoi usarla in diversi modi:

| Metodo | Caso d’uso | Note |
|---|---|---|
| `--rc-files` | Deployment manuale locale o server | Serve i file estratti della dashboard direttamente tramite `rclone rcd` |
| `--rc-web-gui` con URL fetch | Download automatico tramite Rclone | Permette a Rclone di scaricare l’ultima release della dashboard |
| Reverse proxy | Accesso via dominio | Utile per pubblicare la dashboard tramite `Nginx` o `Caddy` |
| Web server esterno | Hosting file statici | Serve il frontend separatamente e lo collega a `rclone rcd` |

:::note Accesso via Browser
Essendo una dashboard web, la userai tramite browser dopo aver avviato e configurato correttamente `rclone rcd`.
:::

## Scarica i file della dashboard

Se vuoi usare il metodo manuale, scarica prima l’archivio dell’ultima release dalla pagina GitHub del progetto ed estrailo sul server o sistema locale.

### Esempio Linux

Puoi scaricare l’archivio con `wget`:

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

Poi estrailo:

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_dashboard_directory]
```

Sostituisci `[your_dashboard_directory]` con la cartella dove vuoi salvare i file estratti, ad esempio `/opt/yet-another-rclone-dashboard`.

### Esempio Windows

Su Windows, scarica l’archivio `.zip` dalla pagina GitHub e estrailo in una cartella come:

```text
C:\yet-another-rclone-dashboard
```

:::tip Mantieni i File in una Posizione Permanente
Non estrarre la dashboard in una cartella temporanea. `rclone rcd` deve poter accedere ai file continuamente se usi il metodo `--rc-files`.
:::

## Avvia Rclone con la dashboard

Quando i file sono pronti, puoi avviare `rclone rcd` ed esporre la dashboard.

### Metodo 1: Setup manuale con `--rc-files`

Questo metodo usa i file estratti direttamente.

#### Esempio Linux locale

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Esempio Linux server

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Esempio Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Metodo 2: Setup automatico con `--rc-web-gui`

Questo metodo fa scaricare automaticamente la dashboard a Rclone tramite l’API GitHub.

#### Esempio locale

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Esempio server remoto

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

:::caution Non Esporre un’Interfaccia RC Non Protetta
Se colleghi `rclone rcd` a `0.0.0.0`, il servizio potrebbe essere raggiungibile da altri sistemi. Usa `--rc-user` e `--rc-pass` o mettilo dietro un reverse proxy configurato correttamente.
:::

## Opzioni Rclone importanti

Queste sono le opzioni più rilevanti per configurare la dashboard.

| Opzione | Scopo |
|---|---|
| `--rc-files` | Serve i file statici della dashboard da una cartella locale |
| `--rc-web-gui` | Attiva il meccanismo di fetch della GUI web di Rclone |
| `--rc-web-fetch-url` | Specifica l’endpoint API per scaricare la dashboard |
| `--rc-no-auth` | Disabilita l’autenticazione, adatto solo per uso locale fidato |
| `--rc-user` | Imposta l’username per l’autenticazione RC |
| `--rc-pass` | Imposta la password per l’autenticazione RC |
| `--rc-addr` | Definisce indirizzo e porta di ascolto |
| `--rc-allow-origin` | Permette l’accesso browser dall’origine specificata |
| `--rc-web-gui-no-open-browser` | Impedisce l’apertura automatica del browser su sistemi headless |
| `--rc-user-from-header` | Accetta l’utente autenticato da un header di reverse proxy |

### Spiegazione dei placeholder

Usa questi placeholder negli esempi:

| Placeholder | Significato |
|---|---|
| `[your_dashboard_directory]` | Cartella con i file estratti della dashboard |
| `[your_rc_username]` | Username per l’autenticazione di `rclone rcd` |
| `[your_rc_password]` | Password per l’autenticazione di `rclone rcd` |
| `[your_server_ip]` | IP pubblico o privato del tuo server |

## Configura l’accesso via browser

Dopo aver avviato `rclone rcd`, apri l’URL della dashboard nel browser.

### Accesso locale

Se hai avviato il servizio localmente sulla stessa macchina, apri:

```text
http://127.0.0.1:5572
```

### Accesso remoto

Se hai avviato il servizio su un server Linux o Windows remoto e hai permesso l’accesso esterno, apri:

```text
http://[your_server_ip]:5572
```

Se usi un dominio e un reverse proxy, apri invece l’URL configurato, ad esempio:

```text
https://[your_domain]
```

:::info L’Origine Consentita Deve Corrispondere
Il valore usato con `--rc-allow-origin` deve corrispondere all’indirizzo che usi nel browser. Se non corrisponde, la dashboard potrebbe non connettersi correttamente.
:::

## Usa un reverse proxy

Un reverse proxy è utile per URL più puliti, HTTPS o controllo accessi aggiuntivo.

### Esempio Nginx

Questo esempio serve i file statici estratti della dashboard tramite `Nginx`:

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

### Esempio Caddy

Questo esempio serve i file statici della dashboard tramite `Caddy`:

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Hosting Frontend Statico
Questi esempi servono solo i file frontend. Serve comunque un backend `rclone rcd` funzionante raggiungibile dalla dashboard.
:::

## Autenticazione avanzata con reverse proxy

Il progetto documenta anche una configurazione avanzata dove l’autenticazione è gestita da un gateway esterno e passata a Rclone con `--rc-user-from-header`.

### Esempio Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Esempio reverse proxy Caddy

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

:::caution L’Autenticazione Avanzata Richiede Test Attenti
Questa configurazione dipende dal reverse proxy e dal gateway di autenticazione che devono inoltrare correttamente gli header. Se manca o è errato, l’accesso potrebbe fallire o comportarsi in modo imprevisto.
:::

## Verifica l’installazione

Quando tutto è in esecuzione, verifica che la dashboard si carichi correttamente.

### Controlli base

Controlla quanto segue:

| Controllo | Risultato atteso |
|---|---|
| Processo `rclone rcd` attivo | Nessun errore all’avvio in console o log |
| Porta `5572` in ascolto | Servizio raggiungibile localmente o da remoto |
| Browser apre l’URL configurato | Interfaccia Yet Another Rclone Dashboard si carica |
| Autenticazione funziona | Puoi fare login se abilitata l’autenticazione RC |

### Problemi comuni

| Problema | Possibile causa | Azione suggerita |
|---|---|---|
| Dashboard non si carica | URL errato o servizio non attivo | Verifica valore `--rc-addr` e stato processo |
| Errori di connessione browser | Porta bloccata da firewall | Consenti accesso in ingresso a `5572/tcp` se serve |
| Login fallisce | Username o password RC errati | Riavvia `rclone rcd` con credenziali corrette |
| Frontend si apre ma API falliscono | `--rc-allow-origin` non corrisponde | Imposta origine esatta usata dal browser |
| Accesso remoto non disponibile | Servizio legato solo a `127.0.0.1` | Usa `0.0.0.0:5572` se vuoi accesso remoto |

:::danger Esposizione Pubblica Senza Protezione
Non esporre la dashboard direttamente su internet senza autenticazione o reverse proxy sicuro. Se vuoi usarla come browser remoto per `rclone` o gestire remoti `rclone google drive` in rete, proteggi prima l’endpoint.
:::

## Note aggiuntive per Linux e Windows

### Linux

Linux è solitamente l’ambiente più semplice per servizi `rclone rcd` a lunga durata. Puoi eseguire il comando manualmente, con un terminal multiplexer o come servizio a seconda del design del sistema.

### Windows

Su Windows, assicurati che il percorso usato con `--rc-files` punti alla cartella estratta della dashboard e che il firewall permetta la porta configurata se serve accesso remoto.

### Nota Docker

Il materiale fornito menziona Docker come dipendenza opzionale, ma non include una procedura Docker verificata per questo progetto. Se vuoi usare workflow `rclone docker`, controlla il repository upstream prima di procedere invece di assumere una configurazione container.

## Conclusione

Congratulazioni, hai configurato con successo Yet Another Rclone Dashboard su Linux o Windows. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂