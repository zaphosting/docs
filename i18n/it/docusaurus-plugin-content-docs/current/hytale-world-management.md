---
id: hytale-world-management
title: "Hytale: Gestione dei Mondi"
description: "Scopri come proteggere il tuo server Hytale gestendo l'accesso dei giocatori con le funzionalità di whitelist e proteggi il tuo gameplay → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La gestione dei mondi su un server Hytale riguarda il controllo dell'ambiente di gioco persistente in cui i giocatori esplorano, costruiscono e interagiscono. Un mondo comprende tutti i dati del terreno, le strutture, i progressi dei giocatori e le impostazioni che definiscono l'esperienza condivisa. Essere in grado di creare, rinominare, resettare o organizzare i mondi è una parte fondamentale per mantenere un server sia per comunità private che pubbliche.

:::info Avviso Early Access

Hytale è stato rilasciato il 13 gennaio 2026 ed è attualmente disponibile in Early Access. Poiché il gioco è ancora in fase di sviluppo attivo, il software del server, i file di configurazione, il supporto per le mod e i flussi di installazione potrebbero continuare a cambiare nel tempo.

:::

## Creazione di un nuovo mondo

Creare un nuovo mondo dà al tuo server un ambiente fresco per generare terreno, strutture e progressione di gioco da zero. Usando la console live, i mondi possono essere creati o cambiati eseguendo i comandi relativi al mondo.  
Quando viene specificato un nuovo nome di mondo, il server caricherà un mondo esistente con quel nome o ne genererà uno nuovo se non trova dati corrispondenti.

```
/world create <worldname>
```

Questo comando crea un nuovo mondo chiamato `<worldname>`. Se non esistono dati di un mondo con quel nome, il server genera un ambiente di gioco nuovo di zecca.

## Impostare un mondo come predefinito

Un mondo specifico può essere impostato come mondo predefinito così da essere caricato automaticamente all'avvio del server. Impostare un mondo predefinito è utile quando ci sono più mondi e uno di questi deve sempre essere usato come ambiente principale.

Usando la console live, il mondo predefinito può essere aggiornato senza modificare manualmente i file di configurazione. Una volta impostato, il server darà priorità a questo mondo al prossimo riavvio.

```
/world setdefault <worldname>
```

Questo comando imposta il mondo chiamato `mainworld` come mondo predefinito. Dopo il riavvio del server, questo mondo verrà caricato automaticamente.

## Rimuovere un mondo esistente

Oltre a creare e caricare mondi, la console live può essere usata anche per rimuovere mondi esistenti dal server. Questo è utile quando mondi obsoleti, inutilizzati o di test non servono più. Rimuovere un mondo elimina i dati associati a quel mondo dal server. Questa azione è permanente e non può essere annullata a meno che non esista un backup.

```
/world remove <worldname>
```

Questo comando rimuove il mondo chiamato `worldname` dal server. Se il mondo è attivo, deve essere prima scaricato o il server potrebbe rifiutare il comando a seconda dell’implementazione.

## Conclusione

Gestire i mondi tramite la console live offre un modo rapido e flessibile per controllare l’ambiente attivo su un server Hytale. Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂