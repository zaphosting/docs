---
id: vserver-linux-conan
title: "VPS : Installation d’un serveur dédié Conan Exiles sous Linux"
description: "Découvrez comment installer et lancer un serveur dédié Conan Exiles sur votre VPS Linux avec SteamCMD et la compatibilité Wine → En savoir plus maintenant"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un VPS Linux et vous voulez installer le service serveur dédié Conan Exiles dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux via SteamCMD. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **interface ZAP GS/TS3** directement sur votre VPS ? Ça vous permet de configurer vos serveurs de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvrez-en plus sur l’[interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Si vous avez besoin d’aide, suivez notre [guide d’accès SSH initial](vserver-linux-ssh.md).

Vous devrez aussi faire une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Utilisez notre [guide d’installation SteamCMD Linux](vserver-linux-steamcmd.md) et assurez-vous que SteamCMD est bien configuré avant de continuer.

:::info Couche de compatibilité Wine
Conan Exiles ne propose pas encore de build serveur natif Linux, ce qui implique une étape supplémentaire pour faire tourner la version Windows du serveur sur Linux.

Vous devez faire une installation unique de la couche de compatibilité **Wine** si c’est la première fois que vous l’utilisez sur votre serveur Linux. Suivez notre guide rapide [Installation de la couche de compatibilité Wine](vserver-linux-wine.md) avant de continuer.
:::

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`. En utilisant le paramètre `+@sSteamCmdForcePlatformType windows`, vous forcez l’installation des binaires Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Soyez patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

## Configuration

À ce stade, votre serveur Conan Exiles est installé. Vous pouvez configurer davantage votre serveur via un fichier de configuration situé dans le dossier du serveur.

Vous pourrez modifier tous les paramètres en éditant le fichier **WindowsServerEngine.ini** qui se trouve ici :
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Pour ajouter des options de configuration, il suffit d’ajouter les paramètres spécifiques. Par exemple, pour définir un nom de serveur, un mot de passe et un mot de passe admin, ajoutez ceci dans le fichier :
```
[OnlineSubsystem]
ServerName=[votre_nom_serveur]
ServerPassword=[votre_mot_de_passe]

[ServerSettings]
AdminPassword=[votre_mot_de_passe_admin]
```

On vous conseille de jeter un œil au [Wiki Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) pour une liste complète des options disponibles.

## Démarrage & connexion à votre serveur

Il est temps de lancer votre serveur. Allez dans le dossier principal du jeu et lancez l’exécutable **ConanSandboxServer.exe** avec la commande ci-dessous. N’oubliez pas d’utiliser **xvfb-run** et **wine64** pour le faire tourner via la couche de compatibilité Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Vous devriez voir plein de logs s’afficher dans votre terminal, signe que le serveur démarre. Vous pourrez vous connecter directement en cherchant le serveur dans la liste ou en vous connectant directement via : `[votre_adresse_ip]:7777`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès votre serveur Conan Exiles sur votre VPS ! En suite, on vous recommande de consulter notre [guide de création de service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur dédié de jeux en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus !

Si vous avez d’autres questions ou soucis, n’hésitez pas à contacter notre support, dispo tous les jours pour vous aider !

<InlineVoucher />