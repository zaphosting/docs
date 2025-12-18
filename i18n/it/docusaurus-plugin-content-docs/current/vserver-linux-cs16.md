---
id: vserver-linux-cs16
title: "VPS: Counter-Strike 1.6 Dedicated Server Linux Setup"
description: "Scopri come configurare rapidamente ed efficacemente un server dedicato Counter-Strike 1.6 sul tuo VPS Linux → Scopri di più ora"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di Counter-Strike 1.6? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu negli esempi, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare direttamente sul tuo VPS la nostra **ZAP GS/TS3 Interface**, che ti permette di configurare i servizi dei game server con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click? Scopri di più sulla [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](vserver-linux-ssh.md). Se è la prima volta che usi SteamCMD sul tuo server Linux, dovrai completare una configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia completamente configurato prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando, che usa SteamCMD per installare direttamente nella cartella dell’utente `steam`.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 90 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ per giochi di dimensioni più grandi. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito di installare il server Counter-Strike 1.6. Puoi personalizzare ulteriormente il server modificando direttamente il file di avvio.

Vai nella directory principale, poi entra nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## Registrare il Token GSL

Per permettere ad altri giocatori di entrare nel tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 90, che corrisponde a Counter-Strike 1.6.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.

## Avviare e connettersi al server

Ora è il momento di avviare il server. Vai nella directory principale del gioco ed esegui questo comando di avvio:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

Dovresti vedere comparire i log nel terminale, segno che il server è partito correttamente. Tieni presente che il primo avvio può richiedere un po’ di tempo mentre tutto si configura. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:2456`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Counter-Strike 1.6 sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come configurare il tuo nuovo server dedicato come servizio. Questo ti offre tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />