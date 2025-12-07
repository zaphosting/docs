---
id: dedicated-linux-l4d2
title: "Server Dedicato: Setup Server Dedicato Left 4 Dead 2 su Linux"
description: "Scopri come configurare un server dedicato Left 4 Dead 2 sul tuo VPS Linux per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di Left 4 Dead 2? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il procedimento è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo VPS? Ti permette di configurare i servizi dei server di gioco con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, usa la nostra guida [Accesso SSH Iniziale](dedicated-linux-ssh.md). Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD Linux](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che avvia SteamCMD e installa il server direttamente nella cartella `l4d2-ds` sotto l’utente `steam`.
```
steamcmd +force_install_dir '/home/steam/l4d2-ds' +login anonymous +app_update 222840 validate +quit
```

Abbi pazienza mentre scarica tutto, può volerci un po’ soprattutto con giochi pesanti. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito di installare il server Left 4 Dead 2. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione di avvio.

Vai nella directory principale, poi entra nella cartella `cfg` e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.
```
nano /home/steam/l4d2-ds/l4d2/cfg/server.cfg
```

## Registrare il Token GSL

Per far entrare altri giocatori nel tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 222840, che corrisponde a Left 4 Dead 2.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di lancio:
```
./srcds_run -console -game left4dead2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Tieni presente che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nel browser server con la barra in basso e inserendo: `[tuo_indirizzo_ip]:2456`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Left 4 Dead 2 sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come trasformare il tuo server dedicato in un servizio. Questo ti offre tanti vantaggi come l’avvio automatico al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂