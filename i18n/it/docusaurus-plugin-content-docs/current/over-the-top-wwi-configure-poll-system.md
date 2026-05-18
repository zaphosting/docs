---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI: Configura il sistema di votazione"
description: "Scopri come configurare le impostazioni di voto e sondaggio sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Sistema di Votazione
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il sistema di votazione in **Over the Top WWI** permette ai giocatori di votare su varie azioni come l’espulsione di giocatori, il cambio mappa o la modifica delle impostazioni di gioco. Questa funzione migliora l’interazione nella community e riduce la necessità di interventi continui da parte degli admin.

Configurando le impostazioni di voto, puoi controllare quali votazioni sono permesse e come si comportano durante il gameplay.

<InlineVoucher />

## Configurazione

Il sistema di votazione si configura all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` definisce la percentuale di voti necessari per far passare un sondaggio
- `EnableBanPlayerPoll` permette ai giocatori di votare per bannare altri giocatori
- `EnableKickPlayerPoll` permette ai giocatori di votare per espellere altri giocatori
- `EnableChangeMapsPoll` permette ai giocatori di votare per cambiare mappa
- `EnableMutePlayerPoll` permette ai giocatori di votare per silenziare altri giocatori
- `EnableCustomPoll` abilita opzioni di voto personalizzate
- `ChangeMapImmediately` decide se il cambio mappa avviene subito dopo un voto positivo

Modalità di gioco abilitate per i sondaggi:

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

Queste impostazioni definiscono quali modalità di gioco possono essere selezionate durante i sondaggi.

- `1` → Abilitato
- `0` → Disabilitato

Puoi disabilitare modalità specifiche per limitare le opzioni di voto e mantenere un’esperienza di gioco coerente.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Le nuove impostazioni di voto saranno applicate automaticamente.

## Conclusione

Complimenti! Hai configurato con successo il sistema di votazione sul tuo **server Over the Top WWI**. Ora i giocatori possono partecipare alle decisioni e la gestione del server diventa più automatizzata.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />