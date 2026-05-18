---
id: vserver-windows-docker
title: "Configurer Docker sur un serveur Windows - Exécutez et gérez des conteneurs sur votre infrastructure"
description: "Découvrez comment déployer et gérer efficacement des applications avec des conteneurs Docker pour une montée en charge et des mises à jour fluides → En savoir plus maintenant"
sidebar_label: Installer Docker
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Docker est une plateforme open source pour développer, déployer et exécuter des applications dans des conteneurs. Un conteneur regroupe une application avec toutes ses dépendances dans une unité standardisée qui peut fonctionner de manière fiable sur différents environnements.

Cette approche élimine les problèmes liés aux différences entre les systèmes de développement, de test et de production. Avec Docker, les applications peuvent être déployées rapidement, mises à l’échelle efficacement et mises à jour sans interruption.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />

## Prérequis

Avant d’installer **Docker**, assure-toi que ton environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 cœur vCPU  | 4 cœurs vCPU               |
| RAM        | 4 Go         | 4 Go                       |
| Espace disque | 10 Go      | 25 Go                      |

## Installation

Pour installer Docker sur un serveur Windows, télécharge et exécute le script PowerShell `install-docker-ce.ps1`. Il active les fonctionnalités Windows nécessaires aux conteneurs et installe le runtime Docker. Ouvre PowerShell en mode admin et lance la commande suivante :

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

Le script active les fonctionnalités Windows liées aux conteneurs, installe Docker Engine et la CLI Docker, puis enregistre le service Docker pour un démarrage automatique.

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

Le système redémarrera pendant l’installation et devrait continuer automatiquement ensuite. Après le redémarrage, connecte-toi et relance la même commande si le script te le demande pour finaliser l’initialisation du service. Une fois le script terminé, la sortie ressemblera à ça :

```
Installing Docker... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\docker.exe
Installing Docker daemon... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\dockerd.exe
Configuring the docker service...
Waiting for Docker daemon...
Successfully connected to Docker Daemon.
The following images are present on this machine:
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Script complete!
```

## Configuration

### Démarrer et arrêter Docker

Docker fonctionne comme un service sous Windows. Après l’installation, il démarre automatiquement. Pour le contrôler manuellement :

```
Start-Service docker    # Démarrer le service Docker
Stop-Service docker     # Arrêter le service Docker
Restart-Service docker  # Redémarrer le service Docker
```

### Démarrer et arrêter un conteneur

Lance un conteneur avec `docker run`. Exemple : serveur web IIS mappant le port 80 du conteneur sur le port 8080 de l’hôte :

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```

### Vérifier le statut d’un conteneur

Vérifie le statut des conteneurs avec :

```
docker ps        # Conteneurs en cours d’exécution
docker ps -a     # Tous les conteneurs, y compris arrêtés
docker inspect web   # Infos détaillées
docker logs web      # Logs du conteneur
```

#### Ressources et statut

```
docker stats            # CPU/RAM/IO en temps réel
```

## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Docker avec succès sur ton VPS/serveur dédié. On te recommande aussi de jeter un œil aux ressources suivantes, qui pourront t’apporter encore plus d’aide et de conseils pour ta configuration serveur :

- [Docker.com](https://Docker.com/) - Site officiel
- [docs.docker.com](https://docs.docker.com/) - Documentation Docker

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂