---
id: dedicated-linux-vrising
title: "Server Dedicato: Setup Server Dedicato V-Rising su Linux"
description: "Scopri come configurare il Server Dedicato V-Rising su Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un Server Dedicato Linux e vuoi installarci il servizio Server Dedicato V-Rising? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo server dedicato? Così puoi configurare i servizi dei server di gioco con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo Server Dedicato via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD Linux](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

:::info Wine Compatibility Layer
V-Rising non ha ancora una versione server nativa per Linux, quindi serve un passaggio extra per far girare la versione Windows su Linux.

Devi fare un’installazione una tantum del layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Setup Wine Compatibility Layer](dedicated-linux-wine.md) prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella home directory dell’utente `steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che sfrutta SteamCMD per installare direttamente come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di dimensioni più grandi. Quando finisce, vedrai un messaggio di successo.

## Configurazione

A questo punto hai finito il setup del server V-Rising. Puoi fare ulteriori configurazioni modificando direttamente il file di avvio.

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

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Nota che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente usando la barra di ricerca in basso nella lista server e cercando: `[tuo_indirizzo_ip]:8211`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server V-Rising sul tuo Server Dedicato! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come impostare il tuo nuovo server dedicato come servizio. Questo ti dà tanti vantaggi come avvio automatico al boot, aggiornamenti automatici, gestione facile, accesso ai log e molto altro!

Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!