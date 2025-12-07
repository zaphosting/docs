---
id: vserver-windows-nmrih
title: "VPS: No More Room In Hell Dedicated Server Windows Setup"
description: "Scopri come configurare rapidamente e facilmente un server di gioco dedicato No More Room In Hell sul tuo VPS o server dedicato → Scopri di più ora"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS o un server dedicato e vuoi installarci dei game server? Per esempio un No More Room In Hell Dedicated Server? Allora sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.

<InlineVoucher />

## Preparazione

Per configurare un server No More Room In Hell ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente le applicazioni dedicate dei server di giochi popolari su Steam. Puoi trovare SteamCMD sul sito ufficiale degli sviluppatori Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Dopodiché scarica il file. Otterrai un archivio **steamcmd.zip** che dovrai prima estrarre. Ti consigliamo di creare una cartella dedicata dove scompattare il file. Alla fine dovresti vedere il file **steamcmd.exe**. Eseguilo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Quando appare il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi procedere con l’installazione del server No More Room In Hell.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous**. Esegui questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria. Usa il comando `app_update 317670`. L’App ID **317670** corrisponde all’applicazione **No More Room In Hell Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Abbi pazienza mentre il download procede, può richiedere un po’ di tempo per giochi di dimensioni più grandi. Quando è finito vedrai comparire un messaggio di successo.

Per rendere il server visibile e accessibile dall’esterno, devi aprire/inoltrare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Devi aggiungere regole sia per il traffico in entrata che in uscita. Aggiungi le porte 27015-27020 per i protocolli TCP/UDP.



## Configurazione

A questo punto hai finito la configurazione base del tuo server No More Room In Hell. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione di avvio. Vai nella directory principale, poi nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## Registrazione del Token GSL

Per permettere ad altri giocatori di unirsi al tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 317670, che corrisponde a No More Room In Hell.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.



## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di avvio:

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Dovresti vedere comparire i log nella console che indicano che l’avvio è andato a buon fine. Nota che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente usando la barra di ricerca in basso nella lista server e cercando: `[tuo_indirizzo_ip]:2456`.


## Conclusione

Congratulazioni, hai installato e configurato con successo il server No More Room In Hell sul tuo VPS! Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />