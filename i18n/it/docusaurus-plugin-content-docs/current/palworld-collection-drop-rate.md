---
id: palworld-collection-drop-rate
title: "Palworld: Collection Drop Rate"
description: "Learn how to adjust Palworld collection settings, increase gathered resources, and speed up respawns on your Palworld game server. -> Learn more now"
sidebar_label: Palworld: Collection Drop Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ti permette di controllare quanti materiali i giocatori raccolgono e quanto velocemente gli oggetti raccoglibili ritornano. In questa guida, imparerai come modificare manualmente il file di configurazione corretto nel tuo server di gioco Palworld su ZAP-Hosting per cambiare il tasso di raccolta e le impostazioni correlate.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting e che il server sia offline o possa essere riavviato dopo aver applicato le modifiche.

:::info Accesso al File di Configurazione
Per Palworld, le impostazioni di gioco rilevanti sono memorizzate nel file `PalWorldSettings.ini`. Nell’amministrazione del server di gioco ZAP-Hosting puoi accedere a questo file tramite la sezione `Configs`.
:::

## Apri il File di Configurazione di Palworld

Per modificare le impostazioni di raccolta, devi editare il file principale di configurazione del server Palworld.

### Trova il file nell’interfaccia ZAP-Hosting

1. Accedi all’[interfaccia web di ZAP-Hosting](https://zap-hosting.com).
2. Apri il tuo server di gioco Palworld.
3. Vai alla sezione `Configs` nell’amministrazione del server.
4. Apri il file chiamato `PalWorldSettings.ini`.

:::note File Corretto
Le impostazioni relative alla raccolta descritte in questa guida si trovano in `PalWorldSettings.ini`. Se non vedi subito le voci attese, di solito sono all’interno della riga di configurazione `OptionSettings`.
:::

## Modifica le Impostazioni di Raccolta

Palworld memorizza molte opzioni di gioco come coppie chiave-valore nella sezione `OptionSettings` di `PalWorldSettings.ini`. Per aumentare le risorse raccolte o modificare la velocità di ritorno delle risorse, devi regolare i valori corrispondenti lì.

### Chiavi di configurazione rilevanti

Usa le seguenti impostazioni per il comportamento legato alla raccolta:

| Chiave Config | Valore Predefinito | Descrizione |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | Controlla quanti oggetti i giocatori ricevono dalle risorse raccoglibili. Valori più alti aumentano la quantità raccolta. |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | Controlla la velocità con cui gli oggetti raccoglibili ritornano. Valori più alti fanno tornare le risorse più velocemente. |
| `CollectionObjectHpRate` | `1.000000` | Controlla gli HP degli oggetti raccoglibili come rocce o alberi. Valori più alti generalmente li rendono più resistenti da rompere. |

### Esempio di valori di configurazione

Se vuoi raddoppiare le risorse raccolte e far tornare le risorse il doppio più velocemente, imposta entrambi i valori a `2.000000`.

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

Se vuoi anche che gli oggetti raccoglibili siano più facili da rompere, puoi abbassare il moltiplicatore degli HP:

```ini
CollectionObjectHpRate=0.500000
```

:::tip Valori Consigliati per Iniziare
Un valore di `2.000000` è un punto di partenza comune sia per `CollectionDropRate` che per `CollectionObjectRespawnSpeedRate`. Offre una progressione visibilmente più veloce senza alterare troppo il gameplay di Palworld.
:::

## Applica le Modifiche in `PalWorldSettings.ini`

Dopo aver aperto `PalWorldSettings.ini`, trova la voce esistente `OptionSettings` e modifica direttamente i valori rilevanti al suo interno.

### Esempio di snippet `OptionSettings`

A seconda della configurazione attuale del server, la riga potrebbe già contenere molte impostazioni. Devi solo cambiare i valori delle chiavi relative alla raccolta se esistono già, oppure aggiungerle se mancano.

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution Mantieni la Sintassi Esistente
Assicurati di mantenere intatto il formato esistente della riga `OptionSettings`. Non rimuovere virgole, parentesi o altre impostazioni per errore, altrimenti il server potrebbe non caricare correttamente la configurazione.
:::

## Salva e Riavvia il Server

Una volta terminata la modifica del file, salva le modifiche nella sezione `Configs`.

### Necessità di riavvio

Palworld non applica queste modifiche di configurazione di gioco istantaneamente mentre il server è in esecuzione. Devi riavviare il server dopo aver salvato il file affinché i nuovi valori vengano caricati.

| Azione | Necessaria |
| --- | --- |
| Salvataggio di `PalWorldSettings.ini` | Sì |
| Riavvio del server | Sì |
| Comando console aggiuntivo | Nessun comando verificato richiesto |

:::info Riavvio Necessario
È necessario un riavvio completo del server dopo aver modificato `CollectionDropRate`, `CollectionObjectRespawnSpeedRate` o `CollectionObjectHpRate`. Non serve alcun comando in-game o console aggiuntivo per queste impostazioni specifiche.
:::

## Verifica il Nuovo Comportamento di Raccolta

Dopo il riavvio, entra nel server e prova alcuni oggetti raccoglibili come alberi, pietre o nodi di minerale.

### Cosa controllare

- Se i giocatori ricevono più materiali per ogni azione di raccolta
- Se i nodi di risorse distrutti ritornano più velocemente rispetto a prima
- Se gli oggetti raccoglibili risultano più facili o più difficili da rompere se hai modificato `CollectionObjectHpRate`

Se il risultato è troppo forte o troppo debole, torna su `PalWorldSettings.ini` e regola di nuovo i moltiplicatori.

:::tip Regola il Server con Gradualità
Se vuoi un setup di raccolta Palworld più bilanciato, aumenta i valori gradualmente, ad esempio da `1.000000` a `1.500000`, prima di passare a moltiplicatori più alti.
:::

## Riferimento Configurazione

La tabella seguente riassume i valori più importanti per questa configurazione di raccolta Palworld.

| Impostazione | Esempio | Effetto |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | Predefinito | Quantità standard di risorse raccolte |
| `CollectionDropRate=2.000000` | Aumentato | Risorse raccolte raddoppiate |
| `CollectionObjectRespawnSpeedRate=1.000000` | Predefinito | Velocità di respawn standard |
| `CollectionObjectRespawnSpeedRate=2.000000` | Aumentato | Respawn delle risorse più veloce |
| `CollectionObjectHpRate=1.000000` | Predefinito | HP standard degli oggetti raccoglibili |
| `CollectionObjectHpRate=0.500000` | Ridotto | Gli oggetti raccoglibili si rompono più velocemente |

## Conclusion

Congratulazioni, hai modificato con successo il tasso di raccolta sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂