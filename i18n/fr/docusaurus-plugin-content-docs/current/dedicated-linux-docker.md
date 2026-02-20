---
id: dedicated-linux-docker
title: "Installer Docker sur un serveur Linux - Exécute et gère des conteneurs sur ton infrastructure"
description: "Découvre comment installer Docker sur ton serveur Linux pour faire tourner des applis isolées efficacement et optimiser l’utilisation des ressources → En savoir plus maintenant"
sidebar_label: Installer Docker
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Docker est un logiciel de virtualisation léger et open source qui permet de fournir des services ou applications en isolation sur un seul système. Contrairement aux vraies machines virtuelles, aucun système d’exploitation supplémentaire n’est émulé ou hébergé, mais seulement un environnement applicatif au sein du système hôte. Cela permet non seulement d’économiser des ressources en général, mais aussi de réduire fortement la surcharge comparé à une virtualisation complète. Dans ce guide, on va voir comment installer Docker sur ton serveur.

## Préparation

Pour commencer, tu dois te connecter à ton serveur Linux via SSH. Jette un œil à notre [guide d’accès initial (SSH)](dedicated-linux-ssh.md) si tu as besoin d’aide. Dans ce guide, on utilise Ubuntu comme distribution Linux.

### Activer la compatibilité Docker

Tu dois activer la **compatibilité Docker** dans ton interface web pour que les conteneurs Docker fonctionnent, sinon tu risques d’avoir des erreurs `Permission Denied`.

Va dans la section **Paramètres** du panneau web de ton serveur, active l’option **Compatibilité Docker** et sauvegarde.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Une fois sauvegardé, assure-toi de redémarrer ton serveur avant de continuer.

## Installation

Maintenant que tu es connecté à ton serveur Linux, tu peux passer aux méthodes d’installation. Choisis une des distributions Linux ci-dessous pour voir les étapes spécifiques.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Pour commencer, tu dois ajouter le paquet Docker via `apt` et le configurer. Ça te permettra d’installer et mettre à jour Docker facilement depuis le dépôt à l’avenir.

Utilise ces commandes pour ajouter la clé GPG officielle de Docker à ta liste de dépôts.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Une fois fait, ajoute le dépôt Docker aux sources `apt` avec cette commande.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Maintenant que tu as ajouté le dépôt Docker, lance la commande `apt-get update` pour récupérer les mises à jour.
```
sudo apt-get update
```

À ce stade, tu as bien configuré le dépôt Docker. Pour finir, installe les paquets Docker. Tu peux installer la dernière version avec cette commande.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Pour commencer, installe le paquet `dnf-plugins-core` qui aide à gérer les dépôts.
```
sudo dnf -y install dnf-plugins-core
```

Avec ce paquet installé, ajoute le dépôt Docker et installe-le avec cette commande.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker devrait maintenant être installé. Pour finir, démarre et active le service Docker pour qu’il fonctionne.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Pour vérifier que l’installation a réussi, lance l’image **hello-world** avec cette commande.
```
sudo docker run hello-world
```

Si tout est OK, tu verras un message de bienvenue avec quelques infos basiques. Si tu as des erreurs `Permission Denied`, vérifie que tu as bien activé la **compatibilité Docker** dans l’interface web et redémarré le serveur comme expliqué dans la préparation.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Tu as installé Docker avec succès sur ton serveur Linux.

## Configuration post-installation

Maintenant que Docker est installé sur ton serveur, tu peux faire quelques réglages pour ne plus avoir besoin de `sudo` à chaque commande Docker et pour démarrer Docker automatiquement au boot.

### Gérer Docker sans sudo

Tu peux éviter de préfixer toutes les commandes Docker avec `sudo` en créant un groupe Docker et en ajoutant tes utilisateurs dedans. C’est plus pratique, mais attention, ça donne indirectement des droits root à l’utilisateur.

Crée le groupe `docker` et ajoute ton utilisateur actuel avec ces commandes.
```
# Créer le groupe Docker
sudo groupadd docker

# Ajouter l’utilisateur actuel au groupe Docker
sudo usermod -aG docker $USER
```

Une fois fait, on te conseille de redémarrer ton serveur pour que la nouvelle appartenance au groupe soit prise en compte. Sinon, tu peux utiliser `newgrp docker`.

Teste ensuite si tu peux lancer des commandes Docker sans `sudo` en relançant `docker run hello-world`.

:::tip
Parfois, tu peux avoir une erreur liée à un fichier de config si tu as déjà lancé la commande avec `sudo`. Pour régler ça, supprime simplement le dossier Docker avec `rmdir ~/.docker/`, il sera recréé automatiquement à la prochaine utilisation.
:::

Si la commande fonctionne sans souci, c’est que tu as bien configuré Docker pour tourner sans `sudo`.

### Démarrer Docker au démarrage

Tu peux configurer Docker pour qu’il démarre automatiquement au boot grâce à `systemd`, utilisé par la plupart des distributions Linux.

:::tip
Sur Ubuntu & Debian, Docker est déjà configuré pour démarrer automatiquement au boot par défaut. Si tu utilises ces distributions, tu n’as rien à faire.
:::

Pour activer Docker au démarrage, lance simplement ces commandes.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Pour désactiver le démarrage automatique, remplace `enable` par `disable`. Tu peux aussi gérer le service avec plusieurs sous-commandes `systemctl` comme celles-ci.
```
sudo systemctl start [ton_service]
sudo systemctl stop [ton_service]
sudo systemctl restart [ton_service]
```

## Conclusion

Bravo, tu as installé et configuré Docker avec succès sur ton serveur Linux ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !