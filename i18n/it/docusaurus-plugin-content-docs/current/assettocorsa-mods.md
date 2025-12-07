---
id: assettocorsa-mods
title: "Assetto Corsa: Installare mod su un server"
description: "Scopri come configurare e personalizzare il tuo server Assetto Corsa per un'esperienza di gioco ottimale → Scopri di più ora"
sidebar_label: Installa Mod
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Collegati via FTP

Prima di poter configurare il server, devi impostare l’[Accesso via FTP](gameserver-ftpaccess.md):

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

Una volta configurato, puoi collegarti e aprire la cartella del server:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Preparazione

Per prima cosa apriamo la cartella di Assetto Corsa, puoi farlo aprendo Steam e cliccando col tasto destro su "Assetto Corsa" nella lista giochi.

Ora apri "File locali" per accedere ai file di gioco locali:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Adesso apri la cartella "server", lì troverai il file "acServerManager" che dovrai aprire.



## Imposta le Auto

Ora vai nella scheda "Cars / Entry List", qui puoi aggiungere nuove auto:


Per attivare le auto, devi mettere la spunta a sinistra

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

Al centro vedi le auto che possono essere schierate in griglia, qui puoi scegliere le auto con i colori che vuoi far apparire in gara:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
Per selezionare più auto, puoi mettere più spunte per aggiungere le diverse auto al centro.

Assicurati che tutti gli slot auto siano riempiti e che non vengano superati gli slot disponibili.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Carica la Config

Ora puoi salvare la Config con il pulsante "Save" e esportarla con "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Qui seleziona una cartella libera dove salvare i dati della config.

Ora puoi chiudere AC Server Manager e aprire la cartella in cui hai esportato le Config.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

Queste Config possono essere copiate via Drag&Drop nella cartella "cfg" del tuo server di gioco.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Carica i Contenuti del Server

Ora dobbiamo generare i contenuti per il server, così che le mod di auto e mappe vengano caricate correttamente. Per farlo clicca su "Update Server Content" in basso

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

Questo processo può richiedere qualche minuto, tutte le mappe e le auto vengono convertite in file server.

:::info
Al termine potrebbe comparire un messaggio "Could not update", non preoccuparti, non è un problema.
:::

Ora apri la cartella "Server" dove si trova AcServerManager, lì c’è una cartella "Content" che devi caricare via Drag&Drop sul tuo server Assetto Corsa, sovrascrivendo la vecchia cartella "Content":

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

Dopo aver caricato i contenuti, le mod auto saranno installate e attive dopo il riavvio del server.

<InlineVoucher />