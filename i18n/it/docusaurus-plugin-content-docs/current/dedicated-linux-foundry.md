---
id: dedicated-linux-foundry
title: "Server Dedicato: Setup Foundry Dedicated Server su Linux"
description: "Scopri come installare il server Foundry Dedicated sul tuo server Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un Server Dedicato Linux e vuoi installarci il servizio Foundry Dedicated server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo server dedicato? Così puoi configurare i servizi dei game server con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo Server Dedicato via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD Linux](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia configurato correttamente prima di andare avanti.

:::info Wine Compatibility Layer
Foundry non offre ancora una versione nativa Linux del server, quindi serve un passaggio extra per far girare la versione Windows su Linux.

Devi fare un’installazione una tantum del layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Setup Wine Compatibility Layer](dedicated-linux-wine.md) prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella home directory `/home/steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che sfrutta SteamCMD direttamente come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di dimensioni più grandi. Quando finisce, vedrai un messaggio di successo.

## Configurazione

A questo punto hai finito l’installazione del server Foundry. Puoi fare ulteriori configurazioni modificando il file di configurazione che trovi nella directory del server.

Puoi regolare tutti i parametri aprendo e modificando il file **app.cfg** nella directory principale.
```
nano /home/steam/Foundry-Server/app.cfg
```

Dai un’occhiata alla nostra guida di configurazione Foundry [Server Configuration](foundry-configuration.md) per scoprire tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella directory principale del gioco e lancia l’eseguibile **FoundryDedicatedServerLauncher.exe** con questo comando. Ricordati di usare **xvfb-run** e **wine** per farlo girare tramite il layer di compatibilità Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Dovresti vedere comparire i log nel terminale, segno che il server è partito correttamente. Se tutto va come previsto, il server sarà visibile nella lista server. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:3724`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Foundry sul tuo Server Dedicato! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come configurare il tuo game server dedicato come servizio. Questo ti dà tanti vantaggi come avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!