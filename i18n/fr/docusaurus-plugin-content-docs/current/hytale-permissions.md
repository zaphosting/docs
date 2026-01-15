---
id: hytale-permissions
title: "Hytale : Gérer les permissions des utilisateurs et des groupes"
description: "Gérez les permissions des utilisateurs et des groupes sur votre serveur Hytale → En savoir plus maintenant"
sidebar_label: Permissions
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Gérer les permissions sur un serveur Hytale te permet de contrôler ce que les joueurs peuvent ou ne peuvent pas faire. Ça inclut d’attribuer différents niveaux d’accès aux joueurs de confiance, modérateurs et admins. Configurer correctement les permissions est essentiel pour maintenir un environnement serveur équilibré et sécurisé où les joueurs peuvent kiffer le jeu sans exploits ou abus non voulus.

Le logiciel serveur de Hytale supporte des niveaux de permissions hiérarchiques qui déterminent quelles commandes et actions chaque joueur peut exécuter. Tu peux gérer ça via la console live ou les fichiers de config selon ton setup serveur.

:::info Early Access Notice

Hytale est sorti le 13 janvier 2026 et est actuellement en Early Access. Comme le jeu est encore en phase de développement active, le logiciel serveur, les fichiers de config, le support modding et les workflows d’installation peuvent continuer à évoluer avec le temps.

:::

<InlineVoucher />



## Aperçu des niveaux de permissions

Les permissions définissent quelles actions un joueur est autorisé à faire sur le serveur. Au niveau basique, les joueurs normaux ont juste les permissions standard du gameplay, comme se déplacer, interagir avec le monde et discuter. Les niveaux supérieurs comme opérateur ou admin donnent accès aux commandes serveur qui impactent le gameplay, les autres joueurs, la config serveur et les outils de modération.

Le système de permissions se compose de deux éléments principaux :

- **Permissions utilisateur** qui s’appliquent directement à un joueur spécifique
- **Permissions de groupe** qui permettent de regrouper des permissions et de les assigner à plusieurs joueurs en même temps

Chaque joueur est identifié en interne par un UUID, nécessaire pour gérer les permissions via les commandes.



## Gérer les permissions utilisateur

Les permissions utilisateur te permettent d’accorder ou de retirer des permissions spécifiques à un seul joueur.

### Voir les permissions d’un utilisateur

Pour afficher toutes les permissions attribuées directement à un utilisateur. Cette commande montre toutes les permissions actuellement appliquées à l’utilisateur spécifié.

```
/perm user list <uuid>
```



### Ajouter des permissions à un utilisateur

Pour accorder une ou plusieurs permissions directement à un utilisateur. Les permissions spécifiées seront ajoutées immédiatement et prendront effet sans redémarrage du serveur.

```
/perm user add <uuid> <permissions>
```



### Retirer des permissions à un utilisateur

Pour révoquer des permissions d’un utilisateur. Cela supprime uniquement les permissions spécifiées tout en laissant les autres intactes.

```
/perm user remove <uuid> <permissions>
```



## Gérer l’appartenance aux groupes utilisateur

En plus des permissions directes, les utilisateurs peuvent hériter des permissions via des groupes.

### Voir les groupes d’un utilisateur

Cette commande affiche les groupes de permissions dont l’utilisateur est actuellement membre.

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



### Retirer des permissions d’un groupe

Cela supprime uniquement les permissions spécifiées du groupe sans affecter les autres permissions.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />