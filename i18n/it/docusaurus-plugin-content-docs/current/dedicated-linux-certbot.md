---
id: dedicated-linux-certbot
title: "Dedicated Server: Configura Certbot su Linux"
description: "Scopri come mettere in sicurezza il tuo sito web con certificati SSL gratuiti usando Certbot e Let's Encrypt per una trasmissione dati sicura → Scopri di più ora"
sidebar_label: Installa Certbot
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I certificati SSL sono fondamentali su internet, garantendo che i dati vengano trasmessi in sicurezza tra client e host. In questa guida vedremo come configurare lo strumento open-source [**Certbot**](https://certbot.eff.org/) per richiedere certificati SSL gratuiti dall’autorità di certificazione no-profit **Let's Encrypt**.

## Preparazione

Per usare Certbot ti serve un server Linux e un **Dominio** di tua proprietà. Devi poter accedere alle impostazioni DNS del dominio e **devi** creare un record DNS `A` che punti all’indirizzo IP del tuo __server Linux__ per ogni dominio principale o sottodominio che vuoi usare.

Certbot ha anche plugin aggiuntivi che ti permettono di configurare il certificato con un clic per diversi web server come Nginx o Apache. Ti consigliamo Nginx, un web server open-source molto performante e popolare. Dai un’occhiata alla nostra guida [Linux reverse proxy](dedicated-linux-proxy.md) per configurarlo.

## Installazione

Inizia installando il pacchetto open-source [**Certbot**](https://certbot.eff.org/), che userai per richiedere certificati SSL gratuiti da **Let's Encrypt**.

```
sudo apt install certbot
```

Ora che Certbot è installato, puoi procedere a richiedere i certificati per il tuo/i tuoi dominio/i. Let's Encrypt e Certbot offrono diverse sfide ACME per verificare la proprietà del dominio.

Ti consigliamo di usare il metodo predefinito **HTTP-01** perché permette il rinnovo automatico. Se però hai problemi, puoi provare il metodo **DNS-01** come alternativa, che è manuale e non supporta il rinnovo automatico perché si basa sulla verifica tramite record DNS **TXT**.

:::tip Usa i plugin per web server
Se usi un web server come Nginx, Apache o un tuo server personalizzato, ti consigliamo di passare alla sezione **Web Server Plugins** qui sotto, dove ti mostriamo come sfruttare i plugin Certbot per un’installazione “one-click” e per richiedere certificati senza dover spegnere il web server.
:::

### Sfida HTTP-01

Con Certbot installato, puoi richiedere i certificati per il tuo/i tuoi dominio/i. In questo esempio useremo la modalità standalone, cioè Certbot avvierà un web server temporaneo per eseguire le operazioni necessarie. Questo significa che devi aprire la porta 80 nelle regole firewall e non avere altri web server o servizi attivi sulla porta 80, così il server temporaneo può partire e la sfida HTTP essere completata (da qui il nome `HTTP` nella sfida).

Nel comando qui sotto userai il parametro `--standalone` per dire a Certbot di usare il server temporaneo.

```
# Per domini principali
certbot certonly --standalone -d [tuo_dominio_principale] -d www.[tuo_dominio_principale]

# Per sottodomini
certbot certonly --standalone -d [tuo_sottodominio]

# Setup interattivo
certbot certonly --standalone
```

Dopo aver lanciato il comando, potresti dover completare un setup interattivo la prima volta, inserendo un indirizzo email per comunicazioni sul certificato, una mailing list opzionale e accettando termini e condizioni.

Certbot genererà una sfida ACME e la ospiterà tramite il web server temporaneo. I server di Let's Encrypt proveranno a recuperarla dal tuo server e, se tutto va a buon fine, i certificati saranno creati e salvati in `/etc/letsencrypt/live/[tuo_dominio]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Ora puoi usare i certificati SSL dove ti serve, semplicemente indicando il percorso locale dei certificati.

### Record DNS TXT

Se hai problemi con la verifica tramite il metodo **HTTP-01**, puoi provare il metodo **DNS-01** che richiede di creare un record DNS **TXT** con un valore fornito da Let's Encrypt.

Come detto, questo metodo **non** supporta il rinnovo automatico a meno che tu non configuri un’infrastruttura tua per gestirlo. Perciò ti consigliamo di usare il metodo **HTTP-01** quando possibile.

Nel comando qui sotto userai il parametro `--preferred-challenges` per dire a Certbot di usare il metodo `DNS-01`.

```
# Per domini principali
certbot certonly --preferred-challenges dns-01 -d [tuo_dominio_principale] -d www.[tuo_dominio_principale] --manual -m [tuo_email]

# Per sottodomini
certbot certonly --preferred-challenges dns-01 -d [tuo_sottodominio] --manual -m [tuo_email]

# Setup interattivo
certbot certonly --preferred-challenges dns-01
```

Dopo aver lanciato il comando, potresti dover completare un setup interattivo la prima volta, inserendo un indirizzo email per comunicazioni sul certificato, una mailing list opzionale e accettando termini e condizioni.

Certbot ti darà istruzioni per creare un record DNS **TXT** con un valore specifico da usare. Il nome del record sarà tipicamente `_acme-challenge.` seguito dal tuo dominio (es. `_acme-challenge.zapdocs.example.com`) e il valore da impostare sarà mostrato in console.

Dopo aver creato il record, premi invio per continuare. Se tutto è corretto e propagato, i certificati saranno creati e salvati in `/etc/letsencrypt/live/[tuo_dominio]`.

:::note
Abbi pazienza perché le modifiche DNS possono impiegare un po’ a propagarsi. Di solito avviene in pochi minuti, ma in rari casi può richiedere più tempo.
:::

Ora puoi usare i certificati SSL dove ti serve, semplicemente indicando il percorso locale dei certificati.

## Plugin per Web Server

Certbot ha diversi plugin per web server che rendono ancora più semplice gestire i certificati, perché modificano automaticamente i blocchi server necessari. Per usare un plugin, basta aggiungere il parametro giusto al comando `certbot`.

Entrambi i metodi usano la sfida **HTTP-01** e funzionano praticamente allo stesso modo. Quando usi un plugin, Certbot cerca il blocco server che include il dominio richiesto come parametro `server_name`. Una volta trovato, Certbot genera la sfida ACME e aggiunge un blocco temporaneo `location /.well-known/acme-challenge/...` nella configurazione del server.

I server di Let's Encrypt proveranno a recuperare la sfida dal tuo server e, se va a buon fine, il certificato sarà generato e la configurazione del blocco server sarà aggiornata automaticamente per usare HTTPS (porta 443) e i percorsi ai certificati appena creati.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Plugin Nginx

Prima di usare il plugin, assicurati che sia installato.

```
sudo apt install python3-certbot-nginx
```

Per usare il plugin Nginx, aggiungi il parametro `--nginx` al comando come segue.

```
# Per domini principali
certbot --nginx -d [tuo_dominio_principale] -d www.[tuo_dominio_principale]

# Per sottodomini
certbot --nginx -d [tuo_sottodominio]

# Setup interattivo
certbot --nginx
```

:::tip
Se vuoi disabilitare le modifiche automatiche “one-click” ai blocchi server da parte di Certbot, puoi aggiungere il parametro `certonly` al comando, tipo `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Plugin Apache

Prima di usare il plugin, assicurati che sia installato.

```
sudo apt install python3-certbot-apache
```

Per usare il plugin Apache, aggiungi il parametro `--apache` al comando come segue.

```
# Per domini principali
certbot --apache -d [tuo_dominio_principale] -d www.[tuo_dominio_principale]

# Per sottodomini
certbot --apache -d [tuo_sottodominio]

# Setup interattivo
certbot --apache
```

:::tip
Se vuoi disabilitare le modifiche automatiche “one-click” ai blocchi server da parte di Certbot, puoi aggiungere il parametro `certonly` al comando, tipo `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Plugin Webroot

Se usi un web server locale che non è uno dei software tradizionali, puoi usare il metodo webroot per usare il tuo server senza doverlo fermare.

Per usare il plugin Webroot, aggiungi il parametro `--webroot` al comando. Devi anche specificare `-w [percorso_webserver]` (cioè `--webroot-path`), che è il percorso alla directory principale del tuo web server.

```
# Per domini principali
certbot --webroot -w [percorso_webserver] -d [tuo_dominio_principale] -d www.[tuo_dominio_principale]

# Per sottodomini
certbot --webroot -w [percorso_webserver] -d [tuo_sottodominio]

# Setup interattivo
certbot --webroot -w [percorso_webserver]
```

:::tip
Una delle posizioni webroot più comuni è `/var/www/html`. Puoi usare questo metodo anche con web server come Nginx o Apache se vuoi usare il server senza modifiche automatiche ai blocchi server come fanno i plugin nativi.
:::

</TabItem>
</Tabs>

## Rinnovo Automatico

Di solito Certbot configura automaticamente il rinnovo dei certificati tramite cronjob e/o timer systemd. Puoi verificarlo con questo comando di test usando `--dry-run`:

```
certbot renew --dry-run
```

:::tip
Come detto, il metodo **DNS-01** non supporta il rinnovo automatico tramite Certbot, a meno che tu non configuri un’infrastruttura tua. Perciò ti consigliamo di usare il metodo **HTTP-01**.
:::

Se tutto è a posto, il test sarà positivo. Se vuoi vedere o modificare il rinnovo automatico, i comandi si trovano in `/etc/crontab/`, `/etc/cron.*/*` o tramite `systemctl list-timers`.

### Configurazione manuale con Cronjob

Se per qualche motivo il rinnovo automatico non è configurato, puoi aggiungerlo tu con un cronjob. Apri il crontab con `crontab -e`. Se è la prima volta, ti chiederà di scegliere un editor: scegli la prima opzione, che dovrebbe essere `/bin/nano`.

Con il file aperto in nano, aggiungi questa riga per far partire il rinnovo ogni giorno alle 6 del mattino ora locale:

```
0 6 * * * certbot renew
```

Salva e chiudi nano con `CTRL + X`, poi `Y` per confermare e infine `ENTER`.

## Conclusione

Hai configurato con successo Certbot per il tuo/i tuoi dominio/i usando vari metodi come standalone, webroot o uno dei plugin, garantendo al tuo sito una trasmissione dati sicura via HTTPS. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂