---
id: dedicated-windows-nodejs
title: "Serveur dédié : Installer Node.js sur Windows"
description: "Découvrez comment configurer Node.js pour des applications évolutives et en temps réel avec un environnement simplifié → En savoir plus maintenant"
sidebar_label: Installer Node.js
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Node.js est un environnement d’exécution JavaScript open-source et multiplateforme qui exécute du code JavaScript en dehors du navigateur, par exemple sur des serveurs ou via des outils en ligne de commande. Basé sur le moteur V8, il supporte les entrées/sorties asynchrones et pilotées par événements, ce qui le rend ultra efficace pour créer des applications réseau évolutives et en temps réel.

Le paradigme « JavaScript partout » permet aux développeurs d’utiliser un seul langage aussi bien pour le backend que pour le frontend.  

## Préparation

Avant d’installer **Node.js**, il faut préparer ton système. Cela inclut la mise à jour de ton système d’exploitation vers la dernière version et l’installation de toutes les dépendances nécessaires. Ces étapes garantissent un environnement stable et évitent les soucis pendant ou après l’installation.

### Mettre à jour le système  
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par une mise à jour système. Lance cette commande :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que ton système dispose des derniers patchs de sécurité et versions logicielles avant de continuer.

### Installer les dépendances  
Une fois la mise à jour terminée, tu peux passer à l’installation des dépendances. Node.js sera déployé et exécuté sur ta machine via une série de conteneurs Docker. Il faut donc installer Docker en premier. Pour ça, lance :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est dispo dans notre [guide Docker](vserver-windows-docker.md).

## Installation

Maintenant que tout est prêt, tu peux installer l’application Node.js.

Pour utiliser Node.js dans un environnement isolé, commence par télécharger l’image officielle basée sur Alpine. Lance cette commande pour récupérer la dernière image Node.js 22 sur ton système, prête à être déployée en conteneur :

```
docker pull node:22-alpine
```

Ensuite, tu peux lancer un conteneur basé sur cette image et ouvrir une session shell à l’intérieur. Utilise cette commande pour démarrer le conteneur avec un shell interactif. L’option `--rm` supprime automatiquement le conteneur à la sortie, pour garder ton environnement hôte propre.

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Dans le conteneur, vérifie la version de Node.js avec `node -v` qui devrait afficher `v22.19.0`. Tu peux aussi vérifier la version de npm avec `npm -v`, la sortie attendue est `10.9.3`. Cela confirme que l’image fournit les bonnes versions de Node.js et npm, prêtes à l’emploi.

## Configuration

Après avoir lancé le conteneur Node.js, il est conseillé de configurer les paramètres essentiels directement dans l’environnement. Une méthode courante est de définir des variables d’environnement, par exemple :

```
export NODE_ENV=production
```

Cela active le mode production, avec des optimisations de performance et un comportement de journalisation adapté. Pour le développement, tu peux plutôt mettre NODE_ENV=development pour bénéficier de messages d’erreur détaillés et d’outils de debug.

Un projet bien structuré commence par un fichier de configuration créé via :

```
npm init -y
```

Cela génère un fichier `package.json` qui définit les dépendances, scripts et métadonnées du projet. C’est le fichier central de configuration pour toute appli Node.js.

Les dépendances s’installent ensuite avec `npm install <package>`, tandis que les dépendances de développement s’ajoutent avec `npm install <package> --save-dev`. La section `scripts` dans `package.json` te permet de définir des commandes personnalisées, comme `npm start` ou `npm run build`, pour simplifier l’exécution et la gestion du projet.

Pour des setups plus avancés, Node.js peut être configuré via des fichiers `.npmrc` ou `.nvmrc`, qui permettent de gérer des registres privés, options de cache ou forcer une version spécifique de Node.js. Ça garantit que tes applis tournent de manière cohérente sur différents environnements.

## Conclusion et ressources supplémentaires

Bravo ! Tu as maintenant installé et configuré Node.js sur ton serveur dédié. On te recommande aussi de jeter un œil à ces ressources, qui peuvent t’apporter encore plus d’aide et de conseils pendant ta configuration :

- [Node.js.com](https://Node.js.com/) - Site officiel  
- https://Node.js.com/help/ - Centre d’aide Node.js (Documentation)

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂