---
title: "Over the Top WWI: Cambia la Modalità di Gioco"
description: "Scopri come cambiare la modalità di gioco sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Cambia Modalità di Gioco
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La modalità di gioco su un server **Over the Top WWI** definisce come si svolgono le partite e quali obiettivi i giocatori devono completare. Diverse modalità di gioco possono cambiare radicalmente il ritmo, la strategia e l’esperienza di gioco complessiva.

Modificando la modalità di gioco, puoi personalizzare il tuo server per concentrarti su battaglie su larga scala, gameplay difensivo o scenari basati su obiettivi, a seconda delle preferenze della tua community.

<InlineVoucher />

## Configurazione

La modalità di gioco si configura all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca il seguente parametro:

```
CurrentGameMode = 2
```

Il valore determina quale modalità di gioco è attiva sul tuo server. Valori disponibili:

- `2` → Conquista
- `3` → Assedio

Il valore selezionato definisce le regole base di gioco per ogni partita.

- **Conquista (2)** si concentra sulla cattura e il mantenimento degli obiettivi sulla mappa, incentivando movimento costante e coordinazione di squadra.
- **Assedio (3)** è generalmente più difensiva, dove una squadra attacca mentre l’altra difende posizioni strategiche.

La scelta della modalità giusta dipende dal tuo stile di gioco preferito e dal numero di giocatori.

Dopo aver modificato il valore nel file `ServerConfiguration.ini`, salva il file e riavvia il server. La nuova modalità di gioco sarà applicata alla prossima partita o rotazione della mappa.

## Conclusione

Complimenti! Hai cambiato con successo la modalità di gioco sul tuo **server Over the Top WWI**. Selezionando la modalità giusta, puoi modellare l’esperienza di gioco e adattarla meglio alle preferenze della tua community.

Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />