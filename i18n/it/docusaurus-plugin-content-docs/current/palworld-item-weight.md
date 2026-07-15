---
id: palworld-item-weight
title: "Palworld: Peso degli Oggetti"
description: "Scopri come modificare il moltiplicatore del peso degli oggetti in Palworld modificando l'impostazione del peso degli oggetti nella configurazione del tuo server per un bilanciamento migliore del carico. -> Scopri di più ora"
sidebar_label: "Peso degli Oggetti"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di regolare il peso degli oggetti sul tuo server modificando un valore di configurazione nel file principale delle impostazioni del server. In questa guida, imparerai dove trovare il file corretto nell’interfaccia web di ZAP-Hosting, quale impostazione `item weight` modificare e come applicare correttamente la modifica.



## Preparazione

Prima di iniziare, assicurati che il tuo server di gioco Palworld sia online e che tu possa accedere alla sua amministrazione web.

:::info Accesso Richiesto
Devi avere accesso al pannello di amministrazione del tuo server Palworld nell’interfaccia web di ZAP-Hosting per modificare i file di configurazione sotto **Configs**.
:::

## Apri il File di Configurazione di Palworld

Per modificare il moltiplicatore del peso degli oggetti, devi editare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai su **Configs**.
3. Apri il file `PalWorldSettings.ini`.

Questo file contiene i valori principali di configurazione del gameplay usati dal tuo server Palworld.

:::note Scopo del File di Configurazione
`PalWorldSettings.ini` contiene diversi modificatori di gameplay, inclusi i rate per danni, stamina, drop e `item weight`.
:::

## Modifica l’Impostazione del Peso degli Oggetti

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings` e trova la voce `ItemWeightRate`.

Se la voce esiste già, modifica il suo valore. Se manca, aggiungila all’interno della lista dei parametri di `OptionSettings`.

### Chiave di Configurazione

Usa questa impostazione:

```ini
ItemWeightRate=1.000000
```

### Cosa Significa il Valore

`ItemWeightRate` controlla il moltiplicatore del peso degli oggetti sul tuo server.

| Chiave di config | Valore predefinito | Effetto |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | Peso standard degli oggetti |
| `ItemWeightRate` inferiore a `1.0` | Esempio: `0.500000` | Gli oggetti pesano meno, quindi i giocatori possono trasportarne di più |
| `ItemWeightRate` superiore a `1.0` | Esempio: `2.000000` | Gli oggetti pesano di più, quindi i giocatori possono trasportarne di meno |

### Esempi di Valori

Puoi usare uno dei seguenti esempi a seconda del bilanciamento di gameplay che vuoi ottenere:

| Risultato desiderato | Valore |
|---|---:|
| Peso standard degli oggetti | `1.000000` |
| Peso dimezzato degli oggetti | `0.500000` |
| Oggetti molto leggeri | `0.250000` |
| Peso raddoppiato degli oggetti | `2.000000` |

:::tip Scelta di un Buon Moltiplicatore
Se vuoi un’esperienza di sopravvivenza più rilassata, un valore più basso di `item weight` come `0.5` è spesso un buon punto di partenza. Questo riduce la pressione sull’inventario senza eliminare completamente la gestione del peso.
:::

## Esempio di Configurazione

In Palworld, questi valori di gameplay sono solitamente memorizzati all’interno della riga `OptionSettings=(...)` di `PalWorldSettings.ini`. Il tuo file potrebbe già contenere molte altre impostazioni.

Un esempio semplificato è questo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

Su molti server, `OptionSettings` include già più valori separati da virgole. In questo caso, aggiungi o modifica solo la parte `ItemWeightRate` senza rimuovere le altre voci.

Esempio:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution Mantieni Intatte le Impostazioni Esistenti
Non cancellare altri valori dalla riga `OptionSettings` a meno che tu non voglia resettarli intenzionalmente. Rimuovere virgole, parentesi o voci esistenti può causare errori di configurazione.
:::

## Salva e Applica le Modifiche

Dopo aver modificato il file:

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Riavvia il tuo server Palworld.

Il riavvio è necessario perché il server legge questa configurazione di gameplay all’avvio. Il nuovo valore di `item weight` non sarà applicato completamente finché il server non sarà stato riavviato.

## Verifica il Nuovo Peso degli Oggetti

Dopo il riavvio, entra nel server e prova il comportamento del trasporto degli oggetti in gioco.

Dovresti notare che:

- valori più bassi riducono il peso effettivo degli oggetti
- valori più alti aumentano il peso effettivo degli oggetti
- la capacità dell’inventario cambia a seconda del moltiplicatore scelto

Se la modifica non sembra applicata, riapri `PalWorldSettings.ini` e verifica che:

| Controllo | Cosa verificare |
|---|---|
| File corretto | Hai modificato `PalWorldSettings.ini` |
| Posizione corretta | Il file è stato aperto tramite **Configs** nell’amministrazione del server |
| Chiave corretta | `ItemWeightRate` è presente |
| Sintassi corretta | Il valore è dentro la riga `OptionSettings=(...)` se il file usa quel formato |
| Riavvio completato | Il server è stato riavviato dopo il salvataggio |

## Conclusione

Congratulazioni, hai modificato con successo l’impostazione del peso degli oggetti sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂