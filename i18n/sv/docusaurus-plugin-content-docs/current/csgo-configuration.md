---
id: csgo-configuration
title: "CSGO: Serverkonfiguration"
description: "Utforska hur du konfigurerar Counter-Strike-servrar för olika spellägen och inställningar för att optimera spelupplevelsen → Lär dig mer nu"
sidebar_label: Serverkonfiguration
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Arkiverad guide
Det här dokumentet har arkiverats. Dokument arkiveras när de inte längre är relevanta, felaktiga eller uppdaterade. Det har arkiverats av följande skäl:

Orsak: CS:GO erbjuds inte längre aktivt och utvecklas inte längre. CS2 är uppföljaren till CS:GO. Vi rekommenderar att du byter till CS2.
::::



## Introduktion

Counter-Strike-servrar kan konfigureras på många sätt. Grundläggande inställningar kan justeras via **Server.cfg**-filen och via inställningssidan i webbgränssnittet. Avancerad konfiguration görs via gamemode-konfigfiler som gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, gamemode_demolition.cfg med flera.

Under inställningarna kan du välja vilket spelläge du vill använda. Kommandona i denna konfig laddas då automatiskt. Dessa kan hanteras antingen via spelserveradministrationen eller manuellt via FTP under **gXXXXXX/csgo/csgo/cfg/**. 


<InlineVoucher />

## Konfiguration


### Konfiguration via gränssnittet (Inställningar)

På inställningssidan kan du justera grundläggande inställningar för GSL-token, gametype/gamemode, mapgroup, tickrate och mer.  

![](https://screensaver01.zap-hosting.com/index.php/s/rfHJDH8e4mSQ4Mg/preview)



**GSL Token**

Gameserver Login Tokens (GSLTs) är en säkerhetsåtgärd som Steam har infört. För att köra spelservrar för vissa Steam-spel (främst Source-spel) måste du generera en token. Mer detaljerad info hittar du här:

[GSL-Token](source-gsltoken.md)



**Gametype**

Det finns olika spellägen. Här är en lista över alla tillgängliga alternativ:

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**Mapgroup**

Mapgroups är grupper av kartor som normalt hör till en viss kategori. Som standard finns grupperna **mg_active, mg_armsrace, mg_demolition, mg_allclassic**. Du kan även skapa egna. Dessa måste läggas till i **Gamemodes_server.txt**. Strukturen för en sådan mapgroup är enkel och ser ut så här:

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

Den inställda tickraten bestämmer hur ofta servern skickar en spelares position till de andra spelarna. Ju högre värde, desto bättre spelupplevelse. Följande värden kan ställas in: 33, 64, 100 och 128 (bäst värde). 



**Startmap**

Startkartan bestämmer vilken karta som ska laddas vid uppstart. Det är viktigt att kartnamnet skrivs helt och korrekt. Filändelsen behövs inte. 



**Pingboost**

Pingboost är ett sätt att ändra känslan i spelet genom olika metoder för att uppnå så låg ping som möjligt.



### Konfiguration via server.cfg

I **server.cfg** kan du ändra inställningar för servernamn, rcon-lösenord och serverlösenord. 

![](https://screensaver01.zap-hosting.com/index.php/s/RRyRgMzwaQPTR8b/preview)



**hostname**

Hostname definierar serverns namn. Namnet visas i serverlistan och på poängtavlan.



**rcon_password**

rcon_password behövs för att köra serverkommandon i spelet eller via Rcon-verktyg som HLSW. Det görs med följande kommandon:

```
rcon_password DittLösenord
rcon kommando // Exempel: rcon changelevel de_dust2
```



**sv_password**

Vill du använda din server privat eller bara ge vissa personer tillgång kan du sätta ett serverlösenord. Du blir då ombedd att ange lösenordet när du ansluter till servern.



**sv_cheats**

Vissa kommandon är skyddade och kan bara användas om fusk är aktiverat. Kommandot kan aktiveras eller inaktiveras med värdet 0 (av) eller 1 (på). Skyddade kommandon inkluderar till exempel:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 och några till.



### Spelläge-specifik konfiguration

Som nämnts i början kan du definiera vilket spelläge/gametype du vill använda i gränssnittet på inställningssidan. Därefter justerar du dina inställningar och ändrar motsvarande konfigfil. I gamemode-konfigarna kan du göra detaljerade ändringar av gameplay, botbeteende med mera.



#### Bot-kommandon



**bot_chatter**
Detta kommando bestämmer vad botarna får säga i spelet. Det kan ställas in på off, radio, minimal eller normal.



**bot_difficulty**
Detta kommando bestämmer hur svåra botarna är. Följande värden kan ställas in:  

- 0 - lätt
- 1 - normal
- 2 - svår
- 3 - expert



**bot_quota**
Detta kommando bestämmer max antal bots på servern. Standardvärdet är 10.



**bot_quota_mode**
Detta kommando bestämmer läget som styr antalet bots. Alternativen är: normal, fill och match. Normal är standardbeteende. Fill fyller servern med så många bots som "bot_quota" är satt till. Match fyller spelplatser. Om t.ex. 3 spelare är anslutna och 10 bots är satt, används bara 7 bots.




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
Detta kommando bestämmer hur mycket pengar som tjänas för att döda en fiende med ett av huvudvapnen (standardpistoler, primära gevär som AK/M4 etc.).



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
Detta kommando bestämmer hur mycket pengar som ska öka vid en förlustsvit. Om värdet är $500 (standard) betyder det att varje efterföljande förlorad runda ger laget $500 mer än föregående. Detta gäller upp till 5 raka förluster.



**cash_team_planted_bomb_but_defused**
Detta kommando bestämmer hur mycket pengar Terrorist-laget får för att ha planterat en bomb som slutligen desarmeras. Detta **adderas ovanpå förlustbonusen**. Standardvärdet är $800.



**cash_team_rescued_hostage**
Detta kommando bestämmer hur mycket pengar **hela laget** får när en spelare räddar en gisslan.



**cash_team_terrorist_win_bomb**
Detta kommando bestämmer hur mycket pengar varje spelare på Terrorist-laget får när de vinner en runda genom att bomben exploderar.



**cash_team_win_by_defusing_bomb**
Detta kommando bestämmer hur mycket pengar CT-laget får för att vinna en runda genom att desarmera bomben.



**cash_team_win_by_hostage_rescue**
Detta fusk-kommando bestämmer hur mycket pengar lagmedlemmar får när de vinner en runda genom att rädda en gisslan.



**cash_team_win_by_time_running_out_hostage**
Detta kommando bestämmer hur mycket pengar laget som vaktar gisslan får om de vinner rundan genom att förhindra att gisslan räddas inom tidsgränsen.



**cash_team_win_by_time_running_out_bomb**
Detta kommando bestämmer hur mycket pengar CT-spelarna får för att vinna en runda när tiden går ut. Det betyder att terroristerna inte har planterat bomben eller eliminerat alla CT-spelare inom tiden.



#### Gameplay-kommandon



**mp_afterroundmoney**
Detta kommando bestämmer hur mycket pengar varje spelare i varje lag får i slutet av en runda, oavsett vinst eller förlust. Standardvärdet är 0 (vinst/förlustbonus ställs med annat kommando).



**mp_buytime**
Detta kommando bestämmer hur lång tid (i sekunder) spelare har på sig att köpa utrustning efter rundstart. 



**mp_buy_anywhere**
Detta kommando bestämmer om spelare kan öppna köpmenyn utanför köpzonen. Kom ihåg att köptiden fortfarande gäller. 



**mp_death_drop_defuser**
Detta kommando bestämmer om defuse-kit släpps vid död eller inte. 



**mp_death_drop_grenade**
Detta kommando bestämmer vilken granat (om någon) som släpps när en spelare dör:

- Värde: 0 - Släpp inga granater vid död
- Värde: 1 - Släpp den bästa och mest värdefulla granaten vid död



**mp_death_drop_gun**
Detta kommando bestämmer vilket vapen som ska släppas när en spelare dör. Standardinställningen är 1 (det bästa). Välj ett av följande:

- Värde: 0 - Släpp inga vapen vid död
- Värde: 1 - Släpp det bästa vapnet vid död
- Värde: 2 - Om spelaren håller ett vapen vid död, släpp det, annars släpp det mest värdefulla vapnet



**mp_defuser_allocation**
Detta kommando bestämmer om spelare ska få defuser gratis i början av rundan och i så fall vem:

- Värde: 1 - Inga gratis defusers
- Värde: 2 - Slumpmässiga spelare får defuser
- Värde: 3 - Alla spelare får defuser



**mp_force_pick_time** 

Detta kommando bestämmer hur många sekunder en spelare har på sig att välja lag. Efter tiden väljs lag automatiskt. Standard är 15 sekunder.



**mp_forcecamera**

Detta kommando bestämmer vilka spelare döda kan titta på. Se argument för scopes:

- Värde: 0 - Döda kan titta på alla spelare
- Värde: 1 - Döda kan titta på sina lagkamrater
- Värde: 2 - Skärmen blir svart tills nästa runda



**mp_free_armor**

Detta kommando bestämmer om spelare får gratis rustning och hjälm i början av rundan:

- Värde: 0 - Av
- Värde: 1 - På



**mp_freezetime**

Detta kommando bestämmer hur länge spelare fryses i början av varje runda. Denna frystid ger tid att köpa utrustning och diskutera taktik. Standard är 15 sekunder.



**mp_friendlyfire**

Detta kommando bestämmer om vänskjuts är på eller av. När vänskjuts är på kan spelare skada sina lagkamrater. Standardinställningen beror på spelläge. I competitive är vänskjuts på, men inte i casual.



**mp_win_panel_display_time**

Detta kommando bestämmer hur länge (i sekunder) poängtavlan visas mellan rundor. Standard är 3 sekunder.



**mp_respawn_immunitytime**

Detta kommando bestämmer hur många sekunder spelare är immuna efter respawn. Används i Deathmatch-läget.



**mp_halftime**

Detta kommando bestämmer om lagen byter sida vid halvtid. Standard är 1.



**mp_maxmoney**

Detta kommando bestämmer max pengar en spelare kan ha.



**mp_maxrounds**

Detta kommando bestämmer max antal rundor servern spelar.



**mp_roundtime**

Detta kommando bestämmer max antal minuter en runda varar innan den vinns/förloras. Om rundan avbryts efter denna tid vinner CT-laget. Sekunder anges i decimal, t.ex. 1.92 = 1m55s.



**mp_solid_teammates**

Detta kommando bestämmer om du kan kollidera med lagkamrater:

- Värde: 0 - Kollision avstängd
- Värde: 1 - Kollision på



**mp_startmoney**

Detta kommando bestämmer hur mycket pengar en spelare får i början av en halvlek. Standard är $800.



**mp_timelimit**

Detta kommando bestämmer max speltid i minuter. Standard är avstängt (0).



**mp_warmuptime**

Detta kommando bestämmer hur lång uppvärmningstiden är innan spelet startar. Tiden anges i sekunder.



**sv_allow_votes**

Detta kommando bestämmer om röstning (t.ex. timeout-röstning) är tillåten:

- Värde: 0 - Av
- Värde: 1 - På



**sv_infinite_ammo**

Detta kommando bestämmer om spelare får oändligt med ammunition:

- Värde: 1 - Oändlig ammunition som kan skjutas utan omladdning.
- Värde: 2 - Oändligt antal magasin, men magasinet måste laddas om när det är tomt.



**ammo_grenade_limit_flashbang**

Detta kommando bestämmer hur många flashbangs en spelare kan bära.



**ammo_grenade_limit_total**

Detta kommando bestämmer hur många granater en spelare kan bära totalt.





### Esport-Ready Konfiguration (ESL Configs)

Vill du använda servern för e-sport är det värt att ladda upp konfigurationerna från ESL. Du kan ladda ner dem från ESL:s officiella sida: [Download](https://play.eslgaming.com/download/26251762/)

Konfigfilerna ska laddas upp till **cfg**-mappen och kan köras i spelet med följande kommandon:

```
rcon_password DittLösenord // Logga in via rcon för att köra rcon-kommandon
rcon exec esl5on5
```

Då laddas alla ESL-kommandovärden och spelet kan starta!

<InlineVoucher />