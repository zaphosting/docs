---
id: subnautica-2-common-issues
title: "Subnautica 2: Problemi comuni"
description: "Scopri i problemi comuni del server di gioco Subnautica 2, problemi di connessione e soluzioni per migliorare le prestazioni e mantenere il gioco online e stabile -> Scopri di più ora"
sidebar_label: "Subnautica 2: Problemi comuni"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I problemi del server di Subnautica 2 possono variare da errori di avvio e crash a lag, problemi di connessione e prestazioni scadenti in gioco. In questa guida imparerai a identificare i problemi più comuni sul tuo gameserver Subnautica 2 e ad applicare soluzioni pratiche per far tornare il gioco online e fluido.

:::info Cambiamenti in Early Access
Se il software del server Subnautica 2 è ancora in fase di sviluppo attivo, alcuni comportamenti, file di configurazione o funzionalità disponibili potrebbero variare tra le versioni. Se noti differenze sul tuo server, confrontale sempre con la versione attualmente installata nella tua interfaccia web ZAP-Hosting.
:::

<InlineVoucher />

## Problemi e soluzioni

I problemi del server non sono sempre causati da un singolo errore. Spesso il problema è legato a file obsoleti, impostazioni errate, risorse insufficienti o condizioni temporanee di rete. Le sezioni seguenti ti aiutano a risolvere passo dopo passo i problemi più comuni.

### Problemi generali

I problemi generali solitamente riguardano la disponibilità di base del server, la sua visibilità o il comportamento all’avvio. Questi sono spesso i primi controlli da fare prima di indagare cause più avanzate.

<details>
  <summary>Server non visibile nel gioco</summary>

Se il tuo server Subnautica 2 non è visibile, potrebbe non essere partito correttamente o non aver completato il processo di inizializzazione. Questo può succedere a causa di valori di configurazione non validi, file di installazione incompleti o errori all’avvio.

Inizia controllando quanto segue:

- Verifica che il server risulti in esecuzione nella tua interfaccia web ZAP-Hosting
- Controlla la console del server per errori di avvio
- Esamina i file di log per file mancanti o passaggi di inizializzazione falliti
- Assicurati di usare i filtri di ricerca corretti nel browser server in gioco
- Attendi qualche minuto dopo l’avvio, alcuni server necessitano di tempo aggiuntivo prima di apparire pubblicamente

Se il server continua a non apparire, riavvialo una volta e monitora la console dall’inizio del processo di avvio.

</details>

<details>
  <summary>Il server non si avvia</summary>

Se il server non si avvia affatto, la causa è solitamente legata a file corrotti, aggiornamenti incompleti o configurazioni non valide.

Controlla questi punti:

| Controllo | Perché è importante |
| --- | --- |
| Output della console del server | Mostra l’errore esatto di avvio, se presente |
| Modifiche recenti alla configurazione | Un singolo valore non valido può bloccare l’avvio |
| Upload o modifiche recenti ai file | File modificati manualmente potrebbero essere incompleti o incompatibili |
| Versione attuale del gioco | File server non corrispondenti possono causare fallimenti immediati |

Se hai modificato di recente i file di configurazione, annulla le ultime modifiche e riprova. Se il problema è iniziato dopo un aggiornamento o una modifica manuale, ripristinare un backup può farti risparmiare tempo.

:::tip Usa i backup prima di modifiche importanti
Prima di modificare file importanti o aggiornare il server, crea un backup così puoi tornare rapidamente indietro se si presenta un nuovo problema.
:::

</details>

<details>
  <summary>Password o impostazioni di accesso non funzionano come previsto</summary>

Se i giocatori non riescono a connettersi anche se il server è online, controlla attentamente le impostazioni di accesso. Una password errata, dati client salvati obsoleti o discrepanze tra impostazioni pubbliche e private possono bloccare l’accesso.

Verifica:

- Che la password inserita dai giocatori corrisponda esattamente a quella attuale del server
- Che il server sia stato riavviato dopo aver cambiato le impostazioni di accesso
- Che non vengano riutilizzati dati di connessione salvati lato client obsoleti
- Che eventuali impostazioni private o whitelist siano configurate correttamente, se disponibili nella tua versione del server

Se non sei sicuro che il problema derivi dalla configurazione, semplifica temporaneamente l’impostazione e testa con restrizioni minime.

</details>

### Problemi di crash

I crash improvvisi interrompono il gioco e possono causare perdita di dati se si ripetono. Le cause più comuni sono file server obsoleti, mod incompatibili o risorse sovraccariche.

<details>
  <summary>Mantenere il server aggiornato</summary>

Usare l’ultima versione disponibile del server Subnautica 2 è fondamentale per stabilità, compatibilità e sicurezza. Versioni vecchie possono contenere bug già risolti o non funzionare più correttamente con il client di gioco attuale.

Un server obsoleto può causare:

- fallimenti all’avvio
- crash casuali
- errori di versione non corrispondente
- comportamento di gioco instabile

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Se il server ha iniziato a crashare dopo un aggiornamento del gioco, verifica prima se è disponibile una versione più recente del server nella tua interfaccia web. Dopo l’aggiornamento, riavvia il server e testa di nuovo.

</details>

<details>
  <summary>Mod e contenuti aggiuntivi difettosi o incompatibili</summary>

Se Subnautica 2 supporta mod o altri contenuti aggiuntivi lato server nella tua versione, questi possono essere una causa comune di crash. Contenuti incompatibili o obsoleti possono caricarsi parzialmente ma generare errori durante il gioco.

Segnali tipici includono:

- crash del server subito dopo l’avvio
- crash quando un giocatore si connette
- blocchi durante il caricamento del mondo
- errori dopo aver aggiunto nuovi contenuti

Per isolare la causa, segui questo procedimento:

1. Ferma il server
2. Rimuovi o disabilita i contenuti aggiunti di recente
3. Avvia il server con la configurazione minima possibile
4. Testa la stabilità
5. Riattiva i contenuti uno alla volta

Questo metodo ti aiuta a identificare esattamente quale file o pacchetto causa il problema.

:::caution Compatibilità delle versioni
Usa solo mod, framework o estensioni confermate compatibili con la tua versione attuale del server Subnautica 2. Anche un solo componente obsoleto può causare crash ripetuti.
:::

</details>

<details>
  <summary>Mondo o dati di salvataggio corrotti</summary>

Se il server crasha durante il caricamento del mondo o poco dopo la connessione dei giocatori, i dati di salvataggio potrebbero essere danneggiati. Questo può succedere dopo spegnimenti forzati, scritture interrotte o crash ripetuti.

Indicatori possibili:

- il server crasha sempre nella stessa fase di caricamento
- un mondo nuovo parte correttamente, ma quello esistente no
- la console segnala errori di salvataggio o caricamento del mondo

Se sospetti corruzione del salvataggio, prova con un backup o un mondo nuovo se disponibile. Se un mondo nuovo parte senza problemi, il problema è probabilmente legato ai dati di salvataggio esistenti.

:::danger Rischio di perdita dati
Non cancellare subito i file del mondo esistente. Prima crea una copia di backup così potrai tentare un recupero in seguito se necessario.
:::

</details>

### Problemi di prestazioni

I problemi di prestazioni si manifestano spesso come lag, azioni ritardate, caricamenti lenti del mondo o gioco instabile. Questi problemi sono spesso causati da scelte di configurazione, risorse hardware insufficienti o contenuti aggiuntivi pesanti.

<details>
  <summary>Configurazione server errata</summary>

Valori di configurazione errati possono aumentare il carico su CPU, memoria o storage e ridurre le prestazioni complessive del server. Se il tuo server Subnautica 2 sembra lento o instabile, rivedi attentamente le impostazioni.

In particolare, verifica che:

- i limiti relativi ai giocatori siano realistici per il tuo pacchetto
- le impostazioni del mondo non siano più esigenti del necessario
- non siano state modificate impostazioni sperimentali o non predefinite di recente
- il server sia stato riavviato dopo aver applicato le modifiche

Di solito puoi gestire la configurazione nella sezione **Settings** o tramite i file disponibili in **Configs** nella tua interfaccia web ZAP-Hosting.

</details>

<details>
  <summary>Il pacchetto server non soddisfa i requisiti del progetto</summary>

Un server troppo piccolo per il tuo progetto può causare scatti, lunghi tempi di caricamento e instabilità. Questo diventa più evidente aumentando il numero di giocatori, usando contenuti aggiuntivi o gestendo un mondo grande e attivo.

ZAP-Hosting fornisce configurazioni consigliate durante l’ordine per aiutarti a scegliere risorse adatte al tuo gioco.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Usa questa tabella come riferimento generale per la risoluzione dei problemi:

| Sintomo | Possibile causa | Azione consigliata |
| --- | --- | --- |
| Lag frequenti | Risorse CPU troppo limitate | Riduci il carico o aggiorna il pacchetto |
| Tempi di caricamento lenti | Collo di bottiglia su storage o memoria | Controlla l’uso e valuta più risorse |
| Crash sotto carico di giocatori | Capacità complessiva insufficiente | Riduci il carico o scala il server |
| Buone prestazioni a vuoto, scarse con giocatori | Pacchetto troppo piccolo per uso attivo | Aggiorna in base all’attività prevista |

:::note Raccomandazioni minime
Le dimensioni consigliate del pacchetto sono solo un punto di partenza. Se il tuo server Subnautica 2 usa un mondo più grande, più giocatori o contenuti aggiuntivi, potresti aver bisogno di più risorse fin dall’inizio.
:::

</details>

<details>
  <summary>Alto utilizzo di risorse da mod o contenuti aggiuntivi</summary>

Anche se i contenuti aggiuntivi non causano crash, possono comunque creare seri problemi di prestazioni. Contenuti poco ottimizzati possono aumentare l’uso della CPU, consumare troppa memoria o attivare processi di background ripetuti.

Un buon metodo di troubleshooting è confrontare le prestazioni con e senza i contenuti aggiunti. Se il server funziona normalmente con una configurazione minima, reintroduci i contenuti gradualmente finché il problema non si ripresenta.

Questo approccio è particolarmente utile quando:

- il lag è iniziato dopo aver installato nuovi contenuti
- il server diventa instabile nel tempo
- le prestazioni calano solo in certe aree o situazioni
- l’uso delle risorse aumenta senza cambiamenti evidenti nella configurazione

</details>

<details>
  <summary>Mondo grande o salvataggio a lungo termine rallentano</summary>

Con la crescita del mondo server e l’accumulo di attività dei giocatori, le prestazioni possono peggiorare. Questo è comune su server attivi da molto tempo con grandi quantità di dati salvati.

Se noti che le prestazioni erano buone all’inizio ma peggiorano col tempo, considera quanto segue:

- testa se un backup più recente funziona meglio
- verifica se troppi giocatori sono attivi contemporaneamente
- rimuovi contenuti aggiuntivi non necessari
- controlla se il problema si presenta solo in un mondo specifico

Se un mondo di test nuovo funziona molto meglio, il rallentamento potrebbe essere legato alla dimensione del mondo o alla complessità del salvataggio.

</details>

### Problemi di rete

I problemi di rete influenzano come i giocatori si connettono e interagiscono con il tuo server. Questi problemi possono manifestarsi come ping alto, rubberbanding, disconnessioni o completa irraggiungibilità.

<details>
  <summary>Picchi di ping, lag e ritardi di rete</summary>

Picchi di ping e ritardi di rete sono spesso causati da un mix di carico del server e condizioni di instradamento. Anche se il gioco è online, hardware sovraccarico o distanza geografica possono creare un’esperienza scadente.

Cause comuni includono:

- la posizione del server è lontana dalla base giocatori
- il server è sotto alto carico di CPU o memoria
- molti giocatori connessi contemporaneamente
- processi in background o altri task consumano risorse
- problemi temporanei di instradamento o perdita pacchetti tra giocatori e server

Per migliorare la qualità della rete, controlla quanto segue:

| Controllo | Risultato |
| --- | --- |
| Scegli una posizione vicina ai tuoi giocatori | Minore latenza media |
| Riduci il carico inutile sul server | Meno picchi di lag durante il gioco |
| Mantieni il server aggiornato | Maggiore stabilità e compatibilità |
| Testa in orari diversi | Aiuta a identificare problemi temporanei di instradamento |

Se il problema riguarda un solo giocatore, potrebbe dipendere dalla sua connessione. Se colpisce tutti, la causa è probabilmente lato server o percorso di rete.

</details>

<details>
  <summary>I giocatori si disconnettono casualmente</summary>

Disconnessioni casuali possono essere causate da instradamento instabile, risorse server sovraccariche o instabilità temporanea del software. Se i giocatori vengono rimossi senza motivo chiaro in gioco, confronta i tempi delle disconnessioni con i messaggi in console e i picchi di prestazioni.

Controlla:

- se le disconnessioni avvengono durante i picchi di carico
- se il server si riavvia o si blocca brevemente
- se tutti i giocatori si disconnettono insieme o solo singoli utenti
- se il problema è iniziato dopo un aggiornamento o modifica di configurazione recente

Se tutti i giocatori si disconnettono contemporaneamente, il problema è solitamente legato al server o alla rete. Se solo un giocatore si disconnette, la causa è spesso locale a quel giocatore.

</details>

<details>
  <summary>Attacchi DDoS e altre minacce di rete</summary>

I server di gioco possono essere occasionalmente bersaglio di traffico malevolo, inclusi attacchi Distributed Denial of Service. Questi attacchi possono causare lag, fallimenti di connessione o downtime temporanei.

ZAP-Hosting offre protezione DDoS per i servizi ospitati, che aiuta a ridurre l’impatto di attacchi comuni e avanzati. Tuttavia, se sospetti che il tuo server Subnautica 2 sia sotto attacco, contatta il supporto fornendo più dettagli possibili, come:

- quando è iniziato il problema
- se tutti i giocatori sono colpiti
- se il server diventa completamente irraggiungibile
- se il problema si ripete in orari specifici

:::info Protezione integrata
La mitigazione DDoS è gestita a livello infrastrutturale. Se sospetti traffico malevolo, di solito non serve modificare prima le impostazioni del server di gioco. Raccogli i sintomi e contatta il supporto.
:::

</details>

### Problemi di gioco legati al server

Alcuni problemi non sono crash diretti o guasti di rete, ma influenzano comunque il corretto funzionamento del gioco per i giocatori.

<details>
  <summary>Disallineamento di versione tra client e server</summary>

Se i giocatori non riescono a connettersi dopo un aggiornamento, il server e il client di gioco potrebbero avere versioni diverse. Questo è comune subito dopo le patch.

Per risolvere:

1. Conferma che il server sia aggiornato
2. Riavvia il server dopo l’aggiornamento
3. Assicurati che i giocatori abbiano aggiornato il client di gioco
4. Testa di nuovo la connessione

Se solo alcuni giocatori riescono a connettersi, confronta prima la loro versione di gioco con quella del server.

</details>

<details>
  <summary>Le modifiche non si applicano dopo aver modificato le impostazioni</summary>

Se hai cambiato valori di configurazione ma non noti differenze in gioco, il server potrebbe usare dati runtime memorizzati nella cache o non aggiornati, oppure il file modificato potrebbe non essere quello attivo.

Controlla:

- che il file corretto sia stato modificato
- che i valori siano stati salvati correttamente
- che il server sia stato riavviato completamente dopo
- che l’impostazione modificata sia supportata dalla versione installata

Se il comportamento esatto della configurazione non è chiaro per la tua versione di Subnautica 2, evita di indovinare e testa le modifiche una alla volta per identificare chiaramente cosa si applica.

</details>

## Misure preventive

Prevenire i problemi è generalmente più semplice che risolverli dopo che hanno colpito i tuoi giocatori. Alcuni passaggi di manutenzione regolare possono migliorare significativamente la stabilità.

### Checklist di manutenzione consigliata

Usa questa checklist per ridurre la probabilità di problemi futuri:

| Attività | Perché farla |
| --- | --- |
| Crea backup regolari | Protegge il mondo e la configurazione da perdite di dati |
| Aggiorna il server con attenzione | Riduce bug e problemi di versione non corrispondente |
| Testa le modific