---
id: terraria-tmodloader-installmod
title: "Terraria: Installazione delle mod (tModLoader)"
description: "Scopri come installare e attivare facilmente le mod di tModLoader per Terraria e potenziare la tua esperienza di gioco → Scopri di più ora"
sidebar_label: Installa mod (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Installazione delle mod tramite tModLoader

Il tModLoader per Terraria è una mod fondamentale che permette di caricare mod sul tuo server Terraria. L’installazione avviene tramite drag & drop e con una sola modifica sul server, quindi è super semplice e fatta in pochi minuti.


## Installazione di tModLoader sul tuo PC

Se non hai ancora installato tModLoader, puoi scaricarlo gratuitamente direttamente da Steam. Cerca semplicemente tModLoader nello Steam Store o usa questo link: [tModLoader nello Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

Dopo il download e l’installazione, puoi avviare tModLoader direttamente da Steam.

## Aggiunta delle mod sul tuo PC

Una volta nel menu principale, apri la cartella delle mod cliccando su **Mods**, poi su **Manage Mods** e infine su **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

Nella cartella che si apre, di default si trova in **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods**, puoi mettere le mod che vuoi.
In questo esempio stiamo installando la Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
Una mod deve sempre avere l’estensione **.tmod**, altrimenti il server non la caricherà!
:::

Poi puoi chiudere la cartella, cliccare su **Back** nel gioco e poi su **Mods**: 

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

Ora vedrai la mod aggiunta, che puoi attivare cliccando su **Disabled**:

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

Per attivare la mod, clicca su **Reload Mods**, poi puoi chiudere il gioco e procedere con l’installazione della mod sul server.


## Installazione delle mod sul tuo server

Per installare la mod sul server, connettiti via FTP al tuo server, qui trovi come fare: [Accesso via FTP](gameserver-ftpaccess.md)

Naviga nella directory: /g******/terraria/mods/ e carica lì il file **.tmod** che hai usato prima:

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
Se non trovi il file **enabled.json**, avvia prima il server, così si creerà. In alternativa, puoi crearlo tu manualmente.
:::

Apri il file **enabled.json** con **Click destro > Modifica** e aggiungi il nome della tua mod, che dovrebbe apparire così:

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

Se vuoi aggiungere più mod, fallo così: 

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
Ricorda di mettere una virgola dopo ogni nome di mod, tranne dopo l’ultima!
:::

Ora puoi chiudere la connessione FTP, avviare il server e connetterti con tModLoader scaricato da Steam.

Premendo **ESC**, poi cliccando su **Settings** e infine su **Mod Configuration** puoi vedere le mod caricate sul server:

<InlineVoucher />