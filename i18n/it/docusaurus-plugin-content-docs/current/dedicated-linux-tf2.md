---
id: dedicated-linux-tf2
title: "Server Dedicato: Configurazione Server Dedicato Team Fortress 2 su Linux"
description: "Scopri come configurare rapidamente ed efficacemente un server dedicato Team Fortress 2 sul tuo VPS Linux → Scopri di più ora"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di Team Fortress 2? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il procedimento è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare direttamente sul tuo VPS la nostra **Interfaccia ZAP GS/TS3**, che ti permette di configurare i servizi dei server di gioco con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click? Scopri di più sull’[Interfaccia GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, usa la nostra guida [Accesso SSH Iniziale](dedicated-linux-ssh.md). Se è la prima volta che usi SteamCMD sul tuo server Linux, dovrai completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD su Linux](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia configurato correttamente prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato:
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che avvia SteamCMD e installa il server direttamente nella cartella dell’utente `steam`:
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ soprattutto per giochi di dimensioni più grandi. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito di installare il server Team Fortress 2. Puoi personalizzare ulteriormente il server modificando direttamente il file di configurazione di avvio.

Vai nella directory principale, poi entra nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## Registrare il Token GSL

Per permettere agli altri giocatori di connettersi al tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 232250, che corrisponde a Team Fortress 2.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di avvio:
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Dovresti vedere comparire i log nel terminale, segno che il server è partito correttamente. Nota che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nel server list con la barra in basso: `[tuo_indirizzo_ip]:2456`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Team Fortress 2 sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come trasformare il tuo server dedicato in un servizio. Questo ti offre tanti vantaggi come l’avvio automatico al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂