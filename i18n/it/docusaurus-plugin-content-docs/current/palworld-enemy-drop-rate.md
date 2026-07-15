---
id: palworld-enemy-drop-rate
title: "Palworld: Enemy Drop Rate"
description: "Learn how to change the Palworld enemy drop rate on your Palworld game server by editing the correct config value for better loot balance. -> Learn more now"
sidebar_label: Palworld: Enemy Drop Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

`EnemyDropItemRate` controlla quanti oggetti lasciano cadere i nemici in Palworld. In questa guida, imparerai come modificare manualmente il file di configurazione corretto nella tua amministrazione server di gioco ZAP-Hosting e applicare con successo il nuovo tasso di drop dei nemici.



## Preparazione

Prima di iniziare, assicurati di avere accesso al pannello di amministrazione del tuo server di gioco Palworld e i permessi per modificare i file di configurazione del server.

:::info Configurazione Manuale Necessaria
Questa configurazione si esegue modificando manualmente il file di configurazione del server. Il file rilevante è disponibile nella tua amministrazione server di gioco ZAP-Hosting sotto la sezione `Configs`.
:::

## Individua il File di Configurazione

Per cambiare il tasso di drop dei nemici, devi modificare il file `PalWorldSettings.ini`.

### Apri la Sezione Configs

Accedi al pannello di amministrazione del tuo server di gioco ZAP-Hosting e apri il tuo server Palworld. Poi vai nella sezione `Configs`, dove sono elencati i file di configurazione disponibili.

### Seleziona `PalWorldSettings.ini`

Apri il file `PalWorldSettings.ini` dalla sezione `Configs`. Questo file contiene i principali valori di configurazione del gameplay per il tuo server di gioco Palworld, inclusi i settaggi relativi al loot e ai drop.

:::note Panoramica del File di Configurazione
Nei server dedicati Palworld, le impostazioni di gioco sono solitamente memorizzate in `PalWorldSettings.ini`. Il moltiplicatore del loot dei nemici è configurato tramite la voce `EnemyDropItemRate`.
:::

## Modifica il Tasso di Drop dei Nemici

Ora che hai aperto il file corretto, puoi regolare il moltiplicatore del drop degli oggetti.

### Trova l’Impostazione Corretta

Cerca all’interno di `PalWorldSettings.ini` la riga `OptionSettings` e individua la seguente chiave:

```ini
EnemyDropItemRate=1.000000
```

Se la chiave è già presente, modifica il valore con il moltiplicatore che preferisci.

### Imposta il Moltiplicatore Desiderato

`EnemyDropItemRate` usa un moltiplicatore numerico:

| Chiave di Configurazione | Valore Predefinito | Valore Esempio | Effetto |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | I nemici rilasciano il doppio degli oggetti |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | I nemici rilasciano meno oggetti |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | I nemici rilasciano il triplo degli oggetti |

Ad esempio, per raddoppiare il loot lasciato da nemici sconfitti, Pals selvatici e boss, imposta:

```ini
EnemyDropItemRate=2.000000
```

Se stai modificando l’intera voce `OptionSettings`, potrebbe apparire simile a questo snippet:

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution Mantieni Intatte le Impostazioni Esistenti
In molte configurazioni server Palworld, `OptionSettings` contiene molti valori in un’unica riga. Modifica solo il valore di `EnemyDropItemRate` ed evita di rimuovere virgole, parentesi o altre impostazioni esistenti, perché ciò potrebbe causare errori nella configurazione.
:::

## Controlla i Limiti di Drop Correlati

Moltiplicatori di loot più alti possono aumentare il numero di oggetti lasciati a terra. Questo potrebbe influire sulle prestazioni del server, specialmente durante combattimenti intensi o scontri con boss.

### Verifica `DropItemMaxNum`

Se il tuo server ha già un alto numero di oggetti lasciati contemporaneamente, controlla l’impostazione `DropItemMaxNum` nello stesso file di configurazione.

| Chiave di Configurazione | Scopo |
| --- | --- |
| `EnemyDropItemRate` | Moltiplica il loot lasciato dai nemici sconfitti |
| `DropItemMaxNum` | Limita quanti oggetti possono esistere contemporaneamente a terra |

:::tip Bilancia Loot e Prestazioni
Se aumenti significativamente `EnemyDropItemRate`, considera di mantenere `DropItemMaxNum` a un valore ragionevole per ridurre il rischio di accumulo eccessivo di oggetti e problemi di prestazioni.
:::

## Salva e Applica le Modifiche

Dopo aver modificato la configurazione, salva il file `PalWorldSettings.ini` nella sezione `Configs`.

### Riavvia il Server

Una volta salvato il file, riavvia il tuo server Palworld per caricare la nuova impostazione.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Comando console aggiuntivo | Nessun comando verificato richiesto |

:::info Riavvio Necessario
Le modifiche a `PalWorldSettings.ini` non vengono applicate immediatamente durante il runtime. Devi riavviare il server dopo aver salvato il file.
:::

## Verifica il Nuovo Tasso di Drop

Dopo il riavvio, entra nel tuo server Palworld e sconfiggi nemici per confermare che il nuovo moltiplicatore di loot funzioni come previsto.

Se la quantità di drop non sembra cambiare, riapri `PalWorldSettings.ini` e verifica che:

- `EnemyDropItemRate` sia scritto correttamente
- il valore sia all’interno della corretta configurazione `OptionSettings`
- il file sia stato salvato con successo
- il server sia stato riavviato dopo la modifica

## Conclusione

Congratulazioni, hai modificato con successo il tasso di drop dei nemici sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂