---
id: openttd-firststeps-dashboard
title: "OpenTTD: Panoramica del Dashboard"
description: "Scopri come gestire al meglio il tuo server OpenTTD e ottimizzare le impostazioni per le migliori prestazioni → Scopri di più ora"
sidebar_label: Dashboard
services:
  - gameserver-openttd
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Sei interessato a un **server OpenTTD** o ne possiedi già uno, ma ti manca ancora una panoramica completa sull’amministrazione e su come trovare tutte le opzioni necessarie? Soprattutto all’inizio, può essere una sfida. Ma niente panico, qui sotto ti diamo una guida dettagliata per l’amministrazione del tuo servizio, così avrai la miglior visione d’insieme possibile.

Dopo aver seguito questa guida, potrai gestire il tuo server in modo efficiente e trovare tutte le opzioni e funzionalità necessarie in modo rapido e semplice. Qui riceverai una panoramica strutturata che ti aiuterà passo dopo passo a familiarizzare con l’amministrazione del server e ad ampliare le tue conoscenze in modo mirato. Così potrai assicurarti che il tuo **server OpenTTD** sia ottimizzato sulle tue esigenze e sfruttare al massimo tutte le opzioni disponibili.

<YouTube videoId="aEe6ODyHLRc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/z6XAt7bYaXqqgNP/preview" title="Configura il server OpenTTD in solo UN MINUTO!" description="Ti è più facile capire quando vedi le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

<InlineVoucher />

## Amministrazione del Prodotto

Nella sezione **Amministrazione del Prodotto** trovi tutte le pagine necessarie per gestire il tuo server. Le opzioni per la gestione del server sono elencate dettagliatamente qui sotto.



### Dashboard

Il **Dashboard** del tuo server è il cuore dell’amministrazione. Qui trovi tutte le informazioni base ed essenziali sul tuo servizio in modo chiaro e ordinato. Per esempio, informazioni sulla posizione, stato, IP: Porta, memoria usata, gioco in corso, nome del server, mappa e numero di slot disponibili. Inoltre, viene mostrato anche l’utilizzo di CPU, memoria e RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/K6YXYBRZpA5iRNx/preview)

Nel dashboard puoi anche avviare, fermare o riavviare il tuo servizio, così hai il pieno controllo sul suo funzionamento. Inoltre, puoi accedere alla console live per avere info in tempo reale sullo stato del server e intervenire subito se serve.






### DDoS Manager


Visualizza gli attacchi DDoS passati per valutare meglio potenziali minacce e pattern. Attiva le notifiche per attacchi DDoS in corso sul tuo server per reagire velocemente in caso di incidente.

A seconda della posizione del server e della protezione DDoS disponibile, puoi anche monitorare gli attacchi attivi in tempo reale. Questo include dettagli sul traffico, mostrando sia il traffico legittimo che quello bloccato dai sistemi di mitigazione. Questo livello di trasparenza ti aiuta a capire come funziona la protezione e a identificare rischi potenziali in anticipo.

:::info Accesso al DDoS Manager mancante?
L’uso del DDoS Manager richiede un indirizzo IP dedicato o l’opzione aggiuntiva "Panoramica DDoS Manager". Se il tuo pacchetto attuale non include questi componenti, puoi aggiungerli in qualsiasi momento aggiornando il servizio.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
L’uso del DDoS Manager è possibile solo se hai prenotato un IP dedicato o l’opzione aggiuntiva "Panoramica DDoS Manager". Se questi componenti mancano nel tuo pacchetto attuale, puoi aggiungerli in qualsiasi momento con un upgrade.
:::



### File di Log

Hai un problema tecnico e non sai da dove viene? Una prima strategia è controllare i **File di Log**. Questi file contengono tante info sul server, come eventi attuali, suggerimenti o messaggi di errore.

I messaggi di errore in particolare aiutano a identificare e capire meglio la causa del problema. Spesso si riesce a scovare e risolvere il problema dando un’occhiata mirata ai file di log.

:::warning
Le info trovate non ti aiutano o non le capisci? Tranquillo! In questo caso siamo disponibili ogni giorno nel supporto. Crea un **[Ticket](https://zap-hosting.com/en/customer/support/)** e spiegaci il problema. Lo controlleremo il prima possibile e ti aiuteremo a risolverlo! :)
:::


### Registro Eventi

Il **Registro Eventi** ti offre una panoramica completa di tutte le attività legate all’amministrazione del server. Qui puoi vedere quando un server è stato avviato, fermato o crashato, così come quando sono stati fatti aggiornamenti, backup o nuove installazioni.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Interruzioni di Servizio

Il tuo server è stato offline temporaneamente e non sai perché? Il registro eventi e i file di log non ti hanno dato info? Potrebbe essere che il problema non sia direttamente sul tuo server, ma sul sistema host che lo ospita.

Se il nostro sistema di monitoraggio rileva un’interruzione generale, i nostri tecnici vengono notificati automaticamente e si occupano del problema il prima possibile.

In questa sezione trovi una panoramica della cronologia delle interruzioni del sistema host su cui gira il tuo server di gioco. Maggiori info e lo stato aggiornato del servizio sono disponibili sulla nostra nuova [pagina di status](https://status.zap-hosting.com/).












## Impostazioni

Nella sezione **Impostazioni** trovi tutte le pagine necessarie per configurare il tuo server. Le opzioni disponibili per la configurazione sono elencate dettagliatamente qui sotto.



### Impostazioni

Nelle impostazioni trovi una panoramica delle opzioni più comuni per il tuo server, con una breve spiegazione. L’uso della pagina impostazioni è consigliato soprattutto ai nuovi arrivati nell’amministrazione server.

Se ti senti più sicuro e vuoi fare modifiche più precise, ti consigliamo di usare l’Editor Config. Trovi più info nella categoria **Configs**.



### Configs

L’editor dei file di configurazione ti permette di modificare direttamente i file di config dal sito, in modo classico senza la vista semplificata. Questa opzione ti consente di personalizzare le impostazioni del server secondo le tue preferenze.

Usando l’editor hai accesso diretto a tutte le opzioni disponibili e puoi personalizzarle con precisione. È particolarmente utile per utenti avanzati che vogliono il controllo totale sulle impostazioni e sanno esattamente cosa modificare.

:::warning
Hai notato che alcune modifiche vengono parzialmente sovrascritte? Ricorda che certi valori vengono presi dalla pagina impostazioni. Se vuoi modificare direttamente nel config, devi prima disattivare le opzioni corrispondenti nella pagina impostazioni.
:::


### Giochi

Sotto **Giochi** puoi sempre cambiare la variante di gioco della tua partita esistente o installare un altro gioco in generale. I giochi con lo stesso prezzo per slot si possono selezionare direttamente sotto **Giochi Disponibili**. Per tutti gli altri giochi serve prima modificare il prezzo per slot. Maggiori info nel nostro tutorial [Cambio Gioco](gameserver-gameswitch.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versioni

Sotto **Versioni** puoi vedere e gestire la versione attuale del tuo server di gioco. Qui puoi aggiornare sempre all’ultima versione o attivare gli aggiornamenti automatici per mantenere il server sempre aggiornato.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Inoltre, puoi attivare le notifiche email per gli aggiornamenti automatici, così resti sempre informato e aggiornato.



### Attività Programmate

Crea attività programmate che si eseguono automaticamente a orari definiti per automatizzare vari processi sul server. Puoi impostare se un’attività deve partire una volta o ripetersi. I tipi supportati includono avvio, stop o riavvio del servizio, riavvio del server se online, creazione backup o esecuzione di comandi personalizzati.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Pianificatore Riavvii

Vuoi programmare riavvii del server a orari specifici? Il Pianificatore Riavvii ti permette di impostare riavvii automatici programmati del tuo server di gioco. Con questa funzione puoi fissare riavvii a orari precisi o a intervalli regolari.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)



## Strumenti

Nella sezione **Strumenti** del pannello di navigazione trovi una serie di sotto-voci che ti aiutano a gestire il server. Tra queste ci sono **FTP Browser**, **Database** e **Backup**. Qui sotto ti diamo una guida dettagliata su queste aree.



### FTP-Browser

Con l’**FTP Browser** trovi tutte le info necessarie per connetterti via FTP. L’accesso FTP ti dà accesso diretto ai file del tuo server di gioco. Ti consigliamo di usare un programma FTP esterno come **Filezilla** o **WinSCP** per un’esperienza ottimale. Se non sai come usare FTP, dai un’occhiata alla nostra guida [Accesso FTP](gameserver-ftpaccess.md) che ti sarà utile.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla è probabilmente il client FTP più semplice e conosciuto. Basta installarlo, avviarlo e inserire nella barra in alto i dati di accesso che trovi poco sopra in questa pagina. Con un clic su "Connetti" sei subito dentro al server e puoi gestire i file.

**WinSCP:** WinSCP è pensato principalmente per SCP e SFTP (versioni criptate del protocollo FTP), ma funziona benissimo anche con FTP normale. Il programma è un po’ più complesso di FileZilla ed è più adatto a utenti avanzati.



### Database

Oltre ai nostri prodotti server di gioco, offriamo anche 10 database inclusi. Questi database servono, per esempio, quando devi salvare dati in un database. Sotto **Database** puoi creare un database e vedere le credenziali di accesso. Hai anche l’opzione di attivare il backup e importare backup di database esistenti.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Backup

Sotto **Backup** puoi creare backup manuali e automatici per il tuo server e il database associato. Così recuperi facilmente i dati in caso di problemi o perdita.

Nelle impostazioni puoi scegliere se creare backup automatici e se farli giornalmente o settimanalmente. Inoltre, puoi decidere se eliminare i backup più vecchi quando lo spazio disponibile si riduce.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Per i nostri prodotti server di gioco forniamo di default 10 GB di spazio per backup sul server di storage. Se ti serve più spazio, puoi fare un upgrade a pagamento. Così hai sempre spazio a sufficienza per i backup e puoi accedere anche ai backup più vecchi se serve.

## Link Utili
Nella sezione **Link Utili** trovi altri link rilevanti per il tuo prodotto.

### Domande Frequenti
La sezione **Domande Frequenti** ti offre una panoramica delle domande più comuni dei nostri clienti. Qui trovi risposte utili e info dettagliate su vari argomenti per aiutarti rapidamente ed efficacemente.

### Documentazione ZAP-Hosting
Offriamo una documentazione completa per i nostri prodotti, che funge da knowledge base per le domande e dubbi più frequenti. Troverai guide e aiuti su vari temi che ti supportano nell’uso e nella gestione del prodotto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News
La sezione **News** ti dà una panoramica completa di tutti gli annunci e aggiornamenti legati al tuo servizio. Qui trovi info importanti su vari aspetti come:

- Cambiamenti del servizio, per esempio aggiornamenti o nuove funzionalità
- Annunci su manutenzioni o problemi tecnici
- Offerte speciali e promozioni con vantaggi esclusivi o sconti
- Altre info rilevanti per l’uso del servizio

Controllando regolarmente le **News** resti aggiornato e puoi adattare il servizio per sfruttare al massimo il tuo server.

<InlineVoucher />