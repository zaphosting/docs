---
id: cs16-plugins
title: "CS 1.6: Installa plugin sul tuo server"
description: "Scopri come potenziare il tuo server Counter-Strike 1.6 con AMXmodX e Metamod per una personalizzazione e amministrazione avanzata → Scopri di più ora"
sidebar_label: Installa Plugin
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## Introduzione

**AMXmodX** e **Metamod** sono necessari per usare plugin su un server Counter-Strike 1.6. Sono due estensioni di Half Life che ti permettono di personalizzare il server molto più a fondo rispetto al solito. Questo include, per esempio, l’uso di plugin e una gestione avanzata del tuo server.

<InlineVoucher />

## Installazione AMXmodX / Metamod

### Preparazione

Prima di tutto, servono le estensioni vere e proprie. Puoi scaricarle da [amxmodx.org](https://amxmodx.org/downloads-new.php). Usa sempre le versioni più recenti (**stable**), così sono completamente funzionanti e compatibili.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

Ti servono i pacchetti Linux **AMX Mod X Base, Counter-Strike Addon e Metamod**. Scaricali da lì. Alla fine dovresti avere tre file compressi. Estraili sul tuo PC. Otterrai una cartella **addons** che contiene le cartelle **amxmodx** e **metamod**:

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)



### Installazione

Quando hai completato i passaggi sopra, è ora di installare davvero. Devi caricare i file sul tuo server via FTP. Ti serve un client FTP per caricare i file. Se non sai cos’è FTP o come funziona, dai un’occhiata a questa guida: [Accesso via FTP](gameserver-ftpaccess.md)

Ora carica la cartella **addons** nella directory principale del server. La struttura delle cartelle dovrebbe essere così:



![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)



L’installazione di **AMXmodX** e **Metamod** è finita. Puoi connetterti al server in gioco e usare il comando ``amxx version`` nella console per controllare se AMX è stato installato correttamente. L’output dovrebbe essere così:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

Se vedi il messaggio **Unknown command**, allora qualcosa è andato storto durante l’installazione.



## Installazione plugin

### Preparazione

Quando AMXmodX e Metamod sono installati e funzionanti, puoi iniziare a installare i plugin. Prima di tutto devi scaricare i plugin che vuoi mettere sul server. Una vasta selezione di plugin la trovi su [amxmodx.org](https://www.amxmodx.org/compiler.php). Nel corso degli anni sono stati pubblicati tantissimi plugin e ne vengono aggiunti regolarmente altri. Ti serve il file **.amxx** per ogni plugin.

### Installazione

Quando hai scaricato i plugin che vuoi, puoi iniziare a installarli. Anche questa operazione si fa via FTP. I file dei plugin vanno caricati nella cartella plugin sotto ``../addons/amx``.

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)


Al prossimo riavvio del server, i plugin caricati verranno caricati automaticamente.



## Plugin popolari

Ancora in cerca dei plugin perfetti per il tuo server?
Dai un’occhiata alla nostra lista selezionata con i plugin più popolari e consigliati per migliorare il gameplay e dare al tuo server quel tocco in più che merita. Lasciati ispirare e trova proprio le aggiunte giuste per il tuo progetto.

<SearchableItemList items={items} />

## Conclusione

Se hai seguito tutti i passaggi, dovresti aver installato con successo AMXmodX / Metamod e i plugin che volevi. Per qualsiasi domanda o aiuto, non esitare a contattare il nostro supporto, disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />