---
id: palworld-enable-hardcore-mode
title: "Palworld: Abilitare la Modalità Hardcore"
description: "Scopri come abilitare la modalità hardcore in Palworld modificando il file di configurazione del server, impostando valori True o False e applicando in sicurezza le opzioni di morte permanente. -> Scopri di più ora"
sidebar_label: Palworld: Abilitare la Modalità Hardcore
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La *modalità hardcore* in Palworld attiva le regole di morte permanente per i giocatori e, opzionalmente, per i Pals. In questa guida imparerai come abilitare manualmente la modalità hardcore sul tuo server Palworld di ZAP-Hosting modificando il file di configurazione corretto e riavviando il server.



## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite l’interfaccia web di ZAP-Hosting. Inoltre, devi avere i permessi per modificare i file di configurazione del server tramite la sezione **Configs** dell’amministrazione del server di gioco.

:::danger Attenzione alla Perdita Permanente dei Dati
Quando le impostazioni hardcore sono attive, i personaggi possono andare persi definitivamente alla morte. Se abiliti anche la perdita dei Pal, anche questi possono andare persi in modo permanente.
:::

:::tip Crea un Backup Prima di Procedere
Prima di modificare impostazioni di gioco come la modalità hardcore, è consigliato creare un backup del server o dei dati di salvataggio, se il tuo servizio offre questa opzione.
:::

## Apri il File di Configurazione di Palworld

Per abilitare la modalità hardcore, devi modificare il file `PalWorldSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai su **Configs**.
3. Apri il file `PalWorldSettings.ini`.

:::info File di Configurazione Corretto
Le impostazioni hardcore sono memorizzate in `PalWorldSettings.ini`. Se modifichi un file diverso, le modifiche non avranno effetto sul tuo server Palworld.
:::

## Modifica le Impostazioni Hardcore

Palworld memorizza molte impostazioni di gioco all’interno della voce di configurazione `OptionSettings` in `PalWorldSettings.ini`. Devi impostare manualmente i valori hardcore rilevanti in questa sezione.

### Chiavi di Configurazione Necessarie

Le seguenti chiavi di configurazione controllano il comportamento hardcore:

| Chiave di Configurazione | Valore | Effetto |
| --- | --- | --- |
| `bHardcore` | `True` o `False` | Abilita o disabilita la morte permanente del giocatore |
| `bPalLost` | `True` o `False` | Abilita o disabilita la perdita permanente dei Pal alla morte |
| `bCharacterRecreateInHardcore` | `True` o `False` | Permette di creare un nuovo personaggio dopo una morte hardcore |

### Panoramica dei Valori Consigliati

| Scenario | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| Solo morte permanente del giocatore | `True` | `False` | `False` o `True` |
| Hardcore completo con perdita dei Pal | `True` | `True` | `False` o `True` |
| Disabilita modalità hardcore | `False` | `False` | `False` |

:::note Valori True e False
Queste impostazioni usano valori booleani, quindi devi inserire esattamente `True` o `False` come supportato dal formato di configurazione.
:::

### Esempio di Configurazione

Se le chiavi sono già presenti nel tuo `OptionSettings`, modifica i valori secondo necessità. Se mancano, aggiungile all’interno della stessa riga `OptionSettings`.

Esempio:

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

Se la tua riga `OptionSettings` contiene già molte altre impostazioni, non rimuoverle. Aggiungi o modifica solo le voci relative alla modalità hardcore all’interno delle parentesi esistenti.

:::caution Conserva le Impostazioni Esistenti
`PalWorldSettings.ini` spesso contiene molte impostazioni attive del server in un’unica voce `OptionSettings`. Eliminare per errore altri valori può resettare opzioni di gioco non correlate sul tuo server.
:::

## Salva e Applica le Modifiche

Dopo aver modificato il file:

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Riavvia il tuo server Palworld dall’amministrazione del server di gioco ZAP-Hosting.

Il riavvio è necessario affinché il server carichi la configurazione hardcore aggiornata.

## Verifica che la Modalità Hardcore sia Attiva

Dopo il riavvio, entra nel server e verifica che le regole hardcore siano attive.

### Cosa Controllare

| Impostazione | Comportamento Atteso |
| --- | --- |
| `bHardcore=True` | I giocatori non possono continuare normalmente dopo la morte |
| `bPalLost=True` | I Pal vengono persi definitivamente alla morte |
| `bCharacterRecreateInHardcore=True` | È possibile creare un nuovo personaggio dopo una morte hardcore |

:::info Nota Importante sul Comportamento
Il risultato esatto in gioco dipende da quali delle tre impostazioni hardcore hai abilitato. Se vuoi la morte permanente del giocatore ma permettere agli utenti di ricominciare con un nuovo personaggio, abilita `bCharacterRecreateInHardcore=True`.
:::

## Risoluzione dei Problemi

Se la modalità hardcore non funziona come previsto, verifica i seguenti punti.

### Conferma che il File sia Stato Modificato Correttamente

Assicurati di aver modificato `PalWorldSettings.ini` nella sezione **Configs** del tuo server Palworld ZAP-Hosting e non un altro file.

### Controlla la Sintassi

Le chiavi hardcore devono essere inserite all’interno della voce `OptionSettings=(...)`. Punteggiatura errata, virgole mancanti o valori fuori dalla sezione corretta possono impedire al server di leggerli.

Esempio di sintassi valida:

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### Riavvia di Nuovo il Server

Se il server non è stato riavviato dopo il salvataggio del file, le nuove impostazioni non verranno caricate. Esegui un riavvio completo e prova di nuovo.

## Conclusione

Congratulazioni, hai abilitato con successo la modalità hardcore sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂