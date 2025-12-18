---
id: minetest-firststeps-dashboard
title: "Minetest: Panoramica del Dashboard"
description: "Scopri come gestire e ottimizzare al meglio il tuo server Minetest con una panoramica chiara delle funzionalità essenziali e degli strumenti di amministrazione → Scopri di più ora"
sidebar_label: Dashboard
services:
  - gameserver-minetest
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Sei interessato a un **server Minetest** o ne possiedi già uno, ma ti manca ancora una panoramica completa sull’amministrazione e su come trovare tutte le opzioni necessarie? Soprattutto all’inizio, può essere una sfida. Ma niente panico, qui sotto ti diamo una guida dettagliata sull’amministrazione del tuo servizio, così avrai la miglior visione d’insieme possibile.

Dopo aver seguito questa guida, potrai gestire il tuo server in modo efficiente e trovare tutte le opzioni e funzionalità necessarie in modo rapido e semplice. Qui riceverai una panoramica strutturata che ti aiuterà passo dopo passo a familiarizzare con l’amministrazione del server e ad ampliare le tue conoscenze in modo mirato. Così potrai assicurarti che il tuo **server Minetest** sia ottimizzato per le tue esigenze e sfruttare al massimo tutte le opzioni disponibili.

<InlineVoucher />

## Amministrazione del Prodotto

Nella sezione **Amministrazione del Prodotto** trovi tutte le pagine necessarie per gestire il tuo server. Le opzioni per la gestione del server sono elencate dettagliatamente qui sotto.

### Dashboard

Il **Dashboard** del tuo server è il cuore dell’amministrazione. Qui trovi tutte le informazioni base ed essenziali sul tuo servizio in modo chiaro e ordinato. Questo include, ad esempio, informazioni sulla posizione, stato, IP: Porta, memoria utilizzata, gioco in corso, nome del server, mappa e numero di slot disponibili. Inoltre, viene mostrato anche l’utilizzo di CPU, memoria e RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/mmXG8M5Mc6aeB8B/preview)

Nel dashboard puoi anche avviare, fermare o riavviare il tuo servizio, così hai il pieno controllo sul suo funzionamento. Inoltre, puoi accedere alla console live per avere informazioni in tempo reale sullo stato del server e intervenire direttamente se serve.

### DDoS Manager

Visualizza gli attacchi DDoS passati per valutare meglio potenziali minacce e schemi. Attiva le notifiche per attacchi DDoS in corso sul tuo server, così puoi reagire velocemente in caso di problemi.

A seconda della posizione del server e della protezione DDoS disponibile, puoi anche monitorare gli attacchi attivi in tempo reale. Questo include dettagli sul traffico, mostrando sia il traffico legittimo che la quantità bloccata dai sistemi di mitigazione. Questo livello di trasparenza ti aiuta a capire come funziona la protezione e a identificare rischi potenziali in anticipo.

:::info Accesso al DDoS Manager mancante?
L’uso del DDoS Manager richiede un indirizzo IP dedicato o l’opzione aggiuntiva "DDoS Manager Overview". Se il tuo pacchetto attuale non include questi componenti, puoi aggiungerli in qualsiasi momento effettuando un upgrade del servizio.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
L’uso del DDoS Manager è possibile solo se hai prenotato un IP dedicato o l’opzione aggiuntiva "DDoS Manager Overview". Se questi componenti mancano nel tuo pacchetto attuale, puoi aggiungerli in qualsiasi momento con un upgrade.
:::

### File di Log

Hai un problema tecnico e non sai da dove venga? Una prima strategia è controllare i **file di log**. Questi file contengono molte informazioni sul server, come eventi attuali, suggerimenti o messaggi di errore.

I messaggi di errore in particolare aiutano a identificare e capire meglio la causa del problema. Spesso, guardando con attenzione i file di log, si riesce a scovare e risolvere il problema.

:::warning
Le informazioni trovate non ti aiutano o non le capisci? Tranquillo! In questo caso siamo disponibili ogni giorno nel supporto. Apri un **[Ticket](https://zap-hosting.com/en/customer/support/)** e spiegaci il problema. Lo controlleremo il prima possibile e ti aiuteremo a risolverlo! :)
:::

### Registro Eventi

Il **Registro Eventi** ti offre una panoramica completa di tutte le attività legate all’amministrazione del server. Qui puoi vedere quando un server è stato avviato, fermato o crashato, così come quando sono stati fatti aggiornamenti, backup o nuove installazioni.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Interruzioni di Servizio

Il tuo server è stato offline per un po’ e non sai perché? Il registro eventi e i file di log non ti hanno dato info? Potrebbe essere che il problema non sia direttamente sul tuo server, ma sul sistema host che lo ospita.

Se il nostro sistema di monitoraggio rileva un’interruzione generale, i nostri tecnici vengono avvisati automaticamente e si occupano del problema il prima possibile.

In questa sezione trovi una panoramica della cronologia delle interruzioni del sistema host su cui gira il tuo server di gioco. Per maggiori info e lo stato aggiornato del servizio, visita la nostra nuova [pagina di status](https://status.zap-hosting.com/).

## Impostazioni

Nella sezione **Impostazioni** trovi tutte le pagine necessarie per configurare il tuo server. Le opzioni disponibili per la configurazione sono elencate dettagliatamente qui sotto.

### Impostazioni

Qui trovi una panoramica delle opzioni di configurazione più comuni per il tuo server, con una breve spiegazione per ciascuna. La pagina impostazioni è particolarmente consigliata ai neofiti dell’amministrazione server.

Se invece sei più esperto e vuoi fare modifiche più precise, ti consigliamo di usare l’Editor Config. Trovi più info nella categoria **Configs**.

### Configs

L’editor dei file di configurazione ti permette di modificare direttamente i file di config dal sito, in modo classico senza la vista semplificata. Questa opzione ti consente di personalizzare le impostazioni del server secondo le tue preferenze.

Usando l’editor hai accesso diretto a tutte le opzioni disponibili e puoi personalizzarle con precisione. È particolarmente utile per utenti avanzati che vogliono il pieno controllo sulle impostazioni del server e sanno esattamente cosa modificare.

:::warning
Hai notato che alcune modifiche vengono parzialmente sovrascritte? Ricorda che certi valori delle opzioni vengono presi dalla pagina impostazioni. Se vuoi modificare queste opzioni direttamente nel config, devi prima disattivarle nella pagina impostazioni.
:::

### Giochi

Sotto **Giochi** puoi sempre cambiare la variante di gioco del tuo server o installarne un altro. I giochi con lo stesso prezzo per slot si possono selezionare direttamente sotto **Giochi Disponibili**. Per tutti gli altri giochi è necessario prima adeguare il prezzo per slot. Maggiori info nel nostro tutorial [Cambio Gioco](gameserver-gameswitch.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versioni

In **Versioni** puoi vedere e gestire la versione attuale del tuo server di gioco. Puoi aggiornare sempre all’ultima versione o attivare gli aggiornamenti automatici per mantenere il server sempre aggiornato.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Inoltre, puoi attivare le notifiche email per gli aggiornamenti automatici, così resti sempre informato.

### Attività Pianificate

Crea attività pianificate che si eseguono automaticamente a orari definiti per automatizzare vari processi sul server. Puoi scegliere se un’attività deve essere eseguita una volta o ripetuta. I tipi supportati includono avvio, arresto o riavvio del servizio, riavvio del server se online, creazione di backup o esecuzione di comandi personalizzati.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Pianificatore di Riavvii

Vuoi programmare riavvii del server a orari specifici? Il Pianificatore di Riavvii ti permette di impostare riavvii automatici programmati del tuo server di gioco. Puoi configurare riavvii a orari precisi o a intervalli regolari.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

## Strumenti

Nella sezione **Strumenti** del pannello di navigazione trovi varie sottosezioni che ti aiutano a gestire il server. Tra queste ci sono **FTP Browser**, **Database** e **Backup**. Qui sotto ti diamo una panoramica dettagliata di queste aree.

### FTP Browser

Con l’**FTP Browser** trovi tutte le info necessarie per connetterti via FTP. L’accesso FTP ti dà accesso diretto ai file del tuo server di gioco. Ti consigliamo di usare un programma FTP esterno come **FileZilla** o **WinSCP** per un’esperienza ottimale. Se non sai come usare FTP, dai un’occhiata alla nostra guida [Accesso FTP](gameserver-ftpaccess.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla è probabilmente il client FTP più semplice e conosciuto. Basta installarlo, avviarlo e inserire i dati di accesso che trovi qui sopra nella barra in alto. Con un clic su "Connetti" sei subito collegato al server e puoi gestire i file.

**WinSCP:** WinSCP è pensato principalmente per SCP e SFTP (versioni criptate di FTP), ma funziona benissimo anche con FTP normale. Il programma è un po’ più complesso di FileZilla ed è più adatto a utenti avanzati.

### Database

Oltre ai nostri server di gioco, offriamo anche 10 database inclusi. Questi database servono, ad esempio, quando devi salvare dati in un database. In **Database** puoi crearne uno e vedere le credenziali di accesso. Puoi anche attivare i backup e importare backup di database esistenti.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backup

In **Backup** puoi creare backup manuali e automatici per il tuo server e il database associato. Così è più facile recuperare i dati in caso di problemi o perdita.

Nelle impostazioni puoi decidere se i backup devono essere automatici e se farli giornalmente o settimanalmente. Puoi anche scegliere se eliminare i backup più vecchi quando lo spazio di archiviazione si riduce.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Per i nostri server di gioco offriamo di default 10 GB di spazio per i backup sul server di archiviazione. Se ti serve più spazio, puoi fare un upgrade a pagamento. Così hai sempre abbastanza spazio per i backup e puoi accedere anche ai backup più vecchi se serve.

## Link Utili
Nella sezione **Link Utili** trovi altri link rilevanti per il tuo prodotto.

### Domande Frequenti
La sezione **Domande Frequenti** ti offre una panoramica delle domande più comuni dei nostri clienti. Qui trovi risposte utili e info dettagliate su vari argomenti per aiutarti rapidamente.

### Documentazione ZAP-Hosting
Offriamo una documentazione completa per i nostri prodotti, che funge da base di conoscenza per le domande più frequenti. Troverai guide e aiuti su diversi temi per supportarti nell’uso e nella gestione del prodotto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News
La sezione **News** ti dà una panoramica completa di tutti gli annunci e aggiornamenti legati al tuo servizio. Qui trovi info importanti su:

- Cambiamenti del servizio, ad esempio aggiornamenti o nuove funzionalità
- Annunci su manutenzioni o problemi tecnici
- Offerte speciali e promozioni con vantaggi esclusivi o sconti
- Altre info rilevanti per l’uso del servizio

Controllando regolarmente le **News** resti aggiornato e puoi adattare il tuo servizio per sfruttarlo al meglio.

<InlineVoucher />