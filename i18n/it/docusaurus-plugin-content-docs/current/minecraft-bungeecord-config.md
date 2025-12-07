---
id: minecraft-bungeecord-config
title: "Minecraft: Impostazioni di Configurazione del Server BungeeCord"
description: "Scopri come ottimizzare e gestire le impostazioni della tua rete server BungeeCord per migliorare prestazioni e esperienza di gioco → Scopri di più ora"
sidebar_label: Proprietà del Server
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## A cosa serve una configurazione BungeeCord?

BungeeCord gestisce un insieme di server collegati tramite un server proxy (server BungeeCord). Per personalizzare la rete di questi server, bisogna modificare il file *config.yml*. In questa pagina scoprirai il significato esatto di ogni impostazione e riceverai info extra sull’impatto sui sub-server come PaperSpigot e Bukkit.

<InlineVoucher />

## Impostazioni

### forge_support

Può essere impostato su false o true. Se lo metti su true, i giocatori possono entrare con un client Forge (utile per modpack). Se lo metti su false, queste connessioni saranno bloccate.

### player_limit

Indica quanti giocatori possono connettersi contemporaneamente al server. Rispetto a *max_players* nei listener, questo è il limite interno e assoluto per tutti i giocatori.

### permissions

Qui puoi assegnare permessi a gruppi diversi. Sono **solo permessi BungeeCord**, non quelli di Spigot/Bukkit.
Attenzione alla sintassi e all’indentazione (2 spazi):
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

Indica il tempo massimo in cui il server può non inviare segnali ai giocatori prima di chiudere e tagliare tutte le connessioni. Di default è 30000, cioè 30 secondi di timeout massimo.

### log_commands

Può essere false o true. Se true, ogni comando BungeeCord eseguito da un giocatore viene mostrato in console. Se false, non viene mostrato nulla.

### network_compression_threshold

Imposta la dimensione dei pacchetti inviati ai giocatori. Un valore più basso di 256, tipo 128, può migliorare la connessione per utenti lontani, ma aumenta molto l’uso della CPU. Cambia con cautela.

### online_mode

Può essere false o true. Se true, solo chi ha comprato Minecraft può entrare. Se false, anche i giocatori cracked possono accedere perché non c’è comunicazione con i server Mojang.
**Importante:** Se vuoi permettere ai cracked di giocare, usa un plugin di autorizzazione, altrimenti altri possono impersonarti e ottenere permessi admin.

### disabled_commands

Qui puoi elencare i comandi da disabilitare su tutta la rete. La restrizione vale per tutti i giocatori.

### servers

Lista di tutti i sub-server della rete. Se manca un server qui, non sarà integrato nel sistema.
Sintassi e indentazione (2 spazi) da rispettare:
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
Il **motd** è il messaggio che appare nella lista server quando pinghi un sub-server tramite *forced_hosts*:

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

In **address** inserisci l’IP del sub-server. Se **restricted** è true, il giocatore deve avere il permesso *bungeecord.server.ServerName* per entrare.

### listeners

Qui ci sono tante opzioni importanti per la connessione al server BungeeCord. Puoi creare più listener per permettere connessioni su IP e porte diverse. Un listener ha queste configurazioni:
* query_port - la porta del listener.
* motd - messaggio mostrato nella lista server se il giocatore si collega direttamente al BungeeCord.
* tab_list - scegli tra *GLOBAL_PING*, *GLOBAL* e *SERVER*. GLOBAL_PING mostra tutti i giocatori con ping nella tablist. GLOBAL mostra tutti i giocatori su tutti i server senza ping. SERVER mostra solo i giocatori sullo stesso sub-server. **Importante:** non funziona su versioni 1.8 e precedenti.
* query_enabled - false o true. Se true, durante la procedura DNS viene controllata una query UDP che permette solo queste connessioni. Se false, si possono fare altre connessioni inoltrate al server.
* proxy_protocol - false o true. Se true, puoi usare il protocollo HAProxy. Se false, viene negato.
* forced_hosts - qui puoi permettere connessioni dirette a sub-server specifici. Sintassi: `Your.OwnDomain.net: ServerName`
* ping_passthrough - false o true. Se true, pingando un sub-server tramite *forced_hosts* vedi il vero MOTD del sub-server invece di quello in config BungeeCord. Se false, vedi il valore in *servers*.
* priorities - lista in ordine decrescente dei server a cui i giocatori si connettono prima. Un server offline o non disponibile viene saltato.
* bind_local_address - false o true. Se true, il sistema prova sempre a reindirizzare il giocatore a server che ascoltano sulla stessa IP del BungeeCord. Se false, i sub-server possono avere IP diversi. Utile per reti con server su sistemi diversi.
* host - imposta IP e porta dell’host. Se metti 0.0.0.0 come IP, accetta tutte le IP e domini che puntano all’host.
* max_players - numero massimo di giocatori per questo listener.
* tab_size - numero massimo di giocatori mostrati nella tablist.
* Il valore può essere false o true. Se true, il giocatore si connette sempre al server di default (il primo disponibile in *priorities*). Se false, il giocatore torna al sub-server dove era l’ultima volta. **Importante:** se attivi questa opzione, le connessioni via *forced_hosts* vengono reindirizzate al server di default.

### ip_forward

False o true. Se true, i giocatori possono accedere solo tramite il server BungeeCord. Se false, possono connettersi direttamente a un sub-server se conoscono IP e porta.
**Importante:** se *online_mode* è true, attiva anche questa per chiudere una falla di sicurezza.

### prevent_proxy_connections

False o true. Se true, gli IP dei giocatori connessi vengono inviati ai server Mojang. Se false, il server blocca l’inoltro IP a Mojang.
Non influisce sull’esperienza di gioco.

### groups

Qui assegni uno o più gruppi a singoli giocatori, dando loro i permessi BungeeCord definiti in *permissions*.
Sintassi e indentazione (2 spazi) da rispettare:
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

Definisce quanto tempo un giocatore deve aspettare prima di poter tentare di connettersi di nuovo. Di default è 4000, cioè 4 secondi di attesa massima.

### stats

BungeeCord inserisce qui un codice generato casualmente. È consigliato non modificarlo, aiuta a migliorare BungeeCord e risolvere bug. I dati vengono inviati anonimi e criptati agli sviluppatori.

### connection_throttle_limit

Numero di tentativi di connessione che un giocatore può fare prima di dover aspettare il tempo definito in *connection_throttle* per riprovare.

<InlineVoucher />