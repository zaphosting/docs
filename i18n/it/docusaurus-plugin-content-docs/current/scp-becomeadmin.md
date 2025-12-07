---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Diventa admin sul tuo server"
description: "Scopri come assegnare i permessi di amministratore per il controllo totale del server e gestire efficacemente i ruoli nel tuo game server → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il controllo totale del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

:::info
Dagli ultimi aggiornamenti di SCP, il login con password non funziona più. Usa questa guida per aggiungere i ruoli direttamente tramite SteamID. 
:::


## Configurazione del Remote Admin Config

### Preparazione

Prima di tutto, devi trovare il tuo Steam64ID.  
Puoi usare questo tool: [SteamID Lookup](https://steamid.io/lookup).  
L’ID lo inserirai poi nel file di configurazione.

Ecco un esempio di come ottenere il tuo SteamID inserendo il link del tuo profilo:

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## Aggiungere Admin

Ora apri e modifica il file di configurazione.  
Lo trovi in "**Configs**" sotto "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

Apri il file "**config_remoteadmin.txt**" e riscrivi le righe necessarie.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

Qui crei e assegni i ruoli.  
Sostituisci "**SomeSteamId64**" davanti a "**@steam: owner**" con il tuo SteamID64 che hai trovato con lo "**steamid lookup**".

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

Puoi fare lo stesso per ogni altro utente a cui vuoi dare i permessi.  
Nel nostro esempio assegniamo i permessi a tre utenti: uno è "**owner**", gli altri due sono "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## Aggiungere Altri Ruoli per Bypassare la Password

Se vuoi più ruoli che bypassano la password del remote admin, modifica questa riga nel file:  
"**config_remoteadmin.txt**"

Trova questa sezione esatta:

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

Per aggiungere altri ruoli, scrivili separati da una virgola.  
Per esempio, per aggiungere admin e moderator per bypassare la password:

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
Per aprire la console del remote admin in game, una volta loggato nel server, premi il tasto "**M**".  
Se il server è online, devi riavviarlo perché le modifiche abbiano effetto. Se è offline, accendilo e poi apri la Remote Admin Console in game.
:::


## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore! Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />