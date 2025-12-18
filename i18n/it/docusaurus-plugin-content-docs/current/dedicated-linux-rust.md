---
id: dedicated-linux-rust
title: "Server Dedicato: Configurazione Rust Dedicated Server su Linux"
description: "Scopri come configurare un Rust Dedicated Server su Linux per ospitare il tuo gioco in modo efficiente e ottimizzare le prestazioni del server → Scopri di più ora"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un Server Dedicato Linux e vuoi installare il servizio Rust Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo server dedicato? Ti permette di configurare i servizi del game server con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface qui](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo Server Dedicato via SSH. Se ti serve una mano, usa la nostra guida [SSH Initial Access](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, dovrai completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia configurato correttamente prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella home directory di `steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando, che usa SteamCMD per installare direttamente nella cartella del tuo utente `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ soprattutto per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server Rust. Puoi fare ulteriori configurazioni tramite i file di configurazione nella directory del server.

Vai nella directory principale e crea un file `.sh`. Questo sarà lo script bash per avviare il server e modificare i parametri di configurazione.
```
nano /home/steam/Rust-Server/start_server.sh
```

Ora inserisci questo contenuto nel file bash. Nel comando ci sono i parametri base più usati. Se vuoi aggiungerne altri o approfondire, ti consigliamo di dare un’occhiata alla [wiki ufficiale di Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) che spiega tutte le opzioni disponibili.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Salva il file con `CTRL+X`, poi `Y` e `Invio`. Infine, per rendere eseguibile lo script senza sudo, dai il permesso di esecuzione con questo comando:
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia lo script **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Tieni presente che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. Se tutto va bene, il server sarà visibile nella lista server. In alternativa, puoi connetterti direttamente cercando: `[tuo_indirizzo_ip]:28015`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Rust sul tuo Server Dedicato! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come configurare il tuo game server dedicato come servizio. Questo ti offre tanti vantaggi come avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!