---
id: csgo-gotv
title: "CS:GO: GOTV"
description: "Scopri come trasmettere in diretta con ritardo e registrazione automatica per gli spettatori e rivivi le partite quando vuoi → Scopri di più ora"
sidebar_label: GOTV
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

GOTV ti permette di trasmettere le partite in diretta con un piccolo ritardo. Questo significa che anche chi non sta giocando può seguire cosa succede sul server. Questa tecnologia è usata anche nei famosi tornei di Counter-Strike, così gli spettatori possono godersi lo spettacolo. Inoltre, le trasmissioni possono essere salvate automaticamente, così puoi rivederle quando vuoi.

<InlineVoucher />

## Attivazione

L’attivazione del servizio GOTV avviene tramite il file di configurazione **server.cfg**. Devi aggiungere i comandi necessari:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Configurazione

I comandi sopra sono obbligatori per attivare e rendere accessibile il master server GOTV. Qui sotto trovi altri comandi per configurazioni avanzate:

|            Comando            |                         Descrizione                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Gli spettatori possono diventare cameraman        |
| tv_allow_static_shots "0\|1" |    Usa telecamere con orientamento fisso per le riprese    |
|     tv_autorecord "0\|1"     | Registra automaticamente tutte le partite come demo GOTV. Il file demo sarà in formato auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Riprova a connettersi dopo un timeout di rete |
| tv_chattimelimit "seconds"  | Limita la scrittura in chat degli spettatori ogni x secondi |
|       tv_debug "0\|1"        |             Mostra info di debug GOTV             |
|   tv_delaymapchange "0\|1"   | Ritarda il cambio mappa finché la trasmissione non è completa |
|      tv_maxclients "n"       |          Numero massimo di client sul server GOTV          |
|        tv_maxrate "n"        | Banda massima permessa per gli spettatori GOTV, 0 = illimitato |
|        tv_msg "text"         |           Invia un messaggio a tutti gli spettatori           |
|        tv_name "name"        | Nome host GOTV. Definisce il nome GOTV visibile nel browser server e nella barra di stato |
|       tv_nochat "0\|1"       |           Attiva/Disattiva la chat GOTV           |
|    tv_password "password"    |       Protegge la trasmissione GOTV con una password       |
|     tv_record "filename"     |             Avvia la registrazione di una demo GOTV             |
|           tv_stop            |                 Ferma la trasmissione GOTV                 |
|        tv_stoprecord         |            Ferma la registrazione di una demo GOTV             |
|           tv_title           |           Definisce il nome della trasmissione GOTV           |

## Connessione

Se la funzione è attiva sul server, puoi accedere tramite l’indirizzo IP e la porta GOTV assegnata. Per connetterti ti serve la console in gioco, dove puoi usare questo comando:

```
connect SERVERIP:27020
```

Le demo registrate manualmente o automaticamente si trovano nella cartella principale (/gxxxxx/CS:GO/game/csgo) del server CS:GO. Puoi scaricarle tramite FTP. Se non sai come accedere via FTP, trovi la guida qui: [Accesso via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Per rivedere la demo nel gioco, seleziona **Load** e poi avvia con **Play**.

<InlineVoucher />