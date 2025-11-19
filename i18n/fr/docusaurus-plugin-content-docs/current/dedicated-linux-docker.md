---
id: dedicated-linux-docker
title: "Serveur dédié : Installation de Docker"
description: "Découvrez comment installer Docker sur votre serveur Linux pour exécuter des applications isolées efficacement et optimiser l’utilisation des ressources → En savoir plus maintenant"
sidebar_label: Installer Docker
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Docker est un logiciel de virtualisation léger et open source qui permet de fournir des services ou des applications en isolation sur un seul système. Contrairement aux vraies machines virtuelles, aucun système d’exploitation supplémentaire n’est émulé ou hébergé, mais seulement un environnement applicatif au sein du système hôte. Cela permet non seulement d’économiser des ressources en général, mais aussi de réduire la surcharge par rapport à une virtualisation complète. Dans ce guide, nous allons couvrir le processus d’installation de Docker sur votre serveur.

## Préparation

Pour commencer, vous devez vous connecter à votre serveur Linux via SSH. Consultez notre [guide d’accès initial (SSH)](dedicated-linux-ssh.md) si vous avez besoin d’aide. Tout au long de ce guide, nous utiliserons Ubuntu comme distribution Linux.

### Activer la compatibilité Docker

Vous devez activer la **compatibilité Docker** dans votre interface web pour permettre le fonctionnement des conteneurs Docker, sinon vous recevrez des erreurs `Permission Denied`.

Rendez-vous dans la section **Paramètres** du panneau web de votre serveur, activez l’option **Compatibilité Docker** et sauvegardez.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Une fois sauvegardé, assurez-vous de redémarrer votre serveur avant de continuer.

## Installation

Maintenant que vous êtes connecté à votre serveur Linux, vous pouvez procéder aux méthodes d’installation. Sélectionnez l’une des distributions Linux ci-dessous pour voir les étapes d’installation correspondantes.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Pour commencer, vous devez ajouter le paquet Docker via `apt` et le configurer. Cela vous permettra d’installer et de mettre à jour Docker facilement depuis le dépôt à l’avenir.

Utilisez les commandes suivantes pour ajouter la clé GPG officielle de Docker à votre liste de dépôts.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Une fois ces étapes réalisées, vous devez ajouter le dépôt aux sources `apt` avec la commande suivante.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Maintenant que vous avez ajouté le dépôt Docker à vos sources, lancez la commande `apt-get update` pour récupérer les modifications.
```
sudo apt-get update
```

À ce stade, vous avez configuré avec succès le dépôt `apt` de Docker. En dernière étape, vous devez installer les paquets Docker. Vous pouvez installer la dernière version avec la commande suivante.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Pour commencer, vous devez installer le paquet `dnf-plugins-core` qui aide à gérer les dépôts.
```
sudo dnf -y install dnf-plugins-core
```

Avec ce paquet installé, ajoutez le dépôt Docker et installez-le avec la commande suivante.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker devrait maintenant être installé. En dernière étape, vous devez le démarrer et l’activer pour qu’il fonctionne.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Pour vérifier que votre installation est réussie, essayez d’exécuter l’image **hello-world** avec la commande suivante.
```
sudo docker run hello-world
```

En cas de succès, vous verrez un message de bienvenue utile avec quelques informations basiques. Si vous rencontrez des erreurs `Permission Denied`, assurez-vous d’avoir activé l’option **Compatibilité Docker** dans votre interface web et redémarré le serveur comme décrit dans la section préparation.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Vous avez installé Docker avec succès sur votre serveur Linux.

## Configuration post-installation

Maintenant que Docker est installé sur votre serveur, vous pouvez effectuer quelques configurations supplémentaires pour éviter d’utiliser `sudo` à chaque commande Docker et pour démarrer Docker automatiquement au démarrage du serveur.

### Gérer Docker sans sudo

Vous pouvez supprimer la nécessité de préfixer toutes les commandes Docker avec `sudo` en créant un groupe Docker et en ajoutant vos utilisateurs à ce groupe. Cela améliore la commodité, mais attention, cela accorde indirectement des privilèges root à l’utilisateur.

Créez le groupe `docker` et ajoutez votre utilisateur actuel avec les commandes suivantes.
```
# Créer le groupe Docker
sudo groupadd docker

# Ajouter l’utilisateur actuel au groupe Docker
sudo usermod -aG docker $USER
```

Une fois cela fait, nous recommandons de redémarrer votre serveur pour que l’appartenance au groupe soit prise en compte. Sinon, vous pouvez utiliser `newgrp docker`.

Vérifiez maintenant que vous pouvez exécuter les commandes Docker sans `sudo` en relançant la commande `docker run hello-world`.

:::tip
Parfois, vous pouvez recevoir une erreur liée à un fichier de configuration si vous avez déjà lancé la commande avec `sudo`. Pour résoudre cela, supprimez simplement le répertoire Docker avec `rmdir ~/.docker/`, qui sera recréé automatiquement lors de la prochaine utilisation.
:::

Si la commande fonctionne comme prévu, cela signifie que vous avez configuré Docker pour fonctionner sans avoir besoin de privilèges `sudo`.

### Démarrer Docker au démarrage

Vous pouvez configurer Docker pour qu’il démarre automatiquement au démarrage du serveur grâce à `systemd`, utilisé par la plupart des distributions Linux.

:::tip
Sur Ubuntu et Debian, Docker est configuré pour démarrer automatiquement au démarrage par défaut. Si vous utilisez ces distributions, vous n’avez rien d’autre à faire.
:::

Vous pouvez activer le service Docker au démarrage avec les commandes suivantes.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

De même, pour désactiver le service au démarrage, remplacez `enable` par `disable`. Vous pouvez aussi gérer le service avec différentes sous-commandes `systemctl` comme suit.
```
sudo systemctl start [votre_service]
sudo systemctl stop [votre_service]
sudo systemctl restart [votre_service]
```

## Conclusion

Félicitations, vous avez installé et configuré Docker avec succès sur votre serveur Linux ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !