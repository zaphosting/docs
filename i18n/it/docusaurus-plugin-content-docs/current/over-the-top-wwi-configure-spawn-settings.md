---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI: Configura le impostazioni di spawn"
description: "Scopri come configurare il comportamento di spawn sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Impostazioni di Spawn
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le impostazioni di spawn in **Over the Top WWI** controllano come e quando i giocatori rientrano in battaglia. Queste impostazioni influenzano direttamente il ritmo, l’equità e il flusso complessivo della partita.

Regolando i timer di spawn, i periodi di grazia e il comportamento di respawn, puoi creare un gameplay più veloce o scenari di combattimento più tattici e punitivi.

<InlineVoucher />

## Configurazione

Le impostazioni di spawn si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod` definisce per quanto tempo i giocatori possono spawnare senza penalità o restrizioni all’inizio
- `AttackerRespawnTime` imposta il ritardo di respawn per la squadra attaccante
- `DefenderRespawnTime` imposta il ritardo di respawn per la squadra difendente

- `WaveSpawning` abilita o disabilita lo spawn a ondate

- `WaveLegnth` definisce la durata di un’onda di spawn
- `WaveBuildUpTime` controlla quanto tempo ci vuole perché un’onda si formi completamente

Modificando questi valori puoi decidere se i giocatori spawnano singolarmente o in ondate coordinate, e quanto velocemente possono tornare in battaglia.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Il nuovo comportamento di spawn verrà applicato automaticamente.

## Conclusione

Congratulazioni! Hai configurato con successo le impostazioni di spawn sul tuo **server Over the Top WWI**. Queste modifiche ti permettono di calibrare il ritmo del gameplay e migliorare l’esperienza complessiva dei giocatori.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />