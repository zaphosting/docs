---
id: factorio-whitelist
title: "Factorio: Whitelist"
description: "Info su come mettere in whitelist il tuo server Factorio su ZAP-Hosting → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La whitelist è una lista di accesso che limita l’accesso al server solo agli account Factorio approvati. Sulla maggior parte dei server hostati, la whitelist si attiva non appena viene aggiunto almeno un giocatore, e viene salvata in un file `server-whitelist.json`.

<InlineVoucher />

## Attivare la Whitelist

Apri la Live Console nella gestione del tuo gameserver ZAP-Hosting e aggiungi il primo giocatore alla whitelist. Aggiungere il primo nome di solito attiva subito la whitelist.

```text
/whitelist add PlayerName
```

Se il tuo host offre un comando esplicito per attivare la whitelist, puoi eseguirlo prima di aggiungere gli utenti.

```text
/whitelist enable
```

Di solito non serve riavviare per applicare la modifica, ma un riavvio dopo la configurazione iniziale assicura che il file whitelist venga scritto e caricato all’avvio.

## Gestire i Giocatori in Whitelist

Per aggiungere altri giocatori, usa di nuovo il comando add con il loro username Factorio.

```text
/whitelist add AnotherPlayer
```

Per rimuovere un giocatore, usa il comando remove.

```text
/whitelist remove PlayerName
```

Per vedere la whitelist attuale, usa il comando get.

```text
/whitelist get
```

## Verificare che la Whitelist Funzioni

Dopo aver aggiunto almeno un giocatore, prova a connetterti con un account non in lista. La connessione dovrebbe essere rifiutata. Poi prova con un account in whitelist per confermare che funzioni.

Se il server lascia ancora entrare tutti, controlla che i comandi siano stati eseguiti sul server giusto e fai un riavvio per assicurarti che il file whitelist venga caricato all’avvio.

## Conclusione

Se hai seguito tutto correttamente, la tua whitelist è attiva e puoi controllare esattamente chi può entrare nel server. Se l’accesso non funziona ancora come previsto, riavvia il server e ricontrolla il file o l’output dei comandi per confermare che la modifica sia stata applicata.

Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />