---
id: vserver-linux-mythofempires
title: "VPS: Myth of Empires Dedicated Server Linux Setup"
description: "Scopri come installare e far girare il server dedicato di Myth of Empires sul tuo VPS Linux per un hosting di gioco senza intoppi → Scopri di più ora"
sidebar_label: Myth of Empires
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di Myth of Empires? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo VPS? Così puoi configurare i servizi del server di gioco con integrazione diretta alla tua dashboard ZAP-Hosting in pochi click! Scopri di più sulla [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

:::info Wine Compatibility Layer
Myth of Empires non offre ancora un server nativo per Linux, quindi serve un passaggio extra per far girare la versione Windows del server su Linux.

Devi fare un’installazione una tantum del layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Wine Compatibility Layer Setup](vserver-linux-wine.md) per configurarlo prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che sfrutta SteamCMD per installare direttamente come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di grandi dimensioni. Quando finisce vedrai un messaggio di successo.

## Configurazione

A questo punto hai finito l’installazione del server Myth of Empires. Puoi configurare ulteriormente il server modificando i vari file di configurazione nella cartella del server.

Puoi regolare tutti i parametri modificando i file `.ini` che trovi nella cartella Saved. Usa il comando `ls` per vedere quali file ci sono.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Per modificare un file, usa `nano ./[nomefile].ini` per aprirlo con l’editor nano.

Dai un’occhiata alla nostra guida Myth of Empires [Server Configuration](moe-configuration.md) per scoprire tutte le opzioni di configurazione e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia l’eseguibile **MOEServer.exe** con questo comando. Ricordati di usare **xvfb-run** e **wine** per farlo girare tramite il layer di compatibilità Wine.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. La prima volta potrebbe impiegare un po’ di tempo per completare la configurazione. Potrai connetterti direttamente cercando il server nella scheda **Custom Server** con: `[tuo_indirizzo_ip]:15636`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Myth of Empires sul tuo VPS! Come prossimo passo ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come impostare il tuo server dedicato come servizio. Questo ti dà tanti vantaggi come l’avvio automatico al boot, aggiornamenti automatici, gestione facile e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />