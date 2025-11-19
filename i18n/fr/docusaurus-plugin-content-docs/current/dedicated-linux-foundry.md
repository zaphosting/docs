---
id: dedicated-linux-foundry
title: "Serveur dédié : Installation du serveur Foundry dédié sous Linux"
description: "Découvrez comment installer le serveur Foundry dédié sur votre serveur Linux pour une location de serveurs fluide et une gestion simplifiée → En savoir plus maintenant"
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un serveur dédié Linux et vous souhaitez installer le service serveur Foundry dédié dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux via SteamCMD. On utilise Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre serveur dédié, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en quelques clics seulement ? Découvrez-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connectez-vous à votre serveur dédié via SSH. Utilisez notre guide [Accès SSH initial](dedicated-linux-ssh.md) si vous avez besoin d’aide.

Vous devrez aussi effectuer une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Suivez notre guide [Installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assurez-vous que SteamCMD est bien configuré avant de continuer.

:::info Couches de compatibilité Wine
Foundry ne propose pas encore de build serveur natif Linux, ce qui implique une étape supplémentaire pour faire tourner la version Windows du serveur sur Linux.

Vous devez faire une installation unique de la couche de compatibilité **Wine** si c’est la première fois que vous l’utilisez sur votre serveur Linux. Suivez notre guide rapide [Installation de la couche de compatibilité Wine](dedicated-linux-wine.md) avant de continuer.
:::

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`. En utilisant le paramètre `+@sSteamCmdForcePlatformType windows`, vous forcez l’installation des binaires Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Soyez patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès confirmera la bonne installation.

## Configuration

À ce stade, l’installation de votre serveur Foundry est terminée. Vous pouvez configurer davantage votre serveur via un fichier de configuration situé dans le dossier du serveur.

Vous pourrez modifier tous les paramètres en accédant et en éditant le fichier de configuration **app.cfg** dans le répertoire racine.
```
nano /home/steam/Foundry-Server/app.cfg
```

Consultez notre guide Foundry [Configuration du serveur](foundry-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Rendez-vous dans le dossier principal du jeu et lancez l’exécutable **FoundryDedicatedServerLauncher.exe** avec la commande ci-dessous. N’oubliez pas d’ajouter les commandes **xvfb-run** et **wine** pour le faire tourner via la couche de compatibilité Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Vous devriez voir apparaître des logs dans votre terminal, ce qui signifie que le démarrage a réussi. Si tout se passe bien, votre serveur sera visible dans la liste des serveurs. Sinon, vous pouvez vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs avec : `[votre_adresse_ip]:3724`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur Foundry sur votre serveur dédié ! En suite, on vous conseille de jeter un œil à notre guide [Créer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur de jeux dédié en tant que service. Cela apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si vous avez des questions ou des soucis, n’hésitez pas à contacter notre support, dispo tous les jours pour vous aider !