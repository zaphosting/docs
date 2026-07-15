---
id: palworld-technology-ids
title: "Palworld: Technology IDs"
description: "Learn how to manage Palworld technology IDs, disable specific technology entries, and edit the correct server configuration safely. -> Learn more now"
sidebar_label: "Technology IDs"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld utilizza gli *ID tecnologia* per identificare le tecnologie sbloccabili e alcune impostazioni relative agli oggetti nella configurazione del server. In questa guida, imparerai come disabilitare tecnologie specifiche modificando l’impostazione `DenyTechnologyList` nella configurazione del tuo server Palworld su ZAP-Hosting.



## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite l’interfaccia web di ZAP-Hosting e i permessi per modificare i file di configurazione.

:::info Accesso alla Configurazione Necessario
Devi avere accesso all’amministrazione del server di gioco e alla sezione `Configs` per poter modificare il file `PalWorldSettings.ini`.
:::

:::note Fonte degli ID Tecnologia
Gli ID tecnologia di Palworld sono valori basati su stringhe, come `GrapplingGun`, `GrapplingGun2` o `SkillUnlock_JetDragon`. Una lista di riferimento aggiornata di terze parti è disponibile qui: [Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids).

Poiché gli aggiornamenti di Palworld possono modificare le tecnologie disponibili, verifica sempre che gli ID che intendi usare siano ancora validi nella versione attuale del gioco.
:::

## Comprendere gli ID tecnologia

Gli ID tecnologia sono identificatori interni usati da Palworld per le tecnologie sbloccabili. Nei server dedicati, questi ID possono essere utilizzati in opzioni di configurazione specifiche per controllare il comportamento di gioco.

L’impostazione più rilevante per questo argomento è `DenyTechnologyList`, che ti permette di bloccare determinate tecnologie impedendone lo sblocco o l’uso sul tuo server.

### Uso supportato in configurazione

La tabella seguente mostra la chiave di configurazione rilevante trattata in questa guida:

| Chiave Configurazione | Scopo | Formato valore |
| --- | --- | --- |
| `DenyTechnologyList` | Disabilita tecnologie specifiche sul server | Lista di ID tecnologia separati da virgola |

### Esempi di ID tecnologia

Gli ID seguenti sono esempi comunemente citati:

| ID Tecnologia | Significato esempio |
| --- | --- |
| `GrapplingGun` | Rampino |
| `GrapplingGun2` | Rampino di livello superiore |
| `SkillUnlock_JetDragon` | Sblocco relativo al Jetragon |
| `SkillUnlock_IceHorse` | Sblocco relativo al Frostallion |
| `PALBOX` | Tecnologia relativa a Palbox |
| `RepairBench` | Banco di riparazione |
| `AIcore` | Core AI |

:::caution Usa gli ID Esatti
Gli ID tecnologia sono valori stringa case-sensitive. Se inserisci un ID errato, Palworld potrebbe ignorarlo e la tecnologia non verrà disabilitata come previsto.
:::

## Aprire il file di configurazione di Palworld

Per configurare gli ID tecnologia sul tuo server ZAP-Hosting, devi modificare manualmente il file di impostazioni corretto di Palworld.

### Trova il file nell’interfaccia ZAP-Hosting

1. Accedi all’interfaccia web di ZAP-Hosting.
2. Apri il tuo server di gioco **Palworld**.
3. Vai alla sezione **Configs** nell’amministrazione del server.
4. Apri il file `PalWorldSettings.ini`.

Questo è il file di configurazione dove si trova e si modifica l’impostazione `DenyTechnologyList`.



### Individua l’impostazione rilevante

All’interno di `PalWorldSettings.ini`, cerca il blocco delle opzioni server che contiene le impostazioni di Palworld.

Devi trovare o aggiungere la voce `DenyTechnologyList`.

:::tip Cerca velocemente nel file
Usa la funzione di ricerca del browser con `CTRL` + `F` e cerca `DenyTechnologyList` per trovare più rapidamente l’impostazione.
:::

## Configura `DenyTechnologyList`

Ora puoi definire quali tecnologie devono essere bloccate sul tuo server.

### Formato del valore

`DenyTechnologyList` utilizza una lista di ID tecnologia separati da virgola.

Esempio di formato:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

Ogni voce deve essere un ID tecnologia Palworld valido. Non aggiungere descrizioni, spazi extra nell’ID o caratteri non supportati.

### Aggiungi o modifica l’impostazione

Se l’impostazione esiste già, sostituisci il valore attuale con la lista desiderata.

Se l’impostazione non esiste, aggiungila nella sezione appropriata delle impostazioni server in `PalWorldSettings.ini`.

Esempio:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

Questo esempio disabilita diverse tecnologie tramite i loro ID.

### Riferimento esempio di configurazione

| Voce esempio | Risultato |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | Disabilita solo la tecnologia Rampino base |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | Disabilita più livelli di tecnologia Rampino |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | Disabilita sblocchi speciali selezionati |

:::note Uso correlato degli ID oggetto
Alcune impostazioni di Palworld relative agli oggetti usano anch’esse valori basati su ID. Ad esempio, riferimenti di terze parti indicano che `AdditionalDropItemWhenPlayerKillingInPvPMode` può usare ID Palworld per i drop PvP. Tuttavia, questa guida si concentra specificamente su `DenyTechnologyList`.
:::

## Salva e applica le modifiche

Dopo aver modificato la configurazione, devi salvare il file e riavviare il server affinché Palworld carichi le impostazioni aggiornate.

### Salva il file

Dopo aver finito di modificare `PalWorldSettings.ini`:

1. Salva le modifiche nell’editor della sezione `Configs`.
2. Ricontrolla la voce per confermare che gli ID siano scritti correttamente.

### Riavvia il server

Una volta salvato il file, riavvia il tuo server Palworld dall’amministrazione del server di gioco ZAP-Hosting.

Questo riavvio è necessario perché le modifiche in `PalWorldSettings.ini` non vengono applicate correttamente finché il server non parte con il file aggiornato.

:::info Riavvio Necessario
Dopo aver modificato `DenyTechnologyList` è necessario riavviare il server. Generalmente non serve alcun comando in-game aggiuntivo quando si usa il metodo del file di configurazione.
:::

## Verifica che le tecnologie siano disabilitate

Dopo il riavvio, dovresti confermare che la configurazione funzioni come previsto.

### Cosa controllare

Puoi verificare il risultato controllando se le tecnologie selezionate sono ancora disponibili in gioco.

Usa questa checklist:

| Controllo | Risultato atteso |
| --- | --- |
| Server riavviato con successo | Il server torna online normalmente |
| `PalWorldSettings.ini` salvato correttamente | La voce `DenyTechnologyList` è ancora presente |
| Tecnologia disabilitata testata in gioco | La tecnologia selezionata non è più disponibile come previsto |

### Se l’impostazione non funziona

Se le tecnologie sono ancora disponibili, verifica quanto segue:

| Problema possibile | Cosa verificare |
| --- | --- |
| ID non valido | Conferma che l’ID tecnologia corrisponda esattamente alla versione attuale del gioco |
| Problema di formattazione | Assicurati che la lista sia separata da virgole e scritta come stringhe ID semplici |
| File non salvato | Riapri `PalWorldSettings.ini` e conferma che il valore sia ancora presente |
| Server non riavviato | Riavvia nuovamente il server dopo aver salvato le modifiche |

:::caution Aggiornamenti del gioco possono cambiare gli ID
Palworld riceve aggiornamenti continui e le informazioni sulle tecnologie possono cambiare nel tempo. Se un ID precedentemente valido non funziona più, verifica con un riferimento aggiornato e affidabile prima di procedere con ulteriori troubleshooting.
:::

## Conclusione

Congratulazioni, hai disabilitato con successo tecnologie specifiche sul tuo server Palworld usando gli ID tecnologia. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂