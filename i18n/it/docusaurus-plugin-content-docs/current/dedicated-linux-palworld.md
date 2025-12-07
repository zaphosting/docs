---
id: dedicated-linux-palworld
title: "Dedicated Server: Configurazione Palworld Dedicated Server su Linux"
description: "Scopri come configurare e installare un Palworld Dedicated Server su Linux per una gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un Dedicated Server Linux e vuoi installarci il servizio Palworld Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo dedicated server? Così puoi configurare i servizi dei game server con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface qui](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo Dedicated Server via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia completamente configurato prima di andare avanti.

## Installazione

Inizia facendo il login come utente `steam` e vai nella home directory di `steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella dell’utente `steam`.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Abbi pazienza mentre il download procede, può richiedere un po’ di tempo per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma del successo.

## Configurazione

A questo punto hai completato l’installazione del server Palworld. Puoi fare ulteriori configurazioni tramite un file di configurazione che si trova nella directory del server.

Devi creare una copia del file di configurazione di default e metterla nella cartella saved prima di poterla modificare.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Con la copia creata, puoi modificare i parametri principali aprendo il file **PalWorldSettings.ini**.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Dai un’occhiata alla nostra guida Palworld [Server Configuration](palworld-configuration.md) per vedere tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia lo script **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

Dovresti vedere comparire i log nel terminale, incluso il log della versione del gioco, che indica che l’avvio è andato a buon fine. Se tutto va come previsto, il tuo server sarà visibile nella lista server. In alternativa, puoi connetterti direttamente usando la barra di ricerca in basso nella lista server e cercando: `[tuo_indirizzo_ip]:8211`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Palworld sul tuo Dedicated Server! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come impostare il tuo nuovo game server dedicato come servizio. Questo ti offre tanti vantaggi come l’avvio automatico del server al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!