---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI: Ottimizza le Prestazioni del Server"
description: "Scopri come ottimizzare le prestazioni e il comportamento del server sul tuo Over the Top WWI → Scopri di più ora"
sidebar_label: Impostazioni Prestazioni
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le impostazioni di prestazione in **Over the Top WWI** influenzano quanto fluido gira il tuo server, soprattutto con tanti giocatori o un uso intenso di AI. Una configurazione giusta può migliorare la stabilità, ridurre il lag e garantire un’esperienza di gioco migliore per tutti.

Modificando questi valori, puoi bilanciare simulazione visiva, calcoli AI e carico del server.

<InlineVoucher />

## Configurazione

Le impostazioni di prestazione si configurano nel file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file `ServerConfiguration.ini`. All’interno, cerca questi parametri:

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` definisce il profilo di prestazioni del server

  - `0` → Default
  - `1` → Ottimizzazione per un numero maggiore di giocatori
  - `2` → Ottimizzazione per un numero molto alto di giocatori

- `NavCalcsPerFrame` controlla quante calcoli di navigazione vengono processati per frame
- `NavMeshFrames` definisce ogni quanto vengono aggiornate le mesh di navigazione
- `NavMeshAutoSeed` influenza come vengono generate le rotte di navigazione AI
- `ResetIfNoPlayers` resetta automaticamente il server se non ci sono giocatori connessi

  - `0` → Disabilitato
  - `1` → Abilitato

Modificare queste impostazioni può aiutare a migliorare le prestazioni del server, specialmente se gestisci tanti bot o grandi battaglie.

Dopo aver modificato il `ServerConfiguration.ini`, salva il file e riavvia il server. Le nuove impostazioni di prestazione saranno applicate automaticamente.

## Conclusione

Complimenti! Hai ottimizzato con successo le impostazioni di prestazioni sul tuo **server Over the Top WWI**. Una buona configurazione aiuta a mantenere la stabilità e garantisce un gameplay fluido anche sotto carichi pesanti.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />