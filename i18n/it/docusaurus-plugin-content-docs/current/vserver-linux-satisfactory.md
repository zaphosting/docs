---
id: vserver-linux-satisfactory
title: "VPS: Satisfactory Dedicated Server Setup su Linux"
description: "Scopri come configurare un server dedicato Satisfactory sul tuo VPS Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Satisfactory
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato di Satisfactory? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Sapevi che puoi installare direttamente sul tuo VPS la nostra **ZAP GS/TS3 Interface**, che ti permette di configurare servizi di game server con integrazione diretta alla tua dashboard ZAP-Hosting in pochi click? Scopri di più sulla [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](vserver-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, dovrai completare una configurazione iniziale. Segui la nostra guida [SteamCMD Linux Setup](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia completamente configurato prima di procedere.

## Installazione

Inizia effettuando il login come utente `steam` e vai nella directory home di `steam` per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella di `steam`.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Abbi pazienza mentre il download procede, può richiedere un po’ di tempo per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di successo.

## Configurazione

A questo punto hai completato l’installazione del server Satisfactory. Puoi fare ulteriori configurazioni modificando i file di configurazione dentro la cartella del server.

Potrai regolare tutti i parametri modificando i file **Engine.ini** e **GameUserSettings.ini** che trovi nella cartella Saved.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Avvio e connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia lo script **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Dovresti vedere comparire i log nel terminale, segno che il server si è avviato correttamente. Nota che il primo avvio potrebbe richiedere un po’ di tempo mentre tutto si configura. In alternativa, puoi connetterti direttamente cercando nella lista server con la barra in basso usando: `[tuo_indirizzo_ip]:15777`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Satisfactory sul tuo VPS! Come prossimo passo ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come trasformare il tuo game server dedicato in un servizio. Questo ti offre tanti vantaggi come l’avvio automatico al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre disponibile per aiutarti ogni giorno!

<InlineVoucher />