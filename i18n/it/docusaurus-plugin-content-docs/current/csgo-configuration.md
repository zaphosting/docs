---
id: csgo-configuration
title: "CSGO: Configurazione server"
description: "Scopri come configurare i server di Counter-Strike per vari gamemode e impostazioni per ottimizzare l’esperienza di gioco → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guida Archiviata
Questo documento è stato archiviato. I documenti vengono archiviati quando non sono più rilevanti, sono errati o non aggiornati. È stato archiviato per i seguenti motivi:

Motivo: CS:GO non è più offerto attivamente né sviluppato. CS2 è il successore di CS:GO. Ti consigliamo di passare a CS2.
::::



## Introduzione

I server di Counter-Strike possono essere configurati in modo molto ampio. Le impostazioni base si configurano tramite il file **Server.cfg** e tramite la pagina delle impostazioni nell’interfaccia web. La configurazione avanzata avviene tramite i file di configurazione dei gamemode come gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, gamemode_demolition.cfg, ecc.

Nelle impostazioni puoi scegliere il gamemode che vuoi usare. I comandi di questa configurazione vengono caricati di conseguenza. Questi possono essere gestiti sia dall’amministrazione del server di gioco sia manualmente via FTP sotto **gXXXXXX/csgo/csgo/cfg/**. 


<InlineVoucher />

## Configurazione


### Configurazione tramite interfaccia (Impostazioni)

Nella pagina delle impostazioni puoi regolare le impostazioni base per il token GSL, tipo/gamemode, mapgroup, tickrate e altro.

![](https://screensaver01.zap-hosting.com/index.php/s/rfHJDH8e4mSQ4Mg/preview)



**GSL Token**

I Gameserver Login Tokens (GSLT) sono una procedura implementata da Steam come misura di protezione. Per far girare server di gioco di certi titoli Steam (principalmente giochi Source) è necessario generare un token. Maggiori informazioni le trovi qui:

[GSL-Token](source-gsltoken.md)



**Tipo di gioco (Gametype)**

Ci sono diversi gamemode. Qui sotto trovi la lista di tutte le opzioni disponibili:

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**Mapgroup**

I mapgroup sono gruppi di mappe che normalmente corrispondono a una certa categoria. Di default ci sono i gruppi **mg_active, mg_armsrace, mg_demolition, mg_allclassic**. Puoi anche crearne di tuoi. Questi devono essere aggiunti al file **Gamemodes_server.txt**. La struttura di un mapgroup è semplice e si presenta così:

```
{	 	 	 	 
 	"mg_meine_mapgroup"	 	 	 
 	{	 	 	 
 	 	"name"	"mg_meine_mapgroup"	 
 	 	"maps"	 	 
 	 	{	 	 
 	 	 	"de_map1"	""
 	 	 	"de_map2"	""
 	 	 	"de_map3"	""
 	 	 	"de_map4"	""
 	 	}	 	 
 	}	 	 	 
}
```



**Tickrate**

Il tickrate impostato determina la frequenza con cui il server invia la posizione di un giocatore agli altri giocatori. Più alto è il valore, migliore sarà l’esperienza di gioco. I valori impostabili sono: 33, 64, 100 e 128 (valore migliore). 



**Startmap**

La mappa di partenza serve a definire quale mappa deve essere caricata all’avvio del server. È importante che il nome della mappa sia scritto completamente e correttamente. L’estensione del file non è necessaria. 



**Pingboost**

Il Pingboost è un modo per modificare la sensazione di gioco tramite vari metodi per ottenere il ping più basso possibile.



### Configurazione tramite server.cfg

Nel file **server.cfg** puoi modificare le impostazioni per il nome del server, la password rcon e la password del server.

![](https://screensaver01.zap-hosting.com/index.php/s/RRyRgMzwaQPTR8b/preview)



**hostname**

Il nome host definisce il nome del server. Questo nome sarà mostrato nella lista server e nella scoreboard.



**rcon_password**

La rcon_password serve per eseguire comandi server nel gioco o tramite tool Rcon come HLSW. Puoi usarla con i seguenti comandi:

```
rcon_password YourPassword
rcon command // Per esempio: rcon changelevel de_dust2
```



**sv_password**

Se vuoi usare il server in privato o vuoi che solo certe persone vi accedano, puoi impostare una password server. Ti verrà chiesta la password quando ti connetti al server.



**sv_cheats**

Alcuni comandi sono protetti e possono essere usati solo se i cheat sono abilitati. Il comando può essere attivato o disattivato con i valori 0 (disabilitato) o 1 (abilitato). Comandi protetti includono, per esempio:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 e altri.



### Configurazione specifica per gamemode

Come descritto all’inizio, puoi definire il gamemode/gametype che vuoi usare nell’interfaccia nella pagina delle impostazioni. Dopo devi regolare le tue impostazioni e modificare il file di configurazione corrispondente. Nei config dei gamemode puoi fare modifiche dettagliate al gameplay, al comportamento dei bot ecc.



#### Comandi Bot



**bot_chatter**
Questo comando definisce cosa i bot possono dire nel gioco. Può essere impostato su off, radio, minimal o normal.



**bot_difficulty**
Questo comando definisce la difficoltà dei bot. I valori impostabili sono:  

- 0 - facile
- 1 - normale
- 2 - difficile
- 3 - esperto



**bot_quota**
Questo comando definisce il numero massimo di bot che puoi avere sul server. Il valore di default è 10.



**bot_quota_mode**
Questo comando definisce la modalità usata per controllare il numero di bot. Le opzioni sono: normal, fill e match. Normal è comportamento normale. Fill riempie il server con quanti bot sono impostati in "bot_quota". Match riempie gli slot giocatore. Per esempio, se ci sono 3 giocatori connessi e sono impostati 10 bot, allora verranno usati solo 7 bot.




#### Comandi Soldi

**cash_player_bomb_defused**
Questo comando definisce quanti soldi guadagna un giocatore disinnescando una bomba. Non puoi dare più del massimo di soldi che si possono ottenere sul server.



**cash_player_bomb_planted**
Questo comando definisce quanti soldi riceve un giocatore per aver piazzato la bomba.



**cash_player_damage_hostage**
Questo comando definisce quanti soldi vengono detratti o guadagnati per aver ferito un ostaggio. Di default il giocatore viene penalizzato di $30 ogni volta che l’ostaggio viene ferito.



**cash_player_interact_with_hostage**
Questo comando definisce i soldi guadagnati o persi per l’interazione con un ostaggio.



**cash_player_killed_enemy_default**
Questo comando definisce quanti soldi si guadagnano o perdono uccidendo un nemico con un’arma standard.



**cash_player_killed_enemy_factor**
Questo comando definisce quanti soldi si guadagnano uccidendo un nemico con una delle armi principali (pistole standard, fucili primari come AK/M4 ecc.).



**cash_player_killed_hostage**
Questo comando definisce quanti soldi si guadagnano o perdono uccidendo un ostaggio.



**cash_player_killed_teammate**
Questo comando definisce quanti soldi si guadagnano o perdono uccidendo un compagno di squadra.



**cash_player_rescued_hostage**
Questo comando definisce quanti soldi si guadagnano o perdono per aver salvato un ostaggio in modalità Hostage.



**cash_team_elimination_bomb_map**
Questo comando definisce quanti soldi guadagna ogni membro del team se vengono uccisi tutti e 5 i nemici in una mappa di disinnesco bomba come Mirage o Dust II.



**cash_team_elimination_hostage_map_t**
Questo comando definisce quanti soldi guadagna ogni terrorista vincendo un round in una mappa ostaggio per eliminazione.



**cash_team_elimination_hostage_map_ct**
Questo comando definisce quanti soldi guadagna ogni membro del team CT se eliminano tutti e 5 i terroristi in una mappa ostaggio.



**cash_team_hostage_alive**
Questo comando definisce quanti soldi si guadagnano o perdono se un ostaggio sopravvive al round.



**cash_team_hostage_interaction**
Questo comando definisce quanti soldi si guadagnano o perdono per l’interazione di un giocatore con un ostaggio.



**cash_team_loser_bonus**
Questo comando definisce i soldi iniziali che un team guadagna perdendo un round. Questo bonus aumenta a step fissi, controllati da un comando separato.



**cash_team_loser_bonus_consecutive_rounds**
Questo comando definisce di quanto aumentare il bonus per una serie di sconfitte consecutive. Se questo valore è $500 (impostazione di default), significa che ogni round perso consecutivamente darà al team perdente $500 in più rispetto al precedente. Questo vale fino a 5 round persi consecutivi.



**cash_team_planted_bomb_but_defused**
Questo comando definisce quanti soldi guadagna il team Terrorista per aver piazzato una bomba che viene poi disinnescata. Questo **si somma al bonus per la perdita del round**. Il valore di default è $800.



**cash_team_rescued_hostage**
Questo comando definisce quanti soldi guadagna **l’intero team** quando un giocatore salva un ostaggio.



**cash_team_terrorist_win_bomb**
Questo comando definisce quanti soldi guadagna ogni giocatore del team Terrorista vincendo un round con l’esplosione della bomba.



**cash_team_win_by_defusing_bomb**
Questo comando definisce quanti soldi guadagna il team CT vincendo un round disinnescando la bomba.



**cash_team_win_by_hostage_rescue**
Questo comando cheat definisce quanti soldi guadagnano i membri del team vincendo un round salvando un ostaggio.



**cash_team_win_by_time_running_out_hostage**
Questo comando definisce quanti soldi guadagna il team che protegge gli ostaggi vincendo il round perché non è stato possibile salvare ostaggi entro il tempo limite.



**cash_team_win_by_time_running_out_bomb**
Questo comando definisce quanti soldi guadagnano i giocatori dei counter-terroristi vincendo un round perché il tempo è scaduto. Questo significa che i terroristi non hanno piazzato la bomba o eliminato tutti i counter-terroristi nel tempo richiesto.



#### Comandi Gameplay



**mp_afterroundmoney**
Questo comando definisce quanti soldi vengono dati a ogni giocatore di ogni team alla fine di un round, indipendentemente da vittoria o sconfitta. Il valore di default è 0 (il bonus vittoria/sconfitta è impostato con un altro comando).



**mp_buytime**
Questo comando definisce il tempo (in secondi) che i giocatori hanno per comprare equipaggiamento dopo l’inizio del round.



**mp_buy_anywhere**
Questo comando definisce se i giocatori possono accedere al menu di acquisto fuori dalla zona di acquisto. Ricorda che il tempo di acquisto vale comunque.



**mp_death_drop_defuser**
Questo comando definisce se i kit di disinnesco vengono lasciati cadere alla morte o no.



**mp_death_drop_grenade**
Questo comando definisce quale granata (se presente) viene lasciata cadere quando un giocatore muore:

- Valore: 0 - Non lasciare granate alla morte
- Valore: 1 - Lascia la granata più preziosa alla morte



**mp_death_drop_gun**
Questo comando definisce quale arma deve essere lasciata cadere alla morte di un giocatore. L’impostazione di default è 1 (la migliore). Scegli una delle seguenti opzioni:

- Valore: 0 - Non lasciare armi alla morte
- Valore: 1 - Lascia l’arma migliore alla morte
- Valore: 2 - Se il giocatore ha un’arma in mano al momento della morte, lascia quella, altrimenti lascia l’arma più preziosa



**mp_defuser_allocation**
Questo comando definisce se i giocatori ricevono un kit di disinnesco gratis all’inizio del round e, se sì, chi lo riceve:

- Valore: 1 - Nessun kit gratis
- Valore: 2 - Giocatori casuali ricevono un kit
- Valore: 3 - Tutti i giocatori ricevono un kit



**mp_force_pick_time** 

Questo comando definisce la durata in secondi che un giocatore ha per scegliere una squadra. Dopo questo tempo la squadra viene scelta automaticamente. La durata di default è 15 secondi.



**mp_forcecamera**

Questo comando imposta la visuale degli spettatori (cioè chi possono guardare i giocatori morti). Ecco le opzioni:

- Valore: 0 - I giocatori morti possono guardare tutti i giocatori
- Valore: 1 - I giocatori morti possono guardare solo i compagni di squadra
- Valore: 2 - Lo schermo diventa nero fino al round successivo.



**mp_free_armor**

Questo comando definisce se un giocatore riceve armatura e casco gratis all’inizio del round:

- Valore: 0 - Disabilitato
- Valore: 1 - Abilitato



**mp_freezetime**

Questo comando definisce per quanto tempo i giocatori sono congelati all’inizio di ogni round. Questo tempo permette di comprare equipaggiamento e discutere tattiche prima che inizi il round. Default è 15 secondi.



**mp_friendlyfire**

Questo comando definisce se il fuoco amico è attivo o no. Quando è attivo, i giocatori possono danneggiare i propri compagni. L’impostazione di default dipende dal gamemode. Nei competitive è attivo, nei casual no.



**mp_win_panel_display_time**

Questo comando definisce il tempo (in secondi) in cui la scoreboard viene mostrata tra i round. Il valore di default è 3 secondi.



**mp_respawn_immunitytime**

Questo comando definisce quanti secondi i giocatori sono immuni dopo il respawn. Usato nella modalità Deathmatch.



**mp_halftime**

Questo comando definisce se le squadre vengono cambiate a metà partita o no. Il valore di default è 1.



**mp_maxmoney**

Questo comando definisce la quantità massima di soldi che un giocatore può avere.



**mp_maxrounds**

Questo comando definisce il numero massimo di round che il server giocherà.



**mp_roundtime**

Questo comando definisce il numero massimo di minuti che dura un round prima che venga vinto o perso. Se il round viene abbandonato dopo questo tempo, la vittoria va ai counter-terroristi. I secondi sono dati in decimali, 1.92 = 1m55s.



**mp_solid_teammates**

Questo comando definisce se puoi collidere con i tuoi compagni di squadra o no:

- Valore: 0 - Collisione disabilitata
- Valore: 1 - Collisione abilitata



**mp_startmoney**

Questo comando definisce quanti soldi riceve un giocatore all’inizio di una metà partita. Il valore di default è $800.



**mp_timelimit**

Questo comando definisce la durata massima di ogni partita in minuti. Di default è disabilitato (impostato a 0).



**mp_warmuptime**

Questo comando definisce quanto dura il periodo di riscaldamento prima che inizi la partita vera e propria. Il tempo è in secondi.



**sv_allow_votes**

Questo comando definisce se il voto (es. timeout) è permesso o no:

- Valore: 0 - Disabilitato
- Valore: 1 - Abilitato



**sv_infinite_ammo**

Questo comando definisce se i giocatori hanno munizioni infinite o no:

- Valore: 1 - Munizioni infinite senza bisogno di ricaricare.
- Valore: 2 - Numero infinito di caricatori, ma bisogna ricaricare quando sono vuoti.



**ammo_grenade_limit_flashbang**

Questo comando definisce quante flashbang un giocatore può portare.



**ammo_grenade_limit_total**

Questo comando definisce quante granate un giocatore può portare in totale.





### Configurazione Esport-Ready (Config ESL)

Se vuoi usare il server per scopi e-sport, vale la pena caricare le config fornite da ESL. Puoi scaricarle dal sito ufficiale ESL: [Download](https://play.eslgaming.com/download/26251762/)

Le config devono essere caricate nella directory **cfg** e possono essere eseguite in gioco con i seguenti comandi:

```
rcon_password YourPassword // Login via rcon per eseguire comandi rcon
rcon exec esl5on5
```

Dopodiché tutti i valori dei comandi ESL saranno caricati e il gioco può partire!

<InlineVoucher />