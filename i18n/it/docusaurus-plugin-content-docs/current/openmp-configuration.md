---
id: openmp-configuration
title: "Open.mp: Configurazione Server Open.mp"
description: "Scopri come personalizzare le impostazioni del server Open.mp per ottimizzare la tua esperienza di gioco e le prestazioni del server → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server Open.mp offrono una vasta gamma di parametri di configurazione che puoi personalizzare a tuo piacimento. In questa guida esploreremo tutti i parametri di configurazione attualmente disponibili e spiegheremo ciascuno in dettaglio.

<InlineVoucher />

## Accesso al File di Configurazione

Prima di tutto, dovrai accedere al file di configurazione per modificare qualsiasi parametro. Ci sono diversi modi per modificare questo file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Il metodo più user-friendly per modificare le impostazioni base è andare nella sezione **Settings** del webinterface del tuo game server e cercare lì le impostazioni appropriate, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Tieni presente che non tutte le opzioni di configurazione saranno accessibili qui. Se vuoi configurare tutto, usa la scheda **WI Config File** per modificare facilmente il file necessario direttamente dal webinterface.

</TabItem>

<TabItem value="configs" label="Via WI Config file">

#### Via WI Config File

:::note
Il server deve essere spento prima di poter modificare il file di configurazione; modificare il file e riavviare il server senza spegnerlo prima annullerà le modifiche.
:::

Per chi vuole modificare direttamente il file e tutte le opzioni di configurazione, puoi accedere andando nella sezione **Configs** del webinterface del tuo game server e cliccando sul pulsante blu per modificare il file, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Questo aprirà un editor di testo direttamente sul sito per permetterti di modificarlo.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
Il server deve essere spento prima di poter modificare il file di configurazione; modificare il file e riavviare il server senza spegnerlo prima annullerà le modifiche.
:::

L’ultimo metodo per accedere al file grezzo è tramite FTP. Se non hai familiarità con l’uso di FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md). Tuttavia, questo metodo richiede più tempo e se vuoi modificare direttamente il contenuto del file, ti consigliamo di usare semplicemente la sezione **Configs** del webinterface del tuo game server come descritto sopra.

Una volta loggato tramite il tuo client FTP, vai nella seguente directory, sostituendo `[zap_id]` con il tuo ZAP ID:
```
..g[zap_id]/gta-openmp/
```

In questo percorso, trova il file `config.json` e aprilo. Questo è il file di configurazione del server che devi modificare.

</TabItem>
</Tabs>

## Opzioni di Configurazione del Server

### Dettagli Server

Queste sono opzioni di configurazione che modificano le informazioni del tuo server nel browser pubblico dei server. Dovrai trovare queste opzioni nel file di configurazione, cosa che puoi fare facilmente usando `CTRL+F` nel browser o nell’editor per cercare.

| Nome Parametro                | Esempio                                | Descrizione                                                                        |
| ----------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------- |
| name                         | ZAP-Hosting Docs Test                  | Imposta il nome host del tuo server                                               |
| language                     | English                              | Lingua che apparirà nel browser server per il tuo server                          |
| website                      | zap-hosting.com/                     | Aggiungi un sito web che le persone possono visitare per avere più info sul server |
| discord.invite               | discord.gg/zaphosting                | Link del server Discord che appare nel browser server                             |
| banners.light                | zap-hosting.com/lighticon.png        | Imposta un URL per il banner tema chiaro che appare nel browser server           |
| banners.dark                 | zap-hosting.com/darkicon.png         | Imposta un URL per il banner tema scuro che appare nel browser server            |
| game.map                    | ZAPtastic Stunt Map                   | Nome della mappa che deve apparire nel browser server                            |
| game.mode                   | Survival                             | Modalità di gioco che deve apparire nel browser server                           |
| announce                    | true                                | Attiva o disattiva la visualizzazione del server nel browser pubblico            |
| enable_query                | true                                | Attiva o disattiva la visualizzazione delle info del server nel browser          |

Dopo aver completato le modifiche, assicurati di salvare il file dove necessario e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

### Impostazioni Core del Server

Queste sono opzioni di configurazione più importanti che modificano la funzionalità del server. Dovrai trovare queste opzioni nel file di configurazione, cosa che puoi fare facilmente usando `CTRL+F` nel browser o nell’editor per cercare.

| Nome Parametro                | Esempio                                | Descrizione                                                                                     |
| ----------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------- | 
| max_players                  | 50 (default)                         | Imposta il numero massimo di giocatori che il server può ospitare contemporaneamente            |
| max_bots                     | 0 (default)                          | Imposta il numero massimo di NPC che il server può ospitare. Questo contribuisce al totale max_players |
| password                    | iLoveZAP!2024                       | Imposta una password che i giocatori devono usare per connettersi al server                      |
| rcon.enable                 | true                                | Attiva o disattiva la funzione RCON                                                             |
| rcon.password               | ZAP-IS-AWESOME                     | Imposta una password necessaria per accedere a RCON dai client                                  |
| logging.enable              | true                                | Attiva o disattiva il logging                                                                   |
| logging.file                | log.txt                             | Percorso e nome file da usare per il logging se abilitato                                      |
| logging.log_chat            | true                                | Attiva o disattiva la visualizzazione della chat dei giocatori nella console del server        |

Dopo aver completato le modifiche, assicurati di salvare il file dove necessario e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

## Impostazioni Gameplay & Networking

Open.mp offre un’ampia gamma di opzioni di gameplay e networking che ti permettono di personalizzare il server in modo approfondito. Qui riassumiamo alcune delle più importanti. Dovrai trovare queste opzioni nel file di configurazione, cosa che puoi fare facilmente usando `CTRL+F` nel browser o nell’editor per cercare.

Se vuoi modificare tutte le impostazioni, ti consigliamo di leggere la [guida config.json di open.mp](https://www.open.mp/docs/server/config.json) che presenta tutte le opzioni di configurazione attualmente disponibili.

:::tip
Non consigliamo di modificare le impostazioni di Porta o IP, perché sono configurate automaticamente dal game server. Cambiare IP/Port potrebbe compromettere il funzionamento del server!
:::

| Nome Parametro                | Descrizione                                                                                  | 
| ----------------------------- | -------------------------------------------------------------------------------------------- | 
| game.use_chat_radius         | Attiva o disattiva il raggio di chat                                                        |
| game.chat_radius             | Imposta un limite di raggio per la chat                                                    |
| game.time                   | Imposta l’ora globale che il server usa                                                    |
| game.use_nametags           | Attiva o disattiva la visualizzazione di nametag, barre salute e armatura sopra i giocatori |
| game.use_vehicle_friendly_fire | Abilita il fuoco amico per i veicoli di squadra                                           |
| game.vehicle_respawn_time    | Tempo di respawn dei veicoli in millisecondi                                              |
| game.weather                | Meteo globale che il server usa                                                            |
| network.bind                | L’indirizzo IP che il server deve usare (consigliamo di non modificarlo per i game server) |
| network.port                | La porta che il server deve usare (anche qui, consigliamo di non modificarla per i game server) |
| network.messages_limit      | Numero massimo di messaggi che un utente può inviare al secondo                            |
| network.player_timeout      | Tempo in millisecondi dopo il quale un giocatore va in timeout se non invia dati al server |

Dopo aver completato le modifiche, assicurati di salvare il file dove necessario e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

<InlineVoucher />