---
id: dedicated-windows-fs-22
title: "Dedicated Server: Farming Simulator 2022 Dedicated Server Windows Setup"
description: "Scopri come configurare il Farming Simulator Dedicated Server 2022 sul tuo VPS Windows o server dedicato → Scopri di più ora"
sidebar_label: Farming Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows o un server dedicato e vuoi installare il servizio Farming Simulator Dedicated Server 2022? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

## Preparazione
Serve un server basato su Windows Server 2016/2019 con almeno 4x CPU da 2.4 GHz (AMD/Intel) e almeno 2GB di RAM (DDR3/4) e 6GB di spazio libero su disco (SSD o meglio, preferito). Il server deve girare su architettura a 64 bit.  
Inoltre, serve una GameLicense propria (non versione Steam) e un indirizzo IPv4 pubblico. GPU o scheda audio non sono necessari per il Dedicated Server.  
A seconda di quanto il server dedicato venga moddato o esteso con mod o DLC, potrebbero servire più risorse.

## Passo 1 Acquisto della licenza digitale

Serve una versione digitale di Farming Simulator 2022, non può essere la versione Steam.  
La versione digitale si può acquistare sul [sito ufficiale di Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Dopo l’acquisto, Farming Simulator può essere scaricato online seguendo il link nella mail ricevuta da Giants: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Importante: nella mail trovi il GameKey necessario sia per il download che per l’attivazione dell’installazione.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/MXkbf8pNSYJAmGt/preview)

## Passo 2 Scarica Farming Simulator direttamente sul tuo server Windows

Connettiti via [Initial Access (RDP)](vserver-windows-userdp.md) al tuo server Windows. Una volta connesso, apri il browser e vai di nuovo al [link](https://eshop.giants-software.com/downloads.php) dalla mail. Inserisci il tuo GameKey e seleziona il download per Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/wDa758WS8aKDBwE/preview)

Il file verrà scaricato e dovrebbe trovarsi nella cartella download (la cartella può variare).

![](https://screensaver01.zap-hosting.com/index.php/s/3KZ9wstGSz6JTke/preview)

Con un doppio click apri il file e puoi eseguire Setup.exe.  
Leggi i Termini di Servizio e conferma. Poi scegli l’installazione Standard o Custom, di solito Standard va benissimo.  
Infine clicca su installa e Farming Simulator 2022 verrà installato, ci vorranno alcuni minuti.

![](https://screensaver01.zap-hosting.com/index.php/s/A4daMGF35a6aCj4/preview)

Quando l’installazione è finita, appare questo messaggio che puoi confermare con "Finish".

![](https://screensaver01.zap-hosting.com/index.php/s/EWcaeSD8HacP8je/preview)

L’installazione base è ora completa.

## Passo 3 Attivazione del gioco e configurazione del dedicated server

Ora devi avviare Farming Simulator. Dovrebbe esserci un collegamento sul desktop, altrimenti puoi avviarlo dal menu di Windows.  
Errori su GPU mancante o simili possono essere ignorati o chiusi con No/Cancel. Farming Simulator deve partire solo per inserire il key.

![](https://screensaver01.zap-hosting.com/index.php/s/5FcRkkxajWFN6D5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/FXzNNeaBzAP794w/preview)

Ora devi impostare o modificare un nome utente e password nella Config del Dedicated Server, così puoi accedere all’interfaccia web del Dedicated Server.  
La Config si trova nell’installazione standard in  
`C:\Program Files (x86)\Farming Simulator 2022` sotto il nome `"dedicatedServer.xml"`.  
I dati di login sono personalizzabili a piacere.

![](https://screensaver01.zap-hosting.com/index.php/s/LHkeCNSnEtE5Rd8/preview)

## Passo 4 Avvia il Farming Simulator 2022 Dedicated Server

Per avviare il dedicated server devi eseguire `"dedicatedServer.exe"` nella stessa cartella dove si trova `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/43ZYGoNiE7npxDz/preview)

Poi puoi aprire l’interfaccia web via `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/RbfZFQZkRSX4okr/preview)

Il login si fa con i dati impostati o letti da `"dedicatedServer.xml"`.  
La configurazione è super intuitiva nell’interfaccia web e puoi farla in pochi click, secondo i tuoi gusti.

## Passo 5 Sblocca le porte nel firewall

Il server deve ovviamente essere accessibile pubblicamente per giocare con gli amici. Per questo devi aprire le porte del server nel firewall di Windows.  
Le porte 10823 e 8080 devono essere aperte per il protocollo TCP. 10823 è la porta del game server, 8080 è la porta web per l’interfaccia web, quest’ultima va aperta solo se serve, altrimenti l’amministrazione si può fare localmente via RDP.  
Come aprire porte su Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).

Dopo aver aperto le porte, il server sarà accessibile pubblicamente, se è stato avviato.