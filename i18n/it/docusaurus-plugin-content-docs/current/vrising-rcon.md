---
id: vrising-rcon
title: "V Rising: RCON"
description: "Scopri come gestire e controllare da remoto i server di V Rising in modo efficiente senza essere connesso in-game → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente di gioco. Questo rende possibile eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In V Rising, RCON viene usato per eseguire comandi lato server, come gestire i giocatori, cambiare impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Un grande vantaggio di RCON è che permette di gestire il server **senza dover essere connessi al gioco come player**. Gli admin possono monitorare e controllare V Rising da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di poter usare RCON, va abilitato e configurato. Questo si fa modificando il file di configurazione sotto **Configs** nel pannello di gestione del gameserver. Nel file chiamato `ServerHostSettings.json`, vanno aggiunte o modificate queste voci:

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella panoramica delle porte, e deve essere specificata lì.



## Connessione via RCON

Per collegarti al server V Rising via RCON si usa lo strumento da linea di comando **rcon-cli**. Puoi scaricarlo dal repository ufficiale su [GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo installato sul tuo PC, puoi connetterti usando l’indirizzo IP del server, la porta RCON e la password.

La porta assegnata la trovi nella **Port overview** in fondo alla pagina delle impostazioni del gameserver. Password e porta devono corrispondere a quelle configurate nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server V Rising. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, interrogazioni di stato e controllo del server.

| Comando                                    | Descrizione                                                  |
|--------------------------------------------|--------------------------------------------------------------|
| `adminauth`                                | Attiva i diritti admin per il tuo personaggio (solo in-game)|
| `admindeauth`                              | Disattiva i diritti admin                                    |
| `banuser <SteamID>`                        | Bannare un giocatore permanentemente                         |
| `unbanuser <SteamID>`                      | Sblocca un giocatore precedentemente bannato                 |
| `kick <playername>`                        | Espelle immediatamente un giocatore dal server               |
| `give <ItemName> <Amount>`                 | Aggiunge direttamente oggetti al tuo inventario              |
| `teleport <X> <Y>`                         | Teletrasporta il tuo personaggio alle coordinate indicate    |
| `teleportplayer <name> <X> <Y>`            | Teletrasporta un altro giocatore a coordinate specifiche     |
| `changehealth <value>`                     | Imposta la tua salute attuale a un valore specifico          |
| `spawn <EntityName> <Amount>`              | Fa spawnare NPC, creature o altre entità                      |



## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di V Rising. Permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />