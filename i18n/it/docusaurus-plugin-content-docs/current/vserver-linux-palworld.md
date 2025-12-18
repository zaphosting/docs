---
id: vserver-linux-palworld
title: "VPS: Palworld Dedicated Server Linux Setup"
description: "Scopri come installare e gestire un server dedicato Palworld sul tuo VPS Linux in modo efficiente → Scopri di più ora"
sidebar_label: Palworld
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di Palworld? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare direttamente sul tuo VPS la nostra **Interfaccia ZAP GS/TS3**, che ti permette di configurare servizi di game server con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click? Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, dovrai completare una configurazione iniziale. Segui la nostra guida [Setup SteamCMD Linux](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia configurato correttamente prima di andare avanti.

## Installazione

Inizia loggandoti come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta dentro, avvia l’installazione con questo comando, che usa SteamCMD per installare direttamente nella cartella del tuo utente `steam`.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server Palworld. Puoi personalizzare ulteriormente il server modificando il file di configurazione che trovi nella cartella del server.

Prima di modificare, crea una copia del file di configurazione di default e spostala nella cartella dei salvataggi.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Ora puoi modificare i parametri principali aprendo il file **PalWorldSettings.ini** appena copiato.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Dai un’occhiata alla nostra guida di [Configurazione Server Palworld](palworld-configuration.md) per scoprire tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

È ora di avviare il server. Vai nella cartella principale del gioco e lancia lo script **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

Vedrai comparire i log nel terminale, incluso il log della versione del gioco, che indica che il server è partito correttamente. Se tutto va come previsto, il server sarà visibile nella lista server. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:8211`.

## Conclusione

Complimenti, hai installato e configurato con successo il server Palworld sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come trasformare il tuo game server dedicato in un servizio. Questo ti offre tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />