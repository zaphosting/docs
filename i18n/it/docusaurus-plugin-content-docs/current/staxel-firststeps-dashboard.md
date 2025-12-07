---
id: staxel-firststeps-dashboard
title: "Staxel: Panoramica del Dashboard"
description: "Scopri come gestire e ottimizzare al meglio il tuo server Staxel con una panoramica chiara di tutte le funzionalità e opzioni → Scopri di più ora"
sidebar_label: Dashboard
services:
  - gameserver-staxel
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Sei interessato a un **server Staxel** o ne possiedi già uno, ma ti manca ancora una panoramica completa sull’amministrazione e su come trovare tutte le opzioni necessarie? Soprattutto all’inizio, può essere una sfida. Ma niente panico, qui sotto ti offriamo una guida dettagliata all’amministrazione del tuo servizio, così avrai la miglior visione d’insieme possibile.

Dopo aver seguito questa guida, potrai gestire il tuo server in modo efficiente e trovare tutte le opzioni e funzionalità necessarie in modo rapido e semplice. Qui riceverai una panoramica strutturata che ti aiuterà passo dopo passo a familiarizzare con l’amministrazione del server e ad ampliare le tue conoscenze in modo mirato. Così potrai assicurarti che il tuo **server Staxel** sia ottimizzato sulle tue esigenze e sfruttare al massimo tutte le opzioni disponibili.

<InlineVoucher />

## Amministrazione del Prodotto

Nella sezione **Amministrazione del Prodotto** trovi tutte le pagine necessarie per gestire il tuo server. Le opzioni per la gestione del server sono elencate dettagliatamente qui sotto.

### Dashboard

Il **Dashboard** del tuo server è il cuore dell’amministrazione. Qui sono presentate in modo chiaro tutte le informazioni base ed essenziali sul tuo servizio. Questo include, ad esempio, informazioni sulla posizione, stato, IP: Porta, memoria utilizzata, gioco in corso, nome del server, mappa e numero di slot disponibili. Inoltre, vengono mostrati anche l’utilizzo di CPU, memoria e RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/sLX27PeZax5q2oF/preview)

Nel dashboard puoi anche avviare, fermare o riavviare il tuo servizio, per avere il pieno controllo sul suo funzionamento. Inoltre, puoi accedere alla console live per ricevere informazioni in tempo reale sullo stato del server e intervenire direttamente se necessario.

### DDoS Manager

Visualizza gli attacchi DDoS passati per valutare meglio potenziali minacce e schemi. Attiva le notifiche per attacchi DDoS in corso sul tuo server per reagire rapidamente in caso di incidente.

A seconda della posizione del server e della protezione DDoS disponibile, puoi anche monitorare gli attacchi attivi in tempo reale. Questo include dettagli sul traffico, mostrando sia il traffico legittimo che la quantità di traffico bloccata dai sistemi di mitigazione. Questo livello di trasparenza ti aiuta a capire come funziona la protezione e ti permette di identificare rischi potenziali in anticipo.

:::info Accesso al DDoS Manager mancante?
L’uso del DDoS Manager richiede un indirizzo IP dedicato o l’opzione aggiuntiva "Panoramica DDoS Manager". Se il tuo pacchetto attuale non include questi componenti, puoi aggiungerli in qualsiasi momento aggiornando il tuo servizio.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
L’uso del DDoS Manager è possibile solo se hai prenotato un IP dedicato o l’opzione "Panoramica DDoS Manager" come extra. Se questi componenti mancano nel tuo pacchetto attuale, puoi aggiungerli in qualsiasi momento con un upgrade.
:::

### File di Log

Hai un problema tecnico e non sai da dove venga? Una prima strategia è controllare i **file di log**. Questi file contengono molte informazioni sul server, come eventi attuali, suggerimenti o messaggi di errore.

In particolare, i messaggi di errore possono aiutarti a identificare e capire meglio la causa del problema. Spesso, dando un’occhiata mirata ai file di log, si riescono a scovare e risolvere le difficoltà.

:::warning
Le informazioni trovate non ti aiutano o non le capisci? Tranquillo! In questo caso siamo disponibili ogni giorno nel supporto. Apri un **[Ticket](https://zap-hosting.com/en/customer/support/)** e spiegaci il problema. Lo controlleremo il prima possibile e ti aiuteremo a risolverlo! :)
:::

### Registro Eventi

Il **Registro Eventi** ti offre una panoramica completa di tutte le attività legate all’amministrazione del server. Qui puoi vedere in qualsiasi momento quando un server è stato avviato, spento o crashato, così come quando sono stati fatti aggiornamenti, backup o nuove installazioni.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Interruzioni del Servizio

Il tuo server è stato offline temporaneamente e non sai perché? Un controllo nel registro eventi e nei file di log non ha dato info? Potrebbe essere che la causa non sia direttamente il tuo server, ma il sistema host su cui gira.

Se il nostro sistema di monitoraggio rileva un’interruzione generale, i nostri tecnici vengono automaticamente avvisati e si occupano del problema il prima possibile.

In questa sezione trovi una panoramica della cronologia delle interruzioni del sistema host su cui gira il tuo game server. Maggiori info e lo stato aggiornato del servizio sono disponibili sulla nostra nuova [pagina di stato](https://status.zap-hosting.com/).

## Impostazioni

Nella sezione **Impostazioni** trovi tutte le pagine necessarie per configurare il tuo server. Le opzioni disponibili per la configurazione sono elencate dettagliatamente qui sotto.

### Impostazioni

Qui trovi una panoramica delle opzioni di configurazione più comuni per il tuo server, con una breve spiegazione. L’uso della pagina impostazioni è particolarmente consigliato ai neofiti dell’amministrazione server.

Se ti senti più sicuro e vuoi fare modifiche più precise, ti consigliamo di usare l’Editor Config. Trovi più info nella categoria **Configs**.

### Configs

L’editor dei file di configurazione ti permette di modificare direttamente i file di config dal sito, in modo classico senza la vista semplificata. Questa opzione ti consente di personalizzare le impostazioni del server secondo le tue preferenze.

Usando l’editor hai accesso diretto a tutte le opzioni disponibili e puoi personalizzarle con precisione. È particolarmente utile per utenti avanzati che vogliono il pieno controllo sulle impostazioni e sanno esattamente cosa modificare.

:::warning
Hai notato che alcune modifiche vengono parzialmente sovrascritte? Ricorda che certi valori delle opzioni vengono presi dalla pagina impostazioni. Se vuoi modificare queste opzioni direttamente nel config, devi prima disattivarle nella pagina impostazioni.
:::

### Giochi

In **Giochi** puoi sempre cambiare la variante di gioco del tuo server esistente o installare un altro gioco in generale. I giochi con lo stesso prezzo per slot possono essere selezionati direttamente sotto **Giochi Disponibili**. Per tutti gli altri giochi è necessario prima adeguare il prezzo per slot. Maggiori info nel nostro tutorial [Cambio Gioco](gameserver-gameswitch.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versioni

In **Versioni** puoi vedere e gestire la versione attuale del tuo game server. Qui puoi aggiornare sempre all’ultima versione o attivare gli aggiornamenti automatici per mantenere il server sempre aggiornato.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Inoltre, puoi attivare le notifiche email per gli aggiornamenti automatici, così resti sempre informato.

### Gestore SaveGame

![img](https://screensaver01.zap-hosting.com/index.php/s/R9Ss5sd2z9Adrnq/preview)

### Attività Pianificate

Crea attività pianificate che si eseguono automaticamente a orari definiti per automatizzare vari processi sul server. Puoi impostare se un’attività deve essere eseguita una volta o ripetutamente. I tipi supportati includono avvio, stop o riavvio del servizio, riavvio del server se online, creazione backup o esecuzione di comandi personalizzati.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Pianificatore Riavvii

Vuoi programmare riavvii del server a orari specifici? Il Pianificatore Riavvii ti permette di impostare riavvii automatici programmati del tuo game server. Puoi configurare riavvii a orari precisi o a intervalli regolari.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

## Strumenti

Nella sezione **Strumenti** del pannello di navigazione trovi vari sotto-elementi che ti aiutano a gestire il server. Questi includono **FTP Browser**, **Database** e **Backup**. Qui sotto ti presentiamo una guida dettagliata a queste aree.

### FTP-Browser

Con l’**FTP Browser** ottieni tutte le info necessarie per connetterti via FTP. L’accesso FTP ti dà accesso diretto ai file del tuo game server. Per un uso ottimale consigliamo un programma FTP esterno come **Filezilla** o **WinSCP**. Se non sai come usare FTP, dai un’occhiata alla nostra guida [Accesso FTP](gameserver-ftpaccess.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla è probabilmente il client FTP più semplice e conosciuto. Basta installarlo, avviarlo e inserire nella barra in alto i dati di accesso che trovi qui sopra. Con un clic su "Connetti" sei subito collegato al server e puoi gestire i file.

**WinSCP:** WinSCP è pensato principalmente per SCP e SFTP (versioni criptate del protocollo FTP), ma funziona benissimo anche con FTP normale. Il programma è un po’ più complesso di FileZilla ed è più adatto a utenti avanzati.

### Database

Oltre ai nostri game server, offriamo anche 10 database inclusi. Questi sono necessari, ad esempio, quando i dati devono essere salvati in un database. In **Database** puoi creare un database e vedere le credenziali di accesso. Puoi anche attivare il backup e importare backup di database esistenti.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backup

In **Backup** puoi creare backup manuali e automatici per il tuo server e il database associato. Questo facilita il recupero dei dati in caso di problemi o perdita.

Nelle impostazioni puoi decidere se i backup devono essere creati automaticamente e se giornalmente o settimanalmente. Inoltre puoi scegliere se eliminare i backup più vecchi quando lo spazio disponibile si riduce.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Per i nostri game server forniamo di default 10 GB di spazio per backup sul server di storage. Se ti serve più spazio, puoi fare un upgrade a pagamento. Così ti assicuri sempre spazio sufficiente per i backup e puoi accedere anche a quelli più vecchi.

## Link Utili
Nella sezione **Link Utili** trovi altri link rilevanti per il tuo prodotto.

### Domande Frequenti
La sezione **Domande Frequenti** offre una panoramica delle domande più comuni dei nostri clienti. Qui trovi risposte utili e info dettagliate su vari argomenti per aiutarti rapidamente.

### Documentazione ZAP-Hosting
Offriamo una documentazione estesa per i nostri prodotti, che funge da knowledge base per le domande e dubbi più frequenti. Troverai guide e aiuti su diversi temi per supportarti nell’uso e gestione del prodotto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News
La sezione **News** ti offre una panoramica completa di tutti gli annunci e aggiornamenti relativi al tuo servizio. Qui trovi info importanti su:

- Cambiamenti del servizio, ad esempio aggiornamenti o nuove funzionalità
- Annunci su manutenzioni o problemi tecnici
- Offerte speciali e promozioni con vantaggi o sconti esclusivi
- Altre info rilevanti per l’uso del servizio

Controllando regolarmente le **News** resti aggiornato e puoi adattare il tuo servizio per sfruttarlo al meglio.

<InlineVoucher />