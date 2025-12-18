---
id: pixark-firststeps-dashboard
title: "PixARK: Panoramica del Dashboard"
description: "Scopri come gestire e ottimizzare al meglio il tuo server PixARK con una panoramica chiara di tutte le funzionalità chiave → Scopri di più ora"
sidebar_label: Dashboard
services:
  - gameserver-pixark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Sei interessato a un **server PixARK** o ne possiedi già uno, ma ti manca ancora una panoramica completa dell’amministrazione e di dove trovare tutte le opzioni necessarie? Soprattutto all’inizio, può essere una sfida. Ma niente panico, qui sotto ti diamo una guida dettagliata per l’amministrazione del tuo servizio, così avrai la miglior panoramica possibile.

Dopo aver seguito questa guida, potrai gestire il tuo server in modo efficiente e trovare tutte le opzioni e funzionalità necessarie in modo rapido e semplice. Qui riceverai una panoramica strutturata che ti aiuterà passo dopo passo a familiarizzare con l’amministrazione del server e ad ampliare le tue conoscenze in modo mirato. Così potrai assicurarti che il tuo **server PixARK** sia ottimizzato sulle tue esigenze e sfruttare al massimo tutte le opzioni disponibili.

<YouTube videoId="M8Ghh-R9Geo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gZG5xE6ZxmsQbKg/preview" title="Configura il server PixARK in solo UN MINUTO!" description="Ti piace capire meglio quando vedi le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

<InlineVoucher />

## Amministrazione del Prodotto

Nella sezione **Amministrazione del Prodotto** trovi tutte le pagine necessarie per gestire il tuo server. Le opzioni per la gestione del server sono elencate dettagliatamente qui sotto. 



### Dashboard

Il **Dashboard** del tuo server è il cuore dell’amministrazione. Qui trovi tutte le informazioni base ed essenziali sul tuo servizio in modo chiaro. Questo include, ad esempio, informazioni sulla location, stato, IP: Porta, memoria usata, gioco in corso, nome del server, mappa e numero di slot disponibili. Inoltre, viene mostrato anche l’utilizzo di CPU, memoria e RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/yE6Jmi4Ftjcf9dT/preview)

Nel dashboard puoi anche avviare, fermare o riavviare il tuo servizio, così hai il pieno controllo sul suo funzionamento. Inoltre, puoi accedere alla console live per avere info in tempo reale sullo stato del server e intervenire direttamente se serve.






### DDoS Manager


Visualizza gli attacchi DDoS passati per valutare meglio potenziali minacce e pattern. Attiva le notifiche per attacchi DDoS in corso sul tuo server per reagire velocemente in caso di incidente.

A seconda della location del server e della protezione DDoS disponibile, puoi anche monitorare gli attacchi attivi in tempo reale. Questo include dettagli sul traffico, mostrando sia il traffico legittimo che quello bloccato dai sistemi di mitigazione. Questo livello di trasparenza ti aiuta a capire come funziona la protezione e ti permette di identificare rischi potenziali in anticipo.

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
Le info trovate non ti aiutano o non le capisci? Tranquillo! In questo caso siamo sempre disponibili nel supporto. Crea un **[Ticket](https://zap-hosting.com/en/customer/support/)** e spiegaci il problema. Lo controlleremo il prima possibile e ti aiuteremo a risolverlo! :)
:::


### Registro Eventi

Il **Registro Eventi** ti offre una panoramica completa di tutte le attività legate all’amministrazione del server. Qui puoi vedere quando un server è stato avviato, fermato o crashato, così come quando sono stati fatti aggiornamenti, backup o nuove installazioni.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Interruzioni del Servizio

Il tuo server è stato offline temporaneamente e non sai perché? Il registro eventi e i file di log non hanno dato info? Potrebbe essere che la causa non sia direttamente il tuo server, ma il sistema host su cui gira.

Se il nostro sistema di monitoraggio rileva un’interruzione generale, i nostri tecnici vengono notificati automaticamente e si occupano del problema il prima possibile.

In questa sezione trovi una panoramica della cronologia delle interruzioni del sistema host su cui gira il tuo server di gioco. Maggiori info e lo stato aggiornato del servizio li trovi sulla nostra nuova [pagina di status](https://status.zap-hosting.com/).












## Impostazioni

Nella sezione **Impostazioni** trovi tutte le pagine necessarie per configurare il tuo server. Le opzioni disponibili per la configurazione sono elencate dettagliatamente qui sotto.



### Impostazioni

Nelle impostazioni trovi una panoramica delle opzioni più comuni per il tuo server, con una breve spiegazione. L’uso della pagina impostazioni è particolarmente consigliato ai nuovi arrivati nell’amministrazione server.

Se ti senti più sicuro e vuoi fare modifiche più precise, ti consigliamo di usare l’Editor Config. Trovi più info nella categoria **Configs**.



### Configs

L’editor dei file di configurazione ti permette di modificare direttamente i file di config dal sito, in modo classico, senza la vista semplificata. Questa opzione ti consente di personalizzare le impostazioni del server secondo le tue preferenze.

Usando l’editor hai accesso diretto a tutte le opzioni disponibili e puoi personalizzarle con precisione. È particolarmente utile per utenti avanzati che vogliono il pieno controllo sulle impostazioni e sanno esattamente cosa modificare.

:::warning
Hai notato che alcune modifiche vengono parzialmente sovrascritte? Ricorda che certi valori vengono presi dalla pagina impostazioni. Se vuoi modificare direttamente nel config, devi prima disattivare le opzioni corrispondenti nella pagina impostazioni.
:::


### Giochi

Sotto **Giochi** puoi sempre cambiare la variante del gioco esistente o installarne un altro. I giochi con lo stesso prezzo per slot si possono selezionare direttamente sotto **Giochi Disponibili**. Per tutti gli altri giochi serve prima un adeguamento del prezzo per slot. Maggiori info le trovi nella guida [Cambio Gioco](gameserver-gameswitch.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versioni

Sotto **Versioni** puoi vedere e gestire la versione attuale del tuo server di gioco. Qui puoi aggiornare all’ultima versione in qualsiasi momento o attivare gli aggiornamenti automatici per mantenere il server sempre aggiornato.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Inoltre, puoi attivare le notifiche email per gli aggiornamenti automatici, così resti sempre informato e aggiornato.



### Attività Programmate

Crea attività programmate che si eseguono automaticamente a orari definiti per automatizzare vari processi sul server. Puoi impostare se un’attività deve partire una volta o ripetersi. I tipi supportati includono avvio, stop o riavvio del servizio, riavvio del server se online, creazione backup o esecuzione di comandi personalizzati.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Pianificatore di Riavvii

Vuoi programmare riavvii del server a orari specifici? Il Pianificatore di Riavvii ti permette di impostare riavvii automatici programmati del tuo server di gioco. Con questa funzione puoi fissare riavvii a orari precisi o a intervalli regolari.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)



## Strumenti

Nella sezione **Strumenti** del pannello di navigazione trovi una serie di sotto-voci che ti aiutano a gestire il server. Tra queste ci sono **FTP Browser**, **Database** e **Backup**. Qui sotto ti diamo una guida dettagliata su queste aree.



### FTP-Browser

Con l’**FTP Browser** trovi tutte le info necessarie per connetterti via FTP. L’accesso FTP ti dà accesso diretto ai file del server di gioco. Consigliamo di usare un programma FTP esterno come **Filezilla** o **WinSCP** per un uso ottimale. Se non sai come usare FTP, dai un’occhiata alla nostra guida [Accesso FTP](gameserver-ftpaccess.md) che può aiutarti.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla è probabilmente il client FTP più semplice e conosciuto. Basta installarlo, avviarlo e inserire in alto i dati di accesso che trovi poco sopra in questa pagina. Con un clic su "Connetti" sei subito collegato al server e puoi gestire i file.

**WinSCP:** WinSCP è pensato principalmente per SCP e SFTP (versioni criptate del protocollo FTP), ma funziona benissimo anche con FTP normale. Il programma è un po’ più complesso di FileZilla ed è più adatto a utenti avanzati.



### Database

Oltre ai nostri prodotti di game server, offriamo anche 10 database inclusi. Questi database servono, ad esempio, quando i dati devono essere salvati in un database. Sotto **Database** puoi crearne uno e vedere le credenziali di accesso. Hai anche l’opzione di attivare i backup e importare backup di database esistenti.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Backup

Sotto **Backup** puoi creare backup manuali e automatici per il server e il database associato. Così è più facile recuperare i dati in caso di problemi o perdita.

Nelle impostazioni puoi decidere se i backup devono essere automatici e se farli giornalieri o settimanali. Inoltre, puoi scegliere se eliminare i backup più vecchi quando lo spazio di archiviazione è limitato.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Per i nostri prodotti game server forniamo di default 10 GB di spazio per backup sul server di archiviazione. Se ti serve più spazio, puoi fare un upgrade a pagamento. Così ti assicuri sempre spazio a sufficienza per i backup e puoi accedere anche a quelli più vecchi se serve.

## Link Utili
Nella sezione **Link Utili** trovi altri link rilevanti per il tuo prodotto.

### Domande Frequenti
La sezione **Domande Frequenti** offre una panoramica delle domande più comuni dei nostri clienti. Qui trovi risposte utili e info dettagliate su vari argomenti per aiutarti rapidamente ed efficacemente.

### Documentazione ZAP-Hosting
Offriamo una documentazione completa per i nostri prodotti, che funge da knowledge base per le domande e dubbi più frequenti. Troverai guide e aiuti su diversi temi per supportarti nell’uso e gestione del prodotto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News
Le **News** ti danno una panoramica completa di tutti gli annunci e aggiornamenti legati al tuo servizio. Qui trovi info importanti su vari aspetti come:

- Cambiamenti del servizio, ad esempio aggiornamenti o nuove funzionalità
- Annunci su manutenzioni o problemi tecnici
- Offerte speciali e promozioni con vantaggi o sconti esclusivi
- Altre info rilevanti per l’uso del tuo servizio

Controllando regolarmente le **News** resti aggiornato e puoi adattare il tuo servizio per sfruttare al massimo il server.

<InlineVoucher />