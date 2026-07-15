---
id: palworld-enable-global-palbox
title: "Palworld: Abilita Global Palbox"
description: "Scopri come abilitare l'impostazione Global Palbox di Palworld per l'importazione e l'esportazione globale di Pal sul tuo server dedicato. -> Scopri di più ora"
sidebar_label: Palworld: Abilita Global Palbox
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il *Global Palbox* in Palworld permette ai giocatori di trasferire i Pal tra server utilizzando il sistema globale di archiviazione cloud di Palworld. In questa guida, imparerai come abilitare l'importazione e l'esportazione del Global Palbox sul tuo server Palworld di ZAP-Hosting modificando manualmente il file di configurazione corretto.



## Preparazione

Prima di iniziare, assicurati di:

- avere accesso al tuo server di gioco Palworld tramite l'interfaccia web di ZAP-Hosting
- che il server sia fermo o possa essere riavviato dopo le modifiche
- poter accedere alla sezione `Configs` nell'amministrazione del server di gioco

:::info Accesso al File di Configurazione
Per i server Palworld di ZAP-Hosting, le impostazioni rilevanti possono essere modificate tramite l'amministrazione del server di gioco nella sezione `Configs`. Non è necessario l'accesso esterno ai file se l'editor di configurazione è disponibile lì.
:::

## Apri il File di Configurazione di Palworld

Per abilitare la funzione Global Palbox, devi modificare il file `PalWorldSettings.ini`.

### Trova il File di Configurazione nell’Interfaccia ZAP

1. Accedi al [sito di ZAP-Hosting](https://zap-hosting.com).
2. Apri l’amministrazione del tuo server di gioco Palworld.
3. Vai alla sezione `Configs`.
4. Apri il file chiamato `PalWorldSettings.ini`.

Questo file contiene le impostazioni principali del server usate da Palworld, incluse le opzioni per il Global Palbox.

:::note Configurazione Manuale Necessaria
L’impostazione del Global Palbox si configura manualmente tramite il file di configurazione del server. Se non vedi un interruttore separato per questa funzione nell’interfaccia, modificare direttamente `PalWorldSettings.ini` è il metodo corretto.
:::

## Abilita Importazione ed Esportazione Global Palbox

Una volta aperto `PalWorldSettings.ini`, devi individuare la lista delle opzioni del server e modificare le voci relative al Global Palbox.

### Chiavi di Configurazione Richieste

Le seguenti impostazioni controllano il comportamento del Global Palbox:

| Chiave di Configurazione | Valore | Funzione |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` o `False` | Permette ai giocatori di importare Pal dal Global Palbox |
| `bAllowGlobalPalboxExport` | `True` o `False` | Permette ai giocatori di esportare Pal nel Global Palbox |

Secondo le informazioni di riferimento di terze parti, `bAllowGlobalPalboxImport` è disabilitato di default con `False`, mentre `bAllowGlobalPalboxExport` è abilitato di default con `True`. Se il tuo file contiene già questi valori, devi solo modificarli secondo necessità.

### Imposta i Valori

Per abilitare completamente i trasferimenti Global Palbox tra server, imposta entrambi i valori su `True`.

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Se queste opzioni sono già presenti nel file, sostituisci i valori esistenti. Se non sono presenti, aggiungile nella sezione delle impostazioni del server in `PalWorldSettings.ini`.

:::caution Mantieni Intatta la Sintassi Esistente
I file di configurazione di Palworld sono sensibili alla formattazione. Modifica solo i valori richiesti ed evita di rimuovere virgole, parentesi o altre voci esistenti se queste opzioni fanno parte di una linea di impostazioni più ampia nel tuo file.
:::

## Salva le Modifiche

Dopo aver modificato il file:

1. Salva le modifiche nell’editor di `PalWorldSettings.ini`.
2. Verifica che entrambi i valori del Global Palbox siano presenti e impostati correttamente.

Se il pannello del server offre solo un pulsante di salvataggio, usalo prima di riavviare il server nel passaggio successivo.

## Riavvia il Server

Dopo aver cambiato le impostazioni del Global Palbox, devi riavviare il server Palworld affinché la nuova configurazione venga caricata.

### Applica le Nuove Impostazioni

Riavvia il server dall’amministrazione del server di gioco dopo aver salvato il file.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Esegui comandi console aggiuntivi | No |

Non sono necessari comandi aggiuntivi dopo aver modificato il file di configurazione. Un normale riavvio del server è sufficiente per applicare la nuova impostazione Global Palbox di Palworld.

:::tip Verifica la Funzione In-Game
Dopo il riavvio, entra nel server e prova se i giocatori possono importare ed esportare Pal tramite il Global Palbox. Questo è il modo più semplice per confermare che l’impostazione è stata applicata con successo.
:::

## Risoluzione dei Problemi

Se il Global Palbox non funziona dopo il riavvio, controlla i seguenti punti.

### Conferma che i Valori Sono Stati Salvati Correttamente

Apri di nuovo `PalWorldSettings.ini` e verifica che questi valori siano ancora presenti:

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Se i valori sono tornati indietro, il file potrebbe non essere stato salvato correttamente.

### Controlla Problemi di Formattazione

Se hai inserito i valori in un blocco di impostazioni esistente, assicurati che la sintassi circostante sia ancora valida. Una formattazione errata in `PalWorldSettings.ini` può far sì che Palworld ignori le impostazioni o non le carichi correttamente.

### Riavvia di Nuovo il Server

Se hai salvato il file mentre il server era in esecuzione, esegui un altro riavvio completo per assicurarti che la nuova configurazione venga applicata.

:::danger Disponibilità della Funzione Dipende dalla Versione del Gioco
Il Global Palbox è una funzione fornita direttamente da Palworld. Se l’impostazione non funziona anche se la configurazione è corretta, la funzione potrebbe dipendere dalla versione attuale del server Palworld o da limitazioni temporanee lato gioco. In tal caso, verifica che il tuo server sia aggiornato all’ultima versione.
:::

## Conclusione

Congratulazioni, hai abilitato con successo l’importazione e l’esportazione del Global Palbox sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂