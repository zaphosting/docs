---
id: nmrih-rcon
title: "No More Room In Hell: RCON"
description: "Scopri come gestire da remoto i server di No More Room In Hell per un controllo e monitoraggio flessibile → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-nmrih
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente del server. Questo rende possibile eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In No More Room In Hell, RCON viene usato per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da una password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Un grande vantaggio di RCON è che permette di gestire il server **senza dover essere connessi al gioco come giocatori**. Gli admin possono monitorare e controllare No More Room In Hell da strumenti esterni, interfacce a riga di comando o dashboard web, offrendo flessibilità e comodità per l’operatività da remoto.

<InlineVoucher />

## Configurazione

Prima di poter usare RCON, va abilitato e configurato. Questo si fa modificando il file di configurazione che trovi sotto **Configs** nel pannello di gestione del gameserver. Nel file chiamato `server.cfg`, devi aggiungere o modificare queste righe:

```cfg
rcon_password "definisci-la-tua-password"
```


## Connessione via RCON

Per connetterti al server di No More Room In Hell via RCON si usa lo strumento da linea di comando **rcon-cli**. Puoi scaricarlo dal repository ufficiale su [GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo scaricato e installato sul tuo PC, puoi stabilire la connessione usando l’indirizzo IP del server, la porta RCON e la password RCON.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni nel pannello di amministrazione del gameserver. Password e porta devono corrispondere ai valori configurati nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server di No More Room In Hell. I comandi disponibili dipendono dal motore di gioco ma di solito includono azioni per la gestione dei giocatori, richieste di stato e controllo del server.

| Comando                      | Descrizione                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <password>`   | Autentica l’accesso RCON                      |
| `status`                     | Mostra info su server e giocatori             |
| `changelevel <mapname>`      | Cambia la mappa specificata                   |
| `mp_timelimit <min>`         | Imposta il limite di tempo per mappa          |
| `mp_roundtime <min>`         | Imposta la durata del round                    |
| `sv_cheats 0/1`              | Abilita/disabilita comandi cheat (solo admin)|
| `kick <playername>`          | Espelle un giocatore dal server                |
| `banid <duration> <SteamID>` | Bannare un giocatore per una durata specifica |
| `exec <file.cfg>`            | Esegue un file di configurazione               |
| `say <message>`              | Invia un messaggio broadcast a tutti i giocatori |

## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di No More Room In Hell. Permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />