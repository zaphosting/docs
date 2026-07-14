---
id: palworld-pal-capture-rate
title: "Palworld: Tasso di Cattura dei Pal"
description: "Scopri come modificare il tasso di cattura dei Pal in Palworld modificando l'impostazione PalCaptureRate per facilitare la cattura sul tuo server. -> Scopri di più ora"
sidebar_label: Palworld: Tasso di Cattura dei Pal
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di regolare il tasso di cattura dei Pal sul tuo server tramite la configurazione principale del mondo. In questa guida, scoprirai dove trovare il file di configurazione corretto nell’interfaccia ZAP-Hosting, quale valore modificare e come applicare il nuovo tasso di cattura.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite l’interfaccia web di ZAP-Hosting e che il server sia attivo e funzionante.

:::info Accesso al File di Configurazione
Per i server Palworld su ZAP-Hosting, le impostazioni rilevanti possono essere modificate tramite l’amministrazione del server di gioco nella sezione `Configs`.
:::

## Trova il File di Configurazione di Palworld

Per modificare il tasso di cattura dei Pal, devi editare il file `PalWorldSettings.ini`.

### Apri la Sezione Configs

Per prima cosa, accedi all’interfaccia web di ZAP-Hosting e apri il tuo server di gioco Palworld. Nell’amministrazione del server, vai su `Configs`.

Qui cerca il file chiamato:

```ini
PalWorldSettings.ini
```

### Individua l’Impostazione Corretta

All’interno di `PalWorldSettings.ini`, Palworld memorizza molte impostazioni di gioco nella sezione `OptionSettings`. L’impostazione rilevante per la cattura dei Pal è:

```ini
PalCaptureRate=[your_value]
```

Il valore predefinito è solitamente:

```ini
PalCaptureRate=1.000000
```

Un valore più alto rende più facile catturare i Pal, mentre un valore più basso rende la cattura più difficile.

## Modifica il Tasso di Cattura dei Pal

Ora che hai aperto il file corretto, puoi regolare il tasso di cattura per adattarlo al bilanciamento di gioco che preferisci.

### Cambia il Valore di Configurazione

Cerca all’interno di `PalWorldSettings.ini` la voce `PalCaptureRate` e sostituisci il suo valore con il moltiplicatore che preferisci.

Per esempio:

```ini
PalCaptureRate=2.000000
```

Questo raddoppierà il tasso di cattura rispetto all’impostazione predefinita.

### Valori di Esempio

Usa la tabella seguente come riferimento generale:

| Valore | Effetto |
| --- | --- |
| `1.000000` | Tasso di cattura Pal predefinito |
| `1.500000` | Cattura leggermente più facile |
| `2.000000` | Cattura visibilmente più facile |
| `3.000000` | Cattura molto più facile |

:::tip Configurazione Bilanciata
Se vuoi catture più facili senza renderle troppo scontate, un valore tra `1.500000` e `2.000000` è di solito un buon punto di partenza.
:::

## Salva e Applica le Modifiche

Dopo aver modificato il valore `PalCaptureRate`, salva le modifiche nell’editor di configurazione di ZAP-Hosting.

### Riavvia il Server

Palworld non applica questa impostazione in tempo reale. Dopo aver salvato il file, devi riavviare il server di gioco dall’amministrazione di ZAP-Hosting affinché il nuovo tasso di cattura venga caricato.

:::caution Riavvio Necessario
Se non riavvii il server dopo aver modificato `PalWorldSettings.ini`, il nuovo tasso di cattura non avrà effetto.
:::

## Riferimento Configurazione

La tabella seguente riassume l’impostazione usata per questa modifica:

| File | Chiave Config | Valore Predefinito | Scopo | Riavvio Necessario |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | Controlla il moltiplicatore del tasso di cattura dei Pal | Sì |

## Risoluzione dei Problemi

Se il nuovo tasso di cattura non sembra funzionare, verifica i seguenti punti.

### Verifica il Formato dell’Impostazione

Assicurati che la riga sia scritta correttamente e utilizzi un valore numerico, per esempio:

```ini
PalCaptureRate=2.000000
```

Evita di aggiungere caratteri extra o modificare voci non correlate nel file.

### Conferma che il File sia Stato Salvato

Dopo la modifica, verifica che le modifiche siano state effettivamente salvate in `PalWorldSettings.ini` tramite la sezione `Configs`.

### Riavvia di Nuovo se Necessario

Se il server non è stato riavviato correttamente dopo la modifica, esegui un altro riavvio dall’amministrazione del server.

:::note Impostazione di Gioco Lato Server
`PalCaptureRate` è un’impostazione di gioco lato server, quindi i giocatori noteranno il nuovo tasso solo dopo che il server avrà ricaricato la configurazione aggiornata.
:::

## Conclusione

Congratulazioni, hai modificato con successo il tasso di cattura dei Pal sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂