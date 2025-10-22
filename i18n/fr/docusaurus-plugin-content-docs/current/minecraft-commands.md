---
id: minecraft-commands
title: "Minecraft : Commandes Générales du Serveur"
description: "Découvrez comment utiliser les commandes Minecraft pour améliorer le gameplay et gérer les fonctions efficacement → En savoir plus maintenant"
sidebar_label: Commandes générales
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### C’est quoi les commandes ?

Les commandes peuvent être utilisées dans Minecraft pour effectuer des fonctions supplémentaires ou spéciales. Minecraft contient déjà plus de **100 commandes** sans aucune modification, qui peuvent être utilisées pour activer, gérer ou réaliser une grande variété de fonctions.

Dans cet article de notre documentation, on va aborder les commandes les plus importantes, celles qui sont utilisées et nécessaires très souvent.  
Si une commande n’est pas listée ici, le [Minecraft-Wiki officiel](https://minecraft-de.gamepedia.com/) est super utile, car chaque partie (y compris toutes les commandes) est expliquée en détail.

<InlineVoucher />

### Utilisation

Chaque commande commence toujours par un "/". Donc si tu veux utiliser une commande, tu dois ouvrir le chat en jeu et taper d’abord le "/", puis tu peux écrire la commande elle-même. En appuyant sur la touche TAB, un aperçu de toutes les commandes disponibles s’affiche. Ça permet aussi de compléter rapidement et facilement les commandes automatiquement, comme dans les recherches sur Internet.

:::info
Si tu exécutes des commandes via la console, le "/" n’est pas nécessaire et doit être retiré !

Ce caractère sert juste à distinguer un message normal dans le chat d’une commande dans le jeu.
:::

### Droits / Permissions

Pour pouvoir utiliser les commandes, il faut avoir les droits nécessaires. Dans Minecraft Vanilla ou Forge, il n’y a pas de vrai système de permissions utilisable par des plugins comme dans Spigot. Ici, seul le système de niveaux des droits OP peut être utilisé. Tu trouveras un tutoriel sur le système des droits OP ici : [Permissions OP](minecraft-addop.md)

Si un système de permissions a été installé et que tu veux attribuer des droits à certaines commandes Minecraft, les permissions correspondantes peuvent être assignées comme expliqué ci-dessous.

:::info
La syntaxe des permissions pour chaque commande est toujours la même et peut être adaptée en conséquence.

Par exemple, pour attribuer les permissions à la commande Locate, il faut définir la permission suivante : ``minecraft.command.locate``
:::



## Commandes

### /tp

Avec la commande **/tp**, les admins peuvent se téléporter vers d’autres joueurs ou même téléporter un joueur vers un autre joueur ciblé.  
La commande peut aussi servir à téléporter des mobs ou à se téléporter soi-même à un endroit en entrant des coordonnées. Plus de détails ci-dessous.

**Exemples :**

``/tp PlayerA``

Téléporte l’exécuteur de la commande vers un autre joueur.

``/tp PlayerA PlayerB``

Téléporte *PlayerA* vers *PlayerB*. Peu importe qui exécute la commande, les joueurs spécifiés sont téléportés.  
Si l’exécuteur est *PlayerB*, *PlayerA* serait téléporté vers lui-même.

``/tp -100 75 985``

L’exécuteur est téléporté aux coordonnées spécifiées.  
En précisant un joueur devant les coordonnées (``/tp PlayerA -100 75 985``), la commande téléporte ce joueur à la place de l’exécuteur.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Te téléporte vers la *vache* la plus proche dans un rayon de 10 blocs.  
``@s`` peut aussi être remplacé par un joueur comme *PlayerA*, ce qui téléporterait ce joueur.

### /locate

Avec la commande **/locate**, tu peux obtenir les coordonnées du bâtiment que tu cherches, comme un village de villageois.

**Exemples :**

``/locate fortress``

Trouve et affiche la position de la prochaine forteresse du Nether quand tu es dans le Nether.

``/locate village``

Trouve et affiche la position de la même manière, mais pour un village de villageois.

### /worldborder

Cette commande crée une frontière dans le monde actuel. Ça empêche les joueurs d’explorer au-delà de la limite définie.

**Exemples :**

``/worldborder center 0 0``

Définit le centre du monde aux coordonnées 0;0, à partir duquel le rayon est calculé.

``/worldborder set 16000``

Fixe la limite à 16 000x16 000 blocs. Ça fait un rayon de 8 000 blocs dans chaque direction.

### /effect

Cette commande permet de donner des effets de potion normaux aux joueurs (ou même aux entités).  
Certains effets ne peuvent être obtenus qu’avec des commandes, comme l’effet chance, qui n’a pas encore de fonction en jeu.

:::info
La commande a évolué au fil des versions, avec des ajouts et modifications.

Les exemples ci-dessous sont tirés de la dernière version et peuvent donc différer dans les versions plus anciennes !
:::

**Exemples :**

``/effect give PlayerA minecraft:speed``

Donne au joueur *PlayerA* un effet de vitesse de **Speed 1**.

### /gamerule

Cette commande sert à modifier des réglages spéciaux dans un monde ou à activer/désactiver des fonctions particulières.  
Par exemple, comme dans l’exemple ci-dessous, elle permet d’activer la conservation de l’inventaire à la mort.

**Exemples :**

``/gamerule keepInventory true``

Réglage du monde qui permet aux joueurs de garder leur inventaire (et leur expérience) en cas de mort.

``/gamerule mobGriefing false``

Définit si les monstres comme les Creepers peuvent ou non endommager le monde.

### /save-all

Le serveur sauvegarde le monde toutes les 5 minutes et écrit les données sur le disque.  
Cette commande force une sauvegarde immédiate et réinitialise le compte à rebours de la sauvegarde automatique à 5 minutes.

### /tps

Cette commande permet de vérifier les TPS (ticks par seconde) sur Spigot et Paper Spigot.  
Les TPS donnent une idée des performances du serveur. Le maximum et le meilleur TPS possible est 20.  
Les TPS affichent les 60 dernières secondes, les deux valeurs suivantes sont la moyenne sur 5 et 15 minutes.

### /ban

Cette commande sert à exclure un joueur du serveur, pour qu’il ne puisse plus jamais y accéder. Le compte du joueur est banni via son UUID.

:::info
Sur les serveurs avec le mode en ligne désactivé, les joueurs peuvent changer de nom et récupérer l’accès. Dans ce cas, un ban IP via plugins est la meilleure solution.
:::

**Exemples :**

``/ban PlayerA``

Le joueur *PlayerA* est banni du serveur.

``/ban @a``

Cette commande bannit tous les joueurs actuellement connectés. Les admins avec droits OP ne sont pas affectés et restent sur le serveur.

### /pardon

Cette commande permet de débannir un joueur (comme expliqué juste au-dessus) pour qu’il puisse revenir sur le serveur.

**Exemples :**

``/pardon PlayerA``

Le joueur *PlayerA* est retiré de la liste des bannis et peut revenir.

### /kick

Cette commande coupe la connexion entre le serveur et le joueur spécifié. Le joueur est forcé de quitter le serveur mais peut se reconnecter.

**Exemples :**

``/kick PlayerA``

Expulse le joueur *PlayerA* du serveur avec le message "Kicked by an operator".

``/kick PlayerA Reason``

Expulse le joueur *PlayerA* avec le message "Reason".

<InlineVoucher />