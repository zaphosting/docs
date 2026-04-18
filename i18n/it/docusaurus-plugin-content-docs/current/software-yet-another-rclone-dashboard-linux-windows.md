---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Configura Yet Another Rclone Dashboard, una moderna GUI e browser per rclone su Linux e Windows, per gestire il tuo daemon rclone in modo sicuro -> Scopri di più ora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Yet Another Rclone Dashboard è una moderna dashboard web per `rclone rcd` che ti offre un’interfaccia grafica per gestire i remoti, esplorare i file e monitorare i trasferimenti. In questa guida imparerai come installarla su Linux o Windows e collegarla alla tua configurazione Rclone esistente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati che il tuo sistema soddisfi i requisiti base e che Rclone sia già installato.

### Requisiti

| Componente | Requisito |
| --- | --- |
| Sistema operativo | Linux o Windows |
| Versione Rclone | Consigliata `v1.72.0` o superiore |
| Metodo di accesso | Shell locale, SSH o RDP |
| Porta predefinita | `5572/tcp` |
| Opzionale | Reverse proxy come Nginx o Caddy |

### Cosa ti serve prima dell’installazione

Ti serve quanto segue:

- Un’installazione funzionante di [Rclone](https://rclone.org/)
- Almeno un remoto Rclone configurato se vuoi accedere a storage cloud come *rclone Google Drive*
- Accesso alla porta `5572` aperta o inoltrata se vuoi connetterti da remoto
- Un browser per accedere alla dashboard

:::info Requisito Rclone
Yet Another Rclone Dashboard è solo un frontend per `rclone rcd`. Non sostituisce Rclone stesso, quindi devi prima installare e configurare Rclone.
:::

### Segnaposto importanti usati in questa guida

I comandi qui sotto usano segnaposto che devi sostituire con i tuoi valori.

| Segnaposto | Significato |
| --- | --- |
| `[your_dashboard_path]` | Percorso dove sono salvati i file della dashboard |
| `[your_server_ip]` | Indirizzo IP pubblico o privato del tuo server |
| `[your_domain]` | Nome di dominio usato per l’accesso tramite reverse proxy |
| `[your_rc_user]` | Nome utente per l’autenticazione Rclone RC |
| `[your_rc_password]` | Password per l’autenticazione Rclone RC |

## Informazioni su Yet Another Rclone Dashboard

Yet Another Rclone Dashboard è un frontend web statico pubblicato su [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard). Secondo il README del progetto, è progettato per `rclone rcd` e supporta funzionalità come:

- connessione a Rclone in modalità daemon
- gestione di più profili di connessione
- visualizzazione di informazioni e stato di sistema
- esplorazione delle directory
- gestione di remoti e dati di configurazione

Essendo un frontend, le operazioni sui file sono comunque gestite da Rclone. Questo significa che la dashboard dipende da un’istanza `rclone rcd` attiva.

## Metodi di Installazione

Puoi distribuire la dashboard in diversi modi a seconda di come vuoi accedervi. I metodi più comuni sono usare Rclone direttamente con file statici o lasciare che Rclone scarichi automaticamente la GUI web.

### Panoramica installazione

| Metodo | Ideale per | Note |
| --- | --- | --- |
| `--rc-files` | Installazioni manuali | Scarichi ed estrai la dashboard da solo |
| `--rc-web-gui` con `--rc-web-fetch-url` | Setup rapido | Rclone scarica l’ultima release della dashboard |
| Server web esterno | Hosting personalizzato | Utile con Nginx o Caddy |
| Reverse proxy con gateway auth | Setup avanzati | Migliore per accesso remoto sicuro |

## Scarica la Dashboard Manualmente

Se vuoi il controllo completo sulla versione distribuita, puoi scaricare manualmente l’ultima release dai rilasci GitHub del progetto.

### Linux

Crea una cartella per la dashboard, scarica l’archivio dell’ultima release ed estrailo.

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

Su Windows, scarica l’archivio della release dalla pagina ufficiale GitHub e estrailo in una cartella come:

```text
C:\rclone-dashboard
```

:::note Versione Release
Al momento della scrittura, l’ultima release verificata è `v0.3.8`. Se è disponibile una versione più recente, puoi usarla tranquillamente.
:::

## Avvia la Dashboard con Rclone

Quando i file sono pronti, puoi avviare `rclone rcd` e servire la dashboard tramite Rclone stesso.

### Accesso locale su Linux

Usa questo metodo se vuoi accedere alla dashboard solo localmente sullo stesso sistema.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Accesso remoto su Linux

Usa questo metodo se vuoi accedere alla dashboard da un altro dispositivo in rete.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Accesso locale su Windows

Apri il Prompt dei comandi o PowerShell ed esegui:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Accesso remoto su Windows

Per l’accesso remoto, esegui:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution Non Esporre una GUI Rclone Non Protetta
Se leghi Rclone a `0.0.0.0`, non usare `--rc-no-auth`. Proteggi sempre l’accesso remoto con autenticazione o un reverse proxy.
:::

## Usa il Rclone WebGUI Fetcher

Rclone può anche scaricare automaticamente la dashboard da GitHub. È utile se non vuoi scaricare ed estrarre i file manualmente.

### Modalità locale

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Modalità remota

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Aggiornamenti Automatici
Questo metodo è comodo se vuoi che Rclone scarichi automaticamente l’ultima release della dashboard. Spesso è l’opzione più veloce per testare una nuova GUI rclone.
:::

## Servi la Dashboard con un Web Server

Poiché Yet Another Rclone Dashboard è un frontend statico, puoi anche ospitarla con un server web standard e mantenere `rclone rcd` in esecuzione separatamente in background.

### Esempio Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Esempio Caddy

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

Questo metodo è utile se usi già un reverse proxy o vuoi un accesso più pulito basato su dominio per la tua app dashboard.

## Configurazione Avanzata Reverse Proxy

Se vuoi proteggere l’accesso tramite un livello di autenticazione esterno, puoi usare un reverse proxy davanti a Rclone e inoltrare l’utente autenticato tramite header.

### Comando Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Esempio Caddy con header utente inoltrato

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info Autenticazione Avanzata
L’implementazione esatta del gateway di autenticazione dipende dal tuo ambiente. L’esempio sopra mostra solo il pattern di integrazione tra Rclone e reverse proxy. Se usi software aggiuntivo come un identity provider o plugin Caddy, configuralo secondo la documentazione ufficiale di quel software.
:::

## Riferimento Configurazione

Le opzioni Rclone RC più importanti usate con questa dashboard sono elencate qui sotto.

| Opzione | Scopo |
| --- | --- |
| `--rc-files` | Serve i file estratti della dashboard |
| `--rc-web-gui` | Abilita il supporto Rclone WebGUI |
| `--rc-web-fetch-url` | Scarica i metadati della release della dashboard da GitHub |
| `--rc-no-auth` | Disabilita l’autenticazione, adatto solo per uso locale |
| `--rc-user` | Imposta il nome utente Rclone RC |
| `--rc-pass` | Imposta la password Rclone RC |
| `--rc-addr` | Definisce indirizzo e porta di ascolto |
| `--rc-allow-origin` | Permette l’accesso browser dall’URL specificato |
| `--rc-web-gui-no-open-browser` | Impedisce l’apertura automatica del browser |
| `--rc-user-from-header` | Accetta l’utente autenticato da un header proxy |

### Scegliere il corretto `--rc-allow-origin`

Imposta `--rc-allow-origin` sull’URL esatto che usi nel browser.

| Tipo di accesso | Valore esempio |
| --- | --- |
| Accesso locale | `http://127.0.0.1:5572` |
| Accesso remoto via IP | `http://[your_server_ip]:5572` |
| Reverse proxy con HTTPS | `https://[your_domain]` |

:::caution L’Origin Deve Corrispondere
Se `--rc-allow-origin` non corrisponde all’URL usato nel browser, la dashboard potrebbe non caricarsi correttamente a causa di restrizioni di sicurezza del browser.
:::

## Accedi e Verifica la Dashboard

Quando `rclone rcd` è in esecuzione, apri la dashboard nel browser.

### URL di accesso comuni

| Scenario | URL |
| --- | --- |
| Macchina locale | `http://127.0.0.1:5572` |
| Remoto via IP | `http://[your_server_ip]:5572` |
| Reverse proxy | `https://[your_domain]` |

### Cosa controllare dopo l’avvio

Dopo aver aperto la pagina, verifica:

- che l’interfaccia Yet Another Rclone Dashboard si carichi
- che i remoti configurati siano visibili
- che la navigazione file funzioni nella vista browser di Rclone
- che i pannelli di trasferimento e informazioni di sistema rispondano correttamente

Se la pagina non si carica, controlla prima l’output della console di Rclone. Errori di autenticazione, mismatch di origin e problemi di binding porta sono le cause più comuni.

## Raccomandazioni di Sicurezza

Eseguire una dashboard per il tuo cloud storage richiede impostazioni di sicurezza attente, specialmente se la esponi su internet.

### Pratiche di sicurezza consigliate

| Raccomandazione | Motivo |
| --- | --- |
| Usa `--rc-user` e `--rc-pass` per accesso remoto | Previene accessi non autorizzati |
| Preferisci HTTPS tramite reverse proxy | Protegge le credenziali in transito |
| Lega a `127.0.0.1` quando possibile | Riduce l’esposizione |
| Limita l’accesso firewall a `5572/tcp` | Riduce la superficie di attacco |
| Evita `--rc-no-auth` su reti pubbliche | Previene accessi aperti alla tua istanza Rclone |

:::danger Rischio Esposizione Pubblica
Un’istanza `rclone rcd` esposta e non protetta può permettere l’accesso ai remoti e file configurati. Se ti stai chiedendo “rclone è sicuro?”, la risposta dipende molto da quanto proteggi e autentichi il servizio.
:::

## Risoluzione Problemi

Se la dashboard non funziona come previsto, usa i controlli qui sotto.

### La pagina della dashboard non si apre

Cause possibili:

- `rclone rcd` non è in esecuzione
- la porta `5572` è bloccata da un firewall
- il servizio è legato a `127.0.0.1` ma stai tentando di connetterti da remoto

### L’interfaccia si carica ma le azioni falliscono

Cause possibili:

- `--rc-user` o `--rc-pass` non validi
- `--rc-allow-origin` errato
- configurazione remota Rclone mancante o corrotta

### La dashboard non si carica tramite reverse proxy

Cause possibili:

- proxy punta al backend sbagliato
- URL HTTPS non corrisponde a `--rc-allow-origin`
- header richiesti non passati correttamente

### Controlli utili

Linux:

```bash
ss -tulpn | grep 5572
```

Windows PowerShell:

```powershell
netstat -ano | findstr 5572
```

Testa l’endpoint locale:

```bash
curl http://127.0.0.1:5572
```

:::tip Controlla Prima i Log di Rclone
La maggior parte dei problemi di avvio e connessione si vede direttamente nel terminale o nei log del servizio dove gira `rclone rcd`. Controlla sempre quei log prima di modificare la configurazione.
:::

## Note Aggiuntive

Yet Another Rclone Dashboard è stato presentato su Self-Host Weekly il 10 aprile 2026 ed è ospitato pubblicamente su GitHub. Al momento della scrittura, il progetto è una soluzione focalizzata sul frontend per migliorare l’esperienza utente nella gestione di Rclone tramite una dashboard browser-based.

Alcuni metodi di distribuzione come Docker potrebbero essere possibili in ambienti personalizzati, ma non erano disponibili istruzioni Docker verificate nelle fonti fornite. Per questo motivo, questa guida copre solo i metodi di setup direttamente supportati dalle informazioni ufficiali del progetto.

## Conclusione

Congratulazioni, hai installato e configurato con successo Yet Another Rclone Dashboard su Linux o Windows. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂