---
id: dedicated-linux-mythofempires
title: "Server Dedicato: Configurazione Myth of Empires Dedicated Server su Linux"
description: "Scopri come installare il Myth of Empires Dedicated Server su Linux e ottimizzare il tuo game hosting → Scopri di più ora"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un Server Dedicato Linux e vuoi installarci il Myth of Empires Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo server dedicato? Così puoi configurare i servizi game server con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3 qui](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo Server Dedicato via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD su Linux](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

:::info Wine Compatibility Layer
Myth of Empires non offre ancora una versione server nativa per Linux, quindi serve un passaggio extra per far girare la versione Windows del server su Linux.

Devi fare un’installazione una tantum del layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Setup Wine Compatibility Layer](dedicated-linux-wine.md) prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella home directory di `steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando, che avvia SteamCMD come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server Myth of Empires. Puoi configurare ulteriormente il server modificando i file di configurazione nella cartella del server.

Puoi cambiare tutti i parametri modificando i file `.ini` dentro la cartella Saved. Usa il comando `ls` per vedere quali file ci sono.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Per modificare un file, usa `nano ./[nomefile].ini` per aprirlo con l’editor nano.

Dai un’occhiata alla nostra guida Myth of Empires [Configurazione Server](moe-configuration.md) per scoprire tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia l’eseguibile **MOEServer.exe** con questo comando. Ricordati di usare **xvfb-run** e **wine** per farlo girare tramite il layer di compatibilità Wine.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Dovresti vedere i log comparire nel terminale, segno che il server si è avviato correttamente. La prima volta potrebbe impiegare un po’ di tempo per completare la configurazione. Potrai connetterti direttamente cercando il server nella scheda **Custom Server**: `[tuo_indirizzo_ip]:15636`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Myth of Empires sul tuo Server Dedicato! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come trasformare il tuo game server dedicato in un servizio. Questo ti dà tanti vantaggi come avvio automatico al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!