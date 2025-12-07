---
id: gmod-rcon
title: "Garry's Mod: RCON"
description: "Scopri come gestire i server di Garry's Mod da remoto in modo sicuro ed efficiente senza entrare nel gioco → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-gmod
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare i gameserver da remoto. Permette di accedere alla console del server senza interagire direttamente con l’ambiente di gioco. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In Garry's Mod, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Il vantaggio principale di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come player**. Gli admin possono monitorare e controllare Garry's Mod da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo e configurarlo. Lo fai modificando il file di configurazione che trovi sotto **Configs** nel pannello di gestione del gameserver. Nel file chiamato `server.cfg`, aggiungi o modifica queste righe:

```cfg
rcon_password "definisci-la-tua-password"
```


## Connessione via RCON

Per connetterti al server Garry's Mod via RCON si usa lo strumento da linea di comando **rcon-cli**. Puoi scaricarlo dal [repository ufficiale su GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo installato sul tuo PC, puoi stabilire la connessione usando l’indirizzo IP del server, la porta RCON e la password RCON.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni nel pannello di gestione. Password e porta devono corrispondere ai valori configurati nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server Garry's Mod. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, interrogazioni di stato e controllo del server.

| Comando                      | Descrizione                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <password>`   | Autentica l’accesso RCON                      |
| `status`                     | Mostra info su server e giocatori             |
| `changelevel <mapname>`      | Cambia la mappa corrente                       |
| `mp_timelimit <min>`         | Imposta il limite di tempo per mappa           |
| `mp_roundtime <min>`         | Imposta la durata del round                     |
| `sv_cheats 0/1`              | Attiva/disattiva i cheat (solo admin)           |
| `kick <playername>`          | Espelle un giocatore dal server                  |
| `banid <duration> <SteamID>` | Bannare un giocatore per una durata specifica    |
| `exec <file.cfg>`            | Esegue un file di configurazione                 |
| `say <message>`              | Invia un messaggio broadcast a tutti i giocatori |


## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server Garry's Mod. Ti permette di accedere velocemente e direttamente alle funzioni di gestione, mantenendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per garantire stabilità e proteggere il server da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, sempre disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />