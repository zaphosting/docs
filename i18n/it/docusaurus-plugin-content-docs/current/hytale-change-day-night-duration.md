---
id: hytale-change-day-night-duration
title: "Hytale: Cambia la Durata del Giorno/Notte"
description: "Scopri come teletrasportarti tra i Mondi su un server Hytale → Scopri di più ora"
sidebar_label: Cambia la Durata del Giorno/Notte
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il ciclo giorno e notte su un server Hytale definisce quanto durano le fasi di luce e buio all’interno di un mondo. Modificando la durata di questi cicli, i proprietari del server possono influenzare il ritmo di gioco, l’atmosfera e la difficoltà.

Notti più corte possono creare un ambiente più rilassato, mentre notti più lunghe aumentano la sfida e la tensione. Personalizzare la durata del giorno e della notte ti permette di adattare il mondo allo stile di gioco che vuoi per il tuo server.

:::info Avviso Early Access

Hytale è stato rilasciato il 13 gennaio 2026 ed è attualmente disponibile in Early Access. Poiché il gioco è ancora in fase di sviluppo attivo, il software del server, i file di configurazione, il supporto per le mod e i processi di installazione potrebbero continuare a cambiare nel tempo.

:::

<InlineVoucher />

## Configurazione

Per cambiare la durata del giorno e della notte, devi modificare direttamente il file `config.json` del mondo, che si trova in:

```
/gXXXXXXX/hytale/universe/worlds/<nome_mondo>/config.json
```

Se le voci di configurazione per la durata del giorno e della notte non esistono ancora, devi aggiungerle manualmente. Scorri il file finché non trovi questa riga:

```
"GameplayConfig":
```

Subito sotto, inserisci le impostazioni per la durata del giorno e della notte:

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

Questi valori definiscono la durata del giorno e della notte in secondi. Per esempio, un valore di `1800` per il giorno significa una fase diurna più lunga, mentre `1000` per la notte controlla quanto dura la notte prima che il ciclo ricominci. Dopo aver fatto le modifiche, salva il file `config.json` e riavvia il server.

## Conclusione

Dopo aver completato questa configurazione, avrai il pieno controllo sulla durata del giorno e della notte in ogni mondo del tuo server Hytale. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂


<InlineVoucher />