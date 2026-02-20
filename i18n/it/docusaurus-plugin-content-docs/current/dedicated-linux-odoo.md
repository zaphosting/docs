---
id: dedicated-linux-odoo
title: "Configura Odoo su un Server Linux - Gestisci il Tuo ERP e CRM Open Source"
description: "Scopri come gestire e automatizzare i processi aziendali con la piattaforma integrata ERP e CRM di Odoo per un’operatività aziendale più fluida → Scopri di più ora"
sidebar_label: Installa Odoo
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Odoo è una piattaforma modulare open source che combina funzionalità di Enterprise Resource Planning (ERP) e Customer Relationship Management (CRM). Permette alle aziende di gestire e automatizzare processi come contabilità, inventario, gestione progetti e vendite da un unico sistema.

Grazie alle sue estensioni flessibili, Odoo può essere personalizzato in base alle esigenze specifiche e offre una soluzione integrata per gestire tutte le aree di un’azienda.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Stai pensando di ospitare questo servizio in autonomia? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.



## Prerequisiti

Prima di installare **Odoo**, assicurati che il tuo ambiente di hosting soddisfi i seguenti requisiti per garantire un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo      | Consigliato  |
| ---------- | ------------ | ------------ |
| CPU        | 1 vCPU Core | 4 vCPU Core |
| RAM        | 1 GB         | 4 GB         |
| Spazio disco | 15 GB        | 25 GB        |

Il software richiede che tutte le dipendenze necessarie siano installate e che venga eseguito su un sistema operativo supportato. Assicurati che il tuo server rispetti i seguenti requisiti prima di procedere con l’installazione:

**Dipendenze:** `Docker`

**Sistema Operativo:** Ultima versione di Ubuntu/Debian con supporto Docker 26+

Verifica che tutte le dipendenze siano installate e che la versione del sistema operativo sia corretta per evitare problemi di compatibilità durante l’installazione di Odoo.



## Preparazione

Prima di configurare **Odoo**, devi preparare il sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze richieste. Questi passaggi assicurano un ambiente stabile e aiutano a prevenire problemi durante o dopo l’installazione.


### Aggiorna il sistema
Per assicurarti che il sistema abbia le ultime patch di sicurezza e aggiornamenti software, esegui sempre prima un aggiornamento completo. Usa questo comando:

```
sudo apt update && sudo apt upgrade -y
```
Così il sistema sarà aggiornato con le ultime versioni prima di procedere.

### Installa le dipendenze
Una volta completato l’aggiornamento, puoi procedere con l’installazione delle dipendenze. Odoo verrà eseguito tramite una serie di container Docker, quindi è necessario installare Docker prima. Usa questi comandi:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Una guida completa all’installazione e all’uso di Docker è disponibile nella nostra guida [Docker](dedicated-linux-docker.md).



### Configura il tuo dominio

Di default, Odoo gira sul server sulle porte 80 (HTTP) e 443 (HTTPS). Configura un dominio con i record DNS che puntano al tuo server. Se il dominio è gestito da noi, puoi farlo facilmente tramite l’opzione [EasyDNS](domain-easydns.md).




## Installazione
Ora che hai soddisfatto tutti i requisiti e completato le preparazioni, puoi procedere con l’installazione di Odoo.

Quando lavori con più setup Docker, è buona pratica creare una struttura di cartelle chiara per isolare i progetti. Un approccio comune è creare una cartella *docker* nella home dell’utente, con una sottocartella dedicata per ogni dominio. Così puoi ospitare più progetti sullo stesso server senza conflitti di configurazione.

Per esempio, per preparare la struttura per il dominio `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

All’interno di questa cartella progetto, è consigliato creare sottocartelle che verranno montate come volumi dai container. Questi volumi permettono di condividere dati tra servizi o mantenerli persistenti. Un caso critico è la webroot condivisa, che nginx e certbot devono poter accedere per generare e rinnovare i certificati SSL. Puoi creare una struttura adatta così:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Così hai cartelle dedicate per la configurazione nginx, certificati SSL, file include e contenuti specifici di Odoo come config e addons.




### Crea il Docker Compose

Dentro la cartella del progetto docker crea il file compose.yml con `nano compose.yml`. Inserisci questo codice:

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```



### Firewall

Per far funzionare nginx e certbot devi aprire le porte TCP 80 (HTTP) e 443 (HTTPS) nel firewall. Queste porte sono essenziali perché certbot usa la porta 80 per la validazione HTTP, mentre la 443 serve per il traffico HTTPS criptato. Se usi UFW (Uncomplicated Firewall), aggiungi le regole con:

```
sudo ufw allow http
sudo ufw allow https
```

Controlla con `sudo ufw status` che le porte siano aperte. Assicurati che nessun’altra configurazione firewall blocchi queste porte, altrimenti la generazione del certificato o il traffico HTTPS potrebbero fallire.



### Configurazione Nginx

Inizia creando un file di configurazione per il tuo dominio nella cartella `nginx/conf`. Crea un nuovo file con il nome del dominio, per esempio:

```
nano nginx/conf/example.com.conf
```

Inserisci queste direttive base, sostituendo `example.com` con il tuo dominio reale:

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Questa configurazione permette a certbot di completare la sfida ACME e rilasciare certificati SSL validi. Inoltre, forza il redirect da HTTP a HTTPS.

Salvato il file, avvia i container necessari: database, Odoo e nginx con:

```
sudo docker compose up -d db odoo nginx
```

I container gireranno in background e nginx userà già la nuova configurazione, così certbot potrà generare i certificati nel passaggio successivo.


### Genera i certificati SSL

Esegui questo comando per creare i certificati SSL con certbot. Ricordati di sostituire `example.com` con il tuo dominio e `user@mail.com` con la tua email valida:

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Genera poi un file DH parameter dedicato per rafforzare la sicurezza dello scambio crittografico:

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Ora crea il file `ssl.conf` con `nano nginx/ssl/ssl.conf` e inserisci questo contenuto, sostituendo `example.com` con il tuo dominio:

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```



## Configurazione



### Configurazione Nginx

Modifica il file di configurazione nginx creato prima e sostituisci il contenuto con questa configurazione per servire il sito solo via HTTPS.

Ricordati di inserire il tuo dominio reale nella direttiva `server_name` e di specificare i percorsi corretti ai file di certificato nelle direttive `ssl_certificate` e `ssl_certificate_key`.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Include le impostazioni SSL di Mozilla
    include /etc/nginx/ssl/ssl.conf;

    # Percorsi certificati (assicurati che corrispondano ai volumi montati)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Header di sicurezza
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    # Gzip
    include /etc/nginx/inc/gzip.conf;

    # Proxy per Odoo
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # Timeout consigliati per richieste standard
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Cache per file statici
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Timeout estesi per long polling
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # Permette a Certbot di accedere alla URL di challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```



Dopo aver salvato, applica la nuova configurazione riavviando il container nginx:

```
sudo docker compose restart nginx
```

Il riavvio fa sì che nginx carichi la nuova configurazione e inizi subito a servire il sito con HTTPS. Se ci sono errori, controlla i log con `sudo docker compose logs nginx` per risolvere eventuali problemi. Quando il container gira senza errori, visita il sito per confermare che HTTPS funzioni correttamente.



### Opzioni di Configurazione Odoo

Per applicare impostazioni personalizzate, crea un file di configurazione dedicato per Odoo. Metti un nuovo file in `config/odoo.conf` e aggiungi le opzioni che vuoi.

In questo file puoi definire parametri utili: `list_db = False` nasconde la selezione del database nella pagina di login, `proxy_mode = True` dice a Odoo che è dietro un reverse proxy, e se vuoi usare addon personalizzati, puoi decommentare la riga `addons_path` e puntarla alla cartella addons creata prima. Esempio:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### Rimuovi il flag -i base

Il flag `-i base` deve essere rimosso dal file `compose.yml`, altrimenti ricrea il database ogni volta che ricrei il container odoo. Per rimuoverlo, apri il file con `nano compose.yml` e modifica il comando così:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Accesso al sito

Quando l’installazione e la configurazione sono complete e tutti i servizi sono attivi, puoi accedere in sicurezza al sito inserendo il tuo dominio nella barra degli indirizzi del browser.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Si caricherà la pagina iniziale della tua nuova installazione. Per il primo accesso, l’account di default è `admin` con password `admin`. Ti consigliamo vivamente di cambiare subito queste credenziali.



## Conclusione e risorse utili

Congratulazioni! Hai installato e configurato con successo Odoo sul tuo VPS/Server Dedicato. Ti consigliamo anche di dare un’occhiata a queste risorse, che possono aiutarti ulteriormente nella configurazione del server:

- [Odoo.com](https://odoo.com) - Sito ufficiale
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Documentazione ufficiale Odoo

Hai domande specifiche non trattate qui? Per qualsiasi dubbio o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂