---
id: dedicated-linux-proxy
title: "Dedicated Server: Configura un Reverse Proxy con nginx su Linux"
description: "Scopri come configurare un reverse proxy sicuro ed efficiente per siti web e server di gioco per migliorare accesso e protezione → Scopri di più ora"
sidebar_label: Reverse Proxy
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Un reverse proxy è un server che funge da intermediario tra gli utenti finali e un altro server. Siti web e server di gioco sono tra i motivi più comuni per implementare un reverse proxy, ognuno con vantaggi come sicurezza, facilità di accesso e protezione.

In questa guida esploreremo come configurare un reverse proxy generico per siti web e uno specifico per server di gioco.

## Preparazione

Per configurare un reverse proxy ti serve un **Server Linux** che ospiterà il proxy. In questo esempio useremo Ubuntu come distro Linux, ma i passaggi sono simili per la maggior parte delle distribuzioni Linux.

:::tip Specifiche VPS Consigliate
Per un reverse proxy dedicato a server di gioco, consigliamo vivamente di scegliere velocità di rete elevate, soprattutto se il server ha molti giocatori. Questo perché il VPS trasmetterà TCP/UDP raw direttamente tra client (giocatore) e server di gioco. Per un proxy web invece, un server con specifiche base e pochi upgrade è sufficiente. :)
:::

Ti consigliamo di configurare il proxy con un **Dominio** di tua proprietà. Per ogni sottodominio che vuoi usare, crea un record DNS `A` (es. `zapdocs.example.com`) che punti all’indirizzo IP del tuo __Linux VPS__. Gli utenti useranno questo per accedere al sito o server di gioco.

### Accesso al VPS

Con il VPS Linux pronto, devi connetterti. Usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md) per scoprire come fare.

### Installazione di Nginx

Userai Nginx per ospitare il reverse proxy, è un web server open-source molto performante e popolare.

Dopo aver effettuato l’accesso al VPS, installa Nginx con questo comando:

```
sudo apt install nginx
```

Una volta installato, devi configurare il firewall per permettere l’accesso da internet. Per questa guida useremo il **Firewall UFW**, dato che Nginx si registra come app e rende facile la configurazione. Puoi approfondire il firewall UFW nella nostra guida [Consigli di Sicurezza Linux](vserver-linux-security-tips.md).

:::note
Se usi altri firewall (es. Iptables), assicurati di aprire le porte 80 e 443 per Nginx.
:::

Controlla i profili di Nginx con `sudo ufw app list`. Qui selezioneremo **Nginx Full**, che apre sia HTTP (per test) che HTTPS (per produzione).

```
sudo ufw allow 'Nginx Full'
```

Ora prova ad accedere alla pagina via browser per verificare che funzioni. Se vedi la pagina di test, puoi procedere.

```
http://[tuo_indirizzo_ip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Per Siti Web

Un reverse proxy per siti web è super utile per vari motivi, come reindirizzare a risorse interne (es. un’istanza Vaultwarden senza dover specificare la porta nell’URL) o inoltrare l’utente a contenuti esterni, utile per bilanciamento del carico e protezione.

Uno dei vantaggi più grandi è che il server può gestire richieste da più domini/sorgenti, a differenza di un singolo web server che gira su porta 80/443.

### Configurazione Nginx

Inizia creando un file di configurazione nella cartella di Nginx per il dominio scelto, di solito un sottodominio come `zapdocs.example.com` nel nostro esempio.

:::important
Assicurati di aver creato un record `A` che punti all’IP del proxy prima di procedere. Senza questo, il dominio e i passaggi successivi non funzioneranno.
:::

Accedi alla cartella dei server block con:

```
cd /etc/nginx/sites-available/
```

Crea un nuovo file di configurazione, ti consigliamo di usare il dominio come nome file per riconoscerlo facilmente (es. zapdocs.example.com). Sostituisci `[your_filename]` con il nome che preferisci.

```
sudo nano [your_filename]
```

Si aprirà l’editor nano. Copia questo template e incollalo, sostituendo `[your_domain]` con il dominio da proxy e `[your_target_server]` con il server di destinazione.

```
upstream targetServer {
    # Inserisci il server di destinazione, può essere:
    # Redirect interno "localhost" (es. 127.0.0.1:9090)
    # Server esterno (es. 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Dominio da gestire (es. zapdocs.example.com)
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

Adatta i valori, poi salva e chiudi nano con `CTRL + X`, conferma con `Y` e premi `ENTER`.

Ora attiva il server block creando un symlink nella cartella attiva:

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Controlla la sintassi con:

```
sudo nginx -t
```

Se tutto ok, riavvia Nginx per applicare la configurazione:

```
systemctl reload nginx.service
```

Ora prova ad accedere al dominio usato per il reverse proxy dal browser. Se tutto funziona, vedrai il contenuto del server target. Se ci sono problemi, controlla i log con:

```
journalctl -f -u nginx.service
```

## Per Server di Gioco

Un reverse proxy per server di gioco è utile per aggiungere sicurezza e affidabilità, migliorando la mitigazione e limitando l’accesso al server principale.

:::tip
La maggior parte dei server dedicati funziona bene con un proxy TCP/UDP raw come questo. Alcuni giochi, tipo BeamMP, potrebbero non funzionare bene con VPN o proxy, quindi testa caso per caso.
:::

### Configurazione Nginx

Serve il modulo **Nginx Stream**, non incluso nella build base di Nginx.

#### Installa il modulo stream di Nginx

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Configurazione stream di Nginx

Aggiungerai un blocco `stream` nel file principale `nginx.conf` dove definirai il server upstream e la porta su cui il proxy ascolterà.

Apri il file con:

```
sudo nano /etc/nginx/nginx.conf
```

Incolla questo template, sostituendo `[your_target_server]` con il server di destinazione e porta (es. `:30120` per FiveM). Sostituisci `[your_port_listener]` con la porta su cui vuoi far ascoltare il proxy.

```
stream {
    upstream targetServer {
        # Inserisci il server di destinazione (es. 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Porta su cui ascoltare e fare da ponte (es. 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

Nginx ascolterà su quella porta e inoltrerà tutto al server di destinazione.

Salva e chiudi nano con `CTRL + X`, conferma con `Y` e premi `ENTER`.

Controlla la sintassi:

```
sudo nginx -t
```

Se ok, riavvia Nginx:

```
systemctl reload nginx.service
```

Ora prova a connetterti al server di gioco tramite il dominio proxy. Se funziona, ti connetterai al server impostato come `targetServer`. Se ci sono problemi, controlla i log con:

```
journalctl -f -u nginx.service
```

## Certificato SSL

Ora che il reverse proxy è configurato, ti consigliamo di aggiungere un certificato SSL ai domini usati per garantire una trasmissione sicura via HTTPS. Dai un’occhiata alla nostra guida [Installare Certbot](dedicated-linux-certbot.md) che spiega come richiedere e rinnovare automaticamente i certificati SSL per i tuoi domini.

## Conclusione

Complimenti, hai configurato con successo un reverse proxy per un sito web o un server di gioco (o entrambi :), ottenendo miglioramenti in sicurezza, affidabilità e performance. Per domande o supporto, il nostro team è sempre disponibile per aiutarti! 🙂