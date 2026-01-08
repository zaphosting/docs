---
id: rust-whitelist
title: "Rust: Whitelist"
description: "Informazioni su come mettere in whitelist il tuo server Rust da ZAP-Hosting → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La whitelist è un meccanismo di controllo accessi che limita chi può entrare nel tuo server. I server dedicati Rust non hanno una funzione whitelist integrata, quindi l’approccio più comune usato dagli host è installare uMod Oxide e un plugin whitelist che blocca le connessioni a meno che un giocatore non sia esplicitamente autorizzato.

<InlineVoucher />


## Attivare la Whitelist

Connettiti al tuo server via FTP e installa uMod Oxide se non è già presente. Dopo aver installato uMod, carica il file del plugin whitelist `Whitelist.cs` nella cartella plugins, solitamente `oxide/plugins/Whitelist.cs`.

Una volta che il plugin è al suo posto, riavvia il server o ricarica i plugin così che venga caricato. Il plugin whitelist di solito funziona richiedendo un permesso specifico prima che un giocatore possa connettersi.

## Gestire i Giocatori in Whitelist

Apri la Live Console nella gestione del gameserver ZAP-Hosting e assegna il permesso whitelist a un giocatore usando il suo SteamID64.

```text
oxide.grant user 76561198000000000 whitelist.allow
```

Per revocare l’accesso, rimuovi il permesso.

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

Per verificare quali permessi ha un utente, controlla i suoi permessi.

```text
oxide.show user 76561198000000000
```

## Verificare il Funzionamento della Whitelist

Prova a connetterti con un account che non ha il permesso whitelist. Il plugin dovrebbe negare la connessione. Poi connettiti con un account a cui hai dato `whitelist.allow` per confermare l’accesso.

Se tutti possono ancora entrare, assicurati che il plugin sia caricato e che uMod stia girando. Un riavvio del server dopo aver caricato il plugin è il modo più sicuro per garantirne l’attivazione.

## Conclusione

Se hai seguito tutto correttamente, la tua whitelist è ora attiva e puoi controllare esattamente chi può entrare nel server. Se l’accesso non funziona ancora come previsto, riavvia il server una volta e ricontrolla i file o l’output dei comandi per confermare che la modifica sia stata applicata.

Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />