---
id: vserver-linux-nodejs
title: "Configurer Node.js sur un serveur Linux - Lance des applications JavaScript modernes"
description: "Découvre comment configurer un environnement Node.js stable pour des applications évolutives et en temps réel avec Docker et la préparation système → En savoir plus maintenant"
sidebar_label: Installer Node.js
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Node.js est un environnement d’exécution JavaScript open-source et multiplateforme qui exécute du code JavaScript en dehors du navigateur, par exemple sur des serveurs ou dans des outils en ligne de commande. Basé sur le moteur V8, il supporte les entrées/sorties asynchrones et pilotées par événements, ce qui le rend ultra efficace pour créer des applications réseau évolutives et en temps réel.

Le paradigme « JavaScript partout » permet aux développeurs d’utiliser un seul langage aussi bien côté backend que frontend.

<InlineVoucher />

## Préparation

Avant d’installer **Node.js**, il faut préparer ton système. Cela inclut la mise à jour de ton système d’exploitation vers la dernière version et l’installation de toutes les dépendances nécessaires. Ces préparatifs garantissent un environnement stable et évitent les problèmes pendant ou après l’installation.

### Mettre à jour le système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par une mise à jour système. Lance la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que ton système dispose des derniers correctifs de sécurité et des versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, tu peux passer à l’installation des dépendances. Node.js sera déployé et exécuté sur ta machine via une série de conteneurs Docker. Docker doit donc être installé en premier. Pour cela, lance la commande suivante :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est dispo dans notre [guide Docker](dedicated-linux-docker.md).

## Installation

Maintenant que toutes les conditions sont remplies et que la préparation est faite, tu peux procéder à l’installation de l’application Node.js.

Pour utiliser Node.js dans un environnement isolé, commence par télécharger l’image officielle basée sur Alpine. Exécute cette commande pour récupérer la dernière image Node.js 22 sur ton système, prête à être déployée en conteneur :

```
docker pull node:22-alpine
```

Ensuite, lance un conteneur basé sur cette image et ouvre une session shell à l’intérieur. Utilise cette commande pour démarrer le conteneur avec un shell interactif. L’option `--rm` supprime automatiquement le conteneur à la sortie, pour garder ton environnement hôte propre.

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Dans le conteneur, vérifie la version de Node.js installée avec `node -v` qui devrait afficher `v22.19.0`. Tu peux aussi confirmer la version de npm avec `npm -v` et la sortie attendue est `10.9.3`. Cela confirme que l’image fournit les bonnes versions de Node.js et npm, prêtes à l’emploi.

## Configuration

Après avoir démarré le conteneur Node.js, il est conseillé de configurer les paramètres essentiels directement dans l’environnement. Une méthode courante est de définir des variables d’environnement, par exemple :

```
export NODE_ENV=production
```

Cela active le mode production, optimisant les performances et ajustant le comportement des logs. Pour le développement, tu peux plutôt définir NODE_ENV=development pour bénéficier de messages d’erreur détaillés et d’outils de debug.

Un répertoire de projet bien structuré est important, en commençant par un fichier de configuration créé via :

```
npm init -y
```

Cela génère un fichier `package.json` qui définit les dépendances, scripts et métadonnées de ton projet. C’est le fichier central de configuration pour toute application Node.js.

Les dépendances s’installent ensuite avec `npm install <package>`, tandis que les dépendances de développement s’ajoutent avec `npm install <package> --save-dev`. La section `scripts` dans `package.json` te permet de définir des commandes personnalisées, comme `npm start` ou `npm run build`, pour simplifier l’exécution et la gestion du projet.

Pour des configurations plus avancées, Node.js peut être personnalisé avec des fichiers `.npmrc` ou `.nvmrc`, qui permettent de configurer des registres privés, options de cache, ou forcer une version spécifique de Node.js. Cela garantit que tes applications tournent de manière cohérente sur différents environnements.

## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Node.js avec succès sur ton VPS/serveur dédié. On te recommande aussi de jeter un œil aux ressources suivantes, qui pourront t’apporter un coup de main et des conseils pendant ta configuration serveur :

- [Node.js.com](https://Node.js.com/) - Site officiel
- https://Node.js.com/help/ - Centre d’aide Node.js (Documentation)

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂