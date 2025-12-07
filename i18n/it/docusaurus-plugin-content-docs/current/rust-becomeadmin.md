---
id: rust-becomeadmin
title: "Rust: Diventa admin sul tuo server"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e gestire il tuo gioco in modo efficace → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente in gioco. Qui sotto trovi tutti i passaggi per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Diventare admin usando RCON

Con RCON puoi eseguire un comando diretto per diventare admin.  
Prima di tutto, devi [connetterti via RCON](rust-connectrcon.md).

Una volta connesso, vai dove puoi eseguire comandi console. Nel nostro esempio usiamo RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

Qui devi eseguire il comando:  
`ownerid Steam64ID`

:::info
Sostituisci **Steam64ID** con il tuo vero Steam64ID. Puoi trovare il tuo Steam64ID con questo [Tool](https://steamid.io/)
:::

Dopodiché sarai subito admin.

:::info
Se sei in gioco mentre esegui il comando, basta che fai un relog nel server.
:::

Ora sei un amministratore! :)

## Diventare admin usando FTP

In alternativa, puoi assegnarti i permessi admin direttamente via FTP.  
Prima di tutto, connettiti usando [Accesso via FTP](gameserver-ftpaccess.md).

Una volta connesso, vai nella cartella:

`/g#####/rust/server/<your_server_save>/cfg`

In questa cartella devi **creare** un **nuovo file** chiamato **users.cfg**

In questo file aggiungi le tue voci con questo formato:

`<role> <Steam64ID> <reason/user>`

:::info
Sostituisci **Steam64ID** con il tuo vero Steam64ID. Puoi trovare il tuo Steam64ID con questo [Tool](https://steamid.io/)
:::

Ecco un esempio:

```
ownerid 76561198114248380 "Puoi scrivere qualsiasi cosa come riferimento"
moderatorid 76561198114248380 "Test Person"
```
:::info
Devi riavviare il server perché le modifiche abbiano effetto.
:::

## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />