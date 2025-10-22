---
id: vserver-linux-steamcmd
title: "VPS : Configuration SteamCMD Linux"
description: "Découvrez comment configurer SteamCMD sur Linux pour installer efficacement des serveurs de jeux dédiés et optimiser la gestion de votre serveur → En savoir plus maintenant"
sidebar_label: Configurer SteamCMD
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
SteamCMD est un outil essentiel nécessaire pour installer des serveurs dédiés pour une grande variété de jeux comme Palworld, Enshrouded et bien d’autres. Dans ce guide, nous allons explorer le processus d’installation initiale de SteamCMD sur votre serveur Linux. Nous utiliserons Ubuntu dans les exemples, mais le processus devrait être très similaire pour d’autres distributions.

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Utilisez notre [guide d’accès initial SSH](vserver-linux-ssh.md) si vous avez besoin d’aide pour cela.

## Installation de SteamCMD

Une fois connecté à votre serveur, vous devrez configurer **SteamCMD** afin de pouvoir télécharger les fichiers nécessaires au serveur de jeux dédié. SteamCMD est la version **en ligne de commande (CLI)** du client Steam et c’est l’outil qui vous permet de télécharger facilement une gamme de fichiers du Steam Workshop et des serveurs dédiés.

Comme d’habitude avec Linux, il est préférable de commencer par mettre à jour le système en lançant la commande adaptée à votre distribution :
```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

Vous devrez maintenant installer quelques paquets. Voici leur utilité :

- Le paquet **software-properties-common** facilite la gestion de votre distribution et des sources logicielles indépendantes.
- SteamCMD est un outil 32 bits, donc l’architecture **i386** doit être ajoutée pour que le logiciel approprié soit installé et supporté sur votre système.
- Comme SteamCMD est propriétaire, vous aurez besoin du paquet **multiverse** ou **non-free** selon votre distribution Linux, car ces paquets ne sont généralement pas inclus dans le dépôt par défaut.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & autres distributions non-Debian
sudo apt-add-repository non-free
```

Lancez ensuite la commande de mise à jour pour que vos modifications de paquets soient prises en compte et installées :
```
sudo apt update
```

Enfin, vous pouvez installer SteamCMD en lançant la commande suivante. Une invite pour accepter la licence peut apparaître, acceptez-la simplement pour continuer.
```
sudo apt install steamcmd
```

:::tip
Vous pouvez vérifier que l’installation de SteamCMD a réussi en lançant simplement `steamcmd`. Une fois chargé, le prompt devrait afficher `Steam>`. Tapez `quit` pour quitter ensuite.
:::

Avec tout cela prêt et installé, vous pouvez passer à l’étape suivante qui consiste à installer le serveur dédié via SteamCMD.

## Création d’un utilisateur

On recommande fortement de créer un utilisateur séparé pour utiliser SteamCMD. Utiliser l’utilisateur root, comme souvent, n’est pas conseillé pour plusieurs raisons.

Utilisez la commande suivante pour créer un utilisateur nommé `steam` avec un mot de passe optionnel de votre choix.

```
sudo useradd -m steam
sudo passwd steam # Mot de passe optionnel
```

Une fois l’utilisateur créé, vous devrez modifier le fichier `.bashrc` pour donner accès au chemin `/usr/games` où SteamCMD est situé. Cela se fait en ajoutant une variable d’environnement PATH supplémentaire.

Ouvrez le fichier avec l’éditeur nano en lançant :
```
sudo nano /home/steam/.bashrc
```

Descendez jusqu’à la fin du fichier avec les flèches et ajoutez la variable d’environnement PATH suivante :
```
export PATH="/usr/games/:$PATH"
```

Sauvegardez le fichier et quittez nano avec `CTRL + X`, puis `Y` pour confirmer et enfin `ENTER`.

## Conclusion

Vous avez maintenant configuré avec succès la fonctionnalité principale de SteamCMD sur votre serveur Linux. Vous pouvez désormais continuer avec l’installation de contenu Steam via l’utilisateur `steam`.

On vous recommande de jeter un œil aux autres guides de cette section qui expliquent comment installer des jeux spécifiques via SteamCMD, que vous avez maintenant configuré.

<InlineVoucher />