---
id: software-zublo-linux-windows
title: "Software - Zublo (Linux/Windows)"
description: "Apprenez à déployer Zublo pour une gestion sécurisée des données d’abonnement, le suivi des paiements récurrents et des analyses auto-hébergées avec Docker -> Découvrez-le maintenant"
sidebar_label: Software - Zublo (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Zublo est un tracker d’abonnements open-source et auto-hébergé conçu pour vous aider à gérer les paiements récurrents et les données associées en un seul endroit. Dans ce guide, vous apprendrez à déployer Zublo sur un serveur Linux ou Windows avec Docker et à vérifier que l’interface web fonctionne correctement.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous que votre serveur répond aux exigences de base et que Docker est installé.

### Exigences

| Composant | Minimum recommandé |
| --- | --- |
| CPU | 1 vCore |
| RAM | 512 Mo |
| Stockage | 1 Go d’espace disque libre |
| Système d’exploitation | Linux ou Windows avec support Docker |
| Réseau | Accès au port `9597` |

### Logiciels requis

Vous devez avoir les logiciels suivants installés :

| Logiciel | Utilité |
| --- | --- |
| [Docker](https://www.docker.com/) | Exécute le conteneur Zublo |
| Docker Compose | Démarre et gère la stack de conteneurs |

:::info Exigence Docker
Ce guide est basé sur la méthode de déploiement Docker référencée par le dépôt du projet. Si Docker n’est pas encore installé, vous devez le faire avant de continuer.
:::

:::caution Accès au port
Zublo utilise par défaut le port `9597`. Assurez-vous que ce port n’est pas déjà utilisé par un autre service et qu’il est autorisé dans votre pare-feu si vous souhaitez accéder à l’interface web à distance.
:::

## À propos de Zublo

Zublo est conçu pour suivre les abonnements, paiements récurrents et données de dépenses via une application web auto-hébergée. Selon le dépôt du projet, il est Docker-first et pensé pour les auto-hébergeurs qui veulent garder le contrôle sur leurs propres données.

### Ce que l’application offre

D’après les informations disponibles, Zublo se concentre sur les domaines suivants :

| Fonctionnalité | Description |
| --- | --- |
| Suivi d’abonnements | Gérer les services et paiements récurrents |
| Auto-hébergement | Garder vos données d’abonnement sur votre propre serveur |
| Interface web | Accéder à l’application via un navigateur |
| Accès API | Utiliser le point d’accès API intégré |
| Backend admin | Accéder à l’interface admin PocketBase |

:::note Disponibilité des fonctionnalités
Certaines fonctions avancées mentionnées dans des résumés tiers, comme l’analyse assistée par IA, peuvent dépendre de la version actuelle du projet. Si une fonctionnalité n’est pas visible dans votre installation, consultez le dépôt officiel pour les détails spécifiques à la version : [Dépôt GitHub Zublo](https://github.com/danielalves96/zublo)
:::

## Créer le répertoire du projet Zublo

Commencez par créer un répertoire dédié pour votre déploiement Zublo afin que votre configuration et vos données persistantes restent organisées.

### Linux

Exécutez les commandes suivantes dans votre terminal :

```bash
mkdir -p zublo-data
cd zublo-data
```

### Windows

Si vous utilisez PowerShell, lancez :

```powershell
mkdir zublo-data
cd zublo-data
```

Ce dossier contiendra votre fichier `docker-compose.yml` ainsi que le répertoire des données persistantes de l’application.

## Créer la configuration Docker Compose

Ensuite, créez un fichier `docker-compose.yml` dans votre répertoire projet.

### Exemple de configuration

Utilisez la configuration suivante :

```yaml
services:
  zublo:
    image: ghcr.io/danielalves96/zublo:latest
    container_name: zublo
    restart: unless-stopped
    ports:
      - "9597:9597"
    environment:
      PB_ENCRYPTION_KEY: "[your_secure_encryption_key]"
    volumes:
      - ./zublo-data:/pb/pb_data
```

### Vue d’ensemble de la configuration

| Clé | Exemple de valeur | Utilité |
| --- | --- | --- |
| `image` | `ghcr.io/danielalves96/zublo:latest` | Récupère la dernière image du conteneur Zublo |
| `container_name` | `zublo` | Définit un nom lisible pour le conteneur |
| `restart` | `unless-stopped` | Redémarre automatiquement le conteneur après reboot ou panne |
| `ports` | `9597:9597` | Expose l’application web sur le port `9597` |
| `PB_ENCRYPTION_KEY` | `[your_secure_encryption_key]` | Protège les données sensibles stockées |
| `volumes` | `./zublo-data:/pb/pb_data` | Persiste les données de l’application sur votre serveur |

:::danger Utilisez une clé de chiffrement forte
Ne laissez pas la clé de chiffrement sur une valeur faible ou par défaut. Remplacez `[your_secure_encryption_key]` par un secret long et aléatoire avant de lancer le conteneur en production.
:::

### Enregistrez le fichier

Sauvegardez le fichier sous le nom `docker-compose.yml` dans votre répertoire actuel. Une fois enregistré, vous êtes prêt à démarrer le service.

## Démarrer Zublo

Après avoir créé le fichier Compose, lancez la stack de conteneurs.

```bash
docker compose up -d
```

Si votre environnement utilise l’ancienne syntaxe Docker Compose, vous devrez peut-être utiliser :

```bash
docker-compose up -d
```

### Vérifier que le conteneur tourne

Vous pouvez vérifier le statut du conteneur avec :

```bash
docker ps
```

Vous devriez voir un conteneur nommé `zublo` dans la liste.

### Consulter les logs si besoin

Si le service ne démarre pas correctement, inspectez les logs :

```bash
docker logs zublo
```

Cela vous aidera à identifier des problèmes comme une configuration invalide, un conflit de port ou des permissions sur les données persistantes.

## Accéder à l’interface web

Une fois le conteneur lancé, vous pouvez ouvrir Zublo dans votre navigateur.

### URLs de l’application

Remplacez `[your_server_ip]` par l’adresse IP publique ou locale de votre serveur.

| Interface | URL |
| --- | --- |
| Application principale | `http://[your_server_ip]:9597` |
| Interface admin PocketBase | `http://[your_server_ip]:9597/_/` |
| Point d’accès API | `http://[your_server_ip]:9597/api/` |

:::info Localhost vs accès distant
Si vous travaillez directement sur la même machine où Zublo est installé, vous pouvez aussi utiliser `http://localhost:9597`. Pour un accès distant, utilisez l’IP réelle de votre serveur ou un domaine configuré.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Configurer un accès sécurisé

Après avoir confirmé que Zublo est accessible, vous devriez vérifier comment il est exposé sur Internet.

### Considérations pare-feu

Si vous ne pouvez pas atteindre l’application depuis un autre appareil, vérifiez que le port `9597` est ouvert dans la configuration de votre pare-feu.

| Port | Protocole | Utilité |
| --- | --- | --- |
| `9597` | TCP | Interface web Zublo, panneau admin et API |

### Utilisation d’un reverse proxy

Si vous souhaitez utiliser un domaine comme `[your_domain]`, vous pouvez placer Zublo derrière un reverse proxy comme Nginx ou une autre solution proxy supportée. Dans ce cas, le proxy redirige les requêtes vers `http://127.0.0.1:9597` ou l’adresse interne Docker.

:::tip Utilisez HTTPS pour un accès public
Si vous prévoyez d’exposer Zublo publiquement, il est recommandé d’utiliser un reverse proxy avec SSL pour que vos données d’abonnement soient chiffrées en transit.
:::

## Gérer les données persistantes

Zublo stocke ses données persistantes dans le répertoire monté défini dans le fichier Compose.

### Emplacement des données

Dans ce guide, le volume est configuré ainsi :

```yaml
volumes:
  - ./zublo-data:/pb/pb_data
```

Cela signifie que vos données applicatives sont stockées dans le dossier local `zublo-data` de votre répertoire projet.

### Pourquoi la persistance est importante

Le stockage persistant garantit que vos données restent disponibles après :

- redémarrage du conteneur
- reboot du serveur
- mises à jour de l’image
- opérations de maintenance

:::caution Recommandation de sauvegarde
Comme Zublo stocke des données personnelles importantes d’abonnement, vous devriez sauvegarder régulièrement le dossier `zublo-data` avant toute modification majeure ou mise à jour.
:::

## Maintenance basique

Une fois Zublo en fonctionnement, vous aurez peut-être besoin de le mettre à jour ou de le redémarrer.

### Redémarrer le conteneur

```bash
docker restart zublo
```

### Arrêter le déploiement

```bash
docker compose down
```

### Mettre à jour vers la dernière image

Récupérez la dernière image et recréez le conteneur :

```bash
docker compose pull
docker compose up -d
```

### Référence des commandes utiles

| Commande | Utilité |
| --- | --- |
| `docker compose up -d` | Démarrer Zublo en arrière-plan |
| `docker ps` | Vérifier les conteneurs en cours |
| `docker logs zublo` | Voir les logs du conteneur |
| `docker restart zublo` | Redémarrer le conteneur |
| `docker compose down` | Arrêter et supprimer le conteneur |
| `docker compose pull` | Télécharger la dernière image |

## Dépannage

Si Zublo ne fonctionne pas comme prévu, vérifiez ces causes courantes.

### Le port `9597` est déjà utilisé

Si Docker signale une erreur de liaison de port, un autre service utilise déjà `9597`. Vous devez arrêter ce service ou changer le mappage du port côté hôte.

Exemple avec un port externe différent :

```yaml
ports:
  - "9600:9597"
```

Dans ce cas, vous accéderez à l’application via `http://[your_server_ip]:9600`.

### Le conteneur démarre mais la page ne charge pas

Vérifiez les points suivants :

- confirmez que le conteneur tourne avec `docker ps`
- consultez les logs avec `docker logs zublo`
- vérifiez que votre pare-feu autorise le port choisi
- assurez-vous d’utiliser la bonne adresse IP ou nom d’hôte

### Problèmes de clé de chiffrement

Si vous modifiez `PB_ENCRYPTION_KEY` après la configuration initiale, les données chiffrées existantes peuvent devenir illisibles. Si vous devez changer cette clé, consultez d’abord la documentation officielle du projet car le comportement exact de migration n’est pas documenté dans la source fournie.

:::note Détails manquants sur le comportement
Le matériel source fourni ne documente pas entièrement toutes les étapes d’administration au premier lancement, la création de compte ou les options avancées. Pour ces détails, consultez la documentation du projet en amont : [Dépôt GitHub Zublo](https://github.com/danielalves96/zublo)
:::

## Conclusion

Félicitations, vous avez installé et configuré Zublo avec succès sur Linux ou Windows en utilisant Docker. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂