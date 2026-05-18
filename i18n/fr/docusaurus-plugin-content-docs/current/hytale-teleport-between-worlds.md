---
id: hytale-teleport-between-worlds
title: "Hytale : Téléportation entre mondes"
description: "Découvrez comment vous téléporter entre les mondes sur un serveur Hytale → En savoir plus maintenant"
sidebar_label: Téléportation entre mondes
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

La téléportation entre mondes sur un serveur Hytale permet aux joueurs de passer sans accroc d’un environnement de monde à un autre. Cette fonctionnalité est souvent utilisée sur des serveurs qui hébergent plusieurs mondes, comme des hubs, des maps aventure, des zones créatives ou des zones de gameplay séparées.

:::info Avis Early Access

Hytale est sorti le 13 janvier 2026 et est actuellement disponible en Early Access. Comme le jeu est encore en phase de développement active, les logiciels serveur, fichiers de configuration, support du modding et processus d’installation peuvent continuer à évoluer avec le temps.

:::

<InlineVoucher />


## Téléportation

Les commandes de téléportation entre mondes peuvent être lancées depuis la console du serveur ou par un opérateur dans le chat en jeu. Lorsqu’elles sont exécutées depuis la console, la commande affecte immédiatement le joueur spécifié. En jeu, le joueur qui lance la commande doit avoir les permissions d’opérateur ou équivalentes.

Pour téléporter un joueur de son monde actuel vers un autre monde, utilise la commande suivante :

```
/world teleport <playername> <worldname>
```

Le paramètre `<playername>` définit le nom du joueur à téléporter. Le paramètre `<worldname>` spécifie le nom du monde de destination.

La téléportation entre mondes nécessite que le monde de destination soit disponible sur le serveur. Si le monde cible n’est pas chargé, la commande de téléportation échouera. Pour rendre un monde disponible à la téléportation, charge-le avec la commande suivante :

```
/world load <worldname>
```


:::tip Aperçu des noms de mondes

Si tu n’es pas sûr du nom exact d’un monde, tu peux afficher la liste de tous les mondes disponibles avec la commande `/world list`. 
:::


## Conclusion

La téléportation entre mondes est un outil puissant pour gérer des serveurs Hytale multi-mondes. En utilisant les commandes adaptées depuis la console ou le chat en jeu et en s’assurant que les mondes de destination sont chargés, les admins peuvent offrir une navigation fluide et flexible entre les différents environnements du serveur.

Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂


<InlineVoucher />