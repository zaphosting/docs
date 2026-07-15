---
id: palworld-building-limits
title: "Palworld: Limiti di Costruzione"
description: "Scopri come modificare i limiti di costruzione in Palworld, le regole per la costruzione della base e le restrizioni di area modificando manualmente la configurazione del server. -> Scopri di più ora"
sidebar_label: "Limiti di Costruzione"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di gestire diversi limiti e restrizioni di costruzione tramite la configurazione del server. In questa guida, imparerai come modificare manualmente il file di configurazione corretto nell’interfaccia web di ZAP-Hosting, cambiare i valori di costruzione rilevanti e applicare correttamente le modifiche.



## Preparazione

Prima di iniziare, assicurati di:

- avere accesso al tuo server di gioco Palworld nell’amministrazione server di ZAP-Hosting
- che il server sia offline o che tu sia pronto a riavviarlo dopo aver effettuato le modifiche
- sapere che questa guida copre i limiti generali di costruzione e le restrizioni di area, non i limiti specifici per le gilde

:::info Configurazione Manuale Necessaria
Queste impostazioni devono essere modificate manualmente nel file di configurazione. Il file rilevante è accessibile nell’amministrazione del server di gioco ZAP-Hosting sotto `Configs`.
:::

:::note Limiti Base Gilda
Se vuoi modificare il numero di basi per gilda invece dei limiti generali di costruzione trattati qui, dovresti usare la guida separata per i limiti base gilda, se disponibile in ZAP-Docs.
:::

## Apri il file di configurazione

Per modificare i limiti di costruzione, devi editare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai su `Configs`.
3. Apri il file `PalWorldSettings.ini`.

Questo file contiene le impostazioni principali del mondo e del gameplay per il tuo server Palworld, inclusi diversi parametri relativi alla costruzione.

## Modifica le impostazioni dei limiti di costruzione

I valori rilevanti sono memorizzati nella sezione `OptionSettings` di `PalWorldSettings.ini`.

### Chiavi di configurazione rilevanti

Usa le seguenti impostazioni per controllare i limiti di costruzione e le restrizioni di area:

| Chiave Config | Descrizione | Valore di esempio |
| --- | --- | --- |
| `MaxBuildingLimitNum` | Imposta il numero massimo di costruzioni per giocatore. `0` disabilita il limite. | `0` |
| `BaseCampMaxNum` | Imposta il numero massimo di basi consentite su tutto il server. | `128` |
| `bBuildAreaLimit` | Controlla se le restrizioni di costruzione vicino a certe strutture sono attive. | `False` |

### Esempio di configurazione

A seconda del contenuto attuale del file, questi valori fanno parte della riga `OptionSettings=(...)`.

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

Se il tuo file contiene già una riga `OptionSettings` più lunga, non rimuovere gli altri valori esistenti. Devi solo modificare o aggiungere le voci rilevanti all’interno dello stesso blocco di impostazioni.

### Cosa fa ogni valore

| Impostazione | Effetto |
| --- | --- |
| `MaxBuildingLimitNum=0` | Rimuove il limite di costruzione per giocatore |
| `MaxBuildingLimitNum=[tuo_numero]` | Limita ogni giocatore al numero specificato di costruzioni |
| `BaseCampMaxNum=[tuo_numero]` | Imposta il numero totale di basi consentite sul server |
| `bBuildAreaLimit=True` | Impedisce la costruzione vicino a strutture protette come i punti di viaggio rapido |
| `bBuildAreaLimit=False` | Disabilita questa restrizione di area |

:::caution Mantieni Intatta la Sintassi Esistente
`PalWorldSettings.ini` è sensibile alla formattazione. Assicurati di modificare solo i valori necessari e di mantenere intatte le virgole, parentesi e la struttura complessiva `OptionSettings=(...)`.
:::

## Salva le modifiche

Dopo aver modificato i valori:

1. Salva il file nella sezione `Configs`.
2. Controlla ancora una volta la riga per eventuali errori di formattazione.

Se la sintassi è errata, il server potrebbe ignorare le impostazioni modificate o non applicarle correttamente.

### Esempi di valori personalizzati

Ecco un esempio che limita ogni giocatore a `5000` costruzioni, consente fino a `20` basi sul server e mantiene attive le zone di costruzione limitate:

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

Ecco un altro esempio che rimuove il limite di costruzione per giocatore e disabilita le restrizioni di area:

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## Riavvia il server

Dopo aver salvato la configurazione, devi riavviare il tuo server Palworld affinché le nuove impostazioni vengano caricate.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. ferma il server se è ancora in esecuzione
2. avvia nuovamente il server

È necessario un riavvio completo perché le modifiche in `PalWorldSettings.ini` abbiano effetto.

:::tip Applica le Modifiche in Modo Affidabile
Se stai effettuando più modifiche di configurazione contemporaneamente, è consigliabile salvare tutte le modifiche prima e poi eseguire un solo riavvio. Questo aiuta a evitare downtime inutili.
:::

## Verifica i nuovi limiti

Una volta che il server è di nuovo online, connettiti e testa il nuovo comportamento di costruzione.

Dovresti verificare:

- se i giocatori possono posizionare più o meno strutture rispetto a prima
- se il numero totale di basi corrisponde al valore configurato
- se la costruzione vicino a strutture protette è consentita o bloccata in base a `bBuildAreaLimit`

Se le modifiche non sembrano applicarsi, riapri `PalWorldSettings.ini` e conferma che:

- i valori sono stati salvati correttamente
- le chiavi sono all’interno del blocco `OptionSettings`
- il server è stato riavviato completamente dopo la modifica

## Riferimento configurazione

| File | Posizione in ZAP-Hosting | Azione richiesta dopo la modifica |
| --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` nell’amministrazione del server di gioco | Riavvia il server |

| Impostazione | Uso consigliato |
| --- | --- |
| `MaxBuildingLimitNum` | Controlla i limiti di costruzione per giocatore |
| `BaseCampMaxNum` | Controlla il numero totale di basi sul server |
| `bBuildAreaLimit` | Consente o limita la costruzione vicino a strutture protette della mappa |

## Conclusione

Congratulazioni, hai modificato con successo i limiti di costruzione sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂