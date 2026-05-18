---
id: server-linux-prologue
title: "Installer Prologue sur un serveur Linux - Hébergez votre propre plateforme d’écoute de livres audio"
description: "Apprenez à installer et faire tourner un serveur de livres audio compatible Prologue sur votre VPS Linux en utilisant Docker ou une installation manuelle → Découvrez-le maintenant"
sidebar_label: Installer Prologue
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Prologue](https://prologue.audio/) est une plateforme moderne d’écoute de livres audio conçue pour fonctionner avec des serveurs de livres audio auto-hébergés. Elle vous permet de streamer, organiser et écouter votre bibliothèque de livres audio sur plusieurs appareils comme l’iPhone, l’iPad, l’Apple Watch et CarPlay.

Au lieu de dépendre de plateformes cloud pour livres audio, une installation auto-hébergée vous donne un contrôle total sur votre collection et votre infrastructure de streaming. Une fois le serveur configuré, l’application mobile Prologue s’y connecte et synchronise la progression d’écoute, les favoris et l’historique.

Dans ce guide, vous apprendrez à déployer un serveur de livres audio compatible Prologue sur un VPS Linux via deux méthodes différentes :

- Installation manuelle sur un serveur web
- Déploiement via Docker pour une gestion plus simple en conteneur

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Cas d’usage de Prologue

Prologue peut être utilisé dans plein de situations où les utilisateurs veulent garder la pleine propriété et flexibilité de leur bibliothèque de livres audio.

Les cas d’usage courants incluent :

- Héberger une plateforme privée de streaming de livres audio
- Gérer de grandes collections de livres audio dans une interface centralisée
- Synchroniser la lecture sur plusieurs appareils
- Accéder aux livres audio à distance, de n’importe où
- Créer une alternative auto-hébergée aux plateformes commerciales de livres audio

Une installation auto-hébergée garantit aussi que vos fichiers médias restent sous votre contrôle tout en vous permettant de construire un serveur de livres audio scalable.



## Prérequis

Avant d’installer le serveur, assurez-vous que votre système répond aux exigences suivantes.

| Matériel | Minimum | Recommandé |
|----------|---------|------------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 Go | 4 Go |
| Espace disque | 20 Go | 50 Go |

<InlineServiceLink />

Les logiciels requis dépendent de la méthode d’installation :

Installation manuelle :

- Serveur Linux
- Serveur web (Apache ou Nginx)
- PHP
- Serveur de base de données

Installation Docker :

- Docker
- Docker Compose





## Préparation

Avant de commencer l’installation, mets à jour les paquets de ton système.

```
sudo apt update
sudo apt upgrade
```


Vérifie que l’environnement d’exécution nécessaire est installé selon ta méthode choisie. Pour les installations Docker :

```
docker --version
docker compose version
```

Si Docker n’est pas encore installé, installe-le avant de continuer.



## Installation manuelle

L’installation manuelle installe l’application directement sur ton serveur sans conteneurs. Cette méthode est utile pour déployer sur des environnements d’hébergement web classiques.



### Télécharger l’application

Commence par créer un dossier projet et télécharge les fichiers de l’application.

```
mkdir prologue-server
cd prologue-server
```


Ensuite, clone le dépôt du projet :

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Configurer le serveur web

Déplace les fichiers de l’application dans le répertoire de ton serveur web. Exemple pour [Apache](dedicated-linux-webserver.md#apache) :

```
sudo mv prologue-server /var/www/prologue
```


Crée une configuration de virtual host pointant vers le dossier de l’application. Exemple de config Apache :

```<VirtualHost *:80>
ServerName yourdomain.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


Redémarre le serveur web après la configuration.

```
sudo systemctl restart apache2
```



### Configurer les paramètres d’environnement

Édite le fichier de configuration et mets à jour les paramètres nécessaires comme la connexion à la base de données et l’URL du serveur.

```
nano config.php
```


Une fois la configuration terminée, l’interface web sera accessible via ton domaine configuré ou l’adresse IP du serveur.



## Installation Docker

Docker offre une méthode de déploiement plus simple en faisant tourner l’application dans un conteneur.



### Créer le dossier projet

Crée un dossier pour le déploiement Docker.

```
mkdir prologue-docker
cd prologue-docker
```



### Créer la configuration Docker Compose

Crée un fichier Docker Compose avec `nano compose.yaml` et insère la configuration suivante :

```
services:
  prologue:
    image: ghcr.io/michaelstaake/prologue:latest
    container_name: prologue
    ports:
      - "13378:80"
    volumes:
      - ./data:/data
    restart: unless-stopped
```



### Démarrer le conteneur

Lance le conteneur avec Docker Compose en tapant `docker compose up -d` et vérifie que le conteneur tourne avec `docker ps`. Docker téléchargera automatiquement l’image nécessaire et démarrera le serveur de livres audio.



### Accéder au serveur

Une fois le serveur lancé, ouvre ton navigateur et va à :

```
http://VOTRE_IP_SERVEUR:13378
```

Remplace VOTRE_IP_SERVEUR par l’adresse IP de ton VPS. Lors du premier lancement, tu seras invité à :

- Créer un compte administrateur
- Configurer le dossier de ta bibliothèque de livres audio
- Scanner et importer les fichiers audio


Après avoir configuré ta bibliothèque, tu pourras connecter l’app mobile Prologue au serveur et commencer à streamer ta collection.



## Conclusion

Félicitations ! Tu as déployé avec succès un serveur de livres audio compatible Prologue via une installation manuelle ou un déploiement Docker.

Les deux méthodes te permettent d’héberger ta collection sur ta propre infrastructure et de la streamer sur tes appareils via l’app Prologue. Le setup Docker facilite la maintenance et les mises à jour, tandis que l’installation manuelle offre un contrôle plus poussé sur ton environnement serveur web.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />