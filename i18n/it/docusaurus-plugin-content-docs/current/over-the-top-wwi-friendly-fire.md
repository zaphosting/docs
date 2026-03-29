---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: Configura il Fuoco Amico"
description: "Scopri come attivare o regolare le impostazioni del fuoco amico sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Fuoco Amico
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il fuoco amico determina se i giocatori possono danneggiare i propri compagni durante il gioco. Regolare queste impostazioni ti permette di controllare quanto il combattimento debba essere realistico o permissivo sul tuo server **Over the Top WWI**.

Attivare il fuoco amico aumenta il realismo e la tattica, mentre disattivarlo o ridurlo crea un’esperienza più casual e accessibile.

<InlineVoucher />

## Configurazione

Le impostazioni del fuoco amico si configurano nel file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` abilita o disabilita i danni corpo a corpo ai compagni.
- `EnableFriendlyRangeFire` abilita o disabilita i danni a distanza ai compagni.
- `FriendlyFireAtRoundStart` definisce un ritardo in secondi prima che il fuoco amico diventi attivo.
- `FriendlyFirePercent` controlla la percentuale di danno corpo a corpo applicata ai compagni.
- `RangeFriendlyFirePercent` controlla la percentuale di danno a distanza applicata ai compagni.
- `ExplosionFf` abilita o disabilita i danni esplosivi ai compagni.
- `FriendlyFireReflectPercent` riflette una percentuale di danno all’attaccante invece che al compagno.

Dopo aver modificato il `ServerConfiguration.ini`, salva il file e riavvia il server. Le nuove impostazioni del fuoco amico saranno applicate subito.

## Conclusione

Complimenti! Hai configurato con successo le impostazioni del fuoco amico sul tuo **server Over the Top WWI**. Regolando questi valori puoi bilanciare realismo ed esperienza di gioco per la tua community.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />