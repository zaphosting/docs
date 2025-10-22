---
id: gmod-ttt
title: "Garry's Mod : Configuration"
description: "Découvre comment optimiser les réglages de ton serveur TTT pour un meilleur gameplay et une gestion des rounds au top → En savoir plus maintenant"
sidebar_label: Configuration Garry's Mod TTT
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## La configuration de ton serveur TTT

**Important : Éteins ton serveur pour toutes les modifications.**

La configuration de base peut se faire facilement via notre interface web, par exemple le nom du serveur, le mot de passe Rcon et le mot de passe serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

Une fois que tu as configuré le serveur comme tu veux, on peut passer à la configuration des réglages spécifiques du mode de jeu TTT. Tu peux utiliser notre interface web ou modifier le fichier via FTP.

Tu trouveras l’éditeur de configuration dans notre interface web sous l’onglet "Configs", ouvre le fichier server.cfg.
Dans notre interface web, cette fonction se trouve sous "Configs", ouvre-y le server.cfg

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

Tu y trouveras les valeurs pour modifier le gameplay de ton serveur TTT, voici un rapide aperçu des variables importantes :

<InlineVoucher />

## Rounds et changement de map

ttt_round_limit  
:::info  
Le nombre max de rounds avant que la map ne change. (Par défaut : 6)  
:::

ttt_time_limit_minutes  
:::info  
Le nombre max de minutes avant que la map ne change ou qu’un vote soit lancé. (Par défaut : 75)  
:::

ttt_postround_dm  
:::info  
Active les dégâts après la fin d’un round. Les kills ne sont pas comptabilisés pour le score, c’est donc un free-for-all. (Par défaut : 1)  
:::

ttt_ragdoll_pinning_innocents  
:::info  
Permet aux joueurs non-traitres d’épingler les cadavres aussi. (Par défaut : 1)  
:::

## Gameplay

ttt_traitor_pct  
:::info  
Pourcentage du total des joueurs qui seront traîtres. Le nombre de joueurs est multiplié par ce chiffre, puis arrondi à l’inférieur. Si le résultat est inférieur à 1 ou supérieur au nombre de joueurs, il est limité à ces valeurs. (Par défaut : 0.25)  
:::

ttt_traitor_max  
:::info  
Nombre max de traîtres. (Par défaut : 32)  
:::

ttt_detective_pct  
:::info  
Pourcentage du total des joueurs qui seront détectives. (Par défaut : 0.13)  
:::

ttt_detective_max  
:::info  
Nombre max de détectives. Peut être utilisé pour limiter ou désactiver les détectives. (Par défaut : 32)  
:::

ttt_detective_min_players  
:::info  
Nombre minimum de joueurs avant que les détectives entrent en jeu. (Par défaut : 5)  
:::

ttt_detective_karma_min  
:::info  
Si le Karma d’un joueur descend en dessous de ce seuil, ses chances d’être choisi comme détective diminuent. (Par défaut : 600)  
:::

ttt_minimum_players  
:::info  
Nombre de joueurs requis avant le début du round. Vérifié avant la phase de préparation et avant le début du round. (Par défaut : 2)  
:::

## ADN

ttt_killer_dna_range  
:::info  
Distance max à laquelle un échantillon ADN du tueur est laissé sur le cadavre de la victime. (Par défaut : 300)  
:::

## Karma

ttt_karma  
:::info  
Active le système de karma. Les joueurs commencent avec un certain karma et le perdent lorsqu’ils blessent/tuent des "coéquipiers" (innocents si ils sont innocents, traîtres si traîtres). La perte dépend du karma de la personne blessée ou tuée. (Par défaut : 1)  
:::

ttt_karma_strict  
:::info  
Si activé, la pénalité de dégâts augmente plus vite quand le karma baisse. Si désactivé, la pénalité est faible tant que le karma reste au-dessus de 800. (Par défaut : 1)  
:::

ttt_karma_starting  
:::info  
Karma de départ des joueurs. Si tu veux qu’ils puissent "gagner" un bonus de dégâts, mets-le vers 850. Jouer proprement leur permettra d’atteindre 1000 et d’infliger un peu plus de dégâts qu’un nouveau joueur. (Par défaut : 1000)  
:::

ttt_karma_max  
:::info  
Karma max qu’un joueur peut avoir. Augmenter au-delà de 1000 ne donne pas de bonus de dégâts, mais crée un "tampon" avant la pénalité. (Par défaut : 1000)  
:::

ttt_karma_ratio  
:::info  
Ratio des dégâts utilisés pour calculer combien de karma de la victime est soustrait à l’attaquant. (Par défaut : 0.001)  
:::

ttt_karma_kill_penalty  
:::info  
Toutes les pénalités de karma sont basées sur les dégâts infligés. La pénalité de kill est un "dégât" supplémentaire appliqué quand tu tues quelqu’un. Par exemple, si c’est 100 et que tu headshot quelqu’un avec un fusil, tu es pénalisé comme si tu avais infligé 200 dégâts. (Par défaut : 15)  
:::

ttt_karma_round_increment  
:::info  
Montant de base par lequel le karma de tous est "soigné" à la fin de chaque round. (Par défaut : 5)  
:::

ttt_karma_clean_bonus  
:::info  
Si un joueur n’a pas blessé ou tué un coéquipier ce round, il reçoit un bonus de 30 karma. (Par défaut : 30)  
:::

ttt_karma_traitordmg_ratio  
:::info  
Comme ttt_karma_ratio, mais pour la récompense de karma quand on inflige des dégâts à un traître. Par défaut, blesser un traître rapporte environ 1/4 de la pénalité qu’on aurait si c’était un innocent avec karma plein. (Par défaut : 30)  
:::

ttt_karma_traitorkill_bonus  
:::info  
Bonus de karma pour avoir tué un traître. (Par défaut : 40)  
:::

ttt_karma_low_autokick  
:::info  
Expulse automatiquement les joueurs avec un karma bas à la fin du round. (Par défaut : 1)  
:::

ttt_karma_low_amount  
:::info  
Niveau de karma en dessous duquel les joueurs sont expulsés à la fin du round. (Par défaut : 300)  
:::

ttt_karma_low_ban  
:::info  
Si low_autokick est activé, active aussi le ban des joueurs. Sans effet si autokick est désactivé. (Par défaut : 1)  
:::

ttt_karma_low_ban_minutes  
:::info  
Durée du ban en minutes. (Par défaut : 60)  
:::

ttt_karma_persist  
:::info  
Sauvegarde le karma d’un joueur dans un stockage persistant à la fin du round ou à la déconnexion. Il sera rechargé à la reconnexion, donc le karma persiste même après un changement de map. (Par défaut : 1)  
:::

ttt_karma_clean_half  
:::info  
Quand le karma d’un joueur est au-dessus du niveau de départ (signifiant que le max a été configuré plus haut), toutes ses augmentations de karma sont réduites selon la distance entre son karma actuel et ce niveau de départ. Plus il est haut, plus ça monte lentement. (Par défaut : 0.25)  
:::

Quand tu as modifié toutes les variables comme tu veux, l’étape suivante est de sauvegarder tes changements.

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

Après ça, tu peux lancer ton serveur !

<InlineVoucher />