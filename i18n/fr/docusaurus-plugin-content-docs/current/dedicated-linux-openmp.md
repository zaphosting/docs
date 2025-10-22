---
id: dedicated-linux-openmp
title: "Serveur dédié : Configuration du serveur dédié Open.mp sous Linux"
description: "Découvrez comment configurer le serveur dédié open.mp sur votre serveur Linux pour une location de serveurs et une gestion de jeux sans accroc → En savoir plus maintenant"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un serveur dédié Linux et vous souhaitez installer le service serveur dédié open.mp dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre serveur dédié ? Ça vous permet de configurer vos services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvrez-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre serveur dédié via SSH. Si vous avez besoin d’aide, suivez notre guide [Accès SSH initial](dedicated-linux-ssh.md).

### Création d’utilisateur

On vous recommande vivement de créer un utilisateur séparé pour faire tourner tous vos services de serveur de jeux dédiés. Utiliser le root, comme souvent, n’est pas conseillé pour plusieurs raisons. Si vous avez déjà un utilisateur prêt, passez directement aux étapes d’installation.

Utilisez cette commande pour créer un utilisateur nommé `gameservers` avec un mot de passe optionnel de votre choix.

```
sudo useradd -m gameservers
sudo passwd gameservers # Mot de passe optionnel
```

Une fois connecté à votre serveur et avec un utilisateur prêt, continuez avec les étapes d’installation.

## Installation

Commencez par vous connecter en tant qu’utilisateur `gameservers` et rendez-vous dans le dossier home de cet utilisateur pour garder tout bien organisé.
```
sudo -u gameservers -s
cd ~
```

Pour rester organisé, créez un nouveau dossier pour votre serveur open.mp et ouvrez-le.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Maintenant, téléchargez la dernière version depuis le [dépôt GitHub open.mp](https://github.com/openmultiplayer/open.mp/releases). Sur la page, faites un clic droit sur la version **linux-x86** et copiez le lien. Lancez la commande suivante pour télécharger la dernière release Linux, en remplaçant `[link]` par le lien copié.
```
wget [link]
```

Le fichier `.zip` sera téléchargé dans votre dossier actuel, qui devrait être votre nouveau dossier `OpenMP-Server`. Décompressez-le avec la commande suivante.
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Vos fichiers sont maintenant accessibles dans le dossier **Server**, accédez-y avec `cd Server`. Utilisez `ls` pour voir le contenu du dossier à tout moment. Le serveur est prêt, passez à la section suivante pour configurer les paramètres.

## Configuration

À ce stade, l’installation de votre serveur open.mp est terminée. Vous pouvez configurer davantage le serveur via un fichier de configuration dans le répertoire du serveur.

Modifiez les paramètres principaux en ouvrant le fichier **config.json**.
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Consultez notre guide Open.mp [Configuration du serveur](openmp-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à votre serveur

Il est temps de lancer votre serveur. Rendez-vous dans le dossier principal du jeu et lancez le fichier shell **omp-server**.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

Vous devriez voir apparaître des logs dans votre terminal, y compris des logs réseau, ce qui signifie que le démarrage a réussi. Si tout se passe comme prévu, votre serveur sera accessible via connexion directe et visible dans la liste des serveurs. Sinon, vous pouvez vous connecter directement via : `[votre_adresse_ip]:7777`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur open.mp sur votre VPS ! En suite, on vous conseille de jeter un œil à notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment transformer votre nouveau serveur dédié en service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si vous avez des questions ou des soucis, contactez notre équipe support, dispo tous les jours pour vous aider !

<InlineVoucher />