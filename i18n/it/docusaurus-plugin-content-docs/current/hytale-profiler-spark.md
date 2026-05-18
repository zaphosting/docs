---
id: hytale-profiler-spark
title: "Hytale: Spark Profiler – Individua i Collo di Bottiglia delle Prestazioni"
description: "Usa la mod Spark per diagnosticare problemi di prestazioni e identificare le cause del lag sul tuo server Hytale → Scopri di più ora"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introduzione

Problemi di prestazioni come TPS bassi (tick per secondo), picchi di lag o stuttering possono influenzare pesantemente l’esperienza di gioco su un server Hytale. Individuare manualmente la causa di questi problemi è difficile senza diagnosi dettagliate.

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

La mod **Spark** è uno strumento potente per i proprietari di server che vogliono analizzare le prestazioni. Una volta installata, Spark raccoglie dati su utilizzo CPU, tempi di tick, metriche di salute del server e altro, generando report dettagliati che aiutano a capire esattamente dove si verificano i problemi di performance. È uno strumento essenziale per il troubleshooting e l’ottimizzazione, soprattutto su mondi Hytale grandi o molto popolati.

<InlineVoucher />

## Cosa fa Spark

Spark offre diverse funzionalità di profiling:

- **Profiling delle prestazioni** – registra l’attività del server e individua tick lenti o alto utilizzo CPU  
- **Metriche di salute del server** – include durata dei tick, TPS, uso di CPU e memoria  
- **Report interattivi** – crea report web visualizzabili direttamente nel browser  
- **Leggero e facile da usare** – progettato per avere un impatto minimo mentre raccoglie dati utili  

## Installare Spark

Spark è distribuito tramite CurseForge e si installa come mod. Puoi installare le mod tramite il nostro Mods Installer o via FTP. Trovi tutte le info nella nostra guida [Install Mods](http://localhost:3000/guides/docs/hytale-mods). Dopo l’installazione, riavvia il server Hytale.

<Button label="Scarica Spark" link="https://www.curseforge.com/hytale/mods/spark" block />

## Avviare il profiler

Dopo aver installato Spark e avviato il server, apri la scheda **Live Console** nel pannello di controllo del tuo game server o usa la chat in-game se hai i permessi necessari. Per iniziare a raccogliere dati sulle prestazioni, avvia il profiler con questo comando:

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

Una volta avviato, Spark registra dettagliatamente l’attività del server come durata dei tick, uso CPU e esecuzione dei thread. Il profiler va fatto girare mentre il server presenta il problema che vuoi analizzare, ad esempio durante i picchi di giocatori o quando si verificano lag. Lasciare il profiler attivo per almeno 30-60 secondi di solito fornisce dati sufficienti per un’analisi efficace.

Mentre il profiler è attivo, puoi già vedere i risultati live eseguendo:

```
/spark profiler open
```

Questo comando genera un link web nella console o nella chat. Aprendo il link nel browser puoi vedere in tempo reale i dati di profiling, inclusi grafici dei tick e distribuzione del carico.

Quando hai raccolto abbastanza dati, ferma il profiler con:

```
/spark profiler stop
```

Dopo lo stop, Spark genera un link al report finale. Questo report contiene tutti i dati della sessione di profiling e può essere aperto nel browser o condiviso per analisi approfondite.

Se vuoi scartare la sessione corrente e ricominciare da zero, puoi resettare il profiler con:

```
/spark profiler cancel
/spark profiler start
```

Questo cancella i dati esistenti e avvia subito una nuova sessione di profiling.

## Analizzare i risultati del profiler

Il report di Spark fornisce un’analisi dettagliata di come vengono usate le risorse del server. Una delle sezioni più importanti è la timeline dei tick, che mostra quanto tempo impiega ogni singolo tick a completarsi. Tick costantemente lunghi indicano carichi pesanti che impattano direttamente su TPS e fluidità del gameplay.

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

Il report evidenzia anche i **punti caldi** (hotspots), mostrando quali funzioni o sistemi consumano più risorse. Queste informazioni aiutano a capire se i problemi di prestazioni sono causati da mod specifiche, comportamento dei giocatori, meccaniche del mondo o configurazioni del server.

I report Spark sono pensati per essere facilmente condivisibili. Quando chiedi aiuto al supporto o ad altri admin, fornire il link del profiler permette di vedere i dati direttamente e ricevere consigli mirati.

## Conclusione

La mod Spark per Hytale è uno strumento prezioso per diagnosticare problemi di prestazioni e scovare le cause del lag sul server. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />