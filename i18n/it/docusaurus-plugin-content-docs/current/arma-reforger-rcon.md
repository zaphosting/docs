---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Scopri come gestire e controllare da remoto i server di Arma Reforger in modo sicuro per un’amministrazione e monitoraggio flessibili → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente del server. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In Arma Reforger, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Il vantaggio principale di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come player**. Gli admin possono monitorare e controllare Arma Reforger da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per l’operatività da remoto.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo e configurarlo. Lo fai modificando il file di configurazione che trovi sotto **Configs** nel pannello di gestione del gameserver. Nel file chiamato `BEServer_x64.cfg` devi aggiungere o modificare queste righe:

```cfg
RConPort XXXXX
RConPassword define-your-password
```
La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella panoramica delle porte, e devi inserirla qui.



## Connessione via RCON

Per connetterti al server Arma Reforger via RCON si usa lo strumento **BattleWarden**. Lo puoi scaricare dal [sito ufficiale](https://www.battlewarden.net). Dopo averlo installato sul tuo PC, crea un nuovo profilo di connessione inserendo:

- Indirizzo IP del server  
- Porta RCON 
- Password RCON

Una volta connesso, puoi eseguire comandi RCON tramite l’interfaccia grafica. Il tool offre anche funzioni extra come lista giocatori, chat live e cronologia comandi, a seconda dell’integrazione col gioco.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Comandi RCON

Quando sei connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server Arma Reforger. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, richieste di stato e controllo del server.

| Comando                         | Descrizione                                        |
|----------------------------------|----------------------------------------------------|
| `#login <password>`             | Effettua il login come admin del server            |
| `#logout`                       | Effettua il logout dallo status admin              |
| `#mission <missionName>`       | Avvia una nuova missione sul server                 |
| `#missions`                    | Elenca le missioni disponibili per la selezione    |
| `#restart`                     | Riavvia la missione corrente                         |
| `#reassign`                    | Riporta tutti i giocatori all’assegnazione ruolo   |
| `#kick <playerID>`             | Espelle un giocatore                                 |
| `#exec ban <playerID>`         | Bannare un giocatore                                 |
| `#exec unban <playerID>`       | Sblocca un giocatore bannato                         |
| `#shutdown`                    | Spegne il server                                    |



## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di Arma Reforger. Ti permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />