---
id: csgo-configuration
title: "CSGO : Configuration du serveur"
description: "Découvre comment configurer les serveurs Counter-Strike pour différents modes de jeu et réglages afin d’optimiser l’expérience de jeu → En savoir plus maintenant"
sidebar_label: Configuration du serveur
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guide archivé
Ce document a été archivé. Les documents sont archivés lorsqu’ils ne sont plus pertinents, incorrects ou à jour. Il a été archivé pour les raisons suivantes :

Raison : CS:GO n’est plus proposé activement et n’est plus développé. CS2 est la suite de CS:GO. Nous recommandons de passer à CS2.
::::



## Introduction

Les serveurs Counter-Strike peuvent être configurés de manière très variée. Les réglages de base peuvent être configurés via le fichier **Server.cfg** et via la page des paramètres dans l’interface web. La configuration avancée se fait via les fichiers de config du mode de jeu comme gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, gamemode_demolition.cfg, etc.

Dans les paramètres, tu peux choisir le mode de jeu que tu souhaites utiliser. Les commandes de cette config sont alors chargées en conséquence. Elles peuvent être gérées soit via l’administration du serveur de jeux, soit manuellement via FTP sous **gXXXXXX/csgo/csgo/cfg/**. 


<InlineVoucher />

## Configuration


### Configuration via l’interface (Paramètres)

Sur la page des paramètres, tu peux ajuster les réglages de base pour le token GSL, le type/mode de jeu, le groupe de maps, le tickrate et plus encore.  

![](https://screensaver01.zap-hosting.com/index.php/s/rfHJDH8e4mSQ4Mg/preview)



**Token GSL**

Les Gameserver Login Tokens (GSLTs) sont une procédure mise en place par Steam comme mesure de protection. Pour faire tourner des serveurs de jeux de certains jeux Steam (principalement les jeux Source), il est nécessaire de générer un token. Plus d’infos ici :

[GSL-Token](source-gsltoken.md)



**Type de jeu**

Il existe différents modes de jeu. Voici la liste de toutes les options disponibles :

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**Groupe de maps**

Les groupes de maps sont des ensembles de maps qui correspondent normalement à une certaine catégorie. Par défaut, il y a les groupes **mg_active, mg_armsrace, mg_demolition, mg_allclassic**. Tu peux aussi créer les tiens. Ils doivent être ajoutés dans le fichier **Gamemodes_server.txt**. La structure d’un groupe de maps est simple à construire et ressemble à ça :

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

Le tickrate défini la fréquence à laquelle le serveur envoie la position d’un joueur aux autres joueurs. Plus la valeur est élevée, meilleure est l’expérience de jeu. Les valeurs suivantes peuvent être définies : 33, 64, 100 et 128 (meilleure valeur). 



**Carte de départ**

La carte de départ détermine quelle map doit être chargée au démarrage. Il est important que le nom de la map soit écrit complètement et correctement. L’extension du fichier n’est pas nécessaire. 



**Pingboost**

Le pingboost est une méthode pour modifier la sensation de jeu par différentes techniques afin d’obtenir le ping le plus bas possible.



### Configuration via server.cfg

Dans le fichier **server.cfg**, tu peux modifier les réglages pour le nom du serveur, le mot de passe rcon et le mot de passe serveur. 

![](https://screensaver01.zap-hosting.com/index.php/s/RRyRgMzwaQPTR8b/preview)



**hostname**

Le nom d’hôte définit le nom du serveur. Ce nom sera affiché dans la liste des serveurs et dans le scoreboard.



**rcon_password**

Le mot de passe rcon est nécessaire pour exécuter des commandes serveur dans le jeu ou via des outils Rcon comme HLSW. Cela se fait avec les commandes suivantes :

```
rcon_password TonMotDePasse
rcon commande // Par exemple : rcon changelevel de_dust2
```



**sv_password**

Si tu souhaites utiliser ton serveur en privé ou si tu veux que seules certaines personnes y aient accès, tu peux définir un mot de passe serveur. Il sera demandé lors de la connexion au serveur.



**sv_cheats**

Certaines commandes sont protégées et ne peuvent être utilisées que si les cheats sont activés. La commande peut être activée ou désactivée avec la valeur 0 (désactivé) ou 1 (activé). Les commandes protégées incluent par exemple :

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 et quelques autres.



### Configuration spécifique au mode de jeu

Comme décrit au début, tu peux définir le mode/type de jeu que tu souhaites utiliser dans l’interface à la page des paramètres. Ensuite, tu dois ajuster tes réglages et modifier le fichier de config correspondant. Dans les configs du mode de jeu, tu peux faire des modifications détaillées du gameplay, du comportement des bots, etc.



#### Commandes pour bots



**bot_chatter**
Cette commande définit ce que les bots sont autorisés à dire dans le jeu. Elle peut être réglée sur off, radio, minimal ou normal.



**bot_difficulty**
Cette commande définit la difficulté des bots. Les valeurs suivantes peuvent être définies :  

- 0 - facile
- 1 - normal
- 2 - difficile
- 3 - expert



**bot_quota**
Cette commande définit le nombre maximum de bots que tu peux avoir sur ton serveur. La valeur par défaut est 10.



**bot_quota_mode**
Cette commande définit le mode utilisé pour contrôler le nombre de bots. Les options sont : normal, fill et match. Normal est le comportement standard. Fill remplit le serveur avec autant de bots que défini dans "bot_quota". Match remplit les slots joueurs. Par exemple, si 3 joueurs sont connectés et que 10 bots sont définis, alors seuls 7 bots seront utilisés.




#### Commandes argent

**cash_player_bomb_defused**
Cette commande définit combien d’argent un joueur gagne pour avoir désamorcé une bombe. Tu ne peux pas donner plus que le montant maximum d’argent possible sur le serveur.



**cash_player_bomb_planted**
Cette commande définit combien d’argent un joueur reçoit pour avoir posé la bombe.



**cash_player_damage_hostage**
Cette commande définit combien d’argent est déduit ou gagné pour avoir blessé un otage. Par défaut, le joueur est débité de 30 $ à chaque fois que l’otage est blessé.



**cash_player_interact_with_hostage**
Cette commande définit l’argent gagné ou perdu pour une interaction avec un otage.



**cash_player_killed_enemy_default**
Cette commande définit combien d’argent est gagné ou perdu en tuant un ennemi avec une arme par défaut.



**cash_player_killed_enemy_factor**
Cette commande définit combien d’argent est gagné en tuant un ennemi avec une des armes principales (pistolets standards, fusils principaux comme AK/M4, etc.).



**cash_player_killed_hostage**
Cette commande définit combien d’argent est gagné ou perdu lorsqu’un joueur tue un otage.



**cash_player_killed_teammate**
Cette commande définit combien d’argent est gagné ou perdu pour avoir tué un coéquipier.



**cash_player_rescued_hostage**
Cette commande définit combien d’argent est gagné ou perdu pour avoir sauvé un otage en mode Otage.



**cash_team_elimination_bomb_map**
Cette commande définit combien d’argent chaque membre de l’équipe gagne si les 5 ennemis sur une map de désamorçage comme Mirage ou Dust II sont tués.



**cash_team_elimination_hostage_map_t**
Cette commande définit combien d’argent chaque terroriste gagne pour avoir remporté un round sur une map otage par élimination.



**cash_team_elimination_hostage_map_ct**
Cette commande définit combien d’argent chaque membre de l’équipe CT gagne s’ils éliminent les 5 terroristes sur une map otage.



**cash_team_hostage_alive**
Cette commande définit combien d’argent est gagné ou perdu si un otage survit au round. 



**cash_team_hostage_interaction**
Cette commande définit combien d’argent est gagné ou perdu pour un joueur interagissant avec un otage.



**cash_team_loser_bonus**
Cette commande définit l’argent initial qu’une équipe gagne pour avoir perdu un round. Ce bonus augmente par paliers fixes, contrôlés par une autre commande.



**cash_team_loser_bonus_consecutive_rounds**
Cette commande définit de combien d’argent le bonus doit augmenter pour une série de défaites. Si cette valeur est de 500 $ (réglage par défaut), cela signifie que chaque round de défaite consécutif donnera 500 $ de plus à l’équipe perdante que le précédent. Cela s’applique jusqu’à 5 rounds de défaites consécutifs.



**cash_team_planted_bomb_but_defused**
Cette commande définit la somme d’argent que l’équipe Terroriste gagne pour avoir posé une bombe qui est finalement désamorcée. Ce bonus **s’additionne au bonus de round perdu**. La valeur par défaut est de 800 $.



**cash_team_rescued_hostage**
Cette commande définit la somme d’argent que **toute l’équipe** gagne lorsqu’un joueur sauve un otage.



**cash_team_terrorist_win_bomb**
Cette commande définit la somme d’argent gagnée par chaque joueur de l’équipe Terroriste lorsqu’ils remportent un round grâce à l’explosion de la bombe.



**cash_team_win_by_defusing_bomb**
Cette commande définit la somme d’argent que l’équipe CT gagne pour avoir remporté un round en désamorçant la bombe.



**cash_team_win_by_hostage_rescue**
Cette commande cheat définit la somme d’argent gagnée par les membres de l’équipe lorsqu’ils remportent un round en sauvant un otage.



**cash_team_win_by_time_running_out_hostage**
Cette commande définit la somme d’argent gagnée par l’équipe qui protège les otages si elle remporte le round en empêchant tout sauvetage dans le temps imparti.



**cash_team_win_by_time_running_out_bomb**
Cette commande définit combien d’argent les joueurs des contre-terroristes gagnent en remportant un round lorsque le temps est écoulé. Cela signifie que les terroristes n’ont pas posé la bombe ou éliminé tous les contre-terroristes dans le temps imparti.



#### Commandes Gameplay



**mp_afterroundmoney**
Cette commande définit combien d’argent est payé à chaque joueur de chaque équipe à la fin d’un round, qu’il soit gagné ou perdu. La valeur par défaut est 0 (le bonus victoire/défaite est défini avec une autre commande).



**mp_buytime**
Cette commande définit le temps (en secondes) dont disposent les joueurs pour acheter de l’équipement après le début d’un round. 



**mp_buy_anywhere**
Cette commande définit si les joueurs peuvent accéder au menu d’achat en dehors de la zone d’achat. Garde en tête que le temps d’achat s’applique toujours. 



**mp_death_drop_defuser**
Cette commande définit si les kits de désamorçage sont lâchés à la mort ou non. 



**mp_death_drop_grenade**
Cette commande définit quelle grenade (le cas échéant) est lâchée lorsqu’un joueur est tué :

- Valeur : 0 - Ne lâche aucune grenade à la mort
- Valeur : 1 - Lâche la grenade la plus précieuse à la mort



**mp_death_drop_gun**
Cette commande définit quelle arme doit être lâchée lorsqu’un joueur est tué. Le réglage par défaut est 1 (la meilleure). Choisis parmi les options suivantes :

- Valeur : 0 - Ne lâche aucune arme à la mort
- Valeur : 1 - Lâche la meilleure arme à la mort
- Valeur : 2 - Si le joueur tient une arme à sa mort, lâche celle-ci, sinon lâche son arme la plus précieuse



**mp_defuser_allocation**
Cette commande définit si les joueurs doivent recevoir un kit de désamorçage gratuit au début du round ou non, et si oui, qui doit les recevoir :

- Valeur : 1 - Pas de kits gratuits
- Valeur : 2 - Des joueurs aléatoires reçoivent un kit
- Valeur : 3 - Tous les joueurs reçoivent un kit



**mp_force_pick_time** 

Cette commande définit la durée en secondes dont un joueur dispose pour choisir une équipe. Après ce temps, une équipe est automatiquement sélectionnée. La durée par défaut est de 15 secondes.



**mp_forcecamera**

Cette commande définit la portée que les spectateurs ont (c’est-à-dire qui les joueurs peuvent regarder quand ils meurent). Voir les infos d’arguments pour les portées :

- Valeur : 0 - Les joueurs morts peuvent regarder tous les joueurs
- Valeur : 1 - Les joueurs morts peuvent regarder leurs coéquipiers
- Valeur : 2 - L’écran devient noir jusqu’au round suivant.



**mp_free_armor**

Cette commande définit si un joueur reçoit gratuitement armure et casque au début du round :

- Valeur : 0 - Désactivé
- Valeur : 1 - Activé



**mp_freezetime**

Cette commande définit combien de temps les joueurs sont gelés au début de chaque round. Ce temps de gel permet aux joueurs d’acheter leur équipement et de discuter tactiques avant le début du round. Par défaut 15 secondes.



**mp_friendlyfire**

Cette commande définit si le tir allié est activé ou désactivé. Quand le tir allié est activé, les joueurs peuvent infliger des dégâts à leurs coéquipiers. Le réglage par défaut dépend du mode de jeu. En mode compétitif, le tir allié est activé, mais pas en casual.



**mp_win_panel_display_time**

Cette commande définit le temps (en secondes) pendant lequel le scoreboard est affiché entre les rounds. La valeur par défaut est 3 secondes.



**mp_respawn_immunitytime**

Cette commande définit combien de secondes les joueurs sont immunisés après leur respawn. Cette commande est utilisée pour le mode Deathmatch.



**mp_halftime**

Cette commande définit si les équipes changent à la mi-temps ou non. La valeur par défaut est 1.



**mp_maxmoney**

Cette commande définit la somme maximale d’argent qu’un joueur peut avoir.



**mp_maxrounds**

Cette commande définit le nombre maximum de rounds que le serveur jouera.



**mp_roundtime**

Cette commande définit le nombre maximum de minutes qu’un round dure avant d’être gagné/perdu. Si le round est abandonné après ce temps, la victoire est donnée aux contre-terroristes. Les secondes sont données en décimales, 1.92 = 1m55s.



**mp_solid_teammates**

Cette commande définit si tu peux entrer en collision avec tes coéquipiers ou non :

- Valeur : 0 - Collision désactivée
- Valeur : 1 - Collision activée



**mp_startmoney**

Cette commande définit combien d’argent un joueur reçoit au début d’une mi-temps. La valeur par défaut est 800 $.



**mp_timelimit**

Cette commande définit la durée maximale de chaque partie en minutes. Par défaut, c’est désactivé (réglé à 0).



**mp_warmuptime**

Cette commande définit la durée de la période d’échauffement avant le début réel du jeu. Le temps est défini en secondes.



**sv_allow_votes**

Cette commande définit si les votes (ex : vote timeout) sont autorisés ou non :

- Valeur : 0 - Désactivé
- Valeur : 1 - Activé



**sv_infinite_ammo**

Cette commande définit si les joueurs ont des munitions illimitées ou non :

- Valeur : 1 - Munitions infinies pouvant être tirées sans recharger.
- Valeur : 2 - Nombre infini de chargeurs. Cependant, le chargeur doit être rechargé quand il est vide.



**ammo_grenade_limit_flashbang**

Cette commande définit combien de grenades flash un joueur peut porter.



**ammo_grenade_limit_total**

Cette commande définit combien de grenades un joueur peut porter au total.





### Configuration Esport-Ready (Configs ESL)

Si tu veux utiliser le serveur pour de l’e-sport, ça vaut le coup d’uploader les configs fournies par ESL. Tu peux les télécharger sur le site officiel de l’ESL : [Télécharger](https://play.eslgaming.com/download/26251762/)

Les configs doivent être uploadées dans le répertoire **cfg** et peuvent être exécutées dans le jeu avec les commandes suivantes :

```
rcon_password TonMotDePasse // Connexion via rcon pour exécuter les commandes rcon
rcon exec esl5on5
```

Après ça, toutes les valeurs des commandes ESL seront chargées et la partie peut commencer !

<InlineVoucher />