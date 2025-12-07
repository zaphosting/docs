---
id: vserver-windows-fs-22
title: "VPS: Farming Simulator 2022 Dedicated Server Windows Setup"
description: "Scopri come configurare il Farming Simulator Dedicated Server 2022 sul tuo VPS Windows per un multiplayer fluido → Scopri di più ora"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows e vuoi installare il servizio Farming Simulator Dedicated Server 2022? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.
<InlineVoucher />

## Preparazione
Serve un server basato su Windows Server 2016/2019 con almeno 4x CPU da 2.4 GHz (AMD/Intel) e almeno 2GB di RAM (DDR3/4) e 6GB di spazio libero su disco (SSD o meglio, preferito). Il server deve girare su architettura a 64 bit.  
Inoltre, serve una GameLicense propria (non versione Steam) e un indirizzo IPv4 pubblico. GPU o scheda audio non sono necessari per il Dedicated Server.  
A seconda di quanto il server dedicato venga moddato o esteso con mod o DLC, potrebbero servire più risorse. 


## Step 1 Acquista la licenza digitale

Serve una versione digitale di Farming Simulator 2022, non può essere la versione Steam.  
La versione digitale si può acquistare sul [sito ufficiale di Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Dopo l’acquisto, Farming Simulator può essere scaricato online seguendo il link nella mail che riceverai da Giants: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Importante: nella mail troverai il GameKey necessario sia per il download che per l’attivazione dell’installazione. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## Step 2 Scarica Farming Simulator direttamente sul tuo server Windows

Connettiti tramite [Initial Access (RDP)](vserver-windows-userdp.md) al tuo server Windows. Una volta connesso, apri il browser e vai di nuovo al [link](https://eshop.giants-software.com/downloads.php) presente nella mail. Inserisci il tuo GameKey e seleziona il download per Windows 8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

Il file verrà scaricato e dovrebbe trovarsi nella cartella download (la cartella può variare).

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

Con un doppio click apri il file e puoi eseguire il Setup.exe.  
Leggi e accetta i Termini di Servizio. Poi scegli l’installazione Standard o Custom, di solito Standard va benissimo.  
Infine clicca su installa e Farming Simulator 2022 verrà installato, ci vorranno alcuni minuti. 

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

Quando l’installazione è finita, appare questo messaggio che puoi confermare con "Finish". 

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

L’installazione base è ora completa. 

## Step 3 Attivazione del gioco e configurazione del dedicated server

Ora avvia Farming Simulator. Dovrebbe esserci un collegamento sul desktop, altrimenti puoi avviarlo dal menu di Windows.  
Errori su GPU mancante o simili possono essere ignorati o chiusi con No/Cancel. Farming Simulator deve essere avviato solo per inserire il key. 

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

Ora devi impostare o modificare un nome utente e password nella Config del Dedicated Server, così puoi accedere all’interfaccia web del Dedicated Server.  
La Config si trova nella installazione standard sotto  
`C:\Program Files (x86)\Farming Simulator 2022` con il nome `"dedicatedServer.xml"`.  
I dati di login sono personalizzabili a piacere. 

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## Step 4 Avvia il Farming Simulator 2022 Dedicated Server

Per avviare il dedicated server, esegui `"dedicatedServer.exe"` nella stessa cartella dove si trova `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

Poi puoi aprire l’interfaccia web via `https://SERVER-IP:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

Il login si fa con i dati impostati/lettura dal `"dedicatedServer.xml"`.  
La configurazione è intuitiva nell’interfaccia web e puoi farla in pochi click, come preferisci. 

## Step 5 Sblocca le porte nel firewall

Il server deve ovviamente essere accessibile pubblicamente per giocare con gli amici. Per questo, devi aprire le porte del server nel firewall di Windows. Le porte 10823 e 8080 devono essere aperte per il protocollo TCP. 10823 è la porta del game server, 8080 è la porta web per l’interfaccia web, quest’ultima va aperta solo se serve, altrimenti l’amministrazione si può fare localmente sul server Windows via RDP.  
Come aprire porte su Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).  

Dopo aver aperto le porte, il server sarà accessibile pubblicamente, se è stato avviato. 


## Conclusione

Congratulazioni, hai installato e configurato con successo il server Farming Simulator 2022 sul tuo VPS! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno! 

<InlineVoucher />