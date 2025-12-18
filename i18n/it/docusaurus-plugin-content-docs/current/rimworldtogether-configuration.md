---
id: rimworldtogether-configuration
title: "RimWorld Together: Configurazione Server"
description: "Scopri le impostazioni del server RimWorld Together per personalizzare il gameplay e gestire l’accesso, creando un’esperienza multiplayer su misura → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server di RimWorld Together offrono una vasta gamma di parametri di configurazione che puoi personalizzare a tuo piacimento. In questa guida esploreremo tutti i parametri di configurazione attualmente disponibili e spiegheremo ciascuno in dettaglio.

<InlineVoucher />

## Come accedere al file di configurazione

Prima di tutto, devi accedere al file di configurazione per modificare qualsiasi parametro. Attualmente, l’unico modo per modificare questi file è tramite FTP. Se non hai mai usato FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md).

:::note
Il server deve essere spento prima di modificare qualsiasi configurazione; modificare un file di configurazione e riavviare il server farà sì che le modifiche vengano annullate.
:::

Con il client FTP pronto, naviga nella seguente directory:
```
../rimworld-together/Core
```

Questa cartella contiene una varietà di file di configurazione `.json` per il tuo server RimWorld Together.

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Opzioni di Configurazione del Server

Nei paragrafi seguenti ti mostriamo come modificare alcune delle opzioni di configurazione più popolari e comuni per il tuo server RimWorld Together. Puoi approfondire ogni file leggendo la [guida ufficiale di RimWorld Together](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core) che copre tutte le opzioni di configurazione.

:::tip
Non consigliamo di modificare le impostazioni di Porta o IP nel file **ServerConfig.json**, perché sono configurate automaticamente dal server di gioco. Cambiare questi valori potrebbe compromettere il funzionamento del tuo server!
:::

#### Whitelist del Server

Attivare o disattivare la whitelist del server è semplice. Apri il file di configurazione **Whitelist.json** e imposta il parametro `UseWhitelist` su true.

Poi modifica il parametro `WhitelistedUsers`, aggiungendo i nomi utente in-game delle persone che vuoi autorizzare. Chi non è in questa lista non potrà più connettersi.

#### Impostazioni di Gameplay

Puoi regolare una vasta gamma di parametri di difficoltà per il tuo server RimWorld Together tramite il file **DifficultyValues.json**.

Anche le impostazioni del salvataggio sono modificabili tramite il file **WorldConfig.json**. Ti consigliamo di non modificarlo se sei già molto avanti nella partita, perché potrebbe rovinare l’esperienza di gioco.

<InlineVoucher />