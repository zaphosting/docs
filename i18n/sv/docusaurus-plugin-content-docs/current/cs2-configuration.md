---
id: cs2-configuration
title: "CS2: Serverkonfiguration"
description: "Utforska hur du konfigurerar Counter-Strike-servrar med spellägen, kartgrupper och GSL-token för optimerat gameplay → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver-dods-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Counter-Strike-servrar kan konfigureras på många sätt. Grundläggande inställningar kan göras via **server.cfg**-konfigurationsfilen och via inställningssidan i webbgränssnittet. Avancerad konfiguration sker via gamemode-konfigurationsfiler som gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg och så vidare.

Under inställningarna kan du välja vilket spelläge du vill använda. Kommandona i denna konfig laddas då automatiskt. Dessa kan hanteras antingen via spelserveradministrationen eller manuellt via FTP under **gXXXXXX/cs2/game/csgo/cfg/**.

<InlineVoucher />

## Konfiguration



### Konfiguration via gränssnittet (Inställningar)

På inställningssidan kan du justera grundläggande inställningar för GSL-token, gametype/gamemode, kartgrupp och mer.

![](https://screensaver01.zap-hosting.com/index.php/s/eafHZL86Zr6QyGk/preview)



**GSL Token**

Gameserver Login Tokens (GSLTs) är en säkerhetsåtgärd som Steam har implementerat. För att köra gameservrar för vissa Steam-spel (främst Source-spel) måste du generera en token. Mer detaljerad info hittar du här:

[GSL-Token](source-gsltoken.md)



**Gametype**

Det finns olika spellägen. Här är en lista på alla tillgängliga alternativ:

- Classic Casual
- Classic Competitive
- Deathmatch
- Wingman



**Kartgrupp**

Kartgrupper är grupper av kartor som normalt hör till en viss kategori. Som standard finns grupperna **mg_active, mg_allclassic**. Du kan även skapa egna. Dessa måste läggas till i **gamemodes_server.txt**. Strukturen för en kartgrupp är enkel och ser ut så här:

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



**Startkarta**

Startkartan bestämmer vilken karta som ska laddas vid uppstart. Det är viktigt att kartnamnet skrivs helt och korrekt. Filändelsen behövs inte.



**Pingboost**

Pingboost är ett sätt att ändra känslan i spelet genom olika metoder för att uppnå så låg ping som möjligt.



### Konfiguration via server.cfg

I **server.cfg** kan du ändra inställningar för servernamn, rcon-lösenord och serverlösenord.

![](https://screensaver01.zap-hosting.com/index.php/s/9k98oi89CeEB3ka/preview)



**hostname**

Hostname definierar serverns namn. Namnet visas i serverlistan och på resultattavlan.



**rcon_password**

rcon_password behövs för att köra serverkommandon i spelet eller via Rcon-verktyg som HLSW. Det görs med följande kommandon:

```
rcon_password DittLösenord
rcon kommando // Exempel: rcon changelevel de_dust2
```



**sv_password**

Vill du ha din server privat eller bara ge vissa personer tillgång kan du sätta ett serverlösenord. Du blir då ombedd att ange lösenordet när du ansluter till servern.



**sv_cheats**

Vissa kommandon är skyddade och kan bara användas om fusk är aktiverat. Kommandot kan sättas till 0 (av) eller 1 (på). Skyddade kommandon inkluderar till exempel:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 och några till.



### Spelläge-specifik konfiguration

Som nämnts i början kan du definiera vilket spelläge/gametype du vill använda i gränssnittet på inställningssidan. Därefter justerar du dina inställningar och ändrar motsvarande konfigurationsfil. I gamemode-konfigarna kan du göra detaljerade ändringar av gameplay, botbeteende med mera.



#### Bot-kommandon



**bot_chatter**
Detta kommando bestämmer vad bots får säga i spelet. Kan sättas till off, radio, minimal eller normal.



**bot_difficulty**
Detta kommando bestämmer hur svåra bots är. Följande värden kan sättas:

- 0 - lätt
- 1 - normal
- 2 - svår
- 3 - expert



**bot_quota**
Detta kommando bestämmer max antal bots på servern. Standardvärdet är 10.



**bot_quota_mode**
Detta kommando bestämmer hur botantalet styrs. Alternativen är: normal, fill och match. Normal är standardbeteende. Fill fyller servern med så många bots som "bot_quota" anger. Match fyller spelplatser. Om t.ex. 3 spelare är anslutna och 10 bots är satt, används bara 7 bots.




#### Pengakommandon

**cash_player_bomb_defused**
Detta kommando bestämmer hur mycket pengar en spelare får för att desarmera en bomb. Du kan inte ge mer än maxbeloppet som går att få på servern.



**cash_player_bomb_planted**
Detta kommando bestämmer hur mycket pengar en spelare får för att plantera bomben.



**cash_player_damage_hostage**
Detta kommando bestämmer hur mycket pengar som dras eller tjänas för att skada en gisslan. Som standard debiteras spelaren $30 varje gång gisslan skadas.



**cash_player_interact_with_hostage**
Detta kommando bestämmer pengar som tjänas eller förloras vid interaktion med gisslan.



**cash_player_killed_enemy_default**
Detta kommando bestämmer hur mycket pengar som tjänas eller förloras för att döda en fiende med standardvapen.



**cash_player_killed_enemy_factor**
Detta kommando bestämmer hur mycket pengar som tjänas för att döda en fiende med ett av huvudvapnen (standardpistoler, primära gevär som AK/M4 osv).



**cash_player_killed_hostage**
Detta kommando bestämmer hur mycket pengar som tjänas eller förloras när en spelare dödar en gisslan.



**cash_player_killed_teammate**
Detta kommando bestämmer hur mycket pengar som tjänas eller förloras för att döda en lagkamrat.



**cash_player_rescued_hostage**
Detta kommando bestämmer hur mycket pengar som tjänas eller förloras för att säkert rädda en gisslan i Hostage Mode.



**cash_team_elimination_bomb_map**
Detta kommando bestämmer hur mycket pengar varje lagmedlem får om alla 5 fiender på en bombdesarmeringskarta som Mirage eller Dust II dödas.



**cash_team_elimination_hostage_map_t**
Detta kommando bestämmer hur mycket pengar varje terrorist får för att vinna en runda på en gisslankarta genom elimination.



**cash_team_elimination_hostage_map_ct**
Detta kommando bestämmer hur mycket pengar varje lagmedlem på CT-sidan får om de eliminerar alla 5 terrorister på en gisslankarta.



**cash_team_hostage_alive**
Detta kommando bestämmer hur mycket pengar som tjänas eller förloras om en gisslan överlever rundan.



**cash_team_hostage_interaction**
Detta kommando bestämmer hur mycket pengar som tjänas eller förloras för en spelare som interagerar med en gisslan.



**cash_team_loser_bonus**
Detta kommando bestämmer startpengarna ett lag får för att förlora en runda. Detta ökar i fasta steg, styrt av ett separat kommando.



**cash_team_loser_bonus_consecutive_rounds**
Detta kommando bestämmer hur mycket pengar som ska öka vid en förlustsvit. Om värdet är $500 (standard) betyder det att varje efterföljande förlorad runda ger laget $500 mer än föregående. Gäller upp till 5 raka förluster.



**cash_team_planted_bomb_but_defused**
Detta kommando bestämmer hur mycket pengar Terroristlaget får för att ha planterat en bomb som slutligen desarmeras. Detta **adderas ovanpå förlustbonusen**. Standardvärdet är $800.



**cash_team_rescued_hostage**
Detta kommando bestämmer hur mycket pengar **hela laget** får när en spelare räddar en gisslan.



**cash_team_terrorist_win_bomb**
Detta kommando bestämmer hur mycket pengar varje spelare på Terroristlaget vinner när de vinner en runda genom att bomben exploderar.



**cash_team_win_by_defusing_bomb**
Detta kommando bestämmer hur mycket pengar CT-laget får för att vinna en runda genom att desarmera bomben.



**cash_team_win_by_hostage_rescue**
Detta fusk-kommando bestämmer hur mycket pengar lagmedlemmar vinner när de vinner en runda genom att rädda en gisslan.



**cash_team_win_by_time_running_out_hostage**
Detta kommando bestämmer hur mycket pengar laget som vaktar gisslan får om de vinner rundan genom att förhindra att gisslan räddas inom tidsgränsen.



**cash_team_win_by_time_running_out_bomb**
Detta kommando bestämmer hur mycket pengar CT-spelarna får för att vinna en runda när tiden går ut. Det betyder att terroristerna inte har placerat en bomb eller eliminerat alla CT-spelare inom tiden.



#### Gameplay-kommandon



**mp_afterroundmoney**
Detta kommando bestämmer hur mycket pengar varje spelare i varje lag får i slutet av en runda, oavsett vinst eller förlust. Standardvärdet är 0 (vinst-/förlustbonus sätts med annat kommando).



**mp_buytime**
Detta kommando bestämmer tiden (i sekunder) som spelare har på sig att köpa utrustning efter rundstart.



**mp_buy_anywhere**
Detta kommando bestämmer om spelare kan öppna köpmenyn utanför köpszonen. Köp-tiden gäller fortfarande.



**mp_death_drop_defuser**
Detta kommando bestämmer om defuse-kit släpps vid död eller inte.



**mp_death_drop_grenade**
Detta kommando bestämmer vilken granat (om någon) som släpps när en spelare dör:

- Värde: 0 - Släpp inga granater vid död
- Värde: 1 - Släpp den mest värdefulla granaten vid död



**mp_death_drop_gun**
Detta kommando bestämmer vilket vapen som ska släppas när en spelare dör. Standard är 1 (det bästa). Välj ett av följande:

- Värde: 0 - Släpp inga vapen vid död
- Värde: 1 - Släpp det bästa vapnet vid död
- Värde: 2 - Om spelaren håller ett vapen vid död, släpp det, annars släpp det mest värdefulla vapnet



**mp_defuser_allocation**
Detta kommando bestämmer om spelare ska få defuse-kit gratis i början av rundan och i så fall vem:

- Värde: 1 - Inga gratis defusers
- Värde: 2 - Slumpmässiga spelare får defuser
- Värde: 3 - Alla spelare får defuser



**mp_force_pick_time**

Detta kommando bestämmer hur många sekunder en spelare har på sig att välja lag. Efter tiden väljs lag automatiskt. Standard är 15 sekunder.



**mp_forcecamera**

Detta kommando bestämmer vilka spelare döda kan följa som åskådare. Se argument för scopes:

- Värde: 0 - Döda kan se alla spelare
- Värde: 1 - Döda kan se sina lagkamrater
- Värde: 2 - Skärmen blir svart tills nästa runda



**mp_free_armor**

Detta kommando bestämmer om spelare får gratis rustning och hjälm i början av rundan:

- Värde: 0 - Av
- Värde: 1 - På



**mp_freezetime**

Detta kommando bestämmer hur länge spelare är frysta i början av varje runda. Denna tid ger möjlighet att köpa utrustning och planera taktik. Standard är 15 sekunder.



**mp_friendlyfire**

Detta kommando bestämmer om vänskjuts är på eller av. När vänskjuts är på kan spelare skada sina lagkamrater. Standard beror på spelläge. I competitive är vänskjuts på, i casual inte.



**mp_win_panel_display_time**

Detta kommando bestämmer hur länge (i sekunder) resultattavlan visas mellan rundor. Standard är 3 sekunder.



**mp_respawn_immunitytime**

Detta kommando bestämmer hur många sekunder spelare är immuna efter respawn. Används i Deathmatch.



**mp_halftime**

Detta kommando bestämmer om lagen byter sida vid halvtid. Standard är 1.



**mp_maxmoney**

Detta kommando bestämmer max pengar en spelare kan ha.



**mp_maxrounds**

Detta kommando bestämmer max antal rundor servern spelar.



**mp_roundtime**

Detta kommando bestämmer max antal minuter en runda varar innan den vinns/förloras. Om rundan avbryts efter denna tid vinner CT. Sekunder anges i decimal, t.ex. 1.92 = 1m55s.



**mp_solid_teammates**

Detta kommando bestämmer om du kan kollidera med lagkamrater:

- Värde: 0 - Kollisionsavstängt
- Värde: 1 - Kollisionspå



**mp_startmoney**

Detta kommando bestämmer hur mycket pengar en spelare får i början av en halvlek. Standard är $800.



**mp_timelimit**

Detta kommando bestämmer max speltid i minuter. Standard är avstängt (0).



**mp_warmuptime**

Detta kommando bestämmer hur länge uppvärmningen varar innan spelet startar. Tiden anges i sekunder.



**sv_allow_votes**

Detta kommando bestämmer om röstning (t.ex. timeout-röstning) är tillåtet:

- Värde: 0 - Av
- Värde: 1 - På



**sv_infinite_ammo**

Detta kommando bestämmer om spelare får oändligt med ammo:

- Värde: 1 - Oändligt ammo som kan skjutas utan omladdning.
- Värde: 2 - Oändligt antal magasin, men magasinet måste laddas om när det är tomt.



**ammo_grenade_limit_flashbang**

Detta kommando bestämmer hur många flashbangs en spelare kan bära.



**ammo_grenade_limit_total**

Detta kommando bestämmer hur många granater en spelare kan bära totalt.

<InlineVoucher />