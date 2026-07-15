---
id: palworld-enable-predator-pals
title: "Palworld: Abilita Predator Pals"
description: "Scopri come abilitare o disabilitare i predator pals sul tuo server Palworld, risolvere problemi di spawn e configurare manualmente l'impostazione corretta. -> Scopri di più ora"
sidebar_label: Palworld: Abilita Predator Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I *Predator Pals* sono Pals potenti di tipo boss che possono comparire in tutto il mondo di Palworld. In questa guida, imparerai come abilitare o disabilitare i predator pals sul tuo server Palworld di ZAP-Hosting modificando manualmente il file di configurazione corretto.



## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting e i permessi per gestire i file di configurazione.

:::info Accesso al File di Configurazione
Per questa configurazione, devi modificare manualmente il file di configurazione del server tramite la sezione **Configs** dell’amministrazione del server di gioco.
:::

## Apri la Configurazione di Palworld

Per modificare la possibilità che i predator pals compaiano, devi editare il file `PalWorldSettings.ini`.

### Trova il file corretto nell’interfaccia ZAP

Apri il tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting. Poi vai nella sezione **Configs** dell’amministrazione del server e apri il file `PalWorldSettings.ini`.

Questo è il file di configurazione principale usato per le impostazioni di gioco del server, incluso il comportamento dei predator boss pals.

:::note Modifica Manuale Necessaria
Questa impostazione deve essere cambiata manualmente nel file di configurazione. Se l’interfaccia non mostra un toggle dedicato per questa opzione, modificare direttamente `PalWorldSettings.ini` è il metodo corretto.
:::

## Modifica l’Impostazione Predator Pals

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings`. La chiave di configurazione rilevante è `EnablePredatorBossPal`.

### Valore di configurazione

Usa uno dei seguenti valori a seconda del risultato desiderato:

| Impostazione | Valore | Risultato |
| --- | --- | --- |
| Abilita predator pals | `True` | I predator boss Pals possono comparire nel mondo |
| Disabilita predator pals | `False` | I predator boss Pals non compariranno nel mondo |

### Esempio di voce

Se l’impostazione esiste già, modifica il suo valore. Se manca, aggiungila all’interno della lista di configurazione `OptionSettings`.

```ini
EnablePredatorBossPal=True
```

Per disabilitare i predator pals, usa invece:

```ini
EnablePredatorBossPal=False
```

:::tip Controlla Prima la Sintassi Esistente
Le impostazioni del server Palworld sono spesso memorizzate come parte di una linea più lunga `OptionSettings` in `PalWorldSettings.ini`. Se il tuo file contiene già questa struttura, aggiungi o modifica `EnablePredatorBossPal=True` o `EnablePredatorBossPal=False` all’interno di quella lista di impostazioni esistente invece di creare una sezione separata.
:::

## Salva e Applica le Modifiche

Dopo aver modificato il file, salva le modifiche nella sezione **Configs**.

### Riavvia il server

Una volta salvato il file, riavvia il server Palworld per caricare correttamente la nuova impostazione.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Comando console aggiuntivo | No |

:::caution Riavvio Obbligatorio
La nuova impostazione predator pals non sarà applicata finché il server non sarà riavviato. Se i predator pals non compaiono dopo la modifica, verifica che il file sia stato salvato correttamente e che il riavvio del server sia stato completato con successo.
:::

## Verifica l’Impostazione

Dopo il riavvio, entra nel server e controlla se i predator pals si comportano come previsto.

Se li hai abilitati e non compaiono, ricontrolla la voce in `PalWorldSettings.ini` e assicurati che il valore sia scritto esattamente come `True` o `False`. Conferma anche che l’impostazione sia posizionata correttamente nella sintassi di configurazione esistente del server.

:::note Comportamento di Spawn
Questa impostazione controlla se i predator boss Pals possono comparire nel mondo. Non fornisce una mappa delle posizioni dei predator pals, non modifica i singoli punti di spawn e non garantisce incontri immediati in un’area specifica.
:::

## Riferimento Configurazione

| File | Posizione in ZAP-Hosting | Chiave | Valori possibili | Comportamento predefinito | Riavvio richiesto |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | Amministrazione server di gioco → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | Sì |

## Conclusione

Congratulazioni, hai abilitato o disabilitato con successo i predator pals sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂