---
id: redm-rcon
title: "RedM: RCON"
description: "Scopri come gestire i server di gioco RedM da remoto in modo sicuro ed efficiente senza essere in-game → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i server di gioco. Permette di accedere alla console del server senza interagire direttamente con l’ambiente del server. Questo rende possibile eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In RedM, RCON viene usato per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da una password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Un grande vantaggio di RCON è che permette di gestire il server **senza dover essere connessi al gioco come player**. Gli admin possono monitorare e controllare RedM da tool esterni, interfacce a riga di comando o dashboard web, offrendo flessibilità e comodità per la gestione remota.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Configurazione

Prima di poter usare RCON, va abilitato e configurato. Questo si fa nella sezione **CFG Editor** dell’amministrazione del gameserver in **txAdmin**. Assicurati che le seguenti righe siano aggiunte o modificate nella configurazione:

```cfg
ensure rconlog
set rcon_password "your-secure-password"
```



## Connessione via RCON

Per connetterti al server GameXY tramite RCON, si usa lo strumento Windows **IceCon**. Puoi scaricarlo dal [repository GitHub](https://github.com/icedream/icecon). Dopo aver installato il tool sul tuo PC, crea una nuova connessione inserendo queste info:

- **Indirizzo IP del server**  
- **Porta di gioco**
- **Password RCON**

Una volta stabilita la connessione con successo, IceCon ti offre un’interfaccia grafica per inviare comandi RCON al server RedM. Puoi eseguire i comandi standard e vedere in tempo reale il feedback direttamente nel tool.

IceCon include anche funzioni extra come:

- Cronologia comandi e completamento automatico  
- Visualizzatore dei log del server  
- Pulsanti personalizzati per comandi  
- Profili di connessione per gestire più server contemporaneamente



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server RedM. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, interrogazioni di stato e controllo del server.

| Comando                   | Descrizione                                       |
| ------------------------- | ------------------------------------------------- |
| `say <messaggio>`         | Invia un messaggio a tutti i giocatori in chat    |
| `start <nome-risorsa>`    | Avvia una risorsa specifica del server             |
| `stop <nome-risorsa>`     | Ferma una risorsa specifica del server             |
| `restart <nome-risorsa>`  | Riavvia una risorsa specifica del server           |
| `ensure <nome-risorsa>`   | Avvia la risorsa solo se non è già in esecuzione  |
| `refresh`                 | Ricarica tutte le risorse dalla cartella risorse  |
| `clear`                   | Pulisce l’output della console del server          |
| `crash`                   | Forza un crash del server (per debug)              |
| `quit`                    | Spegne il server in modo pulito                     |



## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di gioco RedM. Permette un accesso rapido e diretto alle funzioni amministrative, garantendo il controllo tramite autenticazione con password. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />