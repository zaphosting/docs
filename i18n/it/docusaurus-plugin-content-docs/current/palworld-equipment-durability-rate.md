---
id: palworld-equipment-durability-rate
title: "Palworld: Tasso di Durabilità dell'Equipaggiamento"
description: "Scopri come modificare la durabilità dell'equipaggiamento e regolare il tasso di durabilità sul tuo server Palworld modificando il valore di configurazione corretto. -> Scopri di più ora"
sidebar_label: Palworld: Tasso di Durabilità dell'Equipaggiamento
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In Palworld, il tasso di durabilità dell'equipaggiamento determina quanto velocemente i tuoi strumenti, armi e armature perdono durabilità durante l'uso. In questa guida, imparerai come modificare manualmente l'impostazione `EquipmentDurabilityDamageRate` nella configurazione del tuo server Palworld su ZAP-Hosting e applicare correttamente la modifica.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso all'amministrazione del tuo server di gioco Palworld tramite l'interfaccia web di ZAP-Hosting. Ti serve anche il permesso per modificare i file di configurazione del server nella sezione **Configs**.

:::info Configurazione Manuale Necessaria
Questa impostazione deve essere modificata manualmente nel file di configurazione di Palworld. Non esiste un comando separato da eseguire in gioco per questa modifica specifica.
:::

## Comprendere l'impostazione della durabilità

Palworld memorizza molte impostazioni di gioco nel file di configurazione `PalWorldSettings.ini`. L'impostazione rilevante per la durabilità dell'equipaggiamento è:

- `EquipmentDurabilityDamageRate`

Questo valore agisce come moltiplicatore per la perdita di durabilità:

| Chiave di Configurazione | Descrizione | Valore Predefinito |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | Controlla la velocità con cui l'equipaggiamento perde durabilità | `1.000000` |

Valori più bassi riducono la perdita di durabilità, quindi il tuo equipaggiamento durerà più a lungo. Un valore di `0.000000` disabilita completamente la perdita di durabilità per l'equipaggiamento.

:::note Cosa influenza questa impostazione
Questa impostazione modifica il tasso di perdita di durabilità per equipaggiamenti come strumenti, armi e armature. Non aumenta il danno degli oggetti, la velocità di riparazione o la qualità degli oggetti.
:::

## Aprire il file di configurazione di Palworld

Per modificare l'impostazione, devi modificare il file principale di configurazione del server Palworld dall'amministrazione del tuo server di gioco ZAP-Hosting.

### Trova il file nell'interfaccia ZAP-Hosting

1. Accedi al sito web di ZAP-Hosting.
2. Apri l'amministrazione del tuo server di gioco **Palworld**.
3. Vai su **Configs**.
4. Apri il file `PalWorldSettings.ini`.

Questo è il file dove sono memorizzati i valori di gioco di Palworld come durabilità, stamina, danno e altre impostazioni del mondo.

## Modificare il tasso di durabilità dell'equipaggiamento

Una volta aperto `PalWorldSettings.ini`, cerca la riga `OptionSettings`. Palworld di solito memorizza le impostazioni di gioco come voci separate da virgola all’interno di questa sezione.

### Aggiungere o modificare la voce di configurazione

Devi assicurarti che la seguente voce sia presente dentro `OptionSettings`:

```ini
EquipmentDurabilityDamageRate=1.000000
```

Se la chiave è già presente, sostituisci il valore attuale con quello che preferisci. Se manca, aggiungila all’interno del blocco `OptionSettings=(...)` esistente.

### Valori di esempio

Puoi usare i seguenti valori a seconda del risultato che vuoi ottenere:

| Valore | Effetto |
| --- | --- |
| `1.000000` | Perdita di durabilità predefinita |
| `0.500000` | L'equipaggiamento dura circa il doppio |
| `0.250000` | L'equipaggiamento dura circa quattro volte di più |
| `0.000000` | L'equipaggiamento diventa indistruttibile |

### Esempio di snippet di configurazione

Il contenuto esatto della tua riga `OptionSettings` può variare in base alla configurazione del server, ma l’impostazione della durabilità dovrebbe apparire nella stessa lista separata da virgole, ad esempio:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution Mantieni il formato esistente
Non rimuovere altri valori dalla riga `OptionSettings` durante la modifica del file. Palworld si aspetta che queste impostazioni rimangano nel formato corretto separato da virgole.
:::

## Salvare e applicare le modifiche

Dopo aver modificato il file di configurazione, salva le modifiche nell’interfaccia ZAP-Hosting.

### Riavviare il server

Per applicare la nuova impostazione di durabilità, riavvia il tuo server Palworld dall’amministrazione del server di gioco.

Senza un riavvio, la configurazione aggiornata di solito non viene caricata dal server.

| Azione | Necessaria |
| --- | --- |
| Salvare `PalWorldSettings.ini` | Sì |
| Riavviare il server | Sì |
| Eseguire un comando in gioco | No |
| Reinstallare il server | No |

:::tip Testa le modifiche con un piccolo aggiustamento
Se non sei sicuro di quale valore di durabilità si adatti al tuo stile di gioco, inizia con `0.500000`. Offre un miglioramento evidente della durabilità senza disabilitare completamente la meccanica.
:::

## Risoluzione dei problemi

Se il nuovo comportamento della durabilità dell’equipaggiamento non si applica dopo il riavvio, controlla i seguenti punti.

### Verifica la chiave di configurazione

Assicurati che la chiave sia scritta esattamente così:

```ini
EquipmentDurabilityDamageRate
```

Le chiavi di configurazione di Palworld sono sensibili alle maiuscole e minuscole per una gestione affidabile, quindi copia il nome esattamente come mostrato.

### Controlla la posizione in `OptionSettings`

Il valore deve essere all’interno della sezione `OptionSettings=(...)` di `PalWorldSettings.ini`. Se lo posizioni fuori da questo blocco, il server potrebbe ignorarlo.

### Conferma che il file sia stato salvato

Dopo la modifica in **Configs**, verifica che le modifiche siano ancora presenti riaprendo `PalWorldSettings.ini`. Se non ci sono, il file potrebbe non essere stato salvato correttamente.

### Riavvia di nuovo se necessario

Se c’erano giocatori online durante la modifica o il server non si è riavviato correttamente, esegui un altro riavvio completo dal pannello di amministrazione del server.

## Conclusione

Congratulazioni, hai modificato con successo il tasso di durabilità dell’equipaggiamento sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂