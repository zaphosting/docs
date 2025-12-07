---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "Scopri come gestire e controllare da remoto i server di Counter-Strike: Source in modo sicuro ed efficiente → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente del server. Questo rende possibile eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In Counter-Strike: Source, RCON viene usato per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da una password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Un grande vantaggio di RCON è che permette di gestire il server **senza dover essere connessi al gioco come giocatori**. Gli admin possono monitorare e controllare Counter-Strike: Source da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di poter usare RCON, va abilitato e configurato. Questo si fa modificando il file di configurazione che trovi sotto **Configs** nel pannello di gestione del gameserver. Nel file chiamato `server.cfg`, devi aggiungere o modificare questa riga:

```cfg
rcon_password "definisci-la-tua-password"
```


## Connessione via RCON

Per connetterti al server di Counter-Strike: Source via RCON si usa lo strumento da linea di comando **rcon-cli**. Puoi scaricarlo dal repository ufficiale su [GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo scaricato e installato sul tuo PC, puoi stabilire la connessione usando l’indirizzo IP del server, la porta RCON e la password RCON.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni nel pannello di gestione del server. Password e porta devono corrispondere ai valori configurati nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server di Counter-Strike: Source. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, richieste di stato e controllo del server.

| Comando                    | Descrizione                                      |
|---------------------------|--------------------------------------------------|
| `rcon_password <password>`   | Autenticarsi come admin RCON                     |
| `status`               | Mostra info su giocatori e server                |
| `changelevel <map>`   | Cambia mappa                                      |
| `mp_autoteambalance 0/1` | Attiva/disattiva bilanciamento automatico squadre |
| `mp_timelimit <minutes>` | Imposta il limite di tempo della mappa           |
| `mp_friendlyfire 0/1`    | Attiva/disattiva fuoco amico                      |
| `mp_freezetime <seconds>` | Imposta il tempo di freeze all’inizio del round  |
| `sv_cheats 0/1`         | Attiva cheat (solo per admin)                      |
| `exec <file.cfg>`       | Esegue un file di configurazione                   |
| `kick <player>`         | Espelle un giocatore dal server                     |


## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di Counter-Strike: Source. Permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />