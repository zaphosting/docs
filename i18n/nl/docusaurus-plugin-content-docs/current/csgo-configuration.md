---
id: csgo-configuration
title: "CSGO: Serverconfiguratie"
description: "Ontdek hoe je Counter-Strike servers configureert voor verschillende gamemodi en instellingen om de gameplay-ervaring te optimaliseren → Leer nu meer"
sidebar_label: Serverconfiguratie
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Gearchiveerde gids
Dit document is gearchiveerd. Documenten worden gearchiveerd als ze niet meer relevant, onjuist of verouderd zijn. Het is om de volgende redenen gearchiveerd:

Reden: CS:GO wordt niet meer actief aangeboden en wordt niet meer ontwikkeld. CS2 is de opvolger van CS:GO. We raden aan over te stappen naar CS2.
::::



## Introductie

Counter-Strike servers zijn breed configureerbaar. Basisinstellingen kun je aanpassen via het **Server.cfg** bestand en via de instellingenpagina in de webinterface. De geavanceerde configuratie gebeurt via de gamemode config-bestanden zoals gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, gamemode_demolition.cfg, enzovoort.

Onder de instellingen kies je de gamemode die je wilt gebruiken. De commando’s van deze config worden dan geladen. Deze kun je beheren via de game server administratie of handmatig via FTP onder **gXXXXXX/csgo/csgo/cfg/**. 


<InlineVoucher />

## Configuratie


### Configuratie via de interface (Instellingen)

Op de instellingenpagina kun je basisinstellingen aanpassen zoals de GSL-token, gametype/gamemode, mapgroup, tickrate en meer.  

![](https://screensaver01.zap-hosting.com/index.php/s/rfHJDH8e4mSQ4Mg/preview)



**GSL Token**

Gameserver Login Tokens (GSLT’s) zijn een beveiligingsmaatregel die Steam heeft ingevoerd. Om gameservers van bepaalde Steam-games (voornamelijk Source-games) te draaien, moet je een token genereren. Meer info vind je hier:

[GSL-Token](source-gsltoken.md)



**Gametype**

Er zijn verschillende gamemodi. Hieronder zie je een lijst van alle beschikbare opties:

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**Mapgroup**

Mapgroups zijn groepen maps die meestal bij een bepaalde categorie horen. Standaard zijn er de groepen **mg_active, mg_armsrace, mg_demolition, mg_allclassic**. Je kunt ook je eigen mapgroups maken. Die moeten worden toegevoegd aan **Gamemodes_server.txt**. De structuur van zo’n mapgroup is simpel en ziet er zo uit:

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

De ingestelde tickrate bepaalt hoe vaak de server de positie van een speler naar de andere spelers stuurt. Hoe hoger de waarde, hoe beter de game-ervaring. De volgende waarden zijn mogelijk: 33, 64, 100 en 128 (beste waarde). 



**Startmap**

De startmap bepaalt welke map geladen wordt tijdens het opstarten. Het is belangrijk dat de naam van de map volledig en correct is geschreven. De bestandsextensie is niet nodig. 



**Pingboost**

Pingboost is een manier om het gevoel van de game te verbeteren door verschillende methodes toe te passen om zo laag mogelijke ping te bereiken.



### Configuratie via server.cfg

In de **server.cfg** kun je instellingen aanpassen zoals servernaam, rcon-wachtwoord en serverwachtwoord. 

![](https://screensaver01.zap-hosting.com/index.php/s/RRyRgMzwaQPTR8b/preview)



**hostname**

De hostname bepaalt de naam van de server. Deze naam wordt weergegeven in de serverlijst en op het scoreboard.



**rcon_password**

Het rcon_password is nodig om servercommando’s uit te voeren in de game of via Rcon-tools zoals HLSW. Dit doe je met de volgende commando’s:

```
rcon_password YourPassword
rcon command // Bijvoorbeeld: rcon changelevel de_dust2
```



**sv_password**

Wil je je server privé houden of alleen toegankelijk maken voor bepaalde mensen? Dan kun je een serverwachtwoord instellen. Je wordt om het wachtwoord gevraagd bij het verbinden met de server.



**sv_cheats**

Bepaalde commando’s zijn beschermd en kunnen alleen gebruikt worden als cheats aanstaan. Dit zet je aan of uit met 0 (uit) of 1 (aan). Voorbeelden van beschermde commando’s zijn:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 en meer.



### Gamemode-specifieke configuratie

Zoals eerder beschreven kies je in de interface op de instellingenpagina de gamemode/gametype die je wilt gebruiken. Daarna pas je je instellingen aan en wijzig je het bijbehorende config-bestand. In de gamemode-configs kun je gedetailleerde aanpassingen doen aan gameplay, botgedrag, enzovoort.



#### Bot Commando’s



**bot_chatter**
Bepaalt wat bots mogen zeggen in de game. Kan uit, radio, minimaal of normaal zijn.



**bot_difficulty**
Bepaalt hoe moeilijk bots zijn. Mogelijke waarden:  

- 0 - makkelijk
- 1 - normaal
- 2 - moeilijk
- 3 - expert



**bot_quota**
Bepaalt het maximale aantal bots op je server. Standaard is 10.



**bot_quota_mode**
Bepaalt de modus voor het aantal bots. Opties: normal, fill en match. Normal is normaal gedrag. Fill vult de server met bots tot het ingestelde aantal bij "bot_quota". Match vult de spelersslots. Bijvoorbeeld: als 3 spelers verbonden zijn en bot_quota is 10, dan worden er 7 bots gebruikt.




#### Money Commando’s

**cash_player_bomb_defused**
Bepaalt hoeveel geld een speler krijgt voor het ontmantelen van een bom. Je kunt niet meer geven dan het maximale bedrag dat op de server mogelijk is.



**cash_player_bomb_planted**
Bepaalt hoeveel geld een speler krijgt voor het planten van de bom.



**cash_player_damage_hostage**
Bepaalt hoeveel geld wordt afgetrokken of verdiend bij het verwonden van een gijzelaar. Standaard kost het de speler $30 per keer dat de gijzelaar gewond raakt.



**cash_player_interact_with_hostage**
Bepaalt het geld dat verdiend of verloren wordt bij interactie met een gijzelaar.



**cash_player_killed_enemy_default**
Bepaalt hoeveel geld je krijgt of verliest bij het doden van een vijand met een standaardwapen.



**cash_player_killed_enemy_factor**
Bepaalt hoeveel geld je krijgt bij het doden van een vijand met een hoofdwapen (standaard pistolen, primaire geweren zoals AK/M4, enz.).



**cash_player_killed_hostage**
Bepaalt hoeveel geld je krijgt of verliest bij het doden van een gijzelaar.



**cash_player_killed_teammate**
Bepaalt hoeveel geld je krijgt of verliest bij het doden van een teamgenoot.



**cash_player_rescued_hostage**
Bepaalt hoeveel geld je krijgt of verliest voor het veilig bevrijden van een gijzelaar in Hostage Mode.



**cash_team_elimination_bomb_map**
Bepaalt hoeveel geld elk teamlid krijgt als alle 5 vijanden op een bomontmantelingsmap zoals Mirage of Dust II worden uitgeschakeld.



**cash_team_elimination_hostage_map_t**
Bepaalt hoeveel geld elke terrorist krijgt voor het winnen van een ronde op een gijzelingsmap door eliminatie.



**cash_team_elimination_hostage_map_ct**
Bepaalt hoeveel geld elk teamlid aan de CT-kant krijgt als ze alle 5 terroristen op een gijzelingsmap elimineren.



**cash_team_hostage_alive**
Bepaalt hoeveel geld wordt verdiend of verloren als een gijzelaar de ronde overleeft. 



**cash_team_hostage_interaction**
Bepaalt hoeveel geld wordt verdiend of verloren bij interactie met een gijzelaar.



**cash_team_loser_bonus**
Bepaalt het startbedrag dat een team krijgt voor het verliezen van een ronde. Dit bedrag stijgt in vaste stappen, geregeld door een apart commando.



**cash_team_loser_bonus_consecutive_rounds**
Bepaalt hoeveel het geldbedrag stijgt bij een reeks verliezen. Als deze waarde $500 is (standaard), betekent dit dat elk volgend verlies $500 meer oplevert dan het vorige. Dit geldt tot 5 opeenvolgende verliesrondes.



**cash_team_planted_bomb_but_defused**
Bepaalt hoeveel geld het Terrorist-team krijgt voor het planten van een bom die uiteindelijk wordt ontmanteld. Dit **stapelt zich op bij de rondeverliesbonus**. Standaard is dit $800.



**cash_team_rescued_hostage**
Bepaalt hoeveel geld **het hele team** krijgt als één speler de gijzelaar bevrijdt.



**cash_team_terrorist_win_bomb**
Bepaalt hoeveel geld elke speler van het Terrorist-team wint als ze een ronde winnen doordat de bom ontploft.



**cash_team_win_by_defusing_bomb**
Bepaalt hoeveel geld het CT-team krijgt voor het winnen van een ronde door de bom te ontmantelen.



**cash_team_win_by_hostage_rescue**
Dit cheat-commando bepaalt hoeveel geld teamleden krijgen als ze een ronde winnen door een gijzelaar te redden.



**cash_team_win_by_time_running_out_hostage**
Bepaalt hoeveel geld het team dat de gijzelaars bewaakt krijgt als ze winnen doordat er binnen de tijd geen gijzelaars worden bevrijd.



**cash_team_win_by_time_running_out_bomb**
Bepaalt hoeveel geld de counter-terroristen krijgen als ze winnen doordat de tijd om is. Dit betekent dat terroristen geen bom hebben geplaatst of niet alle counter-terroristen hebben uitgeschakeld binnen de tijd.



#### Gameplay Commando’s



**mp_afterroundmoney**
Bepaalt hoeveel geld elke speler van elk team krijgt aan het einde van een ronde, ongeacht winst of verlies. Standaard is dit 0 (win/verlies bonus wordt met een ander commando geregeld).



**mp_buytime**
Bepaalt de tijd (in seconden) die spelers hebben om uitrusting te kopen na het begin van een ronde. 



**mp_buy_anywhere**
Bepaalt of spelers het koopmenu buiten de koopzone kunnen openen. De koop tijd blijft wel gelden. 



**mp_death_drop_defuser**
Bepaalt of defuse kits worden gedropt bij de dood van een speler. 



**mp_death_drop_grenade**
Bepaalt welke granaat (indien aanwezig) wordt gedropt als een speler wordt gedood:

- Waarde: 0 - Geen granaten droppen bij dood
- Waarde: 1 - De beste en meest waardevolle granaat droppen bij dood



**mp_death_drop_gun**
Bepaalt welk wapen wordt gedropt als een speler wordt gedood. Standaard is 1 (de beste). Kies uit:

- Waarde: 0 - Geen wapens droppen bij dood
- Waarde: 1 - Het beste wapen droppen bij dood
- Waarde: 2 - Als de speler een wapen in de hand heeft bij dood, drop dat, anders het meest waardevolle wapen



**mp_defuser_allocation**
Bepaalt of spelers gratis een defuser krijgen aan het begin van de ronde en zo ja, wie:

- Waarde: 1 - Geen gratis defusers
- Waarde: 2 - Willekeurige spelers krijgen een defuser
- Waarde: 3 - Alle spelers krijgen een defuser



**mp_force_pick_time** 

Bepaalt de tijd in seconden die een speler heeft om een team te kiezen. Na deze tijd wordt automatisch een team gekozen. Standaard is 15 seconden.



**mp_forcecamera**

Bepaalt wie dode spelers kunnen bekijken (spectatorscope). Argumenten:

- Waarde: 0 - Dode spelers kunnen iedereen bekijken
- Waarde: 1 - Dode spelers kunnen alleen hun teamgenoten bekijken
- Waarde: 2 - Het scherm wordt zwart tot de volgende ronde



**mp_free_armor**

Bepaalt of spelers gratis armor en helm krijgen aan het begin van de ronde:

- Waarde: 0 - Uit
- Waarde: 1 - Aan



**mp_freezetime**

Bepaalt hoe lang spelers bevroren zijn aan het begin van elke ronde. Deze freeze tijd geeft spelers de kans om uitrusting te kopen en tactieken te bespreken. Standaard 15 seconden.



**mp_friendlyfire**

Bepaalt of friendly fire aan of uit staat. Als het aan staat, kunnen spelers hun eigen teamgenoten beschadigen. Standaard staat dit aan in competitive gamemodi, maar uit in casual.



**mp_win_panel_display_time**

Bepaalt hoe lang (in seconden) het scoreboard wordt getoond tussen rondes. Standaard 3 seconden.



**mp_respawn_immunitytime**

Bepaalt hoeveel seconden spelers onkwetsbaar zijn na respawn. Dit wordt gebruikt in Deathmatch.



**mp_halftime**

Bepaalt of teams wisselen bij de rust. Standaard 1 (aan).



**mp_maxmoney**

Bepaalt het maximale geld dat een speler kan hebben.



**mp_maxrounds**

Bepaalt het maximale aantal rondes dat de server speelt.



**mp_roundtime**

Bepaalt het maximale aantal minuten dat een ronde duurt voordat deze gewonnen/verloren is. Als de ronde na deze tijd wordt afgebroken, wint het CT-team. De seconden worden als decimaal getal opgegeven, bijvoorbeeld 1.92 = 1m55s.



**mp_solid_teammates**

Bepaalt of je met je teamgenoten kunt botsen:

- Waarde: 0 - Botsing uit
- Waarde: 1 - Botsing aan



**mp_startmoney**

Bepaalt hoeveel geld een speler krijgt aan het begin van een helft. Standaard $800.



**mp_timelimit**

Bepaalt de maximale duur van een game in minuten. Standaard uit (0).



**mp_warmuptime**

Bepaalt hoe lang de warming-up duurt voordat de game start. Tijd in seconden.



**sv_allow_votes**

Bepaalt of stemmen (bijv. timeout stemmen) toegestaan zijn:

- Waarde: 0 - Uit
- Waarde: 1 - Aan



**sv_infinite_ammo**

Bepaalt of spelers onbeperkte munitie krijgen:

- Waarde: 1 - Oneindige munitie zonder herladen
- Waarde: 2 - Oneindig aantal magazijnen, maar moet wel herladen worden



**ammo_grenade_limit_flashbang**

Bepaalt hoeveel flashbangs een speler mag dragen.



**ammo_grenade_limit_total**

Bepaalt hoeveel granaten een speler in totaal mag dragen.





### Esport-Ready Configuratie (ESL Configs)

Wil je de server gebruiken voor e-sports? Upload dan de configs van ESL. Je kunt ze downloaden van de officiële ESL-site: [Download](https://play.eslgaming.com/download/26251762/)

Upload de configs naar de **cfg** map en voer ze in de game uit met:

```
rcon_password YourPassword // Login via rcon om rcon-commando’s uit te voeren
rcon exec esl5on5
```

Daarna worden alle ESL-commando’s geladen en kan de game beginnen!

<InlineVoucher />