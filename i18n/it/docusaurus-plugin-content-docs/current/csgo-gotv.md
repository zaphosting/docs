---
id: csgo-gotv
title: "CSGO: Info su GOTV"
description: "Scopri come GOTV permette di trasmettere partite live e registrare replay per un’esperienza spettatore top in CS:GO e giochi simili → Scopri di più ora"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guida Archiviata
Questo documento è stato archiviato. I documenti vengono archiviati quando non sono più rilevanti, sono errati o non aggiornati. È stato archiviato per i seguenti motivi:

Motivo: CS:GO non è più offerto attivamente né sviluppato. CS2 è il seguito di CS:GO. Ti consigliamo di passare a CS2.
::::



## Cos’è GOTV?


GOTV ti permette di trasmettere le partite live con un piccolo ritardo. Questo significa che chi non sta giocando può comunque seguire cosa succede sul server. Questa tecnologia viene usata anche nei famosi tornei di Counter-Strike, così gli spettatori possono godersi lo spettacolo. Inoltre, le trasmissioni possono essere salvate automaticamente per rivederle quando vuoi.

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## Come usare GOTV?

Se la funzione è attivata sul server, puoi accedervi tramite l’indirizzo IP e la porta GOTV assegnata. Per connetterti ti serve la console in gioco. Da lì puoi collegarti con questo comando:

```
connect SERVERIP:27020
```


Le demo registrate manualmente o automaticamente si trovano nella cartella principale (gxxxxx / csgo / csgo /) del server CS:GO. Puoi scaricarle tramite l’accesso FTP fornito. Se non sai ancora come accedere via FTP, trovi la guida qui: [Accesso via FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



Per rivedere una demo dal gioco, seleziona la demo scaricata tramite **Load** e avviala con il pulsante **Play**.



## Installazione del GOTV Master Server

Per attivare il GOTV master server, devi aggiungere questi comandi nel file **server.cfg**:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



Questi comandi sono obbligatori per attivare e rendere accessibile il GOTV master server. Qui sotto trovi altri comandi per configurazioni avanzate:

|            Comando            |                         Descrizione                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Gli spettatori possono diventare cameraman        |
| tv_allow_static_shots "0\|1" |    Usa telecamere a orientamento fisso per le riprese    |
|     tv_autorecord "0\|1"     | Registra automaticamente tutte le partite come demo GOTV. Il file demo ha formato auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Riprova a connettersi dopo un timeout di rete |
| tv_chattimelimit "seconds"  | Limita la scrittura degli spettatori a ogni x secondi |
|       tv_debug "0\|1"        |             Mostra info di debug GOTV             |
|   tv_delaymapchange "0\|1"   | Ritarda il cambio mappa finché la trasmissione non è completa |
|      tv_maxclients "n"       |          Numero massimo di client sul server GOTV           |
|        tv_maxrate "n"        | Banda massima permessa per gli spettatori GOTV, 0 = illimitato |
|        tv_msg "text"         |           Invia un messaggio a tutti gli spettatori           |
|        tv_name "name"        | Nome host GOTV. Definisce il nome GOTV visibile nel browser server e nella barra di stato |
|       tv_nochat "0\|1"       |           Attiva/Disattiva la chat GOTV           |
|    tv_password "password"    |       Protegge la trasmissione GOTV con una password        |
|     tv_record "filename"     |             Avvia la registrazione di una demo GOTV             |
|           tv_stop            |                 Ferma la trasmissione GOTV                  |
|        tv_stoprecord         |            Ferma la registrazione della demo GOTV              |
|           tv_title           |           Definisce il nome della trasmissione GOTV           |

<InlineVoucher />