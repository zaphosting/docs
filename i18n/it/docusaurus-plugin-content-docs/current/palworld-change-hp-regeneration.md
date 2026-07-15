---
id: palworld-change-hp-regeneration
title: "Palworld: Modifica la Rigenerazione HP"
description: "Scopri come modificare la rigenerazione HP in Palworld modificando le impostazioni di rigenerazione di giocatori e Pal sul tuo server per una guarigione più veloce, più lenta o disabilitata -> Scopri di più ora"
sidebar_label: "Modifica la Rigenerazione HP"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di modificare le impostazioni di rigenerazione sia per i giocatori che per i Pal tramite la configurazione principale del server. In questa guida, imparerai come modificare il file di configurazione corretto nell’interfaccia web di ZAP-Hosting, regolare i valori di rigenerazione HP e applicare correttamente le modifiche.



## Preparazione

Prima di iniziare, assicurati che il tuo server Palworld sia online e che tu possa accedere alla sua amministrazione web tramite il pannello ZAP-Hosting.

:::info Accesso alla Configurazione Necessario
Devi avere accesso all’amministrazione del tuo server di gioco e all’area `Configs` per modificare manualmente i file di configurazione di Palworld.
:::

## Apri il File di Configurazione di Palworld

Per modificare la rigenerazione HP, devi editare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai su `Configs`.
3. Apri il file `PalWorldSettings.ini`.

Questo file contiene i valori principali di configurazione del gameplay per il tuo server, inclusi i moltiplicatori di rigenerazione della salute per giocatori e Pal.

:::note Modifiche Manuali alla Configurazione
A seconda della tua configurazione attuale, le impostazioni potrebbero apparire in una lunga riga di parametri all’interno della sezione `OptionSettings`. Modifica i valori esistenti con attenzione mantenendo intatta la formattazione.
:::

## Modifica i Valori di Rigenerazione HP

Le impostazioni di rigenerazione HP sono memorizzate come moltiplicatori numerici. Un valore di `1.0` usa la velocità di rigenerazione predefinita.

### Impostazioni di Rigenerazione Supportate

Usa le seguenti chiavi di configurazione in `PalWorldSettings.ini`:

| Chiave Config | Descrizione | Valore Predefinito |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | Velocità naturale di rigenerazione HP del giocatore | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | Rigenerazione HP del giocatore durante il sonno | `1.0` |
| `PalAutoHPRegeneRate` | Velocità naturale di rigenerazione HP del Pal | `1.0` |
| `PalAutoHpRegeneRateInSleep` | Rigenerazione HP del Pal durante il sonno nella Palbox | `1.0` |

### Comportamento dei Valori

Puoi usare questa logica per i valori quando modifichi la rigenerazione:

| Valore | Effetto |
| --- | --- |
| `1.0` | Velocità di rigenerazione predefinita |
| Maggiore di `1.0` | Guarigione più veloce |
| Minore di `1.0` | Guarigione più lenta |
| `0.0` | Disabilita la rigenerazione |

:::tip Scelta dei Valori di Rigenerazione
Se vuoi un’esperienza di sopravvivenza un po’ più facile, prova valori come `1.5` o `2.0`. Se preferisci una sfida maggiore, usa valori sotto `1.0` o disabilita completamente la rigenerazione con `0.0`.
:::

## Modifica le Voci di Configurazione

Nella maggior parte delle configurazioni server Palworld, questi valori si trovano all’interno della riga `OptionSettings=(...)` di `PalWorldSettings.ini`.

### Esempio di Configurazione

Aggiungi le voci se mancano, oppure modifica i valori esistenti se sono già presenti:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

Ad esempio, se vuoi una guarigione naturale più veloce per giocatori e Pal, potresti usare:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

Se vuoi modificare solo valori specifici, cambia solo quelle voci e lascia invariati gli altri valori di `OptionSettings` esistenti.

:::caution Conserva i Valori Esistenti di OptionSettings
Non eliminare voci non correlate dalla riga `OptionSettings`. Questa sezione di solito contiene molte impostazioni di gameplay e rimuoverle potrebbe resettare involontariamente altre parti della configurazione del server.
:::

## Salva e Applica le Modifiche

Dopo aver modificato il file, salva le modifiche nell’area `Configs` di ZAP-Hosting.

Per applicare le nuove impostazioni di rigenerazione, riavvia il tuo server Palworld.

### Riavvia il Server

1. Salva il file `PalWorldSettings.ini` modificato.
2. Torna all’amministrazione del server.
3. Riavvia il server.

Il riavvio è necessario perché Palworld legge queste impostazioni di gameplay all’avvio del server.

:::info Riavvio Necessario
Le modifiche alla rigenerazione HP non avranno effetto immediato mentre il server è in esecuzione. Devi riavviare il server dopo aver salvato la configurazione.
:::

## Verifica le Nuove Impostazioni di Rigenerazione

Dopo il riavvio del server, entra nel tuo server e testa il nuovo comportamento di guarigione in gioco.

Puoi verificare la modifica controllando:

- la rigenerazione naturale HP del giocatore
- la guarigione del giocatore durante il sonno
- la rigenerazione naturale HP del Pal
- il comportamento di guarigione del Pal nella Palbox durante il sonno

Se la rigenerazione non funziona come previsto, riapri `PalWorldSettings.ini` e verifica che:

- le chiavi di configurazione siano scritte esattamente correttamente
- i valori usino numeri decimali validi come `1.0` o `2.0`
- le voci siano ancora dentro la sezione `OptionSettings`
- il server sia stato riavviato dopo il salvataggio

## Conclusione

Congratulazioni, hai modificato con successo la rigenerazione HP in Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂