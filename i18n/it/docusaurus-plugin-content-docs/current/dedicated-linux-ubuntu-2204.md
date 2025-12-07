---
id: dedicated-linux-ubuntu-2204
title: "Dedicated Server: Installazione di Ubuntu 22.04"
description: "Scopri come installare e configurare Ubuntu sul tuo server dedicato per prestazioni ottimali e supporto a lungo termine → Scopri di più ora"
sidebar_label: Ubuntu 22.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Qui ti spieghiamo passo passo come installare e configurare il sistema operativo Ubuntu sul tuo server dedicato. Segui attentamente queste istruzioni per assicurarti di configurare correttamente il sistema operativo e sfruttarlo al massimo.



:::warning Versione più recente disponibile / Dettagli EOL

L’ultima versione di Ubuntu è la [24.04](dedicated-linux-ubuntu.md). Ti consigliamo di usare sempre la versione più recente per progetti a lungo termine.

Il supporto per le versioni più vecchie di Ubuntu verrà interrotto prima o poi. Ecco le scadenze previste per la versione 22.04:

- Fine supporto standard: 01.04.2027
- Fine supporto Ubuntu Pro: 01.04.2032
- Fine supporto legacy: 01.04.2034

Maggiori info le trovi sul [sito ufficiale](https://ubuntu.com/about/release-cycle).
:::




## Preparazione

Per installare e configurare un sistema operativo, la prima cosa importante è montare l’ISO corrispondente. Ci sono diversi modi per farlo:

1. Montaggio tramite setup iniziale
2. Montaggio tramite iLO (Virtual Media)
3. Montaggio tramite iLO (Remote Console)

Se non hai mai montato un file ISO, ti consigliamo di dare un’occhiata alle nostre guide su [Setup iniziale](dedicated-setup.md) o [ISO personalizzate](dedicated-iso.md).



## Installazione

Una volta montata e caricata correttamente l’ISO, il server dovrebbe avviare il processo di setup. All’inizio scegli la lingua che vuoi usare per il sistema operativo. Seleziona una delle lingue disponibili e conferma con `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Poi seleziona il layout della tastiera adatto alla lingua scelta. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Dopodiché si configura la rete. Di default il server usa DHCP. L’adattatore di rete predefinito è `eno1`. Conferma le impostazioni di default e vai avanti. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Puoi anche configurare un proxy opzionale, ma non è obbligatorio. Se non ti serve, salta pure questo passaggio. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Ora scegli il mirror di Ubuntu (server da cui scaricare i pacchetti). I nostri server dedicati sono in Germania, quindi ti consigliamo di selezionare il mirror tedesco per avere la massima velocità di download.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Adesso puoi definire le partizioni nel disco. Puoi usare una partizione unica grande o suddividerla se vuoi. Se vuoi usare tutto l’SSD come una sola partizione, scegli `Use an entire disk` e continua.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Il setup crea automaticamente i volumi, quindi scegli l’opzione `Done` per procedere.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Prima di iniziare, ti verrà mostrato un avviso che tutti i dati esistenti verranno cancellati. Conferma con `Continue`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Configura il tuo account utente come preferisci, puoi anche usare l’account root cambiandone la password. Puoi navigare tra le opzioni con tab o frecce. Quando hai finito, seleziona `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





Ti consigliamo di installare il setup SSH. Se vuoi gestire il server via SSH, seleziona l’opzione per installarlo e conferma.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu offre alcuni snap di default, se vuoi usarne qualcuno, spunta quelli che ti interessano.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Per completare il processo, devi espellere l’ISO per evitare che venga ricaricata al riavvio. Riavvia il server una volta per terminare.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configurazione



### Cambiare la password dell’utente root

Puoi cambiare facilmente la password dell’utente root. Esegui `sudo su` e inserisci la tua password. Poi esegui `sudo passwd` per cambiare la password. Ora inserisci la nuova password desiderata per root. Fatto, ora puoi fare login con l’utente `root`.



## Conclusione

Congratulazioni, hai installato con successo Ubuntu 22.04 sul tuo server dedicato. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂