---
id: dedicated-linux-foundry
title: "Serveur dédié : Installation du serveur Foundry dédié sous Linux"
description: "Découvrez comment installer le serveur Foundry dédié sur votre serveur Linux pour une gestion et une location de serveurs de jeux sans accroc → En savoir plus maintenant"
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un serveur dédié Linux et vous souhaitez installer le service serveur Foundry dédié dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux via SteamCMD. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre serveur dédié ? Ça vous permet de configurer vos services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvrez-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre serveur dédié via SSH. Si vous avez besoin d’aide, suivez notre [guide d’accès initial SSH](dedicated-linux-ssh.md).

Vous devrez aussi faire une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Utilisez notre [guide d’installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assurez-vous que SteamCMD est bien configuré avant de continuer.

:::info Wine Compatibility Layer
Foundry ne propose pas encore de build serveur natif Linux, donc il faut une étape supplémentaire pour faire tourner la version Windows sur Linux.

Vous devez faire une installation unique de la couche de compatibilité **Wine** si c’est la première fois que vous l’utilisez sur votre serveur Linux. Suivez notre guide rapide [Installation de la couche de compatibilité Wine](dedicated-linux-wine.md) avant de continuer.
:::

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et allez dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`. Le paramètre `+@sSteamCmdForcePlatformType windows` force l’installation des binaires Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Patientez pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

## Configuration

À ce stade, votre serveur Foundry est installé. Vous pouvez configurer davantage votre serveur via un fichier de config situé dans le dossier du serveur.

Vous pouvez modifier tous les paramètres en éditant le fichier **app.cfg** dans le répertoire racine.
```
nano /home/steam/Foundry-Server/app.cfg
```

Consultez notre guide de [Configuration du serveur Foundry](foundry-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à votre serveur

Il est temps de lancer votre serveur. Rendez-vous dans le dossier principal du jeu et lancez l’exécutable **FoundryDedicatedServerLauncher.exe** avec la commande ci-dessous. N’oubliez pas d’utiliser **xvfb-run** et **wine** pour le faire tourner via la couche de compatibilité Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Vous devriez voir apparaître des logs dans votre terminal, signe que le démarrage s’est bien passé. Si tout se passe comme prévu, votre serveur sera visible dans la liste des serveurs. Sinon, vous pouvez vous connecter directement en cherchant dans la barre de recherche en bas de la liste : `[votre_adresse_ip]:3724`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur Foundry sur votre serveur dédié ! En suite, on vous conseille de jeter un œil à notre guide [Créer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur de jeux dédié en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou soucis, contactez notre support, dispo tous les jours pour vous aider !

<InlineVoucher />