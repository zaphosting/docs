---
id: dedicated-linux-plausible
title: "Serveur dédié : Installer Plausible sur OS"
description: "Découvrez comment configurer une plateforme d’analytics web axée sur la confidentialité qui fournit des insights clés facilement et rapidement → En savoir plus maintenant"
sidebar_label: Installer Plausible
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plausible est une plateforme d’analytics web légère et open-source qui fonctionne sans cookies et respecte pleinement les règles de confidentialité. Elle fournit des métriques clés, comme le nombre de visiteurs, les pages vues, et la durée des visites, via un tableau de bord clair et intuitif. Facile à utiliser, rapide et hébergée en Europe, Plausible est une alternative moderne et respectueuse de la vie privée à Google Analytics.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />



## Prérequis

Avant d’installer **Plausible**, assure-toi que ton environnement d’hébergement remplit les conditions suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum     | Recommandation ZAP-Hosting |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 cœurs CPU | 4 cœurs CPU                |
| RAM        | 2 Go        | 4 Go                       |
| Espace disque | 10 Go     | 25 Go                      |

Le logiciel nécessite que toutes les dépendances soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifie que ton serveur remplit ces conditions avant de lancer l’installation :

**Dépendances :** `Docker`

**Système d’exploitation :** Dernière version d’Ubuntu/Debian compatible avec Docker 26+

Assure-toi que toutes les dépendances sont installées et que la version du système d’exploitation est correcte pour éviter les problèmes de compatibilité lors de l’installation de Plausible.



## Préparation

Avant de configurer **Plausible**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation à la dernière version et l’installation de toutes les dépendances nécessaires. Ces préparatifs garantissent un environnement stable et évitent les soucis pendant ou après l’installation.


### Mise à jour du système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par une mise à jour système. Pour cela, lance la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que ton système dispose des derniers patchs de sécurité et versions logicielles avant de continuer.

### Installation des dépendances
Une fois la mise à jour terminée, tu peux passer à l’installation des dépendances.

#### Git
Les données de Plausible seront téléchargées via GitHub. Il faut donc installer Git en premier. Pour cela, lance :

```
sudo apt install git-all
```

#### Docker

Plausible sera déployé et exécuté sur ta machine via un conteneur Docker. Docker doit donc être installé en amont. Pour cela, lance :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un guide complet sur l’installation et l’utilisation de Docker est dispo dans notre [guide Docker](vserver-linux-docker.md).




## Installation
Maintenant que tous les prérequis sont remplis et que la préparation est faite, tu peux passer à l’installation de l’application Plausible.

Commence par cloner le dépôt de la Community Edition et crée le fichier de configuration nécessaire :

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Ensuite, crée un fichier d’environnement (.env) et définis les variables essentielles. Le BASE_URL doit pointer vers le domaine réel qui possède déjà un enregistrement DNS pointant vers ton serveur. Tu devras aussi générer une clé secrète aléatoire SECRET_KEY_BASE d’au moins 64 octets :

```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Vérifie le contenu du fichier avec `cat .env` pour confirmer que les valeurs sont correctes. Le résultat devrait ressembler à ça :

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Ces ports par défaut permettent à Let’s Encrypt de délivrer automatiquement les certificats TLS. Si tu comptes faire tourner Plausible derrière un reverse proxy, tu peux ajuster ces valeurs. En plus, crée un fichier `compose.override.yml` pour exposer les bons ports pour le conteneur Plausible :

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

Une fois les conteneurs lancés, ouvre ton navigateur à l’adresse du domaine spécifié dans BASE_URL et crée ton premier compte utilisateur.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)



## Configuration

Plausible peut être intégré à Google Search Console pour enrichir tes analytics avec des données de requêtes de recherche. Ça te permet de voir quels mots-clés génèrent du trafic sur ton site, offrant des insights plus poussés sur le comportement des visiteurs.

Si tu as déjà un compte Google Cloud et un client OAuth configuré, il te suffit d’ajouter tes identifiants (`GOOGLE_CLIENT_ID` et `GOOGLE_CLIENT_SECRET`) dans le fichier `.env`. Une fois sauvegardé, redémarre tes services Docker avec `docker compose up -d`. Dans le tableau de bord Plausible, va dans *Paramètres du site > Intégrations* pour finaliser la connexion et suivre les étapes d’authentification.

Pour ceux qui n’ont pas encore de client OAuth ou qui ne connaissent pas la procédure, le Wiki officiel de Plausible propose un guide détaillé étape par étape. Il explique comment créer un projet dans Google Cloud, activer les API nécessaires, configurer un client OAuth, et ajouter les identifiants générés dans Plausible : [Plausible Wiki : Intégration Google](https://github.com/Plausible/community-edition/wiki/google-integration).

Si tu utilises Google Search Console, tu peux configurer l’intégration Google pour récupérer les données de Search Console sur les termes de recherche, ce qui est vraiment cool.

Si tu as déjà un compte Google Cloud avec un client OAuth, tu peux simplement coller ton `GOOGLE_CLIENT_ID` et `GOOGLE_CLIENT_SECRET` dans le fichier `.env`, redémarrer ton service Docker avec `docker compose up -d`, et suivre les instructions dans *Paramètres du site > Intégrations* de Plausible.



## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Plausible avec succès sur ton serveur dédié. On te recommande aussi de jeter un œil aux ressources suivantes, qui pourront t’apporter un coup de main et des conseils pendant ta configuration serveur :

- [Plausible.io](https://Plausible.io/) - Site officiel
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Annonces, discussions, rapports de bugs

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂



<InlineVoucher />