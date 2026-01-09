---
id: domain-teamspeak-redirect
title: "Dominio: Configura il reindirizzamento per TeamSpeak 3"
description: "Scopri come semplificare la connessione al tuo server TeamSpeak 3 usando domini o sottodomini personalizzati per un accesso facile → Scopri di più ora"
sidebar_label: Reindirizzamento TeamSpeak 3
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Tieni presente che possono volerci fino a 24 ore prima che le modifiche alle voci DNS diventino attive!
:::

## Introduzione

Puoi reindirizzare l'intero dominio o solo un sottodominio al tuo server TeamSpeak 3.  
Così nessuno dovrà più ricordare l’indirizzo IP complicato fatto di numeri e potrà semplicemente connettersi al tuo server TeamSpeak 3 usando il dominio.

:::note
Di default, i **nuovi** server TeamSpeak 3 riceveranno ora un alias `.zap.cloud` con un prefisso casuale che può essere usato per connettersi.
:::

<InlineVoucher />

## Usare la configurazione rapida TSDNS

Abbiamo implementato un nuovo sistema TSDNS per i nostri server TeamSpeak 3, che ti permette di configurare un sottodominio per il tuo server TeamSpeak 3 in pochi click!  
Se non hai un dominio con noi, passa alla sezione successiva per configurare manualmente i record DNS.

Inizia andando nella sezione **Impostazioni->TSDNS** nell’interfaccia web del tuo TeamSpeak sul nostro sito. Qui potrai scegliere un sottodominio (prefisso prima del dominio) e selezionare tra il nostro `zap-ts3.com` oppure uno dei tuoi domini che hai con noi sul tuo account ZAP-Hosting.

:::info
Per questa funzione di configurazione rapida, devi [acquistare un dominio perfetto direttamente da noi](https://zap-hosting.com/en/shop/product/domain/) o trasferire il tuo dominio al tuo account ZAP-Hosting. Questi domini appariranno nella sezione TSDNS una volta configurati. In alternativa, puoi usare gratuitamente il dominio `zap-ts3.com`.
:::

Nel nostro esempio, creiamo un nuovo sottodominio usando il dominio `.zap.cloud`, che ci porterà al nostro server TeamSpeak 3 quando usato.

![](https://screensaver01.zap-hosting.com/index.php/s/Mi3wK7cY639Rp3x/preview)

:::note
Ricorda che possono volerci fino a 3 ore perché il dominio si propaghi e inizi a funzionare.
:::

## Configurazione DNS standard

Per reindirizzare l’indirizzo IP, crea un sottodominio che punti all’IP del server TeamSpeak 3 oppure reindirizza l’intero dominio senza sottodominio.  
Questo è sufficiente se il server TeamSpeak 3 usa la porta di default **9987**.  
Se invece il server usa una porta diversa dalla default, è necessario aggiungere un **record SRV** per indirizzare il dominio o sottodominio alla porta corretta del server TeamSpeak 3.

### Servizio SRV

Il nome del servizio inizia sempre con un **underscore**.  
Per un server TeamSpeak 3, il nome del servizio è sempre **_ts3**, senza eccezioni.

### Protocollo SRV

Il protocollo specifica il protocollo internet usato per la connessione. Qui sono disponibili **UDP** e **TCP**.  
Anche il protocollo inizia sempre con un **underscore** ed è o **_udp** o **_tcp**.  
Per un server TeamSpeak 3 si usa sempre **_udp**, senza eccezioni.

## Reindirizzare il dominio senza sottodominio

Per reindirizzare il tuo dominio a un server di gioco senza creare un sottodominio, apri prima il dominio  
nel dashboard, poi apri Gestione DNS dal menu a sinistra.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Qui vedrai tutte le voci DNS esistenti per il tuo dominio.  
Se non hai ancora creato voci personalizzate, puoi vedere tutte le voci esistenti cliccando  
sull’icona del cestino rosso a destra.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Poi clicca su **Nuova voce** e verrai portato alla creazione di un nuovo record DNS.  
Come **Nome** scegli il nome del dominio, per esempio **teamspeak-server.de**, il **tipo è A** e il **valore** è l’IP del tuo server TeamSpeak 3, in questo caso **88.214.57.116**.  
Puoi lasciare il campo **TTL** così com’è.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

Quando hai inserito tutto, clicca su **Salva**, la voce verrà salvata nelle impostazioni DNS e sarà visibile entro  
24 ore.

:::info
Possono volerci fino a 24 ore prima che le nuove voci DNS diventino attive. Purtroppo nessuno può influenzare questo.
:::

## Reindirizzare il dominio con sottodominio

Se vuoi creare un sottodominio, per esempio ts.teamspeak-server.de, procedi come nell’esempio precedente,  
ma per **Nome** non inserire il nome del dominio, bensì il sottodominio.  
Ecco come appare:

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## Reindirizzare il dominio con porta (SRV)

Se non usi la porta standard **9987**, devi creare un **record SRV** aggiuntivo per non solo puntare il dominio  
all’IP del server di gioco, ma anche alla porta corretta.

Prima crea un **sottodominio** come descritto sopra, oppure reindirizza direttamente il dominio come descritto sopra,  
entrambi i modi vanno bene.

### Reindirizzamento senza sottodominio

Dopo aver reindirizzato il dominio all’IP del tuo server TeamSpeak 3 come descritto sopra, clicca su **Nuova voce**  
e crea un record così:

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

Il campo **Nome** contiene il nome del servizio, in questo caso il nostro server TeamSpeak 3, quindi **_ts3**. Contiene anche il tipo di protocollo, in questo caso **_udp**, e il **nome dominio**.  
Il campo **Tipo** indica che tipo di record è, in questo caso un record **SRV**.  
Il campo **Valore** contiene la porta di gioco e il dominio, in questo caso **0 1234 teamspeak-server.de**, dove **1234** è la **porta del gioco** e **teamspeak-server.de** è il dominio a cui si fa il forwarding.  
Il valore **0** non è più rilevante e rimane sempre uguale. I campi **TTL** e **Prio** non sono interessati.

Poi clicca su **Salva**.

:::info
È importante che nel campo **valore** alla fine del dominio ci sia un **punto**!
:::

### Reindirizzamento con sottodominio

Con un sottodominio è praticamente uguale. Prima crei un sottodominio come descritto sopra e lo reindirizzi all’IP del tuo server TeamSpeak 3. Poi clicchi su **Nuova voce** e crei un record con questi dati:

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

Il campo **Nome** contiene il nome del servizio, in questo caso il nostro server TeamSpeak 3, quindi **_ts3**. Contiene anche il tipo di protocollo, in questo caso **_udp**, e il **nome dominio** insieme al **sottodominio**, cioè **ts.teamspeak-server.de**.  
Il campo **Tipo** indica che tipo di record è, in questo caso un record **SRV**.  
Il campo **Valore** contiene la porta e il dominio con sottodominio, in questo caso **0 1234 ts.teamspeak-server.de**, dove **1234** è la **porta del server TeamSpeak 3** e **ts.teamspeak-server.de** è il dominio con sottodominio a cui si fa il forwarding.  
Il valore **0** non è più rilevante e rimane sempre uguale. I campi **TTL** e **Prio** non sono interessati.

<InlineVoucher />