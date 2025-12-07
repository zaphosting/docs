---
id: dedicated-windows-cs2
title: "Server Dedicato: Setup Server Dedicato Counter-Strike 2 su Windows"
description: "Scopri come configurare rapidamente e facilmente un server dedicato Counter-Strike 2 sul tuo VPS o server dedicato → Scopri di più ora"
sidebar_label: "Counter-Strike 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS o un server dedicato e vuoi installarci dei game server? Per esempio un server dedicato di Counter-Strike 2? Allora sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.



## Preparazione

Per configurare un server Counter-Strike 2 ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente i server dedicati dei giochi più popolari su Steam. Puoi trovare SteamCMD sul sito ufficiale degli sviluppatori Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Dopodiché scarica il file. Otterrai un archivio **steamcmd.zip** che va prima estratto. Ti consigliamo di creare una cartella dedicata dove scompattare il file. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Quando vedi il messaggio **Loading Steam API.... OK** significa che tutto è andato a buon fine e puoi partire con l’installazione del server Counter-Strike 2.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous**. Esegui questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria. Usa il comando `app_update 730`. L’App ID **730** corrisponde all’applicazione **Counter-Strike 2 Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Abbi pazienza mentre il download procede, può volerci un po’ per giochi di grandi dimensioni. Quando finisce vedrai comparire un messaggio di successo.

Per rendere il server visibile e accessibile dall’esterno, devi aprire/forwardare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Devi aggiungere regole sia per il traffico in entrata che in uscita. Aggiungi le porte: 27015-27020 per i protocolli TCP/UDP.



## Configurazione

A questo punto hai completato la configurazione base del tuo server Counter-Strike 2. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione di avvio. Vai nella directory principale del server, poi nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.

```
../steamapps/common/cs2-ds/game/csgo/cfg/server.cfg
```

## Registrare il Token GSL

Per permettere ad altri giocatori di connettersi al tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 730, che corrisponde a Counter-Strike 2.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.



## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di avvio:

```
.\cs2.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

Dovresti vedere comparire dei log nel prompt dei comandi che indicano che il server è partito correttamente. Nota che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente usando la barra di ricerca in basso nella lista server e cercando: `[tuo_indirizzo_ip]:2456`.


## Conclusione

Congratulazioni, hai installato e configurato con successo il server Counter-Strike 2 sul tuo VPS! Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂