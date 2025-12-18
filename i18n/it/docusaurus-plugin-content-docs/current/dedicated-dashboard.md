---
id: dedicated-dashboard
title: "Dedicated Server: Panoramica Dashboard"
description: "Scopri come gestire e ottimizzare al meglio il tuo Dedicated Server con una panoramica chiara delle funzionalità chiave e degli strumenti di amministrazione → Scopri di più ora"
sidebar_label: Dashboard
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Sei interessato a un **Dedicated Server** o ne possiedi già uno, ma ti manca ancora una panoramica completa sull’amministrazione e su dove trovare tutte le opzioni necessarie? Soprattutto all’inizio può essere una sfida. Ma niente panico, qui sotto ti diamo una guida dettagliata sull’amministrazione del tuo servizio, così avrai la miglior overview possibile.

Dopo aver letto questa guida, sarai in grado di gestire il tuo Dedicated Server in modo efficiente e trovare tutte le opzioni e funzionalità necessarie in modo rapido e semplice. Qui riceverai una panoramica strutturata che ti aiuterà passo dopo passo a familiarizzare con l’amministrazione del Dedicated Server e ad ampliare le tue conoscenze in modo mirato. Così potrai assicurarti che il tuo **Dedicated Server** sia configurato al meglio per le tue esigenze e sfruttare al massimo tutte le opzioni disponibili.



## Amministrazione Prodotto

Nella sezione **Amministrazione Prodotto** trovi tutte le pagine necessarie per gestire il tuo Dedicated Server. Le opzioni per la gestione del tuo Dedicated Server sono elencate in dettaglio qui sotto. 



### Dashboard

La dashboard ti offre una panoramica centrale di tutte le informazioni importanti relative al Dedicated Server. Mostra lo stato attuale, l’indirizzo del server, hostname, sistema operativo installato, carico di sistema inclusi CPU e RAM, e traffico di rete. Questa overview supporta un monitoraggio e una gestione efficaci dell’ambiente del server virtuale.

![img](https://screensaver01.zap-hosting.com/index.php/s/QEnaS6N7MqHejtk/preview)



### Registro eventi

Tieni d’occhio tutte le attività di amministrazione e gli eventi di sistema in un unico posto. Il registro eventi raccoglie tutte le attività rilevanti, così sai sempre chi ha fatto modifiche, quando sono avvenute e cosa è stato interessato.

![img](https://screensaver01.zap-hosting.com/index.php/s/akKpTx2XzDKy7qc/preview)



### Statistiche
I dati dettagliati sul traffico ti mostrano esattamente quanta banda gestisce il tuo server, sia in entrata che in uscita. Le letture attuali di temperatura e velocità delle ventole ti aiutano a mantenere l’hardware sempre in un range operativo sicuro.

![img](https://screensaver01.zap-hosting.com/index.php/s/B7yLamtJrdALpPb/preview)



### Stato hardware

Tieni sotto controllo tutti i dettagli hardware essenziali in un unico posto. Controlla quali versioni firmware sono installate, inclusi System ROM, iLO e Storage Controller, e monitora in tempo reale lo stato di CPU, RAM, interfacce di rete e dischi connessi.

I dati hardware dettagliati ti aiutano a individuare potenziali problemi in anticipo e garantiscono che il server funzioni in modo affidabile. Hai anche accesso a un registro chiaro di tutte le manutenzioni effettuate, così sai sempre quali aggiornamenti o riparazioni sono stati fatti e quando.

![img](https://screensaver01.zap-hosting.com/index.php/s/9CsZGarzsdMP5Ea/preview)

## Impostazioni

Nella sezione **Impostazioni** trovi tutte le pagine necessarie per configurare il tuo Dedicated Server. Le opzioni disponibili per la configurazione sono elencate in dettaglio qui sotto.

### Installazione iniziale
Prima di poter usare il tuo dedicated server in modo produttivo, serve una configurazione iniziale. Questo include l’attivazione dell’interfaccia di gestione iLO, la selezione e il montaggio di un’immagine ISO e l’installazione del sistema operativo desiderato. L’assistente di configurazione ti guida passo passo in questo processo, garantendo un avvio senza intoppi anche senza esperienza pregressa. Istruzioni dettagliate le trovi nella nostra guida [Installazione Iniziale](dedicated-setup.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/MnZKXAGGTqs9Xdp/download)

### Impostazioni

Modifica le opzioni di configurazione per il tuo dedicated server. Qui hai il pieno controllo per cambiare impostazioni come la modalità di alimentazione, aiutandoti a ottimizzare il server in base alle tue esigenze specifiche.

![img](https://screensaver01.zap-hosting.com/index.php/s/WiHSELJNc5icsyQ/preview)



### DDoS Manager

Visualizza gli attacchi DDoS passati per valutare meglio minacce e pattern. Attiva le notifiche per attacchi DDoS in corso sul tuo server, così puoi reagire velocemente in caso di incidente.

A seconda della location del server e della protezione DDoS disponibile, puoi anche monitorare gli attacchi attivi in tempo reale. Questo include dettagli sul traffico, mostrando sia il traffico legittimo che quello bloccato dai sistemi di mitigazione. Questo livello di trasparenza ti aiuta a capire come funziona la protezione e a identificare rischi potenziali in anticipo.

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)



### Gameserver / TS3

Con questa funzione puoi configurare e gestire facilmente servizi di gameserver e voiceserver con pochi click. L’interfaccia web gestisce l’intero processo di installazione per te, quindi non serve una conoscenza tecnica approfondita.

Puoi creare nuovi gameserver o voiceserver quando vuoi, regolare impostazioni come slot o risorse e controllarli comodamente dal tuo dashboard web ZAP. Questo rende la gestione di più server veloce, flessibile e semplice. Tutto in un unico posto.

:::warning Compatibilità Sistema Operativo 
Questa funzione è compatibile solo con sistemi Linux selezionati. Per maggiori info su come configurare e usare l’interfaccia GS/TS3, dai un’occhiata alla nostra guida [Interfaccia GS/TS3](dedicated-linux-gs-interface.md).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/nd6YF93omGcApC8/preview)



### Modifica rDNS

Modifica la voce reverse DNS (record PTR) per l’indirizzo IP del tuo server, puntandola all’hostname corretto. Un rDNS configurato bene aiuta a garantire che il nome del tuo Dedicated Server venga risolto correttamente ed è particolarmente importante per gestire un mail server. Senza un rDNS valido, le email in uscita potrebbero finire nello spam o non essere consegnate affidabilmente.

![img](https://screensaver01.zap-hosting.com/index.php/s/LpdMgD6T39tXiNK/preview)



### Indirizzi IP

Visualizza tutti gli indirizzi IP assegnati al tuo server in un colpo d’occhio. Questa panoramica mostra dettagli importanti di configurazione come indirizzo IP, subnet mask e gateway. Puoi anche verificare se un IP è raggiungibile o meno, aiutandoti a controllare che le impostazioni di rete siano configurate correttamente sul sistema operativo.

![img](https://screensaver01.zap-hosting.com/index.php/s/a64XRkWn2EA4Nef/preview)



## Strumenti

La sezione **Strumenti** contiene tutti gli strumenti essenziali per gestire il Dedicated Server. Le opzioni disponibili per la configurazione del server sono descritte in dettaglio qui sotto e permettono una personalizzazione precisa in base alle esigenze specifiche.



### Reset traffico

Tieni sotto controllo il consumo del traffico mensile. Qui vedi quanto traffico incluso hai già utilizzato. Se raggiungi il limite prima della fine del mese, puoi anche resettare il traffico in anticipo pagando un costo extra.

![img](https://screensaver01.zap-hosting.com/index.php/s/5Z38eyRdntF6ict/preview)



### Gestione remota iLO / ISO

Accedi in modo sicuro da remoto all’hardware del tuo server in qualsiasi momento. Qui puoi vedere i dati di login iLO, abilitare le funzioni di gestione remota e usare l’interfaccia iLO per svolgere attività importanti.

![img](https://screensaver01.zap-hosting.com/index.php/s/9SZMtCPDJgNZSZ6/preview)

## Link utili
La sezione con link utili fornisce riferimenti aggiuntivi rilevanti per l’uso e la gestione del prodotto. Possono includere documentazione, tool o risorse esterne legate al servizio specifico.

### Domande Frequenti
La sezione **Domande Frequenti** offre una panoramica delle domande più comuni dei nostri clienti. Qui trovi risposte utili e informazioni dettagliate su vari argomenti per aiutarti in modo rapido ed efficiente.

### Documentazione ZAP-Hosting
Offriamo una documentazione completa per i nostri prodotti, che funge da knowledge base per le domande e i dubbi più frequenti. Troverai varie guide e aiuti su diversi temi che ti supporteranno nell’uso e nella gestione del tuo prodotto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)