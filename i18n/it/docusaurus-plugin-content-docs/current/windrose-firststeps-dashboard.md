---
id: windrose-firststeps-dashboard
title: "Windrose: Panoramica del Dashboard"
description: "Scopri il dashboard Windrose di ZAP-Hosting e impara a gestire il tuo gameserver, monitorare le prestazioni e utilizzare le principali funzioni di controllo in modo efficiente -> Scopri di più ora"
sidebar_label: Dashboard
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il **dashboard Windrose** è l’area centrale per gestire il tuo server di gioco nell’interfaccia web di ZAP-Hosting. In questa guida, otterrai una panoramica strutturata delle sezioni disponibili e imparerai a usare in modo efficiente gli strumenti principali di amministrazione, monitoraggio e hosting.

<InlineVoucher />

## Amministrazione del Prodotto

Nell’area **Amministrazione del Prodotto** troverai le pagine più importanti per controllare e monitorare il tuo server **Windrose**. Queste pagine ti aiutano a gestire lo stato attuale del server, rivedere gli eventi tecnici e accedere rapidamente alle informazioni essenziali del servizio.

### Dashboard

La **Dashboard** è la pagina principale di panoramica del tuo server **Windrose**. Qui puoi trovare a colpo d’occhio i dettagli più importanti del servizio, come lo stato attuale del server, la posizione, l’indirizzo di connessione e l’utilizzo delle risorse.

![img](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

A seconda della configurazione attuale del server e dell’integrazione del gioco, la dashboard può mostrare anche informazioni aggiuntive come la mappa attiva, il nome del server, la memoria utilizzata o l’uso degli slot giocatori. È anche il posto dove puoi avviare, fermare o riavviare direttamente il servizio.

La dashboard è particolarmente utile perché combina controllo e monitoraggio del server in un unico luogo. Questo ti permette di verificare rapidamente se il servizio è online e reagire immediatamente se sono necessarie modifiche.

### Statistiche

Nella sezione **Statistiche** puoi rivedere i dati storici di utilizzo del tuo server. Questo ti aiuta a capire meglio come il tuo hosting **Windrose** si comporta nel tempo.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

I grafici disponibili includono solitamente valori come l’utilizzo della CPU, della memoria e l’uso degli slot. Spesso puoi cambiare l’intervallo temporale per analizzare picchi a breve termine o tendenze a lungo termine.

| Metrica | Scopo |
| --- | --- |
| Utilizzo CPU | Ti aiuta a identificare il carico di elaborazione e possibili colli di bottiglia nelle prestazioni |
| Utilizzo memoria | Mostra quanta RAM sta usando il server |
| Utilizzo slot | Indica quanti slot giocatori disponibili sono attivamente utilizzati |

:::tip Analisi delle Prestazioni
Se noti lag, crash o tempi di risposta lenti, la pagina delle statistiche è uno dei posti migliori da cui iniziare la risoluzione dei problemi. Può aiutarti a capire se il problema è legato all’uso delle risorse o se si è verificato solo in un momento specifico.
:::

### Gestore DDoS

Il **Gestore DDoS** ti permette di rivedere le informazioni relative agli attacchi DDoS rilevati e mitigati contro il tuo servizio. Questo può essere utile se vuoi capire pattern di traffico insoliti o indagare interruzioni causate da traffico malevolo.

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

A seconda delle opzioni prenotate e della protezione disponibile nella tua posizione selezionata, potresti anche vedere informazioni sugli attacchi attivi e dettagli sul traffico in tempo reale.

:::info Disponibilità Gestore DDoS
Il Gestore DDoS è disponibile solo se il tuo servizio include un indirizzo IP dedicato o l’opzione aggiuntiva **Panoramica Gestore DDoS**. Se non è inclusa nel tuo pacchetto attuale, devi prima effettuare un upgrade del servizio.
:::

### File di Log

Se il tuo server **Windrose** mostra errori o si comporta in modo anomalo, la sezione **File di Log** è uno dei posti più importanti da controllare. I file di log contengono output tecnici dal server e possono includere avvisi, messaggi di avvio e dettagli sugli errori.

Questi file sono particolarmente utili per identificare la causa di crash, avvii falliti o problemi di configurazione.

:::caution Limitazioni nella Revisione dei Log
Se l’output dei log non è chiaro o non ti aiuta a identificare il problema, dovresti contattare il supporto tramite la pagina ufficiale [supporto](https://zap-hosting.com/en/customer/support/). Includi una descrizione chiara del problema e eventuali messaggi di log rilevanti per velocizzare la risoluzione.
:::

### Registro Eventi

Il **Registro Eventi** ti offre una panoramica delle azioni e degli eventi relativi al tuo servizio. Questo può includere avvii, arresti, crash, installazioni, aggiornamenti e attività di backup.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

Questa sezione è particolarmente utile se vuoi verificare quando è avvenuta una modifica o se un’attività automatica è stata eseguita con successo.

### Console Live

La **Console Live** mostra l’output in tempo reale del server mentre il tuo server **Windrose** è in esecuzione. Ti permette di monitorare cosa sta succedendo sul server e può aiutarti a rilevare immediatamente eventuali problemi.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Se supportato dal software del server, puoi anche inviare comandi direttamente tramite la console live. Questo è utile per azioni amministrative da eseguire senza riavviare il servizio.

| Funzione | Descrizione |
| --- | --- |
| Output in tempo reale | Mostra eventi e messaggi correnti del server |
| Visibilità errori | Ti aiuta a identificare problemi mentre accadono |
| Inserimento comandi | Permette di inviare comandi supportati direttamente |

### Interruzioni del Servizio

Se il tuo server è stato temporaneamente non disponibile e non c’è una causa evidente nel registro eventi o nei file di log, il problema potrebbe essere legato al sistema host sottostante piuttosto che al tuo servizio specifico.

Nella sezione **Interruzioni del Servizio** puoi rivedere la cronologia delle interruzioni relative all’ambiente host del tuo gameserver. Per informazioni più ampie sullo stato della piattaforma, puoi anche consultare la pagina ufficiale [status](https://status.zap-hosting.com/).

## Impostazioni

L’area **Impostazioni** contiene le pagine principali di configurazione per il tuo server **Windrose**. Qui puoi regolare il comportamento del servizio, cambiare i giochi installati dove supportato, gestire gli aggiornamenti e configurare le funzionalità di automazione.

### Impostazioni

La pagina **Impostazioni** offre una panoramica semplificata delle opzioni comuni del server. Questo è particolarmente utile se sei nuovo nell’hosting di server di gioco e vuoi apportare modifiche senza modificare direttamente i file di configurazione.

Se disponibile per **Windrose**, queste opzioni possono includere impostazioni di gameplay o altri parametri comuni del servizio. Le opzioni esatte possono variare in base all’integrazione del gioco attuale.

### Configurazioni

La sezione **Configurazioni** ti permette di modificare i file di configurazione direttamente tramite l’interfaccia web. Questo ti dà un controllo più preciso rispetto alla pagina semplificata delle impostazioni ed è generalmente più adatto agli utenti avanzati.

:::caution Valori Sovrascritti
Alcuni valori possono essere gestiti dalla pagina semplificata **Impostazioni**. Se noti che alcune modifiche manuali nell’editor di configurazione vengono sovrascritte, verifica se la stessa opzione è ancora controllata lì.
:::

### Giochi

Nella sezione **Giochi** puoi passare a un altro gioco o variante disponibile se il tuo servizio lo supporta. I giochi con lo stesso prezzo per slot possono di solito essere selezionati direttamente, mentre altri giochi potrebbero richiedere prima un adeguamento del pacchetto.

Se vuoi saperne di più su come cambiare il gioco installato sul tuo servizio, consulta la guida [Cambio Gioco](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versioni

La pagina **Versioni** ti permette di gestire la versione del server installata per il tuo servizio **Windrose**, se la gestione delle versioni è supportata. Di solito puoi aggiornare all’ultima versione disponibile e abilitare gli aggiornamenti automatici.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Gli aggiornamenti automatici aiutano a mantenere l’ambiente di hosting aggiornato, ma dovresti comunque verificare la compatibilità dopo cambiamenti di versione importanti.

### Attività Pianificate

Con le **Attività Pianificate** puoi automatizzare azioni ricorrenti per il tuo server. Questo è utile se vuoi ridurre il lavoro di amministrazione manuale e mantenere il servizio sempre attivo.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Le azioni automatizzate comuni possono includere:

| Tipo di Attività | Esempio d’Uso |
| --- | --- |
| Avvio servizio | Avvia automaticamente il server a un orario specifico |
| Arresto servizio | Spegni il server durante finestre di manutenzione |
| Riavvio servizio | Esegui riavvii di routine per stabilità |
| Creazione backup | Crea backup regolari senza azione manuale |
| Comandi personalizzati | Esegui comandi supportati automaticamente |

### Pianificatore Riavvii

Il **Pianificatore Riavvii** è pensato specificamente per programmare riavvii automatici del server. Questo può essere utile se vuoi riavviare regolarmente il tuo server **Windrose**, ad esempio durante le ore di bassa attività.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Impostazioni DNS

Con le **Impostazioni DNS** puoi assegnare un indirizzo più facile da ricordare al tuo servizio. Questo può rendere il server più semplice da condividere con altri giocatori.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

Potresti poter usare un sottodominio fornito da ZAP o il tuo dominio personale, a seconda della configurazione e delle opzioni prenotate.

## Strumenti

La sezione **Strumenti** contiene funzionalità aggiuntive di gestione del servizio che supportano l’accesso ai file, la gestione dei database e la gestione dei backup.

### Browser FTP

Nel **Browser FTP** puoi trovare i dettagli di connessione necessari per accedere ai file del server. L’accesso FTP è utile se devi caricare, scaricare o modificare file direttamente.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

Per una gestione più semplice dei file, si consiglia di usare un client FTP esterno come [FileZilla](https://filezilla-project.org/) o [WinSCP](https://winscp.net/). Se hai bisogno di aiuto per la connessione, dai un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md).

### Database

Nella sezione **Database** puoi creare e gestire i database inclusi con il tuo prodotto gameserver, se richiesto dalla configurazione. Questo è utile per servizi, mod o strumenti che necessitano di archiviazione dati strutturata.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

Di solito puoi visualizzare le credenziali di accesso, creare nuovi database e importare backup esistenti da questa sezione.

### Backup

La sezione **Backup** ti permette di creare e gestire backup per il tuo server e, dove supportato, per i dati del database associato.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

I backup regolari sono fortemente consigliati perché ti permettono di ripristinare il servizio dopo errori di configurazione, corruzione dei file o problemi imprevisti.

:::tip Best Practice per i Backup
Crea un backup manuale prima di apportare modifiche importanti come modificare file di configurazione, cambiare versione o cambiare gioco installato. Questo ti dà un punto di ripristino sicuro in caso di problemi.
:::

## Link Utili

La sezione **Link Utili** fornisce risorse aggiuntive relative al tuo servizio e all’uso generale della piattaforma ZAP-Hosting.

### Domande Frequenti

L’area **Domande Frequenti** contiene risposte ai temi comuni relativi al tuo servizio. Questo può aiutarti a risolvere problemi tipici più rapidamente senza dover contattare il supporto.

### Documentazione ZAP-Hosting

La **Documentazione ZAP-Hosting** ti dà accesso a una vasta base di conoscenze che copre amministrazione server, configurazione hosting, risoluzione problemi e argomenti correlati. Se cerchi guide più avanzate oltre a questa panoramica del dashboard **Windrose**, questo è il posto migliore dove continuare.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

La sezione **News** contiene annunci rilevanti per il tuo servizio. Questo può includere avvisi tecnici, informazioni di manutenzione, cambiamenti di funzionalità e altri aggiornamenti importanti.

Controllare regolarmente questa sezione ti aiuta a rimanere aggiornato su cambiamenti che possono influenzare il tuo ambiente di hosting **Windrose**.

<InlineVoucher />

## Conclusione

Ora hai una panoramica completa delle aree più importanti del dashboard **Windrose** nel pannello ZAP-Hosting, dal monitoraggio e log del server alle impostazioni, strumenti e funzionalità di automazione. Questa conoscenza ti aiuta a navigare il tuo servizio di hosting in modo più efficiente e a gestire il server con maggiore sicurezza.

Congratulazioni, hai imparato con successo come usare il dashboard Windrose. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂