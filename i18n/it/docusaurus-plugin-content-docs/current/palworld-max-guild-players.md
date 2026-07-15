---
id: palworld-max-guild-players
title: "Palworld: Numero massimo di giocatori per gilda"
description: "Scopri come modificare il limite di giocatori per gilda in Palworld modificando l'impostazione max guild players sul tuo server. -> Scopri di più ora"
sidebar_label: Palworld: Numero massimo di giocatori per gilda
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di controllare quanti giocatori possono entrare in una singola gilda sul tuo server. In questa guida, imparerai come modificare manualmente il limite massimo di giocatori per gilda modificando il file di configurazione corretto nella tua amministrazione server di gioco ZAP-Hosting.



## Preparazione

Prima di iniziare, assicurati di avere accesso all’amministrazione del tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting.

:::info Accesso alla configurazione necessario
Devi avere accesso all’amministrazione del server Palworld e alla sezione `Configs`, perché questa impostazione va modificata manualmente nel file di configurazione del server.
:::

## Individua il file di configurazione corretto

Per modificare il limite di giocatori per gilda, devi editare il file `PalWorldSettings.ini`.

Nell’amministrazione del tuo server di gioco ZAP-Hosting:

1. Apri il tuo server **Palworld**
2. Vai su **Configs**
3. Apri il file chiamato `PalWorldSettings.ini`

Questo file contiene i valori principali di configurazione del gameplay per il tuo server Palworld, incluse le impostazioni relative alle gilde.

## Modifica l’impostazione del numero massimo di giocatori per gilda

All’interno di `PalWorldSettings.ini`, cerca la riga di configurazione `OptionSettings`. Il limite di giocatori per gilda è controllato dalla chiave `GuildPlayerMaxNum`.

### Valore di configurazione

Usa questa impostazione per definire il numero massimo di giocatori consentiti in una singola gilda:

```ini
GuildPlayerMaxNum=[your_value]
```

Sostituisci `[your_value]` con il numero di giocatori che vuoi permettere per gilda.

### Valori predefiniti ed esempi

| Chiave di configurazione | Descrizione | Valore predefinito |
| --- | --- | --- |
| `GuildPlayerMaxNum` | Numero massimo di giocatori consentiti in una gilda | `20` |

Ad esempio, se vuoi permettere fino a `30` giocatori per gilda, imposta:

```ini
GuildPlayerMaxNum=30
```

:::note Modifica la riga OptionSettings esistente
In Palworld, le impostazioni del server sono solitamente memorizzate in un’unica voce `OptionSettings=(...)`. Di solito devi modificare il valore esistente `GuildPlayerMaxNum` all’interno di quella riga invece di aggiungere una seconda voce duplicata.
:::

### Esempio di snippet

La tua configurazione potrebbe apparire simile a questa:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

Se il tuo file contiene già molte impostazioni dentro `OptionSettings=(...)`, cambia solo la parte `GuildPlayerMaxNum` lasciando inalterati gli altri valori.

:::caution Evita chiavi duplicate
Non aggiungere `GuildPlayerMaxNum` più volte nello stesso blocco di configurazione. Chiavi duplicate possono causare comportamenti imprevisti o rendere incerto quale valore il server utilizzerà.
:::

## Salva e applica le modifiche

Dopo aver modificato il valore:

1. Salva le modifiche in `PalWorldSettings.ini`
2. Riavvia il tuo server Palworld

È necessario un riavvio per caricare il nuovo limite di giocatori per gilda sul server.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Comando console aggiuntivo | Nessun comando verificato richiesto |

:::tip Riavvio necessario
Il valore aggiornato del numero massimo di giocatori per gilda non si applica immediatamente mentre il server è in esecuzione. Devi riavviare completamente il server dopo aver salvato la configurazione.
:::

## Verifica il nuovo limite per la gilda

Una volta che il server è stato riavviato, il nuovo limite di dimensione della gilda dovrebbe essere attivo per i giocatori che si uniscono o gestiscono gilde sul tuo server Palworld.

Se la modifica non sembra applicarsi, verifica quanto segue:

- conferma di aver modificato il file corretto: `PalWorldSettings.ini`
- conferma che `GuildPlayerMaxNum` sia scritto correttamente
- conferma che il valore sia dentro la configurazione attiva `OptionSettings=(...)`
- conferma che il riavvio del server sia stato completato con successo

:::caution Formattazione della configurazione
I file di configurazione di Palworld sono sensibili alla formattazione. Se rimuovi accidentalmente virgole, parentesi o altri valori esistenti dentro `OptionSettings=(...)`, il server potrebbe ignorare l’impostazione o non caricarla correttamente.
:::

## Conclusione

Congratulazioni, hai modificato con successo il limite massimo di giocatori per gilda sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂