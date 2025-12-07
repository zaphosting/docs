---
id: factorio-rcon
title: "Factorio: RCON"
description: "Scopri come gestire e controllare da remoto il tuo server Factorio per un’amministrazione efficiente e modifiche al gameplay → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente del server. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In Factorio, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Il vantaggio principale di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come giocatore**. Gli admin possono monitorare e controllare Factorio da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per l’operatività da remoto.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo e configurarlo. Puoi farlo direttamente dall’amministrazione del gameserver. Nella sezione **Impostazioni** c’è l’opzione **RCON** che va attivata. Imposta una password sicura.

La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella **Panoramica porte**.



## Connessione via RCON

Per connetterti al server Factorio via RCON si usa lo strumento da linea di comando **rcon-cli**. Puoi scaricarlo dal [repository ufficiale GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo installato sul tuo PC, puoi connetterti usando l’indirizzo IP del server, la porta RCON e la password.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni nel pannello di gestione. Password e porta devono corrispondere ai valori configurati nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server Factorio. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, interrogazioni di stato e controllo del server.

| Comando                         | Descrizione                                           |
|---------------------------------|-------------------------------------------------------|
| `/help`                         | Mostra tutti i comandi disponibili                    |
| `/players`                      | Elenca tutti i giocatori connessi                      |
| `/kick <player>`                | Espelle un giocatore dal server                         |
| `/ban <player>`                 | Bannare un giocatore permanentemente                    |
| `/unban <player>`               | Rimuove il ban a un giocatore precedentemente bannato |
| `/admins`                       | Mostra la lista degli admin del server                  |
| `/promote <player>`             | Concede i diritti admin a un giocatore                  |
| `/demote <player>`              | Revoca i diritti admin a un giocatore                   |
| `/save`                         | Salva lo stato attuale del mondo                         |
| `/server-save`                  | Avvia un salvataggio manuale del server                 |



## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server Factorio. Permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />