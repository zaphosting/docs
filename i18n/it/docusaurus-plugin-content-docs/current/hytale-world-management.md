---
id: hytale-world-management
title: "Hytale: Gestione dei Mondi"
description: "Scopri come mettere al sicuro il tuo server Hytale gestendo l’accesso dei giocatori con le whitelist e proteggi il tuo gameplay → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La gestione dei mondi su un server Hytale significa controllare l’ambiente di gioco persistente in cui i giocatori esplorano, costruiscono e interagiscono. Un mondo comprende tutti i dati del terreno, le strutture, i progressi dei giocatori e le impostazioni che definiscono l’esperienza condivisa. Saper creare, rinominare, resettare o organizzare i mondi è fondamentale per mantenere un server sia per community private che pubbliche.

:::info Avviso Early Access

Hytale è stato rilasciato il 13 gennaio 2026 ed è attualmente disponibile in Early Access. Poiché il gioco è ancora in fase di sviluppo attivo, il software del server, i file di configurazione, il supporto alle mod e i processi di installazione potrebbero continuare a evolversi nel tempo.

:::

## Creazione di un nuovo mondo

Creare un nuovo mondo dà al tuo server un ambiente fresco dove generare terreno, strutture e progressione di gioco da zero. Usando la console live, puoi creare o cambiare mondo con i comandi dedicati.  
Quando specifichi un nuovo nome per il mondo, il server caricherà un mondo esistente con quel nome oppure ne genererà uno nuovo se non trova dati corrispondenti.

```
/world create <nome-mondo>
```

Questo comando crea un nuovo mondo chiamato `<nome-mondo>`. Se non esistono dati per quel nome, il server genera un ambiente di gioco completamente nuovo.



## Impostare un mondo come predefinito

Puoi segnare un mondo specifico come predefinito, così verrà caricato automaticamente all’avvio del server. Impostare un mondo predefinito è utile quando ci sono più mondi e vuoi che uno di questi sia sempre l’ambiente principale.

Con la console live puoi aggiornare il mondo predefinito senza dover modificare manualmente i file di configurazione. Una volta impostato, il server darà priorità a quel mondo al prossimo riavvio.

```
/world setdefault <nome-mondo>
```

Questo comando imposta il mondo chiamato `mainworld` come predefinito. Dopo il riavvio del server, questo mondo verrà caricato automaticamente.



## Rimuovere un mondo esistente

Oltre a creare e caricare mondi, la console live ti permette anche di rimuovere mondi esistenti dal server. È utile quando mondi vecchi, inutilizzati o di test non servono più. Rimuovere un mondo elimina definitivamente i dati associati dal server. Questa azione è irreversibile a meno che non ci sia un backup.

```
/world remove <nome-mondo>
```

Questo comando elimina il mondo chiamato `nome-mondo` dal server. Se il mondo è attivo, deve essere prima scaricato, altrimenti il server potrebbe rifiutare il comando a seconda dell’implementazione.



## Conclusione

Gestire i mondi tramite la console live è un modo rapido e flessibile per controllare l’ambiente attivo su un server Hytale. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂