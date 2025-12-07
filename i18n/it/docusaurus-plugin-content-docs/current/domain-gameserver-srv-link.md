---
id: domain-gameserver-srv-link
title: "Dominio: Configura il forwarding del tuo server di gioco"
description: "Scopri come inoltrare il tuo dominio o sottodominio a un server di gioco per un accesso facile e una connettività migliorata → Scopri di più ora"
sidebar_label: Forwarding Gameserver
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Puoi inoltrare completamente il tuo dominio oppure solo un sottodominio al tuo server di gioco. Questo è utile perché permette alle persone di connettersi al tuo server di gioco tramite un dominio, invece di dover ricordare complicati indirizzi IP composti solo da numeri. In questa guida vedremo come configurare un dominio per inoltrare al tuo server di gioco tramite record DNS.

:::info
Tieni presente che le modifiche ai record DNS possono impiegare fino a 24 ore per diventare attive!
:::

## Funzionalità

Per inoltrare l’indirizzo IP, si crea un sottodominio che punta all’IP del server di gioco, oppure si inoltra l’intero dominio senza sottodominio. Questo è sufficiente se il server di gioco usa la porta di default del gioco. Se invece il server usa una porta diversa da quella di default, serve un **record SRV** aggiuntivo per inoltrare il sottodominio al server di gioco.

:::info
Non tutti i giochi supportano l’inoltro di un dominio alla porta di gioco tramite record SRV, quindi informati prima se il tuo gioco supporta i record SRV.
:::

### Servizio SRV

Il nome del servizio dipende dal gioco e inizia sempre con un **underscore**. Per esempio, il nome del servizio per un server Minecraft è sempre **_minecraft** e per un server FiveM è **_cfx**.

### Protocollo SRV

Come protocollo specifichiamo il protocollo internet usato per la connessione. Qui sono disponibili **UDP** e **TCP**. Quale protocollo usare dipende dal gioco; anche la specifica del protocollo inizia sempre con un **underscore** ed è o **_udp** o **_tcp**.

## Preparazione

Per inoltrare il tuo dominio a un server di gioco senza creare un sottodominio, apri prima il tuo dominio nella dashboard, poi apri la gestione DNS dal menu a sinistra.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

Qui puoi vedere tutti i record DNS esistenti per il tuo dominio.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Forwarding dominio (Minecraft)

Prima devi scoprire l’IP e la porta del server Minecraft a cui vuoi fare il redirect. Con queste info puoi seguire i passaggi seguenti.

Nel nostro esempio usiamo `testserver-domain.de` come nome dominio, `123.123.123.123` come IP server e `25500` come PORTA.

### Crea record A

Per creare un nuovo record, clicca sul pulsante **Nuova voce**.

Si apre una finestra con quattro campi da compilare:

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

Il **Nome** è il dominio principale o sottodominio tramite cui avviene il forwarding all’IP, questo nome è a tua scelta. Il **Tipo** resta su **A** in questo passaggio. Nel campo **Valore** devi inserire solo l’IP del server Minecraft che hai trovato prima. Nel nostro esempio appare così:

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

Una volta salvato, il record sarà mostrato così:

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### Crea record SRV

Ora devi creare un record SRV, che serve per inoltrare la porta se non usi quella di default. Clicca di nuovo su **Nuova voce**.

Nel campo **Nome** devi inserire protocollo e dominio di connessione. Il nome dominio inserito qui sarà usato poi per connettersi al server. Come **Tipo** seleziona **SRV** dal menu a tendina:

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

Nel campo **Valore** devi inserire tre valori: prima la priorità (puoi lasciare 0 di default), poi la porta del server di gioco (nel nostro esempio `25500`) e infine il nome dominio del record **A** appena creato.

Nel nostro esempio appare così:

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### Risoluzione problemi & risultato

:::important
Alla fine del valore devi mettere un punto. Senza questo punto il sistema prova ad aggiungere il dominio.
:::

Se non segui questo consiglio, il sistema reindirizzerà `minecraft.testserver-domain.de` a `minecraft.testserver-domain.de.testserver-domain.de` e il forwarding fallirà.

## Forwarding dominio (FiveM)

Prima devi scoprire l’IP e la porta del server FiveM a cui vuoi fare il redirect. Con questi dati puoi seguire i passaggi seguenti.

Nel nostro esempio usiamo `testserver-domain.de` come nome dominio, `123.123.123.123` come IP server e PORTA `30300`.

### Crea record A

Per creare un nuovo record, clicca sul pulsante **Nuova voce**.

Si apre una finestra con quattro campi da compilare:

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

Il **Nome** è il dominio principale o sottodominio tramite cui avviene il forwarding all’IP, questo nome è a tua scelta. Il **Tipo** resta su **A** in questo passaggio. Nel campo **Valore** devi inserire solo l’IP del server FiveM che hai trovato prima. Nel nostro esempio appare così:

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

Una volta salvato, il record sarà mostrato così:

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### Crea record SRV

Ora devi creare un record SRV, che serve per inoltrare la porta se non usi quella di default. Clicca di nuovo su **Nuova voce**.

Nel campo **Nome** devi inserire protocollo e dominio di connessione. Il nome dominio inserito qui sarà usato poi per connettersi al server. Come **Tipo** seleziona **SRV** dal menu a tendina:

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

Nel campo **Valore** devi inserire tre valori: prima la priorità (puoi lasciare 0 di default), poi la porta del server di gioco (nel nostro esempio `30300`) e infine il nome dominio del record **A** appena creato.

Nel nostro esempio appare così:

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### Risoluzione problemi & risultato

:::important
Alla fine del valore devi mettere un punto. Senza questo punto il sistema prova ad aggiungere il dominio.
:::

Se non segui questo consiglio, il sistema reindirizzerà `fivem.testserver-domain.de` a `fivem.testserver-domain.de.testserver-domain.de` e il forwarding fallirà.

<InlineVoucher />