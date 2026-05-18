---
id: server-linux-arma3
title: "Arma 3 Dedicated Server Setup su Linux"
description: "Scopri come installare e far girare l'Arma 3 Dedicated Server su Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS/Dedicated Server Linux e vuoi installarci il servizio Arma 3 Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo VPS/Dedicated Server? Così puoi configurare i servizi dei server di gioco con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface qui](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo VPS/Dedicated Server via SSH. Se ti serve una mano, usa la nostra guida [SSH Initial Access](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia completamente configurato prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che avvia SteamCMD direttamente come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di successo che conferma l’installazione.

## Configurazione

A questo punto hai finito l’installazione del tuo server Arma 3. Puoi fare ulteriori configurazioni modificando il file di configurazione che trovi nella directory del server.

Puoi regolare tutti i parametri aprendo e modificando il file **server.cfg** nella directory principale.
```
nano /home/steam/arma3-server/server.cfg
```

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella directory principale del gioco e lancia l’eseguibile **arma3server_x64** con questo comando:

```
/home/steam/arma3-server/arma3server_x64
```

Vedrai comparire tanti log nel terminale che indicano che il server è partito correttamente.

I giocatori potranno connettersi direttamente tramite il **browser server di Arma 3** usando l’indirizzo IP del server e la porta di default **2302**.

## Conclusione

Congratulazioni, hai installato e configurato con successo il **server Arma 3** sul tuo VPS/Dedicated Server! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />