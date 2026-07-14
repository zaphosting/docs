---
id: palworld-spectate-mode
title: "Palworld: Modalità Spettatore"
description: "Scopri come usare la modalità spettatore in Palworld, impostare la password admin richiesta e accedere alla modalità spettatore sul tuo server. -> Scopri di più ora"
sidebar_label: Palworld: Modalità Spettatore
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La modalità spettatore in Palworld ti permette di osservare i giocatori sul tuo server senza partecipare attivamente. In questa guida, imparerai come preparare l’accesso admin, dove controllare la configurazione richiesta nell’interfaccia ZAP-Hosting e come entrare e uscire dalla modalità spettatore in gioco.

## Preparazione

Prima di poter usare la modalità spettatore, devi avere accesso amministrativo sul tuo server Palworld. Questo richiede che una password valida `AdminPassword` sia impostata nella configurazione del server.

Se non l’hai ancora configurata, assicurati di rivedere prima le impostazioni del server Palworld e la configurazione admin.

:::info Accesso Admin Necessario
La modalità spettatore è disponibile solo per gli amministratori. Se non effettui il login come admin, il comando spettatore non funzionerà.
:::

## Controlla la configurazione richiesta del server

Anche se la modalità spettatore non richiede un’impostazione dedicata da abilitare, il server deve avere una password admin configurata per poterti autenticare come amministratore.

### Apri il file di configurazione nell’interfaccia ZAP

Nell’interfaccia web del tuo server di gioco ZAP-Hosting, apri la sezione **Configs**. La configurazione rilevante di Palworld si trova nel file:

`PalWorldSettings.ini`

A seconda del template del server e della versione del gioco, questo file contiene le principali opzioni del server, inclusa la voce della password admin.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Verifica la voce della password admin

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings` e verifica che il valore `AdminPassword` sia impostato.

Un esempio tipico è questo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[your_admin_password]")
```

Se il tuo file contiene già molte opzioni in una singola riga `OptionSettings=(...)`, devi solo assicurarti che la voce `AdminPassword` esista e contenga la password scelta.

:::caution Conserva la Sintassi Esistente
Non rimuovere altri valori esistenti dalla riga `OptionSettings`. Palworld di solito memorizza più impostazioni nella stessa voce, quindi aggiungi o modifica con attenzione solo il valore `AdminPassword`.
:::

### Riferimento configurazione

| File | Posizione nell’interfaccia ZAP | Chiave richiesta | Scopo |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | Permette di autenticarti come admin e usare la modalità spettatore |

## Salva le modifiche e riavvia il server

Se hai modificato `AdminPassword` in `PalWorldSettings.ini`, salva il file e riavvia il server Palworld dall’interfaccia web ZAP-Hosting.

Il riavvio è necessario affinché la configurazione aggiornata venga caricata dal server.

:::note Necessità di Riavvio
Se non hai fatto modifiche al file di configurazione e la password admin era già impostata correttamente, non serve un riavvio aggiuntivo per la modalità spettatore.
:::

## Effettua il login come amministratore

Quando il server è online, connettiti al tuo server Palworld in gioco come al solito. Per usare la modalità spettatore, devi autenticarti con la password admin configurata in precedenza.

Il comando esatto per il login admin può variare a seconda dell’implementazione attuale di Palworld e del comportamento dell’interfaccia. Se il tuo server richiede un’autenticazione manuale admin dopo l’accesso, usa la password admin configurata nel comando admin in gioco o nel prompt di login admin supportato dalla versione del server.

:::info Informazioni sull’Autenticazione Admin
Le fonti terze attuali confermano che la modalità spettatore richiede privilegi admin e che `AdminPassword` deve essere configurata. Tuttavia, se la tua build server usa un comando specifico per il login admin, segui il formato supportato dalla versione Palworld installata.
:::

## Entra in modalità spettatore

Dopo esserti connesso come amministratore, puoi attivare la modalità spettatore in uno dei seguenti modi.

### Usa la scorciatoia da tastiera

Premi il tasto `\` per entrare in modalità spettatore.

### Usa il comando

In alternativa, usa questo comando in gioco:

```text
/togglespectate
```

Questo comando attiva o disattiva la modalità spettatore per la sessione del tuo personaggio, a condizione che tu sia autenticato come admin.

### Riferimento comandi modalità spettatore

| Azione | Metodo | Requisito |
| --- | --- | --- |
| Entra in modalità spettatore | Premi `\` | Privilegi admin |
| Attiva/disattiva modalità spettatore | `/togglespectate` | Privilegi admin |
| Esci dalla modalità spettatore | Premi `Esc` | Modalità spettatore attiva |

:::tip Quando usare la modalità spettatore
La modalità spettatore è utile se vuoi monitorare i giocatori, indagare su segnalazioni o osservare l’attività sul server senza interferire con il gameplay.
:::

## Esci dalla modalità spettatore

Per uscire dalla modalità spettatore e tornare al gameplay normale, premi `Esc`.

Se necessario, puoi anche usare di nuovo `/togglespectate` per disattivare la modalità, a seconda del comportamento del server.

## Risoluzione dei problemi

Se la modalità spettatore non funziona, controlla i seguenti punti.

### Conferma che la password admin sia impostata

Apri di nuovo `PalWorldSettings.ini` tramite **Configs** e assicurati che `AdminPassword` sia presente e non vuota.

### Riavvia dopo aver modificato la configurazione

Se hai modificato di recente il file di configurazione, riavvia il server prima di riprovare.

### Assicurati di essere autenticato come admin

Avere una `AdminPassword` configurata non è sempre sufficiente. Devi anche essere riconosciuto dal server come amministratore attivo durante la sessione.

### Verifica il tasto usato

Su alcune tastiere, il tasto `\` può trovarsi in posizione diversa. Se la scorciatoia non funziona, usa invece `/togglespectate`.

:::caution Differenze di versione
Palworld è ancora soggetto a cambiamenti nel gameplay e nel server. Se la modalità spettatore o il comportamento admin differiscono sul tuo server, verifica che sia aggiornato e controlla se la versione attuale del gioco ha modificato i comandi o i permessi correlati.
:::

## Conclusione

Congratulazioni, hai usato con successo la modalità spettatore sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂