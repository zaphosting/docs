---
id: 7d2d-rcon
title: "7 Days to Die: RCON"
description: "Scopri come gestire e controllare da remoto i server di 7 Days to Die in modo sicuro senza accesso in-game per un’amministrazione efficiente → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette l’accesso alla console del server senza interagire direttamente con l’ambiente di gioco. Così puoi eseguire comandi amministrativi, modificare parametri di configurazione o recuperare informazioni sullo stato del server.

In 7 Days to Die, RCON serve per eseguire comandi lato server, come gestire i giocatori, cambiare le impostazioni di gioco o accedere a output diagnostici. La connessione è protetta da password e funziona su una porta specifica, accessibile tramite client RCON compatibili.

Il vantaggio principale di RCON è che ti permette di gestire il server **senza dover essere connesso al gioco come player**. Gli admin possono monitorare e controllare 7 Days to Die da tool esterni, interfacce a riga di comando o dashboard web, offrendo massima flessibilità e comodità per la gestione remota.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo e configurarlo. Puoi farlo direttamente dall’amministrazione del gameserver. Nella sezione **Impostazioni** c’è l’opzione **RCON** da attivare. Imposta una password sicura e definisci una porta valida.

La porta RCON assegnata la trovi in fondo alla pagina delle impostazioni, nella **Panoramica porte**.

In alternativa, puoi configurare RCON modificando il file di configurazione sotto **Configs** nel pannello di gestione del server. Nel file `serverconfig.xml` devi aggiungere o modificare questa riga:

```cfg
<property name="TelnetPassword" value="definisci-la-tua-password-qui"/>
```

La porta RCON assegnata la trovi sempre in fondo alla pagina delle impostazioni nella Panoramica porte e deve essere specificata lì.



## Connessione via RCON

Per connetterti al server 7 Days to Die via RCON si usa lo strumento da linea di comando **rcon-cli**. Puoi scaricarlo dal [repository ufficiale su GitHub](https://github.com/gorcon/rcon-cli). Dopo averlo installato sul tuo PC, puoi connetterti usando l’IP del server, la porta RCON e la password.

La porta assegnata la trovi nella **Panoramica porte** in fondo alla pagina delle impostazioni del gameserver. Password e porta devono corrispondere a quelle configurate nel pannello o nel file di configurazione. Usa questo comando per connetterti ed eseguire subito un comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> -t telnet comando
```



## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi e diagnostici sul server di 7 Days to Die. I comandi disponibili dipendono dal motore di gioco, ma di solito includono azioni per la gestione dei giocatori, richieste di stato e controllo del server.

| Comando                | Descrizione                                    |
|------------------------|------------------------------------------------|
| `dm` o `debugmenu on`  | Attiva la modalità sviluppatore                 |
| `giveme <ItemName> <count>` | Ti dà un oggetto                            |
| `buffplayer <ID> <buff>` | Dà un buff a un giocatore                      |
| `tele <x> <y> <z>`     | Teletrasportati alle coordinate specificate     |
| `settime <seconds>`     | Imposta l’orario di gioco corrente              |
| `setgameday <day>`      | Imposta il giorno di gioco corrente              |
| `spawnentity <ID>`      | Fa spawnare un’entità tramite ID                 |
| `kick <player>`         | Espelle un giocatore dal server                   |
| `ban <address>`         | Bannare un IP o un giocatore                      |
| `saveworld`             | Salva manualmente lo stato del mondo              |



## Conclusione

RCON è uno strumento fondamentale per l’amministrazione remota dei server di 7 Days to Die. Ti permette un accesso rapido e diretto alle funzioni amministrative, con controllo tramite password per la sicurezza. Una configurazione corretta e sicura è essenziale per mantenere stabile il server e proteggerlo da accessi non autorizzati.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, sempre disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />