---
id: vserver-windows-cs16
title: "VPS: Server Dedicato Counter-Strike 1.6 su Windows"
description: "Scopri come configurare facilmente un server dedicato Counter-Strike 1.6 sul tuo VPS o server dedicato → Scopri di più ora"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS o un server dedicato e vuoi installarci dei game server? Per esempio un server dedicato Counter-Strike 1.6? Sei nel posto giusto! Qui ti spieghiamo passo passo come installare questo servizio sul tuo server.

<InlineVoucher />

## Preparazione

Per configurare un server Counter-Strike 1.6 ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente i server dedicati dei giochi più popolari su Steam. Puoi trovare SteamCMD sul sito ufficiale Valve per sviluppatori: https://developer.valvesoftware.com/wiki/SteamCMD.

Dopo scarichi il file, che sarà uno **steamcmd.zip**, da estrarre. Ti consigliamo di creare una cartella dedicata dove scompattare il file. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione finisca.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Quando vedi il messaggio **Loading Steam API.... OK** significa che tutto è andato a buon fine e puoi partire con l’installazione del server Counter-Strike 1.6.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login con l’utente **anonymous**. Digita questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria, che si fa con il comando `app_update 90`. L’App ID **90** corrisponde al **server dedicato di Counter-Strike 1.6**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Abbi pazienza mentre il download procede, può volerci un po’ per giochi più grandi. Quando finisce vedrai un messaggio di conferma.

Per rendere il server visibile e accessibile dall’esterno, devi aprire/forwardare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Devi aggiungere regole sia per il traffico in entrata che in uscita, come mostrato. Le porte da aprire sono: 27015-27020 per i protocolli TCP/UDP.



## Configurazione

A questo punto hai finito la configurazione base del server Counter-Strike 1.6. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione. Vai nella cartella principale, poi nella directory cfg e apri il file `server.cfg`. Qui puoi cambiare le opzioni del server.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```

## Registrare il Token GSL

Per far entrare altri giocatori nel tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 90, che corrisponde a Counter-Strike 1.6.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.



## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di avvio:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

Dovresti vedere comparire i log nella console che indicano l’avvio riuscito. Tieni presente che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente usando la barra di ricerca in basso nella lista server e cercando: `[tuo_indirizzo_ip]:2456`.


## Conclusione

Congratulazioni, hai installato e configurato con successo il server Counter-Strike 1.6 sul tuo VPS! Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />