---
id: dayz-whitelist
title: "DayZ: Whitelist"
description: "Info su come mettere in whitelist il tuo server DayZ con ZAP-Hosting → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La whitelist è una lista di accesso che limita chi può entrare nel tuo server. DayZ ha una modalità whitelist integrata che puoi attivare e gestire giocatore per giocatore.

<InlineVoucher />


## Attivare la Whitelist

Connettiti al tuo server via FTP e apri il file di configurazione principale `serverDZ.cfg`. Trova l’impostazione della whitelist e attivala.

```cfg
enableWhitelist = 1;
```

Poi, trova o crea il file whitelist che il tuo host mette a disposizione, solitamente chiamato `whitelist.txt` e posizionato insieme ai file di configurazione del server. Aggiungi un SteamID64 per riga.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Salva tutto e riavvia il server per applicare la whitelist.

## Gestire i Giocatori in Whitelist

Per aggiungere un giocatore, aggiungi il suo SteamID64 in `whitelist.txt`, salva e riavvia il server. Per rimuoverlo, cancella la sua riga da `whitelist.txt`, salva e riavvia.

Mantieni il file pulito con un ID per riga. I commenti non sono sempre supportati, quindi evita testo extra sulla stessa riga a meno che tu non abbia confermato che il server li accetta.

## Verificare che la Whitelist Funzioni

Dopo il riavvio, prova a connetterti con un account non presente in `whitelist.txt`. L’accesso dovrebbe essere negato. Poi prova con un account presente per confermare che funziona.

Se i giocatori in whitelist non riescono a entrare, controlla di aver usato SteamID64 e che il server stia caricando proprio il file `whitelist.txt` che hai modificato.

## Conclusione

Se hai seguito tutto alla lettera, la tua whitelist è attiva e puoi controllare chi può entrare nel server. Se l’accesso non funziona ancora come previsto, riavvia il server un’altra volta e ricontrolla il file o l’output dei comandi per confermare che la modifica sia stata applicata.

Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />