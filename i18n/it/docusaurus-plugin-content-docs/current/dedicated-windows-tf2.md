---
id: dedicated-windows-tf2
title: "Dedicated Server: Team Fortress 2 Dedicated Server Windows Setup"
description: "Scopri come configurare un server dedicato Team Fortress 2 sul tuo VPS o server dedicato in modo rapido e semplice → Scopri di più ora"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS o un server dedicato e vuoi installarci dei game server? Per esempio un Team Fortress 2 Dedicated Server? Allora sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.



## Preparazione

Per configurare un server Team Fortress 2 ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare facilmente e velocemente le applicazioni dedicate ai server dei giochi più popolari su Steam. Puoi trovare SteamCMD sul sito ufficiale degli sviluppatori Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Dopodiché scarica il file. Otterrai un archivio **steamcmd.zip** che dovrai estrarre. Ti consigliamo di creare una cartella dedicata dove scompattare il file. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi partire con l’installazione del server Team Fortress 2.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous**. Digita questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria. Usa il comando `app_update 232250`. L’App ID **232250** corrisponde all’applicazione **Team Fortress 2 Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Abbi pazienza mentre il download procede, può volerci un po’ per giochi di dimensioni più grandi. Quando finisce vedrai un messaggio di successo.

Per rendere il server visibile e accessibile dall’esterno, devi aprire/inoltrare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Devi aggiungere regole sia per il traffico in entrata che in uscita. Aggiungi le porte: 27015-27020 per i protocolli TCP/UDP.



## Configurazione

A questo punto hai finito la configurazione base del tuo server Team Fortress 2. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione di avvio. Vai nella directory principale, poi nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.

```
../steamapps/common/tf2-ds/tf2/tf/cfg/server.cfg
```

## Registrare il Token GSL

Per permettere agli altri giocatori di unirsi al tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 232250, che corrisponde a Team Fortress 2.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.



## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di avvio:

```
start srcds.exe -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Dovresti vedere comparire i log nella console che indicano che il server si è avviato correttamente. Tieni presente che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente usando la barra di ricerca in basso nella lista server cercando: `[tuo_indirizzo_ip]:2456`.


## Conclusione

Congratulazioni, hai installato e configurato con successo il server Team Fortress 2 sul tuo VPS! Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂