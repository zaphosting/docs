---
id: dedicated-linux-tf2
title: "Serveur dédié : Configuration d’un serveur dédié Team Fortress 2 sous Linux"
description: "Découvrez comment configurer rapidement et efficacement un serveur dédié Team Fortress 2 sur votre VPS Linux → En savoir plus maintenant"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Linux et vous souhaitez installer le service serveur dédié Team Fortress 2 dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur Linux en utilisant SteamCMD. Nous utiliserons Ubuntu dans les exemples, mais le processus est très similaire pour d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre VPS, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ? Découvrez-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::



## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Utilisez notre guide [Accès SSH initial](dedicated-linux-ssh.md) si vous avez besoin d’aide pour cela. Vous devrez également effectuer une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Veuillez suivre notre guide [Configuration SteamCMD Linux](dedicated-linux-steamcmd.md) et assurez-vous que SteamCMD est entièrement configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire racine `home/steam` de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, vous pouvez lancer l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

Soyez patient pendant le téléchargement, cela peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour vous confirmer que tout s’est bien passé.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur Team Fortress 2. Vous pouvez effectuer des réglages supplémentaires en modifiant directement le fichier de lancement.

Rendez-vous dans votre répertoire racine. À l’intérieur, naviguez vers le dossier cfg et ouvrez le fichier `server.cfg`. Vous pourrez y modifier les options du serveur.
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## Enregistrement du token GSL

Pour que d’autres joueurs puissent rejoindre votre serveur, vous devez générer et inclure un Game Server Login Token (GSLT). Ce token authentifie votre serveur auprès de Steam. Pour générer un GSLT, rendez-vous sur http://steamcommunity.com/dev/managegameservers et créez un token en utilisant l’ID de jeu 232250, qui correspond à Team Fortress 2.

Une fois que vous avez le token, incluez-le dans les paramètres de lancement de votre serveur avec `+sv_setsteamaccount <TOKEN>`.

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le répertoire principal du jeu et exécutez la commande de lancement suivante :
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Vous devriez voir apparaître des logs dans votre terminal, ce qui indique que le démarrage a réussi. Notez que le premier démarrage peut prendre un peu de temps le temps que tout se mette en place. Sinon, vous pourrez vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[votre_adresse_ip]:2456`.


## Conclusion

Félicitations, vous avez installé et configuré avec succès votre serveur Team Fortress 2 sur votre VPS ! En prochaine étape, nous vous recommandons de consulter notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur dédié de jeux en tant que service. Cela offre plusieurs avantages, comme le lancement automatique du serveur au démarrage, les mises à jour automatiques, une gestion simplifiée et l’accès aux logs, et bien plus encore !

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂