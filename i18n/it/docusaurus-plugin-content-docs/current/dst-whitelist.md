---
id: dst-whitelist
title: "Don't Starve Together: Whitelist"
description: "Information about how to whitelist your Don't Starve Together server from ZAP-Hosting - ZAP-Hosting.com Documentation
sidebar_label: Whitelist
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Una whitelist è una lista di accesso che limita chi può entrare nel tuo server. In Don't Starve Together, questo è implementato come una allowlist basata sugli ID utente Klei. La configurazione tipica prevede un file `whitelist.txt` più `whitelist_slots` in `cluster.ini`.

<InlineVoucher />


## Attivare la Whitelist

Connettiti al tuo server via FTP e trova la cartella del cluster, solitamente simile a `DoNotStarveTogether/Cluster_1/` o un percorso specifico del provider che contiene `cluster.ini`. Apri `cluster.ini` e nella sezione `[NETWORK]` imposta `whitelist_slots`.

Per rendere il server effettivamente whitelist-only, imposta `whitelist_slots` uguale al valore di `max_players`.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

Nella stessa cartella del cluster, crea o modifica `whitelist.txt`. Aggiungi un ID Klei per riga nel formato KU_.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Salva i file e riavvia il server. La allowlist viene letta all'avvio.

## Gestire i Giocatori Whitelistati

Per aggiungere un giocatore, aggiungi il suo ID KU_ a `whitelist.txt`, salva e riavvia.

Per rimuovere un giocatore, elimina il suo ID KU_ da `whitelist.txt`, salva e riavvia.

Mantieni il numero di ID in `whitelist.txt` almeno pari a `whitelist_slots` per evitare problemi di accesso quando gli slot riservati superano il numero di utenti elencati.

## Verificare il Funzionamento della Whitelist

Dopo il riavvio, prova a entrare con un account non presente in `whitelist.txt`. Se `whitelist_slots` è uguale a `max_players`, l'accesso dovrebbe fallire. Poi entra con un ID KU_ presente per confermare l'accesso.

Se il server permette ancora giocatori non elencati, verifica di aver modificato la cartella cluster attiva e che nella sezione `[NETWORK]` sia presente la riga `whitelist_slots`.

## Conclusione

Se hai seguito correttamente tutte le sezioni sopra, la tua whitelist è attiva e puoi controllare esattamente chi può entrare nel server. Se l'accesso non funziona ancora come previsto, riavvia il server una volta e ricontrolla i file o l'output dei comandi per confermare che la modifica sia stata applicata.

<InlineVoucher />