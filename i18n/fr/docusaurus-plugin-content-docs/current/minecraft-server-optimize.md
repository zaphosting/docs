---
id: minecraft-server-optimize
title: "Minecraft : optimisation des performances du serveur"
description: "Découvrez comment optimiser les serveurs de jeux Minecraft pour de meilleures performances et un gameplay plus fluide grâce à des réglages efficaces → En savoir plus maintenant"
sidebar_label: Optimisation Serveur Minecraft
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Que se passe-t-il exactement lors de l’optimisation ?

L’optimisation est un point crucial pour les serveurs de jeux Minecraft afin qu’ils tournent sans accroc, et il faut vraiment prendre le temps nécessaire pour ça sur un serveur public. Ce n’est qu’avec beaucoup de temps et de tests qu’on peut obtenir le meilleur résultat. Cette doc n’est donc pas à suivre à la lettre, mais plutôt un coup de pouce pour aller dans la bonne direction.

Dans la plupart des cas, l’optimisation modifie un grand nombre de réglages sur les serveurs, ce qui peut parfois changer significativement le comportement du serveur lui-même. Par exemple, certains paramètres sont bridés, ce qui soulage le serveur et peut ainsi offrir plus de performance. Mais pour ne pas trop impacter l’expérience de jeu globale, il faut toujours trouver le juste milieu.

## Vanilla

Les options pour optimiser un serveur vanilla sont malheureusement très limitées, car il y a peu de réglages disponibles. On essaie de donner un peu plus de puissance au serveur vanilla en prenant les mesures suivantes :

### Visibilité

Une mesure très courante est de réduire la distance de rendu. La distance de vue standard est de 10 chunks, mais beaucoup de joueurs jouent avec beaucoup moins, comme 6-8. Certains abusent avec les chunks et mettent parfois jusqu’à 32 chunks, ce qui signifie que le serveur doit charger et traiter tous ces chunks, ce qui coûte beaucoup de performance.

Sur un serveur vanilla, la distance de visibilité peut être ajustée dans la config "server.properties", en modifiant la valeur "view-distance". Pour ne pas trop restreindre l’expérience de jeu, il est recommandé de régler cette valeur entre 5 et 6, ce qui soulage le serveur jusqu’à 50%.  
On a déjà un article dans notre documentation à ce sujet, que tu peux trouver [ici](minecraft-default-config.md).

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs sont transmis au serveur, qui les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme les explosions par exemple, font partie des données transmises en boucle.

Pour rendre cet échange plus efficace, la taille des données compressées peut être doublée, ce qui signifie que le serveur ne fait plus que 50 % de l’effort pour échanger les mêmes données avec les joueurs. Pour cela, la valeur "network-compression-threshold" doit aussi être ajustée dans la config "server.properties". La valeur recommandée est 512. Là aussi, on a un article dans notre doc, que tu peux consulter [ici](minecraft-default-config.md).

## Forge

Comme pour Vanilla, les options modifiables directement sur le serveur sont limitées, car seuls de petits fichiers de config sont disponibles. Par contre, l’installation de mods supplémentaires est possible, ce qui permet de soulager un peu le serveur.

### Préchargement des chunks

Une façon de soulager le serveur est de précharger les chunks. Le serveur n’a alors qu’à charger les données de chunks déjà sauvegardées pendant l’exploitation avec les joueurs, au lieu de créer et générer tous les chunks. Ce processus se fait idéalement la nuit, que tu lances le soir avant.

Un mod supplémentaire doit être installé pour ça. Un mod très adapté peut être trouvé [ici](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator).  
Le mod s’installe ensuite normalement sur le serveur comme expliqué dans nos instructions.

Avant de redémarrer le serveur, assure-toi que "max-tick-time" dans "server.properties" est réglé à "-1". Sinon, le serveur pourrait planter. Il est aussi conseillé d’avoir au moins 8-10 Go de RAM, car ce processus demande beaucoup de RAM. Tu peux temporairement augmenter la RAM la nuit, puis la réduire après la fin du processus.

:::info  
Note que le mod mentionné peut ne pas être compatible avec ta version de Forge et que le processus peut différer si tu utilises un autre mod.  
:::

Quand le serveur démarre avec le mod, ouvre la console. On recommande de créer une bordure pour le monde avec un rayon de 16 000 blocs. Pour ça, exécute ces commandes dans l’ordre :

- worldborder center 0 0  
- worldborder set 16000

:::info  
Si besoin, remplace les coordonnées par le centre de ton monde avec la commande center pour ne pas "couper" ton monde (qui peut déjà être construit).  
:::

Une fois la bordure définie, lance le préchargement avec la commande :

- pregen gen startWorldBorder

Tous les chunks dans la bordure sont alors préchargés un par un. Ce processus peut durer jusqu’à 8 heures selon le nombre de mods installés. La progression s’affiche régulièrement dans la console via des messages d’info. Quand c’est fini, c’est aussi indiqué dans la console !

:::info  
Le mod peut rester installé sur le serveur après ce processus. Il continuera à optimiser les chunks pendant l’exploitation, même sans joueur connecté.  
:::

### Visibilité

Une mesure très courante est de réduire la distance de rendu. La distance de vue standard est de 10 chunks, mais beaucoup de joueurs jouent avec beaucoup moins, comme 6-8. Certains abusent avec les chunks et mettent parfois jusqu’à 32 chunks, ce qui signifie que le serveur doit charger et traiter tous ces chunks, ce qui coûte beaucoup de performance.

La visibilité d’un serveur Forge peut être ajustée dans la config "server.properties", en modifiant la valeur "view-distance". Pour ne pas trop restreindre l’expérience de jeu, il est recommandé de régler cette valeur entre 5 et 6, ce qui soulage le serveur jusqu’à 50 %.  
On a déjà un article dans notre documentation à ce sujet, que tu peux trouver [ici](minecraft-default-config.md).

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs sont transmis au serveur, qui les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme les explosions par exemple, font partie des données transmises en boucle.

Pour rendre cet échange plus efficace, la taille des données compressées peut être doublée, ce qui signifie que le serveur ne fait plus que 50 % de l’effort pour échanger les mêmes données avec les joueurs. Pour cela, la valeur "network-compression-threshold" doit aussi être ajustée dans la config "server.properties". La valeur recommandée est 512. Là aussi, on a un article dans notre doc, que tu peux consulter [ici](minecraft-default-config.md).

## Bukkit

### Visibilité

Une mesure très courante est de réduire la distance de rendu. La distance de vue standard est de 10 chunks, mais beaucoup de joueurs jouent avec beaucoup moins, comme 6-8. Certains abusent avec les chunks et mettent parfois jusqu’à 32 chunks, ce qui signifie que le serveur doit charger et traiter tous ces chunks, ce qui coûte beaucoup de performance.

La visibilité d’un serveur Forge peut être ajustée dans la config "server.properties", en modifiant la valeur "view-distance". Pour ne pas trop restreindre l’expérience de jeu, il est recommandé de régler cette valeur entre 5 et 6, ce qui soulage le serveur jusqu’à 50 %.  
On a déjà un article dans notre documentation à ce sujet, que tu peux trouver [ici](minecraft-default-config.md).

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs sont transmis au serveur, qui les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme les explosions par exemple, font partie des données transmises en boucle.

Pour rendre cet échange plus efficace, la taille des données compressées peut être doublée, ce qui signifie que le serveur ne fait plus que 50 % de l’effort pour échanger les mêmes données avec les joueurs. Pour cela, la valeur "network-compression-threshold" doit aussi être ajustée dans la config "server.properties". La valeur recommandée est 512. Là aussi, on a un article dans notre doc, que tu peux consulter [ici](minecraft-default-config.md).

### Limites de spawn

Ici, on réduit un peu les taux de spawn généraux des mobs sur le serveur. La différence est quasi imperceptible par rapport aux valeurs normales. Cependant, il peut arriver que certaines fermes à mobs ne fonctionnent plus comme prévu.

Pour ajuster ça, il faut éditer la config "bukkit.yml". Les valeurs suivantes doivent être modifiées à la section "spawn-limits" :  
- monsters: 50 #Par défaut : 70  
- animals: 10 #Par défaut : 15  
- water-animals: 3 #Par défaut : 5  
- ambient: 4 #Par défaut : 15

:::info  
Tu peux bien sûr ajuster ces valeurs toi-même si tu veux, sinon celles ci-dessus sont une très bonne moyenne.  
:::

Pour améliorer encore le spawn, la valeur "monster-spawns" dans "ticks-per" doit aussi être changée dans "bukkit.yml" :  
- monster-spawns: 2 #Par défaut : 1

S’il y a un problème général avec les monstres (par exemple détecté dans le rapport de timing), la valeur peut monter jusqu’à 5. Il faut observer le comportement du serveur avec chaque valeur pour trouver la meilleure pour ton serveur.

### Traitement des chunks

Minecraft fonctionne avec des chunks, qui sont des blocs de 16x16 blocs assemblés et qui représentent visuellement le monde pour le client. Le serveur travaille donc avec ces chunks et charge ceux nécessaires en RAM. Plus il y a de chunks chargés et traités en permanence, plus le serveur doit fournir de puissance, ce qui peut le faire ramer.

Avec les réglages par défaut, les chunks chargés ne sont jamais déchargés, ce qui fait que la RAM est très sollicitée et une énorme quantité est nécessaire. La performance du serveur en pâtit donc beaucoup.

Pour que le serveur ne charge que les chunks nécessaires, il faut modifier ces options dans "bukkit.yml" sous "chunk-gc" :  
- period-in-ticks: 300 #Par défaut : 600  
- load-threshold: 300 #Par défaut : 0

L’option "period-in-ticks" détermine à quel intervalle en secondes les chunks sont déchargés. Tu peux réduire cette valeur, mais attention à un effet indésirable : une boucle.

Dans ce cas, un chunk est déchargé, puis rapidement nécessaire à nouveau, ce qui oblige le serveur à le recharger, et ça se répète en boucle, ce qui est plus coûteux que de garder le chunk chargé un peu plus longtemps.

## Spigot

### Visibilité

Une mesure très courante est de réduire la distance de rendu. La distance de vue standard est de 10 chunks, mais beaucoup de joueurs jouent avec beaucoup moins, comme 6-8. Certains abusent avec les chunks et mettent parfois jusqu’à 32 chunks, ce qui signifie que le serveur doit charger et traiter tous ces chunks, ce qui coûte beaucoup de performance.

Sur un serveur spigot, la visibilité se règle dans la config "spigot.yml", en modifiant la valeur "view-distance". Pour ne pas trop restreindre l’expérience de jeu, il est recommandé de régler cette valeur entre 5 et 6, ce qui soulage le serveur jusqu’à 50 %.

:::info  
Selon tes préférences, tu peux aussi mettre 4, ce qui aide très bien contre les lags sur des serveurs farm world en version 1.13+.  
:::

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs sont transmis au serveur, qui les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme les explosions par exemple, font partie des données transmises en boucle.

Pour rendre cet échange plus efficace, la taille des données compressées peut être doublée, ce qui signifie que le serveur ne fait plus que 50 % de l’effort pour échanger les mêmes données avec les joueurs. Pour cela, la valeur "network-compression-threshold" doit aussi être ajustée dans la config "server.properties". La valeur recommandée est 512. Là aussi, on a un article dans notre doc, que tu peux consulter [ici](minecraft-default-config.md).

### Limites de spawn

Ici, on réduit un peu les taux de spawn généraux des mobs sur le serveur. La différence est quasi imperceptible par rapport aux valeurs normales. Cependant, il peut arriver que certaines fermes à mobs ne fonctionnent plus comme prévu.

Pour ajuster ça, il faut éditer la config "bukkit.yml". Les valeurs suivantes doivent être modifiées à la section "spawn-limits" :  
- monsters: 50 #Par défaut : 70  
- animals: 10 #Par défaut : 15  
- water-animals: 3 #Par défaut : 5  
- ambient: 4 #Par défaut : 15

:::info  
Tu peux bien sûr ajuster ces valeurs toi-même si tu veux, sinon celles ci-dessus sont une très bonne moyenne.  
:::

Pour améliorer encore le spawn, la valeur "monster-spawns" dans "ticks-per" doit aussi être changée dans "bukkit.yml" :  
- monster-spawns: 2 #Par défaut : 1

S’il y a un problème général avec les monstres (par exemple détecté dans le rapport de timing), la valeur peut monter jusqu’à 5. Il faut observer le comportement du serveur avec chaque valeur pour trouver la meilleure pour ton serveur.

### Traitement des chunks

Minecraft fonctionne avec des chunks, qui sont des blocs de 16x16 blocs assemblés et qui représentent visuellement le monde pour le client. Le serveur travaille donc avec ces chunks et charge ceux nécessaires en RAM. Plus il y a de chunks chargés et traités en permanence, plus le serveur doit fournir de puissance, ce qui peut le faire ramer.

Avec les réglages par défaut, les chunks chargés ne sont jamais déchargés, ce qui fait que la RAM est très sollicitée et une énorme quantité est nécessaire. La performance du serveur en pâtit donc beaucoup.

Pour que le serveur ne charge que les chunks nécessaires, il faut modifier ces options dans "bukkit.yml" sous "chunk-gc" :  
- period-in-ticks: 300 #Par défaut : 600  
- load-threshold: 300 #Par défaut : 0

L’option "period-in-ticks" détermine à quel intervalle en secondes les chunks sont déchargés. Tu peux réduire cette valeur, mais attention à un effet indésirable : une boucle.

Dans ce cas, un chunk est déchargé, puis rapidement nécessaire à nouveau, ce qui oblige le serveur à le recharger, et ça se répète en boucle, ce qui est plus coûteux que de garder le chunk chargé un peu plus longtemps.

### Distance de spawn

Les mobs peuvent toujours spawn à une certaine distance des joueurs. Ici, on réduit un peu cette distance pour éviter les problèmes de spawn. Ce réglage est important car certains paramètres de spawn ont déjà été modifiés plus haut.

On modifie cette valeur dans "spigot.yml" dans "world-settings" :  
- mob-spawn-range: 3 #Par défaut : 4

### Distances d’activation des entités

Ici, on règle quand les entités — animaux et monstres — sont activées. Cela signifie que les animaux peuvent bouger ou que les monstres peuvent détecter les joueurs. En gros, c’est activé pour tous les mobs, mais en mode veille. En veille, les mobs peuvent continuer à bouger et détecter les joueurs, mais très lentement, ce qui soulage le serveur.

Ces réglages se font dans "spigot.yml" sous "entity-activation-range". On recommande ces valeurs :  
- animals: 6 #Par défaut : 32  
- monsters: 16 #Par défaut : 32  
- misc: 2 #Par défaut : 16  
- water: 6 #Par défaut : 6  
- tick-inactive-villagers: true #Par défaut : true

### Optimisations des entonnoirs (funnels)

Les entonnoirs sont super importants dans Minecraft, mais pour les serveurs, c’est un vrai poison ! Pour chaque entonnoir, le serveur doit vérifier 20 fois par seconde si un item est prêt à être ramassé. Déplacer les items d’entonnoir en entonnoir ou dans un coffre coûte aussi beaucoup de ressources !

Pour améliorer ça, on augmente les intervalles de temps entre ces vérifications. Avec les valeurs ici, l’action est faite toutes les 3 secondes. Les taux de transfert ne changent pas. Par contre, les horloges redstone créées avec des entonnoirs peuvent ne plus marcher correctement.

Pour régler ça, modifie ces valeurs dans "spigot.yml" :  
- hopper-transfer: 24 #Par défaut : 8  
- hopper-check: 24 #Par défaut : 8  
- hopper-amount: 3 #Par défaut : 1

### Collisions

Depuis Minecraft 1.9, il y a des collisions, par exemple un joueur ne peut plus se superposer à un autre. Ici, on détermine combien de collisions d’entités sont autorisées en général. Surtout dans les fermes à mobs où beaucoup de mobs sont serrés, ça peut parfois surcharger le serveur.

Pour adapter ça, modifie cette valeur dans "spigot.yml" :  
- max-entity-collisions: 1 #Par défaut : 8

Les collisions n’ont pas vraiment d’effet sur les mobs, donc on peut baisser cette valeur. Elle ne s’applique pas aux joueurs, seulement aux mobs !

### Rayon de fusion

Le rayon de fusion détermine quels items et XP sont fusionnés, ce qui fait que le serveur doit traiter moins d’entités. Sur des serveurs où beaucoup d’items traînent au sol, augmenter ce rayon peut améliorer la fluidité pour les joueurs. Mais attention à ne pas trop augmenter, sinon ça crée un effet de lag car le serveur doit vérifier une zone trop grande.

Pour régler ça, modifie ces valeurs dans "spigot.yml" sous "merge-radius" :  
- item: 4.0 #Par défaut : 2.5  
- exp: 6.0 #Par défaut : 3.0

:::info  
Ne dépasse pas 8 pour ces valeurs, sinon le lag mentionné peut apparaître !  
:::

## Paper Spigot

### Visibilité

Une mesure très courante est de réduire la distance de rendu. La distance de vue standard est de 10 chunks, mais beaucoup de joueurs jouent avec beaucoup moins, comme 6-8. Certains abusent avec les chunks et mettent parfois jusqu’à 32 chunks, ce qui signifie que le serveur doit charger et traiter tous ces chunks, ce qui coûte beaucoup de performance.

Sur un serveur (paper) spigot, la distance de vue se règle dans "spigot.yml", en modifiant la valeur "view-distance". Pour ne pas trop restreindre l’expérience de jeu, il est recommandé de régler cette valeur entre 5 et 6, ce qui soulage le serveur jusqu’à 50 %.

:::info  
Selon tes préférences, tu peux aussi mettre 4, ce qui aide très bien contre les lags sur des serveurs farm world en version 1.13+.  
:::

### Compression des données

Sur un serveur, il y a un échange permanent entre le serveur et les joueurs connectés. Les mouvements des joueurs sont transmis au serveur, qui les renvoie ensuite à tous les autres joueurs. Mais aussi les actions des joueurs ou les événements dans le monde, comme les explosions par exemple, font partie des données transmises en boucle.

Pour rendre cet échange plus efficace, la taille des données compressées peut être doublée, ce qui signifie que le serveur ne fait plus que 50 % de l’effort pour échanger les mêmes données avec les joueurs. Pour cela, la valeur "network-compression-threshold" doit aussi être ajustée dans la config "server.properties". La valeur recommandée est 512. Là aussi, on a un article dans notre doc, que tu peux consulter [ici](minecraft-default-config.md).

### Limites de spawn

Ici, on réduit un peu les taux de spawn généraux des mobs sur le serveur. La différence est quasi imperceptible par rapport aux valeurs normales. Cependant, il peut arriver que certaines fermes à mobs ne fonctionnent plus comme prévu.

Pour ajuster ça, il faut éditer la config "bukkit.yml". Les valeurs suivantes doivent être modifiées à la section "spawn-limits" :  
- monsters: 50 #Par défaut : 70  
- animals: 10 #Par défaut : 15  
- water-animals: 3 #Par défaut : 5  
- ambient: 4 #Par défaut : 15

:::info  
Tu peux bien sûr ajuster ces valeurs toi-même si tu veux, sinon celles ci-dessus sont une très bonne moyenne.  
:::

Pour améliorer encore le spawn, la valeur "monster-spawns" dans "ticks-per" doit aussi être changée dans "bukkit.yml" :  
- monster-spawns: 2 #Par défaut : 1

S’il y a un problème général avec les monstres (par exemple détecté dans le rapport de timing), la valeur peut monter jusqu’à 5. Il faut observer le comportement du serveur avec chaque valeur pour trouver la meilleure pour ton serveur.

### Traitement des chunks

Minecraft fonctionne avec des chunks, qui sont des blocs de 16x16 blocs assemblés et qui représentent visuellement le monde pour le client. Le serveur travaille donc avec ces chunks et charge ceux nécessaires en RAM. Plus il y a de chunks chargés et traités en permanence, plus le serveur doit fournir de puissance, ce qui peut le faire ramer.

Avec les réglages par défaut, les chunks chargés ne sont jamais déchargés, ce qui fait que la RAM est très sollicitée et une énorme quantité est nécessaire. La performance du serveur en pâtit donc beaucoup.

Pour que le serveur ne charge que les chunks nécessaires, il faut modifier ces options dans "bukkit.yml" sous "chunk-gc" :  
- period-in-ticks: 300 #Par défaut : 600  
- load-threshold: 300 #Par défaut : 0

L’option "period-in-ticks" détermine à quel intervalle en secondes les chunks sont déchargés. Tu peux réduire cette valeur, mais attention à un effet indésirable : une boucle.

Dans ce cas, un chunk est déchargé, puis rapidement nécessaire à nouveau, ce qui oblige le serveur à le recharger, et ça se répète en boucle, ce qui est plus coûteux que de garder le chunk chargé un peu plus longtemps.

### Distance de spawn

Les mobs peuvent toujours spawn à une certaine distance des joueurs. Ici, on réduit un peu cette distance pour éviter les problèmes de spawn. Ce réglage est important car certains paramètres de spawn ont déjà été modifiés plus haut.

On modifie cette valeur dans "spigot.yml" dans "world-settings" :  
- mob-spawn-range: 3 #Par défaut : 4

### Spawner de mobs

Sur les serveurs city build, les spawners sont très utilisés, parfois en grand nombre. Ils génèrent de plus en plus de mobs, ce qui peut causer pas mal de problèmes.

Cette option ajuste le comportement des spawners pour qu’ils s’activent à intervalles plus courts. Pour ça, modifie cette valeur dans "paper.yml" :  
- mob-spawner-tick-rate: 3 #Par défaut : 1

:::info  
La valeur utilisée ici ne change pas trop le comportement et n’impacte pas vraiment le gameplay.  
:::

### Distances d’activation des entités

Ici, on règle quand les entités — animaux et monstres — sont activées. Cela signifie que les animaux peuvent bouger ou que les monstres peuvent détecter les joueurs. En gros, c’est activé pour tous les mobs, mais en mode veille. En veille, les mobs peuvent continuer à bouger et détecter les joueurs, mais très lentement, ce qui soulage le serveur.

Ces réglages se font dans "spigot.yml" sous "entity-activation-range". On recommande ces valeurs :  
- animals: 6 #Par défaut : 32  
- monsters: 16 #Par défaut : 32  
- misc: 2 #Par défaut : 16  
- water: 6 #Par défaut : 6  
- tick-inactive-villagers: true #Par défaut : true

### Optimisation des entonnoirs (funnels)

Les entonnoirs sont super importants dans Minecraft, mais pour les serveurs, c’est un vrai poison ! Pour chaque entonnoir, le serveur doit vérifier 20 fois par seconde si un item est prêt à être ramassé. Déplacer les items d’entonnoir en entonnoir ou dans un coffre coûte aussi beaucoup de ressources !

Pour améliorer ça, on augmente les intervalles de temps entre ces vérifications. Avec les valeurs ici, l’action est faite toutes les 3 secondes. Les taux de transfert ne changent pas. Par contre, les horloges redstone créées avec des entonnoirs peuvent ne plus marcher correctement.

Pour régler ça, modifie ces valeurs dans "spigot.yml" :  
- hopper-transfer: 24 #Par défaut : 8  
- hopper-check: 24 #Par défaut : 8  
- hopper-amount: 3 #Par défaut : 1

:::info  
Assure-toi que la valeur "use-hopper-check" est réglée sur "true" dans "paper.yml" !  
:::

### Collisions

Depuis Minecraft 1.9, il y a des collisions, par exemple un joueur ne peut plus se superposer à un autre. Ici, on détermine combien de collisions d’entités sont autorisées en général. Surtout dans les fermes à mobs où beaucoup de mobs sont serrés, ça peut parfois surcharger le serveur.

Pour adapter ça, modifie cette valeur dans "spigot.yml" :  
- max-entity-collisions: 1 #Par défaut : 8

Les collisions n’ont pas vraiment d’effet sur les mobs, donc on peut baisser cette valeur. Elle ne s’applique pas aux joueurs, seulement aux mobs !

### Rayon de fusion

Le rayon de fusion détermine quels items et XP sont fusionnés, ce qui fait que le serveur doit traiter moins d’entités. Sur des serveurs où beaucoup d’items traînent au sol, augmenter ce rayon peut améliorer la fluidité pour les joueurs. Mais attention à ne pas trop augmenter, sinon ça crée un effet de lag car le serveur doit vérifier une zone trop grande.

Pour régler ça, modifie ces valeurs dans "spigot.yml" sous "merge-radius" :  
- item: 4.0 #Par défaut : 2.5  
- exp: 6.0 #Par défaut : 3.0

:::info  
Ne dépasse pas 8 pour ces valeurs, sinon le lag mentionné peut apparaître !  
:::

### Explosions

Sur Paper Spigot, beaucoup de parties du serveur Minecraft ont été reprogrammées pour améliorer les performances. C’est aussi le cas des explosions ! Le logiciel gère mieux les explosions pour éviter les gros lags.

Pour ça, modifie cette valeur dans "paper.yml" :  
- optimize-explosions: true #Par défaut : false

### Coffres

Même avec les coffres, il y a un petit truc à optimiser ! Si un chat est assis sur un coffre, il ne peut pas être ouvert. Pour vérifier ça, le serveur doit scanner tous les mobs dans un certain rayon à chaque ouverture de coffre, ce qui est très coûteux.

Cette option peut être désactivée facilement :  
- disable-chest-cat-detection: true #Par défaut : false

### Inventaires

L’inventaire est beaucoup utilisé, mais tous les inventaires ne sont pas égaux. Par exemple, un coffre ou un établi est aussi un inventaire. Ce réglage permet d’alléger le serveur sans que personne ne le remarque, en définissant le nombre de ticks entre chaque mise à jour d’inventaire.

Modifie cette valeur dans "paper.yml" :  
- container-update-tick-rate: 3 #Par défaut : 1

:::info  
Ne dépasse pas 5, sinon l’inventaire peut bugger un peu ! Sur des modes comme SurvivalGames où tous les joueurs veulent accéder aux coffres centraux, laisse à 1.  
:::

### Mises à jour de la lumière

Paper Spigot propose aussi une option alternative pour mieux gérer les mises à jour de la lumière dans le monde. Avec cette méthode, les mises à jour ne sont pas faites dans un tick, ce qui peut parfois bloquer le serveur, mais en dehors, via des threads asynchrones.

Pour ça, modifie cette valeur dans "paper.yml" :  
- queue-light-updates: true #Par défaut : false

### Sauvegarde des données des chunks

Quand un chunk est modifié, les changements ne sont pas écrits directement sur le disque, mais d’abord chargés en RAM. Cependant, les sauvegardes sont fréquentes, ce qui peut causer des lags, surtout lors de grosses modifications.

Avec ce réglage, on limite le nombre max de chunks sauvegardés par tick. Ça augmente l’usage de la RAM car les changements restent plus longtemps en mémoire.

Modifie cette valeur dans "paper.yml" :  
- max-auto-save-chunks-per-tick: 10 #Par défaut : 24

### Redstone

La redstone est souvent utilisée avec des circuits parfois énormes. Sur les serveurs publics, c’est souvent la source principale de lag sur presque 90 % des serveurs. Paper Spigot propose un traitement alternatif de la redstone, qui la rend presque inoffensive tout en gardant la même fonctionnalité que Vanilla !

Pour ça, modifie cette valeur dans "paper.yml" :  
- use-faster-eigencraft-redstone: true #Par défaut : false

:::info  
**Attention ! Dans certaines situations, ça peut beaucoup changer le fonctionnement de la redstone !**  
:::

<InlineVoucher />