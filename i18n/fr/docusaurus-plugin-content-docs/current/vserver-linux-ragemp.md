---
id: vserver-linux-ragemp
title: "VPS : Configuration d’un serveur dédié RageMP sous Linux"
description: "Découvrez comment configurer un serveur dédié RageMP sur votre VPS Linux pour un gaming multijoueur fluide → En savoir plus maintenant"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Linux et vous voulez installer le service serveur dédié RageMP dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux. On utilisera Ubuntu pour les exemples, mais le processus est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **interface ZAP GS/TS3** directement sur votre VPS, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ? Découvrez-en plus sur l’[interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Utilisez notre guide [Accès SSH initial](vserver-linux-ssh.md) si vous avez besoin d’aide.

### Création d’utilisateur

On recommande vivement de créer un utilisateur séparé pour faire tourner tous vos services de serveur dédié de jeux. Utiliser l’utilisateur root, comme souvent, n’est pas conseillé pour plusieurs raisons. Si vous avez déjà un utilisateur prêt, passez directement aux étapes d’installation.

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

Cela téléchargera le fichier `.zip` à l’emplacement courant, qui devrait être dans votre nouveau dossier `RageMP-Server`. Décompressez-le avec la commande suivante.
```
tar -xvzf linux_x64.tar.gz
```

Vos fichiers sont maintenant accessibles dans le dossier **ragemp-srv**, accédez-y avec `cd ragemp-srv`. Utilisez `ls` pour voir le contenu du dossier à tout moment. Le serveur est prêt, passez à la section suivante pour configurer les paramètres.

## Configuration

À ce stade, vous avez fini la configuration de base de votre serveur RageMP. Vous pouvez faire des réglages supplémentaires via un fichier de configuration situé dans le répertoire de votre serveur.

:::tip
Il se peut que vous deviez lancer le serveur au moins une fois avant que les fichiers de configuration soient créés. Vous pouvez le faire en lançant le fichier shell : `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Ensuite, faites `CTRL+C` pour fermer le serveur.
:::

Vous pouvez modifier les paramètres principaux en éditant le fichier de configuration **conf.json**.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Démarrage & connexion à votre serveur

Il est temps de démarrer votre serveur. Rendez-vous dans le répertoire principal du jeu et lancez le fichier shell **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Vous devriez voir apparaître des logs dans votre terminal, y compris des logs réseau, ce qui signifie que le démarrage a réussi. Si tout se passe comme prévu, votre serveur sera accessible via connexion directe et visible dans la liste des serveurs. Sinon, vous pouvez vous connecter directement via : `[votre_adresse_ip]:22005`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur RageMP sur votre VPS ! En suite, on vous recommande de jeter un œil à notre guide [Configurer un service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur dédié de jeux en tant que service. Cela offre plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée et l’accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />