---
id: vserver-linux-vrising
title: "VPS: Configurazione Server Dedicato V-Rising su Linux"
description: "Scopri come installare e far girare il server dedicato V-Rising sul tuo VPS Linux in modo semplice ed efficiente → Scopri di più ora"
sidebar_label: V-Rising
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di V-Rising? Sei nel posto giusto! In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il procedimento è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo VPS? Così puoi configurare i servizi dei server di gioco con integrazione diretta alla tua dashboard ZAP-Hosting in pochi click! Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD su Linux](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

:::info Wine Compatibility Layer
V-Rising non offre ancora una versione nativa Linux del server, quindi serve un passaggio extra per far girare la versione Windows su Linux.

Devi installare una volta per tutte il layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Setup Wine Compatibility Layer](vserver-linux-wine.md) prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta dentro, puoi partire con l’installazione usando questo comando che sfrutta SteamCMD per installare direttamente come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ con giochi di grandi dimensioni. Quando finisce vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server V-Rising. Puoi configurarlo ulteriormente modificando direttamente i file di avvio.

Puoi regolare tutti i parametri di configurazione modificando i file **ServerGameSettings.json** e **ServerHostSettings.json** che trovi nella cartella Settings.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Dai un’occhiata alla nostra guida di configurazione V-Rising [Server Configuration](vrising-configuration.md) per scoprire tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco, dove ti consigliamo di creare una copia del file batch di esempio.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Puoi modificare il file se vuoi. Quando sei pronto, avvia il nuovo file eseguibile **start_server.bat** con questo comando. Ricordati di usare **xvfb-run** e **wine** per farlo girare tramite il layer di compatibilità Wine.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Dovresti vedere i log comparire nel terminale, segno che il server si è avviato correttamente. La prima volta potrebbe volerci un po’ perché si sta configurando tutto. In alternativa, puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:8211`.

## Conclusione

Complimenti, hai installato e configurato con successo il server V-Rising sul tuo VPS! Il prossimo step? Dai un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che ti spiega come trasformare il tuo server dedicato in un servizio Linux. Così potrai goderti avvii automatici, aggiornamenti automatici, gestione facile e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />