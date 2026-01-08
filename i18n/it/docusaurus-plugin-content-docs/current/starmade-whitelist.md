---
id: starmade-whitelist
title: "StarMade: Whitelist"
description: "Info su come mettere in whitelist il tuo server StarMade su ZAP-Hosting → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La whitelist è una lista di accesso che limita chi può entrare nel tuo server. StarMade supporta una whitelist integrata gestita nel file `server.cfg` e popolata tramite `whitelist.txt`.

<InlineVoucher />

## Attivare la Whitelist

Connettiti al tuo server via FTP e apri `server.cfg`. Abilita l’autenticazione e la whitelist.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Salva il file. Poi apri o crea `whitelist.txt` nella stessa cartella del server. Aggiungi i giocatori nel formato usato da StarMade, una voce per riga.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Riavvia il server per caricare la whitelist aggiornata.

## Gestire i Giocatori in Whitelist

Per aggiungere un giocatore, aggiungi una nuova riga in `whitelist.txt` usando lo stesso formato, salva e riavvia. Per rimuovere un giocatore, cancella la sua riga da `whitelist.txt`, salva e riavvia.

Se i nomi contengono caratteri speciali, usa esattamente il nome in gioco come appare al login per evitare problemi.

## Verificare il Funzionamento della Whitelist

Dopo il riavvio, prova a connetterti con un account non presente in `whitelist.txt`. L’accesso dovrebbe essere negato. Poi prova con un nome presente nella lista.

Se i giocatori in whitelist non riescono a entrare, verifica che l’autenticazione StarMade sia abilitata e richiesta, altrimenti i nomi potrebbero non corrispondere correttamente.

## Conclusione

Se hai seguito tutto correttamente, la tua whitelist è attiva e puoi controllare esattamente chi può entrare nel server. Se l’accesso non funziona ancora come previsto, riavvia il server un’altra volta e ricontrolla il file o l’output dei comandi per confermare che la modifica sia stata applicata.

Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />