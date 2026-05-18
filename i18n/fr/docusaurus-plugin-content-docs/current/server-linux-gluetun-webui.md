---
id: server-linux-gluetun-webui
title: "Installer Gluetun WebUI sur un serveur Linux - Gère facilement ton container VPN"
description: "Apprends à installer et lancer Gluetun WebUI sur ton VPS Linux pour monitorer et gérer ton container VPN Gluetun → Découvre-le maintenant"
sidebar_label: Installer Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) est une interface web légère conçue pour simplifier la gestion du container VPN Gluetun. Gluetun est un container Docker populaire utilisé pour router d’autres applications via une connexion VPN sécurisée.

Le WebUI ajoute un tableau de bord pratique qui te permet de monitorer le statut du VPN, gérer les connexions et contrôler le comportement du container sans avoir à manipuler manuellement les commandes Docker ou les fichiers de configuration.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

Auto-héberger Gluetun WebUI sur ton propre serveur te donne une interface centralisée pour gérer ta configuration VPN, ce qui est super utile quand tu fais tourner plusieurs containers qui dépendent d’une connexion VPN Gluetun.

Tu prévois de lancer Gluetun WebUI sur ton VPS ? Ce guide te guide pas à pas dans l’installation et la configuration.

<InlineVoucher />

## Cas d’usage de Gluetun WebUI

Gluetun WebUI est utile pour tous ceux qui font tourner des applications containerisées derrière un VPN. Les cas d’usage typiques incluent :

- Surveiller en temps réel le statut de la connexion VPN
- Gérer les containers qui routent le trafic via le VPN Gluetun
- Simplifier la configuration et le dépannage du container VPN
- Contrôler les services VPN sans utiliser des commandes Docker complexes
- Disposer d’une interface centralisée de gestion VPN pour les environnements auto-hébergés

Le WebUI est particulièrement pratique dans les homelabs ou sur VPS où plusieurs applis dépendent d’un container VPN.

## Prérequis

Avant d’installer Gluetun WebUI, assure-toi que ton serveur remplit les conditions suivantes.

| Matériel | Minimum | Recommandé |
|----------|---------|------------|
| CPU | 1 cœur | 2 cœurs |
| RAM | 1 Go | 4 Go |
| Espace disque | 5 Go | 10 Go |

Logiciels requis :

- Docker
- Docker Compose

Si Docker n’est pas encore installé, suis notre guide d’installation Docker avant de continuer.

<InlineServiceLink />

## Préparation

Avant d’installer Gluetun WebUI, vérifie que Docker et Docker Compose sont bien dispo sur ton serveur. Lance ces commandes pour vérifier que Docker est installé et prêt à l’emploi :

```
docker --version
docker compose version
```
Ensuite, crée un dossier pour l’installation de Gluetun WebUI.
```
mkdir gluetun-webui
cd gluetun-webui
```
Ce dossier contiendra la configuration Docker Compose utilisée pour lancer l’interface web.

## Installation

Crée un fichier Docker Compose pour Gluetun WebUI.
```
nano compose.yaml
```
Insère la configuration suivante :

```yaml
services:
  gluetun-webui:
    image: ghcr.io/sir-scuzza/gluetun-webui:latest
    container_name: gluetun-webui
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - GLUETUN_API_URL=http://gluetun:8000
    volumes:
      - ./data:/app/data
```

Cette config va :

- Déployer le container Gluetun WebUI
- Le connecter à l’API Gluetun
- Exposer le WebUI via le port 8000
- Stocker les données de config persistantes dans le dossier `data`

Sauvegarde le fichier et quitte l’éditeur.

## Démarrer Gluetun WebUI

Lance le container avec Docker Compose.

```
docker compose up -d
```

Docker va télécharger l’image nécessaire et lancer le container WebUI. Pour vérifier que le container tourne, utilise :

```
docker ps
```

## Accéder à l’interface web

Une fois le container lancé, ouvre le WebUI dans ton navigateur.

```
http://ADRESSE_IP_DE_TON_SERVEUR:8000
```

Remplace `ADRESSE_IP_DE_TON_SERVEUR` par l’adresse IP de ton VPS. Une fois l’interface ouverte, tu pourras :

- Surveiller le statut de la connexion VPN
- Gérer le comportement du container Gluetun
- Voir les détails de la configuration VPN
- Contrôler les services routés via le container VPN

## Conclusion

Félicitations ! Tu as installé avec succès **Gluetun WebUI** sur ton serveur Linux. L’interface web te permet maintenant de monitorer et gérer facilement ton container VPN Gluetun sans avoir à manipuler manuellement les commandes Docker.

Faire tourner Gluetun WebUI en parallèle de ton container VPN simplifie la gestion et te donne une vue claire sur le statut et la config de ta connexion VPN.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’assister ! 🙂

<InlineVoucher />