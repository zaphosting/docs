---
id: palworld-max-guild-bases
title: "Palworld: Massimo Numero di Basi per Gilda"
description: "Scopri come modificare l'impostazione del massimo numero di basi per gilda in Palworld modificando il valore BaseCampMaxNumInGuild sul tuo server. -> Scopri di più ora"
sidebar_label: Palworld: Massimo Numero di Basi per Gilda
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di controllare il numero massimo di basi che ogni gilda può posizionare sul tuo server. In questa guida imparerai come modificare manualmente il file di configurazione corretto nell’interfaccia web di ZAP-Hosting, cambiare l’impostazione `BaseCampMaxNumInGuild` e applicare la modifica riavviando il server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting.

:::info Accesso Richiesto
Devi avere accesso all’amministrazione del server Palworld e alla sezione `Configs` per modificare i file di configurazione.
:::

## Individua il file di configurazione

Per modificare il limite massimo di basi per gilda, devi editare il file `PalWorldSettings.ini`.

Nell’interfaccia web di ZAP-Hosting, apri l’amministrazione del tuo server Palworld e vai su:

`Configs` → `PalWorldSettings.ini`

Questo file contiene i valori principali di configurazione del gameplay per il tuo server Palworld, inclusi i limiti per gilde e basi.

## Modifica il valore massimo di basi per gilda

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings`. L’impostazione da modificare è:

`BaseCampMaxNumInGuild=[your_value]`

Sostituisci `[your_value]` con il numero di basi che vuoi permettere a ogni gilda di posizionare.

### Esempio di configurazione

Se vuoi permettere fino a `6` basi per gilda, la voce dovrebbe essere così:

```ini
BaseCampMaxNumInGuild=6
```

Se l’impostazione esiste già, modifica solo il valore. Se manca, aggiungila all’interno della lista di parametri `OptionSettings` esistente nel file.

:::note Valore predefinito e massimo vanilla
Le informazioni attuali indicano che il valore predefinito è `4` e il massimo vanilla normale è `10`. Valori superiori a `10` generalmente non sono supportati su un server Palworld non modificato.
:::

### Riferimento valori

| Chiave Config | Descrizione | Valore Predefinito | Massimo Vanilla |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | Numero massimo di basi consentite per gilda | `4` | `10` |

:::caution Usa valori validi
Imposta `BaseCampMaxNumInGuild` solo su un valore ragionevole e supportato. Valori superiori a `10` di solito richiedono modding lato server e potrebbero non funzionare correttamente su un server Palworld standard.
:::

## Salva la configurazione

Dopo aver modificato il valore, salva il file `PalWorldSettings.ini` nell’editor di configurazione di ZAP-Hosting.

Questo memorizza la nuova impostazione massima per le gilde, ma non avrà effetto finché il server non sarà riavviato.

## Riavvia il server

Una volta salvato il file, riavvia il tuo server Palworld dall’interfaccia di amministrazione del server.

Il riavvio è necessario perché Palworld legge la configurazione `PalWorldSettings.ini` all’avvio del server. Senza riavviare, il nuovo limite per le basi delle gilde di solito non viene applicato.

### Cosa fare dopo

Normalmente non sono necessari comandi console aggiuntivi dopo aver modificato `BaseCampMaxNumInGuild`. Dopo il riavvio, il nuovo valore dovrebbe essere attivo automaticamente.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Esegui comandi aggiuntivi | No |

:::tip Testa il nuovo limite
Dopo il riavvio, entra nel server e verifica il limite di posizionamento delle basi con una gilda per confermare che la nuova impostazione sia stata applicata correttamente.
:::

## Risoluzione dei problemi

Se il limite massimo di basi per gilda non sembra cambiare, controlla i seguenti punti.

### Verifica la voce di configurazione

Assicurati che `BaseCampMaxNumInGuild` sia scritto correttamente e che abbia un valore numerico, ad esempio:

```ini
BaseCampMaxNumInGuild=8
```

Un errore di battitura nel nome della chiave o un valore non valido possono impedire il funzionamento dell’impostazione.

### Conferma che il file sia stato salvato

Controlla che le modifiche siano state salvate in `Configs` → `PalWorldSettings.ini` prima di riavviare il server.

### Riavvia completamente il server

Dopo aver cambiato questa impostazione è necessario un riavvio completo del server. Se hai solo salvato il file senza riavviare, il valore precedente potrebbe essere ancora in uso.

### Rimani entro il limite vanilla

Se imposti un valore superiore a `10`, il server potrebbe ignorarlo o comportarsi in modo anomalo a meno che tu non stia usando mod compatibili. Se gestisci un server standard, mantieni il valore a `10` o inferiore.

## Conclusione

Congratulazioni, hai modificato con successo il numero massimo di basi per gilda sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂