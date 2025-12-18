---
id: vserver-linux-foundry
title: "VPS: Foundry Dedicated Server Setup su Linux"
description: "Scopri come installare il server dedicato Foundry sul tuo VPS Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Foundry
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato Foundry? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il procedimento è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare direttamente sul tuo VPS la nostra **Interfaccia ZAP GS/TS3**, che ti permette di configurare servizi di game server con integrazione diretta alla tua dashboard ZAP-Hosting in pochi click? Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD su Linux](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

:::info Wine Compatibility Layer
Foundry non offre ancora una versione nativa Linux del server, quindi serve un passaggio extra per far girare la versione Windows su Linux.

Devi fare un’installazione una tantum del layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Setup Wine Compatibility Layer](vserver-linux-wine.md) per configurarlo prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta dentro, puoi partire con l’installazione usando questo comando che avvia SteamCMD come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di successo.

## Configurazione

A questo punto hai finito l’installazione del server Foundry. Puoi configurarlo ulteriormente modificando il file di configurazione che trovi nella cartella del server.

Puoi cambiare tutti i parametri aprendo e modificando il file **app.cfg** nella directory principale.
```
nano /home/steam/Foundry-Server/app.cfg
```

Dai un’occhiata alla nostra guida [Configurazione Server Foundry](foundry-configuration.md) per scoprire tutte le opzioni disponibili e cosa fanno.

## Avvio e Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia l’eseguibile **FoundryDedicatedServerLauncher.exe** con questo comando. Ricordati di usare **xvfb-run** e **wine** per farlo girare tramite il layer Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Dovresti vedere i log comparire nel terminale, segno che il server è partito correttamente. Se tutto va bene, il server sarà visibile nella lista. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:3724`.

## Conclusione

Complimenti, hai installato e configurato con successo il server Foundry sul tuo VPS! Il prossimo passo? Dai un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che ti spiega come trasformare il tuo game server dedicato in un servizio. Così potrai goderti avvio automatico al boot, aggiornamenti automatici, gestione semplice, accesso ai log e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, ogni giorno!

<InlineVoucher />