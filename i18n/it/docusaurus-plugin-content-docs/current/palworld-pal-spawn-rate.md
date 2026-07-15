---
id: palworld-pal-spawn-rate
title: "Palworld: Frequenza di Spawn dei Pal"
description: "Scopri come modificare la frequenza di spawn dei Pal in Palworld modificando l'impostazione di spawn nel tuo server -> Scopri di più ora"
sidebar_label: "Frequenza di Spawn dei Pal"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di controllare quanto frequentemente i Pal spawnano nel tuo mondo tramite un'impostazione di configurazione del server. In questa guida, imparerai come modificare il file di configurazione corretto nell’amministrazione del server di gioco ZAP-Hosting e applicare in modo sicuro una nuova frequenza di spawn dei Pal.



## Preparazione

Prima di iniziare, assicurati di:

- avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting
- che il server sia offline o essere pronto a riavviarlo dopo aver effettuato le modifiche
- comprendere che valori di spawn più alti possono aumentare il carico sul server e ridurre le prestazioni

:::info Configurazione Manuale Necessaria
Questa modifica va effettuata manualmente modificando il file di configurazione del server nella sezione **Configs** dell’amministrazione del server di gioco. Non esiste uno slider dedicato nel pannello ZAP-Hosting per questa specifica impostazione.
:::

## Aprire il File di Configurazione di Palworld

Per modificare la frequenza di spawn dei Pal, devi editare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server **Palworld**.
2. Vai su **Configs**.
3. Apri il file `PalWorldSettings.ini`.

Questo file contiene le principali impostazioni di gioco del server, inclusa la moltiplicazione della frequenza di spawn dei Pal.

:::note Posizione del File di Configurazione
Per i server Palworld di ZAP-Hosting, il file rilevante è disponibile direttamente nella sezione **Configs** dell’amministrazione del server, come previsto dalla configurazione del server.
:::

## Modificare la Frequenza di Spawn dei Pal

L’impostazione che ti serve è `PalSpawnNumRate`.

### Cosa Fa `PalSpawnNumRate`

`PalSpawnNumRate` controlla il moltiplicatore della frequenza di spawn dei Pal sul tuo server.

| Chiave di configurazione | Valore predefinito | Descrizione |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | Controlla quanti Pal spawnano nel mondo. Valori più alti aumentano la frequenza di spawn. |

In Palworld, questo valore fa parte della riga `OptionSettings` all’interno di `PalWorldSettings.ini`.

### Modifica dell’Impostazione

Apri `PalWorldSettings.ini` e cerca la sezione `OptionSettings=`. All’interno di questa sezione, trova la voce `PalSpawnNumRate`.

Se la voce esiste già, modifica il suo valore. Per esempio:

```ini
PalSpawnNumRate=1.000000
```

Puoi aumentarla così:

```ini
PalSpawnNumRate=2.000000
```

Questo esempio raddoppia il moltiplicatore di spawn dei Pal rispetto al valore predefinito.

:::tip Valori Consigliati per Iniziare
Inizia con aumenti piccoli come `1.500000` o `2.000000` e testa le prestazioni del server prima di usare valori più aggressivi.
:::

### Esempio di Configurazione

A seconda del contenuto del tuo file, l’impostazione potrebbe apparire all’interno di una lunga riga `OptionSettings` simile a questa:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution Mantieni la Sintassi Esistente
Non rimuovere virgole, parentesi o altri valori esistenti nella riga `OptionSettings`. Una formattazione errata in `PalWorldSettings.ini` può impedire al server di caricare correttamente la configurazione.
:::

## Valori Consigliati e Impatto sulle Prestazioni

Puoi usare valori diversi a seconda dell’esperienza di gioco che vuoi ottenere.

| Valore | Effetto |
| --- | --- |
| `1.000000` | Frequenza di spawn Pal predefinita |
| `1.500000` | Frequenza di spawn leggermente aumentata |
| `2.000000` | Più Pal visibili nel mondo in modo evidente |
| `3.000000` o superiore | Forte aumento degli spawn, può influire sulle prestazioni |

Valori più alti rendono il mondo più attivo, ma aumentano anche il numero di entità che il server deve gestire.

:::danger Valori di Spawn Elevati Possono Ridurre la Stabilità
Impostazioni di spawn molto alte possono influire negativamente sulle prestazioni del server, specialmente su server molto popolati o in combinazione con altre impostazioni di gioco impegnative. Se noti lag, riduci il valore e riavvia il server.
:::

## Salva e Riavvia il Server

Dopo aver modificato il file:

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Riavvia il tuo server Palworld dall’amministrazione del server di gioco ZAP-Hosting.

Il riavvio è necessario affinché la nuova frequenza di spawn dei Pal abbia effetto.

## Verifica la Modifica

Quando il server è di nuovo online, entra nel tuo server Palworld e osserva l’attività nel mondo nelle aree dove normalmente appaiono i Pal.

Se la frequenza di spawn non sembra cambiata:

- riapri `PalWorldSettings.ini` e verifica che `PalSpawnNumRate` sia presente
- assicurati che il valore sia nella sezione corretta `OptionSettings`
- verifica che il file sia stato salvato correttamente
- riavvia nuovamente il server dopo aver confermato la modifica

## Riferimento Configurazione

| Voce | Valore |
| --- | --- |
| File di configurazione | `PalWorldSettings.ini` |
| Posizione ZAP-Hosting | Amministrazione server di gioco → `Configs` |
| Nome impostazione | `PalSpawnNumRate` |
| Valore predefinito | `1.000000` |
| Riavvio richiesto | Sì |

## Conclusione

Congratulazioni, hai modificato con successo la frequenza di spawn dei Pal sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂