---
id: vserver-linux-soulmask
title: "VPS: Configurazione Server Dedicato Soulmask su Linux"
description: "Scopri come installare e configurare rapidamente il server dedicato Soulmask sul tuo VPS Linux → Scopri di più ora"
sidebar_label: Soulmask
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato Soulmask? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo VPS? Così puoi configurare i servizi dei tuoi game server con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD Linux](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che avvia SteamCMD e installa direttamente nella cartella del server Soulmask.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Abbi pazienza mentre scarica tutto, può volerci un po’ soprattutto con giochi pesanti. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai completato l’installazione del server Soulmask. Puoi personalizzare la configurazione modificando i file dentro la cartella del server.

Tutti i parametri si trovano nel file **Engine.ini** dentro la cartella Saved. Aprilo così:
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Avvio e Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia lo script **StartServer.sh** con questo comando:
```
/home/steam/Soulmask-Server/StartServer.sh
```

Vedrai comparire i log nel terminale, segno che il server sta partendo correttamente. La prima volta potrebbe impiegare un po’ di tempo per completare la configurazione. In alternativa, puoi connetterti direttamente cercando nel server list con la barra in basso usando: `[tuo_indirizzo_ip]:18888`.

## Conclusione

Complimenti, hai installato e configurato con successo il server Soulmask sul tuo VPS! Come prossimo passo ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come trasformare il tuo game server dedicato in un servizio. Così potrai godere di avvio automatico al boot, aggiornamenti automatici, gestione facile e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />