---
id: vserver-iso
title: "VPS: Monta un file ISO"
description: "Scopri come personalizzare il tuo VPS con la tua ISO preferita per avere il pieno controllo del tuo ambiente server → Scopri di più ora"
sidebar_label: Monta file ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduzione
Vuoi ancora più libertà nella scelta del tuo sistema? Oltre ai nostri template OS, puoi ovviamente montare le tue ISO. È super facile con i nostri prodotti VPS. Così ottieni esattamente il sistema operativo che vuoi sul tuo server!

<InlineVoucher />



## File ISO disponibili

Oltre ai nostri template OS preconfigurati, offriamo anche la possibilità di montare file ISO aggiuntivi. Questo ti dà ancora più flessibilità nella configurazione e gestione del tuo ambiente server. I nostri prodotti VPS supportano attualmente i seguenti file ISO: 

<SearchableItemList items={items} />

:::info Ti manca un file ISO?
C’è una ISO specifica che vorresti usare ma non è disponibile? Contatta pure il nostro supporto, saremo felici di verificare se possiamo aggiungerla per te.
:::





## Come montare un file ISO
Per montare un ISO, vai al pannello di gestione del tuo VPS e apri **Impostazioni → ISO**. Seleziona il file ISO che vuoi, regola l’ordine di boot e poi riavvia il server. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Dopo il reboot, puoi connetterti al server tramite il client VNC e iniziare a installare e configurare il sistema operativo.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Stato online o connessioni remote dopo il montaggio ISO

Dopo aver montato un ISO, il server non è ancora configurato. Di conseguenza, nel pannello non verrà mostrato alcun **stato online** e non saranno disponibili connessioni **RDP** o **SSH**. Queste saranno accessibili solo una volta che il sistema operativo sarà stato installato e configurato correttamente.

:::




## Conclusione
Congratulazioni, hai selezionato e montato con successo il tuo file ISO. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂



<InlineVoucher />