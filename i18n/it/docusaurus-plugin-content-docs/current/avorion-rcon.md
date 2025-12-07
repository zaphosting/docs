---
id: avorion-rcon
title: "Avorion: RCON"
description: "Scopri come gestire da remoto i server Avorion usando RCON per un controllo flessibile e sicuro senza dover entrare nel gioco → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-avorion
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette di accedere alla console del server senza interagire direttamente con l’ambiente di gioco. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In Avorion, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Il vantaggio principale di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come player**. Gli admin possono monitorare e controllare Avorion da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo e configurarlo. Puoi farlo direttamente dall’amministrazione del gameserver. Nella sezione **Impostazioni** c’è l’opzione **RCON** da attivare. Imposta una password sicura.

La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, sotto **Panoramica porte**. 



## Connessione via RCON

Per connetterti al server Avorion via RCON si usa lo strumento da linea di comando **rcon-cli**. Puoi scaricarlo dal [repository ufficiale GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo installato sul tuo PC, puoi connetterti usando l’indirizzo IP del server, la porta RCON e la password.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni nel pannello di gestione. Password e porta devono corrispondere a quelle configurate nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server Avorion. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, richieste di stato e controllo del server.

| Comando                                     | Descrizione                                               |
|--------------------------------------------|-----------------------------------------------------------|
| `/save`                                     | Salva il mondo di gioco corrente                          |
| `/status`                                   | Mostra lo stato del server e dei giocatori               |
| `/kick <playername>`                        | Espelle un giocatore dal server                           |
| `/ban <playername>`                         | Bannare un giocatore dal server                            |
| `/unban <playername>`                       | Rimuove un ban a un giocatore                             |
| `/teleport <x> <y>`                         | Teletrasporta il giocatore alle coordinate del settore    |
| `/tpto <playername>`                        | Teletrasportati da un altro giocatore                     |
| `/sethome`                                  | Imposta il settore attuale come casa                       |
| `/home`                                     | Teletrasportati al tuo settore casa                        |
| `/give <itemName> <amount>`                 | Ti dà oggetti o risorse                                   |




## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server Avorion. Permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />