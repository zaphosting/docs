---
id: dedicated-windows-nodejs
title: "Configurer Node.js sur un serveur Windows - Lance tes applis JavaScript modernes"
description: "Découvre comment configurer Node.js pour des applis scalables et en temps réel avec un environnement simplifié → En savoir plus maintenant"
sidebar_label: Installer Node.js
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Node.js est un environnement d’exécution JavaScript open-source et multi-plateforme qui exécute du code JavaScript en dehors du navigateur, par exemple sur des serveurs ou via des outils en ligne de commande. Basé sur le moteur V8, il supporte les entrées/sorties asynchrones et pilotées par événements, ce qui le rend ultra efficace pour créer des applications réseau scalables et en temps réel.

Le paradigme « JavaScript partout » permet aux développeurs d’utiliser un seul langage aussi bien pour le backend que le frontend.  

## Préparation

Avant de configurer **Node.js**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation vers la dernière version et l’installation de toutes les dépendances nécessaires. Ces préparatifs garantissent un environnement stable et évitent les soucis pendant ou après l’installation.

### Mettre à jour le système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par faire une mise à jour système. Pour cela, lance la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que ton système dispose des derniers correctifs de sécurité et des versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, tu peux passer à l’installation des dépendances. Node.js sera déployé et exécuté sur ta machine via une série de conteneurs Docker. Il faut donc d’abord installer Docker. Pour cela, lance la commande suivante :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est dispo dans notre [guide Docker](vserver-windows-docker.md).

## Installation

Maintenant que toutes les conditions sont réunies et que les préparatifs sont faits, tu peux passer à l’installation de l’application Node.js.

Pour utiliser Node.js dans un environnement isolé, commence par télécharger l’image officielle basée sur Alpine. Lance la commande suivante pour récupérer la dernière image Node.js 22 sur ton système, prête à être déployée en conteneur :

```
docker pull node:22-alpine
```

Ensuite, tu peux lancer un conteneur basé sur cette image et ouvrir une session shell à l’intérieur. Utilise cette commande pour démarrer le conteneur avec un shell interactif. L’option `--rm` supprime automatiquement le conteneur à la fermeture, pour garder ton environnement hôte propre.

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Dans le conteneur, vérifie la version de Node.js installée avec `node -v` qui devrait afficher `v22.19.0`. Tu peux aussi confirmer la version de npm avec `npm -v`, la sortie attendue est `10.9.3`. Cela confirme que l’image fournit les bonnes versions de Node.js et npm, prêtes à l’emploi.

## Configuration

Après avoir démarré le conteneur Node.js, il est recommandé de configurer les paramètres essentiels de Node.js directement dans l’environnement. Une approche courante est de définir des variables d’environnement, par exemple :

```
export NODE_ENV=production
```

Cela active le mode production, avec des optimisations de performance et un comportement de journalisation adapté. Pour le développement, tu peux plutôt définir NODE_ENV=development pour profiter de messages d’erreur détaillés et d’outils de debug.

Un dossier de projet bien structuré est important, en commençant par un fichier de configuration créé via :

```
npm init -y
```

Cela génère un fichier `package.json` qui définit les dépendances, scripts et métadonnées de ton projet. C’est le fichier central de config pour toute appli Node.js.

Les dépendances peuvent ensuite être installées avec `npm install <package>`, tandis que les dépendances de développement s’ajoutent avec `npm install <package> --save-dev`. La section `scripts` dans `package.json` te permet de définir des commandes personnalisées, comme `npm start` ou `npm run build`, pour simplifier l’exécution et la gestion du projet.

Pour des setups plus avancés, Node.js peut être personnalisé avec des fichiers `.npmrc` ou `.nvmrc`, qui permettent de configurer des registres privés, options de cache, ou forcer une version spécifique de Node.js. Ça garantit que tes applis tournent de manière cohérente sur différents environnements.

## Conclusion et ressources supplémentaires

Bravo ! Tu as maintenant installé et configuré Node.js avec succès sur ton VPS/serveur dédié. On te recommande aussi de jeter un œil aux ressources suivantes, qui peuvent t’apporter un coup de main et des conseils pendant ta config serveur :

- [Node.js.com](https://Node.js.com/) - Site officiel
- https://Node.js.com/help/ - Centre d’aide Node.js (Documentation)

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute autre question ou assistance, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂