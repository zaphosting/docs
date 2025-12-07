---
id: rimworldtogether-mods
title: "RimWorld Together: Installare mod"
description: "Scopri come potenziare il tuo server RimWorld Together con mod popolari per un gameplay cooperativo online senza intoppi → Scopri di più ora"
sidebar_label: Installa Mod
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## Introduzione

RimWorld Together è una mod multiplayer open-source super popolare, gestita completamente dalla community di RimWorld, che abilita il gameplay CO-OP online per RimWorld. In questa guida ti mostriamo come installare mod sul tuo server RimWorld Together.

<InlineVoucher />

## Raccolta Mod

Puoi installare una vasta gamma di mod di RimWorld sul tuo server RimWorld Together.

Le mod si dividono in tre tipi:
- **Mod Obbligatorie**: sono necessarie, il client deve averle altrimenti non potrà connettersi.
- **Mod Opzionali**: non sono obbligatorie, il client può connettersi anche senza averle.
- **Mod Vietate**: queste mod sono bandite, il server rifiuterà subito la connessione del client.

Questi tre tipi li vedrai nella sezione successiva per l’upload delle mod, dato che sono divise in tre cartelle diverse.

### File Core & DLC

RimWorld Together ti permette di scaricare facilmente i File Core & DLC. Sono trattati esattamente come qualsiasi altra mod.

Puoi scaricare Core e DLC direttamente dal [RimWorld Together GitHub Repository](https://github.com/RimworldTogether/RimWorld-Together), scaricando in particolare la cartella **Extras.zip**.

### Altre Mod

Puoi trovare tantissime mod di RimWorld semplicemente cercando online. Ti consigliamo caldamente di usare la [Steam Workshop di RimWorld](https://steamcommunity.com/app/294100/workshop/) per la ricerca, visto che è super popolare e ha una quantità enorme di mod disponibili.

Se ti iscrivi alle mod direttamente tramite Steam Workshop, queste verranno scaricate dal client Steam nella cartella: `../steamapps/workshop/content/294100`.

:::tip
Se non possiedi RimWorld su Steam, puoi comunque scaricare mod e file dalla Steam Workshop usando SteamCMD. Inizia scaricando [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Avvia **steamcmd.exe** e aspetta che finisca l’installazione. Quando è pronto, digita `login anonymous` nella console.

Ora puoi scaricare mod con il comando `workshop_download_item 294100 [workshop_id]`, sostituendo `[workshop_id]` con l’ID della mod Steam Workshop. Puoi trovare l’ID semplicemente guardando l’URL, in particolare la parte finale tipo: `/?id=3230195082`.

Le mod scaricate con SteamCMD finiranno nella cartella: `../steamapps/workshop/content/294100`.
:::

Quando hai scaricato le mod, puoi passare alla sezione successiva per caricarle sul tuo gameserver.

:::note
Ci sono alcune mod che sicuramente non sono compatibili con RimWorld Together. Puoi vedere la lista delle mod confermate come [incompatibili qui](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md).

Inoltre, potrebbero esserci altre mod che non funzionano come dovrebbero con RimWorld Together, quindi potrebbe servirti un po’ di ricerca e test per assicurarti che tutto funzioni.
:::

## Caricare le Mod

Ora che hai le mod pronte, connettiti al tuo gameserver via FTP. Dai un’occhiata alla nostra guida [Accesso via FTP](gameserver-ftpaccess.md) per sapere come fare.

Con il client FTP pronto, vai nella cartella:
```
../rimworld-together/Mods
```

Qui troverai tre cartelle separate per i diversi tipi di mod. Questo richiama la spiegazione all’inizio della sezione precedente sui tipi di mod. Se non l’hai ancora letta, ti consigliamo di farlo per capire bene dove mettere ogni mod.

Detto questo, prendi le mod che hai scaricato e caricale una per una nella cartella giusta sul tuo server.

:::note
Il server deve essere spento prima di aggiungere o modificare mod, altrimenti le modifiche potrebbero non essere salvate.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Avviare il Server

Dopo aver caricato le mod che vuoi, riavvia il server. Al prossimo avvio, tutte le mod che hai aggiunto saranno attive sul server.

Hai installato con successo nuove mod sul tuo server RimWorld Together!

## Mod Popolari

Cerchi ancora le mod perfette per il tuo server? Dai un’occhiata alla nostra lista selezionata delle mod più popolari e consigliate per migliorare il gameplay e dare al tuo server quel tocco in più. Lasciati ispirare e trova proprio le aggiunte che fanno al caso tuo.

<SearchableItemList items={items} />

<InlineVoucher />