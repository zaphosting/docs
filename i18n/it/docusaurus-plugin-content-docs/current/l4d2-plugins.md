---
id: l4d2-plugins
title: "Left 4 Dead 2: Installa plugin sul tuo server"
description: "Scopri come personalizzare il tuo server di gioco con Sourcemod e Metamod per migliorare funzionalità e gestione → Scopri di più ora"
sidebar_label: Installa Plugin
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/l4d2-plugins.json';


## Introduzione

Scopri come installare Sourcemod e Metamod e come usare i plugin sul tuo server. Entrambe le estensioni ti permettono di personalizzare giochi come CS:S, CS:GO, DoD:S o TF2 e ampliare notevolmente le opzioni di gestione del server.

Con Sourcemod e Metamod puoi aggiungere plugin, attivare funzionalità speciali e configurare il tuo server esattamente come vuoi.

<InlineVoucher />



## Installazione di Sourcemod / Metamod

### Preparazione

Le estensioni necessarie possono essere scaricate da [Sourcemod](https://sourcemod.net/) e [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). Usa sempre le versioni **stable** più recenti per garantire piena funzionalità e compatibilità.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Ti servono i pacchetti Linux **Sourcemod** e **Metamod**. Scaricali dalle fonti indicate. Dopo il download, avrai due file compressi. Estraili sul tuo PC per ottenere una cartella addons contenente le cartelle `sourcemod` e `metamod`.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Installazione

Una volta completati i passaggi sopra, puoi procedere con l’installazione. Carica i file sul tuo server via FTP usando un client FTP. Se non conosci FTP o come funziona, dai un’occhiata a questa guida: [Accesso via FTP](gameserver-ftpaccess.md)

Poi carica la cartella **addons** nella directory principale del tuo server. La struttura delle cartelle dovrebbe apparire così:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

Ora l’installazione di **Sourcemod** e **Metamod** è completa. Collegati al server in gioco e usa il comando ``sm version`` nella console per verificare che Sourcemod e Metamod siano stati installati correttamente. L’output dovrebbe essere simile a questo:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Se compare il messaggio **Unknown command**, significa che qualcosa è andato storto durante l’installazione.



## Installazione dei plugin

### Preparazione

Una volta che Sourcemod e Metamod sono installati e funzionano correttamente, puoi iniziare ad aggiungere i plugin. Scarica i plugin che vuoi installare sul tuo server da [Sourcemod](https://sourcemod.net/), dove trovi una vasta e sempre aggiornata collezione pubblicata negli anni. Per ogni plugin, assicurati di prendere il file .smx corrispondente.

### Installazione

Dopo aver scaricato i plugin desiderati, puoi procedere con l’installazione. Carica i file dei plugin via FTP nella cartella:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Plugin popolari
Cerchi ancora i plugin perfetti per il tuo server? Dai un’occhiata alla nostra lista selezionata con cura dei plugin più popolari e consigliati per migliorare il gameplay e dare al tuo server quel tocco finale che merita. Lasciati ispirare e trova esattamente le aggiunte giuste per il tuo progetto.
<SearchableItemList items={items} />


## Conclusione

Se hai seguito tutti i passaggi, dovresti aver installato con successo Sourcemod/Metamod e i plugin che volevi. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />