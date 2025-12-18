---
id: palworld-rcon
title: "Palworld: RCON"
description: "Scopri come gestire i server di Palworld da remoto per un controllo e monitoraggio flessibile senza dover entrare nel gioco → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente del server. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In Palworld, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Il vantaggio principale di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come player**. Gli admin possono monitorare e controllare Palworld da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo e configurarlo. Lo fai modificando il file di configurazione che trovi sotto **Configs** nel pannello di gestione del gameserver. Nel file chiamato `PalWorldSettings.ini`, devi aggiungere o modificare queste voci:

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="definisci-la-tua-password"
```
La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella panoramica delle porte, e devi specificarla lì.



## Connessione via RCON

Per connetterti al server Palworld via RCON, si usa lo strumento da linea di comando **rcon-cli**. Puoi scaricarlo dal repository ufficiale su [GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo scaricato e installato sul tuo PC, puoi stabilire la connessione usando l’indirizzo IP del server, la porta RCON e la password RCON.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni nel pannello di gestione. Password e porta devono corrispondere ai valori configurati nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server Palworld. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, interrogazioni di stato e controllo del server.

| Comando                                  | Descrizione                                                |
|-----------------------------------------|------------------------------------------------------------|
| `/Shutdown <seconds> <message>`         | Spegne il server dopo un conto alla rovescia con messaggio |
| `/DoExit`                               | Ferma immediatamente il server                             |
| `/Broadcast <message>`                  | Invia un messaggio a tutti i giocatori connessi           |
| `/KickPlayer <SteamID>`                 | Espelle un giocatore tramite SteamID                       |
| `/BanPlayer <SteamID>`                  | Bann permanente di un giocatore                            |
| `/TeleportToPlayer <SteamID>`           | Teletrasporta te stesso al giocatore specificato           |
| `/TeleportToMe <SteamID>`               | Teletrasporta il giocatore specificato alla tua posizione  |
| `/ShowPlayers`                          | Elenca tutti i giocatori attualmente connessi             |
| `/Info`                                 | Mostra informazioni base sul server                         |
| `/Save`                                 | Salva manualmente il mondo                                  |



## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di Palworld. Ti permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />