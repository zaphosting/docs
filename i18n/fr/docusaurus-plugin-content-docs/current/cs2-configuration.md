---
id: cs2-configuration
title: "CS2 : Configuration du serveur"
description: "Découvre comment configurer les serveurs Counter-Strike avec les modes de jeu, groupes de maps et tokens GSL pour un gameplay optimisé → En savoir plus maintenant"
sidebar_label: Configuration du serveur
services:
  - gameserver-dods-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Counter-Strike peuvent être configurés de manière très variée. Les réglages basiques peuvent être configurés via le fichier **server.cfg** et via la page des paramètres dans l’interface web. La configuration avancée se fait via les fichiers de config des modes de jeu comme gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, etc.

Dans les paramètres, tu peux choisir le mode de jeu que tu souhaites utiliser. Les commandes de cette config sont alors chargées en conséquence. Elles peuvent être gérées soit via l’administration du serveur de jeux, soit manuellement via FTP sous **gXXXXXX/cs2/game/csgo/cfg/**.

<InlineVoucher />

## Configuration



### Configuration via l’interface (Paramètres)

Sur la page des paramètres, tu peux ajuster les réglages basiques pour le token GSL, le type/mode de jeu, le groupe de maps et plus encore.

![](https://screensaver01.zap-hosting.com/index.php/s/eafHZL86Zr6QyGk/preview)



**Token GSL**

Les Gameserver Login Tokens (GSLTs) sont une procédure mise en place par Steam comme mesure de protection. Pour faire tourner des serveurs de jeux de certains jeux Steam (principalement les jeux Source), il est nécessaire de générer un token. Plus d’infos détaillées ici :

[GSL-Token](source-gsltoken.md)



**Type de jeu**

Il existe différents modes de jeu. Voici la liste des options disponibles :

- Classic Casual
- Classic Competitive
- Deathmatch
- Wingman



**Groupe de maps**

Les groupes de maps sont des ensembles de maps qui correspondent généralement à une certaine catégorie. Par défaut, il y a les groupes **mg_active, mg_allclassic**. Tu peux aussi créer les tiens. Ils doivent être ajoutés dans le fichier **gamemodes_server.txt**. La structure d’un groupe de maps est simple à construire et ressemble à ça :

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



**Map de départ**

La map de départ sert à déterminer quelle map doit être chargée au lancement. Il est important que le nom de la map soit écrit complètement et correctement. L’extension du fichier n’est pas nécessaire.



**Pingboost**

Le pingboost est une méthode pour modifier la sensation de jeu via différentes techniques afin d’obtenir le ping le plus bas possible.



### Configuration via server.cfg

Dans le fichier **server.cfg**, tu peux modifier les réglages comme le nom du serveur, le mot de passe rcon et le mot de passe serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/9k98oi89CeEB3ka/preview)



**hostname**

Le nom d’hôte définit le nom du serveur. Ce nom sera affiché dans la liste des serveurs et dans le scoreboard.



**rcon_password**

Le rcon_password est nécessaire pour exécuter des commandes serveur dans le jeu ou via des outils Rcon comme HLSW. Voici comment faire :

```
rcon_password TonMotDePasse
rcon command // Par exemple : rcon changelevel de_dust2
```



**sv_password**

Si tu veux utiliser ton serveur en privé ou si tu souhaites que seules certaines personnes y aient accès, tu peux définir un mot de passe serveur. Il sera demandé lors de la connexion au serveur.



**sv_cheats**

Certaines commandes sont protégées et ne peuvent être utilisées que si les cheats sont activés. Cette commande peut être activée ou désactivée avec la valeur 0 (désactivé) ou 1 (activé). Les commandes protégées incluent par exemple :

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 et quelques autres.



### Configuration spécifique au mode de jeu

Comme expliqué au début, tu peux définir le mode/type de jeu que tu souhaites utiliser dans l’interface, sur la page des paramètres. Ensuite, tu dois ajuster tes réglages et modifier le fichier de config correspondant. Dans les configs de mode de jeu, tu peux faire des modifications détaillées du gameplay, du comportement des bots, etc.



#### Commandes pour bots



**bot_chatter**
Cette commande définit ce que les bots peuvent dire dans le jeu. Elle peut être réglée sur off, radio, minimal ou normal.



**bot_difficulty**
Cette commande définit la difficulté des bots. Les valeurs possibles sont :

- 0 - facile
- 1 - normal
- 2 - difficile
- 3 - expert



**bot_quota**
Cette commande définit le nombre maximum de bots que tu peux avoir sur ton serveur. La valeur par défaut est 10.



**bot_quota_mode**
Cette commande définit le mode utilisé pour contrôler le nombre de bots. Les options sont : normal, fill et match. Normal est le comportement standard. Fill remplit le serveur avec autant de bots que défini dans "bot_quota". Match remplit les slots joueurs. Par exemple, si 3 joueurs sont connectés et que 10 bots sont définis, alors seulement 7 bots seront utilisés.




#### Commandes d’argent

**cash_player_bomb_defused**
Cette commande définit combien d’argent un joueur gagne en désamorçant une bombe. Tu ne peux pas donner plus que le montant maximum d’argent possible sur le serveur.



**cash_player_bomb_planted**
Cette commande définit combien d’argent un joueur reçoit pour avoir posé la bombe.



**cash_player_damage_hostage**
Cette commande définit combien d’argent est déduit ou gagné pour avoir blessé un otage. Par défaut, le joueur est pénalisé de 30 $ chaque fois que l’otage est blessé.



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
Cette commande définit combien d’argent chaque terroriste gagne pour avoir gagné un round sur une map otage par élimination.



**cash_team_elimination_hostage_map_ct**
Cette commande définit combien d’argent chaque membre de l’équipe CT gagne s’ils éliminent les 5 terroristes sur une map otage.



**cash_team_hostage_alive**
Cette commande définit combien d’argent est gagné ou perdu si un otage survit au round.



**cash_team_hostage_interaction**
Cette commande définit combien d’argent est gagné ou perdu pour un joueur interagissant avec un otage.



**cash_team_loser_bonus**
Cette commande définit l’argent initial qu’une équipe gagne en perdant un round. Ce bonus augmente par paliers fixes, contrôlés par une autre commande.



**cash_team_loser_bonus_consecutive_rounds**
Cette commande définit de combien d’argent le bonus augmente pour une série de défaites. Si cette valeur est de 500 $ (réglage par défaut), cela signifie que chaque round de défaite consécutif donne 500 $ de plus que le précédent. Cela s’applique jusqu’à 5 rounds de défaites consécutifs.



**cash_team_planted_bomb_but_defused**
Cette commande définit la somme que l’équipe Terroriste gagne pour avoir posé une bombe qui est finalement désamorcée. Ce bonus **s’additionne avec le bonus de round perdu**. La valeur par défaut est 800 $.



**cash_team_rescued_hostage**
Cette commande définit la somme que **toute l’équipe** gagne lorsqu’un joueur sauve un otage.



**cash_team_terrorist_win_bomb**
Cette commande définit la somme gagnée par chaque joueur de l’équipe Terroriste lorsqu’ils gagnent un round grâce à l’explosion de la bombe.



**cash_team_win_by_defusing_bomb**
Cette commande définit la somme que l’équipe CT gagne en remportant un round en désamorçant la bombe.



**cash_team_win_by_hostage_rescue**
Cette commande cheat définit la somme gagnée par les membres de l’équipe lorsqu’ils gagnent un round en sauvant un otage.



**cash_team_win_by_time_running_out_hostage**
Cette commande définit la somme gagnée par l’équipe qui protège les otages si elle gagne le round en empêchant tout sauvetage dans le temps imparti.



**cash_team_win_by_time_running_out_bomb**
Cette commande définit combien d’argent les joueurs CT gagnent en remportant un round lorsque le temps est écoulé. Cela signifie que les terroristes n’ont pas posé la bombe ni éliminé tous les CT dans le temps imparti.



#### Commandes Gameplay



**mp_afterroundmoney**
Cette commande définit combien d’argent est payé à chaque joueur de chaque équipe à la fin d’un round, qu’il soit gagné ou perdu. La valeur par défaut est 0 (le bonus victoire/défaite est réglé avec une autre commande).



**mp_buytime**
Cette commande définit le temps (en secondes) que les joueurs ont pour acheter leur équipement après le début d’un round.



**mp_buy_anywhere**
Cette commande définit si les joueurs peuvent accéder au menu d’achat en dehors de la zone d’achat. Note que le temps d’achat s’applique toujours.



**mp_death_drop_defuser**
Cette commande définit si les kits de désamorçage sont lâchés à la mort ou non.



**mp_death_drop_grenade**
Cette commande définit quelle grenade (le cas échéant) est lâchée quand un joueur est tué :

- Valeur : 0 - Ne lâche aucune grenade à la mort
- Valeur : 1 - Lâche la grenade la plus précieuse à la mort



**mp_death_drop_gun**
Cette commande définit quelle arme doit être lâchée quand un joueur est tué. Le réglage par défaut est 1 (la meilleure). Choisis parmi :

- Valeur : 0 - Ne lâche aucune arme à la mort
- Valeur : 1 - Lâche la meilleure arme à la mort
- Valeur : 2 - Si le joueur tient une arme à sa mort, lâche celle-ci, sinon lâche son arme la plus précieuse



**mp_defuser_allocation**
Cette commande définit si les joueurs reçoivent un kit de désamorçage gratuit au début du round, et si oui, qui le reçoit :

- Valeur : 1 - Pas de kits gratuits
- Valeur : 2 - Des joueurs aléatoires reçoivent un kit
- Valeur : 3 - Tous les joueurs reçoivent un kit



**mp_force_pick_time**

Cette commande définit la durée en secondes qu’un joueur a pour choisir une équipe. Après ce temps, une équipe est automatiquement sélectionnée. La durée par défaut est 15 secondes.



**mp_forcecamera**

Cette commande définit la portée que les spectateurs ont (c’est-à-dire qui les joueurs peuvent regarder quand ils meurent). Voici les options :

- Valeur : 0 - Les joueurs morts peuvent regarder tous les joueurs
- Valeur : 1 - Les joueurs morts peuvent regarder leurs coéquipiers
- Valeur : 2 - L’écran devient noir jusqu’au round suivant.



**mp_free_armor**

Cette commande définit si un joueur reçoit gratuitement armure et casque au début du round :

- Valeur : 0 - Désactivé
- Valeur : 1 - Activé



**mp_freezetime**

Cette commande définit combien de temps les joueurs sont gelés au début de chaque round. Ce temps permet d’acheter son équipement et de discuter tactiques avant le début du round. Par défaut 15 secondes.



**mp_friendlyfire**

Cette commande définit si le tir ami est activé ou non. Quand il est activé, les joueurs peuvent blesser leurs coéquipiers. Le réglage par défaut dépend du mode de jeu. En compétitif, le tir ami est activé, pas en casual.



**mp_win_panel_display_time**

Cette commande définit le temps (en secondes) d’affichage du scoreboard entre les rounds. Par défaut 3 secondes.



**mp_respawn_immunitytime**

Cette commande définit combien de secondes les joueurs sont invulnérables après leur respawn. Utilisée en mode Deathmatch.



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

Cette commande définit la durée maximale de chaque partie en minutes. Par défaut désactivé (0).



**mp_warmuptime**

Cette commande définit la durée de l’échauffement avant le début réel du jeu. Le temps est en secondes.



**sv_allow_votes**

Cette commande définit si les votes (ex : vote timeout) sont autorisés ou non :

- Valeur : 0 - Désactivé
- Valeur : 1 - Activé



**sv_infinite_ammo**

Cette commande définit si les joueurs ont des munitions illimitées ou non :

- Valeur : 1 - Munitions infinies pouvant être tirées sans rechargement.
- Valeur : 2 - Nombre infini de chargeurs. Le chargeur doit être rechargé quand il est vide.



**ammo_grenade_limit_flashbang**

Cette commande définit combien de grenades flash un joueur peut porter.



**ammo_grenade_limit_total**

Cette commande définit combien de grenades un joueur peut porter au total.

<InlineVoucher />