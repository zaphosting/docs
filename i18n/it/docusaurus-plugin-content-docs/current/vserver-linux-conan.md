---
id: vserver-linux-conan
title: "VPS: Configurazione Server Dedicato Conan Exiles su Linux"
description: "Scopri come installare e far girare un server dedicato di Conan Exiles sul tuo VPS Linux usando SteamCMD e Wine → Scopri di più ora"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Linux e vuoi installarci il server dedicato di Conan Exiles? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche su altre distro.

:::tip
Lo sapevi che puoi installare direttamente sul tuo VPS la nostra **Interfaccia ZAP GS/TS3**, che ti permette di configurare i servizi dei server di gioco con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click? Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD su Linux](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

:::info Wine Compatibility Layer
Conan Exiles non offre ancora un server nativo per Linux, quindi serve un passaggio extra per far girare la versione Windows del server su Linux.

Devi fare un’installazione una tantum del layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Setup Wine Compatibility Layer](vserver-linux-wine.md) prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta dentro, puoi partire con l’installazione usando questo comando che avvia SteamCMD come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server Conan Exiles. Puoi configurarlo ulteriormente modificando il file di configurazione che trovi nella cartella del server.

Puoi cambiare tutti i parametri aprendo e modificando il file **WindowsServerEngine.ini** che si trova qui:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Per esempio, per impostare il nome del server, la password e la password admin, aggiungi queste righe nel file:
```
[OnlineSubsystem]
ServerName=[tuo_nome_server]
ServerPassword=[tua_password]

[ServerSettings]
AdminPassword=[tua_password_admin]
```

Ti consigliamo di dare un’occhiata al [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) per una lista completa delle opzioni disponibili.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia l’eseguibile **ConanSandboxServer.exe** con questo comando, usando **xvfb-run** e **wine64** per farlo girare tramite Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Vedrai comparire tanti log nel terminale che indicano l’avvio del server. Potrai connetterti cercando il server nella lista o collegandoti direttamente via: `[tuo_indirizzo_ip]:7777`.

## Conclusione

Complimenti, hai installato e configurato con successo il server di Conan Exiles sul tuo VPS! Come prossimo passo, ti consigliamo di leggere la nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come trasformare il tuo server dedicato in un servizio. Questo ti dà tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />