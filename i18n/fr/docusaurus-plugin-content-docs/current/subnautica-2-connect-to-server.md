---
id: subnautica-2-connect-to-server
title: "Subnautica 2: Connexion au serveur"
description: "Apprenez à vous connecter à votre serveur Subnautica 2 en utilisant les bonnes informations serveur et établissez une connexion fluide sans problèmes courants -> Découvrez comment maintenant"
sidebar_label: "Connexion au serveur"
services:
  - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous ne savez pas comment vous connecter à votre **serveur de jeux Subnautica 2** ou quelles informations sont nécessaires pour commencer ? Ce guide vous montre comment obtenir les détails du serveur, établir la connexion et résoudre les problèmes courants.

:::info Avis Early Access
Subnautica 2 peut encore être en développement actif selon la phase de sortie actuelle. Par conséquent, les fonctionnalités multijoueur, le comportement du navigateur de serveurs et les processus de connexion peuvent évoluer avec le temps.
:::

<InlineVoucher />

## Obtenir les détails du serveur

Vous aurez besoin de toutes les informations nécessaires pour vous connecter à votre serveur. Vous pouvez trouver ces détails dans le tableau de bord de l’interface web de votre serveur de jeux. Les informations importantes incluent :

- Adresse IP et port
- Nom du serveur
- Mot de passe du serveur

Avec ces informations, vous pourrez identifier votre serveur et vous assurer de vous connecter au bon.

| Détail | Description |
| --- | --- |
| `Adresse IP` | L’adresse publique de votre serveur Subnautica 2 |
| `Port` | Le port de jeu utilisé pour la connexion |
| `Nom du serveur` | Le nom affiché en jeu si une liste de serveurs ou un navigateur de sessions est disponible |
| `Mot de passe du serveur` | Nécessaire uniquement si votre serveur est protégé par mot de passe |

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

## Établir la connexion au serveur

La manière exacte de vous connecter à un **serveur Subnautica 2** dépend des options multijoueur disponibles dans la version du jeu que vous utilisez. En général, vous aurez besoin de l’**adresse IP** et du **port** du serveur, et parfois aussi du **mot de passe**.

### Rejoindre via le menu multijoueur en jeu

Lancez **Subnautica 2** et ouvrez la section multijoueur ou rejoindre un serveur depuis le menu principal. Si le jeu propose une option de connexion directe, saisissez l’`adresse IP` et le `port` de votre serveur exactement comme indiqué dans l’interface web ZAP-Hosting. Si un mot de passe est configuré, entrez-le lorsqu’il est demandé.

Après confirmation, le jeu tentera d’établir la connexion avec votre serveur.

:::note Disponibilité de la connexion directe
La formulation exacte des menus et boutons peut varier selon la version du jeu. Si vous ne voyez pas d’option de connexion directe, vérifiez si le jeu demande actuellement de rejoindre via une liste de serveurs, un système d’invitation ou un navigateur de sessions.
:::

### Rejoindre via une liste de serveurs ou un navigateur de sessions

Si **Subnautica 2** utilise un navigateur de serveurs intégré au lieu d’un champ de connexion directe, cherchez votre serveur en utilisant le `nom du serveur` configuré. C’est pourquoi il est important de vérifier le nom du serveur dans votre interface web avant d’essayer de vous connecter.

Une fois que vous avez trouvé le bon serveur dans la liste :

1. Sélectionnez l’entrée du serveur
2. Vérifiez que le nom affiché correspond à votre serveur
3. Rejoignez le serveur
4. Entrez le mot de passe si demandé

:::tip Utilisez des noms de serveur uniques
Si votre serveur est difficile à identifier dans une liste, attribuez-lui un nom clair et unique dans la configuration. Cela facilite la recherche et évite de se connecter au mauvais serveur.
:::

### Si le serveur n’est pas visible immédiatement

Si votre serveur n’apparaît pas dans le navigateur en jeu, cela ne signifie pas forcément qu’il est hors ligne. Parfois, les listes de serveurs mettent du temps à se rafraîchir, ou le jeu n’affiche les serveurs qu’après une initialisation réussie.

Vérifiez les points suivants :

- Le serveur est en ligne dans l’interface web ZAP-Hosting
- Le port de jeu correct est utilisé
- Le serveur a bien démarré
- Le nom du serveur est configuré correctement
- Un mot de passe est saisi si nécessaire

![img](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Problèmes potentiels et solutions

La connexion à un serveur de jeux peut être affectée par plusieurs facteurs. Voici les problèmes les plus courants et leurs solutions.

### Serveur non visible

L’absence de visibilité du serveur peut arriver si l’initialisation n’a pas été complétée avec succès. Cela peut être dû à une mauvaise configuration ou à des fichiers corrompus. Plus d’informations se trouvent généralement dans la console serveur ou les fichiers logs.

:::caution Démarrage du serveur requis
Ne tentez pas de vous connecter avant que le serveur ait fini son processus de démarrage. Si le serveur est encore en cours de chargement ou de redémarrage, les joueurs ne pourront pas se connecter ou le serveur n’apparaîtra pas dans une liste.
:::

### Mauvaises informations de connexion

Si vous ne pouvez pas vous connecter, vérifiez que vous utilisez la bonne `adresse IP`, le bon `port` et le bon `mot de passe`. Une simple erreur de frappe peut empêcher la connexion.

| Vérification | À contrôler |
| --- | --- |
| `Adresse IP` | Correspond à celle affichée dans votre tableau de bord serveur |
| `Port` | Correspond au port de jeu assigné |
| `Mot de passe` | Saisi exactement comme configuré, avec respect des majuscules/minuscules |
| `Nom du serveur` | Correspond au nom configuré si vous cherchez dans un navigateur |

### Serveur en ligne mais connexion échoue

Si le serveur semble en ligne mais que la connexion échoue, consultez la console serveur et les logs dans votre interface web. Les erreurs peuvent indiquer un problème de chargement ou une mauvaise configuration bloquant les connexions.

:::tip Vérifiez d’abord les logs
La console serveur et les fichiers logs sont souvent le moyen le plus rapide pour comprendre pourquoi une connexion échoue. Ils permettent de confirmer si le serveur écoute correctement et si les tentatives de connexion arrivent bien.
:::

### Solution manquante ou non utile

Vous avez toujours des problèmes après ces vérifications ? Notre support est disponible tous les jours pour vous aider. Créez simplement un **[Ticket](https://zap-hosting.com/en/customer/support/)** sur notre site et décrivez votre problème en détail. N’oubliez pas d’inclure l’IP de votre serveur, le port, et une courte description de ce qui se passe lors de la connexion.

## Conclusion

Félicitations, vous vous êtes connecté avec succès à votre serveur Subnautica 2. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂