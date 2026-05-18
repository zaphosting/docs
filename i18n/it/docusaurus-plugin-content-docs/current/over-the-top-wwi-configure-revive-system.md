---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI: Configura il sistema di revive"
description: "Scopri come configurare le meccaniche di revive sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Sistema di Revive
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il sistema di revive in **Over the Top WWI** determina come i giocatori possono tornare in battaglia dopo essere stati abbattuti. Modificare queste impostazioni ti permette di controllare quanto il combattimento sia indulgente o punitivo.

Un sistema di revive più veloce o affidabile rende il gameplay più accessibile, mentre impostazioni più rigide aumentano il realismo e le conseguenze degli errori.

<InlineVoucher />

## Configurazione

Il sistema di revive si configura all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```

- `ReviveTimer` definisce quanto tempo ci vuole per resuscitare un giocatore
- `ReviveChance` determina la probabilità di successo del revive
- `ReviveMaxDamage` definisce il danno massimo che un giocatore può avere per poter essere resuscitato

Modifica questi valori per controllare quanto spesso i revive hanno successo e quanto dura il processo.

Dopo aver modificato il `ServerConfiguration.ini`, salva il file e riavvia il server. Le nuove impostazioni di revive saranno applicate automaticamente.

## Conclusione

Complimenti! Hai configurato con successo il sistema di revive sul tuo **server Over the Top WWI**. Ora puoi calibrare la difficoltà del combattimento e migliorare l’esperienza di gioco complessiva.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />