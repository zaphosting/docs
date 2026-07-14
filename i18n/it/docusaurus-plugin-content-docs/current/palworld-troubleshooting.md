---
id: palworld-troubleshooting
title: "Palworld: Risoluzione Problemi"
description: "Risolvi i problemi comuni del server Palworld, errori di aggiornamento Steam e problemi di connettività Steam sul tuo server di gioco. -> Scopri di più ora"
sidebar_label: Palworld: Risoluzione Problemi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server dedicati Palworld possono avere problemi per diversi motivi, tra cui aggiornamenti Steam falliti, incompatibilità di versione, conflitti con mod e problemi temporanei di connettività Steam. In questa guida imparerai a identificare i problemi comuni del server Palworld su ZAP-Hosting e ad applicare la soluzione corretta, inclusi quando modificare file di configurazione, verificare i file o riavviare il server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare la risoluzione dei problemi, assicurati di avere accesso all’amministrazione e alla console del tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting.

Dovresti inoltre avere a disposizione:

| Requisito | Perché serve |
| --- | --- |
| Accesso al pannello del server di gioco ZAP-Hosting | Necessario per fermare, avviare, reinstallare e modificare i file di configurazione |
| Accesso alla console del server | Utile per verificare se il server risponde |
| Un backup recente | Consigliato prima di modificare file o rimuovere mod |
| IP e porta diretti del server | Necessari perché la lista Recent Servers in-game potrebbe non funzionare sempre correttamente |

:::caution Crea un Backup Prima
Se prevedi di rimuovere mod, reinstallare file o resettare parti della configurazione del server Palworld, crea prima un backup per evitare perdite accidentali di dati.
:::

## Accesso ai File di Configurazione di Palworld

Alcuni passaggi di risoluzione richiedono modifiche manuali ai file di configurazione di Palworld. Su ZAP-Hosting puoi accedere a questi file tramite l’amministrazione del server di gioco nella sezione `Configs`.

Per i server dedicati Palworld, le impostazioni principali sono solitamente memorizzate nel file:

```text
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Se il tuo server usa un template di piattaforma diverso, il nome della cartella potrebbe variare, ma sui server Linux ospitati il percorso `LinuxServer` è lo standard.

### Apri il File di Configurazione nell’Interfaccia ZAP

Per accedere al file:

1. Apri il tuo server Palworld nell’interfaccia web di ZAP-Hosting.
2. Vai alla sezione `Configs`.
3. Apri `PalWorldSettings.ini`.
4. Controlla la riga `OptionSettings=(...)`, che contiene la maggior parte delle impostazioni di gioco e di connessione.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info File di Configurazione Principale
La maggior parte delle opzioni del server Palworld si trova in `PalWorldSettings.ini`, di solito nella sezione `OptionSettings=(...)`. Se devi modificare impostazioni di gioco, password, limiti di giocatori o valori di rete, questo è normalmente il file da editare.
:::

### Salva e Riavvia Dopo la Modifica

Dopo aver cambiato qualsiasi valore di configurazione:

1. Salva il file nella sezione `Configs`.
2. Riavvia il server Palworld dall’interfaccia ZAP-Hosting.

Palworld non applica in modo affidabile le modifiche di configurazione a caldo, quindi è necessario un riavvio dopo aver modificato `PalWorldSettings.ini`.

## Risoluzione di Aggiornamenti Steam Falliti

Un problema noto di aggiornamento può mostrare il messaggio:

```text
Error! app '2394010' state is 0x6 after update job
```

Questo indica solitamente che i file del server Steam di Palworld non sono stati aggiornati correttamente.

### Soluzione Consigliata

Per risolvere:

1. Ferma il server Palworld.
2. Apri la gestione del server nell’interfaccia ZAP-Hosting.
3. Usa la funzione di reinstallazione o verifica file.
4. Seleziona l’opzione per verificare l’integrità, così i file del server saranno controllati e riscaricati se necessario.
5. Avvia di nuovo il server.

:::tip Verifica l’Integrità per File Danneggiati
La verifica dei file è di solito il primo passo più sicuro perché ripara file mancanti o danneggiati senza dover caricare manualmente nulla.
:::

### Serve Modificare un File di Configurazione?

Di solito non è necessario modificare manualmente alcun file di configurazione per questo errore specifico. Il problema è quasi sempre legato a file di gioco danneggiati o incompleti, non a impostazioni errate in `PalWorldSettings.ini`.

## Risoluzione di "Connection Timed Out"

Se ricevi un errore `Connection timed out` durante il tentativo di connetterti al server Palworld, le cause possono essere diverse.

## Verifica che il Server Sia Effettivamente Avviato

Prima di tutto, conferma che il server sia partito correttamente.

### Usa la Console

Apri la console del server nell’interfaccia ZAP-Hosting e verifica l’attività di avvio. Se la console è disponibile, prova un comando semplice come:

```text
info
```

Se il server risponde normalmente, probabilmente è in esecuzione. Se non risponde o il processo si interrompe ripetutamente, il server potrebbe crashare durante l’avvio.

### Controlla l’Uso delle Risorse

Se l’uso della CPU resta insolitamente basso durante l’avvio e il server non risponde in console, questo può indicare che il processo del server Palworld è crashato o non si è inizializzato correttamente.

| Sintomo | Probabile causa | Azione consigliata |
| --- | --- | --- |
| Nessuna risposta in console | Crash all’avvio o processo bloccato | Riavvia il server e controlla modifiche recenti |
| Uso CPU molto basso all’avvio | Server non si inizializza correttamente | Controlla mod, aggiornamenti recenti e log |
| Server parte ma i giocatori vanno in timeout | Problema di metodo di connessione o versione | Usa IP diretto e verifica le versioni |

## Connettiti Usando l’IP Diretto invece di Recent Servers

Un problema comune di Palworld è che connettersi tramite la scheda `Recent Servers` in-game può fallire anche se il server è online.

Usa una connessione diretta:

1. Copia IP e porta del server dall’interfaccia ZAP-Hosting.
2. In Palworld, connettiti direttamente con quell’indirizzo.
3. Evita di affidarti alla lista `Recent Servers` per i test.

:::note Connessione Diretta Più Affidabile
Se il browser server Steam di Palworld o la lista recenti server si comportano in modo instabile, la connessione tramite IP diretto è il modo migliore per verificare se il server è raggiungibile.
:::

## Controlla Problemi con Mod o UE4SS

Se Palworld ha ricevuto un aggiornamento recente e il tuo server usa mod o `UE4SS`, il server potrebbe smettere di funzionare finché queste modifiche non vengono aggiornate.

### Cosa Controllare

Verifica se hai installato di recente:

- mod di gameplay
- modifiche personalizzate al server
- `UE4SS`
- altri file di terze parti che si integrano con il server Palworld

Se il problema è iniziato subito dopo un aggiornamento Steam di Palworld, questi file sono una causa probabile.

### Soluzione Consigliata

1. Ferma il server.
2. Crea un backup.
3. Rimuovi o disabilita mod o `UE4SS` aggiunti di recente.
4. Avvia di nuovo il server.
5. Testa la connessione usando IP diretto.

:::caution Compatibilità Mod Dopo Aggiornamenti
Gli aggiornamenti di Palworld possono rompere le mod senza preavviso. Se il server funzionava prima e ha smesso dopo un aggiornamento, testa sempre senza mod prima di cambiare altre impostazioni.
:::

### Sono Necessarie Modifiche di Configurazione?

Di solito no. I timeout di connessione legati alle mod sono causati da file incompatibili, non da valori dentro `PalWorldSettings.ini`.

## Risoluzione di Errori di Connessione Steam

Potresti vedere questo messaggio all’avvio:

```text
Connecting anonymously to Steam Public...Retrying
```

Questo è comunemente legato a problemi temporanei di connettività Steam, non a una configurazione Palworld corrotta.

### Cosa Significa

Il server dedicato Palworld dipende dai servizi Steam per alcune fasi di avvio e aggiornamento. Se Steam ha interruzioni, carichi elevati o manutenzioni programmate, il server potrebbe temporaneamente non riuscire a connettersi.

Questo è particolarmente comune durante periodi di traffico intenso o manutenzioni di routine, spesso di martedì.

### Soluzione Consigliata

Prova a:

1. Attendere da `5` a `10` minuti.
2. Riavviare il server.
3. Riprovare dopo.

Se il problema si verifica durante un’interruzione più ampia di Steam, dovrai aspettare che i servizi Steam tornino disponibili.

### Considerazioni sugli Aggiornamenti Automatici

Se il server incontra ripetutamente problemi di aggiornamento durante le interruzioni Steam, puoi valutare di disabilitare gli aggiornamenti automatici nelle impostazioni del server finché Steam non torna stabile.

:::tip Evita Aggiornamenti Durante la Manutenzione Steam
Se possibile, evita di forzare un aggiornamento Steam di Palworld durante i periodi di manutenzione noti. Questo riduce tentativi di avvio falliti e troubleshooting inutili.
:::

### Sono Necessarie Modifiche di Configurazione?

No. Questo problema non si risolve normalmente modificando `PalWorldSettings.ini` o altri file di configurazione manuali.

## Risoluzione di "Versione del Gioco Incompatibile"

Se Palworld mostra un messaggio che la partita sta usando una versione incompatibile del gioco, la versione del client e quella del server non corrispondono.

## Aggiorna la Versione del Server

Inizia riavviando il server dall’interfaccia ZAP-Hosting. Spesso questo applica l’ultimo aggiornamento del server Palworld.

Se la versione non corrisponde ancora, usa il normale flusso di aggiornamento del server. Se ti serve una guida dedicata, segui la documentazione Palworld per aggiornamenti disponibile in ZAP-Docs.

### Conferma la Versione del Client

Assicurati che anche il tuo gioco Palworld locale sia aggiornato tramite Steam.

| Componente | Cosa controllare |
| --- | --- |
| Server Palworld | Riavviato e aggiornato su ZAP-Hosting |
| Gioco Palworld locale | Aggiornato su Steam |
| Mod | Aggiornate o rimosse se incompatibili |

:::info Le Incompatibilità di Versione Coinvolgono Entrambi
Questo errore non significa sempre che il server è obsoleto. Anche il client locale può essere una versione più vecchia, quindi verifica sempre entrambi prima di modificare altro.
:::

### Sono Necessarie Modifiche di Configurazione?

No, di solito non serve modificare file di configurazione per un problema di versione.

## Comprendere i Messaggi di Avvio `steamclient.so`

Durante l’avvio potresti vedere messaggi simili a:

```text
steamclient.so: cannot open shared object file: No such file or directory
```

In molti ambienti di hosting Palworld, questi messaggi Steam appaiono anche se il server parte normalmente.

### Cosa Fare

Se il server continua ad avviarsi e diventa raggiungibile, puoi generalmente ignorare questo messaggio.

### Quando Diventa un Problema

Indaga solo se il server non si avvia completamente e questo messaggio appare insieme ad altri errori fatali.

:::note Non Tutti i Messaggi di Errore Steam Sono Critici
I log di avvio spesso contengono avvisi non fatali. Concentrati sul fatto che il server completi l’avvio e accetti connessioni, non solo sulla presenza di un singolo warning in console.
:::

## Risoluzione di Problemi di Connessione Legati a Mondo e Gilda

In alcuni casi, i giocatori possono avere problemi di connessione legati allo stato del mondo o della gilda, non al processo server.

Un esempio segnalato è quando un membro lascia la gilda mentre altri dati di giocatori legati alla gilda rimangono associati a giocatori offline. Questo può causare problemi di accesso.

### Possibili Soluzioni

Prova nell’ordine:

1. Chiedi al giocatore interessato di rientrare nella gilda, se possibile.
2. Riavvia il server Palworld.
3. Se il problema persiste, ripristina un backup o indaga con attenzione i dati di salvataggio coinvolti.

:::danger Modifiche ai Dati di Salvataggio Possono Essere Pericolose
Se sospetti corruzione del mondo o dei salvataggi, evita modifiche manuali casuali senza un backup aggiornato. Errori possono danneggiare permanentemente i dati del mondo Palworld.
:::

## Valori di Configurazione da Controllare

Anche se la maggior parte dei problemi in questa guida non è causata da impostazioni errate, ci sono alcuni valori in `PalWorldSettings.ini` che potresti voler verificare se i giocatori non riescono a connettersi come previsto.

Questi valori si trovano tipicamente nella sezione `OptionSettings=(...)`.

| Chiave di Configurazione | Scopo | Cosa controllare |
| --- | --- | --- |
| `ServerName` | Nome pubblico del server | Conferma che sia impostato come desideri |
| `ServerDescription` | Descrizione del server | Opzionale, ma utile per identificazione |
| `AdminPassword` | Password di accesso admin | Assicurati sia corretta se usi comandi admin |
| `ServerPassword` | Password di accesso | Rimuovila o correggila se i giocatori non si autenticano |
| `PublicPort` | Porta di connessione gioco | Conferma che corrisponda alla porta assegnata |
| `PublicIP` | IP pubblico pubblicizzato | Di solito lascialo invariato a meno che non sia richiesto |
| `bIsMultiplay` | Modalità multiplayer | Deve rimanere abilitato per server dedicati normali |
| `bIsDedicated` | Modalità server dedicato | Deve rimanere abilitato per server dedicati ospitati |

### Struttura Esempio

Il contenuto esatto del file può variare, ma le impostazioni rilevanti sono tipicamente in una riga simile a questa:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Palworld Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="",bIsMultiplay=True,bIsDedicated=True)
```

Sostituisci i segnaposto come `[your_admin_password]` e `[your_server_password]` con i tuoi valori.

:::caution Non Modificare Valori Sconosciuti a Caso
Palworld memorizza molte impostazioni in una singola riga `OptionSettings`. Se rimuovi virgole, virgolette o parentesi per errore, il server potrebbe non leggere correttamente la configurazione.
:::

## Applicare Modifiche di Configurazione in Sicurezza

Se devi modificare `PalWorldSettings.ini`, segui questo processo:

1. Ferma il server per evitare conflitti durante la modifica.
2. Apri `Configs` nell’interfaccia ZAP-Hosting.
3. Modifica `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`.
4. Salva le modifiche.
5. Avvia o riavvia il server.
6. Testa il server usando una connessione IP diretta.

### Nessun Comando Aggiuntivo Necessario

Per modifiche standard di configurazione Palworld, di solito non serve alcun comando in console dopo aver salvato il file. Il riavvio è il passaggio finale importante.

## Riferimento Rapido

| Problema | Modifica file config necessaria | Riavvio richiesto | Azione aggiuntiva |
| --- | --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | No | Sì | Verifica integrità o reinstalla file |
| `Connection timed out` | Di solito no | Spesso sì | Usa IP diretto, controlla mod, testa console |
| `Connecting anonymously to Steam Public...Retrying` | No | Sì | Attendi recupero Steam |
| `Incompatible version of the game` | No | Sì | Aggiorna server e client |
| Avviso `steamclient.so` | No | No, se il server parte normalmente | Di solito sicuro ignorare |
| Problemi di accesso dopo modifiche gilda | No | Sì | Rientra in gilda o ripristina backup se serve |

## Conclusione

Congratulazioni, hai risolto con successo i problemi comuni del server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂