---
id: minecraft-server-optimize
title: "Minecraft: ottimizzazione delle prestazioni del server"
description: "Scopri come ottimizzare i server Minecraft per prestazioni migliori e un gameplay più fluido con regolazioni efficaci delle impostazioni → Scopri di più ora"
sidebar_label: Ottimizzazione Server Minecraft
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Cosa succede esattamente durante l’ottimizzazione?

L’ottimizzazione è un punto fondamentale per i server Minecraft affinché girino lisci e dovresti assolutamente dedicare abbastanza tempo a questo su un server pubblico. Solo con tanto tempo e test si può ottenere il miglior risultato. Questa documentazione quindi non va seguita alla lettera, ma serve come guida per andare nella direzione giusta.

Nella maggior parte dei casi, l’ottimizzazione modifica un sacco di impostazioni sul server, cambiando a volte anche significativamente il comportamento del server stesso. Tra le altre cose, alcune impostazioni vengono ridotte, alleggerendo il server e quindi aumentando le prestazioni. Però, per non rovinare troppo l’esperienza di gioco, bisogna sempre trovare il giusto equilibrio.

## Vanilla

Le opzioni per ottimizzare un server vanilla sono purtroppo molto limitate, perché ci sono poche impostazioni disponibili. Cerchiamo di dare un po’ più di potenza al server vanilla con queste misure:

### Visibilità

Una misura molto comune è ridurre la distanza di visualizzazione. Il valore standard è 10 chunk, ma molti giocatori giocano con valori molto più bassi, tipo 6-8. Alcuni esagerano e mettono anche 32 chunk, il che significa che il server deve caricare e processare tutti quei chunk, consumando un sacco di risorse.

Su un server vanilla, la distanza di visualizzazione si regola nel file di configurazione "server.properties", modificando il valore "view-distance". Per non limitare troppo il gameplay, si consiglia di impostare questo valore a 5-6, alleggerendo il server fino al 50%. Abbiamo già una guida a riguardo nella nostra documentazione, la trovi [qui](minecraft-default-config.md).

### Compressione dati

Sul server c’è uno scambio continuo di dati tra server e giocatori connessi. I movimenti dei giocatori vengono inviati al server, che li trasmette a tutti gli altri. Anche azioni dei giocatori o eventi nel mondo, come esplosioni, fanno parte di questi dati che viaggiano continuamente.

Per rendere questo scambio più efficiente, si può raddoppiare la compressione dei dati, così il server fa solo il 50% dello sforzo per scambiare gli stessi dati. Per farlo, bisogna modificare il valore "network-compression-threshold" nel file "server.properties" a 512. Anche qui, abbiamo una guida nella nostra documentazione, la trovi [qui](minecraft-default-config.md).

## Forge

Come per Vanilla, le opzioni sul server sono limitate perché i file di configurazione sono piccoli. Però si possono installare mod aggiuntive, che aiutano a scaricare un po’ il server.

### Pre-caricamento dei chunk

Un modo per alleggerire il server è pre-caricare i chunk. Così il server carica i dati già salvati dei chunk e non deve generarli da zero quando arrivano i giocatori. Questo processo è meglio farlo di notte, avviandolo la sera.

Serve installare una mod apposita. Una mod molto valida la trovi [qui](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator). La mod va installata normalmente sul server come spiegato nelle nostre istruzioni.

Prima di riavviare il server, assicurati che "max-tick-time" in "server.properties" sia impostato a "-1", altrimenti il server potrebbe crashare. Consigliamo anche almeno 8-10 GB di RAM, perché il processo richiede molta RAM. Puoi aumentare temporaneamente la RAM di notte e poi ridurla dopo.

:::info
Attenzione: la mod indicata potrebbe non essere compatibile con la versione di Forge che usi e il processo potrebbe variare se usi un’altra mod.
:::

Quando il server parte con la mod, apri la console. Consigliamo di creare un confine per il mondo con raggio di 16.000 blocchi. Esegui questi comandi in sequenza:

- worldborder center 0 0
- worldborder set 16000

:::info
Se serve, sostituisci le coordinate con il centro del tuo mondo per non “tagliare” parti già costruite.
:::

Dopo aver impostato il confine, avvia il pre-caricamento con:

- pregen gen startWorldBorder

Ora tutti i chunk dentro il confine vengono pre-caricati uno dopo l’altro. Il processo può durare fino a 8 ore a seconda delle mod installate. La console mostra regolarmente messaggi di stato. Quando finisce, lo segnala!

:::info
La mod può restare installata anche dopo il pre-caricamento. Continua a ottimizzare i chunk anche senza giocatori online.
:::

### Visibilità

Come detto, ridurre la distanza di visualizzazione è una misura molto usata. Il valore standard è 10 chunk, ma molti giocano con 6-8. Alcuni esagerano e mettono anche 32 chunk, facendo lavorare troppo il server.

La visibilità su un server Forge si regola in "server.properties" modificando "view-distance". Consigliamo 5-6 per non rovinare troppo il gameplay e alleggerire il server fino al 50%. Abbiamo una guida [qui](minecraft-default-config.md).

### Compressione dati

Come per Vanilla, il server scambia continuamente dati con i giocatori. Per ottimizzare, si può raddoppiare la compressione modificando "network-compression-threshold" a 512 in "server.properties". Guida [qui](minecraft-default-config.md).

## Bukkit

### Visibilità

Ridurre la distanza di visualizzazione è una mossa molto comune. Standard 10 chunk, molti giocano con 6-8. Alcuni mettono anche 32, facendo lavorare troppo il server.

Si regola in "server.properties" modificando "view-distance". Consigliamo 5-6 per alleggerire il server fino al 50%. Guida [qui](minecraft-default-config.md).

### Compressione dati

Come sopra, si può raddoppiare la compressione dati impostando "network-compression-threshold" a 512 in "server.properties". Guida [qui](minecraft-default-config.md).

### Limiti di spawn

In questo step si riducono un po’ i tassi di spawn dei mob sul server. Non si nota quasi differenza rispetto ai valori normali, ma in certi casi (tipo mob farm) potrebbe non funzionare come previsto.

Per modificarli, edita "bukkit.yml" e cambia i valori sotto "spawn-limits":
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

:::info
Puoi ovviamente personalizzare i valori, ma quelli sopra sono un ottimo compromesso.
:::

Per migliorare ancora lo spawn, cambia anche "monster-spawns" in "ticks-per" in "bukkit.yml":
- monster-spawns: 2 #Default: 1

Se ci sono problemi generali con i mob (es. dal timing report), puoi alzare fino a 5 e testare il comportamento per trovare il valore migliore.

### Gestione chunk

Minecraft lavora con chunk da 16x16 blocchi, che rappresentano il mondo per il client. Il server carica i chunk necessari in RAM. Più chunk sono caricati e processati, più risorse servono, e questo può rallentare il server.

Con le impostazioni standard, i chunk caricati non vengono mai scaricati, quindi la RAM si riempie e il server rallenta.

Per fare in modo che il server carichi solo i chunk necessari, modifica in "bukkit.yml" sotto "chunk-gc":
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

"period-in-ticks" indica ogni quanti secondi i chunk vengono scaricati. Puoi ridurlo, ma attenzione a non creare un loop: il chunk viene scaricato e subito dopo serve di nuovo, costringendo il server a ricaricarlo continuamente, peggiorando le prestazioni.

## Spigot

### Visibilità

Ridurre la distanza di visualizzazione è una mossa molto usata. Standard 10 chunk, molti giocano con 6-8. Alcuni mettono anche 32, facendo lavorare troppo il server.

Su Spigot si regola in "spigot.yml" modificando "view-distance". Consigliamo 5-6 per alleggerire il server fino al 50%.

:::info
Se vuoi, puoi anche mettere 4, che aiuta molto contro il lag su server farm world versione 1.13+.
:::

### Compressione dati

Come sopra, si può raddoppiare la compressione dati impostando "network-compression-threshold" a 512 in "server.properties". Guida [qui](minecraft-default-config.md).

### Limiti di spawn

Riduci un po’ i tassi di spawn mob in "bukkit.yml" sotto "spawn-limits":
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

:::info
Puoi personalizzare, ma questi valori sono un ottimo compromesso.
:::

Modifica anche "monster-spawns" in "ticks-per":
- monster-spawns: 2 #Default: 1

Se ci sono problemi con i mob, puoi alzare fino a 5 e testare.

### Gestione chunk

Modifica in "bukkit.yml" sotto "chunk-gc":
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

Attenzione al loop di caricamento/scaricamento chunk.

### Raggio di spawn

Riduci il raggio di spawn mob in "spigot.yml" sotto "world-settings":
- mob-spawn-range: 3 #Default: 4

### Raggio di attivazione entità

Imposta quando animali e mob si attivano (possono muoversi o riconoscere giocatori). In standby si muovono lentamente, risparmiando risorse.

Modifica in "spigot.yml" sotto "entity-activation-range":
- animals: 6 #Default: 32
- monsters: 16 #Default: 32
- misc: 2 #Default: 16
- water: 6 #Default: 6
- tick-inactive-villagers: true #Default: true

### Ottimizzazioni hopper

Gli hopper sono fondamentali ma pesano molto sul server perché controllano 20 volte al secondo se c’è un oggetto da prendere.

Per migliorare, aumentiamo gli intervalli di controllo a 3 secondi. Il trasferimento non cambia, ma redstone clock con hopper potrebbero non funzionare bene.

Modifica in "spigot.yml":
- hopper-transfer: 24 #Default: 8
- hopper-check: 24 #Default: 8
- hopper-amount: 3 #Default: 1

### Collisioni

Da Minecraft 1.9 ci sono le collisioni: un giocatore non può stare dentro un altro. Qui si regola quante collisioni possono esserci tra entità (utile in mob farm).

Modifica in "spigot.yml":
- max-entity-collisions: 1 #Default: 8

Non influisce sui giocatori, solo sui mob.

### Raggio di merge

Determina quali oggetti e XP si uniscono, riducendo le entità da processare. Utile se ci sono molti oggetti a terra.

Modifica in "spigot.yml" sotto "merge-radius":
- item: 4.0 #Default 2.5
- exp: 6.0 #Default: 3.0

:::info
Non superare 8 per evitare lag.
:::

## Paper Spigot

### Visibilità

Come sopra, riduci la distanza di visualizzazione in "spigot.yml" modificando "view-distance" a 5-6.

:::info
Puoi anche mettere 4 per farm world 1.13+.
:::

### Compressione dati

Imposta "network-compression-threshold" a 512 in "server.properties". Guida [qui](minecraft-default-config.md).

### Limiti di spawn

Modifica in "bukkit.yml" sotto "spawn-limits":
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

Modifica anche "monster-spawns" in "ticks-per":
- monster-spawns: 2 #Default: 1

### Gestione chunk

Modifica in "bukkit.yml" sotto "chunk-gc":
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

### Raggio di spawn

Modifica in "spigot.yml" sotto "world-settings":
- mob-spawn-range: 3 #Default: 4

### Mob-Spawner

Su server city build si usano spesso spawner in quantità. Questa opzione fa sì che lo spawner si attivi a intervalli più lunghi per alleggerire il server.

Modifica in "paper.yml":
- mob-spawner-tick-rate: 3 #Default: 1

:::info
Non cambia molto il gameplay.
:::

### Raggio di attivazione entità

Modifica in "spigot.yml" sotto "entity-activation-range":
- animals: 6 #Default: 32
- monsters: 16 #Default: 32
- misc: 2 #Default: 16
- water: 6 #Default: 6
- tick-inactive-villagers: true #Default: true

### Ottimizzazione hopper

Modifica in "spigot.yml":
- hopper-transfer: 24 #Default: 8
- hopper-check: 24 #Default: 8
- hopper-amount: 3 #Default: 1

:::info
Assicurati che "use-hopper-check" sia "true" in "paper.yml"!
:::

### Collisioni

Modifica in "spigot.yml":
- max-entity-collisions: 1 #Default: 8

### Raggio di merge

Modifica in "spigot.yml" sotto "merge-radius":
- item: 4.0 #Default 2.5
- exp: 6.0 #Default: 3.0

:::info
Non superare 8 per evitare lag.
:::

### Esplosioni

Paper Spigot ha riscritto molte parti per migliorare le prestazioni, anche le esplosioni.

Modifica in "paper.yml":
- optimize-explosions: true #Default: false

### Chest

Se un gatto è seduto su una cassa, non si può aprire. Il server controlla i mob intorno ogni volta che apri una cassa, che è pesante.

Puoi disattivare questo controllo:
- disable-chest-cat-detection: true #Default: false

### Inventari

Si può rallentare l’aggiornamento degli inventari per alleggerire il server.

Modifica in "paper.yml":
- container-update-tick-rate: 3 #Default: 1

:::info
Non superare 5, altrimenti l’inventario può dare problemi. In modalità come SurvivalGames lascia a 1.
:::

### Aggiornamenti luce

Paper Spigot gestisce gli aggiornamenti della luce in modo asincrono per evitare blocchi.

Modifica in "paper.yml":
- queue-light-updates: true #Default: false

### Salvataggio chunk

I cambiamenti nei chunk non vengono scritti subito su disco ma salvati spesso, causando lag.

Limita il numero di chunk salvati per ciclo per ridurre i lag:

Modifica in "paper.yml":
- max-auto-save-chunks-per-tick: 10 #Default: 24

### Redstone

Redstone può causare lag pesanti. Paper Spigot usa un sistema alternativo più leggero ma con la stessa funzionalità.

Modifica in "paper.yml":
- use-faster-eigencraft-redstone: true #Default: false

:::info
**Attenzione! In certi casi può cambiare molto il funzionamento della Redstone!**
:::

<InlineVoucher />