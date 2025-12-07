---
id: cs2-cstv
title: "CS2: CSTV "
description: "Scopri come trasmettere in diretta i tuoi stream di gioco con ritardo e registrazione automatica per gli spettatori e rivivi le partite in qualsiasi momento → Scopri di più ora"
sidebar_label: CSTV
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

CSTV ti permette di trasmettere le partite in diretta con un piccolo ritardo. Questo significa che anche chi non sta giocando può seguire cosa succede sul server. Questa tecnologia viene usata anche nei famosi tornei di Counter-Strike, così gli spettatori possono godersi lo spettacolo. Inoltre, le trasmissioni possono essere salvate automaticamente, così puoi rivederle quando vuoi.

<InlineVoucher />

## Attivazione

L’attivazione del servizio CSTV avviene tramite il file di configurazione **server.cfg**. Devi aggiungere lì i comandi necessari:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Configurazione

I comandi sopra sono obbligatori per attivare e rendere accessibile il master server CSTV. Qui sotto trovi altri comandi per configurazioni avanzate:

|            Comando            |                         Descrizione                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Gli spettatori possono diventare cameraman        |
| tv_allow_static_shots "0\|1" |    Usa telecamere a orientamento fisso per le riprese    |
|     tv_autorecord "0\|1"     | Registra automaticamente tutte le partite come demo CSTV. Il file demo si chiama auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Riprova a connettersi dopo un timeout di rete |
| tv_chattimelimit "seconds"  | Limita gli spettatori a scrivere solo ogni x secondi |
|       tv_debug "0\|1"        |             Mostra info di debug CSTV             |
|   tv_delaymapchange "0\|1"   | Ritarda il cambio mappa finché la trasmissione non è completa |
|      tv_maxclients "n"       |          Numero massimo di client sul server CSTV          |
|        tv_maxrate "n"        | Banda massima consentita per gli spettatori CSTV, 0 = illimitato |
|        tv_msg "text"         |           Invia un messaggio a tutti gli spettatori           |
|        tv_name "name"        | Nome host CSTV. Definisce il nome CSTV visibile nel browser server e nella barra di stato |
|       tv_nochat "0\|1"       |           Attiva/Disattiva la chat CSTV           |
|    tv_password "password"    |       Protegge la trasmissione CSTV con una password       |
|     tv_record "filename"     |             Avvia la registrazione di una demo CSTV             |
|           tv_stop            |                 Ferma la trasmissione CSTV                 |
|        tv_stoprecord         |            Ferma la registrazione di una demo CSTV             |
|           tv_title           |           Definisce il nome della trasmissione CSTV           |

## Connessione

Se la funzione è attivata sul server, puoi accedere tramite l’indirizzo IP e la porta CSTV assegnata. Per connetterti ti serve la console di gioco. Usa questo comando:

```
connect SERVERIP:27020
```

Le demo registrate manualmente o automaticamente si trovano nella cartella principale (/gxxxxx/cs2/game/csgo) del server CS:GO. Puoi scaricarle tramite l’accesso FTP fornito. Se non sai ancora come accedere via FTP, trovi le istruzioni qui: [Accesso via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Per rivedere la demo nel gioco, seleziona la demo scaricata tramite **Load** e avviala con il pulsante **Play**.

<InlineVoucher />