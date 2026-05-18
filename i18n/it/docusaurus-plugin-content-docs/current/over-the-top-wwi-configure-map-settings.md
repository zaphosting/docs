---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: Configura le Impostazioni della Mappa Casuale"
description: "Scopri come configurare le impostazioni di generazione casuale della mappa sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Mappe Casuali
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le impostazioni delle mappe casuali in **Over the Top WWI** ti permettono di generare dinamicamente mappe con diversi terreni, vegetazione e caratteristiche ambientali. Questo aumenta di molto la rigiocabilità e crea campi di battaglia unici per ogni partita.

Modificando questi valori, puoi controllare la dimensione della mappa, la complessità del terreno e la quantità di oggetti come foreste, rocce o edifici.

<InlineVoucher />

## Configurazione

Le impostazioni delle mappe casuali si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
RandomMapSizee = 450
RandomFields = 8.25
RandomCivBuildings = 0
RandomMilBuildings = 0
RandomForests = 8.5
RandomSingleTrees = 1.1
RandomBush = 5
RandomRocks = 1.1
RandomNoiseSetting = 0
RandomWaterHeight = 12.25
RandomMaxTerrainHeight = 26
RandomFrequency = 5
RandomLacunarity = 3
RandomPersistence = 32
RandomDesert = 0
```

- `RandomMapSizee` definisce la dimensione complessiva della mappa generata  
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` controllano quanti elementi naturali appaiono sulla mappa  
- `RandomCivBuildings` e `RandomMilBuildings` definiscono il numero di strutture civili e militari  
- `RandomSingleTrees` gestisce la posizione degli alberi isolati  
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity` e `RandomPersistence` influenzano la generazione e la variazione del terreno  
- `RandomWaterHeight` definisce il livello dell’acqua  
- `RandomMaxTerrainHeight` controlla l’elevazione e l’altezza del terreno  
- `RandomDesert` determina se possono apparire ambienti desertici  

- `0` → Disabilitato  
- `1` → Abilitato  
- `2` → Casuale  

Modifica questi valori per creare diversi tipi di mappe, da foreste fitte a campi di battaglia aperti o paesaggi con terreni variegati.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Le nuove impostazioni della mappa saranno applicate alla generazione della mappa casuale.

## Conclusione

Complimenti! Hai configurato con successo le impostazioni delle mappe casuali sul tuo **server Over the Top WWI**. Ora puoi creare campi di battaglia unici e dinamici, migliorando la rigiocabilità e l’esperienza di gioco.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />