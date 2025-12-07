---
id: dedicated-linux-arksurvivalascended
title: "Server Dedicato: ARK Survival Ascended Server Dedicato Linux Setup"
description: "Scopri come configurare un server dedicato ARK: Survival Ascended su Linux per un gameplay fluido e una gestione server semplice → Scopri di più ora"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un Server Dedicato Linux e vuoi installarci il server dedicato di ARK: Survival Ascended? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu come esempio, ma il procedimento è molto simile anche su altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo server dedicato? Così puoi configurare i servizi dei server di gioco con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3 qui](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo Server Dedicato via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](dedicated-linux-ssh.md).

Se è la prima volta che usi SteamCMD sul tuo server Linux, devi completare la configurazione iniziale. Segui la nostra guida [Setup SteamCMD Linux](dedicated-linux-steamcmd.md) e assicurati che SteamCMD sia pronto prima di andare avanti.

:::info Wine Compatibility Layer
ARK: Survival Ascended non offre ancora una versione nativa del server per Linux, quindi serve un passaggio extra per far girare la versione Windows su Linux.

Devi fare un’installazione una tantum del layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Segui la nostra guida rapida [Setup Wine Compatibility Layer](dedicated-linux-wine.md) prima di procedere.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi partire con l’installazione usando questo comando che sfrutta SteamCMD per installare direttamente nella cartella dell’utente `steam`.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Abbi pazienza mentre scarica, può volerci un po’ per giochi di grandi dimensioni. Quando finisce, vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito l’installazione del server ARK: Survival Ascended. Puoi personalizzare ulteriormente il server modificando il file di configurazione che trovi nella cartella del server.

Puoi cambiare tutti i parametri aprendo e modificando il file **GameUserSettings.ini** che si trova nella cartella Saved.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Dai un’occhiata alla nostra guida [Configurazione Server ARK: Survival Ascended](ark-configuration.md) per vedere tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia l’eseguibile **ArkAscendedServer.exe** con questo comando. Ricordati di usare **xvfb-run** e **wine** per farlo girare tramite il layer di compatibilità Wine.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Purtroppo, a causa della mancanza di supporto, non puoi far girare la versione del server con l’Anti-Cheat Battleye su Linux. L’Anti-Cheat non è compatibile.
:::

Ora dovresti vedere i log nel terminale, segno che il server è partito correttamente. Tieni presente che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nel server list con la barra in basso: `[tuo_indirizzo_ip]:7777`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server ARK: Survival Ascended sul tuo Server Dedicato! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come trasformare il tuo server di gioco dedicato in un servizio. Questo ti dà tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione semplice, accesso ai log e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!