---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI: Configura le Regole di Rotazione delle Mappe"
description: "Scopri come configurare il comportamento della rotazione delle mappe sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Rotazione Mappe
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le regole di rotazione delle mappe in **Over the Top WWI** determinano come le mappe vengono selezionate e giocate in base al numero di giocatori. Questo aiuta a mantenere le mappe bilanciate e adatte al numero di giocatori attivi.

Configurando queste impostazioni, puoi evitare che mappe grandi vengano giocate con pochi giocatori o che mappe piccole diventino troppo affollate.

<InlineVoucher />

## Configurazione

Le regole di rotazione delle mappe si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca il seguente parametro:


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` abilita o disabilita la selezione automatica delle mappe basata sul numero di giocatori

  - `False` → Disabilitato
  - `True` → Abilitato


Quando abilitato, il server controllerà il numero attuale di giocatori e adatterà la selezione delle mappe di conseguenza. Questo assicura che le mappe vengano scelte entro un range adatto, aiutando a mantenere un gameplay bilanciato.

Il sistema usa soglie interne per determinare se una mappa è appropriata, evitando situazioni in cui mappe grandi sono sottopopolate o mappe piccole diventano sovraffollate.

Dopo aver modificato il file `ServerConfiguration.ini`, salva il file e riavvia il server. Il comportamento aggiornato della rotazione delle mappe verrà applicato automaticamente.

## Conclusione

Congratulazioni! Hai configurato con successo le regole di rotazione delle mappe sul tuo **server Over the Top WWI**. Questo aiuta a garantire un gameplay bilanciato abbinando la dimensione della mappa al numero di giocatori.

Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />