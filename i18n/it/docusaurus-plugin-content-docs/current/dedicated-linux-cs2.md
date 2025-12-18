---
id: dedicated-linux-cs2
title: "Dedicated Server: Counter-Strike 2 Dedicated Server Linux Setup"
description: "Scopri come configurare un server dedicato Counter-Strike 2 sul tuo VPS Linux per un hosting di gioco senza intoppi → Scopri di più ora"
sidebar_label: "Counter-Strike 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di Counter-Strike 2? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo VPS? Così puoi configurare i servizi dei server di gioco con integrazione diretta al tuo pannello ZAP-Hosting in pochi click! Scopri di più sulla [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](dedicated-linux-ssh.md). Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia configurato correttamente prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella del tuo utente `steam`.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 730 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ soprattutto con giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito di installare il server di Counter-Strike 2. Puoi personalizzare ulteriormente il server modificando direttamente il file di avvio.

Vai nella directory principale, poi entra nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## Registrare il Token GSL

Per permettere ad altri giocatori di entrare nel tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 730, che corrisponde a Counter-Strike 2.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di avvio:
```
./cs2 -dedicated +map de_dust2
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Tieni presente che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nel server list con la barra in basso: `[tuo_indirizzo_ip]:2456`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server di Counter-Strike 2 sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come trasformare il tuo server dedicato in un servizio. Questo ti offre tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione semplice, accesso ai log e molto altro!

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile tutti i giorni per aiutarti! 🙂