---
id: vserver-linux-fivem-txAdmin-cloudflare-tunnel
title: "VPS: Configurare Cloudflare Tunnel per txAdmin"
description: "Scopri come configurare un tunnel Cloudflare per txAdmin per una sicurezza extra → Scopri di più ora"
sidebar_label: Cloudflare Tunnel per txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Se vuoi aggiungere un livello extra di sicurezza oltre alla protezione DDoS di ZAP-Hosting, puoi proteggere ulteriormente la tua istanza txAdmin usando un Cloudflare Tunnel. Questa configurazione fa sì che l’interfaccia web di txAdmin non sia più esposta tramite l’IP pubblico del server, ma accessibile in modo sicuro tramite il tuo dominio personale. Qualsiasi attacco diretto alla porta di txAdmin viene filtrato da Cloudflare, mentre puoi bloccare completamente la porta locale senza perdere l’accesso.

<InlineVoucher />

## Prerequisiti

Per usare un Cloudflare Tunnel su Linux ti serve un VPS Linux, un’installazione funzionante di txAdmin, la porta di txAdmin e un dominio già collegato al tuo account Cloudflare. Se il tuo dominio non è ancora collegato a Cloudflare, segui prima la nostra guida [Cloudflare Setup](domain-cloudflare-setup.md).

Cloudflare Tunnel funziona creando una connessione crittografata in uscita dal tuo server verso Cloudflare, così non devi tenere porte pubbliche aperte per txAdmin.


## Configurazione Cloudflare

Prima di installare cloudflared sul tuo vServer Linux, crea e configura il tunnel direttamente nella dashboard di Cloudflare.

Accedi al tuo account Cloudflare e vai nella sezione Zero Trust. Qui puoi creare un nuovo tunnel che poi inoltrerà il traffico verso l’interfaccia txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Installazione Cloudflare Tunnel

Cloudflare mette a disposizione un piccolo tool chiamato cloudflared. Installare cloudflared su Linux è super semplice. Prima scarica e avvia l’installer per Linux.

![img](https://screensaver01.zap-hosting.com/index.php/s/93TFH8xfxEEDobd/preview)

```
# Aggiungi la chiave gpg di cloudflare
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null

# Aggiungi questo repo ai tuoi repository apt
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# installa cloudflared
sudo apt-get update && sudo apt-get install cloudflared
```

Quando l’installazione è finita, esegui il comando fornito:

```
cloudflared.exe service install eyJhIjoiMj...
```

Dopo aver eseguito i comandi, il tuo server si collegherà a Cloudflare tramite il tunnel. Se la configurazione va a buon fine, lo stato nella sezione Connectors cambierà in **Connected**, confermando che il tunnel è attivo e funzionante.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Configura Cloudflare Tunnel

Ora configura le impostazioni di Route Traffic. Crea una nuova voce per un sottodominio a tua scelta. In questo esempio si usa il sottodominio `txAdmin`, che poi servirà per accedere all’interfaccia txAdmin.

Seleziona il dominio che vuoi usare, poi imposta il tipo di servizio su **HTTP** e inserisci **localhost:porta** come URL. Sostituisci porta con quella definita per la tua istanza txAdmin. In questo esempio useremo la porta 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Consiglio di Sicurezza
Invece di usare la porta di default di txAdmin **40120**, è consigliato usare una porta diversa per aumentare la sicurezza.
:::



## Configura il Firewall Linux

Per evitare che la porta sia raggiungibile fuori dal tunnel, configura il firewall Linux (iptables) in modo che la porta accetti connessioni solo da localhost. Limita il campo indirizzo remoto della regola a 127.0.0.1. Così tutto il traffico deve partire dal sistema locale e qualsiasi accesso esterno viene bloccato, garantendo che il servizio dietro cloudflared non sia raggiungibile dalla rete esterna al tunnel.

```
sudo iptables -A INPUT -p tcp --dport 40500 ! -s 127.0.0.1 -j DROP
```

Con questa configurazione, ogni tentativo di accesso dall’esterno della macchina viene bloccato, assicurando che il servizio dietro cloudflared non sia raggiungibile fuori dal tunnel.



## Conclusione

Quando il Cloudflare Tunnel è attivo, la tua interfaccia txAdmin sarà accessibile solo tramite il tuo dominio, mentre tutte le richieste passeranno da Cloudflare dove vengono filtrate e protette.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

L’accesso diretto alla porta txAdmin tramite l’IP del server è bloccato, eliminando completamente la superficie di attacco originale. Questo rende txAdmin stabile, sicuro e sempre raggiungibile anche se qualcuno prova a sovraccaricare o attaccare l’interfaccia.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />