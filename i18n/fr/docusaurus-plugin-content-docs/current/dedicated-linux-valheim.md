---
id: dedicated-linux-valheim
title: "Serveur dédié : Installation du serveur dédié Valheim sous Linux"
description: "Découvrez comment configurer un serveur dédié Valheim sous Linux pour héberger votre serveur de jeux efficacement et optimiser ses performances → En savoir plus maintenant"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un serveur dédié Linux et vous souhaitez installer le service serveur dédié Valheim dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur Linux en utilisant SteamCMD. Nous utiliserons Ubuntu dans les exemples, mais le processus est très similaire pour d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **interface ZAP GS/TS3** directement sur votre serveur dédié, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvrez-en plus sur l’[interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connectez-vous à votre serveur dédié via SSH. Utilisez notre guide [Accès SSH initial](dedicated-linux-ssh.md) si vous avez besoin d’aide pour cela.

Vous devrez également effectuer une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Veuillez suivre notre guide [Installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assurez-vous que SteamCMD est entièrement configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire racine `home/steam` pour garder tout organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, vous pouvez lancer l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Soyez patient pendant le téléchargement, cela peut prendre un certain temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour vous confirmer la bonne installation.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur Valheim. Vous pouvez effectuer des réglages supplémentaires en modifiant directement le fichier de lancement.

Rendez-vous dans votre répertoire racine et ouvrez le fichier `.sh`. Vous pouvez modifier les paramètres ici.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le répertoire principal du jeu et lancez le script shell **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

Vous devriez voir apparaître des logs dans votre terminal, ce qui indique que le démarrage a réussi. Notez que le premier démarrage peut prendre un peu de temps le temps que tout se mette en place. Sinon, vous pouvez vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[votre_adresse_ip]:2456`.

:::info
Si vous ne pouvez pas vous connecter et que vous recevez des erreurs `PlayFab` dans la console, vous devrez peut-être désactiver le support crossplay pour résoudre ce problème, qui est un souci actuel de la version Linux. Pour cela, lancez `nano /home/steam/Valheim-Server/start_server.sh` et supprimez le flag `-crossplay`.

Si vous avez besoin du crossplay, une autre solution est d’installer la version Windows et d’utiliser **Wine** comme couche de compatibilité. Utilisez notre guide rapide [Installation de la couche de compatibilité Wine](dedicated-linux-wine.md) pour configurer cela. Une fois prêt, vous pouvez installer la version Windows du serveur Valheim via SteamCMD avec :
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Une fois installé, lancez la version Windows via Wine avec la commande suivante : `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur Valheim sur votre serveur dédié ! En prochaine étape, nous vous recommandons de consulter notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur de jeux dédié en tant que service. Cela offre plusieurs avantages comme le lancement automatique du serveur au démarrage, les mises à jour automatiques, une gestion simplifiée et l’accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !