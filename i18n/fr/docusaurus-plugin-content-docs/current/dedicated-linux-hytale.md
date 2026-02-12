---
id: dedicated-linux-hytale
title: "Serveur dédié : Configuration du serveur dédié Hytale"
description: "Découvrez comment configurer le serveur dédié Hytale sur votre serveur dédié Linux pour une gestion de jeu fluide ? En savoir plus maintenant"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un serveur dédié Linux et vous voulez y installer Hytale ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux.

## Préparation

Pour faire tourner un serveur Hytale, votre système doit répondre à quelques exigences de base. Le serveur fonctionne avec Java 25 et nécessite au moins 4 Go de RAM. Les architectures x64 et arm64 sont supportées. La consommation réelle dépend du nombre de joueurs, de la distance de vue et de l’activité dans le monde, donc des ressources supplémentaires peuvent être nécessaires pour les serveurs plus gros.

Avant de continuer, assurez-vous que Java 25 est installé sur votre système. Vous pouvez vérifier l’installation avec :

```
java --version
```

Si Java n’est pas encore installé sur votre système, suivez notre [guide Installer Java](dedicated-linux-java) dédié aux serveurs Linux. Ce guide explique comment installer et configurer Java correctement dans votre environnement.



## Installation

Commencez par créer un dossier dédié pour le serveur Hytale. Ça permet de garder tous les fichiers du serveur bien organisés au même endroit.

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

Le serveur nécessite deux composants principaux : l’application serveur elle-même et les assets du jeu. Ces fichiers peuvent être obtenus via le téléchargeur en ligne de commande Hytale, conçu pour les déploiements serveurs et les mises à jour simplifiées.

Le téléchargeur CLI offre une méthode structurée pour télécharger et mettre à jour les fichiers du serveur Hytale. Après avoir téléchargé l’archive du téléchargeur, extrayez-la dans un dossier temporaire. Dans l’archive, vous trouverez un fichier QUICKSTART.md qui décrit l’utilisation basique de l’outil.

Lancez le téléchargeur depuis la ligne de commande et suivez les instructions pour télécharger la dernière version du serveur. Une fois terminé, copiez les fichiers serveur téléchargés ainsi que l’archive des assets dans votre dossier serveur. Après cette étape, le dossier doit contenir le fichier JAR du serveur et une archive d’assets comme Assets.zip.

| **Commande**                                   | **Description**                       |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Télécharger la dernière version       |
| `./hytale-downloader -print-version`          | Afficher la version du jeu sans télécharger |
| `./hytale-downloader -version`                | Afficher la version du téléchargeur Hytale |
| `./hytale-downloader -check-update`           | Vérifier les mises à jour du téléchargeur |
| `./hytale-downloader -download-path game.zip` | Télécharger dans un fichier spécifique |
| `./hytale-downloader -patchline pre-release`  | Télécharger depuis le canal pré-release |
| `./hytale-downloader -skip-update-check`      | Ignorer la vérification automatique des mises à jour |



## Configuration

### Démarrer le serveur

Le serveur se lance en exécutant le fichier JAR et en spécifiant le chemin vers l’archive des assets. Adaptez le chemin si vos assets sont stockés ailleurs.

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
```

### Authentification

Au premier démarrage, le serveur doit être authentifié avant que les joueurs puissent se connecter. Cela se fait directement via la console du serveur avec un processus de connexion par appareil. Suivez les instructions affichées dans la console pour finaliser l’authentification.

```
/auth login device
```

La sortie ressemblera à ça :

```
> /auth login device
===================================================================
AUTHENTIFICATION DE L’APPAREIL
===================================================================
Visitez : https://accounts.hytale.com/device
Entrez le code : ABCD-1234
Ou visitez : https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
En attente d’autorisation (expire dans 900 secondes)...

[L’utilisateur complète l’autorisation dans le navigateur]

> Authentification réussie ! Mode : OAUTH_DEVICE
```

Une fois authentifié, votre serveur pourra accepter les connexions des joueurs.



### Configuration du pare-feu

Par défaut, le serveur écoute sur le port UDP 5520 et se lie à toutes les interfaces disponibles. Vous pouvez changer l’adresse et le port si besoin. Le serveur communique en UDP via QUIC. Assurez-vous que votre pare-feu autorise le trafic UDP entrant sur le port choisi, que ce soit avec Iptables ou UFW.

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```



## Notes sur les performances

La distance de vue est un des facteurs les plus importants qui influencent la consommation mémoire. Des valeurs plus élevées augmentent l’utilisation de la RAM car plus de données du monde doivent rester actives en même temps.

Pour la plupart des configurations, une distance de vue maximale de 12 chunks (384 blocs) offre un bon équilibre entre performance serveur et expérience de jeu.

Pour comparer, les serveurs Minecraft utilisent une distance de vue par défaut de 10 chunks (160 blocs). La valeur par défaut de Hytale de 384 blocs équivaut à environ 24 chunks Minecraft, ce qui explique les besoins mémoire plus élevés. Cette valeur doit être ajustée selon le nombre de joueurs attendu et les ressources système disponibles.



## Conclusion

Félicitations, vous avez maintenant un serveur Hytale fonctionnel sur votre système. À partir de là, vous pouvez étendre la configuration en installant des mods, en ajustant les paramètres du monde et en optimisant les performances pour votre communauté de joueurs. On recommande de surveiller régulièrement l’utilisation des ressources pour garantir une stabilité optimale à mesure que le serveur grandit.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous accompagner ! ??