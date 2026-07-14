---
id: palworld-update-your-server
title: "Palworld: Aggiorna il tuo Server"
description: "Scopri come aggiornare il tuo server Palworld, avviare un aggiornamento di versione e verificare l’ultima build del gioco Palworld su ZAP-Hosting -> Scopri di più ora"
sidebar_label: Palworld: Aggiorna il tuo Server
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Gli aggiornamenti del server Palworld sono necessari per mantenere il tuo server compatibile con l’ultima versione del gioco Palworld e l’aggiornamento del client. In questa guida imparerai come aggiornare il tuo server Palworld su ZAP-Hosting, dove controllare le impostazioni rilevanti e cosa fare se l’aggiornamento non viene applicato correttamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting e il permesso di riavviare o reinstallare il server se necessario.

:::info Requisito di Accesso al Server
Devi avere accesso all’amministrazione del tuo server di gioco, incluse le sezioni **Configs**, **Console** e i controlli di accensione nel pannello ZAP-Hosting.
:::

:::note Riguardo ai File di Configurazione
Per gli aggiornamenti di Palworld, normalmente non è necessario modificare alcun file di configurazione di gioco per installare una nuova versione. Il processo di aggiornamento è solitamente gestito dall’installazione del server stessa. Tuttavia, dovresti comunque controllare le impostazioni del server nel pannello se gestisci manualmente il comportamento degli aggiornamenti.
:::

## Come Funzionano gli Aggiornamenti del Server Palworld su ZAP-Hosting

I server dedicati Palworld sulle piattaforme di hosting aggiornano comunemente quando l’installazione del server verifica la presenza di una build più recente all’avvio. In base alle informazioni attualmente disponibili, i server ZAP-Hosting effettuano tipicamente questo controllo automaticamente all’avvio o al riavvio del server.

Se il tuo server è già configurato per aggiornamenti automatici, di solito ti basta solo riavviarlo dopo una nuova release di Palworld. Se l’aggiornamento automatico è stato disabilitato nelle impostazioni del servizio, devi riavviare manualmente il server dopo ogni patch affinché il controllo aggiornamenti venga eseguito.

:::caution Disponibilità dell’Aggiornamento Automatico
L’etichetta esatta e la disponibilità dei controlli per l’aggiornamento automatico possono variare a seconda dell’interfaccia attuale del server di gioco ZAP-Hosting e della configurazione del prodotto. Se non vedi un toggle relativo all’aggiornamento nelle impostazioni del server, non presumere che manchi definitivamente; l’opzione potrebbe variare in base alla versione del prodotto o essere gestita automaticamente in background.
:::

## Controlla le Impostazioni Rilevanti del Server

Per iniziare, apri il tuo server Palworld nell’interfaccia web di ZAP-Hosting e verifica le impostazioni disponibili relative agli aggiornamenti e al comportamento di avvio.

### Apri l’Amministrazione del Server

1. Accedi all’interfaccia web di ZAP-Hosting.
2. Apri il tuo server di gioco **Palworld**.
3. Controlla le sezioni disponibili come **Configs**, **Console** e i controlli di accensione del server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Verifica se è Necessario Modificare un File di Configurazione

Per il processo di aggiornamento di Palworld in sé, non esiste una voce confermata nel file di configurazione Palworld che modifichi manualmente la versione del gioco nell’operazione standard del server. I file di configurazione di gioco Palworld rilevanti sotto **Configs** sono generalmente usati per impostazioni del server come regole di gioco, non per scaricare una nuova build del server.

Il file di impostazioni Palworld comunemente usato è:

| File | Scopo tipico | Dove trovarlo |
| --- | --- | --- |
| `PalWorldSettings.ini` | Impostazioni di gameplay e comportamento del server | Amministrazione del server di gioco sotto **Configs** |

:::note Nessuna Voce Versione Manuale
Non esiste una chiave verificata in `PalWorldSettings.ini` per forzare un aggiornamento specifico della versione del server Palworld in una configurazione standard ZAP-Hosting. Se il tuo obiettivo è solo aggiornare il software del server, modificare `PalWorldSettings.ini` normalmente non è necessario.
:::

## Aggiorna il Server

Una volta confermato l’accesso al server e controllate le impostazioni disponibili, puoi avviare il processo di aggiornamento.

### Riavvia il Server per Avviare un Controllo di Aggiornamento

Il metodo principale è riavviare il server. Su molti server Palworld ospitati, l’avvio attiva un controllo per aggiornamenti di gioco disponibili.

1. Ferma o riavvia il tuo server Palworld dall’interfaccia web di ZAP-Hosting.
2. Attendi che il server sia completamente spento.
3. Avvia nuovamente il server.
4. Concedi alcuni minuti per completare l’avvio e il processo di aggiornamento.

Se il comportamento di aggiornamento automatico ZAP-Hosting è attivo per il tuo servizio, questo riavvio dovrebbe far sì che il server scarichi e applichi l’ultimo aggiornamento Palworld disponibile.

### Se gli Aggiornamenti Automatici Sono Disabilitati

Se il tuo servizio è configurato per non aggiornarsi automaticamente, devi riavviare manualmente il server dopo ogni patch o aggiornamento di versione di Palworld rilasciato.

Segui lo stesso procedimento:

1. Ferma il server.
2. Avvia il server di nuovo.
3. Attendi che il server completi l’avvio.

:::tip Best Practice Dopo un Rilascio di Palworld
Dopo l’annuncio di una nuova data di rilascio o il deploy di una patch di Palworld, riavvia il server in un periodo di bassa attività. Questo aiuta a evitare problemi di connessione dei giocatori causati da mismatch tra versione client e server.
:::

## Verifica che l’Aggiornamento sia Stato Applicato

Dopo che il server è ripartito, dovresti confermare che la nuova versione sia attiva.

### Controlla l’Output della Console

Apri la **Console** nell’amministrazione del server di gioco e controlla il log di avvio. Cerca segnali che il server abbia completato l’avvio normalmente e non abbia incontrato errori di aggiornamento o di validazione file.

Poiché le righe di log esatte possono variare a seconda della build del server, concentrati sul fatto che il server si avvii con successo e accetti connessioni da client con l’ultima versione di Palworld.

### Usa il Comando `info`

Se la console del tuo server lo supporta, esegui il seguente comando:

```text
info
```

Questo comando può essere usato per controllare le informazioni del server dopo l’avvio.

| Comando | Scopo |
| --- | --- |
| `info` | Mostra informazioni sul server per la verifica dopo l’aggiornamento |

:::note Disponibilità del Comando
Il supporto ai comandi console può variare a seconda dell’implementazione attuale del server dedicato Palworld e del modo in cui l’host espone l’accesso alla console. Se `info` non restituisce output utile nel tuo ambiente, usa invece il log di avvio e un test di connessione da un client di gioco aggiornato.
:::

## Risoluzione dei Problemi in Caso di Aggiornamento Fallito

Se il riavvio non aggiorna il server, dovresti usare le opzioni di recupero disponibili nel pannello ZAP-Hosting.

### Reinstalla o Verifica i File del Server

Se il server sembra ancora eseguire una versione vecchia dopo il riavvio:

1. Ferma completamente il server.
2. Apri l’opzione di reinstallazione o recupero nell’amministrazione del server di gioco ZAP-Hosting.
3. Se disponibile, usa l’opzione **Verifica integrità** o un controllo file simile.
4. Avvia di nuovo il server dopo il completamento del processo.

Questo processo ricontrolla o riscarica i file del server Palworld e può risolvere aggiornamenti incompleti o falliti.

:::caution Precauzione sui Dati Salvati
Prima di usare funzioni legate alla reinstallazione, assicurati di capire se l’opzione selezionata interessa solo i file di gioco o anche i dati del mondo. Se il pannello non lo spiega chiaramente, crea prima un backup o contatta il supporto prima di procedere.
:::

### Conferma la Corrispondenza tra Versione Client e Server

A volte il server è aggiornato correttamente, ma i giocatori non riescono comunque a connettersi perché il loro client di gioco locale è su una versione diversa.

Controlla quanto segue:

| Controllo | Perché è importante |
| --- | --- |
| Server riavviato dopo la patch | L’avvio spesso attiva l’aggiornamento |
| Ultimo aggiornamento client installato | I giocatori devono avere la stessa versione |
| Nessun errore di avvio in console | Gli errori possono bloccare l’aggiornamento |
| Verifica file completata | File corrotti possono bloccare aggiornamenti |

## Cosa Devi Modificare in Configs

Poiché questa guida copre specificamente un processo manuale e il compito fa riferimento a **Configs**, è importante chiarire l’ambito:

- I file di configurazione Palworld sotto **Configs** sono usati per le impostazioni del server.
- Non esiste una voce di configurazione Palworld verificata in `PalWorldSettings.ini` che scarichi o applichi manualmente un aggiornamento software del server.
- Per un aggiornamento di versione normale, generalmente non devi modificare alcun valore nel file di configurazione.
- L’azione richiesta è solitamente un **riavvio del server**, seguito da una **verifica file o reinstallazione** solo se l’aggiornamento fallisce.

Se in futuro ZAP-Hosting dovesse esporre un toggle dedicato per l’aggiornamento o un parametro di avvio nel pannello, dovresti usare l’etichetta esatta mostrata nella tua interfaccia invece di aggiungere voci non supportate nel file di configurazione.

:::danger Non Aggiungere Chiavi di Configurazione Non Verificate
Non incollare comandi di aggiornamento casuali, parametri SteamCMD o chiavi non documentate in `PalWorldSettings.ini` o altri file sotto **Configs** a meno che non siano esplicitamente documentati per il tuo servizio Palworld ZAP-Hosting attuale. Voci non supportate non aggiorneranno il server in modo affidabile e potrebbero causare problemi di configurazione.
:::

## Dopo l’Aggiornamento

Una volta che l’aggiornamento è stato applicato con successo:

1. Assicurati che il server funzioni normalmente.
2. Controlla la console per eventuali errori.
3. Prova a connetterti al server con un client Palworld aggiornato.
4. Esegui `info` in console se supportato.

A questo punto il tuo server dovrebbe essere pronto per i giocatori con l’ultima versione aggiornata.

## Conclusione

Congratulazioni, hai aggiornato con successo il tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂