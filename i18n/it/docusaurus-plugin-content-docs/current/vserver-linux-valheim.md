---
id: vserver-linux-valheim
title: "VPS: Configurazione Server Dedicato Valheim su Linux"
description: "Scopri come configurare un server dedicato Valheim sul tuo VPS Linux per un gameplay fluido e una gestione facile del server → Scopri di più ora"
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installare il server dedicato Valheim? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il procedimento è molto simile anche su altre distribuzioni.

:::tip
Lo sapevi che puoi installare direttamente sul tuo VPS la nostra **Interfaccia ZAP GS/TS3**, che ti permette di configurare i server di gioco con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click? Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD Linux](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, avvia l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella dell’utente `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ soprattutto con giochi pesanti. Quando finisce, vedrai un messaggio di conferma.

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

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Nota che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:2456`.

:::info
Se non riesci a connetterti e vedi errori `PlayFab` in console, potrebbe essere necessario disabilitare il supporto crossplay, un problema noto sulla versione Linux. Per farlo, apri `nano /home/steam/Valheim-Server/start_server.sh` e rimuovi il flag `-crossplay`.

Se invece ti serve il crossplay, una soluzione alternativa è installare la versione Windows e usare **Wine** come layer di compatibilità. Segui la nostra guida rapida [Setup Wine Compatibility Layer](vserver-linux-wine.md) per configurarlo. Quando sei pronto, installa la versione Windows del server Valheim via SteamCMD con:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Dopo l’installazione, avvia la versione Windows tramite Wine con questo comando: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Conclusione

Complimenti, hai installato e configurato con successo il server Valheim sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che ti spiega come trasformare il tuo server dedicato in un servizio. Così potrai godere di avvio automatico al boot, aggiornamenti automatici, gestione facile e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />