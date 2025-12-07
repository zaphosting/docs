---
id: empyrion-becomeadmin
title: "Empyrion: Diventa Admin"
description: "Scopri come assegnare i permessi di amministratore per il controllo completo del server e gestire efficacemente le funzioni di gioco → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Trova il tuo Steam64ID

Per prima cosa, devi trovare il tuo Steam64ID.  
Puoi usare questo tool: [SteamID Lookup](https://steamid.io/lookup).  
L’ID lo inserirai poi nel file di configurazione.

Ecco un esempio di come ottenere il tuo steamid inserendo il link al tuo profilo:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## Configura adminconfig

Il file "**adminconfig.yaml**" da modificare si trova nella cartella "**Saves**".  
Per aprire questa cartella, segui le istruzioni per l’[Accesso via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

Questi sono i valori standard che troverai:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

Ora devi inserire il Steam64ID che hai trovato prima dopo "**Id:**".

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

Con "**Permission**" imposti il livello di admin da assegnare all’utente.  
I livelli sono:

Permission | Rank
-----|-------
3 | gamemaster
6 | moderator
9 | admin


## Conclusione

Complimenti, hai configurato con successo i permessi di amministratore! Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />