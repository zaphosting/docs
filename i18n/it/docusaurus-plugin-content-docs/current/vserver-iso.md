---
id: vserver-iso
title: "VPS: Monta un file ISO"
description: "Scopri come personalizzare il tuo VPS con la tua ISO preferita per avere il pieno controllo sull’ambiente del tuo server → Scopri di più ora"
sidebar_label: Monta file ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduzione
Vuoi ancora più libertà nella scelta del tuo sistema? Oltre ai nostri template OS, puoi ovviamente montare le tue ISO personali. È super facile con i nostri prodotti VPS. Così ottieni esattamente il sistema operativo che vuoi sul tuo server!

<InlineVoucher />



## File ISO disponibili

Oltre ai nostri template OS preconfigurati, offriamo anche la possibilità di montare file ISO aggiuntivi. Questo ti dà ancora più flessibilità nella configurazione e gestione del tuo ambiente server. I nostri prodotti VPS supportano attualmente i seguenti file ISO: 

<SearchableItemList items={items} />





## Caricare una ISO personalizzata

Se l’immagine ISO che ti serve non è nella lista predefinita, puoi fornire una ISO personalizzata tramite un URL pubblico. L’URL deve essere accessibile via HTTP o HTTPS e non deve richiedere autenticazione o link di download a tempo limitato.

Dopo aver inserito l’URL nel campo **Aggiungi ISO personalizzata** e cliccato su **Carica ISO**, l’ISO viene importata automaticamente e diventa disponibile per l’installazione sul server.

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

Puoi salvare fino a un massimo di tre ISO personalizzate contemporaneamente. Ogni ISO caricata viene conservata solo per 72 ore e poi eliminata automaticamente. Se ti serve ancora dopo questo periodo, dovrai caricarla di nuovo. Sei responsabile del contenuto, delle licenze e della sicurezza dell’ISO fornita.









## Montare un file ISO
Per montare un ISO, vai nel pannello di gestione del tuo VPS e apri **Impostazioni → ISO**. Seleziona il file ISO che vuoi, regola l’ordine di boot e poi riavvia il server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Dopo il riavvio, puoi connetterti al server tramite il client VNC e iniziare a installare e configurare il sistema operativo.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Stato Online o Connessioni Remote dopo il montaggio ISO

Dopo aver montato un ISO, il server non è ancora configurato. Di conseguenza, nel pannello non verrà mostrato alcun **stato online** e non saranno disponibili connessioni **RDP** o **SSH**. Queste diventeranno accessibili solo dopo che il sistema operativo sarà stato installato e configurato correttamente.

:::




## Conclusione
Complimenti, hai selezionato e montato con successo il tuo file ISO. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂



<InlineVoucher />