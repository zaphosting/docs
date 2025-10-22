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

Docker est un logiciel de virtualisation léger et open source qui permet de fournir des services ou des applications en isolation sur un seul système. Contrairement aux machines virtuelles classiques, aucun système d’exploitation supplémentaire n’est émulé ou hébergé, mais seulement un environnement applicatif au sein du système hôte. Cela permet non seulement d’économiser des ressources en général, mais aussi de réduire considérablement la surcharge par rapport à une virtualisation complète. Dans ce guide, nous allons vous montrer comment installer Docker sur votre serveur.

<InlineVoucher />

## Préparation

Pour commencer, vous devez vous connecter à votre serveur Linux via SSH. Consultez notre [guide d’accès initial (SSH)](dedicated-linux-ssh.md) si vous avez besoin d’aide. Tout au long de ce guide, nous utiliserons Ubuntu comme distribution Linux.

### Activer la compatibilité Docker

Vous devez activer la **compatibilité Docker** dans votre interface web pour permettre le fonctionnement des conteneurs Docker, sinon vous recevrez des erreurs `Permission Denied`.

Rendez-vous dans la section **Paramètres** du panneau web de votre serveur, activez l’option **Compatibilité Docker** et sauvegardez.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Une fois sauvegardé, assurez-vous de redémarrer votre serveur avant de continuer.

## Installation

Maintenant que vous êtes connecté à votre serveur Linux, vous pouvez procéder aux méthodes d’installation. Choisissez une des distributions Linux ci-dessous pour voir les étapes d’installation correspondantes.

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

Une fois ces étapes réalisées, ajoutez le dépôt Docker aux sources `apt` avec la commande suivante.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Maintenant que vous avez ajouté le dépôt Docker à vos sources, lancez la commande `apt-get update` pour récupérer les mises à jour.
```
sudo apt-get update
```

À ce stade, vous avez configuré avec succès le dépôt Docker pour `apt`. Pour finir, installez les paquets Docker. Vous pouvez installer la dernière version avec la commande suivante.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Pour commencer, installez le paquet `dnf-plugins-core` qui facilite la gestion des dépôts.
```
sudo dnf -y install dnf-plugins-core
```

Une fois ce paquet installé, ajoutez le dépôt Docker et installez-le avec la commande suivante.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker devrait maintenant être installé. En dernier lieu, vous devez démarrer et activer le service pour qu’il fonctionne.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Pour vérifier que l’installation a réussi, essayez de lancer l’image **hello-world** avec la commande suivante.
```
sudo docker run hello-world
```

Si tout est bon, vous verrez un message de bienvenue avec quelques infos basiques. Si vous rencontrez des erreurs `Permission Denied`, assurez-vous d’avoir activé l’option **Compatibilité Docker** dans votre interface web et redémarré le serveur comme expliqué dans la section [préparation](#préparation).

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Vous avez installé Docker avec succès sur votre serveur Linux.

## Configuration post-installation

Maintenant que Docker est installé sur votre serveur, vous pouvez effectuer quelques réglages supplémentaires pour ne plus avoir besoin de `sudo` pour exécuter les commandes Docker et pour démarrer Docker automatiquement au démarrage du serveur.

### Gérer Docker sans sudo

Vous pouvez supprimer la nécessité de préfixer toutes les commandes Docker avec `sudo` en créant un groupe Docker et en y ajoutant vos utilisateurs. C’est plus pratique, mais attention, cela donne indirectement des privilèges root à l’utilisateur.

Créez le groupe `docker` et ajoutez votre utilisateur actuel avec ces commandes.
```
# Créer le groupe Docker
sudo groupadd docker

# Ajouter l’utilisateur actuel au groupe Docker
sudo usermod -aG docker $USER
```

Une fois fait, on recommande de redémarrer votre serveur pour que l’appartenance au groupe soit prise en compte. Sinon, vous pouvez utiliser `newgrp docker`.

Vérifiez maintenant que vous pouvez lancer des commandes Docker sans `sudo` en relançant `docker run hello-world`.

:::tip
Parfois, vous pouvez avoir une erreur liée à un fichier de config si vous avez déjà lancé la commande avec `sudo`. Pour régler ça, supprimez simplement le dossier Docker avec `rmdir ~/.docker/`, il sera recréé automatiquement à la prochaine utilisation.
:::

Si la commande fonctionne, c’est que vous avez configuré Docker pour fonctionner sans `sudo`.

### Démarrer Docker au démarrage

Vous pouvez configurer Docker pour qu’il démarre automatiquement au boot du serveur grâce à `systemd`, utilisé par la plupart des distributions Linux.

:::tip
Sur Ubuntu & Debian, Docker est configuré pour démarrer automatiquement au boot par défaut. Si vous utilisez ces distributions, vous n’avez rien à faire.
:::

Pour activer le service Docker au démarrage, lancez simplement ces commandes.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Pour désactiver le démarrage automatique, remplacez `enable` par `disable`. Vous pouvez aussi gérer le service avec différentes commandes `systemctl` comme celles-ci.
```
sudo systemctl start [votre_service]
sudo systemctl stop [votre_service]
sudo systemctl restart [votre_service]
```

## Conclusion

Bravo, vous avez installé et configuré Docker avec succès sur votre serveur Linux ! Si vous avez d’autres questions ou problèmes, contactez notre support, disponible tous les jours pour vous aider !

<InlineVoucher />