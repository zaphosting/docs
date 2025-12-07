---
id: dedicated-linux-satisfactory
title: "Server Dedicato: Configurazione Server Dedicato Satisfactory su Linux"
description: "Inizia subito con l’installazione e la configurazione di un server dedicato Satisfactory sul tuo server Linux per un hosting di gioco senza intoppi → Scopri di più ora"
sidebar_label: Satisfactory
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un server dedicato Linux e vuoi installarci il server dedicato di Satisfactory? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo server dedicato? Così puoi configurare i servizi dei server di gioco con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3 qui](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo server dedicato via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD Linux](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia configurato correttamente prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella dell’utente `steam`.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server Satisfactory. Puoi personalizzare ulteriormente il server modificando i file di configurazione nella cartella del server.

Puoi regolare tutti i parametri modificando i file **Engine.ini** e **GameUserSettings.ini** che trovi nella cartella Saved.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia lo script shell **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Nota che il primo avvio può richiedere un po’ di tempo mentre tutto si configura. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:15777`.

## Conclusione

Complimenti, hai installato e configurato con successo il server Satisfactory sul tuo server dedicato! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come trasformare il tuo server di gioco dedicato in un servizio. Questo ti offre tanti vantaggi come l’avvio automatico al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre disponibile per darti una mano!