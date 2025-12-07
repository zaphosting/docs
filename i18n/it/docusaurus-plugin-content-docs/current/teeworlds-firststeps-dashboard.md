---
id: teeworlds-firststeps-dashboard
title: "Teeworlds: Panoramica del Dashboard"
description: "Scopri come gestire e ottimizzare al meglio il tuo server Teeworlds con una guida chiara e passo dopo passo → Scopri di più ora"
sidebar_label: Dashboard
services:
  - gameserver-teeworlds
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Sei interessato a un **server Teeworlds** o ne possiedi già uno, ma ti manca ancora una panoramica completa sull’amministrazione e su dove trovare tutte le opzioni necessarie? Soprattutto all’inizio, può essere una sfida. Ma niente panico, qui sotto ti offriamo una guida dettagliata all’amministrazione del tuo servizio, così avrai la miglior visione d’insieme possibile.

Dopo aver seguito questa guida, potrai gestire il tuo server in modo efficiente e trovare tutte le opzioni e funzionalità necessarie in modo rapido e semplice. Qui riceverai una panoramica strutturata che ti aiuterà passo dopo passo a familiarizzare con l’amministrazione del server e ad ampliare le tue conoscenze in modo mirato. Così potrai assicurarti che il tuo **server Teeworlds** sia ottimizzato per le tue esigenze e sfruttare al massimo tutte le opzioni disponibili.

<YouTube videoId="73bZrmpmiu8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ioc2pCcSXogXq7M/preview" title="Configura il server Teeworlds in solo UN MINUTO!" description="Ti è più facile capire quando vedi le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

<InlineVoucher />

## Amministrazione del Prodotto

Nella sezione **Amministrazione del Prodotto** trovi tutte le pagine necessarie per gestire il tuo server. Le opzioni per la gestione del server sono elencate dettagliatamente qui sotto.

### Dashboard

Il **Dashboard** del tuo server è il cuore dell’amministrazione. Qui sono presentate in modo chiaro tutte le informazioni base ed essenziali sul tuo servizio. Questo include, ad esempio, informazioni sulla location, stato, IP:Porta, memoria utilizzata, gioco in corso, nome del server, mappa e numero di slot disponibili. Inoltre, viene mostrato anche l’utilizzo di CPU, memoria e RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/sNMsNi5zoPssegs/preview)

Nel dashboard puoi anche avviare, fermare o riavviare il servizio, così hai il pieno controllo sul suo funzionamento. Inoltre, puoi accedere alla console live per avere informazioni in tempo reale sullo stato del server e intervenire direttamente se necessario.

### DDoS Manager

Visualizza gli attacchi DDoS passati per valutare meglio potenziali minacce e schemi. Attiva le notifiche per attacchi DDoS in corso sul tuo server per reagire rapidamente in caso di incidente.

A seconda della location del server e della protezione DDoS disponibile, puoi anche monitorare gli attacchi attivi in tempo reale. Questo include dettagli sul traffico, mostrando sia il traffico legittimo che la quantità di traffico bloccata dai sistemi di mitigazione. Questo livello di trasparenza ti aiuta a capire come funziona la protezione e a identificare potenziali rischi in anticipo.

:::info Accesso al DDoS Manager mancante?
L’uso del DDoS Manager richiede un indirizzo IP dedicato o l’opzione aggiuntiva "Panoramica DDoS Manager". Se il tuo pacchetto attuale non include questi componenti, puoi aggiungerli in qualsiasi momento aggiornando il servizio.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
L’uso del DDoS Manager è possibile solo se hai prenotato un IP dedicato o l’opzione aggiuntiva "Panoramica DDoS Manager". Se questi componenti mancano nel tuo pacchetto attuale, puoi aggiungerli in qualsiasi momento aggiornando.
:::

### File di Log

Hai un problema tecnico e non sai da dove venga? Una prima strategia è controllare i **file di log**. Questi file contengono molte informazioni sul server, come eventi attuali, suggerimenti o messaggi di errore.

I messaggi di errore in particolare aiutano a identificare e capire meglio la causa di un problema. Spesso, dando un’occhiata mirata ai file di log, si possono scoprire e risolvere le difficoltà.

:::warning
Le informazioni trovate non ti aiutano o non le capisci? Tranquillo! In questo caso siamo disponibili ogni giorno nel supporto. Crea semplicemente un **[Ticket](https://zap-hosting.com/en/customer/support/)** e spiegaci il problema. Lo controlleremo il prima possibile e ti aiuteremo a risolverlo! :)
:::

### Registro Eventi

Il **Registro Eventi** ti offre una panoramica completa di tutte le attività legate all’amministrazione del server. Qui puoi vedere quando un server è stato avviato, fermato o crashato, così come quando sono stati fatti aggiornamenti, backup o nuove installazioni.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Interruzioni di Servizio

Il tuo server è stato offline temporaneamente e non sai perché? Il registro eventi e i file di log non hanno dato info? Potrebbe essere che il problema non sia direttamente sul tuo server, ma sul sistema host che lo ospita.

Se il nostro sistema di monitoraggio rileva un’interruzione generale, i nostri tecnici vengono automaticamente avvisati e si occupano del problema il prima possibile.

In questa sezione trovi una panoramica della cronologia delle interruzioni del sistema host su cui gira il tuo server di gioco. Maggiori info e lo stato aggiornato del servizio li trovi sulla nostra nuova [pagina di status](https://status.zap-hosting.com/).

## Impostazioni

Nella sezione **Impostazioni** trovi tutte le pagine necessarie per configurare il tuo server. Le opzioni disponibili per la configurazione sono elencate dettagliatamente qui sotto.

### Impostazioni

Qui trovi una panoramica delle opzioni di configurazione più comuni per il tuo server, con una breve spiegazione. L’uso della pagina impostazioni è consigliato soprattutto ai neofiti dell’amministrazione server.

Se ti senti più sicuro e vuoi fare modifiche più precise, ti consigliamo di usare l’Editor Config. Maggiori info le trovi nella categoria **Config**.

### Config

L’editor dei file di configurazione ti permette di modificare direttamente i file di config dal sito, in modo classico senza la vista semplificata. Questa opzione ti consente di personalizzare le impostazioni del server secondo le tue preferenze.

Usando l’editor hai accesso diretto a tutte le opzioni disponibili e puoi personalizzarle con precisione. Utile soprattutto per utenti avanzati che vogliono il pieno controllo sulle impostazioni e sanno esattamente cosa modificare.

:::warning
Hai notato che alcune modifiche vengono parzialmente sovrascritte? Ricorda che certi valori vengono presi dalla pagina impostazioni. Se vuoi modificare direttamente nel config, devi prima disattivare le opzioni corrispondenti nella pagina impostazioni.
:::

### Giochi

Sotto **Giochi** puoi sempre cambiare la variante di gioco del tuo server o installare un altro gioco in generale. I giochi con lo stesso prezzo per slot possono essere selezionati direttamente sotto **Giochi Disponibili**. Per tutti gli altri giochi è necessario prima adeguare il prezzo per slot. Maggiori info nel nostro [guida al cambio gioco](gameserver-gameswitch.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versioni

In **Versioni** puoi vedere e gestire la versione attuale del tuo server di gioco. Puoi aggiornare sempre all’ultima versione o attivare gli aggiornamenti automatici per mantenere il server sempre aggiornato.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Inoltre, puoi attivare le notifiche email per gli aggiornamenti automatici, così resti sempre informato e aggiornato.

### Attività Pianificate

Crea attività pianificate che si eseguono automaticamente a orari definiti per automatizzare vari processi sul server. Puoi impostare se un’attività deve essere eseguita una volta o ripetuta. Tipi supportati: avviare, fermare o riavviare servizi, riavviare il server se online, creare backup o eseguire comandi personalizzati.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Pianificatore Riavvii

Vuoi programmare riavvii del server a orari specifici? Il Pianificatore Riavvii ti permette di impostare riavvii automatici schedulati del tuo server di gioco. Puoi configurare riavvii a orari precisi o a intervalli regolari.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

## Strumenti

Nella sezione **Strumenti** del pannello di navigazione trovi varie sottosezioni che ti aiutano a gestire il server. Tra queste ci sono **FTP Browser**, **Database** e **Backup**. Qui sotto ti presentiamo una guida dettagliata a queste aree.

### FTP Browser

Con l’**FTP Browser** ottieni tutte le info necessarie per connetterti via FTP. L’accesso FTP ti permette di accedere direttamente ai file del tuo server di gioco. Consigliamo di usare un client FTP esterno come **Filezilla** o **WinSCP** per un uso ottimale. Se non sai come usare FTP, dai un’occhiata alla nostra guida [Accesso FTP](gameserver-ftpaccess.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla è probabilmente il client FTP più semplice e conosciuto. Basta installarlo, avviarlo e inserire i dati di accesso che trovi qui sopra nella barra in alto. Con un click su "Connetti" sei subito collegato al server e puoi gestire i file.

**WinSCP:** WinSCP è pensato principalmente per SCP e SFTP (versioni criptate del protocollo FTP), ma funziona benissimo anche con FTP normale. Il programma è un po’ più complesso di FileZilla ed è più adatto a utenti avanzati.

### Database

Oltre ai nostri prodotti game server, offriamo anche 10 database inclusi. Questi database servono, ad esempio, quando devi salvare dati in un database. Sotto **Database** puoi crearne uno e vedere le credenziali di accesso. Puoi anche attivare i backup e importare backup esistenti.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backup

Sotto **Backup** puoi creare backup manuali e automatici per il server e il database associato. Così recuperi facilmente i dati in caso di problemi o perdita.

Nelle impostazioni puoi decidere se creare backup automatici, con frequenza giornaliera o settimanale. Puoi anche scegliere se eliminare i backup più vecchi quando lo spazio disponibile si riduce.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Per i nostri prodotti game server forniamo di default 10 GB di spazio per backup sul server di storage. Se ti serve più spazio, puoi ampliarlo a pagamento. Così hai sempre spazio a sufficienza per i backup e puoi accedere anche a quelli più vecchi.

## Link Utili
Nella sezione **Link Utili** trovi altri link rilevanti per il tuo prodotto.

### Domande Frequenti
La sezione **Domande Frequenti** offre una panoramica delle domande più comuni dei nostri clienti. Qui trovi risposte utili e info dettagliate su vari argomenti per aiutarti rapidamente.

### Documentazione ZAP-Hosting
Offriamo una documentazione completa per i nostri prodotti, che funge da knowledge base per le domande più frequenti. Troverai guide e aiuti su diversi temi per supportarti nell’uso e gestione del prodotto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News
Le **News** ti danno una panoramica completa di tutti gli annunci e aggiornamenti relativi al tuo servizio. Qui trovi info importanti su:

- Cambiamenti del servizio, ad esempio aggiornamenti o nuove funzionalità
- Annunci su manutenzioni o problemi tecnici
- Offerte speciali e promozioni con vantaggi esclusivi o sconti
- Altre info rilevanti per l’uso del servizio

Controllando regolarmente le **News** resti aggiornato e puoi adattare il servizio per sfruttarlo al meglio.

<InlineVoucher />