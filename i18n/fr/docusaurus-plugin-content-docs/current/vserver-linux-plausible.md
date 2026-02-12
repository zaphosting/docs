---
id: vserver-linux-plausible
title: "VPS : Installer Plausible sur OS"
description: "Découvrez comment configurer une plateforme d’analytics web axée sur la confidentialité pour des insights clairs et des performances rapides → En savoir plus maintenant"
sidebar_label: Installer Plausible
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plausible est une plateforme d’analytics web légère et open-source qui fonctionne sans cookies et respecte pleinement les règles de confidentialité. Elle fournit des métriques clés, comme le nombre de visiteurs, les pages vues et la durée des visites, via un tableau de bord clair et intuitif. Facile à utiliser, rapide et hébergée en Europe, Plausible est une alternative moderne et respectueuse de la vie privée à Google Analytics.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />

## Prérequis

Avant d’installer **Plausible**, assure-toi que ton environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel  | Minimum      | Recommandation ZAP-Hosting |
| --------- | ------------ | -------------------------- |
| CPU       | 1 vCPU       | 4 vCPU                    |
| RAM       | 2 Go         | 4 Go                      |
| Espace disque | 10 Go     | 25 Go                     |

Le logiciel nécessite que toutes les dépendances soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifie que ton serveur remplit ces conditions avant de continuer :

**Dépendances :** `Docker`

**Système d’exploitation :** Dernière version d’Ubuntu/Debian compatible avec Docker 26+

Assure-toi que toutes les dépendances sont installées et que la version du système d’exploitation est correcte pour éviter les soucis de compatibilité lors de l’installation de Plausible.

## Préparation

Avant de configurer **Plausible**, il faut préparer ton système. Ça passe par la mise à jour du système d’exploitation et l’installation des dépendances nécessaires. Ces étapes garantissent un environnement stable et évitent les problèmes pendant ou après l’installation.

### Mise à jour du système
Pour que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par une mise à jour. Lance cette commande :

```
sudo apt update && sudo apt upgrade -y
```
Ça garantit que ton système dispose des derniers patchs de sécurité et versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, tu peux installer les dépendances.

#### Git
Les données Plausible seront téléchargées via GitHub. Il faut donc installer Git d’abord. Tape cette commande : 
```
sudo apt install git-all
```

#### Docker

Plausible sera déployé et exécuté dans un conteneur Docker. Docker doit donc être installé. Pour ça, lance :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est dispo dans notre [guide Docker](dedicated-linux-docker.md).

## Installation
Maintenant que tout est prêt, tu peux installer l’application Plausible.

Commence par cloner le dépôt Community Edition et créer le fichier de configuration nécessaire :

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Ensuite, crée un fichier d’environnement (.env) et définis les variables essentielles. La variable BASE_URL doit pointer vers le domaine réel qui a déjà un enregistrement DNS pointant vers ton serveur. Tu dois aussi générer une clé secrète aléatoire SECRET_KEY_BASE d’au moins 64 octets :

```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Vérifie le contenu du fichier avec `cat .env` pour confirmer que tout est correct. Le résultat devrait ressembler à ça :

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Ces ports par défaut permettent à Let’s Encrypt de générer automatiquement les certificats TLS. Si tu comptes faire tourner Plausible derrière un reverse proxy, tu peux ajuster ces valeurs. Crée aussi un fichier `compose.override.yml` pour exposer les bons ports pour le conteneur Plausible :

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Enfin, démarre les services nécessaires avec Docker Compose :

```
docker compose up -d
```

Une fois les conteneurs lancés, ouvre ton navigateur à l’adresse du domaine indiqué dans BASE_URL et crée ton premier compte utilisateur.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## Configuration

Plausible peut être intégré à Google Search Console pour enrichir tes analytics avec les données des requêtes de recherche. Ça te permet de voir quels mots-clés génèrent du trafic sur ton site, pour mieux comprendre le comportement des visiteurs.

Si tu as déjà un compte Google Cloud et un client OAuth configuré, il suffit d’ajouter tes identifiants (`GOOGLE_CLIENT_ID` et `GOOGLE_CLIENT_SECRET`) dans le fichier `.env`. Après sauvegarde, redémarre les services Docker avec `docker compose up -d`. Dans le tableau de bord Plausible, va dans *Paramètres du site > Intégrations* pour finaliser la connexion et suivre les étapes d’authentification.

Si tu n’as pas encore de client OAuth ou que tu ne connais pas la procédure, le Wiki officiel Plausible propose un guide détaillé. Il explique comment créer un projet Google Cloud, activer les API nécessaires, configurer un client OAuth et ajouter les identifiants dans Plausible : [Plausible Wiki : Intégration Google](https://github.com/Plausible/community-edition/wiki/google-integration).

Si tu utilises Google Search Console, tu peux configurer cette intégration pour récupérer les données sur les termes de recherche, c’est vraiment top.

Si tu as déjà un compte Google Cloud avec un client OAuth, colle simplement ton `GOOGLE_CLIENT_ID` et `GOOGLE_CLIENT_SECRET` dans le fichier `.env`, redémarre ton service Docker avec `docker compose up -d`, et suis les instructions dans *Paramètres du site > Intégrations* de Plausible.

## Conclusion et ressources supplémentaires

Bravo ! Tu as maintenant installé et configuré Plausible sur ton VPS avec succès. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’aider et te guider pendant la configuration de ton serveur :

- [Plausible.io](https://Plausible.io/) - Site officiel
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Annonces, discussions, rapports de bugs

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />