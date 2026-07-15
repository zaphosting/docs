---
id: palworld-structure-damage-rate
title: "Palworld: Tasso di Danno alle Strutture"
description: "Scopri come modificare i tassi di danno e decadimento delle strutture in Palworld modificando in modo sicuro e corretto la configurazione del server. -> Scopri di più ora"
sidebar_label: Palworld: Tasso di Danno alle Strutture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di controllare quanto danno subiscono le strutture e quanto velocemente decadono nel tempo. In questa guida imparerai come modificare manualmente il file di configurazione corretto nella tua amministrazione server di gioco ZAP-Hosting e applicare le nuove impostazioni di danno alle strutture.



## Preparazione

Prima di iniziare, assicurati che il tuo server Palworld sia già installato e che tu possa accedere alla sua amministrazione web.

:::info Accesso Richiesto
Hai bisogno di accesso al pannello di amministrazione del server di gioco ZAP-Hosting e all’area `Configs` del tuo server Palworld.
:::

:::note Configurazione Manuale
Questa configurazione si esegue modificando manualmente il file di configurazione di Palworld. Le impostazioni esatte non vengono modificate tramite un toggle one-click in questa guida.
:::

## Apri il file di configurazione corretto

Per modificare il danno e il decadimento delle strutture, devi editare il file `PalWorldSettings.ini`.

Nell’amministrazione del tuo server di gioco ZAP-Hosting:

1. Apri il tuo server **Palworld**.
2. Vai su **Configs**.
3. Apri il file `PalWorldSettings.ini`.

Questo file contiene i valori principali di configurazione del gameplay per il tuo server, inclusi i moltiplicatori relativi alle strutture.

## Modifica le impostazioni di danno alle strutture

I valori rilevanti sono memorizzati nelle voci di configurazione del server all’interno di `PalWorldSettings.ini`.

### Chiavi di configurazione rilevanti

Usa le seguenti impostazioni per controllare il comportamento del danno alle strutture:

| Chiave Config | Descrizione | Valore Predefinito |
| --- | --- | --- |
| `BuildObjectDamageRate` | Controlla quanto danno subiscono le strutture | `1.0` |
| `BuildObjectDeteriorationDamageRate` | Controlla quanto velocemente le strutture decadono nel tempo | `1.0` |

Un valore di `1.0` è il tasso normale predefinito. Valori più bassi riducono l’effetto, mentre valori più alti lo aumentano.

### Esempio di configurazione

A seconda del contenuto attuale del file, questi valori fanno tipicamente parte della lista delle opzioni del server in `PalWorldSettings.ini`.

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

Se la tua configurazione usa una stringa di opzioni combinata, assicurati di modificare solo i valori mantenendo intatta la sintassi circostante.

Per esempio:

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution Mantieni Intatta la Sintassi Esistente
`PalWorldSettings.ini` potrebbe contenere molte impostazioni in una singola riga `OptionSettings=(...)`. Se è il caso del tuo server, non rimuovere virgole, parentesi o altre voci esistenti durante la modifica del file.
:::

## Scegli valori adatti

Puoi regolare i moltiplicatori in base a quanto vuoi che le strutture costruite dai giocatori siano resistenti.

### Moltiplicatore danno alle strutture

`BuildObjectDamageRate` modifica quanto danno diretto riceve una struttura.

| Valore | Effetto |
| --- | --- |
| `0.5` | Le strutture subiscono metà danno |
| `1.0` | Danno standard alle strutture |
| `2.0` | Le strutture subiscono il doppio del danno |

### Moltiplicatore decadimento delle strutture

`BuildObjectDeteriorationDamageRate` modifica quanto velocemente le strutture decadono nel tempo.

| Valore | Effetto |
| --- | --- |
| `0.1` | Decadimento molto lento |
| `1.0` | Velocità di decadimento standard |
| `2.0` | Decadimento più veloce |

:::tip Decadimento Minimo Consigliato
Si consiglia di mantenere `BuildObjectDeteriorationDamageRate` a `0.1` o superiore. Un decadimento molto basso o disabilitato può lasciare strutture inutilizzate più a lungo, il che potrebbe influire negativamente sulla pulizia e sulle prestazioni del server nel tempo.
:::

## Salva il file e riavvia il server

Dopo aver modificato i valori in `PalWorldSettings.ini`, salva il file nella sezione `Configs`.

Devi quindi riavviare il server Palworld affinché le nuove impostazioni di danno alle strutture vengano caricate.

### Azioni richieste dopo la modifica

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Comando console aggiuntivo | Nessun comando verificato richiesto |

:::info Riavvio Necessario
Le modifiche a `BuildObjectDamageRate` e `BuildObjectDeteriorationDamageRate` non vengono applicate in modo affidabile finché il server non viene riavviato.
:::

## Verifica le modifiche

Una volta che il server è di nuovo online, entra nel tuo server Palworld e testa il nuovo comportamento.

Puoi verificare le modifiche controllando se:

- le strutture subiscono più o meno danno diretto rispetto a prima
- le strutture abbandonate o esposte decadono al tasso previsto

Se le modifiche non sembrano applicarsi, riapri `PalWorldSettings.ini` e conferma che:

- i nomi delle impostazioni siano scritti esattamente come `BuildObjectDamageRate` e `BuildObjectDeteriorationDamageRate`
- i valori siano posizionati nella sezione corretta o nella riga `OptionSettings`
- il server sia stato riavviato dopo il salvataggio

## Conclusione

Congratulazioni, hai modificato con successo i tassi di danno e decadimento delle strutture sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂