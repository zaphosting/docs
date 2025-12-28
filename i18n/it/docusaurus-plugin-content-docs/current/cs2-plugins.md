---
id: cs2-plugins
title: "CS2: Installazione dei plugin"
description: "Scopri l’evoluzione dei plugin per CS2 e i progetti della community per potenziare la tua esperienza in Counter-Strike → Scopri di più ora"
sidebar_label: Installa plugin
services:
  - gameserver-cs2
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs2-plugins.json';



## Introduzione

Counter-Strike 2 continua la lunga tradizione della personalizzazione server guidata dalla community. I plugin permettono ai proprietari dei server di estendere il gameplay, aggiungere funzionalità che migliorano la qualità della vita, implementare regole personalizzate o creare modalità di gioco completamente nuove.

Con il passaggio a Source 2, l’ecosistema dei plugin è cambiato parecchio. Per CS2, **CounterStrikeSharp** si è affermato come il framework principale e attivamente mantenuto per lo sviluppo di plugin lato server.

<InlineVoucher />



## Installazione di Metamod:Source

Metamod deve essere installato per primo, perché CounterStrikeSharp ne dipende. Dopo aver scaricato la [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), estrai l’archivio. All’interno troverai una cartella `addons`. Questa cartella va caricata direttamente nella directory di gioco di CS2 tramite [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Dopo aver copiato i file, trova il file `gameinfo.gi` dentro `/game/csgo/`. Aprilo con un editor di testo. All’interno, cerca la riga che contiene `Game_LowViolence csgo_lv`. Subito sotto questa riga, aggiungi la seguente voce:

```
Game csgo/addons/metamod
```

<Button label="Scarica Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Installazione di CounterStrikeSharp

Una volta confermato che Metamod è attivo, puoi installare CounterStrikeSharp. CounterStrikeSharp viene distribuito tramite il suo repository ufficiale su GitHub e fornito come pacchetto precompilato. Scarica la release di CounterStrikeSharp che include il runtime. Estrai l’archivio e copia la cartella `addons` inclusa nella stessa directory di gioco CS2 tramite [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Non unire o rinominare manualmente le cartelle. La struttura fornita dall’archivio deve rimanere intatta. Dopo aver caricato i file, riavvia il server. All’avvio, Metamod caricherà automaticamente CounterStrikeSharp. Per verificare l’installazione, apri la console del server e digita:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Scarica CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Installazione dei plugin

I plugin per CounterStrikeSharp sono forniti come file `.dll` compilati. Questi file vanno messi nella cartella `plugins` all’interno del percorso di installazione di CounterStrikeSharp.

Dopo aver copiato un plugin in questa cartella e riavviato il server, CounterStrikeSharp caricherà automaticamente tutti i plugin disponibili. Se un plugin non si carica, controlla i log del server per eventuali errori relativi a CounterStrikeSharp o al plugin stesso.




## Plugin popolari

<SearchableItemList items={items} />



## Conclusione

Se hai seguito tutti i passaggi, dovresti aver installato con successo Metamod/CounterStrikeSharp e i plugin che desideri. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂




<InlineVoucher />