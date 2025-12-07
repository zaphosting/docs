---
id: css-becomeadmin
title: "Counter-Strike: Source: Diventa admin"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e gestire efficacemente le funzioni di gioco → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente in gioco. Qui sotto trovi tutti i passaggi per assegnare i permessi admin al tuo server.

<InlineVoucher />



## Configurazione

Per registrarti come admin, è obbligatorio installare SourceMod o MetaMod. Inoltre, ti servirà lo Steam ID del tuo account Steam. Ci sono diversi modi per ottenerlo: puoi usare un sito esterno che fornisce questo servizio oppure recuperarlo direttamente dalla console in gioco.


Per ottenere il tuo SteamID tramite sito, apri prima il tuo profilo Steam e fai clic destro da qualsiasi parte della pagina per copiare l’URL del profilo. Poi incolla questo URL in uno di questi siti:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

La pagina ti mostrerà il tuo SteamID insieme ad altre info sull’account. Per la registrazione admin ti serve il **SteamID32**:

```
steamID32: STEAM_0:1:XXXXXX
```

In alternativa, puoi recuperare il tuo SteamID in gioco tramite la console. Avvia il gioco, connettiti al server, apri la console e digita il comando:

```
status
```

Vedrai i dettagli della tua connessione, incluso il tuo SteamID. Poi connettiti al server via FTP e apri il file `admins.cfg` che si trova in:

```
.../addons/sourcemod/configs/
```

Il file contiene un esempio di entry che puoi copiare e adattare:

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

Il **nome giocatore** non deve corrispondere al nome del tuo account Steam; serve solo come riferimento interno. Il campo `auth` definisce il metodo di autenticazione, che resta `steam`. In `identity` inserisci lo SteamID32. Le `flags` definiscono i permessi concessi all’admin:

| Permesso    | Flag | Descrizione               |
|-------------|:----:|---------------------------|
| reservation | a    | Prenotazione slot         |
| generic     | b    | Diritti base (obbligatorio) |
| kick        | c    | Espelli giocatori         |
| ban         | d    | Bannare giocatori         |
| unban       | e    | Sbloccare giocatori       |
| slay        | f    | Slappa o uccidi giocatori |
| changemap   | g    | Cambia mappa              |
| cvar        | h    | Cambia valori server      |
| config      | i    | Esegui config server      |
| chat        | j    | Diritti chat avanzati     |
| vote        | k    | Avvia votazioni admin     |
| password    | l    | Imposta password server   |
| rcon        | m    | Esegui comandi RCON       |
| cheats      | n    | Abilita `sv_cheats`       |
| root        | z    | Accesso completo          |

Puoi combinare più flag (es. `bc` per diritti di kick). Per accesso completo usa solo `z`. Puoi aprire il menu admin digitando `admin` in chat o `sm_admin` nella console.



## Comandi Admin

Qui sotto trovi una lista dei comandi admin più comuni che puoi usare sul tuo server.

| Comando                           | Descrizione                                  |
| --------------------------------- | -------------------------------------------- |
| `sm_kick <player>`                | Espelle un giocatore                         |
| `sm_ban <player> <time> [reason]` | Banna un giocatore per X minuti (0 = permanente) |
| `sm_unban <SteamID/IP>`           | Sblocca un giocatore                         |
| `sm_slay <player>`                | Uccide istantaneamente il giocatore         |
| `sm_slap <player> [damage]`       | Slappa il giocatore (opzionale con danno)   |
| `sm_map <mapname>`                | Cambia alla mappa specificata                |
| `sm_cvar <cvar> <value>`          | Imposta una variabile di configurazione server a runtime |
| `sm_vote <topic>`                 | Avvia una votazione base                      |
| `sm_restartgame <seconds>`        | Riavvia il gioco dopo un conto alla rovescia |
| `sm_say <message>`                | Invia un messaggio nella chat globale        |



## Conclusione

Congratulazioni, se hai seguito tutto correttamente, dovresti aver configurato con successo i permessi admin per il tuo server. Per altre domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />