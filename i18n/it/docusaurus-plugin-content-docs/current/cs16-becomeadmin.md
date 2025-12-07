---
id: cs16-becomeadmin
title: "CS 1.6: Diventa admin sul tuo server"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e una gestione in-game potenziata → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente in gioco. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Configurazione
L’aggiunta di un admin avviene tramite il file di configurazione **users.ini**. Per poter diventare admin e trovare questi file devi prima installare **AMXmodX** e **Metamod**. Se non l’hai ancora fatto, dai un’occhiata a questa guida: [Install Plugins](cs16-plugins.md)

Per modificare il file di configurazione **users.ini**, devi connetterti al server via FTP. Naviga nella cartella ``/gXXXX/cs16/cstrike/addons/amxmodx/configs``. Apri il file con un editor di testo e modificalo.

<InlineVoucher />

```
...
; Examples of admin accounts:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "My Name" "my_password" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

Nel file di configurazione la voce ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` deve essere modificata. In passato l’autenticazione avveniva solo tramite nome e password, oggi invece si fa solo tramite SteamID64. Puoi trovare il tuo SteamID64 aprendo il tuo profilo Steam e cliccando con il tasto destro da qualsiasi parte del profilo. Poi clicca su **Copia URL Steam**.

Dopodiché incolla l’URL in uno di questi siti:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

Qui otterrai le info generali dell’account e lo Steam ID. A noi serve solo lo SteamID64. Lo Steam ID va inserito nella voce client sotto **SteamID**. Il risultato sarà così:

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

La riga contiene queste info:

1. nome/SteamID - ID univoco del giocatore.
2. password - non necessaria con autenticazione Steam
3. livello di permesso
4. flag di connessione - controllano come AMX Mod X autorizza un admin che si connette.

In questo caso non serve la password perché l’autenticazione è via Steam. Quindi usiamo ``ce`` invece di ``en``. Qui sotto trovi una panoramica di tutti i livelli di autorizzazione e flag di connessione:



**Livelli di autorizzazione**

| Livello di autorizzazione | Descrizione                                                  |
| ------------------------- | ------------------------------------------------------------ |
| a                         | immunità (non può essere kickato/banato/slayed/slapato o influenzato da altri comandi) |
| b                         | riserva (può entrare in slot riservati)                      |
| c                         | comando amx_kick                                            |
| d                         | comandi amx_ban e amx_unban                                 |
| e                         | comandi amx_slay e amx_slap                                 |
| f                         | comando amx_map                                            |
| g                         | comando amx_cvar (non tutti i cvar saranno disponibili)      |
| h                         | comando amx_cfg                                            |
| i                         | comandi amx_chat e altri comandi chat                       |
| j                         | comandi amx_vote e altri comandi voto                       |
| k                         | accesso al cvar sv_password (tramite comando amx_cvar)       |
| l                         | accesso al comando amx_rcon e al cvar rcon_password (tramite comando amx_cvar) |
| m                         | livello personalizzato A (per plugin aggiuntivi)             |
| n                         | livello personalizzato B (per plugin aggiuntivi)             |
| o                         | livello personalizzato C (per plugin aggiuntivi)             |
| p                         | livello personalizzato D (per plugin aggiuntivi)             |
| q                         | livello personalizzato E (per plugin aggiuntivi)             |
| r                         | livello personalizzato F (per plugin aggiuntivi)             |
| s                         | livello personalizzato G (per plugin aggiuntivi)             |
| t                         | livello personalizzato H (per plugin aggiuntivi)             |
| u                         | accesso al menu                                            |
| z                         | utente (non admin)                                        |



**Flag di connessione** 

| Flag | Descrizione                                        |
| ---- | -------------------------------------------------- |
| a    | disconnette il giocatore se password errata        |
| b    | clan tag                                           |
| c    | indica che è uno steamid/wonid                      |
| d    | indica che è un IP                                  |
| e    | password non controllata (serve solo nome/ip/steamid) |


## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />