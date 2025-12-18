---
id: dedicated-linux-avorion
title: "Server Dedicato: Configurazione Avorion Dedicated Server su Linux"
description: "Scopri come installare e configurare il server dedicato Avorion sul tuo VPS Linux per un hosting di gioco senza intoppi → Scopri di più ora"
sidebar_label: Avorion
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Linux e vuoi installare il servizio Avorion Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo VPS? Così puoi configurare i servizi dei tuoi game server con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD su Linux](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che avvia SteamCMD e installa Avorion direttamente nella cartella dell’utente `steam`.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Abbi pazienza mentre scarica tutto, può volerci un po’ soprattutto con giochi pesanti. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server Avorion. Puoi configurare le impostazioni del server modificando il file **startserver.sh** che hai copiato prima. Aprilo con `nano /home/steam/Avorion-Server/startserver.sh` e personalizza i parametri come vuoi.

Per modificare parametri specifici del mondo di gioco, puoi editare il file di configurazione **server.ini** che si trova in ogni salvataggio della galassia. Questi file sono nella home dell’utente (di solito `steam`) e puoi gestirli con questi comandi:
```
# Visualizza i salvataggi attuali
ls /home/steam/.avorion/galaxies

# Modifica la configurazione di un salvataggio
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e ti consigliamo di creare una copia del file batch di esempio.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Puoi modificare questo file se vuoi. Quando sei pronto, avvia il server con il comando:
```
/home/steam/Avorion-Server/startserver.sh
```

Vedrai comparire i log nel terminale, segno che il server sta partendo. La prima volta potrebbe volerci un po’ perché si sta configurando tutto, ma alla fine vedrai `Server startup complete.` nella console. Ora puoi connetterti al server direttamente dal browser in-game inserendo IP e porta del server (di default 27000).

## Conclusione

Complimenti, hai installato e configurato con successo il server Avorion sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che ti spiega come trasformare il tuo game server dedicato in un servizio di sistema. Così potrai godere di avvio automatico al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!