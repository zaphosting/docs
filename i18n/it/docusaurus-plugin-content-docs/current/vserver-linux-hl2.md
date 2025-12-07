---
id: vserver-linux-hl2
title: "VPS: Half-Life 2 Dedicated Server Linux Setup"
description: "Scopri come configurare un server dedicato Half-Life 2 sul tuo VPS Linux per un'esperienza di gioco senza intoppi → Scopri di più ora"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installare il server dedicato di Half-Life 2? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu negli esempi, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo VPS? Ti permette di configurare i servizi dei game server con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per iniziare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](vserver-linux-ssh.md). Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia configurato correttamente prima di procedere.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, avvia l’installazione con questo comando per scaricare e installare il server tramite SteamCMD direttamente come utente `steam`.
```
steamcmd +force_install_dir '/home/steam/hl2-ds' +login anonymous +app_update 232370 validate +quit
```

Abbi pazienza mentre il download procede, può richiedere un po’ di tempo per giochi di dimensioni più grandi. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai completato l’installazione del server Half-Life 2. Puoi personalizzare ulteriormente il server modificando direttamente il file di avvio.

Vai nella directory principale, poi entra nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.
```
nano /home/steam/hl2-ds/hl2mp/cfg/server.cfg
```

## Registrazione del Token GSL

Per permettere ad altri giocatori di unirsi al tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 232370, che corrisponde a Half-Life 2.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.

## Avvio e Connessione al server

Ora è il momento di avviare il server. Vai nella directory principale del gioco ed esegui questo comando di avvio:
```
./srcds_run -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Dovresti vedere comparire i log nel terminale, segno che il server è partito correttamente. Nota che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si configura. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:2456`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Half-Life 2 sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come configurare il tuo game server dedicato come servizio. Questo ti offre tanti vantaggi come avvio automatico al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />