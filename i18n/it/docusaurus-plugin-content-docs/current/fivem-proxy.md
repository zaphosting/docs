---
id: fivem-proxy
title: "FiveM: Configura un Reverse Proxy"
description: "Scopri come migliorare la sicurezza e l’affidabilità del tuo server FiveM con un reverse proxy per una migliore protezione DDoS e performance → Scopri di più ora"
sidebar_label: Reverse Proxy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Un reverse proxy è un server che funge da intermediario tra gli utenti finali (i tuoi giocatori) e il tuo server FiveM. Questo è particolarmente utile per server soggetti a frequenti attacchi DDoS, perché aggiunge un livello extra di sicurezza e affidabilità riducendo la visibilità dell’host principale e offrendo mitigazioni aggiuntive.

In questa guida vedremo come configurare un reverse proxy per il tuo server FiveM. Ci sono due tipi di reverse proxy in questo scenario: il connect proxy, usato per l’endpoint di connessione, e il server proxy, usato per l’endpoint server dove avviene il proxying raw TCP/UDP. Entrambi possono essere configurati indipendentemente.

<InlineVoucher />

## Preparazione

Per configurare un reverse proxy ti serve un **server Linux** (ad esempio un VPS) che ospiterà il proxy. In questo esempio useremo Ubuntu come distro Linux, ma i passaggi di installazione sono simili per la maggior parte delle distribuzioni Linux.

:::tip Specifiche VPS Consigliate
Consigliamo vivamente di scegliere una VPS con velocità di rete elevate se vuoi configurare un server proxy, soprattutto se il tuo server ha molti giocatori. Questo perché la VPS farà streaming raw TCP/UDP direttamente tra il client (giocatore) e il server FiveM. Altrimenti, un server con specifiche base e pochi upgrade è sufficiente. :)
:::

Ti consigliamo anche di configurare il proxy con un **Dominio** di tua proprietà. Crea un record `A` sul dominio che vuoi usare (ad esempio `zapdocs.example.com`), puntandolo all’indirizzo IP del tuo __Linux VPS__. Questo sarà l’indirizzo che i giocatori useranno per connettersi al server, anche se tecnicamente potresti usare l’IP del proxy stesso.

### Accesso al VPS

Con il tuo VPS Linux pronto, devi connetterti ad esso. Usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md) per scoprire come fare.

### Installazione di Nginx

Useremo Nginx per ospitare il reverse proxy, perché è un web server open-source molto performante e popolare.

Dopo aver effettuato l’accesso al VPS, esegui questo comando per installare Nginx.

```
sudo apt install nginx
```

Una volta installato, devi configurare il firewall per permettere l’accesso al servizio da internet. Per questa guida useremo il **firewall UFW**, dato che Nginx si registra come app, rendendo facile la configurazione. Puoi approfondire UFW nella nostra guida [Consigli di Sicurezza Linux](vserver-linux-security-tips.md).

:::note
Se usi altri firewall (tipo Iptables), assicurati di aprire le porte 80 e 443 per Nginx.
:::

Controlla i profili di Nginx con `sudo ufw app list`. Qui selezioneremo l’opzione **Nginx Full**, che apre sia HTTP per test che HTTPS per produzione.

```
sudo ufw allow 'Nginx Full'
```

Ora prova ad aprire la pagina via browser per verificare che Nginx funzioni correttamente. Se vedi la pagina di test, puoi procedere.

```
http://[tuo_indirizzo_ip_server]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Connect Proxy

Il connect proxy serve a fare da proxy per l’endpoint di connessione del tuo server FiveM. In pratica, il proxy riceve le richieste di connessione e le inoltra al server FiveM principale. Questo aiuta a nascondere l’IP reale del server FiveM dalla lista server, riducendo la visibilità.

### Configurazione Nginx

Inizia creando un file di configurazione in Nginx per il dominio scelto in precedenza. Qui useremo `zapdocs.example.com` come esempio.

Crea il file con questo comando, sostituendo `[your_domain]` col tuo dominio.

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

Copia questo template dentro l’editor e personalizzalo con i tuoi dati.

```
upstream backend {
    # IP del server FiveM
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # Es: zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # Necessario per passare correttamente gli header di autenticazione
        proxy_pass_request_headers on;
        # Necessario per non chiudere subito la connessione
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # Blocco extra per proxy con caching
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

Salva e chiudi nano con `CTRL + X`, poi `Y` per confermare e infine `ENTER`.

Ora attiva il file creando un symlink nella cartella dei siti abilitati.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Controlla la sintassi con `sudo nginx -t`. Se tutto è ok, riavvia Nginx per applicare la configurazione.

```
systemctl reload nginx.service
```

Ora prova ad accedere al dominio usato per il reverse proxy dal browser. Se funziona, vedrai il contenuto impostato come parametro `targetServer`. Se ci sono problemi, controlla i log con `journalctl -f -u nginx.service` per debug.

### Configurazione FiveM

Con il proxy configurato, modifica il file `server.cfg` del tuo server FiveM.

Aggiungi queste righe, sostituendo i valori con i tuoi.

```
# Impedisce che la lista server mostri l’IP reale del server
set sv_forceIndirectListing true

# Fa sì che la lista server usi il tuo dominio invece dell’IP di default (es: zapdocs.example.com)
set sv_listingHostOverride "[your_domain]"

# Lista di reti IPv4 in CIDR per permettere 'X-Real-IP' e bypassare il rate limiter
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# Endpoint reale del server o uno o più proxy endpoint server
set sv_endpoints "[your_fivem_serverip]:30120"
```

Salva e riavvia il server. Al prossimo avvio, il dominio risolverà al tuo server FiveM e potrà essere usato per connettersi.

Puoi verificare che funzioni provando ad aprire: `https://[your_domain]/info.json`. Se si carica, il connect proxy è attivo.

## Server Proxy

Il server proxy fa da proxy per l’endpoint server del tuo FiveM, proxyando direttamente gli stream raw TCP/UDP.

### Configurazione Nginx

Per questo userai il modulo **stream** di Nginx. Apri il file `nginx.conf` con nano.

```
sudo nano /etc/nginx/nginx.conf
```

Copia questo blocco nel root scope, sostituendo i valori con i tuoi.

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

Salva e chiudi nano (`CTRL + X`, `Y`, `ENTER`).

Controlla la sintassi con `sudo nginx -t`. Se tutto ok, riavvia Nginx.

```
systemctl reload nginx.service
```

Ora prova a connetterti al server di gioco tramite il dominio proxy. Se funziona, ti connetterai al server impostato come `targetServer`. Se ci sono problemi, controlla i log con `journalctl -f -u nginx.service`.

### Configurazione FiveM

Modifica il file `server.cfg` del tuo server FiveM.

:::tip
Se hai già configurato `set sv_endpoints` per il Connect Proxy, puoi saltare questo passaggio.
:::

Aggiungi questa riga, sostituendo con il tuo IP.

```
# Endpoint reale del server o uno o più proxy endpoint server
set sv_endpoints "[your_fivem_serverip]:30120"
```

Salva e riavvia il server. Al prossimo avvio, gli stream raw TCP/UDP passeranno attraverso il reverse proxy.

Puoi verificare controllando gli IP dei giocatori: dovrebbero essere tutti l’IP del proxy con porte random assegnate.

## Certificato SSL

Ora che il reverse proxy FiveM è configurato, ti consigliamo di aggiungere un certificato SSL ai tuoi domini per garantire che i dati viaggino in modo sicuro via HTTPS.

Dai un’occhiata alla nostra guida [Installare Certbot](dedicated-linux-certbot.md), che spiega come richiedere e rinnovare automaticamente i certificati SSL per i tuoi domini.

## Conclusione

Complimenti, hai configurato con successo un reverse proxy per il tuo server FiveM, migliorando sicurezza, affidabilità e performance. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />