---
id: palworld-reset-server
title: "Palworld: Reset Server"
description: "Learn how to reset your Palworld server in the ZAP web interface, understand which settings are removed, and restore default server data safely. -> Learn more now"
sidebar_label: Palworld: Reset Server
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld salva il tuo mondo, i progressi dei giocatori e le impostazioni del server direttamente sul server di gioco. In questa guida, scoprirai come resettare completamente il tuo server Palworld su ZAP-Hosting e ricominciare da un’installazione pulita di default.

:::danger Attenzione: Cancellazione Completa dei Dati
Un reset completo elimina definitivamente i dati di salvataggio esistenti, le modifiche di configurazione e qualsiasi altro file del server presente sull’installazione attuale. Usalo solo come ultima risorsa.
:::



## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting e di non aver più bisogno dei dati del mondo attuale.

:::info Fai un Backup dei Dati Importanti
Se vuoi conservare una copia del tuo mondo o della configurazione attuale, crea un backup prima di procedere. Dopo il reset, i dati cancellati normalmente non possono essere recuperati.
:::

## Cosa succede con il reset del server Palworld

Un reset completo di Palworld non è la stessa cosa di modificare una singola impostazione nel file di configurazione. Invece, reinstalla l’intero server e rimuove i dati correnti.

Il processo di reset solitamente elimina:

| Tipo di dato | Rimosso durante il reset |
| --- | --- |
| Dati di salvataggio del mondo | Sì |
| Progressi dei giocatori | Sì |
| Modifiche alla configurazione del server | Sì |
| Mod o file personalizzati installati | Sì |
| File di gioco di default | Reinstallati automaticamente |

Dopo il reset, il server parte con un’installazione fresca e impostazioni di default.

## Controlla prima la posizione della configurazione

Per modifiche normali alla configurazione di Palworld, puoi accedere ai file rilevanti nella gestione del server di gioco sotto `Configs`. Le impostazioni principali di Palworld si trovano comunemente in questo file:

| File | Scopo |
| --- | --- |
| `PalWorldSettings.ini` | File principale di configurazione del server Palworld |

Nell’interfaccia ZAP-Hosting, puoi solitamente accedere a questo tramite la gestione del server Palworld sotto `Configs`.

:::note Il reset non richiede modifiche manuali alla configurazione
Un reset completo del server non richiede di modificare manualmente `PalWorldSettings.ini`. Questo file serve per modifiche normali, ma un reset completo si ottiene reinstallando o formattando il server, così che tutti i file vengano ricreati con valori di default.
:::

Se vuoi solo cambiare impostazioni di gioco senza cancellare tutto il server, modifica il file di configurazione in `Configs` invece di fare un reset completo.

## Ferma il server

Prima di iniziare il reset, devi fermare completamente il server Palworld.

1. Accedi all’interfaccia web di ZAP-Hosting.
2. Apri il tuo server di gioco Palworld.
3. Ferma il server usando i controlli di amministrazione.
4. Attendi che lo stato del server confermi che è offline.

:::caution Non resettare mentre il server è attivo
Se avvii un reset mentre il server è ancora in funzione, i file potrebbero non essere rimossi correttamente e i dati di salvataggio potrebbero diventare incoerenti.
:::

## Reinstalla e resetta il server

Un reset completo su Palworld si esegue reinstallando il server con opzioni di formattazione o reset nell’interfaccia ZAP.

### Apri la funzione di reinstallazione

Nella gestione del server Palworld, cerca la funzione di reinstallazione o reset nell’area di gestione del server.

Poiché le etichette dell’interfaccia possono variare tra versioni del pannello, la dicitura esatta potrebbe differire leggermente. Su ZAP-Hosting, questa funzione si trova generalmente nell’area di amministrazione del server dove sono disponibili azioni di reinstallazione o formattazione.



### Avvia il reset completo

Usa l’opzione di reinstallazione che esegue una formattazione o reset completo dei dati del server.

Durante questo passaggio, conferma l’azione se il pannello richiede una conferma.

:::danger Questa azione cancella tutti i dati del server
Una reinstallazione o formattazione completa elimina salvataggi, configurazioni e file personalizzati del server. Procedi solo se sei sicuro di voler resettare tutto.
:::

### Attendi il completamento dell’installazione

Dopo aver confermato il reset, attendi che il processo di reinstallazione sia terminato. A seconda dello stato del pannello e della dimensione del server, potrebbe richiedere qualche minuto.

Non interrompere il processo mentre il server viene reinstallato.

## Avvia il server Palworld fresco

Una volta terminata la reinstallazione, avvia di nuovo il server Palworld dalla gestione del server.

Dopo l’avvio:

- verrà creato un nuovo salvataggio del mondo
- verranno usate le impostazioni di default del server
- i progressi precedenti di giocatori e mondo non saranno più presenti

Se necessario, puoi ora tornare in `Configs` e modificare di nuovo le impostazioni di Palworld in `PalWorldSettings.ini`.

## Verifica il risultato del reset

Dopo che il server è partito, connettiti e verifica che il reset sia andato a buon fine.

Dovresti controllare quanto segue:

| Controllo | Risultato atteso |
| --- | --- |
| Stato del mondo | Nuovo mondo fresco |
| Dati giocatore | Nessun progresso precedente |
| Impostazioni server | Valori di default a meno che non siano stati modificati di nuovo |
| File personalizzati o mod | Rimossi a meno che non reinstallati manualmente |

Se il vecchio mondo è ancora presente, ferma il server e verifica se il processo di reinstallazione è stato completato correttamente nel pannello ZAP. Se il pannello non ha eseguito un reset completo, potrebbe essere necessario ripetere la procedura con attenzione.

## Riconfigura le impostazioni del server dopo il reset

Dopo un reset riuscito, il tuo server Palworld userà valori di configurazione di default. Se vuoi personalizzare di nuovo il server, apri la sezione `Configs` nella gestione del server e modifica `PalWorldSettings.ini`.

Le attività tipiche dopo il reset possono includere:

- cambiare il nome del server
- impostare una password
- regolare difficoltà o valori di gameplay
- riapplicare modifiche personalizzate alla configurazione
- reinstallare mod supportate o file aggiuntivi se necessario

:::tip Riapplica le impostazioni con attenzione
Se una configurazione precedente ha causato problemi, evita di copiare subito tutte le vecchie impostazioni. Riapplica solo quelle che ti servono davvero per identificare più facilmente eventuali modifiche problematiche.
:::

## Riferimento configurazione

La tabella seguente riassume il file rilevante e il comportamento del reset:

| Voce | Dettagli |
| --- | --- |
| File di configurazione principale | `PalWorldSettings.ini` |
| Posizione ZAP per modifica configurazione | `Configs` nella gestione del server di gioco |
| Modifica manuale richiesta per reset completo | No |
| Azione richiesta per reset completo | Reinstallare o formattare/reset del server |
| Riavvio richiesto dopo | Sì, riavvia il server dopo la reinstallazione |
| Comandi aggiuntivi richiesti | Nessuno confermato |

:::note La nomenclatura dell’interfaccia può variare
La dicitura esatta dell’opzione di reinstallazione o formattazione può cambiare a seconda della versione attuale dell’interfaccia web ZAP. Se non trovi la funzione di reset, contatta il supporto prima di tentare metodi alternativi di cancellazione file.
:::

## Conclusione

Congratulazioni, hai resettato con successo il tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂