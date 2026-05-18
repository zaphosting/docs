---
id: server-windows-csgo
title: "CS:GO Dedicated Server Windows Setup"
description: "Scopri come configurare rapidamente ed efficacemente un server dedicato CS:GO sul tuo server → Scopri di più ora"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS/Server Dedicato e vuoi installarci dei game server? Per esempio un server dedicato CS:GO? Allora sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.



## Preparazione

Per configurare un server CS:GO ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente le applicazioni VPS/Server Dedicati dei giochi Steam più popolari. Puoi scaricare SteamCMD dal sito ufficiale Valve per sviluppatori: https://developer.valvesoftware.com/wiki/SteamCMD. 

Dopo scaricherai il file **steamcmd.zip**, che va prima estratto. Ti consigliamo di creare una cartella dedicata dove decomprimerlo. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi partire con l’installazione del server CS:GO.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous** con questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria, che si fa con il comando `app_update 730`. L’App ID **730** è quello del **CS:GO Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Abbi pazienza mentre il download procede, può volerci un po’ per giochi di dimensioni più grandi. Quando finisce, vedrai un messaggio di conferma.

Per rendere il server visibile e accessibile dall’esterno, devi aprire/forwardare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Devi aggiungere regole sia per il traffico in entrata che in uscita, come mostrato. Le porte da aprire sono: 27015-27020 per i protocolli TCP/UDP.



## Configurazione

A questo punto hai finito la configurazione base del server CS:GO. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione. Vai nella directory principale, poi nella cartella cfg e apri il file `server.cfg`. Qui puoi settare le opzioni del server.

```
../steamapps/common/CS:GO-ds/game/csgo/cfg/server.cfg
```

## Registrare il Token GSL

Per far entrare altri giocatori sul tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco **4465480**, che corrisponde al nuovo CS:GO Standalone.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`. 



## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di lancio:

```
.\CS:GO.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

Dovresti vedere comparire dei log nel prompt dei comandi che indicano che l’avvio è andato a buon fine. Ricorda che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:2456`.


## Conclusione

Congratulazioni, hai installato e configurato con successo il server CS:GO sul tuo VPS/Server Dedicato! Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂