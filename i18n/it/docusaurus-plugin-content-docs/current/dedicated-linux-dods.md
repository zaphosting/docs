---
id: dedicated-linux-dods
title: "Dedicated Server: Day of Defeat: Source Dedicated Server Linux Setup"
description: "Scopri come configurare rapidamente e facilmente un server dedicato Day of Defeat: Source sul tuo VPS Linux → Scopri di più ora"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di Day of Defeat: Source? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu negli esempi, ma il processo è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo VPS? Così puoi configurare i servizi dei game server con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](dedicated-linux-ssh.md). Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia configurato correttamente prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella home directory di `steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella dell’utente `steam`.
```
steamcmd +force_install_dir '/home/steam/dod-ds' +login anonymous +app_update 232290 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ soprattutto con giochi di dimensioni più grandi. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito di installare il server Day of Defeat: Source. Puoi fare ulteriori configurazioni modificando direttamente il file di avvio.

Vai nella directory principale, poi nella cartella cfg e apri il file `server.cfg`. Qui puoi modificare le opzioni del server.
```
nano /home/steam/dod-ds/dod/cfg/server.cfg
```

## Registrare il Token GSL

Per permettere ad altri giocatori di entrare nel tuo server, devi generare e inserire un Game Server Login Token (GSLT). Questo token autentica il tuo server su Steam. Per crearne uno, vai su http://steamcommunity.com/dev/managegameservers e genera un token usando l’ID gioco 232290, che corrisponde a Day of Defeat: Source.

Una volta ottenuto il token, inseriscilo nei parametri di avvio del server con `+sv_setsteamaccount <TOKEN>`.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco ed esegui questo comando di avvio:
```
./srcds_run -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Dovresti vedere comparire i log nel terminale, segno che il server è partito correttamente. Nota che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:2456`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Day of Defeat: Source sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come trasformare il tuo game server dedicato in un servizio. Questo ti offre tanti vantaggi come avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂