---
id: hytale-whitelist
title: "Hytale : Configuration et gestion de la whitelist"
description: "Découvrez comment sécuriser votre serveur de jeux Hytale en gérant l'accès des joueurs avec les fonctionnalités de whitelist et protégez votre expérience de jeu → En savoir plus maintenant"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
La whitelist est une fonctionnalité de sécurité et de contrôle d'accès qui vous permet de limiter qui peut rejoindre votre serveur de jeux Hytale. Lorsqu'elle est activée, seuls les joueurs explicitement listés dans la whitelist sont autorisés à se connecter. C’est particulièrement utile pour les serveurs privés, les serveurs communautaires, les environnements de développement ou les phases de test où l’accès doit être restreint aux joueurs de confiance uniquement.

:::info Avis Early Access

Hytale est sorti le 13 janvier 2026 et est actuellement disponible en Early Access. Comme le jeu est encore en phase de développement actif, les logiciels serveur, fichiers de configuration, support du modding et processus d’installation peuvent continuer à évoluer avec le temps.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Activer la whitelist

La whitelist peut être activée soit via la console du serveur, soit directement en jeu. Assurez-vous d’avoir les permissions nécessaires, comme les droits d’opérateur, avant d’exécuter ces commandes.

Pour activer la whitelist, lancez la commande suivante :

```
/whitelist enable
```



Une fois activée, tout joueur qui ne figure pas sur la whitelist se verra refuser l’accès lorsqu’il tentera de rejoindre le serveur. Pour vérifier si la whitelist est active, utilisez :

```
/whitelist status
```

Cette commande affiche l’état actuel de la whitelist et vous aide à confirmer que la configuration a bien été appliquée.



## Désactiver la whitelist

Si vous souhaitez permettre à tous les joueurs de rejoindre à nouveau le serveur, la whitelist peut être désactivée à tout moment. Utilisez la commande suivante pour la désactiver :

```
/whitelist disable
```

Après la désactivation, le serveur ne restreindra plus l’accès selon la whitelist et tous les joueurs pourront se connecter.



## Gérer la whitelist

La whitelist peut être gérée dynamiquement pendant que le serveur tourne. Les joueurs peuvent être ajoutés ou retirés à tout moment sans nécessiter de redémarrage du serveur grâce aux commandes.



### Ajouter un joueur à la whitelist

Pour donner accès à un joueur spécifique, ajoutez-le à la whitelist avec :

```
/whitelist add <playername>
```

Le joueur spécifié pourra immédiatement rejoindre le serveur, à condition que la whitelist soit activée.



### Retirer un joueur de la whitelist

Pour révoquer l’accès d’un joueur, retirez-le de la whitelist :

```
/whitelist remove <playername>
```

Une fois retiré, le joueur ne pourra plus rejoindre tant que la whitelist est active.



### Lister les joueurs whitelistés

Pour voir tous les joueurs actuellement autorisés à rejoindre le serveur, lancez :

```
/whitelist list
```

Cette commande affiche la liste complète des noms des joueurs whitelistés.



### Vider la whitelist

Si vous souhaitez supprimer tous les joueurs de la whitelist en une fois, vous pouvez la vider complètement :

```
/whitelist clear
```

Cela supprimera toutes les entrées existantes de la whitelist sans pour autant la désactiver.



## Gérer la whitelist via fichier

En plus des commandes, la whitelist peut aussi être gérée directement via un fichier de configuration. Cette méthode est pratique pour des modifications en masse ou pour préparer une whitelist avant de démarrer le serveur. Le fichier concerné s’appelle `whitelist.json` et se trouve dans le répertoire du serveur.

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## Conclusion

Félicitations, vous avez configuré avec succès la whitelist pour votre serveur de jeux Hytale. Votre serveur est désormais restreint aux joueurs approuvés uniquement, ce qui vous aide à garder le contrôle, la confidentialité et un environnement multijoueur plus sûr.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂