---
id: conan-rcon
title: "Conan Exiles: RCON"
description: "Scopri come gestire e controllare in modo sicuro i server di Conan Exiles da remoto senza connetterti in gioco → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-conan
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente di gioco. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In Conan Exiles, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Il vantaggio principale di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come player**. Gli admin possono monitorare e controllare Conan Exiles da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo e configurarlo. Lo fai modificando il file di configurazione che trovi sotto **Configs** nel pannello di gestione del gameserver. Nel file chiamato `game.ini`, devi aggiungere o modificare queste righe:

```cfg
[RconPlugin]
RconEnabled=1
RconPassword=definisci-la-tua-password
RconPort=XXXXX
```
La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella panoramica delle porte, e devi inserirla lì.



## Connessione via RCON

Per connetterti al server di Conan Exiles via RCON si usa lo strumento da riga di comando **rcon-cli**. Puoi scaricarlo dal [repository ufficiale GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo installato sul tuo PC, puoi connetterti usando l’indirizzo IP del server, la porta RCON e la password.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni del pannello di gestione. Password e porta devono corrispondere a quelle configurate nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server di Conan Exiles. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, richieste di stato e controllo del server.

| Comando                     | Descrizione                        |
| --------------------------- | ---------------------------------- |
| `broadcast <message>`       | Invia un messaggio a tutti i giocatori     |
| `kick <playername>`         | Espelle un giocatore dal server     |
| `ban <playername>`          | Bannare un giocatore                      |
| `unban <playername>`        | Sblocca un giocatore bannato                    |
| `restartserver`             | Riavvia il server                |
| `restartserver <seconds>`   | Riavvia il server con un ritardo   |
| `shutdownserver`            | Spegne il server              |
| `shutdownserver <seconds>`  | Spegne il server con un ritardo |
| `changemap <mapname>`       | Carica una mappa diversa              |
| `setpassword <newpassword>` | Imposta una nuova password RCON           |

## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di Conan Exiles. Ti permette di accedere velocemente e direttamente alle funzioni amministrative, mantenendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per garantire stabilità al server e proteggerti da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />