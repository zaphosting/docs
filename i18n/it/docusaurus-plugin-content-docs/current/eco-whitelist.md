---
id: eco-whitelist
title: "ECO: Whitelist"
description: "Info su come mettere in whitelist il tuo server ECO da ZAP-Hosting - Documentazione ZAP-Hosting.com"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La whitelist è una lista di accesso che limita chi può connettersi al tuo server. In ECO la whitelist è salvata nella configurazione `Users.eco` e si attiva automaticamente non appena è presente almeno un SteamID64.

## Attivare la Whitelist

Connettiti al tuo server via FTP e trova il file `Users.eco`. Aprilo e cerca la sezione `WhiteList`. Aggiungi gli SteamID64 dentro `$values`.

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

Salva il file e riavvia il server per applicare la nuova lista di accesso.

## Gestire i Giocatori in Whitelist

Puoi aggiungere giocatori anche tramite la Live Console nella gestione del gameserver ZAP-Hosting, se hai il permesso in-game necessario. Usa il comando whitelist con il nome del giocatore.

```text
/whitelist PlayerName
```

Per rimuovere giocatori devi modificare `Users.eco`. Cancella lo SteamID64 da `$values`, salva e riavvia il server, perché non esiste un comando server per rimuovere voci.

## Verificare il Funzionamento della Whitelist

Dopo il riavvio, prova a connetterti con un account non presente in `$values`. L’accesso dovrebbe essere bloccato. Poi prova con un account in whitelist.

Se l’accesso è ancora aperto, verifica che ci sia almeno un SteamID64 e che il file `Users.eco` modificato corrisponda all’istanza server attiva.

## Conclusione

Se hai seguito tutto correttamente, la tua whitelist è attiva e puoi controllare esattamente chi può entrare nel server. Se l’accesso non funziona ancora come previsto, riavvia il server un’altra volta e ricontrolla il file o l’output dei comandi per confermare che la modifica sia stata applicata.

<InlineVoucher />