---
id: dedicated-linux-ragemp
title: "Serveur dédié : Configuration du serveur dédié RageMP sous Linux"
description: "Découvrez comment configurer un serveur dédié RageMP sur votre serveur Linux pour une location de serveurs fluide et une gestion facile → En savoir plus maintenant"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un serveur dédié Linux et vous souhaitez installer le service serveur dédié RageMP dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux. On utilisera Ubuntu dans les exemples, mais le processus est très similaire pour d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre serveur dédié, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ? Découvrez-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connectez-vous à votre serveur dédié via SSH. Utilisez notre guide [Accès SSH initial](dedicated-linux-ssh.md) si vous avez besoin d’aide.

### Création d’utilisateur

On vous recommande vivement de créer un utilisateur séparé pour faire tourner tous vos services de serveur de jeux dédiés. Utiliser l’utilisateur root, comme souvent, n’est pas conseillé pour plusieurs raisons. Si vous avez déjà un utilisateur prêt, passez directement aux étapes d’installation.

Utilisez la commande suivante pour créer un utilisateur nommé `gameservers` avec un mot de passe optionnel de votre choix.

```
sudo useradd -m gameservers
sudo passwd gameservers # Mot de passe optionnel
```

Une fois connecté à votre serveur et avec un utilisateur prêt, continuez avec les étapes d’installation.

## Installation

Commencez par vous connecter en tant qu’utilisateur `gameservers` et rendez-vous dans le répertoire home de cet utilisateur pour garder tout organisé.
```
sudo -u gameservers -s
cd ~
```

Pour rester organisé, créez un nouveau dossier pour votre serveur RageMP et ouvrez-le.
```
mkdir RageMP-Server && cd RageMP-Server
```

Maintenant, téléchargez la dernière version disponible sur le site de RageMP. Utilisez la commande suivante pour la télécharger directement.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Cela téléchargera le fichier `.tar.gz` à l’emplacement courant, qui devrait être dans votre nouveau dossier `RageMP-Server`. Décompressez-le avec la commande suivante.
```
tar -xvzf linux_x64.tar.gz
```

Vos fichiers seront maintenant accessibles dans le dossier **ragemp-srv**, accédez-y avec `cd ragemp-srv`. Utilisez `ls` pour voir le contenu du dossier à tout moment. Le serveur est prêt, passez à la section suivante pour configurer les paramètres.

## Configuration

À ce stade, la configuration de votre serveur RageMP est terminée. Vous pouvez effectuer des réglages supplémentaires via un fichier de configuration situé dans le répertoire de votre serveur.

:::tip
Il se peut que vous deviez lancer le serveur au moins une fois avant que les fichiers de configuration soient créés. Vous pouvez le faire en lançant le fichier shell : `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Ensuite, appuyez sur `CTRL+C` pour arrêter le serveur.
:::

Vous pouvez modifier les paramètres principaux en éditant le fichier de configuration **conf.json**.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le répertoire principal du jeu et lancez le fichier shell **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Vous devriez voir apparaître des logs dans votre terminal, y compris des logs réseau, ce qui signifie que le démarrage a réussi. Si tout se passe comme prévu, votre serveur sera accessible via connexion directe et visible dans la liste des serveurs. Sinon, vous pourrez vous connecter directement via : `[votre_adresse_ip]:22005`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur RageMP sur votre serveur dédié ! En suivant, on vous recommande de jeter un œil à notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment transformer votre nouveau serveur de jeux dédié en service. Cela apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !