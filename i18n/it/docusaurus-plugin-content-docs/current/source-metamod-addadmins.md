---
id: source-metamod-addadmins
title: Diventa admin del server
description: "Scopri come diventare admin ottenendo il tuo Steam ID e configurando i permessi per la gestione del server → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Diventa admin

Per poterti registrare come admin, è fondamentale installare Source- / Metamod.

Inoltre ti serve lo Steam ID del tuo account Steam. Ci sono diversi modi per ottenerlo. Puoi usare un sito esterno che offre questo servizio oppure la console di gioco.

<InlineVoucher />

### SteamID tramite sito web

Prima di tutto, apri il profilo su Steam e fai clic destro da qualsiasi parte del profilo. Da lì puoi copiare l’URL Steam del profilo.

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

Dopodiché, incolla l’URL in uno di questi siti:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

Riceverai lo Steam ID insieme alle info generali dell’account. Ti serve il **Steam ID 32**:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID tramite console di gioco

Avvia il gioco e connettiti al tuo server. Apri la console di gioco e usa il comando 'status', otterrai un output simile a questo:

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### Configurazione

Ora connettiti di nuovo al server via FTP e apri il file admins.cfg. Lo trovi in: addons/sourcemod/configs

Il file contiene già un esempio di come inserire un admin. Puoi copiarlo e modificarlo così:

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

Il **nome giocatore** non deve corrispondere al nome dell’account Steam, serve solo per avere una panoramica nel Config. 'auth' indica il tipo di autenticazione, qui Steam è fisso, quindi non serve cambiarlo. In `identity` inserisci lo SteamID32. Con `flags` assegni i permessi. Ci sono diversi livelli di autorizzazioni.

| permesso   | flag | uso                      |
|------------|:----:|:------------------------:|
| reservation| a    | riserva slot             |
| generic    | b    | basi (necessario)        |
| kick       | c    | espelli giocatori        |
| ban        | d    | banna giocatori          |
| unban      | e    | sblocca giocatori        |
| slay       | f    | uccidi o elimina giocatori|
| changemap  | g    | cambia mappa             |
| cvar       | h    | modifica valori server   |
| config     | i    | esegui config server     |
| chat       | j    | diritti chat avanzati    |
| vote       | k    | votazioni admin          |
| password   | l    | imposta password server  |
| rcon       | m    | esegui comandi RCON      |
| cheats     | n    | attiva sv_cheats         |
| root       | z    | accesso completo         |

A seconda dei permessi da assegnare, scrivi le flag una dopo l’altra. Per esempio, per dare solo il permesso di kick, assegni 'b' e 'c'. Per accesso completo basta solo la flag `z`.

### Usare il Menu Admin

Con il comando 'admin' in chat o 'sm_admin' in console apri il menu.

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />