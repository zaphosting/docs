---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Scopri come configurare Yet Another Rclone Dashboard, una moderna GUI e browser per rclone su Linux e Windows, usando rclone rcd e i file di rilascio da rclone GitHub -> Scopri di più ora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Yet Another Rclone Dashboard è una moderna dashboard web per `rclone rcd` che offre un’interfaccia grafica per esplorare file, visualizzare remoti e gestire trasferimenti. In questa guida imparerai cosa fa il software, cosa richiede e come eseguirlo su Linux o Windows usando metodi di deployment supportati.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, ti serve un’installazione funzionante di [Rclone](https://rclone.org/) perché Yet Another Rclone Dashboard è solo un frontend per il daemon di controllo remoto di Rclone.

### Requisiti

I seguenti requisiti si basano sulle informazioni disponibili del progetto e sulla bozza di setup.

| Requisito | Dettagli |
| --- | --- |
| Sistema operativo | Linux o Windows |
| Software richiesto | `rclone` |
| Versione Rclone consigliata | `v1.72.0` o successiva |
| Software opzionale | `Docker`, `Nginx` o `Caddy` a seconda del metodo di deployment |
| Porta predefinita | `5572/tcp` |
| Accesso a internet | Necessario se vuoi scaricare i release o usare il metodo web fetch |

### Da cosa dipende la dashboard

Yet Another Rclone Dashboard non sostituisce Rclone. Si connette invece a `rclone rcd`, che è la modalità *remote control daemon* di Rclone.

| Componente | Scopo |
| --- | --- |
| Yet Another Rclone Dashboard | Frontend web |
| `rclone rcd` | API backend e operazioni sui file |
| Remoti Rclone | Le tue connessioni cloud configurate come Google Drive |

:::info Rclone è obbligatorio
Non puoi usare questa dashboard da sola. Devi avere `rclone` installato e avviarlo in modalità daemon con l’interfaccia di controllo remoto abilitata.
:::

### Valori segnaposto usati in questa guida

Diversi comandi in questa guida usano segnaposto. Sostituiscili con i tuoi valori prima di eseguire i comandi.

| Segnaposto | Significato |
| --- | --- |
| `[your_user]` | Nome utente per l’autenticazione del controllo remoto Rclone |
| `[your_password]` | Password per l’autenticazione del controllo remoto Rclone |
| `[your_server_ip]` | Indirizzo IP pubblico o privato del tuo server |
| `[your_domain]` | Nome di dominio usato per l’accesso tramite reverse proxy |
| `[your_build_path]` | Percorso dei file estratti della dashboard |

## Metodi di deployment disponibili

Puoi eseguire Yet Another Rclone Dashboard in diversi modi a seconda di come vuoi accedervi.

| Metodo | Ideale per | Note |
| --- | --- | --- |
| `--rc-files` | Deployment manuali | Usa i file statici estratti del build |
| `--rc-web-gui` con `--rc-web-fetch-url` | Setup rapido | Permette a Rclone di scaricare l’ultima release della dashboard |
| Server web come Nginx o Caddy | Hosting personalizzato | Serve il frontend statico separatamente |
| Reverse proxy con autenticazione esterna | Setup avanzati | Utile per autenticazione centralizzata |

## Scarica la release della dashboard

Se vuoi usare il metodo manuale `--rc-files` o servire il frontend con il tuo server web, scarica prima l’archivio dell’ultima release dalla pagina GitHub del progetto.

Sorgente ufficiale progetto: [Yet Another Rclone Dashboard su GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Al momento dei dati di release citati, l’ultima versione è `v0.3.8` e include il file `yet-another-rclone-dashboard-v0.3.8.zip`.

### Esempio di download Linux

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Esempio di download Windows

Su Windows scarica il file `.zip` dalla pagina delle release GitHub ed estrailo in una cartella come:

```text
C:\yet-another-rclone-dashboard
```

:::note Informazioni sulla versione della release
La versione della release può cambiare nel tempo. Se è disponibile una versione più recente, usa il file di release attuale dalla pagina GitHub del progetto invece della versione d’esempio mostrata qui.
:::

## Avvia la dashboard con Rclone rc-files

Questo è il metodo più diretto se hai già scaricato ed estratto i file del frontend.

### Esempio Linux

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Esempio Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Esempio desktop locale

Se vuoi usare la dashboard solo localmente sullo stesso sistema, puoi legarla a `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution Non esporre Rclone senza autenticazione
Usa `--rc-no-auth` solo per test locali su `127.0.0.1`. Se leghi Rclone a `0.0.0.0`, devi proteggerlo con autenticazione o un reverse proxy configurato correttamente.
:::

## Avvia la dashboard con Rclone web fetch

Rclone può scaricare automaticamente una web GUI, semplificando il deployment se supportato dal tuo setup.

### Esempio Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Esempio Windows

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Spiegazione delle flag principali

| Flag | Scopo |
| --- | --- |
| `--rc-web-gui` | Abilita il supporto web GUI in Rclone |
| `--rc-web-fetch-url` | Indica a Rclone i metadati dell’ultima release |
| `--rc-user` | Imposta il nome utente per il login |
| `--rc-pass` | Imposta la password per il login |
| `--rc-addr` | Definisce indirizzo IP e porta su cui ascoltare |
| `--rc-allow-origin` | Permette richieste browser dall’URL specificato |
| `--rc-web-gui-no-open-browser` | Impedisce l’apertura automatica del browser |

:::tip Origin deve corrispondere esattamente
Imposta `--rc-allow-origin` con l’URL esatto che usi nel browser, incluso il protocollo corretto come `http://` o `https://`. Questo è particolarmente importante con un reverse proxy.
:::

## Servi la dashboard con un server web

Poiché Yet Another Rclone Dashboard è un’app web statica, puoi anche ospitarla con un server web standard come Nginx o Caddy.

Questo approccio è utile se vuoi servire il frontend su una porta o dominio separato mentre Rclone gira in background.

### Esempio Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Esempio Caddy

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### Cosa tenere a mente

Se servi il frontend separatamente, Rclone deve comunque essere in esecuzione con impostazioni `rc` compatibili in background. Devi anche assicurarti che le richieste browser siano autorizzate dall’URL del frontend.

| Impostazione | Esempio |
| --- | --- |
| URL frontend | `https://[your_domain]` |
| Indirizzo bind Rclone | `127.0.0.1:5572` o `0.0.0.0:5572` |
| Origin consentito | `https://[your_domain]` |

## Setup avanzato con autenticazione reverse proxy

Per ambienti avanzati, puoi mettere la dashboard dietro un reverse proxy e usare un gateway di autenticazione esterno. La bozza fornita fa riferimento all’opzione `--rc-user-from-header` di Rclone per questo scopo.

### Esempio Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
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

:::info Setup avanzato di autenticazione
Questo metodo dipende dal tuo reverse proxy e dallo stack di autenticazione. La configurazione esatta per strumenti come `caddy-security` esula da questa guida, ma l’esempio mostra come la dashboard può ricevere un header utente autenticato.
:::

## Configura accesso e sicurezza

Prima di iniziare a usare la dashboard, rivedi le impostazioni di accesso più importanti.

### Valori di configurazione consigliati

| Opzione | Raccomandazione |
| --- | --- |
| `--rc-user` | Imposta un nome utente dedicato come `zaphosting` |
| `--rc-pass` | Usa una password forte |
| `--rc-addr` | Usa `127.0.0.1:5572` dietro un reverse proxy quando possibile |
| `--rc-allow-origin` | Corrispondi esattamente all’URL usato nel browser |
| Firewall | Apri `5572/tcp` solo se serve accesso diretto |

### Best practice di sicurezza

- Usa autenticazione se esponi il servizio in rete
- Preferisci un reverse proxy con HTTPS per accesso pubblico
- Limita l’accesso diretto a `5572/tcp` quando possibile
- Mantieni Rclone aggiornato se lo usi per accesso cloud come `rclone google drive`

:::danger Rischio esposizione pubblica
L’accesso remoto di controllo Rclone può fornire potenti capacità di gestione file e remoti. Non esporlo pubblicamente senza autenticazione e restrizioni di rete adeguate.
:::

## Avvia e verifica la dashboard

Una volta configurato il setup scelto, avvia `rclone rcd` e apri la dashboard nel browser.

### Esempi di accesso

| Scenario | URL |
| --- | --- |
| Accesso locale | `http://127.0.0.1:5572` |
| Accesso diretto server | `http://[your_server_ip]:5572` |
| Accesso tramite reverse proxy | `https://[your_domain]` |

### Cosa dovresti vedere

Se tutto è configurato correttamente, l’interfaccia di Yet Another Rclone Dashboard dovrebbe caricarsi e permetterti di:

- connetterti al daemon Rclone
- ispezionare i remoti configurati
- esplorare i file
- visualizzare i trasferimenti
- controllare impostazioni e informazioni di sistema

Se la pagina non si carica, verifica quanto segue:

| Controllo | Perché è importante |
| --- | --- |
| Processo Rclone attivo | La dashboard ha bisogno del daemon backend |
| Porta `5572` raggiungibile | Necessaria per accesso diretto |
| `--rc-allow-origin` corretto | Previene problemi di accesso browser |
| Username e password corretti | Necessari per accesso autenticato |
| Header reverse proxy corretti | Importante per setup di autenticazione avanzata |

## Risoluzione problemi

### Il browser non si connette

Se il browser non apre la dashboard, verifica che Rclone stia ascoltando sull’indirizzo e porta attesi.

Su Linux puoi controllare le porte in ascolto con:

```bash
ss -tulpn | grep 5572
```

Su Windows puoi usare:

```powershell
netstat -ano | findstr 5572
```

### Fallimento autenticazione

Se il login non funziona:

- conferma i valori usati per `--rc-user` e `--rc-pass`
- assicurati che il reverse proxy non stia rimuovendo header necessari
- evita di usare `--rc-no-auth` su interfacce remote o pubbliche

### Frontend carica ma le azioni falliscono

Di solito indica un problema di origine o comunicazione backend.

Controlla attentamente questi valori:

- `--rc-allow-origin`
- `--rc-addr`
- indirizzo target del reverse proxy
- URL usato nel browser per accedere alla dashboard

:::tip Usa i log per una diagnosi più veloce
Se la dashboard non si comporta come previsto, controlla prima l’output console di Rclone. Problemi di autenticazione, binding e origin sono spesso visibili subito lì.
:::

## Riferimenti software

### Dettagli progetto

| Voce | Valore |
| --- | --- |
| Nome | Yet Another Rclone Dashboard |
| Categoria | Frontend |
| Sorgente | [Repository GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Release di riferimento | `v0.3.8` |
| Asset release | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Backend consigliato | `rclone v1.72.0` o successivo |

### Funzionalità note dalla pagina progetto

Basandosi sulle informazioni del repository citato, la dashboard supporta le seguenti aree:

- profili di connessione multipli
- informazioni di sistema e riepilogo stato Rclone
- ispezione remoti
- importazione ed esportazione configurazione Rclone
- esplorazione e filtro file
- viste relative ai trasferimenti

:::note Disponibilità funzionalità
Il comportamento delle funzionalità può cambiare tra le release. Se ti servono dettagli precisi per una versione più recente, consulta il changelog e le note di rilascio upstream su GitHub.
:::

## Conclusione

Congratulazioni, hai configurato con successo Yet Another Rclone Dashboard su Linux o Windows. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂