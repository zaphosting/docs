---
id: projectzomboid-rcon
title: "Project Zomboid: RCON"
description: "Scopri come gestire e controllare da remoto i server di Project Zomboid in modo sicuro senza accesso in-game → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-projectzomboid
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente di gioco. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In Project Zomboid, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Il vantaggio principale di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come player**. Gli admin possono monitorare e controllare Project Zomboid da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo e configurarlo. Lo fai modificando il file di configurazione che trovi sotto **Configs** nel pannello di gestione del gameserver. Nel file chiamato `servertest.ini` devi aggiungere o modificare queste righe:

```cfg
RCONPort=XXXXX
RCONPassword=definisci-la-tua-password
```
La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella panoramica delle porte, e deve essere specificata lì.



## Connessione via RCON

Per connetterti al server Project Zomboid via RCON si usa lo strumento da riga di comando **rcon-cli**. Puoi scaricarlo dal repository ufficiale su [GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo installato sul tuo PC, puoi connetterti usando l’indirizzo IP del server, la porta RCON e la password RCON.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni del pannello di gestione. Password e porta devono corrispondere a quelle configurate nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server Project Zomboid. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, interrogazioni di stato e controllo del server.

| Comando                          | Descrizione                             |
| -------------------------------- | --------------------------------------- |
| `/grantadmin <username>`         | Concede i diritti admin a un giocatore  |
| `/removeadmin <username>`        | Revoca i diritti admin a un giocatore   |
| `/save`                          | Salva manualmente il mondo              |
| `/kickuser <username>`           | Espelle un giocatore dal server         |
| `/banuser <username>`            | Bannare un giocatore                     |
| `/unbanuser <username>`          | Sblocca un giocatore bannato             |
| `/adduser <username> <password>` | Crea un nuovo utente con password       |
| `/godmod <username>`             | Attiva/disattiva la modalità dio per l’utente specificato |
| `/teleport <Name1> <Name2>`      | Teletrasporta Name1 da Name2             |
| `/chopper`                       | Simula il sorvolo di un elicottero       |



## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di Project Zomboid. Ti permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />