---
id: dayz-becomeadmin
title: "DayZ: Diventa Admin"
description: "Scopri come ottenere il pieno controllo del server assegnando i diritti admin e gestendo efficacemente le opzioni di gioco → Scopri di più ora"
sidebar_label: Diventa Admin
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i diritti admin ti permette di gestire il tuo server con controllo totale in modo semplice e completo. Come admin, puoi applicare tutte le opzioni e funzioni disponibili offerte dal gioco direttamente in-game. Qui sotto ti spieghiamo tutti i passaggi necessari per assegnare i diritti admin al tuo server.  
<InlineVoucher />

## Configurazione

La configurazione dei diritti admin avviene tramite il file di configurazione del server. Puoi accedere ai file di configurazione del tuo server nella gestione del game server sotto **Configs**. Una volta lì, troverai una panoramica dei file di configurazione disponibili. Apri il file **server.DZ.cfg** cliccando sul pulsante blu.

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

Nel file di configurazione dovresti trovare la voce **passwordAdmin**. Qui devi impostare la password desiderata per l’accesso. Inserisci la password che vuoi e clicca sul pulsante **Salva** in basso.

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

Per applicare la modifica, il server deve essere riavviato. Dopo di che, connettiti al tuo server e apri la chat in-game. Esegui questo comando per fare il login come admin:

```
#login password
```



## Comandi più usati

Qui sotto trovi una lista di alcuni comandi disponibili che puoi usare con i permessi da amministratore:

| COMANDO                                    | DESCRIZIONE                                                |
| :----------------------------------------- | :--------------------------------------------------------- |
| #login adminpassword                       | Effettua il login come Admin del server.                   |
| #logout                                    | Effettua il logout da admin.                               |
| #mission filename Difficulty               | Seleziona la missione con nome noto e imposta la difficoltà - il parametro difficoltà è opzionale e, se non impostato, mantiene quella attuale. |
| #missions                                  | Seleziona una missione.                                    |
| ##restart                                  | Riavvia una missione.                                      |
| #reassign                                  | Ricomincia da capo e riassegna i ruoli.                   |
| #shutdown                                  | Spegne il server.                                          |
| #restartserver                             | Riavvia il server.                                         |
| #shutdownserveraftermission                | Spegne il server una volta terminata la missione.          |
| #restartserveraftermission                 | Riavvia il server una volta terminata la missione.         |
| #init                                      | Ricarica il file di configurazione del server caricato con l’opzione -config. |
| #exec ban Name#exec ban ID#exec ban #Player | Permette di bannare un giocatore.                          |
| #kick Name#kick ID#kick #Player            | Permette di kickare un giocatore dal server.               |
| #monitor (intervallo in secondi)           | Mostra informazioni sulle prestazioni del server. Se l’intervallo è 0, il monitoraggio si ferma. |
| #monitords (intervallo in secondi)         | Mostra le info sulle prestazioni nella console del server. Se l’intervallo è 0 il monitoraggio si ferma. |
| #debug off                                 | Disabilita il debug.                                       |
| #debug (intervallo in secondi)             | L’intervallo di default è 10 se non ne viene selezionato un altro. |
| #debug (comando) (param)                   | Ci sono alcuni comandi disponibili: JIPQueue userQueue checkFile totalSent userSent userInfo. Puoi disabilitare ogni comando aggiungendo il parametro off dopo il comando, es. #totalSent off. L’output varia tra i comandi: alcuni scrivono nel file di log, altri a schermo, ecc. Nota che ti serve un debugger capace di catturare OutputDebugString in esecuzione sulla macchina client. |
| #debug (comando)                           | Effettua il logout da admin.                               |
| #logout                                    | Ci sono due comandi disponibili: console - Invia ciò che c’è nella console del server al mittente. von - Scrive nel logFile definito in server.cfg, es. il file di log potrebbe chiamarsi “server_console.log”. Vedrai una conferma di questi comandi nei canali chat. |


## Conclusione

Congratulazioni, hai configurato con successo i permessi da amministratore. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />