---
id: rust-server-wipe
title: "Rust: Server Wipe – Mantieni il tuo server bilanciato e pulito"
description: "Scopri cosa sono i wipe dei server Rust, perché sono necessari e come effettuare un wipe sul tuo server Rust → Scopri di più ora"
sidebar_label: Server Wipe
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

In **Rust**, un wipe del server resetta parti del mondo di gioco per dare a tutti i giocatori un nuovo inizio. Col tempo, le mappe di Rust si riempiono di basi gigantesche, risorse accumulate e gruppi di giocatori consolidati. Questo può influenzare l’equilibrio del server e le sue prestazioni.

Un wipe del server elimina i progressi esistenti e ripristina un ambiente pulito così i giocatori possono ricominciare da zero. Molte community di Rust fanno wipe regolarmente per mantenere il gameplay equo e divertente, soprattutto quando escono aggiornamenti o nuove mappe.

A seconda del tipo di wipe, possono essere resettati la **mappa**, i **blueprint dei giocatori** o **entrambi**.

<InlineVoucher />



## Cosa fa un Server Wipe

Un wipe del server Rust elimina i dati di progressione del mondo o dei giocatori. Questo può includere:

- Strutture e basi costruite dai giocatori  
- Inventari e oggetti conservati dai giocatori  
- Dati di esplorazione della mappa  
- Blueprint imparati (a seconda del tipo di wipe)

Dopo un wipe, il server si comporta come un mondo nuovo dove i giocatori devono raccogliere risorse, ricostruire basi e riapprendere la progressione.



## Tipi di Wipe in Rust

Rust supporta diversi tipi di wipe, a seconda di cosa vuoi resettare. Qui sotto ti spieghiamo i tipi di wipe disponibili.

### Map wipe

Un **map wipe** elimina completamente il file di salvataggio del mondo. Tutte le basi, le strutture e i progressi sulla mappa vengono cancellati. Quando il server si riavvia, viene generata o scaricata una nuova mappa. I progressi sui blueprint rimangono invariati a meno che non venga fatto anche un blueprint wipe.

### Blueprint wipe

Un **blueprint wipe** resetta tutti i blueprint di crafting imparati. I giocatori devono ricercare di nuovo gli oggetti prima di poterli creare. Questo tipo di wipe riguarda solo la progressione e non resetta la mappa.

### Full wipe

Un **full wipe** resetta sia la mappa che tutti i blueprint dei giocatori. Questo crea un ambiente server completamente nuovo ed è usato spesso per reset stagionali o aggiornamenti importanti.



## Perché i Server Wipe Sono Importanti

I wipe aiutano a mantenere un ambiente server Rust sano. Col tempo, i server accumulano tantissime strutture, contenitori di stoccaggio ed entità nel mondo. Questo può influire negativamente sulle prestazioni del server e sull’equilibrio del gameplay. I wipe regolari offrono diversi vantaggi:

- Ripristinano le prestazioni del server  
- Creano un nuovo inizio per tutti i giocatori  
- Impediscono ai clan dominanti di controllare la mappa per sempre  
- Permettono ai server di usare nuove mappe o seed

Molte community di Rust fanno wipe programmati settimanali, bisettimanali o mensili a seconda dello stile del server.



## Come Effettuare un Server Wipe

Per fare un wipe sul tuo server Rust, accedi ai file del server tramite il [FTP accesso](gameserver-ftpaccess.md). Poi, trova i file di salvataggio nella directory del server Rust. Questi file di solito includono:

```
proceduralmap.*
player.blueprints.*
player.deaths.*
player.identities.*
player.states.*
```
Cancellare file specifici determina il tipo di wipe effettuato. Cancellare i file `proceduralmap.*` esegue un **map wipe**, eliminando il mondo esistente. Cancellare i file `player.blueprints.*` esegue un **blueprint wipe**.

![img](https://screensaver01.zap-hosting.com/index.php/s/QdeoFWbaaQz7Yaf/preview)

Cancellare entrambi i tipi di file porta a un **full wipe**. Dopo aver eliminato i file desiderati, riavvia il server. Il server genererà automaticamente un nuovo mondo e permetterà ai giocatori di ricominciare da zero.



## Conclusione

Complimenti! Ora sai come funzionano i wipe dei server Rust e come effettuarli. Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />