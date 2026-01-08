---
id: spaceengineers-whitelist
title: "Space Engineers: Whitelist"
description: Informazioni su come mettere in whitelist il tuo server Space Engineers da ZAP-Hosting → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Una whitelist è una lista di accesso che limita chi può entrare nel tuo server. Space Engineers usa comunemente una whitelist basata su un gruppo Steam, dove solo i membri di un gruppo Steam specifico possono connettersi.

<InlineVoucher />

## Attivare la Whitelist

Crea un gruppo Steam per il tuo server e aggiungi i giocatori che vuoi autorizzare. Poi connettiti al tuo server via FTP e apri `SpaceEngineers-Dedicated.cfg`.

Assicurati che il server sia configurato in modalità privata e imposta l’ID del gruppo alla fine della configurazione.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Sostituisci l’ID del gruppo con il tuo ID del gruppo Steam. Salva il file e riavvia il server.

## Gestire i Giocatori in Whitelist

Per aggiungere qualcuno alla whitelist, invitalo al gruppo Steam e assicurati che abbia accettato l’invito. Potrà connettersi appena sarà membro del gruppo.

Per rimuovere qualcuno, toglilo dal gruppo Steam. Una volta che non sarà più membro, non potrà più connettersi. Se vuoi cambiare la whitelist su un gruppo diverso, modifica il valore `<GroupID>` e riavvia il server.

## Verificare il Funzionamento della Whitelist

Dopo il riavvio, prova a connetterti con un account Steam che non fa parte del gruppo Steam. Il server dovrebbe rifiutare la connessione. Poi prova con un account membro del gruppo.

Se l’accesso è ancora aperto, controlla che il server sia in modalità privata e che la voce `<GroupID>` sia presente nel file `SpaceEngineers-Dedicated.cfg` attivo.

## Conclusione

Se hai seguito tutto correttamente, la tua whitelist è attiva e puoi controllare esattamente chi può entrare nel server. Se l’accesso non funziona come previsto, riavvia il server una volta e ricontrolla il file o l’output dei comandi per confermare che la modifica sia stata applicata.

Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />