---
id: vserver-windows-dods
title: "VPS: Day of Defeat: Source Dedicated Server Windows Setup"
description: "Scopri come configurare rapidamente e facilmente un server dedicato Day of Defeat: Source sul tuo VPS o server dedicato → Scopri di più ora"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS o un server dedicato e vuoi installarci dei game server? Per esempio un Day of Defeat: Source Dedicated Server? Sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.

<InlineVoucher />

## Preparazione

Per configurare un server Day of Defeat: Source ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente i server dedicati dei giochi più popolari su Steam. Puoi trovare SteamCMD sul sito ufficiale degli sviluppatori Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Dopodiché scarica il file. Otterrai un archivio **steamcmd.zip** che dovrai estrarre. Ti consigliamo di creare una cartella dedicata dove scompattare il file. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Quando vedi il messaggio **Loading Steam API.... OK** significa che tutto è andato a buon fine e puoi partire con l’installazione del server Day of Defeat: Source.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous**. Digita questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria. Usa il comando `app_update 232290`. L’App ID **232290** corrisponde al **Day of Defeat: Source Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Abbi pazienza mentre il download procede, può richiedere un po’ di tempo per giochi di dimensioni più grandi. Quando finisce, vedrai comparire un messaggio di successo.

Per rendere il server visibile e accessibile dall’esterno, devi aprire/inoltrare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Devi aggiungere regole sia per il traffico in entrata che in uscita. Aggiungi le porte: 27015-27020 per i protocolli TCP/UDP.



## Configurazione

A questo punto hai finito la configurazione base del tuo server Day of Defeat: Source. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione. Vai nella directory principale, poi nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.

```
../steamapps/common/dod-ds/dod/cfg/server.cfg
```

## Registrazione del Token GSL

Per permettere ad altri giocatori di connettersi al tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 232290, che corrisponde a Day of Defeat: Source.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.



## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di avvio:

```
start srcds.exe -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Dovresti vedere comparire i log nella console che indicano che il server si è avviato correttamente. Ricorda che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente usando la barra di ricerca in basso nella lista server cercando: `[tuo_indirizzo_ip]:2456`.


## Conclusione

Congratulazioni, hai installato e configurato con successo il server Day of Defeat: Source sul tuo VPS! Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />