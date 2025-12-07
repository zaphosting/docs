---
id: vserver-windows-hl2
title: "VPS: Configurazione Server Dedicato Half-Life 2 su Windows"
description: "Scopri come configurare facilmente e velocemente un server dedicato Half-Life 2 sul tuo VPS o server dedicato → Scopri di più ora"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS o un server dedicato e vuoi installarci dei game server? Per esempio un server dedicato Half-Life 2? Sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.

<InlineVoucher />

## Preparazione

Per configurare un server Half-Life 2 ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente i server dedicati dei giochi Steam più popolari. Puoi trovare SteamCMD sul sito ufficiale Valve per sviluppatori: https://developer.valvesoftware.com/wiki/SteamCMD.

Dopo scaricato, otterrai il file **steamcmd.zip** che va prima estratto. Ti consigliamo di creare una cartella dedicata dove scompattare il file. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi partire con l’installazione del server Half-Life 2.



## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login con l’utente **anonymous**. Digita il comando: `login anonymous`

Il passo successivo è l’installazione vera e propria, che si fa con il comando `app_update 232370`. L’App ID **232370** corrisponde all’applicazione **Half-Life 2 Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Abbi pazienza mentre il download procede, può richiedere un po’ di tempo per giochi di dimensioni più grandi. Quando finisce, vedrai un messaggio di successo.

Per rendere il server visibile e accessibile dall’esterno, devi aprire/inoltrare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Devi aggiungere regole sia per il traffico in entrata che in uscita. Aggiungi le porte 27015-27020 per i protocolli TCP/UDP.



## Configurazione

A questo punto hai completato la configurazione base del tuo server Half-Life 2. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione di avvio. Vai nella directory principale, poi nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.

```
../steamapps/common/hl2-ds/hl2mp/cfg/server.cfg
```

## Registrare il Token GSL

Per permettere ad altri giocatori di connettersi al tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 232370, che corrisponde a Half-Life 2.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.



## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di avvio:

```
start srcds.exe -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Dovresti vedere comparire i log nella console che indicano che il server è partito correttamente. Ricorda che il primo avvio potrebbe richiedere un po’ di tempo per completare tutte le configurazioni. In alternativa, puoi connetterti direttamente usando la barra di ricerca in basso nella lista server cercando: `[tuo_indirizzo_ip]:2456`.


## Conclusione

Congratulazioni, hai installato e configurato con successo il server Half-Life 2 sul tuo VPS! Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />