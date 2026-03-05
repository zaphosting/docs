---
id: csgo-configuration
title: "CS:GO: Serverconfiguratie"
description: "Ontdek hoe je Counter-Strike servers configureert met gamemodes, mapgroepen en GSL-tokens voor optimale gameplay → Leer het nu"
sidebar_label: Serverconfiguratie
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Counter-Strike servers zijn super flexibel te configureren. Basisinstellingen pas je aan via het **server.cfg** configuratiebestand en via de instellingenpagina in de webinterface. Voor de geavanceerde configuratie gebruik je de gamemode configbestanden zoals gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, enzovoort.

Onder instellingen kies je de gamemode die je wilt gebruiken. De bijbehorende commands van deze config worden dan geladen. Je beheert deze via de game server administratie of handmatig via FTP onder **gXXXXXX/CS:GO/game/csgo/cfg/**.

<InlineVoucher />

## Configuratie



### Configuratie via de interface (Instellingen)

Op de instellingenpagina kun je basisinstellingen aanpassen zoals de GSL-token, gametype/gamemode, mapgroep en meer.

![](https://screensaver01.zap-hosting.com/index.php/s/eafHZL86Zr6QyGk/preview)



**GSL Token**

Gameserver Login Tokens (GSLT’s) zijn een beveiligingsmaatregel van Steam. Om gameservers van bepaalde Steam games (vooral Source games) te draaien, moet je een token genereren. Meer info vind je hier:

[GSL-Token](source-gsltoken.md)



**Gametype**

Er zijn verschillende gamemodes. Hieronder zie je een lijst van alle beschikbare opties:

- Classic Casual
- Classic Competitive
- Deathmatch
- Wingman



**Mapgroep**

Mapgroepen zijn groepen maps die meestal bij een bepaalde categorie horen. Standaard zijn er de **mg_active, mg_allclassic** groepen. Je kunt ook je eigen mapgroepen maken. Die voeg je toe aan de **gamemodes_server.txt**. De structuur van zo’n mapgroep is simpel en ziet er zo uit:

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

De startmap bepaalt welke map geladen wordt tijdens het opstarten. Zorg dat de mapnaam volledig en correct is geschreven. De bestandsextensie is niet nodig.



**Pingboost**

Pingboost is een manier om het gamegevoel te beïnvloeden via verschillende methodes om zo laag mogelijke ping te bereiken.



### Configuratie via server.cfg

In de **server.cfg** pas je instellingen aan zoals servernaam, rcon-wachtwoord en serverwachtwoord.

![](https://screensaver01.zap-hosting.com/index.php/s/9k98oi89CeEB3ka/preview)



**hostname**

De hostname bepaalt de naam van je server. Deze naam zie je terug in de serverlijst en op het scoreboard.



**rcon_password**

Het rcon_password heb je nodig om servercommands uit te voeren in de game of via Rcon-tools zoals HLSW. Dit doe je met de volgende commands:

```
rcon_password YourPassword
rcon command // Bijvoorbeeld: rcon changelevel de_dust2
```



**sv_password**

Wil je je server privé houden of alleen toegankelijk maken voor bepaalde mensen? Stel dan een serverwachtwoord in. Bij het verbinden met de server wordt hierom gevraagd.



**sv_cheats**

Sommige commands zijn beschermd en werken alleen als cheats aanstaan. Dit zet je aan of uit met 0 (uit) of 1 (aan). Voorbeelden van beschermde commands zijn:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 en meer.



### Gamemode-specifieke configuratie

Zoals eerder genoemd kies je de gamemode/gametype via de instellingenpagina in de interface. Daarna pas je je instellingen aan in het bijbehorende configbestand. In de gamemode-configs kun je gedetailleerde aanpassingen doen aan gameplay, botgedrag, enzovoort.



#### Bot Commands



**bot_chatter**  
Bepaalt wat bots mogen zeggen in de game. Kan uit, radio, minimaal of normaal zijn.



**bot_difficulty**  
Bepaalt hoe moeilijk bots zijn. Mogelijke waardes:

- 0 - makkelijk
- 1 - normaal
- 2 - moeilijk
- 3 - expert



**bot_quota**  
Maximaal aantal bots op je server. Standaard is 10.



**bot_quota_mode**  
Bepaalt hoe het aantal bots geregeld wordt. Opties: normal, fill en match. Normal is normaal gedrag. Fill vult de server met bots tot het aantal van "bot_quota". Match vult spelersplekken. Bijvoorbeeld: als 3 spelers verbonden zijn en 10 bots ingesteld zijn, dan worden er 7 bots gebruikt.




#### Money Commands

**cash_player_bomb_defused**  
Hoeveel geld een speler krijgt voor het ontmantelen van een bom. Je kunt niet meer geven dan het maximum dat op de server mogelijk is.



**cash_player_bomb_planted**  
Hoeveel geld een speler krijgt voor het planten van de bom.



**cash_player_damage_hostage**  
Hoeveel geld wordt afgetrokken of verdiend bij het verwonden van een gijzelaar. Standaard kost het de speler $30 per keer dat de gijzelaar gewond raakt.



**cash_player_interact_with_hostage**  
Hoeveel geld verdiend of verloren wordt bij interactie met een gijzelaar.



**cash_player_killed_enemy_default**  
Hoeveel geld je krijgt of verliest voor het doden van een vijand met een standaardwapen.



**cash_player_killed_enemy_factor**  
Hoeveel geld je krijgt voor het doden van een vijand met een hoofdwapen (standaard pistolen, primaire geweren zoals AK/M4, etc.).



**cash_player_killed_hostage**  
Hoeveel geld je krijgt of verliest als je een gijzelaar doodt.



**cash_player_killed_teammate**  
Hoeveel geld je krijgt of verliest voor het doden van een teamgenoot.



**cash_player_rescued_hostage**  
Hoeveel geld je krijgt of verliest voor het veilig bevrijden van een gijzelaar in Hostage Mode.



**cash_team_elimination_bomb_map**  
Hoeveel geld elk teamlid krijgt als alle 5 vijanden op een bomontmantelmap zoals Mirage of Dust II worden uitgeschakeld.



**cash_team_elimination_hostage_map_t**  
Hoeveel geld elke terrorist krijgt voor het winnen van een ronde op een gijzelingsmap door eliminatie.



**cash_team_elimination_hostage_map_ct**  
Hoeveel geld elk CT-teamlid krijgt als ze alle 5 terroristen op een gijzelingsmap elimineren.



**cash_team_hostage_alive**  
Hoeveel geld je krijgt of verliest als een gijzelaar de ronde overleeft.



**cash_team_hostage_interaction**  
Hoeveel geld je krijgt of verliest voor interactie met een gijzelaar.



**cash_team_loser_bonus**  
Startgeld dat een team krijgt na het verliezen van een ronde. Dit neemt toe in vaste stappen, geregeld door een aparte command.



**cash_team_loser_bonus_consecutive_rounds**  
Hoeveel het startgeld verhoogt bij een reeks van verloren rondes. Standaard $500 betekent dat elk volgende verlies $500 meer oplevert dan de vorige. Dit geldt tot 5 opeenvolgende verliezen.



**cash_team_planted_bomb_but_defused**  
Hoeveel geld het Terrorist-team krijgt voor het planten van een bom die uiteindelijk wordt ontmanteld. Dit **stapelt met de rondeverliesbonus**. Standaard $800.



**cash_team_rescued_hostage**  
Hoeveel geld **het hele team** krijgt als één speler een gijzelaar bevrijdt.



**cash_team_terrorist_win_bomb**  
Hoeveel geld elke speler van het Terrorist-team krijgt als ze winnen doordat de bom ontploft.



**cash_team_win_by_defusing_bomb**  
Hoeveel geld het CT-team krijgt voor het winnen door het ontmantelen van de bom.



**cash_team_win_by_hostage_rescue**  
Hoeveel geld teamleden krijgen als ze winnen door een gijzelaar te redden.



**cash_team_win_by_time_running_out_hostage**  
Hoeveel geld het team krijgt dat de gijzelaars bewaakt als ze winnen doordat er binnen de tijd geen gijzelaars worden bevrijd.



**cash_team_win_by_time_running_out_bomb**  
Hoeveel geld de CT-spelers krijgen als ze winnen doordat de tijd om is zonder dat terroristen een bom hebben geplaatst of alle CT’s hebben uitgeschakeld.



#### Gameplay Commands



**mp_afterroundmoney**  
Hoeveel geld elke speler aan het einde van een ronde krijgt, ongeacht winst of verlies. Standaard 0 (win/verlies bonus wordt met een andere command geregeld).



**mp_buytime**  
Hoeveel tijd (in seconden) spelers hebben om spullen te kopen na het begin van een ronde.



**mp_buy_anywhere**  
Of spelers buiten de koopzone het koopmenu kunnen openen. De koop tijd blijft wel gelden.



**mp_death_drop_defuser**  
Of defuse kits worden gedropt bij overlijden.



**mp_death_drop_grenade**  
Welke granaat (indien aanwezig) wordt gedropt bij overlijden:

- Waarde: 0 - Geen granaat droppen
- Waarde: 1 - Beste waardevolle granaat droppen



**mp_death_drop_gun**  
Welk wapen wordt gedropt bij overlijden. Standaard 1 (beste wapen). Opties:

- Waarde: 0 - Geen wapens droppen
- Waarde: 1 - Beste wapen droppen
- Waarde: 2 - Wapen in hand droppen als aanwezig, anders meest waardevolle wapen



**mp_defuser_allocation**  
Of spelers gratis defusers krijgen aan het begin van de ronde en wie:

- Waarde: 1 - Geen gratis defusers
- Waarde: 2 - Willekeurige spelers krijgen een defuser
- Waarde: 3 - Alle spelers krijgen een defuser



**mp_force_pick_time**  

Hoe lang (in seconden) een speler heeft om een team te kiezen. Na deze tijd wordt automatisch een team gekozen. Standaard 15 seconden.



**mp_forcecamera**

Bepaalt wie dode spelers mogen volgen als toeschouwer. Opties:

- Waarde: 0 - Dode spelers kunnen iedereen bekijken
- Waarde: 1 - Dode spelers kunnen alleen teamgenoten bekijken
- Waarde: 2 - Scherm wordt zwart tot de volgende ronde



**mp_free_armor**

Of spelers gratis armor en helm krijgen aan het begin van de ronde:

- Waarde: 0 - Uit
- Waarde: 1 - Aan



**mp_freezetime**

Hoe lang spelers bevroren zijn aan het begin van elke ronde. Dit geeft tijd om spullen te kopen en tactieken te bespreken. Standaard 15 seconden.



**mp_friendlyfire**

Of teamdamage aan staat. In competitieve gamemodes staat dit aan, in casual niet.



**mp_win_panel_display_time**

Hoe lang (in seconden) het scoreboard tussen rondes wordt getoond. Standaard 3 seconden.



**mp_respawn_immunitytime**

Hoe lang spelers onkwetsbaar zijn na respawn. Voor Deathmatch gamemode.



**mp_halftime**

Of teams van kant wisselen halverwege de match. Standaard aan (1).



**mp_maxmoney**

Maximaal geld dat een speler kan hebben.



**mp_maxrounds**

Maximaal aantal rondes dat de server speelt.



**mp_roundtime**

Maximale duur van een ronde in minuten voordat deze beslist wordt. Als de ronde voorbij is zonder winnaar, wint het CT-team. Seconden worden als decimaal getal opgegeven, bv. 1.92 = 1m55s.



**mp_solid_teammates**

Of je met teamgenoten kunt botsen:

- Waarde: 0 - Botsing uit
- Waarde: 1 - Botsing aan



**mp_startmoney**

Hoeveel geld een speler krijgt aan het begin van een helft. Standaard $800.



**mp_timelimit**

Maximale duur van een game in minuten. Standaard uit (0).



**mp_warmuptime**

Hoe lang de warming-up duurt voor de game start. Tijd in seconden.



**sv_allow_votes**

Of stemmen (bijv. voor timeouts) toegestaan zijn:

- Waarde: 0 - Uit
- Waarde: 1 - Aan



**sv_infinite_ammo**

Of spelers onbeperkt ammo krijgen:

- Waarde: 1 - Oneindig ammo zonder herladen
- Waarde: 2 - Oneindig aantal magazijnen, maar moet wel herladen worden



**ammo_grenade_limit_flashbang**

Hoeveel flashbangs een speler mag dragen.



**ammo_grenade_limit_total**

Hoeveel granaten een speler in totaal mag dragen.

<InlineVoucher />