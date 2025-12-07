---
id: vrising-plugins-bepinex
title: "V Rising: Installare plugin sul server (BepInEx)"
description: "Scopri come migliorare il tuo gameplay di V Rising con le mod BepInEx e personalizzare al meglio il server → Scopri di più ora"
sidebar_label: Installa plugin (BepInEx)
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guida Archiviata
Questo documento è stato archiviato. I documenti vengono archiviati se non sono più rilevanti, sono errati o non aggiornati. È stato archiviato per i seguenti motivi:

**Motivo**: Il prodotto V Rising con BepInEx non è più funzionante ed è stato quindi rimosso dal negozio. 
::::

## Introduzione
BepInEx è un framework open-source molto popolare per plugin e modding che permette ai giocatori di aggiungere mod a diversi giochi che tradizionalmente non supportano modding ufficiale. In questa guida ti mostriamo come installare plugin tramite BepInEx su V Rising.
<InlineVoucher />

## Versione di gioco BepInEx

Per usare plugin compatibili con **BepInEx** in V Rising, devi prima installare la versione di gioco **V Rising BepInEx** sul tuo server. Puoi farlo facilmente usando la funzione di cambio gioco del nostro gameserver, scopri di più leggendo la nostra guida [Cambio Gioco](gameserver-gameswitch.md).

## Caricamento Plugin

Inizia trovando mod compatibili con BepInEx che vuoi aggiungere al tuo server. Di solito puoi vedere le info sulla compatibilità del plugin nella pagina di download.

:::important
I plugin devono essere **compatibili con BepInEx**, altrimenti non funzioneranno!
:::

Quando hai una mod pronta, connettiti al tuo gameserver via FTP. Leggi la nostra guida [Accesso via FTP](gameserver-ftpaccess.md) per sapere come fare.

Con il client FTP pronto, vai nella cartella:
```
../vrising/BepInEx/plugins
```

Qui dentro devi caricare le mod che hai scaricato. Di solito sono file con estensione `.dll`. In questo esempio carichiamo una mod framework utile per creare comandi.

:::note
Il server deve essere spento prima di aggiungere o modificare mod, altrimenti le modifiche potrebbero non essere salvate.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Avvio Server

Dopo aver caricato i plugin che volevi, riavvia semplicemente il server.

:::info
Alcuni plugin potrebbero richiedere l’installazione anche lato client sul tuo PC. Controlla le info sul sito del plugin per vedere se è necessario.
:::

Hai installato con successo nuovi plugin BepInEx sul tuo gameserver V Rising!

<InlineVoucher />