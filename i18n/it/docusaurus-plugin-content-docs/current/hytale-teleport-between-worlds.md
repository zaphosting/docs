---
id: hytale-teleport-between-worlds
title: "Hytale: Teletrasporto tra Mondi"
description: "Scopri come teletrasportarti tra i Mondi su un server Hytale → Scopri di più ora"
sidebar_label: Teletrasporto tra Mondi
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il teletrasporto tra mondi su un server Hytale permette ai giocatori di spostarsi senza problemi da un ambiente di gioco all'altro. Questa funzione è molto usata su server che ospitano più mondi, come hub, mappe avventura, aree creative o zone di gioco separate.

:::info Avviso Early Access

Hytale è stato rilasciato il 13 gennaio 2026 ed è attualmente in Early Access. Poiché il gioco è ancora in fase di sviluppo attivo, il software del server, i file di configurazione, il supporto alle mod e i processi di installazione potrebbero continuare a cambiare nel tempo.

:::

<InlineVoucher />


## Teletrasporto

I comandi di teletrasporto tra mondi possono essere eseguiti dalla console del server o da un operatore nella chat di gioco. Se eseguiti dalla console, il comando agisce immediatamente sul giocatore specificato. Se eseguiti in-game, chi lancia il comando deve avere i permessi da operatore o equivalenti.

Per teletrasportare un giocatore dal suo mondo attuale a un altro mondo, usa questo comando:

```
/world teleport <playername> <worldname>
```

Il parametro `<playername>` indica il nome del giocatore da teletrasportare. Il parametro `<worldname>` specifica il nome del mondo di destinazione.

Il teletrasporto tra mondi richiede che il mondo di destinazione sia disponibile sul server. Se il mondo target non è caricato, il comando di teletrasporto non funzionerà. Per rendere un mondo disponibile al teletrasporto, caricalo con questo comando:

```
/world load <worldname>
```


:::tip Panoramica nomi mondi

Se non sei sicuro del nome esatto di un mondo, puoi visualizzare la lista di tutti i mondi disponibili usando il comando `/world list`. 
:::


## Conclusione

Il teletrasporto tra mondi è uno strumento potente per gestire server Hytale multi-mondo. Usando i comandi giusti dalla console o dalla chat in-game e assicurandosi che i mondi di destinazione siano caricati, gli admin possono offrire una navigazione fluida e flessibile tra i vari ambienti del server.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂


<InlineVoucher />