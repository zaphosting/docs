---
id: server-linux-csgo
title: "CS:GO Dedicated Server Linux Setup"
description: "Scopri come configurare un server dedicato CS:GO sul tuo server Linux per un hosting di gioco senza intoppi → Scopri di più ora"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS/Dedicated Server Linux e vuoi installarci il server dedicato CS:GO? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo VPS/Dedicated Server? Così puoi configurare i servizi dei game server con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo VPS/Dedicated Server via SSH. Se ti serve una mano, usa la nostra guida [SSH Initial Access](dedicated-linux-ssh.md). Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia completamente configurato prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella directory home di `steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che avvia SteamCMD e installa direttamente nella cartella del tuo utente `steam`.
```
steamcmd +force_install_dir '/home/steam/CS:GO-ds' +login anonymous +app_update 730 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di successo che conferma tutto.

## Configurazione

A questo punto hai finito di installare il server CS:GO. Puoi personalizzare ulteriormente il server modificando direttamente il file di avvio.

Vai nella directory principale, poi entra nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.
```
nano /home/steam/CS:GO-ds/game/csgo/cfg/server.cfg
```

## Registrare il Token GSL

Per far entrare altri giocatori sul tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco **4465480**, che corrisponde al nuovo CS:GO Standalone.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella directory principale del gioco ed esegui questo comando di avvio:
```
./CS:GO -dedicated +map de_dust2
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Nota che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:2456`.

## Conclusione

Complimenti, hai installato e configurato con successo il server CS:GO sul tuo VPS/Dedicated Server! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come configurare il tuo nuovo game server dedicato come servizio. Questo ti dà tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂