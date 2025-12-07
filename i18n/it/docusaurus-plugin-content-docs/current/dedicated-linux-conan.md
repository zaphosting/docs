---
id: dedicated-linux-conan
title: "Dedicated Server: Configurazione Conan Exiles Dedicated Server su Linux"
description: "Scopri come configurare un Conan Exiles Dedicated Server su Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un Dedicated Server Linux e vuoi installarci il servizio Dedicated Server di Conan Exiles? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo dedicated server? Così puoi configurare i servizi dei game server con integrazione diretta nella tua dashboard ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo Dedicated Server via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia configurato correttamente prima di andare avanti.

:::info Wine Compatibility Layer
Conan Exiles non offre ancora una versione nativa del server per Linux, quindi serve un passaggio extra per far girare la versione Windows del server su Linux.

Devi fare un’installazione una tantum del layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Wine Compatibility Layer Setup](dedicated-linux-wine.md) per configurarlo prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che sfrutta SteamCMD per installare direttamente come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ per giochi di grandi dimensioni. Quando finisce vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito la configurazione base del server Conan Exiles. Puoi personalizzare ulteriormente il server modificando il file di configurazione che trovi nella directory del server.

Puoi cambiare tutti i parametri aprendo e modificando il file **WindowsServerEngine.ini** che si trova qui:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Per esempio, per impostare nome server, password e password admin, aggiungi queste righe nel file:
```
[OnlineSubsystem]
ServerName=[tuo_nome_server]
ServerPassword=[tua_password]

[ServerSettings]
AdminPassword=[tua_password_admin]
```

Ti consigliamo di dare un’occhiata al [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) per una lista completa delle opzioni disponibili.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia l’eseguibile **ConanSandboxServer.exe** con questo comando. Ricordati di usare **xvfb-run** e **wine64** per farlo girare tramite Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Vedrai comparire tanti log nel terminale, segno che il server sta partendo. Potrai connetterti cercando il server nella lista o direttamente connettendoti a: `[tuo_indirizzo_ip]:7777`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Conan Exiles sul tuo dedicated server! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come trasformare il tuo game server in un servizio. Questo ti dà tanti vantaggi come avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!