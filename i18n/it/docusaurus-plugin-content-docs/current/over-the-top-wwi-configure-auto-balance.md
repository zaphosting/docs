---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI: Configura il Bilanciamento Automatico delle Squadre"
description: "Scopri come configurare il bilanciamento automatico delle squadre sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Bilanciamento Automatico Squadre
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il bilanciamento delle squadre è fondamentale per partite giuste e divertenti in **Over the Top WWI**. Senza un bilanciamento adeguato, una squadra potrebbe prendere un vantaggio netto, causando gameplay sbilanciato e un’esperienza negativa per i giocatori.

Il sistema di bilanciamento automatico aiuta a mantenere l’equità redistribuendo automaticamente i giocatori tra le squadre quando si verificano certe condizioni.

<InlineVoucher />

## Configurazione

Il bilanciamento automatico delle squadre si configura nel file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Configs**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` abilita o disabilita il bilanciamento automatico delle squadre

- `0` → Disabilitato  
- `1` → Abilitato

- `TeamPercentsAutoBalance` definisce la distribuzione desiderata delle squadre. Esempio: `50` = squadre di dimensioni uguali  
- `AutoBalanceThreshold` definisce quanto squilibrio è permesso prima che scatti il bilanciamento  
- `MinAutoBalanceCount` definisce il numero minimo di giocatori richiesto prima che il bilanciamento automatico entri in funzione  
- `LimitTeamSelection` limita la possibilità dei giocatori di scegliere manualmente la squadra

- `0` → Nessuna restrizione  
- `1–3` → Limita la selezione della squadra in base al valore

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Il sistema di bilanciamento automatico gestirà la distribuzione delle squadre automaticamente durante le partite.

## Conclusione

Complimenti! Hai configurato con successo il bilanciamento automatico delle squadre sul tuo **server Over the Top WWI**. Questo garantisce partite più equilibrate e migliora l’esperienza complessiva per tutti i giocatori.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />