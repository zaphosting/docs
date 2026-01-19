---
id: vintagestory-whitelist
title: "Vintage Story: Whitelist"
description: "Info su come mettere in whitelist il tuo server Vintage Story su ZAP-Hosting → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La whitelist è una lista di accesso che limita chi può entrare nel tuo server. Vintage Story ha una modalità whitelist integrata che puoi attivare e gestire per ogni singolo giocatore.

<InlineVoucher />


## Attivare la Whitelist

Apri la console in gioco e imposta la modalità whitelist nel comando di configurazione del server. Usa il valore 1 per whitelistmode per permettere solo ai giocatori in whitelist di entrare.

```text
/serverconfig whitelistmode 1
```

Riavvia il server una volta dopo aver attivato la modalità per assicurarti che l’impostazione venga salvata e applicata correttamente all’avvio.

## Gestire i Giocatori in Whitelist

Per permettere a un giocatore, aggiungilo alla whitelist con il comando player.

```text
/player PlayerName whitelist on
```

Per togliere l’accesso, disattiva la whitelist per quel giocatore.

```text
/player PlayerName whitelist off
```

Se vuoi ricontrollare l’impostazione attuale del server, stampa la configurazione corrente o esegui il comando whitelistmode senza cambiare altri valori e verifica che sia ancora impostato su 1.

## Verificare che la Whitelist Funzioni

Prova a connetterti con un giocatore non in whitelist. La connessione dovrebbe essere rifiutata. Poi prova con un giocatore per cui hai attivato `whitelist on`.

Se tutti riescono ancora a entrare, assicurati che `whitelistmode` sia impostato su 1 e che i comandi siano stati eseguiti sul server giusto.

## Conclusione

Se hai seguito tutto alla lettera, la tua whitelist è attiva e puoi controllare esattamente chi può entrare nel server. Se l’accesso non funziona ancora come previsto, riavvia il server e ricontrolla i file o l’output dei comandi per confermare che la modifica sia stata applicata.

Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />