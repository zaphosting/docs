---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Scopri come usare Yet Another Rclone Dashboard come interfaccia grafica per rclone su Linux e Windows, inclusi download di rclone e accesso al dashboard via browser -> Scopri di più ora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Yet Another Rclone Dashboard è un moderno pannello web per gestire `rclone rcd` tramite un’interfaccia browser. In questa guida scoprirai cosa fa il software, cosa serve e come configurarlo su Linux o Windows con Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, ti serve un’installazione funzionante di [Rclone](https://rclone.org/) perché questo dashboard si collega a `rclone rcd` e non funziona come backend standalone.

### Requisiti

I seguenti requisiti si basano sulle informazioni disponibili e sul draft di setup fornito.

| Requisito | Dettagli |
| --- | --- |
| Sistema operativo | Linux o Windows |
| Software richiesto | `rclone` |
| Versione Rclone consigliata | `v1.72.0` o superiore |
| Software opzionale | `Nginx`, `Caddy` o altro web server se vuoi servire i file statici separatamente |
| Dipendenza opzionale per build | `Node.js` se vuoi compilare il progetto da sorgente |
| Porta RC di default | `5572/tcp` |

:::info Rclone è obbligatorio
Yet Another Rclone Dashboard è un frontend per `rclone rcd`. Non puoi usarlo senza un’istanza di controllo remoto Rclone attiva.
:::

### Accesso e considerazioni di rete

Assicurati che il sistema dove esegui Rclone permetta l’accesso alla porta configurata se vuoi aprire il dashboard da remoto.

| Scenario | Indirizzo bind consigliato | URL di esempio |
| --- | --- | --- |
| Accesso solo locale | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| Accesso remoto in rete | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| Setup con reverse proxy | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution Esporre il Dashboard in modo sicuro
Se binddi Rclone su `0.0.0.0`, il servizio sarà raggiungibile da altri sistemi. Usa sempre autenticazione e, se possibile, un reverse proxy con HTTPS.
:::

## Informazioni su Yet Another Rclone Dashboard

Yet Another Rclone Dashboard è un frontend web per la modalità daemon di Rclone. Dal repository del progetto risulta che supporta la connessione a `rclone rcd`, profili multipli, ispezione remoti, import/export configurazioni, navigazione file e gestione trasferimenti.

In pratica puoi usarlo come `rclone gui` o `rclone browser` per operazioni comuni che altrimenti richiederebbero la riga di comando.

### Dettagli del progetto

| Voce | Valore |
| --- | --- |
| Nome | Yet Another Rclone Dashboard |
| Categoria | Frontend |
| Sorgente | [Repository GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Ultima release citata | `v0.3.8` |
| Asset di rilascio | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Backend consigliato | `rclone rcd` |

### Modello d’uso supportato

Il progetto conferma che il dashboard è pensato per lavorare con la modalità remote control di Rclone. Il comportamento specifico per sistema operativo non è completamente documentato, quindi questa guida si concentra sui metodi di deploy verificati dal contenuto del repository.

## Metodi di installazione

Puoi distribuire Yet Another Rclone Dashboard in vari modi a seconda di come vuoi accedervi. Il metodo più diretto è far servire i file del dashboard direttamente da Rclone.

### Metodo 1: Servire il dashboard con `--rc-files`

Questo metodo usa i file estratti del dashboard e dice a `rclone rcd` di servirli direttamente.

#### Scarica i file della release

Scarica l’archivio dell’ultima release dalla pagina GitHub del progetto:

- [Release Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

Al momento del riferimento, l’asset più recente è:

- `yet-another-rclone-dashboard-v0.3.8.zip`

Estrai l’archivio in una cartella sul tuo server o sistema locale.

:::note Sostituisci i percorsi segnaposto
Nei comandi seguenti, sostituisci `[your_dashboard_path]` con la cartella che contiene i file estratti del build del dashboard.
:::

#### Esempio Linux

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Esempio Windows

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Esempio server remoto con autenticazione

Per un server headless, usa autenticazione e bind solo su indirizzo raggiungibile esternamente se necessario.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Metodo 2: Usa il fetcher web GUI di Rclone

Il draft di setup menziona anche il fetcher integrato di Rclone per la web GUI. Questo può scaricare e servire automaticamente il dashboard senza estrazione manuale.

#### Esempio Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Esempio Windows

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Esempio server remoto

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Usa il fetcher per aggiornamenti più semplici
Se vuoi un flusso di lavoro più semplice per scaricare i file del dashboard, il metodo con fetcher è più comodo rispetto al download manuale degli archivi.
:::

### Metodo 3: Servire i file statici con un web server

Poiché Yet Another Rclone Dashboard è un’app web statica, puoi anche servire il frontend separatamente con un web server standard come [Nginx](https://nginx.org/) o [Caddy](https://caddyserver.com/).

In questo setup, Rclone fornisce il backend tramite `rclone rcd`, mentre il web server serve i file frontend.

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

:::note Frontend e backend separati
Se usi un web server separato, assicurati che il frontend possa ancora raggiungere l’endpoint RC di Rclone. In questo caso il valore di `--rc-allow-origin` è particolarmente importante.
:::

## Opzioni importanti di Rclone

Le seguenti opzioni sono le più rilevanti per configurare Yet Another Rclone Dashboard.

| Opzione | Scopo |
| --- | --- |
| `--rc-files` | Serve i file statici del dashboard da una directory locale |
| `--rc-web-gui` | Abilita il meccanismo web GUI di Rclone |
| `--rc-web-fetch-url` | Definisce l’URL di origine per scaricare il dashboard |
| `--rc-serve` | Serve l’interfaccia RC via HTTP |
| `--rc-addr` | Imposta indirizzo IP e porta di ascolto |
| `--rc-no-auth` | Disabilita l’autenticazione |
| `--rc-user` | Imposta l’username RC |
| `--rc-pass` | Imposta la password RC |
| `--rc-allow-origin` | Permette l’accesso browser dall’origine specificata |
| `--rc-web-gui-no-open-browser` | Impedisce l’apertura automatica del browser |
| `--rc-user-from-header` | Accetta l’utente da un header di reverse proxy affidabile |

### Scegliere il valore corretto per `--rc-allow-origin`

Devi impostare `--rc-allow-origin` sull’URL esatto che usi nel browser.

| Metodo di accesso | Valore esempio |
| --- | --- |
| Accesso locale | `http://127.0.0.1:5572` |
| Accesso diretto IP | `http://[your_server_ip]:5572` |
| Reverse proxy con HTTPS | `https://[your_domain]` |

:::caution Origini non corrispondenti possono bloccare il dashboard
Se `--rc-allow-origin` non corrisponde all’URL reale del browser, il dashboard potrebbe non connettersi a Rclone per restrizioni di sicurezza del browser.
:::

## Setup avanzato con reverse proxy

Se vuoi mettere il dashboard dietro un gateway di autenticazione, il draft di setup include un esempio avanzato con reverse proxy e `--rc-user-from-header`.

### Esempio Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Esempio Caddy

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

:::danger Fidati solo degli header dal tuo proxy
Usa `--rc-user-from-header` solo se Rclone è bindato a un’interfaccia locale affidabile come `127.0.0.1` e raggiungibile solo tramite il tuo reverse proxy. Altrimenti un client potrebbe falsificare gli header.
:::

## Primo avvio e verifica

Dopo aver scelto il metodo di deploy, puoi verificare che il dashboard funzioni correttamente.

### Avvia il servizio

Avvia `rclone rcd` con il comando scelto e lascia il processo attivo.

### Apri il dashboard

Apri l’URL corrispondente nel browser:

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### Conferma accesso riuscito

Se tutto è configurato correttamente, vedrai l’interfaccia di Yet Another Rclone Dashboard e potrai connetterti al backend Rclone.

Potrai quindi ispezionare remoti, navigare file e gestire trasferimenti, a seconda della configurazione di Rclone.

## Risoluzione problemi

Se il dashboard non si carica o non si connette, controlla i seguenti punti.

### Problemi comuni

| Problema | Possibile causa | Azione suggerita |
| --- | --- | --- |
| Il browser non apre la pagina | Rclone non è in esecuzione | Avvia di nuovo `rclone rcd` e controlla l’output nel terminale |
| Il dashboard si carica ma non si connette | `--rc-allow-origin` errato | Impostalo sull’URL esatto del browser |
| Accesso remoto fallisce | Porta `5572` bloccata | Apri la porta nel firewall o usa un reverse proxy |
| Autenticazione fallisce | `--rc-user` o `--rc-pass` sbagliati | Verifica le credenziali |
| Setup reverse proxy fallisce | Header o origine non corrispondono | Controlla gli header del proxy e `--rc-allow-origin` |

### Controllo log

Controlla sempre prima l’output della console di Rclone. Il materiale fornito non indica un percorso log specifico per Yet Another Rclone Dashboard, quindi il primo passo più affidabile è ispezionare l’output del processo Rclone attivo.

:::tip Preferisci HTTPS per accesso remoto
Se vuoi accedere al dashboard via internet, mettilo dietro un reverse proxy con TLS invece di esporre HTTP semplice direttamente.
:::

## Note aggiuntive

Il draft menziona scenari opzionali con Docker e build da sorgente, ma il materiale del progetto non include istruzioni verificate per Docker. Per questo motivo questa guida non fornisce comandi Docker per evitare di documentare comportamenti non confermati.

Inoltre, il nome esatto della cartella interna di build può variare a seconda della struttura dell’archivio di rilascio, quindi verifica sempre il contenuto della cartella estratta prima di impostare `[your_dashboard_path]`.

## Conclusione

Congratulazioni, hai configurato con successo Yet Another Rclone Dashboard con Rclone su Linux o Windows. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂