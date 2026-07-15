---
id: palworld-hunger-and-stamina
title: "Palworld: Fame e Stamina"
description: "Scopri come regolare la velocità di consumo di fame e stamina per giocatori e Pal modificando la configurazione del tuo server. -> Scopri di più ora"
sidebar_label: Palworld: Fame e Stamina
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di controllare quanto velocemente si consumano fame e stamina sia per i giocatori che per i Pal. In questa guida, imparerai come modificare il file di configurazione corretto del server tramite l’interfaccia web di ZAP-Hosting e applicare in sicurezza tassi di consumo personalizzati.

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nella gestione server di ZAP-Hosting.

:::info Accesso alla Configurazione Necessario
Devi avere accesso al pannello di amministrazione del server e alla sezione `Configs` per modificare manualmente i file di configurazione di Palworld.
:::

## Apri il File di Configurazione di Palworld

Per modificare il comportamento di fame e stamina, devi editare il file `PalWorldSettings.ini`.

Nella gestione server di ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai alla sezione `Configs`.
3. Apri il file `PalWorldSettings.ini`.



:::note File Usato per i Moltiplicatori di Gioco
Le impostazioni di fame e stamina sono memorizzate in `PalWorldSettings.ini`. Questi valori fanno generalmente parte della stringa principale di opzioni usata dal server dedicato.
:::

## Modifica i Valori di Fame e Stamina

All’interno di `PalWorldSettings.ini`, cerca la sezione delle impostazioni di gioco che contiene i valori delle opzioni del server. Devi aggiungere o modificare le seguenti chiavi di configurazione.

:::caution Attenzione all’Ortografia in Palworld
Palworld usa la scrittura `Decreace` in queste voci di configurazione. È intenzionale nel formato della configurazione del server, quindi devi usare esattamente queste chiavi come mostrato qui sotto.
:::

### Chiavi di Configurazione Disponibili

| Chiave Config | Descrizione | Valore Predefinito |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | Controlla la velocità di consumo della fame del giocatore | `1.0` |
| `PlayerStaminaDecreaceRate` | Controlla la velocità di consumo della stamina del giocatore | `1.0` |
| `PalStomachDecreaceRate` | Controlla la velocità di consumo della fame del Pal | `1.0` |
| `PalStaminaDecreaceRate` | Controlla la velocità di consumo della stamina del Pal | `1.0` |

### Come Funzionano i Valori

Valori più bassi riducono la velocità con cui fame o stamina si consumano.

| Valore | Effetto |
| --- | --- |
| `1.0` | Velocità di consumo predefinita |
| `0.5` | Metà della velocità di consumo |
| `0.0` | Disabilita completamente il consumo |

:::tip Impostazioni Bilanciate Consigliate
Se vuoi un’esperienza di sopravvivenza più rilassata senza eliminare completamente la meccanica, `0.5` è un buon punto di partenza sia per fame che stamina.
:::

## Esempio di Configurazione

Aggiungi o modifica i seguenti valori in `PalWorldSettings.ini` in base all’esperienza di gioco che desideri:

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

Questo esempio riduce il consumo di fame e stamina alla metà della velocità predefinita sia per i giocatori che per i Pal.

Se vuoi disabilitare completamente fame e stamina, usa:

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note Posizionamento delle Impostazioni
A seconda di come è strutturato il tuo `PalWorldSettings.ini`, questi valori potrebbero dover essere inseriti all’interno della lista di opzioni esistente invece che come righe separate. Se il file contiene già una lunga voce `OptionSettings`, assicurati di mantenere il formato esistente e di modificare o inserire solo le chiavi rilevanti.
:::

## Salva e Riavvia il Server

Dopo aver modificato il file:

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Riavvia il tuo server Palworld dalla gestione server di ZAP-Hosting.

Il riavvio è necessario affinché le nuove impostazioni di fame e stamina abbiano effetto.

:::caution Riavvio Obbligatorio
Se non riavvii il server, i valori di configurazione aggiornati non verranno caricati dal server di gioco.
:::

## Verifica le Modifiche In-Game

Quando il server è di nuovo online, entra nel server e testa le nuove impostazioni.

### Cosa Controllare

- Se la fame del giocatore si consuma più lentamente
- Se la stamina del giocatore dura di più durante movimenti e azioni
- Se la fame del Pal diminuisce al ritmo previsto
- Se l’uso della stamina del Pal corrisponde ai valori configurati

Se i valori non sembrano applicarsi, riapri `PalWorldSettings.ini` e verifica che:

- le chiavi di configurazione siano scritte esattamente come mostrato
- i valori siano numeri decimali validi come `1.0`, `0.5` o `0.0`
- le impostazioni siano state salvate correttamente
- il server sia stato riavviato completamente dopo la modifica

## Conclusione

Congratulazioni, hai modificato con successo i tassi di consumo di fame e stamina sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂