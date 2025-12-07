---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "Scopri come gestire i server Minecraft da remoto con RCON per un controllo flessibile, sicuro e una gestione efficiente del server → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare i gameserver da remoto. Permette di accedere alla console del server senza interagire direttamente con l’ambiente del server. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In Minecraft, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Un grande vantaggio di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come player**. Gli admin possono monitorare e controllare Minecraft da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di usare RCON, va abilitato e configurato. Puoi farlo direttamente nell’amministrazione del gameserver. Nella sezione **Impostazioni** c’è l’opzione **RCON** da attivare. Imposta una password sicura e definisci una porta valida. Questo si fa modificando il file di configurazione sotto **Configs** nel pannello di gestione del server. Nel file chiamato `server.properties` devi aggiungere o modificare queste righe:

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<definisci-la-tua-password>
```
La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella panoramica delle porte, e deve essere specificata lì.



## Connessione via RCON

Per connetterti al server Minecraft via RCON si usa lo strumento da riga di comando **rcon-cli**. Puoi scaricarlo dal [repository ufficiale GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo installato sul tuo PC, puoi connetterti usando l’indirizzo IP del server, la porta RCON e la password RCON.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni nel pannello di gestione. Password e porta devono corrispondere ai valori configurati nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server Minecraft. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, interrogazioni di stato e controllo del server.

| Comando               | Descrizione                                 |
|------------------------|---------------------------------------------|
| `list`               | Elenca i giocatori connessi                  |
| `say <messaggio>`     | Invia un messaggio broadcast a tutti i giocatori |
| `kick <player>`       | Espelle un giocatore dal server              |
| `ban <player>`        | Bannare un giocatore                          |
| `pardon <player>`     | Sbannare un giocatore                         |
| `op <player>`         | Concede privilegi operatore a un giocatore  |
| `deop <player>`       | Revoca i privilegi operatore                  |
| `time set <valore>`   | Imposta l’ora del mondo (es. day, night, numero) |
| `gamemode <modalità> <player>` | Imposta la modalità di gioco di un giocatore |
| `weather <clear/rain/thunder>` | Cambia il meteo                      |
| `stop`                | Ferma il server in modo sicuro                |



## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server Minecraft. Permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />