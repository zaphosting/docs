---
id: groundbranch-firststeps-dashboard
title: "Ground Branch: Panoramica del Dashboard"
description: "Scopri come gestire efficacemente il tuo server Ground Branch con una panoramica chiara di funzioni e opzioni → Scopri di più ora"
sidebar_label: Dashboard
services:
  - gameserver-groundbranch
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Sei interessato a un **server Ground Branch** o ne possiedi già uno, ma ti manca ancora una panoramica completa dell’amministrazione e di dove trovare tutte le opzioni necessarie? Soprattutto all’inizio, può essere una sfida. Ma niente stress, qui sotto ti diamo una guida dettagliata all’amministrazione del tuo servizio, così avrai la miglior overview possibile.

Dopo aver letto questa guida, potrai gestire il tuo server in modo efficiente e trovare tutte le opzioni e funzioni necessarie in modo rapido e semplice. Qui riceverai una panoramica strutturata che ti aiuterà passo dopo passo a familiarizzare con l’amministrazione del server e ad ampliare le tue conoscenze in modo mirato. Così potrai assicurarti che il tuo **server Ground Branch** sia ottimizzato per le tue esigenze e sfruttare al massimo tutte le opzioni disponibili.

<InlineVoucher />

## Amministrazione del Prodotto

Nella sezione **Amministrazione del Prodotto** trovi tutte le pagine necessarie per gestire il tuo server. Le opzioni per la gestione sono elencate dettagliatamente qui sotto.

### Dashboard

Il **Dashboard** del tuo server è il cuore dell’amministrazione. Qui trovi tutte le info base ed essenziali sul tuo servizio in modo chiaro. Per esempio, informazioni sulla location, stato, IP:Porta, memoria usata, gioco in corso, nome del server, mappa e numero di slot disponibili. Inoltre, viene mostrato anche l’utilizzo di CPU, memoria e RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/fePdRpfpcL3P3mn/preview)

Dal dashboard puoi anche avviare, fermare o riavviare il servizio, così hai il pieno controllo sul suo funzionamento. Inoltre, puoi accedere alla console live per avere info in tempo reale sullo stato del server e intervenire direttamente se serve.

### DDoS Manager

Visualizza gli attacchi DDoS passati per valutare meglio potenziali minacce e pattern. Attiva le notifiche per attacchi DDoS in corso sul tuo server, così puoi reagire subito in caso di problemi.

A seconda della location del server e della protezione DDoS disponibile, puoi anche monitorare gli attacchi attivi in tempo reale. Questo include dettagli sul traffico, mostrando sia il traffico legittimo che quello bloccato dai sistemi di mitigazione. Questo livello di trasparenza ti aiuta a capire come funziona la protezione e a identificare rischi potenziali in anticipo.

:::info Accesso al DDoS Manager mancante?
L’uso del DDoS Manager richiede un IP dedicato o l’opzione aggiuntiva "Panoramica DDoS Manager". Se il tuo pacchetto attuale non include questi componenti, puoi aggiungerli in qualsiasi momento aggiornando il servizio.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
L’uso del DDoS Manager è possibile solo se hai prenotato un IP dedicato o l’opzione "Panoramica DDoS Manager" come extra. Se questi componenti mancano nel tuo pacchetto attuale, puoi aggiungerli in qualsiasi momento con un upgrade.
:::

### Log files

Hai un problema tecnico e non sai da dove viene? Una prima strategia è controllare i **Log files**. Questi file contengono tante info sul server, come eventi attuali, suggerimenti o messaggi di errore.

I messaggi di errore in particolare aiutano a identificare e capire meglio la causa del problema. Spesso, guardando i log in modo mirato, si riesce a scovare e risolvere il problema.

:::warning
Le info trovate non ti aiutano o non le capisci? Tranquillo! In questo caso siamo sempre disponibili nel supporto. Apri un **[Ticket](https://zap-hosting.com/en/customer/support/)** e spiegaci il problema. Lo controlleremo il prima possibile e ti aiuteremo a risolverlo! :)
:::

### Event log

L’**Event Log** ti dà una panoramica completa di tutte le attività legate all’amministrazione del server. Puoi vedere quando un server è stato avviato, spento o crashato, e quando sono stati fatti aggiornamenti, backup o nuove installazioni.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Interruzioni di Servizio

Il tuo server è stato offline per un po’ e non capisci il motivo? Controllare event log e log files non ha dato info? Potrebbe essere che il problema non sia direttamente sul tuo server, ma sul sistema host che lo ospita.

Se il nostro sistema di monitoraggio rileva un’interruzione generale, i nostri tecnici vengono avvisati automaticamente e si occupano del problema il prima possibile.

Qui trovi una panoramica della cronologia delle interruzioni del sistema host su cui gira il tuo server. Per info aggiornate e lo stato attuale del servizio, visita la nostra nuova [pagina di status](https://status.zap-hosting.com/).

## Impostazioni

Nella sezione **Impostazioni** trovi tutte le pagine necessarie per configurare il tuo server. Le opzioni disponibili per la configurazione sono elencate dettagliatamente qui sotto.

### Impostazioni

Qui trovi una panoramica delle opzioni di configurazione più comuni per il tuo server, con una breve spiegazione. La pagina impostazioni è particolarmente consigliata ai neofiti dell’amministrazione server.

Se sei più esperto e vuoi fare modifiche più precise, ti consigliamo di usare l’Editor Config. Trovi più info nella categoria **Configs**.

### Configs

L’editor dei file di configurazione ti permette di modificare direttamente i file di config dal sito, in modo classico senza la vista semplificata. Questa opzione ti consente di personalizzare le impostazioni del server secondo le tue preferenze.

Usando l’editor hai accesso diretto a tutte le opzioni disponibili e puoi modificarle con precisione. È particolarmente utile per utenti avanzati che vogliono il controllo totale sulle impostazioni e sanno esattamente cosa cambiare.

:::warning
Hai notato che alcune modifiche vengono parzialmente sovrascritte? Ricorda che certi valori vengono presi dalla pagina impostazioni. Se vuoi modificare direttamente nel config, devi prima disattivare le opzioni corrispondenti nella pagina impostazioni.
:::

### Games

In **Games** puoi sempre cambiare la variante di gioco del tuo server esistente o installare un altro gioco. I giochi con lo stesso prezzo per slot si possono selezionare direttamente sotto **Available Games**. Per gli altri giochi serve prima modificare il prezzo per slot. Maggiori info nel nostro [guida al cambio gioco](gameserver-gameswitch.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versions

In **Versions** puoi vedere e gestire la versione attuale del tuo server di gioco. Puoi aggiornare sempre all’ultima versione o attivare gli aggiornamenti automatici per mantenere il server sempre aggiornato.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Inoltre, puoi attivare le notifiche email per gli aggiornamenti automatici, così resti sempre informato.

### Scheduled Tasks

Crea task programmati che si eseguono automaticamente a orari definiti per automatizzare vari processi sul server. Puoi scegliere se farli eseguire una volta o ripetutamente. I tipi di task supportati includono avviare, fermare o riavviare servizi, riavviare il server se online, creare backup o eseguire comandi personalizzati.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Restart planner

Vuoi programmare riavvii del server a orari specifici? Il Restart Planner ti permette di impostare riavvii automatici schedulati del tuo game server. Puoi scegliere orari precisi o intervalli regolari.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

## Tools

Nella sezione **Tools** del pannello di navigazione trovi varie sottosezioni che ti aiutano a gestire il server. Tra queste ci sono **FTP Browser**, **Databases** e **Backups**. Qui sotto ti spieghiamo nel dettaglio queste aree.

### FTP-Browser

Con l’**FTP Browser** trovi tutte le info necessarie per connetterti via FTP. L’accesso FTP ti dà accesso diretto ai file del tuo server di gioco. Ti consigliamo di usare un client FTP esterno come **Filezilla** o **WinSCP** per un’esperienza ottimale. Se non sai come usare FTP, dai un’occhiata alla nostra guida [Accesso FTP](gameserver-ftpaccess.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla è probabilmente il client FTP più semplice e conosciuto. Basta installarlo, avviarlo e inserire i dati di accesso che trovi qui sopra nella barra in alto. Con un click su "Connetti" sei subito collegato al server e puoi gestire i file.

**WinSCP:** WinSCP è pensato principalmente per SCP e SFTP (versioni criptate di FTP), ma funziona benissimo anche con FTP normale. Il programma è un po’ più complesso di FileZilla ed è più adatto a utenti avanzati.

### Databases

Oltre ai nostri server di gioco, offriamo anche 10 database inclusi. Questi sono necessari, per esempio, quando devi salvare dati in un database. In **Databases** puoi creare un database e vedere le credenziali di accesso. Puoi anche attivare i backup e importare backup di database esistenti.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

In **Backups** puoi creare backup manuali e automatici per il server e il database associato. Così recuperi facilmente i dati in caso di problemi o perdita.

Nelle impostazioni puoi decidere se fare backup automatici e se farli giornalmente o settimanalmente. Puoi anche scegliere se eliminare i backup più vecchi quando lo spazio di archiviazione è limitato.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Per i nostri server di gioco offriamo di default 10 GB di spazio per backup sul server di storage. Se ti serve più spazio, puoi fare un upgrade a pagamento. Così hai sempre spazio a sufficienza per i backup e puoi accedere anche ai backup più vecchi se serve.

## Link Utili

Nella sezione **Link Utili** trovi altri link rilevanti per il tuo prodotto.

### Domande Frequenti

La sezione **Domande Frequenti** ti dà una panoramica delle domande più comuni dei nostri clienti. Qui trovi risposte utili e info dettagliate su vari argomenti per aiutarti in modo rapido ed efficiente.

### Documentazione ZAP-Hosting

Offriamo una documentazione completa per i nostri prodotti, che funge da knowledge base per le domande e dubbi più frequenti. Troverai guide e aiuti su vari temi per supportarti nell’uso e nella gestione del prodotto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

Le **News** ti danno una panoramica completa di tutti gli annunci e aggiornamenti legati al tuo servizio. Qui trovi info importanti su:

- Cambiamenti del servizio, per esempio aggiornamenti o nuove funzionalità
- Annunci su manutenzioni o problemi tecnici
- Offerte speciali e promozioni con vantaggi esclusivi o sconti
- Altre info rilevanti per l’uso del servizio

Controllando regolarmente le **News** resti aggiornato e puoi adattare il tuo servizio per sfruttarlo al meglio.

<InlineVoucher />