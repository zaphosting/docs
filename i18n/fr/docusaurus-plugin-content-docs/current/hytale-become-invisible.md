---
id: hytale-become-invisible
title: "Hytale : Devenir invisible"
description: "Découvrez comment devenir invisible sur un serveur Hytale → En savoir plus maintenant"
sidebar_label: Devenir invisible
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

L’invisibilité peut être super utile sur les serveurs Hytale pour la modération, les tests ou la création de contenu. Ça permet aux admins d’observer les joueurs sans se faire remarquer, de vérifier les activités suspectes ou d’explorer des zones sans gêner le gameplay. Selon la config du serveur et les permissions dispo, l’invisibilité s’active généralement via des commandes en jeu ou la console live.

<InlineVoucher />

## Prérequis

Pour utiliser les fonctions d’invisibilité, tu dois avoir les permissions nécessaires sur le serveur. Dans la plupart des cas, il faut être opérateur ou avoir accès aux commandes de modération et de gameplay. Si tu n’as pas les droits requis, la commande sera refusée et tu ne pourras pas devenir invisible. Pour obtenir les permissions nécessaires, suis notre [guide Devenir admin](hytale-becomeadmin.md).

## Devenir invisible

Pour devenir invisible, ouvre le chat en jeu et tape la commande d’invisibilité supportée par le serveur. Exécute la commande suivante :

```
/hide <nomdujoueur>
```

Une fois la commande validée, ton personnage ne sera plus visible par les autres joueurs dans le monde. Tu peux toujours te déplacer, interagir et surveiller l’activité selon les règles du serveur et la façon dont l’invisibilité est implémentée.

En plus de la commande basique hide, Hytale propose aussi des options avancées qui te permettent de contrôler qui peut voir un joueur. Par exemple, tu peux cacher un joueur uniquement à un joueur cible précis, ou appliquer l’invisibilité à tout le monde sur le serveur.

Voici les commandes dispo :
- `/hide <nomdujoueur>`  Rend le joueur spécifié invisible.
- `/hide <nomdujoueur> --target <nomdujoueur>`  Rend le joueur spécifié invisible uniquement pour le joueur cible.
- `/hide all`  Rend tous les joueurs invisibles.

## Désactiver l’invisibilité

Pour revenir à la visibilité normale, lance à nouveau la commande correspondante pour désactiver l’invisibilité. Une fois la commande confirmée, les autres joueurs pourront voir ton personnage comme d’habitude.

```
/hide show <nomdujoueur>
```

Il existe aussi des commandes supplémentaires pour enlever l’invisibilité dans des cas plus spécifiques, comme restaurer la visibilité uniquement pour certains joueurs cibles ou retirer l’invisibilité à tout le monde.

Voici les commandes dispo :
- `/hide show <nomdujoueur>`  Enlève l’invisibilité du joueur spécifié.
- `/hide show <nomdujoueur> --target <nomdujoueur>`  Enlève l’invisibilité du joueur spécifié pour le joueur cible.
- `/hide showall`  Enlève l’invisibilité de tous les joueurs.

## Conclusion

Devenir invisible sur un serveur Hytale est un outil super pratique pour les admins et modérateurs qui veulent surveiller le gameplay discrètement. Si tu as des questions ou besoin d’aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />