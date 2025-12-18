---
id: vserver-linux-cs2
title: "VPS: Server Dedicato Counter-Strike 2 su Linux"
description: "Scopri come configurare velocemente e facilmente un server dedicato di Counter-Strike 2 sul tuo VPS Linux → Scopri di più ora"
sidebar_label: "Counter-Strike 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di Counter-Strike 2? Sei nel posto giusto! In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il procedimento è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare direttamente sul tuo VPS la nostra **Interfaccia ZAP GS/TS3**? Così puoi configurare i servizi dei tuoi server di gioco con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, dai un’occhiata alla nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md). Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD su Linux](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta dentro, avvia l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella del tuo utente `steam`.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 730 validate +quit
```

Abbi pazienza mentre scarica tutto, può volerci un po’ soprattutto con giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito di installare il server di Counter-Strike 2. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione di avvio.

Vai nella directory principale, poi entra nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## Registrare il Token GSL

Per permettere agli altri giocatori di connettersi al tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 730, che corrisponde a Counter-Strike 2.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.

## Avvio e Connessione al server

Ora è il momento di avviare il server. Vai nella directory principale del gioco ed esegui questo comando di avvio:
```
./cs2 -dedicated +map de_dust2
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Tieni presente che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si configura. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:2456`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server di Counter-Strike 2 sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che ti spiega come trasformare il tuo server dedicato in un servizio. Questo ti offre tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />