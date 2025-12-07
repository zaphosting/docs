---
id: vserver-windows-fivem-txAdmin-cloudflare-tunnel
title: "VPS: Configurare Cloudflare Tunnel per txAdmin"
description: "Scopri come configurare un tunnel Cloudflare per txAdmin per una sicurezza extra → Scopri di più ora"
sidebar_label: Cloudflare Tunnel per txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Se vuoi aggiungere un livello extra di sicurezza oltre alla protezione DDoS di ZAP-Hosting, puoi mettere al sicuro la tua istanza txAdmin usando un Cloudflare Tunnel. Così facendo, l’interfaccia web di txAdmin non sarà più esposta tramite l’IP pubblico del server, ma sarà accessibile in modo sicuro tramite il tuo dominio. Qualsiasi attacco diretto alla porta di txAdmin verrà filtrato da Cloudflare, mentre potrai chiudere completamente la porta locale senza perdere l’accesso.



## Prerequisiti

Per usare un Cloudflare Tunnel su Windows ti serve un VPS Windows, un’installazione funzionante di txAdmin, la porta di txAdmin e un dominio già collegato al tuo account Cloudflare. Se il tuo dominio non è ancora collegato a Cloudflare, segui prima la nostra guida [Cloudflare Setup](domain-cloudflare-setup.md).

Il Cloudflare Tunnel funziona creando una connessione in uscita criptata dal tuo server verso Cloudflare, così non serve tenere porte pubbliche aperte per txAdmin.


## Configurazione Cloudflare

Prima di installare cloudflared sul tuo vServer Windows, crea e configura il tunnel direttamente dalla dashboard di Cloudflare.

Accedi al tuo account Cloudflare e vai nella sezione Zero Trust. Qui puoi creare un nuovo tunnel che poi inoltrerà il traffico verso l’interfaccia di txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Installazione Cloudflare Tunnel

Cloudflare mette a disposizione uno strumento chiamato cloudflared. Installare cloudflared su Windows è super semplice. Prima scarica il [Windows installer](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi).

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

Una volta scaricato il file, avvia l’installer e completa l’installazione. Quando hai finito, apri il Prompt dei comandi come Amministratore. In questa finestra esegui il comando fornito:

```
cloudflared.exe service install eyJhIjoiMj...
```

Dopo aver eseguito il comando, il tuo server si collegherà a Cloudflare tramite il tunnel. Se tutto va a buon fine, lo stato nella sezione Connectors cambierà in **Connected**, confermando che il tunnel è attivo e funzionante.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Configura il Cloudflare Tunnel

Ora configura le impostazioni di Route Traffic. Crea una nuova voce per un sottodominio a tua scelta. In questo esempio usiamo il sottodominio `txAdmin`, che poi userai per accedere all’interfaccia txAdmin.

Seleziona il dominio che vuoi usare, poi imposta il tipo di servizio su **HTTP** e inserisci **localhost:porta** come URL. Sostituisci porta con quella definita per la tua istanza txAdmin. In questo esempio useremo la porta 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Consiglio di Sicurezza
Invece di usare la porta di default di txAdmin **40120**, ti consigliamo di usare una porta diversa per aumentare la sicurezza.
:::



## Configura il Firewall di Windows

Per evitare che la porta sia raggiungibile fuori dal tunnel, configura il Firewall di Windows in modo che la porta accetti connessioni solo da localhost. Limita il campo indirizzo remoto a 127.0.0.1. Così tutto il traffico deve provenire dal sistema locale e blocchi ogni accesso esterno, garantendo che il servizio dietro cloudflared non sia raggiungibile dalla rete esterna al tunnel.

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

Con questa configurazione, ogni tentativo di accesso da fuori la macchina viene bloccato, assicurando che il servizio dietro cloudflared non sia raggiungibile fuori dal tunnel.



## Conclusione

Quando il Cloudflare Tunnel è attivo, la tua interfaccia txAdmin sarà accessibile solo tramite il tuo dominio, mentre tutte le richieste passeranno da Cloudflare dove vengono filtrate e protette.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

L’accesso diretto alla porta txAdmin tramite l’IP del server è bloccato, eliminando completamente la superficie di attacco originale. Così txAdmin resta stabile, sicuro e sempre raggiungibile anche se qualcuno prova a sovraccaricare o attaccare l’interfaccia.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />