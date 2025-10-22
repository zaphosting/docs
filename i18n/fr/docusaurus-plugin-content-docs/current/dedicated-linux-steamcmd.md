---
id: dedicated-linux-steamcmd
title: "Serveur dédié : Configuration SteamCMD Linux"
description: "Découvrez comment configurer SteamCMD sur des serveurs Linux pour installer efficacement des serveurs de jeux dédiés → En savoir plus maintenant"
sidebar_label: Configurer SteamCMD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

SteamCMD est un outil indispensable pour installer des serveurs dédiés pour une grande variété de jeux comme Palworld, Enshrouded et bien d’autres. Dans ce guide, on va voir comment configurer SteamCMD pour la première fois sur ton serveur Linux. On utilisera Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, consulte notre [guide d’accès SSH initial](vserver-linux-ssh.md).

## Installation de SteamCMD

Une fois connecté à ton serveur, il faut installer **SteamCMD** pour pouvoir télécharger les fichiers nécessaires au serveur de jeux dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam, c’est l’outil qui te permet de télécharger facilement des fichiers Steam Workshop et des serveurs dédiés.

Comme d’habitude sous Linux, commence par mettre à jour ton système en fonction de ta distro :

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

Ensuite, installe quelques paquets essentiels. Voici ce qu’il faut savoir :

- Le paquet **software-properties-common** facilite la gestion de ta distro et des sources de logiciels indépendantes.
- SteamCMD est un outil 32 bits, donc il faut ajouter l’architecture **i386** pour que le système installe les bons logiciels.
- SteamCMD est propriétaire, donc selon ta distro Linux, tu dois activer le dépôt **multiverse** ou **non-free**, car ils ne sont généralement pas inclus par défaut.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & autres distros non-Debian
sudo apt-add-repository non-free
```

Lance ensuite la mise à jour pour que les changements soient pris en compte :

```
sudo apt update
```

Enfin, installe SteamCMD avec cette commande. Un accord de licence peut apparaître, accepte-le pour continuer.

```
sudo apt install steamcmd
```

:::tip
Tu peux vérifier que SteamCMD est bien installé en lançant simplement `steamcmd`. Une fois chargé, le prompt doit afficher `Steam>`. Tape `quit` pour sortir.
:::

Maintenant que tout est prêt et installé, tu peux passer à l’étape suivante : installer le serveur dédié via SteamCMD.

## Création d’un utilisateur

On recommande fortement de créer un utilisateur séparé pour SteamCMD. Utiliser le root n’est pas conseillé pour plusieurs raisons.

Crée un utilisateur nommé `steam` avec un mot de passe optionnel :

```
sudo useradd -m steam
sudo passwd steam # Mot de passe optionnel
```

Une fois l’utilisateur créé, modifie le fichier `.bashrc` pour donner accès au chemin `/usr/games` où se trouve SteamCMD. Il faut ajouter une variable d’environnement PATH.

Ouvre le fichier avec nano :

```
sudo nano /home/steam/.bashrc
```

Descends jusqu’à la fin du fichier avec les flèches et ajoute cette ligne :

```
export PATH="/usr/games/:$PATH"
```

Sauvegarde et quitte nano avec `CTRL + X`, puis `Y` pour confirmer, et enfin `ENTER`.

## Conclusion

Tu as maintenant configuré la base de SteamCMD sur ton serveur Linux. Tu peux continuer en installant du contenu Steam via l’utilisateur `steam`.

On te conseille de jeter un œil aux autres guides de cette section, qui expliquent comment installer des jeux spécifiques avec SteamCMD, que tu as maintenant configuré.

<InlineVoucher />