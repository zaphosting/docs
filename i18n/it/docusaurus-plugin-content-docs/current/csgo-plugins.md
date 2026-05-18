---
id: csgo-plugins
title: "CS:GO: Installazione dei plugin"
description: "Scopri come installare i plugin Sourcemod sul tuo server CS:GO e amplia il gameplay con funzionalità personalizzate → Scopri di più ora"
sidebar_label: Installa plugin
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introduzione

CS:GO continua la lunga tradizione della personalizzazione dei server guidata dalla community. I plugin permettono ai proprietari dei server di estendere il gameplay, aggiungere funzionalità che migliorano l’esperienza, implementare regole personalizzate o creare modalità di gioco completamente nuove.

Per i server CS:GO, **Sourcemod** è il framework più usato per i plugin lato server. Sourcemod funziona insieme a **Metamod:Source**, che fa da base permettendo ai plugin di agganciarsi al motore di gioco. Installando entrambi, gli admin possono gestire facilmente i plugin e ampliare le funzionalità del server.

<InlineVoucher />



## Installazione di Metamod:Source

Metamod:Source deve essere installato per primo, perché Sourcemod ne dipende. Inizia scaricando l’ultima versione di Metamod:Source dal sito ufficiale. Estrai l’archivio scaricato sul tuo PC.

Dentro l’archivio troverai una cartella `addons`. Carica questa cartella sul tuo server CS:GO tramite [FTP](gameserver-ftpaccess.md) in modo che si unisca alla directory di gioco esistente `../csgo/`.


Dopo aver caricato i file, riavvia il server. Per verificare che Metamod funzioni correttamente, apri la console del server ed esegui questo comando:

```
meta version
```


Se Metamod è installato correttamente, la console mostrerà la versione installata e altre info.

<Button label="Scarica Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## Installazione di Sourcemod

Una volta installato Metamod:Source, puoi installare Sourcemod. Scarica l’ultima versione stabile di Sourcemod dal sito ufficiale ed estrai l’archivio. Carica le cartelle `addons` e `cfg` incluse sul tuo server CS:GO tramite [FTP](gameserver-ftpaccess.md). Le cartelle devono essere posizionate nella directory di gioco CS:GO `../csgo/`. Dopo aver caricato i file, riavvia il server. Sourcemod verrà caricato automaticamente tramite Metamod.

Per confermare che Sourcemod funzioni, apri la console del server e digita:

```
sm version
```


Se l’installazione è andata a buon fine, il server restituirà la versione corrente di Sourcemod e le info sulla build.

<Button label="Scarica Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## Installazione dei Plugin

I plugin per Sourcemod sono generalmente distribuiti come file `.smx`. Questi file compilati devono essere caricati nella cartella `plugins` dentro l’installazione di Sourcemod.

```
../csgo/addons/sourcemod/plugins/
```


Dopo aver caricato il file del plugin, riavvia il server oppure ricarica il plugin direttamente dalla console del server con questo comando:

```
sm plugins load <pluginname>
```


Se un plugin non si carica correttamente, controlla i log del server nella cartella `logs` di Sourcemod per eventuali errori.

Alcuni plugin includono anche file di configurazione aggiuntivi. Questi file di solito vanno messi in:

```
../csgo/addons/sourcemod/configs/
```


Segui sempre le istruzioni di installazione fornite dallo sviluppatore del plugin per assicurarti che tutto funzioni alla perfezione.



## Plugin Popolari

<SearchableItemList items={items} />



## Conclusione

Se hai seguito tutti i passaggi, dovresti aver installato con successo Metamod:Source, Sourcemod e i plugin che vuoi sul tuo server CS:GO. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />