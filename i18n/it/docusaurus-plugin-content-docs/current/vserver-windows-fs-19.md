---
id: vserver-windows-fs-19
title: "VPS: Farming Simulator 2019 Dedicated Server Setup su Windows"
description: "Scopri come configurare un Farming Simulator Dedicated Server 2019 su VPS Windows per un multiplayer fluido → Scopri di più ora"
sidebar_label: Farming Simulator 2019
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows e vuoi installarci il servizio Farming Simulator Dedicated Server 2019? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.
<InlineVoucher />

## Preparazione

Serve un server basato su Windows Server 2016/2019 con almeno 4x CPU a 2.4 GHz (AMD/Intel) e almeno 2GB di RAM (DDR3/4) e 6GB di spazio libero su disco (SSD o meglio, consigliato). Il server deve girare su architettura a 64 bit.  
Inoltre, serve una GameLicense propria (non versione Steam) e un indirizzo IPv4 pubblico. GPU o scheda audio non sono necessari per il Dedicated Server.  
A seconda di quanto il server dedicato venga moddato o esteso con mod o DLC, potrebbero servire risorse aggiuntive.

## Passo 1 Acquisto della licenza digitale

Serve una versione digitale di Farming Simulator 2019, non può essere la versione Steam.  
La versione digitale si può acquistare sul [sito ufficiale di Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Dopo l’acquisto, puoi scaricare Farming Simulator online seguendo il link nella mail che riceverai da Giants: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Importante: nella mail troverai il GameKey necessario sia per il download che per l’attivazione dell’installazione.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Passo 2 Scarica Farming Simulator direttamente sul tuo server Windows

Connettiti al tuo server Windows tramite [Accesso Iniziale (RDP)](vserver-windows-userdp.md). Una volta connesso, apri il browser e vai di nuovo al [link](https://eshop.giants-software.com/downloads.php) presente nella mail. Inserisci il tuo GameKey e seleziona il download per Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

Il file verrà scaricato e dovrebbe trovarsi nella cartella download (la cartella può variare).

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Con un doppio click apri il file e avvia Setup.exe.  
Leggi e accetta i Termini di Servizio. Poi scegli l’installazione Standard o Custom, di solito Standard va benissimo.  
Infine clicca su installa e Farming Simulator 2019 verrà installato, ci vorranno alcuni minuti.

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

Quando l’installazione è finita, comparirà questo messaggio, conferma con "Finish".

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

L’installazione base è ora completata.

## Passo 3 Attivazione del gioco e configurazione del dedicated server

Ora avvia Farming Simulator. Dovresti trovare un collegamento sul desktop, altrimenti puoi lanciarlo dal menu di Windows.  
Eventuali errori su GPU mancante o simili puoi ignorarli o chiuderli con No/Cancel. Farming Simulator deve partire solo per inserire il key.

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

Quando la key viene riconosciuta, apparirà una conferma.

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Ora devi impostare o modificare username e password nel file di configurazione del Dedicated Server, così potrai accedere all’interfaccia web del server.  
Il file di configurazione si trova nella cartella di installazione standard:  
`C:\Program Files (x86)\Farming Simulator 2019` sotto il nome `"dedicatedServer.xml"`.  
I dati di login sono personalizzabili a piacere.

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Passo 4 Avvia il Farming Simulator 2019 Dedicated Server

Per avviare il dedicated server, esegui `"dedicatedServer.exe"` nella stessa cartella dove si trova `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Poi apri l’interfaccia web via `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

Effettua il login con i dati impostati/recuperati da `"dedicatedServer.xml"`.  
La configurazione è intuitiva nell’interfaccia web e puoi personalizzarla in pochi click secondo i tuoi gusti.

## Passo 5 Sblocca le porte nel firewall

Il server deve essere accessibile pubblicamente per giocare con gli amici. Per questo, devi aprire le porte nel firewall di Windows.  
Le porte 10823 e 8080 devono essere aperte per il protocollo TCP. 10823 è la porta del game server, 8080 è la porta web per l’interfaccia (da aprire solo se serve, altrimenti puoi gestire tutto localmente via RDP).  
Come aprire porte su Windows: [Port Forwarding (Firewall)](vserver-windows-port.md).

Dopo aver aperto le porte, il server sarà accessibile pubblicamente se è stato avviato.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Farming Simulator 2019 sul tuo VPS! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />