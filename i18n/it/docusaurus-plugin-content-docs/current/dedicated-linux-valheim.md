---
id: dedicated-linux-valheim
title: "Server Dedicato: Configurazione Valheim Dedicated Server su Linux"
description: "Scopri come configurare un Valheim Dedicated Server su Linux per ospitare il tuo gioco in modo efficiente e ottimizzare le prestazioni del server → Scopri di più ora"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un server dedicato Linux e vuoi installarci il servizio Valheim Dedicated Server? Sei nel posto giusto! In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il procedimento è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo server dedicato? Così puoi configurare i servizi dei tuoi game server con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo server dedicato via SSH. Se ti serve una mano, usa la nostra guida [SSH Initial Access](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che avvia SteamCMD e installa Valheim direttamente nella cartella dell’utente `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ soprattutto con giochi più pesanti. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server Valheim. Puoi personalizzare ulteriormente il server modificando direttamente il file di avvio.

Vai nella directory principale e apri il file `.sh`. Qui puoi cambiare i parametri.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia lo script **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Tieni presente che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:2456`.

:::info
Se non riesci a connetterti e vedi errori `PlayFab` in console, potrebbe essere necessario disabilitare il supporto crossplay, perché è un problema noto nella versione Linux. Per farlo, apri `nano /home/steam/Valheim-Server/start_server.sh` e rimuovi il flag `-crossplay`.

Se invece ti serve il crossplay, un’alternativa è installare la versione Windows e usare **Wine** come layer di compatibilità. Segui la nostra guida rapida [Wine Compatibility Layer Setup](dedicated-linux-wine.md) per configurarlo. Quando è pronto, puoi installare la versione Windows del server Valheim via SteamCMD con:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Una volta installato, avvia la versione Windows tramite Wine con questo comando: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Conclusione

Complimenti, hai installato e configurato con successo il server Valheim sul tuo Dedicated Server! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come trasformare il tuo game server dedicato in un servizio. Questo ti offre tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!