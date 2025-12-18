---
id: fivem-esx-changejobgarages
title: "FiveM: Garage dei Lavori - Aggiunta Auto"
description: "Scopri come personalizzare ed estendere i garage dei lavori con auto extra per migliorare la tua esperienza di gioco → Scopri di più ora"
sidebar_label: Aggiungi Auto ai Garage dei Lavori
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Vuoi cambiare o aggiungere auto disponibili nei garage dei tuoi lavori? Qui sotto ti spieghiamo come fare e quali passaggi seguire!

<InlineVoucher />

## Configurazione

Le auto extra si aggiungono ai garage dei lavori tramite FTP. Per farlo, connettiti al tuo game server via FTP. Se non sai ancora come usare l’FTP, dai un’occhiata alla nostra guida su [Accesso FTP](gameserver-ftpaccess.md).

Una volta connesso via FTP, vai nella cartella delle risorse ESX e apri la cartella esx_addons. La struttura delle cartelle dovrebbe essere così: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Ora scegli, per esempio, il lavoro Ambulanza o Polizia e apri il file di configurazione `config.lua` dentro le risorse.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)

Nel file di configurazione, devi modificare la sezione `Config.AuthorizedVehicles`. Puoi cercarla con la funzione di ricerca e poi modificarla o estenderla come vuoi:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
Assicurati di mettere una virgola alla fine della riga precedente quando aggiungi nuovi veicoli, altrimenti potrebbero esserci problemi.
:::

## Conclusione

Se hai seguito tutti i passaggi, ora dovresti aver personalizzato o esteso con successo il garage dei tuoi lavori. Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />