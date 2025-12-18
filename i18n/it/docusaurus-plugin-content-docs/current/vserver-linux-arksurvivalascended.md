---
id: vserver-linux-arksurvivalascended
title: "VPS: ARK Survival Ascended Dedicated Server Linux Setup"
description: "Scopri come configurare il server dedicato ARK: Survival Ascended sul tuo VPS Linux per una gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installare il server dedicato ARK: Survival Ascended su di esso? Sei nel posto giusto. In questa guida ti spiegheremo passo passo come installare questo servizio sul tuo server Linux usando SteamCMD. Useremo Ubuntu negli esempi, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **ZAP GS/TS3 Interface** direttamente sul tuo VPS? Ti permette di configurare i servizi dei server di gioco con integrazione diretta al tuo pannello ZAP-Hosting, in pochi click! Scopri di più sulla [GS/TS3 Interface qui](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [SSH Initial Access](vserver-linux-ssh.md).

Dovrai anche completare la configurazione iniziale di SteamCMD se è la prima volta che lo usi sul tuo server Linux. Usa la nostra guida [SteamCMD Linux Setup](vserver-linux-steamcmd.md) e assicurati che SteamCMD sia completamente configurato prima di procedere.

:::info Wine Compatibility Layer
ARK: Survival Ascended non offre ancora una versione nativa del server per Linux, quindi serve un passaggio extra per far girare la versione Windows del server su Linux.

Devi fare un’installazione una tantum del layer di compatibilità **Wine** se è la prima volta che lo usi sul tuo server Linux. Usa la nostra guida rapida [Wine Compatibility Layer Setup](vserver-linux-wine.md) per configurarlo prima di andare avanti.
:::

## Installazione

Inizia loggandoti come utente `steam` e vai nella directory home di `steam` per tenere tutto organizzato.
```
sudo -u steam -s
cd ~
```

Una volta loggato, puoi avviare l’installazione con questo comando che usa SteamCMD per installare direttamente nella cartella del tuo utente `steam`.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Abbi pazienza mentre il download procede, può volerci un po’ per giochi di grandi dimensioni. Quando finisce vedrai un messaggio di conferma.

## Configurazione

A questo punto hai finito la configurazione base del server ARK: Survival Ascended. Puoi fare ulteriori personalizzazioni modificando il file di configurazione che trovi nella cartella del server.

Puoi regolare tutti i parametri aprendo e modificando il file **GameUserSettings.ini** che si trova nella cartella Saved.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Dai un’occhiata alla nostra guida [ARK: Survival Ascended Server Configuration](ark-configuration.md) per vedere tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia l’eseguibile **ArkAscendedServer.exe** con questo comando. Ricordati di usare **xvfb-run** e **wine** per farlo girare tramite il layer di compatibilità Wine.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Purtroppo, a causa della mancanza di supporto, non puoi usare la versione del server con l’Anti-Cheat Battleye su Linux. L’Anti-Cheat non è compatibile.
:::

Ora dovresti vedere i log nel terminale che indicano che il server si è avviato correttamente. Tieni presente che il primo avvio può richiedere un po’ di tempo mentre tutto si sistema. In alternativa, puoi connetterti direttamente cercando nel server list con la barra in basso usando: `[tuo_indirizzo_ip]:7777`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server ARK: Survival Ascended sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come configurare il tuo nuovo server dedicato come servizio. Questo ti dà tanti vantaggi come l’avvio automatico all’accensione, aggiornamenti automatici, gestione facile, accesso ai log e molto altro!

Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />