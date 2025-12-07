---
id: soldat-firststeps-dashboard
title: "Soldat: Panoramica del Dashboard"
description: "Scopri come gestire e ottimizzare efficacemente il tuo server Soldat con una panoramica chiara di tutte le funzionalità e opzioni chiave → Scopri di più ora"
sidebar_label: Dashboard
services:
  - gameserver-soldat
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Sei interessato a un **server Soldat** o ne possiedi già uno, ma ti manca ancora una panoramica completa dell’amministrazione e della reperibilità di tutte le opzioni necessarie? Soprattutto all’inizio, può essere una sfida. Ma niente panico, qui sotto ti diamo una guida dettagliata all’amministrazione del tuo servizio, così avrai la miglior panoramica possibile.

Dopo aver seguito questa guida, potrai gestire il tuo server in modo efficiente e trovare tutte le opzioni e funzionalità necessarie in modo rapido e semplice. Qui riceverai una panoramica strutturata che ti aiuterà passo dopo passo a familiarizzare con l’amministrazione del server e ad ampliare le tue conoscenze in modo mirato. Così potrai assicurarti che il tuo **server Soldat** sia ottimizzato per le tue esigenze e sfruttare al massimo tutte le opzioni disponibili.

<InlineVoucher />

## Amministrazione del Prodotto

Nella sezione **Amministrazione del Prodotto** trovi tutte le pagine necessarie per gestire il tuo server. Le opzioni per la gestione del server sono elencate dettagliatamente qui sotto.

### Dashboard

Il **Dashboard** del tuo server è il cuore dell’amministrazione. Qui sono presentate in modo chiaro tutte le informazioni base ed essenziali sul tuo servizio. Questo include, per esempio, informazioni sulla location, stato, IP:Porta, memoria utilizzata, gioco in corso, nome del server, mappa e numero di slot disponibili. Inoltre, viene mostrato anche l’utilizzo di CPU, memoria e RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/2ty29ongEyxHBCH/preview)

Nel dashboard puoi anche avviare, fermare o riavviare il tuo servizio, per avere il pieno controllo sul suo funzionamento. Inoltre, puoi accedere alla console live per ottenere informazioni in tempo reale sullo stato del server e intervenire direttamente se necessario.

### DDoS Manager

Visualizza gli attacchi DDoS passati per valutare meglio potenziali minacce e schemi. Attiva le notifiche per attacchi DDoS in corso sul tuo server per reagire rapidamente in caso di incidente.

A seconda della location del server e della protezione DDoS disponibile, puoi anche monitorare gli attacchi attivi in tempo reale. Questo include dettagli sul traffico, mostrando sia il traffico legittimo che la quantità di traffico bloccata dai sistemi di mitigazione. Questo livello di trasparenza ti aiuta a capire come funziona la protezione e ti permette di identificare potenziali rischi in anticipo.

:::info Accesso al DDoS Manager mancante?
L’uso del DDoS Manager richiede un indirizzo IP dedicato o l’opzione aggiuntiva "Panoramica DDoS Manager". Se il tuo pacchetto attuale non include questi componenti, puoi aggiungerli in qualsiasi momento effettuando un upgrade del servizio.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
L’uso del DDoS Manager è possibile solo se è stato prenotato un IP dedicato o l’opzione aggiuntiva "Panoramica DDoS Manager". Se questi componenti mancano nel tuo pacchetto attuale, puoi aggiungerli in qualsiasi momento con un upgrade.
:::

### Log files

Hai un problema tecnico e non sai da dove venga? Una prima possibile strategia è controllare i **Log files**. Questi file contengono molte informazioni sul server, come eventi attuali, suggerimenti o messaggi di errore.

I messaggi di errore in particolare possono aiutarti a identificare e capire meglio la causa del problema. Spesso, dando un’occhiata mirata ai log, si riescono a scovare e risolvere le difficoltà.

:::warning
Le informazioni trovate non ti aiutano o non le capisci? Tranquillo! In questo caso siamo disponibili ogni giorno nel supporto. Basta aprire un **[Ticket](https://zap-hosting.com/en/customer/support/)** e spiegarci il problema. Lo controlleremo il prima possibile e ti aiuteremo a risolverlo! :)
:::

### Event log

L’**Event Log** ti offre una panoramica completa di tutte le attività legate all’amministrazione del server. Qui puoi vedere in qualsiasi momento quando un server è stato avviato, fermato o crashato, così come quando sono stati fatti aggiornamenti, backup o nuove installazioni.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Interruzioni di Servizio

Il tuo server è stato offline temporaneamente e non sai perché? Un’occhiata all’event log e ai log files non ha dato info? Potrebbe essere che la causa non sia direttamente il tuo server, ma il sistema host su cui gira.

Se il nostro sistema di monitoraggio rileva un’interruzione generale, i nostri tecnici vengono automaticamente allertati e si occupano del problema il prima possibile.

In questa sezione trovi una panoramica della cronologia delle interruzioni del sistema host su cui gira il tuo server di gioco. Maggiori info e lo stato aggiornato del servizio sono disponibili sulla nostra nuova [pagina di status](https://status.zap-hosting.com/).

## Impostazioni

Nella sezione **Impostazioni** trovi tutte le pagine necessarie per configurare il tuo server. Le opzioni disponibili per la configurazione sono elencate dettagliatamente qui sotto.

### Impostazioni

Nelle impostazioni trovi una panoramica delle opzioni più comuni per il tuo server, con una breve spiegazione. L’uso della pagina impostazioni è particolarmente consigliato ai neofiti dell’amministrazione server.

Se ti senti più sicuro e vuoi fare modifiche più precise, ti consigliamo di usare l’Editor Config. Trovi più info nella categoria **Configs**.

### Configs

L’editor dei file di configurazione ti permette di modificare direttamente i file di config dal sito, in modo classico, senza la vista semplificata. Questa opzione ti consente di personalizzare le impostazioni del server secondo le tue preferenze.

Usando l’editor hai accesso diretto a tutte le opzioni disponibili e puoi personalizzarle con precisione. È particolarmente utile per utenti avanzati che vogliono il pieno controllo sulle impostazioni e sanno esattamente cosa modificare.

:::warning
Hai notato che alcune modifiche vengono parzialmente sovrascritte? Ricorda che certi valori vengono presi dalla pagina impostazioni. Se vuoi modificare direttamente nel config, devi prima disattivare le opzioni corrispondenti nella pagina impostazioni.
:::

### Giochi

Sotto **Giochi** puoi sempre cambiare la variante di gioco del tuo server esistente o installare un altro gioco in generale. I giochi con lo stesso prezzo per slot possono essere selezionati direttamente sotto **Giochi Disponibili**. Per tutti gli altri giochi è necessario prima adeguare il prezzo per slot. Maggiori info nel nostro [guida al cambio gioco](gameserver-gameswitch.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versioni

Sotto **Versioni** puoi vedere e gestire la versione attuale del tuo server di gioco. Qui puoi aggiornare sempre all’ultima versione o attivare gli aggiornamenti automatici per mantenere il server sempre aggiornato.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Inoltre, puoi attivare le notifiche email per gli aggiornamenti automatici, così resti sempre informato e aggiornato.

### Attività Pianificate

Crea attività pianificate che si eseguono automaticamente a orari definiti per automatizzare vari processi sul server. Puoi impostare se un’attività deve essere eseguita una volta o ripetutamente. I tipi supportati includono avviare, fermare o riavviare servizi, riavviare il server se online, creare backup o eseguire comandi personalizzati.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Pianificatore di Riavvii

Vuoi programmare riavvii del server a orari specifici? Il Pianificatore di Riavvii ti permette di impostare riavvii automatici programmati del tuo server di gioco. Con questa funzione puoi impostare riavvii a orari precisi o a intervalli regolari.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

## Strumenti

Nella sezione **Strumenti** del pannello di navigazione trovi una serie di sotto-voci che ti aiutano a gestire il server. Queste includono **FTP Browser**, **Database** e **Backup**. Qui sotto ti diamo una guida dettagliata su queste aree.

### FTP-Browser

Con l’**FTP Browser** ottieni tutte le info necessarie per connetterti via FTP. L’accesso FTP ti permette di accedere direttamente ai file del tuo server di gioco. Consigliamo di usare un client FTP esterno come **Filezilla** o **WinSCP** per un uso ottimale. Se non sai come usare FTP, dai un’occhiata alla nostra guida [Accesso FTP](gameserver-ftpaccess.md) che ti può aiutare.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla è probabilmente il client FTP più semplice e conosciuto. Basta installarlo, avviarlo e inserire nella barra in alto i dati di accesso che trovi poco sopra in questa pagina. Con un clic su "Connetti" sei subito collegato al server e puoi gestire i file.

**WinSCP:** WinSCP è pensato principalmente per SCP e SFTP (versioni criptate del protocollo FTP), ma funziona benissimo anche con FTP normale. Il programma è un po’ più complesso di FileZilla ed è più adatto a utenti avanzati.

### Database

Oltre ai nostri prodotti di game server, offriamo anche 10 database inclusi. Questi database sono necessari, per esempio, quando devi salvare dati in un database. Sotto **Database** puoi creare un database e vedere le credenziali di accesso. Hai anche l’opzione di attivare i backup e importare backup di database esistenti.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backup

Sotto **Backup** puoi creare backup manuali e automatici per il tuo server e il database associato. Questo ti facilita il recupero dei dati in caso di problemi o perdita dati.

Nelle impostazioni puoi decidere se i backup devono essere creati automaticamente e se farlo giornalmente o settimanalmente. Inoltre, puoi scegliere se eliminare i backup più vecchi quando lo spazio di archiviazione si riduce.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Per i nostri prodotti game server forniamo di default 10 GB di spazio per backup sul server di storage. Se ti serve più spazio, puoi fare un upgrade a pagamento. Così ti assicuri sempre spazio sufficiente per i backup e puoi accedere anche a quelli più vecchi se serve.

## Link Utili
Nella sezione **Link Utili** trovi altri link rilevanti per il tuo prodotto.

### Domande Frequenti
La sezione **Domande Frequenti** offre una panoramica delle domande più comuni dei nostri clienti. Qui trovi risposte utili e info dettagliate su vari argomenti per aiutarti rapidamente ed efficacemente.

### Documentazione ZAP-Hosting
Offriamo una documentazione estesa per i nostri prodotti, che funge da knowledge base per le domande e dubbi più frequenti. Troverai guide e aiuti su diversi temi che ti supportano nell’uso e gestione del prodotto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News
La sezione **News** ti offre una panoramica completa di tutti gli annunci e novità legate al tuo servizio. Qui trovi info importanti su vari aspetti come:

- Cambiamenti del servizio, per esempio aggiornamenti o nuove funzionalità
- Annunci su manutenzioni o problemi tecnici
- Offerte speciali e promozioni con vantaggi esclusivi o sconti
- Altre info rilevanti per l’uso del tuo servizio

Controllando regolarmente le **News** resti aggiornato e puoi adattare il tuo servizio per sfruttare al massimo il server.

<InlineVoucher />