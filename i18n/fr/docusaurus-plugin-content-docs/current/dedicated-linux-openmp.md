---
id: dedicated-linux-openmp
title: "Serveur dédié : Configuration du serveur dédié Open.mp sous Linux"
description: "Découvrez comment configurer le serveur dédié open.mp sur votre serveur Linux pour une location de serveurs de jeux fluide et une gestion facile → En savoir plus maintenant"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un serveur dédié Linux et vous souhaitez installer le service serveur dédié open.mp dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur Linux. Nous utiliserons Ubuntu dans les exemples, mais le processus devrait être très similaire pour d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre serveur dédié, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvrez-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connectez-vous à votre serveur dédié via SSH. Utilisez notre guide [Accès initial SSH](dedicated-linux-ssh.md) si vous avez besoin d’aide pour cela.

### Création d’utilisateur

On vous recommande vivement de créer un utilisateur séparé pour faire tourner tous vos services de serveurs de jeux dédiés. Utiliser l’utilisateur root, comme souvent, n’est pas conseillé pour plusieurs raisons. Si vous avez déjà un utilisateur prêt, passez directement aux étapes d’installation.

Utilisez la commande suivante pour créer un utilisateur nommé `gameservers` avec un mot de passe optionnel de votre choix.

```
sudo useradd -m gameservers
sudo passwd gameservers # Mot de passe optionnel
```

Une fois que vous avez accédé à votre serveur et que l’utilisateur est prêt, passez aux étapes d’installation.

## Installation

Commencez par vous connecter en tant qu’utilisateur `gameservers` et rendez-vous dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u gameservers -s
cd ~
```

Pour rester organisé, créez un nouveau dossier pour votre serveur open.mp et ouvrez-le.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Maintenant, vous devez télécharger la dernière version depuis le [dépôt GitHub open.mp](https://github.com/openmultiplayer/open.mp/releases). Sur la page, faites un clic droit sur la version **linux-x86** et copiez le lien. Lancez la commande suivante pour télécharger la dernière version Linux, en remplaçant `[link]` par le lien copié.
```
wget [link]
```

Cela téléchargera le fichier `.zip` dans votre dossier actuel, qui devrait être votre nouveau dossier `OpenMP-Server`. Décompressez-le avec la commande suivante.
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Vos fichiers devraient maintenant être accessibles dans le dossier **Server**, accédez-y avec `cd Server`. Utilisez `ls` pour voir le contenu du dossier à tout moment. Le serveur est prêt, passez à la section suivante pour configurer les paramètres.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur open.mp. Vous pouvez effectuer des réglages supplémentaires via un fichier de configuration situé dans le répertoire de votre serveur.

Vous pouvez modifier les paramètres principaux en ouvrant le fichier de configuration **config.json**.
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Consultez notre guide Open.mp [Configuration du serveur](openmp-configuration.md) pour voir toutes les options disponibles et leur utilité.

## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Rendez-vous dans le répertoire principal du jeu et lancez le fichier shell **omp-server**.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

Vous devriez voir apparaître des logs dans votre terminal, y compris des logs réseau, ce qui indique que le démarrage a réussi. Si tout se passe comme prévu, votre serveur sera accessible via connexion directe et visible dans la liste des serveurs. Sinon, vous pourrez vous connecter directement via : `[votre_adresse_ip]:7777`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur open.mp sur votre VPS ! Comme prochaine étape, on vous recommande de jeter un œil à notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur de jeux dédié en tant que service. Cela offre plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée et l’accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !