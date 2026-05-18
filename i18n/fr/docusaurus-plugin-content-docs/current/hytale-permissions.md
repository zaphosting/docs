---
id: hytale-permissions
title: "Hytale : Gérer les permissions des utilisateurs et des groupes"
description: "Gérez les permissions des utilisateurs et des groupes sur votre serveur de jeux Hytale → En savoir plus maintenant"
sidebar_label: Permissions
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Gérer les permissions sur un serveur de jeux Hytale te permet de contrôler ce que les joueurs peuvent ou ne peuvent pas faire. Cela inclut l’attribution de différents niveaux d’accès aux joueurs de confiance, modérateurs et administrateurs. Configurer correctement les permissions est essentiel pour maintenir un environnement serveur équilibré et sécurisé où les joueurs peuvent profiter du jeu sans exploits ou abus non voulus.

Le logiciel serveur de Hytale supporte des niveaux de permissions hiérarchiques qui déterminent quelles commandes et actions chaque joueur peut exécuter. Ces permissions peuvent être gérées via la console en direct ou via les paramètres de configuration selon la configuration de ton serveur.

:::info Early Access Notice

Hytale est sorti le 13 janvier 2026 et est actuellement disponible en Early Access. Comme le jeu est encore en phase de développement actif, le logiciel serveur, les fichiers de configuration, le support du modding et les workflows d’installation peuvent continuer à évoluer avec le temps.

:::

<InlineVoucher />



## Aperçu des niveaux de permissions

Les permissions définissent quelles actions un joueur est autorisé à effectuer sur le serveur. Au niveau le plus basique, les joueurs normaux ont uniquement les permissions standard de gameplay, comme se déplacer, interagir avec le monde et discuter. Les niveaux de permissions supérieurs comme opérateur ou admin donnent accès aux commandes serveur qui affectent le gameplay, les autres joueurs, la configuration du serveur et les outils de modération.

Le système de permissions se compose de deux éléments principaux :

- **Permissions utilisateur** qui s’appliquent directement à un joueur spécifique
- **Permissions de groupe** qui permettent de regrouper des permissions et de les attribuer à plusieurs joueurs en même temps

Chaque joueur est identifié en interne par un UUID, nécessaire pour gérer les permissions via les commandes.



## Gérer les permissions utilisateur

Les permissions utilisateur te permettent d’accorder ou de retirer des permissions spécifiques à un seul joueur.

### Voir les permissions d’un utilisateur

Pour afficher toutes les permissions attribuées directement à un utilisateur. Cette commande montre toutes les permissions actuellement appliquées à l’utilisateur spécifié.

```
/perm user list <uuid>
```



### Ajouter des permissions à un utilisateur

Pour accorder une ou plusieurs permissions directement à un utilisateur. Les permissions spécifiées seront ajoutées immédiatement et prendront effet sans nécessiter de redémarrage du serveur.

```
/perm user add <uuid> <permissions>
```



### Retirer des permissions à un utilisateur

Pour révoquer des permissions d’un utilisateur. Cela supprime uniquement les permissions spécifiées tout en laissant les autres permissions inchangées.

```
/perm user remove <uuid> <permissions>
```



## Gérer les affectations de groupes utilisateur

En plus des permissions directes, les utilisateurs peuvent hériter des permissions via des groupes.

### Voir les groupes de permissions d’un utilisateur

Cette commande montre à quels groupes de permissions l’utilisateur appartient actuellement.

```
/perm user group list <uuid>
```



### Ajouter un utilisateur à un groupe

Pour assigner un utilisateur à un groupe de permissions. Une fois ajouté, l’utilisateur hérite de toutes les permissions définies pour ce groupe.

```
/perm user group add <uuid> <group>
```



### Retirer un utilisateur d’un groupe

Pour retirer un utilisateur d’un groupe de permissions. Après retrait, l’utilisateur ne recevra plus les permissions de ce groupe.

```
/perm user group remove <uuid> <group>
```



## Gérer les permissions de groupe

Les groupes permettent de gérer les permissions de manière centralisée et de les réutiliser pour plusieurs utilisateurs.

### Voir les permissions d’un groupe

Pour afficher toutes les permissions attribuées à un groupe. Cette commande donne un aperçu de toutes les permissions associées au groupe spécifié.

```
/perm group list <group>
```



### Ajouter des permissions à un groupe

Pour ajouter une ou plusieurs permissions à un groupe. Tous les utilisateurs assignés à ce groupe hériteront immédiatement des nouvelles permissions.

```
/perm group add <group> <permissions>
```



### Retirer des permissions à un groupe

Cela supprime uniquement les permissions spécifiées du groupe sans affecter les autres permissions.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />