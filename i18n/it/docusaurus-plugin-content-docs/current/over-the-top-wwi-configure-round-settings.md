---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI: Configura le impostazioni del round"
description: "Scopri come configurare la durata del round e il flusso della partita sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Impostazioni Round
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le impostazioni del round in **Over the Top WWI** definiscono quanto durano le partite e come si sviluppa il gameplay. Modificando questi valori puoi controllare il ritmo della partita, la durata del round e il flusso complessivo della sessione.

Questo è particolarmente importante per bilanciare partite veloci o battaglie più lunghe e strategiche.

<InlineVoucher />

## Configurazione

Le impostazioni del round si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` definisce quante partite si giocano per match
- `MaxMapTime` imposta la durata massima di una mappa in minuti
- `FinalRecapTimer2` controlla per quanto tempo viene mostrato il riepilogo di fine round

- `PersistentMatch` determina se tempo e punteggio continuano tra i round

  - `0` → Disabilitato
  - `1` → Abilitato

Modifica questi valori per creare partite più brevi con rotazioni veloci o sessioni più lunghe con gameplay esteso.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Le nuove impostazioni del round verranno applicate automaticamente.

## Conclusione

Congratulazioni! Hai configurato con successo le impostazioni del round sul tuo **server Over the Top WWI**. Ora puoi controllare la durata delle partite e migliorare il flusso del gameplay sul tuo server.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />