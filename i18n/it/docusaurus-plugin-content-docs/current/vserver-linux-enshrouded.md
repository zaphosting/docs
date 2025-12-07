---
id: vserver-linux-enshrouded
title: "VPS: Enshrouded Dedicated Server Linux Setup"
description: "Scopri come installare il server dedicato di Enshrouded sul tuo VPS Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Enshrouded
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installare il server dedicato di Enshrouded? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo VPS? Così puoi configurare i servizi dei server di gioco con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD Linux](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia completamente configurato prima di andare avanti.

:::info Wine Compatibility Layer
Enshrouded non offre ancora una versione nativa del server per Linux, quindi serve un passaggio extra per far girare la versione Windows su Linux.

Devi installare una volta sola il layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Setup Wine Compatibility Layer](vserver-linux-wine.md) per configurarlo prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che sfrutta SteamCMD per installare direttamente come utente `steam`. Il parametro `+@sSteamCmdForcePlatformType windows` forza l’installazione dei binari Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di dimensioni grandi. Quando finisce, vedrai un messaggio di successo.

## Configurazione

A questo punto hai finito l’installazione del server Enshrouded. Puoi configurare ulteriormente il server modificando il file di configurazione che trovi nella cartella del server.

Puoi regolare tutti i parametri aprendo e modificando il file **enshrouded_server.json** nella directory principale.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Dai un’occhiata alla nostra guida di configurazione Enshrouded [Server Configuration](enshrouded-configuration.md) per scoprire tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia l’eseguibile **enshrouded_server.exe** con questo comando. Ricordati di usare **xvfb-run** e **wine** per farlo girare tramite il layer di compatibilità Wine.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Vedrai comparire tanti log nel terminale. Se vedi il messaggio `[Session] 'HostOnline' (up)!`, significa che il server è partito correttamente. Potrai connetterti direttamente aggiungendo i dettagli del server nella scheda **Find Games**: `[tuo_indirizzo_ip]:15636`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Enshrouded sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come impostare il tuo nuovo server dedicato come servizio. Questo ti offre tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />