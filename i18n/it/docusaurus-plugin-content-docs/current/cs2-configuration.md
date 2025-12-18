---
id: cs2-configuration
title: "CS2: Configurazione server"
description: "Scopri come configurare i server di Counter-Strike con gamemode, mapgroup e token GSL per un gameplay ottimizzato → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-dods-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server di Counter-Strike possono essere configurati in molti modi. Le impostazioni base si configurano tramite il file **server.cfg** e tramite la pagina delle impostazioni nell’interfaccia web. La configurazione avanzata avviene tramite i file di configurazione delle gamemode come gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg e così via.

Nelle impostazioni puoi scegliere la gamemode che vuoi usare. I comandi di questa config vengono caricati di conseguenza. Questi possono essere gestiti sia dall’amministrazione del server di gioco sia manualmente via FTP sotto **gXXXXXX/cs2/game/csgo/cfg/**.

<InlineVoucher />

## Configurazione



### Configurazione tramite interfaccia (Impostazioni)

Nella pagina delle impostazioni puoi regolare le impostazioni base per il token GSL, tipo di gioco/gamemode, mapgroup e altro.

![](https://screensaver01.zap-hosting.com/index.php/s/eafHZL86Zr6QyGk/preview)



**Token GSL**

I Gameserver Login Tokens (GSLT) sono una procedura implementata da Steam come misura di protezione. Per far girare server di alcuni giochi Steam (principalmente giochi Source) è necessario generare un token. Maggiori informazioni le trovi qui:

[GSL-Token](source-gsltoken.md)



**Tipo di gioco**

Ci sono diverse gamemode. Qui sotto trovi la lista di tutte le opzioni disponibili:

- Classic Casual
- Classic Competitive
- Deathmatch
- Wingman



**Mapgroup**

I mapgroup sono gruppi di mappe che normalmente corrispondono a una certa categoria. Di default ci sono i gruppi **mg_active, mg_allclassic**. In alternativa puoi crearne di tuoi. Questi devono essere aggiunti al file **gamemodes_server.txt**. La struttura di un mapgroup è semplice da costruire e si presenta così:

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



**Startmap**

La startmap serve a definire quale mappa deve essere caricata all’avvio del server. È importante che il nome della mappa sia scritto completo e corretto. L’estensione del file non è necessaria.



**Pingboost**

Il Pingboost è un modo per modificare la sensazione di gioco tramite vari metodi per ottenere il ping più basso possibile.



### Configurazione tramite server.cfg

Nel file **server.cfg** puoi modificare le impostazioni per il nome del server, la password rcon e la password del server.

![](https://screensaver01.zap-hosting.com/index.php/s/9k98oi89CeEB3ka/preview)



**hostname**

L’hostname definisce il nome del server. Il nome sarà visibile nella lista server e nella scoreboard.



**rcon_password**

La rcon_password serve per eseguire comandi server in gioco o tramite tool Rcon come HLSW. Puoi usarla con questi comandi:

```
rcon_password YourPassword
rcon command // Per esempio: rcon changelevel de_dust2
```



**sv_password**

Se vuoi usare il server in privato o vuoi che solo alcune persone vi accedano, puoi impostare una password server. Ti verrà chiesta la password quando ti connetti al server.



**sv_cheats**

Alcuni comandi sono protetti e possono essere usati solo se i cheat sono abilitati. Il comando si abilita o disabilita con il valore 0 (disabilitato) o 1 (abilitato). Comandi protetti includono, per esempio:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 e altri.



### Configurazione specifica per gamemode

Come detto all’inizio, puoi definire la gamemode/tipo di gioco che vuoi usare nell’interfaccia nella pagina delle impostazioni. Dopo devi regolare le tue impostazioni e modificare il file di configurazione corrispondente. Nei file di configurazione delle gamemode puoi fare modifiche dettagliate al gameplay, al comportamento dei bot ecc.



#### Comandi per i bot



**bot_chatter**
Questo comando definisce cosa i bot possono dire in gioco. Può essere impostato su off, radio, minimal o normal.



**bot_difficulty**
Questo comando definisce la difficoltà dei bot. I valori possibili sono:

- 0 - facile
- 1 - normale
- 2 - difficile
- 3 - esperto



**bot_quota**
Questo comando definisce il numero massimo di bot che puoi avere sul server. Il valore di default è 10.



**bot_quota_mode**
Questo comando definisce la modalità usata per controllare il numero di bot. Le opzioni sono: normal, fill e match. Normal è comportamento normale. Fill riempie il server con il numero di bot impostato in "bot_quota". Match riempie gli slot giocatore. Per esempio, se ci sono 3 giocatori connessi e sono impostati 10 bot, allora verranno usati solo 7 bot.




#### Comandi soldi

**cash_player_bomb_defused**
Questo comando definisce quanti soldi guadagna un giocatore disinnescando una bomba. Non puoi dare più del massimo di soldi che si possono ottenere sul server.



**cash_player_bomb_planted**
Questo comando definisce quanti soldi riceve un giocatore per aver piazzato la bomba.



**cash_player_damage_hostage**
Questo comando definisce quanti soldi vengono detratti o guadagnati per aver ferito un ostaggio. Di default il giocatore perde $30 ogni volta che l’ostaggio viene ferito.



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
Questo comando definisce quanti soldi guadagna ogni membro del team se vengono uccisi tutti e 5 i nemici su mappe con bomba come Mirage o Dust II.



**cash_team_elimination_hostage_map_t**
Questo comando definisce quanti soldi guadagna ogni terrorista vincendo un round in una mappa ostaggi eliminando tutti.



**cash_team_elimination_hostage_map_ct**
Questo comando definisce quanti soldi guadagna ogni membro del team CT se eliminano tutti e 5 i terroristi in una mappa ostaggi.



**cash_team_hostage_alive**
Questo comando definisce quanti soldi si guadagnano o perdono se un ostaggio sopravvive al round.



**cash_team_hostage_interaction**
Questo comando definisce quanti soldi si guadagnano o perdono per l’interazione di un giocatore con un ostaggio.



**cash_team_loser_bonus**
Questo comando definisce i soldi iniziali che un team guadagna perdendo un round. Questo bonus aumenta a step fissi, controllati da un comando separato.



**cash_team_loser_bonus_consecutive_rounds**
Questo comando definisce di quanto aumentare i soldi per una serie di sconfitte consecutive. Se questo valore è $500 (impostazione di default), significa che ogni round perso consecutivamente fa guadagnare al team perdente $500 in più rispetto al precedente. Questo vale fino a 5 round persi di fila.



**cash_team_planted_bomb_but_defused**
Questo comando definisce quanti soldi guadagna il team Terrorista per aver piazzato una bomba che viene poi disinnescata. Questo **si somma al bonus per la sconfitta del round**. Il valore di default è $800.



**cash_team_rescued_hostage**
Questo comando definisce quanti soldi guadagna **l’intero team** quando un giocatore salva un ostaggio.



**cash_team_terrorist_win_bomb**
Questo comando definisce quanti soldi guadagna ogni giocatore del team Terrorista vincendo un round con l’esplosione della bomba.



**cash_team_win_by_defusing_bomb**
Questo comando definisce quanti soldi guadagna il team CT vincendo un round disinnescando la bomba.



**cash_team_win_by_hostage_rescue**
Questo comando cheat definisce quanti soldi guadagnano i membri del team vincendo un round salvando un ostaggio.



**cash_team_win_by_time_running_out_hostage**
Questo comando definisce quanti soldi guadagna il team che protegge gli ostaggi vincendo il round perché non è stato possibile salvare gli ostaggi entro il tempo limite.



**cash_team_win_by_time_running_out_bomb**
Questo comando definisce quanti soldi guadagnano i giocatori dei counter-terroristi vincendo un round perché il tempo è scaduto. Questo significa che i terroristi non hanno piazzato la bomba o eliminato tutti i counter-terroristi entro il tempo richiesto.



#### Comandi Gameplay



**mp_afterroundmoney**
Questo comando definisce quanti soldi vengono dati a ogni giocatore di ogni team alla fine di un round, indipendentemente da vittoria o sconfitta. Il valore di default è 0 (il bonus vittoria/sconfitta si imposta con un altro comando).



**mp_buytime**
Questo comando definisce il tempo (in secondi) che i giocatori hanno per comprare equipaggiamento dopo l’inizio del round.



**mp_buy_anywhere**
Questo comando definisce se i giocatori possono accedere al menu di acquisto fuori dalla zona di acquisto. Ricorda che il tempo per comprare vale comunque.



**mp_death_drop_defuser**
Questo comando definisce se i kit di disinnesco vengono lasciati cadere alla morte o no.



**mp_death_drop_grenade**
Questo comando definisce quale granata (se presente) viene lasciata cadere quando un giocatore muore:

- Valore: 0 - Non lasciare granate alla morte
- Valore: 1 - Lascia la granata più preziosa alla morte



**mp_death_drop_gun**
Questo comando definisce quale arma viene lasciata cadere quando un giocatore muore. Il valore di default è 1 (la migliore). Scegli tra:

- Valore: 0 - Non lasciare armi alla morte
- Valore: 1 - Lascia la migliore arma alla morte
- Valore: 2 - Se il giocatore ha un’arma in mano al momento della morte, lascia quella, altrimenti lascia la sua arma più preziosa



**mp_defuser_allocation**
Questo comando definisce se i giocatori ricevono un kit di disinnesco gratis all’inizio del round e, se sì, chi lo riceve:

- Valore: 1 - Nessun kit gratis
- Valore: 2 - Kit dati a giocatori casuali
- Valore: 3 - Kit dati a tutti i giocatori



**mp_force_pick_time**

Questo comando definisce la durata in secondi che un giocatore ha per scegliere una squadra. Dopo questo tempo la squadra viene scelta automaticamente. Il valore di default è 15 secondi.



**mp_forcecamera**

Questo comando imposta cosa possono vedere gli spettatori (cioè chi possono guardare i giocatori morti). Ecco le opzioni:

- Valore: 0 - I giocatori morti possono guardare tutti i giocatori
- Valore: 1 - I giocatori morti possono guardare solo i compagni di squadra
- Valore: 2 - Lo schermo diventa nero fino al round successivo.



**mp_free_armor**

Questo comando definisce se un giocatore riceve armatura e casco gratis all’inizio del round:

- Valore: 0 - Disabilitato
- Valore: 1 - Abilitato



**mp_freezetime**

Questo comando definisce per quanto tempo i giocatori sono congelati all’inizio di ogni round. Questo tempo permette di comprare equipaggiamento e discutere tattiche prima che inizi il round. Il valore di default è 15 secondi.



**mp_friendlyfire**

Questo comando definisce se il fuoco amico è abilitato o disabilitato. Se attivato, i giocatori possono danneggiare i propri compagni. Il valore di default dipende dalla modalità di gioco: nelle competitive è attivo, nelle casual no.



**mp_win_panel_display_time**

Questo comando definisce per quanti secondi viene mostrata la scoreboard tra i round. Il valore di default è 3 secondi.



**mp_respawn_immunitytime**

Questo comando definisce per quanti secondi i giocatori sono immuni dopo il respawn. Usato nella modalità Deathmatch.



**mp_halftime**

Questo comando definisce se le squadre vengono scambiate a metà partita o no. Il valore di default è 1.



**mp_maxmoney**

Questo comando definisce la quantità massima di soldi che un giocatore può avere.



**mp_maxrounds**

Questo comando definisce il numero massimo di round che il server giocherà.



**mp_roundtime**

Questo comando definisce il numero massimo di minuti che dura un round prima che venga vinto o perso. Se il round termina dopo questo tempo, la vittoria va ai counter-terroristi. I secondi si indicano in decimali, per esempio 1.92 = 1m55s.



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

Questo comando definisce se il voto (es. per timeout) è permesso o no:

- Valore: 0 - Disabilitato
- Valore: 1 - Abilitato



**sv_infinite_ammo**

Questo comando definisce se i giocatori hanno munizioni infinite o no:

- Valore: 1 - Munizioni infinite sparabili senza ricaricare.
- Valore: 2 - Numero infinito di caricatori, ma bisogna ricaricare quando sono vuoti.



**ammo_grenade_limit_flashbang**

Questo comando definisce quante flashbang un giocatore può portare.



**ammo_grenade_limit_total**

Questo comando definisce quante granate un giocatore può portare in totale.

<InlineVoucher />