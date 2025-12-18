---
id: openmp-server-commands
title: "Open.mp: Comandi Server Open.mp"
description: "Scopri come gestire in sicurezza i comandi server Open.mp con accesso RCON e migliora il controllo del tuo server → Scopri di più ora"
sidebar_label: Comandi Server
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server Open.mp includono una serie di comandi server utili integrati, utilizzabili sia in-game che tramite la console del server. In questa guida esploreremo molti di questi comandi, fornendo descrizioni ed esempi pratici per ciascuno.

<InlineVoucher />

## Configurare l’accesso (RCON)

Per poter eseguire i comandi server in-game, devi abilitare la funzione RCON. Accedi al file di configurazione `config.json` e modifica i parametri necessari per attivare la funzione e impostare una password. Usa la nostra guida [Configurazione Server](openmp-configuration.md) per accedere al file di configurazione del tuo server.

Una volta aperto il file, cerca i parametri qui sotto; attiva la funzione e imposta una password RCON.

| Nome Parametro                | Esempio                                | Descrizione                                                                                   |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------- | 
| rcon.enable                   | true                                  | Attiva o disattiva la funzione RCON                                                          |
| rcon.password                 | ZAP-IS-AWESOME                        | Imposta la password necessaria per accedere a RCON dai client                                |

:::info
Assicurati di aver impostato una password RCON nel file di configurazione. Altrimenti potresti avere problemi e RCON sarà accessibile a chiunque, cosa altamente insicura.
:::

Dopo aver completato le modifiche, salva il file e riavvia il server. Al prossimo avvio, RCON sarà attivo e pronto all’uso.

:::tip
Se vuoi approfondire RCON, dai un’occhiata alla nostra guida [RCON](openmp-rcon.md) che spiega tutto nei dettagli.
:::

## Comandi Disponibili

La tabella qui sotto mostra una serie di comandi server importanti per Open.mp, con esempi d’uso e descrizioni. Possono essere usati in-game, tramite console server o via programma RCON. Per vedere tutti i comandi attuali, ti consigliamo di leggere la guida ufficiale [Controllare un server open.mp](https://www.open.mp/docs/server/ControllingServer) che elenca tutti i comandi disponibili.

:::tip
Quando esegui i comandi direttamente dalla console o via programma RCON, non serve usare il prefisso `/rcon`. Usalo solo quando digiti i comandi **in-game**.
:::

:::note
Assicurati che RCON sia abilitato, altrimenti questi comandi non funzioneranno né in-game né tramite programma RCON.
:::

### Comandi Generali

| Sintassi Comando             | Valori Accettati | Descrizione                                                        | 
| ---------------------------- | ---------------- | ------------------------------------------------------------------ | 
| /rcon cmdlist                | -                | Restituisce la lista di tutti i comandi server                     | 
| /rcon varlist                | -                | Restituisce la lista di tutte le variabili server attive           | 
| /rcon exit                   | -                | Spegne il server                                                   | 
| /rcon echo [testo]           | Stringa          | Invia un messaggio alla console del server (non visibile in-game) | 
| /rcon say [testo]            | Stringa          | Invia un messaggio a tutti i giocatori in-game (compare come "Admin: [testo]") | 
| /rcon players                | -                | Mostra informazioni su tutti i giocatori attualmente connessi     |
| /rcon reloadlog              | -                | Ricarica il file di log del server                                 |

### Comandi Moderativi

| Sintassi Comando             | Valori Accettati | Descrizione                                                        | 
| ---------------------------- | ---------------- | ------------------------------------------------------------------ | 
| /rcon kick [id]              | Intero           | Espelle il giocatore target dal server                             | 
| /rcon ban [id]               | Intero           | Bannare il giocatore target dal server                             | 
| /rcon banip [ip]             | Stringa          | Bannare un indirizzo IP dal server                                 | 
| /rcon unbanip [ip]           | Stringa          | Rimuove il ban da un indirizzo IP                                 | 
| /rcon reloadbans             | -                | Ricarica il file dei ban                                           |

<InlineVoucher />