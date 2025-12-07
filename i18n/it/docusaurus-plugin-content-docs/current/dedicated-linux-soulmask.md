---
id: dedicated-linux-soulmask
title: "Dedicated Server: Configurazione Soulmask Dedicated Server su Linux"
description: "Scopri come installare e configurare un Soulmask Dedicated Server su Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Soulmask
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un Dedicated Server Linux e vuoi installarci il servizio Soulmask Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo dedicated server? Così puoi configurare i servizi dei game server con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo Dedicated Server via SSH. Se ti serve una mano, usa la nostra guida [SSH Initial Access](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, dovrai completare una configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia completamente configurato prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella directory home di `steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella del tuo utente `steam`.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ soprattutto per giochi di dimensioni più grandi. Quando finisce, vedrai un messaggio di successo che conferma l’installazione.

## Configurazione

A questo punto hai completato l’installazione del server Soulmask. Puoi fare ulteriori configurazioni modificando i file di configurazione che trovi nella directory del server.

Tutti i parametri di configurazione si possono modificare nel file **Engine.ini** che si trova nella cartella Saved.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Avvio e connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia lo script eseguibile **StartServer.sh** con questo comando:
```
/home/steam/Soulmask-Server/StartServer.sh
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Nota che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente usando la barra di ricerca in basso nella lista server e cercando: `[tuo_indirizzo_ip]:18888`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Soulmask sul tuo Dedicated Server! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come configurare il tuo nuovo game server dedicato come servizio. Questo ti offre tanti vantaggi come l’avvio automatico del server al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai altre domande o problemi, il nostro supporto è sempre disponibile per aiutarti ogni giorno!