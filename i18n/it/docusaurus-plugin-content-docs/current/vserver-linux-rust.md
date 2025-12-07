---
id: vserver-linux-rust
title: "VPS: Rust Dedicated Server Linux Setup"
description: "Scopri come configurare un server Rust Dedicated sul tuo VPS Linux usando SteamCMD per un hosting di gioco senza intoppi → Scopri di più ora"
sidebar_label: Rust
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Linux e vuoi installare il servizio Rust Dedicated server? Sei nel posto giusto. In questa guida ti spiegheremo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare direttamente sul tuo VPS la nostra **ZAP GS/TS3 Interface**, che ti permette di configurare i servizi di gioco con integrazione diretta alla tua dashboard ZAP-Hosting in pochi click? Scopri di più sulla [GS/TS3 Interface qui](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, dovrai completare una configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia completamente configurato prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella directory home di `steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella di `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Abbi pazienza mentre il download procede, può richiedere un po’ di tempo per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server Rust. Puoi configurare ulteriormente il server tramite i file di configurazione nella cartella del server.

Vai nella directory principale e crea un file `.sh`. Questo sarà lo script bash per avviare il server e modificare i parametri di configurazione.
```
nano /home/steam/Rust-Server/start_server.sh
```

Ora inserisci questo contenuto nel file bash. Qui ci sono i parametri base più usati. Se vuoi aggiungerne altri o approfondire, ti consigliamo di dare un’occhiata alla [wiki ufficiale di Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) che spiega tutte le opzioni disponibili.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Salva il file con `CTRL+X`, poi `Y` e `Invio`. Infine, per rendere eseguibile lo script senza sudo, dai il permesso di esecuzione con questo comando:
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Avvio e connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia lo script **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Dovresti vedere i log nel terminale che indicano che il server si è avviato correttamente. Nota che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. Se tutto va bene, il server sarà visibile nella lista server o potrai connetterti direttamente cercando: `[tuo_indirizzo_ip]:28015`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Rust sul tuo VPS! Il passo successivo? Dai un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che ti spiega come trasformare il tuo server dedicato in un servizio. Questo ti offre tanti vantaggi come l’avvio automatico al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />