---
id: palworld-troubleshooting
title: "Palworld: Risoluzione dei Problemi"
description: "Risolvi i problemi comuni del server Palworld come errori di aggiornamento Steam, timeout di connessione ed errori Steam sul tuo server di gioco. -> Scopri di più ora"
sidebar_label: "Risoluzione dei Problemi"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server dedicati Palworld possono occasionalmente incontrare problemi di aggiornamento, avvio e connessione, specialmente dopo un aggiornamento Steam di Palworld o quando sono installate modifiche di terze parti. In questa guida imparerai a identificare i problemi comuni, quali file o impostazioni controllare nell’amministrazione del tuo server di gioco ZAP-Hosting e quali azioni intraprendere per ripristinare il funzionamento normale.



## Preparazione

Prima di iniziare la risoluzione dei problemi, assicurati di avere accesso all’amministrazione del tuo server di gioco Palworld e di poter aprire la console del server e l’area `Configs`.

:::info Accesso Richiesto
Devi avere accesso all’interfaccia web ZAP-Hosting del tuo server Palworld per poter fermare, avviare, reinstallare e modificare i file di configurazione se necessario.
:::

:::note Informazioni sui File di Configurazione
La maggior parte dei problemi in questa guida non si risolve modificando solo le impostazioni di gioco. Tuttavia, se devi rivedere o regolare manualmente le impostazioni del server Palworld, il file pertinente è solitamente disponibile nella sezione `Configs` nell’amministrazione del server di gioco.
:::

## Trova il File di Configurazione Rilevante

Per i server dedicati Palworld, le impostazioni principali del server sono generalmente memorizzate nel seguente file:

```ini
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Nell’amministrazione del server di gioco ZAP-Hosting, puoi solitamente accedere a questo file tramite la sezione `Configs`.

### A Cosa Serve Questo File

`PalWorldSettings.ini` contiene la linea principale `OptionSettings` con valori del server come:

- nome del server
- password
- password admin
- limiti di giocatori
- moltiplicatori di gioco
- impostazioni PvP e raid

Una struttura tipica appare simile a questa:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="[your_server_name]",ServerDescription="[your_server_description]",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]")
```

:::caution Modifica la Sintassi con Attenzione
Palworld usa una singola struttura `OptionSettings=(...)` per molte impostazioni. Se rimuovi per errore una virgola, una virgoletta o una parentesi, il server potrebbe non avviarsi correttamente.
:::

### Quando Devi Modificarlo

Dovresti modificare `PalWorldSettings.ini` solo quando:

- devi correggere una password server o admin errata
- vuoi rimuovere valori non validi dopo una modifica manuale fallita
- stai testando se un problema di avvio è causato da una voce di configurazione corrotta

Dopo aver salvato le modifiche a questo file, devi riavviare il server affinché le nuove impostazioni vengano applicate.

## Risoluzione degli Errori di Aggiornamento

Uno dei problemi più comuni del server di gioco Palworld è un aggiornamento Steam fallito.

### Errore: `app '2394010' state is 0x6 after update job`

Questo errore indica solitamente che i file di gioco non sono stati aggiornati correttamente tramite Steam.

### Come Risolvere l’Errore

1. Ferma completamente il tuo server Palworld.
2. Apri l’amministrazione del server di gioco nell’interfaccia web ZAP-Hosting.
3. Vai nell’area dove sono disponibili le azioni di reinstallazione o riparazione.
4. Avvia una reinstallazione o una verifica dell’integrità dei file del server.
5. Attendi che il processo termini completamente.
6. Avvia nuovamente il server.

:::info Perché Funziona
La verifica dei file o la reinstallazione obbliga il server a riscaricare i file Steam di Palworld mancanti o danneggiati. Questa è la soluzione più affidabile per l’errore di stato aggiornamento `0x6`.
:::

### Devi Modificare un File di Configurazione?

Normalmente non è richiesta alcuna modifica di configurazione per questo errore.

| Problema | File di configurazione richiesto | Azione aggiuntiva |
| --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | No | Ferma server, verifica o reinstalla file, poi riavvia server |

## Risoluzione dei Timeout di Connessione

Se i giocatori vedono `Connection timed out`, la causa è solitamente un fallimento di avvio, una configurazione mod corrotta o un problema nel metodo di connessione.

### Verifica se il Server è Effettivamente Attivo

Per prima cosa, conferma che il server si sia avviato correttamente.

Puoi verificarlo:

- controllando lo stato del server nell’interfaccia web ZAP-Hosting
- aprendo la console e cercando output di avvio normale
- verificando se il server risponde ai comandi console, se disponibili

Se il server mostra attività molto bassa e non risponde normalmente, potrebbe essere crashato durante l’avvio.

### Controlla le Modifiche Recenti alla Configurazione

Se hai modificato `PalWorldSettings.ini` poco prima che iniziasse il problema, apri di nuovo il file in `Configs` e controlla:

- virgole mancanti
- virgolette rotte
- valori duplicati
- IP o password non validi

Esempi di voci da controllare:

```ini
ServerName="[your_server_name]"
ServerPassword="[your_server_password]"
AdminPassword="[your_admin_password]"
PublicPort=8211
PublicIP="[your_server_ip]"
```

Se non sei sicuro che il problema sia causato dalla configurazione, annulla le modifiche più recenti e riavvia il server.

### Controlla Problemi con Mod o UE4SS

Se Palworld ha appena ricevuto un aggiornamento e usi mod o `UE4SS`, il server potrebbe non essere più compatibile.

In questo caso, dovresti:

1. Fermare il server.
2. Creare un backup se disponibile nella gestione del prodotto.
3. Rimuovere o aggiornare le mod installate.
4. Riavviare il server e testare la connessione.

:::caution Compatibilità Mod Dopo Aggiornamenti
Gli aggiornamenti Steam di Palworld possono rompere le modifiche lato server. Se il problema è iniziato subito dopo un aggiornamento, le mod sono una delle prime cose da controllare.
:::

### Usa l’IP Diretto invece dei Server Recenti

I client Palworld possono fallire nel connettersi correttamente tramite la lista `Recent Servers` in gioco.

Connettiti invece direttamente usando l’IP e la porta del server.

Usa il formato seguente:

```text
[your_server_ip]:8211
```

Sostituisci `[your_server_ip]` con l’indirizzo IP reale del tuo server di gioco.

### Problemi di Mondo Legati alle Gilde

Un timeout può anche verificarsi in alcune situazioni di stato del mondo, ad esempio se un membro della gilda lascia mentre altri membri sono offline.

Le possibili soluzioni includono:

- far rientrare il giocatore interessato nella gilda
- riavviare il mondo
- ripristinare da un backup se il mondo rimane inutilizzabile

:::danger Rischio Dati del Mondo
Se sospetti corruzione del mondo o del salvataggio, evita modifiche manuali ripetute senza backup. Crea o ripristina un backup prima di effettuare modifiche distruttive.
:::

## Risoluzione degli Errori di Connessione Steam

I problemi di connettività legati a Steam possono impedire al tuo server Palworld di aggiornarsi o diventare raggiungibile.

### Errore: `Connecting anonymously to Steam Public...Retrying`

Questo messaggio è comunemente legato a un problema temporaneo del servizio Steam piuttosto che a una configurazione Palworld corrotta.

### Cosa Devi Fare

- aspetta da `5` a `10` minuti e riprova
- verifica se Steam sta effettuando manutenzione o ha un’interruzione
- evita riavvii ripetuti durante un’interruzione temporanea di Steam

La manutenzione Steam avviene spesso il martedì, quindi sono possibili brevi interruzioni.

### Aggiornamenti Automatici Durante Interruzioni Steam

Se il server tenta ripetutamente di aggiornarsi durante un’interruzione Steam, potrebbe rimanere non disponibile finché Steam non risponde normalmente.

Se il tuo prodotto include un’impostazione di aggiornamento automatico nell’interfaccia di amministrazione, puoi disabilitarla temporaneamente fino alla fine dell’interruzione.

:::tip Gestione Temporanea di Interruzioni Steam
Se il server funzionava prima e improvvisamente mostra tentativi di connessione a Steam, spesso è meglio aspettare un attimo invece di modificare subito i file di configurazione.
:::

### Devi Modificare un File di Configurazione?

Normalmente non è richiesta alcuna modifica di configurazione per questo problema.

| Problema | File di configurazione richiesto | Azione aggiuntiva |
| --- | --- | --- |
| `Connecting anonymously to Steam Public...Retrying` | No | Aspetta, controlla lo stato di Steam, opzionalmente disabilita temporaneamente aggiornamenti automatici |

## Risoluzione degli Errori di Versione Incompatibile

Se vedi un messaggio che la partita sta usando una versione incompatibile del gioco, la versione del server e quella del client non corrispondono.

### Come Risolvere

1. Riavvia il server Palworld.
2. Attendi che il server completi l’avvio.
3. Aggiorna il client Palworld locale tramite Steam se necessario.
4. Prova a connetterti di nuovo.

Se il server segnala ancora una versione incompatibile, l’aggiornamento potrebbe non essere stato applicato correttamente. In tal caso, ripeti la verifica o la reinstallazione dei file descritta in precedenza.

### Controlla le Impostazioni del Server Dopo un Aggiornamento

Un mismatch di versione di solito non è causato da `PalWorldSettings.ini`, ma se il server fallisce dopo l’aggiornamento, vale comunque la pena confermare che il file di configurazione sia valido e non modificato.

## Comprendere i Messaggi Normali di Avvio Steam

Alcuni messaggi di avvio sembrano critici anche se sono comportamenti attesi.

### Messaggio: `steamclient.so: cannot open shared object file: No such file or directory`

Questo messaggio è comunemente segnalato durante l’avvio ed è generalmente innocuo per i server dedicati Palworld in questo contesto.

Di solito non è necessario modificare alcun file o eseguire comandi extra solo per questo messaggio.

:::note Sicuro da Ignorare nella Maggior Parte dei Casi
Se il server si avvia normalmente e i giocatori possono connettersi, questo messaggio della libreria Steam può generalmente essere ignorato.
:::

## Riferimento Configurazione

La tabella seguente riassume i controlli di risoluzione problemi più rilevanti per Palworld.

| Problema | File da controllare | Percorso nei file server | Modifiche manuali richieste | Riavvio richiesto |
| --- | --- | --- | --- | --- |
| Errore aggiornamento `0x6` | Nessuno normalmente | Non richiesto | No | Sì |
| Timeout di connessione dopo modifica config | `PalWorldSettings.ini` | `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` | Sì, rivedere valori `OptionSettings` | Sì |
| Timeout di connessione dopo aggiornamento mod | File mod, non config standard | Varia | Rimuovere o aggiornare mod incompatibili | Sì |
| Loop di tentativi Steam | Nessuno normalmente | Non richiesto | No | A volte, ma si consiglia prima di aspettare |
| Versione gioco incompatibile | Nessuno normalmente | Non richiesto | No | Sì |
| Avviso `steamclient.so` | Nessuno | Non richiesto | No | No, se il server funziona normalmente |

## Ordine Consigliato per la Risoluzione dei Problemi

Se non sei sicuro da dove iniziare, segui questo ordine:

1. Conferma che il server sia online.
2. Prova a connetterti con IP diretto invece di `Recent Servers`.
3. Controlla se Palworld o Steam hanno avuto un aggiornamento recente.
4. Rimuovi o aggiorna le mod se le usi.
5. Rivedi `PalWorldSettings.ini` in `Configs` per sintassi non valida.
6. Riavvia il server.
7. Verifica o reinstalla i file di gioco se gli errori di aggiornamento continuano.

Questo approccio ti aiuta a escludere prima le cause più comuni senza fare modifiche inutili.

## Conclusione

Congratulazioni, hai risolto con successo i problemi comuni del server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂