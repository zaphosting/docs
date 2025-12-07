---
id: dayz-rcon
title: "DayZ: RCON"
description: "Scopri come gestire e controllare da remoto i server di gioco DayZ in modo efficiente senza essere connesso in-game → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-dayz
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i server di gioco. Permette l’accesso alla console del server senza interagire direttamente con l’ambiente di gioco. Questo rende possibile eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In DayZ, RCON viene usato per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da una password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Un grande vantaggio di RCON è che permette di gestire il server **senza dover essere connessi al gioco come player**. Gli admin possono monitorare e controllare DayZ da strumenti esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di poter usare RCON, va abilitato e configurato. Puoi farlo direttamente dall’amministrazione del gameserver. Nella sezione **Impostazioni** trovi l’opzione **RCON** da attivare. Assicurati di impostare una password sicura.

La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella **Panoramica porte**. 



## Connessione via RCON

Per connetterti al server DayZ via RCON si usa lo strumento **BattleWarden**. Lo puoi scaricare dal [sito ufficiale](https://www.battlewarden.net). Dopo averlo installato sul tuo PC, crea un nuovo profilo di connessione inserendo:

- Indirizzo IP del server  
- Porta RCON 
- Password RCON

Una volta connesso, puoi eseguire i comandi RCON tramite l’interfaccia grafica. Lo strumento offre anche funzioni extra come liste giocatori, chat live e cronologia comandi, a seconda dell’integrazione con il gioco.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server DayZ. I comandi disponibili dipendono dal motore di gioco ma di solito includono azioni per la gestione dei giocatori, richieste di stato e controllo del server.

| Comando                         | Descrizione                                          |
|----------------------------------|------------------------------------------------------|
| `#login <password>`             | Effettua il login come admin RCON                     |
| `#logout`                       | Termina la sessione admin                             |
| `#kick <playerName>`            | Espelle un giocatore dal server                       |
| `#ban <playerName>`             | Bannare un giocatore in modo permanente               |
| `#exec ban <playerID>`          | Bannare un giocatore tramite Steam64ID (BattlEye)    |
| `#exec unban <playerID>`        | Rimuove il ban da un giocatore precedentemente bannato|
| `#shutdown`                     | Spegne il server                                     |
| `#monitor <seconds>`            | Mostra dati di performance ogni x secondi             |
| `#lock`                         | Blocca il server a nuove connessioni                   |
| `#unlock`                       | Sblocca di nuovo il server                            |




## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server DayZ. Permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />